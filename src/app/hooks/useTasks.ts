import { useState, useCallback } from 'react';
import { Task, TaskFilters } from '@/app/types';

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = useCallback((newTask: Omit<Task, 'id' | 'createdAt'>) => {
    setTasks((prev) => [
      {
        ...newTask,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      },
      ...prev,
    ]);
  }, []);

  const toggleTask = useCallback((taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }, []);

  const editTask = useCallback((editedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
  }, []);

  const filterTasks = useCallback((tasks: Task[], filters: TaskFilters) => {
    return tasks.filter((task) => {
      if (filters.status === 'completed' && !task.completed) return false;
      if (filters.status === 'active' && task.completed) return false;
      if (filters.priority && task.priority !== filters.priority) return false;
      if (filters.category && task.category !== filters.category) return false;
      return true;
    });
  }, []);

  return {
    tasks,
    addTask,
    toggleTask,
    deleteTask,
    editTask,
    filterTasks,
  };
}