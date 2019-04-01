import React from 'react';
import ErrorBoundary from '../common/errorBoundary/errorBoundary.component';
import MainHeader from './mainHeader/mainHeader.component';
import DescriptionHeader from './descriptionHeader/descriptionHeader.component';

class Header extends React.Component {
  state = {
    searchValue: '',
  }

  onClickEnterButton = (event) => {
    if (event.keyCode === 13) {
      props.onClickSearchButton();
    }
  }
  
  onInputChangeHandler = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  render() {
    const { 
      selectedMovie,
      onBackButton,
      onClickSearchButton,
      onClickFilterButton,
      searchBy
    } = this.props;
    
    return (
      <ErrorBoundary>
        {selectedMovie ? (
          <DescriptionHeader
            data={selectedMovie}
            onClick={onBackButton}
          />
        ):(
          <MainHeader
            onInputChange={this.onInputChangeHandler}
            onClickEnterButton={this.onClickEnterButton}
            onClickSearchButton={()=>onClickSearchButton(this.state.searchValue)}
            onClickFilterButton={onClickFilterButton}
            searchBy={searchBy}
          />
        )}
      </ErrorBoundary>
    );
  }
}

export default Header;
