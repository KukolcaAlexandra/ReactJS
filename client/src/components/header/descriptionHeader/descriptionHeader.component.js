import React from 'react';
import styles from '../header.css';
import Button from '../../common/button/button.component';

export default function DescriptionHeader (props) {
  
  const release_date = new Date(props.data.release_date);
  return (
    <div className={styles.header}>
      <div className={styles.buttonBlock}>
        <Button
          title='SEARCH'
          onClick={props.onClick}
          size='medium'/>
      </div>
      <div className={styles.container}>
        <img className={styles.image} src={props.data.poster_path}/>
        <div className={styles.descriptionBlock}>
          <h1>{props.data.title}</h1>
          <h2>{props.data.tagline}</h2>
          <div className={styles.dateBlock}>
            <p>{release_date.getFullYear()}</p>
            <p>{props.data.runtime} min</p>
          </div>
          <p className={styles.description}>{props.data.overview}</p>
        </div>
      </div>
    </div>
  )
}
