classes.z = {
  "ziparchive": {
    "name": "ZipArchive",
    "methods": {
      "addemptydir": {
        "name": "addEmptyDir",
        "url": "ziparchive.addemptydir",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $dirname",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addfile": {
        "name": "addFile",
        "url": "ziparchive.addfile",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename [, string $localname = NULL [, int $start = 0 [, int $length = 0 ]]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addfromstring": {
        "name": "addFromString",
        "url": "ziparchive.addfromstring",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $localname, string $contents",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addglob": {
        "name": "addGlob",
        "url": "ziparchive.addglob",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $pattern [, int $flags = 0 [, array $options = array() ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addpattern": {
        "name": "addPattern",
        "url": "ziparchive.addpattern",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $pattern [, string $path = \".\" [, array $options = array() ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "close": {
        "name": "close",
        "url": "ziparchive.close",
        "spec": {
          "isPublic": false,
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
      "count": {
        "name": "count",
        "url": "ziparchive.count",
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
      "deleteindex": {
        "name": "deleteIndex",
        "url": "ziparchive.deleteindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index",
          "returnValue": "bool",
          "ref": null
        }
      },
      "deletename": {
        "name": "deleteName",
        "url": "ziparchive.deletename",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "bool",
          "ref": null
        }
      },
      "extractto": {
        "name": "extractTo",
        "url": "ziparchive.extractto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $destination [, mixed $entries ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getarchivecomment": {
        "name": "getArchiveComment",
        "url": "ziparchive.getarchivecomment",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $flags ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getcommentindex": {
        "name": "getCommentIndex",
        "url": "ziparchive.getcommentindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index [, int $flags ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getcommentname": {
        "name": "getCommentName",
        "url": "ziparchive.getcommentname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, int $flags ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getexternalattributesindex": {
        "name": "getExternalAttributesIndex",
        "url": "ziparchive.getexternalattributesindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index, int &$opsys, int &$attr [, int $flags ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getexternalattributesname": {
        "name": "getExternalAttributesName",
        "url": "ziparchive.getexternalattributesname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, int &$opsys, int &$attr [, int $flags ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getfromindex": {
        "name": "getFromIndex",
        "url": "ziparchive.getfromindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index [, int $length = 0 [, int $flags ]]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getfromname": {
        "name": "getFromName",
        "url": "ziparchive.getfromname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, int $length = 0 [, int $flags ]]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getnameindex": {
        "name": "getNameIndex",
        "url": "ziparchive.getnameindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index [, int $flags ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getstatusstring": {
        "name": "getStatusString",
        "url": "ziparchive.getstatusstring",
        "spec": {
          "isPublic": false,
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
      "getstream": {
        "name": "getStream",
        "url": "ziparchive.getstream",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "resource",
          "ref": null
        }
      },
      "locatename": {
        "name": "locateName",
        "url": "ziparchive.locatename",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, int $flags ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "open": {
        "name": "open",
        "url": "ziparchive.open",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename [, int $flags ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "renameindex": {
        "name": "renameIndex",
        "url": "ziparchive.renameindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index, string $newname",
          "returnValue": "bool",
          "ref": null
        }
      },
      "renamename": {
        "name": "renameName",
        "url": "ziparchive.renamename",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $newname",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setarchivecomment": {
        "name": "setArchiveComment",
        "url": "ziparchive.setarchivecomment",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $comment",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcommentindex": {
        "name": "setCommentIndex",
        "url": "ziparchive.setcommentindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index, string $comment",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcommentname": {
        "name": "setCommentName",
        "url": "ziparchive.setcommentname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $comment",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcompressionindex": {
        "name": "setCompressionIndex",
        "url": "ziparchive.setcompressionindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index, int $comp_method [, int $comp_flags = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcompressionname": {
        "name": "setCompressionName",
        "url": "ziparchive.setcompressionname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, int $comp_method [, int $comp_flags = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setencryptionindex": {
        "name": "setEncryptionIndex",
        "url": "ziparchive.setencryptionindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index, string $method [, string $password ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setencryptionname": {
        "name": "setEncryptionName",
        "url": "ziparchive.setencryptionname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, int $method [, string $password ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setexternalattributesindex": {
        "name": "setExternalAttributesIndex",
        "url": "ziparchive.setexternalattributesindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index, int $opsys, int $attr [, int $flags ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setexternalattributesname": {
        "name": "setExternalAttributesName",
        "url": "ziparchive.setexternalattributesname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, int $opsys, int $attr [, int $flags ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setpassword": {
        "name": "setPassword",
        "url": "ziparchive.setpassword",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $password",
          "returnValue": "bool",
          "ref": null
        }
      },
      "statindex": {
        "name": "statIndex",
        "url": "ziparchive.statindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index [, int $flags ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "statname": {
        "name": "statName",
        "url": "ziparchive.statname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, int $flags ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "unchangeall": {
        "name": "unchangeAll",
        "url": "ziparchive.unchangeall",
        "spec": {
          "isPublic": false,
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
      "unchangearchive": {
        "name": "unchangeArchive",
        "url": "ziparchive.unchangearchive",
        "spec": {
          "isPublic": false,
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
      "unchangeindex": {
        "name": "unchangeIndex",
        "url": "ziparchive.unchangeindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index",
          "returnValue": "bool",
          "ref": null
        }
      },
      "unchangename": {
        "name": "unchangeName",
        "url": "ziparchive.unchangename",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "zmq": {
    "name": "ZMQ",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "zmq.construct",
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
  "zmqcontext": {
    "name": "ZMQContext",
    "methods": {
      "getopt": {
        "name": "getOpt",
        "url": "zmqcontext.getopt",
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
      "getsocket": {
        "name": "getSocket",
        "url": "zmqcontext.getsocket",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $type [, string $persistent_id = NULL [, callback $on_new_socket = NULL ]]",
          "returnValue": "ZMQSocket",
          "ref": null
        }
      },
      "ispersistent": {
        "name": "isPersistent",
        "url": "zmqcontext.ispersistent",
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
      "setopt": {
        "name": "setOpt",
        "url": "zmqcontext.setopt",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key, mixed $value",
          "returnValue": "ZMQContext",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "zmqcontext.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $io_threads = 1 [, bool $is_persistent = TRUE ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "zmqdevice": {
    "name": "ZMQDevice",
    "methods": {
      "getidletimeout": {
        "name": "getIdleTimeout",
        "url": "zmqdevice.getidletimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "ZMQDevice",
          "ref": null
        }
      },
      "gettimertimeout": {
        "name": "getTimerTimeout",
        "url": "zmqdevice.gettimertimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "ZMQDevice",
          "ref": null
        }
      },
      "run": {
        "name": "run",
        "url": "zmqdevice.run",
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
      "setidlecallback": {
        "name": "setIdleCallback",
        "url": "zmqdevice.setidlecallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $cb_func, int $timeout [, mixed $user_data ]",
          "returnValue": "ZMQDevice",
          "ref": null
        }
      },
      "setidletimeout": {
        "name": "setIdleTimeout",
        "url": "zmqdevice.setidletimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $timeout",
          "returnValue": "ZMQDevice",
          "ref": null
        }
      },
      "settimercallback": {
        "name": "setTimerCallback",
        "url": "zmqdevice.settimercallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $cb_func, int $timeout [, mixed $user_data ]",
          "returnValue": "ZMQDevice",
          "ref": null
        }
      },
      "settimertimeout": {
        "name": "setTimerTimeout",
        "url": "zmqdevice.settimertimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $timeout",
          "returnValue": "ZMQDevice",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "zmqdevice.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "ZMQSocket $frontend, ZMQSocket $backend [, ZMQSocket $listener ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "zmqpoll": {
    "name": "ZMQPoll",
    "methods": {
      "add": {
        "name": "add",
        "url": "zmqpoll.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $entry, int $type",
          "returnValue": "string",
          "ref": null
        }
      },
      "clear": {
        "name": "clear",
        "url": "zmqpoll.clear",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "ZMQPoll",
          "ref": null
        }
      },
      "count": {
        "name": "count",
        "url": "zmqpoll.count",
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
      "getlasterrors": {
        "name": "getLastErrors",
        "url": "zmqpoll.getlasterrors",
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
      "poll": {
        "name": "poll",
        "url": "zmqpoll.poll",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array &$readable, array &$writable [, int $timeout = -1 ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "remove": {
        "name": "remove",
        "url": "zmqpoll.remove",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $item",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "zmqsocket": {
    "name": "ZMQSocket",
    "methods": {
      "bind": {
        "name": "bind",
        "url": "zmqsocket.bind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $dsn [, bool $force = FALSE ]",
          "returnValue": "ZMQSocket",
          "ref": null
        }
      },
      "connect": {
        "name": "connect",
        "url": "zmqsocket.connect",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $dsn [, bool $force = FALSE ]",
          "returnValue": "ZMQSocket",
          "ref": null
        }
      },
      "disconnect": {
        "name": "disconnect",
        "url": "zmqsocket.disconnect",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $dsn",
          "returnValue": "ZMQSocket",
          "ref": null
        }
      },
      "getendpoints": {
        "name": "getEndpoints",
        "url": "zmqsocket.getendpoints",
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
      "getpersistentid": {
        "name": "getPersistentId",
        "url": "zmqsocket.getpersistentid",
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
      "getsockettype": {
        "name": "getSocketType",
        "url": "zmqsocket.getsockettype",
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
      "getsockopt": {
        "name": "getSockOpt",
        "url": "zmqsocket.getsockopt",
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
      "ispersistent": {
        "name": "isPersistent",
        "url": "zmqsocket.ispersistent",
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
      "recv": {
        "name": "recv",
        "url": "zmqsocket.recv",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $mode = 0 ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "recvmulti": {
        "name": "recvMulti",
        "url": "zmqsocket.recvmulti",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $mode = 0 ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "send": {
        "name": "send",
        "url": "zmqsocket.send",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $message [, int $mode = 0 ]",
          "returnValue": "ZMQSocket",
          "ref": null
        }
      },
      "sendmulti": {
        "name": "sendmulti",
        "url": "zmqsocket.sendmulti",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $message [, int $mode = 0 ]",
          "returnValue": "ZMQSocket",
          "ref": null
        }
      },
      "setsockopt": {
        "name": "setSockOpt",
        "url": "zmqsocket.setsockopt",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $key, mixed $value",
          "returnValue": "ZMQSocket",
          "ref": null
        }
      },
      "unbind": {
        "name": "unbind",
        "url": "zmqsocket.unbind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $dsn",
          "returnValue": "ZMQSocket",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "zmqsocket.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "ZMQContext $context, int $type [, string $persistent_id = NULL [, callback $on_new_socket = NULL ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "zookeeper": {
    "name": "Zookeeper",
    "methods": {
      "addauth": {
        "name": "addAuth",
        "url": "zookeeper.addauth",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $scheme, string $cert [, callable $completion_cb = NULL ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "close": {
        "name": "close",
        "url": "zookeeper.close",
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
      "connect": {
        "name": "connect",
        "url": "zookeeper.connect",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $host [, callable $watcher_cb = NULL [, int $recv_timeout = 10000 ]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "create": {
        "name": "create",
        "url": "zookeeper.create",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, string $value, array $acls [, int $flags = NULL ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "delete": {
        "name": "delete",
        "url": "zookeeper.delete",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path [, int $version = -1 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "exists": {
        "name": "exists",
        "url": "zookeeper.exists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path [, callable $watcher_cb = NULL ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "zookeeper.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path [, callable $watcher_cb = NULL [, array &$stat = NULL [, int $max_size = 0 ]]]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getacl": {
        "name": "getAcl",
        "url": "zookeeper.getacl",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path",
          "returnValue": "array",
          "ref": null
        }
      },
      "getchildren": {
        "name": "getChildren",
        "url": "zookeeper.getchildren",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path [, callable $watcher_cb = NULL ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getclientid": {
        "name": "getClientId",
        "url": "zookeeper.getclientid",
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
      "getconfig": {
        "name": "getConfig",
        "url": "zookeeper.getconfig",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "ZookeeperConfig",
          "ref": null
        }
      },
      "getrecvtimeout": {
        "name": "getRecvTimeout",
        "url": "zookeeper.getrecvtimeout",
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
      "getstate": {
        "name": "getState",
        "url": "zookeeper.getstate",
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
      "isrecoverable": {
        "name": "isRecoverable",
        "url": "zookeeper.isrecoverable",
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
      "set": {
        "name": "set",
        "url": "zookeeper.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, string $value [, int $version = -1 [, array &$stat = NULL ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setacl": {
        "name": "setAcl",
        "url": "zookeeper.setacl",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, int $version, array $acl",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setdebuglevel": {
        "name": "setDebugLevel",
        "url": "zookeeper.setdebuglevel",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "int $logLevel",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setdeterministicconnorder": {
        "name": "setDeterministicConnOrder",
        "url": "zookeeper.setdeterministicconnorder",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "bool $yesOrNo",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setlogstream": {
        "name": "setLogStream",
        "url": "zookeeper.setlogstream",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "resource $stream",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setwatcher": {
        "name": "setWatcher",
        "url": "zookeeper.setwatcher",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $watcher_cb",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "zookeeper.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $host = '' [, callable $watcher_cb = NULL [, int $recv_timeout = 10000 ]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "zookeeperconfig": {
    "name": "ZookeeperConfig",
    "methods": {
      "add": {
        "name": "add",
        "url": "zookeeperconfig.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $members [, int $version = -1 [, array &$stat = NULL ]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "zookeeperconfig.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ callable $watcher_cb = NULL [, array &$stat = NULL ]]",
          "returnValue": "string",
          "ref": null
        }
      },
      "remove": {
        "name": "remove",
        "url": "zookeeperconfig.remove",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $id_list [, int $version = -1 [, array &$stat = NULL ]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "zookeeperconfig.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $members [, int $version = -1 [, array &$stat = NULL ]]",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  }
};
