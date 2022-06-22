/// <reference path="index.d.ts" />


/**
 * Helper types for relating primitive JavaScript and Java/Rhino types.
 * @namespace $$rhino
*/
declare namespace $$rhino {
    /**
     * Utility type to include empty string values as well as well as null and undefined values.
     * @typedef {(T | null | undefined | $$rhino.EmptyString)} Nilable
     * @template T - The type of value that is to include null and undefined values as well as empty string-like values.
     */
    export type Nilable<T> = T | null | undefined | $$rhino.EmptyString;
    /*
     * Utility type for a value that is never undefined, null or an empty string-like value.
     * @typedef {(T extends null | undefined ? never : ExcludeEmptyRhinoString<T>)} ExcludeGlideNil<T>
     * @template T - The type of value that is to excclude null and undefined values as well as empty string-like values.
     */
    export type ExcludeNil<T> = T extends null | undefined ? never : $$rhino.ExcludeEmptyString<T>;
    export type BooleanString = "true" | "false";
    /**
     * Utility type for javascript primitive string values and Java string-like objects.
     * @typedef {(string | Packages.java.lang.CharSequence | Packages.java.lang.Character)} String
     */
    export type String = string | Packages.java.lang.CharSequence | Packages.java.lang.Character;
    /**
     * Utility type for javascript primitive boolean values and Java Boolean objects.
     * @typedef {(boolean | Packages.java.lang.Boolean)} Boolean
     */
    export type Boolean = boolean | Packages.java.lang.Boolean;
    export type BooleanLike = Boolean | BooleanString;
    /**
     * Utility type for javascript primitive numbers values and Java Number objects.
     * @typedef {(number | Packages.java.lang.Number)} Number
     */
    export type Number = number | Packages.java.lang.Number;
    export type NumberLike<N extends number, S extends ExcludeEmptyString<string>> = N | Packages.java.lang.Number | S;
    /**
     * Utility type for javascript arrays and Java Collection objects.
     * @typedef {(E[] | Packages.java.util.Collection<E>)} EmptyString
     */
    export type Collection<E> = E[] | Packages.java.util.Collection<E>;
    /**
     * Utility type for javascript arrays and Java List objects.
     * @typedef {(E[] | Packages.java.util.List<E)} EmptyString
     */
    export type List<E> = E[] | Packages.java.util.List<E>;
    /**
     * Utility type for javascript primitive string values and Java string-like objects that are empty.
     * @typedef {("" | (Packages.java.lang.CharSequence & { length(): 0; }))} EmptyString
     */
    export type EmptyString = "" | (Packages.java.lang.CharSequence & { length(): 0; });
    /**
     * Utility type to include empty string values.
     * @typedef {(S | "")} IncludeEmptyString
     * @template S - Type of value that is to include empty string values.
     */
    export type IncludeEmptyString<S> = S | EmptyString;
    /**
     * Utility type to exclude empty string values.
     * @typedef {(S extends EmptyString ? never : S)} ExcludeEmptyJavaString
     * @template S - Type of value that is to exclude empty string values.
     */
    export type ExcludeEmptyString<S> = S extends EmptyString ? never : S;
    export type StringValue<S extends string> = S | Packages.java.lang.CharSequence | Packages.java.lang.Character;
}

declare interface IJavaArray<E> {
    /**
     * Gets the length of the array.
     */
    readonly length: Packages.java.lang.Integer;
    [n: number]: E;
}

declare namespace Packages {
    export namespace java {
        export namespace lang {
            /**
             * Base Java object.
             * @export
             * @class Object
             */
            export class Object {
                protected constructor();
                /**
                 * Indicates whether some other object is "equal to" this one.
                 * @param obj {object}
                 * @returns {Boolean}
                 */
                equals(obj: object): Boolean;

                /**
                 * Returns a hash code value for the object.
                 * @returns {Integer}
                 */
                hashCode(): Integer;

                /**
                 * Returns a string representation of the object.
                 * @returns {String}
                 */
                toString(): String;
            }
            export interface Comparable<T> {
                /**
                 * Compares this object with the specified object for order.
                 * @param o {T}
                 * @returns {Integer}
                 */
                compareTo(o: T): Integer;

                /**
                 * Converts this Date object to a String of the form:
                 * @returns {lang.String}
                 */
                toString(): lang.String;
            }
            export interface CharSequence {
                /**
                 * Returns the char value at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Character}
                 */
                charAt(index: $$rhino.Number): Character;

                /**
                 * Returns the length of this character sequence.
                 * @returns {Integer}
                 */
                length(): Integer;

                /**
                 * Returns a new CharSequence that is a subsequence of this sequence.
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @returns {CharSequence}
                 */
                subSequence(start: $$rhino.Number, end: $$rhino.Number): CharSequence;

                /**
                 * Returns a string containing the characters in this sequence in the same order as this sequence.
                 * @returns {String}
                 */
                toString(): String;
            }
            export interface Iterable<T> {
                /**
                 * Returns an iterator over the elements in this collection in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): util.Iterator<T>;
            }
            export class Character extends Object implements Comparable<Character> {
                protected constructor();
                /**
                 * Returns the value of this Character object.
                 * @returns {Character}
                 */
                charValue(): Character;

                /**
                 * Compares two Character objects numerically.
                 * @param anotherCharacter {$$rhino.String}
                 * @returns {Integer}
                 */
                compareTo(anotherCharacter: $$rhino.String): Integer;
            }
            /**
             * Java String object.
             * @export
             * @class String
             * @extends {Object}
             */
            export class String extends Object implements Comparable<String>, CharSequence {
                protected constructor();
                /**
                 * Returns the char value at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Character}
                 */
                charAt(index: $$rhino.Number): Character;

                /**
                 * Returns the character (Unicode code point) at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Integer}
                 */
                codePointAt(index: $$rhino.Number): Integer;

                /**
                 * Returns the character (Unicode code point) before the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Integer}
                 */
                codePointBefore(index: $$rhino.Number): Integer;

                /**
                 * Returns the number of Unicode code points in the specified text range of this String.
                 * @param beginIndex {$$rhino.Number}
                 * @param endIndex {$$rhino.Number}
                 * @returns {Integer}
                 */
                codePointCount(beginIndex: $$rhino.Number, endIndex: $$rhino.Number): Integer;

                /**
                 * Compares two strings lexicographically.
                 * @param anotherString {$$rhino.String}
                 * @returns {Integer}
                 */
                compareTo(anotherString: $$rhino.String): Integer;

                /**
                 * Compares two strings lexicographically, ignoring case differences.
                 * @param str {$$rhino.String}
                 * @returns {Integer}
                 */
                compareToIgnoreCase(str: $$rhino.String): Integer;

                /**
                 * Concatenates the specified string to the end of this string.
                 * @param str {$$rhino.String}
                 * @returns {String}
                 */
                concat(str: $$rhino.String): String;

                /**
                 * Returns true if and only if this string contains the specified sequence of char values.
                 * @param s {CharSequence}
                 * @returns {Boolean}
                 */
                contains(s: CharSequence): Boolean;

                /**
                 * Compares this string to the specified CharSequence.
                 * @param cs {CharSequence}
                 * @returns {Boolean}
                 */
                contentEquals(cs: CharSequence): Boolean;

                /**
                 * Compares this string to the specified StringBuffer.
                 * @param sb {StringBuffer}
                 * @returns {Boolean}
                 */
                contentEquals(sb: StringBuffer): Boolean;

                /**
                 * Tests if this string ends with the specified suffix.
                 * @param suffix {$$rhino.String}
                 * @returns {Boolean}
                 */
                endsWith(suffix: $$rhino.String): Boolean;

                /**
                 * Compares this String to another String, ignoring case considerations.
                 * @param anotherString {$$rhino.String}
                 * @returns {Boolean}
                 */
                equalsIgnoreCase(anotherString: $$rhino.String): Boolean;

                /**
                 * Encodes this String into a sequence of bytes using the platform's default charset, storing the result into a new byte array.
                 * @returns {IJavaArray<Byte>}
                 */
                getBytes(): IJavaArray<Byte>;

                /**
                 * Encodes this String into a sequence of bytes using the named charset, storing the result into a new byte array.
                 * @param charsetName {$$rhino.String}
                 * @returns {IJavaArray<Byte>}
                 */
                getBytes(charsetName: $$rhino.String): IJavaArray<Byte>;

                /**
                 * Copies characters from this string into the destination character array.
                 * @param srcBegin {$$rhino.Number}
                 * @param srcEnd {$$rhino.Number}
                 * @param dst {IJavaArray<$$rhino.String>}
                 * @param dstBegin {$$rhino.Number}
                 */
                getChars(srcBegin: $$rhino.Number, srcEnd: $$rhino.Number, dst: IJavaArray<$$rhino.String>, dstBegin: $$rhino.Number): void;

                /**
                 * Returns the index within this string of the first occurrence of the specified character.
                 * @param ch {$$rhino.Number}
                 * @returns {Integer}
                 */
                indexOf(ch: $$rhino.Number): Integer;

                /**
                 * Returns the index within this string of the first occurrence of the specified character, starting the search at the specified index.
                 * @param ch {$$rhino.Number}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {Integer}
                 */
                indexOf(ch: $$rhino.Number, fromIndex: $$rhino.Number): Integer;

                /**
                 * Returns the index within this string of the first occurrence of the specified substring.
                 * @param str {$$rhino.String}
                 * @returns {Integer}
                 */
                indexOf(str: $$rhino.String): Integer;

                /**
                 * Returns the index within this string of the first occurrence of the specified substring, starting at the specified index.
                 * @param str {$$rhino.String}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {Integer}
                 */
                indexOf(str: $$rhino.String, fromIndex: $$rhino.Number): Integer;

                /**
                 * Returns a canonical representation for the string object.
                 * @returns {String}
                 */
                intern(): String;

                /**
                 * Returns true if, and only if, length() is 0.
                 * @returns {Boolean}
                 */
                isEmpty(): Boolean;

                /**
                 * Returns the index within this string of the last occurrence of the specified character.
                 * @param ch {$$rhino.Number}
                 * @returns {Integer}
                 */
                lastIndexOf(ch: $$rhino.Number): Integer;

                /**
                 * Returns the index within this string of the last occurrence of the specified character, searching backward starting at the specified index.
                 * @param ch {$$rhino.Number}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {Integer}
                 */
                lastIndexOf(ch: $$rhino.Number, fromIndex: $$rhino.Number): Integer;

                /**
                 * Returns the index within this string of the last occurrence of the specified substring.
                 * @param str {$$rhino.String}
                 * @returns {Integer}
                 */
                lastIndexOf(str: $$rhino.String): Integer;

                /**
                 * Returns the index within this string of the last occurrence of the specified substring, searching backward starting at the specified index.
                 * @param str {$$rhino.String}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {Integer}
                 */
                lastIndexOf(str: $$rhino.String, fromIndex: $$rhino.Number): Integer;

                /**
                 * Returns the length of this string.
                 * @returns {Integer}
                 */
                length(): Integer;

                /**
                 * Tells whether or not this string matches the given regular expression.
                 * @param regex {$$rhino.String}
                 * @returns {Boolean}
                 */
                matches(regex: $$rhino.String): Boolean;

                /**
                 * Returns the index within this String that is offset from the given index by codePointOffset code points.
                 * @param index {$$rhino.Number}
                 * @param codePointOffset {$$rhino.Number}
                 * @returns {Integer}
                 */
                offsetByCodePoints(index: $$rhino.Number, codePointOffset: $$rhino.Number): Integer;

                /**
                 * Tests if two string regions are equal.
                 * @param ignoreCase {$$rhino.Boolean}
                 * @param toffset {$$rhino.Number}
                 * @param other {$$rhino.String}
                 * @param ooffset {$$rhino.Number}
                 * @param len {$$rhino.Number}
                 * @returns {Boolean}
                 */
                regionMatches(ignoreCase: $$rhino.Boolean, toffset: $$rhino.Number, other: $$rhino.String, ooffset: $$rhino.Number, len: $$rhino.Number): Boolean;

                /**
                 * Tests if two string regions are equal.
                 * @param toffset {$$rhino.Number}
                 * @param other {$$rhino.String}
                 * @param ooffset {$$rhino.Number}
                 * @param len {$$rhino.Number}
                 * @returns {Boolean}
                 */
                regionMatches(toffset: $$rhino.Number, other: $$rhino.String, ooffset: $$rhino.Number, len: $$rhino.Number): Boolean;

                /**
                 * Returns a new string resulting from replacing all occurrences of oldChar in this string with newChar.
                 * @param oldChar {$$rhino.String}
                 * @param newChar {$$rhino.String}
                 * @returns {String}
                 */
                replace(oldChar: $$rhino.String, newChar: $$rhino.String): String;

                /**
                 * Replaces each substring of this string that matches the literal target sequence with the specified literal replacement sequence.
                 * @param target {CharSequence}
                 * @param replacement {CharSequence}
                 * @returns {String}
                 */
                replace(target: CharSequence, replacement: CharSequence): String;

                /**
                 * Replaces each substring of this string that matches the given regular expression with the given replacement.
                 * @param regex {$$rhino.String}
                 * @param replacement {$$rhino.String}
                 * @returns {String}
                 */
                replaceAll(regex: $$rhino.String, replacement: $$rhino.String): String;

                /**
                 * Replaces the first substring of this string that matches the given regular expression with the given replacement.
                 * @param regex {$$rhino.String}
                 * @param replacement {$$rhino.String}
                 * @returns {String}
                 */
                replaceFirst(regex: $$rhino.String, replacement: $$rhino.String): String;

                /**
                 * Splits this string around matches of the given regular expression.
                 * @param regex {$$rhino.String}
                 * @returns {IJavaArray<String>}
                 */
                split(regex: $$rhino.String): IJavaArray<String>;

                /**
                 * Splits this string around matches of the given regular expression.
                 * @param regex {$$rhino.String}
                 * @param limit {$$rhino.Number}
                 * @returns {IJavaArray<String>}
                 */
                split(regex: $$rhino.String, limit: $$rhino.Number): IJavaArray<String>;

                /**
                 * Tests if this string starts with the specified prefix.
                 * @param prefix {$$rhino.String}
                 * @returns {Boolean}
                 */
                startsWith(prefix: $$rhino.String): Boolean;

                /**
                 * Tests if the substring of this string beginning at the specified index starts with the specified prefix.
                 * @param prefix {$$rhino.String}
                 * @param toffset {$$rhino.Number}
                 * @returns {Boolean}
                 */
                startsWith(prefix: $$rhino.String, toffset: $$rhino.Number): Boolean;

                /**
                 * Returns a new character sequence that is a subsequence of this sequence.
                 * @param beginIndex {$$rhino.Number}
                 * @param endIndex {$$rhino.Number}
                 * @returns {CharSequence}
                 */
                subSequence(beginIndex: $$rhino.Number, endIndex: $$rhino.Number): CharSequence;

                /**
                 * Returns a new string that is a substring of this string.
                 * @param beginIndex {$$rhino.Number}
                 * @returns {String}
                 */
                substring(beginIndex: $$rhino.Number): String;

                /**
                 * Returns a new string that is a substring of this string.
                 * @param beginIndex {$$rhino.Number}
                 * @param endIndex {$$rhino.Number}
                 * @returns {String}
                 */
                substring(beginIndex: $$rhino.Number, endIndex: $$rhino.Number): String;

                /**
                 * Converts this string to a new character array.
                 * @returns {IJavaArray<Character>}
                 */
                toCharArray(): IJavaArray<Character>;

                /**
                 * Converts all of the characters in this String to lower case using the rules of the default locale.
                 * @returns {String}
                 */
                toLowerCase(): String;

                /**
                 * Converts all of the characters in this String to lower case using the rules of the given Locale.
                 * @param locale {Locale}
                 * @returns {String}
                 */
                toLowerCase(locale: util.Locale): String;

                /**
                 * Converts all of the characters in this String to upper case using the rules of the default locale.
                 * @returns {String}
                 */
                toUpperCase(): String;

                /**
                 * Converts all of the characters in this String to upper case using the rules of the given Locale.
                 * @param locale {Locale}
                 * @returns {String}
                 */
                toUpperCase(locale: util.Locale): String;

                /**
                 * Returns a copy of the string, with leading and trailing whitespace omitted.
                 * @returns {String}
                 */
                trim(): String;
            }
            /**
             * Java Number base object.
             * @export
             * @class Object
             */
            export abstract class Number extends Object {
                protected constructor();
                /**
                 * Returns the value of the specified number as a byte.
                 * @returns {Byte}
                 */
                byteValue(): Byte;

                /**
                 * Returns the value of the specified number as a double.
                 * @returns {Double}
                 */
                doubleValue(): Double;

                /**
                 * Returns the value of the specified number as a float.
                 * @returns {Float}
                 */
                floatValue(): Float;

                /**
                 * Returns the value of the specified number as an int.
                 * @returns {Integer}
                 */
                intValue(): Integer;

                /**
                 * Returns the value of the specified number as a long.
                 * @returns {Long}
                 */
                longValue(): Long;

                /**
                 * Returns the value of the specified number as a short.
                 * @returns {Short}
                 */
                shortValue(): Short;
            }
            export class Boolean extends Object {
                protected constructor();
                /**
                 * Returns the value of this Boolean object as a boolean primitive.
                 * @returns {boolean}
                 * @memberof {Boolean}
                 */
                booleanValue(): boolean;
                /**
                 * Compares this Boolean instance with another.
                 * @param {Boolean} b -
                 * @returns {number}
                 * @memberof {Boolean}
                 */
                compareTo(b: Boolean): number;
            }
            /**
             * Java Integer object.
             * @export
             * @class Integer
             * @extends {Object}
             */
            export class Integer extends Number implements Comparable<Integer> {
                protected constructor();

                /**
                 * Compares two Integer objects numerically.
                 * @param anotherInteger {$$rhino.Number}
                 * @returns {Integer}
                 */
                compareTo(anotherInteger: $$rhino.Number): Integer;
            }
            /**
             * Java Long object.
             * @export
             * @class Long
             * @extends {Object}
             */
            export class Long extends Number implements Comparable<Long> {
                protected constructor();

                /**
                 * Compares two Long objects numerically.
                 * @param anotherLong {$$rhino.Number}
                 * @returns {Integer}
                 */
                compareTo(anotherLong: $$rhino.Number): Integer;
            }
            /**
             * Java Double object.
             * @export
             * @class Double
             * @extends {Object}
             */
            export class Double extends Number implements Comparable<Double> {
                protected constructor();

                /**
                 * Compares two Double objects numerically.
                 * @param anotherDouble {$$rhino.Number}
                 * @returns {Integer}
                 */
                compareTo(anotherDouble: $$rhino.Number): Integer;

                /**
                 * Returns true if this Double value is infinitely large in magnitude, false otherwise.
                 * @returns {Boolean}
                 */
                isInfinite(): Boolean;

                /**
                 * Returns true if this Double value is a Not-a-Number (NaN), false otherwise.
                 * @returns {Boolean}
                 */
                isNaN(): Boolean;
            }
            /**
             * Java Byte object.
             * @export
             * @class InteByteger
             * @extends {Object}
             */
            export class Byte extends Number implements Comparable<Byte> {
                protected constructor();

                /**
                 * Compares two Byte objects numerically.
                 * @param anotherByte {$$rhino.Number}
                 * @returns {Integer}
                 */
                compareTo(anotherByte: $$rhino.Number): Integer;
            }
            /**
             * Java Float object.
             * @export
             * @class Float
             * @extends {Object}
             */
            export class Float extends Number implements Comparable<Float> {
                protected constructor();

                /**
                 * Compares two Float objects numerically.
                 * @param anotherFloat {$$rhino.Number}
                 * @returns {Integer}
                 */
                compareTo(anotherFloat: $$rhino.Number): Integer;

                /**
                 * Returns true if this Float value is infinitely large in magnitude, false otherwise.
                 * @returns {Boolean}
                 */
                isInfinite(): Boolean;

                /**
                 * Returns true if this Float value is a Not-a-Number (NaN), false otherwise.
                 * @returns {Boolean}
                 */
                isNaN(): Boolean;
            }
            /**
             * Java Short object.
             * @export
             * @class Short
             * @extends {Object}
             */
            export class Short extends Number implements Comparable<Short> {
                protected constructor();

                /**
                 * Compares two Short objects numerically.
                 * @param anotherShort {$$rhino.Number}
                 * @returns {Integer}
                 */
                compareTo(anotherShort: $$rhino.Number): Integer;
            }

            export class StringBuffer extends lang.Object implements CharSequence {
                protected constructor();
                /**
                 * Appends the string representation of the boolean argument to the sequence.
                 * @param b {$$rhino.Boolean}
                 * @returns {StringBuffer}
                 */
                append(b: $$rhino.Boolean): StringBuffer;

                /**
                 * Appends the string representation of the char argument to this sequence.
                 * @param c {$$rhino.String}
                 * @returns {StringBuffer}
                 */
                append(c: $$rhino.String): StringBuffer;

                /**
                 * Appends the string representation of the char array argument to this sequence.
                 * @param str {IJavaArray<$$rhino.String>}
                 * @returns {StringBuffer}
                 */
                append(str: IJavaArray<$$rhino.String>): StringBuffer;

                /**
                 * Appends the string representation of a subarray of the char array argument to this sequence.
                 * @param str {IJavaArray<$$rhino.String>}
                 * @param offset {$$rhino.Number}
                 * @param len {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                append(str: IJavaArray<$$rhino.String>, offset: $$rhino.Number, len: $$rhino.Number): StringBuffer;

                /**
                 * Appends the specified CharSequence to this sequence.
                 * @param s {CharSequence}
                 * @returns {StringBuffer}
                 */
                append(s: CharSequence): StringBuffer;

                /**
                 * Appends a subsequence of the specified CharSequence to this sequence.
                 * @param s {CharSequence}
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                append(s: CharSequence, start: $$rhino.Number, end: $$rhino.Number): StringBuffer;

                /**
                 * Appends the string representation of the double argument to this sequence.
                 * @param d {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                append(d: $$rhino.Number): StringBuffer;

                /**
                 * Appends the string representation of the float argument to this sequence.
                 * @param f {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                append(f: $$rhino.Number): StringBuffer;

                /**
                 * Appends the string representation of the int argument to this sequence.
                 * @param i {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                append(i: $$rhino.Number): StringBuffer;

                /**
                 * Appends the string representation of the long argument to this sequence.
                 * @param lng {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                append(lng: $$rhino.Number): StringBuffer;

                /**
                 * Appends the string representation of the Object argument.
                 * @param obj {Object}
                 * @returns {StringBuffer}
                 */
                append(obj: Object): StringBuffer;

                /**
                 * Appends the specified string to this character sequence.
                 * @param str {$$rhino.String}
                 * @returns {StringBuffer}
                 */
                append(str: $$rhino.String): StringBuffer;

                /**
                 * Appends the specified StringBuffer to this sequence.
                 * @param sb {StringBuffer}
                 * @returns {StringBuffer}
                 */
                append(sb: StringBuffer): StringBuffer;

                /**
                 * Appends the string representation of the codePoint argument to this sequence.
                 * @param codePoint {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                appendCodePoint(codePoint: $$rhino.Number): StringBuffer;

                /**
                 * Returns the current capacity.
                 * @returns {Integer}
                 */
                capacity(): Integer;

                /**
                 * Returns the char value in this sequence at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Character}
                 */
                charAt(index: $$rhino.Number): Character;

                /**
                 * Returns the character (Unicode code point) at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Integer}
                 */
                codePointAt(index: $$rhino.Number): Integer;

                /**
                 * Returns the character (Unicode code point) before the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Integer}
                 */
                codePointBefore(index: $$rhino.Number): Integer;

                /**
                 * Returns the number of Unicode code points in the specified text range of this sequence.
                 * @param beginIndex {$$rhino.Number}
                 * @param endIndex {$$rhino.Number}
                 * @returns {Integer}
                 */
                codePointCount(beginIndex: $$rhino.Number, endIndex: $$rhino.Number): Integer;

                /**
                 * Removes the characters in a substring of this sequence.
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                delete(start: $$rhino.Number, end: $$rhino.Number): StringBuffer;

                /**
                 * Removes the char at the specified position in this sequence.
                 * @param index {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                deleteCharAt(index: $$rhino.Number): StringBuffer;

                /**
                 * Ensures that the capacity is at least equal to the specified minimum.
                 * @param minimumCapacity {$$rhino.Number}
                 */
                ensureCapacity(minimumCapacity: $$rhino.Number): void;

                /**
                 * Characters are copied from this sequence into the destination character array dst.
                 * @param srcBegin {$$rhino.Number}
                 * @param srcEnd {$$rhino.Number}
                 * @param dst {IJavaArray<$$rhino.String>}
                 * @param dstBegin {$$rhino.Number}
                 */
                getChars(srcBegin: $$rhino.Number, srcEnd: $$rhino.Number, dst: IJavaArray<$$rhino.String>, dstBegin: $$rhino.Number): void;

                /**
                 * Returns the index within this string of the first occurrence of the specified substring.
                 * @param str {$$rhino.String}
                 * @returns {Integer}
                 */
                indexOf(str: $$rhino.String): Integer;

                /**
                 * Returns the index within this string of the first occurrence of the specified substring, starting at the specified index.
                 * @param str {$$rhino.String}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {Integer}
                 */
                indexOf(str: $$rhino.String, fromIndex: $$rhino.Number): Integer;

                /**
                 * Inserts the string representation of the boolean argument into this sequence.
                 * @param offset {$$rhino.Number}
                 * @param b {$$rhino.Boolean}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, b: $$rhino.Boolean): StringBuffer;

                /**
                 * Inserts the string representation of the char argument into this sequence.
                 * @param offset {$$rhino.Number}
                 * @param c {$$rhino.String}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, c: $$rhino.String): StringBuffer;

                /**
                 * Inserts the string representation of the char array argument into this sequence.
                 * @param offset {$$rhino.Number}
                 * @param str {IJavaArray<$$rhino.String>}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, str: IJavaArray<$$rhino.String>): StringBuffer;

                /**
                 * Inserts the string representation of a subarray of the str array argument into this sequence.
                 * @param index {$$rhino.Number}
                 * @param str {IJavaArray<$$rhino.String>}
                 * @param offset {$$rhino.Number}
                 * @param len {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                insert(index: $$rhino.Number, str: IJavaArray<$$rhino.String>, offset: $$rhino.Number, len: $$rhino.Number): StringBuffer;

                /**
                 * Inserts the specified CharSequence into this sequence.
                 * @param dstOffset {$$rhino.Number}
                 * @param s {CharSequence}
                 * @returns {StringBuffer}
                 */
                insert(dstOffset: $$rhino.Number, s: CharSequence): StringBuffer;

                /**
                 * Inserts a subsequence of the specified CharSequence into this sequence.
                 * @param dstOffset {$$rhino.Number}
                 * @param s {CharSequence}
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                insert(dstOffset: $$rhino.Number, s: CharSequence, start: $$rhino.Number, end: $$rhino.Number): StringBuffer;

                /**
                 * Inserts the string representation of the double argument into this sequence.
                 * @param offset {$$rhino.Number}
                 * @param d {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, d: $$rhino.Number): StringBuffer;

                /**
                 * Inserts the string representation of the float argument into this sequence.
                 * @param offset {$$rhino.Number}
                 * @param f {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, f: $$rhino.Number): StringBuffer;

                /**
                 * Inserts the string representation of the second int argument into this sequence.
                 * @param offset {$$rhino.Number}
                 * @param i {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, i: $$rhino.Number): StringBuffer;

                /**
                 * Inserts the string representation of the long argument into this sequence.
                 * @param offset {$$rhino.Number}
                 * @param l {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, l: $$rhino.Number): StringBuffer;

                /**
                 * Inserts the string representation of the Object argument into this character sequence.
                 * @param offset {$$rhino.Number}
                 * @param obj {Object}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, obj: Object): StringBuffer;

                /**
                 * Inserts the string into this character sequence.
                 * @param offset {$$rhino.Number}
                 * @param str {$$rhino.String}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, str: $$rhino.String): StringBuffer;

                /**
                 * Returns the index within this string of the rightmost occurrence of the specified substring.
                 * @param str {$$rhino.String}
                 * @returns {Integer}
                 */
                lastIndexOf(str: $$rhino.String): Integer;

                /**
                 * Returns the index within this string of the last occurrence of the specified substring.
                 * @param str {$$rhino.String}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {Integer}
                 */
                lastIndexOf(str: $$rhino.String, fromIndex: $$rhino.Number): Integer;

                /**
                 * Returns the length (character count).
                 * @returns {Integer}
                 */
                length(): Integer;

                /**
                 * Returns the index within this sequence that is offset from the given index by codePointOffset code points.
                 * @param index {$$rhino.Number}
                 * @param codePointOffset {$$rhino.Number}
                 * @returns {Integer}
                 */
                offsetByCodePoints(index: $$rhino.Number, codePointOffset: $$rhino.Number): Integer;

                /**
                 * Replaces the characters in a substring of this sequence with characters in the specified String.
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @param str {$$rhino.String}
                 * @returns {StringBuffer}
                 */
                replace(start: $$rhino.Number, end: $$rhino.Number, str: $$rhino.String): StringBuffer;

                /**
                 * Causes this character sequence to be replaced by the reverse of the sequence.
                 * @returns {StringBuffer}
                 */
                reverse(): StringBuffer;

                /**
                 * The character at the specified index is set to ch.
                 * @param index {$$rhino.Number}
                 * @param ch {$$rhino.String}
                 */
                setCharAt(index: $$rhino.Number, ch: $$rhino.String): void;

                /**
                 * Sets the length of the character sequence.
                 * @param newLength {$$rhino.Number}
                 */
                setLength(newLength: $$rhino.Number): void;

                /**
                 * Returns a new character sequence that is a subsequence of this sequence.
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @returns {CharSequence}
                 */
                subSequence(start: $$rhino.Number, end: $$rhino.Number): CharSequence;

                /**
                 * Returns a new String that contains a subsequence of characters currently contained in this character sequence.
                 * @param start {$$rhino.Number}
                 * @returns {String}
                 */
                substring(start: $$rhino.Number): String;

                /**
                 * Returns a new String that contains a subsequence of characters currently contained in this sequence.
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @returns {String}
                 */
                substring(start: $$rhino.Number, end: $$rhino.Number): String;

                /**
                 * Attempts to reduce storage used for the character sequence.
                 */
                trimToSize(): void;
            }
        }
        export namespace util {
            export class Locale extends lang.Object {
                protected constructor();
                /**
                 * Overrides Cloneable.
                 * @returns {lang.Object}
                 */
                clone(): lang.Object;

                /**
                 * Returns the country/region code for this locale, which should either be the empty string, an uppercase ISO 3166 2-letter code, or a UN M.49 3-digit code.
                 * @returns {lang.String}
                 */
                getCountry(): lang.String;

                /**
                 * Returns a name for the locale's country that is appropriate for display to the user.
                 * @returns {lang.String}
                 */
                getDisplayCountry(): lang.String;

                /**
                 * Returns a name for the locale's country that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {lang.String}
                 */
                getDisplayCountry(inLocale: Locale): lang.String;

                /**
                 * Returns a name for the locale's language that is appropriate for display to the user.
                 * @returns {lang.String}
                 */
                getDisplayLanguage(): lang.String;

                /**
                 * Returns a name for the locale's language that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {lang.String}
                 */
                getDisplayLanguage(inLocale: Locale): lang.String;

                /**
                 * Returns a name for the locale that is appropriate for display to the user.
                 * @returns {lang.String}
                 */
                getDisplayName(): lang.String;

                /**
                 * Returns a name for the locale that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {lang.String}
                 */
                getDisplayName(inLocale: Locale): lang.String;

                /**
                 * Returns a name for the the locale's script that is appropriate for display to the user.
                 * @returns {lang.String}
                 */
                getDisplayScript(): lang.String;

                /**
                 * Returns a name for the locale's script that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {lang.String}
                 */
                getDisplayScript(inLocale: Locale): lang.String;

                /**
                 * Returns a name for the locale's variant code that is appropriate for display to the user.
                 * @returns {lang.String}
                 */
                getDisplayVariant(): lang.String;

                /**
                 * Returns a name for the locale's variant code that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {lang.String}
                 */
                getDisplayVariant(inLocale: Locale): lang.String;

                /**
                 * Returns the extension (or private use) value associated with the specified key, or null if there is no extension associated with the key.
                 * @param key {$$rhino.String}
                 * @returns {lang.String}
                 */
                getExtension(key: $$rhino.String): lang.String;

                /**
                 * Returns the set of extension keys associated with this locale, or the empty set if it has no extensions.
                 * @returns {Set<Character>}
                 */
                getExtensionKeys(): Set<lang.Character>;

                /**
                 * Returns a three-letter abbreviation for this locale's country.
                 * @returns {lang.String}
                 */
                getISO3Country(): lang.String;

                /**
                 * Returns a three-letter abbreviation of this locale's language.
                 * @returns {lang.String}
                 */
                getISO3Language(): lang.String;

                /**
                 * Returns the language code of this Locale.
                 * @returns {lang.String}
                 */
                getLanguage(): lang.String;

                /**
                 * Returns the script for this locale, which should either be the empty string or an ISO 15924 4-letter script code.
                 * @returns {lang.String}
                 */
                getScript(): lang.String;

                /**
                 * Returns the set of unicode locale attributes associated with this locale, or the empty set if it has no attributes.
                 * @returns {Set<lang.String>}
                 */
                getUnicodeLocaleAttributes(): Set<lang.String>;

                /**
                 * Returns the set of Unicode locale keys defined by this locale, or the empty set if this locale has none.
                 * @returns {Set<lang.String>}
                 */
                getUnicodeLocaleKeys(): Set<lang.String>;

                /**
                 * Returns the Unicode locale type associated with the specified Unicode locale key for this locale.
                 * @param key {$$rhino.String}
                 * @returns {lang.String}
                 */
                getUnicodeLocaleType(key: $$rhino.String): lang.String;

                /**
                 * Returns the variant code for this locale.
                 * @returns {lang.String}
                 */
                getVariant(): lang.String;

                /**
                 * Returns a well-formed IETF BCP 47 language tag representing this locale.
                 * @returns {lang.String}
                 */
                toLanguageTag(): lang.String;
            }
            /**
             * Java Collection interface.
             * @export
             * @interface Collection<T>
             */
            export interface Collection<E> extends lang.Iterable<E> {
                /**
                 * Ensures that this collection contains the specified element (optional operation).
                 * @param e {E}
                 * @returns {lang.Boolean}
                 */
                add(e: E): lang.Boolean;

                /**
                 * Adds all of the elements in the specified collection to this collection (optional operation).
                 * @param c {util.Collection<E>}
                 * @returns {lang.Boolean}
                 */
                addAll(c: util.Collection<E>): lang.Boolean;

                /**
                 * Removes all of the elements from this collection (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this collection contains the specified element.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                contains(o: lang.Object): lang.Boolean;

                /**
                 * Returns true if this collection contains all of the elements in the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                containsAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Compares the specified object with this collection for equality.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                equals(o: lang.Object): lang.Boolean;

                /**
                 * Returns the hash code value for this collection.
                 * @returns {lang.Integer}
                 */
                hashCode(): lang.Integer;

                /**
                 * Returns true if this collection contains no elements.
                 * @returns {lang.Boolean}
                 */
                isEmpty(): lang.Boolean;

                /**
                 * Returns an iterator over the elements in this collection.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Removes a single instance of the specified element from this collection, if it is present (optional operation).
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                remove(o: lang.Object): lang.Boolean;

                /**
                 * Removes all of this collection's elements that are also contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                removeAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Retains only the elements in this collection that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                retainAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Returns the number of elements in this collection.
                 * @returns {lang.Integer}
                 */
                size(): lang.Integer;

                /**
                 * Returns an array containing all of the elements in this collection.
                 * @returns {lang.Object}
                 */
                toArray(): lang.Object;

                /**
                 * Returns a string representation of this collection.
                 * @returns {lang.String}
                 */
                toString(): lang.String;
            }
            export interface Iterator<E> {
                /**
                 * Returns true if the iteration has more elements.
                 * @returns {lang.Boolean}
                 */
                hasNext(): lang.Boolean;
                /**
                 * Returns the next element in the iteration.
                 * @returns {E}
                 */
                next(): E;
                /**
                 * Removes from the underlying collection the last element returned by this iterator .
                 */
                remove(): void;
            }
            export interface ListIterator<E> extends Iterator<E> {
                /**
                 * Inserts the specified element into the list (optional operation).
                 * @param e {E}
                 */
                add(e: E): void;

                /**
                 * Returns true if this list iterator has more elements when traversing the list in the forward direction.
                 * @returns {lang.Boolean}
                 */
                hasNext(): lang.Boolean;

                /**
                 * Returns true if this list iterator has more elements when traversing the list in the reverse direction.
                 * @returns {lang.Boolean}
                 */
                hasPrevious(): lang.Boolean;

                /**
                 * Returns the next element in the list and advances the cursor position.
                 * @returns {E}
                 */
                next(): E;

                /**
                 * Returns the index of the element that would be returned by a subsequent call to next().
                 * @returns {lang.Integer}
                 */
                nextIndex(): lang.Integer;

                /**
                 * Returns the previous element in the list and moves the cursor position backwards.
                 * @returns {E}
                 */
                previous(): E;

                /**
                 * Returns the index of the element that would be returned by a subsequent call to previous().
                 * @returns {lang.Integer}
                 */
                previousIndex(): lang.Integer;

                /**
                 * Removes from the list the last element that was returned by next() or previous() (optional operation).
                 */
                remove(): void;

                /**
                 * Replaces the last element returned by next() or previous() with the specified element (optional operation).
                 * @param e {E}
                 */
                set(e: E): void;
            }
            export interface List<E> extends util.Collection<E> {
                /**
                 * Appends the specified element to the end of this list (optional operation).
                 * @param e {E}
                 * @returns {lang.Boolean}
                 */
                add(e: E): lang.Boolean;

                /**
                 * Inserts the specified element at the specified position in this list (optional operation).
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 */
                add(index: $$rhino.Number, element: E): void;

                /**
                 * Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's iterator (optional operation).
                 * @param c {util.Collection< E>}
                 * @returns {lang.Boolean}
                 */
                addAll(c: util.Collection<E>): lang.Boolean;

                /**
                 * Inserts all of the elements in the specified collection into this list at the specified position (optional operation).
                 * @param index {$$rhino.Number}
                 * @param c {util.Collection< E>}
                 * @returns {lang.Boolean}
                 */
                addAll(index: $$rhino.Number, c: util.Collection<E>): lang.Boolean;

                /**
                 * Removes all of the elements from this list (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this list contains the specified element.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                contains(o: lang.Object): lang.Boolean;

                /**
                 * Returns true if this list contains all of the elements of the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                containsAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Compares the specified object with this list for equality.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                equals(o: lang.Object): lang.Boolean;

                /**
                 * Returns the element at the specified position in this list.
                 * @param index {$$rhino.Number}
                 * @returns {E}
                 */
                get(index: $$rhino.Number): E;

                /**
                 * Returns the hash code value for this list.
                 * @returns {lang.Integer}
                 */
                hashCode(): lang.Integer;

                /**
                 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {lang.Object}
                 * @returns {lang.Integer}
                 */
                indexOf(o: lang.Object): lang.Integer;

                /**
                 * Returns true if this list contains no elements.
                 * @returns {lang.Boolean}
                 */
                isEmpty(): lang.Boolean;

                /**
                 * Returns an iterator over the elements in this list in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {lang.Object}
                 * @returns {lang.Integer}
                 */
                lastIndexOf(o: lang.Object): lang.Integer;

                /**
                 * Returns a list iterator over the elements in this list (in proper sequence).
                 * @returns {ListIterator<E>}
                 */
                listIterator(): ListIterator<E>;

                /**
                 * Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list.
                 * @param index {$$rhino.Number}
                 * @returns {ListIterator<E>}
                 */
                listIterator(index: $$rhino.Number): ListIterator<E>;

                /**
                 * Removes the element at the specified position in this list (optional operation).
                 * @param index {$$rhino.Number}
                 * @returns {E}
                 */
                remove(index: $$rhino.Number): E;

                /**
                 * Removes the first occurrence of the specified element from this list, if it is present (optional operation).
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                remove(o: lang.Object): lang.Boolean;

                /**
                 * Removes from this list all of its elements that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                removeAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Retains only the elements in this list that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                retainAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Replaces the element at the specified position in this list with the specified element (optional operation).
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 * @returns {E}
                 */
                set(index: $$rhino.Number, element: E): E;

                /**
                 * Returns the number of elements in this list.
                 * @returns {lang.Integer}
                 */
                size(): lang.Integer;

                /**
                 * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
                 * @param fromIndex {$$rhino.Number}
                 * @param toIndex {$$rhino.Number}
                 * @returns {List<E>}
                 */
                subList(fromIndex: $$rhino.Number, toIndex: $$rhino.Number): List<E>;

                /**
                 * Returns an array containing all of the elements in this list in proper sequence (from first to last element).
                 * @returns {lang.Object}
                 */
                toArray(): lang.Object;
            }
            export abstract class AbstractCollection<E> extends lang.Object implements util.Collection<E>  {
                protected constructor();
                /**
                 * Ensures that this collection contains the specified element (optional operation).
                 * @param e {E}
                 * @returns {lang.Boolean}
                 */
                add(e: E): lang.Boolean;

                /**
                 * Adds all of the elements in the specified collection to this collection (optional operation).
                 * @param c {util.Collection< E>}
                 * @returns {lang.Boolean}
                 */
                addAll(c: util.Collection<E>): lang.Boolean;

                /**
                 * Removes all of the elements from this collection (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this collection contains the specified element.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                contains(o: lang.Object): lang.Boolean;

                /**
                 * Returns true if this collection contains all of the elements in the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                containsAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Returns true if this collection contains no elements.
                 * @returns {lang.Boolean}
                 */
                isEmpty(): lang.Boolean;

                /**
                 * Returns an iterator over the elements contained in this collection.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Removes a single instance of the specified element from this collection, if it is present (optional operation).
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                remove(o: lang.Object): lang.Boolean;

                /**
                 * Removes all of this collection's elements that are also contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                removeAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Retains only the elements in this collection that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                retainAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Returns the number of elements in this collection.
                 * @returns {lang.Integer}
                 */
                size(): lang.Integer;

                /**
                 * Returns the hash code value for this collection.
                 * @returns {lang.Integer}
                 */
                hashCode(): lang.Integer;

                /**
                 * Compares the specified object with this collection for equality.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                equals(o: lang.Object): lang.Boolean;

                /**
                 * Returns an array containing all of the elements in this collection.
                 * @returns {lang.Object}
                 */
                toArray(): lang.Object;

                /**
                 * Returns a string representation of this collection.
                 * @returns {lang.String}
                 */
                toString(): lang.String;
            }
            export abstract class AbstractList<E> extends AbstractCollection<E> implements List<E> {
                protected constructor();
                /**
                 * Appends the specified element to the end of this list (optional operation).
                 * @param e {E}
                 * @returns {lang.Boolean}
                 */
                add(e: E): lang.Boolean;

                /**
                 * Inserts the specified element at the specified position in this list (optional operation).
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 */
                add(index: $$rhino.Number, element: E): void;

                /**
                 * Inserts all of the elements in the specified collection into this list at the specified position (optional operation).
                 * @param index {$$rhino.Number}
                 * @param c {util.Collection< E>}
                 * @returns {lang.Boolean}
                 */
                addAll(c: util.Collection<E>): lang.Boolean;
                addAll(index: $$rhino.Number, c: util.Collection<E>): lang.Boolean;

                /**
                 * Removes all of the elements from this list (optional operation).
                 */
                clear(): void;

                /**
                 * Returns the element at the specified position in this list.
                 * @param index {$$rhino.Number}
                 * @returns {E}
                 */
                get(index: $$rhino.Number): E;

                /**
                 * Returns the hash code value for this list.
                 * @returns {lang.Integer}
                 */
                hashCode(): lang.Integer;

                /**
                 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {lang.Object}
                 * @returns {lang.Integer}
                 */
                indexOf(o: lang.Object): lang.Integer;

                /**
                 * Returns an iterator over the elements in this list in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {lang.Object}
                 * @returns {lang.Integer}
                 */
                lastIndexOf(o: lang.Object): lang.Integer;

                /**
                 * Returns a list iterator over the elements in this list (in proper sequence).
                 * @returns {ListIterator<E>}
                 */
                listIterator(): ListIterator<E>;

                /**
                 * Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list.
                 * @param index {$$rhino.Number}
                 * @returns {ListIterator<E>}
                 */
                listIterator(index: $$rhino.Number): ListIterator<E>;

                /**
                 * Removes the element at the specified position in this list (optional operation).
                 * @param index {$$rhino.Number}
                 * @returns {E}
                 */
                remove(index: $$rhino.Number): E;
                remove(o: lang.Object): lang.Boolean;

                /**
                 * Replaces the element at the specified position in this list with the specified element (optional operation).
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 * @returns {E}
                 */
                set(index: $$rhino.Number, element: E): E;

                /**
                 * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
                 * @param fromIndex {$$rhino.Number}
                 * @param toIndex {$$rhino.Number}
                 * @returns {List<E>}
                 */
                subList(fromIndex: $$rhino.Number, toIndex: $$rhino.Number): List<E>;
            }
            export class ArrayList<E> extends AbstractList<E> implements List<E> {
                /**
                 * Appends the specified element to the end of this list.
                 * @param e {E}
                 * @returns {lang.Boolean}
                 */
                add(e: E): lang.Boolean;

                /**
                 * Inserts the specified element at the specified position in this list.
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 */
                add(index: $$rhino.Number, element: E): void;

                /**
                 * Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's Iterator.
                 * @param c {util.Collection< E>}
                 * @returns {lang.Boolean}
                 */
                addAll(c: util.Collection<E>): lang.Boolean;

                /**
                 * Inserts all of the elements in the specified collection into this list, starting at the specified position.
                 * @param index {$$rhino.Number}
                 * @param c {util.Collection< E>}
                 * @returns {lang.Boolean}
                 */
                addAll(index: $$rhino.Number, c: util.Collection<E>): lang.Boolean;

                /**
                 * Removes all of the elements from this list.
                 */
                clear(): void;

                /**
                 * Returns a shallow copy of this ArrayList instance.
                 * @returns {lang.Object}
                 */
                clone(): lang.Object;

                /**
                 * Returns true if this list contains the specified element.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                contains(o: lang.Object): lang.Boolean;

                /**
                 * Increases the capacity of this ArrayList instance, if necessary, to ensure that it can hold at least the number of elements specified by the minimum capacity argument.
                 * @param minCapacity {$$rhino.Number}
                 */
                ensureCapacity(minCapacity: $$rhino.Number): void;

                /**
                 * Returns the element at the specified position in this list.
                 * @param index {$$rhino.Number}
                 * @returns {E}
                 */
                get(index: $$rhino.Number): E;

                /**
                 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {lang.Object}
                 * @returns {lang.Integer}
                 */
                indexOf(o: lang.Object): lang.Integer;

                /**
                 * Returns true if this list contains no elements.
                 * @returns {lang.Boolean}
                 */
                isEmpty(): lang.Boolean;

                /**
                 * Returns an iterator over the elements in this list in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {lang.Object}
                 * @returns {lang.Integer}
                 */
                lastIndexOf(o: lang.Object): lang.Integer;

                /**
                 * Returns a list iterator over the elements in this list (in proper sequence).
                 * @returns {ListIterator<E>}
                 */
                listIterator(): ListIterator<E>;

                /**
                 * Returns a list iterator over the elements in this list (in proper sequence), starting at the specified position in the list.
                 * @param index {$$rhino.Number}
                 * @returns {ListIterator<E>}
                 */
                listIterator(index: $$rhino.Number): ListIterator<E>;

                /**
                 * Removes the element at the specified position in this list.
                 * @param index {$$rhino.Number}
                 * @returns {E}
                 */
                remove(index: $$rhino.Number): E;

                /**
                 * Removes the first occurrence of the specified element from this list, if it is present.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                remove(o: lang.Object): lang.Boolean;

                /**
                 * Removes from this list all of its elements that are contained in the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                removeAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Retains only the elements in this list that are contained in the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                retainAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Replaces the element at the specified position in this list with the specified element.
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 * @returns {E}
                 */
                set(index: $$rhino.Number, element: E): E;

                /**
                 * Returns the number of elements in this list.
                 * @returns {lang.Integer}
                 */
                size(): lang.Integer;

                /**
                 * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
                 * @param fromIndex {$$rhino.Number}
                 * @param toIndex {$$rhino.Number}
                 * @returns {List<E>}
                 */
                subList(fromIndex: $$rhino.Number, toIndex: $$rhino.Number): List<E>;

                /**
                 * Returns an array containing all of the elements in this list in proper sequence (from first to last element).
                 * @returns {lang.Object}
                 */
                toArray(): lang.Object;

                /**
                 * Trims the capacity of this ArrayList instance to be the list's current size.
                 */
                trimToSize(): void;
            }
            export interface MapEntry<K, V> {
                /**
                 * Compares the specified object with this entry for equality.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                equals(o: lang.Object): lang.Boolean;

                /**
                 * Returns the key corresponding to this entry.
                 * @returns {K}
                 */
                getKey(): K;

                /**
                 * Returns the value corresponding to this entry.
                 * @returns {V}
                 */
                getValue(): V;

                /**
                 * Returns the hash code value for this map entry.
                 * @returns {lang.Integer}
                 */
                hashCode(): lang.Integer;

                /**
                 * Replaces the value corresponding to this entry with the specified value (optional operation).
                 * @param value {V}
                 * @returns {V}
                 */
                setValue(value: V): V;
            }
            export interface Set<E> extends util.Collection<E> {
                /**
                 * Adds the specified element to this set if it is not already present (optional operation).
                 * @param e {E}
                 * @returns {lang.Boolean}
                 */
                add(e: E): lang.Boolean;

                /**
                 * Adds all of the elements in the specified collection to this set if they're not already present (optional operation).
                 * @param c {util.Collection< E>}
                 * @returns {lang.Boolean}
                 */
                addAll(c: util.Collection<E>): lang.Boolean;

                /**
                 * Removes all of the elements from this set (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this set contains the specified element.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                contains(o: lang.Object): lang.Boolean;

                /**
                 * Returns true if this set contains all of the elements of the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                containsAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Compares the specified object with this set for equality.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                equals(o: lang.Object): lang.Boolean;

                /**
                 * Returns the hash code value for this set.
                 * @returns {lang.Integer}
                 */
                hashCode(): lang.Integer;

                /**
                 * Returns true if this set contains no elements.
                 * @returns {lang.Boolean}
                 */
                isEmpty(): lang.Boolean;

                /**
                 * Returns an iterator over the elements in this set.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Removes the specified element from this set if it is present (optional operation).
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                remove(o: lang.Object): lang.Boolean;

                /**
                 * Removes from this set all of its elements that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                removeAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Retains only the elements in this set that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                retainAll(c: util.Collection<any>): lang.Boolean;

                /**
                 * Returns the number of elements in this set (its cardinality).
                 * @returns {lang.Integer}
                 */
                size(): lang.Integer;

                /**
                 * Returns an array containing all of the elements in this set.
                 * @returns {lang.Object}
                 */
                toArray(): lang.Object;
            }
            export interface Map<K, V> {
                /**
                 * Removes all of the mappings from this map (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this map contains a mapping for the specified key.
                 * @param key {lang.Object}
                 * @returns {lang.Boolean}
                 */
                containsKey(key: lang.Object): lang.Boolean;

                /**
                 * Returns true if this map maps one or more keys to the specified value.
                 * @param value {lang.Object}
                 * @returns {lang.Boolean}
                 */
                containsValue(value: lang.Object): lang.Boolean;

                /**
                 * Returns a Set view of the mappings contained in this map.
                 * @returns {util.Set<Map.Entry<K,V>>}
                 */
                entrySet(): util.Set<MapEntry<K, V>>;

                /**
                 * Compares the specified object with this map for equality.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                equals(o: lang.Object): lang.Boolean;

                /**
                 * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
                 * @param key {lang.Object}
                 * @returns {V}
                 */
                get(key: lang.Object): V;

                /**
                 * Returns the hash code value for this map.
                 * @returns {lang.Integer}
                 */
                hashCode(): lang.Integer;

                /**
                 * Returns true if this map contains no key-value mappings.
                 * @returns {lang.Boolean}
                 */
                isEmpty(): lang.Boolean;

                /**
                 * Returns a Set view of the keys contained in this map.
                 * @returns {util.Set<K>}
                 */
                keySet(): util.Set<K>;

                /**
                 * Associates the specified value with the specified key in this map (optional operation).
                 * @param key {K}
                 * @param value {V}
                 * @returns {V}
                 */
                put(key: K, value: V): V;

                /**
                 * Removes the mapping for a key from this map if it is present (optional operation).
                 * @param key {lang.Object}
                 * @returns {V}
                 */
                remove(key: lang.Object): V;

                /**
                 * Returns the number of key-value mappings in this map.
                 * @returns {lang.Integer}
                 */
                size(): lang.Integer;

                /**
                 * Returns a util.Collection view of the values contained in this map.
                 * @returns {util.Collection<V>}
                 */
                values(): util.Collection<V>;
            }
            export class AbstractMap<K, V> extends lang.Object implements Map<K, V> {
                protected constructor();
                /**
                 * Removes all of the mappings from this map (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this map contains a mapping for the specified key.
                 * @param key {lang.Object}
                 * @returns {lang.Boolean}
                 */
                containsKey(key: lang.Object): lang.Boolean;

                /**
                 * Returns true if this map maps one or more keys to the specified value.
                 * @param value {lang.Object}
                 * @returns {lang.Boolean}
                 */
                containsValue(value: lang.Object): lang.Boolean;

                /**
                 * Returns a Set view of the mappings contained in this map.
                 * @returns {util.Set<Map.Entry<K,V>>}
                 */
                entrySet(): util.Set<MapEntry<K, V>>;

                /**
                 * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
                 * @param key {lang.Object}
                 * @returns {V}
                 */
                get(key: lang.Object): V;

                /**
                 * Returns the hash code value for this map.
                 * @returns {lang.Integer}
                 */
                hashCode(): lang.Integer;

                /**
                 * Returns true if this map contains no key-value mappings.
                 * @returns {lang.Boolean}
                 */
                isEmpty(): lang.Boolean;

                /**
                 * Returns a Set view of the keys contained in this map.
                 * @returns {util.Set<K>}
                 */
                keySet(): util.Set<K>;

                /**
                 * Associates the specified value with the specified key in this map (optional operation).
                 * @param key {K}
                 * @param value {V}
                 * @returns {V}
                 */
                put(key: K, value: V): V;

                /**
                 * Removes the mapping for a key from this map if it is present (optional operation).
                 * @param key {lang.Object}
                 * @returns {V}
                 */
                remove(key: lang.Object): V;

                /**
                 * Returns the number of key-value mappings in this map.
                 * @returns {lang.Integer}
                 */
                size(): lang.Integer;

                /**
                 * Returns a util.Collection view of the values contained in this map.
                 * @returns {util.Collection<V>}
                 */
                values(): util.Collection<V>;
            }
            export class HashMap<K, V> extends AbstractMap<K, V> implements Map<K, V> {
                protected constructor();
                /**
                 * Removes all of the mappings from this map.
                 */
                clear(): void;

                /**
                 * Returns a shallow copy of this HashMap instance: the keys and values themselves are not cloned.
                 * @returns {lang.Object}
                 */
                clone(): lang.Object;

                /**
                 * Returns true if this map contains a mapping for the specified key.
                 * @param key {lang.Object}
                 * @returns {lang.Boolean}
                 */
                containsKey(key: lang.Object): lang.Boolean;

                /**
                 * Returns true if this map maps one or more keys to the specified value.
                 * @param value {lang.Object}
                 * @returns {lang.Boolean}
                 */
                containsValue(value: lang.Object): lang.Boolean;

                /**
                 * Returns a Set view of the mappings contained in this map.
                 * @returns {util.Set<Map.Entry<K,V>>}
                 */
                entrySet(): util.Set<MapEntry<K, V>>;

                /**
                 * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
                 * @param key {lang.Object}
                 * @returns {V}
                 */
                get(key: lang.Object): V;

                /**
                 * Returns true if this map contains no key-value mappings.
                 * @returns {lang.Boolean}
                 */
                isEmpty(): lang.Boolean;

                /**
                 * Returns a Set view of the keys contained in this map.
                 * @returns {util.Set<K>}
                 */
                keySet(): util.Set<K>;

                /**
                 * Associates the specified value with the specified key in this map.
                 * @param key {K}
                 * @param value {V}
                 * @returns {V}
                 */
                put(key: K, value: V): V;

                /**
                 * Removes the mapping for the specified key from this map if present.
                 * @param key {lang.Object}
                 * @returns {V}
                 */
                remove(key: lang.Object): V;

                /**
                 * Returns the number of key-value mappings in this map.
                 * @returns {lang.Integer}
                 */
                size(): lang.Integer;

                /**
                 * Returns a util.Collection view of the values contained in this map.
                 * @returns {util.Collection<V>}
                 */
                values(): util.Collection<V>;
            }
            export class AbstractSet<E> extends AbstractCollection<E> implements util.Set<E> {
                protected constructor();

                /**
                 * Removes from this set all of its elements that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {lang.Boolean}
                 */
                removeAll(c: util.Collection<any>): lang.Boolean;
            }
            export class HashSet<E> extends AbstractSet<E> implements util.Set<E> {
                protected constructor();
                /**
                 * Adds the specified element to this set if it is not already present.
                 * @param e {E}
                 * @returns {lang.Boolean}
                 */
                add(e: E): lang.Boolean;

                /**
                 * Removes all of the elements from this set.
                 */
                clear(): void;

                /**
                 * Returns a shallow copy of this HashSet instance: the elements themselves are not cloned.
                 * @returns {lang.Object}
                 */
                clone(): lang.Object;

                /**
                 * Returns true if this set contains the specified element.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                contains(o: lang.Object): lang.Boolean;

                /**
                 * Returns true if this set contains no elements.
                 * @returns {lang.Boolean}
                 */
                isEmpty(): lang.Boolean;

                /**
                 * Returns an iterator over the elements in this set.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Removes the specified element from this set if it is present.
                 * @param o {lang.Object}
                 * @returns {lang.Boolean}
                 */
                remove(o: lang.Object): lang.Boolean;

                /**
                 * Returns the number of elements in this set (its cardinality).
                 * @returns {lang.Integer}
                 */
                size(): lang.Integer;
            }
            /**
             * Java Date object.
             * @export
             * @class Date
             * @extends {Object}
             */
            export class Date extends lang.Object implements lang.Comparable<Date> {
                protected constructor();
                /**
                 * Tests if this date is after the specified date.
                 * @param when {Date}
                 * @returns {lang.Boolean}
                 */
                after(when: Date): lang.Boolean;

                /**
                 * Tests if this date is before the specified date.
                 * @param when {Date}
                 * @returns {lang.Boolean}
                 */
                before(when: Date): lang.Boolean;

                /**
                 * Return a copy of this object.
                 * @returns {lang.Object}
                 */
                clone(): lang.Object;

                /**
                 * Compares two Dates for ordering.
                 * @param anotherDate {Date}
                 * @returns {lang.Integer}
                 */
                compareTo(anotherDate: Date): lang.Integer;

                /**
                 * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this Date object.
                 * @returns {lang.Long}
                 */
                getTime(): lang.Long;

                /**
                 * Sets this Date object to represent a point in time that is time milliseconds after January 1, 1970 00:00:00 GMT.
                 * @param time {$$rhino.Number}
                 */
                setTime(time: $$rhino.Number): void;

            }
            /**
             * Represents a time zone offset, and also figures out daylight savings.
             * @class TimeZone
             */
            export class TimeZone {
                protected constructor();
                /**
                 * Creates a copy of this TimeZone.
                 * @returns {lang.Object}
                 */
                clone(): lang.Object;

                /**
                 * Returns a long standard time name of this TimeZone suitable for presentation to the user in the default locale.
                 * @returns {lang.String}
                 */
                getDisplayName(): lang.String;

                /**
                 * Returns a name in the specified style of this TimeZone suitable for presentation to the user in the default locale.
                 * @param daylight {$$rhino.Boolean}
                 * @param style {$$rhino.Number}
                 * @returns {lang.String}
                 */
                getDisplayName(daylight: $$rhino.Boolean, style: $$rhino.Number): lang.String;

                /**
                 * Returns a name in the specified style of this TimeZone suitable for presentation to the user in the specified locale.
                 * @param daylight {$$rhino.Boolean}
                 * @param style {$$rhino.Number}
                 * @param locale {Locale}
                 * @returns {lang.String}
                 */
                getDisplayName(daylight: $$rhino.Boolean, style: $$rhino.Number, locale: Locale): lang.String;

                /**
                 * Returns a long standard time name of this TimeZone suitable for presentation to the user in the specified locale.
                 * @param locale {Locale}
                 * @returns {lang.String}
                 */
                getDisplayName(locale: Locale): lang.String;

                /**
                 * Returns the amount of time to be added to local standard time to get local wall clock time.
                 * @returns {lang.Integer}
                 */
                getDSTSavings(): lang.Integer;

                /**
                 * Gets the ID of this time zone.
                 * @returns {lang.String}
                 */
                getID(): lang.String;

                /**
                 * Gets the time zone offset, for current date, modified in case of daylight savings.
                 * @param era {$$rhino.Number}
                 * @param year {$$rhino.Number}
                 * @param month {$$rhino.Number}
                 * @param day {$$rhino.Number}
                 * @param dayOfWeek {$$rhino.Number}
                 * @param milliseconds {$$rhino.Number}
                 * @returns {lang.Integer}
                 */
                getOffset(era: $$rhino.Number, year: $$rhino.Number, month: $$rhino.Number, day: $$rhino.Number, dayOfWeek: $$rhino.Number, milliseconds: $$rhino.Number): lang.Integer;

                /**
                 * Returns the offset of this time zone from UTC at the specified date.
                 * @param date {$$rhino.Number}
                 * @returns {lang.Integer}
                 */
                getOffset(date: $$rhino.Number): lang.Integer;

                /**
                 * Returns the amount of time in milliseconds to add to UTC to get standard time in this time zone.
                 * @returns {lang.Integer}
                 */
                getRawOffset(): lang.Integer;

                /**
                 * Returns true if this zone has the same rule and offset as another zone.
                 * @param other {TimeZone}
                 * @returns {lang.Boolean}
                 */
                hasSameRules(other: TimeZone): lang.Boolean;

                /**
                 * Queries if the given date is in Daylight Saving Time in this time zone.
                 * @param date {Date}
                 * @returns {lang.Boolean}
                 */
                inDaylightTime(date: Date): lang.Boolean;

                /**
                 * Returns true if this TimeZone is currently in Daylight Saving Time, or if a transition from Standard Time to Daylight Saving Time occurs at any future time.
                 * @returns {lang.Boolean}
                 */
                observesDaylightTime(): lang.Boolean;

                /**
                 * Sets the time zone ID.
                 * @param ID {$$rhino.String}
                 */
                setID(ID: $$rhino.String): void;

                /**
                 * Sets the base time zone offset to GMT.
                 * @param offsetMillis {$$rhino.Number}
                 */
                setRawOffset(offsetMillis: $$rhino.Number): void;

                /**
                 * Queries if this TimeZone uses Daylight Saving Time.
                 * @returns {lang.Boolean}
                 */
                useDaylightTime(): lang.Boolean;
            }
        }
    }

    export namespace org {
        export namespace w3c {
            export namespace dom {
                export interface CharacterData extends Node {
                    /**
                     * Append the string to the end of the character data of the node.
                     * @param arg {$$rhino.String}
                     */
                    appendData(arg: $$rhino.String): void;

                    /**
                     * Remove a range of 16-bit units from the node.
                     * @param offset {$$rhino.Number}
                     * @param count {$$rhino.Number}
                     */
                    deleteData(offset: $$rhino.Number, count: $$rhino.Number): void;

                    /**
                     * The character data of the node that implements this interface.
                     * @returns {Packages.java.lang.String}
                     */
                    getData(): Packages.java.lang.String;

                    /**
                     * The number of 16-bit units that are available through data and the substringData method below.
                     * @returns {Packages.java.lang.Integer}
                     */
                    getLength(): Packages.java.lang.Integer;

                    /**
                     * Insert a string at the specified 16-bit unit offset.
                     * @param offset {$$rhino.Number}
                     * @param arg {$$rhino.String}
                     */
                    insertData(offset: $$rhino.Number, arg: $$rhino.String): void;

                    /**
                     * Replace the characters starting at the specified 16-bit unit offset with the specified string.
                     * @param offset {$$rhino.Number}
                     * @param count {$$rhino.Number}
                     * @param arg {$$rhino.String}
                     */
                    replaceData(offset: $$rhino.Number, count: $$rhino.Number, arg: $$rhino.String): void;

                    /**
                     * The character data of the node that implements this interface.
                     * @param data {$$rhino.String}
                     */
                    setData(data: $$rhino.String): void;

                    /**
                     * Extracts a range of data from the node.
                     * @param offset {$$rhino.Number}
                     * @param count {$$rhino.Number}
                     * @returns {Packages.java.lang.String}
                     */
                    substringData(offset: $$rhino.Number, count: $$rhino.Number): Packages.java.lang.String;
                }
                export interface Text extends CharacterData {
                    /**
                     * Returns all text of Text nodes logically-adjacent text nodes to this node, concatenated in document order.
                     * @returns {java.lang.String}
                     */
                    getWholeText(): java.lang.String;

                    /**
                     * Returns whether this text node contains element content whitespace, often abusively called "ignorable whitespace".
                     * @returns {java.lang.Boolean}
                     */
                    isElementContentWhitespace(): java.lang.Boolean;

                    /**
                     * Replaces the text of the current node and all logically-adjacent text nodes with the specified text.
                     * @param content {$$rhino.String}
                     * @returns {Text}
                     */
                    replaceWholeText(content: $$rhino.String): Text;

                    /**
                     * Breaks this node into two nodes at the specified offset, keeping both in the tree as siblings.
                     * @param offset {$$rhino.Number}
                     * @returns {Text}
                     */
                    splitText(offset: $$rhino.Number): Text;
                }
                export interface CDATASection extends Text { }
                export interface Comment extends CharacterData { }
                export interface DocumentFragment extends Node { }
                export interface EntityReference extends Node { }
                export interface ProcessingInstruction extends Node {
                    /**
                     * The content of this processing instruction.
                     * @returns {java.lang.String}
                     */
                    getData(): java.lang.String;

                    /**
                     * The target of this processing instruction.
                     * @returns {java.lang.String}
                     */
                    getTarget(): java.lang.String;

                    /**
                     * The content of this processing instruction.
                     * @param data {$$rhino.String}
                     */
                    setData(data: $$rhino.String): void;
                }
                export interface DocumentType extends Node {
                    /**
                     * A NamedNodeMap containing the general entities, both external and internal, declared in the DTD.
                     * @returns {NamedNodeMap}
                     */
                    getEntities(): NamedNodeMap;

                    /**
                     * The internal subset as a string, or null if there is none.
                     * @returns {java.lang.String}
                     */
                    getInternalSubset(): java.lang.String;

                    /**
                     * The name of DTD; i.e., the name immediately following the DOCTYPE keyword.
                     * @returns {java.lang.String}
                     */
                    getName(): java.lang.String;

                    /**
                     * A NamedNodeMap containing the notations declared in the DTD.
                     * @returns {NamedNodeMap}
                     */
                    getNotations(): NamedNodeMap;

                    /**
                     * The public identifier of the external subset.
                     * @returns {java.lang.String}
                     */
                    getPublicId(): java.lang.String;

                    /**
                     * The system identifier of the external subset.
                     * @returns {java.lang.String}
                     */
                    getSystemId(): java.lang.String;
                }
                export interface DOMStringList {
                    /**
                     * Test if a string is part of this DOMStringList.
                     * @param str {$$rhino.String}
                     * @returns {java.lang.Boolean}
                     */
                    contains(str: $$rhino.String): java.lang.Boolean;

                    /**
                     * The number of DOMStrings in the list.
                     * @returns {java.lang.Integer}
                     */
                    getLength(): java.lang.Integer;

                    /**
                     * Returns the indexth item in the collection.
                     * @param index {$$rhino.Number}
                     * @returns {java.lang.String}
                     */
                    item(index: $$rhino.Number): java.lang.String;
                }
                export interface DOMConfiguration {
                    /**
                     * Check if setting a parameter to a specific value is supported.
                     * @param name {$$rhino.String}
                     * @param value {object}
                     * @returns {java.lang.Boolean}
                     */
                    canSetParameter(name: $$rhino.String, value: object): java.lang.Boolean;

                    /**
                     * Return the value of a parameter if known.
                     * @param name {$$rhino.String}
                     * @returns {java.lang.Object}
                     */
                    getParameter(name: $$rhino.String): java.lang.Object;

                    /**
                     * The list of the parameters supported by this DOMConfiguration object and for which at least one value can be set by the application.
                     * @returns {DOMStringList}
                     */
                    getParameterNames(): DOMStringList;

                    /**
                     * Set the value of a parameter.
                     * @param name {$$rhino.String}
                     * @param value {object}
                     */
                    setParameter(name: $$rhino.String, value: object): void;
                }
                export interface DOMImplementation {
                    /**
                     * Creates a DOM Document object of the specified type with its document element.
                     * @param namespaceURI {$$rhino.String}
                     * @param qualifiedName {$$rhino.String}
                     * @param doctype {DocumentType}
                     * @returns {Document}
                     */
                    createDocument(namespaceURI: $$rhino.String, qualifiedName: $$rhino.String, doctype: DocumentType): Document;

                    /**
                     * Creates an empty DocumentType node.
                     * @param qualifiedName {$$rhino.String}
                     * @param publicId {$$rhino.String}
                     * @param systemId {$$rhino.String}
                     * @returns {DocumentType}
                     */
                    createDocumentType(qualifiedName: $$rhino.String, publicId: $$rhino.String, systemId: $$rhino.String): DocumentType;

                    /**
                     * This method returns a specialized object which implements the specialized APIs of the specified feature and version, as specified in DOM Features.
                     * @param feature {$$rhino.String}
                     * @param version {$$rhino.String}
                     * @returns {java.lang.Object}
                     */
                    getFeature(feature: $$rhino.String, version: $$rhino.String): java.lang.Object;

                    /**
                     * Test if the DOM implementation implements a specific feature and version, as specified in DOM Features.
                     * @param feature {$$rhino.String}
                     * @param version {$$rhino.String}
                     * @returns {java.lang.Boolean}
                     */
                    hasFeature(feature: $$rhino.String, version: $$rhino.String): java.lang.Boolean;
                }
                export interface Document extends Node {
                    /**
                     * Attempts to adopt a node from another document to this document.
                     * @param source {Node}
                     * @returns {Node}
                     */
                    adoptNode(source: Node): Node;

                    /**
                     * Creates an Attr of the given name.
                     * @param name {$$rhino.String}
                     * @returns {Attr}
                     */
                    createAttribute(name: $$rhino.String): Attr;

                    /**
                     * Creates an attribute of the given qualified name and namespace URI.
                     * @param namespaceURI {$$rhino.String}
                     * @param qualifiedName {$$rhino.String}
                     * @returns {Attr}
                     */
                    createAttributeNS(namespaceURI: $$rhino.String, qualifiedName: $$rhino.String): Attr;

                    /**
                     * Creates a CDATASection node whose value is the specified string.
                     * @param data {$$rhino.String}
                     * @returns {CDATASection}
                     */
                    createCDATASection(data: $$rhino.String): CDATASection;

                    /**
                     * Creates a Comment node given the specified string.
                     * @param data {$$rhino.String}
                     * @returns {Comment}
                     */
                    createComment(data: $$rhino.String): Comment;

                    /**
                     * Creates an empty DocumentFragment object.
                     * @returns {DocumentFragment}
                     */
                    createDocumentFragment(): DocumentFragment;

                    /**
                     * Creates an element of the type specified.
                     * @param tagName {$$rhino.String}
                     * @returns {Element}
                     */
                    createElement(tagName: $$rhino.String): Element;

                    /**
                     * Creates an element of the given qualified name and namespace URI.
                     * @param namespaceURI {$$rhino.String}
                     * @param qualifiedName {$$rhino.String}
                     * @returns {Element}
                     */
                    createElementNS(namespaceURI: $$rhino.String, qualifiedName: $$rhino.String): Element;

                    /**
                     * Creates an EntityReference object.
                     * @param name {$$rhino.String}
                     * @returns {EntityReference}
                     */
                    createEntityReference(name: $$rhino.String): EntityReference;

                    /**
                     * Creates a ProcessingInstruction node given the specified name and data strings.
                     * @param target {$$rhino.String}
                     * @param data {$$rhino.String}
                     * @returns {ProcessingInstruction}
                     */
                    createProcessingInstruction(target: $$rhino.String, data: $$rhino.String): ProcessingInstruction;

                    /**
                     * Creates a Text node given the specified string.
                     * @param data {$$rhino.String}
                     * @returns {Text}
                     */
                    createTextNode(data: $$rhino.String): Text;

                    /**
                     * The Document Type Declaration (see DocumentType) associated with this document.
                     * @returns {DocumentType}
                     */
                    getDoctype(): DocumentType;

                    /**
                     * This is a convenience attribute that allows direct access to the child node that is the document element of the document.
                     * @returns {Element}
                     */
                    getDocumentElement(): Element;

                    /**
                     * The location of the document or null if undefined or if the Document was created using DOMImplementation.createDocument.
                     * @returns {java.lang.String}
                     */
                    getDocumentURI(): java.lang.String;

                    /**
                     * The configuration used when Document.normalizeDocument() is invoked.
                     * @returns {DOMConfiguration}
                     */
                    getDomConfig(): DOMConfiguration;

                    /**
                     * Returns the Element that has an ID attribute with the given value.
                     * @param elementId {$$rhino.String}
                     * @returns {Element}
                     */
                    getElementById(elementId: $$rhino.String): Element;

                    /**
                     * Returns a NodeList of all the Elements in document order with a given tag name and are contained in the document.
                     * @param tagname {$$rhino.String}
                     * @returns {NodeList}
                     */
                    getElementsByTagName(tagname: $$rhino.String): NodeList;

                    /**
                     * Returns a NodeList of all the Elements with a given local name and namespace URI in document order.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @returns {NodeList}
                     */
                    getElementsByTagNameNS(namespaceURI: $$rhino.String, localName: $$rhino.String): NodeList;

                    /**
                     * The DOMImplementation object that handles this document.
                     * @returns {DOMImplementation}
                     */
                    getImplementation(): DOMImplementation;

                    /**
                     * An attribute specifying the encoding used for this document at the time of the parsing.
                     * @returns {java.lang.String}
                     */
                    getInputEncoding(): java.lang.String;

                    /**
                     * An attribute specifying whether error checking is enforced or not.
                     * @returns {java.lang.Boolean}
                     */
                    getStrictErrorChecking(): java.lang.Boolean;

                    /**
                     * An attribute specifying, as part of the XML declaration, the encoding of this document.
                     * @returns {java.lang.String}
                     */
                    getXmlEncoding(): java.lang.String;

                    /**
                     * An attribute specifying, as part of the XML declaration, whether this document is standalone.
                     * @returns {java.lang.Boolean}
                     */
                    getXmlStandalone(): java.lang.Boolean;

                    /**
                     * An attribute specifying, as part of the XML declaration, the version number of this document.
                     * @returns {java.lang.String}
                     */
                    getXmlVersion(): java.lang.String;

                    /**
                     * Imports a node from another document to this document, without altering or removing the source node from the original document; this method creates a new copy of the source node.
                     * @param importedNode {Node}
                     * @param deep {$$rhino.Boolean}
                     * @returns {Node}
                     */
                    importNode(importedNode: Node, deep: $$rhino.Boolean): Node;

                    /**
                     * This method acts as if the document was going through a save and load cycle, putting the document in a "normal" form.
                     */
                    normalizeDocument(): void;

                    /**
                     * Rename an existing node of type ELEMENT_NODE or ATTRIBUTE_NODE.
                     * @param n {Node}
                     * @param namespaceURI {$$rhino.String}
                     * @param qualifiedName {$$rhino.String}
                     * @returns {Node}
                     */
                    renameNode(n: Node, namespaceURI: $$rhino.String, qualifiedName: $$rhino.String): Node;

                    /**
                     * The location of the document or null if undefined or if the Document was created using DOMImplementation.createDocument.
                     * @param documentURI {$$rhino.String}
                     */
                    setDocumentURI(documentURI: $$rhino.String): void;

                    /**
                     * An attribute specifying whether error checking is enforced or not.
                     * @param strictErrorChecking {$$rhino.Boolean}
                     */
                    setStrictErrorChecking(strictErrorChecking: $$rhino.Boolean): void;

                    /**
                     * An attribute specifying, as part of the XML declaration, whether this document is standalone.
                     * @param xmlStandalone {$$rhino.Boolean}
                     */
                    setXmlStandalone(xmlStandalone: $$rhino.Boolean): void;

                    /**
                     * An attribute specifying, as part of the XML declaration, the version number of this document.
                     * @param xmlVersion {$$rhino.String}
                     */
                    setXmlVersion(xmlVersion: $$rhino.String): void;
                }
                export interface NamedNodeMap {
                    /**
                     * The number of nodes in this map.
                     * @returns {java.lang.Integer}
                     */
                    getLength(): java.lang.Integer;

                    /**
                     * Retrieves a node specified by name.
                     * @param name {$$rhino.String}
                     * @returns {Node}
                     */
                    getNamedItem(name: $$rhino.String): Node;

                    /**
                     * Retrieves a node specified by local name and namespace URI.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @returns {Node}
                     */
                    getNamedItemNS(namespaceURI: $$rhino.String, localName: $$rhino.String): Node;

                    /**
                     * Returns the indexth item in the map.
                     * @param index {$$rhino.Number}
                     * @returns {Node}
                     */
                    item(index: $$rhino.Number): Node;

                    /**
                     * Removes a node specified by name.
                     * @param name {$$rhino.String}
                     * @returns {Node}
                     */
                    removeNamedItem(name: $$rhino.String): Node;

                    /**
                     * Removes a node specified by local name and namespace URI.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @returns {Node}
                     */
                    removeNamedItemNS(namespaceURI: $$rhino.String, localName: $$rhino.String): Node;

                    /**
                     * Adds a node using its nodeName attribute.
                     * @param arg {Node}
                     * @returns {Node}
                     */
                    setNamedItem(arg: Node): Node;

                    /**
                     * Adds a node using its namespaceURI and localName.
                     * @param arg {Node}
                     * @returns {Node}
                     */
                    setNamedItemNS(arg: Node): Node;
                }
                export interface Node {
                    /**
                     * Adds the node newChild to the end of the list of children of this node.
                     * @param newChild {Node}
                     * @returns {Node}
                     */
                    appendChild(newChild: Node): Node;

                    /**
                     * Returns a duplicate of this node, i.e., serves as a generic copy constructor for nodes.
                     * @param deep {$$rhino.Boolean}
                     * @returns {Node}
                     */
                    cloneNode(deep: $$rhino.Boolean): Node;

                    /**
                     * Compares the reference node, i.e.
                     * @param other {Node}
                     * @returns {java.lang.Short}
                     */
                    compareDocumentPosition(other: Node): java.lang.Short;

                    /**
                     * A NamedNodeMap containing the attributes of this node (if it is an Element) or null otherwise.
                     * @returns {NamedNodeMap}
                     */
                    getAttributes(): NamedNodeMap;

                    /**
                     * The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI.
                     * @returns {java.lang.String}
                     */
                    getBaseURI(): java.lang.String;

                    /**
                     * A NodeList that contains all children of this node.
                     * @returns {NodeList}
                     */
                    getChildNodes(): NodeList;

                    /**
                     * This method returns a specialized object which implements the specialized APIs of the specified feature and version, as specified in .
                     * @param feature {$$rhino.String}
                     * @param version {$$rhino.String}
                     * @returns {java.lang.Object}
                     */
                    getFeature(feature: $$rhino.String, version: $$rhino.String): java.lang.Object;

                    /**
                     * The first child of this node.
                     * @returns {Node}
                     */
                    getFirstChild(): Node;

                    /**
                     * The last child of this node.
                     * @returns {Node}
                     */
                    getLastChild(): Node;

                    /**
                     * Returns the local part of the qualified name of this node.
                     * @returns {java.lang.String}
                     */
                    getLocalName(): java.lang.String;

                    /**
                     * The namespace URI of this node, or null if it is unspecified (see ).
                     * @returns {java.lang.String}
                     */
                    getNamespaceURI(): java.lang.String;

                    /**
                     * The node immediately following this node.
                     * @returns {Node}
                     */
                    getNextSibling(): Node;

                    /**
                     * The name of this node, depending on its type; see the table above.
                     * @returns {java.lang.String}
                     */
                    getNodeName(): java.lang.String;

                    /**
                     * A code representing the type of the underlying object, as defined above.
                     * @returns {java.lang.Short}
                     */
                    getNodeType(): java.lang.Short;

                    /**
                     * The value of this node, depending on its type; see the table above.
                     * @returns {java.lang.String}
                     */
                    getNodeValue(): java.lang.String;

                    /**
                     * The Document object associated with this node.
                     * @returns {Document}
                     */
                    getOwnerDocument(): Document;

                    /**
                     * The parent of this node.
                     * @returns {Node}
                     */
                    getParentNode(): Node;

                    /**
                     * The namespace prefix of this node, or null if it is unspecified.
                     * @returns {java.lang.String}
                     */
                    getPrefix(): java.lang.String;

                    /**
                     * The node immediately preceding this node.
                     * @returns {Node}
                     */
                    getPreviousSibling(): Node;

                    /**
                     * This attribute returns the text content of this node and its descendants.
                     * @returns {java.lang.String}
                     */
                    getTextContent(): java.lang.String;

                    /**
                     * Retrieves the object associated to a key on a this node.
                     * @param key {$$rhino.String}
                     * @returns {java.lang.Object}
                     */
                    getUserData(key: $$rhino.String): java.lang.Object;

                    /**
                     * Returns whether this node (if it is an element) has any attributes.
                     * @returns {java.lang.Boolean}
                     */
                    hasAttributes(): java.lang.Boolean;

                    /**
                     * Returns whether this node has any children.
                     * @returns {java.lang.Boolean}
                     */
                    hasChildNodes(): java.lang.Boolean;

                    /**
                     * Inserts the node newChild before the existing child node refChild.
                     * @param newChild {Node}
                     * @param refChild {Node}
                     * @returns {Node}
                     */
                    insertBefore(newChild: Node, refChild: Node): Node;

                    /**
                     * This method checks if the specified namespaceURI is the default namespace or not.
                     * @param namespaceURI {$$rhino.String}
                     * @returns {java.lang.Boolean}
                     */
                    isDefaultNamespace(namespaceURI: $$rhino.String): java.lang.Boolean;

                    /**
                     * Tests whether two nodes are equal.
                     * @param arg {Node}
                     * @returns {java.lang.Boolean}
                     */
                    isEqualNode(arg: Node): java.lang.Boolean;

                    /**
                     * Returns whether this node is the same node as the given one.
                     * @param other {Node}
                     * @returns {java.lang.Boolean}
                     */
                    isSameNode(other: Node): java.lang.Boolean;

                    /**
                     * Tests whether the DOM implementation implements a specific feature and that feature is supported by this node, as specified in .
                     * @param feature {$$rhino.String}
                     * @param version {$$rhino.String}
                     * @returns {java.lang.Boolean}
                     */
                    isSupported(feature: $$rhino.String, version: $$rhino.String): java.lang.Boolean;

                    /**
                     * Look up the namespace URI associated to the given prefix, starting from this node.
                     * @param prefix {$$rhino.String}
                     * @returns {java.lang.String}
                     */
                    lookupNamespaceURI(prefix: $$rhino.String): java.lang.String;

                    /**
                     * Look up the prefix associated to the given namespace URI, starting from this node.
                     * @param namespaceURI {$$rhino.String}
                     * @returns {java.lang.String}
                     */
                    lookupPrefix(namespaceURI: $$rhino.String): java.lang.String;

                    /**
                     * Puts all Text nodes in the full depth of the sub-tree underneath this Node.
                     */
                    normalize(): void;

                    /**
                     * Removes the child node indicated by oldChild from the list of children, and returns it.
                     * @param oldChild {Node}
                     * @returns {Node}
                     */
                    removeChild(oldChild: Node): Node;

                    /**
                     * Replaces the child node oldChild with newChild in the list of children, and returns the oldChild node.
                     * @param newChild {Node}
                     * @param oldChild {Node}
                     * @returns {Node}
                     */
                    replaceChild(newChild: Node, oldChild: Node): Node;

                    /**
                     * The value of this node, depending on its type; see the table above.
                     * @param nodeValue {$$rhino.String}
                     */
                    setNodeValue(nodeValue: $$rhino.String): void;

                    /**
                     * The namespace prefix of this node, or null if it is unspecified.
                     * @param prefix {$$rhino.String}
                     */
                    setPrefix(prefix: $$rhino.String): void;

                    /**
                     * This attribute returns the text content of this node and its descendants.
                     * @param textContent {$$rhino.String}
                     */
                    setTextContent(textContent: $$rhino.String): void;
                }
                export interface Attr {
                    /**
                     * Returns the name of this attribute.
                     * @returns {java.lang.String}
                     */
                    getName(): java.lang.String;

                    /**
                     * The Element node this attribute is attached to or null if this attribute is not in use.
                     * @returns {Element}
                     */
                    getOwnerElement(): Element;

                    /**
                     * The type information associated with this attribute.
                     * @returns {TypeInfo}
                     */
                    getSchemaTypeInfo(): TypeInfo;

                    /**
                     * True if this attribute was explicitly given a value in the instance document, false otherwise.
                     * @returns {java.lang.Boolean}
                     */
                    getSpecified(): java.lang.Boolean;

                    /**
                     * On retrieval, the value of the attribute is returned as a string.
                     * @returns {java.lang.String}
                     */
                    getValue(): java.lang.String;

                    /**
                     * Returns whether this attribute is known to be of type ID (i.e.
                     * @returns {java.lang.Boolean}
                     */
                    isId(): java.lang.Boolean;

                    /**
                     * On retrieval, the value of the attribute is returned as a string.
                     * @param value {$$rhino.String}
                     */
                    setValue(value: $$rhino.String): void;
                }
                export interface NodeList {
                    /**
                     * Test if a name is part of this NameList.
                     * @param str {$$rhino.String}
                     * @returns {java.lang.Boolean}
                     */
                    contains(str: $$rhino.String): java.lang.Boolean;

                    /**
                     * Test if the pair namespaceURI/name is part of this NameList.
                     * @param namespaceURI {$$rhino.String}
                     * @param name {$$rhino.String}
                     * @returns {java.lang.Boolean}
                     */
                    containsNS(namespaceURI: $$rhino.String, name: $$rhino.String): java.lang.Boolean;

                    /**
                     * The number of pairs (name and namespaceURI) in the list.
                     * @returns {java.lang.Integer}
                     */
                    getLength(): java.lang.Integer;

                    /**
                     * Returns the indexth name item in the collection.
                     * @param index {$$rhino.Number}
                     * @returns {java.lang.String}
                     */
                    getName(index: $$rhino.Number): java.lang.String;

                    /**
                     * Returns the indexth namespaceURI item in the collection.
                     * @param index {$$rhino.Number}
                     * @returns {java.lang.String}
                     */
                    getNamespaceURI(index: $$rhino.Number): java.lang.String;
                }
                export interface TypeInfo {
                    /**
                     * The name of a type declared for the associated element or attribute, or null if unknown.
                     * @returns {java.lang.String}
                     */
                    getTypeName(): java.lang.String;

                    /**
                     * The namespace of the type declared for the associated element or attribute or null if the element does not have declaration or if no namespace information is available.
                     * @returns {java.lang.String}
                     */
                    getTypeNamespace(): java.lang.String;

                    /**
                     * This method returns if there is a derivation between the reference type definition, i.e.
                     * @param typeNamespaceArg {$$rhino.String}
                     * @param typeNameArg {$$rhino.String}
                     * @param derivationMethod {$$rhino.Number}
                     * @returns {java.lang.Boolean}
                     */
                    isDerivedFrom(typeNamespaceArg: $$rhino.String, typeNameArg: $$rhino.String, derivationMethod: $$rhino.Number): java.lang.Boolean;
                }
                export interface Element extends Node {
                    /**
                     * Retrieves an attribute value by name.
                     * @param name {$$rhino.String}
                     * @returns {java.lang.String}
                     */
                    getAttribute(name: $$rhino.String): java.lang.String;

                    /**
                     * Retrieves an attribute node by name.
                     * @param name {$$rhino.String}
                     * @returns {Attr}
                     */
                    getAttributeNode(name: $$rhino.String): Attr;

                    /**
                     * Retrieves an Attr node by local name and namespace URI.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @returns {Attr}
                     */
                    getAttributeNodeNS(namespaceURI: $$rhino.String, localName: $$rhino.String): Attr;

                    /**
                     * Retrieves an attribute value by local name and namespace URI.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @returns {java.lang.String}
                     */
                    getAttributeNS(namespaceURI: $$rhino.String, localName: $$rhino.String): java.lang.String;

                    /**
                     * Returns a NodeList of all descendant Elements with a given tag name, in document order.
                     * @param name {$$rhino.String}
                     * @returns {NodeList}
                     */
                    getElementsByTagName(name: $$rhino.String): NodeList;

                    /**
                     * Returns a NodeList of all the descendant Elements with a given local name and namespace URI in document order.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @returns {NodeList}
                     */
                    getElementsByTagNameNS(namespaceURI: $$rhino.String, localName: $$rhino.String): NodeList;

                    /**
                     * The type information associated with this element.
                     * @returns {TypeInfo}
                     */
                    getSchemaTypeInfo(): TypeInfo;

                    /**
                     * The name of the element.
                     * @returns {java.lang.String}
                     */
                    getTagName(): java.lang.String;

                    /**
                     * Returns true when an attribute with a given name is specified on this element or has a default value, false otherwise.
                     * @param name {$$rhino.String}
                     * @returns {java.lang.Boolean}
                     */
                    hasAttribute(name: $$rhino.String): java.lang.Boolean;

                    /**
                     * Returns true when an attribute with a given local name and namespace URI is specified on this element or has a default value, false otherwise.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @returns {java.lang.Boolean}
                     */
                    hasAttributeNS(namespaceURI: $$rhino.String, localName: $$rhino.String): java.lang.Boolean;

                    /**
                     * Removes an attribute by name.
                     * @param name {$$rhino.String}
                     */
                    removeAttribute(name: $$rhino.String): void;

                    /**
                     * Removes the specified attribute node.
                     * @param oldAttr {Attr}
                     * @returns {Attr}
                     */
                    removeAttributeNode(oldAttr: Attr): Attr;

                    /**
                     * Removes an attribute by local name and namespace URI.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     */
                    removeAttributeNS(namespaceURI: $$rhino.String, localName: $$rhino.String): void;

                    /**
                     * Adds a new attribute.
                     * @param name {$$rhino.String}
                     * @param value {$$rhino.String}
                     */
                    setAttribute(name: $$rhino.String, value: $$rhino.String): void;

                    /**
                     * Adds a new attribute node.
                     * @param newAttr {Attr}
                     * @returns {Attr}
                     */
                    setAttributeNode(newAttr: Attr): Attr;

                    /**
                     * Adds a new attribute.
                     * @param newAttr {Attr}
                     * @returns {Attr}
                     */
                    setAttributeNodeNS(newAttr: Attr): Attr;

                    /**
                     * Adds a new attribute.
                     * @param namespaceURI {$$rhino.String}
                     * @param qualifiedName {$$rhino.String}
                     * @param value {$$rhino.String}
                     */
                    setAttributeNS(namespaceURI: $$rhino.String, qualifiedName: $$rhino.String, value: $$rhino.String): void;

                    /**
                     * If the parameter isId is true, this method declares the specified attribute to be a user-determined ID attribute .
                     * @param name {$$rhino.String}
                     * @param isId {$$rhino.Boolean}
                     */
                    setIdAttribute(name: $$rhino.String, isId: $$rhino.Boolean): void;

                    /**
                     * If the parameter isId is true, this method declares the specified attribute to be a user-determined ID attribute .
                     * @param idAttr {Attr}
                     * @param isId {$$rhino.Boolean}
                     */
                    setIdAttributeNode(idAttr: Attr, isId: $$rhino.Boolean): void;

                    /**
                     * If the parameter isId is true, this method declares the specified attribute to be a user-determined ID attribute .
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @param isId {$$rhino.Boolean}
                     */
                    setIdAttributeNS(namespaceURI: $$rhino.String, localName: $$rhino.String, isId: $$rhino.Boolean): void;
                }
            }
        }
    }

    export namespace com {
        export namespace glide {
            export namespace choice {
                export class Choice {
                    protected constructor(value: $$rhino.String, label: $$rhino.String, sysId?: $$rhino.String);
                    getLabel(): $$rhino.String;
                    getValue(): $$rhino.String;
                    getId(): $$rhino.String;
                    setId(sysId: $$rhino.String): void;
                    getImage(): $$rhino.String;
                    getED(): GlideElementDescriptor;
                    getSelected(): $$rhino.Boolean;
                    getUsed(): $$rhino.Boolean;
                    setLabel(label: $$rhino.String): void;
                    setValue(value: $$rhino.String): void;
                    setImage(image: $$rhino.String): void;
                    setED(ed: GlideElementDescriptor): void;
                    setSelected(label: $$rhino.Boolean): void;
                    getRefFileName(): $$rhino.String;
                    setRefFileName(sysId: $$rhino.String): void;
                    getUsed(used: $$rhino.String): void;
                    setParameter(name: $$rhino.String, value: any): void;
                    getParameter(name: $$rhino.String): any;
                    getParameters(): Packages.java.util.HashMap<$$rhino.String, any>;
                    compareTo(obj: any): $$rhino.Number;
                    isReference(): $$rhino.Boolean;
                    isMissing(): $$rhino.Boolean;
                    setMissing(label: $$rhino.Boolean): void;
                    //getScope(): Packages.com.glide.sys.fencing.Scope;
                    //setScope(label: Packages.com.glide.sys.fencing.Scope): void;
                    setParent(parentId: $$rhino.String): void;
                }
                export class ChoiceList {
                    protected constructor();
                    sort(): void;
                    getChoice(index: $$rhino.String | $$rhino.Number): Choice;
                    getChoiceNoTrim(index: $$rhino.String): Choice;
                    getSelectedIndex(): $$rhino.Number;
                    addNone(): Choice;
                    removeNone(): void;
                    add(choice: Choice): $$rhino.Boolean;
                    addAll(cl: ChoiceList): void;
                    addFirst(value: $$rhino.String, label: $$rhino.String): Choice;
                    removeChoice(index: $$rhino.String | $$rhino.Number): Choice;
                    getLabelOf(value: $$rhino.String): $$rhino.String;
                    getValueOf(label: $$rhino.String): $$rhino.String;
                    getSize(): $$rhino.Number;
                    //getNullOverride(gc: Packages.com.glide.script.GlideController): $$rhino.String;
                    static getChoiceList(tableName: $$rhino.String, fieldName: $$rhino.String): ChoiceList;
                }
            }
            export namespace script {
                export interface IGlideElementVariable {
                    getQuestion(): glideapp.questionset.Question;
                }
                export interface IGlideElementVariables extends IGlideElement {
                }
                export interface IGlideElement extends $$element.IDbObject {
                    /**
                     * Returns the name of the field.
                     * @memberof GlideElement
                     * @returns {string} Field name.
                     */
                    getName(): string;
                    /**
                     * Returns the name of the field.
                     * @memberof GlideElement
                     * @returns {string} Field name.
                     */
                    getTableName(): string;
                    /**
                     * Determines if the current field has been modified. This functionality is available for all available data types, except Journal fields.
                     * @memberof GlideElement
                     * @returns {boolean} True if the fields have been changed, false if the field has not.
                     * @description 
                     */
                    changes(): boolean;
                    /**
                     * Determines if the previous value of the current field matches the specified object.
                     * @memberof GlideElement
                     * @param {*} o - An object value to check against the previous value of the current field.
                     * @returns {boolean} True if the previous value matches, false if it does not.
                     * @description 
                     */
                    changesFrom(o: any): boolean;
                    /**
                     * Determines if the new value of a field, after a change, matches the specified object.
                     * @memberof GlideElement
                     * @param {*} o - An object value to check against the new value of the current field.
                     * @returns {boolean} True if the previous value matches, false if it does not.
                     * @description 
                     */
                    changesTo(o: any): boolean;
                    /**
                     * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
                     * @memberof GlideElement
                     * @returns {number} Number of milliseconds since January 1, 1970, 00:00:00 GMT.
                     */
                    dateNumericValue(): number;
                    /**
                     * Returns the Boolean value of the specified attribute from the dictionary.
                     * @memberof GlideElement
                     * @param {string} attributeName - Attribute name
                     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
                     * @description 
                     */
                    getBooleanAttribute(attributeName: string): boolean;
                    /**
                     * Generates a choice list for a field.
                     * @memberof GlideElement
                     * @param {string} [dependent] - A dependent value
                     * @returns {Array<*>} An array list of choices.
                     */
                    getChoices(dependent?: string): any[];
                    /**
                     * Returns the choice label for the current choice.
                     * @memberof GlideElement
                     * @returns {string} The selected choice's label.
                     * @description 
                     */
                    getChoiceValue(): string;
                    /**
                     * Returns the clear text value for Password (2 way encrypted) fields in scoped applications.
                     * @memberof GlideElement
                     * @returns {string} The clear text password.
                     */
                    getDecryptedValue(): string;
                    /**
                     * Gets the formatted display value of the field.
                     * @memberof GlideElement
                     * @param {number} [maxCharacters] - Maximum characters desired
                     * @returns {string} The display value of the field.
                     */
                    getDisplayValue(maxCharacters?: number): string;
                    /**
                     * Returns the phone number in international format.
                     * @memberof GlideElement
                     * @returns {string} The phone number in international format.
                     */
                    getGlobalDisplayValue(): string;
                    /**
                     * Returns the HTML value of a field.
                     * @memberof GlideElement
                     * @param {number} [maxChars] - Maximum number of characters to return.
                     * @returns {string} HTML value for the field.
                     */
                    getHTMLValue(maxChars?: number): string;
                    /**
                     * Returns either the most recent journal entry or all journal entries.
                     * @memberof GlideElement
                     * @param {number} mostRecent - If 1, returns the most recent entry. If -1, returns all journal entries.
                     * @returns {string} For the most recent entry, returns a string that contains the field label, timestamp, and user display name of the journal entry.For all journal entries, returns the same information for all journal entries ever entered as a single string with each entry delimited by "\n\n".
                     */
                    getJournalEntry(mostRecent: number): string;
                    /**
                     * Determines if a field is null.
                     * @memberof GlideElement
                     * @returns {boolean} True if the field is null or an empty string, false if not.
                     */
                    nil(): boolean;
                    /**
                     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
                     * @memberof GlideElement
                     * @param {number} milliseconds - Number of milliseconds since 1/1/1970
                     * @description 
                     */
                    setDateNumericValue(milliseconds: number): void;
                    /**
                     * Sets the display value of the field.
                     * @memberof GlideElement
                     * @param {*} value - The value to set for the field.
                     */
                    setDisplayValue(value: any): void;
                    /**
                     * Adds an error message. Available in Fuji patch 3.
                     * @memberof GlideElement
                     * @param {string} errorMessage - The error message.
                     */
                    setError(errorMessage: string): void;
                    /**
                     * Sets the field to the specified phone number.
                     * @memberof GlideElement
                     * @param {*} phoneNumber - The phone number to set. This can be in either the international or local format.
                     * @param {boolean} strict - When true, specifies that the number specified must match the correct format. When false, the system attempts to correct an improperly formatted phone number.
                     * @returns {boolean} True if the value was set.
                     * @description 
                     */
                    setPhoneNumber(phoneNumber: any, strict: boolean): boolean;
                    /**
                     * Sets the value of a field.
                     * @memberof GlideElement
                     * @param {*} value - Object value to set the field to.
                     * @description 
                     */
                    setValue(value: any): void;
                }
                export class GlideElement extends $$element.StringBased<string, GlideElement, string> { protected constructor(); }
            }
            export namespace glideobject {
                export interface IGlideObject {
                    handlesChangeDetection(): $$rhino.Boolean;
                    handlesPreviousValueTracking(): $$rhino.Boolean;
                    handlesDefaultValue(): $$rhino.Boolean;
                    getPreviousValue(): java.lang.String;
                    changes(): $$rhino.Boolean;
                    wasChangedInStream(): $$rhino.Boolean;
                    isValid(bln: $$rhino.Boolean): $$rhino.Boolean;
                    getErrorMsg(): java.lang.String;
                    hasChoices(): $$rhino.Boolean;
                    getChoices(cl: choice.ChoiceList): void;
                    getTableName(): java.lang.String;
                    setValue(o: java.lang.Object): void;
                    setDisplayValue(string: java.lang.String): void;
                    getDisplayValue(): java.lang.String;
                    getValue(): java.lang.String;
                    getStorageValue(): java.lang.String;
                    getInitialValue(): java.lang.String
                    setInitialValue(string: java.lang.String): void;
                    setElement(ge: script.GlideElement): void;
                    getHTMLValue(i?: $$rhino.Number): java.lang.String;
                    setDefaultValue(o: java.lang.Object): void;
                }
                export class AGlideObject implements IGlideObject {
                    handlesDefaultValue(): $$rhino.Boolean;
                    handlesChangeDetection(): $$rhino.Boolean;
                    handlesPreviousValueTracking(): $$rhino.Boolean;
                    getPreviousValue(): java.lang.String;
                    changes(): $$rhino.Boolean;
                    wasChangedInStream(): $$rhino.Boolean;
                    isValid(mandatoryApplies: $$rhino.Boolean): $$rhino.Boolean;
                    getErrorMsg(): java.lang.String;
                    hasChoices(): $$rhino.Boolean;
                    getChoices(cl: choice.ChoiceList): void;
                    copyAll(from: choice.ChoiceList, to: choice.ChoiceList): void;
                    getTableName(): java.lang.String;
                    setValue(o: java.lang.Object): void;
                    setDisplayValue(string: java.lang.String): void;
                    setDefaultValue(o: java.lang.Object): void;
                    getDisplayValue(): java.lang.String;
                    getValue(): java.lang.String;
                    getStorageValue(): java.lang.String;
                    getInitialValue(): java.lang.String;
                    setInitialValue(string: java.lang.String): void;
                    setElement(ge: script.GlideElement): void;
                    getHTMLValue(i?: $$rhino.Number): java.lang.String;
                }
                export class GlideObject extends AGlideObject {
                    setValue(value: java.lang.Object): void;
                    setDisplayValue(value: java.lang.String): void;
                    getDisplayValue(): java.lang.String;
                    getValue(): java.lang.String;
                    getInitialValue(): java.lang.String;
                }
            }
        }
        export namespace glideapp {
            export namespace questionset {
                export class Question {
                    static readonly YES_NO: 1;
                    static readonly TEXTAREA: 2;
                    static readonly RADIO_CHOICES: 3;
                    static readonly LIKERT_SCALE: 4;
                    static readonly CHOICE_LIST: 5;
                    static readonly TEXTFIELD: 6;
                    static readonly CHECKBOX: 7;
                    static readonly REFERENCE: 8;
                    static readonly DATE: 9;
                    static readonly DATE_TIME: 10;
                    static readonly LABEL: 11;
                    static readonly BREAK: 12;
                    static readonly RENDER_MACRO: 14;
                    static readonly RENDER_UI_PAGE: 15;
                    static readonly WIDE_TEXTFIELD: 16;
                    static readonly RENDER_MACRO_WITH_LABEL: 17;
                    static readonly LOOKUP_SELECT_BOX: 18;
                    static readonly CONTAINER_START: 19;
                    static readonly CONTAINER_END: 20;
                    static readonly LIST_COLLECTOR: 21;
                    static readonly LOOKUP_RADIO_CHOICES: 22;
                    static readonly HTML: 23;
                    static readonly CONTAINER_SPLIT: 24;
                    static readonly MASKED: 25;
                    static readonly EMAIL: 26;
                    static readonly URL: 27;
                    static readonly IP_ADDRESS: 28;
                    static readonly DURATION: 29;
                    static readonly TABLE_QUESTION: 30;
                    static readonly TYPE_DEFAULT: 2;
                    static readonly UI_PAGE: "ui_page";
                    static readonly MACRO: "macro";
                    isValueEmpty(): $$rhino.Boolean;
                    isVariableEditor(): $$rhino.Boolean;
                    getSet(): QuestionSet;
                    getDisplayValue(): $$rhino.String;
                    setDisplayValue(value: $$rhino.String): void;
                    canRead(): $$rhino.Boolean;
                    canWrite(): $$rhino.Boolean;
                    canCreate(): $$rhino.Boolean;
                    getMode(): $$rhino.Number;
                    isReadOnly(): $$rhino.Boolean;
                    getName(): $$rhino.String;
                    setId(): $$rhino.String;
                    getLabel(): $$rhino.String;
                    getMaxLength(): $$rhino.Number;
                    getValue(): $$rhino.String;
                    getInitialValue(): $$rhino.String;
                    setValue(value: $$rhino.String): void;
                    getExampleText(): $$rhino.String;
                    getTooltip(): $$rhino.String;
                    getHelpTag(): $$rhino.String;
                    getHelpText(): $$rhino.String;
                    getCreateRoles(): $$rhino.String;
                    getReadRoles(): $$rhino.String;
                    getWriteRoles(): $$rhino.String;
                    getType(): $$rhino.Number;
                    getOrder(): $$rhino.Number;
                    getCategory(): $$rhino.String;
                    isMandatory(): $$rhino.Boolean;
                    setMandatory(value: $$rhino.Boolean): void;
                    isShowHelp(): $$rhino.Boolean;
                    isDoNotSelectFirst(): $$rhino.Boolean;
                    getScopeID(): $$rhino.String;
                    getED(): GlideElementDescriptor;
                    hasPricingImplications(): $$rhino.Boolean;
                    getDefault(): $$rhino.String;
                    isIncludeNone(): $$rhino.Boolean;
                    getMacro(): $$rhino.String;
                    getSummaryMacro(): $$rhino.String;
                    getPortalWidget(): $$rhino.String;
                    getUIPage(): $$rhino.String;
                    getLookupLabel(): $$rhino.String;
                    getLookupTable(): $$rhino.String;
                    getChoiceTable(): $$rhino.String;
                    getChoiceField(): $$rhino.String;
                    isLookupUnique(): $$rhino.Boolean;
                    getLookupValue(): $$rhino.String;
                    getListTable(): $$rhino.String;
                    isVisibleSummary(): $$rhino.Boolean;
                    isVisibleGuide(): $$rhino.Boolean;
                    isVisibleStandalone(): $$rhino.Boolean;
                    getDirection(): $$rhino.String;
                    getAttributes(): $$rhino.String;
                    getInstructions(): $$rhino.String;
                    isNumeric(): $$rhino.Boolean;
                    isDate(): $$rhino.Boolean;
                    getQuestionSummary(): java.util.Map<any, any>;
                    getVariableWidth(): $$rhino.String;
                    getParentContainerID(): $$rhino.String;
                    isActive(): $$rhino.Boolean;
                    getCatalogItem(): $$rhino.String;
                }
                export class QuestionSet {
                    getQuestion(): java.util.List<Question>;
                }
                export class AbstractChoiceListQuestion extends Question {
                    getChoiceList(): GlideChoiceList;
                }
                export class YesNoQuestion extends Question {
                    getYesNoList(): GlideChoiceList;
                }
                export class ListCollectorQuestion extends Question {
                    getType(): 21;
                    getTemplate(): $$rhino.String;
                    getListTable(): $$rhino.String;
                    getReferenceQualifier(): $$rhino.String;
                }
                export class ReferenceQuestion extends Question {
                    getType(): 8;
                    getReference(): $$rhino.String;
                    getReferenceQualifier(): $$rhino.String;
                    getReferenceQualifierType(): $$rhino.String;
                    getVariableAttribute(defaultValue: $$rhino.String, attribute: $$rhino.String): $$rhino.String;
                }
            }
        }
    }
}

/**
 * Neither this namespace, nor types within it are defined in the server-side ServiceNow scripting environment.
 * @summary Type definitions for Server-side object definitions.
 * @namespace $$snClass
 */
declare namespace $$snClass {
    /**
     * Base interface for custom class definitions
     * @export
     * @interface ICustomClassBase
     * @template B - The base class type.
     * @template N - The name of the custom class type.
     */
    export interface ICustomClassBase<B extends ICustomClassBase<B, N>, N extends string> {
        /**
         * The type name of the class.
         * @type {N}
         */
        type: N;
    }

    //#region Prototype definitions

    /**
     * Prototype for objects whose constructor has no arguments.
     * @interface ICustomClassPrototype0
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype (self-referencing type)
     * @template N - The value of the name property for objects constructed with this prototype.
     */
     export interface ICustomClassPrototype0<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype0<B, P, N>, N extends string> extends ICustomClassBase<B, N> {
        /**
         * Called by {@see Class#create} to initialize the newly instantiated object
         * @this {P} The current "this" object.
         */
        initialize(this: P): void;
    }

    /**
     * Prototype for objects whose constructor has one argument.
     * @interface ICustomClassPrototype1
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype (self-referencing type)
     * @template N - The value of the type property for objects constructed with this prototype.
     * @template A - The argument type.
     */
     export interface ICustomClassPrototype1<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype1<B, P, N, A>, N extends string, A> extends ICustomClassBase<B, N> {
        /**
         * Called by {@see Class#create} to initialize the newly instantiated object
         * @this {P} The current "this" object.
         * @param {A} arg - The argument provided to the constructor.
         */
        initialize(this: P, arg: A): void;
    }

    /**
     * Prototype for objects whose constructor has 2 arguments.
     * @interface ICustomClassPrototype2
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype (self-referencing type)
     * @template N - The value of the type property for objects constructed with this prototype.
     * @template A0 - The first argument type.
     * @template A1 - The second argument type.
     */
     export interface ICustomClassPrototype2<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype2<B, P, N, A0, A1>, N extends string, A0, A1> extends ICustomClassBase<B, N> {
        /**
         * Called by {@see Class#create} to initialize the newly instantiated object
         * @this {P} The current "this" object.
         * @param {A0} arg0 - The first argument provided to the constructor.
         * @param {A1} arg1 - The second argument provided to the constructor.
         */
        initialize(this: P, arg0: A0, arg1: A1): void;
    }

    /**
     * Prototype for objects whose constructor has 3 arguments.
     * @interface ICustomClassPrototype3
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype (self-referencing type)
     * @template N - The value of the type property for objects constructed with this prototype.
     * @template A0 - The first argument type.
     * @template A1 - The second argument type.
     * @template A2 - The third argument type.
     */
     export interface ICustomClassPrototype3<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype3<B, P, N, A0, A1, A2>, N extends string, A0, A1, A2> extends ICustomClassBase<B, N> {
        /**
         * Called by {@see Class#create} to initialize the newly instantiated object
         * @this {P} The current "this" object.
         * @param {A0} arg0 - The first argument provided to the constructor.
         * @param {A1} arg1 - The second argument provided to the constructor.
         * @param {A2} arg2 - The third argument provided to the constructor.
         */
        initialize(this: P, arg0: A0, arg1: A1, arg2: A2): void;
    }

    /**
     * Prototype for objects whose constructor has 4 arguments.
     * @interface ICustomClassPrototype4
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype (self-referencing type)
     * @template N - The value of the type property for objects constructed with this prototype.
     * @template A0 - The first argument type.
     * @template A1 - The second argument type.
     * @template A2 - The third argument type.
     * @template A3 - The fourth argument type.
     */
     export interface ICustomClassPrototype4<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototype4<B, P, N, A0, A1, A2, A3>, N extends string, A0, A1, A2, A3> extends ICustomClassBase<B, N> {
        /**
         * Called by {@see Class#create} to initialize the newly instantiated object
         * @this {P} The current "this" object.
         * @param {A0} arg0 - The first argument provided to the constructor.
         * @param {A1} arg1 - The second argument provided to the constructor.
         * @param {A2} arg2 - The third argument provided to the constructor.
         * @param {A3} arg3 - The fourth argument provided to the constructor.
         */
        initialize(this: P, arg0: A0, arg1: A1, arg2: A2, arg3: A3): void;
    }

    /**
     * Prototype for objects whose constructor has a variable nubmer of arguments.
     * @interface ICustomClassPrototypeN
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype (self-referencing type)
     * @template N - The value of the type property for objects constructed with this prototype.
     */
     export interface ICustomClassPrototypeN<B extends ICustomClassBase<B, N>, P extends B & ICustomClassPrototypeN<B, P, N>, N extends string> extends ICustomClassBase<B, N> {
        /**
         * Called by {@see Class#create} to initialize the newly instantiated object
         * @this {P} The current "this" object.
         * @param {...any[]} args- The arguments provided to the constructor.
         */
        initialize(this: P, ...args: any[]): void;
    }

    // #endregion

    //#region Constructor definitions

    /**
     * A class constructor that has no arguments.
     * @interface CustomClassConstructor0
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype.
     * @template I - The constructed object type.
     */
     export interface CustomClassConstructor0<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype0<B, P, string>, I extends B> {
        /**
         * Creates an instance of CustomClassConstructor0.
         * @param {A} arg - The constructor argument.
         */
        new(): I;

        /**
         * Creates an instance of CustomClassConstructor0.
         * @param {A} arg - The constructor argument.
         */
        (): I;

        /**
         * The prototype that will be used to create the new object.
         * @type {P}
         */
        prototype: P;
    }

    /**
     * A class constructor that has 1 argument.
     * @interface CustomClassConstructor1
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype.
     * @template I - The constructed object type.
     * @template A - The constructor argument type.
     */
     export interface CustomClassConstructor1<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype1<B, P, string, A>, I extends B, A> {
        /**
         * Creates an instance of CustomClassConstructor1.
         * @param {A} arg - The constructor argument.
         * @returns {I} - The new object instance.
         */
        new(arg: A): I;

        /**
         * Creates an instance of CustomClassConstructor1.
         * @param {A} arg - The constructor argument.
         * @returns {I} - The new object instance.
         */
        (arg: A): I;

        /**
         * The prototype that will be used to create the new object.
         * @type {P}
         */
        prototype: P;
    }

    /**
     * A class constructor that has 2 arguments.
     * @interface CustomClassConstructor2
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype.
     * @template I - The constructed object type.
     * @template A0 - The argument type for the first constructor argument.
     * @template A1 - The argument type for the second constructor argument.
     */
     export interface CustomClassConstructor2<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype2<B, P, string, A0, A1>, I extends B, A0, A1> {
        /**
         * Creates an instance of CustomClassConstructor2.
         * @param {A0} arg0 - The first constructor argument.
         * @param {A1} arg1 - The second constructor argument.
         * @returns {I} - The new object instance.
         */
        new(arg0: A0, arg1: A1): I;

        /**
         * Creates an instance of CustomClassConstructor2.
         * @param {A0} arg0 - The first constructor argument.
         * @param {A1} arg1 - The second constructor argument.
         * @returns {I} - The new object instance.
         */
        (arg0: A0, arg1: A1): I;

        /**
         * The prototype that will be used to create the new object.
         * @type {P}
         */
        prototype: P;
    }

    /**
     * A class constructor that has 3 arguments.
     * @interface CustomClassConstructor3
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype.
     * @template I - The constructed object type.
     * @template A0 - The argument type for the first constructor argument.
     * @template A1 - The argument type for the second constructor argument.
     * @template A2 - The argument type for the third constructor argument.
     */
     export interface CustomClassConstructor3<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype3<B, P, string, A0, A1, A2>, I extends B, A0, A1, A2> {
        /**
         * Creates an instance of CustomClassConstructor3.
         * @param {A0} arg0 - The first constructor argument.
         * @param {A1} arg1 - The second constructor argument.
         * @param {A2} arg2 - The third constructor argument.
         * @returns {I} - The new object instance.
         */
        new(arg0: A0, arg1: A1, arg2: A2): I;

        /**
         * Creates an instance of CustomClassConstructor3.
         * @param {A0} arg0 - The first constructor argument.
         * @param {A1} arg1 - The second constructor argument.
         * @param {A2} arg2 - The third constructor argument.
         * @returns {I} - The new object instance.
         */
        (arg0: A0, arg1: A1, arg2: A2): I;

        /**
         * The prototype that will be used to create the new object.
         * @type {P}
         */
        prototype: P;
    }

    /**
     * A class constructor that has 4 arguments.
     * @interface CustomClassConstructor4
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype.
     * @template I - The constructed object type.
     * @template A0 - The argument type for the first constructor argument.
     * @template A1 - The argument type for the second constructor argument.
     * @template A2 - The argument type for the third constructor argument.
     * @template A3 - The argument type for the fourth constructor argument.
     */
     export interface CustomClassConstructor4<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototype4<B, P, string, A0, A1, A2, A3>, I extends B, A0, A1, A2, A3> {
        /**
         * Creates an instance of CustomClassConstructor4.
         * @param {A0} arg0 - The first constructor argument.
         * @param {A1} arg1 - The second constructor argument.
         * @param {A2} arg2 - The third constructor argument.
         * @param {A3} arg3 - The fourth constructor argument.
         * @returns {I} - The new object instance.
         */
        new(arg0: A0, arg1: A1, arg2: A2, arg3: A3): I;

        /**
         * Creates an instance of CustomClassConstructor4.
         * @param {A0} arg0 - The first constructor argument.
         * @param {A1} arg1 - The second constructor argument.
         * @param {A2} arg2 - The third constructor argument.
         * @param {A3} arg3 - The fourth constructor argument.
         * @returns {I} - The new object instance.
         */
        (arg0: A0, arg1: A1, arg2: A2, arg3: A3): I;

        /**
         * The prototype that will be used to create the new object.
         * @type {P}
         */
        prototype: P;
    }

    /**
     * A class constructor that has a variable number arguments.
     * @interface CustomClassConstructorN
     * @template B - The base type shared by the prototype and the object instance.
     * @template P - The type of prototype.
     * @template I - The constructed object type.
     *
     */
     export interface CustomClassConstructorN<B extends ICustomClassBase<B, string>, P extends B & ICustomClassPrototypeN<B, P, string>, I extends B> {
        /**
         * Creates an instance of CustomClassConstructorN.
         * @param {...any[]} args - The constructor arguments.
         * @returns {I} - The new object instance.
         */
        new(...args: any[]): I;

        /**
         * Creates an instance of CustomClassConstructorN.
         * @param {...any[]} args - The constructor arguments.
         * @returns {I} - The new object instance.
         */
        (): I;

        /**
         * The prototype that will be used to create the new object.
         * @type {P}
         */
        prototype: P;
    }

    // #endregion
}

interface Object {
    /** The initial value of Object.prototype.constructor is the standard built-in Object constructor. */
    constructor: Function;

    /** Returns a string representation of an object. */
    toString(): string;

    /** Returns a date converted to a string using the current locale. */
    toLocaleString(): string;

    /** Returns the primitive value of the specified object. */
    valueOf(): Object;

    /**
     * Determines whether an object has a property with the specified name.
     * @param v A property name.
     */
    hasOwnProperty(v: string): boolean;

    /**
     * Determines whether an object exists in another object's prototype chain.
     * @param v Another object whose prototype chain is to be checked.
     */
    isPrototypeOf(v: Object): boolean;

    /**
     * Determines whether a specified property is enumerable.
     * @param v A property name.
     */
    propertyIsEnumerable(v: string): boolean;

    extendsObject<B, P>(baseType: B, protoType: P) : B & P;
}

declare var Class: {
    /**
     * Creates a ServiceNow-compatible object constructor.
     * @template B - The base type shared for the prototype and the object instance.
     * @template C - The constructor type.
     * @returns {C} - The ServiceNow-compatible object constructor.
     */
    create<B extends $$snClass.ICustomClassBase<B, string>, C extends $$snClass.CustomClassConstructor0<B, any, any> | $$snClass.CustomClassConstructor1<B, any, any, any> |
        $$snClass.CustomClassConstructor2<B, any, any, any, any> | $$snClass.CustomClassConstructor3<B, any, any, any, any, any> | $$snClass.CustomClassConstructor4<B, any, any, any, any, any, any> |
        $$snClass.CustomClassConstructorN<B, any, any>>(): C;

    create2<C extends $$snClass.CustomClassConstructor0<any, $$snClass.ICustomClassPrototype0<any, any, string>, $$snClass.ICustomClassPrototype0<any, any, string>> |
        $$snClass.CustomClassConstructor1<any, $$snClass.ICustomClassPrototype1<any, any, string, any>, $$snClass.ICustomClassPrototype1<any, any, string, any>, any> |
        $$snClass.CustomClassConstructor2<any, $$snClass.ICustomClassPrototype2<any, any, string, any, any>, $$snClass.ICustomClassPrototype2<any, any, string, any, any>, any, any> |
        $$snClass.CustomClassConstructor3<any, $$snClass.ICustomClassPrototype3<any, any, string, any, any, any>, $$snClass.ICustomClassPrototype3<any, any, string, any, any, any>, any, any, any> |
        $$snClass.CustomClassConstructor4<any, $$snClass.ICustomClassPrototype4<any, any, string, any, any, any, any>, $$snClass.ICustomClassPrototype4<any, any, string, any, any, any, any>, any, any, any, any> |
        $$snClass.CustomClassConstructorN<any, $$snClass.ICustomClassPrototypeN<any, any, string>, $$snClass.ICustomClassPrototypeN<any, any, string>>>(): C;
}

declare class GlideChoiceList extends Packages.com.glide.choice.ChoiceList {
    constructor();
}
declare class GlideChoice extends Packages.com.glide.choice.Choice {
    constructor(value: $$rhino.String, label: $$rhino.String);
}