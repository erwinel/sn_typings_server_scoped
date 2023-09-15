declare namespace sn_sc {
    interface IItemOrderInfo {
        /**
         * The sys_id of the item to purchase.
         * @type {string}
         * @memberof IRequestCartItemMap
         */
        sysparm_id: string;

        /**
         * Quantity of the specified item to purchase.
         * @type {number}
         * @memberof IRequestCartItemMap
         */
        sysparm_quantity: number;

        /**
         * Address to which to deliver the items.
         * Default: Address of requested for user.
         * @type {string}
         * @memberof IRequestOrderMap
         */
        delivery_address?: string;

        /**
         * Instructions to follow when processing the order.
         * Default 1.
         * @type {string}
         * @memberof IRequestOrderMap
         */
        special_instructions?: string;

        /**
         * The sys_id of the user for whom the item is requested.
         * Default: Session user.
         * @type {string}
         * @memberof IRequestOrderMap
         */
         sysparm_requested_for?: string;

        /**
         * Questions and customer answers associated with the item.
         * @type {{ [key: string]: any }}
         * @memberof IRequestCartItemMap
         */
        variables?: { [key: string]: any };
    }

    export interface IaddToCartResult {
        /**
         * The sys_id if the cart item.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        cart_item_id: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getID:()Ljava/lang/String;
        /**
         * The sys_id if the catalog item being ordered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        catalog_item_id: $$rhino.String; // com/glideapp/servicecatalog/CatalogItem.getID:()Ljava/lang/String; org/json/simple/JSONObject.put:(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;
        /**
         * The display name of the item being ordrered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        item_name: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getDisplayName:()Ljava/lang/String;
        /**
         * The number of items being ordered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        quantity: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getDisplayQuantity:()Ljava/lang/String;
        /**
         * Item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getDisplayPrice:()Ljava/lang/String;
        /**
         * Localized item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        localized_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getLocalizedPriceWithCurrency:()Ljava/lang/String;
        /**
         * Recurring item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        recurring_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getRecurringDisplayPrice:()Ljava/lang/String;
        /**
         * Localized item recurring price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        localized_recurring_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getLocalizedRecurringPriceWithCurrency:()Ljava/lang/String;
        /**
         * Item order frequency.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        recurring_frequency: $$rhino.String;
        /**
         * Details of all items in the cart after item has been added.
         * @type {IaddToCartResultItem[]}
         * @memberof IaddToCartResult
         */
        items: IaddToCartResultItem[];
        /**
         * Subtotal of the sum of the price of all items.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        subtotal: $$rhino.String; // com/glide/ui/jelly/tags/form/CurrencyFormatter2.format:(Ljava/lang/Double;)Ljava/lang/String;
        /**
         * The sys_id of the current shopping cart.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        cart_id: $$rhino.String; // com/glideapp/servicecatalog/scoped/api/CartJS.fCartRecord:Lcom/glideapp/servicecatalog/CartRecord; com/glideapp/servicecatalog/CartRecord.getCartID:()Ljava/lang/String;
    }

    export interface IaddToCartResultItem {
        /**
         * The name of the item being ordrered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        name: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getDisplayName:()Ljava/lang/String;
        /**
         * The sys_id if the cart item.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        cart_item_id: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getID:()Ljava/lang/String;
        /**
         * The sys_id if the cart item.
         * @type {$$rhino.String}
         * @memberof IaddToCartResultItem
         */
        sys_id: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getID:()Ljava/lang/String;
        /**
         * The sys_id if the catalog item being ordered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        catalog_item_id: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getCatalogItem:()Lcom/glideapp/servicecatalog/CatalogItem; com/glideapp/servicecatalog/CatalogItem.getID:()Ljava/lang/String;
        /**
         * The display name of the item being ordrered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        item_name: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getDisplayName:()Ljava/lang/String;
        /**
         * The number of items being ordered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        quantity: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getDisplayQuantity:()Ljava/lang/String;
        /**
         * Item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getDisplayPrice:()Ljava/lang/String;
        /**
         * Localized item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        localized_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getLocalizedPriceWithCurrency:()Ljava/lang/String;
        /**
         * Recurring item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        recurring_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getRecurringDisplayPrice:()Ljava/lang/String;
        /**
         * Localized item recurring price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        localized_recurring_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getLocalizedRecurringPriceWithCurrency:()Ljava/lang/String;
        /**
         * Item order frequency.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        recurring_frequency: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getRecurringFrequencyDisplay:()Ljava/lang/String;
        /**
         * Estimated time of delivery.
         * @type {$$rhino.String}
         * @memberof IaddToCartResultItem
         */
        delivery_time: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getEstimatedDeliveryDays:()Ljava/lang/String;
        /**
         * Indicates whether the quantity is to be displayed.
         * @type {$$rhino.String}
         * @memberof IaddToCartResultItem
         */
        show_quantity: $$rhino.String; // com/glideapp/servicecatalog/CartItem.isNoQuantityV2:()Z java/lang/Boolean.valueOf:(Z)Ljava/lang/Boolean;
        /**
         * Indicates whether the price is to be displayed.
         * @type {$$rhino.String}
         * @memberof IaddToCartResultItem
         */
        show_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.showPrice:()Z java/lang/Boolean.valueOf:(Z)Ljava/lang/Boolean;
        /**
         * Indicates whether the recurring price is to be displayed.
         * @type {$$rhino.String}
         * @memberof IaddToCartResultItem
         */
        show_recurring_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.showRecurringPrice:()Z java/lang/Boolean.valueOf:(Z)Ljava/lang/Boolean;
        /**
         * Subtotal of the sum of the price of all items.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        subtotal: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getSubtotal:()D java/lang/Double.valueOf:(D)Ljava/lang/Double;
        subtotal_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getSubtotalPrice:()Ljava/lang/String;
        recurring_subtotal: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getRecurringSubtotal:()D java/lang/Double.valueOf:(D)Ljava/lang/Double;
        recurring_subtotal_price: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getRecurringSubtotalPrice:()Ljava/lang/String;
        order_guide: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getOrderGuide:()Ljava/lang/String;
        short_description: $$rhino.String; // com/glideapp/servicecatalog/CatalogItem.getShortDescription:()Ljava/lang/String;
        picture: $$rhino.String; // com/glideapp/servicecatalog/CatalogItem.getPicture:()Ljava/lang/String;
        item_id: $$rhino.String; // com/glideapp/servicecatalog/CatalogItem.getID:()Ljava/lang/String;
        sys_class_name: $$rhino.String; // com/glideapp/servicecatalog/CatalogItem.getRecordClass:()Ljava/lang/String;
        no_delivery_time: $$rhino.String; //  com/glideapp/servicecatalog/CatalogItem.isNoDeliveryTimeV2:()Z java/lang/Boolean.valueOf:(Z)Ljava/lang/Boolean;
        can_order: $$rhino.String; // com/glideapp/servicecatalog/CartItem.canView:()Z java/lang/Boolean.valueOf:(Z)Ljava/lang/Boolean;
        /**
         * Questions and customer answers associated with the item.
         * @type {{ [key: string]: any }}
         * @memberof IRequestCartItemMap
         */
        variables: { [key: string]: any };
        price_display: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getDisplayPriceForSession:()Ljava/lang/String;
        recurring_price_display: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getRecurringDisplayPriceForSession:()Ljava/lang/String;
        subtotal_price_display: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getSubtotalForSession:()Ljava/lang/String;
        recurring_subtotal_price_display: $$rhino.String; // com/glideapp/servicecatalog/CartItem.getRecurringSubtotalForSession:()Ljava/lang/String;
    }

    export interface IgetCartDetailsResult {
        /**
         * Details of all items in the cart.
         * @type {IaddToCartResultItem[]}
         * @memberof IaddToCartResult
         */
        cart_items: IaddToCartResultItem[]; // com/glideapp/servicecatalog/scoped/api/CartJS.fCartRecord:Lcom/glideapp/servicecatalog/CartRecord;
        requested_for: $$rhino.String; // com/glideapp/servicecatalog/scoped/api/CartJS.fCartRecord:Lcom/glideapp/servicecatalog/CartRecord; com/glideapp/servicecatalog/CartRecord.getRequestedFor:()Ljava/lang/String;
        delivery_address: $$rhino.String; // com/glideapp/servicecatalog/scoped/api/CartJS.fCartRecord:Lcom/glideapp/servicecatalog/CartRecord; com/glideapp/servicecatalog/CartRecord.getDeliveryAddress:()Ljava/lang/String;
        special_instructions: $$rhino.String; // com/glideapp/servicecatalog/scoped/api/CartJS.fCartRecord:Lcom/glideapp/servicecatalog/CartRecord; com/glideapp/servicecatalog/CartRecord.getSpecialInstructions:()Ljava/lang/String;
        requested_for_display_name: $$rhino.String; // com/glideapp/servicecatalog/scoped/api/CartJS.fCartRecord:Lcom/glideapp/servicecatalog/CartRecord; com/glideapp/servicecatalog/CartRecord.getRequestedForDisplayName:()Ljava/lang/String;
        name: $$rhino.String; // com/glideapp/servicecatalog/scoped/api/CartJS.fCartRecord:Lcom/glideapp/servicecatalog/CartRecord; com/glideapp/servicecatalog/CartRecord.getName:()Ljava/lang/String;
        sys_id: $$rhino.String; // com/glideapp/servicecatalog/scoped/api/CartJS.fCartRecord:Lcom/glideapp/servicecatalog/CartRecord; com/glideapp/servicecatalog/CartRecord.getCartID:()Ljava/lang/String;
    }

    export interface IcheckOutCartResultRecurranceItem {
        /**
         * The sys_id if the catalog item being ordered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        catalog_item_id: $$rhino.String;
        /**
         * Questions and customer answers associated with the item.
         * @type {{ [key: string]: any }}
         * @memberof IRequestCartItemMap
         */
        variables: { [key: string]: any };
        /**
         * The number of items being ordered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        quantity: $$rhino.String;
        /**
         * Localized item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        localized_price: $$rhino.String;
        /**
         * Item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        price: $$rhino.String;
        /**
         * Item order frequency.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        recurring_frequency: $$rhino.String;
        /**
         * Localized item recurring price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        localized_recurring_price: $$rhino.String;
        /**
         * Recurring item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        recurring_price: $$rhino.String;
        item_name: $$rhino.String;
        /**
         * The sys_id if the cart item.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        cart_item_id: $$rhino.String;
        /**
         * Estimated time of delivery.
         * @type {$$rhino.String}
         * @memberof IaddToCartResultItem
         */
        delivery_time: $$rhino.String;
    }

    export interface IcheckOutCartResultFrequencyItem {
        subtotal_price: $$rhino.String;
        subtotal_recurring_frequency: $$rhino.String;
        subtotal_recurring_price: $$rhino.String;
        total_title: $$rhino.String;
        /**
         * Details of all items in the cart.
         * @type {IaddToCartResultItem[]}
         * @memberof IaddToCartResult
         */
        items: IcheckOutCartResultRecurranceItem[];
        show_subtotal_price: $$rhino.String;
        subtotal_title: $$rhino.String;
    }

    export interface IcheckOut2StepCartResult {
        subtotal_title: $$rhino.String;
        subtotal_price: $$rhino.String;
        subtotal_recurring_frequency: $$rhino.String;
        subtotal_recurring_price: $$rhino.String;
        delivery_address: $$rhino.String;
        special_instructions: $$rhino.String;
        total_title: $$rhino.String;
        requested_for_user: $$rhino.String;
        requested_for: $$rhino.String;
        show_subtotal_price: $$rhino.String;
        /**
         * The sys_id of the current shopping cart.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        cart_id: $$rhino.String;
        weekly: IcheckOutCartResultFrequencyItem;
        monthly: IcheckOutCartResultFrequencyItem;
        yearly: IcheckOutCartResultFrequencyItem;
    }

    export interface IorderNow2Step {
        /**
         * The sys_id of the current shopping cart.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        cart_id: $$rhino.String;
    }

    export interface IsubmitOrderInfo {
        /**
         * Instructions to follow when processing the order.
         * Default 1.
         * @type {string}
         * @memberof IRequestOrderMap
         */
        special_instructions?: string;

        /**
         * The sys_id of the user for whom the item is requested.
         * Default: Session user.
         * @type {string}
         * @memberof IRequestOrderMap
         */
        sysparm_requested_for?: string;
        delivery_address?: string;
    }

    export interface IsubmitOrderResult {
        request_number: $$rhino.String;
        request_id: $$rhino.String;
    }

    export interface IupdateItemInfo {

        /**
         * Quantity of the specified item to purchase.
         * @type {number}
         * @memberof IRequestCartItemMap
         */
        sysparm_quantity?: number;

        /**
         * The sys_id of the user for whom the item is requested.
         * Default: Session user.
         * @type {string}
         * @memberof IRequestOrderMap
         */
        sysparm_requested_for?: string;

        /**
         * Questions and customer answers associated with the item.
         * @type {{ [key: string]: any }}
         * @memberof IRequestCartItemMap
         */
        variables: { [key: string]: any };
    }

    export interface IupdateItemResultItem {
        /**
         * The sys_id if the cart item.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        cart_item_id: $$rhino.String;
        /**
         * The sys_id if the catalog item being ordered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        catalog_item_id: $$rhino.String;
        item_name: $$rhino.String;
        /**
         * Localized item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        localized_price: $$rhino.String;
        /**
         * Localized item recurring price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        localized_recurring_price: $$rhino.String;
        /**
         * Item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        price: $$rhino.String;
        /**
         * The number of items being ordered.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        quantity: $$rhino.String;
        /**
         * Item order frequency.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        recurring_frequency: $$rhino.String;
        /**
         * Recurring item price.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        recurring_price: $$rhino.String;
    }

    export interface IupdateItemResult {
        /**
         * The sys_id of the current shopping cart.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        cart_id: $$rhino.String;
        /**
         * Details of all items in the cart.
         * @type {IaddToCartResultItem[]}
         * @memberof IaddToCartResult
         */
        items: IupdateItemResultItem[];
        /**
         * Subtotal of the sum of the price of all items.
         * @type {$$rhino.String}
         * @memberof IaddToCartResult
         */
        subtotal: $$rhino.String;
    }

    /**
     * Enables access to the shopping cart for a user.
     * @export
     * @class CartJS
     * @see {@link https://developer.servicenow.com/dev.do#!/reference/api/rome/server/sn_sc-namespace/c_CartJSScoped}
     * @see {@link https://docs.servicenow.com/bundle/rome-application-development/page/app-store/dev_portal/API_reference/CartJSScoped/concept/c_CartJSScoped.html}
     */
    export class CartJS implements Packages.com.glideapp.servicecatalog.scoped.api.CartJS {
        /**
         * Creates an instance of CartJS.
         * @param {string} [cartName] - Optional name of a defined cart for the user who is currently logged in.
         * @memberof CartJS
         */
        constructor(cartName?: $$rhino.String);

        /**
         * Adds the request for a catalog item to the current cart.
         * @param {IItemOrderInfo} request - A JSON object that contains the details of the catalog item to be added to the cart.
         * @return {IaddToCartResult} Structure of the current cart.
         * @memberof CartJS
         */
        addToCart(request: IItemOrderInfo): IaddToCartResult;

        /**
         * Specifies if the current user has the required role to edit the Request for field.
         * @return {*}  {$$rhino.Boolean} True if user has the required role; otherwise, false.
         * @memberof CartJS
         */
        canViewRF(): $$rhino.Boolean;

        /**
         * Performs the cart checkout. If the two-step checkout is enabled, returns the order summary. If the two-step checkout is disabled, the cart is submitted and details of the generated request are returned.
         * @return {(IcheckOut2StepCartResult | IsubmitOrderResult)} If the two-step checkout is enabled, the summary of the items in the cart is returned;
         * otherwise a summary of the request is returned.
         * @memberof CartJS
         */
        checkoutCart(): IcheckOut2StepCartResult | IsubmitOrderResult;

        /**
         * Deletes the current cart.
         * @memberof CartJS
         */
        empty(): void;

        /**
         * Returns the cart details.
         * @return {IgetCartDetailsResult} Object containing the current cart details.
         * @memberof CartJS
         */
        getCartDetails(): IgetCartDetailsResult;

        /**
         * Sys_id for the current cart.
         * @return {$$rhino.String}
         * @memberof CartJS
         */
        getCartID(): $$rhino.String;

        /**
         * Returns a GlideRecord object containing records for items in the current cart.
         * @return {GlideRecord} GlideRecord object including records and fields from the Item [sc_cart_item] table that describe an item in the current cart.
         * @memberof CartJS
         */
        getCartItems(): GlideRecord;

        /**
         * Returns the delivery address for the current cart.
         * @return {*}  {$$rhino.String} Delivery address for the current cart.
         * @memberof CartJS
         */
        getDeliveryAddress(): $$rhino.String;

        /**
         * Returns the sys_id of the user for whom the cart is requested.
         * @return {*}  {$$rhino.String} Sys_id of the user record for whom the cart is requested; located in the User [sys_user] table.
         * @memberof CartJS
         */
        getRequestedFor(): $$rhino.String;

        /**
         * Returns the name of the user for whom the current cart is requested.
         * @return {*}  {$$rhino.String} Name of the user for whom the current cart is requested; located in the User [sys_user] table.
         * @memberof CartJS
         */
        getRequestedForDisplayName(): $$rhino.String;

        /**
         * Returns the special instructions for the current cart.
         * @return {*}  {$$rhino.String} Special instructions for the current cart.
         * @memberof CartJS
         */
        getSpecialInstructions(): $$rhino.String;

        /**
         * Orders a single item.
         * @param {IItemOrderInfo} request - A JSON object that contains the details of the catalog item to be added to the cart.
         * @return {*}  {(IsubmitOrderResult | IorderNow2Step)} Cart overview if two-step checkout is enabled; otherwise, request overview.
         * @memberof CartJS
         */
        orderNow(request: IItemOrderInfo): IsubmitOrderResult | IorderNow2Step;

        /**
         * Sets the delivery address for the current cart.
         * @param {$$rhino.String} address - Delivery address for the current cart.
         * @memberof CartJS
         */
        setDeliveryAddress(address: $$rhino.String): void;

        /**
         * Sets the sys_id in the sys_user record of the user for whom the cart is requested.
         * @param {$$rhino.String} user - sys_id to be set in the sys_user record of the user for whom the cart is requested.
         * @memberof CartJS
         */
        setRequestedFor(user: $$rhino.String): void;

        /**
         * Sets the special instructions for the current cart.
         * @param {$$rhino.String} specialInstructions - Special instructions for the current cart.
         * @memberof CartJS
         */
        setSpecialInstructions(specialInstructions: $$rhino.String): void;

        /**
         * Updates special instructions, requested for, and delivery address from the request parameter and performs the cart checkout.
         * Use this API to modify the mentioned parameters of the cart and perform the cart checkout simultaneously.
         * Missing parameters in the request object will have their default value.
         * @param {IsubmitOrderInfo} [request] - A JSON object that contains details of the cart to be submitted.
         * @return {*}  {IsubmitOrderResult} Structure of the cart.
         * @memberof CartJS
         */
        submitOrder(request?: IsubmitOrderInfo): IsubmitOrderResult;

        /**
         * Updates an item in the cart.
         * @param {IupdateItemInfo} request - A JSON object that contains details of the catalog item to be updated.
         * @param {$$rhino.String} cart_item_id - SysID of the cart item to be modified.
         * @return {*}  {IupdateItemResult} Details of the cart.
         * @memberof CartJS
         */
        updateItem(request: IupdateItemInfo, cart_item_id: $$rhino.String): IupdateItemResult;

        equals(obj: any): $$rhino.Boolean;
        hashCode(): $$rhino.Number;
        toString(): $$rhino.String;
    }
}