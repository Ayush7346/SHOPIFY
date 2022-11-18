const cloudinary = require('../Config/Cloudinary');


const photoUploader = (imageURL) =>{
   
   return new Promise(async (resolve,reject)  => {
       
       try{
            const obj =  await   cloudinary.uploader
                .upload(imageURL, {upload_preset: "SHOPIFY"})
                .then(result=>console.log(result));
                
                
           resolve(obj.url);
       }
       catch(err){
              
              reject(err);  
       }
       
   } )

}

const extractPublicIdFromURL = (url) =>{
    const publicId = url.split("/").pop().split(".")[0];
    return publicId;
}

module.exports = {photoUploader , extractPublicIdFromURL};
