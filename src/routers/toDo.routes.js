const {Router} = require('express');
const todos = require('../models/toDo.models');

const router = Router();

router.get("/api/v1/todo", async(req,res)=>{
    try{
        const todo = await todos.findAll({
          atributes:['ide','title','descrption', 'status']   
        });
       
        res.json(todo);

    } catch (error){
        res.status(400).json(error);
    }

});

  router.post("/api/v1/todo", async (req, res) => {
    try {
      const newUser = req.body;
      console.log(newUser);
      const result = await User.create(newUser);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }); // INSERT INTO users (name, email,  password) VALUES ()
  
  router.put("/api/v1/todo/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await User.update(data, {
        where: { id },
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
  // * path params
  router.delete("/api/v1/todo/:id", async (req, res) => {
    try {
      const { id } = req.params; // objeto
      await User.destroy({
        where: { id }, // id: id
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
module.exports = router;