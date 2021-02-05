import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PreparatorPage } from './preparator.page';

describe('PreparatorPage', () => {
  let component: PreparatorPage;
  let fixture: ComponentFixture<PreparatorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparatorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PreparatorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
