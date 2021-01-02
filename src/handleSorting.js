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

export const handleDateWise = (notes, days) => {
  const sortedNewest = handleNewest(notes);
  let period = days;
  const result = [];
  let index = 0;
  while (
    setOldDate(period) >= sortedNewest[sortedNewest.length - 1].timestamp
  ) {
    let periodNotes = [];
    while (sortedNewest[index].timestamp >= setOldDate(period)) {
      periodNotes.push(sortedNewest[index]);
      index = index + 1;
    }
    if (periodNotes.length > 0) {
      result.push(periodNotes);
      periodNotes = [];
    }
    period = period + days;
  }

  // handling the last case left out because of the main comparison of period in while loop
  if (index !== sortedNewest.length) {
    let lastPeriod = [];
    while (index < sortedNewest.length) {
      lastPeriod.push(sortedNewest[index]);
      index++;
    }
    result.push(lastPeriod);
  }
  return result;
  // const limitDateValue = setOldDate(day);
  // return notes.filter((obj) => {
  //   return obj.timestamp >= limitDateValue;
  // });
};

export const handleByTimestamp = (notes, timestamp) => {
  return notes.filter((obj) => obj.timestamp >= timestamp);
};

export const setOldDate = (day) => {
  const ourDate = new Date();
  return ourDate.setDate(ourDate.getDate() - day);
};
