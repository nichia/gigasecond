//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = dateObj => {
  // throw new Error("Remove this statement and implement this function");
  return new Date(dateObj.getTime() + (1000000000 * 1000));
};
