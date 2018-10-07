import { MotorcycleService } from '../motorcycle.service';
import { Component, OnInit, Input } from '@angular/core';
import { Motorcycle } from '../motorcycle';
import { MOTORCYCLES } from '../config-motorcyle';


@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.scss']
})
export class MotorcycleComponent implements OnInit {
  public motorcycles: Motorcycle[]; 
  public motorcycle: Motorcycle;

  constructor( private motorcycleService: MotorcycleService) {}
  
  ngOnInit() {    
    this.motorcycleService.getMotorcycles()
    .subscribe(motorcycles => this.motorcycles = motorcycles);     
    this.estimatedPrice()   
    this.ratioMotorcycle();
  }
  displayedColumns: string[] = ['model','year', 'kilometer', 'estimated', 'color','packs','luggages', 'price', 'score', 'link'];  

  ratioMotorcycle(): any {
    for(var i= 0; i < this.motorcycles.length; i++) {
      const motorcycle = this.motorcycles[i];
      const yearScore = (motorcycle.year - 2000)/18 * 20;
      const kilometerScore = 20 - (motorcycle.kilometer/100000 * 20);
      const priceScore =20-( motorcycle.price/motorcycle.estimated_price * 20);
      console.log(priceScore)
      const luggagesScore = (+motorcycle.has_side_cases + +motorcycle.has_top_case) * 20/2;
      const aluminiumLuggages = +motorcycle.aluminium_luggages * 20;
      const bmwLuggages = +motorcycle.bmw_luggages * 20;      
      const globalScore = ( yearScore + (kilometerScore * 3 ) + priceScore + luggagesScore + ( bmwLuggages * 0.5 ) +( aluminiumLuggages * 0.5 ) ) / 7;
      motorcycle.globalScore = globalScore;
    }
  }
  estimatedPrice():any {
    for(var i= 0; i < this.motorcycles.length; i++) {
      const motorcycle = this.motorcycles[i];
      console.log(motorcycle);
      let estimatedPrice = 0;
      estimatedPrice += 16900;

      if (!motorcycle.is_gsa && motorcycle.color !== 'white' ) {
        estimatedPrice += 105;
      }
      // ADVENTURE
      if (motorcycle.is_gsa) {
        estimatedPrice += 800;
      }

      // PACKS
      if (motorcycle.comfort_pack) {
        if (motorcycle.is_gsa) {
          estimatedPrice += 480;
        } else {
          estimatedPrice += 565;
        }
      }

      if (motorcycle.dynamic_pack) {
          estimatedPrice += 1510;
      }

      if (motorcycle.touring_pack) {
        if (motorcycle.is_gsa) {
          estimatedPrice += 2060;
        } else {
          estimatedPrice += 1625;
        }
      }
      // SIDECASES
      if (motorcycle.has_side_cases) {        
        if (motorcycle.bmw_luggages) {
          if (motorcycle.aluminium_luggages) {
            estimatedPrice += 878;
          } else {
            estimatedPrice += 785;
          }
        } else {
          if (motorcycle.aluminium_luggages) {
            estimatedPrice += 740;
          } else {
            estimatedPrice += 500;
          }
        }
      } 

      // TOPCASE
      if (motorcycle.has_top_case) {        
        if (motorcycle.bmw_luggages) {
          if (motorcycle.aluminium_luggages) {
            estimatedPrice += 646;
          } else {
            estimatedPrice += 541;
          }
        } else {
          if (motorcycle.aluminium_luggages) {
            estimatedPrice += 550;
          } else {
            estimatedPrice += 430;
          }
        }
      } 

      motorcycle.estimated_price = estimatedPrice;          
    }
  }
}