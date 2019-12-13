var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/////////////
// mixins 例子
////////////
// 添加属性的混合例子
function TimesTamped(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.timestamp = Date.now();
            return _this;
        }
        return class_1;
    }(Base));
}
// 添加属性和方法的混合例子
function Activatable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.isActivated = false;
            return _this;
        }
        class_2.prototype.activate = function () {
            this.isActivated = true;
        };
        class_2.prototype.deactivate = function () {
            this.isActivated = false;
        };
        return class_2;
    }(Base));
}
///////////
// 组合类
///////////
// 简答的类
var User = /** @class */ (function () {
    function User() {
        this.name = '';
    }
    return User;
}());
// 添加 TimesTamped 的 User
var TimestampedUser = TimesTamped(User);
// Tina TimesTamped 和 Activatable 的类
var TimestampedActivatableUser = TimesTamped(Activatable(User));
//////////
// 使用组合类
//////////
var timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);
var timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);
