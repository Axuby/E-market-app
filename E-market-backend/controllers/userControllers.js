const User = require("../models/userModel");

exports.signup = async (req, res) => {
  console.log(req.body)
  const user = new User(req.body);
  try {
    await user.save();

    res.status(201).json({
      message: "User was created",
      status: "success",
      data: { 
        user
       }
    });
  } catch (err) {
    res.status(400).json({
      message: "Couldnt create User",
      status: "Fail",
      Info: err
    });
  }
}
