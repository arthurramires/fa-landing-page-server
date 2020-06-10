const Mail = require('../lib/Mail');

class CreateUser {
  get key() {
    return 'CreateUser';
  }

  async handle({ data }) {
    const { email } = data;

    const mailOptions = {
      from: 'contato@fidelizemais.com',
      to: email,
      subject: 'Estamos contentes que você tenha nos dado esta oportunidade',
      html: '<h1>...!</h1>'
    };

    await Mail.sendMail(mailOptions, error => {
      if (error) {
        throw new Error(error);
      }
    });
  }
}

module.exports =  new CreateUser();
