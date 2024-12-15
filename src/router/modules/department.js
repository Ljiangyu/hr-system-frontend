import layout from "@/layout"
export default {
    path: "/department",
    component: layout,
    children: [
        {
            path: "",
            // 按需加载或者是懒加载
            component: () => import("@/views/department"),
            name: "Department",
            meta: { title: "部门管理", icon: "el-icon-s-help" }
        }
    ]
}