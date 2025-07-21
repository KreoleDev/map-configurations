// Convert data to name, value format
export const convertToNameValue = (items: any[], nameKey = 'name', valueKey = 'id') => {
  return (
    (items !== undefined &&
      items?.map((item) => ({
        label: item[nameKey] || item.title || item.label,
        value: item[valueKey] || item.value || item.key,
      }))) ||
    []
  );
};
