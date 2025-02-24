import { Component } from '@angular/core';

@Component({
  selector: 'app-telefono',
  standalone: false,
  templateUrl: './telefono.component.html',
  styleUrl: './telefono.component.css'
})
export class TelefonoComponent {
  on: boolean = false;


  accendiifone(evt: any){
    this.on=evt.checked;
    console.log(this.on, evt);
  }
}
