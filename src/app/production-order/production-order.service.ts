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
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
    { id: 'production-order04', name: 'production order 4' },
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
