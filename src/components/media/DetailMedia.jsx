import React from 'react';
import { useParams } from 'react-router-dom';
import useGetDetailMedia from '../../hooks/useGetDetailMedia';

const DetailMedia = () => {
  const { id } = useParams();
  const [detail] = useGetDetailMedia(id);
  return (
    <section className="row">
      <div className="col-12">Media detail</div>
    </section>
  );
};

export default DetailMedia;
