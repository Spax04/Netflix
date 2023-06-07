import mongoose , { Schema }  from 'mongoose'
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: {
      type: String,
      default: 'https://i.pravatar.cc/300',
      required: true
    },
    myList: [{type:Schema.Types.ObjectId,ref:"Content"}]
  },
  { timestamps: true }
)
const User = mongoose.model('User', userSchema)
export default User
