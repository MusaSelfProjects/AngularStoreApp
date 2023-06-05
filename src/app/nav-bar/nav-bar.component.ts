import { Component } from '@angular/core';
import {DataService} from '../data.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  form!: FormGroup;
  title: string = '';
  searchTerm: string = '';
  searchText:string = '';

  constructor(public dataService: DataService, private fb: FormBuilder) {
  
   }
  onHandleRefresh= ()=>{
    this.dataService.refreshData();
  }
  onHandleSort(){
    this.dataService.sortDataListAscDesc();
  }
  onHandleClear(){
    this.searchText = '';
    this.dataService.clearSearch();
  }
  onSearchInputChange(searchText: any){
    this.dataService.searchDataListByText(searchText);
  }

}
