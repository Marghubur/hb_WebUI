import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreLoadTableComponent } from './pre-load-table.component';

describe('PreLoadTableComponent', () => {
  let component: PreLoadTableComponent;
  let fixture: ComponentFixture<PreLoadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [PreLoadTableComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(PreLoadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
