import express from "express";
const router = express.Router();
router.get("/", (req,res) => {
    res.send('this works');

} );


// http://localhost:8080/posts
// all the routes that lead to post in our social media app
export default router;
// problem not getting displayed fix it