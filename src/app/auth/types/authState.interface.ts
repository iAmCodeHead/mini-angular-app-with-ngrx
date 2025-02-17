import { ActionStateInterface } from "../../shared/types/actionState.interface";
import { BackendErrorsInterface } from "../../shared/types/backendErrors.interface";
import { CurrentUserInterface } from "../../shared/types/currentUser.interface";

export interface AuthStateInterface extends ActionStateInterface {
    currentUser: CurrentUserInterface | null | undefined;
    isLoading: boolean;
    validationErrors: BackendErrorsInterface | null;
}