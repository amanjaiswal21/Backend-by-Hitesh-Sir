import {v2 as cloudinary} from "cloudinary/utils"
import fs from "fs"
          
cloudinary.config({ 
  cloud_name:process.env.CLOUDINAARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env. CLOUDINARY_API_SECRET
});
const uploadOnCloudinary=async (localFilePath)=>{
    try{
        if(!localFilePath) return null
     cloudinary.uploader.upload(localFilePath,{
        resource_type:"auto"
     })
     //file has been uploaded successfully
     console.log("file is uploaded in cloudinary",response.url);
     return response;
    }
    catch(error){
       fs.unlinkSync(localFilePath) //removed the locally saved temporary file as the upload operation got failed

    }
}

export default uploadOnCloudinary;