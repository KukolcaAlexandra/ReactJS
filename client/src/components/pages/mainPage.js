import React from 'react';
import MainHeaderContainer from '../header/mainHeaderContainer/mainHeader.container';
import SortBar from '../main/sortBar/sortBar.component';
import NoFilmFound from '../main/noFilmFound/noFilmFound.component';

export default function MainPage() {
  return (
    <>
      <MainHeaderContainer />
      <SortBar />
      <NoFilmFound />
    </>
  );
}
