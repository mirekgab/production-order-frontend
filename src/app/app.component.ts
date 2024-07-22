import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./product/products/products.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HeaderComponent, HomeComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'production-order-frontend';
  homeDisplay: boolean = false;
  productDisplay: boolean = true;

  onHome() {
    console.log('onHome');
    this.homeDisplay = true;
    this.productDisplay = false;
  }

  onProducts() {
    console.log('onProduct');
    this.homeDisplay = false;
    this.productDisplay = true;
  }
}
