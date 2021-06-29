const prodPlugins = []
if (process.env.NODE_ENV === 'production') {
    // 生产环境去掉console
    prodPlugins.push('transform-remove-console')
}

module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        ...prodPlugins
    ]
}