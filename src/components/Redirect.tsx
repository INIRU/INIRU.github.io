import { useLocation } from 'react-router-dom';

function Redirect() {
  const location = useLocation();
  if (!location.state) window.history.back();
  const { url }: { url: string } = location.state;
  if (url) window.location.href = url;

  return null;
}

export default Redirect;
