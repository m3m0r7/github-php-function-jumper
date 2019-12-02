classes.l = {
  lapack: {
    name: "Lapack",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      eigenvalues: {
        name: "eigenValues",
        url: "lapack.eigenvalues",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $a [, array $left [, array $right ]]",
          returnValue: "array",
          ref: null
        }
      },
      identity: {
        name: "identity",
        url: "lapack.identity",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $n",
          returnValue: "array",
          ref: null
        }
      },
      leastsquaresbyfactorisation: {
        name: "leastSquaresByFactorisation",
        url: "lapack.leastsquaresbyfactorisation",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $a, array $b",
          returnValue: "array",
          ref: null
        }
      },
      leastsquaresbysvd: {
        name: "leastSquaresBySVD",
        url: "lapack.leastsquaresbysvd",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $a, array $b",
          returnValue: "array",
          ref: null
        }
      },
      pseudoinverse: {
        name: "pseudoInverse",
        url: "lapack.pseudoinverse",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $a",
          returnValue: "array",
          ref: null
        }
      },
      singularvalues: {
        name: "singularValues",
        url: "lapack.singularvalues",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $a",
          returnValue: "array",
          ref: null
        }
      },
      solvelinearequation: {
        name: "solveLinearEquation",
        url: "lapack.solvelinearequation",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $a, array $b",
          returnValue: "array",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.lapack",
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
  limititerator: {
    name: "LimitIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      current: {
        name: "current",
        url: "limititerator.current",
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
        url: "limititerator.getinneriterator",
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
      getposition: {
        name: "getPosition",
        url: "limititerator.getposition",
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
        url: "limititerator.key",
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
        url: "limititerator.next",
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
        url: "limititerator.rewind",
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
      seek: {
        name: "seek",
        url: "limititerator.seek",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $position",
          returnValue: "int",
          ref: null
        }
      },
      valid: {
        name: "valid",
        url: "limititerator.valid",
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
        url: "limititerator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Iterator $iterator [, int $offset = 0 [, int $count = -1 ]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  locale: {
    name: "Locale",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      acceptfromhttp: {
        name: "acceptFromHttp",
        url: "locale.acceptfromhttp",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $header",
          returnValue: "string",
          ref: null
        }
      },
      canonicalize: {
        name: "canonicalize",
        url: "locale.canonicalize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale",
          returnValue: "string",
          ref: null
        }
      },
      composelocale: {
        name: "composeLocale",
        url: "locale.composelocale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $subtags",
          returnValue: "string",
          ref: null
        }
      },
      filtermatches: {
        name: "filterMatches",
        url: "locale.filtermatches",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $langtag, string $locale [, bool $canonicalize = FALSE ]",
          returnValue: "bool",
          ref: null
        }
      },
      getallvariants: {
        name: "getAllVariants",
        url: "locale.getallvariants",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale",
          returnValue: "array",
          ref: null
        }
      },
      getdefault: {
        name: "getDefault",
        url: "locale.getdefault",
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
      getdisplaylanguage: {
        name: "getDisplayLanguage",
        url: "locale.getdisplaylanguage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale [, string $in_locale ]",
          returnValue: "string",
          ref: null
        }
      },
      getdisplayname: {
        name: "getDisplayName",
        url: "locale.getdisplayname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale [, string $in_locale ]",
          returnValue: "string",
          ref: null
        }
      },
      getdisplayregion: {
        name: "getDisplayRegion",
        url: "locale.getdisplayregion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale [, string $in_locale ]",
          returnValue: "string",
          ref: null
        }
      },
      getdisplayscript: {
        name: "getDisplayScript",
        url: "locale.getdisplayscript",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale [, string $in_locale ]",
          returnValue: "string",
          ref: null
        }
      },
      getdisplayvariant: {
        name: "getDisplayVariant",
        url: "locale.getdisplayvariant",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale [, string $in_locale ]",
          returnValue: "string",
          ref: null
        }
      },
      getkeywords: {
        name: "getKeywords",
        url: "locale.getkeywords",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale",
          returnValue: "array",
          ref: null
        }
      },
      getprimarylanguage: {
        name: "getPrimaryLanguage",
        url: "locale.getprimarylanguage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale",
          returnValue: "string",
          ref: null
        }
      },
      getregion: {
        name: "getRegion",
        url: "locale.getregion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale",
          returnValue: "string",
          ref: null
        }
      },
      getscript: {
        name: "getScript",
        url: "locale.getscript",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale",
          returnValue: "string",
          ref: null
        }
      },
      lookup: {
        name: "lookup",
        url: "locale.lookup",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $langtag, string $locale [, bool $canonicalize = FALSE [, string $default ]]",
          returnValue: "string",
          ref: null
        }
      },
      parselocale: {
        name: "parseLocale",
        url: "locale.parselocale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale",
          returnValue: "array",
          ref: null
        }
      },
      setdefault: {
        name: "setDefault",
        url: "locale.setdefault",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.locale",
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
  lua: {
    name: "Lua",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      assign: {
        name: "assign",
        url: "lua.assign",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, string $value",
          returnValue: "mixed",
          ref: null
        }
      },
      call: {
        name: "call",
        url: "lua.call",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $lua_func [, array $args [, int $use_self = 0 ]]",
          returnValue: "mixed",
          ref: null
        }
      },
      eval: {
        name: "eval",
        url: "lua.eval",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $statements",
          returnValue: "mixed",
          ref: null
        }
      },
      getversion: {
        name: "getVersion",
        url: "lua.getversion",
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
      include: {
        name: "include",
        url: "lua.include",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $file",
          returnValue: "mixed",
          ref: null
        }
      },
      registercallback: {
        name: "registerCallback",
        url: "lua.registercallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, callable $function",
          returnValue: "mixed",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "lua.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $lua_script_file = NULL",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  luaclosure: {
    name: "LuaClosure",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      __invoke: {
        name: "__invoke",
        url: "luaclosure.invoke",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ mixed $... ]",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.luaclosure",
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
  luasandbox: {
    name: "LuaSandbox",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      callfunction: {
        name: "callFunction",
        url: "luasandbox.callfunction",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name [, mixed $... ]",
          returnValue: "array|bool",
          ref: null
        }
      },
      disableprofiler: {
        name: "disableProfiler",
        url: "luasandbox.disableprofiler",
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
      enableprofiler: {
        name: "enableProfiler",
        url: "luasandbox.enableprofiler",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ float $period = 0.02 ]",
          returnValue: "bool",
          ref: null
        }
      },
      getcpuusage: {
        name: "getCPUUsage",
        url: "luasandbox.getcpuusage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "float",
          ref: null
        }
      },
      getmemoryusage: {
        name: "getMemoryUsage",
        url: "luasandbox.getmemoryusage",
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
      getpeakmemoryusage: {
        name: "getPeakMemoryUsage",
        url: "luasandbox.getpeakmemoryusage",
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
      getprofilerfunctionreport: {
        name: "getProfilerFunctionReport",
        url: "luasandbox.getprofilerfunctionreport",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $units = LuaSandbox::SECONDS ]",
          returnValue: "array",
          ref: null
        }
      },
      getversioninfo: {
        name: "getVersionInfo",
        url: "luasandbox.getversioninfo",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      loadbinary: {
        name: "loadBinary",
        url: "luasandbox.loadbinary",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $code [, string $chunkName = '' ]",
          returnValue: "LuaSandboxFunction",
          ref: null
        }
      },
      loadstring: {
        name: "loadString",
        url: "luasandbox.loadstring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $code [, string $chunkName = '' ]",
          returnValue: "LuaSandboxFunction",
          ref: null
        }
      },
      pauseusagetimer: {
        name: "pauseUsageTimer",
        url: "luasandbox.pauseusagetimer",
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
      registerlibrary: {
        name: "registerLibrary",
        url: "luasandbox.registerlibrary",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $libname, array $functions",
          returnValue: "void",
          ref: null
        }
      },
      setcpulimit: {
        name: "setCPULimit",
        url: "luasandbox.setcpulimit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float|bool $limit",
          returnValue: "void",
          ref: null
        }
      },
      setmemorylimit: {
        name: "setMemoryLimit",
        url: "luasandbox.setmemorylimit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $limit",
          returnValue: "void",
          ref: null
        }
      },
      unpauseusagetimer: {
        name: "unpauseUsageTimer",
        url: "luasandbox.unpauseusagetimer",
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
      wrapphpfunction: {
        name: "wrapPhpFunction",
        url: "luasandbox.wrapphpfunction",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $function",
          returnValue: "LuaSandboxFunction",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.luasandbox",
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
  luasandboxfunction: {
    name: "LuaSandboxFunction",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      call: {
        name: "call",
        url: "luasandboxfunction.call",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $... ]",
          returnValue: "array|bool",
          ref: null
        }
      },
      dump: {
        name: "dump",
        url: "luasandboxfunction.dump",
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
        url: "luasandboxfunction.construct",
        spec: {
          isPublic: false,
          isPrivate: true,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "void",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  lengthexception: {
    ref: () => classes.l.logicexception,
    url: "class.lengthexception"
  },
  logicexception: {
    ref: () => classes.e.exception,
    url: "class.logicexception"
  }
};
