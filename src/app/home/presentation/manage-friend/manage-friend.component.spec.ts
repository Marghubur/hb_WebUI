import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFriendComponent } from './manage-friend.component';

describe('ManageFriendComponent', () => {
  let component: ManageFriendComponent;
  let fixture: ComponentFixture<ManageFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ManageFriendComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ManageFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
