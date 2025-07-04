import { useNavigate } from "react-router-dom";

function Register() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/register');
    }

    return (
        <button className='secondary-button' onClick={handleClick}>
            Register
        </button>
    );
}

export default Register;