const mongoose =  require('mongoose');
const ProposalSchema = require('../schemas/proposal.js');
let Proposal = mongoose.model('Proposal',ProposalSchema);

module.exports = Proposal;