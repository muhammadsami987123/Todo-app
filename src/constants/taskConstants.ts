export const PRIORITY_OPTIONS = {
    LOW: 'low',
    MEDIUM: 'medium',
    HIGH: 'high',
  } as const;
  
  export const CATEGORY_OPTIONS = {
    PERSONAL: 'personal',
    WORK: 'work',
    URGENT: 'urgent',
  } as const;
  
  export const STATUS_OPTIONS = {
    ALL: 'all',
    ACTIVE: 'active',
    COMPLETED: 'completed',
  } as const;
  
  export const INITIAL_FILTERS = {
    status: STATUS_OPTIONS.ALL,
    priority: undefined,
    category: undefined,
  };