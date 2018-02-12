import { OnInit } from '@angular/core';
import { ConfigService } from '../../services';
export declare class ConfigModuleContainerComponent implements OnInit {
    private service;
    constructor(service: ConfigService);
    ngOnInit(): void;
}
