module.exports = function(sequelize, DataTypes) {
    var Event = sequelize.define("event", {
      // Giving the event model a name of type STRING
      // id will be auto assigned
      eventTeam1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      eventTeam2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
      },
      eventLocation: {
        type: DataTypes.STRING,
        allowNull: false
        // validate: { !!David!! any validation of locations??
        // }
      },
      // eventTime: {
      //   type: DataTypes.DATETIME,
      //   allowNull: false
      // },
      // eventCompleted: {
      //   type: DataTypes.BOOLEAN,
      //   default: false,
      // },
      // team1Favorite is used to determine how to apply the eventOdds
      team1Favorite: {
        type: DataTypes.BOOLEAN,
        allowNull: false
        },
      eventOdds: {
          type: DataTypes.INTEGER,
          // AllowNull: false
          //!!David!! this should come from the API
      }
    }); 
    Event.associate = function(models) {
      // Associating Event with Bets
      // When an Event is deleted, also delete any associated Bets
      Event.hasMany(models.bets, {
        onDelete: "cascade"
      });
    };
    return Event;
  };
  