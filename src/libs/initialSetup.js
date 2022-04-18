import User from "../models/User";

export const createSuperUser = async () => {
  try {
    const countUser = await User.estimatedDocumentCount();
    if (countUser > 0) return;    
    // Como no hay usuarios me creo el super user
    const superUser = new User({
      email: "admin@gmail.com",
      password: await User.encryptPassword("admin"),
      rol: "admin",
      status: true,
    });
    await superUser.save();
    console.log("Super User creado");
  } catch (error) {
    console.log(error);
  }
};
