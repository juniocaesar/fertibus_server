import Test from "../models/TestModel.js";

export const getAllTest = async (req, res) => {
    try {
        const tests = await Test.findAll();
        res.json(tests)
    } catch (error) {
        res.json({ message: error.message });        
    }
};

export const getTestById = async (req, res) => {
    try {
        const tests = await Test.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(tests[0])
    } catch (error) {
        res.json({ message: error.message });        
    }
};

export const createTest = async (req, res) => {
    try {
        await Test.create(req.body);
        res.json({
            "message": "Test Data Created"
        });
    } catch (error) {
        res.json({ message: error.message });        
    }
};

export const updateTest = async (req, res) => {
    try {
        await Test.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Test Data id: " + req.params.id + " Updated"
        });
    } catch (error) {
        res.json({ message: error.message });        
    }
};

export const deleteTest = async (req, res) => {
    try {
        await Test.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Test Data id: " + req.params.id + " Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });        
    }
};