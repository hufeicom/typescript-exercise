declare type Constructor<T = {}> = new (...args: any[]) => T;
declare function TimesTamped<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        timestamp: number;
    };
} & TBase;
declare function Activatable<TBase extends Constructor>(Base: TBase): {
    new (...args: any[]): {
        isActivated: boolean;
        activate(): void;
        deactivate(): void;
    };
} & TBase;
declare class User {
    name: string;
}
declare class Say {
    say(): void;
}
declare const TimestampedUser: {
    new (...args: any[]): {
        timestamp: number;
    };
} & typeof User;
declare const TimestampedActivatableUser: {
    new (...args: any[]): {
        timestamp: number;
    };
} & {
    new (...args: any[]): {
        isActivated: boolean;
        activate(): void;
        deactivate(): void;
    };
} & typeof User;
declare const timestampedUserExample: {
    timestamp: number;
} & User;
declare const timestampedActivatableUserExample: {
    timestamp: number;
} & {
    isActivated: boolean;
    activate(): void;
    deactivate(): void;
} & User;
