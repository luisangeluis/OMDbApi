import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetDetailMedia = (url) => {
  const [detail, setDetail] = useState();

  useEffect(() => {
    if (url) {
      getDetail(url);
    }
  }, [url]);

  const getDetail = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setDetail(res.data);
      })
      .catch((error) => console.log(error));
  };

  return [detail];
};

export default useGetDetailMedia;
