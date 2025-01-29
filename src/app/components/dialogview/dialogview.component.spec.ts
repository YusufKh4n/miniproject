import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogviewComponent } from './dialogview.component';

describe('DialogviewComponent', () => {
  let component: DialogviewComponent;
  let fixture: ComponentFixture<DialogviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
