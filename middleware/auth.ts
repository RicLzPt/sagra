export default defineNuxtRouteMiddleware(
    (to, from) => {
        const isLoggedIn = true;
        console.log("auth middleware");

        // if(isLoggedIn) {
        //     return navigateTo(to.fullPath);
        // }
        // return navigateTo('/');
    }
);