const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDao = require('../app/infra/usuario-dao');
const bd = require('./database');
const cript = require('./encryption');

module.exports = (app) => {
    passport.use(new LocalStrategy(
        {
            usernameField: 'usuario',
            passwordField: 'senha'
        },
        (login, senha, done) => {
            const usuarioDao = new UsuarioDao(bd);
            usuarioDao.buscaPorLogin(login)
                    .then(encontrado => {
                        if (!encontrado || senha != cript.decriptografa(encontrado.senhaUsr)) {
                            return done(null, false, {
                                mensagem: 'Login e senha incorretos!'
                            });
                        }
                        return done(null, encontrado);
                    })
                    .catch(erro => done(erro, false));
        }
    ));

    passport.serializeUser((usuario, done) => {
        const usuarioSessao = {
            nome: usuario.nomeUsr,
            login: usuario.loginUsr
        };
    
        done(null, usuarioSessao);
    });

    passport.deserializeUser((usuarioSessao, done) => {
        done(null, usuarioSessao);
    });

    app.use(sessao({
        secret: 'curso-javascript-educorp',
        genid: req => uuid(),
        resave: false,
        saveUninitialized: false
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    app.use((req, resp, next) => {
        req.passport = passport;
        next();
    });
}