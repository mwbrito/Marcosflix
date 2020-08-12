import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Pages/Home/';
import CadastroVideo from './Pages/cadastro/video';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroCategoria from './Pages/cadastro/Categoria';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
      <Route path="/cadastro/video" component={CadastroVideo}/>
      <Route component={() => (<div>Pagina 404</div>)} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
); 