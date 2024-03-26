import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSneakerComponent } from './header-sneaker.component';

describe('HeaderSneakerComponent', () => {
  let component: HeaderSneakerComponent;
  let fixture: ComponentFixture<HeaderSneakerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSneakerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSneakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
