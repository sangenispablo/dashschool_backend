import Role from "../models/Role";
import User from "../models/User";

export const createRoles = async () => {
  try {
    const countRoles = await Role.estimatedDocumentCount();
    if (countRoles > 0) return;
    // Si no hay roles
    const values = await Promise.all([
      new Role({ name: "admin" }).save(),
      new Role({ name: "profesor" }).save(),      
      new Role({ name: "alumno" }).save(),
      //new Role({ name: "user" }).save(),
      //new Role({ name: "directivo" }).save(),
      //new Role({ name: "secretario" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};

export const createSuperUser = async () => {
  try {
    const countUser = await User.estimatedDocumentCount();
    if (countUser > 0) return;
    // busco el rol admin
    const adminRole = await Role.findOne({ name: "admin" });
    // Como no hay usuarios me creo el super user
    const superUser = new User({
      email: "admin@gmail.com",
      password: await User.encryptPassword("admin"),
      roles: [adminRole],
    });
    saveSuperUser = await superUser.save();
    console.log(saveSuperUser);
  } catch (error) {
    console.log(error);
  }
};
