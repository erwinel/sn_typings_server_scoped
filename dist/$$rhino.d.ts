/**
 * Helper types for relating primitive JavaScript and Java/Rhino types.
 * These are typically used when a JavaScript type may be converted to the corresponding Java type or cases where a Java object may be returned and used as a JavaScript type.
 * @namespace $$rhino
 */
declare namespace $$rhino {
    /**
     * Utility type to include empty string values as well as well as null and undefined values.
     * @typedef {(T | null | undefined | $$rhino.EmptyString)} Nilable
     * @template T - The type of value that is to include null and undefined values as well as empty string-like values.
     */
    export type Nilable<T> = T | null | undefined | $$rhino.EmptyString;

    /**
     * Utility type for a value that is never undefined, null or an empty string-like value.
     * @typedef {(T extends null | undefined ? never : ExcludeEmptyRhinoString<T>)} ExcludeGlideNil<T>
     * @template T - The type of value that is to excclude null and undefined values as well as empty string-like values.
     */
    export type ExcludeNil<T> = T extends null | undefined ? never : $$rhino.ExcludeEmptyString<T>;

    /**
     * Utility type for a javascript string or Java String object.
     * @typedef {(string | Packages.java.lang.String)} String
     */
    export type String = string | Packages.java.lang.String;

    /**
     * Utility type for a javascript string or a Java string-like types.
     * @typedef {(String | Packages.java.lang.CharSequence | Packages.java.lang.Character)} StringLike
     */
    export type StringLike = String | Packages.java.lang.CharSequence | Packages.java.lang.Character;

    /**
     * Utility type for a javascript string or a Java string-like types.
     * @typedef {(N | (Packages.java.lang.String & { toString(): N }))} StringLike
     */
    export type StringOf<N extends string> = N | (Packages.java.lang.String & { toString(): N });

    /**
     * Utility type for javascript primitive string values and Java string-like objects that are empty.
     * @typedef {("" | (Packages.java.lang.CharSequence & { length(): 0; }))} EmptyString
     */
    export type EmptyString = "" | (Packages.java.lang.CharSequence & { length(): 0; });

    /**
     * Utility type to include empty string values.
     * @typedef {(S | EmptyString)} IncludeEmptyString
     * @template S - Type of value that is to include empty string values.
     */
    export type IncludeEmptyString<S> = S | EmptyString;

    /**
     * Utility type to exclude empty string values.
     * @typedef {(S extends EmptyString ? never : S)} ExcludeEmptyJavaString
     * @template S - Type of value that is to exclude empty string values.
     */
    export type ExcludeEmptyString<S> = S extends EmptyString ? never : S;

    /**
     * Utility type for javascript $$rhino.Boolean value or Java Boolean object.
     * @typedef {(boolean | Packages.java.lang.Boolean)} Boolean
     */
    export type Boolean = boolean | Packages.java.lang.Boolean;

    /**
     * Utility type for javascript primitive numbers values and Java Number objects.
     * @typedef {(number | Packages.java.lang.Number)} Number
     */
    export type Number = number | Packages.java.lang.Number;

    /**
     * Represents a Java or JavaScript array.
     * @typedef {(Packages.Array<E> | E[])} Array
     * @template E - The type of elements in this array.
     */
    export type Array<E> = Packages.Array<E> | E[];
}
