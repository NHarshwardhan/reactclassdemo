
const TextInput = ({fieldName,register,errors,isRequired,maximumLength,minimumLength})=>{

  return (
     <div>

         <div className="row">
            <div className="input-field col s12">
            <input
                id={fieldName}
                {...register(fieldName, {
                required: {
                    value: isRequired,
                    message: fieldName+" is required",
                },
                maxLength: {
                    value: maximumLength,
                    message: "Value must be maximum 10 characters",
                },
                minLength: {
                    value: minimumLength,
                    message: "value must be minimum 2",
                },
                pattern:{
                      value:/^[A-Za-z]+@gmail.com$/,
                      message:'Incorrect format'
                }

                
                })}
             />
                <label className="active" htmlFor={fieldName}>{fieldName}</label>
            </div>
        </div>
        <p>{errors?.[fieldName] && errors[fieldName].message}</p>
       
     </div>

  )
}

export default TextInput