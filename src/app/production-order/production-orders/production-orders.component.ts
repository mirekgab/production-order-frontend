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
    this.productionOrderService.removeProductionOrder(productionOrderId);
    this.productionOrdersList = this.productionOrderService.getProductionOrderList();
  }

  editProductionOrder(productionOrderId: string) {
    this.selectedProductionOrder = this.productionOrderService.getProductionOrder(productionOrderId);
    this.isAddingProductionOrder = true;
    this.isNewProductionOrder = false;

  }

  onAddProductionOrder() {
    this.selectedProductionOrder={id:'', name:''};
    this.isAddingProductionOrder = true;
    this.isNewProductionOrder = true;
  }

  onCloseAddProductionOrder() {
    this.isAddingProductionOrder = false;
  }

}
