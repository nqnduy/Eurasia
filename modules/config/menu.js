
export const menus = [
    {
        path: "/admin/pages",
        key: "admin-pages",
        activeRegexes: [
            /^\/admin\/pages.*/,
        ],
        name: "Page",
        meta: { icon: "layout", title: "Page" },
        permissions: ['page_list'],
        hidden: false,
        children: []
    },
    {
        path: "/admin/news",
        key: "admin-news",
        activeRegexes: [
            /^\/admin\/news.*/,
            /^\/admin\/news\/posts.*/,
            /^\/admin\/news\/categories.*/,
            /^\/admin\/news\/tags.*/,
        ],
        name: "News",
        meta: { icon: "file", title: "News" },
        permissions: ['post_list', 'post_category_list', 'tag_list'],
        hidden: false,
        children: [{
            path: "/admin/news/posts",
            key: "/admin/news/posts",
            activeRegexes: [
                /^\/admin\/news\/posts.*/,
            ],
            name: "Post",
            permissions: ['post_list'],
            hidden: false,
            meta: { icon: "", title: "Post" },
        }, {
            path: "/admin/news/categories",
            key: "/admin/news/categories",
            activeRegexes: [
                /^\/admin\/news\/categories.*/,
            ],
            name: "Category",
            permissions: ['post_category_list'],
            hidden: false,
            meta: { icon: "", title: "Category" },
        }, {
            path: "/admin/news/tags",
            key: "/admin/news/tags",
            activeRegexes: [
                /^\/admin\/news\/tags.*/,
            ],
            name: "Tag",
            permissions: ['tag_list'],
            hidden: false,
            meta: { icon: "", title: "Tag" },
        }]
    },
    {
        path: "/admin/recruitments",
        key: "admin-recruitments",
        activeRegexes: [
            /^\/admin\/recruitments.*/,
            /^\/admin\/recruitments\/jobs.*/,
            /^\/admin\/recruitments\/job-applicants.*/,
            /^\/admin\/recruitments\/job-contracts.*/,
            /^\/admin\/recruitments\/job-departments.*/,
        ],
        name: "Recruitment",
        meta: { icon: "paper-plane", title: "Recruitment" },
        permissions: ['job_list', 'job_applicant_list', 'job_department_list', 'job_contract_list'],
        hidden: false,
        children: [{
            path: "/admin/recruitments/jobs",
            key: "/admin/recruitments/jobs",
            activeRegexes: [
                /^\/admin\/recruitments\/jobs.*/,
            ],
            name: "Job",
            permissions: ['job_list'],
            hidden: false,
            meta: { icon: "", title: "Job" },
        }, {
            path: "/admin/recruitments/job-applicants",
            key: "/admin/recruitments/job-applicants",
            activeRegexes: [
                /^\/admin\/recruitments\/job-applicants.*/,
            ],
            name: "Applicant",
            permissions: ['job_applicant_list'],
            hidden: false,
            meta: { icon: "", title: "Applicant" },
        }, {
            path: "/admin/recruitments/job-contracts",
            key: "/admin/recruitments/job-contracts",
            activeRegexes: [
                /^\/admin\/recruitments\/job-contracts.*/,
            ],
            name: "Contract",
            permissions: ['job_contract_list'],
            hidden: false,
            meta: { icon: "", title: "Contract" },
        }, {
            path: "/admin/recruitments/job-departments",
            key: "/admin/recruitments/job-departments",
            activeRegexes: [
                /^\/admin\/recruitments\/job-departments.*/,
            ],
            name: "Department",
            permissions: ['job_department_list'],
            hidden: false,
            meta: { icon: "", title: "Department" },
        }]
    },
    {
        path: "/admin/customers",
        key: "admin-customers",
        activeRegexes: [
            /^\/admin\/customers.*/,
        ],
        name: "Customer",
        meta: { icon: "user", title: "Customer" },
        permissions: ['customer_list', 'customer_add'],
        hidden: false,
        children: [{
            path: "/admin/customers",
            key: "/admin/customers",
            activeRegexes: [
                /^\/admin\/customers.*/,
            ],
            name: "List",
            permissions: ['customer_list'],
            hidden: false,
            meta: { icon: "", title: "List" },
        },
        {
            path: "/admin/customers/create",
            key: "/admin/customers/create",
            activeRegexes: [
                /^\/admin\/customers\/create.*/,
            ],
            name: "Create",
            permissions: ['customer_add'],
            hidden: false,
            meta: { icon: "", title: "Create" },
        },]
    },
    {
        path: "/admin/contacts",
        key: "admin-contacts",
        activeRegexes: [
            /^\/admin\/contacts.*/,
        ],
        name: "Contact",
        meta: { icon: "phone", title: "Contact" },
        permissions: ['contact_list', 'contact_add'],
        hidden: false,
        children: [{
            path: "/admin/contacts",
            key: "/admin/contacts",
            activeRegexes: [
                /^\/admin\/contacts.*/,
            ],
            name: "List",
            permissions: ['contact_list'],
            hidden: false,
            meta: { icon: "", title: "List" },
        },
        {
            path: "/admin/contacts/create",
            key: "/admin/contacts/create",
            activeRegexes: [
                /^\/admin\/contacts\/create.*/,
            ],
            name: "Create",
            permissions: ['contact_add'],
            hidden: false,
            meta: { icon: "", title: "Create" },
        },]
    },
    {
        path: "/admin/subscribers",
        key: "admin-subscribers",
        activeRegexes: [
            /^\/admin\/subscribers.*/,
        ],
        name: "Subscriber",
        meta: { icon: "user-plus", title: "Subscriber" },
        permissions: ['subscriber_list', 'contact_add'],
        hidden: false,
        children: [{
            path: "/admin/subscribers",
            key: "/admin/subscribers",
            activeRegexes: [
                /^\/admin\/subscribers.*/,
            ],
            name: "List",
            permissions: ['subscriber_list'],
            hidden: false,
            meta: { icon: "", title: "List" },
        },
        {
            path: "/admin/subscribers/create",
            key: "/admin/subscribers/create",
            activeRegexes: [
                /^\/admin\/subscribers\/create.*/,
            ],
            name: "Create",
            permissions: ['subscriber_add'],
            hidden: false,
            meta: { icon: "", title: "Create" },
        },]
    },
    {
        path: "/admin/places",
        key: "admin-places",
        activeRegexes: [
            /^\/admin\/places.*/,
        ],
        name: "Place",
        meta: { icon: "map-pin", title: "Place" },
        permissions: ['place_list', 'place_add'],
        hidden: false,
        children: [{
            path: "/admin/places",
            key: "/admin/places",
            activeRegexes: [
                /^\/admin\/places.*/,
            ],
            name: "List",
            permissions: ['place_list'],
            hidden: false,
            meta: { icon: "", title: "List" },
        },
        {
            path: "/admin/places/create",
            key: "/admin/places/create",
            activeRegexes: [
                /^\/admin\/places\/create.*/,
            ],
            name: "Create",
            permissions: ['place_add'],
            hidden: false,
            meta: { icon: "", title: "Create" },
        },]
    },
    {
        path: "/admin/zones",
        key: "admin-zones",
        activeRegexes: [
            /^\/admin\/zones.*/,
            /^\/admin\/zones\/provinces.*/,
            /^\/admin\/zones\/districts.*/,
            /^\/admin\/zones\/wards.*/,
        ],
        name: "Zone",
        meta: { icon: "map", title: "Zone" },
        permissions: ['zone_province_list', 'zone_district_list', 'zone_ward_list'],
        hidden: false,
        children: [
        {
            path: "/admin/zones/provinces",
            key: "/admin/zones/provinces",
            activeRegexes: [
                /^\/admin\/zones\/provinces.*/,
            ],
            name: "Province",
            permissions: ['zone_province_list'],
            hidden: false,
            meta: { icon: "", title: "Province" },
        }, {
            path: "/admin/zones/districts",
            key: "/admin/zones/districts",
            activeRegexes: [
                /^\/admin\/zones\/districts.*/,
            ],
            name: "District",
            permissions: ['zone_district_list'],
            hidden: false,
            meta: { icon: "", title: "District" },
        },
        {
            path: "/admin/zones/wards",
            key: "/admin/zones/wards",
            activeRegexes: [
                /^\/admin\/zones\/wards.*/,
            ],
            name: "Ward",
            permissions: ['zone_ward_list'],
            hidden: false,
            meta: { icon: "", title: "Ward" },
        }]
    },
    {
        path: "/admin/users",
        key: "admin-users",
        activeRegexes: [
            /^\/admin\/users.*/,
            /^\/admin\/roles.*/,
            /^\/admin\/setting.*/,
        ],
        name: "Admin",
        meta: { icon: "admin", title: "Admin" },
        permissions: ['user_list', 'role_list'],
        hidden: false,
        children: [
            {
                path: "/admin/users",
                key: "/admin/users",
                activeRegexes: [
                    /^\/admin\/users.*/,
                ],
                name: "User",
                permissions: ['user_list'],
                hidden: false,
                meta: { icon: "", title: "User" },
            },
            {
                path: "/admin/roles",
                key: "/admin/roles",
                activeRegexes: [
                    /^\/admin\/roles.*/,
                ],
                name: "Role",
                permissions: ['role_list'],
                hidden: false,
                meta: { icon: "", title: "Role" },
            },
            {
                path: "/admin/setting",
                key: "/admin/setting",
                activeRegexes: [
                    /^\/admin\/setting.*/,
                ],
                name: "Setting",
                permissions: ['setting_list', 'setting_edit'],
                hidden: false,
                meta: { icon: "", title: "Setting" },
            }
        ]
    },
    {
        path: "/admin/activities",
        key: "admin-activities",
        activeRegexes: [
            /^\/admin\/pages.*/,
        ],
        name: "Activities",
        meta: { icon: "layout", title: "Activities" },
        permissions: ['activity_list'],
        hidden: false,
        children: []
    },
]