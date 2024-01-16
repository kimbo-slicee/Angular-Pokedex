import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  currentAction:any;
  actions:any[]=[
    {page:'/pokemon',name:'Home',icon:'material-icons'},
    {page:'/details',name:'About',icon:'material-icons'},
    {page:'/pokemon',name:'Home',icon:'material-icons'},
    {page:'/home',name:'Home',icon:'material-icons'}

  ]

  setCurrentAction(action:any){
    this.currentAction=action;
  }

}
