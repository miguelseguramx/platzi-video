/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Carouselitem from '../components/CarouselItem';
// import useInitialState from '../hooks/useInitialState';
import Header from '../components/Header';
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initialState';

const Home = ({ myList, trends, originals }) => {
  // const initialState = useInitialState(API);
  return /* initialState.length === 0 ? <h1>Loading...</h1> : */ (
    <>
      <Header />
      <Search isHome />
      {myList.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {myList.map((item) => (
              <Carouselitem
                key={item.id}
                {...item}
                isList
              />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Tendencias'>
        <Carousel>
          {trends.map((item) => <Carouselitem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals.map((item) => <Carouselitem key={item.id} {...item} />)}
        </Carousel>
      </Categories>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  };
};

// export default Home;
// export default connect(props,actions)(Home)
export default connect(mapStateToProps, null)(Home);
