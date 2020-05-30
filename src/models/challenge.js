/**
 * Challenge model.
 */

const dynamoose = require('dynamoose')

const Schema = dynamoose.Schema

const schema = new Schema({
  id: {
    type: String,
    hashKey: true,
    required: true
  },
  legacyId: {
    type: Number,
    required: false
  },
  legacy: {
    type: Object,
    required: false
  },
  typeId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  descriptionFormat: {
    type: String,
    default: 'HTML',
    required: true
  },
  metadata: {
    type: [Object],
    required: false
  },
  terms: {
    type: Array,
    required: false
  },
  timelineTemplateId: {
    type: String,
    required: false
  },
  phases: {
    type: Array,
    required: true
  },
  prizeSets: {
    type: [Object],
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  projectId: {
    type: Number,
    required: false
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: false
  },
  status: {
    type: String,
    required: true
  },
  attachments: {
    type: Array,
    required: false
  },
  groups: {
    type: Array,
    required: false
  },
  winners: {
    type: Array,
    required: false
  },
  created: {
    type: Date,
    required: true
  },
  createdBy: {
    type: String,
    required: true
  },
  updated: {
    type: Date,
    required: false
  },
  updatedBy: {
    type: String,
    required: false
  }
},
{
  throughput: { read: 4, write: 2 }
})

module.exports = schema
