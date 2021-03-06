module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:flowtype/recommended'
    ],
    plugins: ['react', 'react-hooks', 'jsx-a11y', 'flowtype'],
    env: {
        jest: true,
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        'class-methods-use-this': 'off',
        'no-param-reassign': 'off',
        'no-alert': 'off',
        'no-unused-vars': 'off',
        'max-len': 'off',
        'object-curly-spacing': ['error', 'never'],
        'prefer-destructuring': 'off',
        'comma-dangle': ['error', 'always-multiline'],
        'no-underscore-dangle': ['error', {allow: ['__NEXT_DATA__']}],
        'no-script-url': 'off',
        'consistent-return': 'off',
        indent: ['error', 4, {SwitchCase: 1, ignoredNodes: ['TemplateLiteral', 'TemplateLiteral *']}],
        semi: 'error',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': ['error', 'first'],
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeSelfClosing: 'never',
            afterOpening: 'never',
            beforeClosing: 'never'
        }],
        'react/display-name': 'off',
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx']}],
        'react/jsx-one-expression-per-line': 'off',
        'react/no-danger': 'off',
        'react/prefer-stateless-function': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/alt-text': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'import/no-unresolved': [2, {caseSensitive: true}],
        'import/prefer-default-export': 'off',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'react/jsx-key': 'error',
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        "react-hooks/rules-of-hooks": 'error',
        "react-hooks/exhaustive-deps": 'off',
        'quotes': ['error', 'single'],
        'global-require': 'off',
        'space-in-brackets': 'off',
        'no-plusplus': 'off',
        'flowtype/delimiter-dangle': ['error', 'always-multiline'],
        'no-use-before-define': 'off',
        'func-names': 'off',
        'radix': ['error', 'as-needed'],
        'arrow-parens': ['error', 'as-needed'],
        'no-trailing-spaces': ['error', {'ignoreComments': true, 'skipBlankLines': true}],
        'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 1}],
        'padded-blocks': 'off',
        'prefer-object-spread': 'off',
    },
    settings: {
        react: {
            createClass: 'createReactClass', // Regex for Component Factory to use,
            // default to "createReactClass"
            pragma: 'React', // Pragma to use, default to "React"
            version: '16.13.0', // React version, default to the latest React stable release
            flowVersion: '0.97' // Flow version
        },
        flowtype: {
            onlyFilesWithFlowAnnotation: true //只在添加flow註釋的文件才做檢查
        }
    },
    globals: {
        window: true,
        document: true,
    }
};
