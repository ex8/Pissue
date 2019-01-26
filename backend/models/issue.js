import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const issueSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    responsible: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    severity: {
        type: String,
    },
    status: {
        type: String,
        default: `open`
    }
});

const Issue = mongoose.model(`Issue`, issueSchema);

module.exports = Issue;
