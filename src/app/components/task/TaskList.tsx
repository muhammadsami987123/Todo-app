import React from 'react';
import { Task } from '@/app/types';
import { TaskItem } from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
  onEditTask: (task: Task) => void;
}

export default function TaskList(props: TaskListProps) {
  return (
    <div className="space-y-4">
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={props.onToggleTask}
          onDelete={props.onDeleteTask}
          onEdit={props.onEditTask}
        />
      ))}
    </div>
  );
}