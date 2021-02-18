import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
frame: string;

lense: string;
prescription = {
  rightEyePrescription: null, 
  leftEyePrescription: null,
  rightEyeCylinder: null,
  leftEyeCylinder: null

};
  constructor() { }
  addframe(a: any){
    this.frame = a;
  }
  addlense(b:any){
    this.lense = b;
  }
  addPrescription(p: any){
    this.prescription = p;

  }
  getLense(){
    return this.lense;
  }
  getFrame(){
    return this.frame;
  }
  getPrescription(){
    return this.prescription;
  }
}



