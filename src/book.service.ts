export class BookService {
  addBook(): string {
    return 'This will be add book';
  }
  //delete book
  deleteBook(): string {
    return 'This is for delete book';
  }
  //update book
  updateBook(): string {
    return 'This is for updating book';
  }
  //find all book
  findAllBook(): string {
    return 'This is for finding all book';
  }

  findBookById(bookId: string): string {
    console.log(bookId);
    return `This is for finding book by id ${bookId}`;
  }
}
