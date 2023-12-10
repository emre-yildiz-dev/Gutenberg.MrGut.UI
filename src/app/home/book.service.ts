import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";

export interface Book {
  title: string;
  author: string;
  imageUrl: string;
}

@Injectable({
  providedIn: "root",
})
export class BookService {
  private apiUrl: string = "http://gutendex.com/books";

  private books: Book[] = [
    {
      title: "Sample Book Title 1",
      author: "Author Name 1",
      imageUrl: "assets/images/book2.png",
    },
    {
      title: "Sample Book Title 2",
      author: "Author Name 2",
      imageUrl: "assets/images/book2.png",
    },
    {
      title: "Sample Book Title 1",
      author: "Author Name 1",
      imageUrl: "assets/images/book2.png",
    },
    {
      title: "Sample Book Title 2",
      author: "Author Name 2",
      imageUrl: "assets/images/book2.png",
    },
    {
      title: "Sample Book Title 1",
      author: "Author Name 1",
      imageUrl: "assets/images/book2.png",
    },
    {
      title: "Sample Book Title 2",
      author: "Author Name 2",
      imageUrl: "assets/images/book2.png",
    },
    {
      title: "Sample Book Title 1",
      author: "Author Name 1",
      imageUrl: "assets/images/book2.png",
    },
    {
      title: "Sample Book Title 2",
      author: "Author Name 2",
      imageUrl: "assets/images/sample-book-2.jpg",
    },
    // More books...
  ];

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response) =>
        response.results.map((book) => ({
          title: book.title,
          author: book.authors.map((a) => a.name).join(", "),
          imageUrl: book.formats["image/jpeg"], // Assuming the API returns an image format like this
        }))
      )
    );
  }
}
