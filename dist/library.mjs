import { openBlock, createElementBlock, createElementVNode, normalizeClass, toDisplayString, Fragment, createTextVNode } from 'vue';

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
const _hoisted_3 = /*#__PURE__*/createElementVNode("div", { class: "card-header" }, " Status ", -1 /* HOISTED */);
const _hoisted_4 = { class: "card-body card-collapse" };
const _hoisted_5 = { class: "row" };
const _hoisted_6 = { class: "col-sm-12" };
const _hoisted_7 = /*#__PURE__*/createElementVNode("strong", null, "Status", -1 /* HOISTED */);
const _hoisted_8 = /*#__PURE__*/createElementVNode("br", null, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", _hoisted_2, [
      _hoisted_3,
      createElementVNode("div", _hoisted_4, [
        createElementVNode("div", _hoisted_5, [
          createElementVNode("div", _hoisted_6, [
            _hoisted_7,
            _hoisted_8,
            ($props.badgeClass)
              ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: normalizeClass(["badge", $props.badgeClass])
                }, toDisplayString($props.status), 3 /* TEXT, CLASS */))
              : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                  createTextVNode(toDisplayString($props.status), 1 /* TEXT */)
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

export { plugin as default };
