const mongoose = require('mongoose');

// {
//     species: 'Grizzly Bear',
//     latinName: 'Ursus arctos horribilis',
//     createOn: Date.now();
// }

const BearSchema = new mongoose.Schema({
    species: {
        type: String,
        required: true,
        unique: true
    },
    latinName: {
        type: String,
        require: true
    },
    createOn: {
        type: Date,
        default: Date.now()
    }
});

const bearsModel = mongoose.model('Bear', BearSchema);

module.exports = bearsModel;