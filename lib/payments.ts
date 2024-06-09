import { MercadoPagoConfig, Preference } from 'mercadopago';

const client = new MercadoPagoConfig({ accessToken: "TEST-8968989067718937-060722-adfaca3b8c9a39eda01ba86f17a1c264-686744806" });

// Crea una preferencia
export const createPreference = async () => {
  try {
    const body = {
      items: [
        {
          id: "12433",
          title: "Mi productitoo",
          unit_price: Number(45412),
          quantity: Number(1),
          picture_url: "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
          category_id: "art",
          description: "Descripción del Item",
          currency_id: 'ARS',
        }
      ],
      payer: {
        name: 'Test',
        surname: 'User',
        email: 'your_test_email@example.com',
        phone: {
          area_code: '11',
          number: '4444-4444',
        },
        identification: {
          type: 'CPF',
          number: '19119119100',
        },
        address: {
          zip_code: '06233200',
          street_name: 'Street',
          street_number: 123,
        },
      },
      back_urls: {
        success: 'https://www.your-site.com/success',
        failure: 'https://www.your-site.com/failure',
        pending: 'https://www.your-site.com/pending'
      },
      auto_return: 'approved',
    };

    const preference = new Preference(client);

    const result = await preference.create({ body });

    return (result.id);

  } catch (error) {
    console.log(error);
  }

}

