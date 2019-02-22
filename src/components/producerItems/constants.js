/**@constant*/
export const NAME = 'producerItems';

/**@constant*/
export const EDIT_FORM_TITLE = 'Edit Product Details';

/**@constant*/
export const SAVE_PRODUCT_DETAILS = 'Save Details';

/**@constant*/
export const DEFAULT_FIRST_FIELD = 'title';

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
        rules: [],
    },
    description: {
        label: 'Description',
        rules: [],
    },
    location: {
        label: 'Location',
        rules: [],
    },
    title: {
        label: 'Name',
        rules: [],
    },
};

/**@constant*/
export const PRODUCER_PAGE = {
    EDIT: 'edit',
    LARGE: 'large',
    LOGO: 'logo',
    PRODUCT_ITEM: 'product-item',
    VERTICAL: 'vertical',
};

/**@constant*/
export const INITIAL_STATE = {
    fakeData: [
        {
            avatar: "/GroundnutOil.jpeg",
            cost: "₦1,500",
            description: "500 gallons of low fat vegetable",
            href: '/',
            id: '121',
            location: "Owerri, Imo state",
            title: "Vegetable Oil ",

        },
        {
            avatar: "/poultry-chicken.jpg",
            cost: "₦1,350",
            description: "1000 healthy broilers",
            href: '/',
            id: '122',
            location: "Niger",
            title: "Abu's bird farm",

        },
        {
            avatar: "/prawn.jpg",
            cost: "₦2000",
            description: "30 bags of sea prawns",
            href: '/',
            id: '123',
            location: "Owerri, Imo",
            title: "Prawns",

        },
        {
            avatar: "/Fruits.jpg",
            cost: "₦500 per kg",
            description: 'Jamal Fruits store',
            href: '/',
            id: '124',
            location: "Ore,Ondo",
            title: "Fruits",

        },
        {
            avatar: "/tomatoes.jpg",
            cost: "₦10,000",
            description: ' Baskets of tomato Jos',
            href: '/',
            id: '125',
            location: "Jos",
            title: "Tomatoes",

        },
        {
            avatar: "/Drypepper.jpg",
            cost: "₦4,500",
            description: "Baskets of red pepper",
            href: '/',
            id: '126',
            location: "Nsukka, Enugu",
            title: "Dry pepper",

        },
        {
            avatar: "/egg-crates.jpeg",
            cost: "₦1,200",
            description: 'Over 1000 crates of local eggs',
            href: '/',
            id: '127',
            location: "Owerri, Imo",
            title: "Crates of egg",

        },
        {
            avatar: "/PalmOil.JPG",
            cost: "₦10,00",
            description: "500 gallons of Ondo palm",
            href: '/',
            id: '128',
            location: "Ondo",
            title: "Palm oil",

        },
        {
            avatar: "/onion-bags.jpg",
            cost: "₦11,500",
            description: '100 bags of onion',
            href: '/',
            id: '129',
            location: "Zaria, Kaduna",
            title: "Bags of onion",

        },
        {
            avatar: "/GroundnutOil.jpeg",
            cost: "₦1,500",
            description: "500 gallons of low fat vegetable",
            href: '/',
            id: '1210',
            location: "Owerri, Imo state",
            title: "Vegetable Oil ",

        },
        {
            avatar: "/poultry-chicken.jpg",
            cost: "₦1,350",
            description: "1000 healthy broilers",
            href: '/',
            id: '1211',
            location: "Niger",
            title: "Abu's bird farm",

        },
        {
            avatar: "/prawn.jpg",
            cost: "₦2000",
            description: "30 bags of sea prawns",
            href: '/',
            id: '1212',
            location: "Owerri, Imo",
            title: "Prawns",

        },
        {
            avatar: "/Fruits.jpg",
            cost: "₦500 per kg",
            description: 'Jamal Fruits store',
            href: '/',
            id: '1213',
            location: "Ore,Ondo",
            title: "Fruits",

        },
        {
            avatar: "/tomatoes.jpg",
            cost: "₦10,000",
            description: ' Baskets of tomato Jos',
            href: '/',
            id: '1214',
            location: "Jos",
            title: "Tomatoes",

        },
        {
            avatar: "/Drypepper.jpg",
            cost: "₦4,500",
            description: "Baskets of red pepper",
            href: '/',
            id: '1215',
            location: "Nsukka, Enugu",
            title: "Dry pepper",

        },
        {
            avatar: "/egg-crates.jpeg",
            cost: "₦1,200",
            description: 'Over 1000 crates of local eggs',
            href: '/',
            id: '1216',
            location: "Owerri, Imo",
            title: "Crates of egg",

        },
        {
            avatar: "/PalmOil.JPG",
            cost: "₦10,00",
            description: "500 gallons of Ondo palm",
            href: '/',
            id: '1217',
            location: "Ondo",
            title: "Palm oil",

        },
        {
            avatar: "/onion-bags.jpg",
            cost: "₦11,500",
            description: '100 bags of onion',
            href: '/',
            id: '1218',
            location: "Zaria, Kaduna",
            title: "Bags of onion",

        },
    ],
    productList: new Map(),
};
