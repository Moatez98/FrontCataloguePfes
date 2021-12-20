import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-ajouter-pfe',
  templateUrl: './ajouter-pfe.component.html',
  styleUrls: ['./ajouter-pfe.component.css']
})
export class AjouterPfeComponent implements OnInit {
type:any;
totale:number=0;
pfe:any={"titre":"" ,"type":{"id":""}};
constructor(private gest:GestionService,private rout:Router) { }

  ngOnInit(): void {
    this.getTypes()
  }
  getTypes(){
    this.gest.getTypes().subscribe({
      next:(data:any)=>{this.type =data ;
      this.getpfe();
        console.log(data)},
      error:(err:any)=>{},
      complete:()=>{}
    })
  }
  getpfe(){
    this.gest.getPfes().subscribe({
      next:(data:any)=>{
        this.totale=data.length ;
      
        console.log( this.totale)},
      error:(err:any)=>{},
      complete:()=>{}
    })
  }
  ajouterpfe(){
    this.gest.AjouterPfe(this.pfe).subscribe({
      next:(data:any)=>{
        
        this.rout.navigate(["List"])
      },
      error:(err:any)=>{},
      complete:()=>{}
    })
  }
  

}
