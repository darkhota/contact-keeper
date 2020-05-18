const express = require('express');
const router = express.Router();

// @route   GET api/contacts
//@desc      Get all user's contatcs
//@access   Private

router.get('/', (req, res) => {
    res.send('Get all contacts');
});

module.exports = router;

// @route   POST api/contacts
//@desc     Add new contact
//@access   Private

router.post('/', (req, res) => {
    res.send('Add contact');
});

module.exports = router;

// @route   PUT api/contacts/:id
//@desc     Update contact
//@access   Private

router.put('/:id', (req, res) => {
    res.send('Update contact');
});

module.exports = router;

// @route   DEELETE api/contacts/:id
//@desc     Delete contact
//@access   Private

router.delete('/:id', (req, res) => {
    res.send('Delete contact');
});

module.exports = router;