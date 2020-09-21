const Project = require('../models/project');

module.exports = {
  index,
  userProjectIndex,
  create,
  projectDetails,
  update,
  delete: deleteProject,
  addImage
}

function index(req, res) {
  Project.find({})
    .then(projects => { res.json(projects) })
    .catch(err => { res.json(err) })
}

function userProjectIndex(req, res) {
  Project.find({ user: req.user._id })
    .then(projects => { res.json(projects) })
    .catch(err => { res.json(err) })
}

function create(req, res) {
  req.body.user = req.user._id
  Project.create(req.body)
    .then(project => { res.json(project) })
    .catch(err => { res.json(err) })
}

function projectDetails(req, res) {
  Project.findById(req.params.id)
    // use populate to get the image URLs and then just map over them
    .then((project) => { res.json(project) })
    .catch(err => { res.json(err) })
}

function update(req, res) {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(project => { res.json(project) })
    .catch(err => { res.json(err) })
}

function deleteProject(req, res) {
  Project.findByIdAndDelete(req.params.id)
    .then(project => { res.json(project) })
    .catch(err => { res.json(err) })
}

function addImage(req, res) {
  Project.findById(req.params.id)
    .then(project => {
      project.images.push(req.body.boop)
      project.save()
      res.json(project)
    })
    .catch(err => { res.json(err) })
}