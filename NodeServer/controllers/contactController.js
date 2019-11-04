const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Contact } = require('../models/contact');

// => localhost:3000/contacts/
router.get('/', (req, res) => {
    Contact.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Contacts :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:name', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given Name : ${req.params.name}`);

    Employee.findById(req.params.name, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Contact :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var cont = new Contact({
        name: req.body.name ,
        surname: req.body.surname ,
        number: req.body.number ,
        birthday: req.body.birthday ,
        address: req.body.address ,
    });
    cont.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Contact Save :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var cont = new Contact({
            name: req.body.name ,
            surname: req.body.surname ,
            number: req.body.number ,
            birthday: req.body.birthday ,
            address: req.body.address ,
        });
    Contact.findByIdAndUpdate(req.params.id, { $set: cont }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Contact Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Contact.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Contact Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;