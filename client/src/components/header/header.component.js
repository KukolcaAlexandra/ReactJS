import React from 'react';
import ErrorBoundary from '../common/errorBoundary/errorBoundary.component';
import createMainHeader from './mainHeader/mainHeader.component';
import createDescriptionHeader from './descriptionHeader/descriptionHeader.component';

class Header extends React.Component {
  
  render() {
    const { 
      selectedMovie,
      onBackButton,
      onInputChangeHandler,
      onClickEnterButton,
      onClickSearchButton,
      onClickFilterButton,
      searchBy
    } = this.props;
    
    return selectedMovie ? (
      <ErrorBoundary>
        {createDescriptionHeader(selectedMovie, onBackButton)} 
      </ErrorBoundary>
    ):(
      <ErrorBoundary>
        { createMainHeader(
          onInputChangeHandler,
          onClickEnterButton,
          onClickSearchButton,
          onClickFilterButton,
          searchBy) 
        }
      </ErrorBoundary>
    );
  }
}

export default Header;
