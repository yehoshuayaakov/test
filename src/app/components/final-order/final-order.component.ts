import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-final-order',
  templateUrl: './final-order.component.html',
  styleUrls: ['./final-order.component.css']
})
export class FinalOrderComponent implements OnInit {
frame;
lense;
prescription = {
  rightEyePrescription: null,
  leftEyePrescription: null,
  rightEyeCylinder: null,
  leftEyeCylinder: null
};
  constructor(private orderService: OrderService) { 
    this.frame = this.orderService.getFrame();
    this.lense = this.orderService.getLense();
    this.prescription = this.orderService.getPrescription();
  }

  ngOnInit(): void {
  }

}
