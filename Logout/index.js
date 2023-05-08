import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

//returns directly to login page and clear its data (e.g. tokens,user info)
const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('user', '');
    navigate('/login');
  }, [navigate]);

  return null; // Return null since this component doesn't render anything
};

export default Logout;
