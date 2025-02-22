import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "../../types/backendErrors.interface";
import { CommonModule, NgFor } from "@angular/common";

@Component({
    selector: 'mc-backend-error-messages',
    templateUrl: 'backendErrorMessages.component.html',
    standalone: true,
    imports: [CommonModule]
})
export class BackendErrorMessages implements OnInit {
    @Input() backendErrors: BackendErrorsInterface = {};

    errorMessages: string[] = [];

    ngOnInit(): void {
        this.mapErroMessages();
    }

    mapErroMessages(): void {
        this.errorMessages = Object.keys(this.backendErrors).map((name: string) => {
            const msgs = this.backendErrors[name].join(' ');
            return `${name} ${msgs}`;
        })
    }
}