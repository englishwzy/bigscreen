export default [
    {
        path:"/",
        name:"layout",
        component:()=>import("@/views/layout.vue")
    },
    {
        path:"/login",
        name:"login",
        component:()=>import("@/views/login.vue")
    },
    {
        path:"/404",
        name:"notFound",
        component:()=>import("@/views/notFound.vue")
    }
]