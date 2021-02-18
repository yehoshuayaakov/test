import { Component, OnInit, Input } from '@angular/core';
import { LensePageComponent } from '../lense-page/lense-page.component';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-choose-lenses',
  templateUrl: './choose-lenses.component.html',
  styleUrls: ['./choose-lenses.component.css']
})
export class ChooseLensesComponent implements OnInit {
@Input() Lense: any;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
addToOrder(title: string){
  this.orderService.addlense(title);
  console.log(this.orderService.lense);
}
}
