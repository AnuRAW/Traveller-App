import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../actions';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const { data, loading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const navigateToDetail = (id) => {
    navigate(`/item/${id}`); // Use navigate instead of history.push
  };


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const MAX_LENGTH = 100;
  return (
    <div id="home">
      <nav classname="navbar bg-body-tertiary">
        <div classname="container-fluid">
          <p classname="navbar-brand" href="#">
            TravelMedia.in
          </p>
        </div>
      </nav>
      <h2 style={{marginTop : "40px"}}>Social Media for Travellers</h2>
      <div class="input-group mb-3 ">
  <span class="input-group-text" id="basic-addon1">&#128269;</span>
  <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1"/>
</div>
      <div className="item-list">
        {data.map(item => (
          <div className="card item-card" style={{width: "18rem"}} key={item.id} >
          <img src={`https://picsum.photos/200?random=${item.id}`} alt={`Image for ${item.title}`} className="card-img-top"/>
          <div className="card-body">
            <h5>{item.title.length > MAX_LENGTH ? `${item.title.slice(0, MAX_LENGTH)}...` : item.title}</h5>
            <p>{item.body.length > MAX_LENGTH ? `${item.body.slice(0, MAX_LENGTH)}...` : item.body}</p>
            {/* <a onClick={() => navigateToDetail(item.id)} href={`/item/${item.id}`}>Read More...</a> */}
            <Link to={`/item/${item.id}`}>Read More.....</Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
