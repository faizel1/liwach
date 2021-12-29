import React from 'react';
import ImageInputList from '../ImageInputList';

import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';

export default function ImageFormPicker({name}) {
  const {errors, setFieldValue, touched, values} = useFormikContext();
  //renamed fro the purpse of repatation of the name
//   const imageUris = values[name];
  const handelAdd = uri => {
    setFieldValue(name, [...values[name], uri]);
  };
  const handelRemove = uri => {
    setFieldValue( name,  values[name].filter(imageUri => imageUri !== uri),
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={values[name]}
        onAddImage={uri => handelAdd(uri)}
        onRemoveImage={uri => handelRemove(uri)}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
