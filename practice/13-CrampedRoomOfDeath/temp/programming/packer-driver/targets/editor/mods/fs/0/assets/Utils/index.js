System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Node, UITransform, Layers, _crd, createUINode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
      Layers = _cc.Layers;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e9061xJtk5AoqG+njk050ii", "index", undefined);

      _export("createUINode", createUINode = (name = '') => {
        const node = new Node();
        const transform = node.addComponent(UITransform);
        transform.setAnchorPoint(0, 1);
        node.layer = 1 << Layers.nameToLayer("UI_2D");
        return node;
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=index.js.map