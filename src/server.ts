import app from "./index";
import { config } from "dotenv";
config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server ONLINE no PATH http://localhost:${PORT}`);
});
