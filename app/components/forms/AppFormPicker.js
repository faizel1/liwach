import React from 'react';
import {useFormik, useFormikContext} from 'formik';

import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage';
import {StyleSheet, Text, View} from 'react-native';

export default function AppFormPicker({
  items,
  name,
  numberOfColumns,
  PickerItemComponent,
  placeholder,
}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
numberOfColumns
        onSelectedItem={item => setFieldValue(name, item)}
        PickerItemComponent={PickerItemComponent}
        placeholder={placeholder}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
