/// <reference path="$$rhino.d.ts" />
/// <reference path="$$element.d.ts" />
/// <reference path="$$property.d.ts" />

/**
 * Query operator values that can be used for string value comparisons.
 */
declare type StringQueryOperator = "=" | "!=" | "IN" | "NOT IN" | "STARTSWITH" | "ENDSWITH" | "CONTAINS" | "DOES NOT CONTAIN" | "INSTANCEOF";

/**
 * Query operator values that can be used for numerical operations.
 */
declare type NumberQueryOperator = "=" | "!=" | ">" | ">=" | "<" | "<=";

/**
 * Query operator values.
 */
declare type QueryOperator = StringQueryOperator | NumberQueryOperator;


/**
 *
 * @type {("starting" | "running" | "complete" | "cancelled" | "unknown")}
 */
declare type GlideProgressWorkerState = "starting" | "running" | "complete" | "cancelled" | "unknown";

/**
 *
 * @type {("success" | "cancelled" | "error")}
 */
declare type GlideProgressWorkerCompletionCode = "success" | "cancelled" | "error";

/**
 * The Scoped GlideElement API provides a number of convenient script methods for dealing with fields and their values. Scoped GlideElement methods are available for the fields of the current GlideRecord.
 * @interface IGlideElement
 */
declare type IGlideElement = Packages.com.glide.script.IGlideElement;

/**
 * GlideQueryCondition object.
 * @class GlideQueryCondition
 */
declare class GlideQueryCondition {
    protected constructor();
    /**
     * Adds an AND condition to the current condition.
     * @param {string} name The name of a field.
     * @param {QueryOperator} oper The operator for the query (=,!=,>,>=,<,<=,IN,NOT IN,STARTSWITH,ENDSWITH,CONTAINS,DOES NOT CONTAIN,INSTANCEOF).
     * @param {*} value The value to query on.
     * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
     */
    addCondition(name: string, oper: QueryOperator, value: any): GlideQueryCondition;
    /**
     * Adds an AND condition to the current condition. Assumes the equals operator.
     * @param {string} name The name of a field.
     * @param {*} value The value of a field.
     * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
     */
    addCondition(name: string, value: any): GlideQueryCondition;
    /**
     * Adds an AND condition to the current condition.
     * @param {GlideQueryCondition} queryCondition Condition to add.
     * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
     */
    addCondition(queryCondition: GlideQueryCondition): GlideQueryCondition
    /**
     * Adds an OR condition to the current condition.
     * @param {string} name The name of a field.
     * @param {QueryOperator} oper The operator for the query (=,!=,>,>=,<,<=,IN,NOT IN,STARTSWITH,ENDSWITH,CONTAINS,DOES NOT CONTAIN,INSTANCEOF).
     * @param {*} value The value to query on.
     * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
     */
    addOrCondition(name: string, oper: QueryOperator, value: any): GlideQueryCondition;
    /**
     * Adds an OR condition to the current condition. Assumes the equals operator.
     * @param {string} name The name of a field.
     * @param {*} value The value to query on.
     * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
     */
    addOrCondition(name: string, value: any): GlideQueryCondition;
    /**
     * Adds an OR condition to the current condition. Assumes the equals operator.
     * @param {GlideQueryCondition} queryCondition Condition to add.
     * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
     */
    addOrCondition(queryCondition: GlideQueryCondition): GlideQueryCondition;
}

/**
 * GlideAggregate enables you to easily create database aggregation queries.
 * @class GlideAggregate
 * @description The scoped GlideAggregate class is an extension of GlideRecord and provides database aggregation (COUNT, SUM, MIN, MAX, AVG) queries. This functionality can be helpful when creating customized reports or in calculations for calculated fields. The GlideAggregate class works only on number fields.When you use GlideAggregate on currency or price fields, you are working with the reference currency value. Be sure to convert the aggregate values to the user's session currency for display. Because the conversion rate between the currency or price value (displayed value) and its reference currency value (aggregation value) might change, the result may not be what the user expects.
 */
declare class GlideAggregate extends GlideRecord {
    /**
     * Creates a GlideAggregate object on the specified table.
     * @constructor
     * @param {string} tableName - Name of the table.
     */
    constructor(tableName: string);
    /**
     * Adds an aggregate.
     * @memberof GlideAggregate
     * @param {string} agg - Name of the aggregate to add, for example, COUNT, MIN, or MAX
     * @param {string} [name] - Name of the column to aggregate. Null is the default.
     */
    addAggregate(agg: string, name?: string): void;
    /**
     * Adds a trend for a field.
     * @memberof GlideAggregate
     * @param {string} fieldName - The name of the field for which trending should occur.
     * @param {string} timeInterval - The time interval for the trend. The following choices are available: Year, Quarter, Date, Week, DayOfWeek, Hour, Value.
     */
    addTrend(fieldName: string, timeInterval: string): void;
    /**
     * Gets the value of an aggregate from the current record.
     * @memberof GlideAggregate
     * @param {string} agg - The type of the aggregate, for example, SUM or Count.
     * @param {string} [name] - Name of the field to get the aggregate from.
     * @returns {string} The value of the aggregate.
     */
    getAggregate(agg: string, name?: string): string;
    /**
     * Gets the query necessary to return the current aggregate.
     * @memberof GlideAggregate
     * @returns {string} The encoded query to get the aggregate.
     */
    getAggregateEncodedQuery(): string;
    /**
     * Provides the name of a field to use in grouping the aggregates.
     * @memberof GlideAggregate
     * @param {string} name - Name of the field.
     * @description 
     */
    groupBy(name: string): void;
    /**
     * Orders the aggregates based on the specified aggregate and field.
     * @memberof GlideAggregate
     * @param {string} agg - Type of aggregation.
     * @param {string} fieldName - Name of the field to aggregate.
     */
    orderByAggregate(agg: string, fieldName: string): void;
    /**
     * Sets whether the results are to be grouped.
     * @memberof GlideAggregate
     * @param {boolean} b - When true the results are grouped.
     */
    setGroup(b: boolean): void;
}

/**
 * The scoped GlideDate class provides methods for performing operations on GlideDate objects, such as instantiating GlideDate objects or working with GlideDate fields.
 * @class GlideDate
 */
declare class GlideDate {
    /**
     * Creates a GlideDate object with the current date time.
     * @constructor
     */
    constructor();
    /**
     * Gets the date in the specified date format.
     * @memberof GlideDate
     * @param {string} format - the desired date format
     * @returns {string} the date in the specified format.
     */
    getByFormat(format: string): string;
    /**
     * Gets the day of the month stored by the GlideDate object, expressed in the UTC time zone.
     * @memberof GlideDate
     * @returns {number} The day of the month in the UTC time zone, from 1 to 31.
     */
    getDayOfMonthNoTZ(): number;
    /**
     * Gets the date in the current user's display format and time zone.
     * @memberof GlideDate
     * @returns {string} The date in the user's format and time zone. Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.
     */
    getDisplayValue(): string;
    /**
     * Gets the display value in the internal format (yyyy-MM-dd).
     * @memberof GlideDate
     * @returns {string} The date values for the GlideDate object in the current user's time zone and the internal time format of yyyy-MM-dd.
     */
    getDisplayValueInternal(): string;
    /**
     * Gets the month stored by the GlideDate object, expressed in the UTC time zone.
     * @memberof GlideDate
     * @returns {number} The numerical value of the month from 1 to 12.
     */
    getMonthNoTZ(): number;
    /**
     * Gets the date value stored in the database by the GlideDate object in the internal format, yyyy-MM-dd, and the system time zone, UTC by default.
     * @memberof GlideDate
     * @returns {string} The date value in the internal format and system time zone.
     */
    getValue(): string;
    /**
     * Gets the year stored by the GlideDate object, expressed in the UTC time zone.
     * @memberof GlideDate
     * @returns {number} The numerical value of the year.
     */
    getYearNoTZ(): number;
    /**
     * Sets a date value using the current user's display format and time zone.
     * @memberof GlideDate
     * @param {string} asDisplayed - The date in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as yyyy-MM-dd.
     */
    setDisplayValue(asDisplayed: string): void;
    /**
     * Sets the date of the GlideDate object.
     * @memberof GlideDate
     * @param {string} o - The date and time to use.
     */
    setValue(o: string): void;
    /**
     * Gets the duration difference between two GlideDate values.
     * @memberof GlideDate
     * @param {GlideDate} start - The start value.
     * @param {GlideDate} end - The end value.
     * @returns {GlideDuration} The duration between the two values.
     */
    subtract(start: GlideDate, end: GlideDate): GlideDuration;
}

/**
 * The scoped GlideDateTime class provides methods for performing operations on GlideDateTime objects, such as instantiating GlideDateTime objects or working with glide_date_time fields.
 * @class GlideDateTime
 * @description Use the GlideDateTime methods to perform date-time operations, such as instantiating a GlideDateTime object, performing date-time calculations, formatting a date-time, or converting between date-time formats.
 */
declare class GlideDateTime {
    /**
     * Adds a GlideTime object to the current GlideDateTime object.
     * @memberof GlideDateTime
     * @param {GlideTime} gd - The GlideTime object to add.
     */
    add(gd: GlideTime): void;
    /**
     * Adds the specified number of milliseconds to the current GlideDateTime object.
     * @memberof GlideDateTime
     * @param {number} milliseconds - The number of milliseconds to add.
     */
    add(milliseconds: number): void;
    /**
     * Instantiates a new GlideDateTime object with the current date and time in Greenwich Mean Time (GMT).
     * @constructor
     */
    constructor();
    /**
     * Instantiates a new GlideDateTime object set to the time of the GlideDateTime object passed in the parameter.
     * @constructor
     * @param {GlideDateTime} g - The GlideDateTime object to use for setting the time of the new object.
     */
    constructor(g: GlideDateTime);
    /**
     * Instantiates a new GlideDateTime object from a date and time value in the UTC time zone specified with the format yyyy-MM-dd HH:mm:ss.
     * @constructor
     * @param {string} value - A UTC date and time using the internal format yyyy-MM-dd HH:mm:ss.
     */
    constructor(value: string);
    /**
     * Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts days using the local date and time values.
     * @memberof GlideDateTime
     * @param {number} days - The number of days to add. Use a negative value to subtract.
     */
    addDaysLocalTime(days: number): void;
    /**
     * Adds a specified number of days to the current GlideDateTime object. A negative parameter subtracts days. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts days using the UTC date and time values.
     * @memberof GlideDateTime
     * @param {number} days - The number of days to add. Use a negative number to subtract.
     */
    addDaysUTC(days: number): void;
    /**
     * Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts months using the local date and time values.
     * @memberof GlideDateTime
     * @param {number} months - The number of months to add. use a negative value to subtract.
     */
    addMonthsLocalTime(months: number): void;
    /**
     * Adds a specified number of months to the current GlideDateTime object. A negative parameter subtracts months. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts months using the UTC date and time values.
     * @memberof GlideDateTime
     * @param {number} months - The number of months to add. Use a negative value to subtract.
     */
    addMonthsUTC(months: number): void;
    /**
     * Adds the specified number of seconds to the current GlideDateTime object.
     * @memberof GlideDateTime
     * @param {number} seconds - The number of seconds to add.
     */
    addSeconds(seconds: number): void;
    /**
     * Adds a specified number of weeks to the current GlideDateTime object. A negative parameter subtracts weeks. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts weeks using the local date and time values.
     * @memberof GlideDateTime
     * @param {number} weeks - The number of weeks to add. Use a negative value to subtract.
     */
    addWeeksLocalTime(weeks: number): void;
    /**
     * Adds a specified number of weeks to the current GlideDateTime object. A negative parameter subtracts weeks. The method determines the UTC date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts weeks using the UTC date and time values.
     * @memberof GlideDateTime
     * @param {number} weeks - The number of weeks to add. Use a negative value to subtract.
     */
    addWeeksUTC(weeks: number): void;
    /**
     * Adds a specified number of years to the current GlideDateTime object. A negative parameter subtracts years. The method determines the local date and time equivalent to the value stored by the GlideDateTime object, then adds or subtracts years using the local date and time values.
     * @memberof GlideDateTime
     * @param {number} years - The number of years to add. Use a negative value to subtract.
     */
    addYearsLocalTime(years: number): void;
    /**
     * Adds a specified number of years to the current GlideDateTime object. A negative parameter subtracts years. The date and time value stored by GlideDateTime object is interpreted as being in the UTC time zone.
     * @memberof GlideDateTime
     * @param {number} years - The number of years to add. Use a negative value to subtract.
     */
    addYearsUTC(years: number): void;
    /**
     * Determines if the GlideDateTime object occurs after the specified GlideDateTime.
     * @memberof GlideDateTime
     * @param {GlideDateTime} gdt - The time to check against.
     * @returns {boolean} Returns true if the GlideDateTime object's time is after the time specified by the parameter.
     */
    after(gdt: GlideDateTime): boolean;
    /**
     * Determines if the GlideDateTime object occurs before the specified GlideDateTime.
     * @memberof GlideDateTime
     * @param {GlideDateTime} gdt - The time to check against.
     * @returns {boolean} Returns true if the GlideDateTime object's time is before the time specified by the parameter.
     */
    before(gdt: GlideDateTime): boolean;
    /**
     * Compares two date and time objects to determine whether they are equivalent or one occurs before or after the other.
     * @memberof GlideDateTime
     * @param {*} o - Date and time object in GlideDateTime format
     * @returns {number} 0 = Dates are equal1 = The object's date is after the date specified in the parameter-1 = The object's date is before the date specified in the parameter.
     */
    compareTo(o: any): number;
    /**
     * Compares a datetime with an existing value for equality.
     * @memberof GlideDateTime
     * @param {GlideDateTime | string} dateTime - The datetime to compare.
     * @returns {boolean} Returns true if they are equal; otherwise, false.
     */
    equals(dateTime: GlideDateTime | string): boolean;
    /**
     * Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the system time zone, UTC by default.
     * @memberof GlideDateTime
     * @returns {GlideDate} The date in the system time zone.
     */
    getDate(): GlideDate;
    /**
     * Gets the day of the month stored by the GlideDateTime object, expressed in the current user's time zone.
     * @memberof GlideDateTime
     * @returns {number} The day of the month in the user's time zone, from 1 to 31.
     */
    getDayOfMonthLocalTime(): number;
    /**
     * Gets the day of the month stored by the GlideDateTime object, expressed in the UTC time zone.
     * @memberof GlideDateTime
     * @returns {number} The day of the month in the UTC time zone, from 1 to 31.
     */
    getDayOfMonthUTC(): number;
    /**
     * Gets the day of the week stored by the GlideDateTime object, expressed in the user's time zone.
     * @memberof GlideDateTime
     * @returns {number} The day of week value, in the user's time zone, from 1 to 7. Monday equals 1, Sunday equals 7.
     */
    getDayOfWeekLocalTime(): number;
    /**
     * Gets the day of the week stored by the GlideDateTime object, expressed in the UTC time zone.
     * @memberof GlideDateTime
     * @returns {number} The day of week value from 1 to 7. Monday equals 1, Sunday equals 7.
     */
    getDayOfWeekUTC(): number;
    /**
     * Gets the number of days in the month stored by the GlideDateTime object, expressed in the current user's time zone.
     * @memberof GlideDateTime
     * @returns {number} The number of days in the current month in the user's time zone.
     */
    getDaysInMonthLocalTime(): number;
    /**
     * Gets the number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone.
     * @memberof GlideDateTime
     * @returns {number} The number of days in the month stored by the GlideDateTime object, expressed in the UTC time zone.
     */
    getDaysInMonthUTC(): number;
    /**
     * Gets the date and time value in the current user's display format and time zone.
     * @memberof GlideDateTime
     * @returns {string} The date and time in the user's format and time zone. Keep in mind when designing business rules or script includes that this method may return values in different formats for different users.
     */
    getDisplayValue(): string;
    /**
     * Gets the display value in the internal format (yyyy-MM-dd HH:mm:ss).
     * @memberof GlideDateTime
     * @returns {string} The date and time values for the GlideDateTime object in the current user's time zone and the internal date and time format of yyyy-MM-dd HH:mm:ss.
     */
    getDisplayValueInternal(): string;
    /**
     * Gets the amount of time that daylight saving time is offset.
     * @memberof GlideDateTime
     * @returns {number} Amount of time, in milliseconds, that daylight saving is offset. Returns 0 if there is no offset or if the time is not during daylight saving time.
     */
    getDSTOffset(): number;
    /**
     * Gets the current error message.
     * @memberof GlideDateTime
     * @returns {string} The error message.
     */
    getErrorMsg(): string;
    /**
     * Returns the object's time in the local time zone and in the internal format.
     * @memberof GlideDateTime
     * @returns {string} The object's time in the local time zone and the internal format.
     */
    getInternalFormattedLocalTime(): string;
    /**
     * Gets the date stored by the GlideDateTime object, expressed in the standard format, yyyy-MM-dd, and the current user's time zone.
     * @memberof GlideDateTime
     * @returns {GlideDate} The date in the user's time zone.
     */
    getLocalDate(): GlideDate;
    /**
     * Returns a GlideTime object that represents the time portion of the GlideDateTime object in the user's time zone.
     * @memberof GlideDateTime
     * @returns {GlideTime} The time in the user's time zone.
     */
    getLocalTime(): GlideTime;
    /**
     * Gets the month stored by the GlideDateTime object, expressed in the current user's time zone.
     * @memberof GlideDateTime
     * @returns {number} The numerical value of the month.
     */
    getMonthLocalTime(): number;
    /**
     * Gets the month stored by the GlideDateTime object, expressed in the UTC time zone.
     * @memberof GlideDateTime
     * @returns {number} The numerical value of the month.
     */
    getMonthUTC(): number;
    /**
     * Gets the number of milliseconds since January 1, 1970, 00:00:00 GMT.
     * @memberof GlideDateTime
     * @returns {number} The number of milliseconds since January 1, 1970, 00:00:00 GMT.
     */
    getNumericValue(): number;
    /**
     * Returns a GlideTime object that represents the time portion of the GlideDateTime object.
     * @memberof GlideDateTime
     * @returns {GlideTime} The Unix duration stamp in system format based on GMT time.
     */
    getTime(): GlideTime;
    /**
     * Gets the time zone offset in milliseconds.
     * @memberof GlideDateTime
     * @returns {number} The number of milliseconds of time zone offset.
     */
    getTZOffset(): number;
    /**
     * Returns the object's time in the local time zone and in the user's format.
     * @memberof GlideDateTime
     * @returns {string} The object's time in the local time zone and in the user's format.
     */
    getUserFormattedLocalTime(): string;
    /**
     * Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default.
     * @memberof GlideDateTime
     * @returns {string} The date and time value in the internal format and system time zone.
     */
    getValue(): string;
    /**
     * Gets the number of the week stored by the GlideDateTime object, expressed in the current user's time zone. All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.
     * @memberof GlideDateTime
     * @returns {number} The number of the current week in local time. The highest week number in a year is either 52 or 53.
     */
    getWeekOfYearLocalTime(): number;
    /**
     * Gets the number of the week stored by the GlideDateTime object, expressed in the UTC time zone. All weeks begin on Sunday. The first week of the year is the week that contains at least one day of the new year. The week beginning Sunday 2015-12-27 is considered the first week of 2016 as that week contains January 1 and 2.
     * @memberof GlideDateTime
     * @returns {number} The number of the current week in UTC time. The highest week number in a year is either 52 or 53.
     */
    getWeekOfYearUTC(): number;
    /**
     * Gets the year stored by the GlideDateTime object, expressed in the current user's time zone.
     * @memberof GlideDateTime
     * @returns {number} Four-digit year value in the user's time zone.
     */
    getYearLocalTime(): number;
    /**
     * Gets the year stored by the GlideDateTime object, expressed in the UTC time zone.
     * @memberof GlideDateTime
     * @returns {number} 4-digit year value in the UTC time zone.
     */
    getYearUTC(): number;
    /**
     * Determines if an object's date is set.
     * @memberof GlideDateTime
     * @returns {boolean} True if the object date is set; otherwise, returns false.
     */
    hasDate(): boolean;
    /**
     * Determines if an object's time uses a daylight saving offset.
     * @memberof GlideDateTime
     * @returns {boolean} True if the time is daylight saving; otherwise, returns false.
     */
    isDST(): boolean;
    /**
     * Determines if a value is a valid date and time.
     * @memberof GlideDateTime
     * @returns {boolean} True if value is valid; otherwise, returns false.
     */
    isValid(): boolean;
    /**
     * Determines if the GlideDateTime object occurs on or after the specified GlideDateTime.
     * @memberof GlideDateTime
     * @param {GlideDateTime} gdt - The time to check against.
     * @returns {boolean} Returns true if the GlideDateTime object's time is on or after the time specified by the parameter.
     */
    onOrAfter(gdt: GlideDateTime): boolean;
    /**
     * Determines if the GlideDateTime object occurs on or before the specified GlideDateTime.
     * @memberof GlideDateTime
     * @param {GlideDateTime} gdt - The time to check against.
     * @returns {boolean} Returns true if the GlideDateTime object's time is on or before the time specified by the parameter.
     */
    onOrBefore(gdt: GlideDateTime): boolean;
    /**
     * Sets the day of the month to a specified value in the current user's time zone.
     * @memberof GlideDateTime
     * @param {number} day - The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
     */
    setDayOfMonthLocalTime(day: number): void;
    /**
     * Sets the day of the month to a specified value in the UTC time zone.
     * @memberof GlideDateTime
     * @param {number} day - The day of month to change to, from 1 to 31. If this value is greater than the maximum number of days in the month, the value is set to the last day of the month.
     */
    setDayOfMonthUTC(day: number): void;
    /**
     * Sets a date and time value using the current user's display format and time zone.
     * @memberof GlideDateTime
     * @param {string} asDisplayed - The date and time in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as MM-dd-yyyy HH:mm:ss. To assign the current date and time to a variable in a workflow script, use variable.setDisplayValue(gs.nowDateTime);.
     */
    setDisplayValue(asDisplayed: string): void;
    /**
     * Sets a date and time value using the current user's time zone and the specified date and time format. This method throws a runtime exception if the date and time format used in the?value?parameter does not match the?format?parameter. You can retrieve the error message by calling getErrorMsg() on the GlideDateTime object after the exception is caught.
     * @memberof GlideDateTime
     * @param {string} value - The date and time in the current user's time zone.
     * @param {string} format - The date and time format to use to parse the value parameter.
     */
    setDisplayValue(value: string, format: string): void;
    /**
     * Sets a date and time value using the internal format (yyyy-MM-dd HH:mm:ss) and the current user's time zone.
     * @memberof GlideDateTime
     * @param {string} value - The date and time in internal format.
     */
    setDisplayValueInternal(value: string): void;
    /**
     * Sets the date and time of the current object using an existing GlideDateTime object. This method is equivalent to instantiating a new object with a GlideDateTime parameter.
     * @memberof GlideDateTime
     * @param {GlideDateTime} g - The object to use for setting the datetime value.
     */
    setGlideDateTime(g: GlideDateTime): void;
    /**
     * Sets the month stored by the GlideDateTime object to the specified value using the current user's time zone.
     * @memberof GlideDateTime
     * @param {number} month - The month to change to.
     */
    setMonthLocalTime(month: number): void;
    /**
     * Sets the month stored by the GlideDateTime object to the specified value using the UTC time zone.
     * @memberof GlideDateTime
     * @param {number} month - The month to change to.
     */
    setMonthUTC(month: number): void;
    /**
     * Sets the date and time of the GlideDateTime object.
     * @memberof GlideDateTime
     * @param {string} o - The date and time to use. This parameter may be one of several types:A string in the UTC time zone and the internal format of yyyy-MM-dd HH:mm:ss. Sets the value of the object to the specified date and time. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(String value) constructor. If the date and time format used does not match the internal format, the method attempts to set the date and time using other available formats. Resolving the date and time this way can lead to inaccurate data due to ambiguity in the day and month values. When using a non-standard date and time format, use etValueUTC(String dt, String format) instead.A GlideDateTime object. Sets the value of the object to the date and time stored by the GlideDateTime passed in the parameter. Using the method this way is equivalent to instantiating a new GlideDateTime object using the GlideDateTime(GlideDateTime g) constructor.A JavaScript Number. Sets the value of the object using the Number value as milliseconds past January 1, 1970 00:00:00 GMT.
     */
    setValue(o: string): void;
    /**
     * Sets a date and time value using the UTC time zone and the specified date and time format. This method throws a runtime exception if the date and time format used in the?dt?parameter does not match the?format?parameter. You can retrieve the error message by calling?getErrorMsg()?on the GlideDateTime object after the exception is caught.
     * @memberof GlideDateTime
     * @param {string} dt - The date and time to use.
     * @param {string} format - The date and time format to use.
     */
    setValueUTC(dt: string, format: string): void;
    /**
     * Sets the year stored by the GlideDateTime object to the specified value using the current user's time zone.
     * @memberof GlideDateTime
     * @param {number} year - The year to change to.
     */
    setYearLocalTime(year: number): void;
    /**
     * Sets the year stored by the GlideDateTime object to the specified value using the UTC time zone.
     * @memberof GlideDateTime
     * @param {number} year - The year to change to.
     */
    setYearUTC(year: number): void;
    /**
     * Gets the duration difference between two GlideDateTime values.
     * @memberof GlideDateTime
     * @param {GlideDateTime} Start - The start value.
     * @param {GlideDateTime} End - The end value.
     * @returns {GlideDuration} The duration between the two values.
     */
    subtract(Start: GlideDateTime, End: GlideDateTime): GlideDuration;
    /**
     * Subtracts a specified amount of time from the current GlideDateTime object.
     * @memberof GlideDateTime
     * @param {GlideTime} time - The time value to subtract.
     */
    subtract(time: GlideTime): void;
    /**
     * Subtracts the specified number of milliseconds from the GlideDateTime object.
     * @memberof GlideDateTime
     * @param {number} milliseconds - The number of milliseconds to subtract.
     */
    subtract(milliseconds: number): void;
    /**
     * Gets the date and time value stored by the GlideDateTime object in the internal format, yyyy-MM-dd HH:mm:ss, and the system time zone, UTC by default. This method is equivalent to getValue().
     * @memberof GlideDateTime
     * @returns {string} The date and time stored by the GlideDateTime object in the system time zone and format.
     */
    toString(): string;
}

/**
 * The scoped GlideDuration class provides methods for working with spans of time or durations.
 * @class GlideDuration
 * @description GlideDuration objects store the duration as a date and time from January 1, 1970, 00:00:00. As a result, setValue() and getValue() use the scoped GlideDateTime object for parameters and return values.
 */
declare class GlideDuration {
    /**
     * Add the specified duration to the object.
     * @memberof GlideDuration
     * @param {GlideDuration} duration - The value to add to the object.
     * @returns {GlideDuration} The sum of the current and the added duration.
     */
    add(duration: GlideDuration): GlideDuration;
    /**
     * Instantiates a GlideDuration object.
     * @constructor
     */
    constructor();
    /**
     * Instantiates a GlideDuration object by cloning the value of another GlideDuration object.
     * @constructor
     * @param {GlideDuration} another - Another scoped GlideDuration object.
     */
    constructor(another: GlideDuration);
    /**
     * Instantiates a GlideDuration object with the specified duration.
     * @constructor
     * @param {number} milliseconds - The duration value in milliseconds.
     */
    constructor(milliseconds: number);
    /**
     * Instantiates a GlideDuration object with the specified display value.
     * @constructor
     * @param {string} displayValue - The display value.
     */
    constructor(displayValue: string);
    /**
     * Gets the duration in the specified format.
     * @memberof GlideDuration
     * @param {string} format - The duration format.
     * @returns {string} The current duration in the specified format.
     */
    getByFormat(format: string): string;
    /**
     * Gets the number of days.
     * @memberof GlideDuration
     * @returns {number} The number of days.
     */
    getDayPart(): number;
    /**
     * Gets the display value of the duration in number of days, hours, and minutes.
     * @memberof GlideDuration
     * @returns {string} The number of days, hours, and minutes.
     */
    getDisplayValue(): string;
    /**
     * Gets the duration value in "d HH:mm:ss" format.
     * @memberof GlideDuration
     * @returns {string} The duration value.
     */
    getDurationValue(): string;
    /**
     * Gets the rounded number of days. If the time part is more than 12 hours, the return value is rounded up. Otherwise, it is rounded down.
     * @memberof GlideDuration
     * @returns {number} The day part, rounded.
     */
    getRoundedDayPart(): number;
    /**
     * Gets the internal value of the GlideDuration object.
     * @memberof GlideDuration
     * @returns {string} The duration in the object's internal format, which is the date and time from January 1, 1970, 00:00:00.
     * @description 
     */
    getValue(): string;
    /**
     * Sets the display value.
     * @memberof GlideDuration
     * @param {string} asDisplayed - The duration in "d HH:mm:ss" format.
     */
    setDisplayValue(asDisplayed: string): void;
    /**
     * Sets the internal value of the GlideDuration object.
     * @memberof GlideDuration
     * @param {*} o - The duration in the object's internal format, which is the date and time from January 1, 1970, 00:00:00.
     * @description 
     */
    setValue(o: any): void;
    /**
     * Subtracts the specified duration from the current duration.
     * @memberof GlideDuration
     * @param {GlideDuration} duration - The duration to subtract.
     */
    subtract(duration: GlideDuration): void;
}

/**
 * The scoped GlideTime class provides methods for performing operations on GlideTime objects, such as instantiating GlideTime objects or working with GlideTime fields.
 * @class GlideTime
 */
declare class GlideTime {
    /**
     * Instantiates a GlideTime object with the current time.
     * @constructor
     */
    constructor();
    /**
     * Instantiates a GlideTime object with the specified time.
     * @constructor
     * @param {number} milliseconds - The datetime in milliseconds.
     */
    constructor(milliseconds: number);
    /**
     * Gets the time in the specified format.
     * @memberof GlideTime
     * @param {string} format - The time format.
     * @returns {string} The time in the specified format.
     */
    getByFormat(format: string): string;
    /**
     * Gets the time in the current user's display format and time zone.
     * @memberof GlideTime
     * @returns {string} The time in the user's format and time zone.
     * @description 
     */
    getDisplayValue(): string;
    /**
     * Gets the display value in the current user's time zone and the internal format (HH:mm:ss).
     * @memberof GlideTime
     * @returns {string} The time value for the GlideTime object in the current user's time zone and the internal time format of HH:mm:ss.
     */
    getDisplayValueInternal(): string;
    /**
     * Returns the hours part of the time using the local time zone.
     * @memberof GlideTime
     * @returns {number} The hours using the local time zone.
     */
    getHourLocalTime(): number;
    /**
     * Returns the hours part of the time using the local time zone. The number of hours is based on a 24 hour clock.
     * @memberof GlideTime
     * @returns {number} The hours using the local time zone. The number of hours is based on a 24 hour clock.
     */
    getHourOfDayLocalTime(): number;
    /**
     * Returns the hours part of the time using the UTC time zone. The number of hours is based on a 24 hour clock.
     * @memberof GlideTime
     * @returns {number} The hours using the UTC time zone. The number of hours is based on a 24 hour clock.
     */
    getHourOfDayUTC(): number;
    /**
     * Returns the hours part of the time using the UTC time zone. The number of hours is based on a 12 hour clock. Noon and midnight are represented by 0, not 12.
     * @memberof GlideTime
     * @returns {number} The hours using the UTC time zone. The number of hours is based on a 12 hour clock. Noon and midnight are represented by 0, not 12.
     */
    getHourUTC(): number;
    /**
     * Returns the number of minutes using the local time zone.
     * @memberof GlideTime
     * @returns {number} The number of minutes using the local time zone.
     */
    getMinutesLocalTime(): number;
    /**
     * Returns the number of minutes in the hour based on the UTC time zone.
     * @memberof GlideTime
     * @returns {number} The number of minutes in the hour using the UTC time zone.
     */
    getMinutesUTC(): number;
    /**
     * Returns the number of seconds in the current minute.
     * @memberof GlideTime
     * @returns {number} The number of seconds in the minute.
     */
    getSeconds(): number;
    /**
     * Gets the time value stored in the database by the GlideTime object in the internal format, HH:mm:ss, and the system time zone.
     * @memberof GlideTime
     * @returns {string} The time value in the internal fomat and system time zone.
     */
    getValue(): string;
    /**
     * Sets a time value using the current user's display format and time zone.
     * @memberof GlideTime
     * @param {string} asDisplayed - The time in the current user's display format and time zone. The parameter must be formatted using the current user's preferred display format, such as HH:mm:ss.
     */
    setDisplayValue(asDisplayed: string): void;
    /**
     * Sets the time of the GlideTime object in the internal time zone.
     * @memberof GlideTime
     * @param {string} o - The time in hh:mm:ss format.
     */
    setValue(o: string): void;
    /**
     * Gets the duration difference between two GlideTime object values.
     * @memberof GlideTime
     * @param {GlideTime} startTime - The start value.
     * @param {GlideTime} endTime - The end value.
     * @returns {GlideDuration} The duration between the two values.
     */
    subtract(startTime: GlideTime, endTime: GlideTime): GlideDuration;
}

/**
 * The Scoped GlideElement API provides a number of convenient script methods for dealing with fields and their values. Scoped GlideElement methods are available for the fields of the current GlideRecord.
 * @class GlideElement
 */
declare class GlideElement extends Packages.com.glide.script.GlideElement { protected constructor(); }
declare class GlideElementBoolean extends Packages.java.lang.Boolean implements $$element.IValueSpecific<boolean, GlideElementBoolean, $$rhino.BooleanString> {
    protected constructor();

    /**
     * Determines if the user's role permits the creation of new records in this field.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the field can be created, false otherwise.
     */
    canCreate(): boolean;
    /**
     * Indicates whether the user's role permits them to read the associated GlideRecord.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the field can be read, false otherwise.
     */
    canRead(): boolean;
    /**
     * Determines whether the user's role permits them to write to the associated GlideRecord.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the user can write to the field, false otherwise.
     */
    canWrite(): boolean;
    /**
     * Determines if the current field has been modified. This functionality is available for all available data types, except Journal fields.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the fields have been changed, false if the field has not.
     * @description 
     */
    changes(): boolean;
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @memberof GlideElementBoolean
     * @param {$$rhino.Nilable<$$property.Boolean>} o - An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     * @description 
     */
    changesFrom(o: $$rhino.Nilable<$$property.Boolean>): boolean;
    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @memberof GlideElementBoolean
     * @param {$$rhino.Nilable<$$property.Boolean>} o - An object value to check against the new value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     * @description 
     */
    changesTo(o: $$rhino.Nilable<$$property.Boolean>): boolean;
    /**
     * Returns the number of milliseconds since January 1, 1970, 00:00:00 GMT for a duration field. Does not require the creation of a GlideDateTime object because the duration field is already a GlideDateTime object.
     * @memberof GlideElementBoolean
     * @returns {number} Number of milliseconds since January 1, 1970, 00:00:00 GMT.
     */
    dateNumericValue(): number;
    /**
     * Returns the value of the specified attribute from the dictionary.
     * @memberof GlideElementBoolean
     * @param {string} attributeName - Attribute name
     * @returns {string} Attribute value.
     * @description 
     */
    getAttribute(attributeName: string): string;
    /**
     * Returns the Boolean value of the specified attribute from the dictionary.
     * @memberof GlideElementBoolean
     * @param {string} attributeName - Attribute name
     * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
     * @description 
     */
    getBooleanAttribute(attributeName: string): boolean;
    /**
     * Generates a choice list for a field.
     * @memberof GlideElementBoolean
     * @param {string} [dependent] - A dependent value
     * @returns {Array<*>} An array list of choices.
     */
    getChoices(dependent?: string): any[];
    /**
     * Returns the choice label for the current choice.
     * @memberof GlideElementBoolean
     * @returns {string} The selected choice's label.
     * @description 
     */
    getChoiceValue(): string;
    /**
     * Returns the clear text value for Password (2 way encrypted) fields in scoped applications.
     * @memberof GlideElementBoolean
     * @returns {string} The clear text password.
     */
    getDecryptedValue(): string;
    /**
     * Gets the formatted display value of the field.
     * @memberof GlideElementBoolean
     * @param {number} [maxCharacters] - Maximum characters desired
     * @returns {string} The display value of the field.
     */
    getDisplayValue(maxCharacters?: number): string;
    /**
     * Returns the element's descriptor.
     * @memberof GlideElementBoolean
     * @returns {GlideElementDescriptor} Element's descriptor.
     */
    getED(): GlideElementDescriptor;
    /**
     * Returns the phone number in international format.
     * @memberof GlideElementBoolean
     * @returns {string} The phone number in international format.
     */
    getGlobalDisplayValue(): string;
    /**
     * Returns the HTML value of a field.
     * @memberof GlideElementBoolean
     * @param {number} [maxChars] - Maximum number of characters to return.
     * @returns {string} HTML value for the field.
     */
    getHTMLValue(maxChars?: number): string;
    /**
     * Returns either the most recent journal entry or all journal entries.
     * @memberof GlideElementBoolean
     * @param {number} mostRecent - If 1, returns the most recent entry. If -1, returns all journal entries.
     * @returns {string} For the most recent entry, returns a string that contains the field label, timestamp, and user display name of the journal entry.For all journal entries, returns the same information for all journal entries ever entered as a single string with each entry delimited by "\n\n".
     */
    getJournalEntry(mostRecent: number): string;
    /**
     * Returns the object label.
     * @memberof GlideElementBoolean
     * @returns {string} Object label.
     */
    getLabel(): string;
    /**
     * Returns the name of the field.
     * @memberof GlideElementBoolean
     * @returns {string} Field name.
     */
    getName(): string;
    /**
     * Returns the name of the table on which the field resides.
     * @memberof GlideElementBoolean
     * @returns {string} Name of the table. The returned value may be different from the table Class that the record is in. See Tables and Classes in the product documentation.
     */
    getTableName(): string;
    /**
     * Determines if a field is null.
     * @memberof GlideElementBoolean
     * @returns {boolean} True if the field is null or an empty string, false if not.
     */
    nil(): boolean;
    /**
     * Sets the value of a date/time element to the specified number of milliseconds since January 1, 1970 00:00:00 GMT.
     * @memberof GlideElementBoolean
     * @param {number} milliseconds - Number of milliseconds since 1/1/1970
     * @description 
     */
    setDateNumericValue(milliseconds: number): void;
    /**
     * Sets the display value of the field.
     * @memberof GlideElementBoolean
     * @param {*} value - The value to set for the field.
     */
    setDisplayValue(value: any): void;
    /**
     * Adds an error message. Available in Fuji patch 3.
     * @memberof GlideElementBoolean
     * @param {string} errorMessage - The error message.
     */
    setError(errorMessage: string): void;
    /**
     * Sets the field to the specified phone number.
     * @memberof GlideElementBoolean
     * @param {*} phoneNumber - The phone number to set. This can be in either the international or local format.
     * @param {boolean} strict - When true, specifies that the number specified must match the correct format. When false, the system attempts to correct an improperly formatted phone number.
     * @returns {boolean} True if the value was set.
     * @description 
     */
    setPhoneNumber(phoneNumber: any, strict: boolean): boolean;
    /**
     * Sets the value of a field.
     * @memberof GlideElementBoolean
     * @param {$$rhino.Nilable<$$property.Boolean>} value - Object value to set the field to.
     * @description 
     */
    setValue(value: $$rhino.Nilable<$$property.Boolean>): void;
}

declare class GlideElementBreakdownElement extends $$element.StringBased<string, GlideElementBreakdownElement, string> { protected constructor(); }
declare class GlideElementCompressed extends $$element.StringBased<string, GlideElementCompressed, string> { protected constructor(); }
declare class GlideElementConditions extends $$element.StringBased<string, GlideElementConditions, string> { protected constructor(); }
declare class GlideElementCounter extends $$element.StringBased<number, GlideElementCounter, string> { protected constructor(); }
declare class GlideElementCurrency extends $$element.StringBased<string, GlideElementCurrency, string> { protected constructor(); }
declare class GlideElementDataObject extends $$element.StringBased<string, GlideElementDataObject, string> { protected constructor(); }
declare class GlideElementDocumentation extends $$element.StringBased<string, GlideElementDocumentation, string> { protected constructor(); }
declare class GlideElementDocumentId extends $$element.StringBased<string, GlideElementDocumentId, string> { protected constructor(); }
declare class GlideElementDomainId extends $$element.StringBased<string, GlideElementDomainId, string> { protected constructor(); }
declare class GlideElementFullUTF8 extends $$element.StringBased<string, GlideElementFullUTF8, string> { protected constructor(); }
declare class GlideElementGlideObject extends $$element.StringBased<string, GlideElementGlideObject, string> { protected constructor(); }
declare class GlideElementGlideVar extends $$element.StringBased<string, GlideElementGlideVar, string> { protected constructor(); }
declare class GlideElementIcon extends $$element.StringBased<string, GlideElementIcon, string> { protected constructor(); }
declare class GlideElementInternalType extends $$element.StringBased<string, GlideElementInternalType, string> { protected constructor(); }
declare class GlideElementNameValue extends $$element.StringBased<string, GlideElementNameValue, string> { protected constructor(); }
declare class GlideElementNumeric extends $$element.StringBased<number, GlideElementNumeric, string> implements $$element.IValueSpecific<number, GlideElementNumeric, string> { protected constructor(); }
declare class GlideElementPassword extends $$element.StringBased<string, GlideElementPassword, string> { protected constructor(); }
declare class GlideElementPassword2 extends $$element.StringBased<string, GlideElementPassword2, string> { protected constructor(); }
declare class GlideElementPrice extends $$element.StringBased<number, GlideElementPrice, string> { protected constructor(); }

/**
 * A Glide element that references another GlideRecord.
 * @class GlideElementReference
 * @todo Verify whether Packages.com.glide.script.glide_elements.GlideReference exists
 */
declare class GlideElementReference extends $$element.StringBased<string, GlideElementReference, string> implements $$element.IReference<IGlideTableProperties, GlideRecord>, IGlideTableProperties {
    protected constructor();
    /**
     * Created by
     * @type {$$property.Element}
     * @memberof GlideElementReference
     */
    sys_created_by: $$property.Element;

    /**
     * Created
     * @type {$$property.GlideObject}
     * @memberof GlideElementReference
     * @description Internal type is "glide_date_time"
     */
    sys_created_on: $$property.GlideObject;

    /**
     * Sys ID
     * @type {$$property.Element}
     * @memberof GlideElementReference
     * @description Internal type is "GUID"
     */
    sys_id: $$property.Element;

    /**
     * Updates
     * @type {$$property.Numeric}
     * @memberof GlideElementReference
     */
    sys_mod_count: $$property.Numeric;

    /**
     * Updated by
     * @type {$$property.Element}
     * @memberof GlideElementReference
     */
    sys_updated_by: $$property.Element;

    /**
     * Updated
     * @type {$$property.GlideObject}
     * @memberof GlideElementReference
     * @description Internal type is "glide_date_time"
     */
    sys_updated_on: $$property.GlideObject;
    /**
     * Gets the table name for a reference element.
     * @memberof GlideElementReference
     * @returns {string} The table name of the reference.
     */
    getReferenceTable(): string;
    /**
     * Returns a GlideRecord object for a given reference element.
     * @memberof GlideElementReference
     * @returns {GlideRecord} A GlideRecord object.
     * @description
     */
    getRefRecord(): GlideRecord | null | undefined;
    /**
     * Determines if the previous value of the current field matches the specified object.
     * @memberof GlideElementReference
     * @param {GlideRecord | $$rhino.Nilable<$$property.Reference>} o - An object value to check against the previous value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     * @description 
     */
    changesFrom(o: GlideRecord | $$rhino.Nilable<$$property.Reference>): boolean;
    /**
     * Determines if the new value of a field, after a change, matches the specified object.
     * @memberof GlideElementReference
     * @param {GlideRecord | $$rhino.Nilable<$$property.Reference>} o - An object value to check against the new value of the current field.
     * @returns {boolean} True if the previous value matches, false if it does not.
     * @description 
     */
    changesTo(o: GlideRecord | $$rhino.Nilable<$$property.Reference>): boolean;
    /**
     * Sets the value of a field.
     * @memberof GlideElementReference
     * @param {GlideRecord | $$rhino.Nilable<$$property.Reference>} value - Object value to set the field to.
     * @description
     */
    setValue(value: GlideRecord | $$rhino.Nilable<$$property.Reference>): void;
}

declare class GlideElementScript extends $$element.StringBased<string, GlideElementScript, string> { protected constructor(); }
declare class GlideElementShortFieldName extends $$element.StringBased<string, GlideElementShortFieldName, string> { protected constructor(); }
declare class GlideElementShortTableName extends $$element.StringBased<string, GlideElementShortTableName, string> { protected constructor(); }
declare class GlideElementSourceId extends $$element.StringBased<string, GlideElementSourceId, string> { protected constructor(); }
declare class GlideElementSourceName extends $$element.StringBased<string, GlideElementSourceName, string> { protected constructor(); }
declare class GlideElementSourceTable extends $$element.StringBased<string, GlideElementSourceTable, string> { protected constructor(); }
declare class GlideElementSysClassName extends $$element.StringBased<string, GlideElementSysClassName, string> { protected constructor(); }
declare class GlideElementTranslatedField extends $$element.StringBased<string, GlideElementTranslatedField, string> { protected constructor(); }
declare class GlideElementTranslatedHTML extends $$element.StringBased<string, GlideElementTranslatedHTML, string> { protected constructor(); }
declare class GlideElementTranslatedText extends $$element.StringBased<string, GlideElementTranslatedText, string> { protected constructor(); }
declare class GlideElementURL extends $$element.StringBased<string, GlideElementURL, string> { protected constructor(); }
declare class GlideElementUserImage extends $$element.StringBased<string, GlideElementUserImage, string> { protected constructor(); }
declare class GlideElementVariableConditions extends $$element.StringBased<string, GlideElementVariableConditions, string> { protected constructor(); }
declare class GlideElementWikiText extends $$element.StringBased<string, GlideElementWikiText, string> { protected constructor(); }
declare type IGlideElementVariables = Packages.com.glide.script.IGlideElementVariables;
declare type GlideappQuestion = Packages.com.glideapp.questionset.Question;
declare type GlideappReferenceQuestion = Packages.com.glideapp.questionset.ReferenceQuestion;
declare type GlideappAbstractChoiceListQuestion = Packages.com.glideapp.questionset.AbstractChoiceListQuestion;
declare type GlideappYesNoQuestion = Packages.com.glideapp.questionset.YesNoQuestion;

declare class GlideElementWorkflow extends $$element.StringBased<string, GlideElementWorkflow, string> {
    protected constructor();
    getStages(): Packages.com.glide.choice.ChoiceList;
    getProviderType: Packages.java.lang.String;
}
declare class GlideElementWorkflowConditions extends $$element.StringBased<string, GlideElementWorkflowConditions, string> { protected constructor(); }

/**
 * Scoped GlideRecord is used for database operations.
 * @class GlideRecord
 * @description A GlideRecord contains both records and fields. For information about GlideRecordSecure, which is a class inherited from GlideRecord that performs the same functions as GlideRecord, and also enforces ACLs, see the GlideServer APIs .Always test queries on a sub-production instance prior to deploying them on a production instance. An incorrectly constructed encoded query, such as including an invalid field name, produces an invalid query. When the invalid query is run, the invalid part of the query condition is dropped, and the results are based on the valid part of the query, which may return all records from the table. Using an insert(), update(), deleteRecord(), or deleteMultiple() method on bad query results can result in data loss.You can set the glide.invalid_query.returns_no_rows system property to true to have queries with invalid encoded queries return no records.
 */
declare class GlideRecord implements IGlideTableProperties, $$element.IDbObject {
    /**
     * Created by
     * @type {$$property.Element}
     * @memberof GlideRecord
     */
    sys_created_by: $$property.Element;

    /**
     * Created
     * @type {$$property.GlideObject}
     * @memberof GlideRecord
     * @description Internal type is "glide_date_time"
     */
    sys_created_on: $$property.GlideObject;

    /**
     * Sys ID
     * @type {$$property.Element}
     * @memberof GlideRecord
     * @description Internal type is "GUID"
     */
    sys_id: $$property.Element;

    /**
     * Updates
     * @type {$$property.Numeric}
     * @memberof GlideRecord
     */
    sys_mod_count: $$property.Numeric;

    /**
     * Updated by
     * @type {$$property.Element}
     * @memberof GlideRecord
     */
    sys_updated_by: $$property.Element;

    /**
     * Updated
     * @type {$$property.GlideObject}
     * @memberof GlideRecord
     * @description Internal type is "glide_date_time"
     */
    sys_updated_on: $$property.GlideObject;
    /**
     * Adds a filter to return active records.
     * @memberof GlideRecord
     * @returns {GlideQueryCondition} Filter to return active records.
     */
    addActiveQuery(): GlideQueryCondition;
    /**
     * Adds an encoded query to other queries that may have been set.
     * @memberof GlideRecord
     * @param {string} query - An encoded query string.
     * @description 
     */
    addEncodedQuery(query: string): void;
    /**
     * Applies a pre-defined GlideDBFunctionBuilder object to a record.
     * @memberof GlideRecord
     * @param {*} function - A GlideDBFunctionBuilder object that defines a SQL operation.
     * @description 
     */
    addFunction(functionBuilder: any): void;
    /**
     * Creates an instance of the GlideRecord class for the specified table.
     * @constructor
     * @param {string} tableName - The table to be used.
     */
    constructor(tableName: string);
    /**
     * Adds a filter to return records based on a relationship in a related table.
     * @memberof GlideRecord
     * @param {string} joinTable - Table name
     * @param {*} [primaryField] - If other than sys_id, the primary field
     * @param {*} [joinTableField] - If other than sys_id, the field that joins the tables.
     * @returns {GlideQueryCondition} A filter that lists records where the relationships match.
     * @description 
     */
    addJoinQuery(joinTable: string, primaryField?: any, joinTableField?: any): GlideQueryCondition;
    /**
     * A filter that specifies records where the value of the field passed in the parameter is not null.
     * @memberof GlideRecord
     * @param {string} fieldName - Name of the field to check.
     * @returns {GlideQueryCondition} A filter that specifies records where the value of the field passed in the parameter is not null.
     * @description 
     */
    addNotNullQuery(fieldName: string): GlideQueryCondition;
    /**
     * Adds a filter to return records where the value of the specified field is null.
     * @memberof GlideRecord
     * @param {string} fieldName - Name of the field to check.
     * @returns {GlideQueryCondition} Query condition added to the GlideRecord.
     * @description 
     */
    addNullQuery(fieldName: string): GlideQueryCondition;
    /**
     * Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.
     * @memberof GlideRecord
     */
    addQuery(): GlideQueryCondition;
    /**
     * Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.
     * @memberof GlideRecord
     * @param {string} name - Table field name.
     * @param {string} operator - Query operator. The available values are dependent on the data type of the value parameter.Numbers:=!=&gt;&gt;=&lt;&lt;=Strings (must be in upper case):=!=INNOT INSTARTSWITHENDSWITHCONTAINSDOES NOT CONTAININSTANCEOF
     * @param {*} value - Value on which to query (not case-sensitive).
     * @returns {GlideQueryCondition} The query condition that was added to the GlideRecord.
     */
    addQuery(name: string, operator: string, value: any): GlideQueryCondition;
    /**
     * Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.
     * @memberof GlideRecord
     * @param {string} name - Table field name.
     * @param {*} value - Value on which to query (not case-sensitive).
     * @returns {GlideQueryCondition} The query condition that was added to the GlideRecord.
     */
    addQuery(name: string, value: any): GlideQueryCondition;
    /**
     * Adds a filter to return records using an encoded query string.
     * @memberof GlideRecord
     * @param {string} encodedQuery - Encoded query string.
     * @returns {GlideQueryCondition} The query condition added to the GlideRecord.
     * @description 
     */
    addQuery(encodedQuery: string): GlideQueryCondition;
    /**
     * Determines if the Access Control Rules, which include the user's roles, permit inserting new records in this table.
     * @memberof GlideRecord
     * @returns {boolean} True if the user's roles permit creation of new records in this table.
     */
    canCreate(): boolean;
    /**
     * Determines if the Access Control Rules, which include the user's roles, permit deleting records in this table.
     * @memberof GlideRecord
     * @returns {boolean} Flag that indicates whether the user's roles permit deletions of records in this table.Valid values:true: Deletions permittedfalse: Deletions are not permitted.
     */
    canDelete(): boolean;
    /**
     * Determines if the Access Control Rules, which include the user's roles, permit reading records in this table.
     * @memberof GlideRecord
     * @returns {boolean} Flag that indicates whether the user's roles permit reading of records in this table.Valid values:true: Reading permittedfalse: Reading is not permitted.
     */
    canRead(): boolean;
    /**
     * Determines if the Access Control Rules, which include the user's roles, permit editing records in this table.
     * @memberof GlideRecord
     * @returns {boolean} Flag that indicates whether the user's roles permit writing of records in this table.Valid values:true: Writing permittedfalse: Writing is not permitted.
     */
    canWrite(): boolean;
    /**
     * Sets a range of rows to be returned by subsequent queries.
     * @memberof GlideRecord
     * @param {number} firstRow - The first row to include. Because the index starts at 0, a value of 0 returns the first row.
     * @param {number} lastRow - The last row to include in the range. Because the index starts at 0, use the value n - 1, in which n equals the actual row number.
     * @param {boolean} forceCount - If true, the getRowCount() method will return all possible records.
     */
    chooseWindow(firstRow: number, lastRow: number, forceCount: boolean): void;
    /**
     * Deletes multiple records that satisfy the query condition.
     * @memberof GlideRecord
     * @description 
     */
    deleteMultiple(): void;
    /**
     * Deletes the current record.
     * @memberof GlideRecord
     * @returns {boolean} Flag that indicates whether the record was successfully deleted.Valid values:true: Record was deleted.false: No record was found to delete.
     */
    deleteRecord(): boolean;
    /**
     * Returns the specified record in an instantiated GlideRecord object.
     * @memberof GlideRecord
     * @param {$$property.Element} sys_id - sys_id to match.
     * @returns {boolean} Flag that indicates whether the requested record was located - true: Record was found; false: Record was not found.
     * @description 
     */
    get(sys_id: $$property.Element): boolean;
    /**
     * Returns the specified record in an instantiated GlideRecord object.
     * @memberof GlideRecord
     * @param {GLIDE.String} name - Name of the instantiated GlideRecord column to search for the specified value parameter.
     * @param {*} value - Value to match.
     * @returns {boolean} Flag that indicates whether the requested record was located.true: Record was foundfalse: Record was not found.
     * @description 
     */
    get(name: $$rhino.String, value: any): boolean;
    /**
     * Returns the dictionary attributes for the specified field.
     * @memberof GlideRecord
     * @param {string} fieldName - Field name for which to return the dictionary attributes
     * @returns {string} Dictionary attributes.
     */
    getAttribute(fieldName: string): string;
    /**
     * Returns the table's label.
     * @memberof GlideRecord
     * @returns {string} Table's label.
     */
    getClassDisplayValue(): string;
    /**
     * Retrieves the display value for the current record.
     * @memberof GlideRecord
     * @returns {string} The display value for the current record.
     */
    getDisplayValue(): string;
    /**
     * Returns the element's descriptor.
     * @memberof GlideRecord
     * @returns {GlideElementDescriptor} Element's descriptor.
     */
    getED(): GlideElementDescriptor;
    /**
     * Retrieves the GlideElement object for the specified field.
     * @memberof GlideRecord
     * @param {string} columnName - Name of the column to get the element from.
     * @returns {GlideElement} The GlideElement for the specified column of the current record.
     */
    getElement(columnName: string): GlideElement;
    /**
     * Retrieves the query condition of the current result set as an encoded query string.
     * @memberof GlideRecord
     * @returns {string} The encoded query as a string.
     */
    getEncodedQuery(): string;
    /**
     * Returns the field's label.
     * @memberof GlideRecord
     * @returns {string} Field's label.
     */
    getLabel(): string;
    /**
     * Retrieves the last error message. If there is no last error message, null is returned.
     * @memberof GlideRecord
     * @returns {string} The last error message as a string.
     */
    getLastErrorMessage(): string;
    /**
     * Retrieves a link to the current record.
     * @memberof GlideRecord
     * @param {boolean} noStack - If true, the sysparm_stack parameter is not appended to the link. The parameter sysparm_stack specifies the page to visit after closing the current link.
     * @returns {string} A link to the current record as a string.
     */
    getLink(noStack: boolean): string;
    /**
     * Retrieves the class name for the current record.
     * @memberof GlideRecord
     * @returns {string} The class name.
     */
    getRecordClassName(): string;
    /**
     * Retrieves the number of rows in the query result.
     * @memberof GlideRecord
     * @returns {number} Number of rows.
     */
    getRowCount(): number;
    /**
     * Retrieves the name of the table associated with the GlideRecord.
     * @memberof GlideRecord
     * @returns {string} The table name.
     */
    getTableName(): string;
    /**
     * Gets the primary key of the record, which is usually the sys_id unless otherwise specified.
     * @memberof GlideRecord
     * @returns {string} The unique primary key as a String, or null if the key is null.
     */
    getUniqueValue(): string;
    /**
     * Retrieves the string value of an underlying element in a field.
     * @memberof GlideRecord
     * @param {string} name - The name of the field to get the value from.
     * @returns {string} The value of the field.
     */
    getValue(name: string): string;
    /**
     * Determines if there are any more records in the GlideRecord object.
     * @memberof GlideRecord
     * @returns {boolean} True if there are more records in the query result set.
     */
    hasNext(): boolean;
    /**
     * Creates an empty record suitable for population before an insert.
     * @memberof GlideRecord
     */
    initialize(): void;
    /**
     * Inserts a new record using the field values that have been set for the current record.
     * @memberof GlideRecord
     * @returns {string} Unique ID of the inserted record, or null if the record is not inserted.
     */
    insert(): string;
    /**
     * Checks to see if the current database action is to be aborted.
     * @memberof GlideRecord
     * @returns {boolean} Flag that indicates whether the current database action is to be aborted.Valid values:true: Action is to be aborted.false: Action is not to be aborted.
     * @description 
     */
    isActionAborted(): boolean;
    /**
     * Checks if the current record is a new record that has not yet been inserted into the database.
     * @memberof GlideRecord
     * @returns {boolean} True if the record is new and has not been inserted into the database.
     */
    isNewRecord(): boolean;
    /**
     * Determines if the table exists.
     * @memberof GlideRecord
     * @returns {boolean} True if table is valid or if record was successfully retrieved. False if table is invalid or record was not successfully retrieved.
     */
    isValid(): boolean;
    /**
     * Determines if the specified field is defined in the current table.
     * @memberof GlideRecord
     * @param {string} columnName - The name of the the field.
     * @returns {boolean} True if the field is defined for the current table.
     */
    isValidField(columnName: string): boolean;
    /**
     * Determines if a record was actually returned by the query/get record operation.
     * @memberof GlideRecord
     * @returns {boolean} Flag that indicates whether a record was actually returned by the query/get operation.Valid values:true: Record returned by query/get operation.false: End of record set, no record returned.
     */
    isValidRecord(): boolean;
    /**
     * Creates a new GlideRecord record, sets the default values for the fields, and assigns a unique ID to the record.
     * @memberof GlideRecord
     */
    newRecord(): void;
    /**
     * Moves to the next record in the GlideRecord object.
     * @memberof GlideRecord
     * @returns {boolean} Flag that indicates if there is a "next" record in the GlideRecord.Valid values:true: Move to the next record was successful.false: No more records in the result set.
     * @description 
     */
    next(): boolean;
    /**
     * Retrieves the current operation being performed, such as insert, update, or delete.
     * @memberof GlideRecord
     * @returns {string} The current operation.
     */
    operation(): string;
    /**
     * Specifies an orderBy column.
     * @memberof GlideRecord
     * @param {string} name - The column name used to order the records in this GlideRecord object.
     */
    orderBy(name: string): void;
    /**
     * Specifies a decending orderBy column.
     * @memberof GlideRecord
     * @param {string} name - The column name to be used to order the records in a GlideRecord object.
     */
    orderByDesc(name: string): void;
    /**
     * Runs the query against the table based on the filters specified by addQuery, addEncodedQuery, etc.
     * @memberof GlideRecord
     * @param {*} field - Column name to query on.
     * @param {*} value - Value to query for.
     */
    query(field: any, value: any): void;
    /**
     * Runs the query against the table based on the filters specified by addQuery, addEncodedQuery, etc.
     * @memberof GlideRecord
     */
    query(): void;
    /**
     * Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted. This is often used in business rules.
     * @memberof GlideRecord
     * @param {boolean} b - True to abort the next action. False if the action is to be allowed.
     */
    setAbortAction(b: boolean): void;
    /**
     * Sets the limit for number of records are fetched by the GlideRecord query.
     * @memberof GlideRecord
     * @param {number} maxNumRecords - The maximum number of records to fetch.
     */
    setLimit(maxNumRecords: number): void;
    /**
     * Sets sys_id value for the current record.
     * @memberof GlideRecord
     * @param {string} guid - The GUID to be assigned to the current record.
     */
    setNewGuidValue(guid: string): void;
    /**
     * Sets the value of the field with the specified name to the specified value.
     * @memberof GlideRecord
     * @param {string} name - Name of the field.
     * @param {*} value - The value to assign to the field.
     * @description 
     */
    setValue(name: string, value: any): void;
    /**
     * Enables or disables the running of business rules, script engines, and audit.
     * @memberof GlideRecord
     * @param {boolean} enable - If true (default), enables business rules. If false, disables business rules.
     */
    setWorkflow(enable: boolean): void;
    /**
     * Updates the GlideRecord with any changes that have been made. If the record does not already exist, it is inserted.
     * @memberof GlideRecord
     * @param {string} [reason] - Reason for the update. The reason appears in the audit record.
     * @returns {string} The sys_id of the new or updated record. Returns null if the update fails.
     */
    update(reason?: string): string;
    /**
     * Updates each GlideRecord in a stated query with a specified set of changes.
     * @memberof GlideRecord
     * @description 
     */
    updateMultiple(): void;
    /**
     * Moves to the next record in the GlideRecord. Provides the same functionality as�next(), it is intended to be used in cases where the GlideRecord has a column named next.
     * @memberof GlideRecord
     * @returns {boolean} True if there are more records in the query set.
     */
    _next(): boolean;
    /**
     * Identical to�query(). This method is intended to be used on tables where there is a column named query, which would interfere with using the�query()�method.
     * @memberof GlideRecord
     * @param {*} name - Column name on which to query
     * @param {*} value - Value for which to query
     * @description 
     */
    _query(name: any, value: any): void;
}

/**
 * The scoped GlideElementDescriptor API provides information about individual fields.
 * @class GlideElementDescriptor
 * @description There is no constructor for this class. Use the GlideElement getED() method to obtain a ElementDescriptor object.
 */
declare class GlideElementDescriptor {
    protected constructor();
    /**
     * Returns the encryption type used for attachments on the element's table.
     * @memberof GlideElementDescriptor
     * @returns {string | Packages.java.lang.String} The encryption type used on attachments. Returns null if attachments on the element's table are not being encrypted.
     * @description 
     */
    getAttachmentEncryptionType(): string | Packages.java.lang.String;
    /**
     * Returns the element's encryption type.
     * @memberof GlideElementDescriptor
     * @returns {string | Packages.java.lang.String} The element's encryption type. Returns null if the element is not encrypted.
     * @description 
     */
    getEncryptionType(): string | Packages.java.lang.String;
    /**
     * Returns the element's internal data type.
     * @memberof GlideElementDescriptor
     * @returns {string | Packages.java.lang.String} The element's internal data type.
     */
    getInternalType(): string | Packages.java.lang.String;
    /**
     * Returns the element's label.
     * @memberof GlideElementDescriptor
     * @returns {string | Packages.java.lang.String} The element's label.
     */
    getLabel(): string | Packages.java.lang.String;
    /**
     * Returns the element's length.
     * @memberof GlideElementDescriptor
     * @returns {number} The element's size.
     */
    getLength(): number;
    /**
     * Returns the element's name.
     * @memberof GlideElementDescriptor
     * @returns {string} The element's name.
     */
    getName(): string | Packages.java.lang.String;
    /**
     * Returns the element's plural label.
     * @memberof GlideElementDescriptor
     * @returns {string} The element's plural label.
     */
    getPlural(): string | Packages.java.lang.String;
    /**
     * Returns true if an encrypted attachment has been added to the table.
     * @memberof GlideElementDescriptor
     * @returns {boolean} Returns true if an encrypted attachment has been added to the table.
     * @description 
     */
    hasAttachmentsEncrypted(): boolean;
    /**
     * Returns true if the element is an automatically generated or system field.
     * @memberof GlideElementDescriptor
     * @returns {boolean} True if the element is automatically generated or a system field.
     * @description 
     */
    isAutoOrSysID(): boolean;
    /**
     * Returns true if the element is defined as a dropdown choice in its dictionary definition.
     * @memberof GlideElementDescriptor
     * @returns {boolean} Returns true if the element is defined as a dropdown choice. Returns true even if there are no entries defined in the choice table. The last choice type, suggestion, does not return true.
     * @description 
     */
    isChoiceTable(): boolean;
    /**
     * Returns true if an element is encrypted.
     * @memberof GlideElementDescriptor
     * @returns {boolean} Returns true if the element is encrypted, false otherwise.
     * @description 
     */
    isEdgeEncrypted(): boolean;
    /**
     * Returns true if the element is a virtual element.
     * @memberof GlideElementDescriptor
     * @returns {boolean} Returns true if the element is a virtual element.
     * @description 
     */
    isVirtual(): boolean;
}

declare class GlideScriptableInputStream {
    protected constructor();
}

declare class XMLNodeIterator {
    hasNext(): Packages.java.lang.Boolean;
    next(): XMLNode;
}

declare class XMLNode {
    getAttribute(attribute: $$rhino.String): Packages.java.lang.String;
    getAttributes(): any;
    getChildNodeIterator(): XMLNodeIterator;
    getFirstChild(): XMLNode;
    getLastChild(): XMLNode;
    getNodeName(): Packages.java.lang.String;
    getNodeValue(): Packages.java.lang.String | null;
    getTextContent(): Packages.java.lang.String | null;
    hasAttribute(attribute: $$rhino.String): Packages.java.lang.Boolean;
    toString(): Packages.java.lang.String;
}

declare class XMLDocument2 extends Packages.java.lang.Object {
    constructor();
    constructor(inputStream: GlideScriptableInputStream);
    createElement(name: $$rhino.String, value?: any): XMLNode;
    createElementWithTextValue(name: $$rhino.String, value?: any): XMLNode;
    getDocumentElement(): XMLNode;
    getFirstNode(xpath: $$rhino.String): XMLNode;
    getNextNode(current: Packages.java.lang.Object): XMLNode;
    getNode(xpath: $$rhino.String): XMLNode;
    getNodeText(xpath: $$rhino.String): Packages.java.lang.String;
    parseXML(xmlDoc: $$rhino.String): Packages.java.lang.Boolean;
    setCurrent(el: XMLNode): void;
    setNamespaceAware(el: $$rhino.Boolean): void;
    toString(): Packages.java.lang.String;
}

declare class GlideEmail {
    /**
     * Adds the address to either the cc or bcc list.
     * @memberof GlideEmail
     * @param {"cc"|"bcc"} type - Either cc or bcc, determines the list to which the address is added.
     * @param {string} address - The recipient's email address.
     */
    addAddress(type: string, address: string): void;
    /**
     * Adds the recipient to either the cc or bcc list, but uses the display name instead of the address when showing the recipient.
     * @memberof GlideEmail
     * @param {"cc"|"bcc"} type - Either cc or bcc, determines the list to which the address is added.
     * @param {string} address - The recipient's email address.
     * @param {string} displayName - The name to be shown instead of the email address.
     */
    addAddress(type: string, address: string, displayName: string): void;
    /**
     * 
     * @param address 
     */
    addRecipient(address: string): void;
    /**
     * Instantiates a scoped GlideEmail object.
     * @constructor
     * @param {string} [body] Body of message
     */
    constructor(body?: string);
    /**
     * 
     */
    getSMSText(): string;
    /**
     * Returns the email's subject line.
     * @memberof GlideEmail
     * @returns {string} The email's subject line.
     */
    getSubject(): string;
    getTextBody(): string;
    /**
     * Returns the email's watermark.
     * @memberof GlideEmail
     * @returns {string} The email's watermark.
     */
    getWatermark(): string;
    /**
     * Sets the body of the email.
     * @memberof GlideEmail
     * @param {string} bodyText - The body of the email.
     */
    setBody(bodyText: string): void;
    /**
     * Sets the sender's address.
     * @memberof GlideEmail
     * @param {string} address - The sender's email address.
     */
    setFrom(address: string): void;
    setRecipients(recipients: string): void;
    /**
     * Sets the reply to address.
     * @memberof GlideEmail
     * @param {string} address - The reply to email address.
     */
    setReplyTo(address: string): void;
    /**
     * Sets the email's subject line.
     * @memberof GlideEmail
     * @param {string} subject - Text for the subject line.
     */
    setSubject(subject: string): void;
}

declare class EmailWatermark {
    getWatermark(): string;
}

/**
 * The scoped GlideEmailOutbound class implements the email object for scoped applications.
 * @class GlideEmailOutbound
* @description You can use the GlideEmailOutbound methods with the email global object available in mail scripts.The email object behaves identically for global and scoped applications.
 */
declare class EmailOutbound extends GlideEmail {
    constructor(actionType_OR_action?: string | GlideRecord, m?: EmailWatermark);
    save(): void;
}

/**
 * The Scoped GlideTableHierarchy API provides methods for handling information about table relationships.
 * @class GlideTableHierarchy
 */
declare class GlideTableHierarchy {
    /**
     * Instantiates a GlideTableHierarchy object.
     * @constructor
     * @param {string} tableName - The name of the table.
     */
    constructor(tableName: string);
    /**
     * Returns an array of strings containing all tables that extend the current table and includes the current table.
     * @memberof GlideTableHierarchy
     * @returns {Array<*>} An array of strings containing the tables in the hierarchy that includes the current table.
     */
    getAllExtensions(): any[];
    /**
     * Returns the parent class.
     * @memberof GlideTableHierarchy
     * @returns {string} The parent class.
     */
    getBase(): string;
    /**
     * Returns an array of strings containing all classes in the hierarchy of the current table.
     * @memberof GlideTableHierarchy
     * @returns {Array<*>} An array of strings of the classes in the hierarchy.
     */
    getHierarchy(): any[];
    /**
     * Returns the table's name.
     * @memberof GlideTableHierarchy
     * @returns {string} The table's name.
     */
    getName(): string;
    /**
     * Returns the top level class in the hierarchy.
     * @memberof GlideTableHierarchy
     * @returns {string} The root class.
     */
    getRoot(): string;
    /**
     * Returns an array of strings containing all tables that extend the current table.
     * @memberof GlideTableHierarchy
     * @returns {Array<*>} An array of strings containing the tables that extend the current table.
     */
    getTableExtensions(): any[];
    /**
     * Returns an array of strings of the table names in the hierarchy.
     * @memberof GlideTableHierarchy
     * @returns {Array<*>} An array of strings containing the names of tables in the hierarchy.
     */
    getTables(): any[];
    /**
     * Returns true of this class has been extended.
     * @memberof GlideTableHierarchy
     * @returns {boolean} True if the current table has extensions.
     */
    hasExtensions(): boolean;
    /**
     * Returns true if this is a base class.
     * @memberof GlideTableHierarchy
     * @returns {boolean} True if the current table has no parent and has extensions.
     */
    isBaseClass(): boolean;
    /**
     * Returns true if this table is not in a hierarchy.
     * @memberof GlideTableHierarchy
     * @returns {boolean} True if the current table has no parent and no extensions.
     */
    isSoloClass(): boolean;
}

/**
 * The scoped Workflow API provides methods that can be used in an activity definition script.
 * @class Workflow
 * @description There are no constructors for creating an instance of a scoped workflow object. Instead, use the global workflow object available in activity scripts. This workflow object is available in any script location inside a workflow.
 */
declare class Workflow {
    protected constructor();
    /**
     * Returns the workflow variables.
     * @memberof Workflow
     * @param {*} inputs - Workflow variables as name value pairs.
     */
    inputs(inputs: any): any;
    /**
     * Returns the workflow's result.
     * @memberof Workflow
     * @param {string} result - Workflow results
     */
    result(result: string): any;
    /**
     * Adds a debug message to the log.
     * @memberof Workflow
     * @param {string} message - The message to add to the log.
     * @param {*} [args] - Arguments to add to the message.
     * @returns {string} The message added to the log.
     */
    debug(message: string, args?: any): string;
    /**
     * Adds an error message to the log.
     * @memberof Workflow
     * @param {string} message - The message to add to the log.
     * @param {*} [args] - Arguments to add to the message.
     * @returns {string} The logged message.
     */
    error(message: string, args?: any): string;
    /**
     * Returns the specified variable's value.
     * @memberof Workflow
     * @param {string} name - The variable name
     * @returns {*} The variable's value.
     */
    getVariable(name: string): any;
    /**
     * Adds an informational message to the log.
     * @memberof Workflow
     * @param {string} message - The message to add to the log.
     * @param {*} [args] - Arguments to add to the message.
     * @returns {string} The message that is logged.
     */
    info(message: string, args?: any): string;
    /**
     * Returns the workflow name.
     * @memberof Workflow
     * @returns {string} The workflow name.
     */
    name(): string;
    /**
     * Removes the specified variable from the workflow.
     * @memberof Workflow
     * @param {string} name - The variable name
     */
    removeVariable(name: string): void;
    /**
     * Returns the workflow's scratchpad object.
     * @memberof Workflow
     * @returns {*} The scratchpad object.
     */
    scratchpad(): any;
    /**
     * Sets the workflow's result.
     * @memberof Workflow
     * @param {string} result - The workflow's result
     */
    setResult(result: string): void;
    /**
     * Sets the specified variable to the specified value.
     * @memberof Workflow
     * @param {string} name - The variable name
     * @param {*} value - The value to be assigned to the variable.
     */
    setVariable(name: string, value: any): void;
    /**
     * Adds a warning message to the log.
     * @memberof Workflow
     * @param {string} message - The message to add to the log.
     * @param {*} [args] - Arguments to add to the message.
     * @returns {string} The logged message.
     */
    warn(message: string, args?: any): string;
}

declare class GlideSchedule {
    constructor(sysID?: $$rhino.String, timeZone?: $$rhino.String);
    add(startDate: GlideDateTime, offSet: GlideDuration): GlideDateTime;
    duration(startDate: GlideDateTime, endDate: GlideDateTime): GlideDuration;
    getName(): $$rhino.String;
    isInSchedule(time: GlideDateTime): $$rhino.Boolean;
    isValid(): $$rhino.Boolean;
    load(sysID: $$rhino.String, timeZone?: $$rhino.String, excludeSpanID?: $$rhino.String): void;
    setTimeZone(timeZone: $$rhino.String): void;
    whenNext(time: GlideDateTime, timeZone: $$rhino.String): $$rhino.Number;
}

/**
 * The scoped GlideSystem (referred to by the variable name 'gs' in any server-side JavaScript) API provides a number of convenient methods to get information about the system, the current logged in user, etc.
 * @class GlideSystem
 * @description Many of the GlideSystem methods facilitate the easy inclusion of dates in query ranges, and are most often used in filters and reporting.
 */
declare class GlideSystem {
    protected constructor();
    /**
     * Adds an error message for the current session.
     * @memberof GlideSystem
     * @param {*} message - The message to add.
     */
    addErrorMessage(message: any): void;
    /**
     * Adds an info message for the current session. This method is not supported for asynchronous business rules.
     * @memberof GlideSystem
     * @param {*} message - An info message object.
     */
    addInfoMessage(message: any): void;
    /**
     * Returns an ASCII string from the specified base64 string.
     * @memberof GlideSystem
     * @param {string} source - A base64 encoded string.
     * @returns {string} The decoded string..
     */
    base64Decode(source: string): string;
    /**
     * Creates a base64 string from the specified string.
     * @memberof GlideSystem
     * @param {string} source - The string to be encoded.
     * @returns {string} The base64 string..
     */
    base64Encode(source: string): string;
    /**
     * Returns the date and time for the beginning of last month in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT beginning of last month, in the format yyyy-mm-dd hh:mm:ss.
     */
    beginningOfLastMonth(): string;
    /**
     * Returns the date and time for the beginning of last week in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT beginning of last week, in the format yyyy-mm-dd hh:mm:ss.
     */
    beginningOfLastWeek(): string;
    /**
     * Returns the date and time for the beginning of next month in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT beginning of next month, in the format yyyy-mm-dd hh:mm:ss.
     */
    beginningOfNextMonth(): string;
    /**
     * Returns the date and time for the beginning of next week in GMT.
     * @memberof GlideSystem
     * @returns {string} The GMT beginning of next week, in the format yyyy-mm-dd hh:mm:ss..
     */
    beginningOfNextWeek(): string;
    /**
     * Returns the date and time for the beginning of next year in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT beginning of next year, in the format yyyy-mm-dd hh:mm:ss.
     */
    beginningOfNextYear(): string;
    /**
     * Returns the date and time for the beginning of this month in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT beginning of this month, in the format yyyy-mm-dd hh:mm:ss.
     */
    beginningOfThisMonth(): string;
    /**
     * Returns the date and time for the beginning of this quarter in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT beginning of this quarter, in the format yyyy-mm-dd hh:mm:ss.
     */
    beginningOfThisQuarter(): string;
    /**
     * Returns the date and time for the beginning of this week in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT beginning of this week, in the format yyyy-mm-dd hh:mm:ss.
     */
    beginningOfThisWeek(): string;
    /**
     * Returns the date and time for the beginning of this year in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT beginning of this year, in the format yyyy-mm-dd hh:mm:ss.
     */
    beginningOfThisYear(): string;
    /**
     * Generates a date and time for the specified date in GMT.
     * @memberof GlideSystem
     * @param {string} date - Format: yyyy-mm-dd
     * @param {string} range - Start, end, or a time in the 24 hour format hh:mm:ss.
     * @returns {string} A date and time in the format yyyy-mm-dd hh:mm:ss. If range is start, the returned value is yyyy-mm-dd 00:00:00; If range is end the return value is yyyy-mm-dd 23:59:59..
     */
    dateGenerate(date: string, range: string): string;
    /**
     * Returns the date and time for a specified number of days ago.
     * @memberof GlideSystem
     * @param {number} days - Integer number of days
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    daysAgo(days: number): string;
    /**
     * Returns the date and time for the end of the day a specified number of days ago.
     * @memberof GlideSystem
     * @param {number} days - Integer number of days
     * @returns {string} GMT end of the day in the format yyyy-mm-dd hh:mm:ss.
     */
    daysAgoEnd(days: number): string;
    /**
     * Returns the date and time for the beginning of the day a specified number of days ago.
     * @memberof GlideSystem
     * @param {string} days - Integer number of days
     * @returns {string} GMT start of the day in the format yyyy-mm-dd hh:mm:ss.
     */
    daysAgoStart(days: string): string;
    /**
     * Writes a debug message to the system log.
     * @memberof GlideSystem
     * @param {string} message - The log message with place holders for any variable arguments.
     * @param {*} [param1] - First variable argument.
     * @param {*} [param2] - Second variable argument.
     * @param {*} [param3] - Third variable argument.
     * @param {*} [param4] - Fourth variable argument.
     * @param {*} [param5] - Fifth variable argument.
     */
    debug(message: string, param1?: any, param2?: any, param3?: any, param4?: any, param5?: any): void;
    /**
     * Returns the date and time for the end of last month in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT end of last month, in the format yyyy-mm-dd hh:mm:ss.
     */
    endOfLastMonth(): string;
    /**
     * Returns the date and time for the end of last week in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT end of last week, in the format yyyy-mm-dd hh:mm:ss.
     */
    endOfLastWeek(): string;
    /**
     * Returns the date and time for the end of last year in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT in format yyyy-mm-dd hh:mm:ss.
     */
    endOfLastYear(): string;
    /**
     * Returns the date and time for the end of next month in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    endOfNextMonth(): string;
    /**
     * Returns the date and time for the end of next week in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    endOfNextWeek(): string;
    /**
     * Returns the date and time for the end of next year in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    endOfNextYear(): string;
    /**
     * Returns the date and time for the end of this month in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    endOfThisMonth(): string;
    /**
     * Returns the date and time for the end of this quarter in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    endOfThisQuarter(): string;
    /**
     * Returns the date and time for the end of this week in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    endOfThisWeek(): string;
    /**
     * Returns the date and time for the end of this year in GMT.
     * @memberof GlideSystem
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    endOfThisYear(): string;
    /**
     * Writes an error message to the system log.
     * @memberof GlideSystem
     * @param {string} message - The log message with place holders for any variable arguments.
     * @param {*} [param1] - First variable argument.
     * @param {*} [param2] - Second variable argument.
     * @param {*} [param3] - Third variable argument.
     * @param {*} [param4] - Fourth variable argument.
     * @param {*} [param5] - Fifth variable argument.
     * @description 
     */
    error(message: string, param1?: any, param2?: any, param3?: any, param4?: any, param5?: any): void;
    /**
     * Queues an event for the event manager.
     * @memberof GlideSystem
     * @param {string} name - Name of the event being queued.
     * @param {*} instance - GlideRecord object, such as "current".
     * @param {string} [parm1] - Saved with the instance if specified.
     * @param {string} [parm2] - Saved with the instance if specified.
     * @param {string} [queue] - Name of the queue.
     */
    eventQueue(name: string, instance: any, parm1?: string, parm2?: string, queue?: string): void;
    /**
     * Queues an event for the event manager at a specified date and time.
     * @memberof GlideSystem
     * @param {string} name - Name of the event being queued.
     * @param {*} instance - GlideRecord object, such as "current".
     * @param {string} [parm1] - Saved with the instance if specified.
     * @param {string} [parm2] - Saved with the instance if specified.
     * @param {*} [expiration] - Date and time to process this event..
     */
    eventQueueScheduled(name: string, instance: any, parm1?: string, parm2?: string, expiration?: any): void;
    /**
     * Executes a job for a scoped application.
     * @memberof GlideSystem
     * @param {GlideRecord} job - The job to be run.
     * @returns {string} Returns the sysID of the scheduled job. Returns null if the job is global..
     * @description 
     */
    executeNow(job: GlideRecord): string;
    /**
     * Generates a GUID that can be used when a unique identifier is required.
     * @memberof GlideSystem
     * @returns {string} A 32-character hexadecimal GUID..
     */
    generateGUID(): string;
    /**
     * Gets the caller scope name; returns null if there is no caller.
     * @memberof GlideSystem
     * @returns {string} The caller's scope name, or null if there is no caller..
     */
    getCallerScopeName(): string;
    /**
     * Gets a string representing the cache version for a CSS file.
     * @memberof GlideSystem
     * @returns {string} The CSS cache version..
     */
    getCssCacheVersionString(): string;
    /**
     * Gets the ID of the current application as set using the Application Picker.
     * @memberof GlideSystem
     * @returns {string} The current application's sys_id, or global in none is set..
     */
    getCurrentApplicationId(): string;
    /**
     * Gets the name of the current scope.
     * @memberof GlideSystem
     * @returns {string} The current scope name..
     */
    getCurrentScopeName(): string;
    /**
     * Returns the list of error messages for the session that were added by�addErrorMessage().
     * @memberof GlideSystem
     * @returns {string} List of error messages.
     */
    getErrorMessages(): string;
    /**
     * Retrieves a message from UI messages that has HTML special characters, and replaces them with escape sequences. For example,�&amp;�becomes�&amp;amp;.
     * @memberof GlideSystem
     * @param {string} id - ID of the message.
     * @param {any[]} [args] - List of strings or other values defined by java.text.MessageFormat, which allows you to produce language-neutral messages for display to users.
     * @returns {string} The UI message with HTML special characters replaced with escape sequences..
     */
    getEscapedMessage(id: string, args?: any[]): string;
    /**
     * Retrieves a message from UI messages.
     * @memberof GlideSystem
     * @param {string} id - The ID of the message.
     * @param {any[]} [args] - A list of strings or other values defined by java.text.MessageFormat, which allows you to produce language-neutral messages for display to users.
     * @returns {string} The UI message..
     */
    getMessage(id: string, args?: any[]): string;
    /**
     * Gets the value of a Glide property. If the property is not found, returns an alternate value.
     * @memberof GlideSystem
     * @param {string} key - The key for the property whose value should be returned.
     * @param {*} [alt] -  Alternate object to return if the property is not found.
     * @returns {string} The value of the Glide property, or the alternate object defined above..
     */
    getProperty(key: string, alt?: any): string;
    /**
     * Gets a reference to the current Glide session.
     * @memberof GlideSystem
     * @returns {string} A reference for the current session..
     */
    getSession(): string;
    /**
     * Retrieves the GlideSession session ID.
     * @memberof GlideSystem
     * @returns {string} The session ID..
     */
    getSessionID(): string;
    /**
     * This method is no longer available. Instead, use�gs.getSession().getSessionToken().
     * @memberof GlideSystem
     * @returns {string} The session token..
     */
    getSessionToken(): string;
    /**
     * Returns the name of the time zone associated with the current user.
     * @memberof GlideSystem
     * @returns {string} The time zone name..
     * @description 
     */
    getTimeZoneName(): string;
    /**
     * Gets the current URI for the session.
     * @memberof GlideSystem
     * @returns {string} The URI..
     */
    getUrlOnStack(): string;
    /**
     * Returns a reference to the scoped GlideUser object for the current user.
     * @memberof GlideSystem
     * @returns {GlideUser} Reference to a scoped user object..
     * @description 
     */
    getUser(): GlideUser;
    /**
     * Gets the display name of the current user.
     * @memberof GlideSystem
     * @returns {string} The name field of the current user. Returns Abel Tuter, as opposed to abel.tuter..
     */
    getUserDisplayName(): string;
    /**
     * Gets the sys_id of the current user.
     * @memberof GlideSystem
     * @returns {string} The sys_id of the current user..
     */
    getUserID(): string;
    /**
     * Gets the user name, or user id, of the current user.
     * @memberof GlideSystem
     * @returns {string} The user name of the current user..
     */
    getUserName(): string;
    /**
     * Determines if the current user has the specified role.
     * @memberof GlideSystem
     * @param {*} role - The role to check.
     * @returns {boolean} True if the user had the role. Returns true for users with the administrator role..
     */
    hasRole(role: any): boolean;
    /**
     * Returns the date and time for a specified number of hours ago.
     * @memberof GlideSystem
     * @param {number} hours - Integer number of hours
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    hoursAgo(hours: number): string;
    /**
     * Returns the date and time for the end of the hour a specified number of hours ago.
     * @memberof GlideSystem
     * @param {number} hours - Integer number of hours
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    hoursAgoEnd(hours: number): string;
    /**
     * Returns the date and time for the start of the hour a specified number of hours ago.
     * @memberof GlideSystem
     * @param {number} hours - Integer number of hours
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    hoursAgoStart(hours: number): string;
    /**
     * Provides a safe way to call from the sandbox, allowing only trusted scripts to be included.
     * @memberof GlideSystem
     * @param {string} name - The name fo the script to include.
     * @returns {boolean} True if the include worked..
     */
    include(name: string): boolean;
    /**
     * Writes an info message to the system log.
     * @memberof GlideSystem
     * @param {string} message - The log message with place holders for any variable arguments.
     * @param {*} [param1] - First variable argument.
     * @param {*} [param2] - Second variable argument.
     * @param {*} [param3] - Third variable argument.
     * @param {*} [param4] - Fourth variable argument.
     * @param {*} [param5] - Fifth variable argument.
     */
    info(message: string, param1?: any, param2?: any, param3?: any, param4?: any, param5?: any): void;
    /**
     * Determines if debugging is active for a specific scope.
     * @memberof GlideSystem
     * @returns {boolean} True if either session debugging is active or the log level is set to debug for the specified scope..
     */
    isDebugging(): boolean;
    /**
     * Checks if the current session is interactive. An example of an interactive session is when a user logs in normally. An example of a non-interactive session is using a SOAP request to retrieve data.
     * @memberof GlideSystem
     * @returns {boolean} True if the session is interactive..
     */
    isInteractive(): boolean;
    /**
     * Determines if the current user is currently logged in.
     * @memberof GlideSystem
     * @returns {boolean} True if the current user is logged in..
     */
    isLoggedIn(): boolean;
    /**
     * You can determine if a request comes from a mobile device.
     * @memberof GlideSystem
     * @returns {boolean} True if the request comes from a mobile device; otherwise, false..
     * @description 
     */
    isMobile(): boolean;
    /**
     * Returns the date and time for the end of the minute a specified number of minutes ago.
     * @memberof GlideSystem
     * @param {number} minutes - Integer number of minutes
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    minutesAgoEnd(minutes: number): string;
    /**
     * Returns the date and time for the start of the minute a specified number of minutes ago.
     * @memberof GlideSystem
     * @param {number} minutes - Integer number of minutes
     * @returns {string} GMT in the format yyyy-mm-dd hh:mm:ss.
     */
    minutesAgoStart(minutes: number): string;
    /**
     * Returns the date and time for a specified number of months ago.
     * @memberof GlideSystem
     * @param {number} months - Integer number of months
     * @returns {string} GMT on today's date of the specified month, in the format yyyy-mm-dd hh:mm:ss.
     */
    monthsAgo(months: number): string;
    /**
     * Returns the date and time for the start of the month a specified number of months ago.
     * @memberof GlideSystem
     * @param {number} months - Integer number of months
     * @returns {string} GMT start of the month the specified number of months ago, in the format yyyy-mm-dd hh:mm:ss.
     */
    monthsAgoStart(months: number): string;
    /**
     * Queries an object and returns true if the object is null, undefined, or contains an empty string.
     * @memberof GlideSystem
     * @param {*} o - The object to be checked.
     * @returns {boolean} True if the object is null, undefined, or contains an empty string; otherwise, returns false..
     */
    nil(o: any): boolean;
    /**
     * Returns the date and time for the last day of the quarter for a specified number of quarters ago.
     * @memberof GlideSystem
     * @param {number} quarters - Integer number of quarters
     * @returns {string} GMT end of the quarter that was the specified number of quarters ago, in the format yyyy-mm-dd hh:mm:ss.
     */
    quartersAgoEnd(quarters: number): string;
    /**
     * Returns the date and time for the first day of the quarter for a specified number of quarters ago.
     * @memberof GlideSystem
     * @param {number} quarters - Integer number of quarters
     * @returns {string} GMT end of the month that was the specified number of quarters ago, in the format yyyy-mm-dd hh:mm:ss.
     */
    quartersAgoStart(quarters: number): string;
    /**
     * Sets the specified key to the specified value if the property is within the script's scope.
     * @memberof GlideSystem
     * @param {string} key - The key for the property to be set.
     * @param {string} value - The value of the property to be set.
     * @param {string} description - A description of the property.
     * @description 
     */
    setProperty(key: string, value: string, description: string): void;
    /**
     * Sets the redirect URI for this transaction, which then determines the next page the user will see.
     * @memberof GlideSystem
     * @param {*} o - URI object or URI string to set as the redirect
     */
    setRedirect(o: any): void;
    /**
     * Determines if a database table exists.
     * @memberof GlideSystem
     * @param {string} name - Name of the table to check for existence.
     * @returns {boolean} True if the table exists. False if the table was not found..
     */
    tableExists(name: string): boolean;
    /**
     * Replaces UTF-8 encoded characters with ASCII characters.
     * @memberof GlideSystem
     * @param {string} url - A string with UTF-8 percent (%) encoded characters.
     * @returns {string} A string with encoded characters replaced with ASCII characters..
     */
    urlDecode(url: string): string;
    /**
     * Encodes non-ASCII characters, unsafe ASCII characters, and spaces so the returned string can be used on the Internet. Uses UTF-8 encoding. Uses percent (%) encoding.
     * @memberof GlideSystem
     * @param {string} url - The string to be encoded.
     * @returns {string} A string with non-ASCII characters, unsafe ASCII characters, and spaces encoded..
     */
    urlEncode(url: string): string;
    /**
     * Writes a warning message to the system log.
     * @memberof GlideSystem
     * @param {string} message - The log message with place holders for any variable arguments.
     * @param {*} [param1] - First variable argument.
     * @param {*} [param2] - Second variable argument.
     * @param {*} [param3] - Third variable argument.
     * @param {*} [param4] - Fourth variable argument.
     * @param {*} [param5] - Fifth variable argument.
     */
    warn(message: string, param1?: any, param2?: any, param3?: any, param4?: any, param5?: any): void;
    /**
     * Takes an XML string and returns a JSON object.
     * @memberof GlideSystem
     * @param {string} xmlString - The XML string to be converted.
     * @returns {*} A JSON object representing the XML string. Null if unable to process the XML string..
     */
    xmlToJSON(xmlString: string): any;
    /**
     * Returns a date and time for a certain number of years ago.
     * @memberof GlideSystem
     * @param {number} years - An integer number of years
     * @returns {string} GMT beginning of the year that is the specified number of years ago, in the format yyyy-mm-dd hh:mm:ss..
     */
    yearsAgo(years: number): string;
    /**
     * Returns yesterday's time (24 hours ago).
     * @memberof GlideSystem
     * @returns {string} GMT for 24 hours ago, in the format yyyy-mm-dd hh:mm:ss.
     */
    yesterday(): string;
}

declare class GlideUser {
    /**
     * Returns the current user's company sys_id.
     * @memberof GlideUser
     * @returns {string} Company sys_id.
     * @description 
     */
    getCompanyID(): string;
    /**
     * Returns the current user's display name.
     * @memberof GlideUser
     * @returns {string} User's display name.
     * @description 
     */
    getDisplayName(): string;
    /**
     * Returns the display value of the user's session domain.
     * @memberof GlideUser
     * @returns {string} The display value of the user's session domain..
     * @description 
     */
    getDomainDisplayValue(): string;
    /**
     * Returns the user's email address.
     * @memberof GlideUser
     * @returns {string} User's email address.
     * @description 
     */
    getEmail(): string;
    /**
     * Returns the user's first name.
     * @memberof GlideUser
     * @returns {string} User's first name.
     * @description 
     */
    getFirstName(): string;
    /**
     * Returns the sys_id of the current user.
     * @memberof GlideUser
     * @returns {string} User's sys_id.
     * @description 
     */
    getID(): string;
    /**
     * Returns the user's last name.
     * @memberof GlideUser
     * @returns {string} User's last name.
     * @description 
     */
    getLastName(): string;
    /**
     * Returns an iterator containing the list of all groups to which the user belongs. Only active groups are returned.
     * @memberof GlideUser
     * @returns {Packages.java.util.Iterator<$$rhino.String>} A list of sys_ids for the active groups to which the user belongs..
     * @description 
     */
    getMyGroups(): Packages.java.util.Iterator<$$rhino.String>;
    /**
     * Returns the user ID, or login name, of the current user.
     * @memberof GlideUser
     * @returns {string} User ID or login name..
     * @description 
     */
    getName(): string;
    /**
     * Returns a list of roles that includes explicitly granted roles, inherited roles, and roles acquired by group membership.
     * @memberof GlideUser
     * @returns {Array<*>} List of all roles available to the user.
     * @description 
     */
    getRoles(): any[];
    /**
     * Returns the user object associated with the passed-in user ID (sys_id in sys_user) or user_name.
     * @memberof GlideUser
     * @param {string} id - Unique ID (sys_id) or user_name of the desired user record.
     * @returns {*} User object associated with the specified sys_id or user_name..
     */
    getUserByID(id: string): any;
    /**
     * Returns the list of roles explicitly granted to the user.
     * @memberof GlideUser
     * @returns {Array<*>} List of roles explicitly assigned to the user.
     * @description 
     */
    getUserRoles(): any[];
    /**
     * Determines if the current user has the specified role.
     * @memberof GlideUser
     * @param {string} role - Role to check
     * @returns {boolean} True if the user has the role..
     * @description 
     */
    hasRole(role: string): boolean;
    /**
     * Determines if the current user is a member of the specified group.
     * @memberof GlideUser
     * @param {string} group - Group to check
     * @returns {boolean} True if the user is a member of the group..
     * @description 
     */
    isMemberOf(group: string): boolean;
}

declare var gs: GlideSystem;

declare interface IAbstractAjaxProcessor {
    CALLABLE_PREFIX: 'ajaxFunction_';
    process(): any;
    newItem(name: string): XMLNode;
    getParameter(name: string): $$rhino.String;
    getDocument(): XMLDocument2;
    getRootElement(): XMLNode;
    getName(): $$rhino.String;
    getType(): $$rhino.String;
    getChars(): $$rhino.String;
    setAnswer(value: any): void;
    setError(error: any): void;
    type: "AbstractAjaxProcessor";
}

declare interface AbstractAjaxProcessorConstructor {
    new(value?: any): IAbstractAjaxProcessor;
    (): any;
    (value: any): any;
}

declare namespace global {
    export var AbstractAjaxProcessor: AbstractAjaxProcessorConstructor;
    export var TaskStateUtil: TaskStateUtilConstructor;
    export var  WorkflowApprovalUtils: WorkflowApprovalUtilsConstructor;
}

/**
 * GlideElement values from the GlideRecord that contains values from a record in the Progress Worker table.
 * @interface sys_progress_workerFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_progress_workerFields extends IGlideTableProperties {
    /**
     * Error message
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    error_message: $$rhino.Nilable<$$property.Element>;

    /**
     * Message
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    message: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Output summary
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    output_summary: $$rhino.Nilable<$$property.Element>;

    /**
     * Queued Time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_progress_workerFields
     * @description Internal type is "glide_duration"
     */
    queued_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Run in background
     * @type {$$rhino.Nilable<$$property.generic.Element<("true" | "false")>>}
     * @memberof sys_progress_workerFields
     */
    run_in_background: $$rhino.Nilable<$$property.generic.Element<("true" | "false")>>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Completion code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_progress_workerFields
     */
    state_code: $$rhino.Nilable<$$property.Element>;

    /**
     * Total Execute Time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_progress_workerFields
     * @description Internal type is "glide_duration"
     */
    total_execute_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Total Run Time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sys_progress_workerFields
     * @description Internal type is "glide_duration"
     */
    total_run_time: $$rhino.Nilable<$$property.GlideObject>;
}
declare type sys_progress_workerGlideRecord = GlideRecord & sys_progress_workerFields;

/**
 * GlideElement values from the Attachment table.
 * @interface sys_attachmentFields
 * @extends {IGlideTableProperties}
 */
declare interface sys_attachmentFields extends IGlideTableProperties {
    /**
     * Average image color
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sys_attachmentFields
     * @description Internal type is "color"
     */
    average_image_color: $$rhino.Nilable<IGlideElement>;

    /**
     * Chunk size bytes
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     */
    chunk_size_bytes: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Compressed
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sys_attachmentFields
     */
    compressed: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Content type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     */
    content_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Encryption context
     * @type {$$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>}
     * @memberof sys_attachmentFields
     * @description Refers to sys_encryption_context (Encryption Context)
     */
    encryption_context: $$rhino.Nilable<$$property.generic.Reference<sys_encryption_contextFields, sys_encryption_contextGlideRecord>>;

    /**
     * File name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     */
    file_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Image height
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     */
    image_height: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Image width
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     */
    image_width: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Size bytes
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     * @description Internal type is "longint"
     */
    size_bytes: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Size compressed
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sys_attachmentFields
     * @description Internal type is "longint"
     */
    size_compressed: $$rhino.Nilable<$$property.Numeric>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.generic.Element<("pending" | "available" | "not_available" | "available_conditionally")>>}
     * @memberof sys_attachmentFields
     */
    state: $$rhino.Nilable<$$property.generic.Element<("pending" | "available" | "not_available" | "available_conditionally")>>;

    /**
     * Table name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     */
    table_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Table sys ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sys_attachmentFields
     * @description Internal type is "char"
     */
    table_sys_id: $$rhino.Nilable<$$property.Element>;
}
declare type sys_attachmentGlideRecord = GlideRecord & sys_attachmentFields;

/**
 * GlideElement values from the GlideRecord that contains values from a record in the System Plugin table.
 * @interface v_pluginFields
 * @extends {IGlideTableProperties}
 */
declare interface v_pluginFields extends IGlideTableProperties {
    /**
     * Status
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    active: $$rhino.Nilable<$$property.Element>;

    /**
     * Available version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    available_version: $$rhino.Nilable<$$property.Element>;

    /**
     * Definition
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    definition: $$rhino.Nilable<$$property.Element>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Entitled
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    entitled: $$rhino.Nilable<$$property.Element>;

    /**
     * Has demo data
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    has_demo_data: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Help
     * @type {$$rhino.Nilable<$$property.URL>}
     * @memberof v_pluginFields
     */
    help: $$rhino.Nilable<$$property.URL>;

    /**
     * ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    id: $$rhino.Nilable<$$property.Element>;

    /**
     * Licensable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    licensable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Subscription Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    license_category: $$rhino.Nilable<$$property.Element>;

    /**
     * Subscription Model
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    license_model: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    path: $$rhino.Nilable<$$property.Element>;

    /**
     * Provider
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    provider: $$rhino.Nilable<$$property.Element>;

    /**
     * Requires
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof v_pluginFields
     * @description Internal type is "glide_list"
     */
    requires: $$rhino.Nilable<IGlideElement>;

    /**
     * Scope
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    scope: $$rhino.Nilable<$$property.Element>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Supports Rollback
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    supports_rollback: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Trackable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof v_pluginFields
     */
    trackable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    type: $$rhino.Nilable<$$property.Element>;

    /**
     * Version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof v_pluginFields
     */
    version: $$rhino.Nilable<$$property.Element>;
}
declare type v_pluginGlideRecord = GlideRecord & v_pluginFields;

declare interface wf_contextFields extends IGlideTableProperties {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Activity count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof wf_contextFields
     */
    activity_count: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Activity index
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof wf_contextFields
     */
    activity_index: $$rhino.Nilable<$$property.Numeric>;
    /**
     * Run after bus. rules run
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    after_business_rules: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Auto start
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    auto_start: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Stage rendering
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof wf_contextFields
     */
    column_renderer: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;
    /**
     * Cumulative to ERT
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    cumulated_avg_ert: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    due: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Ended
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    ended: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Available actions
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    ert_long_running_actions: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Available actions
     * @type { $$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    ert_outlier_workflow_actions: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Related record
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof wf_contextFields
     */
    id: $$rhino.Nilable<$$property.Element>;
    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof wf_contextFields
     */
    name: $$rhino.Nilable<$$property.Element>;
    /**
     * Parent Workflow
     * @type {$$rhino.Nilable<wf_contextProperty>}
     * @memberof wf_contextFields
     */
    parent: $$rhino.Nilable<wf_contextProperty>;
    /**
     * Parent activity
     * @type {$$rhino.Nilable<$$property.generic.Reference<wf_executingFields, wf_executingGlideRecord>>}
     * @memberof wf_contextFields
     */
    parent_activity: $$rhino.Nilable<$$property.generic.Reference<wf_executingFields, wf_executingGlideRecord>>;
    /**
     * Requires ERT
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof wf_contextFields
     */
    requires_ert: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Result
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof wf_contextFields
     */
    result: $$rhino.Nilable<$$property.Element>;
    /**
     * Return value
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    return_value: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Running duration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof wf_contextFields
     */
    running_duration: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Schedule
     * @type {$$rhino.Nilable<cmn_scheduleProperty>}
     * @memberof wf_contextFields
     */
    schedule: $$rhino.Nilable<cmn_scheduleProperty>;

    /**
     * Scratchpad
     * @type {}
     * @memberof wf_contextFields
     */
    scratchpad: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Stage
     * @type {}
     * @memberof wf_contextFields
     */
    stage: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Stage states
     * @type {}
     * @memberof wf_contextFields
     */
    stage_state: $$rhino.Nilable<$$property.Element>;

    /**
     * Started
     * @type {}
     * @memberof wf_contextFields
     */
    started: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Started by
     * @type {}
     * @memberof wf_contextFields
     */
    started_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * State
     * @type {}
     * @memberof wf_contextFields
     */
    state: $$rhino.Nilable<$$property.Element>;

    /**
     * Table
     * @type {}
     * @memberof wf_contextFields
     */
    table: $$rhino.Nilable<$$property.Element>;

    /**
     * Timezone
     * @type {}
     * @memberof wf_contextFields
     */
    timezone: $$rhino.Nilable<$$property.Element>;

    /**
     * Available actions
     * @type {}
     * @memberof wf_contextFields
     */
    without_current_wf_actions: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Workflow
     * @type {}
     * @memberof wf_contextFields
     */
    workflow: $$rhino.Nilable<$$property.generic.Reference<wf_workflowFields, wf_workflowGlideRecord>>;

    /**
     * Workflow version
     * @type {}
     * @memberof wf_contextFields
     */
    workflow_version: $$rhino.Nilable<$$property.generic.Reference<wf_workflow_versionFields, wf_workflow_versionGlideRecord>>;
}
declare type wf_contextGlideRecord = GlideRecord & wf_contextFields;
declare type wf_contextElement = $$element.Reference<wf_contextFields, wf_contextGlideRecord>;
declare type wf_contextProperty = $$property.generic.ReferenceProperty<wf_contextFields, wf_contextGlideRecord, wf_contextElement>;

declare interface wf_activityFields extends IGlideTableProperties {
}
declare type wf_activityGlideRecord = GlideRecord & wf_activityFields;

declare interface wf_workflowFields extends IGlideTableProperties {
}
declare type wf_workflowGlideRecord = GlideRecord & wf_workflowFields;

declare interface wf_executingFields extends IGlideTableProperties {
}
declare type wf_executingGlideRecord = GlideRecord & wf_executingFields;

declare interface wf_workflow_versionFields extends IGlideTableProperties {
}
declare type wf_workflow_versionGlideRecord = GlideRecord & wf_workflow_versionFields;