import { Component, inject } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product_interface';
import { Route, Router } from '@angular/router';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';



@Component({
  selector: 'app-prodotti',
  standalone: false,
  templateUrl: './prodotti.component.html',
  styleUrl: './prodotti.component.css'

})
export class ProdottiComponent {
    products:Product[]=[];
    isLoading:boolean=false;
    private _snackBar = inject(MatSnackBar);
    
    constructor(private productService: ProductsService, private router:Router) {
      
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
            this.products = response.filter(product => product.id > 0);
            this.isLoading=false;
          },
          error: (error) => {
            console.log(error);
            this.isLoading=false;
          }
        }
      );
    }



    carrello(product:Product){
      this._snackBar.open( 'nome prodotto: ' +product.model + ' ' + 'prezzo: ' + ' ' + product.price + '€ '+ "aggiunto al carrello", "ok", {duration: 2000, panelClass:['success-snackbar']});
    }
    acquista(product:Product){
      
      this._snackBar.open( 'nome prodotto: ' +product.model + ' ' + 'prezzo: ' + ' ' + product.price + '€ '+ "acquistato con successo", "ok", {duration: 2000, panelClass:['success-snackbar']});
    }
    naviga(product:Product){
      this.router.navigate(['dettaglio_prodotto/' + product.id])
    }

}