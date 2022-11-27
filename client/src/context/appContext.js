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
  DISPLAY_ITEM_DETAILS,
  DELETE_ITEM,
  ADD_ITEM_TO_LIST,
  BACK_BUTTEN,
  ADD_ITEM_TOOGLE_BUTTON,
  DELETE_ITEM_TO_LIST,
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
  itemDetails: {},
  item: null,
  name: '',
  note: '',
  imageUrl: '',
  category: '',
  showAlert: false,
  alertText: '',
  alertType: '',
  detailBox: false,
  addItemBox: false,
  listsBox: true,
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

  const backButten = () => {
    dispatch({ type: BACK_BUTTEN })
  }
  const addItemBtn = () => {
    dispatch({ type: ADD_ITEM_TOOGLE_BUTTON })
  }

  const displayDetailItem = (item) => {
    dispatch({ type: DISPLAY_ITEM_DETAILS, payload: { item } })
  }

  const deleteItem = (id) => {
    let list = state.listOfItems.filter((item) => item.id !== id)
    dispatch({ type: DELETE_ITEM, payload: { list } })
    console.log(list)
    clearAlert()
  }

  const addItemToList = (id) => {
    let list = state.listOfItems.filter((item) => item.id === id)
    let item = state.shoopingList.filter((i) => i.id === id)
    console.log(item)
    // if(list.id === item.id){}
    state.shoopingList.unshift(list)
    // dispatch({ type: ADD_ITEM_TO_LIST, payload: { list } })
    console.log(state.shoopingList)
    clearAlert()
  }

  const deleteItemToList = (id) => {
    let list = state.shoopingList.filter((item) => item.id !== id)
    console.log(list)
    dispatch({ type: DELETE_ITEM_TO_LIST, payload: { list } })
    console.log(list)
    clearAlert()
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        handleChange,
        displayAlert,
        backButten,
        addItemBtn,
        clearAlert,
        displayDetailItem,
        deleteItem,
        addItemToList,
        deleteItemToList,
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
