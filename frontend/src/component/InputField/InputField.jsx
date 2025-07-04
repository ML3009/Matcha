import { FormLabel, FormInput, FormTitle} from "./style";
import { useFormContext } from 'react-hook-form';

const InputField = ({ label, type, name, placeholder, register, validationRules }) => {
    return (
        <FormLabel>
            <FormTitle>{label}</FormTitle>
            <FormInput 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                {...register(name, validationRules)}
            />
        </FormLabel>
    );
};

export default InputField;