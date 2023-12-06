import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCatsComponent } from './lista-cats-component/lista-cats-component.component';

describe('ListaCatsComponent', () => {
  let component: ListaCatsComponent;
  let fixture: ComponentFixture<ListaCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
