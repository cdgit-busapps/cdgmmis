export default [{
        name: "Master Files",
        icon: "mdi-cube",
        alias: "master-files",
        children: [
            {
                name: "Vendors . Supplier",
                slugs: "item-master-location",
                route: "item-master-location",
                alias: 'item-master-location',
                icon: "mdi-note-multiple"
            },
            {
                name: "Item Management",
                slugs: "item-management",
                route: "item-management",
                alias: 'item-management',
                icon: "mdi-note-multiple",
                sub_childrens: [{
                        name: "Items and Services",
                        slugs: "item-services",
                        route: "master-files-item-management-item-services",
                        alias: 'item-services',
                        icon: "mdi-circle-medium"
                    },
                    {
                        name: "Item Master By Location",
                        slugs: "item-master-by-location",
                        route: "master-files-item-management-item-locations",
                        alias: 'item-locations',
                        icon: "mdi-circle-medium"
                    },
                    {
                        name: "Beginning Inventory",
                        slugs: "beginning-inventory",
                        route: "master-files-item-management-beginning-inventory",
                        alias: 'beginning-inventory',
                        icon: "mdi-circle-medium"
                    },
                ]
            },

        ]
    },
    {
        name: "Transaction",
        icon: "mdi-folder",
        alias: "transactions",
        children: [{
                name: "Procurements",
                slugs: "procurements",
                route: "procurements",
                alias: 'procurements',
                icon: "mdi-folder",
                sub_childrens: [{
                        name: "Purchase request",
                        slugs: "purchase-request",
                        route: "transactions-procurements-purchase-request",
                        alias: 'purchase-request',
                        icon: "mdi-circle-medium"
                    },
                    {
                        name: "Request for quotation",
                        slugs: "request-quotation",
                        route: "request-quotation",
                        alias: 'request-quotation',
                        icon: "mdi-circle-medium"
                    },
                    {
                        name: "Canvas",
                        slugs: "canvas",
                        route: "canvas",
                        alias: 'canvas',
                        icon: "mdi-circle-medium"
                    },
                    {
                        name: "Purchase order",
                        slugs: "purchase-order",
                        route: "purchase-order",
                        alias: 'purchase-order',
                        icon: "mdi-circle-medium"
                    },
                ]
            },


            {
                name: "Audit",
                slugs: "audit",
                route: "audit",
                alias: 'audit',
                icon: "mdi-note-multiple",
                sub_childrens: [{
                        name: "Purchase request",
                        slugs: "purchase-request",
                        route: "purchase-request",
                        alias: 'purchase-request',
                        icon: "mdi-circle-medium"
                    },
                    {
                        name: "Purchase orders",
                        slugs: "purchase-orders",
                        route: "purchase-orders",
                        alias: 'purchase-orders',
                        icon: "mdi-circle-medium"
                    },
                    {
                        name: "Audit",
                        slugs: "audit-page",
                        route: "audit-page",
                        alias: 'audit-page',
                        icon: "mdi-circle-medium"
                    },
                ]
            },
        ]
    },


    {
        name: "Inventory Management",
        icon: "mdi-cube",
        alias: "inventory-management",
        children: [{
                name: "Receiving Entries",
                slugs: "receiving-entries",
                route: "receiving-entries",
                alias: 'receiving-entries',
                icon: "mdi-note-multiple"
            },
            {
                name: "Stock Transfer",
                slugs: "stock-transfer",
                route: "stock-transfer",
                alias: 'stock-transfer',
                icon: "mdi-note-multiple"
            },
            {
                name: "Supply Requisition",
                slugs: "supply-requisition",
                route: "supply-requisition",
                alias: 'supply-requisition',
                icon: "mdi-note-multiple"
            },
            {
                name: "Stock Withdrawal",
                slugs: "stock-withdrawal",
                route: "stock-withdrawal",
                alias: 'stock-withdrawal',
                icon: "mdi-note-multiple"
            },
        ]
    },
    {
        name: "Location / Warehouse",
        icon: "mdi-domain",
        alias: "location-warehouse",
        children: [{
                name: "Departments",
                slugs: "Departments",
                route: "Departments",
                alias: 'Departments',
                icon: "mdi-tag-multiple"
            },
            {
                name: "Department Section",
                slugs: "department-section",
                route: "department-section",
                alias: 'department-section',
                icon: "mdi-note-multiple"
            },
            {
                name: "Location",
                slugs: "location",
                route: "location",
                alias: 'location',
                icon: "mdi-note-multiple"
            },
        ]
    },
    // {
    //   name: "Build File",
    //   icon: "mdi-folder",
    //   children: [
    //     {
    //       name: "Inventory Group",
    //       slugs: "inventory-group",
    //       route: "inventory-group",
    //       alias: 'inventory-group',
    //       icon: "mdi-note-multiple"
    //     },
    //     {
    //       name: "Item Category",
    //       slugs: "item-category",
    //       route: "item-category",
    //       alias: 'item-category',
    //       icon: "mdi-note-multiple"
    //     },
    //     {
    //       name: "Classification",
    //       slugs: "classification",
    //       route: "classification",
    //       alias: 'classification',
    //       icon: "mdi-note-multiple"
    //     },
    //     {
    //       name: "Unit",
    //       slugs: "unit",
    //       route: "unit",
    //       alias: 'unit',
    //       icon: "mdi-note-multiple"
    //     },
    //     {
    //       name: "Vendor",
    //       slugs: "vendor",
    //       route: "vendor",
    //       alias: 'vendor',
    //       icon: "mdi-note-multiple"
    //     },
    //     {
    //       name: "Terms",
    //       slugs: "terms",
    //       route: "terms",
    //       alias: 'terms',
    //       icon: "mdi-note-multiple"
    //     },
    //   ]
    // },
    {
        name: "Mailbox",
        icon: "mdi-email",
        alias: "mailbox",
        children: [{
            name: "Inbox",
            slugs: "inbox",
            route: "inbox",
            alias: 'inbox',
            icon: "mdi-inbox"
        }, ]
    },
    {
        name: "Manage Supplier",
        icon: "mdi-domain",
        alias: "manage-supplier",
        children: [{
            name: "Suppliers",
            slugs: "suppliers",
            route: "suppliers",
            alias: 'suppliers',
            icon: "mdi-note-multiple"
        }, ]
    },
]