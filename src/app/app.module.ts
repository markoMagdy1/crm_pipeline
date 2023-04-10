import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DealsService } from './services/deals.service';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DealsHomeComponent } from './components/deals-home/deals-home.component';
import { DealItemComponent } from './components/deal-item/deal-item.component';
import { SearchSectionComponent } from './components/search-section/search-section.component'
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    DealsHomeComponent,
    DealItemComponent,
    SearchSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [DealsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
