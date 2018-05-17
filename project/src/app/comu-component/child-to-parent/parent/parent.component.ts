import { Component } from '@angular/core';

@Component({
  selector: 'app-child-to-parent',
  templateUrl: './parent.component.html',
})
export class ParentComponent{
  public message: string

  changeValue(value: string){
    this.message = value
  }
}
