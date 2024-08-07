import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']  // Corrected 'styleUrl' to 'styleUrls'
})
export class CartComponent implements OnInit {

  cartProducts: any[] = [];
  bill: number = 0;

  constructor() { }

  ngOnInit() {
    this.initiateData();
  }

  initiateData() {
    const data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
      this.bill = 0;
      for (const product of this.cartProducts) {
        product["qt"] = 1;
        this.bill += product.price * product.qt;  // Corrected calculation
      }
    } else {
      this.cartProducts = [];
    }
  }

  updateTotal() {
    this.bill = 0;
    for (const product of this.cartProducts) {
      this.bill += product.price * product.qt;  // Corrected calculation
    }
  }

  removeItem(id: number) {  // Explicitly defining the type of 'id' as number
    this.cartProducts.splice(id, 1);
    if (this.cartProducts.length) {
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    } else {
      localStorage.removeItem('cart');  // Changed to removeItem instead of setting to null
    }
  }

  payBill() {
    if (this.cartProducts.length) {
      localStorage.removeItem('cart');
      this.initiateData();
      alert("Your bill is: " + this.bill);
    } else {
      alert("No items in cart");
    }
  }
}
