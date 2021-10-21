'use strict';
const {   Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {    
    static associate(models) {
    }
  };
  Produto.init({
    nomeProduto: DataTypes.STRING,
    estoque: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produto',
    freezeTableName: true
  });
  return Produto;
};