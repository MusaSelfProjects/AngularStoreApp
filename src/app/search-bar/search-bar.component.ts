import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchText: string = ''; // Add the searchText property here

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onInputChange(text :string) {
    this.dataService.searchDataListByText(text)
 }
}
