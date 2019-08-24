classes.j = {
  jsonserializable: {
    name: "JsonSerializable",
    isClass: false,
    isInterface: true,
    isTrait: false,
    methods: {
      jsonserialize: {
        name: "jsonSerialize",
        url: "jsonserializable.jsonserialize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.jsonserializable",
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
  judy: {
    name: "Judy",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      bycount: {
        name: "byCount",
        url: "judy.bycount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $nth_index",
          returnValue: "int",
          ref: null
        }
      },
      count: {
        name: "count",
        url: "judy.count",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $index_start = 0 [, int $index_end = -1 ]]",
          returnValue: "int",
          ref: null
        }
      },
      first: {
        name: "first",
        url: "judy.first",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ mixed $index ]",
          returnValue: "mixed",
          ref: null
        }
      },
      firstempty: {
        name: "firstEmpty",
        url: "judy.firstempty",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ mixed $index = 0 ]",
          returnValue: "int",
          ref: null
        }
      },
      free: {
        name: "free",
        url: "judy.free",
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
        url: "judy.gettype",
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
      last: {
        name: "last",
        url: "judy.last",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $index ]",
          returnValue: "void",
          ref: null
        }
      },
      lastempty: {
        name: "lastEmpty",
        url: "judy.lastempty",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $index = -1 ]",
          returnValue: "int",
          ref: null
        }
      },
      memoryusage: {
        name: "memoryUsage",
        url: "judy.memoryusage",
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
      next: {
        name: "next",
        url: "judy.next",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $index",
          returnValue: "mixed",
          ref: null
        }
      },
      nextempty: {
        name: "nextEmpty",
        url: "judy.nextempty",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $index",
          returnValue: "int",
          ref: null
        }
      },
      offsetexists: {
        name: "offsetExists",
        url: "judy.offsetexists",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $offset",
          returnValue: "bool",
          ref: null
        }
      },
      offsetget: {
        name: "offsetGet",
        url: "judy.offsetget",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $offset",
          returnValue: "mixed",
          ref: null
        }
      },
      offsetset: {
        name: "offsetSet",
        url: "judy.offsetset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $offset, mixed $value",
          returnValue: "bool",
          ref: null
        }
      },
      offsetunset: {
        name: "offsetUnset",
        url: "judy.offsetunset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $offset",
          returnValue: "bool",
          ref: null
        }
      },
      prev: {
        name: "prev",
        url: "judy.prev",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $index",
          returnValue: "mixed",
          ref: null
        }
      },
      prevempty: {
        name: "prevEmpty",
        url: "judy.prevempty",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $index",
          returnValue: "int",
          ref: null
        }
      },
      size: {
        name: "size",
        url: "judy.size",
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
        url: "judy.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $judy_type",
          returnValue: "",
          ref: null
        }
      },
      __destruct: {
        name: "__destruct",
        url: "judy.destruct",
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
      }
    }
  }
};
