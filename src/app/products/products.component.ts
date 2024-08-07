import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: any;
  cartProducts: any;

  constructor(private router: Router) { }

  ngOnInit() {
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }
    this.products = [
      {
        id: 1,
        title: "Americano",
        description: "Americano",
        img: "assets/coffee-1.jpg",
        price: 2
      },
      {
        id: 2,
        title: "Espresso Machine",
        description: "Italian Espresso Machine",
        img: "assets/espresso-machine.jpg",
        price: 800
      },
      {
        id: 3,
        title: "Coffee",
        description: "Cup of Coffee",
        img: "assets/cup-of-coffee.jpg",
        price: 3
      },
      {
        id: 4,
        title: "Latte",
        description: "12 oz Latte",
        img: "assets/latte.jpg",
        price: 2
      },
      {
        id: 5,
        title: "Cappuccino",
        description: "Americano",
        img: "assets/cappuccino.jpg",
        price: 2
      },
      {
        id: 6,
        title: "Milk",
        description: "Pint of Milk",
        img: "assets/milk.jpg",
        price: 2
      },
      {
        id: 7,
        title: "Americano",
        description: "Americano",
        img: "assets/coffee-1.jpg",
        price: 2
      },
      {
        id: 8,
        title: "Americano",
        description: "Americano",
        img: "assets/coffee-1.jpg",
        price: 2
      },
      {
        id: 9,
        title: "Americano",
        description: "Americano",
        img: "assets/coffee-1.jpg",
        price: 2
      }
    ];
  }

  addToCart(index: any) {
    let product = this.products[index];
    let cartData: any[] = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
  }

  updateCartData(cartData: any[]) {
    this.cartProducts = cartData;
  }

  goToCart() {
    console.log('Navigating to cart');
    this.router.navigate(['/cart']).then(success => {
      if (success) {
        console.log('Navigation to cart successful');
      } else {
        console.log('Navigation to cart failed');
      }
    });
  }
}
