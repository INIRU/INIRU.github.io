import { useLocation } from 'react-router-dom';
import Loding from './Loding';

function Redirect(): JSX.Element {
  const location = useLocation();
  if (!location.state) window.history.back();
  const { url }: { url: string } = location.state;
  if (url) window.location.href = url;

  return <Loding />;
}

export default Redirect;
