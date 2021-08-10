

module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk");

    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('features');
    /*
    instituciones.forEach((institucion) => {
        eleventyConfig.addCollection(institucion, function (collectionApi) {

            let collection = collectionApi.getFilteredByTags('datos').filter(function (item) {
                return item.data.datos.Institucion === institucion;
            });

            return collection;
        });
    });*/

    eleventyConfig.addCollection("proyectos", function(collectionApi) {
        return collectionApi.getFilteredByTag('proyectos');
    });

}

