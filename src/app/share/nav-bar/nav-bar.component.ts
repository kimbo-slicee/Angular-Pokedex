import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  currentAction:any;
  actions:any[]=[
    {page:'/pokemon',name:'HOME'},
    {page:'/details',name:'ABOUT'},
    {page:'/pokemon',name:'SERVICES'},
    {page:'/home',name:'CONDITIONS'}

  ]

  setCurrentAction(action:any){
    this.currentAction=action;
  }

}
