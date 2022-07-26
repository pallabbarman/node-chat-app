// get login page
const getLogin = (req, res, next) => {
    res.render("index", { title: "Login - Chat Application" });
};

module.exports = { getLogin };
