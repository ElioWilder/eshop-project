import { Pipe, PipeTransform} from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({ name: 'filterName'})
export class FilterNamePipe implements PipeTransform {
    transform(products: Product[], term:string) {
        if(term) {
            return products.filter((product) =>product.title.toLowerCase().includes(term.toLowerCase()))
        } else return products;
    }
}