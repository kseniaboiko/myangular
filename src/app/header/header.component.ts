import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import{Menu} from '../menu'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {
  @Input() Menu: Menu[]=[];
  constructor () { }
  
  
  ngOnInit () {
    
    /*this.httpService.get('assets/Birds.json').subscribe(      
      data => { 
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
   this.userStr = JSON.stringify(this.arrBirds);
  JSON.parse(this.userStr, (key,value) => {
    if (key === 'string') {
      this.arr = this.userStr as string[];
      //return new arr(value);
    }
    //return value;
  });*/
  } 
   
}
