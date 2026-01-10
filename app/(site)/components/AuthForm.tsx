'use client';

import { useCallback, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/inputs/input";


type Variant = 'LOGIN' | 'REGISTER';

type AuthFormValues = {
    name: string;
    email: string;
    password: string;
};
const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(() => {
        setVariant(variant === 'LOGIN' ? 'REGISTER' : 'LOGIN');
    }, [variant]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<AuthFormValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
});

    const onSubmit: SubmitHandler<AuthFormValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {
            console.log('REGISTER', data);
        }

        if (variant === 'LOGIN') {
            console.log('LOGIN', data);
        }

        setTimeout(() => {
            console.log(variant, data);
            setIsLoading(false);
        },2000)
    };

    return (
        
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                    <Input
                        id="name"
                        label="Nom"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                        required
                    />
                    )}

                    <Input
                        id="email"
                        label="Email"
                        type="email"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                        required
                    />

                    <Input
                        id="password"
                        label="Mot de passe"
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                        required
                    />

                    <button 
                        type="submit"
                        disabled={isLoading}
                        className="
                            
                            w-full
                            bg-sky-600
                            text-white
                            shadow-xl
                            mt-3
                            h-
                            py-2
                            rounded-2xl
                            hover:bg-sky-700
                            disabled:opacity-50
                        "
                    > Submit
                    </button>

                    <div className="text-sm text-center mt-4">
                        <button
                            type="button"
                            onClick={toggleVariant}
                            className="text-sky-600 hover:underline"
                        >
                        {variant === 'LOGIN'
                        ? "Créer un compte"
                        : "Déjà un compte ? Se connecter"}
                        </button>
</div>

                </form>
            </div>
        </div>
    );
};

export default AuthForm;
