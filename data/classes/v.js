classes.v = {
  "v8js": {
    "name": "V8Js",
    "methods": {
      "executestring": {
        "name": "executeString",
        "url": "v8js.executestring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $script [, string $identifier = \"V8Js::executeString()\" [, int $flags = V8Js::FLAG_NONE ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getextensions": {
        "name": "getExtensions",
        "url": "v8js.getextensions",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getpendingexception": {
        "name": "getPendingException",
        "url": "v8js.getpendingexception",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "V8JsException",
          "ref": null
        }
      },
      "registerextension": {
        "name": "registerExtension",
        "url": "v8js.registerextension",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $extension_name, string $script [, array $dependencies = array() [, bool $auto_enable = FALSE ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "v8js.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $object_name = \"PHP\" [, array $variables = array() [, array $extensions = array() [, bool $report_uncaught_exceptions = TRUE ]]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "v8jsexception": {
    "name": "V8JsException",
    "methods": {
      "getjsfilename": {
        "name": "getJsFileName",
        "url": "v8jsexception.getjsfilename",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getjslinenumber": {
        "name": "getJsLineNumber",
        "url": "v8jsexception.getjslinenumber",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getjssourceline": {
        "name": "getJsSourceLine",
        "url": "v8jsexception.getjssourceline",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getjstrace": {
        "name": "getJsTrace",
        "url": "v8jsexception.getjstrace",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "varnishadmin": {
    "name": "VarnishAdmin",
    "methods": {
      "auth": {
        "name": "auth",
        "url": "varnishadmin.auth",
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
      "ban": {
        "name": "ban",
        "url": "varnishadmin.ban",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $vcl_regex",
          "returnValue": "int",
          "ref": null
        }
      },
      "banurl": {
        "name": "banUrl",
        "url": "varnishadmin.banurl",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $vcl_regex",
          "returnValue": "int",
          "ref": null
        }
      },
      "clearpanic": {
        "name": "clearPanic",
        "url": "varnishadmin.clearpanic",
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
      "connect": {
        "name": "connect",
        "url": "varnishadmin.connect",
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
      "disconnect": {
        "name": "disconnect",
        "url": "varnishadmin.disconnect",
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
      "getpanic": {
        "name": "getPanic",
        "url": "varnishadmin.getpanic",
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
      "getparams": {
        "name": "getParams",
        "url": "varnishadmin.getparams",
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
      "isrunning": {
        "name": "isRunning",
        "url": "varnishadmin.isrunning",
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
      "setcompat": {
        "name": "setCompat",
        "url": "varnishadmin.setcompat",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $compat",
          "returnValue": "void",
          "ref": null
        }
      },
      "sethost": {
        "name": "setHost",
        "url": "varnishadmin.sethost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $host",
          "returnValue": "void",
          "ref": null
        }
      },
      "setident": {
        "name": "setIdent",
        "url": "varnishadmin.setident",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $ident",
          "returnValue": "void",
          "ref": null
        }
      },
      "setparam": {
        "name": "setParam",
        "url": "varnishadmin.setparam",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string|integer $value",
          "returnValue": "int",
          "ref": null
        }
      },
      "setport": {
        "name": "setPort",
        "url": "varnishadmin.setport",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $port",
          "returnValue": "void",
          "ref": null
        }
      },
      "setsecret": {
        "name": "setSecret",
        "url": "varnishadmin.setsecret",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $secret",
          "returnValue": "void",
          "ref": null
        }
      },
      "settimeout": {
        "name": "setTimeout",
        "url": "varnishadmin.settimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $timeout",
          "returnValue": "void",
          "ref": null
        }
      },
      "start": {
        "name": "start",
        "url": "varnishadmin.start",
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
      "stop": {
        "name": "stop",
        "url": "varnishadmin.stop",
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
      "__construct": {
        "name": "__construct",
        "url": "varnishadmin.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $args ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "varnishlog": {
    "name": "VarnishLog",
    "methods": {
      "getline": {
        "name": "getLine",
        "url": "varnishlog.getline",
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
      "gettagname": {
        "name": "getTagName",
        "url": "varnishlog.gettagname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "int $index",
          "returnValue": "string",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "varnishlog.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $args ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "varnishstat": {
    "name": "VarnishStat",
    "methods": {
      "getsnapshot": {
        "name": "getSnapshot",
        "url": "varnishstat.getsnapshot",
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
      "__construct": {
        "name": "__construct",
        "url": "varnishstat.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $args ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  }
};
