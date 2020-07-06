import cardTemplate from './templates/card.html';
import template from 'lodash.template';


export default function() {
    let filmsList = [
        {
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            imageAlt: "NO, IM YOUR FATHER!",
            title: "TestTExt",
            description: "TestTExt",
            rate: "6.66",
            filmId: "1",
            btnId: "1",
        },
        {
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            imageAlt: "NO, IM YOUR FATHER!",
            title: "TestTExt",
            description: "TestTExt",
            rate: "6.66",
            filmId: "2",
            btnId: "2",
        },
        {
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            imageAlt: "NO, IM YOUR FATHER!",
            title: "TestTExt",
            description: "TestTExt",
            rate: "6.66",
            filmId: "3",
            btnId: "3",
        },
        {
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            imageAlt: "NO, IM YOUR FATHER!",
            title: "TestTExt",
            description: "TestTExt",
            rate: "6.66",
            filmId: "4",
            btnId: "4",
        },
        {
            imageLink: "https://images-na.ssl-images-amazon.com/images/I/81P3lDJbjCL._AC_SY879_.jpg",
            imageAlt: "NO, IM YOUR FATHER!",
            title: "TestTExt",
            description: "TestTExt",
            rate: "6.66",
            filmId: "5",
            btnId: "5",
        },
    ];

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