const BaseController = require('../controllers/base-controller');
const baseController = new BaseController();

module.exports = (app) => {
	const rotasBase = BaseController.rotas();

    app.get(rotasBase.acesso, baseController.acesso());
    app.get(rotasBase.sair, baseController.sair());
    app.get(rotasBase.home, baseController.home());
    
    app.post(rotasBase.acesso, baseController.autentica());
}