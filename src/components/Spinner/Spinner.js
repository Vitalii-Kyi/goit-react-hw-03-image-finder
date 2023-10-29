// import { MagnifyingGlass } from 'react-loader-spinner';
import { TailSpin } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <TailSpin
      height="40"
      width="40"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
