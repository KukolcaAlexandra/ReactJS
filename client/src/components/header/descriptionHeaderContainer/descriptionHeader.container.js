import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import DescriptionHeader from '../descriptionHeader/descriptionHeader.component';
import { loadMovies } from '../../../actions/movieActions';
import resetSelectedMovie from '../../../actions/selectedMovieActions';

class DescriptionHeaderContainer extends React.Component {
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

DescriptionHeaderContainer.propTypes = {
  selectedMovie: PropTypes.object,
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

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
