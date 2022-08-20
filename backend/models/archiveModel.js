const mongoose = require('mongoose')

const archiveSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a text value']
        },
        year: {
            type: String,
            required: [true, 'Please add a text value']
        },
        stateArchive: {
            type: String,
            required: [true, 'Please add a text value']
        },
        description: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model('Archive', archiveSchema)