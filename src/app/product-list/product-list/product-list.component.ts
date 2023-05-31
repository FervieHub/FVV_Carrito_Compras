import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/model/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {

  }
  share() {
    //window.alert('El prducto ha sido compartido');
    this.cartService.notCompartir();
  }

  onNotify() {
    //window.alert('Será notificado cuando el producto salga a la venta');
  this.cartService.notFuturo();
  }

}
