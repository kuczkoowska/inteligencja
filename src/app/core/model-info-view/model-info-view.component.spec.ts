import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelInfoViewComponent } from './model-info-view.component';

describe('ModelInfoViewComponent', () => {
  let component: ModelInfoViewComponent;
  let fixture: ComponentFixture<ModelInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelInfoViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
