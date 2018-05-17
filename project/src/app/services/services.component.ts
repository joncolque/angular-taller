import { Component } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent{
  public usuarios: Array<any>
  renderer:boolean = false

  constructor(
    private userService: UsersService
  ) {

  }

  users(){
    this.renderer = true
    this.userService.getUsers()
    .then(
      result => {
        console.log(result)
        this.usuarios = result
        this.renderer = false
      }
    )
    .catch(
      error => console.log(error)
    )
  }

}
