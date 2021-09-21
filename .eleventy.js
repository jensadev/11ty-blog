const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("src/css");
    // eleventyConfig.addWatchTarget("src/css");

    eleventyConfig.addPlugin(syntaxHighlight);
    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addWatchTarget("src/scss");

    return {
        dir: {
            input: 'src'
        },
        passthroughFileCopy: true
    };
};
