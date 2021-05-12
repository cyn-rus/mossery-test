import React, { useState, useEffect } from 'react'

const initialValues = {
  firstName: "a",
  lastName: "b",
  email: "a@gmail.com",
  password: "Abcdefghi0)",
  confPassword: "Abcdefghi0)",
  dob: new Date(),
  agreement: false,
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