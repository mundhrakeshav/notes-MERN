const express = require("express");
const dotenv = require("dotenv");
const notes = require("./notes");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");
const app = express();
dotenv.config();
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

// app.get("/api/notes", (req, res) => {
//     res.json(notes)
// })

// app.get("/api/notes/:id", (req, res) => {
//     const note = notes.find(n=> n._id == req.params.id)
//     res.send(note)
// })
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING ON port ${PORT} 🚀`);
});
