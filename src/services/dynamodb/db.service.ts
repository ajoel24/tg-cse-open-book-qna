import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

AWS.config.update({
  accessKeyId: process.env["AWS_ACCESS_KEY_ID"] as string,
  secretAccessKey: process.env["AWS_SECRET_ACCESS_KEY"] as string,
  region: process.env["AWS_S3_BUCKET_REGION"] as string,
});

const dynamoDB = new AWS.DynamoDB();

export default dynamoDB;
