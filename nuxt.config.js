const pkg = require('./package');

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        { src: '~/assets/scss/main.scss', lang: 'scss' },
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-scrollto',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/axios',
        '@nuxtjs/style-resources',
    ],

    /**
     * Style Resources module configuration
     */
    styleResources: {
        scss: [
            'node_modules/sass-mq/mq.scss',
            'assets/scss/settings-tools.scss',
        ]
    },


    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    router: {
        middleware: ['init']
    },

    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                const StyleLintPlugin = require('stylelint-webpack-plugin');

                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
                config.plugins.push(
                    new StyleLintPlugin({
                        configFile: '.stylelintrc',
                        files: [
                            'assets/scss/**/*.*',
                            'components/**/*.vue',
                            'components/**/*.s?(a|c)ss',
                            'pages/**/*.vue',
                            'pages/**/*.s?(a|c)ss',
                            'layouts/**/*.vue',
                            'layouts/**/*.s?(a|c)ss',
                        ],
                    })
                );
            }
        },
    },
};
