import getJoiSchema from '../helpers/joi validators';
import * as formService from './repository/forms.js';

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
  return formService.createForm(formDetails);
}

async function editForm(formId, user) {
  return formService.editForm(formId, user);
}

export default [getForm, saveResponse, createForm, editForm];
