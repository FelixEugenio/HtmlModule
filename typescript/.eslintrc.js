module.exports = {
    env:{
        browser:true,
        es6:true,
        node:true
    },
    parser: '@typescript-eslint/parser', // Especifica o parser do ESLint para TypeScript
    extends: [
      'eslint:recommended', // Usa as regras recomendadas do ESLint
      'plugin:prettier/recommended',
      'plugin:@typescript-eslint/recommended', // Usa as regras recomendadas do @typescript-eslint/eslint-plugin
    ],
    plugins: [
      '@typescript-eslint' // Ativa o plugin @typescript-eslint/eslint-plugin
    ],
    env: {
      browser: true,
      node: true,
      es6: true
    },
    parserOptions: {
      ecmaVersion: 2020, // Permite a análise de sintaxe moderna do ECMAScript
      sourceType: 'module' // Permite o uso de imports
    },
    rules: {
      // Coloque aqui as regras adicionais ou sobrescreva as regras padrões
      
      'no-unused-vars': 'off', // Desativa a regra no-unused-vars do ESLint
      '@typescript-eslint/no-unused-vars': ['error'], // Ativa a versão TypeScript da regra no-unused-vars
    }
  };
  