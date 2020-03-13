/*
 * 路由逻辑
 */
export default {
    /* 定义路由 */
    routes: function() {
        let routes = [];

        let files = require.context('../router', false, /\.js$/);
        files.keys().forEach(key => {
            routes.push(...files(key).default);
        });

        //404路由
        // routes.push({
        //     path: '*',
        //     name: '404',
        //     component: resolve => require(['@common/404.vue'], resolve),
        //     meta: {
        //         title: '',
        //         keepAlive: false
        //     }
        // });

        //window.log.debug('定义的路由:', routes);
        return routes;
    }
};