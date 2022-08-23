/// <reference path="$$element.d.ts" />

/**
 * Helper types for GlideElement and GlideRecord properties.
 * @namespace $$property
 */
declare namespace $$property {
    export type Boolean = GlideElementBoolean | $$rhino.BooleanLike;
    export type BreakdownElement = GlideElementBreakdownElement | $$rhino.String;
    export type Element = GlideElement | $$rhino.String;
    export type Compressed = GlideElementCompressed | $$rhino.String;
    export type Conditions = GlideElementConditions | $$rhino.String;
    export type Counter = GlideElementCounter | $$rhino.NumberLike<number, string>;
    export type Currency = GlideElementCurrency | $$rhino.NumberLike<number, string>;
    export type DataObject = GlideElementDataObject | $$rhino.String;
    export type Documentation = GlideElementDocumentation | $$rhino.String;
    export type DocumentId = GlideElementDocumentId | $$rhino.String;
    export type DomainId = GlideElementDomainId | $$rhino.String;
    export type FullUTF8 = GlideElementFullUTF8 | $$rhino.String;
    export type GlideObject = GlideElementGlideObject | $$rhino.String;
    export type GlideVar = GlideElementGlideVar | $$rhino.String;
    export type Icon = GlideElementIcon | $$rhino.String;
    export type InternalType = GlideElementInternalType | $$rhino.String;
    export type Numeric = GlideElementNumeric | $$rhino.NumberLike<number, string>;
    export type Password = GlideElementPassword | $$rhino.String;
    export type Password2 = GlideElementPassword2 | $$rhino.String;
    export type Price = GlideElementPrice | $$rhino.NumberLike<number, string>;
    export type Reference = GlideElementReference | GlideElement | $$rhino.String;
    export type Script = GlideElementScript | $$rhino.String;
    export type ShortFieldName = GlideElementShortFieldName | $$rhino.String;
    export type ShortTableName = GlideElementShortTableName | $$rhino.String;
    export type SourceId = GlideElementSourceId | $$rhino.String;
    export type SourceName = GlideElementSourceName | $$rhino.String;
    export type SourceTable = GlideElementSourceTable | $$rhino.String;
    export type SysClassName = GlideElementSysClassName | $$rhino.String;
    export type TranslatedField = GlideElementTranslatedField | $$rhino.String;
    export type TranslatedHTML = GlideElementTranslatedHTML | $$rhino.String;
    export type TranslatedText = GlideElementTranslatedText | $$rhino.String;
    export type URL = GlideElementURL | $$rhino.String;
    export type UserImage = GlideElementUserImage | $$rhino.String;
    export type Question = GlideappQuestion | $$rhino.String;
    export type ReferenceQuestion = GlideappReferenceQuestion | Reference | $$rhino.String;
    export type Variables = IGlideElementVariables | { [key: string]: Question };
    export type WikiText = GlideElementWikiText | $$rhino.String;
    export type Workflow = GlideElementWorkflow | $$rhino.String;
    export namespace generic {
        export type Element<S extends string> = $$element.Element<S> | S;
        export type Question<S extends string> = $$element.Question<S> | S;
        export type ReferenceQuestion<P extends IGlideTableProperties, R extends P & GlideRecord> = $$element.ReferenceQuestion<P> | Reference<P, R>;
        export type Numeric<N extends number, S extends string> = $$element.Numeric<N, S> | number | S;
        export type GlideObject<S extends string> = $$element.Element<S> | S;
        export type SysClassName<S extends string> = $$element.Element<S> | S;
        export type TranslatedField<S extends string> = $$element.Element<S> | S;
        export type Conditions<S extends string> = $$element.Element<S> | S;
        export type Documentation<S extends string> = $$element.Element<S> | S;
        export type Script<S extends string> = $$element.Element<S> | S;
        export type UserImage<S extends string> = $$element.Element<S> | S;
        export type Password2<S extends string> = $$element.Element<S> | S;
        export type Reference<P extends IGlideTableProperties, R extends P & GlideRecord> = $$element.Reference<P, R> | R | $$rhino.String;
        export type ReferenceProperty<P extends IGlideTableProperties, R extends P & GlideRecord, E extends $$element.Reference<P, R>> = E | R | $$rhino.String;
    }
}