import React, { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../actions';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Use useSelector to access data from Redux store
  const { data } = useSelector((state) => state);

  // Memoize the selected item using useMemo
  const selectedItem = useMemo(() => {
    return data.find(item => item.id === parseInt(id));
  }, [data, id]);

  useEffect(() => {
    // Dispatch fetchData only if data is not available in the store
    if (data.length === 0) {
      dispatch(fetchData());
    }
  }, [dispatch, data.length]);

  const handleClick = () => {
    let p = document.querySelectorAll('.p1');
    p.forEach(items => {
      items.classList.toggle('hidden');
    });
  };

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <p className="navbar-brand" href="#home">
            TravelMedia.in
          </p>
        </div>
      </nav>
      <h2>{selectedItem.title}</h2>
      <div className="card-detail">
        <div className="details">
          <img src={`https://picsum.photos/200?random=${selectedItem.id}`} alt={`Image for ${selectedItem.title}`} />
          <button className='detail-btn' onClick={handleClick}>Details</button>
          <button className='user-btn' onClick={handleClick}>User Info</button>
          <p className='p1'>{selectedItem.body}</p>
          <p className='p1 hidden'>User ID: {selectedItem.userId}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
