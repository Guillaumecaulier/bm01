import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Motorcycle } from './motorcycle';
import { MOTORCYCLES } from './config-motorcyle';

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {

  constructor() { }

  getMotorcycles(): Observable<Motorcycle[]> {
    return of(MOTORCYCLES);
  }
  getMotorcycle(id: number): Observable<Motorcycle> {
    return of(MOTORCYCLES.find(motorcycle => motorcycle.id === id));
  }

}
