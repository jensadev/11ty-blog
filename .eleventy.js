const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("src/css");
    // eleventyConfig.addWatchTarget("src/css");

    eleventyConfig.addPlugin(syntaxHighlight);

    eleventyConfig.addWatchTarget("src/scss");

    return {
        dir: {
            input: 'src'
        },
        passthroughFileCopy: true
    };
};
