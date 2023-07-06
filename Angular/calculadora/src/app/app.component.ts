import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  numArray: number[] = [];
  numC: string = '';
  num: string = '';
  op: string[] = [];
  disp(num: string) {
    this.num += num;
    this.numC += num;
  } 

  delete(){
    this.num = '';
    this.numC = '';
    this.numArray = [];
    this.op = [];
  }

  operator(op: string){
    this.op.push(op);
    this.numC += op;
    this.numArray.push(+this.num);
    this.num = '';
  }
  
  calculate() {
    this.numArray.push(+this.num);
    this.num = '';
  
    // Primero multiplicamos y dividimos
    for (let i = 0; i < this.op.length; i++) {
      if (this.op[i] === 'X') {
        this.numArray[i] = this.numArray[i] * this.numArray[i + 1];
        this.numArray.splice(i + 1, 1);
        this.op.splice(i, 1);
        i--; // Restamos i porque borramos un operador
      } else if (this.op[i] == '/') {
        if (this.numArray[i + 1] == 0) {
          // Divison por cero
          this.numC = 'Syntax error';
          return;
        }
        this.numArray[i] = this.numArray[i] / this.numArray[i + 1];
        this.numArray.splice(i + 1, 1);
        this.op.splice(i, 1);
        i--; // 
      }
    }
  
    let totalNumber = this.numArray[0];
  
    //Sumas y restas
    for (let i = 0; i < this.op.length; i++) {
      if (this.op[i] == '+') {
        totalNumber += this.numArray[i + 1];
      } else {
        totalNumber -= this.numArray[i + 1];
      }
    }
  
    this.numC = totalNumber.toString();
    this.num = this.numC;
    this.numArray = [];
    this.numArray.push(+this.numC);
    this.op = [];
  }
  
}
