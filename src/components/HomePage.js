import { useNavigate } from 'react-router';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <span>
      this is HomePage Component!!! <button onClick={() => navigate(-1)}>back!</button>
    </span>
  );
};
export default HomePage;
