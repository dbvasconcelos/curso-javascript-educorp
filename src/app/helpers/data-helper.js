class DataHelper {
    static dataParaTexto(data) {
        if (data) {
            return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
        }
    }
}
module.exports = DataHelper;