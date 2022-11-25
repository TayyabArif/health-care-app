import { actionTypes } from "../../constants/action-type";

export const Signup = (data) => {
  return async function (dispatch) {
      try {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/createuser?name=${data.name}&email=${data.email}&password=${data.password}&degree=${data.degree}&speciality={${data.speciality}&type=${data.type}&phone=${data.phoneNumber}`, {
              method: 'POST',
              headers: {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
              },
          });
          const result = await response.json()
          if (response.status >= 200 && response.status < 400) {
            dispatch({ type: actionTypes.SIGNUP, payload: result })
          }
          else {
              console.log('You are not authorized')
              dispatch({ type: actionTypes.SIGNUP_ERR })
          }
      } catch (err) {
          debugger
      }
  }
}

export const Login = (data) => {
    return async function (dispatch) {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/users?email=${data.email}&password=${data.password}`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            const result = await response.json()
            if (response.status >= 200 && response.status < 400) {
                localStorage.setItem('Type', result[0].type)
                localStorage.setItem('Name', result[0].name)
                dispatch({ type: actionTypes.LOGIN, payload: result })
            }
            else {
                console.log('You are not authorized')
                dispatch({ type: actionTypes.LOGIN_ERR })
            }
        } catch (err) {
            debugger
        }
    }
  }
