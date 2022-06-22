/// <reference path="$$rhino.d.ts" />
/// <reference path="glide.d.ts" />
/// <reference path="core.d.ts" />
/// <reference path="task.d.ts" />
/// <reference path="incident.d.ts" />
/// <reference path="serviceCatalog.d.ts" />

/**
 *
 * @description 1="Success"; 2="Fail"
 */
declare type ChangeReviewStatusValue = 1 | 2;
declare type ChangeReviewStatusString = "1" | "2";
declare type ChangeReviewStatus = ChangeReviewStatusValue | ChangeReviewStatusString;
 
/**
 *
 * @description 2="High"; 3="Moderate"; 4="Low"
 */
declare type ChangeRiskValue = 2 | 3 | 4;
declare type ChangeRiskString = "2" | "3" | "4";
declare type ChangeRisk = ChangeRiskValue | ChangeRiskString;
 
/**
 *
 * @description 1="Massive"; 2="Large"; 3="Medium"; 4="Small"; 5="Tiny"
 */
declare type ChangeScopeValue = 1 | 2 | 3 | 4 | 5;
declare type ChangeScopeString = "1" | "2" | "3" | "4" | "5";
declare type ChangeScope = ChangeScopeValue | ChangeScopeString;
 
/**
 *
 */
declare type ChangeType = "standard" | "normal" | "emergency";
 
/**
 *
 * @type {("successful" | "successful_issues" | "unsuccessful")}
 * @description "successful"="Successful"; "successful_issues"="Successful with issues"; "unsuccessful"="Unsuccessful"
 */
declare type ChangeCloseCode = "successful" | "successful_issues" | "unsuccessful";
 
/**
 * GlideElement values from the Change Request table.
 * @interface change_requestFields
 * @extends {taskFields}
 */
declare interface change_requestFields extends taskFields {
    /**
     * Backout plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    backout_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * CAB date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     * @description Internal type is "glide_date"
     */
    cab_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * CAB delegate
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof change_requestFields
     * @description Refers to sys_user (User)
     */
    cab_delegate: $$rhino.Nilable<sys_userProperty>;

    /**
     * CAB recommendation
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    cab_recommendation: $$rhino.Nilable<$$property.Element>;

    /**
     * CAB required
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    cab_required: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    category: $$rhino.Nilable<$$property.Element>;

    /**
     * Change plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    change_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * CI class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     * @description Internal type is "table_name"
     */
    ci_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Close code
     * @type {$$rhino.Nilable<$$property.generic.Element<IncidentCloseCode>>}
     * @memberof change_requestFields
     */
    close_code: $$rhino.Nilable<$$property.generic.Element<IncidentCloseCode>>;

    /**
     * Conflict last run
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    conflict_last_run: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Conflict status
     * @type {$$rhino.Nilable<$$property.generic.Element<("Not Run" | "Conflict" | "No Conflict")>>}
     * @memberof change_requestFields
     */
    conflict_status: $$rhino.Nilable<$$property.generic.Element<("Not Run" | "Conflict" | "No Conflict")>>;

    /**
     * Planned end date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    end_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Implementation plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    implementation_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * Justification
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    justification: $$rhino.Nilable<$$property.Element>;

    /**
     * On hold
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    on_hold: $$rhino.Nilable<$$property.Boolean>;

    /**
     * On hold reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    on_hold_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * On Hold Change Tasks
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof change_requestFields
     * @description Internal type is "glide_list"
     */
    on_hold_task: $$rhino.Nilable<IGlideElement>;

    /**
     * Outside maintenance schedule
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    outside_maintenance_schedule: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Phase
     * @type {$$rhino.Nilable<$$property.generic.Element<("requested" | "plan" | "build" | "accept")>>}
     * @memberof change_requestFields
     */
    phase: $$rhino.Nilable<$$property.generic.Element<("requested" | "plan" | "build" | "accept")>>;

    /**
     * Phase state
     * @type {$$rhino.Nilable<$$property.generic.Element<("open" | "work in progress" | "approved" | "rejected" | "testing" | "implementation" | "on hold" | "complete")>>}
     * @memberof change_requestFields
     */
    phase_state: $$rhino.Nilable<$$property.generic.Element<("open" | "work in progress" | "approved" | "rejected" | "testing" | "implementation" | "on hold" | "complete")>>;

    /**
     * Production system
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_requestFields
     */
    production_system: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Proposed change
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof change_requestFields
     * @description Internal type is "template_value"
     */
    proposed_change: $$rhino.Nilable<IGlideElement>;

    /**
     * Reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Requested by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof change_requestFields
     * @description Refers to sys_user (User)
     */
    requested_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Requested by date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    requested_by_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Review comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    review_comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Review date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     * @description Internal type is "glide_date"
     */
    review_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Review status
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    review_status: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Risk
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    risk: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Risk and impact analysis
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    risk_impact_analysis: $$rhino.Nilable<$$property.Element>;

    /**
     * Risk value
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    risk_value: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Scope
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof change_requestFields
     */
    scope: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Planned start date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_requestFields
     */
    start_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Standard Change Template version
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof change_requestFields
     * @description Refers to std_change_producer_version (Standard Change Template Version)
     */
    std_change_producer_version: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Test plan
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    test_plan: $$rhino.Nilable<$$property.Element>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_requestFields
     */
    type: $$rhino.Nilable<$$property.Element>;
}
declare type change_requestGlideRecord = taskGlideRecord & change_requestFields;
declare type change_requestElement = $$element.Reference<change_requestFields, change_requestGlideRecord>;
declare type change_requestProperty = $$property.generic.ReferenceProperty<change_requestFields, change_requestGlideRecord, change_requestElement>;

/**
 * GlideElement values from the Change Task table.
 * @interface change_taskFields
 * @extends {taskFields}
 */
declare interface change_taskFields extends taskFields {
    /**
     * Change request
     * @type {$$rhino.Nilable<change_requestProperty>}
     * @memberof change_taskFields
     * @description Refers to change_request (Change Request)
     */
    change_request: $$rhino.Nilable<change_requestProperty>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("planning" | "implementation" | "testing" | "review")>>}
     * @memberof change_taskFields
     */
    change_task_type: $$rhino.Nilable<$$property.generic.Element<("planning" | "implementation" | "testing" | "review")>>;

    /**
     * Close code
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_taskFields
     */
    close_code: $$rhino.Nilable<$$property.Element>;

    /**
     * Created from
     * @type {$$rhino.Nilable<$$property.generic.Element<("workflow" | "manual")>>}
     * @memberof change_taskFields
     * @description "workflow"=""; "manual"=""
     */
    created_from: $$rhino.Nilable<$$property.generic.Element<("workflow" | "manual")>>;

    /**
     * On hold
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof change_taskFields
     */
    on_hold: $$rhino.Nilable<$$property.Boolean>;

    /**
     * On hold reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof change_taskFields
     */
    on_hold_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Planned end date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_taskFields
     */
    planned_end_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Planned start date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof change_taskFields
     */
    planned_start_date: $$rhino.Nilable<$$property.GlideObject>;
}
declare type change_taskGlideRecord = taskGlideRecord & change_taskFields;
declare type change_taskElement = $$element.Reference<change_taskFields, change_taskGlideRecord>;
declare type change_taskProperty = $$property.generic.ReferenceProperty<change_taskFields, change_taskGlideRecord, change_taskElement>;

/**
 * GlideElement values from the Model Category table.
 * @interface cmdb_model_categoryFields
 * @extends {IGlideTableProperties}
 */
declare interface cmdb_model_categoryFields extends IGlideTableProperties {
    /**
     * Allow as master
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    allow_as_master: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow in bundle
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    allow_in_bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Allow pre-allocation
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    allow_pre_allocation: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Asset class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_model_categoryFields
     * @description Internal type is "table_name"
     */
    asset_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Bundle
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * CI class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_model_categoryFields
     * @description Internal type is "table_name"
     */
    cmdb_ci_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Enforce CI verification
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_model_categoryFields
     */
    enforce_verification: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_model_categoryFields
     */
    name: $$rhino.Nilable<$$property.Element>;
}
declare type cmdb_model_categoryGlideRecord = GlideRecord & cmdb_model_categoryFields;

/**
 * GlideElement values from the Model Component table.
 * @interface cmdb_m2m_model_componentFields
 * @extends {IGlideTableProperties}
 */
declare interface cmdb_m2m_model_componentFields extends IGlideTableProperties {
    /**
     * Component
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof cmdb_m2m_model_componentFields
     * @description Refers to cmdb_model (Product Model)
     */
    child: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Is main component
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_m2m_model_componentFields
     */
    master: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Model category of component
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>}
     * @memberof cmdb_m2m_model_componentFields
     * @description Refers to cmdb_model_category (Model Category)
     */
    model_category: $$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>;

    /**
     * Bundle
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof cmdb_m2m_model_componentFields
     * @description Refers to cmdb_model (Product Model)
     */
    parent: $$rhino.Nilable<cmdb_modelProperty>;
}
declare type cmdb_m2m_model_componentGlideRecord = GlideRecord & cmdb_m2m_model_componentFields;

/**
 * GlideElement values from the Product Model table.
 * @interface cmdb_modelFields
 * @extends {IGlideTableProperties}
 */
declare interface cmdb_modelFields extends IGlideTableProperties {
    /**
     * Acquisition method
     * @type {$$rhino.Nilable<$$property.generic.Element<("Both" | "Buy" | "Lease")>>}
     * @memberof cmdb_modelFields
     */
    acquisition_method: $$rhino.Nilable<$$property.generic.Element<("Both" | "Buy" | "Lease")>>;

    /**
     * Asset tracking strategy
     * @type {$$rhino.Nilable<$$property.generic.Element<("leave_to_category" | "track_as_consumable" | "do_not_track")>>}
     * @memberof cmdb_modelFields
     * @description "leave_to_category"=""; "track_as_consumable"=""; "do_not_track"=""
     */
    asset_tracking_strategy: $$rhino.Nilable<$$property.generic.Element<("leave_to_category" | "track_as_consumable" | "do_not_track")>>;

    /**
     * Barcode
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    barcode: $$rhino.Nilable<$$property.Element>;

    /**
     * Bundle
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_modelFields
     */
    bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Certified
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_modelFields
     */
    certified: $$rhino.Nilable<$$property.Boolean>;

    /**
     * CMDB CI class
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    cmdb_ci_class: $$rhino.Nilable<$$property.Element>;

    /**
     * Model categories
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof cmdb_modelFields
     * @description Internal type is "glide_list"
     */
    cmdb_model_category: $$rhino.Nilable<IGlideElement>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof cmdb_modelFields
     */
    cost: $$rhino.Nilable<$$property.Price>;

    /**
     * Depreciation
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmdb_modelFields
     * @description Refers to cmdb_depreciation (Depreciation)
     */
    depreciation: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedHTML>}
     * @memberof cmdb_modelFields
     */
    description: $$rhino.Nilable<$$property.TranslatedHTML>;

    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    display_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Expenditure type
     * @type {$$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>}
     * @memberof cmdb_modelFields
     * @description "capex"=""; "opex"=""
     */
    expenditure_type: $$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>;

    /**
     * Flow Rate (cfm)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    flow_rate: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Full name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    full_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Main component
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_m2m_model_componentFields, cmdb_m2m_model_componentGlideRecord>>}
     * @memberof cmdb_modelFields
     * @description Refers to cmdb_m2m_model_component (Model Component)
     */
    main_component: $$rhino.Nilable<$$property.generic.Reference<cmdb_m2m_model_componentFields, cmdb_m2m_model_componentGlideRecord>>;

    /**
     * Manufacturer
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmdb_modelFields
     * @description Refers to core_company (Company)
     */
    manufacturer: $$rhino.Nilable<core_companyProperty>;

    /**
     * Model number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    model_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Owner
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdb_modelFields
     * @description Refers to sys_user (User)
     */
    owner: $$rhino.Nilable<sys_userProperty>;

    /**
     * Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof cmdb_modelFields
     */
    picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Power (watts)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    power_consumption: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Product Catalog Item
     * @type {$$rhino.Nilable<sc_cat_itemProperty>}
     * @memberof cmdb_modelFields
     * @description Refers to sc_cat_item (Catalog Item)
     */
    product_catalog_item: $$rhino.Nilable<sc_cat_itemProperty>;

    /**
     * Height (U)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    rack_units: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Salvage value
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof cmdb_modelFields
     */
    salvage_value: $$rhino.Nilable<$$property.Currency>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * SLA
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_modelFields
     */
    sla: $$rhino.Nilable<$$property.Element>;

    /**
     * Sound Power (bels)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    sound_power: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Status
     * @type {$$rhino.Nilable<$$property.generic.Element<("In Production" | "Retired" | "Sold")>>}
     * @memberof cmdb_modelFields
     */
    status: $$rhino.Nilable<$$property.generic.Element<("In Production" | "Retired" | "Sold")>>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("Generic" | "Product" | "Scrum product")>>}
     * @memberof cmdb_modelFields
     */
    type: $$rhino.Nilable<$$property.generic.Element<("Generic" | "Product" | "Scrum product")>>;

    /**
     * Weight (lbs)
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_modelFields
     */
    weight: $$rhino.Nilable<$$property.Numeric>;
}
declare type cmdb_modelGlideRecord = GlideRecord & cmdb_modelFields;
declare type cmdb_modelElement = $$element.Reference<cmdb_modelFields, cmdb_modelGlideRecord>;
declare type cmdb_modelProperty = $$property.generic.ReferenceProperty<cmdb_modelFields, cmdb_modelGlideRecord, cmdb_modelElement>;

/**
 * GlideElement values from the Asset table.
 * @interface alm_assetFields
 * @extends {IGlideTableProperties}
 */
declare interface alm_assetFields extends IGlideTableProperties {
    /**
     * Acquisition method
     * @type {$$rhino.Nilable<$$property.generic.Element<("purchase" | "lease" | "rental" | "loan")>>}
     * @memberof alm_assetFields
     * @description "purchase"=""; "lease"=""; "rental"=""; "loan"=""
     */
    acquisition_method: $$rhino.Nilable<$$property.generic.Element<("purchase" | "lease" | "rental" | "loan")>>;

    /**
     * Active transfer order
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof alm_assetFields
     */
    active_to: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Asset tag
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    asset_tag: $$rhino.Nilable<$$property.Element>;

    /**
     * Assigned
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    assigned: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Assigned to
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    assigned_to: $$rhino.Nilable<sys_userProperty>;

    /**
     * Beneficiary
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof alm_assetFields
     * @description Refers to core_company (Company)
     */
    beneficiary: $$rhino.Nilable<core_companyProperty>;

    /**
     * Checked in
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    checked_in: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Checked out
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    checked_out: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Configuration Item
     * @type {$$rhino.Nilable<cmdb_ciProperty>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_ci (Configuration Item)
     */
    ci: $$rhino.Nilable<cmdb_ciProperty>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Company
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof alm_assetFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    cost: $$rhino.Nilable<$$property.Currency>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Order received
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    delivery_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Department
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof alm_assetFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * Depreciated amount
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    depreciated_amount: $$rhino.Nilable<$$property.Currency>;

    /**
     * Depreciation
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_depreciation (Depreciation)
     */
    depreciation: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Depreciation effective date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    depreciation_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Display name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    display_name: $$rhino.Nilable<$$property.Element>;

    /**
     * Disposal reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    disposal_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Due in
     * @type {$$rhino.Nilable<$$property.generic.Element<("1 Day" | "1 Hour" | "1 Week")>>}
     * @memberof alm_assetFields
     */
    due_in: $$rhino.Nilable<$$property.generic.Element<("1 Day" | "1 Hour" | "1 Week")>>;

    /**
     * Expenditure type
     * @type {$$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>}
     * @memberof alm_assetFields
     * @description "capex"=""; "opex"=""
     */
    expenditure_type: $$rhino.Nilable<$$property.generic.Element<("capex" | "opex")>>;

    /**
     * GL account
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    gl_account: $$rhino.Nilable<$$property.Element>;

    /**
     * Installed
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    install_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * State
     * @type {$$rhino.Nilable<$$property.generic.Element<("2" | "6" | "9" | "1" | "10" | "3" | "7" | "8")>>}
     * @memberof alm_assetFields
     * @description "2"=""; "6"=""; "9"=""; "1"=""; "10"=""; "3"=""; "7"=""; "8"=""
     */
    install_status: $$rhino.Nilable<$$property.generic.Element<("2" | "6" | "9" | "1" | "10" | "3" | "7" | "8")>>;

    /**
     * Invoice number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    invoice_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Justification
     * @type {$$rhino.Nilable<$$property.generic.Element<("New employee hire" | "Replace in repair" | "Replace stolen" | "Replacement" | "Stock replenishment" | "Swap" | "Testing" | "Upgrade")>>}
     * @memberof alm_assetFields
     */
    justification: $$rhino.Nilable<$$property.generic.Element<("New employee hire" | "Replace in repair" | "Replace stolen" | "Replacement" | "Stock replenishment" | "Swap" | "Testing" | "Upgrade")>>;

    /**
     * Lease contract
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    lease_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof alm_assetFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Managed by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    managed_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Model
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_model (Product Model)
     */
    model: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Model category
     * @type {$$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to cmdb_model_category (Model Category)
     */
    model_category: $$rhino.Nilable<$$property.generic.Reference<cmdb_model_categoryFields, cmdb_model_categoryGlideRecord>>;

    /**
     * Old status
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    old_status: $$rhino.Nilable<$$property.Element>;

    /**
     * Old substatus
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    old_substatus: $$rhino.Nilable<$$property.Element>;

    /**
     * Ordered
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     */
    order_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Owned by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    owned_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Parent
     * @type {$$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to alm_asset (Asset)
     */
    parent: $$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>;

    /**
     * PO number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    po_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Pre-allocated
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof alm_assetFields
     */
    pre_allocated: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Purchased
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    purchase_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Purchase order line
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to proc_po_item (Purchase order line items)
     */
    purchase_line: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Quantity
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof alm_assetFields
     */
    quantity: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Receiving line
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to proc_rec_slip_item (Receiving Slip Line)
     */
    receiving_line: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Request line
     * @type {$$rhino.Nilable<sc_req_itemProperty>}
     * @memberof alm_assetFields
     * @description Refers to sc_req_item (Requested Item)
     */
    request_line: $$rhino.Nilable<sc_req_itemProperty>;

    /**
     * Resale price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof alm_assetFields
     */
    resale_price: $$rhino.Nilable<$$property.Price>;

    /**
     * Reserved for
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    reserved_for: $$rhino.Nilable<sys_userProperty>;

    /**
     * Residual value
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    residual: $$rhino.Nilable<$$property.Currency>;

    /**
     * Residual date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    residual_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Retired date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    retired: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Scheduled retirement
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    retirement_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Salvage value
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof alm_assetFields
     */
    salvage_value: $$rhino.Nilable<$$property.Currency>;

    /**
     * Serial number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     */
    serial_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Skip sync
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof alm_assetFields
     */
    skip_sync: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Stockroom
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof alm_assetFields
     * @description Refers to alm_stockroom (Stockroom)
     */
    stockroom: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Substate
     * @type {$$rhino.Nilable<$$property.generic.Element<("available" | "disposed" | "lost" | "reserved" | "sold" | "stolen" | "defective" | "donated" | "pending_repair" | "vendor_credit" | "pending_install" | "pending_disposal" | "pending_transfer" | "pre_allocated")>>}
     * @memberof alm_assetFields
     * @description "available"=""; "disposed"=""; "lost"=""; "reserved"=""; "sold"=""; "stolen"=""; "defective"=""; "donated"=""; "pending_repair"=""; "vendor_credit"=""; "pending_install"=""; "pending_disposal"=""; "pending_transfer"=""; "pre_allocated"=""
     */
    substatus: $$rhino.Nilable<$$property.generic.Element<("available" | "disposed" | "lost" | "reserved" | "sold" | "stolen" | "defective" | "donated" | "pending_repair" | "vendor_credit" | "pending_install" | "pending_disposal" | "pending_transfer" | "pre_allocated")>>;

    /**
     * Supported by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user (User)
     */
    supported_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Support group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof alm_assetFields
     * @description Refers to sys_user_group (Group)
     */
    support_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof alm_assetFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof alm_assetFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof alm_assetFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof alm_assetFields
     * @description Refers to core_company (Company)
     */
    vendor: $$rhino.Nilable<core_companyProperty>;

    /**
     * Warranty expiration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof alm_assetFields
     * @description Internal type is "glide_date"
     */
    warranty_expiration: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Work notes
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof alm_assetFields
     * @description Internal type is "journal_input"
     */
    work_notes: $$rhino.Nilable<IGlideElement>;
}
declare type alm_assetGlideRecord = GlideRecord & alm_assetFields;

/**
 * GlideElement values from the Base Configuration Item table.
 * @interface cmdbFields
 * @extends {IExtendedGlideTableProperties}
 */
declare interface cmdbFields extends IExtendedGlideTableProperties {
    /**
     * Asset
     * @type {$$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to alm_asset (Asset)
     */
    asset: $$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>;

    /**
     * Asset tag
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    asset_tag: $$rhino.Nilable<$$property.Element>;

    /**
     * Assigned
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    assigned: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Assigned to
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    assigned_to: $$rhino.Nilable<sys_userProperty>;

    /**
     * Assignment group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user_group (Group)
     */
    assignment_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Checked in
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    checked_in: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Checked out
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    checked_out: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Company
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmdbFields
     * @description Refers to core_company (Company)
     */
    company: $$rhino.Nilable<core_companyProperty>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdbFields
     * @description Internal type is "float"
     */
    cost: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Cost currency
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    cost_cc: $$rhino.Nilable<$$property.Element>;

    /**
     * Cost center
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof cmdbFields
     * @description Refers to cmn_cost_center (Cost Center)
     */
    cost_center: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Order received
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    delivery_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Department
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof cmdbFields
     * @description Refers to cmn_department (Department)
     */
    department: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * Due
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    due: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Due in
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    due_in: $$rhino.Nilable<$$property.Element>;

    /**
     * GL account
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    gl_account: $$rhino.Nilable<$$property.Element>;

    /**
     * Installed
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    install_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Status
     * @type {$$rhino.Nilable<$$property.generic.Element<("100" | "3" | "6" | "1" | "2" | "4" | "5" | "7" | "8")>>}
     * @memberof cmdbFields
     * @description "100"=""; "3"=""; "6"=""; "1"=""; "2"=""; "4"=""; "5"=""; "7"=""; "8"=""
     */
    install_status: $$rhino.Nilable<$$property.generic.Element<("100" | "3" | "6" | "1" | "2" | "4" | "5" | "7" | "8")>>;

    /**
     * Invoice number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    invoice_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Justification
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    justification: $$rhino.Nilable<$$property.Element>;

    /**
     * Lease contract
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    lease_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof cmdbFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Managed by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    managed_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Manufacturer
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmdbFields
     * @description Refers to core_company (Company)
     */
    manufacturer: $$rhino.Nilable<core_companyProperty>;

    /**
     * Model ID
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof cmdbFields
     * @description Refers to cmdb_model (Product Model)
     */
    model_id: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    name: $$rhino.Nilable<$$property.Element>;

    /**
     * Ordered
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     */
    order_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Owned by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    owned_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * PO number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    po_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Purchased
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     * @description Internal type is "glide_date"
     */
    purchase_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Serial number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     */
    serial_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Skip sync
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdbFields
     */
    skip_sync: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Supported by
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user (User)
     */
    supported_by: $$rhino.Nilable<sys_userProperty>;

    /**
     * Support group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof cmdbFields
     * @description Refers to sys_user_group (Group)
     */
    support_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Class
     * @type {$$rhino.Nilable<$$property.SysClassName>}
     * @memberof cmdbFields
     */
    sys_class_name: $$rhino.Nilable<$$property.SysClassName>;

    /**
     * Sys class path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     * @description Internal type is "sys_class_path"
     */
    sys_class_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Domain
     * @type {$$rhino.Nilable<$$property.DomainId>}
     * @memberof cmdbFields
     */
    sys_domain: $$rhino.Nilable<$$property.DomainId>;

    /**
     * Domain Path
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdbFields
     * @description Internal type is "domain_path"
     */
    sys_domain_path: $$rhino.Nilable<$$property.Element>;

    /**
     * Requires verification
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdbFields
     */
    unverified: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof cmdbFields
     * @description Refers to core_company (Company)
     */
    vendor: $$rhino.Nilable<core_companyProperty>;

    /**
     * Warranty expiration
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdbFields
     * @description Internal type is "glide_date"
     */
    warranty_expiration: $$rhino.Nilable<$$property.GlideObject>;
}
declare type cmdbGlideRecord = GlideRecord & cmdbFields;

/**
 * GlideElement values from the Configuration Item table.
 * @interface cmdb_ciFields
 * @extends {cmdbFields}
 */
declare interface cmdb_ciFields extends cmdbFields {
    /**
     * Attributes
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    attributes: $$rhino.Nilable<$$property.Element>;

    /**
     * Can Print
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_ciFields
     */
    can_print: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    category: $$rhino.Nilable<$$property.Element>;

    /**
     * Approval group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof cmdb_ciFields
     * @description Refers to sys_user_group (Group)
     */
    change_control: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Comments
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    comments: $$rhino.Nilable<$$property.Element>;

    /**
     * Correlation ID
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    correlation_id: $$rhino.Nilable<$$property.Element>;

    /**
     * Discovery source
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    discovery_source: $$rhino.Nilable<$$property.Element>;

    /**
     * DNS Domain
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    dns_domain: $$rhino.Nilable<$$property.Element>;

    /**
     * Fault count
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof cmdb_ciFields
     */
    fault_count: $$rhino.Nilable<$$property.Numeric>;

    /**
     * First discovered
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdb_ciFields
     */
    first_discovered: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Fully qualified domain name
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    fqdn: $$rhino.Nilable<$$property.Element>;

    /**
     * IP Address
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    ip_address: $$rhino.Nilable<$$property.Element>;

    /**
     * Most recent discovery
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdb_ciFields
     */
    last_discovered: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * MAC Address
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    mac_address: $$rhino.Nilable<$$property.Element>;

    /**
     * Maintenance schedule
     * @type {$$rhino.Nilable<cmn_scheduleProperty>}
     * @memberof cmdb_ciFields
     * @description Refers to cmn_schedule (Schedule)
     */
    maintenance_schedule: $$rhino.Nilable<cmn_scheduleProperty>;

    /**
     * Model number
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    model_number: $$rhino.Nilable<$$property.Element>;

    /**
     * Monitor
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof cmdb_ciFields
     */
    monitor: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Operational status
     * @type {$$rhino.Nilable<$$property.generic.Element<("1" | "2" | "3" | "4" | "5" | "6")>>}
     * @memberof cmdb_ciFields
     * @description "1"=""; "2"=""; "3"=""; "4"=""; "5"=""; "6"=""
     */
    operational_status: $$rhino.Nilable<$$property.generic.Element<("1" | "2" | "3" | "4" | "5" | "6")>>;

    /**
     * Schedule
     * @type {$$rhino.Nilable<cmn_scheduleProperty>}
     * @memberof cmdb_ciFields
     * @description Refers to cmn_schedule (Schedule)
     */
    schedule: $$rhino.Nilable<cmn_scheduleProperty>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    short_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Start date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof cmdb_ciFields
     */
    start_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Subcategory
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ciFields
     */
    subcategory: $$rhino.Nilable<$$property.Element>;
}
declare type cmdb_ciGlideRecord = cmdbGlideRecord & cmdb_ciFields;
declare type cmdb_ciElement = $$element.Reference<cmdb_ciFields, cmdb_ciGlideRecord>;
declare type cmdb_ciProperty = $$property.generic.ReferenceProperty<cmdb_ciFields, cmdb_ciGlideRecord, cmdb_ciElement>;

/**
 * GlideElement values from the Business Service table.
 * @interface cmdb_ci_serviceFields
 * @extends {cmdb_ciFields}
 */
declare interface cmdb_ci_serviceFields extends cmdb_ciFields {
    /**
     * Business Criticality
     * @type {$$rhino.Nilable<$$property.generic.Element<("1 - most critical" | "2 - somewhat critical" | "3 - less critical" | "4 - not critical")>>}
     * @memberof cmdb_ci_serviceFields
     */
    busines_criticality: $$rhino.Nilable<$$property.generic.Element<("1 - most critical" | "2 - somewhat critical" | "3 - less critical" | "4 - not critical")>>;

    /**
     * Parent
     * @type {$$rhino.Nilable<cmdb_ci_serviceProperty>}
     * @memberof cmdb_ci_serviceFields
     * @description Refers to cmdb_ci_service (Business Service)
     */
    parent: $$rhino.Nilable<cmdb_ci_serviceProperty>;

    /**
     * Portfolio status
     * @type {$$rhino.Nilable<$$property.generic.Element<("pipeline" | "catalog" | "retired")>>}
     * @memberof cmdb_ci_serviceFields
     * @description "pipeline"=""; "catalog"=""; "retired"=""
     */
    portfolio_status: $$rhino.Nilable<$$property.generic.Element<("pipeline" | "catalog" | "retired")>>;

    /**
     * Price model
     * @type {$$rhino.Nilable<$$property.generic.Element<("fixed" | "per_unit")>>}
     * @memberof cmdb_ci_serviceFields
     * @description "fixed"=""; "per_unit"=""
     */
    price_model: $$rhino.Nilable<$$property.generic.Element<("fixed" | "per_unit")>>;

    /**
     * Price unit
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ci_serviceFields
     */
    price_unit: $$rhino.Nilable<$$property.Element>;

    /**
     * Service classification
     * @type {$$rhino.Nilable<$$property.generic.Element<("Business Service" | "Technical Service" | "Service Offering" | "Shared Service" | "Application Service" | "Billable Service")>>}
     * @memberof cmdb_ci_serviceFields
     */
    service_classification: $$rhino.Nilable<$$property.generic.Element<("Business Service" | "Technical Service" | "Service Offering" | "Shared Service" | "Application Service" | "Billable Service")>>;

    /**
     * Service level requirement
     * @type {$$rhino.Nilable<$$property.TranslatedHTML>}
     * @memberof cmdb_ci_serviceFields
     */
    service_level_requirement: $$rhino.Nilable<$$property.TranslatedHTML>;

    /**
     * Service status
     * @type {$$rhino.Nilable<$$property.generic.Element<("design" | "requirements" | "definition" | "development" | "analysis" | "buildtestrelease" | "approved" | "operational" | "chartered" | "retiring")>>}
     * @memberof cmdb_ci_serviceFields
     * @description "design"=""; "requirements"=""; "definition"=""; "development"=""; "analysis"=""; "buildtestrelease"=""; "approved"=""; "operational"=""; "chartered"=""; "retiring"=""
     */
    service_status: $$rhino.Nilable<$$property.generic.Element<("design" | "requirements" | "definition" | "development" | "analysis" | "buildtestrelease" | "approved" | "operational" | "chartered" | "retiring")>>;

    /**
     * SLA
     * @type {$$rhino.Nilable<$$property.generic.Reference<slaFields, slaGlideRecord>>}
     * @memberof cmdb_ci_serviceFields
     * @description Refers to sla (Agreement)
     */
    sla: $$rhino.Nilable<$$property.generic.Reference<slaFields, slaGlideRecord>>;

    /**
     * Unit description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ci_serviceFields
     * @description Internal type is "html"
     */
    unit_description: $$rhino.Nilable<$$property.Element>;

    /**
     * Used for
     * @type {$$rhino.Nilable<$$property.generic.Element<("Production" | "Staging" | "QA" | "Test" | "Development" | "Demonstration" | "Training" | "Disaster recovery")>>}
     * @memberof cmdb_ci_serviceFields
     */
    used_for: $$rhino.Nilable<$$property.generic.Element<("Production" | "Staging" | "QA" | "Test" | "Development" | "Demonstration" | "Training" | "Disaster recovery")>>;

    /**
     * Users supported
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof cmdb_ci_serviceFields
     * @description Refers to sys_user_group (Group)
     */
    user_group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Version
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof cmdb_ci_serviceFields
     */
    version: $$rhino.Nilable<$$property.Element>;
}
declare type cmdb_ci_serviceGlideRecord = cmdb_ciGlideRecord & cmdb_ci_serviceFields;
declare type cmdb_ci_serviceElement = $$element.Reference<cmdb_ci_serviceFields, cmdb_ci_serviceGlideRecord>;
declare type cmdb_ci_serviceProperty = $$property.generic.ReferenceProperty<cmdb_ci_serviceFields, cmdb_ci_serviceGlideRecord, cmdb_ci_serviceElement>;

declare interface change_request_imacFields extends change_requestFields {
    /**
     * Move department
     * @type {$$rhino.Nilable<cmn_departmentProperty>}
     * @memberof change_request_imacFields
     */
    move_department: $$rhino.Nilable<cmn_departmentProperty>;

    /**
     * Move from
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof change_request_imacFields
     */
    move_from: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Move from dc
     * @type {$$rhino.Nilable<cmdb_ciProperty>}
     * @memberof change_request_imacFields
     */
    move_from_dc: $$rhino.Nilable<cmdb_ciProperty>;

    /**
     * Move to
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof change_request_imacFields
     */
    move_to: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Move to dc
     * @type {$$rhino.Nilable<cmdb_ciProperty>}
     * @memberof change_request_imacFields
     */
    move_to_dc: $$rhino.Nilable<cmdb_ciProperty>;

    /**
     * Move user
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof change_request_imacFields
     */
    move_user: $$rhino.Nilable<sys_userProperty>;

    /**
     * Network component
     * @type {$$property.Boolean}
     * @memberof change_request_imacFields
     */
    network_component: $$property.Boolean;
}
declare type change_request_imacGlideRecord = change_requestGlideRecord & change_request_imacFields;
