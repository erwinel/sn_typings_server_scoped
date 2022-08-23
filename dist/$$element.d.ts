/// <reference path="$$rhino.d.ts" />
/// <reference path="Glide.d.ts" />

/**
 * Helper types for GlideElement and GlideRecord objects.
 * @namespace $$element
 */
declare namespace $$element {
    /**
     * Defines members that are common to both GlideRecord and GlideElement objects
     * @export
     * @interface IDbObject
     */
    export interface IDbObject {
        /**
         * Determines if the user's role permits the creation of new records in this field.
         * @memberof IDbObject
         * @returns {boolean} True if the field can be created, false otherwise.
         */
        canCreate(): boolean;
        /**
         * Indicates whether the user's role permits them to read the associated GlideRecord.
         * @memberof IDbObject
         * @returns {boolean} True if the field can be read, false otherwise.
         */
        canRead(): boolean;
        /**
         * Determines whether the user's role permits them to write to the associated GlideRecord.
         * @memberof IDbObject
         * @returns {boolean} True if the user can write to the field, false otherwise.
         */
        canWrite(): boolean;
        /**
         * Returns the value of the specified attribute from the dictionary.
         * @memberof IDbObject
         * @param {string} attributeName - Attribute name
         * @returns {string} Attribute value.
         * @description 
         */
        getAttribute(attributeName: string): string;
        /**
         * Returns the element's descriptor.
         * @memberof IDbObject
         * @returns {GlideElementDescriptor} Element's descriptor.
         */
        getED(): GlideElementDescriptor;
        /**
         * Returns the object label.
         * @memberof IDbObject
         * @returns {string} Object label.
         */
        getLabel(): string;
        /**
         * Returns for Element objects, returns the name of the table on which the field resides; Otherwise, retrieves the name of the table associated with the GlideRecord.
         * @memberof IDbObject
         * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
         */
        getTableName(): string;
    }
    export interface IValueSpecific<V, E extends IGlideElement, S extends string> extends IGlideElement {
        changesFrom(o: V | E | $$rhino.Nilable<S>): boolean;
        changesTo(o: V | E | $$rhino.Nilable<S>): boolean;
        setValue(obj: V | E | $$rhino.Nilable<S>): void;
    }
    export class StringBased<V extends string | number, E extends StringBased<V, E, S>, S extends string> extends Packages.java.lang.String implements IValueSpecific<V, E, S> {
        /**
         * Determines if the user's role permits the creation of new records in this field.
         * @memberof IDbObject
         * @returns {boolean} True if the field can be created, false otherwise.
         */
        canCreate(): boolean;
        /**
         * Indicates whether the user's role permits them to read the associated GlideRecord.
         * @memberof IDbObject
         * @returns {boolean} True if the field can be read, false otherwise.
         */
        canRead(): boolean;
        /**
         * Determines whether the user's role permits them to write to the associated GlideRecord.
         * @memberof IDbObject
         * @returns {boolean} True if the user can write to the field, false otherwise.
         */
        canWrite(): boolean;
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
         * @param {V | E | $$property.Nilable<S>} o - An object value to check against the previous value of the current field.
         * @returns {boolean} True if the previous value matches, false if it does not.
         * @description 
         */
        changesFrom(o: V | E | $$rhino.Nilable<S>): boolean;
        /**
         * Determines if the new value of a field, after a change, matches the specified object.
         * @memberof GlideElement
         * @param {V | E | $$property.Nilable<S>} o - An object value to check against the new value of the current field.
         * @returns {boolean} True if the previous value matches, false if it does not.
         * @description 
         */
        changesTo(o: V | E | $$rhino.Nilable<S>): boolean;
        /**
         * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
         * @memberof GlideElement
         * @returns {number} Number of milliseconds since January 1, 1970, 00:00:00 GMT.
         */
        dateNumericValue(): number;
        /**
         * Returns the value of the specified attribute from the dictionary.
         * @memberof IDbObject
         * @param {string} attributeName - Attribute name
         * @returns {string} Attribute value.
         * @description 
         */
        getAttribute(attributeName: string): string;
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
         * Returns the element's descriptor.
         * @memberof IDbObject
         * @returns {GlideElementDescriptor} Element's descriptor.
         */
        getED(): GlideElementDescriptor;
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
         * Returns the object label.
         * @memberof IDbObject
         * @returns {string} Object label.
         */
        getLabel(): string;
        /**
         * Returns the name of the field.
         * @memberof GlideElement
         * @returns {string} Field name.
         */
        getName(): string;
        /**
         * Returns the name of the table on which the field resides.
         * @memberof IDbObject
         * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
         */
        getTableName(): string;
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
         * @param {V | E | $$property.Nilable<S>} value - Object value to set the field to.
         * @description 
         */
        setValue(value: V | E | $$rhino.Nilable<S>): void;
    }
    export type Element<S extends string> = IValueSpecific<S, GlideElement, S> & GlideElement;
    export type Question<S extends string> = GlideappQuestion & {
        getValue(): $$rhino.StringValue<S>;
        getInitialValue(): $$rhino.StringValue<S>;
        setValue(value: $$rhino.StringValue<S>): void;
    }
    export type Numeric<N extends number, S extends string> = IValueSpecific<N, GlideElementNumeric, S> & GlideElementNumeric;
    export type GlideObject<S extends string> = IValueSpecific<S, GlideElementGlideObject, S> & GlideElementGlideObject;
    export type SysClassName<S extends string> = IValueSpecific<S, GlideElementSysClassName, S> & GlideElementSysClassName;
    export type TranslatedField<S extends string> = IValueSpecific<S, GlideElementTranslatedField, S> & GlideElementTranslatedField;
    export type Conditions<S extends string> = IValueSpecific<S, GlideElementConditions, S> & GlideElementConditions;
    export type Documentation<S extends string> = IValueSpecific<S, GlideElementDocumentation, S> & GlideElementDocumentation;
    export type Script<S extends string> = IValueSpecific<S, GlideElementScript, S> & GlideElementScript;
    export type UserImage<S extends string> = IValueSpecific<S, GlideElementUserImage, S> & GlideElementUserImage;
    export type Password2<S extends string> = IValueSpecific<S, GlideElementPassword2, S> & GlideElementPassword2;
    export type Counter<N extends number, S extends string> = IValueSpecific<N, GlideElementNumeric, S> & GlideElementNumeric;
    export interface IReference<P extends IGlideTableProperties, R extends P & GlideRecord> extends IValueSpecific<R, Reference<P, R>, string> {
        changesFrom(o: R | Reference<P, R> | $$rhino.Nilable<string>): boolean;
        changesTo(o: R | Reference<P, R> | $$rhino.Nilable<string>): boolean;
        getReferenceTable(): string;
        getRefRecord(): R | null | undefined;
        setValue(obj: R | Reference<P, R> | $$rhino.Nilable<string>): void;
    }
    export type Reference<P extends IGlideTableProperties, R extends P & GlideRecord> = IReference<P, R> & GlideElementReference & P;
    export type ReferenceQuestion<P extends IGlideTableProperties> = GlideappReferenceQuestion & P;
}