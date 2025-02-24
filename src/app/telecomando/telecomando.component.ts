import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-telecomando',
  standalone: false,
  templateUrl: './telecomando.component.html',
  styleUrl: './telecomando.component.css'
})
export class TelecomandoComponent {
@Input() on:boolean=false
@Output() sendSignal: EventEmitter<any>=new EventEmitter<any>()

accendi(){
this.on=!this.on;
this.sendSignal.emit(this.on)
}

}
