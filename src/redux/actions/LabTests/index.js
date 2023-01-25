import { actionTypes } from "../../constants/action-type";

export const cityLabTests = (data) => {
  console.log('data is', data)
  return async function (dispatch) {
      try {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/LabTests?city=${data}`, {
              method: 'GET',
              headers: {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
              },
          });
          const result = await response.json()
          if (response.status >= 200 && response.status < 400) {
              dispatch({ type: actionTypes.GET_LAB_TEST_CITY, payload: result })
          }
          else {
              console.log('You are not authorized')
              dispatch({ type: actionTypes.GET_LAB_TEST_CITY_ERR })
          }
      } catch (err) {
          console.log('error')
      }
  }
}

export const labTests = (data) => {
  console.log('data is', data)
  return async function (dispatch) {
      try {
          console.log('url is', `${process.env.REACT_APP_BASE_URL}/LabTests?name=${data}`)
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/LabTests?name=${data}`, {
              method: 'GET',
              headers: {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
              },
          });
          const result = await response.json()
          if (response.status >= 200 && response.status < 400) {
              dispatch({ type: actionTypes.GET_LAB_TEST_NAME, payload: result })
          }
          else {
              console.log('Your Data is not loaded')
              dispatch({ type: actionTypes.GET_LAB_TEST_NAME_ERR})
          }
      } catch (err) {
        console.log('error')
      }
  }
}

export const addTest = (data) => {
    console.log('data is', data)
    return async function (dispatch) {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/book`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: (data)
            });
            const result = await response.json()
            if (response.status >= 200 && response.status < 400) {
                dispatch({ type: actionTypes.POST_TEST, payload: result })
            }
            else {
                console.log('Your Data is not loaded')
                dispatch({ type: actionTypes.POST_TEST_ERR})
            }
        } catch (err) {
            console.log('error')
        }
    }
  }
