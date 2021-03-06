'use strict'

import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

import config from '../../config/env/development';

aws.config.update({
    secretAccessKey: config.awsS3Keys.AWS_SECRET_ACCESS,
    accessKeyId: config.awsS3Keys.AWS_ACCESSKEY,
    region:config.awsS3Keys.REGION,
})

const s3 = new aws.S3();

var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: '295-images',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: "Major-Project-Images"});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString())
    }
  })
})

module.exports = upload;