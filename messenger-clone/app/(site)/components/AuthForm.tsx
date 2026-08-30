'use client';

import Input from "../../components/inputs/Input";
import Button from "@/app/components/Button";
import AuthSocialButton from "./AuthSocialButton";
import clsx from "clsx";
import axios from "axios";

import { useCallback, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { toast } from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";


type AuthFormValues = {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
};

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
  const router = useRouter();
  const session = useSession();
  const [variant, setVariant] = useState<Variant>('LOGIN');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session.status === 'authenticated') {
      router.push('./users');
    }
  }, [session?.status, router])

  const toggleVariant = useCallback(() => {
    setVariant(variant === 'LOGIN' ? 'REGISTER' : 'LOGIN');
  }, [variant]);

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }

  } = useForm<AuthFormValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit: SubmitHandler<AuthFormValues> = (data) => {
    setIsLoading(true);

    if (variant === 'REGISTER') {
      axios.post('/api/register', data)
        .then(() => signIn('credentials', data))
        .catch(() => toast.error('Something went wrong!'))
        .finally(() => setIsLoading(false))
    }

    if (variant === 'LOGIN') {
      signIn('credentials', {
        ...data,
        redirect: false
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error('Invalid credentials');
          }

          if (callback?.ok && !callback?.error) {
            toast.success('Logged in!');
            router.push('/users');
          }
        })
        .finally(() => setIsLoading(false));
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true);

    signIn(action, { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error('Invalid Credentials');
        }

        if (callback?.ok && !callback?.error) {
          toast.success('Logged in!')
        }
      })
      .finally(() => setIsLoading(false));

  }

  return (
    <div
      className={clsx(
        "flex w-full h-full min-h-[inherit] transition-all bg-white duration-700 ease-in-out rounded-2xl",
        variant === 'LOGIN' ? 'flex-row' : 'flex-row-reverse'
      )}
    >
      <div
        className={clsx(
          'bg-sky-500 flex flex-1 gap-4 items-center justify-center text-sm px-8 flex-col',
          variant === 'LOGIN' ? 'rounded-r-[5rem] rounded-l-2xl' : 'rounded-l-[5rem] rounded-r-2xl'
        )
        }

      >
        <h1
          className="
            text-center
            text-[#EFEFF1]
            text-3xl
            font-bold
            cursor-default
          "
        >
          {variant === 'LOGIN' ? 'Hello, welcome!' : 'Welcome back!'}
        </h1>

        <div
          className="
            hover:cursor-default
            text-center
            text-[#EFEFF1]
          "
        >
          {variant === 'LOGIN' ? "Don't have an account?" : "Already have an account?"}
        </div>

        <div
          onClick={toggleVariant}
          className="
            my-5
            pt-1
            w-24
            h-9
            text-center
            text-lg
            text-white
            font-semibold
            rounded-lg
            cursor-pointer
            ring-2
            ring-gray-300
          "
        >
          {variant === 'LOGIN' ? "Sign Up" : "Login"}
        </div>
      </div>

      <div
        className="
          flex
          flex-1
          items-center
          justify-center
          bg-[#ECEFF1]
          rounded-2xl
        "
      >
        <div className="w-full max-w-sm px-6 py-12">
          <form
            className="space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            {variant === 'REGISTER' && (
              <Input
                label="Username"
                id="name"
                type="text"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            )}
            <Input
              label="Email"
              id="email"
              type="email"
              register={register}
              errors={errors}
              disabled={isLoading}
            />

            <Input
              label="Password"
              id="password"
              type="password"
              register={register}
              errors={errors}
              disabled={isLoading}
            />

            {variant === 'REGISTER' && (
              <Input
                label="Confirm Password"
                id="confirmPassword"
                type="password"
                register={register}
                errors={errors}
                disabled={isLoading}
              />
            )}

            <div>
              <Button
                disabled={isLoading}
                semiFullWidth
                type="submit"
              >
                {variant === 'LOGIN' ? 'Login' : 'Register'}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                "
              >
                <div
                  className="
                    w-full
                    border-t
                    border-[#191970]
                  "
                ></div>
              </div>
              <div
                className="
                  relative
                  flex
                  justify-center
                  text-sm
                "
              >
                <span
                  className="
                    bg-[#ECEFF1]
                    px-2
                    text-sky-700
                    hover:cursor-default
                  "
                >
                  Or continue with
                </span>
              </div>
            </div>

            <div
              className="
                mt-6
                flex
                gap-2
              "
            >
              <AuthSocialButton
                icon={BsGithub}
                onClick={() => socialAction('github')}
              />
              <AuthSocialButton
                icon={BsGoogle}
                onClick={() => socialAction('google')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthForm;