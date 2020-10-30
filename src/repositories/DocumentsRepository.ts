import Document from '../models/Document';

interface CreateDocumentDTO {
  name: string;
  type: 'nfe' | 'cte';
  status: 'ativa' | 'cancelada' | 'renegada' | 'autorizada';
  value: number;
}
class DocumentsRepository {
  private documents: Document[];

  constructor() {
    this.documents = [];
  }

  public all(): Document[] {
    return this.documents;
  }

  public find(status:any):Document[]{
    console.log('Status recibido',status);


    return this.documents.filter((item)=>item.status==status)

  }
  public create({ type, name, value, status }: CreateDocumentDTO): Document {
    const document = new Document({ type, name, value, status });

    this.documents.push(document);

    return document;
  }
}

export default DocumentsRepository;
