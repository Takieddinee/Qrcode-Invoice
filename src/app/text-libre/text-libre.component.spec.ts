import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextLibreComponent } from './text-libre.component';

describe('TextLibreComponent', () => {
  let component: TextLibreComponent;
  let fixture: ComponentFixture<TextLibreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextLibreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextLibreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
