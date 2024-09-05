import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonplaceComponent } from './jsonplace.component';

describe('JsonplaceComponent', () => {
  let component: JsonplaceComponent;
  let fixture: ComponentFixture<JsonplaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JsonplaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
