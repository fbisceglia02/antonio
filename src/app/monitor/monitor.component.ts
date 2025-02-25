import { Component } from '@angular/core';

@Component({
  selector: 'app-monitor',
  standalone: false,
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent {
    on: boolean = false;
    mute: boolean = false;
    uno: boolean = false;

    accendiMonitor(evt: any){
      this.on=evt.checked;
      console.log(this.on, evt);
    }

    getRemoteSignal(evt: any){
      this.on = evt;

    }
    getMute(evt: boolean){
      this.mute=evt;
    }
    getUno(evt: boolean){
      this.uno = evt;
    }
}
