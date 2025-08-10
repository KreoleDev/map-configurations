
// Convert data to name, value format
/* eslint-disable @typescript-eslint/no-explicit-any */
export const convertToNameValue = (items: any, nameKey = 'name', valueKey = 'id') => {
  return (
    (items !== undefined &&
      items?.map((item: any) => ({
        label: item[nameKey] || item.title || item.label || item.name,
        value: item[valueKey] || item.uuid || item.key,
      }))) ||
    []
  );
};
