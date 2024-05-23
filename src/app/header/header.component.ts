import { Component } from "@angular/core";

@Component({
    //it is declared as a html tag
    selector:'app-header',

    //now it is declared as a html attribute
    //selector:'[app-header]',

    //now it is declared as a css class
    // selector:'.app-header',

    //template:'<h3>learn angular</h3>',
    templateUrl:'./header.component.html',
    // styles:['label{background-color:red }','input{background-color:pink}'],
    styleUrls:['./header.component.css']


})


export class HeaderComponent {

}