exports.getHome = (req, res, next) => {
  console.log(process.env.name);

  return res.render("home", {
    name: process.env,
    nomPage: "Acceuil",
  });
};
