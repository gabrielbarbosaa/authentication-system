import React from 'react'
import { Button, Flex, Grid, Modal, PasswordInput, TextInput } from '@mantine/core';
import { Controller, useForm } from 'react-hook-form';
import { signUp, SignUp as ISignUp } from '@/schemas/signup';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';
import { api } from '@/services/api';

interface IProps {
  opened: boolean;
  close: () => void;
}

const SignUp:React.FC<IProps> = ({close, opened}) => {
  const {
    control,
    handleSubmit,
    reset,
    formState:{isDirty, isValid, errors}
  } = useForm<ISignUp>({
    resolver: zodResolver(signUp),
    mode: 'onBlur'
  })

  async function onSubmit(data: ISignUp) {
    const response = await api.post('/signup', data);
    console.log(response.data);
  }

  return (
    <Modal.Root opened={opened} onClose={close} size="lg">
      <Modal.Overlay />
      <Modal.Content bg="#002655" c="#FFF">
        <Modal.Header bg="#002655">
          <Modal.Title>Create account</Modal.Title>
          <Modal.CloseButton onClick={() => reset()}/>
        </Modal.Header>
        <Modal.Body>
          <Grid 
            component='form' 
            onSubmit={handleSubmit(onSubmit)}
            columns={2}
          >
            <Grid.Col span={1}>
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
            </Grid.Col>
            <Grid.Col span={1}>
              <Controller 
                name="password"
                control={control}
                render={({field: {name, onBlur, onChange, value}}) => (
                  <PasswordInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    mt="md"
                    mb="md"
                    placeholder="Password"
                    label="Password"
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
            </Grid.Col>
            <Grid.Col span={1}>
              <Controller 
                name="name"
                control={control}
                render={({field: {name, onBlur, onChange, value}}) => (
                  <TextInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    mt="md"
                    mb="md"
                    type="text"
                    placeholder="Name"
                    label="Name"
                    error={errors?.name?.message && errors?.name?.message}
                    rightSectionPointerEvents="none"
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <Controller 
                name="username"
                control={control}
                render={({field: {name, onBlur, onChange, value}}) => (
                  <TextInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    mt="md"
                    mb="md"
                    type="text"
                    placeholder="Username"
                    label="Username"
                    error={errors?.username?.message && errors?.username?.message}
                    rightSectionPointerEvents="none"
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <Controller 
                name="phone"
                control={control}
                render={({field: {name, onBlur, onChange, value}}) => (
                  <TextInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    mt="md"
                    mb="md"
                    type="text"
                    placeholder="Phone"
                    label="Phone"
                    error={errors?.phone?.message && errors?.phone?.message}
                    rightSectionPointerEvents="none"
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <Controller 
                name="address"
                control={control}
                render={({field: {name, onBlur, onChange, value}}) => (
                  <TextInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    mt="md"
                    mb="md"
                    type="text"
                    placeholder="Address"
                    label="Address"
                    error={errors?.address?.message && errors?.address?.message}
                    rightSectionPointerEvents="none"
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <Controller 
                name="city"
                control={control}
                render={({field: {name, onBlur, onChange, value}}) => (
                  <TextInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    mt="md"
                    mb="md"
                    type="text"
                    placeholder="City"
                    label="City"
                    error={errors?.city?.message && errors?.city?.message}
                    rightSectionPointerEvents="none"
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={1}>
              <Controller 
                name="state"
                control={control}
                render={({field: {name, onBlur, onChange, value}}) => (
                  <TextInput
                    onChange={onChange}
                    onBlur={onBlur}
                    value={value}
                    name={name}
                    mt="md"
                    mb="md"
                    type="text"
                    placeholder="State"
                    label="State"
                    error={errors?.state?.message && errors?.state?.message}
                    rightSectionPointerEvents="none"
                  />
                )}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Button
                type="submit"
                fullWidth
                variant="default"
                bg="#593ADE"
                c="#FFF"
                bd={0}
                disabled={!isDirty || !isValid}            
              >
                Sing-up
              </Button>
            </Grid.Col>
          </Grid>
        </Modal.Body>
      </Modal.Content>
    </Modal.Root>
  )
}

export default SignUp