<<<<<<< HEAD
import { config } from "dotenv";

config();

export default {
  mongoUri: process.env.MONGODB_URI,
  serverPort: process.env.SERVER_PORT || 4000,
=======
export default {
  SECRET: "rollingc0de",
  EXPIRE: "24h",
>>>>>>> a9435b39a69bfa8b02421bb28fee32f937429c7a
};
