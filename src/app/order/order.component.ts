import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  shoppingList = [];
  selectedMomo;
  selectedQuantity;

  constructor() { }

  ngOnInit() {
  }

  onChange(selectedMomo){
    //this.momoList.push(selectedMomo);
  }

  addMomo(){
    this.shoppingList.push({"item": this.selectedMomo, "quanity" : this.selectedQuantity});
  }

  onSubmit(){
    //alert();
  }

}
