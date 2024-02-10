import { getCollection } from '../database/mongodb';

var forms = getCollection('forms');
var responses = getCollection('responses');

export async function getForm(formId) {
  const query = { FormId: formId };
  const formDetails = await forms.find(query);
  return formDetails;
}

export async function saveResponse(formId, response) {
  //already got validated....(either using middleware or in service file)

  (response.FormId = formId), await responses.insertOne(response);
}

export async function createForm(formDetails) {
  await forms.insertOne(formDetails);
}

export async function editForm(formId, userId) {
  const response = await responses.findOne({ FormId: formId, UserId: userId });
  return response;
}
