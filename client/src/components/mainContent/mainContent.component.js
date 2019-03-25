import React from 'react';
import styles from './mainContent.css';
import createMovieBlock from '../movieBlock/movieBlock.component';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    /*let content;
    if (data && data.length > 0) {
      content = ""
    }*/
    const listItems = data.map((data) =>
      createMovieBlock(data)
    );

    return (
      <>
        <div className={styles.main}>
          { !data || data.length <= 0 && (<p>No films found</p>) }
          {listItems}
        </div>
      </>
    );
  }
}

export default Main;
