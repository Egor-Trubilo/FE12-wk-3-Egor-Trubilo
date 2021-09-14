const path = require('path');

// export const entry = './src/index.js';
// export const output = {
//     path: resolve(__dirname, 'build'),
//     filename: '[name].[contenthash].js',
//     clean: true,
// };

module.exports = {
    entry: './src/index.js',
    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].[contenthash].js',
        clean: true,
    },
}