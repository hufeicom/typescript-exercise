/////////////
// mixins 例子
////////////
// 添加属性的混合例子
function TimesTamped(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.timestamp = Date.now();
        }
    };
}
// 添加属性和方法的混合例子
function Activatable(Base) {
    return class extends Base {
        constructor() {
            super(...arguments);
            this.isActivated = false;
        }
        activate() {
            this.isActivated = true;
        }
        deactivate() {
            this.isActivated = false;
        }
    };
}
///////////
// 组合类
///////////
// 简答的类
class People {
    constructor() {
        this.name = '';
    }
}
export class Say {
    say() {
        console.log('I can say');
    }
}
// 添加 TimesTamped 的 People
const TimestampedUser = TimesTamped(People);
// Tina TimesTamped 和 Activatable 的类
const TimestampedActivatableUser = TimesTamped(Activatable(People));
//////////
// 使用组合类
//////////
const timestampedUserExample = new TimestampedUser();
console.log(timestampedUserExample.timestamp);
const timestampedActivatableUserExample = new TimestampedActivatableUser();
console.log(timestampedActivatableUserExample.timestamp);
console.log(timestampedActivatableUserExample.isActivated);
