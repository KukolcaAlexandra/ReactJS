import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ErrorBoundary from '../../common/errorBoundary/errorBoundary.component';
import DescriptionHeader from '../descriptionHeader/descriptionHeader.component';
import { resetSelectedMovie } from '../../../actions/selectedMovieActions';
import { fetchMovieById } from '../../../modules/movies';

export class DescriptionHeaderContainer extends React.Component {

  componentWillMount() {
    this.props.fetchMovieById(this.props.movieId);
  }

  onBackButton = () => {
    this.props.resetSelectedMovie();
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
  fetchMovieById: PropTypes.func,
}

function mapStateToProps(state, props) {
  return { 
    selectedMovie: state.movies.selectedMovie,
    movieId: props.match.params.id,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resetSelectedMovie: () => dispatch(resetSelectedMovie()),
    fetchMovieById: (id) => dispatch(fetchMovieById(id))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DescriptionHeaderContainer));
