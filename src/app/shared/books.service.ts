import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private url: string = "http://localhost:3000/books";

  constructor(private http: HttpClient) {
    
  }
   getAll(){

    return this.http.get(this.url);
  }
   getOne(id_book:number){

    return this.http.get(this.url + '?id=' + id_book);

  }
   addBook(book:Book){

    return this.http.post(this.url, book);

   }
   editar(book:Book){

    return this.http.put(this.url, book);

   }
   delete(id_book:number){
    
    return this.http.delete(this.url,);

   }
}

//   private books: Book [];

//   constructor() {

//     this.books = [

//       new Book("El Conde de Montecristo", "Tapa Blanda", "Alejandro Dumas", 15.99, "https://covers.alibrate.com/b/59872e92cba2bce50c1b7929/06d27f27-09cf-4135-a431-1d6f54c184e3/share", 301020, 0),
//       new Book("El Elemento", "Tapa Blanda", "Ken Robinson", 12.99, "https://tecreolibreria.com/386-medium_default/el-elemento--ken-robinson.jpg", 301021, 0),
//       new Book("El Poder de Confiar en Ti", "Tapa Blanda", "Curro Cañete", 16, "https://e00-telva.uecdn.es/assets/multimedia/imagenes/2019/12/03/15753839869322.jpg", 301022, 0),
//       new Book("El Ángel de la Ciudad", "Tapa Blanca", "Eva G. Sáenz de Urturi", 13.50, "https://i.blogs.es/5e4c0e/1366_2000-3-/450_1000.jpeg", 301023, 0)

//     ]
    
//    }
//    getAll(): Book[] {
    
//     return this.books;
//   }
//   getOne(id_book: number): Book {

//    return this.books.find(book => book.id_book == id_book);
  
//  }
//   addBook(newBook: Book):void {

//    this.books.push(newBook);
  
//  }

//   editar(book: Book): Boolean {
//    for(let i=0; i < this.books.length; i++){
//      if(this.books[i].id_book == book.id_book){
//         this.books[i]= book
//         return true;
//      }  
//    }
//  }

//   delete(id_book: number): Boolean {
//    let index = this.books.findIndex(book => book.id_book === id_book);
//    if (index !== -1) {
//      this.books.splice(index, 1);
//      return true;
//    }
//  }  
