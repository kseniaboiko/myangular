import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Menu } from "./menu";
import { News } from "./news";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'laba2';
  constructor (public httpService: HttpClient) { }
  News: News[] = [];
  Menu: Menu[] = [];

  ngOnInit () {
    
    this.httpService.get('assets/Birds.json').subscribe(      
      data => { 
        this.News = data ["News"];
        this.Menu = data ["Menu"];
        	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
}}
