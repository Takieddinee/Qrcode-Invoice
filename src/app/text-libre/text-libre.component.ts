import { Component, OnInit } from '@angular/core';

export class TextLibre{
  docType: String;
  contenu: String;
}

@Component({
  selector: 'app-text-libre',
  templateUrl: './text-libre.component.html',
  styleUrls: ['./text-libre.component.css']
})
export class TextLibreComponent implements OnInit {

  visible : boolean=  false;
  dt: String;
  contenu: String;
  textLibre: TextLibre = new TextLibre();
  value: String = "";

  constructor() { }

  ngOnInit() {
  }

  calculerResultat(){
  this.textLibre.contenu = this.contenu;
  this.textLibre.docType= this.dt;
  this.value = JSON.stringify(this.textLibre);
  this.visible = true;

  }

}
