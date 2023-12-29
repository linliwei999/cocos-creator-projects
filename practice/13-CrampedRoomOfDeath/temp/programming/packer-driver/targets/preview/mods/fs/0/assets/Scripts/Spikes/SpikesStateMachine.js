System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Animation, ENTITY_TYPE_ENUM, FSM_PARAMS_TYPE_ENUM, PARAMS_NAME_ENUM, SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM, getInitParamsNumber, StateMachine, SpikesOneSubStateMachine, SpikesTwoSubStateMachine, SpikesThreeSubStateMachine, SpikesManager, SpikesFourSubStateMachine, _dec, _class, _crd, ccclass, property, SpikesStateMachine;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfENTITY_TYPE_ENUM(extras) {
    _reporterNs.report("ENTITY_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM(extras) {
    _reporterNs.report("FSM_PARAMS_TYPE_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPARAMS_NAME_ENUM(extras) {
    _reporterNs.report("PARAMS_NAME_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM(extras) {
    _reporterNs.report("SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM", "db://assets/Enums", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetInitParamsNumber(extras) {
    _reporterNs.report("getInitParamsNumber", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "db://assets/Base/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesOneSubStateMachine(extras) {
    _reporterNs.report("SpikesOneSubStateMachine", "db://assets/Scripts/Spikes/SpikesOneSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesTwoSubStateMachine(extras) {
    _reporterNs.report("SpikesTwoSubStateMachine", "db://assets/Scripts/Spikes/SpikesTwoSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesThreeSubStateMachine(extras) {
    _reporterNs.report("SpikesThreeSubStateMachine", "db://assets/Scripts/Spikes/SpikesThreeSubStateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesManager(extras) {
    _reporterNs.report("SpikesManager", "db://assets/Scripts/Spikes/SpikesManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSpikesFourSubStateMachine(extras) {
    _reporterNs.report("SpikesFourSubStateMachine", "db://assets/Scripts/Spikes/SpikesFourSubStateMachine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
    }, function (_unresolved_2) {
      ENTITY_TYPE_ENUM = _unresolved_2.ENTITY_TYPE_ENUM;
      FSM_PARAMS_TYPE_ENUM = _unresolved_2.FSM_PARAMS_TYPE_ENUM;
      PARAMS_NAME_ENUM = _unresolved_2.PARAMS_NAME_ENUM;
      SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM = _unresolved_2.SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM;
    }, function (_unresolved_3) {
      getInitParamsNumber = _unresolved_3.getInitParamsNumber;
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      SpikesOneSubStateMachine = _unresolved_4.default;
    }, function (_unresolved_5) {
      SpikesTwoSubStateMachine = _unresolved_5.default;
    }, function (_unresolved_6) {
      SpikesThreeSubStateMachine = _unresolved_6.default;
    }, function (_unresolved_7) {
      SpikesManager = _unresolved_7.SpikesManager;
    }, function (_unresolved_8) {
      SpikesFourSubStateMachine = _unresolved_8.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eb81caH9dhGzqj/ArnqVfk3", "SpikesStateMachine", undefined);

      ({
        ccclass,
        property
      } = _decorator); //自定义联合类型

      _export("SpikesStateMachine", SpikesStateMachine = (_dec = ccclass('SpikesStateMachine'), _dec(_class = class SpikesStateMachine extends (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
        error: Error()
      }), StateMachine) : StateMachine) {
        restTrigger() {
          for (var [_, item] of this.params) {
            if (item.type === (_crd && FSM_PARAMS_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfFSM_PARAMS_TYPE_ENUM({
              error: Error()
            }), FSM_PARAMS_TYPE_ENUM) : FSM_PARAMS_TYPE_ENUM).TRIGGER) {
              item.value = false;
            }
          }
        }

        init() {
          var _this = this;

          return _asyncToGenerator(function* () {
            _this.animationComponent = _this.addComponent(Animation);

            _this.initParams();

            _this.initStateMachine();

            _this.initAnimationEvent();

            yield Promise.all(_this.waitingList);
          })();
        }

        initParams() {
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_CURRENT_COUNT, (_crd && getInitParamsNumber === void 0 ? (_reportPossibleCrUseOfgetInitParamsNumber({
            error: Error()
          }), getInitParamsNumber) : getInitParamsNumber)());
          this.params.set((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT, (_crd && getInitParamsNumber === void 0 ? (_reportPossibleCrUseOfgetInitParamsNumber({
            error: Error()
          }), getInitParamsNumber) : getInitParamsNumber)());
        }

        initStateMachine() {
          this.stateMachines.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE, new (_crd && SpikesOneSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesOneSubStateMachine({
            error: Error()
          }), SpikesOneSubStateMachine) : SpikesOneSubStateMachine)(this));
          this.stateMachines.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_TWO, new (_crd && SpikesTwoSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesTwoSubStateMachine({
            error: Error()
          }), SpikesTwoSubStateMachine) : SpikesTwoSubStateMachine)(this));
          this.stateMachines.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_THREE, new (_crd && SpikesThreeSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesThreeSubStateMachine({
            error: Error()
          }), SpikesThreeSubStateMachine) : SpikesThreeSubStateMachine)(this));
          this.stateMachines.set((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
            error: Error()
          }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_FOUR, new (_crd && SpikesFourSubStateMachine === void 0 ? (_reportPossibleCrUseOfSpikesFourSubStateMachine({
            error: Error()
          }), SpikesFourSubStateMachine) : SpikesFourSubStateMachine)(this));
        }

        initAnimationEvent() {
          this.animationComponent.on(Animation.EventType.FINISHED, () => {
            var name = this.animationComponent.defaultClip.name;
            var totalCount = this.getParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
              error: Error()
            }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT); // console.log('totalCount', totalCount);
            // console.log('SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR', SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM.SPIKES_FOUR);
            // console.log('name', name);

            if (totalCount === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_ONE && name.includes("spikesone/two") || totalCount === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_TWO && name.includes("spikestwo/three") || totalCount === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_THREE && name.includes("spikesthree/four") || totalCount === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
              error: Error()
            }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_FOUR && name.includes("spikesfour/five")) {
              this.node.getComponent(_crd && SpikesManager === void 0 ? (_reportPossibleCrUseOfSpikesManager({
                error: Error()
              }), SpikesManager) : SpikesManager).backZero();
            } // const whiteList = ['attack'];
            // if(whiteList.some(v=> name.includes(v))){
            //     this.node.getComponent(EntityManager).state = ENTITY_STATE_ENUM.IDLE;
            // }

          });
        }

        run() {
          var totalCount = this.getParams((_crd && PARAMS_NAME_ENUM === void 0 ? (_reportPossibleCrUseOfPARAMS_NAME_ENUM({
            error: Error()
          }), PARAMS_NAME_ENUM) : PARAMS_NAME_ENUM).SPIKES_TOTAL_COUNT);

          switch (this.currentState) {
            case this.stateMachines.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE):
            case this.stateMachines.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_TWO):
            case this.stateMachines.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_THREE):
            case this.stateMachines.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
              error: Error()
            }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_FOUR):
              if (totalCount === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_ONE) {
                this.currentState = this.stateMachines.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE);
              } else if (totalCount === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_TWO) {
                this.currentState = this.stateMachines.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_TWO);
              } else if (totalCount === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_THREE) {
                this.currentState = this.stateMachines.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_THREE);
              } else if (totalCount === (_crd && SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM === void 0 ? (_reportPossibleCrUseOfSPIKES_TYPE_MAP_TOTAL_COUNT_ENUM({
                error: Error()
              }), SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM) : SPIKES_TYPE_MAP_TOTAL_COUNT_ENUM).SPIKES_FOUR) {
                this.currentState = this.stateMachines.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                  error: Error()
                }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_FOUR);
              } else {
                this.currentState = this.currentState;
              }

              break;

            default:
              this.currentState = this.stateMachines.get((_crd && ENTITY_TYPE_ENUM === void 0 ? (_reportPossibleCrUseOfENTITY_TYPE_ENUM({
                error: Error()
              }), ENTITY_TYPE_ENUM) : ENTITY_TYPE_ENUM).SPIKES_ONE);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=SpikesStateMachine.js.map