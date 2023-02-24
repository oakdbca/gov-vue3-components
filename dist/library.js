'use strict';

var vue = require('vue');

var script = {
    name: "StatusPanel",
    props: {
        status: {
            required: true,
            type: String,
        },
        badgeClass: {
            required: false,
            type: String,
            default: false,
        }
    },
};

const _hoisted_1 = { class: "" };
const _hoisted_2 = { class: "card card-default" };
const _hoisted_3 = /*#__PURE__*/vue.createElementVNode("div", { class: "card-header" }, " Status ", -1 /* HOISTED */);
const _hoisted_4 = { class: "card-body card-collapse" };
const _hoisted_5 = { class: "row" };
const _hoisted_6 = { class: "col-sm-12" };
const _hoisted_7 = /*#__PURE__*/vue.createElementVNode("strong", null, "Status", -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/vue.createElementVNode("br", null, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (vue.openBlock(), vue.createElementBlock("div", _hoisted_1, [
    vue.createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      vue.createElementVNode("div", _hoisted_4, [
        vue.createElementVNode("div", _hoisted_5, [
          vue.createElementVNode("div", _hoisted_6, [
            _hoisted_7,
            _hoisted_8,
            ($props.badgeClass)
              ? (vue.openBlock(), vue.createElementBlock("span", {
                  key: 0,
                  class: vue.normalizeClass(["badge", $props.badgeClass])
                }, vue.toDisplayString($props.status), 3 /* TEXT, CLASS */))
              : (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 1 }, [
                  vue.createTextVNode(vue.toDisplayString($props.status), 1 /* TEXT */)
                ], 64 /* STABLE_FRAGMENT */))
          ])
        ])
      ])
    ])
  ]))
}

script.render = render;
script.__file = "src/StatusPanel.vue";

var components = { StatusPanel: script };

const plugin = {
  install (Vue) {
    for (const prop in components) {
      if (components.hasOwnProperty(prop)) {
        const component = components[prop];
        Vue.component(component.name, component);
      }
    }
  }
};

module.exports = plugin;
