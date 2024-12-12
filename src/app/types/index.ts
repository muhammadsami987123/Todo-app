export interface Task {
    id: string;
    title: string;
    description?: string;
    completed: boolean;
    priority: 'low' | 'medium' | 'high';
    category: 'work' | 'personal' | 'urgent';
    dueDate?: Date;
    createdAt: Date;
  }
  
  export interface TaskFilters {
    status?: 'all' | 'active' | 'completed';
    priority?: Task['priority'];
    category?: Task['category'];
  }