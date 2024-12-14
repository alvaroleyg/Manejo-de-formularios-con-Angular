import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersTableComponent } from './providers-table.component';

describe('ProvidersTableComponent', () => {
  let component: ProvidersTableComponent;
  let fixture: ComponentFixture<ProvidersTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvidersTableComponent]
    });
    fixture = TestBed.createComponent(ProvidersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
