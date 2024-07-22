import { Component } from '@angular/core';
import { ProductionOrderService } from '../production-order.service';
import { ProductionOrder } from '../production-order.model';
import { NewProductionOrderComponent } from "../new-production-order/new-production-order.component";

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [NewProductionOrderComponent],
  templateUrl: './production-orders.component.html',
  styleUrl: './production-orders.component.css'
})
export class ProductionOrdersComponent {
  isAddingProductionOrder: boolean = false;
  isNewProductionOrder: boolean = false;
  productionOrdersList: ProductionOrder[] = this.productionOrderService.getProductionOrderList();
  selectedProductionOrder!: ProductionOrder;

  constructor(private productionOrderService: ProductionOrderService) {

  }

  removeProductionOrder(productionOrderId: string) {

  }

  editProductionOrder(productionOrderId: string) {

  }

  onAddProductionOrder() {

  }

  onCloseAddProductionOrder() {

  }

}
