// Compiled using marko@4.18.20 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/br.unicamp.educorp.cursojs$1.0.0/src/app/views/usuarios/lista.marko",
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
        titulo: "Usuários",
        conteudo: {
            renderBody: function(out) {
              out.w("<div class=\"container\"><h1>Usuários</h1><a class=\"btn btn-info btn-sm stretched-link float-right mb-1\" href=\"/usuarios/form\">NOVO</a><table class=\"table table-striped table-bordered\" id=\"usuarios\"><thead class=\"thead-light\"><tr><th>CÓDIGO</th><th>NOME</th><th>LOGIN</th><th></th><th></th></tr></thead><tbody>");

              var $for$0 = 0;

              marko_forEach(data.usuarios, function(usuario) {
                var $keyScope$0 = "[" + (($for$0++) + "]");

                out.w("<tr" +
                  marko_attr("id", "usuario_" + usuario.idUsr) +
                  "><td class=\"align-middle\">" +
                  marko_escapeXml(usuario.idUsr) +
                  "</td><td class=\"align-middle\">" +
                  marko_escapeXml(usuario.nomeUsr) +
                  "</td><td class=\"align-middle\">" +
                  marko_escapeXml(usuario.loginUsr) +
                  "</td><td class=\"align-middle\"><a class=\"btn btn-secondary btn-sm stretched-link\"" +
                  marko_attr("href", "/usuarios/form/" + usuario.idUsr) +
                  ">EDITAR</a></td><td class=\"align-middle\"><a class=\"btn btn-danger btn-sm stretched-link\" href=\"#\"" +
                  marko_attr("data-ref", "" + usuario.idUsr) +
                  " data-type=\"remocao\">REMOVER</a></td></tr>");
              });

              out.w("</tbody></table></div>");
            }
          },
        script: {
            renderBody: function(out) {
              out.w("<script src=\"/estatico/js/usuarios/remove.js\"></script>");
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
    id: "/br.unicamp.educorp.cursojs$1.0.0/src/app/views/usuarios/lista.marko",
    tags: [
      "../layout.marko"
    ]
  };
