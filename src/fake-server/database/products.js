import { makeIdGenerator } from '../utils';
import brandsData from './brands';
import { categoriesListData, prepareCategory } from './categories';

const getId = makeIdGenerator();

const attributesDef = [
    {
        name: 'Color',
        slug: 'color',
        values: [
            { name: 'White', slug: 'white' },
            { name: 'Silver', slug: 'silver' },
            { name: 'Light Gray', slug: 'light-gray' },
            { name: 'Gray', slug: 'gray' },
            { name: 'Dark Gray', slug: 'dark-gray' },
            { name: 'Coal', slug: 'coal' },
            { name: 'Black', slug: 'black' },
            { name: 'Red', slug: 'red' },
            { name: 'Orange', slug: 'orange' },
            { name: 'Yellow', slug: 'yellow' },
            { name: 'Pear Green', slug: 'pear-green' },
            { name: 'Green', slug: 'green' },
            { name: 'Emerald', slug: 'emerald' },
            { name: 'Shamrock', slug: 'shamrock' },
            { name: 'Shakespeare', slug: 'shakespeare' },
            { name: 'Blue', slug: 'blue' },
            { name: 'Dark Blue', slug: 'dark-blue' },
            { name: 'Violet', slug: 'violet' },
            { name: 'Purple', slug: 'purple' },
            { name: 'Cerise', slug: 'cerise' },
        ],
    },
    {
        name: 'Speed',
        slug: 'speed',
        values: [
            { name: '750 RPM', slug: '750-rpm' },
        ],
    },
    {
        name: 'Power Source',
        slug: 'power-source',
        values: [
            { name: 'Cordless-Electric', slug: 'cordless-electric' },
        ],
    },
    {
        name: 'Battery Cell Type',
        slug: 'battery-cell-type',
        values: [
            { name: 'Lithium', slug: 'lithium' },
        ],
    },
    {
        name: 'Voltage',
        slug: 'voltage',
        values: [
            { name: '20 Volts', slug: '20-volts' },
        ],
    },
    {
        name: 'Battery Capacity',
        slug: 'battery-capacity',
        values: [
            { name: '2 Ah', slug: '2-Ah' },
        ],
    },
];

const productsDef = [
    {
        slug: 'al-capone-cognac-filt-2pc',
        name: 'AL CAPONE COGNAC FILT 2PK',
        price: 45,
        images: [
            'images/products/product-1.jpg',
            'images/products/product-1-1.jpg',
        ],
        badges: 'new',
        rating: 4,
        reviews: 12,
        availability: 'in-stock',
        brand: 'marlboro',
        categories: ['screwdrivers'],
        attributes: [
            { slug: 'color', values: 'yellow' },
        ],
    },
    {
        slug: 'americas-best-chew-golden',
        name: 'AMERICAs BEST CHEW GOLDEN',
        price: 49,
        images: [
            'images/products/product-2.jpg',
            'images/products/product-2-1.jpg',
        ],
        badges: 'hot',
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: '555',
        categories: ['instruments'],
        attributes: [
            { slug: 'color', values: ['silver', 'cerise'] }
        ],
    },
    {
        slug: 'b-riff-cherry-liquor-pkt',
        name: 'B RIFF CHERRY LIQUOR PKT',
        price: 35,
        images: [
            'images/products/product-3.jpg',
            'images/products/product-3-1.jpg',
        ],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        brand: 'marlboro',
        categories: ['power-tools'],
        attributes: [
            { slug: 'color', values: 'yellow' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'bic-6tier-320ct-ez-reach',
        name: 'BIC 6TIER 320ct EZ-REACH',
        price: 23.50,
        compareAtPrice: 28.50,
        images: [
            'images/products/product-4.jpg',
            'images/products/product-4-1.jpg',
        ],
        badges: 'sale',
        rating: 3,
        reviews: 15,
        availability: 'in-stock',
        brand: 'marlboro',
        categories: [],
        attributes: [
            { slug: 'color', values: 'white' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: '5-hour-180ct-combo-rack',
        name: '5-HOUR 180ct COMBO RACK',
        price: 35,
        images: [
            'images/products/product-5.jpg',
            'images/products/product-5-1.jpg',
        ],
        rating: 4,
        reviews: 2,
        availability: 'in-stock',
        brand: 'blackandmild',
        categories: [],
        attributes: [
            { slug: 'color', values: 'dark-blue' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'arizona-mucho-mango-23oz',
        name: 'ARIZONA MUCHO MANGO 23z',
        price: 6.99,
        images: [
            'images/products/product-6.jpg',
            'images/products/product-6-1.jpg',
        ],
        rating: 3,
        reviews: 21,
        availability: 'in-stock',
        brand: 'blackandmild',
        categories: [],
        attributes: [
            { slug: 'color', values: 'orange' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: '555-state-express-gk',
        name: '555 STATE EXPRESS KG',
        price: 24,
        images: [
            'images/products/product-7.jpg',
            'images/products/product-7-1.jpg',
        ],
        rating: 5,
        reviews: 5,
        availability: 'in-stock',
        brand: 'redman',
        categories: [],
        attributes: [
            { slug: 'color', values: 'red' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'crest-toothpaste-4.2-oz',
        name: 'CREST TOOTHPASTE 4.2 oz',
        price: 12,
        images: [
            'images/products/product-8.jpg',
            'images/products/product-8-1.jpg',
        ],
        rating: 2,
        reviews: 5,
        availability: 'in-stock',
        brand: 'arizona',
        categories: [],
        attributes: [
            { slug: 'color', values: ['pear-green', 'blue'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'animal-crackers-20oz CRACKERS 2OZ',
        name: 'ANIMAL CRACKERS 2OZ',
        price: 19,
        images: [
            'images/products/product-9.jpg',
            'images/products/product-9-1.jpg',
        ],
        rating: 4,
        reviews: 34,
        availability: 'in-stock',
        brand: 'arizona',
        categories: [],
        attributes: [
            { slug: 'color', values: 'green' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'water-tap',
        name: 'Water Tap',
        price: 15,
        images: [
            'images/products/product-10.jpg',
            'images/products/product-10-1.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'arizona',
        categories: [],
        attributes: [
            { slug: 'color', values: 'gray' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'hand-tool-kit',
        name: 'Swishers Sweet Regular',
        price: 8.99,
        images: [
            'images/products/swisher.jpg',
            'images/products/swisher1.jpg',
        ],
        rating: 4,
        reviews: 7,
        availability: 'in-stock',
        brand: 'arizona',
        categories: [],
        attributes: [
            { slug: 'color', values: 'black' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'ash-s-chainsaw-3.5kw',
        name: 'OldTyme Grape',
        price: 19.25,
        images: [
            'images/products/old-tyme-grape.jpg',
            'images/products/old-tyme-grape1.jpg',
        ],
        rating: 5,
        reviews: 17,
        availability: 'in-stock',
        brand: 'swishers',
        categories: [],
        attributes: [
            { slug: 'color', values: 'violet' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'marlboro-angle-grinder-kzx3890pqw',
        name: 'Marlboro Gold Box',
        price: 78,
        images: [
            'images/products/marlboro-gold.jpg',
            'images/products/marlboro-gold1.jpg',
        ],
        rating: 4,
        reviews: 8,
        availability: 'in-stock',
        brand: 'swishers',
        categories: [],
        attributes: [
            { slug: 'color', values: 'purple' },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'marlboro-air-compressor-deltakx500',
        name: '10/10 Jewlery bags',
        price: 4,
        images: [
            'images/products/1010bags.jpg',
            'images/products/1010bags1.jpg',
        ],
        rating: 3,
        reviews: 14,
        availability: 'in-stock',
        brand: 'marlboro',
        categories: [],
        attributes: [
            { slug: 'color', values: ['light-gray', 'emerald'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'marlboro-electric-jigsaw-jig7000bq',
        name: 'Marlboro Electric Jigsaw JIG7000BQ',
        price: 290,
        images: [
            'images/products/product-15.jpg',
            'images/products/product-15-1.jpg',
        ],
        rating: 2,
        reviews: 1,
        availability: 'in-stock',
        brand: 'marlboro',
        categories: [],
        attributes: [
            { slug: 'color', values: ['coal', 'shamrock'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
    {
        slug: 'marlboro-screwdriver-screw1500acc',
        name: 'Marlboro Screwdriver SCREW1500ACC',
        price: 1499,
        images: [
            'images/products/product-16.jpg',
            'images/products/product-16-1.jpg',
            'images/products/product-16-2.jpg',
            'images/products/product-16-3.jpg',
            'images/products/product-16-4.jpg',
        ],
        rating: 5,
        reviews: 3,
        availability: 'in-stock',
        brand: 'oldtyme',
        categories: [],
        attributes: [
            { slug: 'color', values: ['dark-gray', 'shakespeare'] },
            { slug: 'speed', values: '750-rpm', featured: true },
            { slug: 'power-source', values: 'cordless-electric', featured: true },
            { slug: 'battery-cell-type', values: 'lithium', featured: true },
            { slug: 'voltage', values: '20-volts', featured: true },
            { slug: 'battery-capacity', values: '2-Ah', featured: true },
        ],
    },
];

const productsData = productsDef.map((productDef) => {
    let badges = [];

    if (productDef.badges) {
        badges = typeof productDef.badges === 'string' ? [productDef.badges] : productDef.badges;
    }

    const categories = categoriesListData
        .filter((category) => productDef.categories.includes(category.slug))
        .map((category) => prepareCategory(category));

    const attributes = (productDef.attributes || []).map((productAttributeDef) => {
        const attributeDef = attributesDef.find((x) => x.slug === productAttributeDef.slug);

        if (!attributeDef) {
            return null;
        }

        let valuesDef = [];

        if (typeof productAttributeDef.values === 'string') {
            valuesDef = [productAttributeDef.values];
        } else if (productAttributeDef.values) {
            valuesDef = productAttributeDef.values;
        }

        const values = valuesDef.map((valueSlug) => {
            const valueDef = attributeDef.values.find((x) => x.slug === valueSlug);

            if (!valueDef) {
                return null;
            }

            return {
                ...valueDef,
                customFields: {},
            };
        }).filter((x) => x !== null);

        if (!values.length) {
            return null;
        }

        return {
            name: attributeDef.name,
            slug: attributeDef.slug,
            featured: !!productAttributeDef.featured,
            values,
            customFields: {},
        };
    }).filter((x) => x !== null);

    return {
        id: getId(),
        name: productDef.name,
        sku: '83690/32',
        slug: productDef.slug,
        price: productDef.price,
        compareAtPrice: productDef.compareAtPrice || null,
        images: productDef.images.slice(),
        badges: badges.slice(),
        rating: productDef.rating,
        reviews: productDef.reviews,
        availability: productDef.availability,
        brand: brandsData.find((x) => x.slug === productDef.brand) || null,
        categories,
        attributes,
        customFields: {},
    };
});

export default productsData;
