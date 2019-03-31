/**@constant*/
export const NAME = 'producerItems';

/**@constant*/
export const EDIT_TITLE = 'Edit Product Details';

/**@constant*/
export const CREATE_TITLE = 'Create New Product';

/**@constant*/
export const SAVE_PRODUCT_DETAILS = 'Save Details';

/**@constant*/
export const DEFAULT_IMAGE = '/Fruits.jpg';

/**@constant*/
export const MODAL_FIELDS = {
    COST: 'cost',
    NAME: 'name',
    QUANTITY: 'quantity',
    TYPE: 'type',
};

/**@constant*/
export const PRODUCER_ITEM = {
    BUTTON: {
        TEXT: 'Add Item',
        TYPE: 'plus',
    },
    CONTAINER_CLASS: 'item-list-container',
};

/**@constant*/
export const DEFAULT_FIELD_VALUES = {
    cost: 1000,
    description: '',
    name: '',
    quantity: 10,
    type: '',
};

/**@constant*/
export const LIST_ITEM_CLASS = 'list-item-desc';

/**@constant*/
export const FORM_ITEM_LAYOUT = {
    labelCol: {
        sm: { span: 8 },
        xs: { span: 24 },
    },
    wrapperCol: {
        sm: { span: 16 },
        xs: { span: 24 },
    },
};

/**@constant*/
export const EDITABLE_FIELDS = {
    cost: {
        label: 'Cost',
        rules: [{ message: "How much does a unit of this item cost?", required: true }],
    },
    description: {
        label: 'Description',
        rules: [{ message: "You must provide a description for this item", required: true }],
    },
/*     image: {
        label: 'image',
        type: "file",
    }, */
    name: {
        label: 'Name',
        rules: [{ message: "What is this item's name?", required: true }],
    },
    quantity: {
        label: 'Quantity',
        rules: [{ message: "How many of this item do you have in stock?", required: true }],
    },
    type: {
        label: 'Type',
        options: [
            'Beverage',
            'Cereal',
            'Dairy',
            'Equipment',
            'Fibers',
            'Fruits',
            'Fuels',
            'Livestock',
            'Meats',
            'Nut',
            'Raw Material',
            'Seed',
            'Spice',
            'Vegetable',
        ],
        rules: [{ message: "What type of item is this?", required: true }],
    },
};

/**@constant*/
export const PRODUCER_PAGE = {
    EDIT: 'edit',
    LARGE: 'large',
    PRODUCT_ITEM: 'product-item',
    VERTICAL: 'vertical',
};

/**@constant*/
export const INITIAL_STATE = {
    productList: new Map(),
};
