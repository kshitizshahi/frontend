import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../actions/userSignIn';


const LogInScreen = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const userSignin = useSelector((state) => state.userSignin)
    const {userDetails, error } = userSignin;

    const submitHandler = (e) => {
        e.preventDefault();
        
        dispatch(signIn(email, password)); 
    }

    useEffect(() => {
        if (userDetails){
            props.history.push('/table');
        }

    }, [props.history, userDetails]);

    return (
        <div>
            <form className='form' onSubmit={submitHandler}>
                <div>
                    <h1>Log In</h1>
                </div>
                <div>
                    <h3>{error && error}</h3> 
                </div>
                <div>
                    <label htmlFor='email'>Email address</label>
                    <input type='email' id='email' placeholder='Enter email' required
                        onChange={(e) => setEmail(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' placeholder='Enter password' required
                        onChange={(e) => setPassword(e.target.value)}>
                    </input>
                </div>
                <div>
                    <label />
                    <button className='primary' type='submit'>Sign In</button>
                </div>

            </form>


        </div>
    )
}

export default LogInScreen;
