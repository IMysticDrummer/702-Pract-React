import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout.js";
import { getAdById } from "./service.js";

const AdvertPage = ({ subTitle, isLogged, onLogout }) => {
  const [ advertisement, setAdvertisement ] = useState({});
  const { id } = useParams();
  

  useEffect(() => {
    const getAd = async (id) => {
      let advert;
      try {
        advert = await getAdById(id);
        setAdvertisement(advert);
      } catch (error) {
        setAdvertisement({msg: 'Error retrieving data', error: error});
      }
    };
    getAd(id);
  }, [id]);

  return (
    <Layout
      subTitle={subTitle}
      isLogged={isLogged}
      onLogout={onLogout}
    >
      <Fragment>
        {!advertisement.error ? 
          (
            <Fragment>
              <p>Id: {advertisement.id}</p>
              <p>Created: {advertisement.createdAt}</p>
              <p>Product: {advertisement.name}</p>
              <p>Price: {advertisement.price}</p>
              <p>{advertisement.sale ? "Sell" : "Buy"}</p>
              <p>Photo: {advertisement.photo}</p>
            </Fragment>
          ) : (
            <Fragment>
              <p>{advertisement.msg}</p>
              <p>{advertisement.error}</p>
            </Fragment>
          )
        }
      </Fragment>
    </Layout>
  );
};

export default AdvertPage;
