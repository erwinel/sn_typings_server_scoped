/// <reference path="../index.d.ts" />

/**
 * GlideElement values from the Security Classification table.
 * @interface Ix_44813_sec_clsif_definitionFields
 * @extends {Isys_metadataFields}
 */
declare interface x_44813_sec_clsif_definitionFields extends sys_metadataFields {
	/**
	 * Active
	 * @type {$$property.Boolean}
	 * @memberof x_44813_sec_clsif_definitionFields
	 */
	active: $$property.Boolean;
	/**
	 * Name
	 * @type {$$property.Element}
	 * @memberof x_44813_sec_clsif_definitionFields
	 */
	name: $$property.Element;
	/**
	 * Order
	 * @type {$$rhino.Nilable<$$property.Numeric>}
	 * @memberof x_44813_sec_clsif_definitionFields
	 * @description Internal type is integer
	 */
	order: $$rhino.Nilable<$$property.Numeric>;
	/**
	 * Portion Marking
	 * @type {$$property.Element}
	 * @memberof x_44813_sec_clsif_definitionFields
	 */
	portion_marking: $$property.Element;
}
declare type x_44813_sec_clsif_definitionGlideRecord = sys_metadataGlideRecord & x_44813_sec_clsif_definitionFields;