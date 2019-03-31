import React from 'react';
import ErrorBoundary from '../common/errorBoundary/errorBoundary.component';
import MainHeader from './mainHeader/mainHeader.component';
import DescriptionHeader from './descriptionHeader/descriptionHeader.component';

export default function Header(props) {
  
  const { 
    selectedMovie,
    onBackButton,
    onInputChangeHandler,
    onClickEnterButton,
    onClickSearchButton,
    onClickFilterButton,
    searchBy
  } = props;
    
  return (
    <ErrorBoundary>
      {selectedMovie ? (
        <DescriptionHeader
          data={selectedMovie}
          onClick={onBackButton}
        />
      ):(
        <MainHeader
          onInputChange={onInputChangeHandler}
          onClickEnterButton={onClickEnterButton}
          onClickSearchButton={onClickSearchButton}
          onClickFilterButton={onClickFilterButton}
          searchBy={searchBy}
        />
      )}
    </ErrorBoundary>
  );
}
