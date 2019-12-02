module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    //let body = req.body ? JSON.parse(req.body) : {};
    if ((req.query.salutation && req.query.firstName && req.query.lastName) || (req.body && (req.body.salutation && req.body.firstName && req.body.lastName))) {
        let firstName = req.query.firstName ? req.query.firstName : req.body.firstName;
        let lastName = req.query.lastName ? req.query.lastName : req.body.lastName;
        let salutaion = req.query.salutaion ? req.query.salutaion : req.body.salutaion;

        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + salutaion + " " + firstName + " " + lastName
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body " + req.body
        };
    }
};