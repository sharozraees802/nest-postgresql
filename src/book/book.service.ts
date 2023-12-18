import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';

@Injectable()
export class BookService {
  public books: Book[] = [];

  //add book
  addBookService(book: Book): string {
    this.books.push(book);
    return 'Book has been successfully added';
  }

  //update book
  updateBookService(book: Book): string {
    const index = this.books.findIndex((currentBook) => {
      return currentBook.id === book.id;
    });
    this.books[index] = book;
    return 'Book has been successfully updated';
  }

  //delete book
  deleteBookService(id: string): string {
    this.books = this.books.filter((book) => {
      return book.id !== id;
    });
    return 'Book has been successfully deleted';
  }

  //find all books
  findAllBooksService(): Book[] {
    return this.books;
  }
}
