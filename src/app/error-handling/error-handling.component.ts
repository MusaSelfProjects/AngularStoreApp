import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-error-handling',
  templateUrl: './error-handling.component.html',
  styleUrls: ['./error-handling.component.css']
})
export class ErrorHandlingComponent {
  constructor(public dataService: DataService) { }

}
