import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { BookPageDto, BookServiceProxy } from '@shared/service-proxies/service-proxies';

@Component({
  selector: 'app-book-reading',
  templateUrl: './book-reading.component.html',
  styleUrls: ['./book-reading.component.css']
})
export class BookReadingComponent implements OnInit {
  public bookContentSafe: string;
  bookId: number | undefined;
  gutenbergId: number | undefined;
  currentPageNumber: number = 1;
  pageSize: number = 11; // Adjust as needed
  bookPages: BookPageDto[] = [];
  totalItems: number = 0;
  currentBookPage: BookPageDto | undefined;

  constructor(private route: ActivatedRoute,private bookService: BookServiceProxy) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.bookId = +params['bookId']; // The '+' converts the string to a number
      this.gutenbergId = +params['gutenbergId'];
    this.loadPages();});
  }


  loadPages(): void {
    const skipCount = (this.currentPageNumber - 1) * this.pageSize;
    this.bookService.getPaginatedBookPages(0, this.gutenbergId, this.pageSize, skipCount, '')
      .subscribe(result => {
        this.bookPages = result.items;
        this.totalItems = result.totalCount;
        this.setCurrentPage();
      }, error => {
        console.error('Error fetching paginated book pages:', error);
      });
  }

  setCurrentPage(): void {
    this.currentBookPage = this.bookPages.length > 0 ? this.bookPages[0] : undefined;
  }

  loadPreviousPage(): void {
    if (this.currentPageNumber > 1) {
      this.currentPageNumber--;
      this.loadPages();
    }
  }

  loadNextPage(): void {
    if (this.currentPageNumber * this.pageSize < this.totalItems) {
      this.currentPageNumber++;
      this.loadPages();
    }
  }
}

