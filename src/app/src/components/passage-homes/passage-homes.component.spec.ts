import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageHomesComponent } from './passage-homes.component';

describe('PassageHomesComponent', () => {
  let component: PassageHomesComponent;
  let fixture: ComponentFixture<PassageHomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassageHomesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassageHomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
