const joi=require('joi');

const validation=joi.object({
    heading:joi.string().min(2).max(15).required(),
    description:joi.string(),
    username:joi.string().required(),
    image:joi.string()

})

module.exports=validation