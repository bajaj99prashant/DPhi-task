const sortNewest = (a, b) => {
  return b.timestamp - a.timestamp;
};

export const handleNewest = (notes) => {
  const sliced = notes.slice();
  return sliced.sort(sortNewest);
};

const sortOldest = (a, b) => {
  return a.timestamp - b.timestamp;
};

export const handleOldest = (notes) => {
  const sliced = notes.slice();
  return sliced.sort(sortOldest);
};

export const handleDateWise = (notes, day) => {
  const limitDateValue = setOldDate(day);
  return notes.filter((obj) => {
    return obj.timestamp >= limitDateValue;
  });
};

export const handleByTimestamp = (notes, timestamp) => {
  return notes.filter((obj) => obj.timestamp >= timestamp);
};

export const setOldDate = (day) => {
  const ourDate = new Date();
  return ourDate.setDate(ourDate.getDate() - day);
};
