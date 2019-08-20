import {InitialState} from './MainReducerState';
const MainReducer = (state = InitialState, action) => {
    switch (action.type) {
      case 'Show_Menu':
        return [
            ...state,
            {
                ShowMenu: false
            }
        ]
      default:
        return state
    }
  }
  
  export default MainReducer