/**
 * @typedef {("delete" | "insert" | "update")} GlideRecordOperationType
 */
/**
 * @typedef {("=" | "!=" | ">" | ">=" | "<" | "<=" | "IN" | "NOT IN" | "STARTSWITH" | "ENDSWITH" | "CONTAINS" | "DOES NOT CONTAIN" | "INSTANCEOF")} QueryOperator
 */

/**
 * TODO: Document GlideChoice
 * @class GlideChoice
 * @implements {Packages.com.glide.script.fencing.ScopedChoice}
 */
/**
 * Gets the choice label.
 * @returns {string} The choie label.
 * @method getLabel
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {string} 
 * @method getValue
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {string} 
 * @method getId
 * @memberof GlideChoice
 */
/**
 * 
 * @param {string} sysId
 * @returns {string} 
 * @method setId
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {string} 
 * @method getImage
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {GlideElementDescriptor} 
 * @method getED
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {boolean} 
 * @method getSelected
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {boolean} 
 * @method getUsed
 * @memberof GlideChoice
 */
/**
 * 
 * @param {string} label
 * @method setLabel
 * @memberof GlideChoice
 */
/**
 * 
 * @param {string} value
 * @method setValue
 * @memberof GlideChoice
 */
/**
 * 
 * @param {string} image
 * @method setImage
 * @memberof GlideChoice
 */
/**
 * 
 * @param {GlideElementDescriptor} ed
 * @method setED
 * @memberof GlideChoice
 */
/**
 * 
 * @param {boolean} label
 * @method setSelected
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {string} 
 * @method getRefFileName
 * @memberof GlideChoice
 */
/**
 * 
 * @param {string} sysId
 * @method setRefFileName
 * @memberof GlideChoice
 */
/**
 * 
 * @param {boolean} used
 * @method setUsed
 * @memberof GlideChoice
 */
/**
 * 
 * @param {string} name
 * @param {*} value
 * @method setParameter
 * @memberof GlideChoice
 */
/**
 * 
 * @param {string} name
 * @returns {*} 
 * @method 
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {*} Packages.java.util.HashMap object
 * @method getParameters
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {boolean} 
 * @method isReference
 * @memberof GlideChoice
 */
/**
 * 
 * @returns {boolean} 
 * @method isMissing
 * @memberof GlideChoice
 */
/**
 * 
 * @param {boolean} label
 * @method setMissing
 * @memberof GlideChoice
 */
/**
 * 
 * @param {string} parentId
 * @method setParent
 * @memberof GlideChoice
 */

/**
 * TODO: Document GlideElementDescriptor
 * @class GlideElementDescriptor
 */
/**
 * Returns the encryption type used for attachments on the element's table.
 * @returns {*} The encryption type used on attachments. Returns null if attachments on the element's table are not being encrypted.
 * @method getAttachmentEncryptionType
 * @memberof GlideElementDescriptor
 */
/**
 * Returns the element's encryption type.
 * @returns {*} The element's encryption type. Returns null if the element is not encrypted.
 * @method getEncryptionType
 * @memberof GlideElementDescriptor
 */
/**
 * Returns the element's internal data type.
 * @returns {*} The element's internal data type.
 * @method getInternalType
 * @memberof GlideElementDescriptor
 */
/**
 * Returns the element's label.
 * @returns {*} The element's label.
 * @method getLabel
 * @memberof GlideElementDescriptor
 */
/**
 * Returns the element's length.
 * @returns {*} The element's size.
 * @method getLength
 * @memberof GlideElementDescriptor
 */
/**
 * Returns the element's plural label.
 * @returns {string} The element's plural label.
 * @method getPlural
 * @memberof GlideElementDescriptor
 */
/**
 * Returns true if an encrypted attachment has been added to the table.
 * @returns {*} Returns true if an encrypted attachment has been added to the table.
 * @method hasAttachmentsEncrypted
 * @memberof GlideElementDescriptor
 */
/**
 * Returns true if the element is an automatically generated or system field.
 * @returns {*} True if the element is automatically generated or a system field.
 * @method isAutoOrSysID
 * @memberof GlideElementDescriptor
 */
/**
 * Returns true if the element is defined as a dropdown choice in its dictionary definition.
 * @returns {*} Returns true if the element is defined as a dropdown choice. Returns true even if there are no entries defined in the choice table. The last choice type, suggestion, does not return true.
 * @method isChoiceTable
 * @memberof GlideElementDescriptor
 */
/**
 * Returns true if an element is encrypted.
 * @returns {*} Returns true if the element is encrypted, false otherwise.
 * @method isEdgeEncrypted
 * @memberof GlideElementDescriptor
 */
/**
 * Returns true if the element is a virtual element.
 * @returns {*} Returns true if the element is a virtual element.
 * @method isVirtual
 * @memberof GlideElementDescriptor
 */

/**
 * The scoped GlideQueryCondition API provides additional AND or OR conditions that can be added to the current condition, allowing you to build complex queries.
 * @class GlideQueryCondition
 */
/**
 * Adds an AND condition to the current condition.
 * @param {string} name The name of a field.
 * @param {QueryOperator} oper The operator for the query (=,!=,>,>=,<,<=,IN,NOT IN,STARTSWITH,ENDSWITH,CONTAINS,DOES NOT CONTAIN,INSTANCEOF).
 * @param {*} value The value to query on.
 * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
 * @method addCondition
 * @memberof GlideQueryCondition
 */
/**
 * Adds an AND condition to the current condition. Assumes the equals operator.
 * @param {string} name The name of a field.
 * @param {*} value The value of a field.
 * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
 * @method addCondition
 * @memberof GlideQueryCondition
 */
/**
 * Adds an AND condition to the current condition.
 * @param {GlideQueryCondition} queryCondition Condition to add.
 * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
 * @method addCondition
 * @memberof GlideQueryCondition
 */
/**
 * Adds an OR condition to the current condition.
 * @param {string} name The name of a field.
 * @param {QueryOperator} oper The operator for the query (=,!=,>,>=,<,<=,IN,NOT IN,STARTSWITH,ENDSWITH,CONTAINS,DOES NOT CONTAIN,INSTANCEOF).
 * @param {*} value The value to query on.
 * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
 * @method addOrCondition
 * @memberof GlideQueryCondition
 */
/**
 * Adds an OR condition to the current condition. Assumes the equals operator.
 * @param {string} name The name of a field.
 * @param {*} value The value to query on.
 * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
 * @method addOrCondition
 * @memberof GlideQueryCondition
 */
/**
 * Adds an OR condition to the current condition. Assumes the equals operator.
 * @param {GlideQueryCondition} queryCondition Condition to add.
 * @returns {GlideQueryCondition} A reference to a GlideQueryConditon that was added to the GlideRecord.
 * @method addOrCondition
 * @memberof GlideQueryCondition
 */

/**
 * Build functions to perform SQL operations in the database.
 * The GlideDBFunctionBuilder methods provide a way to build Relational Database Management System (RDBMS) functions to perform SQL operations on record data.
 * These methods can be used in both scoped and global server scripts.
 * @class GlideDBFunctionBuilder
 */
/**
 * Adds the values of two or more integer fields.
 * Use the field method to define fields on which the operation is performed.
 * @method add
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Builds the database function defined by the GlideDBFunctionBuilder object.
 * @method build
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Concatenates the values of two or more fields.
 * Use the field method to define fields on which the operation is performed.
 * @method concat
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Defines a constant value to use in the function.
 * If used with the dayofweek method, the string defines whether to use Sunday or Monday as the first day of the week.
 * @param * constant
 * @method constant
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Determines the duration using a given start date/time and end date/time.
 * Use the field method to define start and end date/time fields.
 * @method datediff
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Returns an integer representing the day of the week for a given date.
 * Use the field method to define the given date/time. Use the constant method to define whether the week starts on a Sunday or Monday.
 * This method can be used with MySQL, Oracle, and Microsoft SQL Server databases only.
 * If using an Oracle database, the NLS_TERRITORY setting must be set to a territory with Sunday as the first day of the week.
 * @return {$$rhino.Number}
 * @method dayofweek
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Divides the value of one integer field by another.
 * Use the field method to define fields on which the operation is performed.
 * @method divide
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Defines a field on which a SQL operation is performed.
 * @param * field
 * @method field
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Determines the number of code units in a field.
 * Use the field method to define fields on which the operation is performed.
 * @method length
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Multiplies the values of two integer fields.
 * Use the field method to define fields on which the operation is performed.
 * @method multiply
 * @memberof GlideDBFunctionBuilder
 */
/**
 * Subtracts the value of one integer field from another.
 * Use the field method to define fields on which the operation is performed.
 * @method subtract
 * @memberof GlideDBFunctionBuilder
 */

/**
 * TODO: Document GlideElement
 * @class GlideElement
 */
/**
 * Flag that indicates whether the current user has permissions to create new entries in the associated field.
 * @returns {boolean} True if the can create new entries; otherwise, false.
 * @method canCreate
 * @memberof GlideElement
 */
/**
 * Indicates whether the user's role permits them to read the associated GlideRecord.
 * @returns {boolean} True if the field can be read; otherwise, false.
 * @method canRead
 * @memberof GlideElement
 */
/**
 * Determines whether the user's role permits them to write to the associated GlideRecord.
 * @returns {boolean} True if the user can write to the field; otherwise, false.
 * @method canWrite
 * @memberof GlideElement
 */
/**
 * Determines if the current field has been modified. This functionality is available for all available data types, except Journal fields.
 * @returns {boolean} True if the fields have been changed, false if the field has not.
 * @todo Double-check with ServiceNow docs to see if this is supposed to exist in scoped apps.
 * @method changes
 * @memberof GlideElement
 */
/**
 * Determines if the previous value of the current field matches the specified object.
 * @param {*} o - An object value to check against the previous value of the current field.
 * @returns {boolean} True if the previous value matches, false if it does not.
 * @method changesFrom
 * @memberof GlideElement
 */
/**
 * Determines if the new value of a field, after a change, matches the specified object.
 * @param {*} o - An object value to check against the new value of the current field.
 * @returns {boolean} True if the previous value matches, false if it does not.
 * @method changesTo
 * @memberof GlideElement
 */
/**
 * Returns the value of the specified attribute from the dictionary.
 * If the attribute is a boolean attribute, use getBooleanAttribute to get the value as a boolean rather than as a string.
 * @param {string} attributeName - Attribute name.
 * @returns {string} The attribute value.
 * @method getAttribute
 * @memberof GlideElement
 */
/**
 * Returns the Boolean value of the specified attribute from the dictionary.
 * @param {string} attributeName - Attribute name
 * @returns {boolean} Boolean value of the attribute. Returns false if the attribute does not exist.
 * @method getBooleanAttribute
 * @memberof GlideElement
 */
/**
 * Generates a choice list for a field.
 * @param {string} [dependent] - A dependent value
 * @returns {GlideChoice[]} An array list of choices.
 * @method getChoices
 * @memberof GlideElement
 */
/**
 * Returns the choice label for the current choice.
 * @returns {string} The selected choice's label.
 * @method getChoiceValue
 * @memberof GlideElement
 */
/**
 * Returns the clear text value for Password (2 way encrypted) fields in scoped applications.
 * @returns {string} The clear text password.
 * @method getDecryptedValue
 * @memberof GlideElement
 */
/**
 * Gets the formatted display value of the field.
 * @param {number} [maxCharacters] - Maximum characters desired
 * @returns {string} The display value of the field.
 * @method getDisplayValue
 * @memberof GlideElement
 */
/**
 * Returns the element's descriptor.
 * @returns {GlideElementDescriptor} Element's descriptor.
 * @method getED
 * @memberof GlideElement
 */
/**
 * Returns the phone number in international format.
 * @returns {string} The phone number in international format.
 * @method getGlobalDisplayValue
 * @memberof GlideElement
 */
/**
 * Returns the HTML value of a field.
 * @param {number} [maxChars] - Maximum number of characters to return.
 * @returns {string} HTML value for the field.
 * @method getHTMLValue
 * @memberof GlideElement
 */
/**
 * Determines if a field is null.
 * @returns {boolean} True if the field is null or an empty string, false if not.
 * @method getLabel
 * @memberof GlideElement
 */
/**
 * Returns the name of the field.
 * @returns {string} Field name.
 * @method getName
 * @memberof GlideElement
 */
/**
 * Returns a GlideRecord object for a given reference element.
 * @returns {GlideRecord}
 * @returns {GlideRecord} A GlideRecord object.
 * @method getRefRecord
 * @memberof GlideElement
 */
/**
 * Returns the name of the field.
 * @returns {string} Field name.
 * @method getTableName
 * @memberof GlideElement
 */
/**
 * Determines if a field is null.
 * @returns {boolean}
 * @method nil
 * @memberof GlideElement
 */
/**
 * Sets the display value of the field.
 * @param {*} value - The value to set for the field.
 * @todo Double-check with ServiceNow docs to see if this is supposed to exist in scoped apps.
 * @method setDisplayValue
 * @memberof GlideElement
 */
/**
 * Adds an error message. Available in Fuji patch 3.
 * @param {string} errorMessage - The error message.
 * @method setError
 * @memberof GlideElement
 */
/**
 * Sets the field to the specified phone number.
 * @param {*} phoneNumber - The phone number to set. This can be in either the international or local format.
 * @param {boolean} strict - When true, specifies that the number specified must match the correct format. When false, the system attempts to correct an improperly formatted phone number.
 * @returns {boolean} True if the value was set.
 * @method setPhoneNumber
 * @memberof GlideElement
 */
/**
 * Sets the value of a field.
 * @param {*} value - Object value to set the field to.
 * @method setValue
 * @memberof GlideElement
 */

/**
 * TODO: Document GlideRecord
 * @class GlideRecord
 */
/**
 * Creates an instance of the GlideRecord class for the specified table.
 * @constructor
 * @param {string} tableName - The table to be used.
 * @memberof GlideRecord
 */
/**
 * Adds a filter to return active records.
 * @returns {GlideQueryCondition} Filter to return active records.
 * @method addActiveQuery
 * @memberof GlideRecord
 */
/**
 * Adds an encoded query to other queries that may have been set.
 * @param {string} query - An encoded query string.
 * @method addEncodedQuery
 * @memberof GlideRecord
 */
/**
 * Applies a pre-defined GlideDBFunctionBuilder object to a record.
 * @param {GlideDBFunctionBuilder} f - GlideDBFunctionBuilder object that defines a SQL operation.
 * @method addFunction
 * @memberof GlideRecord
 */
/**
 * Adds a filter to return records based on a relationship in a table related to the current GlideRecord.
 * @param {string} joinTable - Name of table to use in the join, such as 'incident'.
 * @param {string} [primaryField] - Name of the field in the GlideRecord to use to join the field specified in the joinTableField parameter. Defaults to sys_id.
 * @param {string} [joinTableField] - Name of the field in the table specified in joinTable to use to join the tables. Defaults to first field in the table specified in joinTable that is a reference field to the current GlideRecord table.
 * @returns {GlideQueryCondition} Filter that lists records where the relationships match.
 * @method addJoinQuery
 * @memberof GlideRecord
 */
/**
 * A filter that specifies records where the value of the field passed in the parameter is not null.
 * @param {string} fieldName - The name of the field to be checked.
 * @returns {GlideQueryCondition} A filter that specifies records where the value of the field passed in the parameter is not null.
 * @method addNotNullQuery
 * @memberof GlideRecord
 */
/**
 * Adds a filter to return records where the value of the specified field is null.
 * @param {string} fieldName - The name of the field to be checked.
 * @returns {GlideQueryCondition} The query condition added to the GlideRecord.
 * @method addNullQuery
 * @memberof GlideRecord
 */
/**
 * Build a search query and return the rows that match the request.
 * @param {string} name - Name of the table field to query, or one of the following reserved names: 123TEXTQUERY321; 123TEXTINDEXGROUP321.
 * @param {*} value - Value on which to query (not case-sensitive).
 * @returns {GlideQueryCondition} Query condition added to the GlideRecord.
 * @method addQuery
 * @memberof GlideRecord
 */
/**
 * Provides the ability to build a request, which when executed, returns the rows from the specified table, that match the request.
 * @param {string} name - Table field name.
 * @param {QueryOperator} operator - Query operator
 * @param {*} value - Value on which to query (not case-sensitive).
 * @returns {GlideQueryCondition} The query condition that was added to the GlideRecord.
 * @method addQuery
 * @memberof GlideRecord
 */
/**
 * Adds a filter to return records using an encoded query string.
 * @param {string} query - An encoded query string.
 * @returns {GlideQueryCondition} The query condition added to the GlideRecord.
 * @method addQuery
 * @memberof GlideRecord
 */
/**
 * Provides atomic add and subtract operations on a specified number field at the database level for the current GlideRecord object.
 * @param {string} field - The name of the field in this GlideRecord to modify.
 * @param {number} value - The amount to add to the value when the record is saved. To perform a subtraction operation, simply pass a negative value.
 * @method addValue
 * @memberof GlideRecord
 */
/**
 * Sets the values of the specified encoded query terms and applies them to the current GlideRecord.
 * @param {string} queryString - Encoded query to apply to the current GlideRecord.
 * @method applyEncodedQuery
 * @memberof GlideRecord
 */
/**
 * Determines if the Access Control Rules, which include the user's roles, permit inserting new records in this table.
 * @returns {boolean} Flag that indicates whether the user's roles permit creating of records in this table.
 * @method canCreate
 * @memberof GlideRecord
 */
/**
 * Determines if the Access Control Rules, which include the user's roles, permit deleting records in this table.
 * @returns {boolean} Flag that indicates whether the user's roles permit deleting of records in this table.
 * @method canDelete
 * @memberof GlideRecord
 */
/**
 * Determines if the Access Control Rules (ACLs) permit reading records in this table. This method evaluates all ACL types, such as user roles, scripted ACLs, ACLs with scripted conditions, and so on.
 * @returns {boolean} Flag that indicates whether the user's roles permit reading of records in this table.
 * @method canRead
 * @memberof GlideRecord
 */
/**
 * Determines if the Access Control Rules, which include the user's roles, permit editing records in this table.
 * @returns {boolean} Flag that indicates whether the user's roles permit writing of records in this table.
 * @method canWrite
 * @memberof GlideRecord
 */
/**
 * Sets a range of rows to be returned by subsequent queries.
 * @param {number} firstRow - First row to include. Because the index starts at 0, a value of 0 returns the first row.
 * @param {number} lastRow - 0-based row number of the first row NOT to return. Behaves similar to Java's String.substring(a,b) method.
 * @param {boolean} [forceCount] - Flag that indicates whether to force a row count query.
 * @method chooseWindow
 * @memberof GlideRecord
 */
/**
 * Deletes multiple records that satisfy the query condition.
 * @method deleteMultiple
 * @memberof GlideRecord
 */
/**
 * Deletes the current record.
 * @returns {boolean} Flag that indicates whether the record was successfully deleted.
 * @method deleteRecord
 * @memberof GlideRecord
 */
/**
 * Returns the specified record in the current GlideRecord object.
 * @param {string} name - Name of the instantiated GlideRecord column to search for the specified value parameter.
 * @param {*} value - Value to match.
 * @returns {boolean} Flag that indicates whether the requested record was located.
 * @method get
 * @memberof GlideRecord
 */
/**
 * Returns the specified record in the current GlideRecord object.
 * @param {*} value - The sys_id or display value to match.
 * @returns {boolean} Flag that indicates whether the requested record was located.
 * @method get
 * @memberof GlideRecord
 */
/**
 * Returns the dictionary attributes for the specified field.
 * @param {string} fieldName - Field name for which to return the dictionary attributes.
 * @returns {string} Dictionary attributes
 * @method getAttribute
 * @memberof GlideRecord
 */
/**
 * Returns the current table's label.
 * @returns {string} Label that identifies the table.
 * @method getClassDisplayValue
 * @memberof GlideRecord
 */
/**
 * Retrieves the display value for the field of the current record.
 * @param {string} fieldName - Field name for which to return the display value.
 * @returns {string} Display value for the specified field.
 * @method getDisplayValue
 * @memberof GlideRecord
 */
/**
 * Retrieves the display value for the current record.
 * @returns {string} Display value for the current record.
 * @method getDisplayValue
 * @memberof GlideRecord
 */
/**
 * Returns the element's descriptor.
 * @returns {GlideElementDescriptor} The element's descriptor.
 * @method getED
 * @memberof GlideRecord
 */
/**
 * Retrieves the GlideElement object for the specified field.
 * @param {string} fieldName - Column name for which to return the GlideElement object.
 * @returns {GlideElement} The GlideElement for the specified column of the current record.
 * @method getElement
 * @memberof GlideRecord
 */
/**
 * Returns an array of GlideElement objects.
 * @returns {GlideElement[]} Array of GlideElement objects. Each object describes a field in the current GlideRecord.
 * @method getElements
 * @memberof GlideRecord
 */
/**
 * Retrieves the query condition of the current result set as an encoded query string.
 * @returns {string} An encoded query string.
 * @method getEncodedQuery
 * @memberof GlideRecord
 */
/**
 * Returns the field's label.
 * @returns {string} The field's label.
 * @method getLabel
 * @memberof GlideRecord
 */
/**
 * Retrieves the last error message. If there is no last error message, null is returned.
 * @returns {(string | null)}
 * @method getLastErrorMessage
 * @memberof GlideRecord
 */
/**
 * Retrieves the link to the current record.
 * @param {boolean} noStack - Flag indicating whether to append the sysparm_stack parameter to the returned link.
 * @returns {string} Link to the current record.
 * @method getLink
 * @memberof GlideRecord
 */
/**
 * Retrieves the class name for the current record.
 * @returns {string} Retrieves the class name for the current record.
 * @method getRecordClassName
 * @memberof GlideRecord
 */
/**
 * Retrieves the number of rows in the query result.
 * @returns {number} Number of rows.
 * @method getRowCount
 * @memberof GlideRecord
 */
/**
 * Retrieves the name of the table associated with the GlideRecord.
 * @returns {string} The table name.
 * @method getTableName
 * @memberof GlideRecord
 */
/**
 * Gets the primary key of the record, which is usually the sys_id unless otherwise specified.
 * @returns {(string | null)} The unique primary key as a String, or null if the key is null.
 * @method getUniqueValue
 * @memberof GlideRecord
 */
/**
 * Retrieves the string value of an underlying element in a field.
 * @param {string} name - The name of the field to get the value from.
 * @returns {(string | null)} The string value of the underlying element. Returns null if the field is empty or the field does not exist. Boolean values return as "0" and "1" string values instead of false and true.
 * @method getValue
 * @memberof GlideRecord
 */
/**
 * Determines if there are any more records in the GlideRecord object.
 * @returns {boolean} True if there are more records in the query result set.
 * @method hasNext
 * @memberof GlideRecord
 */
/**
 * Creates an empty record suitable for population before an insert.
 * @method initialize
 * @memberof GlideRecord
 */
/**
 * Inserts a new record using the field values that have been set for the current record.
 * @returns {(string | null)} Sys_id of the inserted record, or null if the record is not inserted
 * @method insert
 * @memberof GlideRecord
 */
/**
 * Checks to see if the current database action is to be aborted.
 * @returns {boolean} Flag that indicates if the current database action is to be aborted.
 * @method isActionAborted
 * @memberof GlideRecord
 */
/**
 * Verifies whether the specified encoded query is valid.
 * @param {string} query - Encoded query to validate.
 * @returns {boolean} Flag that indicates whether the specified encoded query is valid.
 * @method isEncodedQueryValid
 * @memberof GlideRecord
 */
/**
 * Checks if the current record is a new record that has not yet been inserted into the database.
 * @returns {boolean} True if the record is new and has not been inserted into the database.
 * @method isNewRecord
 * @memberof GlideRecord
 */
/**
 * Determines if the current table is valid or if the record was successfully retrieved.
 * @returns {boolean} Flag that indicates if the table is valid or if the record was successfully retrieved.
 * @method isValid
 * @memberof GlideRecord
 */
/**
 * Verifies whether the specified encoded query is valid.
 * @param {string} query - Encoded query to validate.
 * @returns {boolean} Flag that indicates whether the specified encoded query is valid.
 * @method isValidEncodedQuery
 * @memberof GlideRecord
 */
/**
 * Determines if the specified field is defined in the current table.
 * @param {string} columnName - The name of the field.
 * @returns {boolean} True if the field is defined for the current table.
 * @method isValidField
 * @memberof GlideRecord
 */
/**
 * Determines if a record was actually returned by the query/get record operation.
 * @returns {boolean} Flag that indicates whether a record was actually returned by the query/get operation.
 * @method isValidRecord
 * @memberof GlideRecord
 */
/**
 * Verifies whether the record was created in a view or a table.
 * @returns {boolean} Flag that indicates whether the record was created in table that is a view.
 * @method isView
 * @memberof GlideRecord
 */
/**
 * Creates a new GlideRecord record, sets the default values for the fields, and assigns a unique ID to the record.
 * @method newRecord
 * @memberof GlideRecord
 */
/**
 * Moves to the next record in the GlideRecord object.
 * @returns {boolean} Flag that indicates if there is a "next" record in the GlideRecord.
 * @method next
 * @memberof GlideRecord
 */
/**
 * Moves to the next record in the GlideRecord object.
 * @returns {boolean} Flag that indicates if there is a "next" record in the GlideRecord.
 * @method _next
 * @memberof GlideRecord
 */
/**
 * Determines if an operation is insert, update, or delete.
 * @returns {GlideRecordOperationType} The current operation.
 * @method operation
 * @memberof GlideRecord
 */
/**
 * Specifies an orderBy column. Call this method more than once to order by multiple columns.
 * @param {string} name - Column name to use to order the records in this GlideRecord object.
 * @method orderBy
 * @memberof GlideRecord
 */
/**
 * Specifies a descending orderBy column. Call this method more than once to order by multiple columns.
 * @param {string} name - Column name to use to order the records in a GlideRecord object.
 * @method orderByDesc
 * @memberof GlideRecord
 */
/**
 * Runs a query against the table based on the filters specified by query methods such as addQuery() and addEncodedQuery().
 * @param {string} field - 
 * @param {string} value -
 * @method query
 * @memberof GlideRecord
 */
/**
 * Runs a query against the table based on the filters specified by query methods such as addQuery() and addEncodedQuery().
 * @method query
 * @memberof GlideRecord
 */
/**
 * Runs a query against the table based on the filters specified by query methods such as addQuery() and addEncodedQuery().
 * @param {string} field - Name of the field to search for the value specified in the value parameter.
 * @param {string} value - Value to search for in the specified field parameter.
 * @method _query
 * @memberof GlideRecord
 */
/**
 * Runs a query against the table based on the filters specified by query methods such as addQuery() and addEncodedQuery().
 * @method _query
 * @memberof GlideRecord
 */
/**
 * Sets a flag to indicate if the next database action (insert, update, delete) is to be aborted. This is often used in business rules.
 * @param {boolean} b - True to abort the next action. False if the action is to be allowed.
 * @method setAbortAction
 * @memberof GlideRecord
 */
/**
 * Sets the limit for number of records are fetched by the GlideRecord query.
 * @param {number} maxNumRecords - The maximum number of records to fetch.
 * @method setLimit
 * @memberof GlideRecord
 */
/**
 * Sets the sys_id value for the current record.
 * @param {string} guid - GUID to assign to the current record.
 * @method setNewGuidValue
 * @memberof GlideRecord
 */
/**
 * Sets the value of the field with the specified name to the specified value.
 * @param {string} name - Name of the field.
 * @param {*} value - Value to assign to the field.
 * @method setValue
 * @memberof GlideRecord
 */
/**
 * Enables or disables the running of business rules, script engines, and audit.
 * @param {boolean} enable - Enables or disables the running of business rules, script engines, and audit.
 * @method setWorkflow
 * @memberof GlideRecord
 */
/**
 * Updates the GlideRecord with any changes that have been made. If the record does not already exist, it is inserted.
 * @param {string} [reason] - Reason for the update. The reason appears in the audit record.
 * @returns {(string | null)} Sys_id of the new or updated record. Returns null if the update fails.
 * @method update
 * @memberof GlideRecord
 */
/**
 * Updates each GlideRecord in a stated query with a specified set of changes.
 * @method updateMultiple
 * @memberof GlideRecord
 */
/**
 * TODO: Document GlideRecordSecure
 * @class GlideRecordSecure
 * @extends GlideRecord
 */
/**
 * Creates an instance of the GlideRecordSecure class for the specified table.
 * @constructor
 * @param {string} tableName - The table to be used.
 * @memberof GlideRecordSecure
 */
