module.exports = {
  'lint-staged': {
    '{src,test,mocks}/**/*.{js,ts,tsx,json,css,scss,md}': [
      'prettier --config ./.prettierrc --write',
      'git add',
    ],
    '{src,test,mocks}/**/*.{js,ts,tsx}': ['tslint --project ./tsconfig.json --fix', 'git add'],
  },
}
