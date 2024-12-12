"use client";
import React, { useState } from 'react';
import { TaskFilters, Task } from '@/app/types';
// import { TaskForm, TaskFilters as TaskFiltersComponent } from '../app/components/task/TaskFilters';
import { CheckSquare } from 'lucide-react';
// import TaskFormComponent from './components/TaskForm';
import TaskList from './components/task/TaskList';
import TaskFiltersComponent from '../app/components/task/TaskFilters';
import { useTasks } from './hooks/useTasks';
import { INITIAL_FILTERS } from '@/constants/taskConstants';
import { Modal } from './components/ui/Modal';
import { EditTaskForm } from './components/task/EditTaskForm';
import TaskForm from './components/TaskForm';

function App() {
  const { tasks, addTask, toggleTask, deleteTask, editTask, filterTasks } = useTasks();
  const [filters, setFilters] = useState<TaskFilters>(INITIAL_FILTERS);
  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const filteredTasks = filterTasks(tasks, filters);

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleSaveEdit = (editedTask: Task) => {
    editTask(editedTask);
    setEditingTask(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <CheckSquare className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">TaskMaster Pro</h1>
        </div>

        <TaskForm onAddTask={addTask} />
        
        <TaskFiltersComponent
          filters={filters}
          onFilterChange={setFilters}
        />

        {filteredTasks.length > 0 ? (
          <TaskList
            tasks={filteredTasks}
            onToggleTask={toggleTask}
            onDeleteTask={deleteTask}
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

        <Modal
          isOpen={!!editingTask}
          onClose={() => setEditingTask(null)}
          title="Edit Task"
        >
          {editingTask && (
            <EditTaskForm
              task={editingTask}
              onSave={handleSaveEdit}
              onCancel={() => setEditingTask(null)}
            />
          )}
        </Modal>
      </div>
    </div>
  );
}

export default App;