import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPfeComponent } from './ajouter-pfe.component';

describe('AjouterPfeComponent', () => {
  let component: AjouterPfeComponent;
  let fixture: ComponentFixture<AjouterPfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
