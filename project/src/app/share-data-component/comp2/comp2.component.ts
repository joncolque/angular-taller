import { Component } from '@angular/core';
import { ChannelService } from '../../channel.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
})
export class Comp2Component{

  public value: string;

  constructor(
    private channel: ChannelService
  ) {
    this.channel.getMessage().subscribe(
      data => {
        if(data.destinatario === "comp2"){
          this.value = data.message
        }
      }
    )
  }

  send(value: string){
    let data = {destinatario:"comp1",message:value}
    this.channel.sendMessage(data)
  }
}
