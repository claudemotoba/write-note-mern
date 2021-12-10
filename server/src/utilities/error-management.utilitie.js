"use strict"
const AppConst = require('../utilities/app-const.utilitie');

const ErrorManagement = (error, res) => {

    if (error.name === "ValidationError") {
        let errors = {};
  
        Object.keys(error.errors).forEach((key) => {
          errors[key] = error.errors[key].message;
        });

        return errors;
    }

    return AppConst.unkwon_error;
}

module.exports = ErrorManagement;