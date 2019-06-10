// @flow

import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from '../header.css';
import Button from '../../common/button/button.component';

type Data = {
  id: number,
  release_date: string,
  poster_path: string,
  title: string,
  tagline: string,
  runtime: number,
  overview: string,
  genres: Array<string>,
  vote_average: number,
}

type Props = {
  data: Data,
  onClick: Function,
};

function DescriptionHeader(props: Props) {
  const releaseDate = props.data && new Date(props.data.release_date);
  return (
    <div className={styles.header}>
      <div className={styles.buttonBlock}>
        <Button
          title='SEARCH'
          onClick={props.onClick}
          size='medium'>
          SEARCH
        </Button>
      </div>
      <div className={styles.container}>
        <img className={styles.image} src={props.data && props.data.poster_path}/>
        <div className={styles.descriptionBlock}>
          <h1>{props.data && props.data.title}</h1>
          <h2>{props.data && props.data.tagline}</h2>
          <div className={styles.dateBlock}>
            <p>{releaseDate && releaseDate.getFullYear()}</p>
            <p>{props.data && props.data.runtime} min</p>
          </div>
          <p className={styles.description}>{props.data && props.data.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default withRouter(DescriptionHeader);
