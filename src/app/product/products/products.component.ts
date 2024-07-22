import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { NewProductComponent } from "../new-product/new-product.component";
import { ListComponent } from "../../shared/list/list.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NewProductComponent, ListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productsList: Product[] = this.productService.getProductsList();
  isAddingProduct: boolean = false;
  selectedProduct!: Product;
  isNewProduct: boolean = false;

  constructor(private productService: ProductService) { };

  onAddProduct() {
    this.selectedProduct = { id: '', name: '' };
    this.isAddingProduct = true;
    this.isNewProduct = true;
  }

  onCloseAddProduct() {
    this.isAddingProduct = false;
    this.productsList = this.productService.getProductsList();
  }

  editProduct(productId: string) {
    this.selectedProduct = this.productService.getProduct(productId);
    this.isAddingProduct = true;
    this.isNewProduct = false;
  }

  removeProduct(productId: string) {
    this.productService.removeProduct(productId);
    this.productsList = this.productService.getProductsList();
  }

}
