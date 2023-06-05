import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  groupedDataByType: any = {};
  typeKeyes!: any [];
  constructor(public dataService: DataService){}
  ngOnInit() {
    this.dataService.getGroupedDataByTypes().subscribe((groupedData) => {
      if (groupedData) {
        this.groupedDataByType = groupedData;
        this.typeKeyes = Object.keys(groupedData);
        console.log(' side bar Grouped Data:', groupedData, 'Type Keys:', this.typeKeyes);
      }
    });

}
sortDatalist(sortBy:string){
  console.log('sort type by ',sortBy)
  this.dataService.updateDataList(this.groupedDataByType[sortBy]);
  this.dataService.setSelectedType(sortBy)
}
toggleView(){
  this.dataService.toggleView()
  console.log('side-bar toggle view');
}
}
