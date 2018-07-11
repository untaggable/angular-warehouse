import {
  createSelector,
  createFeatureSelector
} from '@ngrx/store';
import * as fromUserReducer from '../plain/user.auth.reducer';
import { authState } from '../../states';

export interface AuthState {
  user: fromUserReducer.UserState
}

export const getAuthState = createFeatureSelector<AuthState>(authState);

export const getUserAuthState = createSelector(
    getAuthState,
    (state: AuthState) => state.user
);

export const getUserAuth = createSelector(getUserAuthState, fromUserReducer.getUser);
export const getUserAuthLoading = createSelector(getUserAuthState, fromUserReducer.getUserLoading);
export const getUserAuthLoaded = createSelector(getUserAuthState, fromUserReducer.getUserLoaded);