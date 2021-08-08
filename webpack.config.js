const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist/js/"),
        filename: "bundle.js",
    },
    devtool: 'inline-source-map',
    watch: true,
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                use: 'babel-loader',
                exclude: /(node_modules)/,
            },
        ]
    },
};

