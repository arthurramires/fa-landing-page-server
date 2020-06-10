const connection = require('../database/connection');
const generateUniqueId =require('../utils/generateUniqueId');
const Queue = require('../lib/Queue');

module.exports = {
    async index(request, response){
        const users = await connection('users').select('*');
    
        return response.json(users);
    },
    
    async create(request, response){
        const {name, email} = request.body;
        
        const id = generateUniqueId();

        await connection('users').insert({
            id,
            name,
            email
        });

        await Queue.add('CreateUser', { email });

        return response.json({ id });
    }
}