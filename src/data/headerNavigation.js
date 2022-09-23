export default [
    {
        title: 'Home',
        url: '',
    },
    {
        title: 'Shop',
        url: '/shop',
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
    },
];
