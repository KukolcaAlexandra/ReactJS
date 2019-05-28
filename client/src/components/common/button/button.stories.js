import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './button.component';

const title = 'SEARCH';
const loadMoreTitle = 'Load More';
const onClickSearchByButton = () => {
  console.log('onClickSearchByButton');
};
storiesOf('Buttons', module)
  .add('smallButton', () => (
    <div>
        <p>
            <Button
              title={title}
              onClick={onClickSearchByButton}
              size="small"
              pressed={true}
            >
              Small
            </Button>
        </p>
        <Button
          title={title}
          onClick={onClickSearchByButton}
          size="small"
          pressed={false}
        >
          Small
        </Button>
    </div>
  ))
  .add('mediumButton', () => (
    <Button
      title={title}
      onClick={onClickSearchByButton}
      size="medium"
      pressed={true}
    >
      Medium
    </Button>
  ))
  .add('bigButton', () => (
    <Button
      title={title}
      onClick={onClickSearchByButton}
      size="big"
      pressed={true}
    >
      Big
    </Button>
  ))
  .add('loadMoreButton', () => (
    <Button
      title={loadMoreTitle}
      onClick={onClickSearchByButton}
      size="loadMore"
      pressed={true}
    >
      Load more
    </Button>
  ));
