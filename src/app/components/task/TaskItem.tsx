import React from 'react';
import { Task } from '@/app/types';
import { CheckCircle2, Circle, Trash2, Edit, Calendar, Flag } from 'lucide-react';
import { getPriorityColor, getCategoryBadgeColor, formatDate } from '../../utils/taskUtils';

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: string) => void;
  onDelete: (taskId: string) => void;
  onEdit: (task: Task) => void;
}

export function TaskItem({ task, onToggle, onDelete, onEdit }: TaskItemProps) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm p-4 transition-all duration-200 hover:shadow-md ${
        task.completed ? 'opacity-75' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={() => onToggle(task.id)}
          className="mt-1 hover:text-blue-600 transition-colors"
        >
          {task.completed ? (
            <CheckCircle2 className="w-5 h-5 text-green-500" />
          ) : (
            <Circle className="w-5 h-5" />
          )}
        </button>
        
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3
              className={`text-lg font-medium ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              {task.title}
            </h3>
            <span
              className={`text-sm px-2 py-1 rounded-full ${getCategoryBadgeColor(
                task.category
              )}`}
            >
              {task.category}
            </span>
          </div>
          
          {task.description && (
            <p className="text-gray-600 mt-1">{task.description}</p>
          )}
          
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
            {task.dueDate && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(task.dueDate)}</span>
              </div>
            )}
            <div className="flex items-center gap-1">
              <Flag className={`w-4 h-4 ${getPriorityColor(task.priority)}`} />
              <span className="capitalize">{task.priority}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => onEdit(task)}
            className="p-1 hover:text-blue-600 transition-colors"
            aria-label="Edit task"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-1 hover:text-red-600 transition-colors"
            aria-label="Delete task"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}