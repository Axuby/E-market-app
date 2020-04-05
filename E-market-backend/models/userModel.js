const mongoose = require('mongoose')
const crypto = require('crypto');
const uuidv1 = require('uuid')

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        maxlength:32
      },

      username: {
        type: String,
        required: true,
       
      },

      email: {
        type: String,
        required: true,
        unique: true,
         lowerCase:true,
         unique:32
      },

      hashed_password: {
        type: String,
        required:[ true,"Please input a correct password"],
        minlength:8,
      },
  
      about:{
     type:String,
      trim:true,
     
      },
      salt:String,
      role:{
        type:Number,
        default:0
      },
      history:{
        type:Array,
        default:[]
      },
      },
      {timestamps:true}
)

//virtual field
userSchema.virtual('password')
.set(function(password) {
  this._password = password
  this.salt = uuidv1()
  this.hashed_password = this.encryptPassword(password)
})
.get(function(){
  return this._password
});

userSchema.methods = {
  encryptPassword: function(){
    if(!password) return "";
    try {
      return crypto.createHmac('sha1', this.salt).update(password).digest("hex");
    } catch (error) {
      return "";
    }
  }
}

const User = mongoose.model('User',userSchema)

module.exports = User;