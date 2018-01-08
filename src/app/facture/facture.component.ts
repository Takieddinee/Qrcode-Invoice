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
  totalPrice: number;
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
  /* description: string[]=["x","y"];
  quantity: string[]=["10","20"];
  unitPrice: string[]=["10","20"];
  totalPrice: string[]=["100","400"];
  tax: string[]=["0","0  "]; */
  value : string = '';
  i = 0;
  visible = false;
  private fieldArray: Array<Element> = new Array<Element>();
    private newAttribute: any = {};
  elements : Element[] = [{"description": "x","quantity": 10 ,"totalPrice": 100, "tax": 0,"unitPrice": 10}
  ,{"description": "y","quantity": 10 ,"totalPrice": 100, "tax": 0,"unitPrice": 10}];

  facture = new Facture();




  constructor(){
    
 /*   this.value="{ docType: "+ this.docType +", " +"number: "+ this.number + ", date: "+ this.date +", to: "+this.to;
  while(this.i< this.description.length){
    if (this.i == 0) this.value= this.value + ", elements: ["
    this.value = this.value + "{description: "+ this.description[this.i]+ ", quantity: "+ this.quantity[this.i]
    + ", unitPrice: "+this.unitPrice[this.i]+", tax: "+this.tax[this.i]+", totalPrice: "+this.totalPrice[this.i]
    + " },"
    this.i = this.i + 1;
    if(this.i == this.description.length) this.value = this.value + " ] }"
  } */
  
    let fac = new Facture();
    let element1= new Element() ;
    let element2 = new Element();
        
    /* this.fac.datee= "10-02-2017";
    this.fac.docType = this.docType;
    this.fac.number = this.number;
    this.fac.to =this.to;
    this.fac.elements = [this.element1,this.element2]; */
    fac =  { "date": "10-02-2017","docType" : this.docType, "numero": this.numero,"totalPrice": this.total, "to": this.to,
    "elements": [  element1 = {"description": "x","quantity": 10 ,"totalPrice": 100, "tax": 0,"unitPrice": 10}
    ,element2= {"description": "y","quantity": 10 ,"totalPrice": 100, "tax": 0,"unitPrice": 10}]};
    
    this.value = JSON.stringify(fac);
    console.log('hh');

  }
  
  

  calculerResultat(){
    console.log(this.fieldArray);
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
    console.log(this.total);
    this.facture.date = this.date;
    this.facture.docType= this.docType;
    this.facture.numero = this.numero;
    this.facture.to= this.to;
    this.facture.totalPrice= this.total;
    this.facture.elements = this.fieldArray;
    this.visible = true;
    this.value = JSON.stringify(this.facture);

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
