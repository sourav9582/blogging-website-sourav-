import React, { useState } from 'react';
import { Editorstate } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'; 
// import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Blog from './pages/Blog';
import Home from './pages/Home';
import RichTextEditor from './components/RichTextEditor';

const App = () => {
  
  return (
    
    <div className='container'>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blog/:id' component={Blog} />
        <Redirect to='/' />
      </Switch>
     {/* <RichTextEditor /> */}
    </div>
  );
};

export default App;
