import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product_interface';

@Component({
  selector: 'app-monitor',
  standalone: false,
  templateUrl: './monitor.component.html',
  styleUrl: './monitor.component.css'
})
export class MonitorComponent implements OnInit {
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
