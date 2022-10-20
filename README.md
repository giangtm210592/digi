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

### init web shell

#### web/shell/feature/web-shell config any forRoot modules

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/shell

web-shell

web-shell -> feature

#### web/shell/ui for layout modules

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/shell/ui

web-layout

nx g @nrwl/angular:component web-layout --changeDetection=OnPush --style=none

web-header

nx g @nrwl/angular:component web-header --changeDetection=OnPush --style=none

web-sidebar

nx g @nrwl/angular:component web-sidebar --changeDetection=OnPush --style=none

web-main-view

nx g @nrwl/angular:component web-main-view --changeDetection=OnPush --style=none

web-footer

nx g @nrwl/angular:component web-footer --changeDetection=OnPush --style=none

## add feature home-page

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/home-page

home-page

home-page -> feature

nx g @nrwl/angular:component home-page --changeDetection=OnPush --style=none
