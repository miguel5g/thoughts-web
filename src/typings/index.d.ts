interface PostData {
  id: string;
  content: string;
  note: string | null;
  createdAt: string;
  updatedAt: string;
}

interface PostDataInput {
  content: string;
  note?: string;
  validator: string;
}
