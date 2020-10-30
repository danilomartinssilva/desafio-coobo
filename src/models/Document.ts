import { uuid } from 'uuidv4';

class Document {
  id: string;
  type: 'nfe' | 'cte';
  name: string;
  status: 'ativa' | 'cancelada' | 'renegada' | 'autorizada';

  value: number;

  constructor({ name, value, type, status }: Omit<Document, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.value = value;
    this.type = type;
    this.status = status;
  }
}

export default Document;
