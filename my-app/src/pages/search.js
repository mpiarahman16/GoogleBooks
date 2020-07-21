import React, {useState,useEffect } from "react";

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [books, setBooks] = useState([]);

    useEffect(() => {
        if (searchValue !== '') {
        // make the fetch function get the book based on what the user searched (searchValue)
        // console.log it maybe?
        // setBooks to the books that were recieved
        fetch('https://www.googleapis.com/books/v1/volumes?q=' + searchValue + '&key=AIzaSyBnAhH98CH6DznQGjpCLWA3x-dY757Eu4I')
            .then(response => response.json())
            .then(booksSearched => {
                setBooks(booksSearched.items)
                // saved the books that w
            })
        }
    }, [searchValue]);

    const saveBook = (book) => {

        fetch('/api/books', {
            method: "POST",
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               // {}, save title, description etc.
               title: book.volumeInfo.title,
               authors: book.volumeInfo.authors,
               description: book.volumeInfo.description,
               image: book.volumeInfo.imageLinks.thumbnail,
               link: book.saleInfo.buyLink,
            })
        })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <div>
            <input type="search" value={searchValue} onChange={event => setSearchValue(event.target.value)} />
            {books.map(book => (
                <div key={book.id}>
                    
                    <p>Title: <a href= {book.saleInfo?.buyLink}>{book.volumeInfo?.title}</a></p>
                    <p>Description: {book.volumeInfo?.description}</p>
                    <p>Authors: {book.volumeInfo?.authors}</p>
                    <p>Image: <img src= {book.volumeInfo?.imageLinks?.thumbnail} /></p>
                    <button onClick={() => saveBook(book)}>Save</button>
                </div>
            ))}
        </div>
    )
}

export default Search;