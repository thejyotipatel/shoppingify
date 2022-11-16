import React, { useContext, useReducer } from 'react'
import reducer from './reducer'
import {
  CLEAR_VALUES,
  HANDLE_CHANGE,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  SET_QUESTION,
  DISPLAY_ALERT,
  CLEAR_ALERT,
} from './action'
import List from '../utils/List'
const initalState = {
  listOfItems: List,
  filterItems: [],
  searchQuery: '',
  shoopingList: [],
  alertType: '',
  isLoading: false,
  showAlert: false,
  alertText: '',
  item: null,
  name: '',
  note: '',
  imageUrl: '',
  category: '',
  showAlert: false,
  alertText: '',
  alertType: '',
}

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState)

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } })
  }
  const filterItem = (query) => {
    // filterItems = state.listOfItems.filter(item=> )
  }
  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT })
    clearAlert()
  }

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT })
    }, 1000)
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        displayAlert,
        clearAlert,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  return useContext(AppContext)
}

export { AppProvider }
