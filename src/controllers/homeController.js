import db from '../models/index';
import CRUDService from '../services/CRUDService';
let getHomepage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (error) {
        console.log(error);
    }

}

let getCRUD = (req, res) => {
    return res.render('crud.ejs');
}

let postCRUD = async (req, res) => {

   let message =  await CRUDService.createNewUser(req.body);
   console.log(message);
    return res.send('post crud from server');
}

module.exports = {
    getHomepage: getHomepage,
    getCRUD: getCRUD,
    postCRUD: postCRUD
}