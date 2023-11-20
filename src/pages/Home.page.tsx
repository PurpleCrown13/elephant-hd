import React from 'react';
import useSWR from 'swr';
import { HeaderSearch } from '@/components/Header/HeaderSearch';
import { FooterSimple } from '@/components/Footer/FooterSimple';
import { BadgeCard } from '@/components/BadgeCard/BadgeCard';
import { Loader } from '@mantine/core';

interface ApiFilm {
  image: string;
  title: string;
  genre: string;
  description: string;
  badges: string;
  movie_link: string;
  sub_ru: string;
  sub_en: string;
  sub_ua: string;
}

interface MovieData {
  image: string;
  title: string;
  genre: string;
  description: string;
  badges: { label: string }[];
  movie_link: string;
  sub_ru: string;
  sub_en: string;
  sub_ua: string;
}

const fetchFilms = async (): Promise<MovieData[]> => {
  const response = await fetch('http://hellafragilesite.com/films/get_films.php');
  const data: ApiFilm[] = await response.json();

  return data.map((item) => ({
    image: item.image,
    title: item.title,
    genre: item.genre,
    description: item.description,
    sub_ru: item.sub_ru,
    sub_ua: item.sub_ua,
    sub_en: item.sub_en,
    movie_link: item.movie_link,
    badges: item.badges.split(',').map((badge) => ({ label: badge.trim() })),
  }));
};

export function HomePage() {
  const { data: apiData, error } = useSWR<MovieData[]>('films', fetchFilms);

  if (!apiData && !error) {
    return (
      <div>
        <HeaderSearch />
        <div className='loader' >
          <Loader color="#8F3535" />
        </div>
        <FooterSimple />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <HeaderSearch />
        <p style={{ color: 'red' }}>Ошибка при загрузке данных</p>
        <FooterSimple />
      </div>
    );
  }

  return (
    <div>
      <HeaderSearch />
      <div className='container'>
        <div className='movies'>
          {apiData.map((data, index) => (
            <div className='movie' key={index}>
              <BadgeCard
                image={data.image}
                title={data.title}
                genre={data.genre}
                description={data.description}
                badges={data.badges}
                sub_ru={data.sub_ru}
                sub_en={data.sub_en}
                sub_ua={data.sub_ua}
                movie_link={data.movie_link}
              />
            </div>
          ))}
        </div>
      </div>
      <FooterSimple />
    </div>
  );
}
