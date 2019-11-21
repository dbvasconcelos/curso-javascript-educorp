class DataHelper {
    static dataParaTexto(data) {
        return !data ? '' : `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }
}
module.exports = DataHelper;