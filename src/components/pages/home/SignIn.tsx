"use client"
import React from 'react'
import { Button, Flex, PasswordInput, Text, TextInput } from "@mantine/core";
import { IconEyeCheck, IconEyeOff } from "@tabler/icons-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignIn as ISignIn, signIn } from "@/schemas/signIn";
import { api } from '@/services/api';
import { useSession, signIn as signInNext, signOut } from 'next-auth/react'

interface IProps {
  onClick: () => void
}

const SignIn:React.FC<IProps> = ({onClick}) => {
  const {
    control,
    handleSubmit,
    formState:{isDirty, isValid, errors}
  } = useForm<ISignIn>({
    resolver: zodResolver(signIn),
    mode: 'onBlur'
  })

  function onSubmit(data: ISignIn) {
    const response = api.post('/auth', data)
    signInNext()
    console.log(data, response);
  }

  return (
    <Flex 
      onSubmit={handleSubmit(onSubmit)}
      w="100%"
      h="100%"
      component="form"
      direction="column"  
      justify="center"
      maw="500px"
      mah="100vh"
      p="xl"
      bg="#00265599"
      c="#F1F1F1"
    >
      <Text fz="lg"> 
        login
      </Text>
      <Controller 
        name="email"
        control={control}
        render={({field: {name, onBlur, onChange, value}}) => (
          <TextInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            mt="md"
            mb="md"
            type="email"
            placeholder="Email"
            label="Email"
            error={errors?.email?.message && errors?.email?.message}
            rightSectionPointerEvents="none"
          />
        )}
      />
      <Controller 
        name="password"
        control={control}
        render={({field: {name, onBlur, onChange, value}}) => (
          <PasswordInput
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            mb="lg"
            label="Password"
            placeholder="Password"
            error={errors?.password?.message && errors?.password?.message}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? (
                <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
              ) : (
                <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
              )
            }
          />
        )}
      />
      <Flex gap="md">
        <Button
          fullWidth
          variant="default"
          bg="#593ADE"
          c="#FFF"
          bd={0}
          onClick={onClick}
        >
          Sing-up
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="default"
          bg="#593ADE"
          c="#FFF"
          bd={0}
        >
          Sing-in
        </Button>
      </Flex>
    </Flex>
  )
}

export default SignIn