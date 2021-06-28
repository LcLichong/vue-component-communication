module.exports = {
    productionSourceMap: process.env.NODE_ENV !== 'production',
    publicPath: '/',
    devServer: {
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