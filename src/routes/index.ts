import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.send(`<html>
        <head>
            <title>Hello World</title>
        </head>
        <body>
            <h1>Hello World !</h1>
        </body>
    </html>`);
});

export default router;