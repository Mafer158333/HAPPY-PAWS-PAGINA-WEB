import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorAndDonateComponent } from './sponsor-and-donate.component';

describe('SponsorAndDonateComponent', () => {
  let component: SponsorAndDonateComponent;
  let fixture: ComponentFixture<SponsorAndDonateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorAndDonateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SponsorAndDonateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
