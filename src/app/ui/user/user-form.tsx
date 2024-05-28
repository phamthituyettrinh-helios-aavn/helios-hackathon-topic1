import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useForm, FormProvider } from 'react-hook-form';
import { lusitana } from '../fonts';
import { CommonButton } from '@/app/ui/common/button';
import { FormInput } from '@/app/ui/common/input';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function UserForm() {

    const name_validation = {
        name: 'username',
        label: 'Please give your name',
        type: 'text',
        id: 'username',
        placeholder: 'Enter your name',
        validation: {
            required: {
                value: true,
                message: 'Your name is mandatory',
            },
            maxLength: {
                value: 30,
                message: 'Your name should be maxinum 30 characters',
            },
        },
    };

    const navigation = useRouter();
    const formProps = useForm();
    const onSubmit = formProps.handleSubmit(data => {
        if (formProps.formState.isValid) {
            navigation.push('/chat-box');
        }
    });
    const [state, setState] = useState({
        username: ''
    });
    // const handleInputChange = (event: any) => {
    //     const { name, value } = event.target;
    //     setState((prevProps) => ({
    //         ...prevProps,
    //         [name]: value
    //     }));
    // };

    return (
        <>
            <FormProvider {...formProps}>
                <form onSubmit={e => e.preventDefault()}
                    noValidate className="space-y-3" >
                    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
                        {formProps.formState.errors.root?.message}
                        <div className="w-full">
                            <div>
                                <div className="relative">
                                    <FormInput
                                        {...name_validation}>
                                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                                    </FormInput>
                                </div>
                            </div>
                            <div className="pt-8 justify-center">
                                <CommonButton onClick={onSubmit} aria-disabled={!formProps.formState.isValid}>
                                    <span>Go Chat Room</span>
                                </CommonButton>
                            </div>
                        </div>
                    </div>
                </form >

            </FormProvider>
        </>
    );
}
