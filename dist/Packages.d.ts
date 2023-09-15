/// <reference path="$$rhino.d.ts" />

declare type GlideRecordOperationType = "delete" | "insert" | "update";

/**
 * Type representing Java packages.
 * Since access to Packages.* is not allowed in scoped apps, all classes will be represented as interfaces.
 * This was done to avoid a scenario where the source code may reference a Java class using Packages.* and transpile
 * successfully, but fail when used in ServiceNow.
 * @namespace Packages
 */
declare namespace Packages {
    /**
     * Represents a Java array.
     * @typedef {(ArrayLike<E> & java.lang.Object)} Array
     * @template E - The type of elements in this array.
     */
    export type Array<E> = ArrayLike<E> & java.lang.Object;

    export namespace java {
        export namespace io {
            /**
             * Represents the "InputStream" class.
             * @export
             * @interface InputStream
             * @extends {java.lang.Object}
             */
            export interface InputStream extends java.lang.Object {
                read(): $$rhino.Number;
                close(): void;
                reset(): void;
            }
        }

        export namespace lang {
            /**
             * Represents the base Java object class.
             * @export
             * @interface Object
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Object.html}
             */
            export interface Object {
                /**
                 * Indicates whether some other object is "equal to" this one.
                 * @param obj {*}
                 * @returns {$$rhino.Boolean}
                 */
                equals(obj: any): $$rhino.Boolean;

                /**
                 * Returns a hash code value for the object.
                 * @returns {$$rhino.Number}
                 */
                hashCode(): $$rhino.Number;

                /**
                 * Returns a string representation of the object.
                 * @returns {$$rhino.String}
                 */
                toString(): $$rhino.String;
            }

            /**
             * This interface imposes a total ordering on the objects of each class that implements it.
             * @export
             * @interface Comparable
             * @template T - The type of objects that this object may be compared to.
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Comparable.html}
             */
            export interface Comparable<T> {
                /**
                 * Compares this object with the specified object for order.
                 * @param o {T} The object to be compared.
                 * @returns {$$rhino.Number} A negative value if this object is less than the specified object;
                 * A non-zero positive number if this object is grater than the specified object;
                 * otherwise, zero if this object is equal to the specified object.
                 */
                compareTo(o: T): $$rhino.Number;
            }

            /**
             * A readable sequence of char values.
             * @export
             * @interface CharSequence
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/CharSequence.html}
             */
            export interface CharSequence {
                /**
                 * Returns the char value at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Character}
                 */
                charAt(index: $$rhino.Number): Character;

                /**
                 * Returns the length of this character sequence.
                 * @returns {$$rhino.Number}
                 */
                length(): $$rhino.Number;

                /**
                 * Returns a new CharSequence that is a subsequence of this sequence.
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @returns {CharSequence}
                 */
                subSequence(start: $$rhino.Number, end: $$rhino.Number): CharSequence;

                /**
                 * Returns a string containing the characters in this sequence in the same order as this sequence.
                 * @returns {$$rhino.String}
                 */
                toString(): $$rhino.String;
            }

            /**
             * Allows an object to be the target of the "for-each loop" statement.
             * @export
             * @interface Iterable
             * @template T - The type of elements returned by the iterator.
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Iterable.html}
             */
            export interface Iterable<T> {
                /**
                 * Returns an iterator over the elements in this collection in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): util.Iterator<T>;
            }

            /**
             * Represents a java.lang.Character class or the primitive java char type.
             * @export
             * @interface Character
             * @extends {Object}
             * @extends {Comparable<Character>}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Character.html}
             */
            export interface Character extends Object, Comparable<Character> {
                /**
                 * Returns the value of this Character object.
                 * @returns {Character}
                 */
                charValue(): Character;

                /**
                 * Compares two Character objects numerically.
                 * @param anotherCharacter {$$rhino.String}
                 * @returns {$$rhino.Number}
                 */
                compareTo(anotherCharacter: $$rhino.StringLike): $$rhino.Number;
            }

            /**
             * Represents the java.lang.String class.
             * @export
             * @interface String
             * @extends {Object}
             * @extends {Comparable<String>}
             * @extends {CharSequence}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/String.html}
             */
            export interface String extends Object, Comparable<String>, CharSequence {
                /**
                 * Returns the char value at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Character}
                 */
                charAt(index: $$rhino.Number): Character;

                /**
                 * Returns the character (Unicode code point) at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                codePointAt(index: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the character (Unicode code point) before the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                codePointBefore(index: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the number of Unicode code points in the specified text range of this String.
                 * @param beginIndex {$$rhino.Number}
                 * @param endIndex {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                codePointCount(beginIndex: $$rhino.Number, endIndex: $$rhino.Number): $$rhino.Number;

                /**
                 * Compares two strings lexicographically.
                 * @param anotherString {$$rhino.String}
                 * @returns {$$rhino.Number}
                 */
                compareTo(anotherString: $$rhino.String): $$rhino.Number;

                /**
                 * Compares two strings lexicographically, ignoring case differences.
                 * @param str {$$rhino.String}
                 * @returns {$$rhino.Number}
                 */
                compareToIgnoreCase(str: $$rhino.String): $$rhino.Number;

                /**
                 * Concatenates the specified string to the end of this string.
                 * @param str {$$rhino.String}
                 * @returns {$$rhino.String}
                 */
                concat(str: $$rhino.String): $$rhino.String;

                /**
                 * Returns true if and only if this string contains the specified sequence of char values.
                 * @param s {CharSequence}
                 * @returns {$$rhino.Boolean}
                 */
                contains(s: CharSequence): $$rhino.Boolean;

                /**
                 * Compares this string to the specified CharSequence.
                 * @param cs {CharSequence}
                 * @returns {$$rhino.Boolean}
                 */
                contentEquals(cs: CharSequence): $$rhino.Boolean;

                /**
                 * Compares this string to the specified StringBuffer.
                 * @param sb {StringBuffer}
                 * @returns {$$rhino.Boolean}
                 */
                contentEquals(sb: StringBuffer): $$rhino.Boolean;

                /**
                 * Tests if this string ends with the specified suffix.
                 * @param suffix {$$rhino.String}
                 * @returns {$$rhino.Boolean}
                 */
                endsWith(suffix: $$rhino.String): $$rhino.Boolean;

                /**
                 * Compares this String to another String, ignoring case considerations.
                 * @param anotherString {$$rhino.String}
                 * @returns {$$rhino.Boolean}
                 */
                equalsIgnoreCase(anotherString: $$rhino.String): $$rhino.Boolean;

                /**
                 * Encodes this String into a sequence of bytes using the platform's default charset, storing the result into a new byte array.
                 * @returns {Array<Byte>}
                 */
                getBytes(): Array<Byte>;

                /**
                 * Encodes this String into a sequence of bytes using the named charset, storing the result into a new byte array.
                 * @param charsetName {$$rhino.String}
                 * @returns {Array<Byte>}
                 */
                getBytes(charsetName: $$rhino.String): Array<Byte>;

                /**
                 * Copies characters from this string into the destination character array.
                 * @param srcBegin {$$rhino.Number}
                 * @param srcEnd {$$rhino.Number}
                 * @param dst {Array<$$rhino.String>}
                 * @param dstBegin {$$rhino.Number}
                 */
                getChars(srcBegin: $$rhino.Number, srcEnd: $$rhino.Number, dst: Array<$$rhino.String>, dstBegin: $$rhino.Number): void;

                /**
                 * Returns the index within this string of the first occurrence of the specified character.
                 * @param ch {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                indexOf(ch: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the index within this string of the first occurrence of the specified character, starting the search at the specified index.
                 * @param ch {$$rhino.Number}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                indexOf(ch: $$rhino.Number, fromIndex: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the index within this string of the first occurrence of the specified substring.
                 * @param str {$$rhino.String}
                 * @returns {$$rhino.Number}
                 */
                indexOf(str: $$rhino.String): $$rhino.Number;

                /**
                 * Returns the index within this string of the first occurrence of the specified substring, starting at the specified index.
                 * @param str {$$rhino.String}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                indexOf(str: $$rhino.String, fromIndex: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns a canonical representation for the string object.
                 * @returns {$$rhino.String}
                 */
                intern(): $$rhino.String;

                /**
                 * Returns true if, and only if, length() is 0.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

                /**
                 * Returns the index within this string of the last occurrence of the specified character.
                 * @param ch {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                lastIndexOf(ch: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the index within this string of the last occurrence of the specified character, searching backward starting at the specified index.
                 * @param ch {$$rhino.Number}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                lastIndexOf(ch: $$rhino.Number, fromIndex: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the index within this string of the last occurrence of the specified substring.
                 * @param str {$$rhino.String}
                 * @returns {$$rhino.Number}
                 */
                lastIndexOf(str: $$rhino.String): $$rhino.Number;

                /**
                 * Returns the index within this string of the last occurrence of the specified substring, searching backward starting at the specified index.
                 * @param str {$$rhino.String}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                lastIndexOf(str: $$rhino.String, fromIndex: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the length of this string.
                 * @returns {$$rhino.Number}
                 */
                length(): $$rhino.Number;

                /**
                 * Tells whether or not this string matches the given regular expression.
                 * @param regex {$$rhino.String}
                 * @returns {$$rhino.Boolean}
                 */
                matches(regex: $$rhino.String): $$rhino.Boolean;

                /**
                 * Returns the index within this String that is offset from the given index by codePointOffset code points.
                 * @param index {$$rhino.Number}
                 * @param codePointOffset {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                offsetByCodePoints(index: $$rhino.Number, codePointOffset: $$rhino.Number): $$rhino.Number;

                /**
                 * Tests if two string regions are equal.
                 * @param ignoreCase {$$rhino.Boolean}
                 * @param toffset {$$rhino.Number}
                 * @param other {$$rhino.String}
                 * @param ooffset {$$rhino.Number}
                 * @param len {$$rhino.Number}
                 * @returns {$$rhino.Boolean}
                 */
                regionMatches(ignoreCase: $$rhino.Boolean, toffset: $$rhino.Number, other: $$rhino.String, ooffset: $$rhino.Number, len: $$rhino.Number): $$rhino.Boolean;

                /**
                 * Tests if two string regions are equal.
                 * @param toffset {$$rhino.Number}
                 * @param other {$$rhino.String}
                 * @param ooffset {$$rhino.Number}
                 * @param len {$$rhino.Number}
                 * @returns {$$rhino.Boolean}
                 */
                regionMatches(toffset: $$rhino.Number, other: $$rhino.String, ooffset: $$rhino.Number, len: $$rhino.Number): $$rhino.Boolean;

                /**
                 * Returns a new string resulting from replacing all occurrences of oldChar in this string with newChar.
                 * @param oldChar {$$rhino.String}
                 * @param newChar {$$rhino.String}
                 * @returns {$$rhino.String}
                 */
                replace(oldChar: $$rhino.String, newChar: $$rhino.String): $$rhino.String;

                /**
                 * Replaces each substring of this string that matches the literal target sequence with the specified literal replacement sequence.
                 * @param target {CharSequence}
                 * @param replacement {CharSequence}
                 * @returns {$$rhino.String}
                 */
                replace(target: CharSequence, replacement: CharSequence): $$rhino.String;

                /**
                 * Replaces each substring of this string that matches the given regular expression with the given replacement.
                 * @param regex {$$rhino.String}
                 * @param replacement {$$rhino.String}
                 * @returns {$$rhino.String}
                 */
                replaceAll(regex: $$rhino.String, replacement: $$rhino.String): $$rhino.String;

                /**
                 * Replaces the first substring of this string that matches the given regular expression with the given replacement.
                 * @param regex {$$rhino.String}
                 * @param replacement {$$rhino.String}
                 * @returns {$$rhino.String}
                 */
                replaceFirst(regex: $$rhino.String, replacement: $$rhino.String): $$rhino.String;

                /**
                 * Splits this string around matches of the given regular expression.
                 * @param regex {$$rhino.String}
                 * @returns {Array<$$rhino.String>}
                 */
                split(regex: $$rhino.String): Array<$$rhino.String>;

                /**
                 * Splits this string around matches of the given regular expression.
                 * @param regex {$$rhino.String}
                 * @param limit {$$rhino.Number}
                 * @returns {Array<$$rhino.String>}
                 */
                split(regex: $$rhino.String, limit: $$rhino.Number): Array<$$rhino.String>;

                /**
                 * Tests if this string starts with the specified prefix.
                 * @param prefix {$$rhino.String}
                 * @returns {$$rhino.Boolean}
                 */
                startsWith(prefix: $$rhino.String): $$rhino.Boolean;

                /**
                 * Tests if the substring of this string beginning at the specified index starts with the specified prefix.
                 * @param prefix {$$rhino.String}
                 * @param toffset {$$rhino.Number}
                 * @returns {$$rhino.Boolean}
                 */
                startsWith(prefix: $$rhino.String, toffset: $$rhino.Number): $$rhino.Boolean;

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
                 * @returns {$$rhino.String}
                 */
                substring(beginIndex: $$rhino.Number): $$rhino.String;

                /**
                 * Returns a new string that is a substring of this string.
                 * @param beginIndex {$$rhino.Number}
                 * @param endIndex {$$rhino.Number}
                 * @returns {$$rhino.String}
                 */
                substring(beginIndex: $$rhino.Number, endIndex: $$rhino.Number): $$rhino.String;

                /**
                 * Converts this string to a new character array.
                 * @returns {Array<Character>}
                 */
                toCharArray(): Array<Character>;

                /**
                 * Converts all of the characters in this string to lower case using the rules of the default locale.
                 * @returns {$$rhino.String}
                 */
                toLowerCase(): $$rhino.String;

                /**
                 * Converts all of the characters in this string to lower case using the rules of the given Locale.
                 * @param locale {Locale}
                 * @returns {$$rhino.String}
                 */
                toLowerCase(locale: util.Locale): $$rhino.String;

                /**
                 * Converts all of the characters in this string to upper case using the rules of the default locale.
                 * @returns {$$rhino.String}
                 */
                toUpperCase(): $$rhino.String;

                /**
                 * Converts all of the characters in this string to upper case using the rules of the given Locale.
                 * @param locale {Locale}
                 * @returns {$$rhino.String}
                 */
                toUpperCase(locale: util.Locale): $$rhino.String;

                /**
                 * Returns a copy of the string, with leading and trailing whitespace omitted.
                 * @returns {$$rhino.String}
                 */
                trim(): $$rhino.String;
            }

            /**
             * Represents the java.lang.Number class or a primitive java number type.
             * @export
             * @interface Number
             * @extends {Object}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Number.html}
             */
            export interface Number extends Object {
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

            /**
             * Represents the java.lang.Boolean class or the primitive java $$rhino.Boolean type.
             * @export
             * @interface Boolean
             * @extends {Object}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Boolean.html}
             */
            export interface Boolean extends Object {
                /**
                 * Returns the value of this Boolean object as a $$rhino.Boolean primitive.
                 * @returns {$$rhino.Boolean}
                 * @memberof {Boolean}
                 */
                booleanValue(): $$rhino.Boolean;

                /**
                 * Compares this Boolean instance with another.
                 * @param {Boolean} b -
                 * @returns {$$rhino.Number}
                 * @memberof {Boolean}
                 */
                compareTo(b: Boolean): $$rhino.Number;
            }

            /**
             * Represents the java.lang.Integer class or the primitive java int type.
             * @export
             * @interface Integer
             * @extends {Number}
             * @extends {Comparable<Integer>}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Integer.html}
             */
            export interface Integer extends Number, Comparable<Integer> {
                /**
                 * Compares two Integer objects numerically.
                 * @param anotherInteger {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                compareTo(anotherInteger: $$rhino.Number): $$rhino.Number;
            }

            /**
             * Represents the java.lang.Long class or the primitive java long type.
             * @export
             * @interface Long
             * @extends {Number}
             * @extends {Comparable<Long>}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Long.html}
             */
            export interface Long extends Number, Comparable<Long> {
                /**
                 * Compares two Long objects numerically.
                 * @param anotherLong {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                compareTo(anotherLong: $$rhino.Number): $$rhino.Number;
            }

            /**
             * Represents the java.lang.Double class or the primitive java double type.
             * @export
             * @interface Double
             * @extends {Number}
             * @extends {Comparable<Double>}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Double.html}
             */
            export interface Double extends Number, Comparable<Double> {
                /**
                 * Compares two Double objects numerically.
                 * @param anotherDouble {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                compareTo(anotherDouble: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns true if this Double value is infinitely large in magnitude, false otherwise.
                 * @returns {$$rhino.Boolean}
                 */
                isInfinite(): $$rhino.Boolean;

                /**
                 * Returns true if this Double value is a Not-a-Number (NaN), false otherwise.
                 * @returns {$$rhino.Boolean}
                 */
                isNaN(): $$rhino.Boolean;
            }

            /**
             * Represents the java.lang.Byte class or the primitive java byte type.
             * @export
             * @interface Byte
             * @extends {Number}
             * @extends {Comparable<Byte>}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Byte.html}
             */
            export interface Byte extends Number, Comparable<Byte> {
                /**
                 * Compares two Byte objects numerically.
                 * @param anotherByte {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                compareTo(anotherByte: $$rhino.Number): $$rhino.Number;
            }

            /**
             * Represents the java.lang.Float class or the primitive java float type.
             * @export
             * @interface Float
             * @extends {Number}
             * @extends {Comparable<Float>}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Float.html}
             */
            export interface Float extends Number, Comparable<Float> {
                /**
                 * Compares two Float objects numerically.
                 * @param anotherFloat {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                compareTo(anotherFloat: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns true if this Float value is infinitely large in magnitude, false otherwise.
                 * @returns {$$rhino.Boolean}
                 */
                isInfinite(): $$rhino.Boolean;

                /**
                 * Returns true if this Float value is a Not-a-Number (NaN), false otherwise.
                 * @returns {$$rhino.Boolean}
                 */
                isNaN(): $$rhino.Boolean;
            }

            /**
             * Represents the java.lang.Short class or the primitive java short type.
             * @export
             * @interface Short
             * @extends {Number}
             * @extends {Comparable<Short>}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/Short.html}
             */
            export interface Short extends Number, Comparable<Short> {
                /**
                 * Compares two Short objects numerically.
                 * @param anotherShort {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                compareTo(anotherShort: $$rhino.Number): $$rhino.Number;
            }

            /**
             * Represents the java.lang.StringBuffer class.
             * @export
             * @interface StringBuffer
             * @extends {Object}
             * @extends {CharSequence}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/lang/StringBuffer.html}
             */
            export interface StringBuffer extends Object, CharSequence {
                /**
                 * Appends the string representation of the $$rhino.Boolean argument to the sequence.
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
                 * @param str {Array<$$rhino.String>}
                 * @returns {StringBuffer}
                 */
                append(str: Array<$$rhino.String>): StringBuffer;

                /**
                 * Appends the string representation of a subarray of the char array argument to this sequence.
                 * @param str {Array<$$rhino.String>}
                 * @param offset {$$rhino.Number}
                 * @param len {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                append(str: Array<$$rhino.String>, offset: $$rhino.Number, len: $$rhino.Number): StringBuffer;

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
                 * @returns {$$rhino.Number}
                 */
                capacity(): $$rhino.Number;

                /**
                 * Returns the char value in this sequence at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {Character}
                 */
                charAt(index: $$rhino.Number): lang.Character;

                /**
                 * Returns the character (Unicode code point) at the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                codePointAt(index: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the character (Unicode code point) before the specified index.
                 * @param index {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                codePointBefore(index: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the number of Unicode code points in the specified text range of this sequence.
                 * @param beginIndex {$$rhino.Number}
                 * @param endIndex {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                codePointCount(beginIndex: $$rhino.Number, endIndex: $$rhino.Number): $$rhino.Number;

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
                 * @param dst {Array<$$rhino.String>}
                 * @param dstBegin {$$rhino.Number}
                 */
                getChars(srcBegin: $$rhino.Number, srcEnd: $$rhino.Number, dst: Array<$$rhino.String>, dstBegin: $$rhino.Number): void;

                /**
                 * Returns the index within this string of the first occurrence of the specified substring.
                 * @param str {$$rhino.String}
                 * @returns {$$rhino.Number}
                 */
                indexOf(str: $$rhino.String): $$rhino.Number;

                /**
                 * Returns the index within this string of the first occurrence of the specified substring, starting at the specified index.
                 * @param str {$$rhino.String}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                indexOf(str: $$rhino.String, fromIndex: $$rhino.Number): $$rhino.Number;

                /**
                 * Inserts the string representation of the $$rhino.Boolean argument into this sequence.
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
                 * @param str {Array<$$rhino.String>}
                 * @returns {StringBuffer}
                 */
                insert(offset: $$rhino.Number, str: Array<$$rhino.String>): StringBuffer;

                /**
                 * Inserts the string representation of a subarray of the str array argument into this sequence.
                 * @param index {$$rhino.Number}
                 * @param str {Array<$$rhino.String>}
                 * @param offset {$$rhino.Number}
                 * @param len {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                insert(index: $$rhino.Number, str: Array<$$rhino.String>, offset: $$rhino.Number, len: $$rhino.Number): StringBuffer;

                /**
                 * Inserts the specified CharSequence into this sequence.
                 * @param dstOffset {$$rhino.Number}
                 * @param s {CharSequence}
                 * @returns {StringBuffer}
                 */
                insert(dstOffset: $$rhino.Number, s: lang.CharSequence): StringBuffer;

                /**
                 * Inserts a subsequence of the specified CharSequence into this sequence.
                 * @param dstOffset {$$rhino.Number}
                 * @param s {CharSequence}
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @returns {StringBuffer}
                 */
                insert(dstOffset: $$rhino.Number, s: lang.CharSequence, start: $$rhino.Number, end: $$rhino.Number): StringBuffer;

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
                 * @returns {$$rhino.Number}
                 */
                lastIndexOf(str: $$rhino.String): $$rhino.Number;

                /**
                 * Returns the index within this string of the last occurrence of the specified substring.
                 * @param str {$$rhino.String}
                 * @param fromIndex {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                lastIndexOf(str: $$rhino.String, fromIndex: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the length (character count).
                 * @returns {$$rhino.Number}
                 */
                length(): $$rhino.Number;

                /**
                 * Returns the index within this sequence that is offset from the given index by codePointOffset code points.
                 * @param index {$$rhino.Number}
                 * @param codePointOffset {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                offsetByCodePoints(index: $$rhino.Number, codePointOffset: $$rhino.Number): $$rhino.Number;

                /**
                 * Replaces the characters in a substring of this sequence with characters in the specified string.
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
                subSequence(start: $$rhino.Number, end: $$rhino.Number): lang.CharSequence;

                /**
                 * Returns a new string that contains a subsequence of characters currently contained in this character sequence.
                 * @param start {$$rhino.Number}
                 * @returns {$$rhino.String}
                 */
                substring(start: $$rhino.Number): $$rhino.String;

                /**
                 * Returns a new string that contains a subsequence of characters currently contained in this sequence.
                 * @param start {$$rhino.Number}
                 * @param end {$$rhino.Number}
                 * @returns {$$rhino.String}
                 */
                substring(start: $$rhino.Number, end: $$rhino.Number): $$rhino.String;

                /**
                 * Attempts to reduce storage used for the character sequence.
                 */
                trimToSize(): void;
            }
        }

        export namespace util {
            /**
             * Represents a specific geographical, political, or cultural region.
             * @export
             * @interface Locale
             * @extends {lang.Object}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/Locale.html}
             */
            export interface Locale extends java.lang.Object {
                /**
                 * Overrides Cloneable.
                 * @returns {lang.Object}
                 */
                clone(): lang.Object;

                /**
                 * Returns the country/region code for this locale, which should either be the empty string, an uppercase ISO 3166 2-letter code, or a UN M.49 3-digit code.
                 * @returns {$$rhino.String}
                 */
                getCountry(): $$rhino.String;

                /**
                 * Returns a name for the locale's country that is appropriate for display to the user.
                 * @returns {$$rhino.String}
                 */
                getDisplayCountry(): $$rhino.String;

                /**
                 * Returns a name for the locale's country that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {$$rhino.String}
                 */
                getDisplayCountry(inLocale: Locale): $$rhino.String;

                /**
                 * Returns a name for the locale's language that is appropriate for display to the user.
                 * @returns {$$rhino.String}
                 */
                getDisplayLanguage(): $$rhino.String;

                /**
                 * Returns a name for the locale's language that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {$$rhino.String}
                 */
                getDisplayLanguage(inLocale: Locale): $$rhino.String;

                /**
                 * Returns a name for the locale that is appropriate for display to the user.
                 * @returns {$$rhino.String}
                 */
                getDisplayName(): $$rhino.String;

                /**
                 * Returns a name for the locale that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {$$rhino.String}
                 */
                getDisplayName(inLocale: Locale): $$rhino.String;

                /**
                 * Returns a name for the the locale's script that is appropriate for display to the user.
                 * @returns {$$rhino.String}
                 */
                getDisplayScript(): $$rhino.String;

                /**
                 * Returns a name for the locale's script that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {$$rhino.String}
                 */
                getDisplayScript(inLocale: Locale): $$rhino.String;

                /**
                 * Returns a name for the locale's variant code that is appropriate for display to the user.
                 * @returns {$$rhino.String}
                 */
                getDisplayVariant(): $$rhino.String;

                /**
                 * Returns a name for the locale's variant code that is appropriate for display to the user.
                 * @param inLocale {Locale}
                 * @returns {$$rhino.String}
                 */
                getDisplayVariant(inLocale: Locale): $$rhino.String;

                /**
                 * Returns the extension (or private use) value associated with the specified key, or null if there is no extension associated with the key.
                 * @param key {$$rhino.String}
                 * @returns {$$rhino.String}
                 */
                getExtension(key: $$rhino.String): $$rhino.String;

                /**
                 * Returns the set of extension keys associated with this locale, or the empty set if it has no extensions.
                 * @returns {Set<Character>}
                 */
                getExtensionKeys(): Set<java.lang.Character>;

                /**
                 * Returns a three-letter abbreviation for this locale's country.
                 * @returns {$$rhino.String}
                 */
                getISO3Country(): $$rhino.String;

                /**
                 * Returns a three-letter abbreviation of this locale's language.
                 * @returns {$$rhino.String}
                 */
                getISO3Language(): $$rhino.String;

                /**
                 * Returns the language code of this Locale.
                 * @returns {$$rhino.String}
                 */
                getLanguage(): $$rhino.String;

                /**
                 * Returns the script for this locale, which should either be the empty string or an ISO 15924 4-letter script code.
                 * @returns {$$rhino.String}
                 */
                getScript(): $$rhino.String;

                /**
                 * Returns the set of unicode locale attributes associated with this locale, or the empty set if it has no attributes.
                 * @returns {Set<$$rhino.String>}
                 */
                getUnicodeLocaleAttributes(): Set<$$rhino.String>;

                /**
                 * Returns the set of Unicode locale keys defined by this locale, or the empty set if this locale has none.
                 * @returns {Set<$$rhino.String>}
                 */
                getUnicodeLocaleKeys(): Set<$$rhino.String>;

                /**
                 * Returns the Unicode locale type associated with the specified Unicode locale key for this locale.
                 * @param key {$$rhino.String}
                 * @returns {$$rhino.String}
                 */
                getUnicodeLocaleType(key: $$rhino.String): $$rhino.String;

                /**
                 * Returns the variant code for this locale.
                 * @returns {$$rhino.String}
                 */
                getVariant(): $$rhino.String;

                /**
                 * Returns a well-formed IETF BCP 47 language tag representing this locale.
                 * @returns {$$rhino.String}
                 */
                toLanguageTag(): $$rhino.String;
            }

            /**
             * Represents a group of objects, known as its elements
             * @export
             * @interface Collection
             * @extends {lang.Iterable<E>}
             * @template E - The type of elements in this collection.
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/Collection.html}
             */
            export interface Collection<E> extends lang.Iterable<E> {
                /**
                 * Ensures that this collection contains the specified element (optional operation).
                 * @param e {E}
                 * @returns {$$rhino.Boolean}
                 */
                add(e: E): $$rhino.Boolean;

                /**
                 * Adds all of the elements in the specified collection to this collection (optional operation).
                 * @param c {util.Collection<E>}
                 * @returns {$$rhino.Boolean}
                 */
                addAll(c: util.Collection<E>): $$rhino.Boolean;

                /**
                 * Removes all of the elements from this collection (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this collection contains the specified element.
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                contains(o: any): $$rhino.Boolean;

                /**
                 * Returns true if this collection contains all of the elements in the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                containsAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Returns true if this collection contains no elements.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

                /**
                 * Returns an iterator over the elements in this collection.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Removes a single instance of the specified element from this collection, if it is present (optional operation).
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                remove(o: any): $$rhino.Boolean;

                /**
                 * Removes all of this collection's elements that are also contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                removeAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Retains only the elements in this collection that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                retainAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Returns the number of elements in this collection.
                 * @returns {$$rhino.Number}
                 */
                size(): $$rhino.Number;

                /**
                 * Returns an array containing all of the elements in this collection.
                 * @returns {*}
                 */
                toArray(): any;

                /**
                 * Returns a string representation of this collection.
                 * @returns {$$rhino.String}
                 */
                toString(): $$rhino.String;
            }

            /**
             * An iterator over a collection.
             * @export
             * @interface Iterator
             * @template E - The type of elements returned by this iterator.
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/Iterator.html}
             */
            export interface Iterator<E> {
                /**
                 * Returns true if the iteration has more elements.
                 * @returns {$$rhino.Boolean}
                 */
                hasNext(): $$rhino.Boolean;

                /**
                 * Returns the next element in the iteration.
                 * @returns {E}
                 */
                next(): E;

                /**
                 * Removes from the underlying collection the last element returned by this iterator.
                 */
                remove(): void;
            }

            /**
             * An iterator for lists that allows the programmer to traverse the list in either direction, modify the list during iteration, and obtain the iterator's current position in the list.
             * @export
             * @interface ListIterator
             * @extends {Iterator<E>}
             * @template E - The type of elements returned by this iterator.
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/ListIterator.html}
             */
            export interface ListIterator<E> extends Iterator<E> {
                /**
                 * Inserts the specified element into the list (optional operation).
                 * @param e {E}
                 */
                add(e: E): void;

                /**
                 * Returns true if this list iterator has more elements when traversing the list in the forward direction.
                 * @returns {$$rhino.Boolean}
                 */
                hasNext(): $$rhino.Boolean;

                /**
                 * Returns true if this list iterator has more elements when traversing the list in the reverse direction.
                 * @returns {$$rhino.Boolean}
                 */
                hasPrevious(): $$rhino.Boolean;

                /**
                 * Returns the next element in the list and advances the cursor position.
                 * @returns {E}
                 */
                next(): E;

                /**
                 * Returns the index of the element that would be returned by a subsequent call to next().
                 * @returns {$$rhino.Number}
                 */
                nextIndex(): $$rhino.Number;

                /**
                 * Returns the previous element in the list and moves the cursor position backwards.
                 * @returns {E}
                 */
                previous(): E;

                /**
                 * Returns the index of the element that would be returned by a subsequent call to previous().
                 * @returns {$$rhino.Number}
                 */
                previousIndex(): $$rhino.Number;

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

            /**
             * An ordered collection (also known as a sequence).
             * @export
             * @interface List
             * @extends {util.Collection<E>}
             * @template E
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/List.html}
             */
            export interface List<E> extends util.Collection<E> {
                /**
                 * Appends the specified element to the end of this list (optional operation).
                 * @param e {E}
                 * @returns {$$rhino.Boolean}
                 */
                add(e: E): $$rhino.Boolean;

                /**
                 * Inserts the specified element at the specified position in this list (optional operation).
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 */
                add(index: $$rhino.Number, element: E): void;

                /**
                 * Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's iterator (optional operation).
                 * @param c {util.Collection< E>}
                 * @returns {$$rhino.Boolean}
                 */
                addAll(c: util.Collection<E>): $$rhino.Boolean;

                /**
                 * Inserts all of the elements in the specified collection into this list at the specified position (optional operation).
                 * @param index {$$rhino.Number}
                 * @param c {util.Collection< E>}
                 * @returns {$$rhino.Boolean}
                 */
                addAll(index: $$rhino.Number, c: util.Collection<E>): $$rhino.Boolean;

                /**
                 * Removes all of the elements from this list (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this list contains the specified element.
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                contains(o: any): $$rhino.Boolean;

                /**
                 * Returns true if this list contains all of the elements of the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                containsAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Returns the element at the specified position in this list.
                 * @param index {$$rhino.Number}
                 * @returns {E}
                 */
                get(index: $$rhino.Number): E;

                /**
                 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {*}
                 * @returns {$$rhino.Number}
                 */
                indexOf(o: any): $$rhino.Number;

                /**
                 * Returns true if this list contains no elements.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

                /**
                 * Returns an iterator over the elements in this list in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {*}
                 * @returns {$$rhino.Number}
                 */
                lastIndexOf(o: any): $$rhino.Number;

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
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                remove(o: any): $$rhino.Boolean;

                /**
                 * Removes from this list all of its elements that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                removeAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Retains only the elements in this list that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                retainAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Replaces the element at the specified position in this list with the specified element (optional operation).
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 * @returns {E}
                 */
                set(index: $$rhino.Number, element: E): E;

                /**
                 * Returns the number of elements in this list.
                 * @returns {$$rhino.Number}
                 */
                size(): $$rhino.Number;

                /**
                 * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
                 * @param fromIndex {$$rhino.Number}
                 * @param toIndex {$$rhino.Number}
                 * @returns {List<E>}
                 */
                subList(fromIndex: $$rhino.Number, toIndex: $$rhino.Number): List<E>;

                /**
                 * Returns an array containing all of the elements in this list in proper sequence (from first to last element).
                 * @returns {*}
                 */
                toArray(): any;
            }

            /**
             * Represents the java.util.AbstractCollection class.
             * @export
             * @interface AbstractCollection
             * @extends {lang.Object}
             * @extends {util.Collection<E>}
             * @template E
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/AbstractCollection.html}
             */
            export interface AbstractCollection<E> extends lang.Object, util.Collection<E>  {
                /**
                 * Ensures that this collection contains the specified element (optional operation).
                 * @param e {E}
                 * @returns {$$rhino.Boolean}
                 */
                add(e: E): $$rhino.Boolean;

                /**
                 * Adds all of the elements in the specified collection to this collection (optional operation).
                 * @param c {util.Collection< E>}
                 * @returns {$$rhino.Boolean}
                 */
                addAll(c: util.Collection<E>): $$rhino.Boolean;

                /**
                 * Removes all of the elements from this collection (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this collection contains the specified element.
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                contains(o: any): $$rhino.Boolean;

                /**
                 * Returns true if this collection contains all of the elements in the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                containsAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Returns true if this collection contains no elements.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

                /**
                 * Returns an iterator over the elements contained in this collection.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Removes a single instance of the specified element from this collection, if it is present (optional operation).
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                remove(o: any): $$rhino.Boolean;

                /**
                 * Removes all of this collection's elements that are also contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                removeAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Retains only the elements in this collection that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                retainAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Returns the number of elements in this collection.
                 * @returns {$$rhino.Number}
                 */
                size(): $$rhino.Number;

                /**
                 * Returns an array containing all of the elements in this collection.
                 * @returns {*}
                 */
                toArray(): any;

                /**
                 * Returns a string representation of this collection.
                 * @returns {$$rhino.String}
                 */
                toString(): $$rhino.String;
            }

            /**
             * Represents the java.util.AbstractList class.
             * @export
             * @interface AbstractList
             * @extends {AbstractCollection<E>}
             * @extends {List<E>}
             * @template E
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/AbstractList.html}
             */
            export interface AbstractList<E> extends AbstractCollection<E>, List<E> {
                /**
                 * Appends the specified element to the end of this list (optional operation).
                 * @param e {E}
                 * @returns {$$rhino.Boolean}
                 */
                add(e: E): $$rhino.Boolean;

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
                 * @returns {$$rhino.Boolean}
                 */
                addAll(c: util.Collection<E>): $$rhino.Boolean;
                addAll(index: $$rhino.Number, c: util.Collection<E>): $$rhino.Boolean;

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
                 * @returns {$$rhino.Number}
                 */
                hashCode(): $$rhino.Number;

                /**
                 * Returns the index of the first occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {*}
                 * @returns {$$rhino.Number}
                 */
                indexOf(o: any): $$rhino.Number;

                /**
                 * Returns an iterator over the elements in this list in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {*}
                 * @returns {$$rhino.Number}
                 */
                lastIndexOf(o: any): $$rhino.Number;

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
                remove(o: any): $$rhino.Boolean;

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

            /**
             * Represents the java.util.ArrayList class.
             * @export
             * @interface ArrayList
             * @extends {AbstractList<E>}
             * @extends {List<E>}
             * @template E
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/ArrayList.html}
             */
            export interface ArrayList<E> extends AbstractList<E>, List<E> {
                /**
                 * Appends the specified element to the end of this list.
                 * @param e {E}
                 * @returns {$$rhino.Boolean}
                 */
                add(e: E): $$rhino.Boolean;

                /**
                 * Inserts the specified element at the specified position in this list.
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 */
                add(index: $$rhino.Number, element: E): void;

                /**
                 * Appends all of the elements in the specified collection to the end of this list, in the order that they are returned by the specified collection's Iterator.
                 * @param c {util.Collection< E>}
                 * @returns {$$rhino.Boolean}
                 */
                addAll(c: util.Collection<E>): $$rhino.Boolean;

                /**
                 * Inserts all of the elements in the specified collection into this list, starting at the specified position.
                 * @param index {$$rhino.Number}
                 * @param c {util.Collection< E>}
                 * @returns {$$rhino.Boolean}
                 */
                addAll(index: $$rhino.Number, c: util.Collection<E>): $$rhino.Boolean;

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
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                contains(o: any): $$rhino.Boolean;

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
                 * @param o {*}
                 * @returns {$$rhino.Number}
                 */
                indexOf(o: any): $$rhino.Number;

                /**
                 * Returns true if this list contains no elements.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

                /**
                 * Returns an iterator over the elements in this list in proper sequence.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Returns the index of the last occurrence of the specified element in this list, or -1 if this list does not contain the element.
                 * @param o {*}
                 * @returns {$$rhino.Number}
                 */
                lastIndexOf(o: any): $$rhino.Number;

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
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                remove(o: any): $$rhino.Boolean;

                /**
                 * Removes from this list all of its elements that are contained in the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                removeAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Retains only the elements in this list that are contained in the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                retainAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Replaces the element at the specified position in this list with the specified element.
                 * @param index {$$rhino.Number}
                 * @param element {E}
                 * @returns {E}
                 */
                set(index: $$rhino.Number, element: E): E;

                /**
                 * Returns the number of elements in this list.
                 * @returns {$$rhino.Number}
                 */
                size(): $$rhino.Number;

                /**
                 * Returns a view of the portion of this list between the specified fromIndex, inclusive, and toIndex, exclusive.
                 * @param fromIndex {$$rhino.Number}
                 * @param toIndex {$$rhino.Number}
                 * @returns {List<E>}
                 */
                subList(fromIndex: $$rhino.Number, toIndex: $$rhino.Number): List<E>;

                /**
                 * Returns an array containing all of the elements in this list in proper sequence (from first to last element).
                 * @returns {*}
                 */
                toArray(): any;

                /**
                 * Trims the capacity of this ArrayList instance to be the list's current size.
                 */
                trimToSize(): void;
            }

            /**
             * A map entry (key-value pair).
             * @export
             * @interface MapEntry
             * @template K - The type of key.
             * @template V - The type of mapped value.
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/Map.Entry.html}
             */
            export interface MapEntry<K, V> {
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
                 * Replaces the value corresponding to this entry with the specified value (optional operation).
                 * @param value {V}
                 * @returns {V}
                 */
                setValue(value: V): V;
            }

            /**
             * A collection that contains no duplicate elements.
             * @export
             * @interface Set
             * @extends {util.Collection<E>}
             * @template E - The type of elements maintained by this set.
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/Set.html}
             */
            export interface Set<E> extends util.Collection<E> {
                /**
                 * Adds the specified element to this set if it is not already present (optional operation).
                 * @param e {E}
                 * @returns {$$rhino.Boolean}
                 */
                add(e: E): $$rhino.Boolean;

                /**
                 * Adds all of the elements in the specified collection to this set if they're not already present (optional operation).
                 * @param c {util.Collection< E>}
                 * @returns {$$rhino.Boolean}
                 */
                addAll(c: util.Collection<E>): $$rhino.Boolean;

                /**
                 * Removes all of the elements from this set (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this set contains the specified element.
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                contains(o: any): $$rhino.Boolean;

                /**
                 * Returns true if this set contains all of the elements of the specified collection.
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                containsAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Returns the hash code value for this set.
                 * @returns {$$rhino.Number}
                 */
                hashCode(): $$rhino.Number;

                /**
                 * Returns true if this set contains no elements.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

                /**
                 * Returns an iterator over the elements in this set.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Removes the specified element from this set if it is present (optional operation).
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                remove(o: any): $$rhino.Boolean;

                /**
                 * Removes from this set all of its elements that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                removeAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Retains only the elements in this set that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                retainAll(c: util.Collection<any>): $$rhino.Boolean;

                /**
                 * Returns the number of elements in this set (its cardinality).
                 * @returns {$$rhino.Number}
                 */
                size(): $$rhino.Number;

                /**
                 * Returns an array containing all of the elements in this set.
                 * @returns {*}
                 */
                toArray(): any;
            }

            /**
             * An object that maps keys to values.
             * @export
             * @interface Map
             * @template K - The type of keys maintained by this map.
             * @template V - The type of mapped values.
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/Map.html}
             */
            export interface Map<K, V> {
                /**
                 * Removes all of the mappings from this map (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this map contains a mapping for the specified key.
                 * @param key {*}
                 * @returns {$$rhino.Boolean}
                 */
                containsKey(key: any): $$rhino.Boolean;

                /**
                 * Returns true if this map maps one or more keys to the specified value.
                 * @param value {*}
                 * @returns {$$rhino.Boolean}
                 */
                containsValue(value: any): $$rhino.Boolean;

                /**
                 * Returns a Set view of the mappings contained in this map.
                 * @returns {util.Set<MapEntry<K,V>>}
                 */
                entrySet(): util.Set<MapEntry<K, V>>;

                /**
                 * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
                 * @param key {*}
                 * @returns {V}
                 */
                get(key: any): V;

                /**
                 * Returns the hash code value for this map.
                 * @returns {$$rhino.Number}
                 */
                hashCode(): $$rhino.Number;

                /**
                 * Returns true if this map contains no key-value mappings.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

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
                 * @param key {*}
                 * @returns {V}
                 */
                remove(key: any): V;

                /**
                 * Returns the number of key-value mappings in this map.
                 * @returns {$$rhino.Number}
                 */
                size(): $$rhino.Number;

                /**
                 * Returns a util.Collection view of the values contained in this map.
                 * @returns {util.Collection<V>}
                 */
                values(): util.Collection<V>;
            }

            /**
             * Represents the java.util.AbstractMap class.
             * @export
             * @class AbstractMap
             * @extends {lang.Object}
             * @implements {Map<K, V>}
             * @template K
             * @template V
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/AbstractMap.html}
             */
            export interface AbstractMap<K, V> extends lang.Object, Map<K, V> {
                /**
                 * Removes all of the mappings from this map (optional operation).
                 */
                clear(): void;

                /**
                 * Returns true if this map contains a mapping for the specified key.
                 * @param key {*}
                 * @returns {$$rhino.Boolean}
                 */
                containsKey(key: any): $$rhino.Boolean;

                /**
                 * Returns true if this map maps one or more keys to the specified value.
                 * @param value {*}
                 * @returns {$$rhino.Boolean}
                 */
                containsValue(value: any): $$rhino.Boolean;

                /**
                 * Returns a Set view of the mappings contained in this map.
                 * @returns {util.Set<Map.Entry<K,V>>}
                 */
                entrySet(): util.Set<MapEntry<K, V>>;

                /**
                 * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
                 * @param key {*}
                 * @returns {V}
                 */
                get(key: any): V;

                /**
                 * Returns the hash code value for this map.
                 * @returns {$$rhino.Number}
                 */
                hashCode(): $$rhino.Number;

                /**
                 * Returns true if this map contains no key-value mappings.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

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
                 * @param key {*}
                 * @returns {V}
                 */
                remove(key: any): V;

                /**
                 * Returns the number of key-value mappings in this map.
                 * @returns {$$rhino.Number}
                 */
                size(): $$rhino.Number;

                /**
                 * Returns a util.Collection view of the values contained in this map.
                 * @returns {util.Collection<V>}
                 */
                values(): util.Collection<V>;
            }

            /**
             * Represents the java.util.HashMap class.
             * @export
             * @interface HashMap
             * @extends {AbstractMap<K, V>}
             * @extends {Map<K, V>}
             * @template K
             * @template V
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/HashMap.html}
             */
            export interface HashMap<K, V> extends AbstractMap<K, V>, Map<K, V> {
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
                 * @param key {*}
                 * @returns {$$rhino.Boolean}
                 */
                containsKey(key: any): $$rhino.Boolean;

                /**
                 * Returns true if this map maps one or more keys to the specified value.
                 * @param value {*}
                 * @returns {$$rhino.Boolean}
                 */
                containsValue(value: any): $$rhino.Boolean;

                /**
                 * Returns a Set view of the mappings contained in this map.
                 * @returns {util.Set<Map.Entry<K,V>>}
                 */
                entrySet(): util.Set<MapEntry<K, V>>;

                /**
                 * Returns the value to which the specified key is mapped, or null if this map contains no mapping for the key.
                 * @param key {*}
                 * @returns {V}
                 */
                get(key: any): V;

                /**
                 * Returns true if this map contains no key-value mappings.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

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
                 * @param key {*}
                 * @returns {V}
                 */
                remove(key: any): V;

                /**
                 * Returns the number of key-value mappings in this map.
                 * @returns {$$rhino.Number}
                 */
                size(): $$rhino.Number;

                /**
                 * Returns a util.Collection view of the values contained in this map.
                 * @returns {util.Collection<V>}
                 */
                values(): util.Collection<V>;
            }

            /**
             * Represents the java.util.AbstractSet class.
             * @export
             * @interface AbstractSet
             * @extends {AbstractCollection<E>}
             * @extends {util.Set<E>}
             * @template E
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/AbstractSet.html}
             */
            export interface AbstractSet<E> extends AbstractCollection<E>, util.Set<E> {
                /**
                 * Removes from this set all of its elements that are contained in the specified collection (optional operation).
                 * @param c {util.Collection<any>}
                 * @returns {$$rhino.Boolean}
                 */
                removeAll(c: util.Collection<any>): $$rhino.Boolean;
            }

            /**
             * Represents the java.util.HashSet class.
             * @export
             * @interface HashSet
             * @extends {AbstractSet<E>}
             * @extends {util.Set<E>}
             * @template E
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/HashSet.html}
             */
            export interface HashSet<E> extends AbstractSet<E>, util.Set<E> {
                /**
                 * Adds the specified element to this set if it is not already present.
                 * @param e {E}
                 * @returns {$$rhino.Boolean}
                 */
                add(e: E): $$rhino.Boolean;

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
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                contains(o: any): $$rhino.Boolean;

                /**
                 * Returns true if this set contains no elements.
                 * @returns {$$rhino.Boolean}
                 */
                isEmpty(): $$rhino.Boolean;

                /**
                 * Returns an iterator over the elements in this set.
                 * @returns {Iterator<E>}
                 */
                iterator(): Iterator<E>;

                /**
                 * Removes the specified element from this set if it is present.
                 * @param o {*}
                 * @returns {$$rhino.Boolean}
                 */
                remove(o: any): $$rhino.Boolean;

                /**
                 * Returns the number of elements in this set (its cardinality).
                 * @returns {$$rhino.Number}
                 */
                size(): $$rhino.Number;
            }

            /**
             * Represents the java.util.Date class.
             * @export
             * @interface Date
             * @extends {lang.Object}
             * @extends {lang.Comparable<Date>}
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/Date.html}
             */
            export interface Date extends lang.Object, lang.Comparable<Date> {
                /**
                 * Tests if this date is after the specified date.
                 * @param when {Date}
                 * @returns {$$rhino.Boolean}
                 */
                after(when: Date): $$rhino.Boolean;

                /**
                 * Tests if this date is before the specified date.
                 * @param when {Date}
                 * @returns {$$rhino.Boolean}
                 */
                before(when: Date): $$rhino.Boolean;

                /**
                 * Return a copy of this object.
                 * @returns {lang.Object}
                 */
                clone(): lang.Object;

                /**
                 * Compares two Dates for ordering.
                 * @param anotherDate {Date}
                 * @returns {$$rhino.Number}
                 */
                compareTo(anotherDate: Date): $$rhino.Number;

                /**
                 * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT represented by this Date object.
                 * @returns {$$rhino.Number}
                 */
                getTime(): $$rhino.Number;

                /**
                 * Sets this Date object to represent a point in time that is time milliseconds after January 1, 1970 00:00:00 GMT.
                 * @param time {$$rhino.Number}
                 */
                setTime(time: $$rhino.Number): void;

            }

            /**
             * Represents the java.util.TimeZone class.
             * @export
             * @interface TimeZone
             * @see {@link https://docs.oracle.com/javase/10/docs/api/java/util/TimeZone.html}
             */
            export interface TimeZone {
                /**
                 * Creates a copy of this TimeZone.
                 * @returns {lang.Object}
                 */
                clone(): lang.Object;

                /**
                 * Returns a long standard time name of this TimeZone suitable for presentation to the user in the default locale.
                 * @returns {$$rhino.String}
                 */
                getDisplayName(): $$rhino.String;

                /**
                 * Returns a name in the specified style of this TimeZone suitable for presentation to the user in the default locale.
                 * @param daylight {$$rhino.Boolean}
                 * @param style {$$rhino.Number}
                 * @returns {$$rhino.String}
                 */
                getDisplayName(daylight: $$rhino.Boolean, style: $$rhino.Number): $$rhino.String;

                /**
                 * Returns a name in the specified style of this TimeZone suitable for presentation to the user in the specified locale.
                 * @param daylight {$$rhino.Boolean}
                 * @param style {$$rhino.Number}
                 * @param locale {Locale}
                 * @returns {$$rhino.String}
                 */
                getDisplayName(daylight: $$rhino.Boolean, style: $$rhino.Number, locale: Locale): $$rhino.String;

                /**
                 * Returns a long standard time name of this TimeZone suitable for presentation to the user in the specified locale.
                 * @param locale {Locale}
                 * @returns {$$rhino.String}
                 */
                getDisplayName(locale: Locale): $$rhino.String;

                /**
                 * Returns the amount of time to be added to local standard time to get local wall clock time.
                 * @returns {$$rhino.Number}
                 */
                getDSTSavings(): $$rhino.Number;

                /**
                 * Gets the ID of this time zone.
                 * @returns {$$rhino.String}
                 */
                getID(): $$rhino.String;

                /**
                 * Gets the time zone offset, for current date, modified in case of daylight savings.
                 * @param era {$$rhino.Number}
                 * @param year {$$rhino.Number}
                 * @param month {$$rhino.Number}
                 * @param day {$$rhino.Number}
                 * @param dayOfWeek {$$rhino.Number}
                 * @param milliseconds {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                getOffset(era: $$rhino.Number, year: $$rhino.Number, month: $$rhino.Number, day: $$rhino.Number, dayOfWeek: $$rhino.Number, milliseconds: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the offset of this time zone from UTC at the specified date.
                 * @param date {$$rhino.Number}
                 * @returns {$$rhino.Number}
                 */
                getOffset(date: $$rhino.Number): $$rhino.Number;

                /**
                 * Returns the amount of time in milliseconds to add to UTC to get standard time in this time zone.
                 * @returns {$$rhino.Number}
                 */
                getRawOffset(): $$rhino.Number;

                /**
                 * Returns true if this zone has the same rule and offset as another zone.
                 * @param other {TimeZone}
                 * @returns {$$rhino.Boolean}
                 */
                hasSameRules(other: TimeZone): $$rhino.Boolean;

                /**
                 * Queries if the given date is in Daylight Saving Time in this time zone.
                 * @param date {Date}
                 * @returns {$$rhino.Boolean}
                 */
                inDaylightTime(date: Date): $$rhino.Boolean;

                /**
                 * Returns true if this TimeZone is currently in Daylight Saving Time, or if a transition from Standard Time to Daylight Saving Time occurs at any future time.
                 * @returns {$$rhino.Boolean}
                 */
                observesDaylightTime(): $$rhino.Boolean;

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
                 * @returns {$$rhino.Boolean}
                 */
                useDaylightTime(): $$rhino.Boolean;
            }
        }
    }

    export namespace org {
        export namespace w3c {
            export namespace dom {
                /**
                 * The primary datatype for the entire Document Object Model.
                 * @export
                 * @interface Node
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/Node.html}
                 */
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
                     * @returns {$$rhino.Number}
                     */
                    compareDocumentPosition(other: Node): $$rhino.Number;

                    /**
                     * A NamedNodeMap containing the attributes of this node (if it is an Element) or null otherwise.
                     * @returns {NamedNodeMap}
                     */
                    getAttributes(): NamedNodeMap;

                    /**
                     * The absolute base URI of this node or null if the implementation wasn't able to obtain an absolute URI.
                     * @returns {$$rhino.String}
                     */
                    getBaseURI(): $$rhino.String;

                    /**
                     * A NodeList that contains all children of this node.
                     * @returns {NodeList}
                     */
                    getChildNodes(): NodeList;

                    /**
                     * This method returns a specialized object which implements the specialized APIs of the specified feature and version, as specified in.
                     * @param feature {$$rhino.String}
                     * @param version {$$rhino.String}
                     * @returns {*}
                     */
                    getFeature(feature: $$rhino.String, version: $$rhino.String): any;

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
                     * @returns {$$rhino.String}
                     */
                    getLocalName(): $$rhino.String;

                    /**
                     * The namespace URI of this node, or null if it is unspecified (see ).
                     * @returns {$$rhino.String}
                     */
                    getNamespaceURI(): $$rhino.String;

                    /**
                     * The node immediately following this node.
                     * @returns {Node}
                     */
                    getNextSibling(): Node;

                    /**
                     * The name of this node, depending on its type; see the table above.
                     * @returns {$$rhino.String}
                     */
                    getNodeName(): $$rhino.String;

                    /**
                     * A code representing the type of the underlying object, as defined above.
                     * @returns {$$rhino.Number}
                     */
                    getNodeType(): $$rhino.Number;

                    /**
                     * The value of this node, depending on its type; see the table above.
                     * @returns {$$rhino.String}
                     */
                    getNodeValue(): $$rhino.String;

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
                     * @returns {$$rhino.String}
                     */
                    getPrefix(): $$rhino.String;

                    /**
                     * The node immediately preceding this node.
                     * @returns {Node}
                     */
                    getPreviousSibling(): Node;

                    /**
                     * This attribute returns the text content of this node and its descendants.
                     * @returns {$$rhino.String}
                     */
                    getTextContent(): $$rhino.String;

                    /**
                     * Retrieves the object associated to a key on a this node.
                     * @param key {$$rhino.String}
                     * @returns {*}
                     */
                    getUserData(key: $$rhino.String): any;

                    /**
                     * Returns whether this node (if it is an element) has any attributes.
                     * @returns {$$rhino.Boolean}
                     */
                    hasAttributes(): $$rhino.Boolean;

                    /**
                     * Returns whether this node has any children.
                     * @returns {$$rhino.Boolean}
                     */
                    hasChildNodes(): $$rhino.Boolean;

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
                     * @returns {$$rhino.Boolean}
                     */
                    isDefaultNamespace(namespaceURI: $$rhino.String): $$rhino.Boolean;

                    /**
                     * Tests whether two nodes are equal.
                     * @param arg {Node}
                     * @returns {$$rhino.Boolean}
                     */
                    isEqualNode(arg: Node): $$rhino.Boolean;

                    /**
                     * Returns whether this node is the same node as the given one.
                     * @param other {Node}
                     * @returns {$$rhino.Boolean}
                     */
                    isSameNode(other: Node): $$rhino.Boolean;

                    /**
                     * Tests whether the DOM implementation implements a specific feature and that feature is supported by this node, as specified in.
                     * @param feature {$$rhino.String}
                     * @param version {$$rhino.String}
                     * @returns {$$rhino.Boolean}
                     */
                    isSupported(feature: $$rhino.String, version: $$rhino.String): $$rhino.Boolean;

                    /**
                     * Look up the namespace URI associated to the given prefix, starting from this node.
                     * @param prefix {$$rhino.String}
                     * @returns {$$rhino.String}
                     */
                    lookupNamespaceURI(prefix: $$rhino.String): $$rhino.String;

                    /**
                     * Look up the prefix associated to the given namespace URI, starting from this node.
                     * @param namespaceURI {$$rhino.String}
                     * @returns {$$rhino.String}
                     */
                    lookupPrefix(namespaceURI: $$rhino.String): $$rhino.String;

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

                /**
                 * Represents an attribute in an {@link Element} object.
                 * @export
                 * @interface Attr
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/Attr.html}
                 */
                export interface Attr {
                    /**
                     * Returns the name of this attribute.
                     * @returns {$$rhino.String}
                     */
                    getName(): $$rhino.String;

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
                     * @returns {$$rhino.Boolean}
                     */
                    getSpecified(): $$rhino.Boolean;

                    /**
                     * On retrieval, the value of the attribute is returned as a string.
                     * @returns {$$rhino.String}
                     */
                    getValue(): $$rhino.String;

                    /**
                     * Returns whether this attribute is known to be of type ID (i.e.
                     * @returns {$$rhino.Boolean}
                     */
                    isId(): $$rhino.Boolean;

                    /**
                     * On retrieval, the value of the attribute is returned as a string.
                     * @param value {$$rhino.String}
                     */
                    setValue(value: $$rhino.String): void;
                }

                /**
                 * Provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented.
                 * @export
                 * @interface NodeList
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/NodeList.html}
                 */
                export interface NodeList {
                    /**
                     * Test if a name is part of this NameList.
                     * @param str {$$rhino.String}
                     * @returns {$$rhino.Boolean}
                     */
                    contains(str: $$rhino.String): $$rhino.Boolean;

                    /**
                     * Test if the pair namespaceURI/name is part of this NameList.
                     * @param namespaceURI {$$rhino.String}
                     * @param name {$$rhino.String}
                     * @returns {$$rhino.Boolean}
                     */
                    containsNS(namespaceURI: $$rhino.String, name: $$rhino.String): $$rhino.Boolean;

                    /**
                     * The number of pairs (name and namespaceURI) in the list.
                     * @returns {$$rhino.Number}
                     */
                    getLength(): $$rhino.Number;

                    /**
                     * Returns the indexth name item in the collection.
                     * @param index {$$rhino.Number}
                     * @returns {$$rhino.String}
                     */
                    getName(index: $$rhino.Number): $$rhino.String;

                    /**
                     * Returns the indexth namespaceURI item in the collection.
                     * @param index {$$rhino.Number}
                     * @returns {$$rhino.String}
                     */
                    getNamespaceURI(index: $$rhino.Number): $$rhino.String;
                }

                /**
                 * Represents a type referenced from {@link Element} or {@link Attr} nodes, specified in the schemas associated with the document
                 * @export
                 * @interface TypeInfo
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/TypeInfo.html}
                 */
                export interface TypeInfo {
                    /**
                     * The name of a type declared for the associated element or attribute, or null if unknown.
                     * @returns {$$rhino.String}
                     */
                    getTypeName(): $$rhino.String;

                    /**
                     * The namespace of the type declared for the associated element or attribute or null if the element does not have declaration or if no namespace information is available.
                     * @returns {$$rhino.String}
                     */
                    getTypeNamespace(): $$rhino.String;

                    /**
                     * This method returns if there is a derivation between the reference type definition, i.e.
                     * @param typeNamespaceArg {$$rhino.String}
                     * @param typeNameArg {$$rhino.String}
                     * @param derivationMethod {$$rhino.Number}
                     * @returns {$$rhino.Boolean}
                     */
                    isDerivedFrom(typeNamespaceArg: $$rhino.String, typeNameArg: $$rhino.String, derivationMethod: $$rhino.Number): $$rhino.Boolean;
                }

                /**
                 * Provides a set of attributes and methods for accessing character data in the DOM.
                 * @export
                 * @interface CharacterData
                 * @extends {Node}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/CharacterData.html}
                 */
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
                     * @returns {$$rhino.String}
                     */
                    getData(): $$rhino.String;

                    /**
                     * The number of 16-bit units that are available through data and the substringData method below.
                     * @returns {$$rhino.Number}
                     */
                    getLength(): $$rhino.Number;

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
                     * @returns {$$rhino.String}
                     */
                    substringData(offset: $$rhino.Number, count: $$rhino.Number): $$rhino.String;
                }

                /**
                 * Represents the textual content (termed character data in XML) of an {@link Element} or {@link Attr}.
                 * @export
                 * @interface Text
                 * @extends {CharacterData}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/Text.html}
                 */
                export interface Text extends CharacterData {
                    /**
                     * Returns all text of Text nodes logically-adjacent text nodes to this node, concatenated in document order.
                     * @returns {$$rhino.String}
                     */
                    getWholeText(): $$rhino.String;

                    /**
                     * Returns whether this text node contains element content whitespace, often abusively called "ignorable whitespace".
                     * @returns {$$rhino.Boolean}
                     */
                    isElementContentWhitespace(): $$rhino.Boolean;

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

                /**
                 * Escaped block of text containing characters that would otherwise be regarded as markup.
                 * @export
                 * @interface CDATASection
                 * @extends {Text}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/CDATASection.html}
                 */
                export interface CDATASection extends Text { }

                /**
                 * Represents the content of a comment.
                 * @export
                 * @interface Comment
                 * @extends {CharacterData}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/Comment.html}
                 */
                export interface Comment extends CharacterData { }

                /**
                 * A "lightweight" or "minimal" Document object.
                 * @export
                 * @interface DocumentFragment
                 * @extends {Node}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/DocumentFragment.html}
                 */
                export interface DocumentFragment extends Node { }

                /**
                 * Represents a character entity reference.
                 * @export
                 * @interface EntityReference
                 * @extends {Node}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/EntityReference.html}
                 */
                export interface EntityReference extends Node { }

                /**
                 * Represents a "processing instruction", used in XML as a way to keep processor-specific information in the text of the document.
                 * @export
                 * @interface ProcessingInstruction
                 * @extends {Node}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/ProcessingInstruction.html}
                 */
                export interface ProcessingInstruction extends Node {
                    /**
                     * The content of this processing instruction.
                     * @returns {$$rhino.String}
                     */
                    getData(): $$rhino.String;

                    /**
                     * The target of this processing instruction.
                     * @returns {$$rhino.String}
                     */
                    getTarget(): $$rhino.String;

                    /**
                     * The content of this processing instruction.
                     * @param data {$$rhino.String}
                     */
                    setData(data: $$rhino.String): void;
                }

                /**
                 * Provides an interface to the list of entities that are defined for the document.
                 * @export
                 * @interface DocumentType
                 * @extends {Node}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/DocumentType.html}
                 */
                export interface DocumentType extends Node {
                    /**
                     * A NamedNodeMap containing the general entities, both external and internal, declared in the DTD.
                     * @returns {NamedNodeMap}
                     */
                    getEntities(): NamedNodeMap;

                    /**
                     * The internal subset as a string, or null if there is none.
                     * @returns {$$rhino.String}
                     */
                    getInternalSubset(): $$rhino.String;

                    /**
                     * The name of DTD; i.e., the name immediately following the DOCTYPE keyword.
                     * @returns {$$rhino.String}
                     */
                    getName(): $$rhino.String;

                    /**
                     * A NamedNodeMap containing the notations declared in the DTD.
                     * @returns {NamedNodeMap}
                     */
                    getNotations(): NamedNodeMap;

                    /**
                     * The public identifier of the external subset.
                     * @returns {$$rhino.String}
                     */
                    getPublicId(): $$rhino.String;

                    /**
                     * The system identifier of the external subset.
                     * @returns {$$rhino.String}
                     */
                    getSystemId(): $$rhino.String;
                }

                /**
                 * Provides the abstraction of an ordered collection of DOMString values, without defining or constraining how this collection is implemented
                 * @export
                 * @interface DOMStringList
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/DOMStringList.html}
                 */
                export interface DOMStringList {
                    /**
                     * Test if a string is part of this DOMStringList.
                     * @param str {$$rhino.String}
                     * @returns {$$rhino.Boolean}
                     */
                    contains(str: $$rhino.String): $$rhino.Boolean;

                    /**
                     * The number of DOMStrings in the list.
                     * @returns {$$rhino.Number}
                     */
                    getLength(): $$rhino.Number;

                    /**
                     * Returns the indexth item in the collection.
                     * @param index {$$rhino.Number}
                     * @returns {$$rhino.String}
                     */
                    item(index: $$rhino.Number): $$rhino.String;
                }

                /**
                 * Represents the configuration of a document and maintains a table of recognized parameters.
                 * @export
                 * @interface DOMConfiguration
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/DOMConfiguration.html}
                 */
                export interface DOMConfiguration {
                    /**
                     * Check if setting a parameter to a specific value is supported.
                     * @param name {$$rhino.String}
                     * @param value {object}
                     * @returns {$$rhino.Boolean}
                     */
                    canSetParameter(name: $$rhino.String, value: object): $$rhino.Boolean;

                    /**
                     * Return the value of a parameter if known.
                     * @param name {$$rhino.String}
                     * @returns {*}
                     */
                    getParameter(name: $$rhino.String): any;

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

                /**
                 * Provides a number of methods for performing operations that are independent of any particular instance of the document object model.
                 * @export
                 * @interface DOMImplementation
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/DOMImplementation.html}
                 */
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
                     * @returns {*}
                     */
                    getFeature(feature: $$rhino.String, version: $$rhino.String): any;

                    /**
                     * Test if the DOM implementation implements a specific feature and version, as specified in DOM Features.
                     * @param feature {$$rhino.String}
                     * @param version {$$rhino.String}
                     * @returns {$$rhino.Boolean}
                     */
                    hasFeature(feature: $$rhino.String, version: $$rhino.String): $$rhino.Boolean;
                }

                /**
                 * Represents the entire HTML or XML document.
                 * @export
                 * @interface Document
                 * @extends {Node}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/Document.html}
                 */
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
                     * @returns {$$rhino.String}
                     */
                    getDocumentURI(): $$rhino.String;

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
                     * @returns {$$rhino.String}
                     */
                    getInputEncoding(): $$rhino.String;

                    /**
                     * An attribute specifying whether error checking is enforced or not.
                     * @returns {$$rhino.Boolean}
                     */
                    getStrictErrorChecking(): $$rhino.Boolean;

                    /**
                     * An attribute specifying, as part of the XML declaration, the encoding of this document.
                     * @returns {$$rhino.String}
                     */
                    getXmlEncoding(): $$rhino.String;

                    /**
                     * An attribute specifying, as part of the XML declaration, whether this document is standalone.
                     * @returns {$$rhino.Boolean}
                     */
                    getXmlStandalone(): $$rhino.Boolean;

                    /**
                     * An attribute specifying, as part of the XML declaration, the version number of this document.
                     * @returns {$$rhino.String}
                     */
                    getXmlVersion(): $$rhino.String;

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

                /**
                 * Represents collections of nodes that can be accessed by name.
                 * @export
                 * @interface NamedNodeMap
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/NamedNodeMap.html}
                 */
                export interface NamedNodeMap {
                    /**
                     * The number of nodes in this map.
                     * @returns {$$rhino.Number}
                     */
                    getLength(): $$rhino.Number;

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

                /**
                 * Represents an element in an HTML or XML document.
                 * @export
                 * @interface Element
                 * @extends {Node}
                 * @see {@link https://docs.oracle.com/javase/10/docs/api/org/w3c/dom/Element.html}
                 */
                export interface Element extends Node {
                    /**
                     * Retrieves an attribute value by name.
                     * @param name {$$rhino.String}
                     * @returns {$$rhino.String}
                     */
                    getAttribute(name: $$rhino.String): $$rhino.String;

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
                     * @returns {$$rhino.String}
                     */
                    getAttributeNS(namespaceURI: $$rhino.String, localName: $$rhino.String): $$rhino.String;

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
                     * @returns {$$rhino.String}
                     */
                    getTagName(): $$rhino.String;

                    /**
                     * Returns true when an attribute with a given name is specified on this element or has a default value, false otherwise.
                     * @param name {$$rhino.String}
                     * @returns {$$rhino.Boolean}
                     */
                    hasAttribute(name: $$rhino.String): $$rhino.Boolean;

                    /**
                     * Returns true when an attribute with a given local name and namespace URI is specified on this element or has a default value, false otherwise.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @returns {$$rhino.Boolean}
                     */
                    hasAttributeNS(namespaceURI: $$rhino.String, localName: $$rhino.String): $$rhino.Boolean;

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
                     * If the parameter isId is true, this method declares the specified attribute to be a user-determined ID attribute.
                     * @param name {$$rhino.String}
                     * @param isId {$$rhino.Boolean}
                     */
                    setIdAttribute(name: $$rhino.String, isId: $$rhino.Boolean): void;

                    /**
                     * If the parameter isId is true, this method declares the specified attribute to be a user-determined ID attribute.
                     * @param idAttr {Attr}
                     * @param isId {$$rhino.Boolean}
                     */
                    setIdAttributeNode(idAttr: Attr, isId: $$rhino.Boolean): void;

                    /**
                     * If the parameter isId is true, this method declares the specified attribute to be a user-determined ID attribute.
                     * @param namespaceURI {$$rhino.String}
                     * @param localName {$$rhino.String}
                     * @param isId {$$rhino.Boolean}
                     */
                    setIdAttributeNS(namespaceURI: $$rhino.String, localName: $$rhino.String, isId: $$rhino.Boolean): void;
                }
            }
        }

        export namespace mozilla {
            export namespace javascript {
                /**
                 * This is interface that all objects in JavaScript must implement. The interface provides for the management of properties and for performing conversions.
                 * @export
                 * @interface Scriptable
                 * @see {@link https://www-archive.mozilla.org/rhino/apidocs/org/mozilla/javascript/scriptable}
                 * @description Library: rhino-ng-0.0.80.jar;
                 * Java declaration: ' '.
                 */
                export interface Scriptable { }

                /**
                 * This is the default implementation of the Scriptable interface. This class provides convenient default behavior that makes it easier to define host objects.
                 * @export
                 * @interface Scriptable
                 * @see {@link https://www-archive.mozilla.org/rhino/apidocs/org/mozilla/javascript/scriptableobject}
                 * @description Library: rhino-ng-0.0.80.jar;
                 */
                export interface ScriptableObject extends java.lang.Object, Scriptable { }
            }
        }
    }

    export namespace com {
        export namespace glide {
            export namespace app_store {
                /**
                 * Represents the "com.glide.app_store.ScopeNameUtilWrapper" Java class.
                 * @export
                 * @Interface ScopeNameUtilWrapper
                 * @description Wraps java class "com.glide.app_store.ScopeNameUtil".
                 * Library: glide-16.6.0.3.jar
                 * Java declaration: 'public class ScopeNameUtilWrapper implements com.glide.script.fencing.IScopedApi'.
                 */
                export interface ScopeNameUtilWrapper extends java.lang.Object {
                    getApplicationScope(applicationLabel: $$rhino.String): $$rhino.String;
                    getVendorCode(): $$rhino.String;
                    isScopeNameValid(applicationLabel: $$rhino.String): $$rhino.Boolean;
                }
            }

            export namespace catalog {
                export namespace component {
                    export namespace variables {
                        export namespace models {
                            export namespace table {
                                export namespace api {
                                    /**
                                     * Represents the "com.glide.catalog.component.variables.models.table.api.ITableVariableCellNode" Java interface.
                                     * @export
                                     * @Interface ITableVariableCellNode
                                     * @description Library: glide-servicecatalog-16.6.0.3.jar;
                                     * Java declaration: 'public interface ITableVariableCellNode extends com.glide.catalog.component.variables.models.api.IVariableNode'.
                                     */
                                    export interface ITableVariableCellNode {
                                    }

                                    /**
                                     * Represents the "com.glide.catalog.component.variables.models.table.api.ITableVariableNode" Java interface.
                                     * @export
                                     * @Interface ITableVariableNode
                                     * @description Library: glide-servicecatalog-16.6.0.3.jar;
                                     * Java declaration: 'public interface ITableVariableNode extends com.glide.catalog.component.variables.models.api.IVariableNode, com.glide.script.IGlideVariableComponent'.
                                     */
                                    export interface ITableVariableNode {
                                    }

                                    /**
                                     * Represents the "com.glide.catalog.component.variables.models.table.api.ITableVariableRowNode" Java interface.
                                     * @export
                                     * @Interface ITableVariableRowNode
                                     * @description Library: glide-servicecatalog-16.6.0.3.jar;
                                     * Java declaration: 'public interface ITableVariableRowNode'.
                                     */
                                    export interface ITableVariableRowNode {
                                    }
                                }
                            }
                        }
                    }
                }
            }

            export namespace cms {
                /**
                 * Represents the "com.glide.cms.ScopedContentType" Java class.
                 * @export
                 * @Interface ScopedContentType
                 * @description Wraps java class "com.glide.cms.ContentType".
                 * Library: glide-cms-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedContentType implements com.glide.script.fencing.IScopedApi'.
                 */
                export interface ScopedContentType extends java.lang.Object {
                }
            }

            export namespace collections {
                /**
                 * Represents the "StringList" Java class.
                 * @export
                 * @interface StringList
                 * @extends {java.lang.Object}
                 * @extends {java.util.ArrayList<$$rhino.String>}
                 * @description Library: commons-glide-16.6.0.3.jar;
                 */
                export interface StringList extends java.lang.Object, java.util.ArrayList<$$rhino.String> {
                }
            }

            export namespace communications {
                /**
                 * Represents the "AutoClosingInputStream" Java class.
                 * @export
                 * @interface AutoClosingInputStream
                 * @extends {java.lang.Object}
                 * @description Library: commons-glide-16.6.0.3.jar;
                 * Java declaration: 'public abstract class AutoClosingInputStream extends InputStream'.
                 */
                export interface AutoClosingInputStream extends java.io.InputStream { }

                /**
                 * Represents the "com.glide.communications.GlideScriptableInputStream" Java class.
                 * @export
                 * @Interface GlideScriptableInputStream
                 * @description Library: commons-glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideScriptableInputStream extends com.glide.communications.AutoClosingInputStream implements com.glide.script.fencing.IScopedApi'.
                 */
                export interface GlideScriptableInputStream extends AutoClosingInputStream {
                }
            }

            export namespace currency {
                /**
                 * Represents the "Currency" element type ("com.glide.currency.GlideElementCurrency" Java class).
                 * @export
                 * @Interface GlideElementCurrency
                 * @description Internal type: 'currency';
                 * scalar_type: 'decimal'; scalar_length: 20;
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementCurrency extends com.glide.script.GlideElement implements com.glide.currency.ICurrencyConstants, com.glide.script.ICustomAudit'.
                 */
                export interface GlideElementCurrency extends script.GlideElement, java.lang.Double {
                }

                /**
                 * Represents the "Price" element type ("com.glide.currency.GlideElementPrice" Java class).
                 * @export
                 * @Interface GlideElementPrice
                 * @description Internal type: 'price';
                 * scalar_type: 'decimal'; scalar_length: 20;
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementPrice extends GlideElementCurrency'.
                 */
                export interface GlideElementPrice extends GlideElementCurrency {
                }
            }

            export namespace currency2 {
                /**
                 * Represents the "FX Currency" element type ("com.glide.currency2.GlideElementCurrency2" Java class).
                 * @export
                 * @interface GlideElementCurrency2
                 * @description Internal type: 'currency2';
                 * scalar_type: 'GUID'; scalar_length: 32;
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementCurrency2 extends com.glide.script.glide_elements.GlideElementReference implements com.glide.script.IGlideElementMultipleValueContainer, com.glide.script.ICustomAudit, com.glide.audit.ICustomHistoryFormatter'.
                 */
                export interface GlideElementCurrency2 extends script.glide_elements.GlideElementReference, currency.GlideElementCurrency { }
            }

            export namespace db {
                /**
                 * Represents the CompositeElement class.
                 * @export
                 * @interface CompositeElement
                 * @extends {java.lang.Object}
                 */
                export interface CompositeElement extends java.lang.Object {
                    /**
                     * 
                     * @return {GlideTableDescriptor}
                     * @memberof CompositeElement
                     */
                    getTargetTD(): GlideTableDescriptor;

                    /**
                     * 
                     * @return {GlideElementDescriptor}
                     * @memberof CompositeElement
                     */
                    getBaseED(): GlideElementDescriptor;

                    /**
                     * 
                     * @return {GlideElementDescriptor}
                     * @memberof CompositeElement
                     */
                    getTargetED(): GlideElementDescriptor;

                    /**
                     * 
                     * @return {$$rhino.Boolean}
                     * @memberof CompositeElement
                     */
                    isValid(): $$rhino.Boolean;

                    /**
                     * 
                     * @return {$$rhino.String}
                     * @memberof CompositeElement
                     */
                    getTargetField(): $$rhino.String;

                    /**
                     * 
                     * @return {$$rhino.Boolean}
                     * @memberof CompositeElement
                     */
                    isSimple(): $$rhino.Boolean;

                    /**
                     * 
                     * @return {$$rhino.String}
                     * @memberof CompositeElement
                     */
                    getFullLabel(): $$rhino.String;

                    /**
                     * 
                     * @return {$$rhino.String}
                     * @memberof CompositeElement
                     */
                    getDisplayLabel(): $$rhino.String;
                }

                /**
                 * Represents the TableDescriptor class.
                 * @export
                 * @interface TableDescriptor
                 * @extends {java.lang.Object}
                 */
                export interface TableDescriptor extends java.lang.Object {
                    // TODO: Add members
                }

                export namespace functions {
                    /**
                     * Represents the "com.glide.db.functions.GlideDBFunctionBuilder" Java class.
                     * @export
                     * @Interface GlideDBFunctionBuilder
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideDBFunctionBuilder extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface GlideDBFunctionBuilder extends script.fencing.ScopedScriptableObject {
                    }
                }

                export namespace impex {
                    export namespace transformer {
                        /**
                         * Represents the "com.glide.db.impex.transformer.GlideTransformMap" Java class.
                         * @export
                         * @Interface GlideTransformMap
                         * @description Library: glide-impex-16.6.0.3.jar;
                         * Java declaration: 'public class GlideTransformMap implements com.glide.script.fencing.IScopedApi'.
                         */
                        export interface GlideTransformMap extends java.lang.Object {
                        }
                    }
                }
            }

            export namespace db_audio {
                /**
                 * Represents the "Audio" element type ("com.glide.db_audio.GlideElementAudio" Java class).
                 * @export
                 * @interface GlideElementAudio
                 * @description Internal type: 'audio';
                 * scalar_type: 'string';
                 * Library: glide-apps-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementAudio extends script.glide_elements.GlideElementViewable'.
                 */
                export interface GlideElementAudio extends script.glide_elements.GlideElementViewable { }
            }

            export namespace element_mapping {
                /**
                 * Represents the "com.glide.element_mapping.MappingLookupSourceDescriptor" Java class.
                 * @export
                 * @Interface MappingLookupSourceDescriptor
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class MappingLookupSourceDescriptor extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface MappingLookupSourceDescriptor extends script.fencing.ScopedScriptableObject {
                }
            }

            export namespace email_parse_attachment {
                /**
                 * Represents the "com.glide.email_parse_attachment.EmailAttachmentJavascriptProxy" Java class.
                 * @export
                 * @Interface EmailAttachmentJavascriptProxy
                 * @description Library: glide-email-notification-16.6.0.3.jar;
                 * Java declaration: 'public class EmailAttachmentJavascriptProxy extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface EmailAttachmentJavascriptProxy extends script.fencing.ScopedScriptableObject {
                }

                /**
                 * Represents the "com.glide.email_parse_attachment.ParseAttachmentAsAnEmailJavascriptProxy" Java class.
                 * @export
                 * @Interface ParseAttachmentAsAnEmailJavascriptProxy
                 * @description Library: glide-email-notification-16.6.0.3.jar;
                 * Java declaration: 'public class ParseAttachmentAsAnEmailJavascriptProxy extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface ParseAttachmentAsAnEmailJavascriptProxy extends script.fencing.ScopedScriptableObject {
                }
            }

            export namespace email {
                export namespace service {
                    /**
                     * Represents the "com.glide.email.service.EmailJavascriptProxy" Java class.
                     * @export
                     * @Interface EmailJavascriptProxy
                     * @description Library: glide-email-notification-16.6.0.3.jar;
                     * Java declaration: 'public class EmailJavascriptProxy extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface EmailJavascriptProxy extends script.fencing.ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.email.service.EmailServiceSendConfigJavascriptProxy" Java class.
                     * @export
                     * @Interface EmailServiceSendConfigJavascriptProxy
                     * @description Library: glide-email-notification-16.6.0.3.jar;
                     * Java declaration: 'public class EmailServiceSendConfigJavascriptProxy extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface EmailServiceSendConfigJavascriptProxy extends script.fencing.ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.email.service.SendEmailResponseJavascriptProxy" Java class.
                     * @export
                     * @Interface SendEmailResponseJavascriptProxy
                     * @description Library: glide-email-notification-16.6.0.3.jar;
                     * Java declaration: 'public class SendEmailResponseJavascriptProxy extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface SendEmailResponseJavascriptProxy extends script.fencing.ScopedScriptableObject {
                    }
                }
            }

            export namespace flow_trigger {
                export namespace trigger {
                    /**
                     * Represents the "com.glide.flow_trigger.trigger.ScopedTriggerAPI" Java class.
                     * @export
                     * @Interface ScopedTriggerAPI
                     * @description Library: glide-flow-service-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedTriggerAPI extends com.glide.script.fencing.ScopedScriptableObject implements com.glide.util.IConstants, com.glide.schedule.ISchedulerConstants'.
                     */
                    export interface ScopedTriggerAPI extends script.fencing.ScopedScriptableObject {
                    }
                }
            }

            export namespace graphql {
                export namespace element {
                    /**
                     * Represents the "GraphQL Schema" element type ("com.glide.graphql.element.GlideElementGraphQLSchema" Java class).
                     * @export
                     * @interface GlideElementGraphQLSchema
                     * @description Internal type: 'graphql_schema';
                     * scalar_type: 'string'; scalar_length: 4000;
                     * Library: graphql-java-8.0.0-snc-9.jar;
                     * Java declaration: 'public static class GlideElementGraphQLSchema extends graphql.schema.GraphQLSchema'.
                     */
                    export interface GlideElementGraphQLSchema { }
                }
            }

            export namespace glideobject {
                /**
                 * Represents the "com.glide.glideobject.AGlideObject" Java class.
                 * @export
                 * @Interface AGlideObject
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public abstract class AGlideObject implements com.glide.glideobject.IGlideObject'.
                 */
                export interface AGlideObject extends java.lang.Object { }

                /**
                 * Represents the "com.glide.glideobject.CalXofY" Java class.
                 * @export
                 * @Interface CalXofY
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public abstract class CalXofY extends AGlideObject implements com.glide.util.IConstants'.
                 */
                export interface CalXofY extends AGlideObject { }

                /**
                 * Represents the "Calendar Date/Time" element ("com.glide.glideobject.CalendarDateTime" Java class).
                 * @export
                 * @Interface CalendarDateTime
                 * @description Internal type: 'calendar_date_time';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class CalendarDateTime extends GlideDateTime implements com.glide.script.fencing.IScopedApi'.
                 */
                export interface CalendarDateTime extends GlideDateTime { }

                /**
                 * Represents the "Other Date" element ("com.glide.glideobject.GlideDate" Java class).
                 * @export
                 * @Interface GlideDate
                 * @description Internal type: 'date';
                 * scalar_type: 'date';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideDate extends GlideDateTime'.
                 */
                export interface GlideDate extends GlideDateTime { }

                /**
                 * Represents the "Day of Week" element ("com.glide.glideobject.DayOfWeek" Java class).
                 * @export
                 * @Interface DayOfWeek
                 * @description Internal type: 'day_of_week';
                 * scalar_type: 'integer';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class DayOfWeek extends CalXofY'.
                 */
                export interface DayOfWeek extends CalXofY { }

                /**
                 * Represents the "Due Date" element ("com.glide.glideobject.GlideDueDate" Java class).
                 * @export
                 * @Interface GlideDueDate
                 * @description Internal type: 'due_date';
                 * scalar_type: 'datetime';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideDueDate extends GlideDateTime'.
                 */
                export interface GlideDueDate extends GlideDateTime { }

                /**
                 * Represents the "UI Action List" element ("com.glide.glideobject.GlideActionList" Java class).
                 * @export
                 * @Interface GlideActionList
                 * @description Internal type: 'glide_action_list';
                 * scalar_type: 'string'; scalar_type: 1024;
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideActionList extends GlideList'.
                 */
                export interface GlideActionList extends GlideList { }

                /**
                 * Represents the "UI Action List" element ("com.glide.glideobject.GlideDate" Java class).
                 * @export
                 * @Interface Date
                 * @description Internal type: 'glide_date';
                 * scalar_type: 'date';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideDate extends GlideDateTime'.
                 */
                export interface Date extends GlideDateTime { }

                /**
                 * Represents the "Date/Time" element ("com.glide.glideobject.GlideDateTime" Java class).
                 * @export
                 * @Interface GlideDateTime
                 * @description Internal type: 'glide_date_time';
                 * scalar_type: 'datetime';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideDateTime extends AGlideObject implements com.glide.util.IConstants, com.glide.util.IDateConstants, com.glide.util.IProperties, IXMLTranslator, Comparable, com.snc.process_flow.val.IPFDateTime'.
                 */
                export interface GlideDateTime extends AGlideObject { }

                /**
                 * Represents the "Duration" element ("com.glide.glideobject.GlideDuration" Java class).
                 * @export
                 * @Interface GlideDuration
                 * @description Internal type: 'glide_duration';
                 * scalar_type: 'datetime';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideDuration extends GlideTime'.
                 */
                export interface GlideDuration extends GlideTime { }

                /**
                 * Represents the "List" element ("com.glide.glideobject.GlideList" Java class).
                 * @export
                 * @Interface GlideList
                 * @description Internal type: 'glide_list';
                 * scalar_type: 'string'; scalar_type: 1024;
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideList extends GlideObject implements com.glide.util.IConstants, IManyToManyConstants'.
                 */
                export interface GlideList extends AGlideObject { }

                /**
                 * Represents the "Precise Time" element ("com.glide.glideobject.GlidePreciseTime" Java class).
                 * @export
                 * @Interface GlidePreciseTime
                 * @description Internal type: 'glide_precise_time';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlidePreciseTime extends GlideDateTime'.
                 */
                export interface GlidePreciseTime extends GlideDateTime { }

                /**
                 * Represents the "Time" element ("com.glide.glideobject.GlideTime" Java class).
                 * @export
                 * @Interface GlideTime
                 * @description Internal type: 'glide_time';
                 * scalar_type: 'datetime';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideTime extends GlideDateTime'.
                 */
                 export interface GlideTime extends GlideDateTime { }

                /**
                 * Represents the "Time" element ("com.glide.glideobject.GlideUTCTime" Java class).
                 * @export
                 * @Interface GlideUTCTime
                 * @description Internal type: 'glide_utc_time';
                 * scalar_type: 'datetime';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideUTCTime extends GlideTime'.
                 */
                 export interface GlideUTCTime extends GlideTime { }

                /**
                 * Represents the "HTML" element ("com.glide.glideobject.GlideHTML" Java class).
                 * @export
                 * @Interface GlideHTML
                 * @description Internal type: 'html';
                 * scalar_type: 'string'; scalar_type: 65536;
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideHTML extends GlideObject implements ISecurityConstants'.
                 */
                export interface GlideHTML extends AGlideObject { }

                /**
                 * Represents the "Integer Date" element ("com.glide.glideobject.IntegerDate" Java class).
                 * @export
                 * @Interface IntegerDate
                 * @description Internal type: 'integer_date';
                 * scalar_type: 'integer';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class IntegerDate extends AGlideObject implements com.glide.util.IDateConstants, com.glide.util.IProperties, Comparable, IXMLTranslator'.
                 */
                export interface IntegerDate extends AGlideObject { }

                /**
                 * Represents the "Integer Time" element ("com.glide.glideobject.IntegerTime" Java class).
                 * @export
                 * @Interface IntegerTime
                 * @description Internal type: 'integer_time';
                 * scalar_type: 'integer';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class IntegerTime extends AGlideObject implements com.glide.util.IProperties, Comparable, IXMLTranslator'.
                 */
                export interface IntegerTime extends AGlideObject { }

                /**
                 * Represents the "Journal" element ("com.glide.glideobject.Journal" Java class).
                 * @export
                 * @Interface Journal
                 * @description Internal type: 'journal';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public final class Journal extends GlideObject implements IJournalConstants'.
                 */
                export interface Journal extends AGlideObject { }

                /**
                 * Represents the "Journal Input" element ("com.glide.glideobject.Journal" Java class).
                 * @export
                 * @Interface Journal
                 * @description Internal type: 'journal_input';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public final class Journal extends GlideObject implements IJournalConstants'.
                 */
                export interface Journal extends AGlideObject { }

                /**
                 * Represents the "Journal List" element ("com.glide.glideobject.Journal" Java class).
                 * @export
                 * @Interface Journal
                 * @description Internal type: 'journal_list';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public final class Journal extends GlideObject implements IJournalConstants'.
                 */
                export interface Journal extends AGlideObject { }

                /**
                 * Represents the "Mask Code" element ("com.glide.glideobject.MaskCode" Java class).
                 * @export
                 * @Interface MaskCode
                 * @description Internal type: 'mask_code';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class MaskCode extends AGlideObject implements com.glide.util.IConstants'.
                 */
                export interface MaskCode extends AGlideObject { }

                /**
                 * Represents the "Month of Year" element ("com.glide.glideobject.MonthOfYear" Java class).
                 * @export
                 * @Interface MonthOfYear
                 * @description Internal type: 'month_of_year';
                 * scalar_type: 'integer';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class MonthOfYear extends CalXofY'.
                 */
                export interface MonthOfYear extends CalXofY { }

                /**
                 * Represents the "Schedule Date/Time" element ("com.glide.glideobject.ScheduleDateTime" Java class).
                 * @export
                 * @Interface ScheduleDateTime
                 * @description Internal type: 'schedule_date_time';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScheduleDateTime extends AGlideObject implements com.glide.util.IDateConstants, com.glide.util.IProperties, Comparable, IXMLTranslator'.
                 */
                export interface ScheduleDateTime extends AGlideObject { }

                /**
                 * Represents the "Timer" element ("com.glide.glideobject.GlideDuration" Java class).
                 * @export
                 * @Interface GlideDuration
                 * @description Internal type: 'timer';
                 * scalar_type: 'datetime';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideDuration extends GlideTime'.
                 */
                export interface GlideDuration extends GlideTime { }

                /**
                 * Represents the "Translated" element ("com.glide.glideobject.Translated" Java class).
                 * @export
                 * @Interface Translated
                 * @description Internal type: 'translated';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class Translated extends GlideObject implements com.glide.util.IConstants, com.glide.util.IProperties'.
                 */
                export interface Translated extends AGlideObject { }

                /**
                 * Represents the "User Input" element ("com.glide.glideobject.GlideUserInput" Java class).
                 * @export
                 * @Interface GlideUserInput
                 * @description Internal type: 'user_input';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideUserInput extends GlideObject implements com.glide.util.IQueryConstants'.
                 */
                export interface GlideUserInput extends AGlideObject { }

                /**
                 * Represents the "Week of Month" element ("com.glide.glideobject.WeekOfMonth" Java class).
                 * @export
                 * @Interface WeekOfMonth
                 * @description Internal type: 'week_of_month';
                 * scalar_type: 'integer';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class WeekOfMonth extends CalXofY'.
                 */
                export interface WeekOfMonth extends CalXofY { }

                /**
                 * Represents the "WMS Job" element ("com.glide.glideobject.GlideObject" Java class).
                 * @export
                 * @Interface GlideObject
                 * @description Internal type: 'wms_job';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideObject extends AGlideObject'.
                 */
                export interface GlideObject extends AGlideObject { }

                /**
                 * Represents the "com.glide.glideobject.StringBoolean" Java class.
                 * @export
                 * @Interface StringBoolean
                 * @description Internal type: 'string_boolean';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class StringBoolean extends AGlideObject implements com.glide.util.IConstants'.
                 */
                export interface StringBoolean extends AGlideObject { }

                /**
                 * Represents the "com.glide.glideobject.CalendarDateTime" Java class.
                 * @export
                 * @Interface CalendarDateTime
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class CalendarDateTime extends com.glide.glideobject.GlideDateTime implements com.glide.script.fencing.IScopedApi'.
                 */
                export interface CalendarDateTime extends GlideDateTime { }

                /**
                 * Represents the "com.glide.glideobject.GlideDate" Java class.
                 * @export
                 * @Interface GlideDate
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideDate extends com.glide.glideobject.GlideDateTime'.
                 */
                export interface GlideDate extends GlideDateTime { }

                /**
                 * Represents the "com.glide.glideobject.GlideDateTime" Java class.
                 * @export
                 * @Interface GlideDateTime
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideDateTime extends com.glide.glideobject.AGlideObject implements com.glide.util.IConstants, com.glide.util.IDateConstants, com.glide.utilIProperties, com.glide.glideobject.IXMLTranslator, java.lang.Comparable, com.snc.process_flow.val.IPFDateTime'.
                 */
                export interface GlideDateTime extends AGlideObject { }

                /**
                 * Represents the "com.glide.glideobject.GlideDuration" Java class.
                 * @export
                 * @Interface GlideDuration
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideDuration extends com.glide.glideobject.GlideTime'.
                 */
                export interface GlideDuration extends GlideTime { }

                /**
                 * Represents the "com.glide.glideobject.GlideTime" Java class.
                 * @export
                 * @Interface GlideTime
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideTime extends com.glide.glideobject.GlideDateTime'.
                 */
                export interface GlideTime extends GlideDateTime { }

                /**
                 * Represents the "com.glide.glideobject.ScheduleDateTime" Java class.
                 * @export
                 * @Interface ScheduleDateTime
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScheduleDateTime extends com.glide.glideobject.AGlideObject implements com.glide.util.IDateConstants, com.glide.utilIProperties, java.lang.Comparable, com.glide.glideobject.IXMLTranslator'.
                 */
                export interface ScheduleDateTime extends AGlideObject { }

                /**
                 * Represents the "Name/Values" element type ("com.glide.glideobject.GlideElementNameValue" Java class).
                 * @export
                 * @interface GlideElementNameValue
                 * @description Internal type: 'name_values';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementNameValue extends com.glide.script.GlideElement'.
                 */
                export interface GlideElementNameValue extends script.GlideElement { }
            }

            export namespace kmf {
                export interface KMFCryptoModule extends script.fencing.ScopedScriptableObject {
                    wrapKeyFromBytes(base64KeyBytes: $$rhino.String): $$rhino.String;
                    wrapKeyFromBytesForAlgorithm(base64KeyBytes: $$rhino.String, algorithm: $$rhino.String): $$rhino.String;
                    unwrapKey(formattedWrappedKey: $$rhino.String): $$rhino.String;
                    unwrapKeyForAlgorithm(formattedWrappedKey: $$rhino.String, algorithm: $$rhino.String): $$rhino.String;
                    wrapKeyFromSysId(keySysId: $$rhino.String): $$rhino.String;
                    decryptData(data: $$rhino.String): $$rhino.String;
                    generateMac(data: $$rhino.String): $$rhino.String;
                    verifyMac(data: $$rhino.String, expectedMac: $$rhino.String): $$rhino.Boolean;
                    asymmetricEncryptData(data: $$rhino.String): $$rhino.String;
                    asymmetricDecryptData(data: $$rhino.String): $$rhino.String;
                    asymmetricWrapKeyFromBytes(base64KeyBytes: $$rhino.String): $$rhino.String;
                    asymmetricWrapKeyFromBytesForAlgorithm(base64KeyBytes: $$rhino.String, algo: $$rhino.String): $$rhino.String;
                    asymmetricWrapKeyFromSysId(data: $$rhino.String): $$rhino.String;
                    asymmetricUnwrapKey(data: $$rhino.String): $$rhino.String;
                    asymmetricUnwrapKeyForAlgorithm(base64KeyBytes: $$rhino.String, algo: $$rhino.String): $$rhino.String;
                    sign(data: $$rhino.String): $$rhino.String;
                    verifySignature(signature: $$rhino.String, data: $$rhino.String): $$rhino.Boolean;
                    discard(): void;
                }
            }

            export namespace labels {
                /**
                 * Represents the "Related Tags" element type ("com.glide.labels.GlideElementRelatedTags" Java class).
                 * @export
                 * @interface GlideElementRelatedTags
                 * @description Internal type: 'related_tags';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementRelatedTags extends com.glide.script.GlideElement'.
                 */
                export interface GlideElementRelatedTags extends script.GlideElement { }
            }

            export namespace metadata {
                /**
                 * Represents the "com.glide.metadata.MetadataLinkUtil" Java class.
                 * @export
                 * @Interface MetadataLinkUtil
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class MetadataLinkUtil extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface MetadataLinkUtil extends script.fencing.ScopedScriptableObject {
                }
            }

            export namespace notification {
                /**
                 * Represents the "com.glide.notification.ScopedEmailLogger" Java class.
                 * @export
                 * @Interface ScopedEmailLogger
                 * @description Library: glide-email-notification-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedEmailLogger extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface ScopedEmailLogger extends script.fencing.ScopedScriptableObject {
                }

                export namespace inbound {
                    /**
                     * Represents the "com.glide.notification.inbound.ScopedEmailWrapper" Java class.
                     * @export
                     * @Interface ScopedEmailWrapper
                     * @description Wraps java class "com.glide.notification.inbound.EmailWrapper".
                     * Library: glide-email-notification-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedEmailWrapper extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedEmailWrapper extends script.fencing.WrappedScriptableObject {
                    }
                }

                export namespace outbound {
                    /**
                     * Represents the "com.glide.notification.outbound.ScopedEmailOutbound" Java class.
                     * @export
                     * @Interface ScopedEmailOutbound
                     * @description Wraps java class "com.glide.notification.outbound.EmailOutbound".
                     * Library: glide-email-notification-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedEmailOutbound implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedEmailOutbound extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.notification.outbound.ScopedTemplatePrinter" Java class.
                     * @export
                     * @Interface ScopedTemplatePrinter
                     * @description Wraps java class "com.glide.notification.outbound.TemplatePrinter".
                     * Library: glide-email-notification-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedTemplatePrinter extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedTemplatePrinter extends script.fencing.WrappedScriptableObject {
                    }
                }
            }

            export namespace PhoneNumber {
                /**
                 * Represents the "Phone Number (E164)" element type ("com.glide.PhoneNumber.GlideElementPhoneNumber" Java class).
                 * @export
                 * @Interface GlideElementPhoneNumber
                 * @description Internal type: 'phone_number_e164';
                 * scalar_type: 'string';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementPhoneNumber extends com.glide.script.GlideElement'.
                 */
                export interface GlideElementPhoneNumber extends script.GlideElement, java.lang.String {
                }
            }

            export namespace schedules {
                /**
                 * Represents the "com.glide.schedules.Schedule" Java class.
                 * @export
                 * @Interface Schedule
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class Schedule'.
                 */
                export interface Schedule extends java.lang.Object {
                }

                /**
                 * Represents the "com.glide.schedules.ScheduleDateTimeSpan" Java class.
                 * @export
                 * @Interface ScheduleDateTimeSpan
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScheduleDateTimeSpan implements java.lang.Comparable'.
                 */
                export interface ScheduleDateTimeSpan extends java.lang.Object {
                }

                /**
                 * Represents the "com.glide.schedules.ScheduleTimeMap" Java class.
                 * @export
                 * @Interface ScheduleTimeMap
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScheduleTimeMap'.
                 */
                export interface ScheduleTimeMap extends java.lang.Object {
                }

                /**
                 * Represents the "com.glide.schedules.ScheduleTimeSpan" Java class.
                 * @export
                 * @Interface ScheduleTimeSpan
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScheduleTimeSpan'.
                 */
                export interface ScheduleTimeSpan extends java.lang.Object {
                }
            }

            export namespace script {
                /**
                 * Represents the "com.glide.script.AScriptableObject" Java class.
                 * @export
                 * @Interface AScriptableObject
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public abstract class AScriptableObject extends org.mozilla.javascript.ScriptableObject'.
                 */
                export interface AScriptableObject extends org.mozilla.javascript.ScriptableObject {
                }

                /**
                 * Represents the "com.glide.script.GlideAggregate" Java class.
                 * @export
                 * @Interface GlideAggregate
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideAggregate extends com.glide.script.GlideRecord implements com.glide.db.IAggregateConstants'.
                 */
                export interface GlideAggregate extends GlideRecord {
                }

                /**
                 * Represents the "com.glide.script.GlideAggregateSandbox" Java class.
                 * @export
                 * @Interface GlideAggregateSandbox
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideAggregateSandbox extends com.glide.script.GlideAggregate implements com.glide.script.INonShared, org.mozilla.javascript.IDoNotInheritJSMembers, com.glide.script.IAclAware'.
                 */
                export interface GlideAggregateSandbox extends GlideAggregate {
                }

                export interface GlideController {
                    /*
                        close
                        enforceSecurity
                        enforcingSecurity
                        equals
                        evaluate
                        evaluateAsObject
                        evaluateGeneratedString
                        evaluateSilent
                        evaluateString
                        evaluateStringWithPrefix
                        exceptionHandler
                        getClass
                        getExceptionHandler
                        getGlobalScope
                        getSlowEvalWarn
                        globalScope
                        hashCode
                        haveError
                        interpretedMode
                        interpretString
                        isEnforcingSecurity
                        legacyStrictMode
                        locate
                        notify
                        notifyAll
                        putAction
                        setEnforceSecurity
                        setExceptionHandler
                        setInterpretedMode
                        setLegacyStrictMode
                        slowEvalWarn
                        toString
                        tryQuickEval
                        wait
                    */
                }

                /**
                 * Represents the "com.glide.script.GlideElement" Java class.
                 * @export
                 * @Interface GlideElement
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElement extends com.glide.script.GlideScriptableObject implements com.glide.script.IGlideElement, com.glide.script.IScriptConstants, com.glide.db.IDBConstants, com.glide.util.IProperties, org.mozilla.javascript.IPrimitiveWrapper, org.mozilla.javascript.Wrapper, com.glide.sys.security.ISecurityConstants, com.glide.sys.fencing.IScopable'.
                 */
                export interface GlideElement extends GlideScriptableObject {
                }

                /**
                 * Represents the "com.glide.script.GlideRecord" Java class.
                 * @export
                 * @Interface GlideRecord
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideRecord extends org.mozilla.javascript.ScriptableObject implements com.glide.data.access.IValueGetter, com.glide.script.IScriptConstants, com.glide.db.IDBConstants, com.glide.util.IProperties, com.glide.util.IQueryConstants, com.glide.sys.security.ISecurityConstants, com.glide.script.IGlideRecordConstants, com.glide.data.access.IDataAccessHints, com.glide.util.IGlideRecord, com.snc.db.replicate.IReplicateConstants, com.glide.data_policy.IDataPolicy, com.glide.sys.fencing.IScopable, com.glide.sys.IRecordIdentifier, com.glide.data.access.ITableOwner'.
                 */
                export interface GlideRecord extends org.mozilla.javascript.ScriptableObject {
                }

                /**
                 * Represents the "com.glide.script.GlideRecordSandbox" Java class.
                 * @export
                 * @Interface GlideRecordSandbox
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideRecordSandbox extends com.glide.script.GlideRecordSecure implements com.glide.script.INonShared, org.mozilla.javascript.IDoNotInheritJSMembers'.
                 */
                export interface GlideRecordSandbox extends GlideRecordSecure {
                }

                /**
                 * Represents the "com.glide.script.GlideRecordSecure" Java class.
                 * @export
                 * @Interface GlideRecordSecure
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideRecordSecure extends com.glide.script.GlideRecord implements com.glide.script.IAclAware'.
                 */
                export interface GlideRecordSecure extends GlideRecord {
                }

                /**
                 * Represents the "GlideScriptableObject" java class.
                 * @export
                 * @interface GlideScriptableObject
                 * @description Library: commons-glide-16.6.0.3.jar;
                 * Java declaration: 'public abstract class GlideScriptableObject extends ScriptableObject implements IGlideScriptableObject'.
                 */
                export interface GlideScriptableObject extends org.mozilla.javascript.ScriptableObject {
                }

                /**
                 * Represents the "com.glide.script.GlideSystem" Java class.
                 * @export
                 * @Interface GlideSystem
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideSystem extends com.glide.script.GlideScriptableObject implements com.glide.script.INonShared, com.glide.script.IScriptConstants, com.glide.util.IProperties, com.glide.ui.UIConstants, com.glide.util.IQueryConstants'.
                 */
                export interface GlideSystem extends GlideScriptableObject {
                }

                /**
                 * Represents the "com.glide.script.SOAPDocument2" Java class.
                 * @export
                 * @Interface SOAPDocument2
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class SOAPDocument2 extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface SOAPDocument2 extends fencing.ScopedScriptableObject {
                }

                /**
                 * Represents the "com.glide.script.XMLDocument2" Java class.
                 * @export
                 * @Interface XMLDocument2
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class XMLDocument2 extends com.glide.script.AScriptableObject'.
                 */
                export interface XMLDocument2 extends AScriptableObject {
                }

                /**
                 * Represents the "com.glide.script.XMLNode" Java class.
                 * @export
                 * @Interface XMLNode
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class XMLNode extends com.glide.script.AScriptableObject'.
                 */
                export interface XMLNode extends AScriptableObject {
                }

                /**
                 * Represents the "com.glide.script.XMLNodeIterator" Java class.
                 * @export
                 * @Interface XMLNodeIterator
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class XMLNodeIterator extends com.glide.script.AScriptableObject'.
                 */
                export interface XMLNodeIterator extends AScriptableObject {
                }

                export namespace fencing {
                    /**
                     * Represents the "com.glide.script.fencing.GlideAvatarFinder" Java class.
                     * @export
                     * @Interface GlideAvatarFinder
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideAvatarFinder extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface GlideAvatarFinder extends ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.GlideDigest" Java class.
                     * @export
                     * @Interface GlideDigest
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideDigest extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface GlideDigest extends ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.GlideSysAttachment" Java class.
                     * @export
                     * @Interface GlideSysAttachment
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideSysAttachment extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface GlideSysAttachment extends ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.GlideTableHierarchy" Java class.
                     * @export
                     * @Interface GlideTableHierarchy
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideTableHierarchy extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface GlideTableHierarchy extends ScopedScriptableObject {
                        /**
                         * Returns an array of strings containing all tables that extend the current table and includes the current table.
                         * @return {string[]} Returns an array of strings containing all tables that extend the current table and includes the current table.
                         * @memberof GlideTableHierarchy
                         */
                        getAllExtensions(): string[];

                        /**
                         * Returns the parent class.
                         * @return {string} The parent class or the name of the current class if a top-level class.
                         * @memberof GlideTableHierarchy
                         */
                        getBase(): string;

                        /**
                         * Returns an array of strings containing all classes in the hierarchy of the current table.
                         * @return {string[]} An array of strings of the classes in the hierarchy.
                         * @memberof GlideTableHierarchy
                         */
                        getHierarchy(): string[];

                        /**
                         * Returns the table's name.
                         * @return {string} The table's name.
                         * @memberof GlideTableHierarchy
                         */
                        getName(): string;

                        /**
                         * Returns the top level class in the hierarchy.
                         * @return {string} Name of the root class.
                         * @memberof GlideTableHierarchy
                         */
                        getRoot(): string;

                        /**
                         * Returns an array of strings containing all tables that extend the current table.
                         * @return {string[]} An array of strings containing the tables that extend the current table.
                         * @memberof GlideTableHierarchy
                         */
                        getTableExtensions(): string[];

                        /**
                         * Returns an array of strings of the table names in the hierarchy.
                         * @return {string[]} An array of strings containing the names of tables in the hierarchy.
                         * @memberof GlideTableHierarchy
                         */
                        getTables(): string[];

                        /**
                         * Returns true of this class has been extended.
                         * @return {boolean} True if the current table has extensions.
                         * @memberof GlideTableHierarchy
                         */
                        hasExtensions(): boolean;

                        /**
                         * Returns true if this is a base class.
                         * @return {boolean} True if the current table has no parent and has extensions.
                         * @memberof GlideTableHierarchy
                         */
                        isBaseClass(): boolean;

                        /**
                         * Returns true if this table is not in a hierarchy.
                         * @return {boolean} True if the current table has no parent and no extensions.
                         * @memberof GlideTableHierarchy
                         */
                        isSoloClass(): boolean;
                    }

                    /**
                     * Represents the "com.glide.script.fencing.GlideTextReader" Java class.
                     * @export
                     * @Interface GlideTextReader
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideTextReader extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface GlideTextReader extends ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedAction" Java class.
                     * @export
                     * @Interface ScopedAction
                     * @description Wraps java class "com.glide.script.Action".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedAction implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedAction extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedAJAXScheduleItem" Java class.
                     * @export
                     * @Interface ScopedAJAXScheduleItem
                     * @description Wraps java class "com.glide.schedules.AJAXScheduleItem".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedAJAXScheduleItem implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedAJAXScheduleItem extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedAJAXSchedulePage" Java class.
                     * @export
                     * @Interface ScopedAJAXSchedulePage
                     * @description Wraps java class "com.glide.schedules.AJAXSchedulePage".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedAJAXSchedulePage implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedAJAXSchedulePage extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedChoice" Java class.
                     * @export
                     * @Interface ScopedChoice
                     * @description Wraps java class "com.glide.choice.Choice".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedChoice implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedChoice extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedChoiceList" Java class.
                     * @export
                     * @Interface ScopedChoiceList
                     * @description Wraps java class "com.glide.choice.ChoiceList".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedChoiceList implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedChoiceList extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedContextMenu" Java class.
                     * @export
                     * @Interface ScopedContextMenu
                     * @description Wraps java class "com.glide.db_context_menu.ContextMenu".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedContextMenu implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedContextMenu extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedElementDescriptor" Java class.
                     * @export
                     * @Interface ScopedElementDescriptor
                     * @description Wraps java class "com.glide.db.ElementDescriptor".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedElementDescriptor implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedElementDescriptor extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideAggregate" Java class.
                     * @export
                     * @Interface ScopedGlideAggregate
                     * @description Wraps java class "com.glide.script.GlideAggregate".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideAggregate extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedGlideAggregate extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideDate" Java class.
                     * @export
                     * @Interface ScopedGlideDate
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideDate extends com.glide.glideobject.GlideDate implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideDate extends glideobject.GlideDate {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideDateTime" Java class.
                     * @export
                     * @Interface ScopedGlideDateTime
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideDateTime extends com.glide.glideobject.GlideDateTime implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideDateTime extends glideobject.GlideDateTime {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideDuration" Java class.
                     * @export
                     * @Interface ScopedGlideDuration
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideDuration extends com.glide.glideobject.GlideDuration implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideDuration extends glideobject.GlideDuration {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideElement" Java class.
                     * @export
                     * @Interface ScopedGlideElement
                     * @description Wraps java class "com.glide.script.GlideElement".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideElement extends com.glide.script.fencing.WrappedScriptableObject implements org.mozilla.javascript.IPrimitiveWrapper'.
                     */
                    export interface ScopedGlideElement extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideExecutionTracker" Java class.
                     * @export
                     * @Interface ScopedGlideExecutionTracker
                     * @description Wraps java class "com.glide.worker.GlideExecutionTracker".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideExecutionTracker extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedGlideExecutionTracker extends WrappedScriptableObject {
                    }
                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideFilter" Java class.
                     * @export
                     * @Interface ScopedGlideFilter
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideFilter extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface ScopedGlideFilter extends ScopedScriptableObject {
                        // Wraps com.glide.script.Filter?
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideFormScratchpad" Java class.
                     * @export
                     * @Interface ScopedGlideFormScratchpad
                     * @description Wraps java class "com.glide.script.GlideFormScratchpad".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideFormScratchpad extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedGlideFormScratchpad extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideLocale" Java class.
                     * @export
                     * @Interface ScopedGlideLocale
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideLocale extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface ScopedGlideLocale extends ScopedScriptableObject {
                        // Wraps com.glide.sys.GlideLocale?
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlidePluginManager" Java class.
                     * @export
                     * @Interface ScopedGlidePluginManager
                     * @description Wraps java class "com.glide.sys.PluginManager".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlidePluginManager extends com.glide.sys.PluginManager implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlidePluginManager extends sys.PluginManager {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideRecord" Java class.
                     * @export
                     * @Interface ScopedGlideRecord
                     * @description Wraps java class "com.glide.script.GlideRecord".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideRecord extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedGlideRecord extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideRecordSecure" Java class.
                     * @export
                     * @Interface ScopedGlideRecordSecure
                     * @description Wraps java class "com.glide.script.GlideRecordSecure".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideRecordSecure extends com.glide.script.fencing.ScopedGlideRecord'.
                     */
                    export interface ScopedGlideRecordSecure extends ScopedGlideRecord {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideSchedule" Java class.
                     * @export
                     * @Interface ScopedGlideSchedule
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideSchedule extends com.glide.schedules.Schedule implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideSchedule extends schedules.Schedule {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideScheduleDateTime" Java class.
                     * @export
                     * @Interface ScopedGlideScheduleDateTime
                     * @description  Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideScheduleDateTime extends com.glide.glideobject.ScheduleDateTime implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideScheduleDateTime extends glideobject.ScheduleDateTime {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideScheduleDateTimeSpan" Java class.
                     * @export
                     * @Interface ScopedGlideScheduleDateTimeSpan
                     * @description  Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideScheduleDateTimeSpan extends com.glide.schedules.ScheduleDateTimeSpan implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideScheduleDateTimeSpan extends schedules.ScheduleDateTimeSpan {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideScheduleTimeMap" Java class.
                     * @export
                     * @Interface ScopedGlideScheduleTimeMap
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideScheduleTimeMap extends com.glide.schedules.ScheduleTimeMap implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideScheduleTimeMap extends schedules.ScheduleTimeMap {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideScheduleTimeSpan" Java class.
                     * @export
                     * @Interface ScopedGlideScheduleTimeSpan
                     * @description  Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideScheduleTimeSpan extends com.glide.schedules.ScheduleTimeSpan implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideScheduleTimeSpan extends schedules.ScheduleTimeSpan {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideScriptedProcessor" Java class.
                     * @export
                     * @Interface ScopedGlideScriptedProcessor
                     * @description Wraps java class "com.glide.processors.ScriptedProcessor".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideScriptedProcessor implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideScriptedProcessor extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideServletRequest" Java class.
                     * @export
                     * @Interface ScopedGlideServletRequest
                     * @description Wraps java class "com.glide.ui.GlideServletRequest".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideServletRequest implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideServletRequest extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideServletResponse" Java class.
                     * @export
                     * @Interface ScopedGlideServletResponse
                     * @description Wraps java class "com.glide.ui.GlideServletResponse".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideServletResponse implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideServletResponse extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideSession" Java class.
                     * @export
                     * @Interface ScopedGlideSession
                     * @description Wraps java class "com.glide.sys.GlideSession".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideSession implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideSession extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideSystem" Java class.
                     * @export
                     * @Interface ScopedGlideSystem
                     * @description Wraps java class "com.glide.script.GlideSystem".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideSystem extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedGlideSystem extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideTemplate" Java class.
                     * @export
                     * @Interface ScopedGlideTemplate
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideTemplate extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface ScopedGlideTemplate extends ScopedScriptableObject {
                        // Wraps com.glide.script.Template?
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideTime" Java class.
                     * @export
                     * @Interface ScopedGlideTime
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideTime extends com.glide.glideobject.GlideTime implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedGlideTime extends glideobject.GlideTime {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideUICompatibility" Java class.
                     * @export
                     * @Interface ScopedGlideUICompatibility
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideUICompatibility extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface ScopedGlideUICompatibility extends ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedGlideURI" Java class.
                     * @export
                     * @Interface ScopedGlideURI
                     * @description Wraps java class "com.glide.ui.GlideURI".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedGlideURI extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface ScopedGlideURI extends ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedHTTPHeader" Java class.
                     * @export
                     * @Interface ScopedHTTPHeader
                     * @description Wraps java class "com.glide.communications.HTTPHeader".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedHTTPHeader implements com.glide.script.fencing.IScopedApi, com.glide.communications.IHTTPHeader'.
                     */
                    export interface ScopedHTTPHeader extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedQueryCondition" Java class.
                     * @export
                     * @Interface ScopedQueryCondition
                     * @description Wraps java class "com.glide.db.conditions.QueryCondition".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedQueryCondition extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface ScopedQueryCondition extends ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedRenderJavascript" Java class.
                     * @export
                     * @Interface ScopedRenderJavascript
                     * @description Wraps java class "com.glide.ui.portal.RenderJavascript".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedRenderJavascript implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedRenderJavascript extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedRenderProperties" Java class.
                     * @export
                     * @Interface ScopedRenderProperties
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedRenderProperties implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedRenderProperties extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedScriptableObject" Java class.
                     * @export
                     * @Interface ScopedScriptableObject
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public abstract class ScopedScriptableObject extends org.mozilla.javascript.ScriptableObject implements com.glide.script.fencing.IScopedScriptable, org.apache.commons.jexl.IJexlScopedScriptable'.
                     */
                    export interface ScopedScriptableObject extends org.mozilla.javascript.ScriptableObject {
                        // TODO: Implement isScopedObject from com.glide.script.fencing.ScopedScriptableObject
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedScriptedHierarchicalWorker" Java class.
                     * @export
                     * @Interface ScopedScriptedHierarchicalWorker
                     * @description Wraps java class "com.glide.worker.ScriptedHierarchicalWorker".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedScriptedHierarchicalWorker implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedScriptedHierarchicalWorker extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedSysListControl" Java class.
                     * @export
                     * @Interface ScopedSysListControl
                     * @description Wraps java class "com.glide.ui.SysListControl".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedSysListControl implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedSysListControl extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedTransformLog" Java class.
                     * @export
                     * @Interface ScopedTransformLog
                     * @description Wraps java class "com.glide.db.impex.transformer.TransformLog".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedTransformLog implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedTransformLog extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedUser" Java class.
                     * @export
                     * @Interface ScopedUser
                     * @description Wraps java class "com.glide.sys.User".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedUser implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedUser extends java.lang.Object {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedWSParameters" Java class.
                     * @export
                     * @Interface ScopedWSParameters
                     * @description Wraps java class "com.glide.script.adaptors.WSParameters".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedWSParameters extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedWSParameters extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedWSResult" Java class.
                     * @export
                     * @Interface ScopedWSResult
                     * @description Wraps java class "com.glide.script.adaptors.WSResult".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedWSResult extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedWSResult extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedXMLDocument2" Java class.
                     * @export
                     * @Interface ScopedXMLDocument2
                     * @description Wraps java class "com.glide.script.XMLDocument2".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedXMLDocument2 extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedXMLDocument2 extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedXMLNode" Java class.
                     * @export
                     * @Interface ScopedXMLNode
                     * @description Wraps java class "com.glide.script.XMLNode".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedXMLNode extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedXMLNode extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScopedXMLNodeIterator" Java class.
                     * @export
                     * @Interface ScopedXMLNodeIterator
                     * @description Wraps java class "com.glide.script.XMLNodeIterator".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedXMLNode extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedXMLNodeIterator extends WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.ScriptableGlideScopedEvaluator" Java class.
                     * @export
                     * @Interface ScriptableGlideScopedEvaluator
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScriptableGlideScopedEvaluator extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface ScriptableGlideScopedEvaluator extends ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.fencing.WrappedScriptableObject" Java class.
                     * @export
                     * @Interface WrappedScriptableObject
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public abstract class WrappedScriptableObject extends ScopedScriptableObject implements IWrappedScriptableObject'.
                     */
                    export interface WrappedScriptableObject extends ScopedScriptableObject {
                    }

                    export namespace app_store {
                        /**
                         * Represents the "com.glide.script.fencing.app_store.ScopedAppDictionaryXMLBuilder" Java class.
                         * @export
                         * @Interface ScopedAppDictionaryXMLBuilder
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedAppDictionaryXMLBuilder extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface ScopedAppDictionaryXMLBuilder extends ScopedScriptableObject {
                        }

                        /**
                         * Represents the "com.glide.script.fencing.app_store.ScopedGlideAppLoader" Java class.
                         * @export
                         * @Interface ScopedGlideAppLoader
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedGlideAppLoader extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface ScopedGlideAppLoader extends ScopedScriptableObject {
                        }

                        /**
                         * Represents the "com.glide.script.fencing.app_store.ScopedGlideClientDate" Java class.
                         * @export
                         * @Interface ScopedGlideClientDate
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedGlideClientDate extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface ScopedGlideClientDate extends ScopedScriptableObject {
                        }

                        /**
                         * Represents the "com.glide.script.fencing.app_store.ScopedGlideHTTPUtil" Java class.
                         * @export
                         * @Interface ScopedGlideHTTPUtil
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedGlideHTTPUtil extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface ScopedGlideHTTPUtil extends ScopedScriptableObject {
                        }

                        /**
                         * Represents the "com.glide.script.fencing.app_store.ScopedGlideSysAttachment" Java class.
                         * @export
                         * @Interface ScopedGlideSysAttachment
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedGlideSysAttachment extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface ScopedGlideSysAttachment extends ScopedScriptableObject {
                        }

                        /**
                         * Represents the "com.glide.script.fencing.app_store.ScopedGlideZipInputStream" Java class.
                         * @export
                         * @Interface ScopedGlideZipInputStream
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedGlideZipInputStream extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface ScopedGlideZipInputStream extends ScopedScriptableObject {
                        }

                        /**
                         * Represents the "com.glide.script.fencing.app_store.ScopedGlideZipOutputStream" Java class.
                         * @export
                         * @Interface ScopedGlideZipOutputStream
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedGlideZipOutputStream extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface ScopedGlideZipOutputStream extends ScopedScriptableObject {
                        }

                        /**
                         * Represents the "com.glide.script.fencing.app_store.ScopedUpgradeUtil" Java class.
                         * @export
                         * @Interface ScopedUpgradeUtil
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedUpgradeUtil extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface ScopedUpgradeUtil extends ScopedScriptableObject {
                        }
                    }
                }

                export namespace glide_elements {
                    /**
                     * "Action Conditions" element type ("com.glide.script.glide_elements.GlideElementActionConditions" Java class).
                     * @export
                     * @interface GlideElementActionConditions
                     * @extends {GlideElementConditions}
                     * @description Internal type: 'action_conditions';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementConditions extends GlideElement implements IQueryConstants'.
                     */
                    export interface GlideElementActionConditions extends GlideElementConditions { }

                    /**
                     * Represents the "True/False" element type ("com.glide.script.glide_elements.GlideElementBoolean" Java class).
                     * @export
                     * @Interface GlideElementBoolean
                     * @description Internal type: 'boolean';
                     * scalar_type: 'boolean';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementBoolean extends com.glide.script.GlideElement'.
                     */
                    export interface GlideElementBoolean extends GlideElement, java.lang.Boolean { }

                    /**
                     * Represents the "Compressed" element type ("com.glide.script.glide_elements.GlideElementCompressed" Java class).
                     * @export
                     * @Interface GlideElementCompressed
                     * @description Internal type: 'compressed';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementCompressed extends GlideElement'.
                     */
                    export interface GlideElementCompressed extends GlideElement, java.lang.String { }

                    /**
                     * Represents the "Conditions" element type ("com.glide.script.glide_elements.GlideElementConditions" Java class).
                     * @export
                     * @interface GlideElementConditions
                     * @extends {GlideElement}
                     * @description Internal type: 'conditions';
                     * scalar_type: 'string'; scalar_length: 4000;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementConditions extends GlideElement implements IQueryConstants'.
                     */
                     export interface GlideElementConditions extends GlideElement { }

                    /**
                     * Represents the "Counter" element type ("com.glide.script.glide_elements.GlideElementCounter" Java class).
                     * @export
                     * @Interface GlideElementCounter
                     * @description Internal type: 'counter';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementCounter extends GlideElement'.
                     */
                    export interface GlideElementCounter extends GlideElement { }

                    /**
                     * Represents the "Document ID" element type ("com.glide.script.glide_elements.GlideElementDocumentId" Java class).
                     * @export
                     * @Interface GlideElementDocumentId
                     * @description Internal type: 'document_id';
                     * scalar_type: 'GUID'; scalar_length: 32;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementDocumentId extends GlideElementReference'.
                     */
                    export interface GlideElementDocumentId extends GlideElementReference { }

                    /**
                     * Represents the "Documentation Field" element type ("com.glide.script.glide_elements.GlideElementDocumentation" Java class).
                     * @export
                     * @Interface GlideElementDocumentation
                     * @description Internal type: 'documentation_field';
                     * scalar_type: 'string'; scalar_length: 80;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementDocumentation extends GlideElement implements com.glide.util.IConstants, IGlideElementPreTranslatable'.
                     */
                    export interface GlideElementDocumentation extends GlideElement { }

                    /**
                     * Represents the "Domain ID" element type ("com.glide.script.glide_elements.GlideElementDomainId" Java class).
                     * @export
                     * @Interface GlideElementDomainId
                     * @description Internal type: 'domain_id';
                     * scalar_type: 'GUID'; scalar_length: 32;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementDomainId extends GlideElementReference'.
                     */
                    export interface GlideElementDomainId extends GlideElementReference { }

                    /**
                     * Represents the "Encrypted Text" element type ("com.glide.script.glide_elements.GlideElementEncrypted" Java class).
                     * @export
                     * @Interface GlideElementEncrypted
                     * @description Internal type: 'glide_encrypted';
                     * scalar_type: 'string'; scalar_length: 65536;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementEncrypted extends GlideElement'.
                     */
                    export interface GlideElementEncrypted extends GlideElement, java.lang.String { }

                    /**
                     * Represents the "File Attachment" element type ("com.glide.script.glide_elements.GlideElementFileAttachment" Java class).
                     * @export
                     * @Interface GlideElementFileAttachment
                     * @description Internal type: 'file_attachment';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementFileAttachment extends GlideElementViewable'.
                     */
                    export interface GlideElementFileAttachment extends GlideElementViewable { }

                    /**
                     * Represents the "String (Full UTF-8)" element type ("com.glide.script.glide_elements.GlideElementFullUTF8" Java class).
                     * @export
                     * @Interface GlideElementFullUTF8
                     * @description Internal type: 'string_full_utf8';
                     * scalar_type: 'string'; scalar_length: 255;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementFullUTF8 extends GlideElement'.
                     */
                    export interface GlideElementFullUTF8 extends GlideElement, java.lang.String { }

                    /**
                     * Represents the "com.glide.script.glide_elements.GlideElementGlideObject" Java class.
                     * @export
                     * @Interface GlideElementGlideObject
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementGlideObject extends GlideElement implements IGlideElementGlideObject'.
                     */
                    export interface GlideElementGlideObject extends GlideElement { }

                    /**
                     * Represents the "IP Address (Validated IPV4, IPV6)" element type ("com.glide.script.glide_elements.GlideElementIPAddress" Java class).
                     * @export
                     * @Interface GlideElementIPAddress
                     * @description Internal type: 'ip_addr';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementIPAddress extends GlideElement'.
                     */
                    export interface GlideElementIPAddress extends GlideElement { }

                    /**
                     * Represents the "Icon" element type ("com.glide.script.glide_elements.GlideElementIcon" Java class).
                     * @export
                     * @Interface GlideElementIcon
                     * @description Internal type: 'icon';
                     * scalar_type: 'string'; scalar_length: 100;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementIcon extends GlideElement'.
                     */
                    export interface GlideElementIcon extends GlideElement { }

                    /**
                     * Represents the "Internal Type" element type ("com.glide.script.glide_elements.GlideElementInternalType" Java class).
                     * @export
                     * @Interface GlideElementInternalType
                     * @description Internal type: 'internal_type';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementInternalType extends GlideElement'.
                     */
                    export interface GlideElementInternalType extends GlideElement { }

                    /**
                     * Represents the "Integer" element type ("com.glide.script.glide_elements.GlideElementNumeric" Java class).
                     * @export
                     * @Interface GlideElementNumeric
                     * @description Internal type: 'integer';
                     * scalar_type: 'integer';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementNumeric extends GlideElement'.
                     */
                    export interface GlideElementNumeric extends GlideElement, java.lang.Integer { }

                    /**
                     * Represents the "com.glide.script.glide_elements.GlideElementObject" Java class.
                     * @export
                     * @Interface GlideElementObject
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementObject extends GlideElement'.
                     */
                    export interface GlideElementObject extends GlideElement { }

                    /**
                     * Represents the "Password (1 Way Encrypted)" element type ("com.glide.script.glide_elements.GlideElementPassword" Java class).
                     * @export
                     * @Interface GlideElementPassword
                     * @description Internal type: 'password';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementPassword extends GlideElement'.
                     */
                    export interface GlideElementPassword extends GlideElement, java.lang.String { }

                    /**
                     * Represents the "Password (2 Way Encrypted)" element type ("com.glide.script.glide_elements.GlideElementPassword2" Java class).
                     * @export
                     * @Interface GlideElementPassword2
                     * @description Internal type: 'password2';
                     * scalar_type: 'string'; scalar_length: 255;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementPassword2 extends GlideElement implements IDecryptable'.
                     */
                    export interface GlideElementPassword2 extends GlideElement, java.lang.String { }

                    /**
                     * Represents the "Reference" element type ("com.glide.script.glide_elements.GlideElementReference" Java class).
                     * @export
                     * @Interface GlideElementReference
                     * @description Internal type: 'reference';
                     * scalar_type: 'GUID';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementReference extends GlideElement implements IGlideRecordConstants, IGlideElementPreOptimizable'.
                     */
                    export interface GlideElementReference extends GlideElement { }

                    /**
                     * Represents the "Replication Payload" element type ("com.glide.script.glide_elements.GlideElementReplicationPayload" Java class).
                     * @export
                     * @Interface GlideElementReplicationPayload
                     * @description Internal type: 'replication_payload';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementReplicationPayload extends GlideElement'.
                     */
                    export interface GlideElementReplicationPayload extends GlideElement { }

                    /**
                     * Represents the "Script (Plain)" element type ("com.glide.script.glide_elements.GlideElementScript" Java class).
                     * @export
                     * @Interface GlideElementScript
                     * @description Internal type: 'script_plain';
                     * scalar_type: 'string'; scalar_length: 4000;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementScript extends GlideElement'.
                     */
                    export interface GlideElementScript extends GlideElement { }

                    /**
                     * Represents the "com.glide.script.glide_elements.GlideElementShortElementName" Java class.
                     * @export
                     * @Interface GlideElementShortElementName
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public abstract class GlideElementShortElementName extends GlideElement'.
                     */
                    export interface GlideElementShortElementName extends GlideElement { }

                    /**
                     * Represents the "Short Field Name" element type ("com.glide.script.glide_elements.GlideElementShortFieldName" Java class).
                     * @export
                     * @Interface GlideElementShortFieldName
                     * @description Internal type: 'short_field_name';
                     * scalar_type: 'string'; scalar_length: 40;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementShortFieldName extends GlideElementShortElementName'.
                     */
                    export interface GlideElementShortFieldName extends GlideElementShortElementName { }

                    /**
                     * Represents the "Short Table Name" element type ("com.glide.script.glide_elements.GlideElementShortTableName" Java class).
                     * @export
                     * @Interface GlideElementShortTableName
                     * @description Internal type: 'short_table_name';
                     * scalar_type: 'string'; scalar_length: 40;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementShortTableName extends GlideElementShortElementName'.
                     */
                    export interface GlideElementShortTableName extends GlideElementShortElementName { }

                    /**
                     * Represents the "Name-Value Pairs" element type ("com.glide.script.glide_elements.GlideElementSimpleNameValue" Java class).
                     * @export
                     * @Interface GlideElementSimpleNameValue
                     * @description Internal type: 'simple_name_values';
                     * scalar_type: 'string'; scalar_length: 4000;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementSimpleNameValue extends GlideElement'.
                     */
                    export interface GlideElementSimpleNameValue extends GlideElement { }

                    /**
                     * Represents the "Snapshot Template Value" element type ("com.glide.script.glide_elements.GlideElementSnapshotTemplateValue" Java class).
                     * @export
                     * @Interface GlideElementSnapshotTemplateValue
                     * @description Internal type: 'snapshot_template_value';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementSnapshotTemplateValue extends GlideElementConditions'.
                     */
                    export interface GlideElementSnapshotTemplateValue extends GlideElementConditions { }

                    /**
                     * Represents the "Source ID" element type ("com.glide.script.glide_elements.GlideElementSourceId" Java class).
                     * @export
                     * @Interface GlideElementSourceId
                     * @description Internal type: 'source_id';
                     * scalar_type: 'GUID';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementSourceId extends GlideElementDocumentId'.
                     */
                    export interface GlideElementSourceId extends GlideElementDocumentId { }

                    /**
                     * Represents the "Source Name" element type ("com.glide.script.glide_elements.GlideElementSourceName" Java class).
                     * @export
                     * @Interface GlideElementSourceName
                     * @description Internal type: 'source_name';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementSourceName extends GlideElement implements IAppsConstants'.
                     */
                    export interface GlideElementSourceName extends GlideElement { }

                    /**
                     * Represents the "Source Table" element type ("com.glide.script.glide_elements.GlideElementSourceTable" Java class).
                     * @export
                     * @Interface GlideElementSourceTable
                     * @description Internal type: 'source_table';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementSourceTable extends GlideElement'.
                     */
                    export interface GlideElementSourceTable extends GlideElement { }

                    /**
                     * Represents the "System Class Name" element type ("com.glide.script.glide_elements.GlideElementSysClassName" Java class).
                     * @export
                     * @Interface GlideElementSysClassName
                     * @description Internal type: 'sys_class_name';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementSysClassName extends GlideElementObject implements com.glide.util.IConstants, com.glide.util.IProperties'.
                     */
                    export interface GlideElementSysClassName extends GlideElementObject { }

                    /**
                     * Represents the "Translated Field" element type ("com.glide.script.glide_elements.GlideElementTranslatedField" Java class).
                     * @export
                     * @Interface GlideElementTranslatedField
                     * @description Internal type: 'translated_field';
                     * scalar_type: 'string'
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementTranslatedField extends GlideElement implements com.glide.util.IConstants, IGlideElementPreTranslatable'.
                     */
                    export interface GlideElementTranslatedField extends GlideElement { }

                    /**
                     * Represents the "Translated HTML" element type ("com.glide.script.glide_elements.GlideElementTranslatedHTML" Java class).
                     * @export
                     * @Interface GlideElementTranslatedHTML
                     * @description Internal type: 'translated_html';
                     * scalar_type: 'string'; scalar_length: 65536;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementTranslatedHTML extends GlideElementTranslatedText'.
                     */
                    export interface GlideElementTranslatedHTML extends GlideElementTranslatedText { }

                    /**
                     * Represents the "Translated Text" element type ("com.glide.script.glide_elements.GlideElementTranslatedText" Java class).
                     * @export
                     * @Interface GlideElementTranslatedText
                     * @description Internal type: 'translated_text';
                     * scalar_type: 'string'
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementTranslatedText extends GlideElement implements com.glide.util.IConstants, IAuditor, IGlideElementPreTranslatable, IGlideElementPreOptimizable'.
                     */
                    export interface GlideElementTranslatedText extends GlideElement { }

                    /**
                     * Represents the "URL" element type ("com.glide.script.glide_elements.GlideElementURL" Java class).
                     * @export
                     * @Interface GlideElementURL
                     * @description Internal type: 'url';
                     * scalar_type: 'string'; scalar_length: 1024;
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementURL extends GlideElement'.
                     */
                    export interface GlideElementURL extends GlideElement { }

                    /**
                     * Represents the "Image" element type ("com.glide.script.glide_elements.GlideElementUserImage" Java class).
                     * @export
                     * @Interface GlideElementUserImage
                     * @description Internal type: 'user_image';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementUserImage extends GlideElementViewable'.
                     */
                    export interface GlideElementUserImage extends GlideElementViewable { }

                    /**
                     * Represents the "Variable Conditions" element type ("com.glide.script.glide_elements.GlideElementVariableConditions" Java class).
                     * @export
                     * @Interface GlideElementVariableConditions
                     * @description Internal type: 'variable_conditions';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementVariableConditions extends GlideElementConditions'.
                     */
                    export interface GlideElementVariableConditions extends GlideElementConditions { }

                    /**
                     * Represents the "Variable template value" element type ("com.glide.script.glide_elements.GlideElementVariableTemplateValue" Java class).
                     * @export
                     * @Interface GlideElementVariableTemplateValue
                     * @description Internal type: 'variable_template_value';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementVariableTemplateValue extends GlideElementConditions'.
                     */
                    export interface GlideElementVariableTemplateValue extends GlideElementConditions { }

                    /**
                     * Represents the "Video" element type ("com.glide.script.glide_elements.GlideElementVideo" Java class).
                     * @export
                     * @Interface GlideElementVideo
                     * @description Internal type: 'video';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementVideo extends GlideElementViewable'.
                     */
                    export interface GlideElementVideo extends GlideElementViewable { }

                    /**
                     * Represents the "com.glide.script.glide_elements.GlideElementViewable" Java class.
                     * @export
                     * @Interface GlideElementViewable
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public abstract class GlideElementViewable extends GlideElement'.
                     */
                    export interface GlideElementViewable extends GlideElement { }

                    /**
                     * Represents the "Workflow Conditions" element type ("com.glide.script.glide_elements.GlideElementWorkflowConditions" Java class).
                     * @export
                     * @Interface GlideElementWorkflowConditions
                     * @description Internal type: 'workflow_conditions';
                     * scalar_type: 'string';
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementWorkflowConditions extends GlideElementConditions'.
                     */
                    export interface GlideElementWorkflowConditions extends GlideElementConditions { }
                }

                export namespace system {
                    /**
                     * Represents the "com.glide.script.system.GlideSystemDateUtil2" Java class.
                     * @export
                     * @Interface GlideSystemDateUtil2
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideSystemDateUtil2 extends com.glide.script.GlideScriptableObject implements com.glide.util.IConstants, com.glide.script.IScriptConstants, com.glide.script.INonShared'.
                     */
                    export interface GlideSystemDateUtil2 extends GlideScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.system.GlideSystemDateUtil3" Java class.
                     * @export
                     * @Interface GlideSystemDateUtil3
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideSystemDateUtil3 extends com.glide.script.GlideScriptableObject implements com.glide.script.INonShared'.
                     */
                    export interface GlideSystemDateUtil3 extends GlideScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.system.GlideSystemLogger" Java class.
                     * @export
                     * @Interface GlideSystemLogger
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideSystemLogger extends com.glide.script.GlideScriptableObject implements com.glide.script.INonShared'.
                     */
                    export interface GlideSystemLogger extends GlideScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.system.GlideSystemUserSession" Java class.
                     * @export
                     * @Interface GlideSystemUserSession
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideSystemUserSession extends com.glide.script.GlideScriptableObject implements com.glide.script.IScriptConstants, com.glide.script.INonShared'.
                     */
                    export interface GlideSystemUserSession extends GlideScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.script.system.ScriptedExtensionPoint" Java class.
                     * @export
                     * @Interface ScriptedExtensionPoint
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScriptedExtensionPoint extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface ScriptedExtensionPoint extends fencing.ScopedScriptableObject {
                    }
                }

                export namespace vtable {
                    export namespace api {
                        /**
                         * Represents the "com.glide.script.vtable.api.GlideVScriptableQueryAPI" Java class.
                         * @export
                         * @Interface GlideVScriptableQueryAPI
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class GlideVScriptableQueryAPI extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface GlideVScriptableQueryAPI extends fencing.ScopedScriptableObject {
                        }

                        /**
                         * Represents the "com.glide.script.vtable.api.GlideVScriptableTableAPI" Java class.
                         * @export
                         * @Interface GlideVScriptableTableAPI
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class GlideVScriptableTableAPI extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface GlideVScriptableTableAPI extends fencing.ScopedScriptableObject {
                        }
                    }
                }
            }

            export namespace service_portal {
                export namespace widget {
                    export namespace fencing {
                        /**
                         * Represents the "com.glide.service_portal.widget.fencing.ScopedSPScriptable" Java class.
                         * @export
                         * @Interface ScopedSPScriptable
                         * @description Wraps java class "com.glide.service_portal.widget.SPScriptable".
                         * Library: glide-service-portal-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedSPScriptable implements com.glide.script.fencing.IScopedApi'.
                         */
                        export interface ScopedSPScriptable extends java.lang.Object {
                        }
                    }
                }
            }

            export namespace stages {
                /**
                 * Represents the "com.glide.stages.GlideElementWorkflow" Java class.
                 * @export
                 * @Interface GlideElementWorkflow
                 * @description Internal type: '';
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementWorkflow extends com.glide.script.GlideElement'.
                 */
                export interface GlideElementWorkflow extends script.GlideElement {
                }
            }

            export namespace sys {
                /**
                 * Represents the "com.glide.sys.PluginManager" Java class.
                 * @export
                 * @Interface PluginManager
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class PluginManager implements com.glide.db.IDBConstants'.
                 */
                export interface PluginManager extends java.lang.Object {
                }

                export namespace cache {
                    /**
                     * Represents the "com.glide.sys.cache.LRUCache" class.
                     * @export
                     * @interface LRUCache
                     * @extends {java.lang.Object}
                     * @extends {java.util.HashMap<any, any>}
                     */
                    export interface LRUCache extends java.lang.Object, java.util.HashMap<any, any> { }

                    export namespace record_change {
                        export namespace storage {
                            /**
                             * Represents the "com.glide.sys.cache.record_change.storage.ScriptableCachedRecord" Java class.
                             * @export
                             * @Interface ScriptableCachedRecord
                             * @description Library: glide-16.6.0.3.jar;
                             * Java declaration: 'public class ScriptableCachedRecord extends com.glide.script.fencing.ScopedScriptableObject implements com.glide.data.access.IValueGetter'.
                             */
                            export interface ScriptableCachedRecord extends script.fencing.ScopedScriptableObject {
                            }
                        }
                    }
                }

                export namespace security {
                    /**
                     * Represents the "com.glide.sys.security.CertificateEncryption" Java class.
                     * @export
                     * @Interface CertificateEncryption
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class CertificateEncryption extends com.glide.script.fencing.ScopedScriptableObject implements com.glide.certificates.ISysCertificate, com.glide.util.IConstants, com.glide.sys.security.ISecurityConstants'.
                     */
                    export interface CertificateEncryption extends script.fencing.ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.sys.security.GlideSecurityUtils" Java class.
                     * @export
                     * @Interface GlideSecurityUtils
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class GlideSecurityUtils extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface GlideSecurityUtils extends script.fencing.ScopedScriptableObject {
                        // Wraps com.glide.util.SecurityUtils?
                    }

                    /**
                     * Represents the "com.glide.sys.security.SecureRandomUtil" Java class.
                     * @export
                     * @Interface SecureRandomUtil
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class SecureRandomUtil extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface SecureRandomUtil extends script.fencing.ScopedScriptableObject {
                    }
                }
            }

            export namespace transaction_replay {
                export namespace runner {
                    /**
                     * Represents the "com.glide.transaction_replay.runner.TransactionReplayRunner" Java class.
                     * @export
                     * @Interface TransactionReplayRunner
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class TransactionReplayRunner extends com.glide.script.fencing.ScopedScriptableObject implements com.glide.transaction_replay.ITransactionReplayConstants, com.glide.util.IConstants'.
                     */
                    export interface TransactionReplayRunner extends script.fencing.ScopedScriptableObject {
                    }
                }
            }

            export namespace ts {
                export namespace util {
                    /**
                     * Represents the "com.glide.ts.util.GlideElementAttachmentList" Java class.
                     * @export
                     * @interface GlideElementAttachmentList
                     * @description Internal type: '';
                     * Library: glide-ts-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementAttachmentList extends script.GlideElement'.
                     */
                    export interface GlideElementAttachmentList extends script.GlideElement { }
                }
            }

            export namespace ui {
                export namespace content {
                    /**
                     * Represents the "com.glide.ui.content.CSSPropertiesScriptableAPI" Java class.
                     * @export
                     * @Interface CSSPropertiesScriptableAPI
                     * @description Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class CSSPropertiesScriptableAPI extends ScopedScriptableObject'.
                     */
                    export interface CSSPropertiesScriptableAPI extends script.fencing.ScopedScriptableObject {
                    }
                }

                export namespace extension {
                    /**
                     * Represents the "com.glide.ui.extension.ClientExtensionPoint" Java class.
                     * @export
                     * @Interface ClientExtensionPoint
                     * @description Library: glide-ng-16.6.0.3.jar;
                     * Java declaration: 'public class ClientExtensionPoint extends com.glide.script.fencing.ScopedScriptableObject implements com.glide.ui.extension.IUIExtensionConstants'.
                     */
                    export interface ClientExtensionPoint extends script.fencing.ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.glide.ui.extension.UIExtensionPoint" Java class.
                     * @export
                     * @Interface UIExtensionPoint
                     * @description Library: glide-ng-16.6.0.3.jar;
                     * Java declaration: 'public class UIExtensionPoint extends com.glide.script.fencing.ScopedScriptableObject implements com.glide.ui.extension.IUIExtensionConstants'.
                     */
                    export interface UIExtensionPoint extends script.fencing.ScopedScriptableObject {
                    }
                }

                export namespace ng {
                    export namespace script {
                        /**
                         * Represents the "com.glide.ui.ng.script.ScopedNGSysTitle" Java class.
                         * @export
                         * @Interface ScopedNGSysTitle
                         * @description Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedNGSysTitle extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface ScopedNGSysTitle extends glide.script.fencing.ScopedScriptableObject {
                        }
                    }
                }
            }

            export namespace usageanalytics {
                /**
                 * Represents the "com.glide.usageanalytics.ScopedUAKeyDescriptorListBuilder" Java class.
                 * @export
                 * @Interface ScopedUAKeyDescriptorListBuilder
                 * @description Wraps java class "com.glide.usageanalytics.UAKeyDescriptorListBuilder".
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedUAKeyDescriptorListBuilder implements com.glide.script.fencing.IScopedApi'.
                 */
                export interface ScopedUAKeyDescriptorListBuilder extends java.lang.Object {
                }

                export namespace framework {
                    export namespace event_aggregation {
                        /**
                         * Represents the "com.glide.usageanalytics.framework.event_aggregation.ScopedEventAggConfig" Java class.
                         * @export
                         * @Interface ScopedEventAggConfig
                         * @description Wraps java class "com.glide.usageanalytics.framework.event_aggregation.EventAggConfig".
                         * Library: glide-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedEventAggConfig implements com.glide.script.fencing.IScopedApi'.
                         */
                        export interface ScopedEventAggConfig extends java.lang.Object {
                        }
                    }
                }
            }

            export namespace util {
                /**
                 * Represents the "com.glide.util.ScopedStringUtil" Java class.
                 * @export
                 * @Interface ScopedStringUtil
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedStringUtil extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface ScopedStringUtil extends script.fencing.ScopedScriptableObject {
                    // Wraps com.glide.util.StringUtil?
                }

                /**
                 * Represents the "com.glide.util.ScopedXMLUtil" Java class.
                 * @export
                 * @Interface ScopedXMLUtil
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedXMLUtil extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface ScopedXMLUtil extends script.fencing.ScopedScriptableObject {
                    // Wraps com.glide.util.XMLUtil?
                }
            }

            export namespace uxpage {
                export namespace data {
                    /**
                     * Represents the "com.glide.uxpage.data.UxPageTreeCloner" Java class.
                     * @export
                     * @Interface UxPageTreeCloner
                     * @description Library: glide-ux-builder-16.6.0.3.jar;
                     * Java declaration: 'public class UxPageTreeCloner extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface UxPageTreeCloner extends script.fencing.ScopedScriptableObject {
                    }
                }
            }

            export namespace vars2 {
                /**
                 * Represents the "Glide Var" element type ("com.glide.vars2.GlideElementGlideVar" Java class).
                 * @export
                 * @Interface GlideElementGlideVar
                 * @description Internal type: 'glide_var',
                 * scalar_type: 'string';
                 * Library: glide-variables-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementGlideVar extends com.glide.script.GlideElement implements com.glide.script.IGlideElementGlideVar'.
                 */
                export interface GlideElementGlideVar extends script.glide_elements.GlideElementGlideObject {
                }

                /**
                 * Represents the "com.glide.vars2.GlideElementVariable" Java class.
                 * @export
                 * @Interface GlideElementVariable
                 * @description Internal type: 'variable',
                 * Library: glide-variables-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementVariable extends com.glide.script.glide_elements.GlideElementGlideObject implements com.glide.script.IGlideElementVariable, com.glide.sys.security.IDecryptable'.
                 */
                 export interface GlideElementVariable extends script.glide_elements.GlideElementGlideObject {
                }

                /**
                 * Represents the "Variables" element type ("com.glide.vars2.GlideElementVariables" Java class).
                 * @export
                 * @Interface GlideElementVariables
                 * @description Internal type: 'variables',
                 * scalar_type: 'string';
                 * Library: glide-variables-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementVariables extends com.glide.script.GlideElement implements com.glide.script.IGlideElementVariables, com.glide.script.ICustomAudit, com.glide.script.IAuditor'.
                 */
                export interface GlideElementVariables extends script.GlideElement {
                }

                /**
                 * Represents the "com.glide.vars2.GlideElementHierarchicalVariables" Java class.
                 * @export
                 * @Interface GlideElementHierarchicalVariables
                 * @description Internal type: 'hierarchical_variables',
                 * Library: glide-variables-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementHierarchicalVariables extends GlideElementVariables implements com.glide.script.ICustomAudit, com.glide.script.IAuditor'.
                 */
                export interface GlideElementHierarchicalVariables extends script.GlideElement {
                }
            }

            export namespace wiki {
                /**
                 * Represents the "Wiki" element type ("com.glide.wiki.GlideElementWikiText" Java class).
                 * @export
                 * @interface GlideElementWikiText
                 * @description Internal type: 'wiki_text';
                 * scalar_type: 'string'; scalar_length: 65536;
                 * Library: glide-apps-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementWikiText extends script.GlideElement'.
                 */
                export interface GlideElementWikiText extends script.GlideElement { }
            }
        }

        export namespace glideapp {
            export namespace google_maps {
                /**
                 * Represents the "com.glideapp.google_maps.ScopedAJAXMapItem" Java class.
                 * @export
                 * @Interface ScopedAJAXMapItem
                 * @description Wraps java class "com.glideapp.google_maps.AJAXMapItem".
                 * Library: glide-integrations-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedAJAXMapItem extends com.glide.script.fencing.WrappedScriptableObject'.
                 */
                export interface ScopedAJAXMapItem extends glide.script.fencing.WrappedScriptableObject {
                }

                /**
                 * Represents the "com.glideapp.google_maps.ScopedAJAXMapPage" Java class.
                 * @export
                 * @Interface ScopedAJAXMapPage
                 * @description Wraps java class "com.glideapp.google_maps.AJAXMapPage".
                 * Library: glide-integrations-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedAJAXMapPage implements com.glide.script.fencing.IScopedApi'.
                 */
                export interface ScopedAJAXMapPage extends java.lang.Object {
                }
            }

            export namespace questionset {
                export namespace fencing {
                    /**
                     * Represents the "com.glideapp.questionset.fencing.ScopedQuestion" Java class.
                     * @export
                     * @Interface ScopedQuestion
                     * @description Wraps java class "com.glideapp.questionset.Question".
                     * Library: glide-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedQuestion implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedQuestion extends java.lang.Object {
                    }
                }
            }

            export namespace servicecatalog {
                /**
                 * Represents the "com.glideapp.servicecatalog.ScopedGlideappCatalogItem" Java class.
                 * @export
                 * @Interface ScopedGlideappCatalogItem
                 * @description Library: glide-servicecatalog-16.6.0.3.jar;
                 * Java declaration: 'public final class ScopedGlideappCatalogItem implements com.glide.script.fencing.IScopedApi'.
                 */
                export interface ScopedGlideappCatalogItem extends java.lang.Object {
                    // Wraps com.glideapp.servicecatalog.CatalogItem?
                }

                export namespace scoped {
                    export namespace api {
                        /**
                         * Represents the "com.glideapp.servicecatalog.scoped.api.CartJS" Java class.
                         * @export
                         * @interface CartJS
                         * @description: Library: glide-16.6.0.3.jar
                         * Java declaration: 'public class CartJS extends com.​glide.​script.​fencing.ScopedScriptableObject implements com.​glideapp.​servicecatalog.ICatalogConstants'.
                         */
                        export interface CartJS extends ​glide.​script.​fencing.ScopedScriptableObject {
                        }
                    }
                }
            }

            export namespace wizard {
                /**
                 * Represents the "com.glideapp.wizard.ScopedWizardIntercept" Java class.
                 * @export
                 * @Interface ScopedWizardIntercept
                 * @description Wraps java class "com.glideapp.wizard.WizardIntercept".
                 * Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedWizardIntercept extends com.glideapp.wizard.WizardIntercept implements com.glide.script.fencing.IScopedApi'.
                 */
                export interface ScopedWizardIntercept extends WizardIntercept {
                }

                /**
                 * Represents the "com.glideapp.wizard.WizardIntercept" Java class.
                 * @export
                 * @Interface WizardIntercept
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class WizardIntercept implements com.glide.util.IConstants'.
                 */
                export interface WizardIntercept extends java.lang.Object {
                }
            }

            export namespace workflow {
                /**
                 * Represents the "com.glideapp.workflow.ScopedActivityLogger" Java class.
                 * @export
                 * @Interface ScopedActivityLogger
                 * @description Library: glide-workflow-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedActivityLogger extends com.glide.script.fencing.ScopedScriptableObject implements com.glideapp.workflow.IWorkflowConstants'.
                 */
                export interface ScopedActivityLogger extends glide.script.fencing.ScopedScriptableObject {
                }

                /**
                 * Represents the "com.glideapp.workflow.ScopedWorkflowVariableGetter" Java class.
                 * @export
                 * @Interface ScopedWorkflowVariableGetter
                 * @description Wraps java class "com.glideapp.workflow.WorkflowVariableGetter".
                 * Library: glide-workflow-16.6.0.3.jar;
                 * Java declaration: 'public class ScopedWorkflowVariableGetter extends com.glide.script.fencing.WrappedScriptableObject'.
                 */
                export interface ScopedWorkflowVariableGetter extends com.glide.script.fencing.WrappedScriptableObject {
                }

                export namespace element {
                    /**
                     * Represents the "com.glideapp.workflow.element.ScopedWorkflowDatabus" Java class.
                     * @export
                     * @Interface ScopedWorkflowDatabus
                     * @description Wraps java class "com.glideapp.workflow.element.WorkflowDatabus".
                     * Library: glide-workflow-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedWorkflowDatabus extends com.glide.script.fencing.WrappedScriptableObject'.
                     */
                    export interface ScopedWorkflowDatabus extends glide.script.fencing.WrappedScriptableObject {
                    }

                    /**
                     * Represents the "com.glideapp.workflow.element.WorkflowDatabus" Java class.
                     * @export
                     * @Interface WorkflowDatabus
                     * @description Library: glide-workflow-16.6.0.3.jar;
                     * Java declaration: 'public class WorkflowDatabus extends org.mozilla.javascript.ScriptableObject implements com.glideapp.workflow.IWorkflowConstants'.
                     */
                    export interface WorkflowDatabus extends org.mozilla.javascript.ScriptableObject {
                        // TODO: Implement get from com.glideapp.workflow.element.WorkflowDatabus under com.glideapp.workflow.element.WorkflowDatabus
                    }
                }

                export namespace queue {
                    export namespace activity {
                        /**
                         * Represents the "com.glideapp.workflow.queue.activity.ScopedWorkflow" Java class.
                         * @export
                         * @Interface ScopedWorkflow
                         * @description Wraps java class "com.glideapp.workflow.queue.activity.Workflow".
                         * Library: glide-workflow-16.6.0.3.jar;
                         * Java declaration: 'public class ScopedWorkflow extends com.glide.script.fencing.WrappedScriptableObject'.
                         */
                        export interface ScopedWorkflow extends glide.script.fencing.WrappedScriptableObject {
                        }
                    }
                }
            }
        }

        export namespace snc {
            export namespace apps {
                /**
                 * Represents the "com.snc.apps.UninstallApplicationInfo" Java class.
                 * @export
                 * @Interface UninstallApplicationInfo
                 * @description Library: glide-paas-16.6.0.3.jar;
                 * Java declaration: 'public class UninstallApplicationInfo extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface UninstallApplicationInfo extends glide.script.fencing.ScopedScriptableObject {
                }
            }

            export namespace certification_core {
                /**
                 * Represents the "com.snc.certification_core.CertificationProcessing" Java class.
                 * @export
                 * @Interface CertificationProcessing
                 * @description Library: glide-app-itbm-16.6.0.3.jar;
                 * Java declaration: 'public class CertificationProcessing extends com.glide.script.fencing.ScopedScriptableObject implements com.glide.util.IConstants, com.snc.certification_core.conditions.IConditionUtilsConstants'.
                 */
                export interface CertificationProcessing extends glide.script.fencing.ScopedScriptableObject {
                }
            }

            export namespace clotho {
                export namespace script {
                    /**
                     * Represents the "com.snc.clotho.script.GlideElementMetric" Java class.
                     * @export
                     * @interface GlideElementMetric
                     * @extends {com.glide.script.GlideElement}
                     * @description Internal type: 'metric';
                     * Library: glide-clotho-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementMetric extends com.glide.script.GlideElement'.
                     */
                    export interface GlideElementMetric extends com.glide.script.GlideElement { }
                }
            }

            export namespace cmdb {
                export namespace relations {
                    export namespace script {
                        /**
                         * Represents the "com.snc.cmdb.relations.script.CIRelationInfoUtil" Java class.
                         * @export
                         * @Interface CIRelationInfoUtil
                         * @description Library: glide-app-cmdb-16.6.0.3.jar;
                         * Java declaration: 'public class CIRelationInfoUtil extends com.glide.script.fencing.ScopedScriptableObject'.
                         */
                        export interface CIRelationInfoUtil extends com.glide.script.fencing.ScopedScriptableObject {
                        }
                    }
                }
            }

            export namespace datastructure {
                /**
                 * Represents the "Data Array" element type ("com.snc.datastructure.GlideElementDataArray" Java class).
                 * @export
                 * @interface GlideElementDataArray
                 * @extends {com.glide.script.GlideElement}
                 * @description Internal type: 'data_array';
                 * scalar_type: 'string'; scalar_length: 65535;
                 * Library: glide-workflow-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementDataArray extends com.glide.script.GlideElement'.
                 */
                export interface GlideElementDataArray extends com.glide.script.GlideElement { }

                /**
                 * Represents the "Data Object" element type ("com.snc.datastructure.GlideElementDataObject" Java class).
                 * @export
                 * @interface GlideElementDataObject
                 * @extends {com.glide.script.GlideElement}
                 * @description Internal type: 'data_object';
                 * scalar_type: 'string'; scalar_length: 65535;
                 * Library: glide-workflow-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementDataObject extends com.glide.script.GlideElement'.
                 */
                 export interface GlideElementDataObject extends com.glide.script.GlideElement { }

                /**
                 * Represents the "Data Structure" element type ("com.snc.datastructure.GlideElementDataStructure" Java class).
                 * @export
                 * @interface GlideElementDataStructure
                 * @extends {com.glide.script.GlideElement}
                 * @description Internal type: 'data_structure';
                 * scalar_type: 'string'; scalar_length: 800;
                 * Library: glide-workflow-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementDataStructure extends ​glide.​glideobject.GlideObject'.
                 */
                 export interface GlideElementDataStructure extends ​glide.​glideobject.AGlideObject { }
            }

            export namespace pa {
                export namespace api {
                    /**
                     * Represents the "com.snc.pa.api.PAScorecard" Java class.
                     * @export
                     * @Interface PAScorecard
                     * @description Library: glide-analytics-16.6.0.3.jar;
                     * Java declaration: 'public final class PAScorecard extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface PAScorecard extends glide.script.fencing.ScopedScriptableObject {
                    }
                }

                export namespace dc {
                    /**
                     * Represents the "Breakdown Element" element type ("com.snc.pa.dc.GlideElementBreakdownElement" Java class).
                     * @export
                     * @interface GlideElementBreakdownElement
                     * @extends {com.glide.script.GlideElement}
                     * @description Internal type: 'breakdown_element';
                     * scalar_type: 'GUID'; scalar_length: 32;
                     * Library: glide-analytics-16.6.0.3.jar;
                     * Java declaration: 'public class GlideElementBreakdownElement extends com.glide.script.GlideElement'.
                     */
                     export interface GlideElementBreakdownElement extends com.glide.script.GlideElement { }
                }

                export namespace js {
                    /**
                     * Represents the "com.snc.pa.js.PASnapshot" Java class.
                     * @export
                     * @Interface PASnapshot
                     * @description Library: glide-analytics-16.6.0.3.jar;
                     * Java declaration: 'public final class PASnapshot extends com.glide.script.fencing.ScopedScriptableObject'.
                     */
                    export interface PASnapshot extends glide.script.fencing.ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.snc.pa.js.ScopedPAFormula" Java class.
                     * @export
                     * @Interface ScopedPAFormula
                     * @description Library: glide-analytics-16.6.0.3.jar;
                     * Java declaration: 'public final class ScopedPAFormula extends com.glide.script.fencing.ScopedScriptableObject implements com.snc.pa.IPAConstants'.
                     */
                    export interface ScopedPAFormula extends glide.script.fencing.ScopedScriptableObject {
                    }

                    /**
                     * Represents the "com.snc.pa.js.ScopedPATarget" Java class.
                     * @export
                     * @Interface ScopedPATarget
                     * @description Wraps java class "com.snc.pa.js.PATarget".
                     * Library: glide-analytics-16.6.0.3.jar;
                     * Java declaration: 'public class ScopedPATarget implements com.glide.script.fencing.IScopedApi'.
                     */
                    export interface ScopedPATarget extends java.lang.Object {
                    }
                }
            }

            export namespace project_workbench {
                /**
                 * Represents the "com.snc.project_workbench.GlideElementCompositeField" Java class.
                 * @export
                 * @interface GlideElementCompositeField
                 * @extends {com.glide.script.GlideElement}
                 * @description Internal type: '';
                 * Library: glide-project-workbench-16.6.0.3.jar;
                 * Java declaration: 'public class GlideElementCompositeField extends com.glide.script.GlideElement implements PWConstants'.
                 */
                 export interface GlideElementCompositeField extends com.glide.script.GlideElement { }
            }

            export namespace skills_management {
                /**
                 * Represents the "com.snc.skills_management.ScriptableUserSkillAnalyzer" Java class.
                 * @export
                 * @Interface ScriptableUserSkillAnalyzer
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScriptableUserSkillAnalyzer extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface ScriptableUserSkillAnalyzer extends glide.script.fencing.ScopedScriptableObject {
                }

                /**
                 * Represents the "com.snc.skills_management.ScriptableUserSkillRanking" Java class.
                 * @export
                 * @Interface ScriptableUserSkillRanking
                 * @description Library: glide-16.6.0.3.jar;
                 * Java declaration: 'public class ScriptableUserSkillRanking extends com.glide.script.fencing.ScopedScriptableObject'.
                 */
                export interface ScriptableUserSkillRanking extends glide.script.fencing.ScopedScriptableObject {
                }
            }
        }
    }
}