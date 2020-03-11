exports.getErrorPage = (req, res, next) => {
    res.status(404).render('404', {
        pageTitle: "Oops. Page not Found.", 
        pageNotFound: "Oops. Page not Found. Try Something Else.",
        myVariable: "Hello World!",
        path: ""
    } );
}