import { actionTypes } from "../../constants/action-type";

export const Doctors_Speciality_List = (data) => {
  return async function (dispatch) {
      try {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Doctors/?speciality=${data}`, {
              method: 'GET',
              headers: {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
              },
          });
          const result = await response.json()
          if (response.status >= 200 && response.status < 400) {
              dispatch({ type: actionTypes.GET_DOCTORS, payload: result })
          }
          else {
              console.log('You are not authorized')
              dispatch({ type: actionTypes.GET_DOCTORS_ERR })
          }
      } catch (err) {
          console.log('error')
      }
  }
}

export const Doctors_Disease_List = (data) => {
    return async function (dispatch) {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/Doctors/?work=${data}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            const result = await response.json()
            if (response.status >= 200 && response.status < 400) {
                dispatch({ type: actionTypes.GET_DOCTORS, payload: result })
            }
            else {
                console.log('You are not authorized')
                dispatch({ type: actionTypes.GET_DOCTORS_ERR })
            }
        } catch (err) {
            console.log('error')
        }
    }
  }
