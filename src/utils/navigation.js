const getNextIndex = (size, currentIndex) => {
  if (currentIndex > size - 1) {
    return 0;
  }
  return currentIndex + 1;
};

const getPreviousIndex = (size, currentIndex) => {
  if (currentIndex < 0) {
    return size - 1;
  }
  return currentIndex - 1;
};

const getRandomIndex = (size) => {
  const randomIndex = Math.floor(Math.random() * size);
  return randomIndex;
};

export default { getNextIndex, getPreviousIndex, getRandomIndex };
