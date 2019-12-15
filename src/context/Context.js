import React from 'react';

const initialContext = {
  state: null,
  dispatch: () => {}
};

const ApplicationContext = React.createContext(initialContext);

export default ApplicationContext;
