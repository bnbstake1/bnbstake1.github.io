(this.webpackJsonppolystake = this.webpackJsonppolystake || []).push([[0], {389: function (e, t, n) {}, 393: function (e, t, n) {}, 394: function (e, t) {}, 434: function (e, t) {}, 436: function (e, t) {}, 459: function (e, t) {}, 461: function (e, t) {}, 473: function (e, t) {}, 474: function (e, t) {}, 496: function (e, t) {}, 498: function (e, t) {}, 500: function (e, t) {}, 607: function (e, t) {}, 711: function (e, t) {}, 748: function (e, t) {}, 750: function (e, t) {}, 757: function (e, t) {}, 758: function (e, t) {}, 783: function (e, t) {}, 790: function (e, t) {}, 844: function (e, t) {}, 891: function (e, t, n) {}, 893: function (e, t, n) {
    "use strict";
    n.r(t);
    var a = n(1), s = n.n(a), c = n(44), r = n.n(c), i = (n(389), n(204)), o = n(5), l = n(6), d = n(11), u = n(12), h = n(8), j = n(2), p = n.n(j), b = n(363), x = n(903), m = n(904), f = n(378), O = n(905), y = n(379), g = n(908), v = n(906), w = n(909), k = n(910), A = n(907), N = (n(393), n(383)), R = n(372), P = n.n(R), E = n(375), C = n.n(E), D = n(125), I = (n(885), n(376)), T = n.n(I), S = n(377), U = n.n(S), M = n(0), B = {fetching: false, address: "", shortAddress: "", balance: null, web3: null, contract: null, provider: null, connected: false, chainId: 1, networkId: 1, assets: [], showModal: true, pendingRequest: false, result: null, contractTotalStaked: "...", contractBalance: "...", contractPercent0: "...", contractPercent1: "...", contractPercent2: "...", contractPercent3: "...", contractPercent4: "...", contractPercent5: "...", contractPlan0Info: "...", contractPlan1Info: "...", contractPlan2Info: "...", contractPlan3Info: "...", contractPlan4Info: "...", contractPlan5Info: "...", contractUserAvailable: "...", contractUserTotalDeposits: "...", contractUserReferralTotalBonus: "...", contractUserReferralWithdrawn: "...", contractUserDownlineCount: "...", contractUserAmountOfDeposits: 0, contractUserDepositInfo: [], profit: ["...", "...", "...", "...", "...", "..."], avax: "...", avaxisLoading: false, ref: null}, _ = function (e) {
      var t = e.days, n = e.hours, a = e.minutes, s = e.seconds;
      return e.completed ? Object(M.jsx)("span", {}) : Object(M.jsxs)("div", {className: "launchBox", children: ["Time to start: ", t, "d ", n, "h ", a, "m ", s, "s"]});
    }, F = function () {
      var e = Object(h.a)(p.a.mark(function e(t) {
        return p.a.wrap(function (e) {
          for (;;) switch (e.prev = e.next) {
            case 0:
              if (t.networkName, e.prev = 1, window.ethereum) {
                e.next = 4;
                break;
              }
              throw new Error("No crypto wallet found");
            case 4:
              return e.next = 6, window.ethereum.request({method: "wallet_addEthereumChain", params: [{chainId: "0xa86a", chainName: "Binance Network", nativeCurrency: {name: "Avalanche", symbol: "AVAX", decimals: 18}, rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"], blockExplorerUrls: ["https://snowtrace.io/"]}]});
            case 6:
              e.next = 11;
              break;
            case 8:
              e.prev = 8, e.t0 = e.catch(1), console.error(e.t0.message);
            case 11:
            case "end":
              return e.stop();
          }
        }, e, null, [[1, 8]]);
      }));
      return function (t) {
        return e.apply(this, arguments);
      };
    }();
    function W(e) {
      var t = new P.a(e);
      return t.eth.extend({methods: [{name: "chainId", call: "eth_chainId", outputFormatter: t.utils.hexToNumber}]}), t;
    }
    function V(e, t) {
      var n = (e - t) / e * 100;
      return Math.round(Math.abs(n));
    }
    var X = function (e) {
      Object(d.a)(n, e);
      var t = Object(u.a)(n);
      function n(e) {
        var a;
        return Object(o.a)(this, n), (a = t.call(this, e)).ABI = [{constant: true, inputs: [], name: "PERCENTS_DIVIDER", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserDownlineCount", outputs: [{name: "", type: "uint256"}, {name: "", type: "uint256"}, {name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserDividends", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserAvailable", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [], name: "TIME_STEP", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserReferrer", outputs: [{name: "", type: "address"}], payable: false, stateMutability: "view", type: "function"}, {constant: false, inputs: [], name: "withdraw", outputs: [], payable: false, stateMutability: "nonpayable", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserReferralTotalBonus", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [], name: "PROJECT_FEE", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [], name: "PERCENT_STEP", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: false, inputs: [{name: "referrer", type: "address"}, {name: "plan", type: "uint8"}], name: "invest", outputs: [], payable: true, stateMutability: "payable", type: "function"}, {constant: true, inputs: [{name: "plan", type: "uint8"}, {name: "deposit", type: "uint256"}], name: "getResult", outputs: [{name: "percent", type: "uint256"}, {name: "profit", type: "uint256"}, {name: "finish", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "", type: "uint256"}], name: "REFERRAL_PERCENTS", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [], name: "totalRefBonus", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserReferralWithdrawn", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [], name: "getContractBalance", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserTotalDeposits", outputs: [{name: "amount", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [], name: "totalStaked", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [], name: "commissionWallet", outputs: [{name: "", type: "address"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "plan", type: "uint8"}], name: "getPercent", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserAmountOfDeposits", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "plan", type: "uint8"}], name: "getPlanInfo", outputs: [{name: "time", type: "uint256"}, {name: "percent", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}, {name: "index", type: "uint256"}], name: "getUserDepositInfo", outputs: [{name: "plan", type: "uint8"}, {name: "percent", type: "uint256"}, {name: "amount", type: "uint256"}, {name: "profit", type: "uint256"}, {name: "start", type: "uint256"}, {name: "finish", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [], name: "startUNIX", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserCheckpoint", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [], name: "INVEST_MIN_AMOUNT", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {constant: true, inputs: [{name: "userAddress", type: "address"}], name: "getUserReferralBonus", outputs: [{name: "", type: "uint256"}], payable: false, stateMutability: "view", type: "function"}, {inputs: [{name: "wallet", type: "address"}], payable: false, stateMutability: "nonpayable", type: "constructor"}, {anonymous: false, inputs: [{indexed: false, name: "user", type: "address"}], name: "Newbie", type: "event"}, {anonymous: false, inputs: [{indexed: true, name: "user", type: "address"}, {indexed: false, name: "plan", type: "uint8"}, {indexed: false, name: "percent", type: "uint256"}, {indexed: false, name: "amount", type: "uint256"}, {indexed: false, name: "profit", type: "uint256"}, {indexed: false, name: "start", type: "uint256"}, {indexed: false, name: "finish", type: "uint256"}], name: "NewDeposit", type: "event"}, {anonymous: false, inputs: [{indexed: true, name: "user", type: "address"}, {indexed: false, name: "amount", type: "uint256"}], name: "Withdrawn", type: "event"}, {anonymous: false, inputs: [{indexed: true, name: "referrer", type: "address"}, {indexed: true, name: "referral", type: "address"}, {indexed: true, name: "level", type: "uint256"}, {indexed: false, name: "amount", type: "uint256"}], name: "RefBonus", type: "event"}, {anonymous: false, inputs: [{indexed: true, name: "user", type: "address"}, {indexed: false, name: "totalAmount", type: "uint256"}], name: "FeePayed", type: "event"}], a.CONTRACT = "0x31d12f45dc75af5a71a295bc172bed8fd7a13bbc", a.URL = "https://bnbstake1.github.io", a.DEF_ADDRESS = "0x9354545AFd5abe75097A1676Fb2337117B47707F", a.onConnect = Object(h.a)(p.a.mark(function e() {
          var t, n, s, c, r, i, o, l;
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return e.next = 2, a.web3Modal.connect();
              case 2:
                return t = e.sent, e.next = 5, a.subscribeProvider(t);
              case 5:
                return n = W(t), e.next = 8, n.eth.getAccounts();
              case 8:
                return s = e.sent, c = s[0], r = c.substring(0, 6) + "..." + c.substring(38, 42), e.next = 13, n.eth.net.getId();
              case 13:
                return i = e.sent, e.next = 16, n.eth.chainId();
              case 16:
                return 97 != (o = e.sent) && T()({title: "Binance Network Chain Error", text: "You need connect to Binance Network first! \r\n\nClick to 'Add / Change Binance Network' button for add or change network!", icon: "error", buttons: {info: "Add or Change Network", support: "Help Article"}}).then(function (e) {
                  "info" === e && F("avalanche"), "help" === e && window.open("https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche", "_blank");
                }), e.next = 20, new n.eth.Contract(a.ABI, a.CONTRACT);
              case 20:
                return l = e.sent, e.next = 23, a.setState({web3: n, provider: t, connected: true, address: c, shortAddress: r, contract: l, chainId: o, networkId: i});
              case 23:
                return e.next = 25, a.getAccountAssets();
              case 25:
                return e.next = 27, a.readData();
              case 27:
                return e.next = 29, a.updateData();
              case 29:
              case "end":
                return e.stop();
            }
          }, e);
        })), a.onDisconnect = Object(h.a)(p.a.mark(function e() {
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return localStorage.removeItem("WEB3_CONNECT_CACHED_PROVIDER"), e.next = 3, a.setState({connected: false});
              case 3:
              case "end":
                return e.stop();
            }
          }, e);
        })), a.subscribeProvider = function () {
          var e = Object(h.a)(p.a.mark(function e(t) {
            return p.a.wrap(function (e) {
              for (;;) switch (e.prev = e.next) {
                case 0:
                  if (t.on) {
                    e.next = 2;
                    break;
                  }
                  return e.abrupt("return");
                case 2:
                  t.on("close", function () {
                    return a.resetApp();
                  }), t.on("accountsChanged", function () {
                    var e = Object(h.a)(p.a.mark(function e(t) {
                      return p.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            window.location.reload();
                          case 1:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }()), t.on("chainChanged", function () {
                    var e = Object(h.a)(p.a.mark(function e(t) {
                      return p.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            window.location.reload();
                          case 1:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }()), t.on("networkChanged", function () {
                    var e = Object(h.a)(p.a.mark(function e(t) {
                      return p.a.wrap(function (e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            window.location.reload();
                          case 1:
                          case "end":
                            return e.stop();
                        }
                      }, e);
                    }));
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  }());
                case 6:
                case "end":
                  return e.stop();
              }
            }, e);
          }));
          return function (t) {
            return e.apply(this, arguments);
          };
        }(), a.getAccountAssets = Object(h.a)(p.a.mark(function e() {
          var t, n, s, c;
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = a.state, n = t.address, s = t.web3, a.setState({fetching: true}), e.prev = 2, e.next = 5, s.eth.getBalance(n);
              case 5:
                return e.t0 = e.sent, e.t1 = Math.pow(10, 18), c = e.t0 / e.t1, e.next = 10, a.setState({fetching: false, balance: c});
              case 10:
                e.next = 17;
                break;
              case 12:
                return e.prev = 12, e.t2 = e.catch(2), console.error(e.t2), e.next = 17, a.setState({fetching: false});
              case 17:
              case "end":
                return e.stop();
            }
          }, e, null, [[2, 12]]);
        })), a.resetApp = Object(h.a)(p.a.mark(function e() {
          var t;
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (!((t = a.state.web3) && t.currentProvider && t.currentProvider.close)) {
                  e.next = 4;
                  break;
                }
                return e.next = 4, t.currentProvider.close();
              case 4:
                return e.next = 6, a.web3Modal.clearCachedProvider();
              case 6:
                a.setState(Object(i.a)({}, B));
              case 7:
              case "end":
                return e.stop();
            }
          }, e);
        })), a.readData = Object(h.a)(p.a.mark(function e() {
          var t;
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = a.state.contract, e.next = 3, t.methods.totalStaked().call().then(function (e) {
                  var t = Number(a.state.web3.utils.fromWei(e)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  a.setState({contractTotalStaked: t});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.totalStaked", e);
                });
              case 3:
                return e.next = 5, t.methods.getContractBalance().call().then(function (e) {
                  var t = Number(a.state.web3.utils.fromWei(e)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  a.setState({contractBalance: t});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getContractBalance", e);
                });
              case 5:
                return e.next = 7, t.methods.getPercent(0).call().then(function (e) {
                  a.setState({contractPercent0: e / 10});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getPercent 0", e);
                });
              case 7:
                return e.next = 9, t.methods.getPercent(1).call().then(function (e) {
                  a.setState({contractPercent1: e / 10});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getPercent 1", e);
                });
              case 9:
                return e.next = 11, t.methods.getPercent(2).call().then(function (e) {
                  a.setState({contractPercent2: e / 10});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getPercent 2", e);
                });
              case 11:
                return e.next = 13, t.methods.getPercent(3).call().then(function (e) {
                  a.setState({contractPercent3: e / 10});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getPercent 3", e);
                });
              case 13:
                return e.next = 15, t.methods.getPercent(4).call().then(function (e) {
                  a.setState({contractPercent4: e / 10});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getPercent 4", e);
                });
              case 15:
                return e.next = 17, t.methods.getPercent(5).call().then(function (e) {
                  a.setState({contractPercent5: e / 10});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getPercent 5", e);
                });
              case 17:
              case "end":
                return e.stop();
            }
          }, e);
        })), a.updateData = Object(h.a)(p.a.mark(function e() {
          var t, n, s, c, r, i;
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = a.state.contract, e.next = 3, t.methods.getUserAvailable(a.state.address).call().then(function (e) {
                  var t = Number(a.state.web3.utils.fromWei(e)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  a.setState({contractUserAvailable: t});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getUserAvailable", e);
                });
              case 3:
                return e.next = 5, t.methods.getUserTotalDeposits(a.state.address).call().then(function (e) {
                  var t = Number(a.state.web3.utils.fromWei(e)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  a.setState({contractUserTotalDeposits: t});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getUserTotalDeposits", e);
                });
              case 5:
                return e.next = 7, t.methods.getUserReferralTotalBonus(a.state.address).call().then(function (e) {
                  var t = Number(a.state.web3.utils.fromWei(e)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  a.setState({contractUserReferralTotalBonus: t});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getUserReferralTotalBonus", e);
                });
              case 7:
                return e.next = 9, t.methods.getUserReferralWithdrawn(a.state.address).call().then(function (e) {
                  var t = Number(a.state.web3.utils.fromWei(e)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  a.setState({contractUserReferralWithdrawn: t});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getUserReferralWithdrawn", e);
                });
              case 9:
                return e.next = 11, t.methods.getUserDownlineCount(a.state.address).call().then(function (e) {
                  var t = Number(e[0]) + Number(e[1]) + Number(e[2]);
                  a.setState({contractUserDownlineCount: t});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getUserDownlineCount", e);
                });
              case 11:
                return e.next = 13, t.methods.getUserAmountOfDeposits(a.state.address).call().then(function (e) {
                  a.setState({contractUserAmountOfDeposits: Number(e)});
                }).catch(function (e) {
                  console.log("ERROR", "polygon.getUserAmountOfDeposits", e);
                });
              case 13:
                n = [], s = [14, 21, 28, 14, 21, 28], c = Math.floor(Date.now() / 1e3), r = p.a.mark(function e(r) {
                  return p.a.wrap(function (e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        return e.next = 2, t.methods.getUserDepositInfo(a.state.address, r).call().then(function (e) {
                          n[r] = e, n[r].daysLeft = (Number(e.finish - c) / 84600).toFixed(2), n[r].daysLeft <= 0 ? n[r].status = "finish" : n[r].status = "active";
                          var t = V(s[n[r].plan], n[r].daysLeft);
                          n[r].percentFinish = t > 100 ? 100 : t, n[r].amount = Number(a.state.web3.utils.fromWei(n[r].amount)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), n[r].profit = Number(a.state.web3.utils.fromWei(n[r].profit)).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","), n[r].plan = Number(n[r].plan) + 1, n[r].percent = Number(n[r].percent) / 10;
                        }).catch(function (e) {
                          console.log("ERROR", "polygon.getUserDepositInfo " + r, e);
                        });
                      case 2:
                      case "end":
                        return e.stop();
                    }
                  }, e);
                }), i = 0;
              case 18:
                if (!(i < a.state.contractUserAmountOfDeposits)) {
                  e.next = 23;
                  break;
                }
                return e.delegateYield(r(i), "t0", 20);
              case 20:
                i++, e.next = 18;
                break;
              case 23:
                a.setState({contractUserDepositInfo: n});
              case 24:
              case "end":
                return e.stop();
            }
          }, e);
        })), a.state = Object(i.a)({}, B), a;
      }
      return Object(l.a)(n, [{key: "componentDidMount", value: function () {
        var e = Object(h.a)(p.a.mark(function e() {
          var t, n, a = this;
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                if (this.web3Modal = new C.a({theme: "dark", chain: "AVAX", network: "mainnet", cacheProvider: true, supportedChainIds: [1, 97], chainId: 97, providerOptions: {injected: {display: {name: "MetaMask", description: "Injected Browser Wallet"}}, walletconnect: {package: N.a, options: {rpc: {1: "https://data-seed-prebsc-1-s1.binance.org:8545", 97: "https://data-seed-prebsc-1-s1.binance.org:8545"}}}}}), !this.web3Modal.cachedProvider) {
                  e.next = 5;
                  break;
                }
                return e.next = 4, this.onConnect();
              case 4:
                this.countdown = setInterval(this.updateData, 1e4);
              case 5:
                "" != (t = window.location.search) ? ({}, (n = /[?&]([^=#]+)=([^&#]*)/g.exec(t))[1] && "ref" == n[1] ? this.setState({ref: n[2]}) : this.setState({ref: this.DEF_ADDRESS})) : this.setState({ref: this.DEF_ADDRESS}), fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd").then(function (e) {
                  return e.json();
                }).then(function (e) {
                  a.setState({avaxisLoading: true, avax: e["avalanche-2"].usd});
                }, function (e) {
                  a.setState({avaxisLoading: true, avax: null});
                });
              case 8:
              case "end":
                return e.stop();
            }
          }, e, this);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }()}, {key: "componentWillUnmount", value: function () {
        var e = Object(h.a)(p.a.mark(function e() {
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                clearInterval(this.countdown);
              case 1:
              case "end":
                return e.stop();
            }
          }, e, this);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }()}, {key: "handleChange", value: function (e, t) {
        var n = e.target.value, a = 0;
        if (0 == t && (a = (n * (this.state.contractPercent0 / 100) * 14).toFixed(2), c.render(a, document.getElementById("plan0profit"))), 1 == t && (a = (n * (this.state.contractPercent1 / 100) * 21).toFixed(2), c.render(a, document.getElementById("plan1profit"))), 2 == t && (a = (n * (this.state.contractPercent2 / 100) * 28).toFixed(2), c.render(a, document.getElementById("plan2profit"))), 3 == t) {
          for (var s = 100, r = 0; r < 14; r++) s += s * (this.state.contractPercent3 / 100);
          a = (n * (s - 100) / 100).toFixed(2), c.render(a, document.getElementById("plan3profit"));
        }
        if (4 == t) {
          for (var i = 100, o = 0; o < 21; o++) i += i * (this.state.contractPercent4 / 100);
          a = (n * (i - 100) / 100).toFixed(2), c.render(a, document.getElementById("plan4profit"));
        }
        if (5 == t) {
          for (var l = 100, d = 0; d < 28; d++) l += l * (this.state.contractPercent5 / 100);
          a = (n * (l - 100) / 100).toFixed(2), c.render(a, document.getElementById("plan5profit"));
        }
      }}, {key: "invest", value: function () {
        var e = Object(h.a)(p.a.mark(function e(t, n) {
          var a, s;
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return a = this.state, a.web3, s = a.contract, e.next = 3, s.methods.invest(this.state.ref, n).send({from: this.state.address, value: this.state.web3.utils.toWei(t), gas: 5e5, gasPrice: this.state.web3.utils.toWei("80", "gwei")}).then(function (e) {
                  D.b.success("Transaction Successful!");
                }).catch(function (e) {
                  console.log("ERROR", "polygon.invest", e);
                });
              case 3:
              case "end":
                return e.stop();
            }
          }, e, this);
        }));
        return function (t, n) {
          return e.apply(this, arguments);
        };
      }()}, {key: "withdraw", value: function () {
        var e = Object(h.a)(p.a.mark(function e() {
          var t, n;
          return p.a.wrap(function (e) {
            for (;;) switch (e.prev = e.next) {
              case 0:
                return t = this.state, t.web3, n = t.contract, e.next = 3, n.methods.withdraw().send({from: this.state.address, gas: 5e5, gasPrice: this.state.web3.utils.toWei("80", "gwei")}).then(function (e) {
                  D.b.success("Withdraw successful!");
                }).catch(function (e) {
                  console.log("ERROR", "polygon.withdraw", e);
                });
              case 3:
              case "end":
                return e.stop();
            }
          }, e, this);
        }));
        return function () {
          return e.apply(this, arguments);
        };
      }()}, {key: "render", value: function () {
        var e = this;
        function t(e, t) {
          return "..." !== e ? Math.round(e * t) : "...";
        }
        function n(e, t) {
          if ("..." !== e) {
            for (var n = 100, a = 0; a < t; a++) n += n * (e / 100);
            return Math.round(n - 100);
          }
          return "...";
        }
        return Object(M.jsxs)(x.a, {children: [Object(M.jsx)("div", {className: "migration-div", children: Object(M.jsx)("a", {href: "/migration", children: Object(M.jsx)("h4", {class: "migration-text", children: Object(M.jsx)("a", {href: "https://maticstake.app", target: "_blank", children: Object(M.jsx)("img", {src: "maticstake-logo.png"})})})})}), Object(M.jsx)(b.a, {date: new Date(16475328e5), renderer: _}), Object(M.jsxs)(m.a, {className: "align-items-center mb-4", children: [Object(M.jsx)(f.a, {xl: 2, lg: 2, md: 12, sm: 12, xs: 12, children: Object(M.jsx)(O.a, {src: "logo.png"})}), Object(M.jsxs)(f.a, {xl: 2, lg: 2, md: 12, sm: 12, xs: 12, className: "top text-center", children: [!this.state.connected && Object(M.jsx)(y.a, {variant: "warning", size: "sm", onClick: this.onConnect, children: "Connect Wallet"}), this.state.connected && Object(M.jsx)(y.a, {variant: "outline-warning", size: "sm", onClick: this.onDisconnect, children: this.state.shortAddress})]}), Object(M.jsx)(f.a, {xl: 2, lg: 2, md: 12, sm: 12, xs: 12, children: Object(M.jsxs)(y.a, {onClick: function () {
          return F("avalanche");
        }, variant: "warning", size: "sm", children: [Object(M.jsx)("img", {className: "button-img", src: "/metamask.png", height: "16"}), " Binance Network"]})}), Object(M.jsxs)(f.a, {xl: 6, lg: 6, md: 12, sm: 12, xs: 12, className: "top text-right d-none d-sm-none d-md-block", children: [Object(M.jsxs)("span", {className: "top-bnb", children: ["1 AVAX = ", Object(M.jsxs)("b", {children: ["$", this.state.avax]})]}), "   ", Object(M.jsx)(y.a, {href: "https://www.binance.com/en/price/avalanche", target: "_blank", rel: "noreferrer", className: "btn-sm btn-warning-outline", children: "Buy AVAX"}), "   ", Object(M.jsxs)(g.a, {style: {display: "inline"}, children: [Object(M.jsx)(g.a.Toggle, {variant: "info", className: "btn-sm", children: "Telegram"}), Object(M.jsxs)(g.a.Menu, {children: [Object(M.jsx)(g.a.Item, {href: "https://t.me/avaxstake_en", rel: "noreferrer", target: "_blank", children: "English"}), Object(M.jsx)(g.a.Item, {href: "https://t.me/avaxstake_esp", rel: "noreferrer", target: "_blank", children: "Español"})]})]}), "   ", Object(M.jsxs)(g.a, {style: {display: "inline"}, children: [Object(M.jsx)(g.a.Toggle, {variant: "primary", className: "btn-sm", children: "Audit"}), Object(M.jsxs)(g.a.Menu, {children: [Object(M.jsx)(g.a.Item, {href: "https://hazecrypto.net/audit/avaxstake", rel: "noreferrer", target: "_blank", children: "HazeCrypto Online Report"}), Object(M.jsx)(g.a.Item, {href: "https://hcserver.xyz/public/pdf/audits/HazeSecurity_AVAXstake.pdf", rel: "noreferrer", target: "_blank", children: "PDF Report"})]})]}), "   ", Object(M.jsx)(y.a, {href: "https://support.avax.network/en/articles/4626956-how-do-i-set-up-metamask-on-avalanche", target: "_blank", rel: "noreferrer", className: "btn-sm btn-success", children: "Help"}), "   ", Object(M.jsxs)(g.a, {style: {display: "inline"}, children: [Object(M.jsx)(g.a.Toggle, {variant: "warning", className: "btn-sm", children: "Presentation"}), Object(M.jsxs)(g.a.Menu, {children: [Object(M.jsx)(g.a.Item, {href: "presentation-eng.pdf", rel: "noreferrer", target: "_blank", children: "English PDF"}), Object(M.jsx)(g.a.Item, {href: "presentation-esp.pdf", rel: "noreferrer", target: "_blank", children: "Español PDF"})]})]}), "   ", Object(M.jsxs)(g.a, {style: {display: "none"}, children: [Object(M.jsx)(g.a.Toggle, {variant: "dark", className: "btn-sm", children: "EN"}), Object(M.jsxs)(g.a.Menu, {children: [Object(M.jsx)(g.a.Item, {href: "https://t.me/avaxstake_en", rel: "noreferrer", target: "_blank", children: "English"}), Object(M.jsx)(g.a.Item, {href: "https://t.me/avaxstake_esp", rel: "noreferrer", target: "_blank", children: "Español"})]})]})]})]}), Object(M.jsxs)(m.a, {className: "info-box", children: [Object(M.jsx)(f.a, {xl: 8, lg: 8, md: 12, sm: 12, xs: 12, className: "mb-4", children: Object(M.jsxs)("div", {className: "box-gradient", children: [Object(M.jsxs)("p", {children: ["Total income: based on your tariff plan (", Object(M.jsx)("b", {children: "from 5% to 8% daily"}), ") "]}), Object(M.jsxs)("p", {children: ["Basic interest rate: ", Object(M.jsx)("b", {children: "+0.5% every 24 hours"}), " - only for new deposits"]}), Object(M.jsxs)("p", {children: ["Minimal deposit: ", Object(M.jsx)("b", {children: "0.1 AVAX"}), ", no maximal limit"]}), Object(M.jsxs)("p", {children: ["Earnings ", Object(M.jsx)("b", {children: "every moment"}), ", withdraw ", Object(M.jsx)("b", {children: "any time"}), " (if you use capitalization of interest you can withdraw only after end of your deposit)"]})]})}), Object(M.jsxs)(f.a, {xl: 4, lg: 4, md: 12, sm: 12, xs: 12, className: "mb-4", children: [Object(M.jsxs)("p", {children: ["Total AVAX Staked ", Object(M.jsx)("a", {href: "https://snowtrace.io/address/0x31d12f45dc75af5a71a295bc172bed8fd7a13bbc#code", target: "_blank", rel: "noreferrer", children: Object(M.jsx)(v.a, {className: "ml-2", variant: "primary", children: "Contract"})})]}), Object(M.jsx)("h2", {children: this.state.contractTotalStaked}), Object(M.jsx)("p", {children: "Total Contract Balance"}), Object(M.jsx)("h2", {children: this.state.contractBalance})]})]}), Object(M.jsxs)(m.a, {className: "mb-4", children: [Object(M.jsx)(f.a, {xl: 4, lg: 4, md: 12, sm: 12, xs: 12, children: Object(M.jsxs)("div", {className: "plan-box text-center", children: [Object(M.jsx)("div", {className: "plan-box-name", children: "Plan 1"}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Daily Profit"}), Object(M.jsxs)("h2", {children: [this.state.contractPercent0, "%"]})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Total Return"}), Object(M.jsxs)("h2", {children: [t(this.state.contractPercent0, 14), "%"]})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Withdraw time"}), Object(M.jsx)("h3", {children: "Any Time"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Days"}), Object(M.jsx)("h2", {children: "14"})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Enter Amount"}), Object(M.jsx)(w.a.Control, {onChange: function (t) {
          return e.handleChange(t, "0");
        }, size: "lg", className: "btn-secondary", type: "text", placeholder: "10", id: "plan0amount"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "In 14 days you will get"}), Object(M.jsx)("h4", {id: "plan0profit", children: "..."})]})]}), Object(M.jsx)(y.a, {className: "mt-2", size: "lg", block: true, variant: "warning", onClick: function () {
          return e.invest(document.getElementById("plan0amount").value, 0);
        }, children: "STAKE AVAX"})]})}), Object(M.jsx)(f.a, {xl: 4, lg: 4, md: 12, sm: 12, xs: 12, children: Object(M.jsxs)("div", {className: "plan-box text-center", children: [Object(M.jsx)("div", {className: "plan-box-name", children: "Plan 2"}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Daily Profit"}), Object(M.jsxs)("h2", {children: [this.state.contractPercent1, "%"]})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Total Return"}), Object(M.jsxs)("h2", {children: [t(this.state.contractPercent1, 21), "%"]})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Withdraw time"}), Object(M.jsx)("h3", {children: "Any Time"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Days"}), Object(M.jsx)("h2", {children: "21"})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Enter Amount"}), Object(M.jsx)(w.a.Control, {onChange: function (t) {
          return e.handleChange(t, "1");
        }, size: "lg", className: "btn-secondary", type: "text", placeholder: "10", id: "plan1amount"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "In 21 days you will get"}), Object(M.jsx)("h4", {id: "plan1profit", children: "..."})]})]}), Object(M.jsx)(y.a, {className: "mt-2", size: "lg", block: true, variant: "warning", onClick: function () {
          return e.invest(document.getElementById("plan1amount").value, 1);
        }, children: "STAKE AVAX"})]})}), Object(M.jsx)(f.a, {xl: 4, lg: 4, md: 12, sm: 12, xs: 12, children: Object(M.jsxs)("div", {className: "plan-box text-center", children: [Object(M.jsx)("div", {className: "plan-box-name", children: "Plan 3"}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Daily Profit"}), Object(M.jsxs)("h2", {children: [this.state.contractPercent2, "%"]})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Total Return"}), Object(M.jsxs)("h2", {children: [t(this.state.contractPercent2, 28), "%"]})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Withdraw time"}), Object(M.jsx)("h3", {children: "Any Time"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Days"}), Object(M.jsx)("h2", {children: "28"})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Enter Amount"}), Object(M.jsx)(w.a.Control, {onChange: function (t) {
          return e.handleChange(t, "2");
        }, size: "lg", className: "btn-secondary", type: "text", placeholder: "10", id: "plan2amount"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "In 28 days you will get"}), Object(M.jsx)("h4", {id: "plan2profit", children: "..."})]})]}), Object(M.jsx)(y.a, {className: "mt-2", size: "lg", block: true, variant: "warning", onClick: function () {
          return e.invest(document.getElementById("plan2amount").value, 2);
        }, children: "STAKE AVAX"})]})})]}), Object(M.jsxs)(m.a, {className: "mb-4", children: [Object(M.jsx)(f.a, {xl: 4, lg: 4, md: 12, sm: 12, xs: 12, children: Object(M.jsxs)("div", {className: "plan-box1 text-center", children: [Object(M.jsx)("div", {className: "plan-box-name1", children: "Plan 4"}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Daily Profit"}), Object(M.jsxs)("h2", {children: [this.state.contractPercent3, "%"]})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Total Return"}), Object(M.jsxs)("h2", {children: [n(this.state.contractPercent3, 14), "%"]})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Withdraw time"}), Object(M.jsx)("h3", {children: "End of Plan"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Days"}), Object(M.jsx)("h2", {children: "14"})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Enter Amount"}), Object(M.jsx)(w.a.Control, {onChange: function (t) {
          return e.handleChange(t, "3");
        }, size: "lg", className: "btn-secondary", type: "text", placeholder: "10", id: "plan3amount"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "In 14 days you will get"}), Object(M.jsx)("h4", {id: "plan3profit", children: "..."})]})]}), Object(M.jsx)(y.a, {className: "mt-2", size: "lg", block: true, variant: "success", onClick: function () {
          return e.invest(document.getElementById("plan3amount").value, 3);
        }, children: "STAKE AVAX"}), Object(M.jsx)("i", {className: "small", children: "* plan use capitalization of interest"})]})}), Object(M.jsx)(f.a, {xl: 4, lg: 4, md: 12, sm: 12, xs: 12, children: Object(M.jsxs)("div", {className: "plan-box1 text-center", children: [Object(M.jsx)("div", {className: "plan-box-name1", children: "Plan 5"}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Daily Profit"}), Object(M.jsxs)("h2", {children: [this.state.contractPercent4, "%"]})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Total Return"}), Object(M.jsxs)("h2", {children: [n(this.state.contractPercent4, 21), "%"]})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Withdraw time"}), Object(M.jsx)("h3", {children: "End of Plan"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Days"}), Object(M.jsx)("h2", {children: "21"})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Enter Amount"}), Object(M.jsx)(w.a.Control, {onChange: function (t) {
          return e.handleChange(t, "4");
        }, size: "lg", className: "btn-secondary", type: "text", placeholder: "10", id: "plan4amount"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "In 21 days you will get"}), Object(M.jsx)("h4", {id: "plan4profit", children: "..."})]})]}), Object(M.jsx)(y.a, {className: "mt-2", size: "lg", block: true, variant: "success", onClick: function () {
          return e.invest(document.getElementById("plan4amount").value, 4);
        }, children: "STAKE AVAX"}), Object(M.jsx)("i", {className: "small", children: "* plan use capitalization of interest"})]})}), Object(M.jsx)(f.a, {xl: 4, lg: 4, md: 12, sm: 12, xs: 12, children: Object(M.jsxs)("div", {className: "plan-box1 text-center", children: [Object(M.jsx)("div", {className: "plan-box-name1", children: "Plan 6"}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Daily Profit"}), Object(M.jsxs)("h2", {children: [this.state.contractPercent5, "%"]})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Total Return"}), Object(M.jsxs)("h2", {children: [n(this.state.contractPercent5, 28), "%"]})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Withdraw time"}), Object(M.jsx)("h3", {children: "End of Plan"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Days"}), Object(M.jsx)("h2", {children: "28"})]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "Enter Amount"}), Object(M.jsx)(w.a.Control, {onChange: function (t) {
          return e.handleChange(t, "5");
        }, size: "lg", className: "btn-secondary", type: "text", placeholder: "10", id: "plan5amount"})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {children: "In 28 days you will get"}), Object(M.jsx)("h4", {id: "plan5profit", children: "..."})]})]}), Object(M.jsx)(y.a, {className: "mt-2", size: "lg", block: true, variant: "success", onClick: function () {
          return e.invest(document.getElementById("plan5amount").value, 5);
        }, children: "STAKE AVAX"}), Object(M.jsx)("i", {className: "small", children: "* plan use capitalization of interest"})]})})]}), Object(M.jsxs)("p", {className: "small", children: ["1. Important: Plans return are float and daily profit for a new deposit will increase by 0.5% daily", Object(M.jsx)("br", {}), "2. Minimum deposit amount is 0.1 AVAX and you can have multiple deposits", Object(M.jsx)("br", {}), "3. Earnings every moment, withdraw instantly any time (if you did not use capitalization of interest in Plan 4, Plan 5 and Plan 6)"]}), Object(M.jsxs)(m.a, {className: "mb-4", children: [Object(M.jsx)(f.a, {xl: 4, lg: 4, md: 12, sm: 12, xs: 12, children: Object(M.jsxs)("div", {className: "box-gradient1", children: [Object(M.jsx)("p", {children: "Total Stacked AVAX"}), Object(M.jsx)("h2", {children: this.state.contractUserTotalDeposits}), Object(M.jsx)("p", {children: "Available AVAX for withdrawal"}), Object(M.jsx)("h2", {children: this.state.contractUserAvailable}), Object(M.jsx)(y.a, {variant: "dark", size: "lg", onClick: function () {
          return e.withdraw();
        }, children: "Withdraw AVAX"})]})}), Object(M.jsx)(f.a, {xl: 8, lg: 8, md: 12, sm: 12, xs: 12, children: Object(M.jsxs)("div", {className: "plan-box", children: [Object(M.jsx)("p", {children: "Your Referral Link"}), Object(M.jsx)(w.a, {children: Object(M.jsxs)(w.a.Row, {className: "align-items-center", children: [Object(M.jsx)(f.a, {xs: "11", children: Object(M.jsx)(w.a.Control, {inline: true, size: "xl", className: "btn-secondary", type: "text", value: this.URL + "/?ref=" + this.state.address})}), Object(M.jsx)(f.a, {children: Object(M.jsx)(U.a, {text: this.URL + "/?ref=" + this.state.address, onSuccess: function (e) {
          return D.b.success("Referral Link Copied!");
        }, onError: function (e) {
          return console.log(e);
        }, children: Object(M.jsx)(y.a, {inline: true, size: "xl", variant: "warning", children: Object(M.jsx)(A.a, {size: 20, className: "mt-0"})})})})]})}), Object(M.jsxs)(m.a, {className: "mt-2", children: [Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {className: "mt-4 mb-0", children: "Total Referral Earned"}), Object(M.jsx)("h5", {children: this.state.contractUserReferralTotalBonus}), Object(M.jsx)("p", {className: "mt-4 mb-0", children: "Invited Users by You"}), Object(M.jsx)("h5", {children: this.state.contractUserDownlineCount})]}), Object(M.jsxs)(f.a, {children: [Object(M.jsx)("p", {className: "mt-4 mb-0", children: "Total Referral Withdrawn"}), Object(M.jsx)("h5", {children: this.state.contractUserReferralWithdrawn})]}), Object(M.jsx)(f.a, {children: Object(M.jsxs)("p", {className: "mt-4 mb-0", children: ["Earn for promotion AVAXstake", Object(M.jsx)("br", {}), Object(M.jsx)("br", {}), "You will receive:", Object(M.jsx)("br", {}), Object(M.jsx)("br", {}), Object(M.jsx)("b", {children: "5%"}), " from each level 1 referral deposits", Object(M.jsx)("br", {}), Object(M.jsx)("b", {children: "2.5%"}), " from each level 2 referral deposits", Object(M.jsx)("br", {}), Object(M.jsx)("b", {children: "0.5%"}), " from each level 3 referral deposits", Object(M.jsx)("br", {}), Object(M.jsx)("br", {}), Object(M.jsx)("i", {children: "Note! You need to have at least 1 deposit to start receive earnings"})]})})]})]})})]}), Object(M.jsx)(m.a, {className: "mb-4", children: Object(M.jsxs)(f.a, {children: [Object(M.jsx)("h2", {children: "Your Stake"}), this.state.contractUserDepositInfo.map(function (e) {
          return Object(M.jsxs)("div", {className: "plan-box-info", style: {opacity: 100 == e.percentFinish ? "40%" : "unset"}, children: [Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {children: [Object(M.jsxs)(v.a, {variant: e.plan > 3 ? "success" : "warning", children: ["Plan ", e.plan]}), Object(M.jsx)("br", {}), e.percent, "%"]}), Object(M.jsx)(f.a, {className: "text-center", children: Object(M.jsx)(v.a, {variant: e.plan > 3 ? "success" : "warning", size: "lg", children: e.status})}), Object(M.jsxs)(f.a, {className: "text-right", children: [new Intl.DateTimeFormat("en-GB", {month: "short", day: "2-digit"}).format(1e3 * e.start), " →", Object(M.jsx)("br", {}), new Intl.DateTimeFormat("en-GB", {month: "short", day: "2-digit"}).format(1e3 * e.finish)]})]}), Object(M.jsxs)(m.a, {children: [Object(M.jsxs)(f.a, {className: "text-left", children: [Object(M.jsx)("h2", {children: e.amount}), Object(M.jsx)("p", {children: "AVAX"})]}), Object(M.jsxs)(f.a, {className: "text-right", children: [Object(M.jsx)("h2", {children: e.profit}), Object(M.jsx)("p", {children: "AVAX"})]})]}), Object(M.jsx)(k.a, {variant: e.plan > 3 ? "success" : "warning", now: e.percentFinish, label: e.percentFinish + "%"})]}, e.start);
        })]})}), Object(M.jsx)(m.a, {className: "footer", children: Object(M.jsx)(f.a, {className: "text-center", children: Object(M.jsx)(O.a, {src: "footer.png", fluid: true})})}), Object(M.jsx)(m.a, {className: "footer mb-5", children: Object(M.jsxs)(f.a, {className: "text-center", children: [" Reviews:  ", Object(M.jsx)("a", {href: "#", target: "_blank", rel: "noreferrer", children: "dApp.review"}), ",  ", Object(M.jsx)("a", {href: "#", target: "_blank", rel: "noreferrer", children: "DAPP.com"})]})}), Object(M.jsx)(m.a, {className: "footer", children: Object(M.jsxs)(f.a, {className: "text-center ml-5", children: ["Backed by", Object(M.jsx)("br", {}), Object(M.jsx)("a", {href: "https://t.me/+nbU8aK1vXqI1ZTdh", target: "_blank", rel: "noreferrer", children: Object(M.jsx)("img", {src: "dfg-banner.png", width: "200"})})]})}), Object(M.jsx)("br", {}), Object(M.jsxs)(m.a, {className: "footer", children: [Object(M.jsxs)(f.a, {className: "text-left ml-5", children: ["Powered by", Object(M.jsx)("br", {}), Object(M.jsx)("a", {href: "https://www.avax.network/", target: "_blank", rel: "noreferrer", children: "AVAX network"})]}), Object(M.jsxs)(f.a, {className: "text-center", children: ["Audited by HazeCrypto", Object(M.jsx)("br", {}), Object(M.jsx)("a", {href: "https://hazecrypto.net/audit/avaxstake", target: "_blank", rel: "noreferrer", children: "Download Audit PDF Report"})]}), Object(M.jsxs)(f.a, {className: "text-right mr-5", children: ["© 2022 by AV. All rights reserved.", Object(M.jsx)("br", {}), Object(M.jsx)("a", {href: "https://bnbstake1.github.io", target: "_blank", rel: "noreferrer", children: "https://bnbstake1.github.io"})]})]}), Object(M.jsx)("br", {}), Object(M.jsx)(D.a, {})]});
      }}]), n;
    }(a.Component), L = X, K = function (e) {
      e && e instanceof Function && n.e(3).then(n.bind(null, 911)).then(function (t) {
        var n = t.getCLS, a = t.getFID, s = t.getFCP, c = t.getLCP, r = t.getTTFB;
        n(e), a(e), s(e), c(e), r(e);
      });
    };
    n(891);
    r.a.render(Object(M.jsx)(s.a.StrictMode, {children: Object(M.jsx)(L, {})}), document.getElementById("root")), K();
  }}, [[893, 1, 2]]]);
  