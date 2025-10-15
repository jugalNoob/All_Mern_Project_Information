const express = require("express");
const router = new express.Router();

const Apigetuser=require("../controollers/GetUser/Adaavance")

const PostUser=require('../controollers/Post/Userpost')


// --- > Pagination Adavance ----------------->>
const pagbasic=require('../controollers/pagination/basice')
const pagadavance=require('../controollers/pagination/Advance')





// --- >Simple Get User Information ------------>>

// router.get("/get", Apigetuser.Apiget);
router.post("/userPost", PostUser.first);


//// ---------------->> Get User Adavance Search ing ------------------>>

router.get('/searchAdavance',Apigetuser.ApigetQuearyAdavanceRedis)


// ------------------>>>  Pagination  --------------->>
 
router.get("/search", pagbasic.ApigetPagination);

router.get("/apgthin", pagadavance.ApigetCursorPagination);

module.exports = router;