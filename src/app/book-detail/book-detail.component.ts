import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  BookDto,
  BookServiceProxy,
} from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-book-detail",
  templateUrl: "./book-detail.component.html",
  styleUrls: ["./book-detail.component.css"],
})
export class BookDetailComponent implements OnInit {
  book: BookDto;
  lastPage: number = 1;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookServiceProxy
  ) {}

  ngOnInit() {
    const bookId = this.route.snapshot.paramMap.get("id");
    this.bookService.getBookById(+bookId).subscribe((book) => {
      this.book = book;
    });
    this.bookService.getUserBookMapping(0, this.book.gutenbergId).subscribe((mapping) => {
      this.lastPage = mapping.lastReadPage;
    });
  }
}
