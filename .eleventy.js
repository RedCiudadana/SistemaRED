

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk");

    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('features');

}

