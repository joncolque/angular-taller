import { Component } from '@angular/core';
import { Router, Route } from "@angular/router";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})

export class TabComponent{
  public label: string = "tab eins"
  public navLinks:Array<any>

  constructor(
    private router:Router
  ){
    this.navLinks = [...router.config.slice(0,router.config.length-1)]
  }
}
