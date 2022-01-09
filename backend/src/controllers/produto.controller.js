const { Produto } = require('./../models');
const logger = require('././../config/logger');

exports.get = async function (req, res) {
   try {
      const produtos = await Produto.findAll();
      logger.info('Consulta de produtos', produtos);
      return res.status(200).send(produtos);       
   } catch (error) {
      return res.status(500).send(error);       
   }   
}

exports.post = async function (req, res) {
   try {
      const dados = req.body;      
      await Produto.create(dados);
      logger.info('Produto incluido', dados);
      return res.status(200).send('Produto incluído com sucesso!');
   } catch (error) {
      return res.status(500).send(error);
   }   
}
