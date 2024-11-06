import { Component,OnInit } from '@angular/core';
import { ProduitService } from '../services/produit.service';
import { ActivatedRoute,Router } from '@angular/router';
import { Produit } from '../model/produit.model';



@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styles: ``
})
export class UpdateProduitComponent implements OnInit{
  currentProduit = new Produit();
  constructor(private activatedRoute: ActivatedRoute,
    private router :Router,
    private produitService: ProduitService)
     { }
ngOnInit() {
// console.log(this.route.snapshot.params.id);
this.produitService.consulterProduit(this.activatedRoute.snapshot.params['id']).
 subscribe( prod =>{ this.currentProduit = prod; } ) ;
}
updateProduit()
{ //console.log(this.currentProduit);
  this.produitService.updateProduit(this.currentProduit).subscribe(prod => {
    this.router.navigate(['produits']); }
    );
    
  
}

}
