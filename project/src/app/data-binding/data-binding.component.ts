import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  public value: string //interpolacion
  public value2: string //two way data-binding
  public username: string

  constructor() { }

  ngOnInit() {
  }
  
  onEnter(value){
    this.value = value
  }

}
