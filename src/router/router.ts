export default [
  {
    path: "/",
    component: () => import("@/views/layout.vue"),
    redirect: "/home",
    meta: {
      title: "首页",
      breadHidden:true,
    },
    hidden: false,
    children: [
      {
        path: "/home",
        component: () => import("@/views/home.vue"),
        meta: {
          title: "home1",
        },
        hidden: false,
        icon: "house",
      },
    ],
  },
  {
    path: "/bigscreen",
    component: () => import("@/views/bigScreen.vue"),
    meta: {
      title: "数据大屏",
    },
    hidden: false,
  },
  {
    path: "/acl",
    component: () => import("@/views/layout.vue"),
    hidden: false,
    redirect:"/acl/user",
    meta: {
      title: "权限管理",
    },
    children: [
      {
        path: "/acl/user",
        component: () => import("@/views/acl/userManage.vue"),
        hidden: false,
        meta: {
          title: "用户管理",
        },
        icon:"Notification"
      },
      {
        path: "/acl/role",
        component: () => import("@/views/acl/roleManage.vue"),
        hidden: false,
        meta: {
          title: "角色管理",
        },
        icon:"Setting"
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
    meta: {
      title: "登录",
    },
    hidden: true,
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("@/views/notFound.vue"),
    meta: {
      title: "404",
    },
    hidden: true,
  },
];
