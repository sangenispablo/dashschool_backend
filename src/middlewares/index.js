import {
  verifyToken,
  isAdmin,
  isProfesor,
  isAlumno,
  isAdminOrProfesor,
} from "../middlewares/authJwt";
import { checkDuplicateEmail } from "../middlewares/verifyRegister";

export { verifyToken, isAdmin, isProfesor, isAlumno, isAdminOrProfesor, checkDuplicateEmail };
