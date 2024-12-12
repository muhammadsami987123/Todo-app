import React, { useState, useCallback } from 'react';
import { Task, TaskFilters } from '@/app/types';
import TaskList from './components/task/TaskList';
import TaskForm from './components/TaskForm';
import TaskFiltersComponent from './components/task/TaskFilters';
import { CheckSquare } from 'lucide-react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filters, setFilters] = useState<TaskFilters>({});

  const handleAddTask = useCallback((newTask: Omit<Task, 'id' | 'createdAt'>) => {
    setTasks((prev) => [
      {
        ...newTask,
        id: crypto.randomUUID(),
        createdAt: new Date(),
      },
      ...prev,
    ]);
  }, []);

  const handleToggleTask = useCallback((taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const handleDeleteTask = useCallback((taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }, []);

  const handleEditTask = useCallback((editedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === editedTask.id ? editedTask : task))
    );
  }, []);

  const filteredTasks = tasks.filter((task) => {
    if (filters.status === 'completed' && !task.completed) return false;
    if (filters.status === 'active' && task.completed) return false;
    if (filters.priority && task.priority !== filters.priority) return false;
    if (filters.category && task.category !== filters.category) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <CheckSquare className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">TaskMaster Pro</h1>
        </div>

        <TaskForm onAddTask={handleAddTask} />
        
        <TaskFiltersComponent
          filters={filters}
          onFilterChange={setFilters}
        />

        {filteredTasks.length > 0 ? (
          <TaskList
            tasks={filteredTasks}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
            onEditTask={handleEditTask}
          />
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {tasks.length === 0
                ? "No tasks yet. Add your first task above!"
                : "No tasks match your filters."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;