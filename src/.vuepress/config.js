const fs = require('fs')
console.log(1111)
//ファイル一覧取得関数
function readdir(dir) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            throw err
        }

        //ここに処理
        console.log(files)
        return files
    })
}

//使い方
// console.log(blog)

const path = require('path')
const blogpath = path.resolve(__dirname, '../blog')
console.log(blogpath)
console.log(readdir(blogpath)) // たぶん、ここで実行する前に、console.log(null)を吐き出して、それからreaddirを実行しているんだと思う。同期非同期を理解せねば
console.log(2222)


module.exports = {
    title: 'のみろぐ',
    description: 'Just playing around',
    base: '/vuejs_nomi/',
    dest: 'docs',
    head: [
        ['link',
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'
            }
        ],
        ['link',
            {
                rel: 'stylesheet',
                href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
            }
        ]
    ],
    markdown: {
        anchor: {
            permalink: false
        },
        config: md => {
            md.use(require("markdown-it-katex"))
            md.options.linkify = true
        }
    },
    themeConfig: {
        search: false,
        nav: [{
                text: 'HOME',
                link: '/'
            },
            {
                text: 'ABOUT',
                link: '/about.html'
            },
            {
                text: 'BLOG',
                items: [{
                        text: 'blog',
                        link: '/blog.html'
                    },
                    {
                        text: 'article',
                        link: '/blog/article.html'
                    },
                    {
                        text: 'plan',
                        link: '/blog/plan.html'
                    },
                    {
                        text: '400精進-1',
                        link: '/blog/400精進-1.html'
                    },
                    {
                        text: 'csa_86',
                        link: '/blog/csa_86.html'
                    },
                    {
                        text: 'nomi',
                        link: '/blog/nomi.html'
                    }
                ]
            },
            {
                text: 'WORKS',
                link: '/works.html'
            }
        ]
    }
}