import {
  BookDto,
  BookServiceProxy,
} from "./../../shared/service-proxies/service-proxies";
import { Component, Injector, ChangeDetectionStrategy } from "@angular/core";
import { AppComponentBase } from "@shared/app-component-base";
import { appModuleAnimation } from "@shared/animations/routerTransition";

@Component({
  templateUrl: "./home.component.html",
  animations: [appModuleAnimation()],
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ["./home.component.css"],
})
export class HomeComponent extends AppComponentBase {
  books: BookDto[];
  totalItems: number;
  currentPage: number = 1;
  pageSize: number = 10;

  constructor(injector: Injector, private bookService: BookServiceProxy) {
    super(injector);
    this.loadBooks();
  }
  ngOnInit(): void {}
  loadBooks() {
    this.bookService
      .getBooks(this.currentPage, this.pageSize, "")
      .subscribe((response) => {
        this.books = response.items;
        this.totalItems = response.totalCount;
      });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadBooks();
  }

  onSearch(searchTerm: string) {
    this.bookService.getBooks(1, 10, searchTerm).subscribe((response) => {
      this.books = response.items; // assuming your response structure
    });
  }
  onMyBooksClick(searchTerm: string) {
    this.bookService.getUserBooks(1, 20, searchTerm).subscribe((response) => {
      this.books = response.items; // assuming your response structure
    });
  }
}
