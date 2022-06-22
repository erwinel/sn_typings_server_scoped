/// <reference path="task.d.ts" />

/**
 *
 * @type {("requested" | "in_process" | "closed_complete" | "closed_incomplete" | "closed_cancelled" | "closed_rejected" | "closed_skipped")}
 * @description "requested"="Pending Approval"; "in_process"="Approved"; "closed_complete"="Closed Complete"; "closed_incomplete"="Closed Incomplete"; "closed_cancelled"="Closed Cancelled"; "closed_rejected"="Closed Rejected"; "closed_skipped"="Closed Skipped"
 */
declare type IRequestState = "requested" | "in_process" | "closed_complete" | "closed_incomplete" | "closed_cancelled" | "closed_rejected" | "closed_skipped";

/**
 * GlideElement values from the Category table.
 * @interface sc_categoryFields
 * @extends {sys_metadataFields}
 */
declare interface sc_categoryFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_categoryFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_categoryFields
     */
    description: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * Entitlement script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sc_categoryFields
     */
    entitlement_script: $$rhino.Nilable<$$property.Script>;

    /**
     * Header icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    header_icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Homepage image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    homepage_image: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Homepage renderer
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_categoryFields
     * @description Refers to sc_homepage_renderer (Homepage Category Renderer)
     */
    homepage_renderer: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Image
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_categoryFields
     * @description Internal type is "image"
     */
    image: $$rhino.Nilable<IGlideElement>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof sc_categoryFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Hide description (mobile browsing)
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_categoryFields
     */
    mobile_hide_description: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Mobile Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_categoryFields
     */
    mobile_picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Mobile Subcategory Render Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("list" | "card")>>}
     * @memberof sc_categoryFields
     * @description "list"=""; "card"=""
     */
    mobile_subcategory_render_type: $$rhino.Nilable<$$property.generic.Element<("list" | "card")>>;

    /**
     * Module link
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_categoryFields
     * @description Refers to sys_app_module (Module)
     */
    module: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_categoryFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Parent
     * @type {$$rhino.Nilable<sc_categoryProperty>}
     * @memberof sc_categoryFields
     * @description Refers to sc_category (Category)
     */
    parent: $$rhino.Nilable<sc_categoryProperty>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_categoryFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Catalog
     * @type {$$rhino.Nilable<sc_catalogProperty>}
     * @memberof sc_categoryFields
     * @description Refers to sc_catalog (Catalog)
     */
    sc_catalog: $$rhino.Nilable<sc_catalogProperty>;

    /**
     * Show in CMS
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_categoryFields
     */
    show_in_cms: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Title
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_categoryFields
     */
    title: $$rhino.Nilable<$$property.TranslatedText>;
}
declare type sc_categoryGlideRecord = sys_metadataGlideRecord & sc_categoryFields;
declare type sc_categoryElement = $$element.Reference<sc_categoryFields, sc_categoryGlideRecord>;
declare type sc_categoryProperty = $$property.generic.ReferenceProperty<sc_categoryFields, sc_categoryGlideRecord, sc_categoryElement>;

/**
 * GlideElement values from the Catalog table.
 * @interface sc_catalogFields
 * @extends {sys_metadataFields}
 */
declare interface sc_catalogFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_catalogFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Background Color
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_catalogFields
     * @description Internal type is "color"
     */
    background_color: $$rhino.Nilable<IGlideElement>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_catalogFields
     */
    description: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * 'Continue Shopping' page
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_catalogFields
     */
    desktop_continue_shopping: $$rhino.Nilable<$$property.Element>;

    /**
     * 'Catalog Home' Page
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_catalogFields
     */
    desktop_home_page: $$rhino.Nilable<$$property.Element>;

    /**
     * Desktop image
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_catalogFields
     */
    desktop_image: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Editors
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_catalogFields
     * @description Internal type is "glide_list"
     */
    editors: $$rhino.Nilable<IGlideElement>;

    /**
     * Enable Wish List
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_catalogFields
     */
    enable_wish_list: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Manager
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sc_catalogFields
     * @description Refers to sys_user (User)
     */
    manager: $$rhino.Nilable<sys_userProperty>;

    /**
     * Title
     * @type {$$rhino.Nilable<$$property.TranslatedField>}
     * @memberof sc_catalogFields
     */
    title: $$rhino.Nilable<$$property.TranslatedField>;
}
declare type sc_catalogGlideRecord = sys_metadataGlideRecord & sc_catalogFields;
declare type sc_catalogElement = $$element.Reference<sc_catalogFields, sc_catalogGlideRecord>;
declare type sc_catalogProperty = $$property.generic.ReferenceProperty<sc_catalogFields, sc_catalogGlideRecord, sc_catalogElement>;

/**
 * GlideElement values from the Catalog Item table.
 * @interface sc_cat_itemFields
 * @extends {sys_metadataFields}
 */
declare interface sc_cat_itemFields extends sys_metadataFields {
    /**
     * Active
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    active: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Availability
     * @type {$$rhino.Nilable<$$property.generic.Element<("on_both" | "on_desktop" | "on_mobile")>>}
     * @memberof sc_cat_itemFields
     * @description "on_both"=""; "on_desktop"=""; "on_mobile"=""
     */
    availability: $$rhino.Nilable<$$property.generic.Element<("on_both" | "on_desktop" | "on_mobile")>>;

    /**
     * Billable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    billable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Category
     * @type {$$rhino.Nilable<sc_categoryProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_category (Category)
     */
    category: $$rhino.Nilable<sc_categoryProperty>;

    /**
     * Cost
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "decimal"
     */
    cost: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Cart
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sys_ui_macro (Macro)
     */
    custom_cart: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Execution Plan
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_cat_item_delivery_plan (Execution Plan)
     */
    delivery_plan: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Delivery plan script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sc_cat_itemFields
     */
    delivery_plan_script: $$rhino.Nilable<$$property.Script>;

    /**
     * Delivery time
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "glide_duration"
     */
    delivery_time: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.TranslatedHTML>}
     * @memberof sc_cat_itemFields
     */
    description: $$rhino.Nilable<$$property.TranslatedHTML>;

    /**
     * Entitlement script
     * @type {$$rhino.Nilable<$$property.Script>}
     * @memberof sc_cat_itemFields
     */
    entitlement_script: $$rhino.Nilable<$$property.Script>;

    /**
     * Fulfillment group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to sys_user_group (Group)
     */
    group: $$rhino.Nilable<sys_user_groupProperty>;

    /**
     * Hide on Service Portal
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    hide_sp: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Icon
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_cat_itemFields
     */
    icon: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Ignore price
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    ignore_price: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Image
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "image"
     */
    image: $$rhino.Nilable<IGlideElement>;

    /**
     * List Price
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sc_cat_itemFields
     */
    list_price: $$rhino.Nilable<$$property.Currency>;

    /**
     * Location
     * @type {$$rhino.Nilable<cmn_locationProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to cmn_location (Location)
     */
    location: $$rhino.Nilable<cmn_locationProperty>;

    /**
     * Meta
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_cat_itemFields
     */
    meta: $$rhino.Nilable<$$property.Element>;

    /**
     * Hide price (mobile listings)
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    mobile_hide_price: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Mobile Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_cat_itemFields
     */
    mobile_picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     *  Mobile Picture Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("use_desktop_picture" | "use_mobile_picture" | "use_no_picture")>>}
     * @memberof sc_cat_itemFields
     * @description "use_desktop_picture"=""; "use_mobile_picture"=""; "use_no_picture"=""
     */
    mobile_picture_type: $$rhino.Nilable<$$property.generic.Element<("use_desktop_picture" | "use_mobile_picture" | "use_no_picture")>>;

    /**
     * Model
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to cmdb_model (Product Model)
     */
    model: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Name
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_cat_itemFields
     */
    name: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * No cart
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_cart: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No order
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_order: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No order now
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_order_now: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No proceed checkout
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_proceed_checkout: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No quantity
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_quantity: $$rhino.Nilable<$$property.Boolean>;

    /**
     * No search
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    no_search: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Omit price in cart
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    omit_price: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Order
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_cat_itemFields
     */
    order: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Ordered item link
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_ordered_item_link (Ordered Item Link)
     */
    ordered_item_link: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Picture
     * @type {$$rhino.Nilable<$$property.UserImage>}
     * @memberof sc_cat_itemFields
     */
    picture: $$rhino.Nilable<$$property.UserImage>;

    /**
     * Preview link
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "catalog_preview"
     */
    preview: $$rhino.Nilable<IGlideElement>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof sc_cat_itemFields
     */
    price: $$rhino.Nilable<$$property.Price>;

    /**
     * Recurring Price Frequency
     * @type {$$rhino.Nilable<$$property.generic.Element<("daily" | "weekly" | "weekly2" | "monthly" | "monthly2" | "quarterly" | "semiannual" | "yearly")>>}
     * @memberof sc_cat_itemFields
     * @description "daily"=""; "weekly"=""; "weekly2"=""; "monthly"=""; "monthly2"=""; "quarterly"=""; "semiannual"=""; "yearly"=""
     */
    recurring_frequency: $$rhino.Nilable<$$property.generic.Element<("daily" | "weekly" | "weekly2" | "monthly" | "monthly2" | "quarterly" | "semiannual" | "yearly")>>;

    /**
     * Recurring price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof sc_cat_itemFields
     */
    recurring_price: $$rhino.Nilable<$$property.Price>;

    /**
     * Roles
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "user_roles"
     */
    roles: $$rhino.Nilable<IGlideElement>;

    /**
     * Catalogs
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_cat_itemFields
     * @description Internal type is "glide_list"
     */
    sc_catalogs: $$rhino.Nilable<IGlideElement>;

    /**
     * Created from item design
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sc_ic_item_staging (Item)
     */
    sc_ic_item_staging: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Published version
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_cat_itemFields
     */
    sc_ic_version: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Short description
     * @type {$$rhino.Nilable<$$property.TranslatedText>}
     * @memberof sc_cat_itemFields
     */
    short_description: $$rhino.Nilable<$$property.TranslatedText>;

    /**
     * Expand help for all questions
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    show_variable_help_on_load: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Start closed
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    start_closed: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Template
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to sys_template (Template)
     */
    template: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Type
     * @type {$$rhino.Nilable<$$property.generic.Element<("item" | "task" | "bundle" | "template" | "package")>>}
     * @memberof sc_cat_itemFields
     * @description "item"=""; "task"=""; "bundle"=""; "template"=""; "package"=""
     */
    type: $$rhino.Nilable<$$property.generic.Element<("item" | "task" | "bundle" | "template" | "package")>>;

    /**
     * Use cart layout
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    use_sc_layout: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof sc_cat_itemFields
     * @description Refers to core_company (Company)
     */
    vendor: $$rhino.Nilable<core_companyProperty>;

    /**
     * Visible on Bundles
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    visible_bundle: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Visible on Guides
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    visible_guide: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Visible elsewhere
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_cat_itemFields
     */
    visible_standalone: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Workflow
     * @type {$$rhino.Nilable<$$property.generic.Reference<wf_workflowFields, wf_workflowGlideRecord>>}
     * @memberof sc_cat_itemFields
     * @description Refers to wf_workflow (Workflow)
     */
    workflow: $$rhino.Nilable<$$property.generic.Reference<wf_workflowFields, wf_workflowGlideRecord>>;
}
declare type sc_cat_itemGlideRecord = sys_metadataGlideRecord & sc_cat_itemFields;
declare type sc_cat_itemElement = $$element.Reference<sc_cat_itemFields, sc_cat_itemGlideRecord>;
declare type sc_cat_itemProperty = $$property.generic.ReferenceProperty<sc_cat_itemFields, sc_cat_itemGlideRecord, sc_cat_itemElement>;

/**
 * GlideElement values from the Request table.
 * @interface sc_requestFields
 * @extends {taskFields}
 */
declare interface sc_requestFields extends taskFields {
    /**
     * Resolve Time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_requestFields
     */
    calendar_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Delivery address
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_requestFields
     */
    delivery_address: $$rhino.Nilable<$$property.Element>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sc_requestFields
     */
    price: $$rhino.Nilable<$$property.Currency>;

    /**
     * Requested for date
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sc_requestFields
     * @description Internal type is "glide_date"
     */
    requested_date: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Requested for
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sc_requestFields
     * @description Refers to sys_user (User)
     */
    requested_for: $$rhino.Nilable<sys_userProperty>;

    /**
     * Request state
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_requestFields
     */
    request_state: $$rhino.Nilable<$$property.Element>;

    /**
     * Sourceable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_requestFields
     */
    sourceable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Sourced
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_requestFields
     */
    sourced: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Special instructions
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof sc_requestFields
     */
    special_instructions: $$rhino.Nilable<$$property.Element>;

    /**
     * Stage
     * @type {$$rhino.Nilable<GlideElementWorkflow>}
     * @memberof sc_requestFields
     */
    stage: $$rhino.Nilable<GlideElementWorkflow>;
}
declare type sc_requestGlideRecord = taskGlideRecord & sc_requestFields;
declare type sc_requestElement = $$element.Reference<sc_requestFields, sc_requestGlideRecord>;
declare type sc_requestProperty = $$property.generic.ReferenceProperty<sc_requestFields, sc_requestGlideRecord, sc_requestElement>;

/**
 * GlideElement values from the Requested Item table.
 * @interface sc_req_itemFields
 * @extends {taskFields}
 */
declare interface sc_req_itemFields extends taskFields {
    /**
     * Backordered
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    backordered: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Billable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    billable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Item
     * @type {$$rhino.Nilable<sc_cat_itemProperty>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_cat_item (Catalog Item)
     */
    cat_item: $$rhino.Nilable<sc_cat_itemProperty>;

    /**
     * Configuration item
     * @type {$$rhino.Nilable<cmdb_ciProperty>}
     * @memberof sc_req_itemFields
     * @description Refers to cmdb_ci (Configuration Item)
     */
    configuration_item: $$rhino.Nilable<cmdb_ciProperty>;

    /**
     * Context
     * @type {$$rhino.Nilable<wf_contextProperty}
     * @memberof sc_req_itemFields
     * @description Refers to wf_context (Workflow context)
     */
    context: $$rhino.Nilable<wf_contextProperty>;

    /**
     * Estimated delivery
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof sc_req_itemFields
     */
    estimated_delivery: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Order Guide
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_cat_item_guide (Order guide)
     */
    order_guide: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Currency>}
     * @memberof sc_req_itemFields
     */
    price: $$rhino.Nilable<$$property.Currency>;

    /**
     * Quantity
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_req_itemFields
     */
    quantity: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Quantity Sourced
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_req_itemFields
     */
    quantity_sourced: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Received
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    received: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Recurring Price Frequency
     * @type {$$rhino.Nilable<IGlideElement>}
     * @memberof sc_req_itemFields
     * @description Internal type is "choice"
     */
    recurring_frequency: $$rhino.Nilable<IGlideElement>;

    /**
     * Recurring Price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof sc_req_itemFields
     */
    recurring_price: $$rhino.Nilable<$$property.Price>;

    /**
     * Request
     * @type {$$rhino.Nilable<sc_requestProperty>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_request (Request)
     */
    request: $$rhino.Nilable<sc_requestProperty>;

    /**
     * Catalog
     * @type {$$rhino.Nilable<sc_catalogProperty>}
     * @memberof sc_req_itemFields
     * @description Refers to sc_catalog (Catalog)
     */
    sc_catalog: $$rhino.Nilable<sc_catalogProperty>;

    /**
     * Sourced
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sc_req_itemFields
     */
    sourced: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Stage
     * @type {$$rhino.Nilable<GlideElementWorkflow>}
     * @memberof sc_req_itemFields
     */
    stage: $$rhino.Nilable<$$property.Workflow>;
}
declare type sc_req_itemGlideRecord = taskGlideRecord & sc_req_itemFields;
declare type sc_req_itemElement = $$element.Reference<sc_req_itemFields, sc_req_itemGlideRecord>;
declare type sc_req_itemProperty = $$property.generic.ReferenceProperty<sc_req_itemFields, sc_req_itemGlideRecord, sc_req_itemElement>;

/**
 * GlideElement values from the Catalog Task table.
 * @interface sc_taskFields
 * @extends {taskFields}
 */
declare interface sc_taskFields extends taskFields {
    /**
     * Resolve Time
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sc_taskFields
     */
    calendar_stc: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Request
     * @type {$$rhino.Nilable<sc_requestProperty>}
     * @memberof sc_taskFields
     * @description Refers to sc_request (Request)
     */
    request: $$rhino.Nilable<sc_requestProperty>;

    /**
     * Request item
     * @type {$$rhino.Nilable<sc_req_itemProperty>}
     * @memberof sc_taskFields
     * @description Refers to sc_req_item (Requested Item)
     */
    request_item: $$rhino.Nilable<sc_req_itemProperty>;

    /**
     * Catalog
     * @type {$$rhino.Nilable<sc_catalogProperty>}
     * @memberof sc_taskFields
     * @description Refers to sc_catalog (Catalog)
     */
    sc_catalog: $$rhino.Nilable<sc_catalogProperty>;
}
declare type sc_taskGlideRecord = taskGlideRecord & sc_taskFields;
declare type sc_taskElement = $$element.Reference<sc_taskFields, sc_taskGlideRecord>;
declare type sc_taskProperty = $$property.generic.ReferenceProperty<sc_taskFields, sc_taskGlideRecord, sc_taskElement>;

/**
 * GlideElement values from the Service Offering table.
 * @interface service_offeringFields
 * @extends {cmdb_ci_serviceFields}
 */
declare interface service_offeringFields extends cmdb_ci_serviceFields {
    /**
     * Billing
     * @type {$$rhino.Nilable<$$property.generic.Element<("monthly" | "weekly" | "yearly")>>}
     * @memberof service_offeringFields
     * @description "monthly"=""; "weekly"=""; "yearly"=""
     */
    billing: $$rhino.Nilable<$$property.generic.Element<("monthly" | "weekly" | "yearly")>>;

    /**
     * Contract
     * @type {$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof service_offeringFields
     * @description Refers to ast_contract (Contract)
     */
    contract: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Description
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof service_offeringFields
     */
    description: $$rhino.Nilable<$$property.Element>;

    /**
     * Price
     * @type {$$rhino.Nilable<$$property.Price>}
     * @memberof service_offeringFields
     */
    price: $$rhino.Nilable<$$property.Price>;

    /**
     * Technical contact
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof service_offeringFields
     * @description Refers to sys_user (User)
     */
    technical_contact: $$rhino.Nilable<sys_userProperty>;
}
declare type service_offeringGlideRecord = cmdb_ci_serviceGlideRecord & service_offeringFields;

/**
 * GlideElement values from the Service Order table.
 * @interface sm_orderFields
 * @extends {taskFields}
 */
declare interface sm_orderFields extends taskFields {

    /**
     * Asset
     * @type {$$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>}
     * @memberof sm_orderFields
     * @description Refers to alm_asset (Asset)
     */
    asset: $$rhino.Nilable<$$property.generic.Reference<alm_assetFields, alm_assetGlideRecord>>;

    /**
     * Assigned vendor
     * @type {$$rhino.Nilable<core_companyProperty>}
     * @memberof sm_orderFields
     * @description Refers to core_company (Company)
     */
    assigned_vendor: $$rhino.Nilable<core_companyProperty>;

    /**
     * Billable
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    billable: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Caller
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sm_orderFields
     * @description Refers to sys_user (User)
     */
    caller: $$rhino.Nilable<sys_userProperty>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    category: $$rhino.Nilable<$$property.Element>;
    /**
     * Estimated end
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    estimated_end: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Expected end
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    expected_end: $$rhino.Nilable<$$property.GlideObject>;
    /**
     * Initiated from
     * @type {$$rhino.Nilable<taskProperty>}
     * @memberof sm_orderFields
     * @description Refers to task (Task)
     */
    initiated_from: $$rhino.Nilable<taskProperty>;
    /**
     * Is catalog
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    is_catalog: $$rhino.Nilable<$$property.Boolean>;
    /**
     * Opened for
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sm_orderFields
     * @description Refers to sys_user (User)
     */
    opened_for: $$rhino.Nilable<sys_userProperty>;

    /**
     * Previous agent
     * @type {$$rhino.Nilable<sys_userProperty>}
     * @memberof sm_orderFields
     * @description Refers to sys_user (User)
     */
    previous_agent: $$rhino.Nilable<sys_userProperty>;
    /**
     * Qualification group
     * @type {$$rhino.Nilable<sys_user_groupProperty>}
     * @memberof sm_orderFields
     * @description Refers to sys_user_group (Group)
     */
    qualification_group: $$rhino.Nilable<sys_user_groupProperty>;
    /**
     * Requested due by
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    requested_due_by: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Category
     * @type {$$rhino.Nilable<$$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>}
     * @memberof sm_orderFields
     * @description Refers to sm_category (Sm Category)
     */
    request_category: $$rhino.Nilable<$$property.generic.Reference<IGlideTableProperties, GlideRecord>>;

    /**
     * Request type
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    request_type: $$rhino.Nilable<$$property.Element>;

    /**
     * Secure notes
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    secure_notes: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Suspended
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    sla_suspended: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Suspended for
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    sla_suspended_for: $$rhino.Nilable<$$property.Element>;

    /**
     * Suspended on
     * @type {$$rhino.Nilable<$$property.GlideObject>}
     * @memberof taskFields
     */
    sla_suspended_on: $$rhino.Nilable<$$property.GlideObject>;

    /**
     * Suspended reason
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    sla_suspended_reason: $$rhino.Nilable<$$property.Element>;

    /**
     * Spam
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    spam: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Subcategory
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    subcategory: $$rhino.Nilable<$$property.Element>;

    /**
     * Substate
     * @type {$$rhino.Nilable<$$property.Numeric>}
     * @memberof sm_orderFields
     */
    substate: $$rhino.Nilable<$$property.Numeric>;

    /**
     * Task created
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    task_created: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Template
     * @type {$$rhino.Nilable<cmdb_modelProperty>}
     * @memberof sm_orderFields
     * @description Refers to cmdb_model (Product Model)
     */
    template: $$rhino.Nilable<cmdb_modelProperty>;

    /**
     * Template Workflow Invoked
     * @type {$$rhino.Nilable<$$property.Boolean>}
     * @memberof sm_orderFields
     */
    template_workflow_invoked: $$rhino.Nilable<$$property.Boolean>;

    /**
     * Vendor reference
     * @type {$$rhino.Nilable<$$property.Element>}
     * @memberof taskFields
     */
    vendor_reference: $$rhino.Nilable<$$property.Element>;
}
