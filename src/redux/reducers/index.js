import { combineReducers } from "redux";
import { all_Questions, ask_Question, Doctors, lab_Tests, top_Searched_Doctors, user_data } from "./reducer";

export const reducers= combineReducers(
    {
        lab_Tests:lab_Tests,
        Doctors:Doctors,
        top_Searched_Doctors: top_Searched_Doctors,
        user_data: user_data,
        ask_Question: ask_Question,
        all_Questions: all_Questions
    }
)
