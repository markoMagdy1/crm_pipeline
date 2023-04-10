import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-deal-item',
  templateUrl: './deal-item.component.html',
  styleUrls: ['./deal-item.component.css']
})
export class DealItemComponent {

@Input() dealItem:any;
 
}
