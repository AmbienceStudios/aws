
import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';





let scene;
let camera;
let renderer;
let house;
let model_container = document.querySelector('.webgl');
const canvasSize = document.querySelector('.canvas-element');



const init = () => {
    // scene setup
    scene = new THREE.Scene();

    //camera setup
    const fov = 10;
    const aspect = canvasSize.offsetWidth / canvasSize.offsetHeight;
    const near = 0.1;
    const far = 1000;

    camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(4, 4, 100);
    camera.lookAt(scene.position);
    scene.add(camera);

    //renderer setup
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: model_container
    });
    renderer.setSize(canvasSize.offsetWidth, canvasSize.offsetHeight);
    renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
    // renderer.autoClear = false;
    renderer.setClearColor(0x111111);


    // orbitcontrol setup
    const controls = new OrbitControls(camera, renderer.domElement);

    // ambient light setup
    const amibientLight = new THREE.AmbientLight(0x404040, 10);
    scene.add(amibientLight);

    // direction lights setup
    const spotLight1 = new THREE.SpotLight(0xffffff, 10);
    spotLight1.position.set(6, 11, 6);
    spotLight1.castShadow = true;
    const spotLightHelper1 = new THREE.SpotLightHelper(spotLight1, 1, 0x00ff00);
    scene.add(spotLight1);

    // orenge light setup
    const spotLight2 = new THREE.SpotLight(0xf57d22, 2);
    spotLight2.position.set(-10, 0, 12);
    spotLight2.castShadow = true;
    const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2, 2, 0x00ff00);
    scene.add(spotLight2);

    // back light setup
    const spotLight3 = new THREE.SpotLight(0xff0000, 2);
    spotLight3.position.set(-10, 18, -17);
    spotLight3.castShadow = true;
    const spotLightHelper3 = new THREE.SpotLightHelper(spotLight3, 2, 0xff0000);
    scene.add(spotLight3);


    // loding gltf 3d model
    const loader = new GLTFLoader();
    loader.load('./boxerWeb.glb', (gltf) => {
        house = gltf.scene;
        house.scale.set(15, 15,15)
        house.position.set(0, -5, 5)
        // house.rotation.x = Math.PI / -3
        scene.add(gltf.scene);
    });

    // console.log(house);

    animate();
}

// redering scene and camera
const render = () => {
    renderer.render(scene, camera);
}

// animation recursive function
let step = 0
const animate = () => {
    requestAnimationFrame(animate);
    step += 0.02;
    // house.position.x =  2*Math.abs(Math.sin(step));
    // console.log(2*Math.abs(Math.sin(step)))
    house.rotation.y = Math.sin(step)*(Math.abs(Math.cos(step / 3) / 4));

    render();
}

console.log(Math.sin(10));

// making responsive
const windowResize = () => {
    camera.aspect = canvasSize.offsetWidth / canvasSize.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasSize.offsetWidth, canvasSize.offsetHeight);
    render();
}

window.addEventListener('resize', windowResize, false);
window.onload = init;