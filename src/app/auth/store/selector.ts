/**
 * a selector is used to select a particular portion of the global state
 * for example, below, we will be selecting only the 'auth' state from the
 * global state and then we can dig further to select specific propreties
 * from the selected state.
 */

import { createSelector } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";

export const selectFeature = (state: { auth: AuthStateInterface}) => state.auth;

export const selectIsSubmitting = createSelector(
    selectFeature,
    (state) => state.isSubmitting
)