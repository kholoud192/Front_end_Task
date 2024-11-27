import { Component } from '@angular/core';

interface DataItem {
  name: string;
  email: string;
  age: number;
}
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateY(20px)', opacity: 0 }),
        animate('400ms ease-in-out', style({ transform: 'translateY(0)', opacity: 1 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  data: DataItem[] = [
    { name: 'Alice', email: 'alice@example.com', age: 25 },
    { name: 'Bob', email: 'bob@example.com', age: 30 },
    { name: 'Charlie', email: 'charlie@example.com', age: 35 },
    { name: 'David', email: 'david@example.com', age: 40 },
    { name: 'Eve', email: 'eve@example.com', age: 22 },
    { name: 'Frank', email: 'frank@example.com', age: 28 },
    { name: 'Grace', email: 'grace@example.com', age: 32 },
    { name: 'Hannah', email: 'hannah@example.com', age: 27 },
    { name: 'Isaac', email: 'isaac@example.com', age: 30 },
    { name: 'Jack', email: 'jack@example.com', age: 23 },
  ];

  filters = {
    search: '', 
  };

  filteredData: DataItem[] = [...this.data];
  itemsPerPage = 5;
  currentPage = 1;

  get paginatedData(): DataItem[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredData.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get pages(): number[] {
    return Array.from({ length: Math.ceil(this.filteredData.length / this.itemsPerPage) }, (_, i) => i + 1);
  }

  applyFilters(): void {
    const searchTerm = this.filters.search.toLowerCase();
    this.filteredData = this.data.filter(item => {
      return (
        item.name.toLowerCase().includes(searchTerm) ||
        item.email.toLowerCase().includes(searchTerm) ||
        item.age.toString().includes(searchTerm)
      );
    });
    this.currentPage = 1; 
  }

  changePage(page: number): void {
    this.currentPage = page;
  }
}
