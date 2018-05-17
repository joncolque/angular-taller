import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent.component.html',
})
export class ParentComponent1{
  public message: string

  onEnter(message) {
    this.message = message
  }
}
