import { Component, OnInit, TestabilityRegistry } from '@angular/core';
import {Tab} from "../tabs";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  

context: Tab[] = [
    { title: 'Tab1', way: 'assets/img/img1.jpg' },
    {  title: 'Tab2', way: 'assets/img/img2.jpg' },
    {  title: 'Tab3', way: 'assets/img/img3.jpg' }
  ];

  
  
  selectedTab: Tab = this.context[1];

  constructor() { }

  ngOnInit() {
  }
  onSelect(tab: Tab): void {
    this.selectedTab  = tab;
  }
  onSelectClose(tab:Tab): void {
    
    let i = this.context.findIndex(t=> t ==tab);
    if(this.selectedTab == tab) {
      
      if(i>0)
        this.selectedTab = this.context[i-1];
      else
        this.selectedTab = this.context[i+1];
    }
   // sessionStorage.setItem(JSON.stringify(".this.context.filter(t => t != tab "), "name");
    //this.context = this.context.filter(t => t != tab );
    //this.context =sessionStorage.getItem(JSON.stringify(".this.context.filter(t => t != tab "));



    // this.selectedTab  = tab;
    // delete this.tabs[tab.id];
  }

}
