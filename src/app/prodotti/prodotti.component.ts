import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product_interface';

@Component({
  selector: 'app-prodotti',
  standalone: false,
  templateUrl: './prodotti.component.html',
  styleUrl: './prodotti.component.css'
})
export class ProdottiComponent {
    products:Product[]=[];
    isLoading:boolean=false;
    
    constructor(private productService: ProductsService) {
      
    }

    ngOnInit(): void {
      this.getProducts();
    }
    

    getProducts(){
      this.isLoading=true;
      this.productService.fetchAllProducts().subscribe(
        {
          next: (response: Product[]) => {
            console.log(response);
            this.products = response;
            this.isLoading=false;
          },
          error: (error) => {
            console.log(error);
            this.isLoading=false;
          }
        }
      );
    }


}
