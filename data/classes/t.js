classes.t = {
  table: {
    name: "Table",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      count: {
        name: "count",
        url: "mysql-xdevapi-table.count",
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
      delete: {
        name: "delete",
        url: "mysql-xdevapi-table.delete",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\TableDelete",
          ref: null
        }
      },
      existsindatabase: {
        name: "existsInDatabase",
        url: "mysql-xdevapi-table.existsindatabase",
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
      getname: {
        name: "getName",
        url: "mysql-xdevapi-table.getname",
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
      getschema: {
        name: "getSchema",
        url: "mysql-xdevapi-table.getschema",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\Schema",
          ref: null
        }
      },
      getsession: {
        name: "getSession",
        url: "mysql-xdevapi-table.getsession",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\Session",
          ref: null
        }
      },
      insert: {
        name: "insert",
        url: "mysql-xdevapi-table.insert",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $columns [, mixed $... ]",
          returnValue: "mysql_xdevapi\\TableInsert",
          ref: null
        }
      },
      isview: {
        name: "isView",
        url: "mysql-xdevapi-table.isview",
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
      select: {
        name: "select",
        url: "mysql-xdevapi-table.select",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $columns [, mixed $... ]",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      update: {
        name: "update",
        url: "mysql-xdevapi-table.update",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\TableUpdate",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-table.construct",
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
  tabledelete: {
    name: "TableDelete",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      bind: {
        name: "bind",
        url: "mysql-xdevapi-tabledelete.bind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $placeholder_values",
          returnValue: "mysql_xdevapi\\TableDelete",
          ref: null
        }
      },
      execute: {
        name: "execute",
        url: "mysql-xdevapi-tabledelete.execute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\Result",
          ref: null
        }
      },
      limit: {
        name: "limit",
        url: "mysql-xdevapi-tabledelete.limit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $rows",
          returnValue: "mysql_xdevapi\\TableDelete",
          ref: null
        }
      },
      orderby: {
        name: "orderby",
        url: "mysql-xdevapi-tabledelete.orderby",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $orderby_expr",
          returnValue: "mysql_xdevapi\\TableDelete",
          ref: null
        }
      },
      where: {
        name: "where",
        url: "mysql-xdevapi-tabledelete.where",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $where_expr",
          returnValue: "mysql_xdevapi\\TableDelete",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-tabledelete.construct",
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
  tableinsert: {
    name: "TableInsert",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      execute: {
        name: "execute",
        url: "mysql-xdevapi-tableinsert.execute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\Result",
          ref: null
        }
      },
      values: {
        name: "values",
        url: "mysql-xdevapi-tableinsert.values",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $row_values",
          returnValue: "mysql_xdevapi\\TableInsert",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-tableinsert.construct",
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
  tableselect: {
    name: "TableSelect",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      bind: {
        name: "bind",
        url: "mysql-xdevapi-tableselect.bind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $placeholder_values",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      execute: {
        name: "execute",
        url: "mysql-xdevapi-tableselect.execute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\RowResult",
          ref: null
        }
      },
      groupby: {
        name: "groupBy",
        url: "mysql-xdevapi-tableselect.groupby",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $sort_expr",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      having: {
        name: "having",
        url: "mysql-xdevapi-tableselect.having",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $sort_expr",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      limit: {
        name: "limit",
        url: "mysql-xdevapi-tableselect.limit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $rows",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      lockexclusive: {
        name: "lockExclusive",
        url: "mysql-xdevapi-tableselect.lockexclusive",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ integer $lock_waiting_option ]",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      lockshared: {
        name: "lockShared",
        url: "mysql-xdevapi-tableselect.lockshared",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ integer $lock_waiting_option ]",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      offset: {
        name: "offset",
        url: "mysql-xdevapi-tableselect.offset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $position",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      orderby: {
        name: "orderby",
        url: "mysql-xdevapi-tableselect.orderby",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $sort_expr [, mixed $... ]",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      where: {
        name: "where",
        url: "mysql-xdevapi-tableselect.where",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $where_expr",
          returnValue: "mysql_xdevapi\\TableSelect",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-tableselect.construct",
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
  tableupdate: {
    name: "TableUpdate",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      bind: {
        name: "bind",
        url: "mysql-xdevapi-tableupdate.bind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $placeholder_values",
          returnValue: "mysql_xdevapi\\TableUpdate",
          ref: null
        }
      },
      execute: {
        name: "execute",
        url: "mysql-xdevapi-tableupdate.execute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\TableUpdate",
          ref: null
        }
      },
      limit: {
        name: "limit",
        url: "mysql-xdevapi-tableupdate.limit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $rows",
          returnValue: "mysql_xdevapi\\TableUpdate",
          ref: null
        }
      },
      orderby: {
        name: "orderby",
        url: "mysql-xdevapi-tableupdate.orderby",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $orderby_expr [, mixed $... ]",
          returnValue: "mysql_xdevapi\\TableUpdate",
          ref: null
        }
      },
      set: {
        name: "set",
        url: "mysql-xdevapi-tableupdate.set",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $table_field, string $expression_or_literal",
          returnValue: "mysql_xdevapi\\TableUpdate",
          ref: null
        }
      },
      where: {
        name: "where",
        url: "mysql-xdevapi-tableupdate.where",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $where_expr",
          returnValue: "mysql_xdevapi\\TableUpdate",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-tableupdate.construct",
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
  thread: {
    name: "Thread",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      detach: {
        name: "detach",
        url: "thread.detach",
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
      getcreatorid: {
        name: "getCreatorId",
        url: "thread.getcreatorid",
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
      getcurrentthread: {
        name: "getCurrentThread",
        url: "thread.getcurrentthread",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "Thread",
          ref: null
        }
      },
      getcurrentthreadid: {
        name: "getCurrentThreadId",
        url: "thread.getcurrentthreadid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getthreadid: {
        name: "getThreadId",
        url: "thread.getthreadid",
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
      globally: {
        name: "globally",
        url: "thread.globally",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      isjoined: {
        name: "isJoined",
        url: "thread.isjoined",
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
      isstarted: {
        name: "isStarted",
        url: "thread.isstarted",
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
      join: {
        name: "join",
        url: "thread.join",
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
      kill: {
        name: "kill",
        url: "thread.kill",
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
      start: {
        name: "start",
        url: "thread.start",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $options ]",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.thread",
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
  threaded: {
    name: "Threaded",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      chunk: {
        name: "chunk",
        url: "threaded.chunk",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $size, bool $preserve",
          returnValue: "array",
          ref: null
        }
      },
      count: {
        name: "count",
        url: "threaded.count",
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
      extend: {
        name: "extend",
        url: "threaded.extend",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $class",
          returnValue: "bool",
          ref: null
        }
      },
      from: {
        name: "from",
        url: "threaded.from",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Closure $run [, Closure $construct [, array $args ]]",
          returnValue: "Threaded",
          ref: null
        }
      },
      getterminationinfo: {
        name: "getTerminationInfo",
        url: "threaded.getterminationinfo",
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
      isrunning: {
        name: "isRunning",
        url: "thread.isrunning",
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
      isterminated: {
        name: "isTerminated",
        url: "threaded.isterminated",
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
      iswaiting: {
        name: "isWaiting",
        url: "threaded.iswaiting",
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
      lock: {
        name: "lock",
        url: "threaded.lock",
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
      merge: {
        name: "merge",
        url: "threaded.merge",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $from [, bool $overwrite ]",
          returnValue: "bool",
          ref: null
        }
      },
      notify: {
        name: "notify",
        url: "threaded.notify",
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
      notifyone: {
        name: "notifyOne",
        url: "threaded.notifyone",
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
      pop: {
        name: "pop",
        url: "threaded.pop",
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
      run: {
        name: "run",
        url: "threaded.run",
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
      shift: {
        name: "shift",
        url: "threaded.shift",
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
      synchronized: {
        name: "synchronized",
        url: "threaded.synchronized",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Closure $block [, mixed $... ]",
          returnValue: "mixed",
          ref: null
        }
      },
      unlock: {
        name: "unlock",
        url: "threaded.unlock",
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
      wait: {
        name: "wait",
        url: "threaded.wait",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $timeout ]",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.threaded",
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
  throwable: {
    name: "Throwable",
    isClass: false,
    isInterface: true,
    isTrait: false,
    methods: {
      getcode: {
        name: "getCode",
        url: "throwable.getcode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getfile: {
        name: "getFile",
        url: "throwable.getfile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getline: {
        name: "getLine",
        url: "throwable.getline",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getmessage: {
        name: "getMessage",
        url: "throwable.getmessage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getprevious: {
        name: "getPrevious",
        url: "throwable.getprevious",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Throwable",
          ref: null
        }
      },
      gettrace: {
        name: "getTrace",
        url: "throwable.gettrace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      gettraceasstring: {
        name: "getTraceAsString",
        url: "throwable.gettraceasstring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "throwable.tostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.throwable",
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
  tidy: {
    name: "tidy",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      body: {
        name: "body",
        url: "tidy.body",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "tidyNode",
          ref: null
        }
      },
      cleanrepair: {
        name: "cleanRepair",
        url: "tidy.cleanrepair",
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
      diagnose: {
        name: "diagnose",
        url: "tidy.diagnose",
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
      getconfig: {
        name: "getConfig",
        url: "tidy.getconfig",
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
      gethtmlver: {
        name: "getHtmlVer",
        url: "tidy.gethtmlver",
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
      getopt: {
        name: "getOpt",
        url: "tidy.getopt",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $option",
          returnValue: "mixed",
          ref: null
        }
      },
      getoptdoc: {
        name: "getOptDoc",
        url: "tidy.getoptdoc",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $optname",
          returnValue: "string",
          ref: null
        }
      },
      getrelease: {
        name: "getRelease",
        url: "tidy.getrelease",
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
      getstatus: {
        name: "getStatus",
        url: "tidy.getstatus",
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
      head: {
        name: "head",
        url: "tidy.head",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "tidyNode",
          ref: null
        }
      },
      html: {
        name: "html",
        url: "tidy",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "tidyNode",
          ref: null
        }
      },
      isxhtml: {
        name: "isXhtml",
        url: "tidy.isxhtml",
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
      isxml: {
        name: "isXml",
        url: "tidy.isxml",
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
      parsefile: {
        name: "parseFile",
        url: "tidy.parsefile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename [, mixed $config [, string $encoding [, bool $use_include_path = FALSE ]]]",
          returnValue: "bool",
          ref: null
        }
      },
      parsestring: {
        name: "parseString",
        url: "tidy.parsestring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $input [, mixed $config [, string $encoding ]]",
          returnValue: "bool",
          ref: null
        }
      },
      repairfile: {
        name: "repairFile",
        url: "tidy.repairfile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename [, mixed $config [, string $encoding [, bool $use_include_path = FALSE ]]]",
          returnValue: "string",
          ref: null
        }
      },
      repairstring: {
        name: "repairString",
        url: "tidy.repairstring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data [, mixed $config [, string $encoding ]]",
          returnValue: "string",
          ref: null
        }
      },
      root: {
        name: "root",
        url: "tidy.root",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "tidyNode",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "tidy.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $filename [, mixed $config [, string $encoding [, bool $use_include_path ]]]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  tidynode: {
    name: "tidyNode",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getparent: {
        name: "getParent",
        url: "tidynode.getparent",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "tidyNode",
          ref: null
        }
      },
      haschildren: {
        name: "hasChildren",
        url: "tidynode.haschildren",
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
      hassiblings: {
        name: "hasSiblings",
        url: "tidynode.hassiblings",
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
      isasp: {
        name: "isAsp",
        url: "tidynode.isasp",
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
      iscomment: {
        name: "isComment",
        url: "tidynode.iscomment",
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
      ishtml: {
        name: "isHtml",
        url: "tidynode.ishtml",
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
      isjste: {
        name: "isJste",
        url: "tidynode.isjste",
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
      isphp: {
        name: "isPhp",
        url: "tidynode.isphp",
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
      istext: {
        name: "isText",
        url: "tidynode.istext",
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
        url: "tidynode.construct",
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
  tokyotyrant: {
    name: "TokyoTyrant",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      add: {
        name: "add",
        url: "tokyotyrant.add",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key, number $increment [, int $type = 0 ]",
          returnValue: "number",
          ref: null
        }
      },
      connect: {
        name: "connect",
        url: "tokyotyrant.connect",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $host [, int $port = TokyoTyrant::RDBDEF_PORT [, array $options ]]",
          returnValue: "TokyoTyrant",
          ref: null
        }
      },
      connecturi: {
        name: "connectUri",
        url: "tokyotyrant.connecturi",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $uri",
          returnValue: "TokyoTyrant",
          ref: null
        }
      },
      copy: {
        name: "copy",
        url: "tokyotyrant.copy",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path",
          returnValue: "TokyoTyrant",
          ref: null
        }
      },
      ext: {
        name: "ext",
        url: "tokyotyrant.ext",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, int $options, string $key, string $value",
          returnValue: "string",
          ref: null
        }
      },
      fwmkeys: {
        name: "fwmKeys",
        url: "tokyotyrant.fwmkeys",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $prefix, int $max_recs",
          returnValue: "array",
          ref: null
        }
      },
      get: {
        name: "get",
        url: "tokyotyrant.get",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $keys",
          returnValue: "mixed",
          ref: null
        }
      },
      getiterator: {
        name: "getIterator",
        url: "tokyotyrant.getiterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "TokyoTyrantIterator",
          ref: null
        }
      },
      num: {
        name: "num",
        url: "tokyotyrant.num",
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
      out: {
        name: "out",
        url: "tokyotyrant.out",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $keys",
          returnValue: "TokyoTyrant",
          ref: null
        }
      },
      put: {
        name: "put",
        url: "tokyotyrant.put",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $keys [, string $value = NULL ]",
          returnValue: "TokyoTyrant",
          ref: null
        }
      },
      putcat: {
        name: "putCat",
        url: "tokyotyrant.putcat",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $keys [, string $value ]",
          returnValue: "TokyoTyrant",
          ref: null
        }
      },
      putkeep: {
        name: "putKeep",
        url: "tokyotyrant.putkeep",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $keys [, string $value ]",
          returnValue: "TokyoTyrant",
          ref: null
        }
      },
      putnr: {
        name: "putNr",
        url: "tokyotyrant.putnr",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $keys [, string $value = NULL ]",
          returnValue: "TokyoTyrant",
          ref: null
        }
      },
      putshl: {
        name: "putShl",
        url: "tokyotyrant.putshl",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key, string $value, int $width",
          returnValue: "mixed",
          ref: null
        }
      },
      restore: {
        name: "restore",
        url: "tokyotyrant.restore",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $log_dir, int $timestamp [, bool $check_consistency = TRUE ]",
          returnValue: "mixed",
          ref: null
        }
      },
      setmaster: {
        name: "setMaster",
        url: "tokyotyrant.setmaster",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $host, int $port, int $timestamp [, bool $check_consistency = TRUE ]",
          returnValue: "mixed",
          ref: null
        }
      },
      size: {
        name: "size",
        url: "tokyotyrant.size",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key",
          returnValue: "int",
          ref: null
        }
      },
      stat: {
        name: "stat",
        url: "tokyotyrant.stat",
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
      sync: {
        name: "sync",
        url: "tokyotyrant.sync",
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
      tune: {
        name: "tune",
        url: "tokyotyrant.tune",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $timeout [, int $options = TokyoTyrant::RDBT_RECON ]",
          returnValue: "TokyoTyrant",
          ref: null
        }
      },
      vanish: {
        name: "vanish",
        url: "tokyotyrant.vanish",
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
      __construct: {
        name: "__construct",
        url: "tokyotyrant.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $host [, int $port = TokyoTyrant::RDBDEF_PORT [, array $options ]]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  tokyotyrantiterator: {
    name: "TokyoTyrantIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      current: {
        name: "current",
        url: "tokyotyrantiterator.current",
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
      key: {
        name: "key",
        url: "tokyotyrantiterator.key",
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
        url: "tokyotyrantiterator.next",
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
      rewind: {
        name: "rewind",
        url: "tokyotyrantiterator.rewind",
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
        url: "tokyotyrantiterator.valid",
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
        url: "tokyotyrantiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $object",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  tokyotyrantquery: {
    name: "TokyoTyrantQuery",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      addcond: {
        name: "addCond",
        url: "tokyotyrantquery.addcond",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, int $op, string $expr",
          returnValue: "mixed",
          ref: null
        }
      },
      count: {
        name: "count",
        url: "tokyotyrantquery.count",
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
      current: {
        name: "current",
        url: "tokyotyrantquery.current",
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
      hint: {
        name: "hint",
        url: "tokyotyrantquery.hint",
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
        url: "tokyotyrantquery.key",
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
      metasearch: {
        name: "metaSearch",
        url: "tokyotyrantquery.metasearch",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $queries, int $type",
          returnValue: "array",
          ref: null
        }
      },
      next: {
        name: "next",
        url: "tokyotyrantquery.next",
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
      out: {
        name: "out",
        url: "tokyotyrantquery.out",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "TokyoTyrantQuery",
          ref: null
        }
      },
      rewind: {
        name: "rewind",
        url: "tokyotyrantquery.rewind",
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
      search: {
        name: "search",
        url: "tokyotyrantquery.search",
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
      setlimit: {
        name: "setLimit",
        url: "tokyotyrantquery.setlimit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $max [, int $skip ]]",
          returnValue: "mixed",
          ref: null
        }
      },
      setorder: {
        name: "setOrder",
        url: "tokyotyrantquery.setorder",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, int $type",
          returnValue: "mixed",
          ref: null
        }
      },
      valid: {
        name: "valid",
        url: "tokyotyrantquery.valid",
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
        url: "tokyotyrantquery.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "TokyoTyrantTable $table",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  tokyotyranttable: {
    name: "TokyoTyrantTable",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      add: {
        name: "add",
        url: "tokyotyranttable.add",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key, mixed $increment [, string $type ]",
          returnValue: "void",
          ref: null
        }
      },
      genuid: {
        name: "genUid",
        url: "tokyotyranttable.genuid",
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
      get: {
        name: "get",
        url: "tokyotyranttable.get",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $keys",
          returnValue: "array",
          ref: null
        }
      },
      getiterator: {
        name: "getIterator",
        url: "tokyotyranttable.getiterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "TokyoTyrantIterator",
          ref: null
        }
      },
      getquery: {
        name: "getQuery",
        url: "tokyotyranttable.getquery",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "TokyoTyrantQuery",
          ref: null
        }
      },
      out: {
        name: "out",
        url: "tokyotyranttable.out",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $keys",
          returnValue: "void",
          ref: null
        }
      },
      put: {
        name: "put",
        url: "tokyotyranttable.put",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key, array $columns",
          returnValue: "int",
          ref: null
        }
      },
      putcat: {
        name: "putCat",
        url: "tokyotyranttable.putcat",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key, array $columns",
          returnValue: "void",
          ref: null
        }
      },
      putkeep: {
        name: "putKeep",
        url: "tokyotyranttable.putkeep",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key, array $columns",
          returnValue: "void",
          ref: null
        }
      },
      putnr: {
        name: "putNr",
        url: "tokyotyranttable.putnr",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $keys [, string $value ]",
          returnValue: "void",
          ref: null
        }
      },
      putshl: {
        name: "putShl",
        url: "tokyotyranttable.putshl",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key, string $value, int $width",
          returnValue: "void",
          ref: null
        }
      },
      setindex: {
        name: "setIndex",
        url: "tokyotyranttable.setindex",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $column, int $type",
          returnValue: "mixed",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.tokyotyranttable",
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
  transliterator: {
    name: "Transliterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      create: {
        name: "create",
        url: "transliterator.create",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $id [, int $direction ]",
          returnValue: "Transliterator",
          ref: null
        }
      },
      createfromrules: {
        name: "createFromRules",
        url: "transliterator.createfromrules",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $rules [, string $direction ]",
          returnValue: "Transliterator",
          ref: null
        }
      },
      createinverse: {
        name: "createInverse",
        url: "transliterator.createinverse",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Transliterator",
          ref: null
        }
      },
      geterrorcode: {
        name: "getErrorCode",
        url: "transliterator.geterrorcode",
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
        url: "transliterator.geterrormessage",
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
      listids: {
        name: "listIDs",
        url: "transliterator.listids",
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
      transliterate: {
        name: "transliterate",
        url: "transliterator.transliterate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $subject [, int $start [, int $end ]]",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "transliterator.construct",
        spec: {
          isPublic: false,
          isPrivate: false,
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
  }
};
