const Author = require('../models/author.models');

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
        .then(newlyCreatedAuthor => {
            res.json({ Author: newlyCreatedAuthor });
        })
        .catch(err => res.status(400).json(err)); // Use 'res' instead of 'response'
}



// module.exports.createNewAuthor = {
//     create: (request, response) => {
//         const { name } = request.body;
//         Author.create({
//             name
//         })
//             .then(author => response.json(author))
//             .catch(err => response.status(400).json(err))
//     }
// }


module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true}
    )
        .then(updatedAuthor => {
            res.json({Author: updatedAuthor})
        })
        .catch(err => res.status(400).json(err)); // Use 'res' instead of 'response'


}

module.exports.deleteAnExistingAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json(err)
        });
}


module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then((allDaAuthors) => {
            res.json({Authors: allDaAuthors})
        })
        .catch((err) => {
            res.json(err)
        });
}

module.exports.findOneSingleAuthor = (req, res) => {
    // console.log(req);
    Author.findOne({ _id: req.params.id })
        .then(oneSingleAuthor => {
            res.json({ author: oneSingleAuthor })
        })
        .catch((err) => {
            res.json(err)
        });}