import React from "react";
import { useForm } from "react-hook-form";
import TextInput from "./TextInput";

export default function ReactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginProcess = (data) => {
    console.log(data);
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(loginProcess)}>
        {/* <input id='email' {...register('email' ,{required:true,maxLength:10, minLength:2})} />                                                            
                <label htmlFor="email">Email</label> */}
{/* 
        <input
          id="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email Address is required",
            },
            maxLength: {
              value: 10,
              message: "Value must be maximum 10 characters",
            },
            minLength: {
              value: 2,
              message: "value must be minimum 2",
            },
          })}
        /> */}
      
        <br />

       
   

      <TextInput
          fieldName="Email"
          register={register}
          errors={errors}
          isRequired={true}
          maximumLength={20}
          minimumLength={2}
      />
       <button
          type="submit"
          className="waves-effect waves-light btn purple darken-4"
        >
          Login
        </button>
         </form>
    </div>
  );
}
