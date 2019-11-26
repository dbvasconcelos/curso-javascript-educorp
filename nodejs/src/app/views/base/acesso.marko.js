// Compiled using marko@4.18.20 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/br.unicamp.educorp.cursojs$1.0.0/src/app/views/base/acesso.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    Layout = require("../layout.marko"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_dynamicTag = marko_helpers.d;

function render(input, out, __component, component, state) {
  var data = input;

  marko_dynamicTag(out, Layout, function() {
    return {
        titulo: "Entrar",
        conteudo: {
            renderBody: function(out) {
              out.w("<div class=\"container-fluid text-center\"><form method=\"POST\" action=\"/acesso\" enctype=\"application/x-www-form-urlencoded\" class=\"form-signin\"><img class=\"mb-4\" src=\"/estatico/img/logo-js.png\" alt=\"\" width=\"214\" height=\"236\"><h1 class=\"h3 mb-3 font-weight-normal\">Entrar na Aplicação</h1>");

              if (data.erro) {
                out.w("<div class=\"alert alert-danger\">" +
                  marko_escapeXml(data.erro) +
                  "</div>");
              }

              out.w(" <label class=\"sr-only\" for=\"usuario\">USUÁRIO</label><input type=\"text\" class=\"form-control\" id=\"usuario\" name=\"usuario\" placeholder=\"usuário\"><label class=\"sr-only\" for=\"senha\">SENHA</label><input type=\"password\" class=\"form-control\" id=\"senha\" name=\"senha\" placeholder=\"senha\"><button class=\"btn btn-lg btn-primary btn-block mt-1\" type=\"submit\">Entrar</button></form></div>");
            }
          },
        css: {
            renderBody: function(out) {
              out.w("<link rel=\"stylesheet\" href=\"/estatico/css/signin.css\">");
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
    id: "/br.unicamp.educorp.cursojs$1.0.0/src/app/views/base/acesso.marko",
    tags: [
      "../layout.marko"
    ]
  };
