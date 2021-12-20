import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GestionService {

  constructor(private http:HttpClient) { }
  getTypes(){
    return this.http.get("http://localhost:8080/Types");
  }
  getPfes(){
    return this.http.get("http://localhost:8080/Pfes");
  }
  getPfesByType(id:any){
    return this.http.get("http://localhost:8080/PfeBytype/"+id);
  }
  getPfesByTitre(titre:any){
    return this.http.get("http://localhost:8080/PfesBytitre/"+titre);
  }
  Supprimer(id:any){
    return this.http.get("http://localhost:8080/supprimer/"+id);
  }
  AjouterPfe(pfe:any){
    return this.http.post("http://localhost:8080/ajouter/",pfe);
  }
}
