const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;
//  mongodb connection
console.log(process.env.MONGODB_URL);
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect to Database"))
  .catch((err) => console.log(err));

//schema
const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
  confirmPassword: String,
  image: String,
});

// models
const userModel = mongoose.model("user", userSchema);

// api routes
app.get("/", (req, res) => {
  res.send("server is running");
});
/* sign up API */
app.post("/signup", async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await userModel.findOne({ email: email });

    if (existingUser) {
      res.send({ message: "Email ID is already registered", alert: false });
    } else {
      const newUser = new userModel(req.body);
      await newUser.save();
      res.send({ message: "Successfully registered", alert: true });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "An error occurred" });
  }
});
/* login API */

/* server running */
app.listen(PORT, () => console.log("server is running at port:" + PORT));
