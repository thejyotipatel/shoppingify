import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  HANDLE_CHANGE,
  DISPLAY_ITEM_DETAILS,
  DELETE_ITEM,
  ADD_ITEM_TO_LIST,
  BACK_BUTTEN,
  ADD_ITEM_TOOGLE_BUTTON,
  DELETE_ITEM_TO_LIST,
} from './action'
import { initalState } from './appContext'

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: 'warning',
      alertText: 'Please provide all values!',
    }
  }
  if (action.type === CLEAR_ALERT) {
    return {
      ...state,
      showAlert: false,
      alertType: '',
      alertText: '',
    }
  }
  if (action.type === BACK_BUTTEN) {
    return {
      ...state,
      detailBox: false,
      addItemBox: false,
      listsBox: true,
    }
  }
  if (action.type === HANDLE_CHANGE) {
    return {
      ...state,
      [action.payload.name]: action.payload.value,
    }
  }
  if (action.type === DISPLAY_ITEM_DETAILS) {
    return {
      ...state,
      itemDetails: action.payload.item,
      detailBox: true,
      addItemBox: false,
      listsBox: false,
    }
  }
  if (action.type === DELETE_ITEM) {
    return {
      ...state,
      listOfItems: action.payload.list,
      detailBox: false,
      addItemBox: false,
      listsBox: true,
      showAlert: true,
      alertType: 'warning',
      alertText: 'Item is deleted!',
    }
  }
  if (action.type === ADD_ITEM_TOOGLE_BUTTON) {
    return {
      ...state,
      detailBox: false,
      addItemBox: true,
      listsBox: false,
    }
  }
  if (action.type === ADD_ITEM_TO_LIST) {
    return {
      ...state,
      // shoopingList: [...action.payload.lists],
      detailBox: false,
      addItemBox: false,
      listsBox: true,
      showAlert: true,
      alertType: 'success',
      alertText: 'Item is added!',
    }
  }
  if (action.type === DELETE_ITEM_TO_LIST) {
    return {
      ...state,
      shoopingList: action.payload.list,
      detailBox: false,
      addItemBox: false,
      listsBox: true,
      showAlert: true,
      alertType: 'warning',
      alertText: 'Item is deleted!',
    }
  }

  throw new Error(`no such action type: ${action.type}`)
}

export default reducer
