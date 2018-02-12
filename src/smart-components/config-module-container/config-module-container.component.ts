import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { UserModel } from 'app/models/authentication';
import { Store } from '@ngrx/store';
import { ConfigService } from '../../services';

// import * as appReducer from 'app/reducers';

@Component({
        selector: 'config-module-container',
        templateUrl: './config-module-container.component.html'
})
export class ConfigModuleContainerComponent implements OnInit {
       
        constructor(
               private service : ConfigService
        ) {
          
        }

        ngOnInit() {

        }
}
