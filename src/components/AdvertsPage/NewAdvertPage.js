
import Page from '../Layout/Page.js';

const NewAdvertPage = ({subTitle, isLogged, onLogout}) => {
  return <Page subTitle={subTitle} isLogged={isLogged} onLogout={onLogout}><span>Esto es new advert page</span></Page>;
};

export default NewAdvertPage;
