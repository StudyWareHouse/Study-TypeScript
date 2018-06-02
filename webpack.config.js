const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require("webpack-dashboard/plugin");
const nodeEnv = process.env.NODE_ENV || "development";
const isProd = nodeEnv === "production";

var config = {
    devtool: isProd ? "hidden-source-map" : "source-map",
    context: path.resolve("./src"),
    entry: {
        app: "./index.ts",
        vendor: "./vendor.ts"
    },
    output: {
        path: path.resolve("./dist"),
        filename: "[name].bundle.js",
        sourceMapFilename: "[name].bundle.map",
        devtoolModuleFilenameTemplate: function (info) {
            return "file:///" + info.absoluteResourcePath;
        }
    },
    module: {
        rules: [
            {
                enforce: "pre",
                test: /\.(tsx?)|(js)$/,
                exclude: ["node_modules"],
                use: ["babel-loader", "awesome-typescript-loader", "source-map-loader"]
            },
            { test: /\.html$/, loader: "html-loader" },
            { test: /\.css$/, loaders: ["style-loader", "css-loader"] }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx",".js", "json"]
    },
    plugins: [

    ],
    devServer: {
        contentBase: path.join(__dirname, "src/"),
        compress: true,
        port: 9090,
        hot: true
    }
};

module.exports = config;