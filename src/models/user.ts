import mongoose, {Schema, models} from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: [false, "Email is required"],
    match: [/\S+@\S+\.\S+/, "Email is invalid"],
  },
  password: {
    type: String,
    required: [false, "Password is required"],
    minlength: [8, "Password must be at least 8 characters long"],
  },
  name: {
    type: String,
    required: [false, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
  },
  username: {
    type: String,
    required: [false, "Username is required"],
    minlength: [3, "Username must be at least 3 characters long"],
  },
  phone: {
    type: String,
    required: [false, "Phone is required"],
    minlength: [10, "Phone must be at least 10 characters long"],
  },
  address: {
    type: String,
    required: [false, "Address is required"],
    minlength: [3, "Address must be at least 3 characters long"],
  },
  city: {
    type: String,
    required: [false, "City is required"],
    minlength: [3, "City must be at least 3 characters long"],
  },
  state: {
    type: String,
    required: [false, "State is required"],
    minlength: [2, "State must be at least 2 characters long"],
  }
});

const User = models.User || mongoose.model("User", userSchema);
export default User;