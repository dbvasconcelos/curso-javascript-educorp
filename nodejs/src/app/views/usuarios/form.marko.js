// Compiled using marko@4.18.20 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/br.unicamp.educorp.cursojs$1.0.0/src/app/views/usuarios/form.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    Layout = require("../layout.marko"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x,
    marko_attr = marko_helpers.a,
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  marko_dynamicTag(out, Layout, function() {
    return {
        titulo: "Formulário de Usuários",
        conteudo: {
            renderBody: function(out) {
              out.w("<div class=\"container\"><h1>Formulário de Usuários</h1>");

              if (data.errosValidacao) {
                var $for$0 = 0;

                marko_forEach(data.errosValidacao, function(erro) {
                  var $keyScope$0 = "[" + (($for$0++) + "]");

                  out.w("<div class=\"alert alert-danger\">" +
                    marko_escapeXml(erro.param) +
                    ": " +
                    marko_escapeXml(erro.msg) +
                    "</div>");
                });
              }

              out.w("<form method=\"POST\" action=\"/usuarios\" enctype=\"application/x-www-form-urlencoded\">");

              if (data.usuario.idUsr) {
                out.w("<input type=\"hidden\" name=\"_method\" value=\"PUT\"><input type=\"hidden\" id=\"id\" name=\"id\"" +
                  marko_attr("value", "" + data.usuario.idUsr) +
                  ">");
              }

              out.w("<div class=\"form-group\"><label for=\"nome\">Nome</label><input type=\"text\" class=\"form-control form-control-sm\" id=\"nome\" name=\"nome\"" +
                marko_attr("value", "" + data.usuario.nomeUsr) +
                "></div><div class=\"form-group\"><label for=\"login\">Login</label><input type=\"text\" class=\"form-control form-control-sm\" id=\"login\" name=\"login\"" +
                marko_attr("value", "" + data.usuario.loginUsr) +
                "></div><div class=\"form-group\"><label for=\"nome\">Senha</label><input type=\"password\" class=\"form-control form-control-sm\" id=\"senha\" name=\"senha\"" +
                marko_attr("value", "" + data.usuario.senhaUsr) +
                "></div><button type=\"submit\" class=\"btn btn-primary\">Salvar</button></form></div>");
            }
          }
      };
  }, null, null, null, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/br.unicamp.educorp.cursojs$1.0.0/src/app/views/usuarios/form.marko",
    tags: [
      "../layout.marko"
    ]
  };
