import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login');
    }

    return (
            <button className='primary-button' onClick={handleClick}>
                Login
            </button>
    );

}

export default Login;
