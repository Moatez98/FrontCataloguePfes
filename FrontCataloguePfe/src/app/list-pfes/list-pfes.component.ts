import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-list-pfes',
  templateUrl: './list-pfes.component.html',
  styleUrls: ['./list-pfes.component.css']
})
export class ListPfesComponent implements OnInit {
  type:any;
  pfe:any;
  totale:any;
  titre:any;
  constructor(private gest:GestionService) { }

  ngOnInit(): void {
    this.getTypes();
    this.getpfe();
  
  }
  getTypes(){
    this.gest.getTypes().subscribe({
      next:(data:any)=>{this.type =data ;
      
        console.log(data)},
      error:(err:any)=>{},
      complete:()=>{}
    })
  }
  getffebytype(id:any){
    this.gest.getPfesByType(id).subscribe({
      next:(data:any)=>{this.pfe =data ;
      
        console.log(data)},
      error:(err:any)=>{},
      complete:()=>{}
    })
  }
  getpfe(){
    this.gest.getPfes().subscribe({
      next:(data:any)=>{this.pfe =data
        this.totale=data.length ;
      
        },
      error:(err:any)=>{},
      complete:()=>{}
    })
  }
  gettitre(){
   
   if(this.titre.length==0){
     this.getpfe()
   }if(this.titre.length>0){
    this.gest.getPfesByTitre(this.titre).subscribe({
      next:(data:any)=>{this.pfe =data
        
      
        },
      error:(err:any)=>{},
      complete:()=>{}
    })}
   
  }
  supprimer(id:any){
    this.gest.Supprimer(id).subscribe({
      next:(data:any)=>{this.getpfe();
      
       },
      error:(err:any)=>{},
      complete:()=>{}
    })
  }

}
