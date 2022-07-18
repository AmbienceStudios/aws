const path = require('path');

module.exports = {
  //...
  resolve: {
    fallback: {
        assert: require.resolve('assert'),
        buffer: require.resolve('buffer'),
        console: require.resolve('console-browserify'),
        http: require.resolve("stream-http"),
        path: require.resolve("path-browserify"),
        zlib: require.resolve("browserify-zlib"),
        querystring: require.resolve("querystring-es3"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        url: require.resolve("url/"),
        util: require.resolve("util/"),
    }
  },
};