import { Component, OnInit } from '@angular/core';
import {Details} from "../details";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';







@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
  constructor (public httpService: HttpClient) { }
  
  arrBirds: string [];

  ngOnInit () {
    this.httpService.get('assets/Birds.json').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  

  

  

}
