import React from 'react';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import './styles.css';
import Header from '../../components/Header';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';
import UserServices from '../../services/UserServices';
import { useNavigate } from 'react-router-dom';

interface FormValues {
    name: string;
    email: string;
    cpf: string;
    password: string;
    confirmPassword: string;
    confirmEmail: string;
}

const SignIn: React.FC = () => {
    const navigate = useNavigate();
    const Auth = useContext(AuthContext);
    const { handleSubmit, formState: { errors }, register, watch } = useForm<FormValues>();
    const password = watch('password');
    const confirmPassword = watch('confirmPassword');

    const onSubmit = (data: FormValues) => {
        UserServices.createUser(data).then(response => {
            console.log(Auth.token);
            navigate('/' as never);
        });
    };

    return (
        <div className='signin-body'>
            <div className="page-container">
                <Header />
                <div className='signin-container'>
                    <div className='signin-block'>
                        <div className='form-box'>
                            <p className='block-title'>Cadastro de Usuário!</p>
                            <input
                                type='text'
                                placeholder='Nome'
                                {...register('name', { required: true })}
                                className={errors.name ? 'input-error' : ''}
                            />
                            {errors.name?.type === 'required' && <p className='error-message'>Digite o seu nome.</p>}

                            <input
                                type='email'
                                placeholder='Email'
                                {...register('email', { required: true, validate: (value) => validator.isEmail(value) })}
                                className={errors.email ? 'input-error' : ''}
                            />
                            {errors.email?.type === 'required' && <p className='error-message'>Digite o seu email.</p>}
                            {errors.email?.type === 'validate' && <p className='error-message'>Email inválido.</p>}

                            <input
                                type='email'
                                placeholder='Confirmar Email'
                                {...register('confirmEmail', { required: true, validate: (value) => value === watch('email') })}
                                className={(errors.confirmEmail || (watch('email') && watch('email') !== watch('confirmEmail'))) ? 'input-error' : ''}
                            />
                            {errors.confirmEmail?.type === 'required' && <p className='error-message'>Confirme o seu email.</p>}
                            {errors.confirmEmail?.type === 'validate' && <p className='error-message'>Os emails não correspondem.</p>}

                            <input
                                type='password'
                                placeholder='Senha'
                                {...register('password', { required: true, minLength: 7 })}
                                className={errors.password ? 'input-error' : ''}
                            />
                            {errors.password?.type === 'required' && <p className='error-message'>Digite uma senha.</p>}
                            {errors.password?.type === 'minLength' && <p className='error-message'>Senha deve ter no mínimo 7 caracteres.</p>}

                            <input
                                type='password'
                                placeholder='Confirmar Senha'
                                {...register('confirmPassword', { required: true, validate: (value) => value === password })}
                                className={(errors.confirmPassword || (password && password !== confirmPassword)) ? 'input-error' : ''}
                            />
                            {errors.confirmPassword?.type === 'required' && <p className='error-message'>Confirme a senha.</p>}
                            {errors.confirmPassword?.type === 'validate' && <p className='error-message'>As senhas não correspondem.</p>}

                            <button className='signin-button' onClick={handleSubmit(onSubmit)}>
                                Cadastrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
