import { Component, OnInit, Input } from '@angular/core';
import { OrderService } from 'src/app/services/order.service'
@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrls: ['./frames.component.css']
})
export class FramesComponent implements OnInit {
@Input() frame;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
 
}
addToOrder(name: string){
this.orderService.addframe(name);
 console.log(this.orderService.frame)
}
}
