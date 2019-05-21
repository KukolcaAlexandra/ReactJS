// @flow

import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import DescriptionHeader from '../descriptionHeader/descriptionHeader.component';
import { loadMovies } from '../../../actions/movieActions';
import resetSelectedMovie from '../../../actions/selectedMovieActions';

type Data = {
  id: number,
  release_date: string,
  poster_path: string,
  title: string,
  tagline: string,
  runtime: number,
  overview: string,
  genres: Array<string>,
}

type SelectedMovie = {
  data: Data,
}

type Props = {
  selectedMovie: SelectedMovie,
  match: Function,
  location: any,
  history: any,
  loadMovies: Function,
  resetSelectedMovie: Function,

};

class DescriptionHeaderContainer extends React.Component<Props> {
  onBackButton = () => {
    this.props.resetSelectedMovie();
    this.props.loadMovies();
    this.props.history.goBack();
  }

  render() {
    const {
      selectedMovie,
    } = this.props;


    return (
      <ErrorBoundary>
        <DescriptionHeader
          data={selectedMovie}
          onClick={this.onBackButton}
        />
      </ErrorBoundary>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedMovie: state.selectedMovie.data,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMovies: () => dispatch(loadMovies()),
    resetSelectedMovie: () => dispatch(resetSelectedMovie()),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DescriptionHeaderContainer));
