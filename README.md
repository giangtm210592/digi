## digi
### init
git config --global user.name "giangtm210592"

git config --global user.email "giangtm210592@gmail.com"

npx create-nx-workspace@latest digi --cli=angular --preset=angular --appName=digichi --linter=eslint

cd digi

git remote add origin https://github.com/giangtm210592/digi.git

git push -u origin main
