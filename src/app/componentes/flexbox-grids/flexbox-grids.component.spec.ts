import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexboxGridsComponent } from './flexbox-grids.component';

describe('FlexboxGridsComponent', () => {
  let component: FlexboxGridsComponent;
  let fixture: ComponentFixture<FlexboxGridsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexboxGridsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxGridsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
