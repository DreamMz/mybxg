require.config({
    baseUrl: "/node_modules",
    paths: {
        jquery: "jquery/dist/jquery",
        cookie: "jquery.cookie/jquery.cookie",
        template: "art-template/lib/template-web",
        bootstrap: "bootstrap/dist/js/bootstrap",
        nprogress: "nprogress/nprogress",
        datepicker: "bootstrap-datepicker/dist/js/bootstrap-datepicker"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        }
    }
})

// require.config({
//     baseUrl:'/node_modules',
//     paths:{
//         jquery:"jquery/dist/jquery",
//         cookie:"jquery.cookie/jquire.cookie"
//     }
// })