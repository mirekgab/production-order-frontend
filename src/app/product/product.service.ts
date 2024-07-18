import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsList: Product[] = [
    {
      id: 'product01',
      name: 'product 1 name'
    },
    {
      id: 'product02',
      name: 'product 2 name'
    }, 
    {
      id: 'product03',
      name: 'product 3 name'
    },
    {
      id: 'product04',
      name: 'product 4 name'
    }, 
    {
      id: 'product05',
      name: 'product 5 name'
    },
    {
      id: 'product06',
      name: 'product 6 name'
    }, 
    {
      id: 'product07',
      name: 'product 7 name'
    },
    {
      id: 'product08',
      name: 'product 8 name'
    }, 
    {
      id: 'product09',
      name: 'product 9 name'
    },
    {
      id: 'product10',
      name: 'product 10 name'
    },
    {
      id: 'product11',
      name: 'product 11 name'
    }
  ];

  constructor() { }

  getProductsList() {
    return this.productsList;
  }

  getProduct(productId: string) {
    return this.productsList.filter((p)=> p.id === productId)[0];
  }

  addProduct(product: Product) {
    this.productsList.push(product);    
  }

  removeProduct(productId: string) {
    this.productsList = this.productsList.filter((p)=> p.id!==productId);
  }

  updateProduct(oldProductId:string, product: Product) {
    let p = this.productsList.find((p)=>p.id===oldProductId)!;
    p.id = product.id;
    p.name = product.name;
  }

}
