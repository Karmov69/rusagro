/*=========================================================================================
  File Name: sidebarItems.js
  Description: Sidebar Items list. Add / Remove menu items from here.
  Strucutre:
          url     => router path
          name    => name to display in sidebar
          slug    => router path name
          icon    => Feather Icon component/icon name
          tag     => text to display on badge
          tagColor  => class to apply on badge element
          i18n    => Internationalization
          submenu   => submenu of current item (current item will become dropdown )
                NOTE: Submenu don't have any icon(you can add icon if u want to display)
          isDisabled  => disable sidebar item/group
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


export default [
  {
    header: 'Apps',
    icon: 'PackageIcon',
    i18n: 'Apps',
    items: [
      {
        url: '/ether-1',
        name: 'ether-1',
        slug: 'ether-1',
        icon: 'VideoIcon',
        i18n: 'Ether1'
      },
      {
        url: 'ether-2',
        name: 'ether-2',
        slug: 'ether-2',
        icon: 'VideoIcon',
        i18n: 'Ether2'
      },
      {
        url: '/ether-3',
        name: 'ether-3',
        slug: 'ether-3',
        icon: 'VideoIcon',
        i18n: 'Ether3'
      },
      {
        url: '/apps/eCommerce/shop',
        name: 'Shop',
        slug: 'Shop',
        icon: 'ShoppingCartIcon',
        i18n: 'Shop'
      },
      {
        url: '/charts-and-maps/charts/apex-charts',
        name: 'Rating',
        icon: 'BarChart2Icon',
        slug: 'extra-component-charts-apex-charts',
        i18n: 'Rating'
      },
      {
        url: '/ui-elements/card/basic',
        name: 'Сharity',
        icon: 'CreditCardIcon',
        slug: 'basic-cards',
        i18n: 'Сharity'
      },
      {
        url: '/apps/calendar/vue-simple-calendar',
        name: 'Calendar',
        slug: 'calendar-simple-calendar',
        icon: 'CalendarIcon',
        tagColor: 'success',
        i18n: 'Calendar'
      }
    ]
  }
]

