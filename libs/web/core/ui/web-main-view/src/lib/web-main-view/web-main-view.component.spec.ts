import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebMainViewComponent } from './web-main-view.component';

describe('WebMainViewComponent', () => {
  let component: WebMainViewComponent;
  let fixture: ComponentFixture<WebMainViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebMainViewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(WebMainViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
