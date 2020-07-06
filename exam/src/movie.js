import movieTemplate from './templates/movie.html';
import template from 'lodash.template';

export default function() { 
    let filmDataObject = {
        title: "Test",
        originalTitle: "Test2",
        imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
        year: "year",
        country: "Country",
        tagline: "tagline",
        director: "director",
        screenwriters: 
            [
                {name: "SCREENWRITER"},
                {name: "SCREENWRITER"},
            ],
        producers: 
        [
            {name: "PRODUCER"},
            {name: "PRODUCER"},
        ],
        operators:             
            [
                {name: "operator"},
                {name: "operator"},
            ],
        composer: "composer",
        cast: 
            [
                {name: "actor"},
                {name: "actor"},
                {name: "actor"},
                {name: "actor"},
                {name: "actor"},
                {name: "actor"},
                {name: "actor"},
                {name: "actor"},
                {name: "actor"},
                {name: "actor"},
            ],
        rate: "rate.rate",
        description: "testTesttestTesttestTesttestTesttestTest",
        likes: "2",
        dislikes: "2",
    };

    filmDataObject.screenwriters.forEach(function(item) {
        console.log(item);
    });

    const tmplMovie = template(movieTemplate);
    const movie = tmplMovie(
        filmDataObject, 
        filmDataObject.screenwriters, 
        filmDataObject.producers, 
        filmDataObject.cast,
        filmDataObject.operators
        );

    return movie;
}