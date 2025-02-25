import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../interfaces/product_interface';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit{

    id!:number
    product!:Product
    constructor(private route:ActivatedRoute, private productService:ProductsService){

    }
    ngOnInit(): void {
      this.id=Number(this.route.snapshot.paramMap.get('id'));
      this.getProduct(this.id);
    }

    getProduct(id:number){
      this.productService.getProduct(id).subscribe({
        next:(product:Product)=>{
          this.product=product;
          console.log(this.product);
        }, 
        error:(error: any) =>{
          console.log(error);
        }
      })
    }
}
