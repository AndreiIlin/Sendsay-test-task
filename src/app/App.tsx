import React from 'react';

import { MainPage } from 'pages';

import { withProviders } from 'app/providers';
import './index.scss';

const App = () => <MainPage />;

export const AppWithProviders = withProviders(App);
