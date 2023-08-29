import { call, put, takeLatest } from 'redux-saga/effects';
import i18n from 'i18n-js';
import { toaster } from '@utils';
import {
  changeMccCategory,
  changeMccCategoryLoading,
  getMccCategories,
  getMccCategoriesLoading,
} from './actions';
import api from '../api';
import Toast from 'react-native-toast-message';

function* changeMccCategorySaga({ payload }) {
  try {
    yield put(changeMccCategoryLoading.success());
    const newTransaction = yield call(api.changeMccCategory, payload);

    yield put(changeMccCategory.success(newTransaction));
    Toast.show({
      type: 'success',
      text1: i18n.t('toaster.mccCategory.update'),
    });
  } catch ({ error }) {
    console.warn(error);
  } finally {
    yield put(changeMccCategoryLoading.failure());
  }
}

function* getMccCategoriesSaga() {
  try {
    yield put(getMccCategoriesLoading.success());

    const mccCategories = yield call(api.getMccCategories);

    yield put(getMccCategories.success(mccCategories));
  } catch ({ error }) {
    console.warn(error);
  } finally {
    yield put(getMccCategoriesLoading.failure());
  }
}

function* combineSagas() {
  yield takeLatest(changeMccCategory.request, changeMccCategorySaga);
  yield takeLatest(getMccCategories.request, getMccCategoriesSaga);
}

export default combineSagas;
