const path = require("path");
const src = path.resolve(__dirname, "src");

module.exports = {
    mode: "development",
    entry: {
        index: `./${src}/index.js`,
        account: `./${src}/account/index.js`,

    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        splitChunks: {

        },
        runtimeChunk: "single",
    }
}; //