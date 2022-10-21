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

#### web/core/feature config any forRoot modules and web routes

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/core

core

core -> feature

#### web/core/ui for layout components

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/core/ui

web-layout

nx g @nrwl/angular:component web-layout --changeDetection=OnPush --style=none

web-header

### add features

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/features/landing-page

landing-page

landing-page -> feature

nx g @nrwl/angular:component landing-page --changeDetection=OnPush --style=none

### add app-config for injection token for environment

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/shared

app-config

### add shared data-access

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/shared/data-access

http-api

ng g s http

### add shared services

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/shared/services

auth-service

ng g s auth

### add shared interceptors

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/shared/interceptors

auth-interceptor

ng g interceptor auth

### add shared guards

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/shared/guards

auth-guard

ng g guard auth

### add shared constants

npx nx g @nrwl/angular:lib --simpleModuleName --directory=web/shared

constants
