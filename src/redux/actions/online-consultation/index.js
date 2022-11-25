import { actionTypes } from "../../constants/action-type";

export const topSearched = () => {
  return async function (dispatch) {
      try {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/specialities?top=true`, {
              method: 'GET',
              headers: {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
              },
          });
          const result = await response.json()
          if (response.status >= 200 && response.status < 400) {
              dispatch({ type: actionTypes.GET_TOP_SEARCHED_DOCTORS, payload: result })
          }
          else {
              console.log('You are not authorized')
              dispatch({ type: actionTypes.GET_TOP_SEARCHED_DOCTORS_ERR })
          }
      } catch (err) {
      }
  }
}

export const allSpecialities = () => {
    return async function (dispatch) {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/specialities`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            const result = await response.json()
            if (response.status >= 200 && response.status < 400) {
                dispatch({ type: actionTypes.ALL_SPECIALISTS, payload: result })
            }
            else {
                console.log('You are not authorized')
                dispatch({ type: actionTypes.ALL_SPECIALISTS_ERR })
            }
        } catch (err) {
            debugger
        }
    }
  }
