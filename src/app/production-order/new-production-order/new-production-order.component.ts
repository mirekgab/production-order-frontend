import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductionOrderService } from '../production-order.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-production-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-production-order.component.html',
  styleUrl: './new-production-order.component.css'
})
export class NewProductionOrderComponent {
  @Output() close = new EventEmitter();
  @Input() isNewProductionOrder: boolean = true;
  @Input({ required: true }) enteredId!: string;
  @Input({ required: true }) enteredName!: string;
  oldProductionOrderId: string = '';

  constructor(private productionOrderService: ProductionOrderService) { }

  onCancel() {
    this.close.emit();
  }

  ngOnInit() {
    if (!this.isNewProductionOrder) {
      this.oldProductionOrderId = this.enteredId;
    }
  }

  onSubmit() {
    if (this.isNewProductionOrder) {
      this.productionOrderService.addProductionOrder(
        {
          id: this.enteredId,
          name: this.enteredName
        }
      )
    }
    else {
      this.productionOrderService.updateProductionOrder(this.oldProductionOrderId,
        {
          id: this.enteredId,
          name: this.enteredName
        }
      )
    }
    this.close.emit();
  }
}


