import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './components/styles/slide.css'

import Projects from './components/S2_projects/Projects';
import Presentation from './components/S1_presentation/Presentation';
import Contact from './components/S4_contact/Contact';
import ZindexPage from './components/ScrollEffect/ZindexPage';
import ScrollBehavior from './components/ScrollEffect/ScrollBehavior';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import pageCountRedux from './components/ScrollEffect/pageCountRedux';


const store = configureStore({
  reducer: {
    pageCount: pageCountRedux
  }
})

    
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <Presentation />
    <Projects />
    <Contact />

    <ZindexPage />
    <ScrollBehavior />
    </Provider>
  </React.StrictMode>,
)
