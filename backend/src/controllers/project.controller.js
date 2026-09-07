const projectService = require("../services/project.service");

const getProjects = (req, res) => {
    const result = projectService.getProjects();

    res.json(result);
};

module.exports = {
    getProjects
};