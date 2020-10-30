import { Router } from 'express';

import DocumentsRepository from '../repositories/DocumentsRepository';

import CreateDocumentService from '../services/CreateDocumentService';

const documentRouter = Router();

const documentRepository = new DocumentsRepository();

documentRouter.get('/', (request, response) => {
  try {
    const {status=null} = request.query;

    const documents = status ? documentRepository.find(status)  : documentRepository.all();



    return response.json({ documents });
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

documentRouter.post('/', (request, response) => {
  try {
    const { value,type,name,status } = request.body;
    const createDocument = new CreateDocumentService(documentRepository)
    const document =createDocument.execute({value,status,type,name})
    return response.json(document);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default documentRouter;
