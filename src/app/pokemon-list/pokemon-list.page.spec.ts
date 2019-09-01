import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonListPage } from './pokemon-list.page';

describe('PokemonListPage', () => {
  let component: PokemonListPage;
  let fixture: ComponentFixture<PokemonListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
