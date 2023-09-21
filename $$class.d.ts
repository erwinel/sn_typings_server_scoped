/**
 * Contains helper types for creating classes in the scoped server-side Rhino scripting environment.
 * Includes some of the object oriented functions from the prototype.js library
 * PrototypeServer
 * @namespace $$class
 */
declare namespace $$class {
    /**
     * The class object type, defined for compatibility with the Rhino scripting environment.
     */
    export interface Class {
        /**
         * Default constructor.
         */
        new(): Object;
    }

    /**
     * Base interface for class prototypes.
     */
    export interface IPrototype { readonly type: string; }

    // #region 0 constructor args.

    /**
     * Defines the prototype for a class that has no constructor arguments.
     */
    export interface IPrototype0 extends IPrototype {
        /**
         * The optional class initialization method.
         */
        readonly initialize?: {  (): void; };
    }

    /**
     * Defines an object constructor that has no arguments.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor<TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype0> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype0;
        
        /**
         * Creates a new instance of the implementing class.
         */
        new(): TInstance;
    }

    // #endregion
    
    // #region 1 constructor arg.

    /**
     * Defines a prototype for a class that has 1 constructor argument.
     * @template TArg The constructor argument type.
     */
    export interface IPrototype1<TArg> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg} arg - The argument that was passed to the {@link Constructor}.
         */
        initialize(arg: TArg): void;
    }
    
    /**
     * Defines an object constructor that has 1 argument.
     * @template TArg - The constructor argument type.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype.
     */
    export interface Constructor1<TArg, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype1<TArg>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype1<TArg>;
        
        /**
         * Default constructor.
         * @param {TArg} arg - The constructor argument.
         */
        new(arg: TArg): TInstance;
    }

    /**
     * Defines a prototype for a class that has 1 optional constructor argument.
     * @template TArg The constructor argument type.
     */
    export interface IPrototype1Opt<TArg> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg} [arg]
         */
        initialize(arg?: TArg): void;
    }
    
    /**
     * Defines a prototype for a class that has 1 optional argument.
     * @template TArg - The optional constructor argument type.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor1Opt<TArg, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype1Opt<TArg>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype1Opt<TArg>;
        
        /**
         * Default constructor.
         * @param {TArg} [arg] - The optional constructor argument.
         */
        new(arg?: TArg): TInstance;
    }

    /**
     * Defines a prototype for a class that has 2 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     */
    export interface IPrototype2<TArg1, TArg2> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1
         * @param {TArg2} arg2
         */
        initialize(arg1: TArg1, arg2: TArg2): void;
    }
    
    // #endregion
    
    // #region 2 constructor args.

    /**
     * Defines an object constructor that has 2 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor2<TArg1, TArg2, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype2<TArg1, TArg2>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype2<TArg1, TArg2>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2): TInstance;
    }

    /**
     * Defines a prototype for a class that has 1 or 2 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the optional second constructor argument.
     */
    export interface IPrototype2Opt1<TArg1, TArg2> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1
         * @param {TArg2} [arg2]
         */
        initialize(arg1: TArg1, arg2?: TArg2): void;
    }
    
    /**
     * Defines an object constructor that has 1 or 2 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the optional second constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor2Opt1<TArg1, TArg2, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype2Opt1<TArg1, TArg2>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype2Opt1<TArg1, TArg2>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} [arg2] - The optional second constructor argument.
         */
        new(arg1: TArg1, arg2?: TArg2): TInstance;
    }

    /**
     * Defines a prototype for a class that has up to 2 constructor arguments.
     * @template TArg1 The first optional constructor argument type.
     * @template TArg2 The second optional constructor argument type.
     */
    export interface IPrototype2Opt<TArg1, TArg2> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} [arg1]
         * @param {TArg2} [arg2]
         */
        initialize(arg1?: TArg1, arg2?: TArg2): void;
    }
    
    /**
     * Defines an object constructor that has up to 2 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor2Opt<TArg1, TArg2, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype2Opt<TArg1, TArg2>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype2Opt<TArg1, TArg2>;
        
        /**
         * Default constructor.
         * @param {TArg1} [arg1] - The first optional constructor argument.
         * @param {TArg2} [arg2] - The second optional constructor argument.
         */
        new(arg1?: TArg1, arg2?: TArg2): TInstance;
    }

    // #endregion
    
    // #region 3 constructor args.

    /**
     * Defines a prototype for a class that has 3 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     */
    export interface IPrototype3<TArg1, TArg2, TArg3> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3): void;
    }
    
    /**
     * Defines an object constructor that has 3 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor3<TArg1, TArg2, TArg3, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype3<TArg1, TArg2, TArg3>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype3<TArg1, TArg2, TArg3>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3): TInstance;
    }

    /**
     * Defines a prototype for a class that has 2 or 3 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the optional third constructor argument.
     */
    export interface IPrototype3Opt1<TArg1, TArg2, TArg3> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3?: TArg3): void;
    }
    
    /**
     * Defines an object constructor that has 2 or 3 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the optional third constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor3Opt1<TArg1, TArg2, TArg3, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype3Opt1<TArg1, TArg2, TArg3>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype3Opt1<TArg1, TArg2, TArg3>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3?: TArg3): TInstance;
    }

    /**
     * Defines a prototype for a class that has 1 to 3 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the optional second constructor argument.
     * @template TArg3 - The type of the optional third constructor argument.
     */
    export interface IPrototype3Opt2<TArg1, TArg2, TArg3> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} [arg2] - The optional second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2?: TArg2, arg3?: TArg3): void;
    }
    
    /**
     * Defines an object constructor that has 1 to 3 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the optional second constructor argument.
     * @template TArg3 - The type of the optional third constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor3Opt2<TArg1, TArg2, TArg3, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype3Opt2<TArg1, TArg2, TArg3>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype3Opt2<TArg1, TArg2, TArg3>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} [arg2] - The optional second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         */
        new(arg1: TArg1, arg2?: TArg2, arg3?: TArg3): TInstance;
    }

    /**
     * Defines a prototype for a class that has up to 3 constructor arguments.
     * @template TArg1 - The type of the first optional constructor argument.
     * @template TArg2 - The type of the second optional constructor argument.
     * @template TArg3 - The type of the third optional constructor argument.
     */
    export interface IPrototype3Opt<TArg1, TArg2, TArg3> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} [arg1] - The first optional argument passed to the constructor.
         * @param {TArg2} [arg2] - The second optional argument passed to the constructor.
         * @param {TArg3} [arg3] - The third optional argument passed to the constructor.
         */
        initialize(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3): void;
    }
    
    /**
     * Defines an object constructor that has up to 3 arguments.
     * @template TArg1 - The type of the first optional constructor argument.
     * @template TArg2 - The type of the second optional constructor argument.
     * @template TArg3 - The type of the third optional constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor3Opt<TArg1, TArg2, TArg3, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype3Opt<TArg1, TArg2, TArg3>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype3Opt<TArg1, TArg2, TArg3>;
        
        /**
         * Default constructor.
         * @param {TArg1} [arg1] - The first constructor argument.
         * @param {TArg2} [arg2] - The optional second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         */
        new(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3): TInstance;
    }

    // #endregion
    
    // #region 4 constructor args.

    /**
     * Defines a prototype for a class that has 4 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     */
    export interface IPrototype4<TArg1, TArg2, TArg3, TArg4> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4): void;
    }
    
    /**
     * Defines an object constructor that has 4 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor4<TArg1, TArg2, TArg3, TArg4, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype4<TArg1, TArg2, TArg3, TArg4>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype4<TArg1, TArg2, TArg3, TArg4>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4): TInstance;
    }

    /**
     * Defines a prototype for a class that has 3 or 4 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     */
    export interface IPrototype4Opt1<TArg1, TArg2, TArg3, TArg4> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4?: TArg4): void;
    }
    
    /**
     * Defines an object constructor that has 3 or 4 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor4Opt1<TArg1, TArg2, TArg3, TArg4, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype4Opt1<TArg1, TArg2, TArg3, TArg4>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype4Opt1<TArg1, TArg2, TArg3, TArg4>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4?: TArg4): TInstance;
    }

    /**
     * Defines a prototype for a class that has 2 to 4 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     */
    export interface IPrototype4Opt2<TArg1, TArg2, TArg3, TArg4> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3?: TArg3, arg4?: TArg4): void;
    }
    
    /**
     * Defines an object constructor that has 2 to 4 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor4Opt2<TArg1, TArg2, TArg3, TArg4, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype4Opt2<TArg1, TArg2, TArg3, TArg4>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype4Opt2<TArg1, TArg2, TArg3, TArg4>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3?: TArg3, arg4?: TArg4): TInstance;
    }

    /**
     * Defines a prototype for a class that has 1 to 4 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     */
    export interface IPrototype4Opt3<TArg1, TArg2, TArg3, TArg4> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} [arg2] - The optional second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4): void;
    }
    
    /**
     * Defines an object constructor that has 2 to 4 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor4Opt3<TArg1, TArg2, TArg3, TArg4, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype4Opt3<TArg1, TArg2, TArg3, TArg4>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype4Opt3<TArg1, TArg2, TArg3, TArg4>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} [arg2] - The optional second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         */
        new(arg1: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4): TInstance;
    }

    /**
     * Defines a prototype for a class that has 4 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     */
    export interface IPrototype4Opt<TArg1, TArg2, TArg3, TArg4> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} [arg1] - The first optional argument passed to the constructor.
         * @param {TArg2} [arg2] - The second optional argument passed to the constructor.
         * @param {TArg3} [arg3] - The third optional argument passed to the constructor.
         * @param {TArg4} [arg4] - The fourth optional argument passed to the constructor.
         */
        initialize(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4): void;
    }
    
    /**
     * Defines an object constructor that has 4 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor4Opt<TArg1, TArg2, TArg3, TArg4, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype4Opt<TArg1, TArg2, TArg3, TArg4>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype4Opt<TArg1, TArg2, TArg3, TArg4>;
        
        /**
         * Default constructor.
         * @param {TArg1} [arg1] - The first optional constructor argument.
         * @param {TArg2} [arg2] - The second optional constructor argument.
         * @param {TArg3} [arg3] - The third optional constructor argument.
         * @param {TArg4} [arg4] - The fourth optional constructor argument.
         */
        new(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4): TInstance;
    }

    // #endregion
    
    // #region 5 constructor args.

    /**
     * Defines a prototype for a class that has 5 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     */
    export interface IPrototype5<TArg1, TArg2, TArg3, TArg4, TArg5> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         * @param {TArg5} arg5 - The fifth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5): void;
    }
    
    /**
     * Defines an object constructor that has 5 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor5<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype5<TArg1, TArg2, TArg3, TArg4, TArg5>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype5<TArg1, TArg2, TArg3, TArg4, TArg5>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         * @param {TArg5} arg5 - The fifth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5): TInstance;
    }

    /**
     * Defines a prototype for a class that has 4 or 5 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     */
    export interface IPrototype5Opt1<TArg1, TArg2, TArg3, TArg4, TArg5> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5?: TArg5): void;
    }
    
    /**
     * Defines an object constructor that has 4 or 5 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor5Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype5Opt1<TArg1, TArg2, TArg3, TArg4, TArg5>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype5Opt1<TArg1, TArg2, TArg3, TArg4, TArg5>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5?: TArg5): TInstance;
    }

    /**
     * Defines a prototype for a class that has 3 to 5 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     */
    export interface IPrototype5Opt2<TArg1, TArg2, TArg3, TArg4, TArg5> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4?: TArg4, arg5?: TArg5): void;
    }
    
    /**
     * Defines an object constructor that has 3 to 5 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor5Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype5Opt2<TArg1, TArg2, TArg3, TArg4, TArg5>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype5Opt2<TArg1, TArg2, TArg3, TArg4, TArg5>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4?: TArg4, arg5?: TArg5): TInstance;
    }

    /**
     * Defines a prototype for a class that has 2 to 5 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     */
    export interface IPrototype5Opt3<TArg1, TArg2, TArg3, TArg4, TArg5> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5): void;
    }
    
    /**
     * Defines an object constructor that has 2 to 5 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor5Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype5Opt3<TArg1, TArg2, TArg3, TArg4, TArg5>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype5Opt3<TArg1, TArg2, TArg3, TArg4, TArg5>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5): TInstance;
    }

    /**
     * Defines a prototype for a class that has 1 to 5 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     */
    export interface IPrototype5Opt4<TArg1, TArg2, TArg3, TArg4, TArg5> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} [arg2] - The optional second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5): void;
    }
    
    /**
     * Defines an object constructor that has 1 to 5 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor5Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype5Opt4<TArg1, TArg2, TArg3, TArg4, TArg5>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype5Opt4<TArg1, TArg2, TArg3, TArg4, TArg5>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} [arg2] - The optional second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         */
        new(arg1: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5): TInstance;
    }

    /**
     * Defines a prototype for a class that has up to 5 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     */
    export interface IPrototype5Opt<TArg1, TArg2, TArg3, TArg4, TArg5> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} [arg1] - The first optional argument passed to the constructor.
         * @param {TArg2} [arg2] - The second optional argument passed to the constructor.
         * @param {TArg3} [arg3] - The third optional argument passed to the constructor.
         * @param {TArg4} [arg4] - The fourth optional argument passed to the constructor.
         * @param {TArg5} [arg5] - The fifth optional argument passed to the constructor.
         */
        initialize(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5): void;
    }
    
    /**
     * Defines an object constructor that has up to 5 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor5Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype5Opt<TArg1, TArg2, TArg3, TArg4, TArg5>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype5Opt<TArg1, TArg2, TArg3, TArg4, TArg5>;
        
        /**
         * Default constructor.
         * @param {TArg1} [arg1] - The first optional constructor argument.
         * @param {TArg2} [arg2] - The second optional constructor argument.
         * @param {TArg3} [arg3] - The third optional constructor argument.
         * @param {TArg4} [arg4] - The fourth optional constructor argument.
         * @param {TArg5} [arg5] - The fifth optional constructor argument.
         */
        new(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5): TInstance;
    }

    // #endregion
    
    // #region 6 constructor args.

    /**
     * Defines a prototype for a class that has 6 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     */
    export interface IPrototype6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         * @param {TArg5} arg5 - The fifth argument passed to the constructor.
         * @param {TArg6} arg6 - The sixth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6: TArg6): void;
    }
    
    /**
     * Defines an object constructor that has 6 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         * @param {TArg5} arg5 - The fifth constructor argument.
         * @param {TArg6} arg6 - The sixth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6: TArg6): TInstance;
    }

    /**
     * Defines a prototype for a class that has 5 or 6 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     */
    export interface IPrototype6Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         * @param {TArg5} arg5 - The fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6?: TArg6): void;
    }
    
    /**
     * Defines an object constructor that has 5 or 6 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor6Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype6Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype6Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         * @param {TArg5} arg5 - The fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6?: TArg6): TInstance;
    }

    /**
     * Defines a prototype for a class that has 4 to 6 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     */
    export interface IPrototype6Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5?: TArg5, arg6?: TArg6): void;
    }
    
    /**
     * Defines an object constructor that has 4 to 6 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor6Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype6Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype6Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5?: TArg5, arg6?: TArg6): TInstance;
    }

    /**
     * Defines a prototype for a class that has 3 to 6 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     */
    export interface IPrototype6Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6): void;
    }
    
    /**
     * Defines an object constructor that has 3 to 6 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor6Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype6Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype6Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6): TInstance;
    }

    /**
     * Defines a prototype for a class that has 2 to 6 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     */
    export interface IPrototype6Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6): void;
    }
    
    /**
     * Defines an object constructor that has 2 to 6 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor6Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype6Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype6Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6): TInstance;
    }

    /**
     * Defines a prototype for a class that has 1 to 6 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     */
    export interface IPrototype6Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} [arg2] - The optional second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6): void;
    }
    
    /**
     * Defines an object constructor that has 1 to 6 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor6Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype6Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype6Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} [arg2] - The optional second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         */
        new(arg1: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6): TInstance;
    }

    /**
     * Defines a prototype for a class that has up to 6 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     */
    export interface IPrototype6Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} [arg1] - The first optional argument passed to the constructor.
         * @param {TArg2} [arg2] - The second optional argument passed to the constructor.
         * @param {TArg3} [arg3] - The third optional argument passed to the constructor.
         * @param {TArg4} [arg4] - The fourth optional argument passed to the constructor.
         * @param {TArg5} [arg5] - The fifth optional argument passed to the constructor.
         * @param {TArg6} [arg6] - The sixth optional argument passed to the constructor.
         */
        initialize(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6): void;
    }
    
    /**
     * Defines an object constructor that has up to 6 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor6Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype6Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype6Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>;
        
        /**
         * Default constructor.
         * @param {TArg1} [arg1] - The first optional constructor argument.
         * @param {TArg2} [arg2] - The second optional constructor argument.
         * @param {TArg3} [arg3] - The third optional constructor argument.
         * @param {TArg4} [arg4] - The fourth optional constructor argument.
         * @param {TArg5} [arg5] - The fifth optional constructor argument.
         * @param {TArg6} [arg6] - The sixth optional constructor argument.
         */
        new(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6): TInstance;
    }

    // #endregion
    
    // #region 7 constructor args.

    /**
     * Defines a prototype for a class that has 7 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     */
    export interface IPrototype7<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         * @param {TArg5} arg5 - The fifth argument passed to the constructor.
         * @param {TArg6} arg6 - The sixth argument passed to the constructor.
         * @param {TArg7} arg7 - The seventh argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6: TArg6, arg7: TArg7): void;
    }
    
    /**
     * Defines an object constructor that has 7 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor7<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype7<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype7<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         * @param {TArg5} arg5 - The fifth constructor argument.
         * @param {TArg6} arg6 - The sixth constructor argument.
         * @param {TArg7} arg7 - The seventh constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6: TArg6, arg7: TArg7): TInstance;
    }

    /**
     * Defines a prototype for a class that has 6 or 7 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     */
    export interface IPrototype7Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         * @param {TArg5} arg5 - The fifth argument passed to the constructor.
         * @param {TArg6} arg6 - The sixth argument passed to the constructor.
         * @param {TArg7} [arg7] - The optional seventh argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6: TArg6, arg7?: TArg7): void;
    }
    
    /**
     * Defines an object constructor that has 6 or 7 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor7Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype7Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype7Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         * @param {TArg5} arg5 - The fifth constructor argument.
         * @param {TArg6} arg6 - The sixth constructor argument.
         * @param {TArg7} [arg7] - The optional seventh constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6: TArg6, arg7?: TArg7): TInstance;
    }

    /**
     * Defines a prototype for a class that has 5 to 7 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     */
    export interface IPrototype7Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         * @param {TArg5} arg5 - The fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         * @param {TArg7} [arg7] - The optional seventh argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6?: TArg6, arg7?: TArg7): void;
    }
    
    /**
     * Defines an object constructor that has 5 to 7 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor7Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype7Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype7Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         * @param {TArg5} arg5 - The fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         * @param {TArg7} [arg7] - The optional seventh constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5: TArg5, arg6?: TArg6, arg7?: TArg7): TInstance;
    }

    /**
     * Defines a prototype for a class that has 4 to 7 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     */
    export interface IPrototype7Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} arg4 - The fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         * @param {TArg7} [arg7] - The optional seventh argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): void;
    }
    
    /**
     * Defines an object constructor that has 4 to 7 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor7Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype7Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype7Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} arg4 - The fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         * @param {TArg7} [arg7] - The optional seventh constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): TInstance;
    }

    /**
     * Defines a prototype for a class that has 3 to 7 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     */
    export interface IPrototype7Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} arg3 - The third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         * @param {TArg7} [arg7] - The optional seventh argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): void;
    }
    
    /**
     * Defines an object constructor that has 3 to 7 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor7Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype7Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype7Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} arg3 - The third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         * @param {TArg7} [arg7] - The optional seventh constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): TInstance;
    }

    /**
     * Defines a prototype for a class that has 2 to 7 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     */
    export interface IPrototype7Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} arg2 - The second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         * @param {TArg7} [arg7] - The optional seventh argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): void;
    }
    
    /**
     * Defines an object constructor that has 2 to 7 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor7Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype7Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype7Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         * @param {TArg7} [arg7] - The optional seventh constructor argument.
         */
        new(arg1: TArg1, arg2: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): TInstance;
    }

    /**
     * Defines a prototype for a class that has 1 to 7 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     */
    export interface IPrototype7Opt6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument passed to the constructor.
         * @param {TArg2} [arg2] - The optional second argument passed to the constructor.
         * @param {TArg3} [arg3] - The optional third argument passed to the constructor.
         * @param {TArg4} [arg4] - The optional fourth argument passed to the constructor.
         * @param {TArg5} [arg5] - The optional fifth argument passed to the constructor.
         * @param {TArg6} [arg6] - The optional sixth argument passed to the constructor.
         * @param {TArg7} [arg7] - The optional seventh argument passed to the constructor.
         */
        initialize(arg1: TArg1, arg?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): void;
    }
    
    /**
     * Defines an object constructor that has 1 to 7 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor7Opt6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype7Opt6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype7Opt6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>;
        
        /**
         * Default constructor.
         * @param {TArg1} arg1 - The first constructor argument.
         * @param {TArg2} [arg2] - The optional second constructor argument.
         * @param {TArg3} [arg3] - The optional third constructor argument.
         * @param {TArg4} [arg4] - The optional fourth constructor argument.
         * @param {TArg5} [arg5] - The optional fifth constructor argument.
         * @param {TArg6} [arg6] - The optional sixth constructor argument.
         * @param {TArg7} [arg7] - The optional seventh constructor argument.
         */
        new(arg1: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): TInstance;
    }

    /**
     * Defines a prototype for a class that has up to 7 constructor arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     */
    export interface IPrototype7Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} [arg1] - The first optional argument passed to the constructor.
         * @param {TArg2} [arg2] - The second optional argument passed to the constructor.
         * @param {TArg3} [arg3] - The third optional argument passed to the constructor.
         * @param {TArg4} [arg4] - The fourth optional argument passed to the constructor.
         * @param {TArg5} [arg5] - The fifth optional argument passed to the constructor.
         * @param {TArg6} [arg6] - The sixth optional argument passed to the constructor.
         * @param {TArg7} [arg7] - The seventh optional argument passed to the constructor.
         */
        initialize(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): void;
    }
    
    /**
     * Defines an object constructor that has up to 7 arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArg3 - The type of the third constructor argument.
     * @template TArg4 - The type of the fourth constructor argument.
     * @template TArg5 - The type of the fifth constructor argument.
     * @template TArg6 - The type of the sixth constructor argument.
     * @template TArg7 - The type of the seventh constructor argument.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor7Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance extends JSProto, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype7Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype7Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>;
        
        /**
         * Default constructor.
         * @param {TArg1} [arg1] - The first optional constructor argument.
         * @param {TArg2} [arg2] - The second optional constructor argument.
         * @param {TArg3} [arg3] - The third optional constructor argument.
         * @param {TArg4} [arg4] - The fourth optional constructor argument.
         * @param {TArg5} [arg5] - The fifth optional constructor argument.
         * @param {TArg6} [arg6] - The sixth optional constructor argument.
         * @param {TArg7} [arg7] - The seventh optional constructor argument.
         */
        new(arg1?: TArg1, arg2?: TArg2, arg3?: TArg3, arg4?: TArg4, arg5?: TArg5, arg6?: TArg6, arg7?: TArg7): TInstance;
    }

    // #endregion
    
    // #region varying constructor args.

    /**
     * Defines a prototype for a class that has a varying number of constructor arguments.
     * @template TArg - The argument type.
     */
    export interface IPrototypeN<TArg = any> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {...TArg[]} args - The arguments that were passed to the constructor.
         */
        initialize(...args: TArg[]): void;
    }
    
    /**
     * Defines an object constructor that has a varying number of constructor arguments.
     * @template TArg - The type of the optional constructor arguments.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface ConstructorN<TInstance extends JSProto, TArg = any, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototypeN<TArg>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototypeN<TArg>;
        
        /**
         * Default constructor.
         * @param {...TArg[]} args -  Optional constructor arguments.
         */
        new(...args: TArg[]): TInstance;
    }

    /**
     * Defines a prototype for a class that has 1 constructor argument optionally followed by a varying number of additional arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArgN - The type of the optional additional constructor arguments.
     */
    export interface IPrototype1N<TArg1, TArgN = any> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} value - The first argument that was passed to the constructor.
         * @param {...TArgN[]} additionalArgs - The optional additional arguments that were passed to the constructor.
         */
        initialize(value: TArg1, ...additionalArgs: TArgN[]): void;
    }
    
    /**
     * Defines an object constructor that has 1 argument optionally followed by a varying number of additional arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArgN - The type of the optional additional constructor arguments.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor1N<TInstance extends JSProto, TArg1, TArgN = any, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype1N<TArg1, TArgN>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype1N<TArg1, TArgN>;
        
        /**
         * Default constructor.
         * @param {TArg1[]} value - The first constructor argument.
         * @param {...TArgN[]} additionalArgs - Optional additional constructor arguments.
         */
        new(value: TArg1, ...additionalArgs: TArgN[]): TInstance;
    }

    /**
     * Defines a prototype for a class that has 2 constructor arguments optionally followed by a varying number of additional arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArgN - The type of the optional additional constructor arguments.
     */
    export interface IPrototype2N<TArg1, TArg2, TArg3 = any> extends IPrototype {
        /**
         * The class initialialization method.
         * @param {TArg1} arg1 - The first argument that was passed to the constructor.
         * @param {TArg2} arg2 - The second argument that was passed to the constructor.
         * @param {...T[arg3]} additionalArgs - The optional additional arguments that were passed to the constructor.
         */
        initialize(arg1: TArg1, arg2: TArg2, ...additionalArgs: TArg3[]): void;
    }
    
    /**
     * Defines an object constructor that has 2 arguments optionally followed by a varying number of additional arguments.
     * @template TArg1 - The type of the first constructor argument.
     * @template TArg2 - The type of the second constructor argument.
     * @template TArgN - The type of the optional additional constructor arguments.
     * @template TInstance - The constructed instance type.
     * @template TPrototype - The type of the class's prototype, which defaults to instance type if not specified.
     */
    export interface Constructor2N<TInstance extends JSProto, TArg1, TArg2, TArgN = any, TPrototype extends TInstance = TInstance> extends ThisType<TPrototype & IPrototype1N<TArg1, TArg2>> {
        /**
         * Gets or sets the prototype for the implementing class.
         */
        prototype: TPrototype & IPrototype2N<TArg1, TArg2>;
        
        /**
         * Default constructor.
         * @param {TArg1[]} arg1 - The first constructor argument.
         * @param {TArg2} arg2 - The second constructor argument.
         * @param {...TArgN[]} additionalArgs - Optional additional constructor arguments.
         */
        new(arg1: TArg1, arg2: TArg2, ...additionalArgs: TArgN[]): TInstance;
    }

    // #endregion

    export type AnyConstructor<T extends JSProto> = Constructor<T> | Constructor1<any, T> | Constructor1Opt<any, T> | Constructor1N<any, T> | Constructor2<any, any, T> | Constructor2Opt1<any, any, T> |
        Constructor2Opt<any, any, T> | Constructor2N<any, any, T> | Constructor3<any, any, any, T> | Constructor3Opt1<any, any, any, T> | Constructor3Opt2<any, any, any, T> | Constructor3Opt<any, any, any, T> |
        Constructor4<any, any, any, any, T> | Constructor4Opt1<any, any, any, any, T> | Constructor4Opt2<any, any, any, any, T> | Constructor4Opt3<any, any, any, any, T> | Constructor4Opt<any, any, any, any, T> |
        Constructor5<any, any, any, any, any, T> | Constructor5Opt1<any, any, any, any, any, T> | Constructor5Opt2<any, any, any, any, any, T> | Constructor5Opt3<any, any, any, any, any, T> |
        Constructor5Opt4<any, any, any, any, any, T> | Constructor5Opt<any, any, any, any, any, T> | Constructor6<any, any, any, any, any, any, T> | Constructor6Opt1<any, any, any, any, any, any, T> |
        Constructor6Opt2<any, any, any, any, any, any, T> | Constructor6Opt3<any, any, any, any, any, any, T> | Constructor6Opt4<any, any, any, any, any, any, T> | Constructor6Opt5<any, any, any, any, any, any, T> |
        Constructor6Opt<any, any, any, any, any, any, T> | Constructor7<any, any, any, any, any, any, any, T> | Constructor7Opt1<any, any, any, any, any, any, any, T> |
        Constructor7Opt2<any, any, any, any, any, any, any, T> | Constructor7Opt3<any, any, any, any, any, any, any, T> | Constructor7Opt4<any, any, any, any, any, any, any, T> |
        Constructor7Opt5<any, any, any, any, any, any, any, T> | Constructor7Opt6<any, any, any, any, any, any, any, T> | Constructor7Opt<any, any, any, any, any, any, any, T> |
        ConstructorN<T, any>;
        
    /**
     * Marker type for a JavaScript object type.
     */
    export interface JSProto { }

    /**
     * Defines the constructor object for custom classes in the Rhino scripting environment.
     */
    export interface ClassConstructor {
        prototype: Class;
        /**
         * Creates a class constructor object.
         * @template K - The class name.
         * @template TPrototype - The type of the class's prototype.
         * @param {K} jsTypeName - The class name.
         * @return {(Constructor<JSProto[K], TPrototype> & JSProto[K])} A constructor object.
         */
        create<K extends keyof JSProto, TPrototype extends JSProto[K]>(jsTypeName: K): Constructor<JSProto[K], TPrototype> & JSProto[K];

        /**
         * Creates a class constructor object
         * @template TInstance - The constructed instance type.
         * @template TConstructor - The constructor type.
         * @template TPrototype - The type of the class's prototype.
         * @return {TConstructor} A constructor object.
         */
        create<TInstance extends JSProto, TConstructor extends Constructor<TInstance, TPrototype>, TPrototype extends TInstance = TInstance>(): TConstructor;

        /**
         * Creates a class constructor object
         * @template TArg - The constructor argument type.
         * @template TInstance - The constructed instance type.
         * @template TConstructor - The constructor type.
         * @template TPrototype - The type of the class's prototype.
         * @return {TConstructor} A constructor object.
         */
        create<TArg, TInstance extends JSProto, TConstructor extends Constructor1<TArg, TInstance, TPrototype> | Constructor1Opt<TArg, TInstance, TPrototype> | ConstructorN<TInstance, TArg, TPrototype>, TPrototype extends TInstance = TInstance>(): TConstructor;

        /**
         * Creates a class constructor object
         * @template TArg1 - The type of the first constructor argument.
         * @template TArg2 - The type of the second constructor argument.
         * @template TInstance - The constructed instance type.
         * @template TConstructor - The constructor type.
         * @template TPrototype - The type of the class's prototype.
         * @return {TConstructor} A constructor object.
         */
        create<TArg1, TArg2,
            TInstance extends JSProto,
            TConstructor extends Constructor2<TArg1, TArg2, TInstance, TPrototype> | Constructor2Opt1<TArg1, TArg2, TInstance, TPrototype> | Constructor2Opt<TArg1, TArg2, TInstance, TPrototype>,
            TPrototype extends TInstance = TInstance>(): TConstructor;

        /**
         * Creates a class constructor object
         * @template TArg1 - The type of the first constructor argument.
         * @template TArg2 - The type of the second constructor argument.
         * @template TArg3 - The type of the third constructor argument.
         * @template TInstance - The constructed instance type.
         * @template TConstructor - The constructor type.
         * @template TPrototype - The type of the class's prototype.
         * @return {TConstructor} A constructor object.
         */
        create<TArg1, TArg2, TArg3,
            TInstance extends JSProto,
            TConstructor extends Constructor3<TArg1, TArg2, TArg3, TInstance, TPrototype> | Constructor3Opt1<TArg1, TArg2, TArg3, TInstance, TPrototype> | Constructor3Opt2<TArg1, TArg2, TArg3, TInstance, TPrototype> | Constructor3Opt<TArg1, TArg2, TArg3,
            TInstance, TPrototype>, TPrototype extends TInstance = TInstance>(): TConstructor;

        /**
         * Creates a class constructor object
         * @template TArg1 - The type of the first constructor argument.
         * @template TArg2 - The type of the second constructor argument.
         * @template TArg3 - The type of the third constructor argument.
         * @template TArg4 - The type of the fourth constructor argument.
         * @template TInstance - The constructed instance type.
         * @template TConstructor - The constructor type.
         * @template TPrototype - The type of the class's prototype.
         * @return {TConstructor} A constructor object.
         */
        create<TArg1, TArg2, TArg3, TArg4,
            TInstance extends JSProto,
            TConstructor extends Constructor4<TArg1, TArg2, TArg3, TArg4, TInstance, TPrototype> | Constructor4Opt1<TArg1, TArg2, TArg3, TArg4, TInstance, TPrototype> | Constructor4Opt2<TArg1, TArg2, TArg3, TArg4, TInstance, TPrototype> |
            Constructor4Opt3<TArg1, TArg2, TArg3, TArg4, TInstance, TPrototype> | Constructor4Opt<TArg1, TArg2, TArg3, TArg4, TInstance, TPrototype>, TPrototype extends TInstance = TInstance>(): TConstructor;

        /**
         * Creates a class constructor object
         * @template TArg1 - The type of the first constructor argument.
         * @template TArg2 - The type of the second constructor argument.
         * @template TArg3 - The type of the third constructor argument.
         * @template TArg4 - The type of the fourth constructor argument.
         * @template TArg5 - The type of the fifth constructor argument.
         * @template TInstance - The constructed instance type.
         * @template TConstructor - The constructor type.
         * @template TPrototype - The type of the class's prototype.
         * @return {TConstructor} A constructor object.
         */
        create<TArg1, TArg2, TArg3, TArg4, TArg5,
            TInstance extends JSProto,
            TConstructor extends Constructor5<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance, TPrototype> | Constructor5Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance, TPrototype> | Constructor5Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance, TPrototype> |
            Constructor5Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance, TPrototype> | Constructor5Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance, TPrototype> | Constructor5Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TInstance, TPrototype>,
            TPrototype extends TInstance = TInstance>(): TConstructor;

        /**
         * Creates a class constructor object
         * @template TArg1 - The type of the first constructor argument.
         * @template TArg2 - The type of the second constructor argument.
         * @template TArg3 - The type of the third constructor argument.
         * @template TArg4 - The type of the fourth constructor argument.
         * @template TArg5 - The type of the fifth constructor argument.
         * @template TArg6 - The type of the sixth constructor argument.
         * @template TInstance - The constructed instance type.
         * @template TConstructor - The constructor type.
         * @template TPrototype - The type of the class's prototype.
         * @return {TConstructor} A constructor object.
         */
        create<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6,
            TInstance extends JSProto,
            TConstructor extends Constructor6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance, TPrototype> | Constructor6Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance, TPrototype> |
            Constructor6Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance, TPrototype> | Constructor6Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance, TPrototype> |
            Constructor6Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance, TPrototype> | Constructor6Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance, TPrototype> |
            Constructor6Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TInstance, TPrototype>, TPrototype extends TInstance = TInstance>(): TConstructor;

        /**
         * Creates a class constructor object
         * @template TArg1 - The type of the first constructor argument.
         * @template TArg2 - The type of the second constructor argument.
         * @template TArg3 - The type of the third constructor argument.
         * @template TArg4 - The type of the fourth constructor argument.
         * @template TArg5 - The type of the fifth constructor argument.
         * @template TArg6 - The type of the sixth constructor argument.
         * @template TArg7 - The type of the seventh constructor argument.
         * @template TInstance - The constructed instance type.
         * @template TConstructor - The constructor type.
         * @template TPrototype - The type of the class's prototype.
         * @return {TConstructor} A constructor object.
         */
        create<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7,
            TInstance extends JSProto,
            TConstructor extends Constructor7<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance, TPrototype> | Constructor7Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance, TPrototype> |
            Constructor7Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance, TPrototype> | Constructor7Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance, TPrototype> |
            Constructor7Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance, TPrototype> | Constructor7Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance, TPrototype> |
            Constructor7Opt6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance, TPrototype> | Constructor7Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, TInstance, TPrototype>, TPrototype extends TInstance = TInstance>(): TConstructor;
    }

    export type PickProperty<T, K extends keyof T> = T[K];
}

/**
 * Object constructor compatible with ServiceNow scripting enviroment.
 */
interface ObjectConstructor {
    // /**
    //  * Creates a class constructor which extends the a base class.
    //  * @template B - The base class type.
    //  * @template TInstance - The type of the constructed instance.
    //  * @template TPrototype - The type of inheriting prototype.
    //  * @param {B} base - The constructor object of the base class.
    //  * @param {(TPrototype & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>)} derived - A prototype object for the members of the derived class.
    //  * @return {($$class.PickProperty<B, 'prototype'> & $$class.Constructor<TInstance & B, TPrototype & B> & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>)} A class constructor object which extends the base class.
    //  */
    // extendsObject<B extends Function, TInstance, TPrototype extends TInstance = TInstance>(base: B, derived: TPrototype & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>):
    //     $$class.PickProperty<B, 'prototype'> & $$class.Constructor<TInstance & B, TPrototype & B> & ThisType<$$class.PickProperty<B, 'prototype'> & TInstance>;
    
    // extendsObject<TBaseType extends $$class.JSProto, TBaseConstructor extends $$class.Constructor<TBaseType>, TInstance, TPrototype>(base: TBaseConstructor, derived: TPrototype & ThisType<TInstance> & $$class.IPrototype0):
    //     TPrototype & TBaseType & $$class.IPrototype0;

    extendsObject<B extends $$class.JSProto, P, I extends B>(base: $$class.AnyConstructor<B>, derived: P & ThisType<I & P> & $$class.IPrototype0):
        P & B & $$class.IPrototype0;

    extendsObject<TArg, B extends $$class.JSProto, P, A extends $$class.IPrototype1<TArg> | $$class.IPrototype1Opt<TArg> | $$class.IPrototypeN<TArg>, I extends B>(base: $$class.AnyConstructor<B>,
        derived: P & ThisType<I & P> & A): P & B & A;
    
    extendsObject<TArg1, TArg2, B extends $$class.JSProto, P,
        A extends $$class.IPrototype2<TArg1, TArg2> | $$class.IPrototype2Opt1<TArg1, TArg2> | $$class.IPrototype2Opt<TArg1, TArg2> | $$class.IPrototype1N<TArg1, TArg2>, I extends B>(base: $$class.AnyConstructor<B>,
        derived: P & ThisType<I & P> & A): P & B & A;

    extendsObject<TArg1, TArg2, TArg3, B extends $$class.JSProto, P,
        A extends $$class.IPrototype3<TArg1, TArg2, TArg3> | $$class.IPrototype3Opt1<TArg1, TArg2, TArg3> | $$class.IPrototype3Opt2<TArg1, TArg2, TArg3> | $$class.IPrototype3Opt<TArg1, TArg2, TArg3> |
        $$class.IPrototype2N<TArg1, TArg2, TArg3>, I extends B>(base: $$class.AnyConstructor<B>, derived: P & ThisType<I & P> & A): P & B & A;

    extendsObject<TArg1, TArg2, TArg3, TArg4, B extends $$class.JSProto, P,
        A extends $$class.IPrototype4<TArg1, TArg2, TArg3, TArg4> | $$class.IPrototype4Opt1<TArg1, TArg2, TArg3, TArg4> | $$class.IPrototype4Opt2<TArg1, TArg2, TArg3, TArg4> |
        $$class.IPrototype4Opt3<TArg1, TArg2, TArg3, TArg4> | $$class.IPrototype4Opt<TArg1, TArg2, TArg3, TArg4>, I extends B>(base: $$class.AnyConstructor<B>,
        derived: P & ThisType<I & P> & A): P & B & A;

    extendsObject<TArg1, TArg2, TArg3, TArg4, TArg5, B extends $$class.JSProto, P,
        A extends $$class.IPrototype5<TArg1, TArg2, TArg3, TArg4, TArg5> | $$class.IPrototype5Opt1<TArg1, TArg2, TArg3, TArg4, TArg5> | $$class.IPrototype5Opt2<TArg1, TArg2, TArg3, TArg4, TArg5> |
        $$class.IPrototype5Opt3<TArg1, TArg2, TArg3, TArg4, TArg5> | $$class.IPrototype5Opt4<TArg1, TArg2, TArg3, TArg4, TArg5> | $$class.IPrototype5Opt<TArg1, TArg2, TArg3, TArg4, TArg5>,
        I extends B>(base: $$class.AnyConstructor<B>, derived: P & ThisType<I & P> & A): P & B & A;

    extendsObject<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, B extends $$class.JSProto, P,
        A extends $$class.IPrototype6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> | $$class.IPrototype6Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> | $$class.IPrototype6Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> |
        $$class.IPrototype6Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> | $$class.IPrototype6Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> | $$class.IPrototype6Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6> |
        $$class.IPrototype6Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6>, I extends B>(base: $$class.AnyConstructor<B>, derived: P & ThisType<I & P> & A): P & B & A;

    extendsObject<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7, B extends $$class.JSProto, P,
        A extends $$class.IPrototype7<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> | $$class.IPrototype7Opt1<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> |
        $$class.IPrototype7Opt2<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> | $$class.IPrototype7Opt3<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> |
        $$class.IPrototype7Opt4<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> | $$class.IPrototype7Opt5<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> |
        $$class.IPrototype7Opt6<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7> | $$class.IPrototype7Opt<TArg1, TArg2, TArg3, TArg4, TArg5, TArg6, TArg7>, I extends B>(base: $$class.AnyConstructor<B>,
        derived: P & ThisType<I & P> & A): P & B & A;
    
    clone<T extends $$class.JSProto>(obj: T): T;
}

/**
 * The base custom class type.
 */
declare const Class: $$class.ClassConstructor;
