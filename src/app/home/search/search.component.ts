import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  @Output() onMyBooks = new EventEmitter<string>();
  searchTerm: string = "";

  onSearch() {
    this.search.emit(this.searchTerm);
  }
  onMyBooksClick(){
      this.onMyBooks.emit(this.searchTerm);
  }
}
