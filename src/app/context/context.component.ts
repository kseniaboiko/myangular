import { Component, OnInit, Input } from '@angular/core';
import { Tab } from '../tabs';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.scss']
})
export class ContextComponent implements OnInit {
  @Input() tab: Tab;
  constructor() { }

  ngOnInit() {
  }

}