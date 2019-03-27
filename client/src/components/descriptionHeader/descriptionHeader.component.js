import React from 'react';
import styles from './descriptionHeader.css';
import createButton from '../button/button.component';

class DescriptionHeader extends React.Component {
  
  render() {
    const { 
      data,
      onClickSearchButton,
    } = this.props;

    //console.log(selectedMovie);
    const release_date = new Date(data.release_date);
    console.log(release_date);

    return (
      <div className={styles.header}>
        <div className={styles.buttonBlock}>
        {createButton('SEARCH', onClickSearchButton, 'medium')}
        </div>
        <div className={styles.container}>
          <img className={styles.image} src={data.poster_path}/>
          <div className={styles.descriptionBlock}>
            <h1>{data.title}</h1>
            <h2>{data.tagline}</h2>
            <div className={styles.dateBlock}>
              <p>{release_date.getFullYear()}</p>
              <p>{data.runtime} min</p>
            </div>
            <p className={styles.description}>{data.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default DescriptionHeader;
