import React from 'react';
import { createRoot } from 'react-dom/client';
import Settings from './components/Settings';
import { applyToolbarColorPalette } from '../app_page/components/constants';

console.log('[DRAWPEN]: Settings page loading...');

const root = createRoot(document.getElementById('root'));

window.electronAPI.getConfiguration().then((config) => {
  console.log('[DRAWPEN]: Settings page config: ', config);

  applyToolbarColorPalette(config.toolbar_color_palette);

  root.render(
    <Settings {...config} />
  );
})
