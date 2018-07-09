module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("user", {
      // Giving the user model a name of type STRING
      // id will be auto assigned
      userFirstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      userLastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      userEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        isEmail: true
        }
      },
      userNickName : {
        type: DataTypes.STRING,
        allowNull: false
      },
      userAvatar : {
        type: DataTypes.STRING,
        allowNull: false
      },
      userBalance: {
          type: DataTypes.DECIMAL(9,2),
          AllowNull: false
      },
      userReputation: {
        type: DataTypes.INTEGER,
        AllowNull: false
      },
      userAvgBetAmt: {
        type: DataTypes.INTEGER,
        AllowNull: false
      },
      userVenmo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
      }   
    }); 
    User.associate = function(models) {
      // Associating User with Listings
      // When an User is deleted, also delete any associated Listings
      User.hasMany(models.bets, {
        onDelete: "cascade"
      });
    };
    return User;
  };
  
  // Need to ask !!David!! about how to associate this table with Listings as well
  // No you don't need to ask him that what you need to ask him is if there should be 
  // separate tables between listings and bets. I think it is better to start it as a
  // bet as a listing and add parts to it as it progresses than to move it listings to 
  // bet 
  
      // password: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        //     validate: {
        //     len: [5]
        //     }
        //   }