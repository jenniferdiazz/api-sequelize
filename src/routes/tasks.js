//obtener el modelo de las tareas
module.exports =app=>{
    const Tasks = require ('../db')
    const Task= Tasks().models.Tasks 
    console.log(Task)
    //(app.db.models.tasks)
    //console.log("desde router:")
    //console.log(Task().models.Task)
    app.route('/tasks')
    .get((req, res)=>{
        Task.findAll({})
        .then(result => res.json(result))
        .catch(error_=>{
            res.status(412).json({msg: error.message});

        });
    })
    .post((req, res)=>{
        try{
            Task.create(req.body)
            .then(result=>res.json(result))
            .catch(error=>{
                res.status(412).json({ msg: error.message});
            });
            
        // console.log(req.body)
        // res.json({status:'received'})}
    }
        catch{
            console.log(error)
        }
        // Task.create(req.body)
        // .then(result=>res.json(result))
        // .catch(error=>{
        //     res.status(412).json({ msg: error.message});
        // });
        
    })
}