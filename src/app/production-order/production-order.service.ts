import { Injectable } from '@angular/core';
import { ProductionOrder } from './production-order.model';

@Injectable({
  providedIn: 'root'
})
export class ProductionOrderService {
  private productionOrdersList = [
    { id: 'production-order01', name: 'production order 1' },
    { id: 'production-order02', name: 'production order 2' },
    { id: 'production-order03', name: 'production order 3' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order05', name: 'production order 5' },
    { id: 'production-order06', name: 'production order 6' },
    { id: 'production-order07', name: 'production order 7' },
    { id: 'production-order08', name: 'production order 8' },
    { id: 'production-order09', name: 'production order 9' },
    { id: 'production-order10', name: 'production order 10' },
    { id: 'production-order11', name: 'production order 11' },
    { id: 'production-order12', name: 'production order 12' },
    { id: 'production-order13', name: 'production order 13' },
    { id: 'production-order14', name: 'production order 14' },
    { id: 'production-order15', name: 'production order 15' },
    { id: 'production-order16', name: 'production order 16' },
    { id: 'production-order17', name: 'production order 17' },
  ];

  constructor() { }

  getProductionOrderList() {
    return this.productionOrdersList;
  }

  getProductionOrder(productionOrderId: string) {
    return this.productionOrdersList.filter((o) => o.id === productionOrderId)[0];
  }

  addProductionOrder(productionOrder: ProductionOrder) {
    this.productionOrdersList.push(productionOrder);
  }

  removeProductionOrder(productionOrderId: string) {
    this.productionOrdersList = this.productionOrdersList.filter((o) => o.id !== productionOrderId);
  }

  updateProductionOrder(oldProductionOrderId: string, productionOrder: ProductionOrder) {
    let p = this.productionOrdersList.find((o) => o.id === oldProductionOrderId)!;
    p.id = productionOrder.id;
    p.name = productionOrder.name;
  }
}
