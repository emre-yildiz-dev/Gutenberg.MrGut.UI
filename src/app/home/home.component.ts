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

  constructor(injector: Injector, private bookService: BookServiceProxy) {
    super(injector);
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }
}
