export const analyzeArray = (arr) => {
  if (!arr || !Array.isArray(arr)) return {};
  return {
    average: Math.floor(
      arr.reduce((prev, curr) => prev + curr, 0) / arr.length
    ),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
};
