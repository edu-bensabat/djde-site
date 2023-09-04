import React from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import './styles.css';

const SignIn: React.FC = () => {
    const { handleSubmit, formState: { errors }, register, watch } = useForm();
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const onSubmit = (data: any) => {
        if (data.email === data.confirmEmail && data.password === data.confirmPassword) {
            console.log('Cadastro realizado:', data);
        } else {
            console.log('Emails ou senhas não correspondem.');
        }
    };

    return (
        <div className='signin-container'>
            <div className='signin-block'>
                <div className='form-box'>
                    <p className='block-title'>Cadastro de Usuário!</p>
                    <input
                        type='text'
                        placeholder='Nome'
                        {...register('name', { required: true })}
                        className={errors.name && 'input-error'}
                    />
                    {errors.name?.type === 'required' && <p className='error-message'>Digite o seu nome.</p>}
                    
                    <input
                        type='email'
                        placeholder='Email'
                        {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
                        className={errors.email && 'input-error'}
                    />
                    {errors.email?.type === 'required' && <p className='error-message'>Digite o seu email.</p>}
                    {errors.email?.type === 'validate' && <p className='error-message'>Email inválido.</p>}
                    
                    <input
                        type='email'
                        placeholder='Confirmar Email'
                        {...register('confirmEmail', { required: true, validate: (value) => value === watch('email') })}
                        className={(errors.confirmEmail || (watch('email') && watch('email') !== watch('confirmEmail'))) && 'input-error'}
                    />
                    {errors.confirmEmail?.type === 'required' && <p className='error-message'>Confirme o seu email.</p>}
                    {errors.confirmEmail?.type === 'validate' && <p className='error-message'>Os emails não correspondem.</p>}
                    
                    <input
                        type='password'
                        placeholder='Senha'
                        {...register('password', { required: true, minLength: 7 })}
                        className={errors.password && 'input-error'}
                    />
                    {errors.password?.type === 'required' && <p className='error-message'>Digite uma senha.</p>}
                    {errors.password?.type === 'minLength' && <p className='error-message'>Senha deve ter no mínimo 7 caracteres.</p>}
                    
                    <input
                        type='password'
                        placeholder='Confirmar Senha'
                        {...register('confirmPassword', { required: true, validate: (value) => value === password })}
                        className={(errors.confirmPassword || (password && password !== confirmPassword)) && 'input-error'}
                    />
                    {errors.confirmPassword?.type === 'required' && <p className='error-message'>Confirme a senha.</p>}
                    {errors.confirmPassword?.type === 'validate' && <p className='error-message'>As senhas não correspondem.</p>}
                    
                    <button className='signin-button' onClick={handleSubmit(onSubmit)}>
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
