import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/Carouseltem.scss';
// import pause from '../assets/static/pausa.png';
import del from '../assets/static/eliminar.png';
import plus from '../assets/static/plus-icon.png';
import play from '../assets/static/play-icon.png';

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({ id, cover, title, year, contentRating, duration });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <Link to={`/player/${id}`}>
            <img
              className='carousel-item__details--img'
              src={play}
              alt='Play Icon'
              // onClick={() => handleDeleteFavorite(id)}
            />
          </Link>
          {isList ? (
            <img
              className='carousel-item__details--img'
              src={del}
              alt='Remove Icon'
              onClick={() => handleDeleteFavorite(id)}
            />
          ) :
            (
              <img
                className='carousel-item__details--img'
                src={plus}
                alt='Play Icon'
                onClick={handleSetFavorite}
              />
            )}
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

// export default CarouselItem;
export default connect(null, mapDispatchToProps)(CarouselItem);
