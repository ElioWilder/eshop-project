import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  productsObservable!: Observable<any>;
    search: string = '';
    
    constructor(private productsService: ProductsService){}
  
    ngOnInit() { 
      this.search = "";
      this.productsObservable = this.productsService.getAllProducts();
    }

}
