interface IOptions {
  method: string;
  headers: {
    Authorization: string;
  };
}

const fetchData = async (url: string, options: IOptions) => {
  try {
    const res = await fetch(url, options);
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};

const wrapPromise = (promise: any) => {
  let status = 'pending';
  let result = '';
  let suspender = promise
    .then((r: any) => {
      status = 'success';
      result = r;
    })
    .catch((e: any) => {
      status = 'error';
      result = e;
    });

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      }
      return result;
    },
  };
};

export const useSuspense = (url: string, options: IOptions) => {
  return {
    results: wrapPromise(fetchData(url, options)),
  };
};
