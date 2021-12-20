import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPfesComponent } from './list-pfes.component';

describe('ListPfesComponent', () => {
  let component: ListPfesComponent;
  let fixture: ComponentFixture<ListPfesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPfesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPfesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
