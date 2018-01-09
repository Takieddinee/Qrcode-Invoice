import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';



export class Element{
  description: String;
  quantity: number;
  unitPrice: number;
  tax: number;
  totalPrice: number;
}

export class Facture {
  docType : String;
  numero: number;
  date: String;
  to: String;
  total: number;
  elements: Array <Element>; 
}

@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent implements OnInit {

  title = 'TP ASI';
  elementType : 'url' | 'canvas' | 'img' = 'url';
  docType: string = "facture";
  numero: number = 0;
  date: string = "10-02-2017";
  to : string = "A";
  subTotal: number=0;
  taxAmount: number=0;
  total: number=0;
  value : string = '';
  i = 0;
  visible = false;
  private fieldArray: Array<Element> = new Array<Element>();
  private newAttribute: any = {};


  facture = new Facture();




  constructor(){
  
  }
  
  

  calculerResultat(){
    this.i = 0;
    this.subTotal =0;
    this.total = 0;
    this.taxAmount =0;
    while(this.i < this.fieldArray.length){
      this.fieldArray[this.i].totalPrice = this.fieldArray[this.i].unitPrice * this.fieldArray[this.i].quantity +( this.fieldArray[this.i].tax * this.fieldArray[this.i].unitPrice * this.fieldArray[this.i].quantity);
      this.subTotal = this.subTotal + this.fieldArray[this.i].unitPrice * this.fieldArray[this.i].quantity;
      this.taxAmount = this.taxAmount +  this.fieldArray[this.i].tax * this.fieldArray[this.i].unitPrice * this.fieldArray[this.i].quantity;
      this.i = this.i + 1;
    }
    this.total = this.subTotal + this.taxAmount;
    this.facture.date = this.date;
    this.facture.docType= this.docType;
    this.facture.numero = this.numero;
    this.facture.to= this.to;
    this.facture.total= this.total;
    this.facture.elements = this.fieldArray;
    this.visible = true;
    this.value = JSON.stringify(this.facture);

  }

  printPage(): void {
    window.print()
}

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
}

deleteFieldValue(index) {
    this.fieldArray.splice(index, 1);
}


  ngOnInit() {
  }

}
