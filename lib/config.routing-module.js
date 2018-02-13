"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var smart_components_1 = require("./smart-components");
var routes = [
    {
        path: 'configs',
        component: smart_components_1.ConfigModuleContainerComponent,
        children: [
            {
                path: '',
                component: smart_components_1.ConfigsComponent
            },
            {
                path: 'edit/:name',
                component: smart_components_1.ConfigEditComponent
            }
        ]
    }
];
exports.RoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=config.routing-module.js.map