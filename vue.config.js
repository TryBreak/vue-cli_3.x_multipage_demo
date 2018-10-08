module.exports = {
    pages: {
        help: {
            // page 的入口
            entry: 'src/pages/help/main.js',
            // 模板来源 , 这里可自行修改模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'help.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Help Page',
        },
        book: {
            // page 的入口
            entry: 'src/pages/book/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'book.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: 'Book Page',
        },
    },
    devServer: {
        port: 8888,
        host: 'localhost',
        open: true,
        historyApiFallback: {
            rewrites: [{
                from: /^\/help/,
                to: '/help.html'
            },{
                from: /^\/book/,
                to: '/book.html'
            },]
        },
        
    },
}