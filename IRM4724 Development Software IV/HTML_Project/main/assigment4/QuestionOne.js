let book_library_collections = [];

let books = [
    {
        book_title: "A Time to Kill",
        author_name: "John Grisham",
        year_of_publication: 1989
    },
    {
        book_title: "The Firm",
        author_name: "John Grishamn",
        year_of_publication: 1991
    },
    {
        book_title: "The Pelican Brief",
        author_name: "John Grisham",
        year_of_publication: 1992
    },
    {
        book_title: "The Client",
        author_name: "John Grisham",
        year_of_publication: 1993
    }, {
        book_title: "The Chamber",
        author_name: "John Grisham",
        year_of_publication: 1994
    },
    {
        book_title: "The Rainmaker",
        author_name: "John Grisham",
        year_of_publication: 1995
    },
    {
        book_title: "The Runaway Jury",
        author_name: "John Grisham",
        year_of_publication: 1996
    },
    {
        book_title: "The Partner",
        author_name: "John Grisham",
        year_of_publication: 1997
    },
    {
        book_title: "The Street Lawyer",
        author_name: "John Grisham",
        year_of_publication: 1998
    },
    {
        book_title: "The Testament",
        author_name: "John Grisham",
        year_of_publication: 1999
    },
    {
        book_title: "The Brethren",
        author_name: "John Grisham",
        year_of_publication: 2000
    },
    {
        book_title: "The Painted House",
        author_name: "John Grisham",
        year_of_publication: 2001
    },
    {
        book_title: "The Skipping Christmas",
        author_name: "John Grisham",
        year_of_publication: 2001
    },
    {
        book_title: "The Summons",
        author_name: "John Grisham",
        year_of_publication: 2002
    },
    {
        book_title: "The King of Torts",
        author_name: "John Grisham",
        year_of_publication: 2003
    },
    {
        book_title: "The Bleachers",
        author_name: "John Grisham",
        year_of_publication: 2003
    },
    {
        book_title: "The Last Juror",
        author_name: "John Grisham",
        year_of_publication: 2004
    },
    {
        book_title: "The Broker",
        author_name: "John Grisham",
        year_of_publication: 2005
    },
    {
        book_title: "Playing for Pizza",
        author_name: "John Grisham",
        year_of_publication: 2007
    },
    {
        book_title: "The Appeal",
        author_name: "John Grisham",
        year_of_publication: 2008
    },
    {
        book_title: "The Associate",
        author_name: "John Grisham",
        year_of_publication: 2009
    },
    {
        book_title: "The Confession",
        author_name: "John Grisham",
        year_of_publication: 2010
    },
    {
        book_title: "The Litigators",
        author_name: "John Grisham",
        year_of_publication: 2011
    },
    {
        book_title: "Calico Joe",
        author_name: "John Grisham",
        year_of_publication: 2012
    },
    {
        book_title: "The Racketeer",
        author_name: "John Grisham",
        year_of_publication: 2012
    },
    {
        book_title: "Sycamore Row",
        author_name: "John Grisham",
        year_of_publication: 2013
    },
    {
        book_title: "Gray Mountain",
        author_name: "John Grisham",
        year_of_publication: 2014
    },
]


////////////////////////////////QUESTION 1 IMPLEMENTATION STARTS HERE ///////////////////////////////////////////////////
function add_book_to_library() {
    console.log("Question 1, add the following books in the library collection for author John Grisham");
    console.log("===========================================")

    for (let i = 0; i < books.length; i++)
        book_library_collections.push(books[i])

    return book_library_collections;
}

////////////////////////////////QUESTION 1 IMPLEMENTATION ENDS HERE ///////////////////////////////////////////////////


////////////////////////////////QUESTION 2 IMPLEMENTATION STARTS HERE ///////////////////////////////////////////////////
function books_published_before_2000(book_library_collection) {
    console.log("Question 2 A, Find All the books published before 2000 (by any author)");
    console.log("===========================================")

    let all_books_published_before_2000 = [];

    for (let index = 0; index < book_library_collection.length; index++) {
        let authorBook = book_library_collection[index];

        if (authorBook.hasOwnProperty("year_of_publication") && authorBook.hasOwnProperty("book_title")) {

            if (authorBook.year_of_publication <= 2000)
                all_books_published_before_2000.push(authorBook.year_of_publication);
        }

    }
    console.log(all_books_published_before_2000);
}

function books_published_by_john(book_library_collection) {
    console.log("Question 2 A: Find books published by john")
    for (let index = 0; index < book_library_collection.length; index++) {
        let authorBook = book_library_collection[index];

        if (authorBook.hasOwnProperty("book_title") && authorBook.hasOwnProperty("author_name")) {

            if (authorBook.author_name === "John Grisham")
                console.log(authorBook.author_name)
        }

    }
}

function books_published_not_by_john(book_library_collection) {
    console.log("Question 2 C: Find books NOT published by john")
    console.log("===========================================")

    for (let index = 0; index < book_library_collection.length; index++) {
        let authorBook = book_library_collection[index];

        if (authorBook.book_title && authorBook.author_name !== "John Grisham")
            authorBook.book_title.concat(authorBook.author_name);
    }
}

function books_published_between_2000_and_2009(book_library_collection) {
    console.log("Question 2 D: Find All the books published between years 2000 and 2009")
    console.log("===========================================")

    for (let index = 0; index < book_library_collection.length; index++) {
        let authorBook = book_library_collection[index];

        if ((authorBook.year_of_publication >= 2000) && (authorBook.year_of_publication <= 2009))
            console.log(authorBook.year_of_publication);
    }
}

function books_number_of_books_published_after_2009(book_library_collection) {
    console.log("Question 2 E: Find the number of books published after 2009")
    console.log("===========================================")

    for (let index = 0; index < book_library_collection.length; index++) {
        let authorBook = book_library_collection[index];

        if (authorBook.year_of_publication > 2009)
            console.log(authorBook.year_of_publication);
    }
}

function queries_to_find_the_following(book_library_collection) {
    books_published_before_2000(book_library_collection);
    books_published_by_john(book_library_collection);
    books_published_not_by_john(book_library_collection);
    books_published_between_2000_and_2009(book_library_collection);
    books_number_of_books_published_after_2009(book_library_collection);
}

////////////////////////////////QUESTION 2 IMPLEMENTATION ENDS HERE ///////////////////////////////////////////////////


////////////////////////////////QUESTION 3 IMPLEMENTATION STARTS HERE /////////////////////////////////////////////////

function delete_all_books_published_after_2009(book_library_collection) {
    console.log("Question 3 A: Delete All the books published before 2000 (by any author)")
    console.log("===========================================")

    let arr = [];
    arr = book_library_collection.filter(n => n.year_of_publication < 2009);
    console.log(arr);
}
function delete_all_books_published_by_john_grisham(book_library_collection) {
    console.log("Question 3 B: Delete All the books published by John Grisham")
    console.log("===========================================")

    let arr = [];
    arr = book_library_collection.filter(n => n.year_of_publication < 2009);
    console.log(arr);
}

function delete_all_books_not_published_by_john_grisham(book_library_collection) {
    console.log("Question 3 C: Delete All the books not published by John Grisham")
    console.log("===========================================")

    let arr = [];
    arr = book_library_collection.filter(n => n.year_of_publication < 2009);
    console.log(arr);
}

function delete_all_books_not_published_between_2000_and_2009(book_library_collection) {
    console.log("Question 3 D: Delete All the books published between years 2000 and 2009 (by any author)")
    console.log("===========================================")

    let arr = [];
    arr = book_library_collection.filter(n => n.year_of_publication < 2009);
    console.log(arr);
}

function queries_to_delete_the_following(book_library_collection) {
    delete_all_books_published_after_2009(book_library_collection);
    delete_all_books_published_by_john_grisham(book_library_collection);
    delete_all_books_not_published_by_john_grisham(book_library_collection);
}

////////////////////////////////QUESTION 3 IMPLEMENTATION ENDS HERE ///////////////////////////////////////////////////


////////////////////execution point//////////////////////////////
/*
    Question 1
    Write a JavaScript function to add the following books in the library collection for author John
    Grisham. The number in the parentheses is the year of publication.

 */
let book_library = add_book_to_library();

/*
    Question 2
    Write queries to find the following:
 */
queries_to_find_the_following(book_library);

/*
    Question 3
    Write queries to delete the following:
 */
queries_to_delete_the_following(book_library)

/*
   Question 4 (Community Project)
    Either develop or selection a mobile application. Demonstrate this application to a community of your
    choice. Discuss the application created/selected and how this uplifted the selected community.
 */