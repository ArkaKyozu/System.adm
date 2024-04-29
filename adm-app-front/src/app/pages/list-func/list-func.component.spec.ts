import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFuncComponent } from './list-func.component';

describe('ListFuncComponent', () => {
  let component: ListFuncComponent;
  let fixture: ComponentFixture<ListFuncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFuncComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
