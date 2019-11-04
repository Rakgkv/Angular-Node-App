import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
  Action,
  State
} from '@ngrx/store';
import { fetchContact, fetchContactSuccess, fetchContactFailure, saveContactFailure, saveContactSuccess,
    updateContactFailure, updateContactSuccess, deleteContactSuccess, deleteContactFailure } from '../actions';
import { IContact } from 'src/app/models/contactModel';

export interface GroupState {
  contacts: IContact[];
}

const initialState: GroupState = {
  contacts: [],
};

export const selectContactFeature = createFeatureSelector<GroupState>('contacts');

export const selectContacts = createSelector(selectContactFeature,
  (state: GroupState) => state.contacts
);

export const selectContactSearch = createSelector(selectContactFeature,
  (state: GroupState) => state.contacts
);

export const reducers: ActionReducer<GroupState | undefined, Action> = createReducer(initialState,
  on(fetchContactSuccess, (state, { payload }) => ({ ...state, contacts: payload.contacts })),
  on(fetchContactFailure, (state, { payload }) => ({ ...state, err: payload.error, contacts: [] })),
  // on(fetchContactSearchSuccess, (state, { payload }) => ({ ...state, contacts: payload.contacts })),
  // on(fetchContactSearchFailure, (state, { payload }) => ({ ...state, err: payload.error, contacts: [] })),
  on(saveContactFailure, (state, { payload }) => ({ ...state, err: payload.error, contacts: [] })),
  on(saveContactSuccess, (state) => ({ ...state})),
  on(updateContactFailure, (state, { payload }) => ({ ...state, err: payload.error, contacts: [] })),
  on(updateContactSuccess, (state) => ({ ...state})),
  on(deleteContactFailure, (state, { payload }) => ({ ...state, err: payload.error, contacts: [] })),
  on(deleteContactSuccess, (state) => ({ ...state})),
);

export function appReducer(state, action) {
  return reducers(state, action);
}


