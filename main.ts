// import Application class from Oak module
import {Application as OakApp} from "https://deno.land/x/oak/mod.ts";

// import our middleware
import {authMiddleware} from "./middlewares/auth-middleware.ts";

// import our router class
import {LoremIpsumRouter} from "./routes/lorem-ipsum-router.ts";

// create main function of our program
export function runHttp(): void {

    // create new instance of Oak Application
    const app = new OakApp();

    // add our middleware to our application
    app.use(authMiddleware);

    // create lorem ipsum router
    const loremIpsumRouter = new LoremIpsumRouter();

    // add handler to our application
    app.use(loremIpsumRouter.routes());
    app.use(loremIpsumRouter.allowedMethods());

    // start our application and use promise to show server started or not
    app.listen({port: 8000});

    // show message in console
    console.log("Server started on port 8000");
}

// run main function if this file is executed directly
// (not imported as a module)
if (import.meta.main) {
    runHttp();
}
