const express = require('express');
const router = express.Router();
const ruleController = require('../controllers/ruleController');

// Define API routes
router.post('/create', ruleController.createRule);
router.post('/combine', ruleController.combineRules);
router.post('/evaluate', ruleController.evaluateRule);

module.exports = router;
