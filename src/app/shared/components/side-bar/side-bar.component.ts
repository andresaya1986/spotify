import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  //standalone: true,
  //imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit{
  
  mainMenu: { defaultOptions: Array<any>, accessLink: Array<any>} = { defaultOptions:[], accessLink: []}

  customOptions: Array<any> =[]

  linksMenu: Array<any> = [
    {
      name:'Home',
      icon:'uil-estate',
      router:['/']
    },
    {
      name:'Buscar',
      icon:'uil-search',
      router:['/','history']
    },
    {
      name:'Tu biblioteca',
      icon:'uil-chart',
      router:['/','favorites'],
      query:{hola:'mundo'}
    }
  ]

  constructor(private router: Router){}

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name:'Home',
        icon:'uil-estate',
        router:['/']
      },
      {
        name:'Buscar',
        icon:'uil-search',
        router:['/','history']
      },
      {
        name:'Tu biblioteca',
        icon:'uil-chart',
        router:['/','favorites']
      }
    ]

    this.mainMenu.accessLink = [
      {
        name: 'Crear lista',
        icon: 'uil-plus-square'
      },
      {
        name: 'Canciones que te gustan',
        icon: 'uil-heart-medical'
      }
    ]

    this.customOptions = [
      {
        name: 'Mi lista º1',
        router: ['/']
      },
      {
        name: 'Mi lista º2',
        router: ['/']
      },
      {
        name: 'Mi lista º3',
        router: ['/']
      },
      {
        name: 'Mi lista º4',
        router: ['/']
      }
    ]

  }

  goTo($event: any): void{
    this.router.navigate(['/','favorites'],{
      queryParams:{
        key1:'value1',
        key2:'value2'
      }
    })
    console.log($event)
  }
}

