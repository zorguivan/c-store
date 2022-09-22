import { makeIdGenerator } from '../utils';

const getId = makeIdGenerator();

const categoriesDef = [
    {
        name: 'Tobaco Products',
        slug: 'tobaco-products',
        items: 272,
        children: [
            {
                name: 'Cigars',
                slug: 'cigars',
                image: 'assets/images/categories/category-1.jpg',
                items: 370,
                children: [
                    {
                        name: 'Cigars Domestic',
                        slug: 'cigars-domestic',
                        items: 57,
                    },
                    {
                        name: 'Cigars High Grade',
                        slug: 'cigars-high-grade',
                        items: 15,
                    },
                    {
                        name: 'Lighters & Accessories',
                        slug: 'lighters-accessories',
                        items: 126,
                    },
                    {
                        name: 'Snuff & Chewing Tobaco',
                        slug: 'snuff-chewing',
                        items: 12,
                    },
                    {
                        name: 'Alternatives',
                        slug: 'alternatives',
                        items: 25,
                    },
                ],
            },
            {
                name: 'Lighters & Accessories',
                slug: 'lighters-accessories',
                image: 'assets/images/categories/category-2.jpg',
                items: 134,
                children: [
                    {
                        name: 'Tool Kits',
                        slug: 'tool-kits',
                        items: 57,
                    },
                    {
                        name: 'Hammers',
                        slug: 'hammers',
                        items: 15,
                    },
                    {
                        name: 'Spanners',
                        slug: 'spanners',
                        items: 5,
                    },
                    {
                        name: 'Handsaws',
                        slug: 'handsaws',
                        items: 54,
                    },
                    {
                        name: 'Paint Tools',
                        slug: 'paint-tools',
                        items: 13,
                    },
                ],
            },
            {
                name: 'Snuff & Chewing Tobaco',
                slug: 'snuff-chewing',
                image: 'assets/images/categories/category-3.jpg',
                items: 302,
                children: [
                    {
                        name: 'Lathes',
                        slug: 'lathes',
                        items: 104,
                    },
                    {
                        name: 'Milling Machines',
                        slug: 'milling-machines',
                        items: 12,
                    },
                    {
                        name: 'Grinding Machines',
                        slug: 'grinding-machines',
                        items: 67,
                    },
                    {
                        name: 'CNC Machines',
                        slug: 'cnc-machines',
                        items: 5,
                    },
                    {
                        name: 'Sharpening Machines',
                        slug: 'sharpening-machines',
                        items: 88,
                    },
                ],
            },
            {
                name: 'Power Machinery',
                slug: 'power-machinery',
                image: 'assets/images/categories/category-4.jpg',
                items: 79,
                children: [
                    {
                        name: 'Generators',
                        slug: 'generators',
                        items: 23,
                    },
                    {
                        name: 'Compressors',
                        slug: 'compressors',
                        items: 76,
                    },
                    {
                        name: 'Winches',
                        slug: 'winches',
                        items: 43,
                    },
                    {
                        name: 'Plasma Cutting',
                        slug: 'plasma-cutting',
                        items: 128,
                    },
                    {
                        name: 'Electric Motors',
                        slug: 'electric-motors',
                        items: 76,
                    },
                ],
            },
            {
                name: 'Measurement',
                slug: 'measurement',
                image: 'assets/images/categories/category-5.jpg',
                items: 366,
                children: [
                    {
                        name: 'Tape Measure',
                        slug: 'tape-measure',
                        items: 57,
                    },
                    {
                        name: 'Theodolites',
                        slug: 'theodolites',
                        items: 5,
                    },
                    {
                        name: 'Thermal Imagers',
                        slug: 'thermal-imagers',
                        items: 3,
                    },
                    {
                        name: 'Calipers',
                        slug: 'calipers',
                        items: 37,
                    },
                    {
                        name: 'Levels',
                        slug: 'levels',
                        items: 14,
                    },
                ],
            },
            {
                name: 'Clothes and PPE',
                slug: 'clothes-and-ppe',
                image: 'assets/images/categories/category-6.jpg',
                items: 82,
                children: [
                    {
                        name: 'Winter Workwear',
                        slug: 'winter-workwear',
                        items: 24,
                    },
                    {
                        name: 'Summer Workwear',
                        slug: 'summer-workwear',
                        items: 87,
                    },
                    {
                        name: 'Helmets',
                        slug: 'helmets',
                        items: 9,
                    },
                    {
                        name: 'Belts and Bags',
                        slug: 'belts-and-bags',
                        items: 1,
                    },
                    {
                        name: 'Work Shoes',
                        slug: 'work-shoes',
                        items: 0,
                    },
                ],
            },
        ],
    },
    {
        name: 'Beverages',
        slug: 'beverages',
        items: 54,
    },
    {
        name: 'Snacks',
        slug: 'snacks',
        items: 421,
    },
    {
        name: 'Automotive',
        slug: 'automotive',
        items: 182,
    },
    {
        name: 'Store Use',
        slug: 'store-use',
        items: 15,
    },
    {
        name: 'Vape and E-Cig',
        slug: 'vape-e-cig',
        items: 89,
    },
    {
        name: 'Health & Beauty',
        slug: 'health-beauty',
        items: 201,
    },
];

function walkTree(defs, parent = null) {
    let list = [];
    const tree = defs.map((def) => {
        const category = {
            id: getId(),
            name: def.name,
            slug: def.slug,
            image: def.image || null,
            items: def.items || 0,
            customFields: {},
            parent,
            children: [],
        };

        const [childrenTree, childrenList] = walkTree(def.children || [], category);

        category.children = childrenTree;
        list = [...list, category, ...childrenList];

        return category;
    });

    return [tree, list];
}

export function prepareCategory(category, depth) {
    let children;

    if (depth && depth > 0) {
        children = category.children.map((x) => prepareCategory(x, depth - 1));
    }

    return JSON.parse(JSON.stringify({
        ...category,
        parent: category.parent ? prepareCategory(category.parent) : null,
        children,
    }));
}

export const [categoriesTreeData, categoriesListData] = walkTree(categoriesDef);
