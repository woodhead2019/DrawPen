import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './components/Application';
import { applyToolbarColorPalette } from './components/constants';

console.log('[DRAWPEN]: Main page loading...');

const root = createRoot(document.getElementById('root'));

window.electronAPI.invokeGetSettings().then((settings) => {
  console.log('[DRAWPEN]: Main page settings: ', settings);

  applyToolbarColorPalette(settings.toolbar_color_palette);

  root.render(
    <Application {...settings} />
  );
})
