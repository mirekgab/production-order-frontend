import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  @Output() close = new EventEmitter();
  @Input({ required: true }) enteredId!: string;
  @Input({ required: true }) enteredName!: string;
  @Input() isNewProduct: boolean = true;
  oldProductId: string = '';

  constructor(private productService: ProductService) { };

  onCancel() {
    this.close.emit();
  }

  ngOnInit() {
    if (!this.isNewProduct) {
      this.oldProductId = this.enteredId;
    }
  }

  onSubmit() {
    if (this.isNewProduct) {
      this.productService.addProduct(
        {
          id: this.enteredId,
          name: this.enteredName
        }
      )
    } else {
      this.productService.updateProduct(this.oldProductId, {id: this.enteredId, name: this.enteredName});
    }

    this.close.emit();
  }
}
