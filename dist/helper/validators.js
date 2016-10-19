'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.v_mustBeChecked = exports.v_mustEqualField = exports.v_password = exports.v_phone = exports.v_isEmail = exports.v_isNumeric = exports.v_noWrappingWhitespace = exports.v_noWhitespace = exports.v_maxlength = exports.v_minlength = exports.v_required = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var v_required = exports.v_required = function v_required(value) {
  if (value == null || value.length == 0) {
    return {
      text: 'Field is required.',
      key: 'required'
    };
  }
  return false;
};

var v_minlength = exports.v_minlength = function v_minlength(len) {
  return function (value) {
    if (value == null || value.length < len) {
      return {
        text: 'Field should be at least ' + len + ' characters long.',
        key: 'minlength',
        values: {
          minlength: len
        }
      };
    }
    return false;
  };
};

var v_maxlength = exports.v_maxlength = function v_maxlength(len) {
  return function (value) {
    if (value == null || value.length > len) {
      return {
        key: 'maxlength',
        values: {
          maxlength: len
        }
      };
    }
    return false;
  };
};

var v_noWhitespace = exports.v_noWhitespace = function v_noWhitespace(value) {
  var re = /^\s+$/i;
  if (re.test(value)) {
    return {
      text: 'only whitespace is not allowed',
      key: 'whitespace'
    };
  }
  return false;
};

var v_noWrappingWhitespace = exports.v_noWrappingWhitespace = function v_noWrappingWhitespace(value) {
  var re = /^(\s+.*|\s+|.*\s+)$/i;
  if (re.test(value)) {
    return {
      text: 'start or ending whitespace',
      key: 'wrappingWhitespace'
    };
  }
  return false;
};

var v_isNumeric = exports.v_isNumeric = function v_isNumeric(value) {
  var re = /^\d*$/i;
  if (!re.test(value)) {
    return {
      key: 'numeric'
    };
  }
  return false;
};

var v_isEmail = exports.v_isEmail = function v_isEmail(value) {
  var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!re.test(value)) {
    return {
      text: 'Not a valid email address!',
      key: 'email'
    };
  }
  return false;
};

var v_phone = exports.v_phone = function v_phone(value) {
  var re = /^\+\d*$/i;
  if (value != null && value.length > 0 && !re.test(value)) {
    return {
      text: 'Not a valid number (e.g. +491577123456 )',
      key: 'phone'
    };
  }
  return false;
};

var v_password = exports.v_password = function v_password(value) {
  return false;
};

var v_mustEqualField = exports.v_mustEqualField = function v_mustEqualField(targetFieldName) {
  return function (value, form) {
    if (form && form.fields && form.fields[targetFieldName]) {
      var targetValue = form.fields[targetFieldName].value;

      return targetValue !== value ? {
        text: 'Fields are not matching',
        key: 'notEqual'
      } : false;
    }

    return false;
  };
};

var v_mustBeChecked = exports.v_mustBeChecked = function v_mustBeChecked(value) {
  return value !== true ? {
    text: 'Must be checked',
    key: 'notChecked'
  } : false;
};