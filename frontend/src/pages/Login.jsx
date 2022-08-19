import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }
    
    const onSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
            <section className='heading'>
                <h1>
                    <FaSignInAlt /> Prijava
                </h1>
                <p>Molimo prijavite se na račun</p>
            </section>

            <section className='form'>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={email}
                            placeholder='Unesite vaš email'
                            onChange={onChange} />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={password}
                            placeholder='Unesite vašu lozinku'
                            onChange={onChange} />
                    </div>

                    <div className="form-group">
                        <button type="submit" className='btn btn-block'>Potvrdi</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Login