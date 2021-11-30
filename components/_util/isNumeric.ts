const isNumeric = (value: any): boolean => {
  return !Number.isNaN(parseFloat(value)) && Number.isFinite(value);
};

export default isNumeric;
