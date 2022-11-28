import { actionTypes } from "../../constants/action-type";

export const askQestion = (data) => {
  return async function (dispatch) {
      try {
          const response = await fetch(`${process.env.REACT_APP_BASE_URL}/createQuestion?title=${data.title}&question=${data.question}&patientAbout=${data.patientAbout}&location=${data.location}&date=${data.date}`, {
              method: 'POST',
              headers: {
                  'Content-type': 'application/json',
                  'Accept': 'application/json',
              },
          });
          const result = await response.json()
          if (response.status >= 200 && response.status < 400) {
              dispatch({ type: actionTypes.POST_QUESTION, payload: result })
          }
          else {
              console.log('You are not authorized')
              dispatch({ type: actionTypes.POST_QUESTION_ERR })
          }
      } catch (err) {
      }
  }
}

export const getQuestions = () => {
    return async function (dispatch) {
        try {
            const response = await fetch(`${process.env.REACT_APP_BASE_URL}/questions`, {
                method: 'GET',
                headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            const result = await response.json()
            if (response.status >= 200 && response.status < 400) {
                dispatch({ type: actionTypes.ALL_QUESTIONS, payload: result })
            }
            else {
                console.log('You are not authorized')
                dispatch({ type: actionTypes.ALL_QUESTIONS_ERR })
            }
        } catch (err) {
        }
    }
  }
