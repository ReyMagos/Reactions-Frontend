const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        index: "./src/index.tsx",
    },
    devtool: 'inline-source-map',
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
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    name: "common",
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    chunks: "all",
                }
            }
        }
    }
};