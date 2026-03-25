export interface Comment {
  id: string;
  created_at: string;
  name: string;
  email?: string;
  comment: string;
  page_url: string;
}

export interface CommentFormData {
  name: string;
  email?: string;
  comment: string;
}
