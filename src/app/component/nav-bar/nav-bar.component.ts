import { Component, OnInit } from '@angular/core';
import { Collapse,Ripple, Dropdown, initTE } from 'tw-elements';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  ngOnInit() {
    initTE({ Collapse, Dropdown,Ripple });
  }

}
