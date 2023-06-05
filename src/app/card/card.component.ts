import { Component,Input } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() data: any;
 
  constructor(public dataService: DataService) {
  }

  handleImageError(event: Event): void {
    (event.target as HTMLImageElement).style.display = 'none';
  }
}
