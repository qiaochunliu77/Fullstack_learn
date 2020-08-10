import * as React from 'react';
import { Header, About } from './components/index';

export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <Header />
      <About />
    </div>
  );
}