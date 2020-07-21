import React, {useState,useEffect } from "react";

function Saved() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        
        fetch('/api/books')
            .then(response => response.json())
            .then(booksSaved => {
                console.log(booksSaved)
                setBooks(booksSaved)
                
            })
    }, []);

    return (
        <div>
            <h1>Your Saved Books</h1>
            {books.map(book => (
                <div key={book._id}>
                    <p>Title: <a href= {book.saleInfo?.buyLink}>{book.title}</a></p>
                    <p>Description: {book.description}</p>
                    <p>Authors: {book.authors}</p>
                    <p>Image: <img src= {book.image} /></p>
                </div>
            ))}
        </div>
    )
}



export default Saved;