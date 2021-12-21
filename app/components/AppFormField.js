import React from 'react';
import {StyleSheet, Text, View} from 'react-native';



import {useFormikContext} from 'formik';
import ErrorMessage from './ErrorMessage';
import AppTextInput from './AppTextInput';

export default function AppFormField({name, ...OtherProps}) {
  const {handleChange, errors, setFieldTouched, touched} = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={ handleChange(name)}
        {...OtherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

const styles = StyleSheet.create({});
