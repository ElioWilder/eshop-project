import { Pipe, PipeTransform} from '@angular/core';
import { Product } from '../models/product.model';

//ne marche pas, je ne sais pas pk

@Pipe({ name: 'sortByName'})
export class SortByNamePipe implements PipeTransform{
    transform(products: Product[], field: string): any[] {

        products.sort((a: any, b: any) => {
    
          if (a[field] < b[field]) {
            return -1;
          } else if (a[field] > b[field]) {
            return 1;
          } else {
            return 0;
          }
        });
    
        return products;
    }    
}