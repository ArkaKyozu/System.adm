import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadProdComponent } from './cad-prod.component';

describe('CadProdComponent', () => {
  let component: CadProdComponent;
  let fixture: ComponentFixture<CadProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadProdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CadProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
