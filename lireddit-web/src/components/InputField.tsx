import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { useField } from "formik";
import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string; // *  Faire en sorte que la props soit exigée
};

// *  '' => false
// *  ' error message stuff => true

export const InputField: React.FC<InputFieldProps> = ({
  label,
  size: _, // *  Destructure Size , ne sera surement pas utilisé
  ...props
}) => {
  const [field, { error }] = useField(props); // *  Ressemble à useState
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor="name">{label}</FormLabel>
      <Input
        {...field}
        {...props}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};
