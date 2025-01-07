import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStndFalsComponent } from './service-stnd-fals.component';

describe('ServiceStndFalsComponent', () => {
  let component: ServiceStndFalsComponent;
  let fixture: ComponentFixture<ServiceStndFalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceStndFalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceStndFalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
