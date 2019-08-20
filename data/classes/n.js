classes.n = {
  "norewinditerator": {
    "name": "NoRewindIterator",
    "methods": {
      "current": {
        "name": "current",
        "url": "norewinditerator.current",
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
      "getinneriterator": {
        "name": "getInnerIterator",
        "url": "norewinditerator.getinneriterator",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "iterator",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "norewinditerator.key",
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
      "next": {
        "name": "next",
        "url": "norewinditerator.next",
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
        "url": "norewinditerator.rewind",
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
        "url": "norewinditerator.valid",
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
        "url": "norewinditerator.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Iterator $iterator",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "normalizer": {
    "name": "Normalizer",
    "methods": {
      "getrawdecomposition": {
        "name": "getRawDecomposition",
        "url": "normalizer.getrawdecomposition",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $input",
          "returnValue": "string",
          "ref": null
        }
      },
      "isnormalized": {
        "name": "isNormalized",
        "url": "normalizer.isnormalized",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $input [, int $form = Normalizer::FORM_C ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "normalize": {
        "name": "normalize",
        "url": "normalizer.normalize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $input [, int $form = Normalizer::FORM_C ]",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "numberformatter": {
    "name": "NumberFormatter",
    "methods": {
      "create": {
        "name": "create",
        "url": "numberformatter.create",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $locale, int $style [, string $pattern ]",
          "returnValue": "NumberFormatter",
          "ref": null
        }
      },
      "format": {
        "name": "format",
        "url": "numberformatter.format",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "number $value [, int $type ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "formatcurrency": {
        "name": "formatCurrency",
        "url": "numberformatter.formatcurrency",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $value, string $currency",
          "returnValue": "string",
          "ref": null
        }
      },
      "getattribute": {
        "name": "getAttribute",
        "url": "numberformatter.getattribute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $attr",
          "returnValue": "int",
          "ref": null
        }
      },
      "geterrorcode": {
        "name": "getErrorCode",
        "url": "numberformatter.geterrorcode",
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
      "geterrormessage": {
        "name": "getErrorMessage",
        "url": "numberformatter.geterrormessage",
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
      "getlocale": {
        "name": "getLocale",
        "url": "numberformatter.getlocale",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $type ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getpattern": {
        "name": "getPattern",
        "url": "numberformatter.getpattern",
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
      "getsymbol": {
        "name": "getSymbol",
        "url": "numberformatter.getsymbol",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $attr",
          "returnValue": "string",
          "ref": null
        }
      },
      "gettextattribute": {
        "name": "getTextAttribute",
        "url": "numberformatter.gettextattribute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $attr",
          "returnValue": "string",
          "ref": null
        }
      },
      "parse": {
        "name": "parse",
        "url": "numberformatter.parse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value [, int $type [, int &$position ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "parsecurrency": {
        "name": "parseCurrency",
        "url": "numberformatter.parsecurrency",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value, string &$currency [, int &$position ]",
          "returnValue": "float",
          "ref": null
        }
      },
      "setattribute": {
        "name": "setAttribute",
        "url": "numberformatter.setattribute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $attr, int $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setpattern": {
        "name": "setPattern",
        "url": "numberformatter.setpattern",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $pattern",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setsymbol": {
        "name": "setSymbol",
        "url": "numberformatter.setsymbol",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $attr, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "settextattribute": {
        "name": "setTextAttribute",
        "url": "numberformatter.settextattribute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $attr, string $value",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  }
};
