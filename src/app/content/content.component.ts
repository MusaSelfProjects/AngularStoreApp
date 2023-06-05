import { DataService } from '../data.service';
import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import {DataRecord} from '../types'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
dataList!: any[];
 constructor(public dataService: DataService,private router: Router) { }

 ngOnInit() {
   this.dataService.getDataList().subscribe(dataList => {
     this.dataList = dataList;
     console.log('content',this.dataList)
   });

 }
 navigateToDetails(item :DataRecord){
   console.log('navigate ',item)
   this.router.navigate(['/details', item.imdbID], { state: { data: item } });
 }
 openCardDetails(item: any) {
   this.router.navigate(['/details', item.imdbID], { state: { item: item } });
 }

}