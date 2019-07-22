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
        rules: [{ message: 'How much does a unit of this item cost?', required: true }],
    },
    description: {
        label: 'Description',
        rules: [{ message: 'You must provide a description for this item', required: true }],
    },
    name: {
        label: 'Name',
        rules: [{ message: "What is this item's name?", required: true }],
    },
    quantity: {
        label: 'Quantity',
        rules: [{ message: 'How many of this item do you have in stock?', required: true }],
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
        rules: [{ message: 'What type of item is this?', required: true }],
    },
};

/**@constant*/
export const PRODUCER_PAGE = {
    CONFIRM_MESSAGE: 'Are you sure delete this product?',
    DELETE: 'delete',
    EDIT: 'edit',
    EDIT_PRODUCT: 'Edit Product',
    LARGE: 'large',
    NO: 'No',
    PRODUCT_ITEM: 'product-item',
    VERTICAL: 'vertical',
    YES: 'Yes',
};

/**@constant*/
export const INITIAL_STATE = {
    errorMessage: null,
    productList: new Map(),
    successMessage: null,
};

export const UPLOADING = 'uploading';
export const UPLOADED = ' file uploaded successfully';
export const UPLOAD_FAILED = 'file upload failed.';
export const DONE = 'done';
export const ERROR = 'error';
export const UPLOAD_TEXT = 'ant-upload-text';
export const TEXT = 'Add Image';
export const PLUS = 'plus';
export const CREATE_IMAGE_ENDPOINT = 'http://localhost:4000/api/createImage';
export const PICTURE_CARD = 'picture-card';
export const IMAGE = 'image';
export const CLEARFIX = 'clearfix';
export const IMAGE_WIDTH = 'image-width';
export const NUM_OF_IMAGES = 0;
