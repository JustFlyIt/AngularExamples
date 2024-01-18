import { Component } from '@angular/core';
import { PeriodicElement } from '../periodic-element';

@Component({
  selector: 'app-data-element',
  standalone: true,
  imports: [],
  templateUrl: './data-element.component.html',
  styleUrl: './data-element.component.css'
})
export class DataElementComponent {
  
  periodElement: PeriodicElement = {
    name: 'Carbon',
    position: 1,
    weight: 42234,
    symbol: 'xxxx'
  };

}
