System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Node, UITransform, Layers, _crd, createUINode, randomByRange, reg, getNumberWithinString, sortSpriteFrame;

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

      _export("randomByRange", randomByRange = (start, end) => {
        return Math.floor(start + (end - start) * Math.random());
      });

      reg = /\((\d+)\)/;

      getNumberWithinString = str => {
        return parseInt(str.match(reg)[1]) || 0;
      };

      _export("sortSpriteFrame", sortSpriteFrame = spriteFrames => {
        return spriteFrames.sort((a, b) => getNumberWithinString(a.name) - getNumberWithinString(b.name));
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=index.js.map