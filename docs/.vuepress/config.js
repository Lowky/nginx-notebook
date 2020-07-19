module.exports = {
    title: 'Nginx-notebooks', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: 'nginx的手册', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
    ['link', { rel: 'icon', href: '/fav.ico' }]
    ],

    themeConfig: {
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
        // 顶部导航栏
        nav:[
             // 单项 text：显示文字，link：指向链接
             // 这里的'/' 指的是 docs文件夹路径
             // [以 '/' 结尾的默认指向该路径下README.md文件]
            { text: '引导', link: '/FAQ/' },  // http://localhost:8080/Wiki1001Pro/FAQ/
            { text: '配置', link: '/Setting/' },
            { text: '实践', link: '/Do/' },
            // 多项，下拉形式
            {
                text: '关于我',
                items: [
                    // link：指向链接也可以是外网链接
                    { text: 'Segmentfault', link: 'https://segmentfault.com/u/xeay123' },
                    { text: 'Weibo', link: 'https://segmentfault.com/u/xeay123' },
                ]
            },
            {
                text: 'GitHub',
                items: [
                    { text: 'GitHub首页', link: 'https://github.com/Mulander-J' },
                    { text: 'Island', link: 'https://mulander-j.github.io/island/code/html/index.html' },
                    { text: 'TimeWaster', link: 'https://mulander-j.github.io/timeWaster/demo/index.html#/' },
                ]
            },
        ],
    },
    sidebar:{
         // 打开FAQ主页链接时生成下面这个菜单
        '/FAQ/':[
            //多级菜单形式
            {
                // 菜单名
                title: '消化堆',
                // 子菜单
                children: [
                    // ['','']=>[路径,标题]
                    // 或者写成 '路径',标题自动识别为该地址的文件中的h1标题
                    // 不以 '/' 结尾的就是指向.md文件             
                    ['/FAQ/DigestionHeap/Digested','消化过'], // '/FAQ/DigestionHeap/Digested.md'文件
                    ['/FAQ/DigestionHeap/Digesting','消化中'],
                    ['/FAQ/DigestionHeap/DigestWill','待消化']
                ]
            },
            {
                title: '输出层',
                children: [
                    ['/FAQ/Console/A001','#A001_VuePress'],
                    ['/FAQ/Console/A002','#A002_插件清单']
                ]
            },
            ['/FAQ/','百科首页'],
            ['/FAQ/Pool/SkillStack','技术栈'],
            ['/FAQ/Pool/Review','归去来']
        ],
         // 打开Thought主页链接时生成下面这个菜单
        '/Thought/':[
            ['/Thought/','随笔首页'],
            {
                title: '游记',
                children: [
                    ['/Thought/Travels/beiPing','北平游记'],
                ]
            },
            {
                title: '年终回顾',
                children: [
                   ['/Thought/YearReview/2018','2018年'],
                   ['/Thought/YearReview/2019','2019年']
                ]
            },
        ],
          // 打开Store主页链接时生成下面这个菜单
        '/Store/': [
            ['','仓库首页'],
            {
                title: '应用',
                children: [
                    ['/Store/Apps/DownDoors', '下载门户'],
                    ['/Store/Apps/OwnTest', '博主测评']
                ]
            },
            {
                title: '电影',
                children: [
                    ['/Store/Films/','收藏级电影']
                ]
            },
            {
                title: '动画',
                children: [
                    ['/Store/Anime/','收藏级动画']
                ]
            },
        ]
    },
 }