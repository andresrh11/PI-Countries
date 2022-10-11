const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "activity",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        defaultValue: "",
      },
      dificultad: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          min: 1.0,
          max: 5.0,
        },
      },
      duracion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      temporada: {
        type: DataTypes.ENUM("Verano", "Invierno", "Otoño", "Primavera"),
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
