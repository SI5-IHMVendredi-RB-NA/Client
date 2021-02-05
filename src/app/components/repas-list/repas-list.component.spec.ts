import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepasListComponent } from './repas-list.component';

describe('RepasListComponent', () => {
  let component: RepasListComponent;
  let fixture: ComponentFixture<RepasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepasListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
