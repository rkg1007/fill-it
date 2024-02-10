import authenticate from '../auth/authenticate';
import authorisation from '../auth/authorisation';
import * as formService from '../controllers/forms.js';

export default [
  {
    method: 'get',
    path: '/',
    middlewares: [authenticate, authorisation],
  },
  {
    method: 'post',
    path: '/',
    middlewares: [authenticate, authorisation, formService.createForm],
  },
  {
    method: 'get',
    path: '/:formId',
    middlewares: [authenticate, formService.getForm],
  },
  {
    method: 'post',
    path: '/:formId',
    middlewares: [authenticate, formService.saveResponse],
  },
  {
    method: 'get',
    path: '/:formId/responses',
    middlewares: [authenticate, authorisation],
  },
  {
    method: 'get',
    path: '/:formId/responses/:responseId',
    middlewares: [authenticate, authorisation],
  },
  {
    method: 'get',
    path: '/:formId/fill',
    middlewares: [authenticate],
  },
];

