import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lampadina',
  standalone: false,
  templateUrl: './lampadina.component.html',
  styleUrl: './lampadina.component.css'
})
export class LampadinaComponent implements OnChanges {
   color:string = '#ffffff';
  @Input() toggleValue: boolean = false;
  @Output() sendMessage: EventEmitter<string> = new EventEmitter<string>()
  
  ngOnChanges(changes: SimpleChanges): void {
    if(!this.toggleValue) {
      this.color = '#ffffff'
      this.sendMessage.emit('sono spento');
    } else {
      this.color = '#ffff00'
      this.sendMessage.emit('sono acceso')
    }


  }
}

