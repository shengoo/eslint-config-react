module.exports = {
    "parser": "babel-eslint",
    extends: 'airbnb',
    rules: {
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        'react/prop-types': 'off',
        'react/jsx-indent-props': ['error', 4],
        'max-len': ["error", { "code": 150 }],
        "no-use-before-define": ["error", { "functions": false, "classes": true }]
    }
};

