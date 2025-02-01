import connectToMongo from "./database/db.js";
import express from "express";
import cors from "cors";
import paymentRoutes from "./routes/payment.js"; // Adjusted path for routes file

// Initialize MongoDB connection
connectToMongo();

const app = express();
const port = 2000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get("/", (req, res) => {
  res.send("Razorpay Payment Gateway Using React And Node.js");
});

app.get("/destroy", (req, res) => {
  process.exit(1)
});

app.use("/api/payment", paymentRoutes); // Use the payment routes

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
