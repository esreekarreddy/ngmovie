import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTakerComponentComponent } from './vote-taker-component.component';

describe('VoteTakerComponentComponent', () => {
  let component: VoteTakerComponentComponent;
  let fixture: ComponentFixture<VoteTakerComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoteTakerComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoteTakerComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
