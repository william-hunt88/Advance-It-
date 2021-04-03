const Show = require("./Show");
const User = require("./User");
const Comment = require("./comment");

User.hasMany(Show, {
  foreignKey: "user_id",
});

Show.belongsTo(User, {
  foreignKey: "user_id",
});

// User.belongsToMany(Show, {
//   foreignKey: "user_id",
// });

Comment.belongsTo(Show, {
  foreignKey: "show_id",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Show, {
  foreignKey: "show_id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
});

Show.hasMany(Comment, {
  foreignKey: "show_id",
});

module.exports = { Show, User, Comment };
