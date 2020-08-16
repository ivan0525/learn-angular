import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  items = [];
  constructor(private http: HttpClient) {}

  // 加入购物车
  addToCart(product) {
    this.items.push(product);
  }

  // 获取商品
  getItems() {
    return this.items;
  }

  // 清空购物车
  clearCart() {
    this.items = [];
    return this.items;
  }

  // 获取运费
  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
}
