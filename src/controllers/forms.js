import * as formService from './services/forms.js';

async function getForms(req) {
  const adminId = req.user;
  const allForms = await formService.getForms(adminId);
  return allForms;
}
async function getForm(req) {
  const formId = req.params.formId;

  const formDetails = await formService.getForm(formId);

  return formDetails;
}

async function saveResponse(req) {
  const formId = req.params.formId;
  return await formService.saveResponse(formId, req.body, req.user);
}

async function createForm(req) {
  return await formService.createForm(req.body, req.user);
}

async function editForm(req) {
  const formId = req.params.formId;
  await formService.editForm(formId, req.user);
}
async function getResponses(req) {
  const formId = req.body.formId;

  return await formService.getResponses(formId);
}
async function getResponse(req) {
  const { formId, id: responseId } = req.body;
  return await formService.getResponse(formId, responseId);
}

export default [getForms, getForm, saveResponse, createForm, editForm, getResponse, getResponses];
