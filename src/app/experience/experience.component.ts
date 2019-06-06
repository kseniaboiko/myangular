import { Component, OnInit , Input} from '@angular/core';
import {News} from "../news";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';







@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() News: News[]=[];
  constructor () { }
  
 

  ngOnInit () {
  
  }
  

  

  

}
