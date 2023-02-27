module.exports = {
    title: 'GOV Vue3 Components',
    description: 'Repository of common vue3 components that can be imported into department projects.',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ],    
        sidebar: [
            {
                text: 'Components',
                collapsable: false,
                items: [
                    { text: 'Status Panel', link: '/components/StatusPanel.md'},
                ]
            }
        ]
    },
    base: '/gov-vue3-components/'
}