import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HomeService } from 'src/app/home/home.service';
import {
  fetchContact, fetchContactSuccess, fetchContactFailure, saveContact, saveContactSuccess,
  saveContactFailure, deleteContact, deleteContactFailure, deleteContactSuccess,
  updateContact, updateContactSuccess, updateContactFailure,
} from '../actions';
import { props } from '@ngrx/store';
import { of } from 'rxjs';
import { exhaustMap } from 'rxjs/operators';

@Injectable()
export class ContactEffects {

  loadContacts$ = createEffect(() => this.actions$.pipe(
    ofType(fetchContact),
    mergeMap(() => this.homeService.getContact()),
    map((res) => (fetchContactSuccess({
      payload: {
        contacts: res
      }
    }))),
    catchError((error) => {
      return of(fetchContactFailure({
        payload: {
          error
        }
      }));
    })
  ));

  // loadContactSearch$ = createEffect(() => this.actions$.pipe(
  //   ofType(fetchContactSearch),
  //   exhaustMap(action => this.homeService.getContactSearch(action.payload.name, action.payload.surname)),
  //   map((res) => (fetchContactSearchSuccess({
  //     payload: {
  //       contacts: res
  //     }
  //   }))),
  //   catchError((error) => {
  //     return of(fetchContactSearchFailure({
  //       payload: {
  //         error
  //       }
  //     }));
  //   })
  // ));


  saveContacts$ = createEffect(() => this.actions$.pipe(
    ofType(saveContact),
    exhaustMap(action => this.homeService.saveContact(action.payload.contacts)),
    map((res) => (saveContactSuccess())),
    catchError((error) => {
      return of(saveContactFailure({
        payload: {
          error
        }
      }));
    })
  ));


  updateContacts$ = createEffect(() => this.actions$.pipe(
    ofType(updateContact),
    exhaustMap(action => this.homeService.updatecontact(action.payload.contacts)),
    map((res) => (updateContactSuccess())),
    catchError((error) => {
      return of(updateContactFailure({
        payload: {
          error
        }
      }));
    })
  ));

  deleteContacts$ = createEffect(() => this.actions$.pipe(
    ofType(deleteContact),
    exhaustMap(action => this.homeService.deleteContact(action.payload.id)),
    map((res) => (deleteContactSuccess())),
    catchError((error) => {
      return of(deleteContactFailure({
        payload: {
          error
        }
      }));
    })
  ));

  constructor(
    private actions$: Actions,
    private homeService: HomeService
  ) { }
}
