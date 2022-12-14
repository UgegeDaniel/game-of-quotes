const fetchUrlData = async (url, onStart, onSuccess, onError) => {
  onStart();
  try {
    const response = await fetch(url);
    const data = await response.json();
    onSuccess(data);
  } catch (error) {
    onError(error.message);
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default fetchUrlData;
