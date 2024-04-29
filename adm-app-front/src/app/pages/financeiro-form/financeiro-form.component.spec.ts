import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceiroFormComponent } from './financeiro-form.component';

describe('FinanceiroFormComponent', () => {
  let component: FinanceiroFormComponent;
  let fixture: ComponentFixture<FinanceiroFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceiroFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinanceiroFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
