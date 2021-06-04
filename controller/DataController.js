const Data = require('../validation/DataValidation')
require('../confi/DataBase')

module.exports = {
    async data(ctx){
        try{
            var body =ctx.request.body;
            var data = new Data();
            data.name = body.name;
            data.age = body.age;
            data.date = body.date;
            data.save();
            ctx.body = {
                status:200,
                data: data
            }
        }
        catch(error){
            ctx.throw(error);
        }
    }
}
