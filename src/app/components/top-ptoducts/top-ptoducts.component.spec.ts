import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPtoductsComponent } from './top-ptoducts.component';

describe('TopPtoductsComponent', () => {
  let component: TopPtoductsComponent;
  let fixture: ComponentFixture<TopPtoductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPtoductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopPtoductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
