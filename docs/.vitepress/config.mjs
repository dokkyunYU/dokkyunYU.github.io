import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VVlog",
  description: "something good",
  head: [],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Javascript',
        // items: [
        //   {
        //     text: '기본개념', items: [
        //       { text: 'rr', link: '/자바스크립트/' },
        //       { text: 'rr', link: '/자바스크립트/' },
        //     ],
        //   },
        //   {
        //     text: '기본개념2', items: [
        //       { text: 'rr', link: '/자바스크립트/' },
        //       { text: 'rr', link: '/자바스크립트/' },
        //     ],
        //   },
        // ]
        link: '/자바스크립트/'
      },
      {
        text: 'Algorithm',
        items: [
          { text: 'Programmers', link: "/알고리즘/프로그래머스/" }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Javascript',
          // collapsed: true,
          items: [
            // {
            //   text: '배열',
            //   collapsed: true,
            //   items: [
            //     { text: 'aaaaa', link: '/자바스크립트/generator' },
            //     {
            //       text: 'aaaaa',
            //       collapsed: true,
            //       items: [
            //         { text: "bbbbb", link: '/markdown-example' }
            //       ]
            //     }
            //   ]
            // },
            { text: '목록', link: '/자바스크립트/' },
            // 1
            { text: 'generator', link: '/자바스크립트/generator' },
            // 2
            { text: 'max와min', link: '/자바스크립트/max와min' },
            // 3
            { text: 'new의 사용', link: '/자바스크립트/new의 사용' },
            // 4
            { text: 'padStart padEnd', link: '/자바스크립트/padStart padEnd' },
            // 5
            { text: 'Set의 사용', link: '/자바스크립트/Set의 사용' },
            // 6
            { text: 'startsWith endsWith', link: '/자바스크립트/startsWith endsWith' },
            // 7
            { text: '객체의 요소', link: '/자바스크립트/객체의 요소' },
            // 8
            { text: '널 병합 연산자', link: '/자바스크립트/널 병합 연산자' },
          ]
        },
        {
          text: 'Algorithm',
          items: [
            {
              text: 'Programmers',
              items: [
                { text: "목록", link: '/알고리즘/프로그래머스/' },
                { text: "귤 고르기", link: '/알고리즘/프로그래머스/귤 고르기' },
              ]
            },
          ]
        },
      ],
      // '/guide/': [
      //   {
      //     text: 'JS',
      //     items: [
      //       { text: 'home', link: '/guide/' },
      //       { text: 'aaa', link: '/guide/aaa' }
      //     ]
      //   },
      // ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dokkyunYU' }
    ],

    // footer: {
    //   message: 'Released under the MIT License.',
    //   copyright: 'Copyright © 2019-present Evan You'
    // },

    outline: {
      level: [1, 6]
    },

    docFooter: {
      prev: '이전 페이지',
      next: '다음 페이지'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    siteTitle: 'VVlog',

    search: {
      provider: 'local'
    }
  },
  lastUpdated: true
})
