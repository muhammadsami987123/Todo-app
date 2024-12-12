import React from 'react';
import { TaskFilters as FilterTypes } from '@/app/types';
import { Select } from '../ui/Select';
import { PRIORITY_OPTIONS, CATEGORY_OPTIONS, STATUS_OPTIONS } from '@/constants/taskConstants';

interface TaskFiltersProps {
  filters: FilterTypes;
  onFilterChange: (filters: FilterTypes) => void;
}

export default function TaskFilters({ filters, onFilterChange }: TaskFiltersProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <Select
        value={filters.status || STATUS_OPTIONS.ALL}
        onChange={(e) => onFilterChange({ ...filters, status: e.target.value as FilterTypes['status'] })}
        options={[
          { value: STATUS_OPTIONS.ALL, label: 'All Tasks' },
          { value: STATUS_OPTIONS.ACTIVE, label: 'Active' },
          { value: STATUS_OPTIONS.COMPLETED, label: 'Completed' },
        ]}
      />

      <Select
        value={filters.priority || ''}
        onChange={(e) => onFilterChange({ ...filters, priority: e.target.value as FilterTypes['priority'] || undefined })}
        options={[
          { value: '', label: 'All Priorities' },
          { value: PRIORITY_OPTIONS.LOW, label: 'Low' },
          { value: PRIORITY_OPTIONS.MEDIUM, label: 'Medium' },
          { value: PRIORITY_OPTIONS.HIGH, label: 'High' },
        ]}
      />

      <Select
        value={filters.category || ''}
        onChange={(e) => onFilterChange({ ...filters, category: e.target.value as FilterTypes['category'] || undefined })}
        options={[
          { value: '', label: 'All Categories' },
          { value: CATEGORY_OPTIONS.PERSONAL, label: 'Personal' },
          { value: CATEGORY_OPTIONS.WORK, label: 'Work' },
          { value: CATEGORY_OPTIONS.URGENT, label: 'Urgent' },
        ]}
      />
    </div>
  );
}