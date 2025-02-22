import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./action";

 const initialState: AuthStateInterface = {
    isSubmitting: false,
    isLoading: false,
    currentUser: undefined,
    validationErrors: null,
 }

 const authFeature = createFeature({
    name: 'auth',
    reducer: createReducer(
        initialState,
        on(authActions.register, (state) => ({
         ...state, 
         isSubmitting: true, 
         validationErrors: null
      })),
        on(authActions.registerSuccess, (state, action) => ({
         ...state, isSubmitting: false, 
         validationErrors: null, 
         currentUser: action.currentUser
      })),
        on(authActions.registerFailure, (state, action) => ({
         ...state, 
         isSubmitting: false, 
         validationErrors: null, 
         errors: action.errors
      }))
    )
 });

 export const { 
   name: authFeatureKey, 
   reducer: authReducer,
   selectIsLoading,
   selectIsSubmitting,
   selectCurrentUser,
   selectValidationErrors,
 } = authFeature;