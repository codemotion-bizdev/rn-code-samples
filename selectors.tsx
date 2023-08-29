import { createSelector } from 'reselect'

const selectChangeMcc = state => state.changeMcc

export const getMccCategoriesSelector = () =>
  createSelector(selectChangeMcc, state => state.mccCategories)

export const isGetMccCategoriesLoadingSelector = () =>
  createSelector(selectChangeMcc, state => state.isGetMccCategoriesLoading)

export const isChangeMccCategoryLoadingSelector = () =>
  createSelector(selectChangeMcc, state => state.isChangeMccCategoryLoading)
