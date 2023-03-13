import { compose } from '@reduxjs/toolkit';

import { withDnD } from 'app/providers/with-DnD';
import { withStore } from 'app/providers/with-store';

export const withProviders = compose(withStore, withDnD);
