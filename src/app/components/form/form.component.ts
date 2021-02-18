import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  prescription: {
  rightEyePrescription: number; 
  leftEyePrescription: number;
  rightEyeCylinder: number;
  leftEyeCylinder: number;
  }
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
  }
sendForm(p: any){
  this.orderService.addPrescription(p);
console.log(this.orderService.prescription)
}
}
