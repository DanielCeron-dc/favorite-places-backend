import express from "express";

import routes from "./routes";

const App = express();


App.use(express.json());
App.use(routes);

App.listen(5000, () => {
    console.log("Server is running on port 5000");
});