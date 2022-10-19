## digi
### init
git config --global user.name "giangtm210592"

git config --global user.email "giangtm210592@gmail.com"

npx create-nx-workspace@latest digi --cli=angular --preset=angular --appName=digichi --linter=eslint

cd digi

git remote add origin https://github.com/giangtm210592/digi.git

git push -u origin main

### git hooks
npm i -D lint-staged husky

npm pkg set scripts.prepare="husky install"

npm run prepare

npx husky add .husky/pre-commit "npx lint-staged"

git add .husky/pre-commit

add lint-staged script to package.json
