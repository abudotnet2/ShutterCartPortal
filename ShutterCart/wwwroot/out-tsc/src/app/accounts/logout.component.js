"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var account_service_1 = require("../services/account.service");
var storage_service_1 = require("../services/storage.service");
var Logout = /** @class */ (function () {
    function Logout(router, account, storage) {
        this.router = router;
        this.account = account;
        this.storage = storage;
    }
    Logout.prototype.ngOnInit = function () {
        this.storage.Clear();
        this.router.navigate(['/login']);
    };
    Logout = __decorate([
        core_1.Component({
            selector: "logout",
            templateUrl: "./logout.component.html",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [router_1.Router, account_service_1.AccountService, storage_service_1.StorageService])
    ], Logout);
    return Logout;
}());
exports.Logout = Logout;
//# sourceMappingURL=logout.component.js.map