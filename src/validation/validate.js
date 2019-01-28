import validation from '../validation/validation';

export default function validate (fieldName, value) {

  var formValues = {}
  formValues[fieldName] = value

                   }
  var formFields = {}
  formFields[fieldName] = validation[field]

 
  const result = validatejs(formValues, formFields)

  // If there is an error message, return it!
  if (result) {
    // Return only the field error message if there are multiple
    return result[field][0]
  }

  return null
}
