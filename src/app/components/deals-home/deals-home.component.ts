import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deals-home',
  templateUrl: './deals-home.component.html',
  styleUrls: ['./deals-home.component.css'],
})
export class DealsHomeComponent implements OnInit {
 
  stages: string[] = [
    'Potential Value',
    'Focus',
    'Contact Made',
    'Offer Sent',
    'Getting Ready',
  ];

  filteredStage = this.stages;
  selectedStage: string = 'All Stages';
  searchTerm: string = '';
  
  constructor(private dealsService: DealsService) {}

  // ====>  method to select the stage
  filterData(selector: String) {
    selector === 'All Stages'
      ? (this.filteredStage = this.stages)
      : (this.filteredStage = this.stages.filter((item) => item === selector));
    console.log(this.selectedStage);
  }

  ngOnInit(): void {
    this.dealsService.getAllDeals().subscribe((res) => {
      this.response = res;
      this.allDeals = this.response.deals;
      this.divisionDeals();
    });
  }

  response: any;
  allDeals: any;
  potentialValueDeals: any = [];
  focusDeals: any = [];
  contactMadeDeals: any = [];
  offerSentDeals: any = [];
  gettingReadyDeals: any = [];

  onDrop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      // Item moved within the same list
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Item moved to a different list
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
    
  //===> division deals according to its status
  divisionDeals = () => {
    this.allDeals.map((deal: any) => {
      switch (deal.status) {
        case 'Potential Value':
          this.potentialValueDeals.push(deal);
          break;
        case 'Focus':
          this.focusDeals.push(deal);
          break;
        case 'Contact Made':
          this.contactMadeDeals.push(deal);
          break;
        case 'Offer Sent':
          this.offerSentDeals.push(deal);
          break;
        case 'Getting Ready':
          this.gettingReadyDeals.push(deal);
          break;
      }
    });
  };
     
  }