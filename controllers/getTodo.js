const Todo = require('../model/Todo');

exports. getTodo = async (req, res) => {
    try {
        // Fetch all todo items from the database
        const todos = await Todo.find({});
        res.status(200).json({
            success: true,
            data: todos,
            message: 'Entire data retrieved successfully',
        });
    } catch (err) {
        console.error(err); // Changed 'error' to 'err'
        res.status(500).json({ // Changed status code to 500 for server error
            success: false,
            message: 'Failed to retrieve data',
        });
    }
};

exports.getTododById = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);

        if (!todo) {
            return res.status(404).json({
                success: false,
                message: "No data found with the given ID",
            });
        }

        res.status(200).json({
            success: true,
            data: todo,
            message: "Data retrieved successfully by ID",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Failed to retrieve data",
        });
    }
};


