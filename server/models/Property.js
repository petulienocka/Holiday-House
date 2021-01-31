const { Model } = require("objection");
const Location = require("./Location");
const Image = require("./Image");
const User = require("./User");
const Rent = require("./Rent");

class Property extends Model {
  static get tableName() {
    return "properties";
  }

  static get relationMappings() {
    return {
      // relation: Model.BelongsToOneRelation,
      // modelClass: User,
      // join: {
      //   from: "property.id",
      //   through: {
      //     from: "user_properties.property_id",
      //     to: "user_properties.user_id",
      //   },
      //   to: "user.id",
      // },
      locations: {
        relation: Model.BelongsToOneRelation,
        modelClass: Location,
        join: {
          from: "properties.location_id",
          to: "locations.id"
        }
      },
      images: {
        relation: Model.HasManyRelation,
        modelClass: Image,
        join: {
          from: "properties.image_id",
          to: "images.id"
        }
      },
      rent: {
        relation: Model.HasManyRelation,
        modelClass: Rent,
        join: {
          from: "properties.rent_id",
          to: "rent.id"
        }
      }
    };
  }
}

module.exports = Property;
