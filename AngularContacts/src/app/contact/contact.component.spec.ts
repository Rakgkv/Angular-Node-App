import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatTableModule, MatFormFieldModule,
  MatInputModule, MatButtonModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { StoreModule, Store, createAction } from '@ngrx/store';
import { GroupState, appReducer } from '../store/reducers';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { IFilter } from '../models/filter';
import { IContact } from '../models/contactModel';
import { ContactComponent } from '../contact/contact.component';
import { ContactEffects } from '../store/effects/contact.effects';
import { HomeService } from '../home/home.service';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let store: Store<GroupState>;
  let storeSpy;
  let homeService: HomeService;

  const contactResponse: IContact[] = [
    {
      _id: '1',
      name: 'rakesh',
      surname: 'venkateshappa',
      number: '222-2222-2222',
      birthday: new Date(),
      address: 'Bangalore'
    }
  ];


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactComponent,
      ],
      imports: [
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatButtonModule,
        StoreModule.forRoot({ appState: appReducer }),
        EffectsModule.forRoot([ContactEffects]),
        NoopAnimationsModule,
        HttpClientTestingModule
      ],
      providers: [
        HomeService
      ]
    })
      .compileComponents();
    store = TestBed.get(Store);
    homeService = TestBed.get(HomeService);
    spyOn(homeService, 'getContact').and.returnValue(of(contactResponse));
    spyOn(homeService, 'saveContact').and.returnValue(of());
    spyOn(homeService, 'deleteContact').and.returnValue(of());
    spyOn(homeService, 'updatecontact').and.returnValue(of());

    storeSpy = spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the component\'s "contacts" variable with the data from HomeService', () => {
    expect(component.contacts).toEqual(contactResponse);
  });

  // it('should dispatch fetch contacs  on getContactSearch function call', () => {
  //   const filterValues: IFilter = {
  //     name: 'rakesh',
  //     surname: 'venkateshappa'
  //   };
  //   component.getContactSearch(filterValues);
  //   expect(storeSpy).toHaveBeenCalledWith(fetchCustomerOrders({
  //     payload: {
  //       name: filterValues.name,
  //       surname: filterValues.surname,
  //     }
  //   }));
  // });

});
