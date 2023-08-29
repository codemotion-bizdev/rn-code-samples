import { createReducer } from 'redux-act'
import produce from 'immer'
import { getMccCategories, getMccCategoriesLoading, changeMccCategoryLoading } from './actions'

const initialState = {
  isChangeMccCategoryLoading: false,
  isGetMccCategoriesLoading: false,
  mccCategories: []
}

export default createReducer(
  {
    [changeMccCategoryLoading.success]: state =>
      produce(state, nextState => {
        nextState.isChangeMccCategoryLoading = true
      }),
    [changeMccCategoryLoading.failure]: state =>
      produce(state, nextState => {
        nextState.isChangeMccCategoryLoading = false
      }),
    [getMccCategories.success]: (state, payload) =>
      produce(state, nextState => {
        nextState.mccCategories = payload
      }),
    [getMccCategoriesLoading.success]: state =>
      produce(state, nextState => {
        nextState.isGetMccCategoriesLoading = true
      }),
    [getMccCategoriesLoading.failure]: state =>
      produce(state, nextState => {
        nextState.isGetMccCategoriesLoading = false
      })
  },
  initialState
)
