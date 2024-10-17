'use strict'
const SingleFile = require('../models/singlefile');
const MultipleFile = require('../models/multiplefile')
const socialPage = require('../models/socialfile')
const SignUp = require('../models/signupfile');


const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const axios = require("axios");


const chooseSocial = async (req, res) => {
    try {
        const socialData = await socialPage.find(); // Fetch all documents from the collection
        res.status(200).json(socialData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

// const usering = async (req, res) => {
//         const { telegramID } = req.body;
//
//         try {
//             let user = await User.findOne({ telegramID });
//             if (!user) {
//                 // Create new user if not found
//                 user = new User({ telegramID });
//                 await user.save();
//             }
//
//             res.status(201).json({ message: 'Telegram ID saved successfully' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ error: 'Error saving Telegram ID' });
//         }
// };

const singleSignUp = async (req, res, next) => {
    try {
        const signuping = new SignUp({
            Name: req.body.Name,
            phone: req.body.phone,
        });
        await signuping.save();
        res.status(201).send('SignUp Uploaded Successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const singleFileUpload = async (req,res,next) => {
    try{
        const file = new SingleFile ({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2)
        });
        await file.save();
        res.status(201).send('File Uploaded Successfully');
    } catch(error){
        res.status(400).send(error.message);
    }
}

const multipleFileUpload = async (req,res,next) => {
    try{
        let filesArray = []
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file);
        })

        let telegramId = req.body.telegram_id;
        if (telegramId && !isNaN(telegramId)) {
            telegramId = parseInt(telegramId, 10); // Valid number
        } else {
            telegramId = null; // Invalid or not provided, set to null
        }

        const multipleFiles = new MultipleFile({
            Name: req.body.Name,
            condition: req.body.condition,
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            price:req.body.price,
            carplate: req.body.carplate,
            fuel: req.body.fuel,
            engine: req.body.fuel === 'Electric' ? null : req.body.engine,
            transmission: req.body.transmission,
            color: req.body.color,
            milage: req.body.milage,
            files: filesArray,
            telegram_username: req.body.telegram_username,
            telegram_id: telegramId,
            checked: req.body.checked === 'true'
        });
        await multipleFiles.save();
        res.status(201).send('Files Uploaded Successfully');
    } catch (error){
        res.status(400).send(error.message)
    }
}

const getallSingleFiles = async (req,res,next) => {
    try{
        const files = await SingleFile.find();
        res.status(200).send(files);
    } catch(error){
        res.status(400).send(error.message);
    }
}

const getMultipleFilesByTelegramId = async (req, res, next) => {
    try {
        const { telegram_id } = req.query;  // Extracting the telegram_id from the request query
        const files = await MultipleFile.find({ telegram_id }).limit(10).exec();  // Fetching files where telegram_id matches
        if (!files || files.length === 0) {
            return res.status(404).send("No files found for this Telegram ID");
        }
        res.status(200).send(files);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const fileSizeFormatter = (bytes,decimal) => {
    if(bytes === 0){
        return  '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + '-' + sizes[index]
}

const saveReferral = async (userId, referrerId) => {
    try {
        const referral = new Referral({ userId, referrerId });
        await referral.save();
    } catch (error) {
        console.error('Error saving referral:', error);
    }
}

const getReferrals = async (userId) => {
    try {
        const referrals = await Referral.find({ referrerId: userId });
        return referrals;
    } catch (error) {
        console.error('Error fetching referrals:', error);
        return [];
    }
};

const getallMultiFiles = async (req, res, next) => {
    try {
        const files = await MultipleFile.find(); // Fetch all files
        if (!files || files.length === 0) {
            return res.status(404).send("Files not found");
        }
        res.status(200).send(files);
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const getReferrer = async (userId) => {
    try {
        const referrer = await Referral.findOne({ userId });
        return referrer ? referrer.referrerId : null;
    } catch (error) {
        console.error('Error fetching referrer:', error);
        return null;
    }
};

module.exports = {
    singleFileUpload,
    multipleFileUpload,
    getallSingleFiles,
    getMultipleFilesByTelegramId,
    singleSignUp,
    saveReferral,
    getReferrals,
    getReferrer,
    getallMultiFiles,
    chooseSocial,
}
