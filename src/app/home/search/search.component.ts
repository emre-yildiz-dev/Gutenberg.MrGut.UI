import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  searchTerm: string = "";

  onSearch() {
    this.search.emit(this.searchTerm);
  }
}
