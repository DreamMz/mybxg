require.config({
    baseUrl: "/node_modules",
    paths: {
        jquery: "jquery/dist/jquery",
        cookie: "jquery.cookie/jquery.cookie",
        template: "art-template/lib/template-web",
        bootstrap: "bootstrap/dist/js/bootstrap",
        nprogress: "nprogress/nprogress",
        datepicker: "bootstrap-datepicker/dist/js/bootstrap-datepicker",
        validation: "jquery-validation/dist/jquery.validate",
        form: 'jquery-form/dist/jquery.form.min',
        uploadify: '/assets/js/libs/jquery.uploadify',
        locales: "bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min"

    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        uploadify: {
            deps: ["jquery"]
        },
        locales: {
            deps: ["jquery", "datepicker"]
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