module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:@typescript-eslint/recommended',
        'standard'
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        'react-hooks',
        '@typescript-eslint'
    ],
    settings: {
        react: {
            createClass: 'createReactClass',
            pragma: 'React',
            fragment: 'Fragment',
            version: 'detect',
            flowVersion: '0.53'
        },
        propWrapperFunctions: [
            'forbidExtraProps',
            { property: 'freeze', object: 'Object' },
            { property: 'myFavoriteWrapper' },
            { property: 'forbidExtraProps', exact: true }
        ],
        componentWrapperFunctions: [
            'observer',
            { property: 'styled' },
            { property: 'observer', object: 'Mobx' },
            { property: 'observer', object: '<pragma>' }
        ],
        formComponents: [
            'CustomForm',
            { name: 'Form', formAttribute: 'endpoint' }
        ],
        linkComponents: [
            'Hyperlink',
            { name: 'Link', linkAttribute: 'to' }
        ]
    },
    rules: {
        camelcase: 'off',
        curly: ['warn', 'multi-or-nest'],
        indent: ['warn', 4, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],
        semi: ['error', 'always'],
        'jsx-quotes': ['error', 'prefer-double'],
        'key-spacing': ['warn', { mode: 'minimum' }],
        'keyword-spacing': 'off',
        'multiline-ternary': 'off',
        'no-multi-spaces': 'off',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0, maxBOF: 0 }],
        'no-tabs': ['error', { allowIndentationTabs: true }],
        'no-trailing-spaces': ['warn', { skipBlankLines: true }],
        'no-unused-vars': 'warn',
        'operator-linebreak': ['error', 'after', { overrides: { '&&': 'ignore', '?': 'ignore', ':': 'ignore' } }],
        'template-curly-spacing': ['error', 'always'],
        'react/button-has-type': 'error',
        'react/destructuring-assignment': ['error', 'always'],
        'react/display-name': 'off',
        'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
        'react/jsx-boolean-value': ['error', 'never'],
        'react/jsx-closing-bracket-location': 'error',
        'react/jsx-closing-tag-location': 'error',
        'react/jsx-curly-brace-presence': ['error', 'never'],
        'react/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'consistent' }],
        'react/jsx-handler-names': 'error',
        'react/jsx-max-props-per-line': ['warn', { maximum: 1 }],
        'react/jsx-newline': [1, { prevent: false }],
        'react/jsx-no-useless-fragment': 'error',
        'react/jsx-pascal-case': 'error',
        'react/jsx-tag-spacing': ['error', { beforeSelfClosing: 'always' }],
        'react/no-access-state-in-setstate': 'error',
        'react/no-array-index-key': 'error',
        'react/no-arrow-function-lifecycle': 'error',
        'react/no-multi-comp': 'error',
        'react/no-typos': 'error',
        'react/no-unused-prop-types': 'warn',
        'react/self-closing-comp': ['error', { component: true, html: true }],
        'react/sort-prop-types': ['error', { requiredFirst: true }],
        'react/style-prop-object': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error'
    }
};
