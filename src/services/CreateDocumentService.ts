import DocumentsRepository from '../repositories/DocumentsRepository';
import Document from '../models/Document';

interface Request {
  type: 'nfe' | 'cte';
  name: string;
  status: 'ativa' | 'cancelada' | 'renegada' | 'autorizada';
  value:number;
}

class CreateDocumentService {

  private documentRepository: DocumentsRepository;

  constructor(documentRepository: DocumentsRepository) {
    this.documentRepository = documentRepository;
  }

  public execute({ type,name,status,value}: Request): Document {


    const document = this.documentRepository.create({
      name,value,type,status
    });
    return document;
    // TODO
  }
}

export default CreateDocumentService;
