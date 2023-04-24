import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Pedidos",
      icon: "dataset",
      routeUrl: "/orders",
    };
  }

  ngOnInit(): void {}

  navigateToOrderCreate(): void {
    this.router.navigate(["/orders/create"]);
  }
}
