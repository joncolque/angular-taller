import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
})
export class NgForComponent{
  public list: Array<string> = ["objetoooo","objeto2","objeto3","objeto4","atr"]
  public newItem: string

  add(){
    this.list.push(this.newItem)
  }

  remove(index){
    this.list.splice(index,1)
  }
}
