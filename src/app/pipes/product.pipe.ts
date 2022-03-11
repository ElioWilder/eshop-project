import { Pipe, PipeTransform} from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({ name: 'sortByDate'})
export class SortByDatePipe implements PipeTransform {
    transform(products: Product[], order?: any){
        let desc = !(order && order === 'asc');
        return products.sort((a,b) => { 
            if (desc) return new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
            else return new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
        });
    }
}