interface TodoItem {
  id: string;
  content: string;
  complete: boolean;
  createdAt: Date;
  updatedAt: Date | null;
  onClick?: any;
  onDelete?: any;
};

export type { TodoItem };
