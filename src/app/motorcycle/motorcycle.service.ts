import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Motorcycle } from './motorcycle';
import { MOTORCYCLES } from './config-motorcyle';

@Injectable({
  providedIn: 'root'
})
export class MotorcycleService {

  constructor() { }

  getMotorcyles(): Observable<Motorcycle[]> {
    return of(MOTORCYCLES);
  }
  getMotorcyle(id: number): Observable<Motorcycle> {
    return of(MOTORCYCLES.find(motorcycle => motorcycle.id === id));
  }

}
