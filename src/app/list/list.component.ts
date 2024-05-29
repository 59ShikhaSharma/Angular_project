import { Component } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  //using normal declaration
  // name:string='Shikha';
  // age: number=21;
  // phoneNumber: number=123;
  // gender:string='female'
  //using intro object
  name1: string = "";
  name = "Shikha Sharma";
  text = " ";
  intro = {
    name: 'Shikha',
    age: 21,
    phoneNumber: 123,
    gender: 'female',
    pImage: '/assets/images/nature.jpg'

  }

  onChange(event: any) {
    console.log(event.target.value);
  }

  onNameChange(event: any) {
    //this.name="Mark";
    //while writing on input field it is displaying
    this.text = event.target.value;
  }

  onClickMe() {
    this.name = 'happy';

  }

  // listOfString: string[] = ['Mark','Steve','Mary','John','Sarah'];

  isDisabled: boolean = true;
  setDisabled(value: boolean): void {
    this.isDisabled = value;
  }

}
