import React from "react";
import "./style.css";
import House from "../../imgs/house-fill (1).svg";
import HomePhoto from "../../imgs/home-photo.jpeg";
import Header from "../../components/Header";
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/auth';
import { useContext } from "react";
import userServices from '../../services/UserServices';
import { useNavigate } from "react-router-dom";



interface loginData {
  name: string;
  password: string;
}

export default function Home() {
  const navigate = useNavigate();
  const Auth = useContext(AuthContext);
  const { handleSubmit, register,  formState: { errors } } = useForm<loginData>();

  const onSubmit = async (data: loginData) => {
    try {
      console.log('Dados do formulário enviados:', data); 
      const response = await userServices.login(data);
      console.log('Resposta do serviço de login:', response); 
      if (response && response.data) {
        Auth.setToken(response.data.token);
        localStorage.setItem("token", response.data.token);

        if (response.status === 202) {
          navigate('/games');
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="home-body">
      <div className="background-home">
      <div className="header-home">
         <Header />
      </div>
      <section className="section-hero-home">
        <div className="hero-home">
          <div className="hero-img-box-home">
            <img src={HomePhoto} className="hero-img-home" alt="logo do djde" />
          </div>
        </div>
      </section>
      <section className="section-cta-home">
        <div className="container-home">
          <div className="cta-home">
            <div className="cta-text-box-home">
              <form className="cta-form-home" action="#">
                <div>
                  <h2 className="label-home">Nome de Usuário</h2>
                  <input
                    type='text'
                    placeholder='Nome'
                    {...register('name', { required: true })}
                    />
                    {errors.name?.type === 'required' && <p className='error-message'>Digite o seu nome.</p>}
                </div>

                <div>
                  <h2 className="label-home">Senha</h2>
                  <input
                    type='password'
                    placeholder='Senha'
                    {...register('password', { required: true, minLength: 7 })}
                    className={errors.password ? 'input-error' : ''}
                    />
                    {errors.password?.type === 'required' && <p className='error-message'>Digite uma senha.</p>}
                    {errors.password?.type === 'minLength' && <p className='error-message'>Senha deve ter no mínimo 7 caracteres.</p>}
                </div>
                <button className="button button--form-home" onClick={handleSubmit(onSubmit)}>Acessar</button>
              </form>
              <div className="flex-home">
                <a href="/signin" className="link-home">
                  Criar Conta
                </a>
                <a href="#" className="link-home">
                  Esqueci a Senha
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
    
  );
}
