'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, {enumerable: true, configurable: true, writable: true, value}) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function useForm({
  initialValues,
  validationRules = {}
}) {
  const initialErrors = Object.keys(initialValues).reduce((acc, field) => {
    acc[field] = false;
    return acc;
  }, {});
  const [errors, setErrors] = react.useState(initialErrors);
  const [values, setValues] = react.useState(initialValues);
  const resetErrors = () => setErrors(initialErrors);
  const reset = () => {
    setValues(initialValues);
    resetErrors();
  };
  const validate = () => {
    let isValid = true;
    const validationErrors = Object.keys(values).reduce((acc, field) => {
      if (validationRules && typeof validationRules[field] === "function" && !validationRules[field](values[field])) {
        acc[field] = true;
        isValid = false;
      } else {
        acc[field] = false;
      }
      return acc;
    }, {});
    setErrors(validationErrors);
    return isValid;
  };
  const validateField = (field) => setErrors((currentErrors) => __spreadProps(__spreadValues({}, currentErrors), {
    [field]: typeof validationRules[field] === "function" ? !validationRules[field](values[field]) : false
  }));
  const setFieldError = (field, error) => setErrors((currentErrors) => __spreadProps(__spreadValues({}, currentErrors), {[field]: error}));
  const setFieldValue = (field, value) => {
    setValues((currentValues) => __spreadProps(__spreadValues({}, currentValues), {[field]: value}));
    setFieldError(field, false);
  };
  const onSubmit = (handleSubmit) => (event) => {
    event && event.preventDefault();
    validate() && handleSubmit(values);
  };
  return {
    values,
    errors,
    validate,
    reset,
    setErrors,
    setValues,
    setFieldValue,
    setFieldError,
    validateField,
    resetErrors,
    onSubmit
  };
}

exports.useForm = useForm;
//# sourceMappingURL=use-form.js.map
