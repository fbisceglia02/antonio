import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelecomandoComponent } from './telecomando.component';

describe('TelecomandoComponent', () => {
  let component: TelecomandoComponent;
  let fixture: ComponentFixture<TelecomandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelecomandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelecomandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
