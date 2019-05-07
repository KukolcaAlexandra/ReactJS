import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchMovies } from '../../modules/movies';
import MainPage from './MainPage';

const mapStateToProps = state => ({
  movies: state.movies.items,
  loading: state.movies.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
