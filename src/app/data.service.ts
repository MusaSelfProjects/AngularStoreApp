import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import the map operator
import { BehaviorSubject } from 'rxjs';
import { ViewMode} from './types';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataList: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  private groupedDataByTypes: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public  selectedType = "All" ;
  private isAscending = true;
  public viewMode: ViewMode = ViewMode.Grid;

  constructor(private http: HttpClient) { 
    this.initDataList();
  }
  initDataList(){
    this.getDataFromService().subscribe((dataList) => {
      this.dataList.next(dataList); 
      this.groupedDataByTypes.next(this.arangeDataByTypes(dataList));
      console.log('service',this.groupedDataByTypes)
      });
  }
  getDataFromService(): Observable<any> {
    const url = 'assets/angular_Response.json'; // Update the URL to the correct path
    return this.http.get<any>(url).pipe(
      map(response => response.results)
    );
  }
  getDataList(): Observable<any[]> {
    return this.dataList.asObservable();
  }
  getGroupedDataByTypes(){
    return this.groupedDataByTypes.asObservable();
  }
  arangeDataByTypes = (dataList: any[]): any =>{
    const groupedData: any = {};
    for (const item of dataList) {
    const type = item.Type;
    if(!groupedData.hasOwnProperty('All')){
    groupedData['All'] = [];
    }
    groupedData['All'].push(item);
  
    if (!groupedData.hasOwnProperty(type)) {
    groupedData[type] = [];
    }
    groupedData[type].push(item);
    }
    return groupedData;
  }
  updateDataList(data: any[]) {
    this.dataList.next(data); // Update the dataListSubject
  }

  setSelectedType(type:string){
    this.selectedType = type;
    console.log('this.selected',this.selectedType)
  }
  searchDataListByText(text:string){
    const regex = new RegExp(text, 'i'); // 'i' flag for case-insensitive search
    let fillteredList =[];
    let copyDataList = [...this.dataList.getValue()]
     if (copyDataList){
      fillteredList = copyDataList.filter(item =>
        regex.test(item.Title) || regex.test(item.Year)
      );
    }
    this.updateDataList(fillteredList)
  console.log('fillteredList',fillteredList)
  }

  clearSearch(){
    let filtredList :any = [];
    this.getGroupedDataByTypes().subscribe((groupedData) => {
      if (groupedData) {
          filtredList = groupedData[this.selectedType];
      }
      this.updateDataList(filtredList)
      console.log('clear ',filtredList,'this.selectedType',this.selectedType,'groupedData',groupedData)
    });
  }
  refreshData(){
    console.log( ' dataService refreshDataclicked');
    this.initDataList();

  }
  getItemById(imdbID: string): any {
    return this.dataList.getValue().find(item => item.imdbID === imdbID);
  }
  toggleView(){
    if (this.viewMode === ViewMode.Grid) {
      this.viewMode = ViewMode.List;
    } else {
      this.viewMode = ViewMode.Grid;
    }
  }
  sortDataListAscDesc(){
    this.isAscending = !this.isAscending;
    if (this.isAscending) {
    this.dataList.getValue().sort((a, b) => a.Title.localeCompare(b.Title));
    } else {
    this.dataList.getValue().sort((a, b) => b.Title.localeCompare(a.Title));
    }
    console.log('asc',this.isAscending)
    }
}
