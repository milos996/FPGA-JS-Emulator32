import React, { useReducer } from 'react';
import HomePage from './pages/HomePage';
import ApplicationContext from './context/Context';
import { reducer, initialState } from './store/Reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <ApplicationContext.Provider value={{ state, dispatch }}>
        <HomePage />
      </ApplicationContext.Provider>
    </div>
  );
}

export default App;
