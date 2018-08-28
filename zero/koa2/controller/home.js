module.exports = {
    index: async (ctx, next) => {
        await ctx.render('home/index', {
            title: 'iKcamp欢迎您'
        })
    },
    home: async (ctx, next) => {
        ctx.response.body = '<h1>HOME page</h1>'
        next();
    },
    homeParams: async (ctx, next) => {
        console.log(ctx.params)
        ctx.response.body = '<h1>HOME page /:id/:name</h1>'
    },
    login: async (ctx, next) => {
        await ctx.render('home/login', {
            btnName: 'GoGo'
        })
    },
    test: async (ctx, next) => {
        ctx.send({
            status: 'success',
            data: 'hello ikcmap'
        })
        next();
    },
    register: async (ctx, next) => {
        const {
            app
        } = ctx;
        let params = ctx.request.body;
        let name = params.name;
        let password = params.password;
        let res = await app.service.home.register(name, password);
        if (res.status == 0) {
            ctx.state.title = "个人中心";
            await ctx.render('home/success', res.data);
        } else {
            await ctx.render('home/login', res.data);
        }
    }
}