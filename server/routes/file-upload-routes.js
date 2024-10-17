'use strict';

const express = require('express');
const {upload} = require('../helpers/filehelper');
const {singleFileUpload, multipleFileUpload, getallSingleFiles, getMultipleFilesByTelegramId, singleSignUp, getallMultiFiles, pricing,
    registration, logination, createSubscription, handlePaymentCallback, chooseSocial,subscriptionStatus,getSubscription,
    fetchCompletedPayments
} = require("../controllers/fileuploaderController");
const {requireSignin} = require("../middlewares/index")
const router = express.Router();


router.post('/singleFile', upload.single('file'), singleFileUpload);
router.post('/multipleFiles', upload.array('files'), multipleFileUpload);
router.post('/getSingleFiles', getallSingleFiles);
router.get('/getMultipleFiles', getMultipleFilesByTelegramId);
router.get('/getMultiFiles',getallMultiFiles);
router.post('/signuping', singleSignUp);

module.exports = {
    routes: router
}