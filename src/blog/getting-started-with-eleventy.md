---
title: Getting started with Eleventy
tags: ["post", "eleventy", "tutorial"]
excerpt: Tutorial for getting started with eleventy
---

Today I've installed and tried [eleventy](https://www.11ty.dev/) for the first time. It's a great tool for building static websites.

# Installation
## WSL and Node
Make sure wsl is installed and you have the latest version of Ubuntu. If the answer is no you can check [this guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10).

Open wsl and install node and npm.
```bash	
sudo apt install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -

sudo apt install nodejs
```

## Use GitHub

Create a new git repository, call it 11ty-blog. Clone the repository to your local machine.
```bash
git clone <repository url>
cd 11ty-blog
```

## Install Eleventy

Once done we need to initialize the project.
```bash
npm init -y
```

Install 11ty
```bash
npm install @11ty/eleventy
```

## Up and running

Edit the package.json start script.
```json
"scripts": {
    "start": "eleventy --serve"
}
```

Create the first index.md to test.
```markdown
# Hello world
```

Add a start script to VS Code and run it to start eleventy.
Watch your glorious SSG 🎉.

# Configuration

## Adding a config file

Create an eleventy config file in the project root, ```.eleventy.js```. The config file is a JavaScript file that contains the configuration for Eleventy.
```js
module.exports = function (eleventyConfig) {
    return {
        dir: {
            input: 'src',
            // output: 'dist'// default is _site
        }
    };
};
```

Your eleventy project will now look for source files in the ```src``` directory and output files in the ```_site``` directory.

### Reminder
Make sure you commit your changes to your repository. Work in a dev branch that you will merge into main when done.
For added spice 🌶 use the gitmoji 😆 extension for your commit messages.

Also remember to add the ```_site``` folder to your gitignore.

## Adding a layout

With the basic config file in place, we can add a layout. A layout is a template that Eleventy uses to render a page. Template files are located in the ```src/_includes``` directory.

Create a new layout file in the ```src/_includes``` directory. Call the file ```base.njk```. This will serve as the base for our pages.

The language of the base file is [Nunjucks](https://mozilla.github.io/nunjucks/).
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ title }}</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <main>
        {{ content | safe }}
    </main>
</body>
</html>
```

## Content

🔥 Remove the old index.md from the project root.
Add a new index.md in the ```src``` directory. This file will serve as the index for our site.

This file will utilize something called front-matter for metadata.

```markdown
---
layout: base.njk
title: My awesome blog
---

Eleventy rocks!
```

Your site should now be up and running, and render!

# Next steps

## Adding CSS

We can have eleventy copy and watch files for us, this can be useful for things like css and js.
Add the following to ```.eleventy.js```.

```js
eleventyConfig.addPassthroughCopy("src/css");
eleventyConfig.addWatchTarget("src/css");
```

Eleventy will now copy the css files to the _site directory and watch them for changes.

### Actual CSS
Some basic CSS to center things.

```css
body {
    display: flex;
    justify-content: center;
}

main {
    width: 100%;
    max-width: 48rem;
    padding-left: 1rem;
    padding-right: 1rem;
}
```

Now this document is getting a bit too long, but we'll push on. First you should commit your changes, then give yourself a clap 👏, well done.

## Blog

To add a blog post, create a new file in the ```src/blog``` directory. This file will display a list of all our blog posts using eleventy's built in collections.

# Hosting

We will use [Netlify](https://www.netlify.com/) to host our site.