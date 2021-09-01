
const proyectos = [
    "ImpactaLatam",
    "Servicios Públicos",
    "LabMunicipal"
];


module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk");

    eleventyConfig.addPassthroughCopy('assets');
    eleventyConfig.addPassthroughCopy('features');
    
    proyectos.forEach((proyecto) => {
        eleventyConfig.addCollection(proyecto, function (collectionApi) {

            let collection = collectionApi.getFilteredByTags('proyectos').filter(function (item) {
                return item.data.proyectos.Proyecto === proyecto;
            });

            return collection;
        });
    });

    /*eleventyConfig.addCollection("proyectos", function(collectionApi) {
        return collectionApi.getFilteredByTag('proyectos');
    });*/

    eleventyConfig.addCollection("monitoreos", function(collectionApi) {
        return collectionApi.getFilteredByTag('monitoreos');
    });

    eleventyConfig.addCollection("finan", function(collectionApi) {
        return collectionApi.getFilteredByTag('finan');
    });

}

