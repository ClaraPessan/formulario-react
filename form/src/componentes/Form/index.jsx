import { useState } from 'react'
import React from 'react'
import Botao from '../Button'
import Input from '../Input'
import styles from './Form.module.scss'

const Form = () => {

    const [form, setForm] = useState({})
    const [erros, setErros] = useState({})

    function captaValorInput(evento) {
        setForm({
            ...form,
            [evento.target.name]: evento.target.value
        })
    }

    function validacao() {
        let erros = {};
        if (!form.first) {
            erros.first = "First Name cannot be empty"
        }
        if (!form.last) {
            erros.last = "Last Name cannot be empty"
        }
        if (!form.email) {
            erros.email = "Email cannot be empty"
        }
        if (!form.password) {
            erros.password = "Password cannot be empty"
        }
        return erros
    }

function enviaForm(evento) {
    evento.preventDefault();
    const erros = validacao(form);
    setErros(erros);
    if (Object.keys(erros).length === 0) {
        setForm({});
        console.log("enviado com sucesso");
        window.location.reload(true);
    }
}

    return (
        <section>
            <div className={styles.aviso}>
                <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
            </div>
            <form className={styles.formulario} onSubmit={evento => enviaForm(evento)}>
                <Input
                    placeholder={erros.first ? '' : 'First Name'}
                    type="text"
                    name="first"
                    value={form.first || ''}
                    onChange={evento => captaValorInput(evento)}
                    className={erros.first ? styles.inputError : ''}
                />
                {erros.first && <p>{erros.first}</p>}

                <Input
                    placeholder={erros.last ? '' : 'Last Name'}
                    type="text"
                    name="last"
                    value={form.last || ''}
                    onChange={evento => captaValorInput(evento)}
                    className={erros.last ? styles.inputError : ''}
                />
                {erros.last && <p>{erros.last}</p>}

                <Input
                    placeholder={erros.email ? '' : 'Email Address'}
                    type="email"
                    name="email"
                    value={form.email || ''}
                    onChange={evento => captaValorInput(evento)}
                    className={erros.email ? styles.inputError : ''}
                />
                {erros.email && <p>{erros.email}</p>}

                <Input
                    placeholder={erros.password ? '' : 'Password'}
                    type="password"
                    name="password"
                    value={form.password || ''}
                    onChange={evento => captaValorInput(evento)}
                    className={erros.password ? styles.inputError : ''}
                />
                {erros.password && <p>{erros.password}</p>}

                <Botao>
                    Claim your free trial
                </Botao>
                <div className={styles.avisoTermos}>
                        By clicking the button, you are agreeing to our <strong>Terms and Services</strong>
                </div>
            </form>
        </section>
    )
}

export default Form
