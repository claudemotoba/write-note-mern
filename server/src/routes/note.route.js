"use strict"
const router = require('express').Router();
const NoteController = require('../controllers/note.controller');

router.post('', NoteController.save());
router.put('/:id', NoteController.updateOne());
router.get('', NoteController.findAll());
router.get('/:id', NoteController.findOne());
router.delete('/:id', NoteController.deleteOne());

module.exports = router;