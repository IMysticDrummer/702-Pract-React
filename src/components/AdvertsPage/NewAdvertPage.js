

import Layout from '../Layout/Layout.js';

const NewAdvertPage = ({subTitle, isLogged, onLogout}) => {
  return <Layout subTitle={subTitle} isLogged={isLogged} onLogout={onLogout}><span>Esto es new advert page</span></Layout>;
};

export default NewAdvertPage;
