classes.f = {
  fannconnection: {
    name: "FANNConnection",
    methods: {
      getfromneuron: {
        name: "getFromNeuron",
        url: "fannconnection.getfromneuron",
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
      gettoneuron: {
        name: "getToNeuron",
        url: "fannconnection.gettoneuron",
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
      getweight: {
        name: "getWeight",
        url: "fannconnection.getweight",
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
      setweight: {
        name: "setWeight",
        url: "fannconnection.setweight",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $weight",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "fannconnection.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $from_neuron, int $to_neuron, float $weight",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  ffi: {
    name: "FFI",
    methods: {
      addr: {
        name: "addr",
        url: "ffi.addr",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "FFI\\CData &$ptr",
          returnValue: "FFI\\CData",
          ref: null
        }
      },
      alignof: {
        name: "alignof",
        url: "ffi.alignof",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed &$ptr",
          returnValue: "int",
          ref: null
        }
      },
      arraytype: {
        name: "arrayType",
        url: "ffi.arraytype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "FFI\\CType $type, array $dims",
          returnValue: "FFI\\CType",
          ref: null
        }
      },
      cast: {
        name: "cast",
        url: "ffi.cast",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $type, FFI\\CData &$ptr",
          returnValue: "FFI\\CData",
          ref: null
        }
      },
      cdef: {
        name: "cdef",
        url: "ffi.cdef",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "[ string $code = \"\" [, string $lib ]]",
          returnValue: "FFI",
          ref: null
        }
      },
      free: {
        name: "free",
        url: "ffi.free",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "FFI\\CData &$ptr",
          returnValue: "void",
          ref: null
        }
      },
      load: {
        name: "load",
        url: "ffi.load",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $filename",
          returnValue: "FFI",
          ref: null
        }
      },
      memcmp: {
        name: "memcmp",
        url: "ffi.memcmp",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed &$ptr1, mixed &$ptr2, int $size",
          returnValue: "int",
          ref: null
        }
      },
      memcpy: {
        name: "memcpy",
        url: "ffi.memcpy",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "FFI\\CData &$dst, mixed &$src, int $size",
          returnValue: "void",
          ref: null
        }
      },
      memset: {
        name: "memset",
        url: "ffi.memset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "FFI\\CData &$ptr, int $ch, int $size",
          returnValue: "void",
          ref: null
        }
      },
      new: {
        name: "new",
        url: "ffi.new",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $type [, bool $owned = TRUE [, bool $persistent = FALSE ]]",
          returnValue: "FFI\\CData",
          ref: null
        }
      },
      scope: {
        name: "scope",
        url: "ffi.scope",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $scope_name",
          returnValue: "FFI",
          ref: null
        }
      },
      sizeof: {
        name: "sizeof",
        url: "ffi.sizeof",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed &$ptr",
          returnValue: "int",
          ref: null
        }
      },
      string: {
        name: "string",
        url: "ffi.string",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "FFI\\CData &$ptr [, int $size ]",
          returnValue: "string",
          ref: null
        }
      },
      type: {
        name: "type",
        url: "ffi.type",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $type",
          returnValue: "FFI\\CType",
          ref: null
        }
      },
      typeof: {
        name: "typeof",
        url: "ffi.typeof",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "FFI\\CData &$ptr",
          returnValue: "FFI\\CType",
          ref: null
        }
      }
    }
  },
  filesystemiterator: {
    name: "FilesystemIterator",
    methods: {
      current: {
        name: "current",
        url: "filesystemiterator.current",
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
      getflags: {
        name: "getFlags",
        url: "filesystemiterator.getflags",
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
      key: {
        name: "key",
        url: "filesystemiterator.key",
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
        url: "filesystemiterator.next",
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
        url: "filesystemiterator.rewind",
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
      setflags: {
        name: "setFlags",
        url: "filesystemiterator.setflags",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $flags ]",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "filesystemiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path [, int $flags = FilesystemIterator::KEY_AS_PATHNAME | FilesystemIterator::CURRENT_AS_FILEINFO | FilesystemIterator::SKIP_DOTS ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  filteriterator: {
    name: "FilterIterator",
    methods: {
      accept: {
        name: "accept",
        url: "filteriterator.accept",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      current: {
        name: "current",
        url: "filteriterator.current",
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
      getinneriterator: {
        name: "getInnerIterator",
        url: "filteriterator.getinneriterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Iterator",
          ref: null
        }
      },
      key: {
        name: "key",
        url: "filteriterator.key",
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
        url: "filteriterator.next",
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
        url: "filteriterator.rewind",
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
      valid: {
        name: "valid",
        url: "filteriterator.valid",
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
        url: "filteriterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Iterator $iterator",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  finfo: {
    name: "finfo",
    methods: {
      buffer: {
        name: "buffer",
        url: "finfo.buffer",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $string = NULL [, int $options = FILEINFO_NONE [, resource $context = NULL ]]",
          returnValue: "string",
          ref: null
        }
      },
      file: {
        name: "file",
        url: "finfo.file",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $file_name = NULL [, int $options = FILEINFO_NONE [, resource $context = NULL ]]",
          returnValue: "string",
          ref: null
        }
      },
      set_flags: {
        name: "set_flags",
        url: "finfo.set-flags",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $options",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "finfo.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $options = FILEINFO_NONE [, string $magic_file = NULL ]]",
          returnValue: "",
          ref: null
        }
      }
    }
  }
};
