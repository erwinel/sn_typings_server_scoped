# sn_typings_server_scoped

TypeScript definitions for ServiceNow server-side scoped application development.

## Using Class.create with TypeScript

The basic concept is to define 3 interfaces to represent the custom class:

1. Base Interface - This defines the instance members for class instances.
2. Prototype Interface - This represents the members defined in class's prototype object.
3. Constructor Interface - This defines the constructors and static members.

The `$$snClass` namespace contains helper types that can be used to create define these interfaces.

### THe Base Interface

Define an interface that inherits from the `$$snClass.ICustomClassBase<B, N>` interface and defines the instance members that the class will implement. Generic type parameters are:

- **B** - This is is the base interface type for the custom class.
- **N** - This is the name of the class that is being defined.

Example:

```TypeScript
interface IMyTypeBase extends $$snClass.ICustomClassBase<IMyTypeBase, "MyType"> {
     getName(): string;
}
```

Note that the first generic argument parameter (`IMyTypeBase`) is the same as the interface that extends it.

### Prototype Interface

Define an interface that inherits from the base interface as well as one of the following interfaces, depending upon how many arguments there will be in the constructor:

- `ICustomClassPrototype0<B, P, N>` - Class constructor has no arguments.
- `ICustomClassPrototype1<B, P, N, A>`- Class constructor takes 1 argument of type `A`.
- `ICustomClassPrototype2<B, P, N, A0, A1>`- Class constructor takes 2 arguments of type `A0` and `A1`.
- `ICustomClassPrototype3<B, P, N, A0, A1, A2>`- Class constructor takes 3 arguments of type `A0`, `A1` and `A2`.
- `ICustomClassPrototype4<B, P, N, A0, A1, A2, A3>`- Class constructor takes 4 arguments of type `A0`, `A1`, `A2` and `A3`.
- `ICustomClassPrototypeN<B, P, N`- Class constructor takes a variable number of arguments.

Generic type parameters in common for each of these are as follows:

- **B** - This is the base interface type for the custom class.
- **P** - This is the prototype interface type for the custom class, which also inherits from the interface used for the `B` generic argument.
- **N** - This is the name of the class that is being defined. This needs to be identical to the `N` generic argument parameter for the base class interface that inherited from `$$snClass.ICustomClassBase<B, N>`.

You can also define any members in the prototype interface which are to be defined in the prototype, but not intended to be used as public members.

Example:

```TypeScript
interface IMyTypePrototype extends $$snClass.ICustomClassPrototype1<IMyTypeBase, IMyTypePrototype, "MyType", (GlideRecord | undefined)>, IMyTypeBase {
    _glideRecord?: GlideRecord;
}
```

Note that this interface inherits from the same interface that is used in the first generic argument (`IMyTypeBase`)
and that the second generic argument parameter (`IMyTypePrototype`) is the same as the interface that extends it.

### Constructor Interface

Create an interface that inherits from one of the following interfaces, depending upon how many arguments there will be in the constructor:

- `CustomClassConstructor0<B, P, I>` - Class constructor has no arguments.
- `CustomClassConstructor1<B, P, I, A>`- Class constructor takes 1 argument of type `A`.
- `CustomClassConstructor2<B, P, I, A0, A1>`- Class constructor takes 2 arguments of type `A0` and `A1`.
- `CustomClassConstructor3<B, P, I, A0, A1, A2>`- Class constructor takes 3 arguments of type `A0`, `A1` and `A2`.
- `CustomClassConstructor4<B, P, I, A0, A1, A2, A3>`- Class constructor takes 4 arguments of type `A0`, `A1`, `A2` and `A3`.
- `CustomClassConstructorN<B, P, I>`- Class constructor takes a variable number of arguments.

Generic type parameters in common for each of these are as follows:

- **B** - This is the base interface type for the custom class.
- **P** - This is the prototype interface type for the custom class, which also inherits from the interface used for the `B` generic argument.
- **I** - This is instance type that is returned by the constructor.

This interface can also define any static methods that the class will implement.

Example:

```TypeScript
interface MyTypeConstructor extends $$snClass.CustomClassConstructor1<IMyTypeBase, IMyTypePrototype, MyType, (GlideRecord | undefined)> {
    areSame(x?: MyType, y?: MyType): boolean;
}
```

### Implementing the class

Following is an example for implementing a class called "MyType" that takes a single GlideRecord as a constructor argument:

```TypeScript
// Define the base interface
interface IMyTypeBase extends $$snClass.ICustomClassBase<IMyTypeBase, "MyType"> {
     getName(): string;
}

// Define the interface for the prototype
interface IMyTypePrototype extends $$snClass.ICustomClassPrototype1<IMyTypeBase, IMyTypePrototype, "MyType", (GlideRecord | undefined)>, IMyTypeBase {
    _glideRecord?: GlideRecord;
}

// Declare the class type.
declare type MyType = Readonly<IMyTypeBase>;

// Declare the constructor and static members
interface MyTypeConstructor extends $$snClass.CustomClassConstructor1<IMyTypeBase, IMyTypePrototype, MyType, (GlideRecord | undefined)> {
    areSame(x?: MyType, y?: MyType): boolean;
}

// Implement the class, assigning it to a constant variable with the same name as the class being created.
const MyType: MyTypeConstructor = (function (): MyTypeConstructor {
    // Create the class constructor object.
    var myTypeConstructor: MyTypeConstructor = Class.create();

    // Implement static method
    myTypeConstructor.areSame = function(x?: MyType, y?: MyType): boolean {
        if (gs.nil(x) || gs.nil(x._glideRecord)) return gs.nil(y) || gs.nil(y._glideRecord);
        if (gs.nil(y) || gs.nil(y._glideRecord)) return false;
        return ('' + x.getValue('sys_id')) == ('' + y.getValue('sys_id'));
    }

    // Set the prototype for class construction
    myTypeConstructor.prototype = {
        // Implement initializer with arguments from constructor.
        initialize(gr?: GlideRecord): void {
            this._glideRecord = gr;
        },

        // Implement instance method.
        getName(): string {
            return gs.nil(this._glideRecord) ? '' : '' + this._glideRecord.getValue('name');
        },

        // Initialize type property.
        type: "MyType"
    };
    return myTypeConstructor;
})();
```

Note: Using the same identifier name for the constant variable that contains the class definition (`const MyType: MyTypeConstructor`) and the type definition (`declare type MyType`) is intentional. If this causes compiler issues, you can omit the type declaration and pass the definition directly to the generic parameter of the
constructor definition. This example uses `Readonly<IMyTypeBase>` is the third GenericArugment instead of `MyType`:

```TypeScript
interface MyTypeConstructor extends $$snClass.CustomClassConstructor1<IMyTypeBase, IMyTypePrototype, Readonly<IMyTypeBase>, (GlideRecord | undefined)> {
    getName(): string;
}
```

### Implementing a client-callable class

To create a class that is client-callable, you would use `Object.extendsObject<IAbstractAjaxProcessor, P>` where `P` is the prototype interface for the custom class.

Furthermore, if you need to access any of the methods from the `IAbstractAjaxProcessor` interface in any of the you will need to specify a `this` parameter in
the instance members as is shown in the following example:

```TypeScript
// Define the base interface
interface IMyAjaxTypeBase extends $$snClass.ICustomClassBase<IMyAjaxTypeBase, "MyAjaxType"> {
    // Client-callable method
    getMinLeadTimeDays(): number;
}

// Define the interface for the prototype
interface IMyAjaxTypePrototype extends $$snClass.ICustomClassPrototype0<IMyAjaxTypeBase, IMyAjaxTypePrototype, "MyAjaxType">, IMyAjaxTypeBase {
}

// Declare the class type.
declare type MyAjaxType = Readonly<IMyAjaxTypeBase> { }

// Declare the constructor and static members
interface MyAjaxTypeConstructor extends $$snClass.CustomClassConstructor0<IMyAjaxTypeBase, IMyAjaxTypePrototype, MyAjaxType> {
    // Equivalent server-callable method that doesn't have overhead of an AbstractAjaxProcessor-extended method
    getMinLeadTimeDays(number?: value): number;
}

// Implement the class, assigning it to a constant variable with the same name as the class being created.
const MyAjaxType: MyAjaxTypeConstructor = (function (): MyAjaxTypeConstructor {
    // Create the class constructor object.
    var myAjaxTypeConstructor: MyAjaxTypeConstructor = Class.create();

    // Implement static method
    myAjaxTypeConstructor.getMinLeadTimeDays = function(value?: number): number {
        if (isNaN(value) || value < 0) {
            var defaultMinLeadTime: number = parseInt('' + gs.getProperty('x_44813_my_app.default_min_leadTime_days', ''));
            return isNaN(defaultMinLeadTime) ? 3 : defaultMinLeadTime;
        }
        return value;
    };

    // Set the prototype for class construction by extending global.AbstractAjaxProcessor
    myAjaxTypeConstructor.prototype = Object.extendsObject<IAbstractAjaxProcessor, IMyAjaxTypePrototype>(global.AbstractAjaxProcessor, {
        // Implement initializer
        initialize: function() { },

        // Implement client-callable instance method
        getMinLeadTimeDays(this: IMyAjaxTypePrototype & IAbstractAjaxProcessor): number {
            return  MyAjaxType.getMinLeadTimeDays(parseInt(this.getParameter('min_lead')));
        },

        // Initialize type property.
        type: "MyAjaxType"
    });

    return myAjaxTypeConstructor;
})();
```
