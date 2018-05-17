import { Component } from '@angular/core';
import { ChannelService } from '../../channel.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
})
export class Comp1Component{

  public value: string;

  constructor(
    private channel: ChannelService
  ) {
      this.channel.getMessage().subscribe(
        data => {
          if(data.destinatario === "comp1"){
            this.value = data.message
          }
        }
      )
  }

  send(value: string){
    let data = {destinatario:"comp2",message:value}
    this.channel.sendMessage(data)
  }

}
