module.exports = {
    root: true,
    extends: [
        'airbnb-base', // custom
        '@nuxtjs',
        'plugin:nuxt/recommended',
    ],
    plugins: [
        'vue', // custom
    ],
    env: {
        'browser': true,
        'commonjs': true,
        'es6': true, // custom
    },
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 2017, // custom
    },
    rules: {
        'nuxt/no-cjs-in-config': 'off',
        // custom start
        'vue/html-indent': ['error', 4],
        'vue/html-closing-bracket-newline': ['error', {
            'singleline': 'never',
            'multiline': 'always'
        }],
        'vue/max-attributes-per-line': ['error', {
            'singleline': 1,
            'multiline': {
                'max': 1,
                'allowFirstLine': false,
            },
        }],
        'class-methods-use-this': 'off',
        'key-spacing': ['error', {
            'mode': 'minimum',
            'beforeColon': false,
            'afterColon': true,
        }],
        'no-param-reassign': ['error', {
            'props': false,
        }],
        "no-shadow": ["error", {
            'allow': ['state'],
        }],
        'max-len': ['error', 120, 2, {
            'ignoreUrls': true,
            'ignoreComments': false,
            'ignoreRegExpLiterals': true,
            'ignoreStrings': true,
            'ignoreTemplateLiterals': true,
        }],
        'object-curly-newline': ['error', {
            'consistent': true,
        }],
        'indent': ['error', 4],
        'comma-dangle': ['error', 'always-multiline'],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        // custom end
    },
}
