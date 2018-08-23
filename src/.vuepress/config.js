module.exports = {
    title: 'のみろぐ',
    description: 'Just playing around',
    base: '/vuejs_nomi/',
    dest: 'docs',
    head: [
        ['link',
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }
        ],
        ['link',
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }
        ]
    ],
    markdown: {
        anchor: { permalink: false },
        config: md => {
          md.use(require("markdown-it-katex"))
          md.options.linkify = true
        }
    },
    themeConfig: {
        search: false,
        nav: [
            { text: 'HOME', link: '/' },
            { text: 'ABOUT', link: '/about.html' },
            { text: 'BLOG', items: [
                { text: 'blog', link: '/blog.html' },
                { text: 'article', link: '/blog/article.html' },
                { text: 'plan', link: '/blog/plan.html' },
                { text: '400精進-1', link: '/blog/400精進-1.html' },
                { text: 'csa_86', link: '/blog/csa_86.html' },
                { text: 'nomi', link: '/blog/nomi.html' }
            ] },
            { text: 'WORKS', link: '/works.html' }
        ]
    }
}