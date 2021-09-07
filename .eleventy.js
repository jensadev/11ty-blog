module.exports = function (eleventyConfig) {
    // eleventyConfig.addPassthroughCopy("src/css");
    // eleventyConfig.addWatchTarget("src/css");

    eleventyConfig.addWatchTarget("src/scss");

    return {
        dir: {
            input: 'src'
        },
        passthroughFileCopy: true
    };
};
