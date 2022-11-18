const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'du75ttety', 
    api_key: '158641375226827', 
    api_secret: 'xn4njveAbh5iJ5HVsTI8qbcz460',
    secure: true
  });


module.exports = cloudinary;