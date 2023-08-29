import { actionCreator } from '@utils'

import {
  MODULE_NAME,
  GET_MCC_CATEGORIES,
  GET_MCC_CATEGORIES_LOADING,
  CHANGE_MCC_CATEGORY,
  CHANGE_MCC_CATEGORY_LOADING
} from './constants'

const action = actionCreator(MODULE_NAME)

export const getMccCategories = action(GET_MCC_CATEGORIES)
export const getMccCategoriesLoading = action(GET_MCC_CATEGORIES_LOADING)
export const changeMccCategory = action(CHANGE_MCC_CATEGORY)
export const changeMccCategoryLoading = action(CHANGE_MCC_CATEGORY_LOADING)
