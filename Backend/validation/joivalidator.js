const joi =require("joi");

const validation=joi.object({
    heading:joi.string().min(2).max(15)

})

module.exports=validation