import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BooksService } from 'src/app/shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

     public books: Book[] = [];

     constructor(public bookService: BooksService){
      this.bookService.getAll().subscribe((data: Book[]) => {
        console.log(data);
        
        this.books = data;
      });
  
    }
    search(id_book: number) {
      if (id_book !== 0) {
        this.books = this.books.filter(book => book.id_book === id_book);
        this.bookService.getOne(id_book).subscribe((data: Book[]) =>{
                 this.books = data;
           });
      } else {
        this.bookService.getAll().subscribe((data: Book[]) => {
          this.books = data;
        });
      }
    
    }
    
    deleteCard(id_book: number) {
  
            this.bookService.delete(id_book).subscribe(() => {
                this.books = this.books.filter(book => book.id_book !== id_book)
                
                  });
        }
    
}
