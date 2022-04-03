import Role from "../models/Role";

export const createRoles = async () => {
  try {
    const countRoles = await Role.estimatedDocumentCount();
    if (countRoles > 0) return;
    // Si no hay roles
    const values = await Promise.all([
      new Role({ name: "admin" }).save(),
      new Role({ name: "user" }).save(),
      new Role({ name: "profesor" }).save(),
      new Role({ name: "preceptor" }).save(),
      new Role({ name: "directivo" }).save(),
      new Role({ name: "secretario" }).save(),
      new Role({ name: "alumno" }).save(),
    ]);
    console.log(values);
  } catch (error) {
    console.log(error);
  }
};
