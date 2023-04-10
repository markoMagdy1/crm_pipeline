import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DealsService {
baseUrl='https://my-json-server.typicode.com/mabukoush1/contacts/db';

  constructor(private client:HttpClient) { }
  
 getAllDeals(){
  return this.client.get(this.baseUrl)
 }

}
