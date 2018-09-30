import { MotorcycleService } from '../motorcycle.service';
import { Component, OnInit } from '@angular/core';
import { Motorcycle } from '../motorcycle';
import { MOTORCYCLES } from '../config-motorcyle';


@Component({
  selector: 'app-motorcycle',
  templateUrl: './motorcycle.component.html',
  styleUrls: ['./motorcycle.component.scss']
})
export class MotorcycleComponent implements OnInit {
  public motorcycles: Motorcycle[];

  constructor( private motorcycleService: MotorcycleService) {}
  
  ngOnInit() {
    this.motorcycleService.getMotorcycles()
    .subscribe(motorcycles => this.motorcycles = motorcycles);  
  }
  displayedColumns: string[] = ['model','year', 'kilometer', 'color','packs','luggages', 'price', 'link'];    

}