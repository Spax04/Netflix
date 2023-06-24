import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import { isAuth } from '../utils.js'
import User from '../models/userSchema.js'

const userRouter = express.Router()

// updating user favorit list
userRouter.post(
  '/',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    try {

      const user = await User.findOne({ _id: req.body._id })
      if (user) {
        // Update the user object with the new data
        user.myList = req.body.myList // Assuming 'name' is the field you want to update

        // Save the updated user
        const updatedUser = await user.save()

        res.status(200).send(updatedUser) // Return the updated user object
      } else {
        res.status(404).send({ message: 'User not found' })
      }
    } catch {
      res.status(406).send({ message: 'Invalid user' })
    }
  })
)
// userRouter.post('/new-item', isAuth,
// expressAsyncHandler(async (req, res) => {

// }));

export default userRouter
