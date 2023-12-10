import { Component, Input } from "@angular/core";
import { BookDto } from "@shared/service-proxies/service-proxies";

@Component({
  selector: "app-book-card",
  templateUrl: "./book-card.component.html",
  styleUrls: ["./book-card.component.css"],
})
export class BookCardComponent {
  @Input() book: BookDto;

  constructor() {}
}
