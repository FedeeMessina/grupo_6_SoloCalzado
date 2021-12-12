module.exports = (sequelize, dataTypes) => {

    let alias = "Color";
    let cols = {
       id: {type: dataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},       
       name: { type: dataTypes.STRING(100), allowNull: false},        
     };
     let config = {
       tableName: 'colors',
       timestamps: false
     };
    
    const Model = sequelize.define(alias, cols, config);

    Model.associate = models => {

      Model.belongsToMany(models.Product, {
          as: "products",
          through: 'product_color',
          foreignKey: "color_id",
          otherKey: "product_id",
          timestamps : false
      })
  }
    
    return Model;
    
}