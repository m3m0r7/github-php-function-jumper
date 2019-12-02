classes.r = {
  rararchive: {
    name: "RarArchive",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      close: {
        name: "close",
        url: "rararchive.close",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      getcomment: {
        name: "getComment",
        url: "rararchive.getcomment",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getentries: {
        name: "getEntries",
        url: "rararchive.getentries",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getentry: {
        name: "getEntry",
        url: "rararchive.getentry",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $entryname",
          returnValue: "RarEntry",
          ref: null
        }
      },
      isbroken: {
        name: "isBroken",
        url: "rararchive.isbroken",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      issolid: {
        name: "isSolid",
        url: "rararchive.issolid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      open: {
        name: "open",
        url: "rararchive.open",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $filename [, string $password = NULL [, callable $volume_callback = NULL ]]",
          returnValue: "RarArchive",
          ref: null
        }
      },
      setallowbroken: {
        name: "setAllowBroken",
        url: "rararchive.setallowbroken",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $allow_broken",
          returnValue: "bool",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "rararchive.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.rararchive",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  rarentry: {
    name: "RarEntry",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      extract: {
        name: "extract",
        url: "rarentry.extract",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $dir [, string $filepath = \"\" [, string $password = NULL [, bool $extended_data = FALSE ]]]",
          returnValue: "bool",
          ref: null
        }
      },
      getattr: {
        name: "getAttr",
        url: "rarentry.getattr",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getcrc: {
        name: "getCrc",
        url: "rarentry.getcrc",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getfiletime: {
        name: "getFileTime",
        url: "rarentry.getfiletime",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      gethostos: {
        name: "getHostOs",
        url: "rarentry.gethostos",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getmethod: {
        name: "getMethod",
        url: "rarentry.getmethod",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "rarentry.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getpackedsize: {
        name: "getPackedSize",
        url: "rarentry.getpackedsize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getstream: {
        name: "getStream",
        url: "rarentry.getstream",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $password ]",
          returnValue: "resource",
          ref: null
        }
      },
      getunpackedsize: {
        name: "getUnpackedSize",
        url: "rarentry.getunpackedsize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getversion: {
        name: "getVersion",
        url: "rarentry.getversion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      isdirectory: {
        name: "isDirectory",
        url: "rarentry.isdirectory",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isencrypted: {
        name: "isEncrypted",
        url: "rarentry.isencrypted",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "rarentry.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.rarentry",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  rarexception: {
    name: "RarException",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      isusingexceptions: {
        name: "isUsingExceptions",
        url: "rarexception.isusingexceptions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      setusingexceptions: {
        name: "setUsingExceptions",
        url: "rarexception.setusingexceptions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "bool $using_exceptions",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.rarexception",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  recursivearrayiterator: {
    name: "RecursiveArrayIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getchildren: {
        name: "getChildren",
        url: "recursivearrayiterator.getchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "RecursiveArrayIterator",
          ref: null
        }
      },
      haschildren: {
        name: "hasChildren",
        url: "recursivearrayiterator.haschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.recursivearrayiterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  recursivecachingiterator: {
    name: "RecursiveCachingIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getchildren: {
        name: "getChildren",
        url: "recursivecachingiterator.getchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "RecursiveCachingIterator",
          ref: null
        }
      },
      haschildren: {
        name: "hasChildren",
        url: "recursivecachingiterator.haschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "recursivecachingiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Iterator $iterator [, int $flags = self::CALL_TOSTRING ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  recursivecallbackfilteriterator: {
    name: "RecursiveCallbackFilterIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getchildren: {
        name: "getChildren",
        url: "recursivecallbackfilteriterator.getchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "RecursiveCallbackFilterIterator",
          ref: null
        }
      },
      haschildren: {
        name: "hasChildren",
        url: "recursivecallbackfilteriterator.haschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "recursivecallbackfilteriterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "RecursiveIterator $iterator, string $callback",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  recursivedirectoryiterator: {
    name: "RecursiveDirectoryIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getchildren: {
        name: "getChildren",
        url: "recursivedirectoryiterator.getchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      getsubpath: {
        name: "getSubPath",
        url: "recursivedirectoryiterator.getsubpath",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getsubpathname: {
        name: "getSubPathname",
        url: "recursivedirectoryiterator.getsubpathname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      haschildren: {
        name: "hasChildren",
        url: "recursivedirectoryiterator.haschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ bool $allow_links = FALSE ]",
          returnValue: "bool",
          ref: null
        }
      },
      key: {
        name: "key",
        url: "recursivedirectoryiterator.key",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      next: {
        name: "next",
        url: "recursivedirectoryiterator.next",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      rewind: {
        name: "rewind",
        url: "recursivedirectoryiterator.rewind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "recursivedirectoryiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path [, int $flags = FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  recursivefilteriterator: {
    name: "RecursiveFilterIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getchildren: {
        name: "getChildren",
        url: "recursivefilteriterator.getchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "RecursiveFilterIterator",
          ref: null
        }
      },
      haschildren: {
        name: "hasChildren",
        url: "recursivefilteriterator.haschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "recursivefilteriterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "RecursiveIterator $iterator",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  recursiveiterator: {
    name: "RecursiveIterator",
    isClass: false,
    isInterface: true,
    isTrait: false,
    methods: {
      getchildren: {
        name: "getChildren",
        url: "recursiveiterator.getchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "RecursiveIterator",
          ref: null
        }
      },
      haschildren: {
        name: "hasChildren",
        url: "recursiveiterator.haschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.recursiveiterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  recursiveiteratoriterator: {
    name: "RecursiveIteratorIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      beginchildren: {
        name: "beginChildren",
        url: "recursiveiteratoriterator.beginchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      beginiteration: {
        name: "beginIteration",
        url: "recursiveiteratoriterator.beginiteration",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      callgetchildren: {
        name: "callGetChildren",
        url: "recursiveiteratoriterator.callgetchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "RecursiveIterator",
          ref: null
        }
      },
      callhaschildren: {
        name: "callHasChildren",
        url: "recursiveiteratoriterator.callhaschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      current: {
        name: "current",
        url: "recursiveiteratoriterator.current",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      endchildren: {
        name: "endChildren",
        url: "recursiveiteratoriterator.endchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      enditeration: {
        name: "endIteration",
        url: "recursiveiteratoriterator.enditeration",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      getdepth: {
        name: "getDepth",
        url: "recursiveiteratoriterator.getdepth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getinneriterator: {
        name: "getInnerIterator",
        url: "recursiveiteratoriterator.getinneriterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "iterator",
          ref: null
        }
      },
      getmaxdepth: {
        name: "getMaxDepth",
        url: "recursiveiteratoriterator.getmaxdepth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      getsubiterator: {
        name: "getSubIterator",
        url: "recursiveiteratoriterator.getsubiterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $level ]",
          returnValue: "RecursiveIterator",
          ref: null
        }
      },
      key: {
        name: "key",
        url: "recursiveiteratoriterator.key",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      next: {
        name: "next",
        url: "recursiveiteratoriterator.next",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      nextelement: {
        name: "nextElement",
        url: "recursiveiteratoriterator.nextelement",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      rewind: {
        name: "rewind",
        url: "recursiveiteratoriterator.rewind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      setmaxdepth: {
        name: "setMaxDepth",
        url: "recursiveiteratoriterator.setmaxdepth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $max_depth = -1 ]",
          returnValue: "void",
          ref: null
        }
      },
      valid: {
        name: "valid",
        url: "recursiveiteratoriterator.valid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "recursiveiteratoriterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Traversable $iterator [, int $mode = RecursiveIteratorIterator::LEAVES_ONLY [, int $flags = 0 ]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  recursiveregexiterator: {
    name: "RecursiveRegexIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getchildren: {
        name: "getChildren",
        url: "recursiveregexiterator.getchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "RecursiveRegexIterator",
          ref: null
        }
      },
      haschildren: {
        name: "hasChildren",
        url: "recursiveregexiterator.haschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "recursiveregexiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "RecursiveIterator $iterator, string $regex [, int $mode = self::MATCH [, int $flags = 0 [, int $preg_flags = 0 ]]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  recursivetreeiterator: {
    name: "RecursiveTreeIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      beginchildren: {
        name: "beginChildren",
        url: "recursivetreeiterator.beginchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      beginiteration: {
        name: "beginIteration",
        url: "recursivetreeiterator.beginiteration",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "RecursiveIterator",
          ref: null
        }
      },
      callgetchildren: {
        name: "callGetChildren",
        url: "recursivetreeiterator.callgetchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "RecursiveIterator",
          ref: null
        }
      },
      callhaschildren: {
        name: "callHasChildren",
        url: "recursivetreeiterator.callhaschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      current: {
        name: "current",
        url: "recursivetreeiterator.current",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      endchildren: {
        name: "endChildren",
        url: "recursivetreeiterator.endchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      enditeration: {
        name: "endIteration",
        url: "recursivetreeiterator.enditeration",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      getentry: {
        name: "getEntry",
        url: "recursivetreeiterator.getentry",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getpostfix: {
        name: "getPostfix",
        url: "recursivetreeiterator.getpostfix",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getprefix: {
        name: "getPrefix",
        url: "recursivetreeiterator.getprefix",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      key: {
        name: "key",
        url: "recursivetreeiterator.key",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      next: {
        name: "next",
        url: "recursivetreeiterator.next",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      nextelement: {
        name: "nextElement",
        url: "recursivetreeiterator.nextelement",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      rewind: {
        name: "rewind",
        url: "recursivetreeiterator.rewind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      setpostfix: {
        name: "setPostfix",
        url: "recursivetreeiterator.setpostfix",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $postfix",
          returnValue: "void",
          ref: null
        }
      },
      setprefixpart: {
        name: "setPrefixPart",
        url: "recursivetreeiterator.setprefixpart",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $part, string $value",
          returnValue: "void",
          ref: null
        }
      },
      valid: {
        name: "valid",
        url: "recursivetreeiterator.valid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "recursivetreeiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "RecursiveIterator|IteratorAggregate $it [, int $flags = RecursiveTreeIterator::BYPASS_KEY [, int $cit_flags = CachingIterator::CATCH_GET_CHILD [, int $mode = RecursiveIteratorIterator::SELF_FIRST ]]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  reflection: {
    name: "Reflection",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflection.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "Reflector $reflector [, bool $return = FALSE ]",
          returnValue: "string",
          ref: null
        }
      },
      getmodifiernames: {
        name: "getModifierNames",
        url: "reflection.getmodifiernames",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $modifiers",
          returnValue: "array",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.reflection",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  reflectionclass: {
    name: "ReflectionClass",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflectionclass.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $argument [, bool $return = FALSE ]",
          returnValue: "string",
          ref: null
        }
      },
      getconstant: {
        name: "getConstant",
        url: "reflectionclass.getconstant",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "mixed",
          ref: null
        }
      },
      getconstants: {
        name: "getConstants",
        url: "reflectionclass.getconstants",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getconstructor: {
        name: "getConstructor",
        url: "reflectionclass.getconstructor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionMethod",
          ref: null
        }
      },
      getdefaultproperties: {
        name: "getDefaultProperties",
        url: "reflectionclass.getdefaultproperties",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getdoccomment: {
        name: "getDocComment",
        url: "reflectionclass.getdoccomment",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getendline: {
        name: "getEndLine",
        url: "reflectionclass.getendline",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getextension: {
        name: "getExtension",
        url: "reflectionclass.getextension",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionExtension",
          ref: null
        }
      },
      getextensionname: {
        name: "getExtensionName",
        url: "reflectionclass.getextensionname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getfilename: {
        name: "getFileName",
        url: "reflectionclass.getfilename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getinterfacenames: {
        name: "getInterfaceNames",
        url: "reflectionclass.getinterfacenames",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getinterfaces: {
        name: "getInterfaces",
        url: "reflectionclass.getinterfaces",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getmethod: {
        name: "getMethod",
        url: "reflectionclass.getmethod",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "ReflectionMethod",
          ref: null
        }
      },
      getmethods: {
        name: "getMethods",
        url: "reflectionclass.getmethods",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $filter ]",
          returnValue: "array",
          ref: null
        }
      },
      getmodifiers: {
        name: "getModifiers",
        url: "reflectionclass.getmodifiers",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "reflectionclass.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getnamespacename: {
        name: "getNamespaceName",
        url: "reflectionclass.getnamespacename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getparentclass: {
        name: "getParentClass",
        url: "reflectionclass.getparentclass",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionClass",
          ref: null
        }
      },
      getproperties: {
        name: "getProperties",
        url: "reflectionclass.getproperties",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $filter ]",
          returnValue: "array",
          ref: null
        }
      },
      getproperty: {
        name: "getProperty",
        url: "reflectionclass.getproperty",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "ReflectionProperty",
          ref: null
        }
      },
      getreflectionconstant: {
        name: "getReflectionConstant",
        url: "reflectionclass.getreflectionconstant",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "ReflectionClassConstant",
          ref: null
        }
      },
      getreflectionconstants: {
        name: "getReflectionConstants",
        url: "reflectionclass.getreflectionconstants",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getshortname: {
        name: "getShortName",
        url: "reflectionclass.getshortname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getstartline: {
        name: "getStartLine",
        url: "reflectionclass.getstartline",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getstaticproperties: {
        name: "getStaticProperties",
        url: "reflectionclass.getstaticproperties",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getstaticpropertyvalue: {
        name: "getStaticPropertyValue",
        url: "reflectionclass.getstaticpropertyvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name [, mixed &$def_value ]",
          returnValue: "mixed",
          ref: null
        }
      },
      gettraitaliases: {
        name: "getTraitAliases",
        url: "reflectionclass.gettraitaliases",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      gettraitnames: {
        name: "getTraitNames",
        url: "reflectionclass.gettraitnames",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      gettraits: {
        name: "getTraits",
        url: "reflectionclass.gettraits",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      hasconstant: {
        name: "hasConstant",
        url: "reflectionclass.hasconstant",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "bool",
          ref: null
        }
      },
      hasmethod: {
        name: "hasMethod",
        url: "reflectionclass.hasmethod",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "bool",
          ref: null
        }
      },
      hasproperty: {
        name: "hasProperty",
        url: "reflectionclass.hasproperty",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "bool",
          ref: null
        }
      },
      implementsinterface: {
        name: "implementsInterface",
        url: "reflectionclass.implementsinterface",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $interface",
          returnValue: "bool",
          ref: null
        }
      },
      innamespace: {
        name: "inNamespace",
        url: "reflectionclass.innamespace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isabstract: {
        name: "isAbstract",
        url: "reflectionclass.isabstract",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isanonymous: {
        name: "isAnonymous",
        url: "reflectionclass.isanonymous",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      iscloneable: {
        name: "isCloneable",
        url: "reflectionclass.iscloneable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isfinal: {
        name: "isFinal",
        url: "reflectionclass.isfinal",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isinstance: {
        name: "isInstance",
        url: "reflectionclass.isinstance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $object",
          returnValue: "bool",
          ref: null
        }
      },
      isinstantiable: {
        name: "isInstantiable",
        url: "reflectionclass.isinstantiable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isinterface: {
        name: "isInterface",
        url: "reflectionclass.isinterface",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isinternal: {
        name: "isInternal",
        url: "reflectionclass.isinternal",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isiterable: {
        name: "isIterable",
        url: "reflectionclass.isiterable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isiterateable: {
        name: "isIterateable",
        url: "reflectionclass.isiterateable",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      },
      issubclassof: {
        name: "isSubclassOf",
        url: "reflectionclass.issubclassof",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $class",
          returnValue: "bool",
          ref: null
        }
      },
      istrait: {
        name: "isTrait",
        url: "reflectionclass.istrait",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isuserdefined: {
        name: "isUserDefined",
        url: "reflectionclass.isuserdefined",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      newinstance: {
        name: "newInstance",
        url: "reflectionclass.newinstance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ mixed $... ]",
          returnValue: "object",
          ref: null
        }
      },
      newinstanceargs: {
        name: "newInstanceArgs",
        url: "reflectionclass.newinstanceargs",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ array $args ]",
          returnValue: "object",
          ref: null
        }
      },
      newinstancewithoutconstructor: {
        name: "newInstanceWithoutConstructor",
        url: "reflectionclass.newinstancewithoutconstructor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "object",
          ref: null
        }
      },
      setstaticpropertyvalue: {
        name: "setStaticPropertyValue",
        url: "reflectionclass.setstaticpropertyvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, mixed $value",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectionclass.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $argument",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectionclass.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      }
    }
  },
  reflectionclassconstant: {
    name: "ReflectionClassConstant",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflectionclassconstant.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $class, string $name [, bool $return ]",
          returnValue: "string",
          ref: null
        }
      },
      getdeclaringclass: {
        name: "getDeclaringClass",
        url: "reflectionclassconstant.getdeclaringclass",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionClass",
          ref: null
        }
      },
      getdoccomment: {
        name: "getDocComment",
        url: "reflectionclassconstant.getdoccomment",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getmodifiers: {
        name: "getModifiers",
        url: "reflectionclassconstant.getmodifiers",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "reflectionclassconstant.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getvalue: {
        name: "getValue",
        url: "reflectionclassconstant.getvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      isprivate: {
        name: "isPrivate",
        url: "reflectionclassconstant.isprivate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isprotected: {
        name: "isProtected",
        url: "reflectionclassconstant.isprotected",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      ispublic: {
        name: "isPublic",
        url: "reflectionclassconstant.ispublic",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectionclassconstant.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $class, string $name",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectionclassconstant.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      }
    }
  },
  reflectionextension: {
    name: "ReflectionExtension",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflectionextension.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $name [, string $return = FALSE ]",
          returnValue: "string",
          ref: null
        }
      },
      getclasses: {
        name: "getClasses",
        url: "reflectionextension.getclasses",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getclassnames: {
        name: "getClassNames",
        url: "reflectionextension.getclassnames",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getconstants: {
        name: "getConstants",
        url: "reflectionextension.getconstants",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getdependencies: {
        name: "getDependencies",
        url: "reflectionextension.getdependencies",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getfunctions: {
        name: "getFunctions",
        url: "reflectionextension.getfunctions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getinientries: {
        name: "getINIEntries",
        url: "reflectionextension.getinientries",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "reflectionextension.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getversion: {
        name: "getVersion",
        url: "reflectionextension.getversion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      info: {
        name: "info",
        url: "reflectionextension.info",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      ispersistent: {
        name: "isPersistent",
        url: "reflectionextension.ispersistent",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      istemporary: {
        name: "isTemporary",
        url: "reflectionextension.istemporary",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      __clone: {
        name: "__clone",
        url: "reflectionextension.clone",
        spec: {
          isPublic: false,
          isPrivate: true,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectionextension.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectionextension.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      }
    }
  },
  reflectionfunction: {
    name: "ReflectionFunction",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflectionfunction.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $name [, string $return ]",
          returnValue: "string",
          ref: null
        }
      },
      getclosure: {
        name: "getClosure",
        url: "reflectionfunction.getclosure",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Closure",
          ref: null
        }
      },
      invoke: {
        name: "invoke",
        url: "reflectionfunction.invoke",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ mixed $... ]",
          returnValue: "mixed",
          ref: null
        }
      },
      invokeargs: {
        name: "invokeArgs",
        url: "reflectionfunction.invokeargs",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $args",
          returnValue: "mixed",
          ref: null
        }
      },
      isdisabled: {
        name: "isDisabled",
        url: "reflectionfunction.isdisabled",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectionfunction.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $name",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectionfunction.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      }
    }
  },
  reflectionfunctionabstract: {
    name: "ReflectionFunctionAbstract",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getclosurescopeclass: {
        name: "getClosureScopeClass",
        url: "reflectionfunctionabstract.getclosurescopeclass",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionClass",
          ref: null
        }
      },
      getclosurethis: {
        name: "getClosureThis",
        url: "reflectionfunctionabstract.getclosurethis",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "object",
          ref: null
        }
      },
      getdoccomment: {
        name: "getDocComment",
        url: "reflectionfunctionabstract.getdoccomment",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getendline: {
        name: "getEndLine",
        url: "reflectionfunctionabstract.getendline",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getextension: {
        name: "getExtension",
        url: "reflectionfunctionabstract.getextension",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionExtension",
          ref: null
        }
      },
      getextensionname: {
        name: "getExtensionName",
        url: "reflectionfunctionabstract.getextensionname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getfilename: {
        name: "getFileName",
        url: "reflectionfunctionabstract.getfilename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "reflectionfunctionabstract.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getnamespacename: {
        name: "getNamespaceName",
        url: "reflectionfunctionabstract.getnamespacename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getnumberofparameters: {
        name: "getNumberOfParameters",
        url: "reflectionfunctionabstract.getnumberofparameters",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getnumberofrequiredparameters: {
        name: "getNumberOfRequiredParameters",
        url: "reflectionfunctionabstract.getnumberofrequiredparameters",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getparameters: {
        name: "getParameters",
        url: "reflectionfunctionabstract.getparameters",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getreturntype: {
        name: "getReturnType",
        url: "reflectionfunctionabstract.getreturntype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionType",
          ref: null
        }
      },
      getshortname: {
        name: "getShortName",
        url: "reflectionfunctionabstract.getshortname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getstartline: {
        name: "getStartLine",
        url: "reflectionfunctionabstract.getstartline",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getstaticvariables: {
        name: "getStaticVariables",
        url: "reflectionfunctionabstract.getstaticvariables",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      hasreturntype: {
        name: "hasReturnType",
        url: "reflectionfunctionabstract.hasreturntype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      innamespace: {
        name: "inNamespace",
        url: "reflectionfunctionabstract.innamespace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isclosure: {
        name: "isClosure",
        url: "reflectionfunctionabstract.isclosure",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isdeprecated: {
        name: "isDeprecated",
        url: "reflectionfunctionabstract.isdeprecated",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isgenerator: {
        name: "isGenerator",
        url: "reflectionfunctionabstract.isgenerator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isinternal: {
        name: "isInternal",
        url: "reflectionfunctionabstract.isinternal",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isuserdefined: {
        name: "isUserDefined",
        url: "reflectionfunctionabstract.isuserdefined",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isvariadic: {
        name: "isVariadic",
        url: "reflectionfunctionabstract.isvariadic",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      returnsreference: {
        name: "returnsReference",
        url: "reflectionfunctionabstract.returnsreference",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __clone: {
        name: "__clone",
        url: "reflectionfunctionabstract.clone",
        spec: {
          isPublic: false,
          isPrivate: true,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectionfunctionabstract.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.reflectionfunctionabstract",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  reflectiongenerator: {
    name: "ReflectionGenerator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getexecutingfile: {
        name: "getExecutingFile",
        url: "reflectiongenerator.getexecutingfile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getexecutinggenerator: {
        name: "getExecutingGenerator",
        url: "reflectiongenerator.getexecutinggenerator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Generator",
          ref: null
        }
      },
      getexecutingline: {
        name: "getExecutingLine",
        url: "reflectiongenerator.getexecutingline",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getfunction: {
        name: "getFunction",
        url: "reflectiongenerator.getfunction",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionFunctionAbstract",
          ref: null
        }
      },
      getthis: {
        name: "getThis",
        url: "reflectiongenerator.getthis",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "object",
          ref: null
        }
      },
      gettrace: {
        name: "getTrace",
        url: "reflectiongenerator.gettrace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT ]",
          returnValue: "array",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectiongenerator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Generator $generator",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  reflectionmethod: {
    name: "ReflectionMethod",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflectionmethod.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $class, string $name [, bool $return = FALSE ]",
          returnValue: "string",
          ref: null
        }
      },
      getclosure: {
        name: "getClosure",
        url: "reflectionmethod.getclosure",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $object",
          returnValue: "Closure",
          ref: null
        }
      },
      getdeclaringclass: {
        name: "getDeclaringClass",
        url: "reflectionmethod.getdeclaringclass",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionClass",
          ref: null
        }
      },
      getmodifiers: {
        name: "getModifiers",
        url: "reflectionmethod.getmodifiers",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getprototype: {
        name: "getPrototype",
        url: "reflectionmethod.getprototype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionMethod",
          ref: null
        }
      },
      invoke: {
        name: "invoke",
        url: "reflectionmethod.invoke",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $object [, mixed $... ]",
          returnValue: "mixed",
          ref: null
        }
      },
      invokeargs: {
        name: "invokeArgs",
        url: "reflectionmethod.invokeargs",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $object, array $args",
          returnValue: "mixed",
          ref: null
        }
      },
      isabstract: {
        name: "isAbstract",
        url: "reflectionmethod.isabstract",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isconstructor: {
        name: "isConstructor",
        url: "reflectionmethod.isconstructor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isdestructor: {
        name: "isDestructor",
        url: "reflectionmethod.isdestructor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isfinal: {
        name: "isFinal",
        url: "reflectionmethod.isfinal",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isprivate: {
        name: "isPrivate",
        url: "reflectionmethod.isprivate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isprotected: {
        name: "isProtected",
        url: "reflectionmethod.isprotected",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      ispublic: {
        name: "isPublic",
        url: "reflectionmethod.ispublic",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isstatic: {
        name: "isStatic",
        url: "reflectionmethod.isstatic",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      setaccessible: {
        name: "setAccessible",
        url: "reflectionmethod.setaccessible",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $accessible",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectionmethod.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $class, string $name",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectionmethod.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      }
    }
  },
  reflectionnamedtype: {
    name: "ReflectionNamedType",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getname: {
        name: "getName",
        url: "reflectionnamedtype.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.reflectionnamedtype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  reflectionobject: {
    name: "ReflectionObject",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflectionobject.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $argument [, bool $return ]",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectionobject.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $argument",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  reflectionparameter: {
    name: "ReflectionParameter",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      allowsnull: {
        name: "allowsNull",
        url: "reflectionparameter.allowsnull",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      canbepassedbyvalue: {
        name: "canBePassedByValue",
        url: "reflectionparameter.canbepassedbyvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      export: {
        name: "export",
        url: "reflectionparameter.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $function, string $parameter [, bool $return ]",
          returnValue: "string",
          ref: null
        }
      },
      getclass: {
        name: "getClass",
        url: "reflectionparameter.getclass",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionClass",
          ref: null
        }
      },
      getdeclaringclass: {
        name: "getDeclaringClass",
        url: "reflectionparameter.getdeclaringclass",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionClass",
          ref: null
        }
      },
      getdeclaringfunction: {
        name: "getDeclaringFunction",
        url: "reflectionparameter.getdeclaringfunction",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionFunctionAbstract",
          ref: null
        }
      },
      getdefaultvalue: {
        name: "getDefaultValue",
        url: "reflectionparameter.getdefaultvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      getdefaultvalueconstantname: {
        name: "getDefaultValueConstantName",
        url: "reflectionparameter.getdefaultvalueconstantname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "reflectionparameter.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getposition: {
        name: "getPosition",
        url: "reflectionparameter.getposition",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      gettype: {
        name: "getType",
        url: "reflectionparameter.gettype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionType",
          ref: null
        }
      },
      hastype: {
        name: "hasType",
        url: "reflectionparameter.hastype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isarray: {
        name: "isArray",
        url: "reflectionparameter.isarray",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      iscallable: {
        name: "isCallable",
        url: "reflectionparameter.iscallable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isdefaultvalueavailable: {
        name: "isDefaultValueAvailable",
        url: "reflectionparameter.isdefaultvalueavailable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isdefaultvalueconstant: {
        name: "isDefaultValueConstant",
        url: "reflectionparameter.isdefaultvalueconstant",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isoptional: {
        name: "isOptional",
        url: "reflectionparameter.isoptional",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      ispassedbyreference: {
        name: "isPassedByReference",
        url: "reflectionparameter.ispassedbyreference",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isvariadic: {
        name: "isVariadic",
        url: "reflectionparameter.isvariadic",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __clone: {
        name: "__clone",
        url: "reflectionparameter.clone",
        spec: {
          isPublic: false,
          isPrivate: true,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectionparameter.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function, string $parameter",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectionparameter.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      }
    }
  },
  reflectionproperty: {
    name: "ReflectionProperty",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflectionproperty.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $class, string $name [, bool $return ]",
          returnValue: "string",
          ref: null
        }
      },
      getdeclaringclass: {
        name: "getDeclaringClass",
        url: "reflectionproperty.getdeclaringclass",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReflectionClass",
          ref: null
        }
      },
      getdoccomment: {
        name: "getDocComment",
        url: "reflectionproperty.getdoccomment",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getmodifiers: {
        name: "getModifiers",
        url: "reflectionproperty.getmodifiers",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "reflectionproperty.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getvalue: {
        name: "getValue",
        url: "reflectionproperty.getvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ object $object ]",
          returnValue: "mixed",
          ref: null
        }
      },
      isdefault: {
        name: "isDefault",
        url: "reflectionproperty.isdefault",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isprivate: {
        name: "isPrivate",
        url: "reflectionproperty.isprivate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isprotected: {
        name: "isProtected",
        url: "reflectionproperty.isprotected",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      ispublic: {
        name: "isPublic",
        url: "reflectionproperty.ispublic",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isstatic: {
        name: "isStatic",
        url: "reflectionproperty.isstatic",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      setaccessible: {
        name: "setAccessible",
        url: "reflectionproperty.setaccessible",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $accessible",
          returnValue: "void",
          ref: null
        }
      },
      setvalue: {
        name: "setValue",
        url: "reflectionproperty.setvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $object, mixed $value",
          returnValue: "void",
          ref: null
        }
      },
      __clone: {
        name: "__clone",
        url: "reflectionproperty.clone",
        spec: {
          isPublic: false,
          isPrivate: true,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectionproperty.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $class, string $name",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectionproperty.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      }
    }
  },
  reflectiontype: {
    name: "ReflectionType",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      allowsnull: {
        name: "allowsNull",
        url: "reflectiontype.allowsnull",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      isbuiltin: {
        name: "isBuiltin",
        url: "reflectiontype.isbuiltin",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectiontype.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.reflectiontype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  reflectionzendextension: {
    name: "ReflectionZendExtension",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflectionzendextension.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $name [, bool $return ]",
          returnValue: "string",
          ref: null
        }
      },
      getauthor: {
        name: "getAuthor",
        url: "reflectionzendextension.getauthor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getcopyright: {
        name: "getCopyright",
        url: "reflectionzendextension.getcopyright",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "reflectionzendextension.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      geturl: {
        name: "getURL",
        url: "reflectionzendextension.geturl",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getversion: {
        name: "getVersion",
        url: "reflectionzendextension.getversion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      __clone: {
        name: "__clone",
        url: "reflectionzendextension.clone",
        spec: {
          isPublic: false,
          isPrivate: true,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "reflectionzendextension.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflectionzendextension.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      }
    }
  },
  reflector: {
    name: "Reflector",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      export: {
        name: "export",
        url: "reflector.export",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "reflector.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.reflector",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  regexiterator: {
    name: "RegexIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      accept: {
        name: "accept",
        url: "regexiterator.accept",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      getflags: {
        name: "getFlags",
        url: "regexiterator.getflags",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getmode: {
        name: "getMode",
        url: "regexiterator.getmode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getpregflags: {
        name: "getPregFlags",
        url: "regexiterator.getpregflags",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getregex: {
        name: "getRegex",
        url: "regexiterator.getregex",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      setflags: {
        name: "setFlags",
        url: "regexiterator.setflags",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $flags",
          returnValue: "void",
          ref: null
        }
      },
      setmode: {
        name: "setMode",
        url: "regexiterator.setmode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $mode",
          returnValue: "void",
          ref: null
        }
      },
      setpregflags: {
        name: "setPregFlags",
        url: "regexiterator.setpregflags",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $preg_flags",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "regexiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Iterator $iterator, string $regex [, int $mode = self::MATCH [, int $flags = 0 [, int $preg_flags = 0 ]]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  resourcebundle: {
    name: "ResourceBundle",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      count: {
        name: "count",
        url: "resourcebundle.count",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      create: {
        name: "create",
        url: "resourcebundle.create",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale, string $bundlename [, bool $fallback ]",
          returnValue: "ResourceBundle",
          ref: null
        }
      },
      get: {
        name: "get",
        url: "resourcebundle.get",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string|int $index [, bool $fallback = TRUE ]",
          returnValue: "mixed",
          ref: null
        }
      },
      geterrorcode: {
        name: "getErrorCode",
        url: "resourcebundle.geterrorcode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      geterrormessage: {
        name: "getErrorMessage",
        url: "resourcebundle.geterrormessage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getlocales: {
        name: "getLocales",
        url: "resourcebundle.locales",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $bundlename",
          returnValue: "array",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.resourcebundle",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  result: {
    name: "Result",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getaffecteditemscount: {
        name: "getAffectedItemsCount",
        url: "mysql-xdevapi-result.getaffecteditemscount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getautoincrementvalue: {
        name: "getAutoIncrementValue",
        url: "mysql-xdevapi-result.getautoincrementvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getgeneratedids: {
        name: "getGeneratedIds",
        url: "mysql-xdevapi-result.getgeneratedids",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getwarnings: {
        name: "getWarnings",
        url: "mysql-xdevapi-result.getwarnings",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getwarningscount: {
        name: "getWarningsCount",
        url: "mysql-xdevapi-result.getwarningscount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "integer",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-result.construct",
        spec: {
          isPublic: false,
          isPrivate: true,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  rowresult: {
    name: "RowResult",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      fetchall: {
        name: "fetchAll",
        url: "mysql-xdevapi-rowresult.fetchall",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      fetchone: {
        name: "fetchOne",
        url: "mysql-xdevapi-rowresult.fetchone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getcolumnnames: {
        name: "getColumnNames",
        url: "mysql-xdevapi-rowresult.getcolumnnames",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getcolumns: {
        name: "getColumns",
        url: "mysql-xdevapi-rowresult.getcolumns",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getcolumnscount: {
        name: "getColumnsCount",
        url: "mysql-xdevapi-rowresult.getcolumncount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "integer",
          ref: null
        }
      },
      getwarnings: {
        name: "getWarnings",
        url: "mysql-xdevapi-rowresult.getwarnings",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getwarningscount: {
        name: "getWarningsCount",
        url: "mysql-xdevapi-rowresult.getwarningscount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "integer",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-rowresult.construct",
        spec: {
          isPublic: false,
          isPrivate: true,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  rrdcreator: {
    name: "RRDCreator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      addarchive: {
        name: "addArchive",
        url: "rrdcreator.addarchive",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $description",
          returnValue: "void",
          ref: null
        }
      },
      adddatasource: {
        name: "addDataSource",
        url: "rrdcreator.adddatasource",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $description",
          returnValue: "void",
          ref: null
        }
      },
      save: {
        name: "save",
        url: "rrdcreator.save",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "rrdcreator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path [, string $startTime [, int $step = 0 ]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  rrdgraph: {
    name: "RRDGraph",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      save: {
        name: "save",
        url: "rrdgraph.save",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      saveverbose: {
        name: "saveVerbose",
        url: "rrdgraph.saveverbose",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      setoptions: {
        name: "setOptions",
        url: "rrdgraph.setoptions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $options",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "rrdgraph.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  rrdupdater: {
    name: "RRDUpdater",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      update: {
        name: "update",
        url: "rrdupdater.update",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $values [, string $time = time() ]",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "rrdupdater.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  rangeexception: {
    ref: () => classes.r.runtimeexception,
    url: "class.rangeexception"
  },
  runtimeexception: {
    ref: () => classes.e.exception,
    url: "class.runtimeexception"
  }
};
