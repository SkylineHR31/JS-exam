import movieTemplate from './templates/movie.html';
import template from 'lodash.template';
import {filmsList, defaultFunction} from "./list.js";

export default function() {
    const tmplMovie = template(movieTemplate);
    const movie = tmplMovie(
        filmsList[0].filmDataObject, 
        filmsList[0].filmDataObject.screenwriters, 
        filmsList[0].filmDataObject.producers, 
        filmsList[0].filmDataObject.cast,
        filmsList[0].filmDataObject.operators
        );

    return movie;
}