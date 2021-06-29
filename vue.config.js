module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    publicPath: './',
    devServer: {
        host: 'localhost',
        port: '3000',
        open: true,
        hotOnly: true
    },
    chainWebpack: config => {
        config.plugin('html').tap(options => {
            options[0].title = 'Vue组件通信'
            return options
        })
    },
}