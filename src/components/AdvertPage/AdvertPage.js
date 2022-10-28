'use strict';

const advertisements = [
  {
    adId: 1,
    Nombre: 'Banana pocha',
    Venta: true,
    Tags: ['home', 'lifestyle'],
    Precio: 2,
    Foto: '',
  },
  {
    adId: 2,
    Nombre: 'Moto en miniatura',
    Venta: false,
    Tags: ['motor'],
    Precio: 200,
    Foto: '',
  },
];

const AdvertPage = () => {
  return (
    <section className='advertPage'>
      <ul>
        {advertisements.map((advertisement) => (
          <li key={advertisement.adId}>
            {advertisement.Nombre}, {advertisement.Venta ? 'Vendo' : 'Compro'},{' '}
            {advertisement.Precio},{' '}
            {advertisement.Tags.map((tag) => (
              <p key={tag} className='tagParagraph'>{tag}</p>
            ))}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AdvertPage;
