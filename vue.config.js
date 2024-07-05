module.export = {
    devServer: {
        port: 6666
    },
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: '[name].[hash].[ext]',
                                outputPath: 'assets/images',
                                publicPath: '/assets/images',
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
    },
};