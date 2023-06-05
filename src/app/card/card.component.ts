import { Component,Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any;
  // @Input('title') title: string = '';
  // @Input('year') year: string = '';
  // @Input('imageUrl') imageUrl: string = '';
  // @Input('type') type: string = ''
 

  constructor(public dataService: DataService) {
    console.log('data',this.data);
  }

  handleImageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
