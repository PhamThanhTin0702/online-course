import AWS from 'aws-sdk'

AWS.config.update({ 
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY,
    region: process.env.NEXT_PUBLIC_AWS_REGION,
    signatureVersion: 'v4'
});

const s3 = new AWS.S3()
const myBucket = process.env.NEXT_PUBLIC_AWS_BUCKET

export const useAWS = () => {

    const GetURL = (fileURL, expires) => {
        let url = s3.getSignedUrl('getObject', {
            Bucket: myBucket,
            Key: fileURL,
            Expires: expires
        });

        return url
    }

    return {GetURL: GetURL}
}