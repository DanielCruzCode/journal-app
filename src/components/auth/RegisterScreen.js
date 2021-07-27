import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    return (
        <>
            <h3 className="auth__title">Register</h3>
            <form>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete="off"
                    className="auth__input"
                />
                <input
                    type="password"
                    name="password2"
                    placeholder="Confirm Password"
                    autoComplete="off"
                    className="auth__input"
                />
                <button
                    className="btn btn-primary btn-block mb-5"
                    type="submit"
                >
                    Register
                </button>
                <hr/>
                <div className="mt-5">
                    <Link to="/auth/login">
                        Already registered?
                    </Link>
                </div>
            </form>
        </>
    )
}
