webpackJsonp([1,4],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/signin']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreventLoggedInAccessService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PreventLoggedInAccessService = (function () {
    function PreventLoggedInAccessService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    PreventLoggedInAccessService.prototype.canActivate = function () {
        if (!this.authService.isAuthenticated()) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    return PreventLoggedInAccessService;
}());
PreventLoggedInAccessService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], PreventLoggedInAccessService);

var _a, _b;
//# sourceMappingURL=prevent-logged-in-access.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logged_in_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SigninComponent = (function () {
    function SigninComponent(authService, router, _log) {
        this.authService = authService;
        this.router = router;
        this._log = _log;
        this.error = false;
        this.errormsg = '';
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSignin = function (form) {
        var _this = this;
        var email = form.value.email;
        var password = form.value.password;
        var response = this.authService.signinUser(email, password).then(function (response) {
            if (response.emailVerified) {
                _this.authService.setIpOfUser();
                _this.router.navigate(['/']);
                __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.getIdToken().then(function (token) { return _this.setToken(); });
            }
            else {
                _this.error = true;
                _this.errormsg = 'Not able to sign in. ' + response;
            }
        }).catch(function (e) {
            console.log('error is:', e);
            _this.error = true;
            _this.errormsg = e.message;
        });
    };
    SigninComponent.prototype.setToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_4_firebase__["auth"]().currentUser.getIdToken()];
                    case 1:
                        token = _a.sent();
                        this.authService.setToken();
                        this.router.navigate(['/']);
                        return [2 /*return*/];
                }
            });
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({ selector: 'app-signin', template: __webpack_require__(472), styles: [__webpack_require__(395)], encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["X" /* ViewEncapsulation */].None }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__logged_in_service__["a" /* LoggedInService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__logged_in_service__["a" /* LoggedInService */]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetailsComponent = (function () {
    function EventDetailsComponent(router, route) {
        this.router = router;
        this.route = route;
        this.login = [];
    }
    EventDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.id = params['id'];
            _this.getUsersWhoHaveSolvedQuiz(_this.id, function (snap) {
                _this.login.push({
                    name: snap.val().name,
                    uid: snap.val().uid
                });
            });
        });
    };
    EventDetailsComponent.prototype.getUsersWhoHaveSolvedQuiz = function (ev, cb) {
        var attendees = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('solved/');
        attendees.on('child_added', function (snap) {
            var userRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('users/' + snap.key).child('/user');
            userRef.once('value', cb);
        });
    };
    return EventDetailsComponent;
}());
EventDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-event-details',
        template: __webpack_require__(474),
        styles: [__webpack_require__(397)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object])
], EventDetailsComponent);

var _a, _b;
//# sourceMappingURL=event-details.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_json2csv__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_json2csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_json2csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LogComponent = (function () {
    function LogComponent(afd, _csv) {
        this.afd = afd;
        this._csv = _csv;
        this.total_solved = [];
        this.records = [];
        this.isDesc = false;
        this.column = 'quiz';
        this.itemRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]()
            .ref('/solved');
    }
    LogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this
            .itemRef
            .on('value', function (itemSnapshot) {
            _this.records = [];
            var idx = 1;
            itemSnapshot.forEach(function (itemSnap) {
                _this
                    .records
                    .push({
                    uid: itemSnap.key,
                    quiz: Object
                        .keys(itemSnap.val())
                        .length
                });
                var map = Object.keys(itemSnap.val()).map(function (i) { return itemSnap.val()[i]; });
                var map1 = map.map(function (item) { return (__assign({ uid: itemSnap.key }, item)); });
                // console.log("MAP", map1);
                (_a = _this.total_solved).push.apply(_a, map1);
                return false;
                var _a;
            });
        });
    };
    LogComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction
        this.column = property;
        var direction = this.isDesc ? 1 : -1;
        this.records.sort(function (a, b) {
            if (a[property] < b[property]) {
                return -1 * direction;
            }
            else if (a[property] > b[property]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
    };
    LogComponent.prototype.getCSV = function () {
        var csvItems = this.total_solved.slice();
        csvItems.unshift({
            uid: 'User ID',
            chapter: 'Chapter',
            chapterType: 'Chapter',
            date: 'Date',
            marks: 'Marks',
            quizId: 'Quiz ID',
            subject: 'Subject'
        });
        var data = JSON.stringify(csvItems);
        console.log(data);
        this._csv.download(data, 'fhc_quiz_given_' + __WEBPACK_IMPORTED_MODULE_3_moment__().format('YYYYMMDD'));
    };
    return LogComponent;
}());
LogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({ selector: 'app-log', template: __webpack_require__(477), styles: [__webpack_require__(400)] }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_json2csv__["CsvService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_json2csv__["CsvService"]) === "function" && _b || Object])
], LogComponent);

var _a, _b;
//# sourceMappingURL=log.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_json2csv__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angular2_json2csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_angular2_json2csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(58);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserDetailsComponent = (function () {
    function UserDetailsComponent(route, afd, _csv) {
        this.route = route;
        this.afd = afd;
        this._csv = _csv;
        this.isDesc = false;
        this.column = 'quiz';
        this.solved = [];
        this.logout = [];
        this.presence = [];
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.uid = params['uid'];
            __WEBPACK_IMPORTED_MODULE_3_firebase_app__["database"]()
                .ref('/users/' + _this.uid).child('/user').once('value', function (snapshot) {
                _this.user = snapshot.val();
                console.log(_this.user);
            });
            _this.afd.list('/solved/' + _this.uid).subscribe(function (data) {
                _this.solved = data;
            });
        });
    };
    UserDetailsComponent.prototype.sort = function (property) {
        this.isDesc = !this.isDesc; //change the direction
        this.column = property;
        var direction = this.isDesc ? 1 : -1;
        this.solved.sort(function (a, b) {
            if (a[property] < b[property]) {
                return -1 * direction;
            }
            else if (a[property] > b[property]) {
                return 1 * direction;
            }
            else {
                return 0;
            }
        });
    };
    UserDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserDetailsComponent.prototype.getCSV = function () {
        var csvItems = this.solved.slice();
        csvItems.unshift({
            chapter: 'Chapter',
            type: 'Chapter',
            date: 'Date Given',
            score: 'Percent Scored',
            quizID: 'Quiz ID',
            subject: 'Subject',
        });
        csvItems.unshift({
            chapter: '',
            type: '',
            date: '',
            score: '',
            quizID: '',
            subject: '',
        });
        csvItems.unshift({
            uid: this.uid,
            fullName: this.user.fullName,
            phoneNumber: this.user.phoneNumber,
            emailId: this.user.emailId,
            typeOfCourse: this.user.typeOfCourse,
            attemptDate: __WEBPACK_IMPORTED_MODULE_4_moment__(this.user.attemptDate).format('MMM YY'),
            attemptNo: this.user.attemptNo,
            gender: this.user.gender,
            dob: this.user.dob,
            address: this.user.address,
            pincode: this.user.pincode
        });
        csvItems.unshift({
            uid: 'User ID',
            fullName: 'Name',
            phoneNumber: 'Phone Number',
            emailId: 'Email ID',
            typeOfCourse: 'Course',
            attemptDate: 'Attempt Date',
            attemptNo: 'Attempt Number',
            gender: 'Gender',
            dob: 'Date of Birth',
            address: 'Address',
            pincode: 'Pincode'
        });
        var data = JSON.stringify(csvItems);
        console.log(data);
        this._csv.download(data, 'fhc_user_' + this.user.fullName + "_" + __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYYMMDD'));
    };
    return UserDetailsComponent;
}());
UserDetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({
        selector: 'app-user-details',
        template: __webpack_require__(479),
        styles: [__webpack_require__(402)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_angular2_json2csv__["CsvService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_angular2_json2csv__["CsvService"]) === "function" && _c || Object])
], UserDetailsComponent);

var _a, _b, _c;
//# sourceMappingURL=user-details.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsersComponent = (function () {
    function UsersComponent(afd, _csv) {
        this.afd = afd;
        this._csv = _csv;
        this.users = [];
        this.filter = '';
        this.items = [];
        this.login = [];
        this.logs = [];
        this.itemRef = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]().ref('/users');
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemRef.on('value', function (itemSnapshot) {
            _this.items = [];
            itemSnapshot.forEach(function (itemSnap) {
                _this.items.push(__assign({ uid: itemSnap.key }, itemSnap.val().user, { attemptDate: __WEBPACK_IMPORTED_MODULE_4_moment__(itemSnap.val().user.attemptDate).format('MMM YY') }));
                return false;
            });
        });
    };
    /**
     * address
   attemptDate
   attemptNo
   dob
   emailId
   fullName
   gender
   phoneNumber
   pincode
   typeOfCourse
     */
    UsersComponent.prototype.getCSV = function () {
        var csvItems = this.items.slice();
        csvItems.unshift({
            uid: 'User ID',
            fullName: 'Name',
            phoneNumber: 'Phone Number',
            emailId: 'Email ID',
            typeOfCourse: 'Course',
            attemptDate: 'Attempt Date',
            attemptNo: 'Attempt Number',
            gender: 'Gender',
            dob: 'Date of Birth',
            address: 'Address',
            pincode: 'Pincode'
        });
        var data = JSON.stringify(csvItems);
        console.log(data);
        this._csv.download(data, 'fhc_users_' + __WEBPACK_IMPORTED_MODULE_4_moment__().format('YYYYMMDD'));
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-users',
        template: __webpack_require__(480),
        styles: [__webpack_require__(403)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__["CsvService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_json2csv__["CsvService"]) === "function" && _b || Object])
], UsersComponent);

var _a, _b;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ 316:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 316;


/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(333);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__log_event_details_event_details_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__log_log_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__users_user_details_user_details_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__users_users_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_prevent_logged_in_access_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_guard_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_signin_signin_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', redirectTo: '/quiz', pathMatch: 'full' },
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_3__users_users_component__["a" /* UsersComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'user/:uid', component: __WEBPACK_IMPORTED_MODULE_2__users_user_details_user_details_component__["a" /* UserDetailsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_6__auth_signin_signin_component__["a" /* SigninComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_4__auth_prevent_logged_in_access_service__["a" /* PreventLoggedInAccessService */]] },
    { path: 'quiz', component: __WEBPACK_IMPORTED_MODULE_1__log_log_component__["a" /* LogComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__auth_auth_guard_service__["a" /* AuthGuard */]], children: [
            { path: ':id', component: __WEBPACK_IMPORTED_MODULE_0__log_event_details_event_details_component__["a" /* EventDetailsComponent */] },
        ] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* RouterModule */]],
        declarations: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase_database__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// These imports load individual services into the firebase namespace.


var AppComponent = (function () {
    function AppComponent(afAuth, _auth, router) {
        this.afAuth = afAuth;
        this._auth = _auth;
        this.router = router;
        this.uid = 'user';
        this.ip = 'ip';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(471),
        styles: [__webpack_require__(394)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__live_link_service__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_prevent_logged_in_access_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__logged_in_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_guard_service__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__header_header_component__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__users_users_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__users_user_details_user_details_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__log_log_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__duration_pipe__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__log_event_list_event_list_component__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__log_event_list_event_item_event_item_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__log_event_details_event_details_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__order_by_pipe__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_search_filter__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_json2csv__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular2_json2csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_angular2_json2csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__quiz_db_quiz_db_component__ = __webpack_require__(332);
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














/* For Firebase Related */












 //importing the module


var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__["a" /* SigninComponent */] }
];
var firebaseConfig = {
    apiKey: 'AIzaSyAutL08qJ8hTPM2860x-LHEAnDmgDEObRA',
    authDomain: 'fhc-ionic-app.firebaseapp.com',
    databaseURL: 'https://fhc-ionic-app.firebaseio.com',
    projectId: 'fhc-ionic-app',
    storageBucket: 'fhc-ionic-app.appspot.com',
    messagingSenderId: '928506390872'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__auth_signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_17__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_18__users_user_details_user_details_component__["a" /* UserDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_19__log_log_component__["a" /* LogComponent */],
            __WEBPACK_IMPORTED_MODULE_20__duration_pipe__["a" /* DurationPipe */],
            __WEBPACK_IMPORTED_MODULE_21__log_event_list_event_list_component__["a" /* EventListComponent */],
            __WEBPACK_IMPORTED_MODULE_22__log_event_list_event_item_event_item_component__["a" /* EventItemComponent */],
            __WEBPACK_IMPORTED_MODULE_23__log_event_details_event_details_component__["a" /* EventDetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__order_by_pipe__["a" /* OrderByPipe */],
            __WEBPACK_IMPORTED_MODULE_27__quiz_db_quiz_db_component__["a" /* QuizDbComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_14_angularfire2_auth__["a" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_25_ng2_search_filter__["a" /* Ng2SearchPipeModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_2__logged_in_service__["a" /* LoggedInService */],
            __WEBPACK_IMPORTED_MODULE_1__auth_prevent_logged_in_access_service__["a" /* PreventLoggedInAccessService */],
            __WEBPACK_IMPORTED_MODULE_0__live_link_service__["a" /* LiveLinkService */],
            __WEBPACK_IMPORTED_MODULE_26_angular2_json2csv__["CsvService"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DurationPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DurationPipe = (function () {
    function DurationPipe() {
    }
    DurationPipe.prototype.transform = function (value, args) {
        if (!isNaN(value)) {
            var minutes = Math.floor(value / 60000);
            var sec = +((value % 60000) / 1000).toFixed(0);
            return (sec === 60 ? (minutes + 1) + ':00' : minutes + ':' + (sec < 10 ? '0' : '') + sec);
        }
        else {
            return '';
        }
    };
    return DurationPipe;
}());
DurationPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({
        name: 'duration'
    })
], DurationPipe);

//# sourceMappingURL=duration.pipe.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_13" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(473),
        styles: [__webpack_require__(396)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__auth_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_database__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_database__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveLinkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// These imports load individual services into the firebase namespace.


var LiveLinkService = (function () {
    function LiveLinkService() {
    }
    LiveLinkService.prototype.getLiveLink = function () {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_1_firebase_app__["database"]()
                .ref('/live').on('value', function (snapshot) {
                resolve(snapshot.val());
            });
        });
    };
    return LiveLinkService;
}());
LiveLinkService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LiveLinkService);

//# sourceMappingURL=live-link.service.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventItemComponent = (function () {
    function EventItemComponent() {
    }
    EventItemComponent.prototype.ngOnInit = function () {
    };
    return EventItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Object)
], EventItemComponent.prototype, "event", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Input */])(),
    __metadata("design:type", Number)
], EventItemComponent.prototype, "index", void 0);
EventItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-event-item',
        template: __webpack_require__(475),
        styles: [__webpack_require__(398)]
    }),
    __metadata("design:paramtypes", [])
], EventItemComponent);

//# sourceMappingURL=event-item.component.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventListComponent = (function () {
    function EventListComponent() {
        this.events = [{
                eid: '19mi',
                name: 'Moulud Mo. Abdullah Yahya Saheb',
                abedi: '19mi Moharram 131 abedi',
                date: '9th Oct, 2017 7:40 am IST'
            }];
    }
    EventListComponent.prototype.ngOnInit = function () {
    };
    return EventListComponent;
}());
EventListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-event-list',
        template: __webpack_require__(476),
        styles: [__webpack_require__(399)]
    }),
    __metadata("design:paramtypes", [])
], EventListComponent);

//# sourceMappingURL=event-list.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderByPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (records, args) {
        return records.sort(function (a, b) {
            if (a[args.property] < b[args.property]) {
                return -1 * args.direction;
            }
            else if (a[args.property] > b[args.property]) {
                return 1 * args.direction;
            }
            else {
                return 0;
            }
        });
    };
    ;
    return OrderByPipe;
}());
OrderByPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Pipe */])({ name: 'orderBy' })
], OrderByPipe);

//# sourceMappingURL=order-by.pipe.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizDbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuizDbComponent = (function () {
    function QuizDbComponent() {
    }
    QuizDbComponent.prototype.ngOnInit = function () {
    };
    return QuizDbComponent;
}());
QuizDbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-quiz-db',
        template: __webpack_require__(478),
        styles: [__webpack_require__(401)]
    }),
    __metadata("design:paramtypes", [])
], QuizDbComponent);

//# sourceMappingURL=quiz-db.component.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__logged_in_service__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var AuthService = (function () {
    function AuthService(router, af, _log, http) {
        this.router = router;
        this.af = af;
        this._log = _log;
        this.http = http;
    }
    AuthService.prototype.signinUser = function (email, password) {
        return this.af.auth.signInWithEmailAndPassword(email, password);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        console.log('INDISE LOGOUT METHOD*****************************************');
        var uid = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser.uid;
        var ip = '';
        this.getIpOfUser().then(function (data) {
            ip = data;
            //this._log.userLoggedOut(ip, uid);
            __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/users').child(uid).off();
            __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
            _this.token = null;
            _this.router.navigate(['/signin']);
        });
    };
    AuthService.prototype.getToken = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]()
            .currentUser
            .getToken()
            .then(function (token) { return _this.token = token; });
        return this.token;
    };
    AuthService.prototype.isAuthenticated = function () {
        return this.token != null;
    };
    AuthService.prototype.getUid = function () {
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]()
            .currentUser
            .uid;
    };
    AuthService.prototype.setIpOfUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getIpOfUser()];
                    case 1:
                        ip = _a.sent();
                        //this._log.userLoggedIn(ip, firebase.auth().currentUser.uid);
                        console.log(ip);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.setToken = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]()
                                .currentUser
                                .getIdToken()];
                    case 1:
                        _a.token = _b.sent();
                        console.log(this.token);
                        return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.getIpOfUser = function () {
        var _this = this;
        var ip = 'none';
        return new Promise(function (resolve) {
            _this
                .http
                .get('https://api.ipify.org?format=json')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                ip = data.ip;
                resolve(ip);
            });
        });
    };
    AuthService.prototype.getLoginStatus = function () {
        return this.login;
    };
    AuthService.prototype.setLoginStatus = function (status) {
        this.login = status;
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__logged_in_service__["a" /* LoggedInService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__logged_in_service__["a" /* LoggedInService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]) === "function" && _d || Object])
], AuthService);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oswald);", ""]);

// module
exports.push([module.i, ".error{\r\n  color: #f25757;\r\n  font-weight: bold;\r\n}\r\n\r\n.welcome-script{\r\n  font-family: 'Oswald', sans-serif;\r\n  text-align: center;\r\n  font-weight: bold;\r\n  color: #3f3f3f;\r\n  padding: 20px;\r\n  margin: 20px;\r\n  font-size: 2.5em;\r\n}\r\n\r\n/*Copied*/\r\n\r\n.form-box {\r\n\tmargin-top: 35px;\r\n}\r\n\r\n.form-top {\r\n\toverflow: hidden;\r\n\tpadding: 0 25px 15px 25px;\r\n\tbackground: #205F83;\r\n\tbackground: rgba(25, 81, 133, 0.35); border-radius: 4px 4px 0 0;\r\n\ttext-align: center;\r\n}\r\n\r\n.form-top-left {\r\n\t/* float: left; */\r\n\twidth: 75%;\r\n\tpadding-top: 25px;\r\n}\r\n\r\n.form-top-left h3 { margin-top: 0; color: #fff; }\r\n.form-top-left p { opacity: 0.8; color: #fff; }\r\n\r\n\r\n\r\n/*Copied*/\r\n\r\n.form-bottom {\r\n\tpadding: 25px 25px 30px 25px;\r\n\tbackground: #205F83;\r\n\tbackground: rgba(25, 81, 133, 0.3); border-radius: 0 0 4px 4px;\r\n\ttext-align: left;\r\n}\r\n\r\n.form-bottom form textarea {\r\n\theight: 100px;\r\n}\r\n\r\n.form-bottom form button.btn {\r\n\twidth: 100%;\r\n}\r\n\r\n.form-bottom form .input-error {\r\n\tborder-color: #f25757;\r\n}\r\n\r\ninput[type=\"email\"],\r\ninput[type=\"password\"],\r\ninput[type=\"text\"],\r\ntextarea,\r\ntextarea.form-control {\r\n\theight: 50px;\r\n    margin: 0;\r\n    padding: 0 20px;\r\n    vertical-align: middle;\r\n    background: #fff;\r\n    border: 3px solid #fff;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 300;\r\n    line-height: 50px;\r\n    color: #888; border-radius: 4px; box-shadow: none; transition: all .3s;\r\n}\r\n\r\ntextarea,\r\ntextarea.form-control {\r\n\tpadding-top: 10px;\r\n\tpadding-bottom: 10px;\r\n\tline-height: 30px;\r\n}\r\n\r\ninput[type=\"text\"]:focus,\r\ninput[type=\"password\"]:focus,\r\ntextarea:focus,\r\ntextarea.form-control:focus {\r\n\toutline: 0;\r\n\tbackground: #fff;\r\n    border: 3px solid #fff; box-shadow: none;\r\n}\r\n\r\ninput[type=\"text\"]:-moz-placeholder, input[type=\"password\"]:-moz-placeholder,\r\ntextarea:-moz-placeholder, textarea.form-control:-moz-placeholder { color: #888; }\r\n\r\ninput[type=\"text\"]:-ms-input-placeholder, input[type=\"password\"]:-ms-input-placeholder,\r\ntextarea:-ms-input-placeholder, textarea.form-control:-ms-input-placeholder { color: #888; }\r\n\r\ninput[type=\"text\"]::-webkit-input-placeholder, input[type=\"password\"]::-webkit-input-placeholder,\r\ntextarea::-webkit-input-placeholder, textarea.form-control::-webkit-input-placeholder { color: #888; }\r\n\r\n\r\n\r\nbutton.btn {\r\n\theight: 50px;\r\n    margin: 0;\r\n    padding: 0 20px;\r\n    vertical-align: middle;\r\n    background: #f25757;\r\n    border: 0;\r\n    font-family: 'Roboto', sans-serif;\r\n    font-size: 1em;\r\n    font-weight: 300;\r\n    line-height: 50px;\r\n    color: #fff; border-radius: 4px;\r\n    text-shadow: none; box-shadow: none; transition: all .3s;\r\n}\r\n\r\nbutton.btn:hover { opacity: 0.6; color: #fff; }\r\n\r\nbutton.btn:active { outline: 0; opacity: 0.6; color: #fff; box-shadow: none; }\r\n\r\nbutton.btn:focus { outline: 0; opacity: 0.6; background: #f25757; color: #fff; }\r\n\r\nbutton.btn:active:focus, button.btn.active:focus { outline: 0; opacity: 0.6; background: #f25757; color: #fff; }\r\n.social-login {\r\n\tmargin-top: 1em;\r\n}\r\n\r\n.social-login h3 {\r\n\tcolor: #fff;\r\n}\r\n\r\n.social-login > span {\r\n  font-size: 1.2em;\r\n}\r\n\r\n.social-login-buttons {\r\n\tmargin-top: 25px;\r\n}\r\n\r\n.btn-link-2 {\r\n  /* font-size: 1.2em; */\r\n  font-weight: bold;\r\n  color: #3f3f3f;\r\n}\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Oswald);", ""]);

// module
exports.push([module.i, "/* * {\r\n  z-index: 9999;\r\n  background: transparent;\r\n  border-color: transparent;\r\n}\r\n\r\n*:hover {\r\n  background: #c9d9fb;\r\n  border-color: #c9d9fb;\r\n} */\r\n\r\n.header-name {\r\n  font-family: 'Oswald', sans-serif;\r\n\r\n}\r\n\r\n/* *:hover > .header-name{\r\n  visibility:visible;\r\n} */\r\n\r\n/* .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus{\r\n  background-color: rgba(255,105,180, 0.3);\r\n}\r\n\r\n.navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus{\r\n  background: transparent;\r\n}\r\n\r\n.navbar-header {\r\n  float: none;\r\n}\r\n.navbar-left,.navbar-right {\r\n  float: none !important;\r\n}\r\n.navbar-toggle {\r\n  display: block;\r\n}\r\n.navbar-collapse {\r\n  border-top: 1px solid transparent;\r\n  box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);\r\n}\r\n.navbar-fixed-top {\r\n  top: 0;\r\n  border-width: 0 0 1px;\r\n}\r\n.navbar-collapse.collapse {\r\n  display: none!important;\r\n}\r\n.navbar-nav {\r\n  float: none!important;\r\n  margin-top: 7.5px;\r\n}\r\n.navbar-nav>li {\r\n  float: none;\r\n}\r\n.navbar-nav>li>a {\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n}\r\n.collapse.in{\r\n  display:block !important;\r\n} */\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".pointer {\r\n  cursor: pointer;\r\n}\r\n\r\n.head {\r\n  background-color: darkcyan;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "h1, p, th, td{\r\n  text-align: center;\r\n}\r\n\r\nth{\r\n  color: white;\r\n  font-weight: bold;\r\n}\r\n\r\n.login  th{\r\n  background-color: #1fb58f;\r\n}\r\n\r\n.logout th {\r\n  background-color: #eab126;\r\n}\r\n\r\n.presence  th {\r\n  background-color:  #f24c4e;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "h1, th, td, p{\r\n  text-align: center;\r\n}\r\n\r\nth {\r\n  font-weight: bold;\r\n  color: white;\r\n  background-color: #0088B3;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 182,
	"./af.js": 182,
	"./ar": 189,
	"./ar-dz": 183,
	"./ar-dz.js": 183,
	"./ar-kw": 184,
	"./ar-kw.js": 184,
	"./ar-ly": 185,
	"./ar-ly.js": 185,
	"./ar-ma": 186,
	"./ar-ma.js": 186,
	"./ar-sa": 187,
	"./ar-sa.js": 187,
	"./ar-tn": 188,
	"./ar-tn.js": 188,
	"./ar.js": 189,
	"./az": 190,
	"./az.js": 190,
	"./be": 191,
	"./be.js": 191,
	"./bg": 192,
	"./bg.js": 192,
	"./bm": 193,
	"./bm.js": 193,
	"./bn": 194,
	"./bn.js": 194,
	"./bo": 195,
	"./bo.js": 195,
	"./br": 196,
	"./br.js": 196,
	"./bs": 197,
	"./bs.js": 197,
	"./ca": 198,
	"./ca.js": 198,
	"./cs": 199,
	"./cs.js": 199,
	"./cv": 200,
	"./cv.js": 200,
	"./cy": 201,
	"./cy.js": 201,
	"./da": 202,
	"./da.js": 202,
	"./de": 205,
	"./de-at": 203,
	"./de-at.js": 203,
	"./de-ch": 204,
	"./de-ch.js": 204,
	"./de.js": 205,
	"./dv": 206,
	"./dv.js": 206,
	"./el": 207,
	"./el.js": 207,
	"./en-au": 208,
	"./en-au.js": 208,
	"./en-ca": 209,
	"./en-ca.js": 209,
	"./en-gb": 210,
	"./en-gb.js": 210,
	"./en-ie": 211,
	"./en-ie.js": 211,
	"./en-nz": 212,
	"./en-nz.js": 212,
	"./eo": 213,
	"./eo.js": 213,
	"./es": 216,
	"./es-do": 214,
	"./es-do.js": 214,
	"./es-us": 215,
	"./es-us.js": 215,
	"./es.js": 216,
	"./et": 217,
	"./et.js": 217,
	"./eu": 218,
	"./eu.js": 218,
	"./fa": 219,
	"./fa.js": 219,
	"./fi": 220,
	"./fi.js": 220,
	"./fo": 221,
	"./fo.js": 221,
	"./fr": 224,
	"./fr-ca": 222,
	"./fr-ca.js": 222,
	"./fr-ch": 223,
	"./fr-ch.js": 223,
	"./fr.js": 224,
	"./fy": 225,
	"./fy.js": 225,
	"./gd": 226,
	"./gd.js": 226,
	"./gl": 227,
	"./gl.js": 227,
	"./gom-latn": 228,
	"./gom-latn.js": 228,
	"./gu": 229,
	"./gu.js": 229,
	"./he": 230,
	"./he.js": 230,
	"./hi": 231,
	"./hi.js": 231,
	"./hr": 232,
	"./hr.js": 232,
	"./hu": 233,
	"./hu.js": 233,
	"./hy-am": 234,
	"./hy-am.js": 234,
	"./id": 235,
	"./id.js": 235,
	"./is": 236,
	"./is.js": 236,
	"./it": 237,
	"./it.js": 237,
	"./ja": 238,
	"./ja.js": 238,
	"./jv": 239,
	"./jv.js": 239,
	"./ka": 240,
	"./ka.js": 240,
	"./kk": 241,
	"./kk.js": 241,
	"./km": 242,
	"./km.js": 242,
	"./kn": 243,
	"./kn.js": 243,
	"./ko": 244,
	"./ko.js": 244,
	"./ky": 245,
	"./ky.js": 245,
	"./lb": 246,
	"./lb.js": 246,
	"./lo": 247,
	"./lo.js": 247,
	"./lt": 248,
	"./lt.js": 248,
	"./lv": 249,
	"./lv.js": 249,
	"./me": 250,
	"./me.js": 250,
	"./mi": 251,
	"./mi.js": 251,
	"./mk": 252,
	"./mk.js": 252,
	"./ml": 253,
	"./ml.js": 253,
	"./mr": 254,
	"./mr.js": 254,
	"./ms": 256,
	"./ms-my": 255,
	"./ms-my.js": 255,
	"./ms.js": 256,
	"./my": 257,
	"./my.js": 257,
	"./nb": 258,
	"./nb.js": 258,
	"./ne": 259,
	"./ne.js": 259,
	"./nl": 261,
	"./nl-be": 260,
	"./nl-be.js": 260,
	"./nl.js": 261,
	"./nn": 262,
	"./nn.js": 262,
	"./pa-in": 263,
	"./pa-in.js": 263,
	"./pl": 264,
	"./pl.js": 264,
	"./pt": 266,
	"./pt-br": 265,
	"./pt-br.js": 265,
	"./pt.js": 266,
	"./ro": 267,
	"./ro.js": 267,
	"./ru": 268,
	"./ru.js": 268,
	"./sd": 269,
	"./sd.js": 269,
	"./se": 270,
	"./se.js": 270,
	"./si": 271,
	"./si.js": 271,
	"./sk": 272,
	"./sk.js": 272,
	"./sl": 273,
	"./sl.js": 273,
	"./sq": 274,
	"./sq.js": 274,
	"./sr": 276,
	"./sr-cyrl": 275,
	"./sr-cyrl.js": 275,
	"./sr.js": 276,
	"./ss": 277,
	"./ss.js": 277,
	"./sv": 278,
	"./sv.js": 278,
	"./sw": 279,
	"./sw.js": 279,
	"./ta": 280,
	"./ta.js": 280,
	"./te": 281,
	"./te.js": 281,
	"./tet": 282,
	"./tet.js": 282,
	"./th": 283,
	"./th.js": 283,
	"./tl-ph": 284,
	"./tl-ph.js": 284,
	"./tlh": 285,
	"./tlh.js": 285,
	"./tr": 286,
	"./tr.js": 286,
	"./tzl": 287,
	"./tzl.js": 287,
	"./tzm": 289,
	"./tzm-latn": 288,
	"./tzm-latn.js": 288,
	"./tzm.js": 289,
	"./uk": 290,
	"./uk.js": 290,
	"./ur": 291,
	"./ur.js": 291,
	"./uz": 293,
	"./uz-latn": 292,
	"./uz-latn.js": 292,
	"./uz.js": 293,
	"./vi": 294,
	"./vi.js": 294,
	"./x-pseudo": 295,
	"./x-pseudo.js": 295,
	"./yo": 296,
	"./yo.js": 296,
	"./zh-cn": 297,
	"./zh-cn.js": 297,
	"./zh-hk": 298,
	"./zh-hk.js": 298,
	"./zh-tw": 299,
	"./zh-tw.js": 299
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 467;


/***/ }),

/***/ 471:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 472:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n\n\n\n      <div class=\"row\">\n        <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n          <h1 class=\"welcome-script\">Dashboard</h1>\n          <hr>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-sm-6 col-sm-offset-3 form-box\">\n          <div class=\"form-top text-center\">\n            <h3>Login </h3>\n            <p>Enter your username and password</p>\n          </div>\n          <div class=\"form-bottom\">\n            <form role=\"form\" class=\"login-form\" (ngSubmit)=\"onSignin(f)\" #f=\"ngForm\">\n              <div class=\"form-group\">\n                <label class=\"sr-only\" for=\"email\">Username</label>\n                <input placeholder=\"Email\" class=\"form-username form-control\" type=\"email\" id=\"email\" ngModel name=\"email\" required email\n                  #email=\"ngModel\">\n                <span class=\"error\" class=\"help-block\" *ngIf=\"!email.valid && email.touched\">Please enter a valid email!</span>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"sr-only\" for=\"password\">Password</label>\n                <input type=\"password\" placeholder=\"Password\" class=\"form-password form-control\" type=\"password\" id=\"password\" name=\"password\"\n                  ngModel required #password=\"ngModel\">\n                <span class=\"error\" class=\"help-block\" *ngIf=\"!password.valid && password.touched\">Please enter a password!</span>\n              </div>\n              <button type=\"submit\" class=\"btn\" [disabled]=\"!f.valid\">Log In</button>\n            </form>\n            <hr *ngIf=\"error\">\n            <h4 *ngIf=\"error\" class=\"error\">*{{errormsg}}</h4>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 473:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\r\n  <div class=\"container-fluid\">\r\n\r\n    <div class=\"navbar-header\">\r\n      <a routerLink=\"/\" class=\"navbar-brand header-name\">FHC App Dashboard</a>\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n            <span class=\"sr-only\">Toggle navigation</span>\r\n            <span class=\"icon icon-bar\"></span>\r\n            <span class=\"icon icon-bar\"></span>\r\n            <span class=\"icon icon-bar\"></span>\r\n        </button>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <!--<div class=\"navbar-default\">-->\r\n      <ul class=\"nav navbar-nav\" *ngIf=\"authService.isAuthenticated()\">\r\n          <li routerLinkActive=\"active\">\r\n              <a [routerLink]=\"['/quiz']\">By Quiz</a>\r\n            </li>\r\n        <li routerLinkActive=\"active\">\r\n          <a [routerLink]=\"['/users']\">By Users</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <ng-template [ngIf]=\"!authService.isAuthenticated()\">\r\n          <li routerLinkActive=\"active\"><a routerLink=\"/signin\"><strong>Login</strong></a></li>\r\n        </ng-template>\r\n\r\n        <li><a style=\"cursor: pointer;\" (click)=\"onLogout()\" routerLink=\"/signin\" *ngIf=\"authService.isAuthenticated()\">Logout</a></li>\r\n      </ul>\r\n\r\n    </div>\r\n\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ 474:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>Moulud Mo. Abdullah Yahya Saheb</h1>\n  </div>\n</div>\n\n\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h3>There were\n      <strong>{{login.length}}</strong>\n      attendees\n    </h3>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <p>Attendees:</p>\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\" *ngFor=\"let log of login\" >\n        <a [routerLink]=\"['/user', log.uid]\" style=\"cursor: pointer;\">{{log.name}}</a>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

module.exports = "<a style=\"cursor: pointer;\"\nrouterLinkActive=\"active\"\n[routerLink]=\"[event.eid]\"\nclass=\"list-group-item clearfix\">\n  <div class=\"pull-left\">\n    <h4 class=\"list-group-item-heading\">{{ event.name }}</h4>\n    <p class=\"list-group-item-text\">{{ event.abedi }}</p>\n    <p class=\"list-group-item-text\">{{ event.date }}</p>\n  </div>\n</a>\n"

/***/ }),

/***/ 476:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n  <app-event-item\n  *ngFor=\"let event of events; let i = index\"\n  [event]=\"event\"\n  [index]=\"i\"></app-event-item>\n  </div>\n</div>\n"

/***/ }),

/***/ 477:
/***/ (function(module, exports) {

module.exports = "\n<!-- <div class=\"row\">\n  <div class=\"col-md-5\">\n    <app-event-list></app-event-list>\n  </div>\n  <div class=\"col-md-7\">\n    <router-outlet></router-outlet>\n  </div>\n</div> -->\n\n<h1> Users Who Have Solved Quizzes</h1>\n<hr>\n  <h3 *ngIf=\"records\">No. of users giving quiz: {{records.length}}</h3>\n<hr>\n<button class=\"btn btn-primary\" (click)=\"getCSV()\">Download CSV</button>\n<hr>\n<div class=\"table-responsive\">\n    <table class=\"table table-bordered table-striped\">\n      <thead class = \"head\">\n        <tr>\n          <th>#</th>\n          <th (click)=\"sort('uid')\" class=\"pointer\">\n            Name\n            <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'uid', 'fa-sort-asc': (column == 'uid' && isDesc), 'fa-sort-desc': (column == 'uid' && !isDesc) }\" aria-hidden=\"true\"> </i>\n          </th>\n          <th (click)=\"sort('quiz')\" class=\"pointer\">\n            Quizzes Given\n            <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'quiz', 'fa-sort-asc': (column == 'quiz' && isDesc), 'fa-sort-desc': (column == 'quiz' && !isDesc) }\" aria-hidden=\"true\"> </i>\n          </th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"records\">\n        <tr *ngFor=\"let item of records; let i = index;\">\n          <td>{{i + 1}}</td>\n          <td><a [routerLink]=\"['/user', item.uid]\" >{{item.uid}}</a></td>\n          <td>{{item.quiz}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n\n"

/***/ }),

/***/ 478:
/***/ (function(module, exports) {

module.exports = "<p>\n  quiz-db works!\n</p>\n"

/***/ }),

/***/ 479:
/***/ (function(module, exports) {

module.exports = "<div class=\"well\">\n  <h1>\n    {{this.user.fullName}}\n  </h1>\n  <p> <strong>Email:</strong> {{this.user.emailId}} <strong>| Phone No.:</strong> {{this.user.phoneNumber}}</p>\n</div>\n<div>\n   <p> <strong>Type of Course:</strong> {{this.user.typeOfCourse | uppercase}}</p>\n   <p> <strong>Attempt No.:</strong> {{this.user.attemptNo}}</p>\n   <p> <strong>Attempt Date:</strong> {{this.user.attemptDate}}</p>\n   <p> <strong>Date of Birth:</strong> {{this.user.dob}}</p>\n</div>\n<button class=\"btn btn-primary\" (click)=\"getCSV()\">Download CSV</button>\n<hr>\n<h2>Quizzes</h2>\n<table class=\"table table-bordered table-striped login\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th (click)=\"sort('subject')\" class=\"pointer\">\n        Subject\n        <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'subject', 'fa-sort-asc': (column == 'subject' && isDesc), 'fa-sort-desc': (column == 'subject' && !isDesc) }\" aria-hidden=\"true\"> </i>\n      </th>\n      <th (click)=\"sort('chapter')\" class=\"pointer\">\n        Chapter\n        <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'chapter', 'fa-sort-asc': (column == 'chapter' && isDesc), 'fa-sort-desc': (column == 'chapter' && !isDesc) }\" aria-hidden=\"true\"> </i>\n      </th>\n      <th (click)=\"sort('quizId')\" class=\"pointer\">\n        Quiz Id\n        <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'quizId', 'fa-sort-asc': (column == 'quizId' && isDesc), 'fa-sort-desc': (column == 'quizId' && !isDesc) }\" aria-hidden=\"true\"> </i>\n      </th>\n      <th (click)=\"sort('date')\" class=\"pointer\">\n        Date\n        <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'date', 'fa-sort-asc': (column == 'date' && isDesc), 'fa-sort-desc': (column == 'date' && !isDesc) }\" aria-hidden=\"true\"> </i>\n      </th>\n      <th (click)=\"sort('marks')\" class=\"pointer\">\n        Marks\n        <i class=\"fa\" [ngClass]=\"{'fa-sort': column != 'marks', 'fa-sort-asc': (column == 'marks' && isDesc), 'fa-sort-desc': (column == 'marks' && !isDesc) }\" aria-hidden=\"true\"> </i>\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of solved; let i=index;\">\n      <td>{{i + 1}}</td>\n      <td>\n        {{item.subject | uppercase}}\n      </td>\n      <td>\n        {{item.chapter}}\n      </td>\n      <td>\n        {{item.quizId}}\n      </td>\n      <td>\n        {{item.date | date}}\n      </td>\n      <td>\n        {{item.marks}}\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n\n<!-- <h2>Explicitly Logged Out</h2>\n<table class=\"table table-bordered table-striped logout\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>\n        IP\n      </th>\n      <th>\n        Time\n      </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of logout; let i=index;\">\n      <td>{{i + 1}}</td>\n      <td>\n        {{item.ip}}\n      </td>\n      <td>\n        {{item.time}}\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n\n<h2>Presence</h2>\n<span>Shows the start and end time of a session (session terminates on refreshing a page or closing a window)</span>\n<table class=\"table table-bordered table-striped presence\">\n  <thead>\n    <tr>\n      <th>#</th>\n      <th>\n        Began\n      </th>\n      <th>\n        Ended\n      </th>\n      <th>Duration</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of presence; let i=index;\">\n      <td>{{i + 1}}</td>\n      <td>\n        {{item.began | date: 'medium'}}\n      </td>\n      <td>\n        {{item.ended | date: 'medium'}}\n      </td>\n      <td>{{   (item.ended - item.began) | duration }} </td>\n    </tr>\n  </tbody>\n</table> -->\n"

/***/ }),

/***/ 480:
/***/ (function(module, exports) {

module.exports = "<h1>All Users</h1>\n<hr>\n  <label for=\"search\">Search Here</label>\n  <input class=\"form-control\" type=\"text\" name=\"search\" [(ngModel)]=\"filter\">\n\n<hr>\n<div class=\"table-responsive\">\n    <button class=\"btn btn-primary\" (click)=\"getCSV()\">Download CSV</button>\n    <hr>\n    <table class=\"table table-bordered table-striped\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>Name</th>\n          <th>Ph. No.</th>\n          <th>Email</th>\n          <th>Course</th>\n          <th>Attempt No.</th>\n          <th>Attempt Date</th>\n          <th>Date of Birth</th>\n          <th>Address</th>\n        </tr>\n      </thead>\n      <tbody *ngIf=\"items.length !== 0\">\n        <tr *ngFor=\"let item of items | filter:filter; let i=index;\">\n          <td>{{i + 1}}</td>\n          <td><a [routerLink]=\"['/user', item.uid]\" >{{item.fullName}}</a></td>\n          <td>{{item.phoneNumber}}</td>\n          <td>{{item.emailId}}</td>\n          <td>{{item.typeOfCourse}}</td>\n          <td>{{item.attemptNo}}</td>\n          <td>{{item.attemptDate}}</td>\n          <td>{{item.dob}}</td>\n          <td>{{item.address}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n\n\n\n\n"

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(317);


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoggedInService = (function () {
    function LoggedInService() {
    }
    return LoggedInService;
}());
LoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LoggedInService);

//# sourceMappingURL=logged-in.service.js.map

/***/ })

},[519]);
//# sourceMappingURL=main.bundle.js.map