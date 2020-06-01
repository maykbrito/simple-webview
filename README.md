# :rocket: RocketBrowser Always on Top

<a href="https://github.com/JohnAzedo/RocketBrowser/blob/master/LICENSE">
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen.svg">
</a>

WebView that is always on top. Just type your link and click in search.

You can use it whenever you want to see a page always on the screen regardless of where to click or which program to open.

![gif](https://user-images.githubusercontent.com/19677206/83300760-fa20a600-a1ce-11ea-9100-035f1ab3f9e2.gif)

### Shortcuts

Shortcuts | Description
---------|---------
Cmd+J or Ctrl+J | Show dev tools
Cmd+B or Ctrl+b | Return to home page 

## How to use?
A guide to use this software

### Install and usage

Clone this repository:

````sh
git clone git@github.com:JohnAzedo/RocketBrowser.git
````
This command will install all dependences.
Install npm before do this: 
````sh
npm install
````

Run application with:
````sh
npm start
````



### SASS compile command

If you change something in SASS files, run this command: 
```sh
sass --sourcemap=none --no-cache app/assets/sass/*.sass:app/assets/css/*.css
```
## Project structure
````sh
.
├── LICENSE
├── README.md
├── app
│   ├── assets
│   │   ├── css
│   │   │   └── home.css
│   │   └── sass
│   │       └── home.sass
│   ├── controllers
│   │   └── home.js
│   └── home.html
├── app.js
├── config
│   └── settings.js
├── package-lock.json
└── package.json

6 directories, 10 files
````

## Authors
- [@johnazedo](https://github.com/JohnAzedo)

- [@maykbrito](https://github.com/maykbrito)