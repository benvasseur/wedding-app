import 'vuetify/styles';
import { createVuetify } from 'vuetify';

import { aliases, custom } from '../assets/iconsets/custom';

export default createVuetify({
  icons: {
    defaultSet: 'custom',
    aliases,
    sets: {
      custom,
    },
  },
});
