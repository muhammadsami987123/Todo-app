import { Task } from '@/app/types';
import { PRIORITY_OPTIONS, CATEGORY_OPTIONS } from '../../constants/taskConstants';

export const getPriorityColor = (priority: Task['priority']): string => {
  const colors = {
    [PRIORITY_OPTIONS.HIGH]: 'text-red-500',
    [PRIORITY_OPTIONS.MEDIUM]: 'text-yellow-500',
    [PRIORITY_OPTIONS.LOW]: 'text-green-500',
  };
  return colors[priority] || 'text-gray-500';
};

export const getCategoryBadgeColor = (category: Task['category']): string => {
  const colors = {
    [CATEGORY_OPTIONS.WORK]: 'bg-blue-100 text-blue-800',
    [CATEGORY_OPTIONS.PERSONAL]: 'bg-purple-100 text-purple-800',
    [CATEGORY_OPTIONS.URGENT]: 'bg-red-100 text-red-800',
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

export const formatDate = (date: Date): string => {
  return new Date(date).toLocaleDateString();
};