classes.e = {
  "emptyiterator": {
    "name": "EmptyIterator",
    "methods": {
      "current": {
        "name": "current",
        "url": "emptyiterator.current",
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
      "key": {
        "name": "key",
        "url": "emptyiterator.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "scalar",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "emptyiterator.next",
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
        "url": "emptyiterator.rewind",
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
        "url": "emptyiterator.valid",
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
      }
    }
  },
  "error": {
    "name": "Error",
    "methods": {
      "getcode": {
        "name": "getCode",
        "url": "error.getcode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getfile": {
        "name": "getFile",
        "url": "error.getfile",
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
      "getline": {
        "name": "getLine",
        "url": "error.getline",
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
      "getmessage": {
        "name": "getMessage",
        "url": "error.getmessage",
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
      "getprevious": {
        "name": "getPrevious",
        "url": "error.getprevious",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Throwable",
          "ref": null
        }
      },
      "gettrace": {
        "name": "getTrace",
        "url": "error.gettrace",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "gettraceasstring": {
        "name": "getTraceAsString",
        "url": "error.gettraceasstring",
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
      "__clone": {
        "name": "__clone",
        "url": "error.clone",
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
        "url": "error.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $message = \"\" [, int $code = 0 [, Throwable $previous = NULL ]]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "error.tostring",
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
  "errorexception": {
    "name": "ErrorException",
    "methods": {
      "getseverity": {
        "name": "getSeverity",
        "url": "errorexception.getseverity",
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
      "__construct": {
        "name": "__construct",
        "url": "errorexception.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $message = \"\" [, int $code = 0 [, int $severity = E_ERROR [, string $filename = __FILE__ [, int $lineno = __LINE__ [, Exception $previous = NULL ]]]]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "ev": {
    "name": "Ev",
    "methods": {
      "backend": {
        "name": "backend",
        "url": "ev.backend",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "depth": {
        "name": "depth",
        "url": "ev.depth",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "embeddablebackends": {
        "name": "embeddableBackends",
        "url": "ev.embeddablebackends",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "feedsignal": {
        "name": "feedSignal",
        "url": "ev.feedsignal",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "int $signum",
          "returnValue": "void",
          "ref": null
        }
      },
      "feedsignalevent": {
        "name": "feedSignalEvent",
        "url": "ev.feedsignalevent",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "int $signum",
          "returnValue": "void",
          "ref": null
        }
      },
      "iteration": {
        "name": "iteration",
        "url": "ev.iteration",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "now": {
        "name": "now",
        "url": "ev.now",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "nowupdate": {
        "name": "nowUpdate",
        "url": "ev.nowupdate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "recommendedbackends": {
        "name": "recommendedBackends",
        "url": "ev.recommendedbackends",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "resume": {
        "name": "resume",
        "url": "ev.resume",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "run": {
        "name": "run",
        "url": "ev.run",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "[ int $flags ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "sleep": {
        "name": "sleep",
        "url": "ev.sleep",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "float $seconds",
          "returnValue": "void",
          "ref": null
        }
      },
      "stop": {
        "name": "stop",
        "url": "ev.stop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "[ int $how ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "supportedbackends": {
        "name": "supportedBackends",
        "url": "ev.supportedbackends",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "suspend": {
        "name": "suspend",
        "url": "ev.suspend",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "time": {
        "name": "time",
        "url": "ev.time",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "verify": {
        "name": "verify",
        "url": "ev.verify",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "evcheck": {
    "name": "EvCheck",
    "methods": {
      "createstopped": {
        "name": "createStopped",
        "url": "evcheck.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "string $callback [, string $data [, string $priority ]]",
          "returnValue": "object",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "evcheck.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $callback [, mixed $data [, int $priority ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evchild": {
    "name": "EvChild",
    "methods": {
      "createstopped": {
        "name": "createStopped",
        "url": "evchild.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "int $pid, bool $trace, callable $callback [, mixed $data [, int $priority ]]",
          "returnValue": "object",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "evchild.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $pid, bool $trace",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "evchild.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $pid, bool $trace, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evembed": {
    "name": "EvEmbed",
    "methods": {
      "createstopped": {
        "name": "createStopped",
        "url": "evembed.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "object $other [, callable $callback [, mixed $data [, int $priority ]]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "evembed.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $other",
          "returnValue": "void",
          "ref": null
        }
      },
      "sweep": {
        "name": "sweep",
        "url": "evembed.sweep",
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
        "url": "evembed.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $other [, callable $callback [, mixed $data [, int $priority ]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "event": {
    "name": "Event",
    "methods": {
      "add": {
        "name": "add",
        "url": "event.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ float $timeout ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addsignal": {
        "name": "addSignal",
        "url": "event.addsignal",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ float $timeout ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addtimer": {
        "name": "addTimer",
        "url": "event.addtimer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ float $timeout ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "del": {
        "name": "del",
        "url": "event.del",
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
      "delsignal": {
        "name": "delSignal",
        "url": "event.delsignal",
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
      "deltimer": {
        "name": "delTimer",
        "url": "event.deltimer",
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
      "free": {
        "name": "free",
        "url": "event.free",
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
      "getsupportedmethods": {
        "name": "getSupportedMethods",
        "url": "event.getsupportedmethods",
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
      "pending": {
        "name": "pending",
        "url": "event.pending",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $flags",
          "returnValue": "bool",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "event.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBase $base, mixed $fd [, int $what [, callable $cb [, mixed $arg ]]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setpriority": {
        "name": "setPriority",
        "url": "event.setpriority",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $priority",
          "returnValue": "bool",
          "ref": null
        }
      },
      "settimer": {
        "name": "setTimer",
        "url": "event.settimer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBase $base, callable $cb [, mixed $arg ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "signal": {
        "name": "signal",
        "url": "event.signal",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "EventBase $base, int $signum, callable $cb [, mixed $arg ]",
          "returnValue": "Event",
          "ref": null
        }
      },
      "timer": {
        "name": "timer",
        "url": "event.timer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "EventBase $base, callable $cb [, mixed $arg ]",
          "returnValue": "Event",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "event.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBase $base, mixed $fd, int $what, callable $cb [, mixed $arg = NULL ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "eventbase": {
    "name": "EventBase",
    "methods": {
      "dispatch": {
        "name": "dispatch",
        "url": "eventbase.dispatch",
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
      "exit": {
        "name": "exit",
        "url": "eventbase.exit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ float $timeout ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "free": {
        "name": "free",
        "url": "eventbase.free",
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
      "getfeatures": {
        "name": "getFeatures",
        "url": "eventbase.getfeatures",
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
      "getmethod": {
        "name": "getMethod",
        "url": "eventbase.getmethod",
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
      "gettimeofdaycached": {
        "name": "getTimeOfDayCached",
        "url": "eventbase.gettimeofdaycached",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "gotexit": {
        "name": "gotExit",
        "url": "eventbase.gotexit",
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
      "gotstop": {
        "name": "gotStop",
        "url": "eventbase.gotstop",
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
      "loop": {
        "name": "loop",
        "url": "eventbase.loop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $flags ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "priorityinit": {
        "name": "priorityInit",
        "url": "eventbase.priorityinit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $n_priorities",
          "returnValue": "bool",
          "ref": null
        }
      },
      "reinit": {
        "name": "reInit",
        "url": "eventbase.reinit",
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
      "stop": {
        "name": "stop",
        "url": "eventbase.stop",
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
        "url": "eventbase.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ EventConfig $cfg ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "eventbuffer": {
    "name": "EventBuffer",
    "methods": {
      "add": {
        "name": "add",
        "url": "eventbuffer.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $data",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addbuffer": {
        "name": "addBuffer",
        "url": "eventbuffer.addbuffer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBuffer $buf",
          "returnValue": "bool",
          "ref": null
        }
      },
      "appendfrom": {
        "name": "appendFrom",
        "url": "eventbuffer.appendfrom",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBuffer $buf, int $len",
          "returnValue": "int",
          "ref": null
        }
      },
      "copyout": {
        "name": "copyout",
        "url": "eventbuffer.copyout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string &$data, int $max_bytes",
          "returnValue": "int",
          "ref": null
        }
      },
      "drain": {
        "name": "drain",
        "url": "eventbuffer.drain",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $len",
          "returnValue": "bool",
          "ref": null
        }
      },
      "enablelocking": {
        "name": "enableLocking",
        "url": "eventbuffer.enablelocking",
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
      "expand": {
        "name": "expand",
        "url": "eventbuffer.expand",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $len",
          "returnValue": "bool",
          "ref": null
        }
      },
      "freeze": {
        "name": "freeze",
        "url": "eventbuffer.freeze",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $at_front",
          "returnValue": "bool",
          "ref": null
        }
      },
      "lock": {
        "name": "lock",
        "url": "eventbuffer.lock",
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
      "prepend": {
        "name": "prepend",
        "url": "eventbuffer.prepend",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $data",
          "returnValue": "bool",
          "ref": null
        }
      },
      "prependbuffer": {
        "name": "prependBuffer",
        "url": "eventbuffer.prependbuffer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBuffer $buf",
          "returnValue": "bool",
          "ref": null
        }
      },
      "pullup": {
        "name": "pullup",
        "url": "eventbuffer.pullup",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size",
          "returnValue": "string",
          "ref": null
        }
      },
      "read": {
        "name": "read",
        "url": "eventbuffer.read",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $max_bytes",
          "returnValue": "string",
          "ref": null
        }
      },
      "readfrom": {
        "name": "readFrom",
        "url": "eventbuffer.readfrom",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $fd, int $howmuch",
          "returnValue": "int",
          "ref": null
        }
      },
      "readline": {
        "name": "readLine",
        "url": "eventbuffer.readline",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $eol_style",
          "returnValue": "string",
          "ref": null
        }
      },
      "search": {
        "name": "search",
        "url": "eventbuffer.search",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $what [, int $start = -1 [, int $end = -1 ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "searcheol": {
        "name": "searchEol",
        "url": "eventbuffer.searcheol",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $start = -1 [, int $eol_style = EventBuffer::EOL_ANY ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "substr": {
        "name": "substr",
        "url": "eventbuffer.substr",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $start [, int $length ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "unfreeze": {
        "name": "unfreeze",
        "url": "eventbuffer.unfreeze",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $at_front",
          "returnValue": "bool",
          "ref": null
        }
      },
      "unlock": {
        "name": "unlock",
        "url": "eventbuffer.unlock",
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
      "write": {
        "name": "write",
        "url": "eventbuffer.write",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $fd [, int $howmuch ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "eventbuffer.construct",
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
  "eventbufferevent": {
    "name": "EventBufferEvent",
    "methods": {
      "close": {
        "name": "close",
        "url": "eventbufferevent.close",
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
        "url": "eventbufferevent.connect",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $addr",
          "returnValue": "bool",
          "ref": null
        }
      },
      "connecthost": {
        "name": "connectHost",
        "url": "eventbufferevent.connecthost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventDnsBase $dns_base, string $hostname, int $port [, int $family = EventUtil::AF_UNSPEC ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "createpair": {
        "name": "createPair",
        "url": "eventbufferevent.createpair",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "EventBase $base [, int $options = 0 ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "disable": {
        "name": "disable",
        "url": "eventbufferevent.disable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $events",
          "returnValue": "bool",
          "ref": null
        }
      },
      "enable": {
        "name": "enable",
        "url": "eventbufferevent.enable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $events",
          "returnValue": "bool",
          "ref": null
        }
      },
      "free": {
        "name": "free",
        "url": "eventbufferevent.free",
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
      "getdnserrorstring": {
        "name": "getDnsErrorString",
        "url": "eventbufferevent.getdnserrorstring",
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
      "getenabled": {
        "name": "getEnabled",
        "url": "eventbufferevent.getenabled",
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
      "getinput": {
        "name": "getInput",
        "url": "eventbufferevent.getinput",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "EventBuffer",
          "ref": null
        }
      },
      "getoutput": {
        "name": "getOutput",
        "url": "eventbufferevent.getoutput",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "EventBuffer",
          "ref": null
        }
      },
      "read": {
        "name": "read",
        "url": "eventbufferevent.read",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size",
          "returnValue": "string",
          "ref": null
        }
      },
      "readbuffer": {
        "name": "readBuffer",
        "url": "eventbufferevent.readbuffer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBuffer $buf",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcallbacks": {
        "name": "setCallbacks",
        "url": "eventbufferevent.setcallbacks",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $readcb, callable $writecb, callable $eventcb [, string $arg ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setpriority": {
        "name": "setPriority",
        "url": "eventbufferevent.setpriority",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $priority",
          "returnValue": "bool",
          "ref": null
        }
      },
      "settimeouts": {
        "name": "setTimeouts",
        "url": "eventbufferevent.settimeouts",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $timeout_read, float $timeout_write",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setwatermark": {
        "name": "setWatermark",
        "url": "eventbufferevent.setwatermark",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $events, int $lowmark, int $highmark",
          "returnValue": "void",
          "ref": null
        }
      },
      "sslerror": {
        "name": "sslError",
        "url": "eventbufferevent.sslerror",
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
      "sslfilter": {
        "name": "sslFilter",
        "url": "eventbufferevent.sslfilter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "EventBase $base, EventBufferEvent $underlying, EventSslContext $ctx, int $state [, int $options = 0 ]",
          "returnValue": "EventBufferEvent",
          "ref": null
        }
      },
      "sslgetcipherinfo": {
        "name": "sslGetCipherInfo",
        "url": "eventbufferevent.sslgetcipherinfo",
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
      "sslgetciphername": {
        "name": "sslGetCipherName",
        "url": "eventbufferevent.sslgetciphername",
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
      "sslgetcipherversion": {
        "name": "sslGetCipherVersion",
        "url": "eventbufferevent.sslgetcipherversion",
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
      "sslgetprotocol": {
        "name": "sslGetProtocol",
        "url": "eventbufferevent.sslgetprotocol",
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
      "sslrenegotiate": {
        "name": "sslRenegotiate",
        "url": "eventbufferevent.sslrenegotiate",
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
      "sslsocket": {
        "name": "sslSocket",
        "url": "eventbufferevent.sslsocket",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "EventBase $base, mixed $socket, EventSslContext $ctx, int $state [, int $options ]",
          "returnValue": "EventBufferEvent",
          "ref": null
        }
      },
      "write": {
        "name": "write",
        "url": "eventbufferevent.write",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $data",
          "returnValue": "bool",
          "ref": null
        }
      },
      "writebuffer": {
        "name": "writeBuffer",
        "url": "eventbufferevent.writebuffer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBuffer $buf",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "eventbufferevent.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBase $base [, mixed $socket = NULL [, int $options = 0 [, callable $readcb = NULL [, callable $writecb = NULL [, callable $eventcb = NULL ]]]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "eventconfig": {
    "name": "EventConfig",
    "methods": {
      "avoidmethod": {
        "name": "avoidMethod",
        "url": "eventconfig.avoidmethod",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $method",
          "returnValue": "bool",
          "ref": null
        }
      },
      "requirefeatures": {
        "name": "requireFeatures",
        "url": "eventconfig.requirefeatures",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $feature",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setmaxdispatchinterval": {
        "name": "setMaxDispatchInterval",
        "url": "eventconfig.setmaxdispatchinterval",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $max_interval, int $max_callbacks, int $min_priority",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "eventconfig.construct",
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
  "eventdnsbase": {
    "name": "EventDnsBase",
    "methods": {
      "addnameserverip": {
        "name": "addNameserverIp",
        "url": "eventdnsbase.addnameserverip",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $ip",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addsearch": {
        "name": "addSearch",
        "url": "eventdnsbase.addsearch",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $domain",
          "returnValue": "void",
          "ref": null
        }
      },
      "clearsearch": {
        "name": "clearSearch",
        "url": "eventdnsbase.clearsearch",
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
      "countnameservers": {
        "name": "countNameservers",
        "url": "eventdnsbase.countnameservers",
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
      "loadhosts": {
        "name": "loadHosts",
        "url": "eventdnsbase.loadhosts",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $hosts",
          "returnValue": "bool",
          "ref": null
        }
      },
      "parseresolvconf": {
        "name": "parseResolvConf",
        "url": "eventdnsbase.parseresolvconf",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $flags, string $filename",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setoption": {
        "name": "setOption",
        "url": "eventdnsbase.setoption",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $option, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setsearchndots": {
        "name": "setSearchNdots",
        "url": "eventdnsbase.setsearchndots",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $ndots",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "eventdnsbase.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBase $base, bool $initialize",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "eventhttp": {
    "name": "EventHttp",
    "methods": {
      "accept": {
        "name": "accept",
        "url": "eventhttp.accept",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $socket",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addserveralias": {
        "name": "addServerAlias",
        "url": "eventhttp.addserveralias",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $alias",
          "returnValue": "bool",
          "ref": null
        }
      },
      "bind": {
        "name": "bind",
        "url": "eventhttp.bind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $address, int $port",
          "returnValue": "void",
          "ref": null
        }
      },
      "removeserveralias": {
        "name": "removeServerAlias",
        "url": "eventhttp.removeserveralias",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $alias",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setallowedmethods": {
        "name": "setAllowedMethods",
        "url": "eventhttp.setallowedmethods",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $methods",
          "returnValue": "void",
          "ref": null
        }
      },
      "setcallback": {
        "name": "setCallback",
        "url": "eventhttp.setcallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, string $cb [, string $arg ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setdefaultcallback": {
        "name": "setDefaultCallback",
        "url": "eventhttp.setdefaultcallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $cb [, string $arg ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmaxbodysize": {
        "name": "setMaxBodySize",
        "url": "eventhttp.setmaxbodysize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmaxheaderssize": {
        "name": "setMaxHeadersSize",
        "url": "eventhttp.setmaxheaderssize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "settimeout": {
        "name": "setTimeout",
        "url": "eventhttp.settimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "eventhttp.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBase $base [, EventSslContext $ctx = NULL ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "eventhttpconnection": {
    "name": "EventHttpConnection",
    "methods": {
      "getbase": {
        "name": "getBase",
        "url": "eventhttpconnection.getbase",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "EventBase",
          "ref": null
        }
      },
      "getpeer": {
        "name": "getPeer",
        "url": "eventhttpconnection.getpeer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string &$address, int &$port",
          "returnValue": "void",
          "ref": null
        }
      },
      "makerequest": {
        "name": "makeRequest",
        "url": "eventhttpconnection.makerequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventHttpRequest $req, int $type, string $uri",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setclosecallback": {
        "name": "setCloseCallback",
        "url": "eventhttpconnection.setclosecallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $callback [, mixed $data ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setlocaladdress": {
        "name": "setLocalAddress",
        "url": "eventhttpconnection.setlocaladdress",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $address",
          "returnValue": "void",
          "ref": null
        }
      },
      "setlocalport": {
        "name": "setLocalPort",
        "url": "eventhttpconnection.setlocalport",
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
      "setmaxbodysize": {
        "name": "setMaxBodySize",
        "url": "eventhttpconnection.setmaxbodysize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $max_size",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmaxheaderssize": {
        "name": "setMaxHeadersSize",
        "url": "eventhttpconnection.setmaxheaderssize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $max_size",
          "returnValue": "void",
          "ref": null
        }
      },
      "setretries": {
        "name": "setRetries",
        "url": "eventhttpconnection.setretries",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $retries",
          "returnValue": "void",
          "ref": null
        }
      },
      "settimeout": {
        "name": "setTimeout",
        "url": "eventhttpconnection.settimeout",
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
      "__construct": {
        "name": "__construct",
        "url": "eventhttpconnection.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBase $base, EventDnsBase $dns_base, string $address, int $port [, EventSslContext $ctx = NULL ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "eventhttprequest": {
    "name": "EventHttpRequest",
    "methods": {
      "addheader": {
        "name": "addHeader",
        "url": "eventhttprequest.addheader",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, string $value, int $type",
          "returnValue": "bool",
          "ref": null
        }
      },
      "cancel": {
        "name": "cancel",
        "url": "eventhttprequest.cancel",
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
      "clearheaders": {
        "name": "clearHeaders",
        "url": "eventhttprequest.clearheaders",
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
      "closeconnection": {
        "name": "closeConnection",
        "url": "eventhttprequest.closeconnection",
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
      "findheader": {
        "name": "findHeader",
        "url": "eventhttprequest.findheader",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, string $type",
          "returnValue": "void",
          "ref": null
        }
      },
      "free": {
        "name": "free",
        "url": "eventhttprequest.free",
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
      "getbufferevent": {
        "name": "getBufferEvent",
        "url": "eventhttprequest.getbufferevent",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "EventBufferEvent",
          "ref": null
        }
      },
      "getcommand": {
        "name": "getCommand",
        "url": "eventhttprequest.getcommand",
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
      "getconnection": {
        "name": "getConnection",
        "url": "eventhttprequest.getconnection",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "EventHttpConnection",
          "ref": null
        }
      },
      "gethost": {
        "name": "getHost",
        "url": "eventhttprequest.gethost",
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
      "getinputbuffer": {
        "name": "getInputBuffer",
        "url": "eventhttprequest.getinputbuffer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "EventBuffer",
          "ref": null
        }
      },
      "getinputheaders": {
        "name": "getInputHeaders",
        "url": "eventhttprequest.getinputheaders",
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
      "getoutputbuffer": {
        "name": "getOutputBuffer",
        "url": "eventhttprequest.getoutputbuffer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "EventBuffer",
          "ref": null
        }
      },
      "getoutputheaders": {
        "name": "getOutputHeaders",
        "url": "eventhttprequest.getoutputheaders",
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
      "getresponsecode": {
        "name": "getResponseCode",
        "url": "eventhttprequest.getresponsecode",
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
      "geturi": {
        "name": "getUri",
        "url": "eventhttprequest.geturi",
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
      "removeheader": {
        "name": "removeHeader",
        "url": "eventhttprequest.removeheader",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, string $type",
          "returnValue": "void",
          "ref": null
        }
      },
      "senderror": {
        "name": "sendError",
        "url": "eventhttprequest.senderror",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $error [, string $reason = NULL ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "sendreply": {
        "name": "sendReply",
        "url": "eventhttprequest.sendreply",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $code, string $reason [, EventBuffer $buf ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "sendreplychunk": {
        "name": "sendReplyChunk",
        "url": "eventhttprequest.sendreplychunk",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBuffer $buf",
          "returnValue": "void",
          "ref": null
        }
      },
      "sendreplyend": {
        "name": "sendReplyEnd",
        "url": "eventhttprequest.sendreplyend",
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
      "sendreplystart": {
        "name": "sendReplyStart",
        "url": "eventhttprequest.sendreplystart",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $code, string $reason",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "eventhttprequest.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $callback [, mixed $data = NULL ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "eventlistener": {
    "name": "EventListener",
    "methods": {
      "disable": {
        "name": "disable",
        "url": "eventlistener.disable",
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
      "enable": {
        "name": "enable",
        "url": "eventlistener.enable",
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
      "getbase": {
        "name": "getBase",
        "url": "eventlistener.getbase",
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
      "getsocketname": {
        "name": "getSocketName",
        "url": "eventlistener.getsocketname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string &$address [, mixed &$port ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcallback": {
        "name": "setCallback",
        "url": "eventlistener.setcallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $cb [, mixed $arg = NULL ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "seterrorcallback": {
        "name": "setErrorCallback",
        "url": "eventlistener.seterrorcallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $cb",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "eventlistener.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "EventBase $base, callable $cb, mixed $data, int $flags, int $backlog, mixed $target",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "eventsslcontext": {
    "name": "EventSslContext",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "eventsslcontext.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $method, string $options",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "eventutil": {
    "name": "EventUtil",
    "methods": {
      "getlastsocketerrno": {
        "name": "getLastSocketErrno",
        "url": "eventutil.getlastsocketerrno",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "[ mixed $socket = NULL ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "getlastsocketerror": {
        "name": "getLastSocketError",
        "url": "eventutil.getlastsocketerror",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "[ mixed $socket ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getsocketfd": {
        "name": "getSocketFd",
        "url": "eventutil.getsocketfd",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "mixed $socket",
          "returnValue": "int",
          "ref": null
        }
      },
      "getsocketname": {
        "name": "getSocketName",
        "url": "eventutil.getsocketname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "mixed $socket, string &$address [, mixed &$port ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setsocketoption": {
        "name": "setSocketOption",
        "url": "eventutil.setsocketoption",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "mixed $socket, int $level, int $optname, mixed $optval",
          "returnValue": "bool",
          "ref": null
        }
      },
      "sslrandpoll": {
        "name": "sslRandPoll",
        "url": "eventutil.sslrandpoll",
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
      "__construct": {
        "name": "__construct",
        "url": "eventutil.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evfork": {
    "name": "EvFork",
    "methods": {
      "createstopped": {
        "name": "createStopped",
        "url": "evfork.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "string $callback [, string $data [, string $priority ]]",
          "returnValue": "object",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "evfork.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evidle": {
    "name": "EvIdle",
    "methods": {
      "createstopped": {
        "name": "createStopped",
        "url": "evidle.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "string $callback [, mixed $data [, int $priority ]]",
          "returnValue": "object",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "evidle.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $callback [, mixed $data [, int $priority ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evio": {
    "name": "EvIo",
    "methods": {
      "createstopped": {
        "name": "createStopped",
        "url": "evio.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "mixed $fd, int $events, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvIo",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "evio.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $fd, int $events",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "evio.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $fd, int $events, callable $callback [, mixed $data [, int $priority ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evloop": {
    "name": "EvLoop",
    "methods": {
      "backend": {
        "name": "backend",
        "url": "evloop.backend",
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
      "check": {
        "name": "check",
        "url": "evloop.check",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $callback [, string $data [, string $priority ]]",
          "returnValue": "EvCheck",
          "ref": null
        }
      },
      "child": {
        "name": "child",
        "url": "evloop.child",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $pid, string $trace, string $callback [, string $data [, string $priority ]]",
          "returnValue": "EvChild",
          "ref": null
        }
      },
      "defaultloop": {
        "name": "defaultLoop",
        "url": "evloop.defaultloop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "[ int $flags = Ev::FLAG_AUTO [, mixed $data = NULL [, float $io_interval = 0. [, float $timeout_interval = 0. ]]]]",
          "returnValue": "EvLoop",
          "ref": null
        }
      },
      "embed": {
        "name": "embed",
        "url": "evloop.embed",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $other [, string $callback [, string $data [, string $priority ]]]",
          "returnValue": "EvEmbed",
          "ref": null
        }
      },
      "fork": {
        "name": "fork",
        "url": "evloop.fork",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvFork",
          "ref": null
        }
      },
      "idle": {
        "name": "idle",
        "url": "evloop.idle",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvIdle",
          "ref": null
        }
      },
      "invokepending": {
        "name": "invokePending",
        "url": "evloop.invokepending",
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
      "io": {
        "name": "io",
        "url": "evloop.io",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "mixed $fd, int $events, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvIo",
          "ref": null
        }
      },
      "loopfork": {
        "name": "loopFork",
        "url": "evloop.loopfork",
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
      "now": {
        "name": "now",
        "url": "evloop.now",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "nowupdate": {
        "name": "nowUpdate",
        "url": "evloop.nowupdate",
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
      "periodic": {
        "name": "periodic",
        "url": "evloop.periodic",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "float $offset, float $interval, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvPeriodic",
          "ref": null
        }
      },
      "prepare": {
        "name": "prepare",
        "url": "evloop.prepare",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvPrepare",
          "ref": null
        }
      },
      "resume": {
        "name": "resume",
        "url": "evloop.resume",
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
      "run": {
        "name": "run",
        "url": "evloop.run",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $flags = 0 ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "signal": {
        "name": "signal",
        "url": "evloop.signal",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "int $signum, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvSignal",
          "ref": null
        }
      },
      "stat": {
        "name": "stat",
        "url": "evloop.stat",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $path, float $interval, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvStat",
          "ref": null
        }
      },
      "stop": {
        "name": "stop",
        "url": "evloop.stop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $how ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "suspend": {
        "name": "suspend",
        "url": "evloop.suspend",
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
      "timer": {
        "name": "timer",
        "url": "evloop.timer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "float $after, float $repeat, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvTimer",
          "ref": null
        }
      },
      "verify": {
        "name": "verify",
        "url": "evloop.verify",
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
        "url": "evloop.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $flags [, mixed $data = NULL [, float $io_interval = 0.0 [, float $timeout_interval = 0.0 ]]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evperiodic": {
    "name": "EvPeriodic",
    "methods": {
      "again": {
        "name": "again",
        "url": "evperiodic.again",
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
      "at": {
        "name": "at",
        "url": "evperiodic.at",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "createstopped": {
        "name": "createStopped",
        "url": "evperiodic.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "float $offset, float $interval, callable $reschedule_cb, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvPeriodic",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "evperiodic.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $offset, float $interval",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "evperiodic.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $offset, string $interval, callable $reschedule_cb, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evprepare": {
    "name": "EvPrepare",
    "methods": {
      "createstopped": {
        "name": "createStopped",
        "url": "evprepare.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvPrepare",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "evprepare.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $callback [, string $data [, string $priority ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evsignal": {
    "name": "EvSignal",
    "methods": {
      "createstopped": {
        "name": "createStopped",
        "url": "evsignal.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "int $signum, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvSignal",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "evsignal.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $signum",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "evsignal.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $signum, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evstat": {
    "name": "EvStat",
    "methods": {
      "attr": {
        "name": "attr",
        "url": "evstat.attr",
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
      "createstopped": {
        "name": "createStopped",
        "url": "evstat.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "string $path, float $interval, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "prev": {
        "name": "prev",
        "url": "evstat.prev",
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
      "set": {
        "name": "set",
        "url": "evstat.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, float $interval",
          "returnValue": "void",
          "ref": null
        }
      },
      "stat": {
        "name": "stat",
        "url": "evstat.stat",
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
        "url": "evstat.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, float $interval, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evtimer": {
    "name": "EvTimer",
    "methods": {
      "again": {
        "name": "again",
        "url": "evtimer.again",
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
      "createstopped": {
        "name": "createStopped",
        "url": "evtimer.createstopped",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "float $after, float $repeat, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "EvTimer",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "evtimer.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $after, float $repeat",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "evtimer.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $after, float $repeat, callable $callback [, mixed $data = NULL [, int $priority = 0 ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "evwatcher": {
    "name": "EvWatcher",
    "methods": {
      "clear": {
        "name": "clear",
        "url": "evwatcher.clear",
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
      "feed": {
        "name": "feed",
        "url": "evwatcher.feed",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $revents",
          "returnValue": "void",
          "ref": null
        }
      },
      "getloop": {
        "name": "getLoop",
        "url": "evwatcher.getloop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "EvLoop",
          "ref": null
        }
      },
      "invoke": {
        "name": "invoke",
        "url": "evwatcher.invoke",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $revents",
          "returnValue": "void",
          "ref": null
        }
      },
      "keepalive": {
        "name": "keepalive",
        "url": "evwatcher.keepalive",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $value ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcallback": {
        "name": "setCallback",
        "url": "evwatcher.setcallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "callable $callback",
          "returnValue": "void",
          "ref": null
        }
      },
      "start": {
        "name": "start",
        "url": "evwatcher.start",
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
      "stop": {
        "name": "stop",
        "url": "evwatcher.stop",
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
        "url": "evwatcher.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "exception": {
    "name": "Exception",
    "methods": {
      "getcode": {
        "name": "getCode",
        "url": "exception.getcode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getfile": {
        "name": "getFile",
        "url": "exception.getfile",
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
      "getline": {
        "name": "getLine",
        "url": "exception.getline",
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
      "getmessage": {
        "name": "getMessage",
        "url": "exception.getmessage",
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
      "getprevious": {
        "name": "getPrevious",
        "url": "exception.getprevious",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Exception",
          "ref": null
        }
      },
      "gettrace": {
        "name": "getTrace",
        "url": "exception.gettrace",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "gettraceasstring": {
        "name": "getTraceAsString",
        "url": "exception.gettraceasstring",
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
      "__clone": {
        "name": "__clone",
        "url": "exception.clone",
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
        "url": "exception.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $message = \"\" [, int $code = 0 [, Throwable $previous = NULL ]]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "exception.tostring",
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
  "executable": {
    "name": "Executable",
    "methods": {
      "execute": {
        "name": "execute",
        "url": "mysql-xdevapi-executable.execute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysql_xdevapi\\Result",
          "ref": null
        }
      }
    }
  },
  "executionstatus": {
    "name": "ExecutionStatus",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mysql-xdevapi-executionstatus.construct",
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
  "expression": {
    "name": "Expression",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mysql-xdevapi-expression.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $expression",
          "returnValue": "",
          "ref": null
        }
      }
    }
  }
};
