import cardTemplate from './templates/card.html';
import template from 'lodash.template';

export let filmsList = [
    {
        imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
        imageAlt: "NO, IM YOUR FATHER!",
        title: "TestTExt",
        description: "TestTExt",
        rate: "6.66",
        filmId: "1",
        btnId: "1",
        filmDataObject: {
            filmId: "1",
            title: "Test",
            originalTitle: "Test2",
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            year: "year",
            country: "Country",
            tagline: "tagline",
            director: "director",
            screenwriters:
                [
                    { name: "SCREENWRITER" },
                    { name: "SCREENWRITER" },
                ],
            producers:
                [
                    { name: "PRODUCER" },
                    { name: "PRODUCER" },
                ],
            operators:
                [
                    { name: "operator" },
                    { name: "operator" },
                ],
            composer: "composer",
            cast:
                [
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                ],
            rate: "rate.rate",
            description: "testTesttestTesttestTesttestTesttestTest",
            likes: "2",
            dislikes: "2",
        },
    },
    {
        imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
        imageAlt: "NO, IM YOUR FATHER!",
        title: "TestTExt",
        description: "TestTExt",
        rate: "6.66",
        filmId: "2",
        btnId: "2",
        filmDataObject: {
            filmId: "2",
            title: "Test",
            originalTitle: "Test2",
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            year: "year",
            country: "Country",
            tagline: "tagline",
            director: "director",
            screenwriters:
                [
                    { name: "SCREENWRITER" },
                    { name: "SCREENWRITER" },
                ],
            producers:
                [
                    { name: "PRODUCER" },
                    { name: "PRODUCER" },
                ],
            operators:
                [
                    { name: "operator" },
                    { name: "operator" },
                ],
            composer: "composer",
            cast:
                [
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                ],
            rate: "rate.rate",
            description: "testTesttestTesttestTesttestTesttestTest",
            likes: "2",
            dislikes: "2",
        },
    },
    {
        imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
        imageAlt: "NO, IM YOUR FATHER!",
        title: "TestTExt",
        description: "TestTExt",
        rate: "6.66",
        filmId: "3",
        btnId: "3",
        filmDataObject: {
            filmId: "3",
            title: "Test",
            originalTitle: "Test2",
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            year: "year",
            country: "Country",
            tagline: "tagline",
            director: "director",
            screenwriters:
                [
                    { name: "SCREENWRITER" },
                    { name: "SCREENWRITER" },
                ],
            producers:
                [
                    { name: "PRODUCER" },
                    { name: "PRODUCER" },
                ],
            operators:
                [
                    { name: "operator" },
                    { name: "operator" },
                ],
            composer: "composer",
            cast:
                [
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                ],
            rate: "rate.rate",
            description: "testTesttestTesttestTesttestTesttestTest",
            likes: "2",
            dislikes: "2",
        },
    },
    {
        imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
        imageAlt: "NO, IM YOUR FATHER!",
        title: "TestTExt",
        description: "TestTExt",
        rate: "6.66",
        filmId: "4",
        btnId: "4",
        filmDataObject: {
            filmId: "4",
            title: "Test",
            originalTitle: "Test2",
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            year: "year",
            country: "Country",
            tagline: "tagline",
            director: "director",
            screenwriters:
                [
                    { name: "SCREENWRITER" },
                    { name: "SCREENWRITER" },
                ],
            producers:
                [
                    { name: "PRODUCER" },
                    { name: "PRODUCER" },
                ],
            operators:
                [
                    { name: "operator" },
                    { name: "operator" },
                ],
            composer: "composer",
            cast:
                [
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                ],
            rate: "rate.rate",
            description: "testTesttestTesttestTesttestTesttestTest",
            likes: "2",
            dislikes: "2",
        },
    },
    {
        imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
        imageAlt: "NO, IM YOUR FATHER!",
        title: "TestTExt",
        description: "TestTExt",
        rate: "6.66",
        filmId: "5",
        btnId: "5",
        filmDataObject: {
            filmId: "5",
            title: "Test",
            originalTitle: "Test2",
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            year: "year",
            country: "Country",
            tagline: "tagline",
            director: "director",
            screenwriters:
                [
                    { name: "SCREENWRITER" },
                    { name: "SCREENWRITER" },
                ],
            producers:
                [
                    { name: "PRODUCER" },
                    { name: "PRODUCER" },
                ],
            operators:
                [
                    { name: "operator" },
                    { name: "operator" },
                ],
            composer: "composer",
            cast:
                [
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                    { name: "actor" },
                ],
            rate: "rate.rate",
            description: "testTesttestTesttestTesttestTesttestTest",
            likes: "2",
            dislikes: "2",
        },
    },
];

export default function () {
    let list;
    const tmplCard = template(cardTemplate);

    filmsList.forEach((film) => {
        const card = tmplCard(film);

        if (!list) {
            list = card;
        } else {
            list += card;
        }
    });

    return list;
}