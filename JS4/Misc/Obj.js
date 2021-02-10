let user = {
  isAdmin: true,
  name: "narasimha",
  id: 101,
  interested_Loc: ["usa", "india", "uk"],
};
console.log(user.isAdmin);

let { isAdmin, interested_Loc } = user;
console.log(isAdmin);
