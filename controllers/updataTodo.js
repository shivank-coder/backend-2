const Todo = require('../model/Todo');

exports.updateTodo= async(req,res)=>{
    try{
        const {id}=req.params;
        const {title,description}=req.body;
        const todo=await Todo.findByIdAndUpdate(
            {_id:id},
            {title,description,updatedAt:Date.now()},
        )
        res.status(200).json({
            success:true,
            data:todo,
            message:'update successfully',
        })
    }
    catch(err)
    {
        console.error(err); // Changed 'error' to 'err'
        res.status(500).json({ // Changed status code to 500 for server error
            success: false,
            message: 'Failed to retrieve data',
        });
    }
}

