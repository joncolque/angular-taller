import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
})
export class NgIfComponent{

  condicion:boolean = false

  cambiar(){
    this.condicion = !this.condicion
  }
}
