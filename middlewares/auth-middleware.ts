export async function authMiddleware(ctx, next) {

    // get authorization header
    const authHeader = ctx.request.headers.get('authorization');

    // check if authorization header exists and starts with Bearer
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        ctx.response.status = 401;
        ctx.response.body = {message: 'Unauthorized'};
        return;
    }

    // get token from authorization header
    const token = authHeader.split(' ')[1];

    // check if token is valid (in this case token is '123456789')
    if (token !== '123456789') {
        ctx.response.status = 403;
        ctx.response.body = {message: 'Forbidden'};
        return;
    }

    // call next middleware
    await next();
}