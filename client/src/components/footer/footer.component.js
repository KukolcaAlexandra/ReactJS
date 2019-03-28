import React from 'react';
import ErrorBoundary from '../common/errorBoundary/errorBoundary.component';
import styles from './footer.css';

export default function createFooter() {
  return (
    <ErrorBoundary>
      <div className={styles.footer}>netfixroulette</div>
    </ErrorBoundary>
  );
}
