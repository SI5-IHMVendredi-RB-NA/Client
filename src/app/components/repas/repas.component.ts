import { Repas } from './../../models/Repas';
import { RepasService } from './../../services/repas/repas.service';
import { Component, Input, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-repas',
  templateUrl: './repas.component.html',
  styleUrls: ['./repas.component.scss'],
})
export class RepasComponent implements OnInit {

  @Input() repas: Repas;
  constructor(private animationCtrl: AnimationController, private repasService: RepasService) { }

  ngOnInit() {
    console.log(this.repas.prix);
  }

  selectRepas()
  {
   const animation1 = this.animationCtrl.create()
  .addElement(document.querySelector('#repas-' + this.repas.id))
  .duration(500)
  .keyframes([
    { offset: 0, background: 'var(--background)'},
    { offset: 0.5, background: '' },
    { offset: 1, background: '#2dd36f' }
  ]);

  const animation2 = this.animationCtrl.create()
  .addElement(document.querySelector('#subtitle-' + this.repas.id))
  .addElement(document.querySelector('#title-' + this.repas.id))
  .duration(500)
  .keyframes([
    { offset: 0, color: 'var(--background)'},
    { offset: 0.5, color: '' },
    { offset: 1, color: 'white' }
  ]);
  animation1.play();
  animation2.play();
  }

}
