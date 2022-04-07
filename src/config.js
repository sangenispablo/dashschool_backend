import { config } from "dotenv";

<<<<<<< HEAD
// Ejecuto config para que pueda meterme en el .env
=======
>>>>>>> 3b593b8d96e67f1ee1b6992be4660c893c055a5e
config();

export default {
  mongoUri: process.env.MONGODB_URI,
  serverPort: process.env.SERVER_PORT || 4000,
  SECRET: "rollingc0de",
  EXPIRE: "24h",
};
