const dotenv = require("dotenv");
const app = require("./app");

// config env file
dotenv.config();

app.listen(process.env.PORT, () => {
    console.log(`app listing to port ${process.env.PORT}`);
});
