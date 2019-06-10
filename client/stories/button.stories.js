import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../src/components/common/button/button.component';

const title = 'SEARCH';
const loadMoreTitle = 'Load More';
const onClickSearchByButton = () => {
  console.log('onClickSearchByButton');
};
storiesOf('Buttons', module)
  .add('smallButton', () => (
    <div>
        <p>
            <Button title={title} onClick={onClickSearchByButton} size="small" pressed={true}/>
        </p>
        <Button title={title} onClick={onClickSearchByButton} size="small" pressed={false}/>
    </div>
  ))
  .add('mediumButton', () => (
    <Button title={title} onClick={onClickSearchByButton} size="medium" pressed={true}/>
  ))
  .add('bigButton', () => (
    <Button title={title} onClick={onClickSearchByButton} size="big" pressed={true}/>
  ))
  .add('loadMoreButton', () => (
    <Button title={loadMoreTitle} onClick={onClickSearchByButton} size="loadMore" pressed={true}/>
  ));
