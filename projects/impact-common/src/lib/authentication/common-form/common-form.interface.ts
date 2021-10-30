export interface Register {
  email: string;
  // username: string;
  password: string;
}

export interface Login {
  username: string;
  password: string;
}

export interface CreateMessage {
  from_email: string;
  to_email: string;
  message: string;
  created_at: Date;
  id: string;
}
