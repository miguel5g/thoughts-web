interface ThoughtData {
  id: string;
  content: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
}

interface ThoughtDataInput {
  content: string;
  note?: string;
  validator: string;
}
