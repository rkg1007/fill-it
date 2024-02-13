import getJoiSchema from '../helpers/joi validators';
import * as formService from './repositories/forms.js';

async function getForms(admin) {
  const allForms = await formService.getForms(admin);
  return allForms;
}

async function getForm(formId) {
  return await formService.getForm(formId);
}

async function saveResponse(formId, responses) {
  const formDetails = await formService.getForm(formId);
  const Schema = getJoiSchema(formDetails);
  const { error } = Schema(responses);
  if (!error) {
    return await formService.saveResponse(formId, responses);
  } else {
    return error;
  }
}

async function createForm(formDetails) {
  return await formService.createForm(formDetails);
}

async function editForm(formId, user) {
  return await formService.editForm(formId, user);
}

async function getResponses(formId) {
  return await formService.getResponses(formId);
}
async function getResponse(formId, responseId) {
  return await formService.getResponse(formId, responseId);
}

export default [getForms, getForm, saveResponse, createForm, editForm, getResponses, getResponse];
