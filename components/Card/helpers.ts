export const getDescription = (customStr = '', limit = 140) =>
  customStr.substring(0, limit) + (customStr.length > limit ? '...' : '');
