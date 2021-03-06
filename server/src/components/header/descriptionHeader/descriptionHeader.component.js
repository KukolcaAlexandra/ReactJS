import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import styles from '../header.css';
import Button from '../../common/button/button.component';

function DescriptionHeader (props) {
  
  const release_date = props.data && new Date(props.data.release_date);
  return (
    <div className={styles.header}>
      <div className={styles.buttonBlock}>
        <Button
          title='SEARCH'
          onClick={props.onClick}
          size='medium'/>
      </div>
      <div className={styles.container}>
        <img className={styles.image} src={props.data && props.data.poster_path}/>
        <div className={styles.descriptionBlock}>
          <h1>{props.data && props.data.title}</h1>
          <h2>{props.data && props.data.tagline}</h2>
          <div className={styles.dateBlock}>
            <p>{release_date && release_date.getFullYear()}</p>
            <p>{props.data && props.data.runtime} min</p>
          </div>
          <p className={styles.description}>{props.data && props.data.overview}</p>
        </div>
      </div>
    </div>
  )
}

DescriptionHeader.propTypes = {
  data: PropTypes.object,
  onClick: PropTypes.func
}

export default withRouter(DescriptionHeader);
