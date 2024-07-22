import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductionOrderService } from '../production-order.service';
import { ProductionOrder } from '../production-order.model';

@Component({
  selector: 'app-production-order-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './production-order-detail.component.html',
  styleUrl: './production-order-detail.component.css'
})
export class ProductionOrderDetailComponent {
  productionOrder: ProductionOrder = <ProductionOrder>{};

  constructor(
    private route: ActivatedRoute,
    private productionOrderService: ProductionOrderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = params['productionOrderId'];
      this.productionOrder = this.productionOrderService.getProductionOrder(id);
    });
  }

}
