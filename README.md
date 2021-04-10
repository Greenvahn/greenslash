

<p align="center"><img alt="logo" width="30%" height="20%" src="https://github.com/Greenvahn/greenslash/blob/master/src/assets/Web%201920%20%E2%80%93%2046.png?raw=true"></p>

<h1 align="center">greenslash.dev</h1>

<h3 align="center" style="margin-bottom:20px">
The first version of <a href="greenslash.dev" _target="blank">greenslash.dev</a> built with <a href="https://v3.vuejs.org/" _target="blank">Vue3</a> and hosted with <a href="https://firebase.google.com/" _target="blank"> firebase </a></h3>
<p align="center">
  <a href="https://img.shields.io/github/workflow/status/Greenvahn/greenslash/Deploy" target="_blank">
    <img alt="build" src="https://img.shields.io/github/workflow/status/Greenvahn/greenslash/Deploy%20to%20Firebase%20Hosting%20on%20merge">
  </a>
</p>

<p align="center"><img alt="demo" src="https://github.com/Greenvahn/greenslash/blob/master/demo.png?raw=true"></p>
<br><br>
<h2> A personal portfolio site </h2>
<p>I like to keep my projects as open source but as you probably know all these projects takes a huge part of my free time. I'm more than glad for sharing things but if you're thinking about to fork this repository to use it in one of your projects, please, **attach an attribution** - it's free, it does not take you any effort and is the best way of buliding a great community!</p>

### TL;DR
You can fork/use this repo for your projects. Please attribute some credit by linking to [greenslash.dev](https://greenslash.dev) or just mentioning [this repository](https://github.com/Greenvahn/greenslash). Thanks!

<br>

## 📌 - Getting ready
This project uses:
* [Vue](https://v3.vuejs.org/)
* [Node.js](https://nodejs.org/en/download/)
* [Yarn](https://classic.yarnpkg.com/en/) or [NPM](https://www.npmjs.com/)
* [Tailwindcss](https://tailwindcss.com/)
* [Vue I18n](https://vue-i18n.intlify.dev/)

## 🔧- Setup
Using yarn as example but you can use npm.

1 - Install dependecies
```
$ yarn install
```
2 - Start development server
```
$ yarn start
```

## 🏗️ - Build for production

Creates static build for production.
```
$ yarn build
```

## 🛰️- Deployment to Firebase ( optional )

NOTE: You will need an account on firebase ( it's free to create one ).

1 - Initialize firebase project
```
$ firebase init
```
- Select to create a project or use an existing project
- Type in the public directory to be “build”
- Allow to rewrite all URLs to index.html

2 - Deployment
```
$ yarn deploy
```

## Other scripts available
Once the project has been installed, the following scripts to use:

**lint** - analize/formats source code
```
$ yarn lint
```
<br><br>

## Vue CLI - configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## License
You can check out the full license [here](https://github.com/Greenvahn/greenslash/blob/master/LICENSE).

This project is licensed under the terms of the **MIT** license.
