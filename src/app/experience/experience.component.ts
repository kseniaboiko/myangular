import { Component, OnInit } from '@angular/core';
import {Details} from "../details";
const json = '{ "description": "Low score...", "date": "7-7-1984", "score": 7, "approved": false }';
const d = JSON.parse(json) as Details;
function tryAppend<T>(propName: string, act: () => T) {
  let message;
 try {
      message = act();
 } catch (e) {
     message = `<span style="color: red">${e}</span>`;
 } finally {
     const html = document.body.innerHTML;
     document.body.innerHTML = `${html}<br/>${propName}: ${message}`;
}
}

tryAppend<boolean>('approved', () => d.approved);
tryAppend<string>('description', () => d.description);
tryAppend<number>('score', () => d.score);





@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  

  constructor() { }

  ngOnInit() {
  }

}
