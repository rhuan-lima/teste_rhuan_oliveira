import { Component, OnInit } from '@angular/core';
import { Product } from '../../product/product.model';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-order-read',
  templateUrl: './order-read.component.html',
  styleUrls: ['./order-read.component.css']
})

//To do: Alterar products para orders
export class OrderReadComponent implements OnInit {
  products: Product[] = [];
  displayedColumns = ["id", "name", "price", "action"];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products;
      console.log(products);
    });
  } 
}
