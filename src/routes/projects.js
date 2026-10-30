const express = require('express');

const router = express.Router();

// Temporary project storage
const projects = [];

// Get all projects
router.get('/', (req, res) => {
  res.json({
    success: true,
    projects,
  });
});

// Create a project
router.post('/', (req, res) => {
  const { name, repositoryUrl } = req.body;

  if (!name || !name.trim()) {
    return res.status(400).json({
      success: false,
      message: 'Project name is required',
    });
  }

  const project = {
    id: Date.now().toString(),
    name: name.trim(),
    repositoryUrl: repositoryUrl || '',
    status: 'created',
    createdAt: new Date().toISOString(),
  };

  projects.push(project);

  res.status(201).json({
    success: true,
    message: 'Project created successfully',
    project,
  });
});

module.exports = router;