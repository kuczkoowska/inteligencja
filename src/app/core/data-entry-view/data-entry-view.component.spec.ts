import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEntryViewComponent } from './data-entry-view.component';

describe('DataEntryViewComponent', () => {
  let component: DataEntryViewComponent;
  let fixture: ComponentFixture<DataEntryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataEntryViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataEntryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
