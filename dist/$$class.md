# Using Class.create with TypeScript

## Example using `$$class.Constructor<TInstance>` and `create<TInstance, TConstructor>()`

```JavaScript

// Declare class type with read/write and read-only members.
type MyClass = { value1: number; value2: number; } & Readonly<{ getSum(): number; }> & $$class.JSProto;

// Create the class
export const MyClass: $$class.Constructor<MyClass> = (function(): $$class.Constructor<MyClass> {
    var MyClass: $$class.Constructor<MyClass> = Class.create<MyClass, $$class.Constructor<MyClass>>();
    MyClass.prototype = {
        value1: 1,
        value2: 2,
        getSum: function(this: MyClass) { return this.value1 + this.value2; },
        type: "MyClass"
    };
    return MyClass;
})();

var myClass = new MyClass();
myClass.value1 = 9;
myClass.value2 = 3;
gs.info(myClass.getSum());


```

## Example using `$$class.Constructor<TInstance, TPrototype>` and `create<TInstance, TConstructor, TPrototype>()`

```JavaScript

// Declare class type with read-only public members.
type MyClass = Readonly<{
    getValue1(): number;
    setValue1(value: number): void;
    getValue2(): number;
    setValue2(value: number): void;
    getSum(): number;
}> & $$class.JSProto;

// Declare the prototype as the class type with the private members added.
type MyClassPrototype = {
    _value1: number;
    _value2: number;
} & MyClass;

// Create the class
export const MyClass: $$class.Constructor<MyClass, MyClassPrototype> = (function(): $$class.Constructor<MyClass, MyClassPrototype> {
    var MyClass: $$class.Constructor<MyClass, MyClassPrototype> = Class.create<MyClass, $$class.Constructor<MyClass, MyClassPrototype>, MyClassPrototype>();
    MyClass.prototype = {
        _value1: 1,
        _value2: 2,
        getValue1: function(this: MyClassPrototype): number { return this._value1; },
        setValue1: function(this: MyClassPrototype, value: number): void { this._value1 = isNaN(value) ? 0 : value; },
        getValue2: function(this: MyClassPrototype): number { return this._value2; },
        setValue2: function(this: MyClassPrototype, value: number): void { this._value2 = isNaN(value) ? 0 : value; },
        getSum: function(this: MyClassPrototype) { return this._value1 + this._value2; },
        type: "MyClass"
    };
    return MyClass;
})();

var myClass = new MyClass();
myClass.setValue1(9);
myClass.setValue2(3);
gs.info(myClass.getSum());

```

## Example using `Constructor1<TArg, TInstance>` and `create<TInstance, TConstructor>()`

```JavaScript

// Declare class type with read/write and read-only members.
type MyClass = {
    value1: number;
    value2: number;
} & Readonly<{
    getSum(): number;
}> & $$class.JSProto;

// Create the class
export const MyClass: $$class.Constructor1<number, MyClass> = (function(): $$class.Constructor1<number, MyClass> {
    var MyClass: $$class.Constructor1<number, MyClass> = Class.create<MyClass, $$class.Constructor1<number, MyClass>>();
    // Cast the prototype since we won't be setting _value1 until the initialize method is called.
    MyClass.prototype = <MyClass & $$class.IPrototype1<number>>{
        value2: 0,
        initialize: function(this: MyClass, value1: number) {
            this.value1 = value1;
        },
        getSum: function(this: MyClass) { return this.value1 + this.value2; },
        type: "MyClass"
    };
    return MyClass;
})();

var myClass = new MyClass(9);
myClass.value2 = 3;
gs.info(myClass.getSum());

```

## Example using `Constructor1<TArg, TInstance, TPrototype>` and `create<TInstance, TConstructor, TPrototype>()`

```JavaScript

// Declare class type with read-only public members.
type MyClass = Readonly<{
    getValue1(): number;
    setValue1(value: number): void;
    getValue2(): number;
    setValue2(value: number): void;
    getSum(): number;
}> & $$class.JSProto;

// Declare the prototype as the class type with the private members added.
type MyClassPrototype = {
    _value1: number;
    _value2: number;
} & MyClass;

// Create the class
export const MyClass: $$class.Constructor1<number, MyClass, MyClassPrototype> = (function(): $$class.Constructor1<number, MyClass, MyClassPrototype> {
    var MyClass: $$class.Constructor1<number, MyClass, MyClassPrototype> = Class.create<MyClass, $$class.Constructor1<number, MyClass, MyClassPrototype>, MyClassPrototype>();
    // Cast the prototype since we won't be setting _value1 until the initialize method is called.
    MyClass.prototype = <MyClassPrototype & $$class.IPrototype1<number>>{
        _value2: 0,
        initialize: function(this: MyClassPrototype, value1: number) {
            this._value1 = isNaN(value1) ? 0 : value1;
        },
        getValue1: function(this: MyClassPrototype): number { return this._value1; },
        setValue1: function(this: MyClassPrototype, value: number): void { this._value1 = isNaN(value) ? 0 : value; },
        getValue2: function(this: MyClassPrototype): number { return this._value2; },
        setValue2: function(this: MyClassPrototype, value: number): void { this._value2 = isNaN(value) ? 0 : value; },
        getSum: function(this: MyClassPrototype) { return this._value1 + this._value2; },
        type: "MyClass"
    };
    return MyClass;
})();

var myClass = new MyClass(9);
myClass.setValue2(3);
gs.info(myClass.getSum());

```

## Example using `Constructor1Opt<TArg, TInstance>` and `create<TInstance, TConstructor>()`

```JavaScript

// Declare class type with read/write and read-only members.
type MyClass = {
    value1: number;
    value2: number;
} & Readonly<{
    getSum(): number;
}> & $$class.JSProto;

// Create the class
export const MyClass: $$class.Constructor1Opt<number, MyClass> = (function(): $$class.Constructor1Opt<number, MyClass> {
    var MyClass: $$class.Constructor1Opt<number, MyClass> = Class.create<MyClass, $$class.Constructor1Opt<number, MyClass>>();
    // Cast the prototype since we won't be setting _value1 until the initialize method is called.
    MyClass.prototype = <MyClass & $$class.IPrototype1Opt<number>>{
        value2: 0,
        initialize: function(this: MyClass, value1?: number) {
            this.value1 = (typeof value1 === 'number') ? value1 : 0;
        },
        getSum: function(this: MyClass) { return this.value1 + this.value2; },
        type: "MyClass"
    };
    return MyClass;
})();

var myClass = new MyClass();
myClass.value1 = 9;
myClass.value2 = 3;
gs.info(myClass.getSum());

myClass = new MyClass(9);
myClass.value2 = 3;
gs.info(myClass.getSum());

```

## Example using `Constructor1Opt<TArg, TInstance, TPrototype>` and `create<TInstance, TConstructor, TPrototype>()`

```JavaScript

// Declare class type with read-only public members.
type MyClass = Readonly<{
    getValue1(): number;
    setValue1(value: number): void;
    getValue2(): number;
    setValue2(value: number): void;
    getSum(): number;
}> & $$class.JSProto;

// Declare the prototype as the class type with the private members added.
type MyClassPrototype = {
    _value1: number;
    _value2: number;
} & MyClass;

// Create the class
export const MyClass: $$class.Constructor1Opt<number, MyClass, MyClassPrototype> = (function(): $$class.Constructor1Opt<number, MyClass, MyClassPrototype> {
    var MyClass: $$class.Constructor1Opt<number, MyClass, MyClassPrototype> = Class.create<MyClass, $$class.Constructor1Opt<number, MyClass, MyClassPrototype>, MyClassPrototype>();
    // Cast the prototype since we won't be setting _value1 until the initialize method is called.
    MyClass.prototype = <MyClassPrototype & $$class.IPrototype1Opt<number>>{
        _value2: 0,
        initialize: function(this: MyClassPrototype, value1?: number) {
            this._value1 = (typeof value1 !== 'number' || isNaN(value1)) ? 0 : value1;
        },
        getValue1: function(this: MyClassPrototype): number { return this._value1; },
        setValue1: function(this: MyClassPrototype, value: number): void { this._value1 = isNaN(value) ? 0 : value; },
        getValue2: function(this: MyClassPrototype): number { return this._value2; },
        setValue2: function(this: MyClassPrototype, value: number): void { this._value2 = isNaN(value) ? 0 : value; },
        getSum: function(this: MyClassPrototype) { return this._value1 + this._value2; },
        type: "MyClass"
    };
    return MyClass;
})();

var myClass = new MyClass();
myClass.setValue1(9);
myClass.setValue2(3);
gs.info(myClass.getSum());

myClass = new MyClass(9);
myClass.setValue2(3);
gs.info(myClass.getSum());

```

## Example using `Constructor2<TArg1, TArg2, TInstance>` and `create<TInstance, TConstructor>()` with static members

```JavaScript

// Declare class type with read/write and read-only members.
type MyClass = {
    value1: number;
    value2: number;
} & Readonly<{
    getSum(): number;
}> & $$class.JSProto;

// Declare constructor with static methods
type MyClassConstructor = $$class.Constructor2<number, string, MyClass> & {
    getDifference(value1: number, value2: number): number;
};

// Create the class
export const MyClass: MyClassConstructor = (function(): MyClassConstructor {
    var MyClass: MyClassConstructor = Class.create<MyClass, MyClassConstructor>();
    // Cast the prototype since we won't be setting value1 or value2 until the initialize method is called.
    MyClass.prototype = <MyClass & $$class.IPrototype2<number, string>>{
        initialize: function(this: MyClass, value1: number, value2: string) {
            this.value1 = value1;
            this.value2 = parseInt(value2);
            if (isNaN(this.value2))
                this.value2 = 0;
        },
        getSum: function(this: MyClass) { return this.value1 + this.value2; },
        type: "MyClass"
    };

    MyClass.getDifference = function(value1: number, value2: number) { return value1 - value2; };

    return MyClass;
})();

var myClass = new MyClass(9, "3");
gs.info(myClass.getSum());
gs.info(MyClass.getDifference(9, 3));

```

## Example using `Constructor2<TArg1, TArg2, TInstance, TPrototype>` and `create<TInstance, TConstructor, TPrototype>()`

```JavaScript

// Declare class type with read-only public members.
type MyClass = Readonly<{
    getValue1(): number;
    setValue1(value: number): void;
    getValue2(): string;
    setValue2(value: string): void;
    getSum(): number;
}> & $$class.JSProto;

// Declare the prototype as the class type with the private members added.
type MyClassPrototype = {
    _value1: number;
    _value2: number;
} & MyClass;

// Create the class
export const MyClass: $$class.Constructor2<number, string, MyClass, MyClassPrototype> = (function(): $$class.Constructor2<number, string, MyClass, MyClassPrototype> {
    var MyClass: $$class.Constructor2<number, string, MyClass, MyClassPrototype> = Class.create<MyClass, $$class.Constructor2<number, string, MyClass, MyClassPrototype>, MyClassPrototype>();
    // Cast the prototype since we won't be setting _value1 or _value2 until the initialize method is called.
    MyClass.prototype = <MyClassPrototype & $$class.IPrototype2<number, string>>{
        _value2: 0,
        initialize: function(this: MyClassPrototype, value1: number, value2: string) {
            this._value1 = (typeof value1 !== 'number' || isNaN(value1)) ? 0 : value1;
            this._value2 = parseInt(value2);
            if (isNaN(this._value2))
                this._value2 = 0;
        },
        getValue1: function(this: MyClassPrototype): number { return this._value1; },
        setValue1: function(this: MyClassPrototype, value: number): void { this._value1 = isNaN(value) ? 0 : value; },
        getValue2: function(this: MyClassPrototype): string { return '' + this._value2; },
        setValue2: function(this: MyClassPrototype, value: string): void {
            this._value2 = parseInt(value);
            if (isNaN(this._value2))
                this._value2 = 0;
        },
        getSum: function(this: MyClassPrototype) { return this._value1 + this._value2; },
        type: "MyClass"
    };
    return MyClass;
})();

var myClass = new MyClass(9, "3");
gs.info(myClass.getSum());

```
