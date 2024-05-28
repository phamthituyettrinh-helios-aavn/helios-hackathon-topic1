import React from 'react';
import { useFormContext } from 'react-hook-form';
import { lusitana } from '../fonts';

interface RequiredInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    children: React.ReactNode;
    label: string;
    validation: any;
    id: string;
}

export function FormInput({ children, id, label, type, placeholder, validation, ...rest }: RequiredInputProps) {

    const { register, formState: { errors } } = useFormContext();
    const errorMessage = errors[id]?.message?.toString();

    return (
        <div className="flex flex-col w-full gap-2">
            <div className="flex justify-between">
                <label htmlFor={id} className={`${lusitana.className} mb-3 text-2xl`}>
                    {label}
                </label>
            </div>
            <div>
                <input
                    className="w-full p-5 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    {...rest}
                    {...register(id, validation)}
                />
                {children}
            </div>
            {errorMessage && (<InputError message={errorMessage.toString()} />)}
        </div>
    );
}

interface InputErrorProps {
    message: string;
}
function InputError({ message }: InputErrorProps) {
    return (
        <div >
            {message}
        </div>
    );
};

const framer_error = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 },
    transition: { duration: 0.2 },
}