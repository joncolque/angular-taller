import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-child-1',
  templateUrl: './child.component.html',
})
export class ChildComponent1 {
  @Input() data: string;
}
