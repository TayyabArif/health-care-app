import { actionTypes } from "../constants/action-type";

const initialState ={
  loading: true,
  labTests: [],
  doctors: [],
  topSearchedDoctor: [],
  isCityLab: false,
  user: null,
  isAsked: false,
  allQuestions: [],
  allSpecialists: []
}

export const user_data = (state = initialState, { type, payload }) => {
  switch (type) {
        case actionTypes.SIGNUP:
          return {
              ...state, user: payload, loading: false
          };
         case actionTypes.LOGIN:
            return {
                ...state, user: payload, loading: false
         };
        case actionTypes.SIGNUP_ERR:
          return {
              ...state, loading: false
          }
         default:
          return { ...state }
  }
}

export const lab_Tests = (state = initialState, { type, payload }) => {
  switch (type) {
        case actionTypes.GET_LAB_TEST_NAME:
          return {
              ...state, labTests: payload, loading: false, isCityLab: false
          };
        case actionTypes.GET_LAB_TEST_CITY:
            return {
                ...state, labTests: payload, loading: false, isCityLab: true
          };
          case actionTypes.GET_LAB_TEST_CITY_ERR:
            return {
                ...state, loading: false, isCityLab: false
           };
        case actionTypes.GET_LAB_TEST_NAME_ERR:
          return {
              ...state, loading: false, isCityLab: false
          };
        default:
          return { ...state }
  }
}

export const Doctors = (state = initialState, { type, payload }) => {
  switch (type) {
      case actionTypes.GET_DOCTORS:
          return {
              ...state, doctors: payload, loading: false
          };
      case actionTypes.GET_DOCTORS_ERR:
          return {
              ...state, loading: false
          }
      default:
          return { ...state }
  }
}

export const top_Searched_Doctors = (state = initialState, { type, payload }) => {
  switch (type) {
      case actionTypes.GET_TOP_SEARCHED_DOCTORS:
          return {
              ...state, topSearchedDoctor: payload, loading: false
          };
      case actionTypes.GET_TOP_SEARCHED_DOCTORS_ERR:
          return {
              ...state, loading: false
          }
      default:
          return { ...state }
  }
}

export const all_Specialists = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.ALL_SPECIALISTS:
            return {
                ...state, allSpecialists: payload, loading: false
            };
        case actionTypes.ALL_SPECIALISTS_ERR:
            return {
                ...state, loading: false
            }
        default:
            return { ...state }
    }
  }

export const ask_Question = (state = initialState, { type, payload }) => {
  switch (type) {
      case actionTypes.POST_QUESTION:
          return {
              ...state, loading: false, isAsked: true
          };
      case actionTypes.POST_QUESTION_ERR:
          return {
              ...state, loading: false, isAsked: false
          }
      default:
          return { ...state }
  }
}

export const all_Questions = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionTypes.ALL_QUESTIONS:
            return {
                ...state, allQuestions: payload , loading: false
            };
        case actionTypes.ALL_QUESTIONS_ERR:
            return {
                ...state, loading: false
            }
        default:
            return { ...state }
    }
  }
