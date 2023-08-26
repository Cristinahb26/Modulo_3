import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {

     public books: Book[];

  constructor(){

    this.books = [

      new Book("El Conde de Montecristo", "Tapa Blanda", "Alejandro Dumas", 15.99, "https://covers.alibrate.com/b/59872e92cba2bce50c1b7929/06d27f27-09cf-4135-a431-1d6f54c184e3/share", 301020, 0),
      new Book("El Elemento", "Tapa Blanda", "Ken Robinson", 12.99, "https://tecreolibreria.com/386-medium_default/el-elemento--ken-robinson.jpg", 301021, 0),
      new Book("El Poder de Confiar en Ti", "Tapa Blanda", "Curro Cañete", 16, "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2019/12/03/15753839869322.jpg", 301022, 0),
      new Book("El Ángel de la Ciudad", "Tapa Blanca", "Eva G. Sáenz de Urturi", 13.50, "https://i.blogs.es/5e4c0e/1366_2000-3-/450_1000.jpeg", 301023, 0)

    ]
  }

  addBook(id_book:number, title:string, type:string, author:string, price:number, photo:string) {

    let newBook = new Book(title, type, author, price, photo, id_book);
    this.books.push(newBook);

  } 

  deleteCard(id_book: number) {
      this.books = this.books.filter((book) => book.id_book !== id_book);
}
}
