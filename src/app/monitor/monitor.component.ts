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
    products: Product[] = [];

constructor(private productsService: ProductsService) {

}
ngOnInit(): void {
  // this.fetchProducts();
}

// fetchProducts() {
//   this.productsService.fetchAllProducts().subscribe({

//     next: (products: Product[]) => {
//         this.products = products;
//         console.log(this.products);
//     },

//     error: (error: any) => {
//       console.log(error);
//     }



//   });
// }

    accendiMonitor(evt: any){
      this.on=evt.checked;
      console.log(this.on, evt);
    }

    getRemoteSignal(evt: any){
      this.on = evt;

    }
}
