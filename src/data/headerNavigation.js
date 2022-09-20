export default [
    {
        title: 'Home',
        url: '',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Home 1', url: '/' },
                { title: 'Home 2', url: '/home-two' },
            ],
        },
    },
    {
        title: 'Megamenu',
        url: '',
        submenu: {
            type: 'megamenu',
            menu: {
                size: 'nl',
                columns: [
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Power Tools',
                                url: '',
                                links: [
                                    { title: 'Engravers', url: '' },
                                    { title: 'Wrenches', url: '' },
                                    { title: 'Wall Chaser', url: '' },
                                    { title: 'Pneumatic Tools', url: '' },
                                ],
                            },
                            {
                                title: 'Machine Tools',
                                url: '',
                                links: [
                                    { title: 'Thread Cutting', url: '' },
                                    { title: 'Chip Blowers', url: '' },
                                    { title: 'Sharpening Machines', url: '' },
                                    { title: 'Pipe Cutters', url: '' },
                                    { title: 'Slotting machines', url: '' },
                                    { title: 'Lathes', url: '' },
                                ],
                            },
                        ],
                    },
                    {
                        size: 6,
                        links: [
                            {
                                title: 'Hand Tools',
                                url: '',
                                links: [
                                    { title: 'Screwdrivers', url: '' },
                                    { title: 'Handsaws', url: '' },
                                    { title: 'Knives', url: '' },
                                    { title: 'Axes', url: '' },
                                    { title: 'Multitools', url: '' },
                                    { title: 'Paint Tools', url: '' },
                                ],
                            },
                            {
                                title: 'Garden Equipment',
                                url: '',
                                links: [
                                    { title: 'Motor Pumps', url: '' },
                                    { title: 'Chainsaws', url: '' },
                                    { title: 'Electric Saws', url: '' },
                                    { title: 'Brush Cutters', url: '' },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
    },
    {
        title: 'Shop',
        url: '/shop/category-grid-3-columns-sidebar',
        submenu: {
            type: 'menu',
            menu: [
                {
                    title: 'Shop Grid',
                    url: '/shop/category-grid-3-columns-sidebar',
                    submenu: [
                        { title: '3 Columns Sidebar', url: '/shop/category-grid-3-columns-sidebar' },
                        { title: '4 Columns Full', url: '/shop/category-grid-4-columns-full' },
                        { title: '5 Columns Full', url: '/shop/category-grid-5-columns-full' },
                    ],
                },
                { title: 'Shop List', url: '/shop/category-list' },
                { title: 'Shop Right Sidebar', url: '/shop/category-right-sidebar' },
                {
                    title: 'Product',
                    url: '/shop/product-standard',
                    submenu: [
                        { title: 'Product', url: '/shop/product-standard' },
                        { title: 'Product Alt', url: '/shop/product-columnar' },
                        { title: 'Product Sidebar', url: '/shop/product-sidebar' },
                    ],
                },
                { title: 'Cart', url: '/shop/cart' },
                { title: 'Checkout', url: '/shop/checkout' },
                { title: 'Order Success', url: '/shop/checkout/success' },
                { title: 'Wishlist', url: '/shop/wishlist' },
                { title: 'Compare', url: '/shop/compare' },
                { title: 'Track Order', url: '/shop/track-order' },
            ],
        },
    },
    {
        title: 'Account',
        url: '/account',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'Login', url: '/account/login' },
                { title: 'Dashboard', url: '/account/dashboard' },
                { title: 'Edit Profile', url: '/account/profile' },
                { title: 'Order History', url: '/account/orders' },
                { title: 'Order Details', url: '/account/orders/5' },
                { title: 'Address Book', url: '/account/addresses' },
                { title: 'Edit Address', url: '/account/addresses/5' },
                { title: 'Change Password', url: '/account/password' },
            ],
        },
    },
    {
        title: 'Pages',
        url: '/site/about-us',
        submenu: {
            type: 'menu',
            menu: [
                { title: 'About Us', url: '/site/about-us' },
                { title: 'Contact Us', url: '/site/contact-us' },
                { title: 'Contact Us Alt', url: '/site/contact-us-alt' },
                { title: '404', url: '/site/not-found' },
                { title: 'Terms And Conditions', url: '/site/terms' },
                { title: 'FAQ', url: '/site/faq' },
                { title: 'Components', url: '/site/components' },
                { title: 'Typography', url: '/site/typography' },
            ],
        },
    },
];
