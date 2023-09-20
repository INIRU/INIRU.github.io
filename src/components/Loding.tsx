import ReactLoading from 'react-loading';

function Loding(): JSX.Element {
  return (
    <div className="loding w-100 d-flex justify-content-center align-items-center position-relative">
      <ReactLoading
        type={'spin'}
        height={150}
        width={150}
        color="black"
        className="position-absolute"
      />
      <img
        className="loding-image"
        src={process.env.PUBLIC_URL + '/INIRU.gif'}
        alt=""
      />
    </div>
  );
}
export default Loding;
