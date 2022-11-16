import { SET_QUESTION } from './action'
import { initalState } from './appContext'

const reducer = (state, action) => {
  if (action.type === SET_QUESTION) {
    return {
      ...state,

      // showAlert: true,
      Question: state.Question,
      alertText: 'Please provide all values!',
    }
  }

  throw new Error(`no such action type: ${action.type}`)
}

export default reducer
