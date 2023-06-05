import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent implements OnInit {
  item : any;
  constructor( 
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
    ) { }

  ngOnInit() {
    // this.item = this.router.getCurrentNavigation().extras.state?.data;
    this.route.paramMap.subscribe(params => {
     
      let imdbID: string | null = params.get('imdbID');
      if (imdbID !== null) {
        this.item = this.dataService.getItemById(imdbID);
      }
      console.log('Card Details:', this.item);
    });
  }

  
  goBack() {
    this.router.navigate(['/']); // Replace '/' with the route path of your data-list component
  }
}
