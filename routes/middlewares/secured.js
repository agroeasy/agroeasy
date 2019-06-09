export default function () {
    return function secured (req, res, next) {
        if (req.user) { return next(); }
        req.session.returnTo = req.originalUrl;
        res.status(401).send({ status: "You don't have the required permission" });
    };
}
