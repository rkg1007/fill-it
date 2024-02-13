import { getCollection } from '../database/mongodb';

var forms = getCollection('forms');
var responses = getCollection('responses');

export async function getForms(admin) {
  const query = { CreatedBy: admin };
  const formDetails = await forms.find(query);
  return formDetails;
}

export async function getResponses(formId) {
  const query = { FormId: formId };
  const responses = await forms.find(query);
  return responses;
}
export async function getResponse(formId, responseId) {
  const query = { FormId: formId, id: responseId };
  const response = await forms.find(query);
  return response;
}
export async function getForm(formId) {
  const query = { FormId: formId };
  const formDetails = await forms.find(query);
  return formDetails;
}

export async function saveResponse(formId, response, userId) {
  let record = { UserId: userId, Response: response, latestUpdateAt: new Date(), FormId: formId };
  await responses.insertOne(record);
}

export async function createForm(fieldDetails, admin) {
  let record = { CreatedBy: admin, Fields: fieldDetails, latestUpdateAt: new Date() };
  await responses.insertOne(record);
}

export async function editForm(formId, userId) {
  const response = await responses.findOne({ FormId: formId, UserId: userId });
  return response;
}
export async function check(responseId, userId) {
  const record = await responses.findOne({ id_: responseId });
  if (record.createdBy == userId || record.UserId == userId) {
    return true;
  } else {
    return false;
  }
}
