# Using Class.create with TypeScript

## Example using snippet `sn-class` with prototype omitted

```JavaScript
/**
 * Defines the public instance members of a {@link MyClass} type.
 */
export interface MyClass extends Readonly<{
    // Read-only member
    getSum(): number;
}> {
    // Read-write members
    value1: number;
    value2: number;
}

/**
 * Defines the {@link MyClass} constructor.
 */
export interface MyClassConstructor extends $$class.Constructor<MyClass> {
    /**
     * Creates a new instance of the implementing class.
     */
    new(): MyClass;
}

/**
 * Defines the'this' object for {@link MyClass} instance methods.
 */
type MyClassThisObj = MyClass & $$class.IPrototype0;

/**
 * The {@link MyClass} constructor object.
 */
export const MyClass: MyClassConstructor = (function(): MyClassConstructor {
    const MyClass: MyClassConstructor = Class.create<MyClass, MyClassConstructor>();

    MyClass.prototype = {
        value1: 1,
        value2: 2,
        getSum: function (this: MyClassThisObj) {
            return isNaN(this.value1) ? this.value2 : isNaN(this.value2) ? this.value1 : this.value1 + this.value2;
        },
        type: "MyClass"
    };

    return MyClass;
})();

var myClass = new MyClass();
myClass.value1 = 9;
myClass.value2 = 3;
gs.info(myClass.getSum());
```

## Example using snippet `sn-class-1`

```JavaScript
/**
 * Defines the public instance members of a {@link MyClass} type.
 */
export interface MyClass extends Readonly<{
    // Public, read-only members
    getValue1(): number;
    setValue1(value: number): void;
    getValue2(): number;
    setValue2(value: number): void;
    getSum(): number;
}> { }

/**
 * Defines the prototype for a {@link MyClass} constructor.
 */
interface IMyClassPrototype extends MyClass {
    // Private members
    _value1: number;
    _value2: number;
}

/**
 * Defines the {@link MyClass} constructor.
 */
export interface MyClassConstructor extends $$class.Constructor1<number, MyClass, IMyClassPrototype> {
    /**
     * Creates a new instance of the implementing class.
     * @param {number} value - The constructor argument.
     */
    new(value: number): MyClass;
}

/**
 * Defines the'this' object for {@link MyClass} instance methods.
 */
type MyClassThisObj = IMyClassPrototype & $$class.IPrototype1<number>;

/**
 * The {@link MyClass} constructor object.
 */
export const MyClass: MyClassConstructor = (function (): MyClassConstructor {
    const MyClass: MyClassConstructor = Class.create<
        number,
        MyClass,
        MyClassConstructor,
        IMyClassPrototype
    >();

    // Cast to MyClassThisObj because _value1 is initialized in constructor
    MyClass.prototype = <MyClassThisObj>{
        _value2: 0,
        initialize: function (this: MyClassThisObj, value: number): void {
            this._value1 = isNaN(value) ? 0 : value;
        },
        getValue1: function (this: MyClassThisObj): number {
            return this._value1;
        },
        setValue1: function (this: MyClassThisObj, value: number): void {
            this._value1 = isNaN(value) ? 0 : value;
        },
        getValue2: function (this: MyClassThisObj): number {
            return this._value2;
        },
        setValue2: function (this: MyClassThisObj, value: number): void {
            this._value2 = isNaN(value) ? 0 : value;
        },
        getSum: function (this: MyClassThisObj) {
            return this._value1 + this._value2;
        },
        type: "MyClass",
    };

    return MyClass;
})();

var myClass = new MyClass();
myClass.setValue1(9);
myClass.setValue2(3);
gs.info(myClass.getSum());

```

## Example using snippet `sn-class-1` with prototype omitted

```JavaScript
/**
 * Defines the public instance members of a {@link MyClass} type.
 */
export interface MyClass extends Readonly<{
    // Public, read-only member
    getSum(): number;
}> {
    // Public, read-write members
    value1: number;
    value2: number;
}

/**
 * Defines the {@link MyClass} constructor.
 */
export interface MyClassConstructor
    extends $$class.Constructor1<number, MyClass> {
    /**
     * Creates a new instance of the implementing class.
     * @param {number} value - constructor argument.
     */
    new(value: number): MyClass;
}

/**
 * Defines the'this' object for {@link MyClass} instance methods.
 */
type MyClassThisObj = MyClass & $$class.IPrototype1<number>;

/**
 * The {@link MyClass} constructor object.
 */
export const MyClass: MyClassConstructor = (function (): MyClassConstructor {
    const MyClass: MyClassConstructor = Class.create<
        number,
        MyClass,
        MyClassConstructor
    >();

    // Cast to MyClassThisObj because value1 is initialized in constructor
    MyClass.prototype = <MyClassThisObj>{
        value2: 0,
        initialize: function (this: MyClassThisObj, value: number): void {
            this.value1 = isNaN(value) ? 0 : value;
        },
        getSum: function (this: MyClassThisObj) {
            return isNaN(this.value1) ? this.value2 : isNaN(this.value2) ? this.value1 : this.value1 + this.value2;
        },
        type: "MyClass",
    };

    return MyClass;
})();
```

## Example using snippet `sn-class-1-opt`

```JavaScript
/**
 * Defines the public instance members of a MyClass type.
 */
export interface MyClass extends Readonly<{
    // Public, read-only members
    getSum(): number;
    getValue1(): number;
}> {
    // Public, read-write member
    value2: number;
}

/**
 * Defines the prototype for a {@link MyClass} constructor.
 */
interface IMyClassPrototype extends MyClass {
    // Private member
    _value1: number;
}

/**
 * Defines the {@link MyClass} constructor.
 */
export interface MyClassConstructor extends $$class.Constructor1Opt<number, MyClass, IMyClassPrototype> {
    /**
     * Creates a new instance of the implementing class.
     * @param {number} [value] - The optional constructor argument.
     */
    new(value?: number): MyClass;
}

/**
 * Defines the'this' object for {@link MyClass} instance methods.
 */
type MyClassThisObj = IMyClassPrototype & $$class.IPrototype1Opt<number>;

/**
 * The {@link MyClass} constructor object.
 */
export const MyClass: MyClassConstructor = (function(): MyClassConstructor {
    const MyClass: MyClassConstructor = Class.create<number, MyClass, MyClassConstructor, IMyClassPrototype>();

    // Cast to MyClassThisObj because _value1 ais initialized in constructor
    MyClass.prototype = <MyClassThisObj>{
        value2: 0,
        initialize: function(this: MyClassThisObj, value?: number): void {
            this._value1 = (typeof value !== 'number' || isNaN(value)) ? 0 : value;
        },
        getSum: function (this: MyClassThisObj) {
            return isNaN(this.value2) ? this._value1 : this._value1 + this.value2;
        },
        getValue1: function(this: MyClassThisObj): number { return this._value1; },
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

## Example using snippet `sn-class-1-opt` with prototype omitted

```JavaScript
/**
 * Defines the public instance members of a MyClass type.
 */
export interface MyClass extends Readonly<{
    // Public, read-only member
    getSum(): number;
}> {
    // Public, read-write members
    value1: number;
    value2: number;
}

/**
 * Defines the {@link MyClass} constructor.
 */
export interface MyClassConstructor extends $$class.Constructor1Opt<number, MyClass> {
    /**
     * Creates a new instance of the implementing class.
     * @param {number} [value] - The optional constructor argument.
     */
    new(value?: number): MyClass;
}

/**
 * Defines the'this' object for {@link MyClass} instance methods.
 */
type MyClassThisObj = MyClass & $$class.IPrototype1Opt<number>;

/**
 * The {@link MyClass} constructor object.
 */
export const MyClass: MyClassConstructor = (function(): MyClassConstructor {
    const MyClass: MyClassConstructor = Class.create<number, MyClass, MyClassConstructor>();

    // Cast to MyClassThisObj because value1 is initialized in constructor
    MyClass.prototype = <MyClassThisObj>{
        value2: 0,
        initialize: function(this: MyClassThisObj, value?: number): void {
            this.value1 = (typeof value !== 'number') ? 0 : value;
        },
        getSum: function (this: MyClassThisObj) {
            return isNaN(this.value1) ? this.value2 : isNaN(this.value2) ? this.value1 : this.value1 + this.value2;
        },
        type: "MyClass"
    };

    return MyClass;
})();
```

## Example using snippet `sn-class-2`

```JavaScript
/**
 * Defines the public instance members of a {@link MyClass} type.
 */
export interface MyClass extends Readonly<{
    // Public, read-only members
    getValue1(): number;
    setValue1(value: number): void;
    getValue2(): string;
    setValue2(value: string): void;
    getSum(): number;
}> { }

/**
 * Defines the prototype for a {@link MyClass} constructor.
 */
interface IMyClassPrototype extends MyClass {
    // Private members
    _value1: number;
    _value2: number;
}

/**
 * Defines the {@link MyClass} constructor.
 */
export interface MyClassConstructor extends $$class.Constructor2<number, string, MyClass, IMyClassPrototype> {
    /**
     * Creates a new instance of the implementing class.
     * @param {number} value1 - The first argument.
     * @param {string} value2 - The second argument.
     */
    new(value1: number, value2: string): MyClass;
}

/**
 * Defines the'this' object for {@link MyClass} instance methods.
 */
type MyClassThisObj = IMyClassPrototype & $$class.IPrototype2<number, string>;

/**
 * The {@link MyClass} constructor object.
 */
export const MyClass: MyClassConstructor = (function(): MyClassConstructor {
    const MyClass: MyClassConstructor = Class.create<number, string, MyClass, MyClassConstructor, IMyClassPrototype>();

    // Cast to MyClassThisObj because _value1 and _value2 are initialized in constructor
    MyClass.prototype = <MyClassThisObj>{
        initialize: function(this: MyClassThisObj, value1: number, value2: string): void {
            this._value1 = (typeof value1 !== 'number' || isNaN(value1)) ? 0 : value1;
            this._value2 = parseInt(value2);
            if (isNaN(this._value2))
                this._value2 = 0;
        },
        getValue1: function(this: MyClassThisObj): number {
            return this._value1;
        },
        setValue1: function(this: MyClassThisObj, value: number): void {
            this._value1 = isNaN(value) ? 0 : value;
        },
        getValue2: function(this: MyClassThisObj): string {
            return '' + this._value2;
        },
        setValue2: function(this: MyClassThisObj, value: string): void {
            this._value2 = parseInt(value);
            if (isNaN(this._value2))
                this._value2 = 0;
        },
        getSum: function(this: MyClassThisObj) {
            return this._value1 + this._value2;
        },
        type: "MyClass"
    };

    return MyClass;
})();

var myClass = new MyClass(9, "3");
gs.info(myClass.getSum());
```

## Example using snippet `sn-class-2` with prototype omitted

```JavaScript
/**
 * Defines the public instance members of a {@link MyClass} type.
 */
export interface MyClass extends Readonly<{
    // Public, read-only member
    getSum(): number;
}> {
    // Public, read-write members
    value1: number;
    value2: number;
}

/**
 * Defines the {@link MyClass} constructor.
 */
export interface MyClassConstructor extends $$class.Constructor2<number, string, MyClass> {
    /**
     * Creates a new instance of the implementing class.
     * @param {number} value1 - The first argument.
     * @param {string} value2 - The second argument.
     */
    new(value1: number, value2: string): MyClass;
}

/**
 * Defines the'this' object for {@link MyClass} instance methods.
 */
type MyClassThisObj = MyClass & $$class.IPrototype2<number, string>;

/**
 * The {@link MyClass} constructor object.
 */
export const MyClass: MyClassConstructor = (function(): MyClassConstructor {
    const MyClass: MyClassConstructor = Class.create<number, string, MyClass, MyClassConstructor>();

    // Cast to MyClassThisObj because value1 and value2 are initialized in constructor
    MyClass.prototype = <MyClassThisObj>{
        initialize: function(this: MyClassThisObj, value1: number, value2: string): void {
            this.value1 = value1;
            this.value2 = parseInt(value2);
        },
        getSum: function (this: MyClassThisObj) {
            return isNaN(this.value1) ? this.value2 : isNaN(this.value2) ? this.value1 : this.value1 + this.value2;
        },
        type: "MyClass"
    };

    return MyClass;
})();

var myClass = new MyClass(9, "3");
gs.info(myClass.getSum());
gs.info(MyClass.getDifference(9, 3));
```
