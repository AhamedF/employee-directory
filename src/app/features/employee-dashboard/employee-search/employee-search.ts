import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-search.html',
  styleUrl: './employee-search.css',
})
export class EmployeeSearch {

  employee = '';
  @Output() searchText = new EventEmitter!

  search(){
    this.searchText.emit(this.employee)
  }

}
