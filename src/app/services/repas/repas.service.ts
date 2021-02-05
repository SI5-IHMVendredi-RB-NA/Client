import { Repas } from './../../models/Repas';
import { Injectable } from '@angular/core';
import REPAS from 'src/app/mocks/Repas';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  repas: Repas[];

  constructor() { 
    this.repas = REPAS;
  }

  getRepas(): Repas[] 
  {
    return this.repas;
  }
}
