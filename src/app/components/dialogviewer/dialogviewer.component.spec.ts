import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogviewerComponent } from './dialogviewer.component';

describe('DialogviewerComponent', () => {
  let component: DialogviewerComponent;
  let fixture: ComponentFixture<DialogviewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogviewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogviewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
