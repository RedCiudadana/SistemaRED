
const proyectos = [
    "ImpactaLatam",
    "Servicios Públicos",
    "LabMunicipal",
    "LabElectoral",
    "Auditoria Social",
    "Monitor Legislativo",
    "Alianza por la Democracia",
    "Partidos Públicos",
    "Semaforo Electoral",
    "CandiDatos",
    "Nuestra Elección",
    "Guatemala Leaks",
    "Mochila Electoral",
    "MancoVerapaz",
    "Índice de Datos Abiertos Justicia 2021",
    "Índice de Datos Abiertos 2021"
];


module.exports = function (eleventyConfig) {

    eleventyConfig.setTemplateFormats("njk");
    eleventyConfig.addPassthroughCopy('src');
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

    eleventyConfig.addCollection("detindicadores", function(collectionApi) {
        return collectionApi.getFilteredByTag('detindicadores');
    });

    eleventyConfig.addCollection("sis", function(collectionApi) {
        return collectionApi.getFilteredByTag('sis');
    });

    eleventyConfig.addCollection("monitoreos", function(collectionApi) {
        return collectionApi.getFilteredByTag('monitoreos');
    });

    eleventyConfig.addCollection("finan", function(collectionApi) {
        return collectionApi.getFilteredByTag('finan');
    });

    eleventyConfig.addCollection("ods", function(collectionApi) {
        return collectionApi.getFilteredByTag('ods');
    });

}

