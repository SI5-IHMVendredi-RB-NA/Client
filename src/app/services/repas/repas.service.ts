import { Dessert } from './../../models/Dessert';
import { Sandwich } from './../../models/Sandwich';
import { Repas } from './../../models/Repas';
import { Injectable } from '@angular/core';
import { Entree } from 'src/app/models/Entree';
import { Boisson } from 'src/app/models/Boisson';

@Injectable({
  providedIn: 'root'
})
export class RepasService {

  private repas: Repas;
  constructor() { 
    this.repas = new Repas();
    this.repas.prix = 1;
  }

  setEntree(entree: Entree): void
  {
    this.repas.entree = entree;
  }

  setSandwich(sandwich: Sandwich): void
  {
    this.repas.plat = sandwich;
  }

  setDessert(dessert: Dessert): void
  {
    this.repas.dessert = dessert;
  }

  setBoisson(boisson: Boisson): void
  {
    this.repas.boisson = boisson;
  }

  getRepas(): Repas
  {
    return this.repas;
  }

}
