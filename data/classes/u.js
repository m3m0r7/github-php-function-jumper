classes.u = {
  "uconverter": {
    "name": "UConverter",
    "methods": {
      "convert": {
        "name": "convert",
        "url": "uconverter.convert",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $str [, bool $reverse ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "fromucallback": {
        "name": "fromUCallback",
        "url": "uconverter.fromucallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "integer $reason, string $source, string $codePoint, integer &$error",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getaliases": {
        "name": "getAliases",
        "url": "uconverter.getaliases",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "[ string $name ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getavailable": {
        "name": "getAvailable",
        "url": "uconverter.getavailable",
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
      "getdestinationencoding": {
        "name": "getDestinationEncoding",
        "url": "uconverter.getdestinationencoding",
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
      "getdestinationtype": {
        "name": "getDestinationType",
        "url": "uconverter.getdestinationtype",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "integer",
          "ref": null
        }
      },
      "geterrorcode": {
        "name": "getErrorCode",
        "url": "uconverter.geterrorcode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "integer",
          "ref": null
        }
      },
      "geterrormessage": {
        "name": "getErrorMessage",
        "url": "uconverter.geterrormessage",
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
      "getsourceencoding": {
        "name": "getSourceEncoding",
        "url": "uconverter.getsourceencoding",
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
      "getsourcetype": {
        "name": "getSourceType",
        "url": "uconverter.getsourcetype",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "integer",
          "ref": null
        }
      },
      "getstandards": {
        "name": "getStandards",
        "url": "uconverter.getstandards",
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
      "getsubstchars": {
        "name": "getSubstChars",
        "url": "uconverter.getsubstchars",
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
      "reasontext": {
        "name": "reasonText",
        "url": "uconverter.reasontext",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "[ integer $reason ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "setdestinationencoding": {
        "name": "setDestinationEncoding",
        "url": "uconverter.setdestinationencoding",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $encoding",
          "returnValue": "void",
          "ref": null
        }
      },
      "setsourceencoding": {
        "name": "setSourceEncoding",
        "url": "uconverter.setsourceencoding",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $encoding",
          "returnValue": "void",
          "ref": null
        }
      },
      "setsubstchars": {
        "name": "setSubstChars",
        "url": "uconverter.setsubstchars",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $chars",
          "returnValue": "void",
          "ref": null
        }
      },
      "toucallback": {
        "name": "toUCallback",
        "url": "uconverter.toucallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "integer $reason, string $source, string $codeUnits, integer &$error",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "transcode": {
        "name": "transcode",
        "url": "uconverter.transcode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $str, string $toEncoding, string $fromEncoding [, array $options ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "uconverter.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $destination_encoding [, string $source_encoding ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  }
};
