import axios from '../api/axios';
import MovieModal from './MovieModal';
import './Row.css';
import React, { useState, useEffect } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function Row({isLargeRow, title, id, fetchUrl}) {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    
    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async() => {
    const request= await axios.get(fetchUrl);
    console.log('request',request);
    setMovies(request.data.results);
};
    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    };

    return (
    <section className='row'>
       <h2>{title}</h2>
       <Swiper
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      loop={true}
      breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
        }}
      >

            <div id={id} className='row__posters'>
                {movies.map(movie => ( <SwiperSlide>
                    <img
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`https://image.tmdb.org/t/p/original/${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={()=>handleClick(movie)}
                    /></SwiperSlide>
                ))}
                </div>
            </Swiper>
       


                {modalOpen && <MovieModal {...movieSelected} setModalOpen={setModalOpen} /> }


    </section>
  )
}
