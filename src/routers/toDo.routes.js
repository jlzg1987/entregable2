const {Router} = require('express');
const toDo = require('../models/toDo.models');

const router = Router();

router.get("/api/v1/todo", async(req,res)=>{
    try{
        const todo = await toDo.findAll({
          atributes:['id','title','description', 'status']   
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
      const result = await toDo.create(newUser);
      res.status(201).send(result);
    } catch (error) {
      res.status(400).json(error);
    }
  }); // INSERT INTO users (name, email,  password) VALUES ()
  
  router.put("/api/v1/todo/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const data = req.body;
      await toDo.update(data, {
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
      await toDo.destroy({
        where: { id }, // id: id
      });
      res.status(204).send();
    } catch (error) {
      res.status(400).json(error);
    }
  });
  
module.exports = router;