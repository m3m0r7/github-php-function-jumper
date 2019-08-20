classes.q = {
  "quickhashinthash": {
    "name": "QuickHashIntHash",
    "methods": {
      "add": {
        "name": "add",
        "url": "quickhashinthash.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key [, int $value ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "delete": {
        "name": "delete",
        "url": "quickhashinthash.delete",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "exists": {
        "name": "exists",
        "url": "quickhashinthash.exists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "quickhashinthash.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key",
          "returnValue": "int",
          "ref": null
        }
      },
      "getsize": {
        "name": "getSize",
        "url": "quickhashinthash.getsize",
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
      "loadfromfile": {
        "name": "loadFromFile",
        "url": "quickhashinthash.loadfromfile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $filename [, int $options ]",
          "returnValue": "QuickHashIntHash",
          "ref": null
        }
      },
      "loadfromstring": {
        "name": "loadFromString",
        "url": "quickhashinthash.loadfromstring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $contents [, int $options ]",
          "returnValue": "QuickHashIntHash",
          "ref": null
        }
      },
      "savetofile": {
        "name": "saveToFile",
        "url": "quickhashinthash.savetofile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename",
          "returnValue": "void",
          "ref": null
        }
      },
      "savetostring": {
        "name": "saveToString",
        "url": "quickhashinthash.savetostring",
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
      "set": {
        "name": "set",
        "url": "quickhashinthash.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key, int $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "update": {
        "name": "update",
        "url": "quickhashinthash.update",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key, int $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "quickhashinthash.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size [, int $options ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "quickhashintset": {
    "name": "QuickHashIntSet",
    "methods": {
      "add": {
        "name": "add",
        "url": "quickhashintset.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "delete": {
        "name": "delete",
        "url": "quickhashintset.delete",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "exists": {
        "name": "exists",
        "url": "quickhashintset.exists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getsize": {
        "name": "getSize",
        "url": "quickhashintset.getsize",
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
      "loadfromfile": {
        "name": "loadFromFile",
        "url": "quickhashintset.loadfromfile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $filename [, int $size [, int $options ]]",
          "returnValue": "QuickHashIntSet",
          "ref": null
        }
      },
      "loadfromstring": {
        "name": "loadFromString",
        "url": "quickhashintset.loadfromstring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $contents [, int $size [, int $options ]]",
          "returnValue": "QuickHashIntSet",
          "ref": null
        }
      },
      "savetofile": {
        "name": "saveToFile",
        "url": "quickhashintset.savetofile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename",
          "returnValue": "void",
          "ref": null
        }
      },
      "savetostring": {
        "name": "saveToString",
        "url": "quickhashintset.savetostring",
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
      "__construct": {
        "name": "__construct",
        "url": "quickhashintset.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size [, int $options ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "quickhashintstringhash": {
    "name": "QuickHashIntStringHash",
    "methods": {
      "add": {
        "name": "add",
        "url": "quickhashintstringhash.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "delete": {
        "name": "delete",
        "url": "quickhashintstringhash.delete",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "exists": {
        "name": "exists",
        "url": "quickhashintstringhash.exists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "quickhashintstringhash.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getsize": {
        "name": "getSize",
        "url": "quickhashintstringhash.getsize",
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
      "loadfromfile": {
        "name": "loadFromFile",
        "url": "quickhashintstringhash.loadfromfile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $filename [, int $size = 0 [, int $options = 0 ]]",
          "returnValue": "QuickHashIntStringHash",
          "ref": null
        }
      },
      "loadfromstring": {
        "name": "loadFromString",
        "url": "quickhashintstringhash.loadfromstring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $contents [, int $size = 0 [, int $options = 0 ]]",
          "returnValue": "QuickHashIntStringHash",
          "ref": null
        }
      },
      "savetofile": {
        "name": "saveToFile",
        "url": "quickhashintstringhash.savetofile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename",
          "returnValue": "void",
          "ref": null
        }
      },
      "savetostring": {
        "name": "saveToString",
        "url": "quickhashintstringhash.savetostring",
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
      "set": {
        "name": "set",
        "url": "quickhashintstringhash.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key, string $value",
          "returnValue": "int",
          "ref": null
        }
      },
      "update": {
        "name": "update",
        "url": "quickhashintstringhash.update",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "quickhashintstringhash.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size [, int $options = 0 ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "quickhashstringinthash": {
    "name": "QuickHashStringIntHash",
    "methods": {
      "add": {
        "name": "add",
        "url": "quickhashstringinthash.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, int $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "delete": {
        "name": "delete",
        "url": "quickhashstringinthash.delete",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "exists": {
        "name": "exists",
        "url": "quickhashstringinthash.exists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "quickhashstringinthash.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getsize": {
        "name": "getSize",
        "url": "quickhashstringinthash.getsize",
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
      "loadfromfile": {
        "name": "loadFromFile",
        "url": "quickhashstringinthash.loadfromfile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $filename [, int $size = 0 [, int $options = 0 ]]",
          "returnValue": "QuickHashStringIntHash",
          "ref": null
        }
      },
      "loadfromstring": {
        "name": "loadFromString",
        "url": "quickhashstringinthash.loadfromstring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $contents [, int $size = 0 [, int $options = 0 ]]",
          "returnValue": "QuickHashStringIntHash",
          "ref": null
        }
      },
      "savetofile": {
        "name": "saveToFile",
        "url": "quickhashstringinthash.savetofile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename",
          "returnValue": "void",
          "ref": null
        }
      },
      "savetostring": {
        "name": "saveToString",
        "url": "quickhashstringinthash.savetostring",
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
      "set": {
        "name": "set",
        "url": "quickhashstringinthash.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, int $value",
          "returnValue": "int",
          "ref": null
        }
      },
      "update": {
        "name": "update",
        "url": "quickhashstringinthash.update",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, int $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "quickhashstringinthash.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size [, int $options = 0 ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  }
};
