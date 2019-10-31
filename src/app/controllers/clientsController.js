const clientsDAO = require("../db/clientsDAO");
const con = require("../../config/database");

class ClientsController {
    
    listClients() {
        return (req,res) => {
            const dao = new clientsDAO(con);
            dao.listClients((err,data) => {
                res.marko(
                    require("../views/clients/listClients.marko"),
                    {
                        clients: data
                    }
                );
            });
        }
    }
}

module.exports = ClientsController;
