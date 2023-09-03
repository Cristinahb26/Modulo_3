import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

     public books: Book[];

  constructor(private bookService: BooksService){

    this.books = this.bookService.getAll();

  }
  search(id_book: number) {
    if (id_book) {

      // Buscar un libro por ID
      this.books =  [this.bookService.getOne(id_book)];

    } else {
      
      // Mostrar todos los libros cuando no se proporciona un ID
      this.books = this.bookService.getAll();

    }
  }

  deleteCard(id_book: number) {

      this.books = this.books.filter(Book => Book.id_book != id_book);

      if (id_book) {
        this.books.splice(id_book, 1);
        this.bookService.delete(id_book);
     }
  }
}
