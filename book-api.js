const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let books = [  
    {
    isbn: '9781626811201',
    title: "It's Just a F***ing Date: Some Sort of Book About Dating",
    author: 'Greg Behrendt & Amiira Ruotola ',
    publish_date: '2013-06-16',
    publisher: 'Diversion Books',
    numOfPages: 224
  },
  {
    isbn: '9780525560548',
    title: 'Hood Feminism: Notes from the Women That a Movement Forgot',
    author: 'Mikki Kendall',
    publish_date: '2020-02-25',
    publisher: 'Viking',
    numOfPages: 288
  },
  {
    isbn: '9781416593843',
    title: 'Winner-Take-All Politics',
    author: 'Jacob S.Hacker, Paul Pierson',
    publish_date: '2010-09-14',
    publisher: 'Simon & Schuster',
    numOfPages: 368
  }
];
    
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    console.log(book);
    books.push(book);
    res.send('Book is added to the database');

});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    // this is isbn from the url checking if it is indeed there 
    // with a if statemment 
    const isbn = req.params.isbn;

    for (let book of books) {
        if (book.isbn === isbn) {
            res.json(book);
            return;
        }
    }
     res.status(404).send('Book not found');
});

app.delete('/book/:isbn', (req, res) => {
  
    const isbn = req.params.isbn;

    // this is the delete http method, using nd if statement to check
    // to see if the book was indeed not there by isbn number
    books = books.filter(i => {
        if (i.isbn !== isbn) {
            return true;
        }
        return false;
    });

    res.send('Book is deleted');
});

app.post('/book/:isbn', (req, res) => {
    //this is th isbn from the link
    const isbn = req.params.isbn;
    const newBook = req.body;

   // using a for loop to go through the books array 
   // this gonig to each index of each book object 
    for (let i = 0; i < books.length; i++) {
        let book = books[i]
        if (book.isbn === isbn) {
            books[i] = newBook;
        }
    }

    res.send('Book is edited');
});

console.log(books);
app.listen(port,() => console.log(`Hello world app listening on port ${port}!`));