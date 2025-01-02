import {type Handle, type HandleFetch, redirect} from "@sveltejs/kit";

// const unProtectedRoutes = ['/login', '/logout'];

// export const handle: Handle = async ({ event, resolve }) => {
    // if (unProtectedRoutes.includes(event.url.pathname)) {
    //     return resolve(event);
    // }
    //
    // const sessionId = event.cookies.get('session_id') as string;
    // if (sessionId) {
    //     return resolve(event);
    // } else {
    //     const res = await client.userMe();
    //     if (res.status === 200) {
    //         event.locals.session = res.body
    //         return resolve(event)
    //     }
    // }
    //
    // return redirect(302, "/login");
// };

// export const handleFetch = (async ({ event, request, fetch }) => {
    // if (request.url.startsWith(process.env.HOST)) {
        // clone the original request, but change the URL
        // let cookies = event.request.headers.get("cookie");

        // console.log("event session_id", event.cookies.get('session_id'))

        // request = new Request(
        //     request.url.replace(process.env.HOST, 'http://web:8000/'),
        //     request,
        // );

    // request.headers.set(
    //     'cookie',
    //     event.cookies
    //         .getAll()
    //         .filter(({ value }) => value !== '') // account for cookie that got deleted in the current request
    //         .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
    //         .join('; ')
    // );
    // }
//     return fetch(request);
// }) satisfies HandleFetch;