const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); //비밀번호를 저장할 때 암호화 할 library

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
    default: false,
  },
  pic: {
    type: String,
    required: true,
    default:
      "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  },
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
// 입력받은 비밀번호를 암호화 하여 저장합니다.
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next;
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

//User에 userSchema를 모델에 적용해줍니다.
const User = mongoose.model("User", userSchema);
module.exports = User;
