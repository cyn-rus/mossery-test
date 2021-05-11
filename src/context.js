import React, { useState, useEffect } from 'react'

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confPassword: "",
  dob: new Date()
}

export const AppContext = React.createContext({ formData: {...initialValues}, setFormData: () => null})

export const AppProvider = ({children}) => {

  const [formData, setFormData] = useState(initialValues);

  useEffect(() => {
    if (localStorage.getItem('formData')){
      const data = localStorage.getItem(('formData'));
      setFormData(JSON.parse(data));
    }
  }, []);

  return (
    <AppContext.Provider value={{formData, setFormData}}>
      {children}
    </AppContext.Provider>
  ) 
}

export default AppProvider;