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

      new Book(1, 0, "El Conde de Montecristo", "Tapa Blanda", "Alejandro Dumas", 15.99, "https://covers.alibrate.com/b/59872e92cba2bce50c1b7929/06d27f27-09cf-4135-a431-1d6f54c184e3/share"),
      new Book(2, 0, "El Elemento", "tapa blanda", "Ken Robinson", 12.99, "https://tecreolibreria.com/386-medium_default/el-elemento--ken-robinson.jpg"),
      new Book(3, 0, "El Poder de Confiar en Ti", "Tapa Tlanda", "Curro Cañete", 16, "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2019/12/03/15753839869322.jpg"),
      new Book(4, 0, "El Ángel de la Ciudad", "tapa blanca", "Eva G. Sáenz de Urturi", 13.50, "https://i.blogs.es/5e4c0e/1366_2000-3-/450_1000.jpeg")

    ]
  }

  addBook(id_book:number, title:string, type:string, author:string, price:number, photo:string) {

    let newBook = new Book(0, id_book, title, type, author, price, photo,);
    this.books.push(newBook);

  } 
}
