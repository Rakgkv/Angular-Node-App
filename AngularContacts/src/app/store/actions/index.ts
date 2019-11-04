import { createAction, props } from '@ngrx/store';
import { IContact } from 'src/app/models/contactModel';



export const fetchContact = createAction('[Contacts] Fetch Contacts');
export const fetchContactSuccess = createAction('[Contacts] Fetch Contact Success', props<{ payload: { contacts: IContact[] } }>());
export const fetchContactFailure = createAction('[Contacts] Fetch Contact Failure', props<{ payload: { error: Error } }>());

export const saveContact = createAction('[Contacts] save Contact', props<{payload: { contacts: IContact }}>());
export const saveContactSuccess = createAction('[Contacts] save Contact Success');
export const saveContactFailure = createAction('[Contacts] save Contact Failure', props<{ payload: { error: Error } }>());

export const updateContact = createAction('[Contacts] save Contact', props<{payload: { contacts: IContact }}>());
export const updateContactSuccess = createAction('[Contacts] save Contact Success');
export const updateContactFailure = createAction('[Contacts] save Contact Failure', props<{ payload: { error: Error } }>());

export const deleteContact = createAction('[Contacts] delete Contact', props<{payload: { id: string }}>());
export const deleteContactSuccess = createAction('[Contacts] delete Contact Success', );
export const deleteContactFailure = createAction('[Contacts] delete Contact Failure', props<{ payload: { error: Error } }>());

// export const fetchContactSearch = createAction('[Contacts] Fetch Contact', props<{ payload: { name: string, surname: string } }>());
// export const fetchContactSearchSuccess = createAction('[Contacts] Fetch Contact Success',
  //   props<{ payload: { contacts: IContact[] } }>());
// export const fetchContactSearchFailure = createAction('[Contacts] Fetch Contact Failure', props<{ payload: { error: Error } }>());

