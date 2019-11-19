// Compiled using marko@4.18.20 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/br.unicamp.educorp.cursojs$1.0.0/src/app/views/layout.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_dynamicTag = marko_helpers.d,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/core-tags/components/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=\"utf-8\"><meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><title>" +
    marko_escapeXml(input.titulo) +
    "</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><!--[if lt IE 9]>\r\n            <script src=\"https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js\"></script>\r\n            <script src=\"https://oss.maxcdn.com/respond/1.4.2/respond.min.js\"></script>\r\n        <![endif]--><link rel=\"stylesheet\" href=\"/estatico/css/default.css\">");

  marko_dynamicTag(out, input.css, null, null, null, null, __component, "8");

  out.w("</head><body>");

  component_globals_tag({}, out);

  if (out.global.req.isAuthenticated()) {
    out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"/\"><img src=\"/estatico/img/logo-educorp.png\" width=\"45\" height=\"29\" alt=\"\"></a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-content\" aria-controls=\"navbar-content\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div id=\"navbar-content\" class=\"collapse navbar-collapse\"><ul class=\"navbar-nav\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"/clientes\">Clientes</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/usuarios\">Usuários</a></li></ul></div><form class=\"form-inline my-2 my-lg-0\" action=\"/logout\"><button class=\"btn my-2 my-sm-0\" type=\"submit\">Sair</button></form></nav>");
  }

  out.w("<main>");

  marko_dynamicTag(out, input.conteudo, null, null, null, null, __component, "24");

  out.w("</main><footer class=\"bg-light\"></footer>");

  marko_dynamicTag(out, input.script, null, null, null, null, __component, "26");

  out.w("<script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/br.unicamp.educorp.cursojs$1.0.0/src/app/views/layout.marko",
    tags: [
      "marko/src/core-tags/components/component-globals-tag",
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer"
    ]
  };
