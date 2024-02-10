import * as formService from './services/forms.js';
async function getForm(req) {
  const formId = req.params.formId;

  const formDetails = await formService.getForm(formId);

  return formDetails;
}

async function saveResponse(req) {
  const formId = req.params.formId;
  return await formService.saveResponse(formId, req.body);
}

async function createForm(req) {
  return await formService.saveResponse(req.body);
}

async function editForm(req) {
  const formId = req.params.formId;
  await formService.editForm(formId, req.user);
}

export default [getForm, saveResponse, createForm, editForm];
