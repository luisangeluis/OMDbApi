import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetDetailMedia = (item) => {
  const [detail, setDetail] = useState();

  useEffect(() => {
    const apiKey = 'b0dd442bf37e49eecbb517b186e6f5ee';
    const mediaType = 'movie';

    if (item) {
      if (item.name) {
        mediaType = 'tv';
      }

      const baseUrl = `https://api.themoviedb.org/3/${mediaType}/${item.id}?api_key=${apiKey}&language=en-US`;
      getDetail(baseUrl);
    }
  }, [item]);

  const getDetail = (url) => {
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return [detail];
};

export default useGetDetailMedia;
