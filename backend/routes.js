import express from 'express';
import Issue from './models/issue';

const router = express.Router();

router.get(`/issues`, (req, res) => {
    Issue.find()
        .then(issues => res.json(issues))
        .catch(err => console.error(`Issues retrieval error: ${err}`));
});

router.post(`/issues`, (req, res) => {
    Issue.create(req.body)
        .then(issue => res.json({
            success: true,
            issue: issue
        }))
        .catch(err => res.json({
            success: false,
            error: err
        }));
});

router.get(`/issues/:id`, (req, res) => {
    Issue.findById(req.params.id)
        .then(issue => res.json(issue))
        .catch(err => console.error(`Issue retrieval error: ${err}`));
});

router.put(`/issues/:id/`, (req, res) => {
    Issue.findByIdAndUpdate(req.params.id, req.body)
        .then(issue => res.json({
            success: true,
            issue: issue
        }))
        .catch(err => res.json({
            success: false,
            error: err
        }));
});

router.delete(`/issues/:id`, (req, res) => {
    Issue.findByIdAndDelete(req.params.id)
        .then(res.json({
            success: true
        }))
        .catch(err => res.json({
            success: true,
            error: err
        }));
});

module.exports = router;
