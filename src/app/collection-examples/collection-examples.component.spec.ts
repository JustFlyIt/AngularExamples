import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionExamplesComponent } from './collection-examples.component';

describe('CollectionExamplesComponent', () => {
  let component: CollectionExamplesComponent;
  let fixture: ComponentFixture<CollectionExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionExamplesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CollectionExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
