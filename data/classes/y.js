classes.y = {
  "yaconf": {
    "name": "Yaconf",
    "methods": {
      "get": {
        "name": "get",
        "url": "yaconf.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $name [, mixed $default_value = NULL ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "has": {
        "name": "has",
        "url": "yaconf.has",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $name",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "yaf_action_abstract": {
    "name": "Yaf_Action_Abstract",
    "methods": {
      "execute": {
        "name": "execute",
        "url": "yaf-action-abstract.execute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ mixed $arg [, mixed $... ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getcontroller": {
        "name": "getController",
        "url": "yaf-action-abstract.getcontroller",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Controller_Abstract",
          "ref": null
        }
      }
    }
  },
  "yaf_application": {
    "name": "Yaf_Application",
    "methods": {
      "app": {
        "name": "app",
        "url": "yaf-application.app",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "bootstrap": {
        "name": "bootstrap",
        "url": "yaf-application.bootstrap",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ Yaf_Bootstrap_Abstract $bootstrap ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "clearlasterror": {
        "name": "clearLastError",
        "url": "yaf-application.clearlasterror",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Application",
          "ref": null
        }
      },
      "environ": {
        "name": "environ",
        "url": "yaf-application.environ",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "execute": {
        "name": "execute",
        "url": "yaf-application.execute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $entry, string $...",
          "returnValue": "void",
          "ref": null
        }
      },
      "getappdirectory": {
        "name": "getAppDirectory",
        "url": "yaf-application.getappdirectory",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Application",
          "ref": null
        }
      },
      "getconfig": {
        "name": "getConfig",
        "url": "yaf-application.getconfig",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Config_Abstract",
          "ref": null
        }
      },
      "getdispatcher": {
        "name": "getDispatcher",
        "url": "yaf-application.getdispatcher",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "getlasterrormsg": {
        "name": "getLastErrorMsg",
        "url": "yaf-application.getlasterrormsg",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getlasterrorno": {
        "name": "getLastErrorNo",
        "url": "yaf-application.getlasterrorno",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmodules": {
        "name": "getModules",
        "url": "yaf-application.getmodules",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "run": {
        "name": "run",
        "url": "yaf-application.run",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "setappdirectory": {
        "name": "setAppDirectory",
        "url": "yaf-application.setappdirectory",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $directory",
          "returnValue": "Yaf_Application",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "yaf-application.clone",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-application.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $config [, string $envrion ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "yaf-application.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__sleep": {
        "name": "__sleep",
        "url": "yaf-application.sleep",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__wakeup": {
        "name": "__wakeup",
        "url": "yaf-application.wakeup",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yaf_config_abstract": {
    "name": "Yaf_Config_Abstract",
    "methods": {
      "get": {
        "name": "get",
        "url": "yaf-config-abstract.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, mixed $value",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "readonly": {
        "name": "readonly",
        "url": "yaf-config-abstract.readonly",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "yaf-config-abstract.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Config_Abstract",
          "ref": null
        }
      },
      "toarray": {
        "name": "toArray",
        "url": "yaf-config-abstract.toarray",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      }
    }
  },
  "yaf_config_ini": {
    "name": "Yaf_Config_Ini",
    "methods": {
      "count": {
        "name": "count",
        "url": "yaf-config-ini.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "yaf-config-ini.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "yaf-config-ini.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "yaf-config-ini.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetexists": {
        "name": "offsetExists",
        "url": "yaf-config-ini.offsetexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetget": {
        "name": "offsetGet",
        "url": "yaf-config-ini.offsetget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetset": {
        "name": "offsetSet",
        "url": "yaf-config-ini.offsetset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetunset": {
        "name": "offsetUnset",
        "url": "yaf-config-ini.offsetunset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "readonly": {
        "name": "readonly",
        "url": "yaf-config-ini.readonly",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "yaf-config-ini.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "toarray": {
        "name": "toArray",
        "url": "yaf-config-ini.toarray",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "yaf-config-ini.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-config-ini.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $config_file [, string $section ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__get": {
        "name": "__get",
        "url": "yaf-config-ini.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $name ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "__isset": {
        "name": "__isset",
        "url": "yaf-config-ini.isset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "__set": {
        "name": "__set",
        "url": "yaf-config-ini.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, mixed $value",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yaf_config_simple": {
    "name": "Yaf_Config_Simple",
    "methods": {
      "count": {
        "name": "count",
        "url": "yaf-config-simple.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "yaf-config-simple.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "yaf-config-simple.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "yaf-config-simple.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetexists": {
        "name": "offsetExists",
        "url": "yaf-config-simple.offsetexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetget": {
        "name": "offsetGet",
        "url": "yaf-config-simple.offsetget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetset": {
        "name": "offsetSet",
        "url": "yaf-config-simple.offsetset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetunset": {
        "name": "offsetUnset",
        "url": "yaf-config-simple.offsetunset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "readonly": {
        "name": "readonly",
        "url": "yaf-config-simple.readonly",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "yaf-config-simple.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "toarray": {
        "name": "toArray",
        "url": "yaf-config-simple.toarray",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "yaf-config-simple.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-config-simple.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $config_file [, string $section ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__get": {
        "name": "__get",
        "url": "yaf-config-simple.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $name ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "__isset": {
        "name": "__isset",
        "url": "yaf-config-simple.isset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "__set": {
        "name": "__set",
        "url": "yaf-config-simple.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $value",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yaf_controller_abstract": {
    "name": "Yaf_Controller_Abstract",
    "methods": {
      "display": {
        "name": "display",
        "url": "yaf-controller-abstract.display",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $tpl [, array $parameters ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "forward": {
        "name": "forward",
        "url": "yaf-controller-abstract.forward",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $action [, array $paramters ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "getinvokearg": {
        "name": "getInvokeArg",
        "url": "yaf-controller-abstract.getinvokearg",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "getinvokeargs": {
        "name": "getInvokeArgs",
        "url": "yaf-controller-abstract.getinvokeargs",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getmodulename": {
        "name": "getModuleName",
        "url": "yaf-controller-abstract.getmodulename",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrequest": {
        "name": "getRequest",
        "url": "yaf-controller-abstract.getrequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Request_Abstract",
          "ref": null
        }
      },
      "getresponse": {
        "name": "getResponse",
        "url": "yaf-controller-abstract.getresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Response_Abstract",
          "ref": null
        }
      },
      "getview": {
        "name": "getView",
        "url": "yaf-controller-abstract.getview",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_View_Interface",
          "ref": null
        }
      },
      "getviewpath": {
        "name": "getViewpath",
        "url": "yaf-controller-abstract.getviewpath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "init": {
        "name": "init",
        "url": "yaf-controller-abstract.init",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "initview": {
        "name": "initView",
        "url": "yaf-controller-abstract.initview",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $options ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "redirect": {
        "name": "redirect",
        "url": "yaf-controller-abstract.redirect",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $url",
          "returnValue": "bool",
          "ref": null
        }
      },
      "render": {
        "name": "render",
        "url": "yaf-controller-abstract.render",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $tpl [, array $parameters ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "setviewpath": {
        "name": "setViewpath",
        "url": "yaf-controller-abstract.setviewpath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $view_directory",
          "returnValue": "void",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "yaf-controller-abstract.clone",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-controller-abstract.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_dispatcher": {
    "name": "Yaf_Dispatcher",
    "methods": {
      "autorender": {
        "name": "autoRender",
        "url": "yaf-dispatcher.autorender",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $flag ]",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "catchexception": {
        "name": "catchException",
        "url": "yaf-dispatcher.catchexception",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $flag ]",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "disableview": {
        "name": "disableView",
        "url": "yaf-dispatcher.disableview",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "dispatch": {
        "name": "dispatch",
        "url": "yaf-dispatcher.dispatch",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "Yaf_Response_Abstract",
          "ref": null
        }
      },
      "enableview": {
        "name": "enableView",
        "url": "yaf-dispatcher.enableview",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "flushinstantly": {
        "name": "flushInstantly",
        "url": "yaf-dispatcher.flushinstantly",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $flag ]",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "getapplication": {
        "name": "getApplication",
        "url": "yaf-dispatcher.getapplication",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Application",
          "ref": null
        }
      },
      "getinstance": {
        "name": "getInstance",
        "url": "yaf-dispatcher.getinstance",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "getrequest": {
        "name": "getRequest",
        "url": "yaf-dispatcher.getrequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Request_Abstract",
          "ref": null
        }
      },
      "getrouter": {
        "name": "getRouter",
        "url": "yaf-dispatcher.getrouter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Yaf_Router",
          "ref": null
        }
      },
      "initview": {
        "name": "initView",
        "url": "yaf-dispatcher.initview",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $templates_dir [, array $options ]",
          "returnValue": "Yaf_View_Interface",
          "ref": null
        }
      },
      "registerplugin": {
        "name": "registerPlugin",
        "url": "yaf-dispatcher.registerplugin",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Plugin_Abstract $plugin",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "returnresponse": {
        "name": "returnResponse",
        "url": "yaf-dispatcher.returnresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "setdefaultaction": {
        "name": "setDefaultAction",
        "url": "yaf-dispatcher.setdefaultaction",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $action",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "setdefaultcontroller": {
        "name": "setDefaultController",
        "url": "yaf-dispatcher.setdefaultcontroller",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $controller",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "setdefaultmodule": {
        "name": "setDefaultModule",
        "url": "yaf-dispatcher.setdefaultmodule",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $module",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "seterrorhandler": {
        "name": "setErrorHandler",
        "url": "yaf-dispatcher.seterrorhandler",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "call $callback, int $error_types",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "setrequest": {
        "name": "setRequest",
        "url": "yaf-dispatcher.setrequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "setview": {
        "name": "setView",
        "url": "yaf-dispatcher.setview",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_View_Interface $view",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "throwexception": {
        "name": "throwException",
        "url": "yaf-dispatcher.throwexception",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $flag ]",
          "returnValue": "Yaf_Dispatcher",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "yaf-dispatcher.clone",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-dispatcher.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__sleep": {
        "name": "__sleep",
        "url": "yaf-dispatcher.sleep",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__wakeup": {
        "name": "__wakeup",
        "url": "yaf-dispatcher.wakeup",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yaf_exception": {
    "name": "Yaf_Exception",
    "methods": {
      "getprevious": {
        "name": "getPrevious",
        "url": "yaf-exception.getprevious",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-exception.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_loader": {
    "name": "Yaf_Loader",
    "methods": {
      "autoload": {
        "name": "autoload",
        "url": "yaf-loader.autoload",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "clearlocalnamespace": {
        "name": "clearLocalNamespace",
        "url": "yaf-loader.clearlocalnamespace",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getinstance": {
        "name": "getInstance",
        "url": "yaf-loader.getinstance",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getlibrarypath": {
        "name": "getLibraryPath",
        "url": "yaf-loader.getlibrarypath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $is_global = FALSE ]",
          "returnValue": "Yaf_Loader",
          "ref": null
        }
      },
      "getlocalnamespace": {
        "name": "getLocalNamespace",
        "url": "yaf-loader.getlocalnamespace",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "import": {
        "name": "import",
        "url": "yaf-loader.import",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "islocalname": {
        "name": "isLocalName",
        "url": "yaf-loader.islocalname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "registerlocalnamespace": {
        "name": "registerLocalNamespace",
        "url": "yaf-loader.registerlocalnamespace",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $prefix",
          "returnValue": "void",
          "ref": null
        }
      },
      "setlibrarypath": {
        "name": "setLibraryPath",
        "url": "yaf-loader.setlibrarypath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $directory [, bool $is_global = FALSE ]",
          "returnValue": "Yaf_Loader",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "yaf-loader.clone",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-loader.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__sleep": {
        "name": "__sleep",
        "url": "yaf-loader.sleep",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__wakeup": {
        "name": "__wakeup",
        "url": "yaf-loader.wakeup",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yaf_plugin_abstract": {
    "name": "Yaf_Plugin_Abstract",
    "methods": {
      "dispatchloopshutdown": {
        "name": "dispatchLoopShutdown",
        "url": "yaf-plugin-abstract.dispatchloopshutdown",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request, Yaf_Response_Abstract $response",
          "returnValue": "void",
          "ref": null
        }
      },
      "dispatchloopstartup": {
        "name": "dispatchLoopStartup",
        "url": "yaf-plugin-abstract.dispatchloopstartup",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request, Yaf_Response_Abstract $response",
          "returnValue": "void",
          "ref": null
        }
      },
      "postdispatch": {
        "name": "postDispatch",
        "url": "yaf-plugin-abstract.postdispatch",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request, Yaf_Response_Abstract $response",
          "returnValue": "void",
          "ref": null
        }
      },
      "predispatch": {
        "name": "preDispatch",
        "url": "yaf-plugin-abstract.predispatch",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request, Yaf_Response_Abstract $response",
          "returnValue": "void",
          "ref": null
        }
      },
      "preresponse": {
        "name": "preResponse",
        "url": "yaf-plugin-abstract.preresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request, Yaf_Response_Abstract $response",
          "returnValue": "void",
          "ref": null
        }
      },
      "routershutdown": {
        "name": "routerShutdown",
        "url": "yaf-plugin-abstract.routershutdown",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request, Yaf_Response_Abstract $response",
          "returnValue": "void",
          "ref": null
        }
      },
      "routerstartup": {
        "name": "routerStartup",
        "url": "yaf-plugin-abstract.routerstartup",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request, Yaf_Response_Abstract $response",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yaf_registry": {
    "name": "Yaf_Registry",
    "methods": {
      "del": {
        "name": "del",
        "url": "yaf-registry.del",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "yaf-registry.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $name",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "has": {
        "name": "has",
        "url": "yaf-registry.has",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $name",
          "returnValue": "bool",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "yaf-registry.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $name, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "yaf-registry.clone",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-registry.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_request_abstract": {
    "name": "Yaf_Request_Abstract",
    "methods": {
      "getactionname": {
        "name": "getActionName",
        "url": "yaf-request-abstract.getactionname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getbaseuri": {
        "name": "getBaseUri",
        "url": "yaf-request-abstract.getbaseuri",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getcontrollername": {
        "name": "getControllerName",
        "url": "yaf-request-abstract.getcontrollername",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getenv": {
        "name": "getEnv",
        "url": "yaf-request-abstract.getenv",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $default ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "getexception": {
        "name": "getException",
        "url": "yaf-request-abstract.getexception",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getlanguage": {
        "name": "getLanguage",
        "url": "yaf-request-abstract.getlanguage",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getmethod": {
        "name": "getMethod",
        "url": "yaf-request-abstract.getmethod",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getmodulename": {
        "name": "getModuleName",
        "url": "yaf-request-abstract.getmodulename",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getparam": {
        "name": "getParam",
        "url": "yaf-request-abstract.getparam",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $default ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getparams": {
        "name": "getParams",
        "url": "yaf-request-abstract.getparams",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getrequesturi": {
        "name": "getRequestUri",
        "url": "yaf-request-abstract.getrequesturi",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getserver": {
        "name": "getServer",
        "url": "yaf-request-abstract.getserver",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $default ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "iscli": {
        "name": "isCli",
        "url": "yaf-request-abstract.iscli",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isdispatched": {
        "name": "isDispatched",
        "url": "yaf-request-abstract.isdispatched",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isget": {
        "name": "isGet",
        "url": "yaf-request-abstract.isget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "ishead": {
        "name": "isHead",
        "url": "yaf-request-abstract.ishead",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isoptions": {
        "name": "isOptions",
        "url": "yaf-request-abstract.isoptions",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "ispost": {
        "name": "isPost",
        "url": "yaf-request-abstract.ispost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isput": {
        "name": "isPut",
        "url": "yaf-request-abstract.isput",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isrouted": {
        "name": "isRouted",
        "url": "yaf-request-abstract.isrouted",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isxmlhttprequest": {
        "name": "isXmlHttpRequest",
        "url": "yaf-request-abstract.isxmlhttprequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setactionname": {
        "name": "setActionName",
        "url": "yaf-request-abstract.setactionname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $action",
          "returnValue": "void",
          "ref": null
        }
      },
      "setbaseuri": {
        "name": "setBaseUri",
        "url": "yaf-request-abstract.setbaseuri",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $uir",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcontrollername": {
        "name": "setControllerName",
        "url": "yaf-request-abstract.setcontrollername",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $controller",
          "returnValue": "void",
          "ref": null
        }
      },
      "setdispatched": {
        "name": "setDispatched",
        "url": "yaf-request-abstract.setdispatched",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmodulename": {
        "name": "setModuleName",
        "url": "yaf-request-abstract.setmodulename",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $module",
          "returnValue": "void",
          "ref": null
        }
      },
      "setparam": {
        "name": "setParam",
        "url": "yaf-request-abstract.setparam",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $value ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setrequesturi": {
        "name": "setRequestUri",
        "url": "yaf-request-abstract.setrequesturi",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $uir",
          "returnValue": "void",
          "ref": null
        }
      },
      "setrouted": {
        "name": "setRouted",
        "url": "yaf-request-abstract.setrouted",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $flag ]",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yaf_request_http": {
    "name": "Yaf_Request_Http",
    "methods": {
      "get": {
        "name": "get",
        "url": "yaf-request-http.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $default ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getcookie": {
        "name": "getCookie",
        "url": "yaf-request-http.getcookie",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $default ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getfiles": {
        "name": "getFiles",
        "url": "yaf-request-http.getfiles",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getpost": {
        "name": "getPost",
        "url": "yaf-request-http.getpost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $default ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getquery": {
        "name": "getQuery",
        "url": "yaf-request-http.getquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $default ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getraw": {
        "name": "getRaw",
        "url": "yaf-request-http.getraw",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getrequest": {
        "name": "getRequest",
        "url": "yaf-request-http.getrequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "isxmlhttprequest": {
        "name": "isXmlHttpRequest",
        "url": "yaf-request-http.isxmlhttprequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "yaf-request-http.clone",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-request-http.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $request_uri [, string $base_uri ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_request_simple": {
    "name": "Yaf_Request_Simple",
    "methods": {
      "get": {
        "name": "get",
        "url": "yaf-request-simple.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getcookie": {
        "name": "getCookie",
        "url": "yaf-request-simple.getcookie",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getfiles": {
        "name": "getFiles",
        "url": "yaf-request-simple.getfiles",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getpost": {
        "name": "getPost",
        "url": "yaf-request-simple.getpost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getquery": {
        "name": "getQuery",
        "url": "yaf-request-simple.getquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getrequest": {
        "name": "getRequest",
        "url": "yaf-request-simple.getrequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "isxmlhttprequest": {
        "name": "isXmlHttpRequest",
        "url": "yaf-request-simple.isxmlhttprequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "yaf-request-simple.clone",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-request-simple.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $method [, string $module [, string $controller [, string $action [, array $params ]]]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_response_abstract": {
    "name": "Yaf_Response_Abstract",
    "methods": {
      "appendbody": {
        "name": "appendBody",
        "url": "yaf-response-abstract.appendbody",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $content [, string $key ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "clearbody": {
        "name": "clearBody",
        "url": "yaf-response-abstract.clearbody",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $key ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "clearheaders": {
        "name": "clearHeaders",
        "url": "yaf-response-abstract.clearheaders",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getbody": {
        "name": "getBody",
        "url": "yaf-response-abstract.getbody",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $key ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getheader": {
        "name": "getHeader",
        "url": "yaf-response-abstract.getheader",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "prependbody": {
        "name": "prependBody",
        "url": "yaf-response-abstract.prependbody",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $content [, string $key ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "response": {
        "name": "response",
        "url": "yaf-response-abstract.response",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "setallheaders": {
        "name": "setAllHeaders",
        "url": "yaf-response-abstract.setallheaders",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "setbody": {
        "name": "setBody",
        "url": "yaf-response-abstract.setbody",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $content [, string $key ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setheader": {
        "name": "setHeader",
        "url": "yaf-response-abstract.setheader",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $value [, bool $replace ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setredirect": {
        "name": "setRedirect",
        "url": "yaf-response-abstract.setredirect",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "yaf-response-abstract.clone",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-response-abstract.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "yaf-response-abstract.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "yaf-response-abstract.tostring",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "yaf_router": {
    "name": "Yaf_Router",
    "methods": {
      "addconfig": {
        "name": "addConfig",
        "url": "yaf-router.addconfig",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Config_Abstract $config",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addroute": {
        "name": "addRoute",
        "url": "yaf-router.addroute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, Yaf_Route_Abstract $route",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getcurrentroute": {
        "name": "getCurrentRoute",
        "url": "yaf-router.getcurrentroute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getroute": {
        "name": "getRoute",
        "url": "yaf-router.getroute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "Yaf_Route_Interface",
          "ref": null
        }
      },
      "getroutes": {
        "name": "getRoutes",
        "url": "yaf-router.getroutes",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "route": {
        "name": "route",
        "url": "yaf-router.route",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-router.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_route_interface": {
    "name": "Yaf_Route_Interface",
    "methods": {
      "assemble": {
        "name": "assemble",
        "url": "yaf-route-interface.assemble",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $info [, array $query ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "route": {
        "name": "route",
        "url": "yaf-route-interface.route",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "yaf_route_map": {
    "name": "Yaf_Route_Map",
    "methods": {
      "assemble": {
        "name": "assemble",
        "url": "yaf-route-map.assemble",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $info [, array $query ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "route": {
        "name": "route",
        "url": "yaf-route-map.route",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-route-map.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $controller_prefer = FALSE [, string $delimiter = \"\" ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_route_regex": {
    "name": "Yaf_Route_Regex",
    "methods": {
      "assemble": {
        "name": "assemble",
        "url": "yaf-route-regex.assemble",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $info [, array $query ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "route": {
        "name": "route",
        "url": "yaf-route-regex.route",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-route-regex.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $match, array $route [, array $map [, array $verify [, string $reverse ]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_route_rewrite": {
    "name": "Yaf_Route_Rewrite",
    "methods": {
      "assemble": {
        "name": "assemble",
        "url": "yaf-route-rewrite.assemble",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $info [, array $query ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "route": {
        "name": "route",
        "url": "yaf-route-rewrite.route",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-route-rewrite.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $match, array $route [, array $verify ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_route_simple": {
    "name": "Yaf_Route_Simple",
    "methods": {
      "assemble": {
        "name": "assemble",
        "url": "yaf-route-simple.assemble",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $info [, array $query ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "route": {
        "name": "route",
        "url": "yaf-route-simple.route",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-route-simple.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $module_name, string $controller_name, string $action_name",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_route_static": {
    "name": "Yaf_Route_Static",
    "methods": {
      "assemble": {
        "name": "assemble",
        "url": "yaf-route-static.assemble",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $info [, array $query ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "match": {
        "name": "match",
        "url": "yaf-route-static.match",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $uri",
          "returnValue": "void",
          "ref": null
        }
      },
      "route": {
        "name": "route",
        "url": "yaf-route-static.route",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "yaf_route_supervar": {
    "name": "Yaf_Route_Supervar",
    "methods": {
      "assemble": {
        "name": "assemble",
        "url": "yaf-route-supervar.assemble",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $info [, array $query ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "route": {
        "name": "route",
        "url": "yaf-route-supervar.route",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Yaf_Request_Abstract $request",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-route-supervar.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $supervar_name",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yaf_session": {
    "name": "Yaf_Session",
    "methods": {
      "count": {
        "name": "count",
        "url": "yaf-session.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "yaf-session.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "del": {
        "name": "del",
        "url": "yaf-session.del",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "getinstance": {
        "name": "getInstance",
        "url": "yaf-session.getinstance",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "has": {
        "name": "has",
        "url": "yaf-session.has",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "yaf-session.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "yaf-session.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetexists": {
        "name": "offsetExists",
        "url": "yaf-session.offsetexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetget": {
        "name": "offsetGet",
        "url": "yaf-session.offsetget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetset": {
        "name": "offsetSet",
        "url": "yaf-session.offsetset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetunset": {
        "name": "offsetUnset",
        "url": "yaf-session.offsetunset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "yaf-session.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "start": {
        "name": "start",
        "url": "yaf-session.start",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "yaf-session.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "yaf-session.clone",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-session.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__get": {
        "name": "__get",
        "url": "yaf-session.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "__isset": {
        "name": "__isset",
        "url": "yaf-session.isset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "__set": {
        "name": "__set",
        "url": "yaf-session.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "__sleep": {
        "name": "__sleep",
        "url": "yaf-session.sleep",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__unset": {
        "name": "__unset",
        "url": "yaf-session.unset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "__wakeup": {
        "name": "__wakeup",
        "url": "yaf-session.wakeup",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yaf_view_interface": {
    "name": "Yaf_View_Interface",
    "methods": {
      "assign": {
        "name": "assign",
        "url": "yaf-view-interface.assign",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $value ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "display": {
        "name": "display",
        "url": "yaf-view-interface.display",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $tpl [, array $tpl_vars ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getscriptpath": {
        "name": "getScriptPath",
        "url": "yaf-view-interface.getscriptpath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "render": {
        "name": "render",
        "url": "yaf-view-interface.render",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $tpl [, array $tpl_vars ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "setscriptpath": {
        "name": "setScriptPath",
        "url": "yaf-view-interface.setscriptpath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $template_dir",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yaf_view_simple": {
    "name": "Yaf_View_Simple",
    "methods": {
      "assign": {
        "name": "assign",
        "url": "yaf-view-simple.assign",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, mixed $value ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "assignref": {
        "name": "assignRef",
        "url": "yaf-view-simple.assignref",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, mixed &$value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "clear": {
        "name": "clear",
        "url": "yaf-view-simple.clear",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $name ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "display": {
        "name": "display",
        "url": "yaf-view-simple.display",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $tpl [, array $tpl_vars ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "eval": {
        "name": "eval",
        "url": "yaf-view-simple.eval",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $tpl_content [, array $tpl_vars ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getscriptpath": {
        "name": "getScriptPath",
        "url": "yaf-view-simple.getscriptpath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "render": {
        "name": "render",
        "url": "yaf-view-simple.render",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $tpl [, array $tpl_vars ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "setscriptpath": {
        "name": "setScriptPath",
        "url": "yaf-view-simple.setscriptpath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $template_dir",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yaf-view-simple.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $template_dir [, array $options ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__get": {
        "name": "__get",
        "url": "yaf-view-simple.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $name ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "__isset": {
        "name": "__isset",
        "url": "yaf-view-simple.isset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "__set": {
        "name": "__set",
        "url": "yaf-view-simple.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, mixed $value",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "yar_client": {
    "name": "Yar_Client",
    "methods": {
      "setopt": {
        "name": "setOpt",
        "url": "yar-client.setopt",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $name, mixed $value",
          "returnValue": "Yar_Client",
          "ref": null
        }
      },
      "__call": {
        "name": "__call",
        "url": "yar-client.call",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $method, array $parameters",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yar-client.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $url [, array $options ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yar_client_exception": {
    "name": "Yar_Client_Exception",
    "methods": {
      "gettype": {
        "name": "getType",
        "url": "yar-client-exception.gettype",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "yar_concurrent_client": {
    "name": "Yar_Concurrent_Client",
    "methods": {
      "call": {
        "name": "call",
        "url": "yar-concurrent-client.call",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $uri, string $method [, array $parameters [, callable $callback [, callable $error_callback [, array $options ]]]]",
          "returnValue": "int",
          "ref": null
        }
      },
      "loop": {
        "name": "loop",
        "url": "yar-concurrent-client.loop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "[ callable $callback [, callable $error_callback ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "reset": {
        "name": "reset",
        "url": "yar-concurrent-client.reset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "yar_server": {
    "name": "Yar_Server",
    "methods": {
      "handle": {
        "name": "handle",
        "url": "yar-server.handle",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "yar-server.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "Object $obj",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "yar_server_exception": {
    "name": "Yar_Server_Exception",
    "methods": {
      "gettype": {
        "name": "getType",
        "url": "yar-server-exception.gettype",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  }
};
