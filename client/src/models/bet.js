module.exports = function(sequelize, DataTypes) {
    var Bet = sequelize.define("bet", {
      // Giving the Bets model a name of type STRING
        //id will be auto assigned 
      amountOne: {
        type: DataTypes.DECIMAL(9,2),
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      amountTwo: {
        type: DataTypes.DECIMAL(9,2),
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      betAccepted: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      betAcceptConfirmed: {
        type: DataTypes.BOOLEAN,
        default: false
      },
      paymentConfirmed: {
        type: DataTypes.BOOLEAN,
        default: false
      }
    });
  
    Bets.associate = function(models) {
      // We're saying that a Bet should belong to an User
      // A Bet can't be created without an User due to the foreign key constraint
      Bet.belongsTo(models.usersprofile, {    //many to one  models.table name not variable name 
        foreignKey: {  //foreign key is default to id
          allowNull: false
        }
      });
  
      Bet.belongsTo(models.event, {
        foreignKey: {  //foreign key is default to id
          allowNull: false
        }
      });
    };
  
    return Bet;
  };
  
  // Ask !!David!! Should a bet also belong to an Event?? That way the venue and participants can be brought in
  
  // Can .belongsTo bring in both of the users as foreign keys??
  
  
  // betlocked was going to be a boolean that is set to true once the event begins. not crucial to MVP
  // possibly add later
  // betLocked: {
  //   type: DataTypes.BOOLEAN,
  //   default: false,
  // }