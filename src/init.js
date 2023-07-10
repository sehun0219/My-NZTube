import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = process.env.PORT || 4000;
const handlePort = () => {
  console.log(`✅ Server is listening to http://localhost:${PORT}`);
};
app.listen(PORT, handlePort);
