/*import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.stories.js/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);*/

import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

