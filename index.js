const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize-video", "desktop", "7672", {
  dialect: "mysql",
  host: "192.168.1.61",
  port: 3306,
});

const { DataTypes } = Sequelize;

const User = sequelize.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 21,
    },
    WittCodeRocks: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

User.sync()
  .then((data) => {
    console.log("table and model synced successfully!");
    return User.create({
      username: "tungByCreateNè",
      password: "7672",
      age: 24,
      WittCodeRocks: true,
    });
  })
  .then((data) => {
    data.decrement({ age: 4 });
    return data.save();
  })
  .then((data) => {
    console.log("DESTROYYYY", data.toJSON());
  })
  .catch((err) => {
    console.log("sync fail: ", err);
  });
