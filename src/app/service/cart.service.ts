import { Injectable } from '@angular/core';
import { Product } from '../model/Product';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private http:HttpClient) { }

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;

  }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  notCompartir(){
    Swal.fire('Felicitaciones','Su producto ha sido compartido!', 'success')
  }

  notFuturo(){
    Swal.fire('Aviso','Teinformamermos de las novedades del producto!', 'success')
  }

  notAgregar(){
    Swal.fire('Aviso','El producto ha sido agregado al carrito!', 'success')
  }


}
