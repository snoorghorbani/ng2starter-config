import { EventEmitter, Injector } from "@angular/core";
import { FormGroup } from "@angular/forms";
export declare class LayoutModuleConfigComponent {
    private injector;
    formGroup: FormGroup;
    _configFormGroup: FormGroup;
    configFormGroup: FormGroup;
    configChanged: EventEmitter<{}>;
    roleItems: string[];
    constructor(injector: Injector);
    addMenu(): void;
}
