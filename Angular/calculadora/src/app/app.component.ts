import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';

  numC: string = '';

  disp(num: string) {
    this.numC += num;
  } 

  delete(){
    this.numC = '';
  }

  calculate() {
    
    let arrayNumbers = [];
    let finalNum = 0;
    arrayNumbers = this.numC.split(" ");

    for (let i = 0; i < arrayNumbers.length; i++) {
      if(i == 0){
        finalNum = +arrayNumbers[i];
        i++;
      }
        let num2 = +arrayNumbers[i+1];
        switch (arrayNumbers[i] as any) {
          case '+':
            finalNum+= num2;
            break;
          case '-':
            finalNum-= num2;
            break;
          case 'X':
            finalNum = finalNum * num2;
            break;
          case '/':
            finalNum+= finalNum / num2;
            break;
          default:
            break;
        }
        i++;      
    }
    
    this.numC = finalNum.toString();

  }

}
