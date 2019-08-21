classes.g = {
  gearmanclient: {
    name: "GearmanClient",
    methods: {
      addoptions: {
        name: "addOptions",
        url: "gearmanclient.addoptions",
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
      addserver: {
        name: "addServer",
        url: "gearmanclient.addserver",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $host = 127.0.0.1 [, int $port = 4730 ]]",
          returnValue: "bool",
          ref: null
        }
      },
      addservers: {
        name: "addServers",
        url: "gearmanclient.addservers",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $servers = 127.0.0.1:4730 ]",
          returnValue: "bool",
          ref: null
        }
      },
      addtask: {
        name: "addTask",
        url: "gearmanclient.addtask",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, mixed &$context [, string $unique ]]",
          returnValue: "GearmanTask",
          ref: null
        }
      },
      addtaskbackground: {
        name: "addTaskBackground",
        url: "gearmanclient.addtaskbackground",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, mixed &$context [, string $unique ]]",
          returnValue: "GearmanTask",
          ref: null
        }
      },
      addtaskhigh: {
        name: "addTaskHigh",
        url: "gearmanclient.addtaskhigh",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, mixed &$context [, string $unique ]]",
          returnValue: "GearmanTask",
          ref: null
        }
      },
      addtaskhighbackground: {
        name: "addTaskHighBackground",
        url: "gearmanclient.addtaskhighbackground",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, mixed &$context [, string $unique ]]",
          returnValue: "GearmanTask",
          ref: null
        }
      },
      addtasklow: {
        name: "addTaskLow",
        url: "gearmanclient.addtasklow",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, mixed &$context [, string $unique ]]",
          returnValue: "GearmanTask",
          ref: null
        }
      },
      addtasklowbackground: {
        name: "addTaskLowBackground",
        url: "gearmanclient.addtasklowbackground",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, mixed &$context [, string $unique ]]",
          returnValue: "GearmanTask",
          ref: null
        }
      },
      addtaskstatus: {
        name: "addTaskStatus",
        url: "gearmanclient.addtaskstatus",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $job_handle [, string &$context ]",
          returnValue: "GearmanTask",
          ref: null
        }
      },
      clearcallbacks: {
        name: "clearCallbacks",
        url: "gearmanclient.clearcallbacks",
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
      clone: {
        name: "clone",
        url: "gearmanclient.clone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "GearmanClient",
          ref: null
        }
      },
      context: {
        name: "context",
        url: "gearmanclient.context",
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
      data: {
        name: "data",
        url: "gearmanclient.data",
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
      do: {
        name: "do",
        url: "gearmanclient.do",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, string $unique ]",
          returnValue: "string",
          ref: null
        }
      },
      dobackground: {
        name: "doBackground",
        url: "gearmanclient.dobackground",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, string $unique ]",
          returnValue: "string",
          ref: null
        }
      },
      dohigh: {
        name: "doHigh",
        url: "gearmanclient.dohigh",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, string $unique ]",
          returnValue: "string",
          ref: null
        }
      },
      dohighbackground: {
        name: "doHighBackground",
        url: "gearmanclient.dohighbackground",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, string $unique ]",
          returnValue: "string",
          ref: null
        }
      },
      dojobhandle: {
        name: "doJobHandle",
        url: "gearmanclient.dojobhandle",
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
      dolow: {
        name: "doLow",
        url: "gearmanclient.dolow",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, string $unique ]",
          returnValue: "string",
          ref: null
        }
      },
      dolowbackground: {
        name: "doLowBackground",
        url: "gearmanclient.dolowbackground",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, string $unique ]",
          returnValue: "string",
          ref: null
        }
      },
      donormal: {
        name: "doNormal",
        url: "gearmanclient.donormal",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, string $workload [, string $unique ]",
          returnValue: "string",
          ref: null
        }
      },
      dostatus: {
        name: "doStatus",
        url: "gearmanclient.dostatus",
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
      echo: {
        name: "echo",
        url: "gearmanclient.echo",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $workload",
          returnValue: "bool",
          ref: null
        }
      },
      error: {
        name: "error",
        url: "gearmanclient.error",
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
      geterrno: {
        name: "getErrno",
        url: "gearmanclient.geterrno",
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
      jobstatus: {
        name: "jobStatus",
        url: "gearmanclient.jobstatus",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $job_handle",
          returnValue: "array",
          ref: null
        }
      },
      ping: {
        name: "ping",
        url: "gearmanclient.ping",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $workload",
          returnValue: "bool",
          ref: null
        }
      },
      removeoptions: {
        name: "removeOptions",
        url: "gearmanclient.removeoptions",
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
      returncode: {
        name: "returnCode",
        url: "gearmanclient.returncode",
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
      runtasks: {
        name: "runTasks",
        url: "gearmanclient.runtasks",
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
      setclientcallback: {
        name: "setClientCallback",
        url: "gearmanclient.setclientcallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback",
          returnValue: "void",
          ref: null
        }
      },
      setcompletecallback: {
        name: "setCompleteCallback",
        url: "gearmanclient.setcompletecallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback",
          returnValue: "bool",
          ref: null
        }
      },
      setcontext: {
        name: "setContext",
        url: "gearmanclient.setcontext",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $context",
          returnValue: "bool",
          ref: null
        }
      },
      setcreatedcallback: {
        name: "setCreatedCallback",
        url: "gearmanclient.setcreatedcallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $callback",
          returnValue: "bool",
          ref: null
        }
      },
      setdata: {
        name: "setData",
        url: "gearmanclient.setdata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data",
          returnValue: "bool",
          ref: null
        }
      },
      setdatacallback: {
        name: "setDataCallback",
        url: "gearmanclient.setdatacallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback",
          returnValue: "bool",
          ref: null
        }
      },
      setexceptioncallback: {
        name: "setExceptionCallback",
        url: "gearmanclient.setexceptioncallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback",
          returnValue: "bool",
          ref: null
        }
      },
      setfailcallback: {
        name: "setFailCallback",
        url: "gearmanclient.setfailcallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback",
          returnValue: "bool",
          ref: null
        }
      },
      setoptions: {
        name: "setOptions",
        url: "gearmanclient.setoptions",
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
      setstatuscallback: {
        name: "setStatusCallback",
        url: "gearmanclient.setstatuscallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback",
          returnValue: "bool",
          ref: null
        }
      },
      settimeout: {
        name: "setTimeout",
        url: "gearmanclient.settimeout",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $timeout",
          returnValue: "bool",
          ref: null
        }
      },
      setwarningcallback: {
        name: "setWarningCallback",
        url: "gearmanclient.setwarningcallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback",
          returnValue: "bool",
          ref: null
        }
      },
      setworkloadcallback: {
        name: "setWorkloadCallback",
        url: "gearmanclient.setworkloadcallback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback",
          returnValue: "bool",
          ref: null
        }
      },
      timeout: {
        name: "timeout",
        url: "gearmanclient.timeout",
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
      __construct: {
        name: "__construct",
        url: "gearmanclient.construct",
        spec: {
          isPublic: true,
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
  },
  gearmanjob: {
    name: "GearmanJob",
    methods: {
      complete: {
        name: "complete",
        url: "gearmanjob.complete",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $result",
          returnValue: "bool",
          ref: null
        }
      },
      data: {
        name: "data",
        url: "gearmanjob.data",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data",
          returnValue: "bool",
          ref: null
        }
      },
      exception: {
        name: "exception",
        url: "gearmanjob.exception",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $exception",
          returnValue: "bool",
          ref: null
        }
      },
      fail: {
        name: "fail",
        url: "gearmanjob.fail",
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
      functionname: {
        name: "functionName",
        url: "gearmanjob.functionname",
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
      handle: {
        name: "handle",
        url: "gearmanjob.handle",
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
      returncode: {
        name: "returnCode",
        url: "gearmanjob.returncode",
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
      sendcomplete: {
        name: "sendComplete",
        url: "gearmanjob.sendcomplete",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $result",
          returnValue: "bool",
          ref: null
        }
      },
      senddata: {
        name: "sendData",
        url: "gearmanjob.senddata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data",
          returnValue: "bool",
          ref: null
        }
      },
      sendexception: {
        name: "sendException",
        url: "gearmanjob.sendexception",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $exception",
          returnValue: "bool",
          ref: null
        }
      },
      sendfail: {
        name: "sendFail",
        url: "gearmanjob.sendfail",
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
      sendstatus: {
        name: "sendStatus",
        url: "gearmanjob.sendstatus",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $numerator, int $denominator",
          returnValue: "bool",
          ref: null
        }
      },
      sendwarning: {
        name: "sendWarning",
        url: "gearmanjob.sendwarning",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $warning",
          returnValue: "bool",
          ref: null
        }
      },
      setreturn: {
        name: "setReturn",
        url: "gearmanjob.setreturn",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $gearman_return_t",
          returnValue: "bool",
          ref: null
        }
      },
      status: {
        name: "status",
        url: "gearmanjob.status",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $numerator, int $denominator",
          returnValue: "bool",
          ref: null
        }
      },
      unique: {
        name: "unique",
        url: "gearmanjob.unique",
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
      warning: {
        name: "warning",
        url: "gearmanjob.warning",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $warning",
          returnValue: "bool",
          ref: null
        }
      },
      workload: {
        name: "workload",
        url: "gearmanjob.workload",
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
      workloadsize: {
        name: "workloadSize",
        url: "gearmanjob.workloadsize",
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
      __construct: {
        name: "__construct",
        url: "gearmanjob.construct",
        spec: {
          isPublic: true,
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
  },
  gearmantask: {
    name: "GearmanTask",
    methods: {
      create: {
        name: "create",
        url: "gearmantask.create",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "GearmanTask",
          ref: null
        }
      },
      data: {
        name: "data",
        url: "gearmantask.data",
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
      datasize: {
        name: "dataSize",
        url: "gearmantask.datasize",
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
      function: {
        name: "function",
        url: "gearmantask.function",
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
      functionname: {
        name: "functionName",
        url: "gearmantask.functionname",
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
      isknown: {
        name: "isKnown",
        url: "gearmantask.isknown",
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
      isrunning: {
        name: "isRunning",
        url: "gearmantask.isrunning",
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
      jobhandle: {
        name: "jobHandle",
        url: "gearmantask.jobhandle",
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
      recvdata: {
        name: "recvData",
        url: "gearmantask.recvdata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $data_len",
          returnValue: "array",
          ref: null
        }
      },
      returncode: {
        name: "returnCode",
        url: "gearmantask.returncode",
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
      senddata: {
        name: "sendData",
        url: "gearmantask.senddata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data",
          returnValue: "int",
          ref: null
        }
      },
      sendworkload: {
        name: "sendWorkload",
        url: "gearmantask.sendworkload",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data",
          returnValue: "int",
          ref: null
        }
      },
      taskdenominator: {
        name: "taskDenominator",
        url: "gearmantask.taskdenominator",
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
      tasknumerator: {
        name: "taskNumerator",
        url: "gearmantask.tasknumerator",
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
      unique: {
        name: "unique",
        url: "gearmantask.unique",
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
      uuid: {
        name: "uuid",
        url: "gearmantask.uuid",
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
        url: "gearmantask.construct",
        spec: {
          isPublic: true,
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
  },
  gearmanworker: {
    name: "GearmanWorker",
    methods: {
      addfunction: {
        name: "addFunction",
        url: "gearmanworker.addfunction",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, callable $function [, mixed &$context [, int $timeout ]]",
          returnValue: "bool",
          ref: null
        }
      },
      addoptions: {
        name: "addOptions",
        url: "gearmanworker.addoptions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $option",
          returnValue: "bool",
          ref: null
        }
      },
      addserver: {
        name: "addServer",
        url: "gearmanworker.addserver",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $host = 127.0.0.1 [, int $port = 4730 ]]",
          returnValue: "bool",
          ref: null
        }
      },
      addservers: {
        name: "addServers",
        url: "gearmanworker.addservers",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $servers = 127.0.0.1:4730",
          returnValue: "bool",
          ref: null
        }
      },
      clone: {
        name: "clone",
        url: "gearmanworker.clone",
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
      echo: {
        name: "echo",
        url: "gearmanworker.echo",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $workload",
          returnValue: "bool",
          ref: null
        }
      },
      error: {
        name: "error",
        url: "gearmanworker.error",
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
      geterrno: {
        name: "getErrno",
        url: "gearmanworker.geterrno",
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
      options: {
        name: "options",
        url: "gearmanworker.options",
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
      register: {
        name: "register",
        url: "gearmanworker.register",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name [, int $timeout ]",
          returnValue: "bool",
          ref: null
        }
      },
      removeoptions: {
        name: "removeOptions",
        url: "gearmanworker.removeoptions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $option",
          returnValue: "bool",
          ref: null
        }
      },
      returncode: {
        name: "returnCode",
        url: "gearmanworker.returncode",
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
      setid: {
        name: "setId",
        url: "gearmanworker.setid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $id",
          returnValue: "bool",
          ref: null
        }
      },
      setoptions: {
        name: "setOptions",
        url: "gearmanworker.setoptions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $option",
          returnValue: "bool",
          ref: null
        }
      },
      settimeout: {
        name: "setTimeout",
        url: "gearmanworker.settimeout",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $timeout",
          returnValue: "bool",
          ref: null
        }
      },
      timeout: {
        name: "timeout",
        url: "gearmanworker.timeout",
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
      unregister: {
        name: "unregister",
        url: "gearmanworker.unregister",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name",
          returnValue: "bool",
          ref: null
        }
      },
      unregisterall: {
        name: "unregisterAll",
        url: "gearmanworker.unregisterall",
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
        url: "gearmanworker.wait",
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
      work: {
        name: "work",
        url: "gearmanworker.work",
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
        url: "gearmanworker.construct",
        spec: {
          isPublic: true,
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
  },
  generator: {
    name: "Generator",
    methods: {
      current: {
        name: "current",
        url: "generator.current",
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
      getreturn: {
        name: "getReturn",
        url: "generator.getreturn",
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
        url: "generator.key",
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
        url: "generator.next",
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
        url: "generator.rewind",
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
      send: {
        name: "send",
        url: "generator.send",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $value",
          returnValue: "mixed",
          ref: null
        }
      },
      throw: {
        name: "throw",
        url: "generator.throw",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Throwable $exception",
          returnValue: "mixed",
          ref: null
        }
      },
      valid: {
        name: "valid",
        url: "generator.valid",
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
      __wakeup: {
        name: "__wakeup",
        url: "generator.wakeup",
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
  },
  globiterator: {
    name: "GlobIterator",
    methods: {
      count: {
        name: "count",
        url: "globiterator.count",
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
      __construct: {
        name: "__construct",
        url: "globiterator.construct",
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
  gmagick: {
    name: "Gmagick",
    methods: {
      addimage: {
        name: "addimage",
        url: "gmagick.addimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Gmagick $source",
          returnValue: "Gmagick",
          ref: null
        }
      },
      addnoiseimage: {
        name: "addnoiseimage",
        url: "gmagick.addnoiseimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $noise_type",
          returnValue: "Gmagick",
          ref: null
        }
      },
      annotateimage: {
        name: "annotateimage",
        url: "gmagick.annotateimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "GmagickDraw $GmagickDraw, float $x, float $y, float $angle, string $text",
          returnValue: "Gmagick",
          ref: null
        }
      },
      blurimage: {
        name: "blurimage",
        url: "gmagick.blurimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma [, int $channel ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      borderimage: {
        name: "borderimage",
        url: "gmagick.borderimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "GmagickPixel $color, int $width, int $height",
          returnValue: "Gmagick",
          ref: null
        }
      },
      charcoalimage: {
        name: "charcoalimage",
        url: "gmagick.charcoalimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma",
          returnValue: "Gmagick",
          ref: null
        }
      },
      chopimage: {
        name: "chopimage",
        url: "gmagick.chopimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y",
          returnValue: "Gmagick",
          ref: null
        }
      },
      clear: {
        name: "clear",
        url: "gmagick.clear",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      commentimage: {
        name: "commentimage",
        url: "gmagick.commentimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $comment",
          returnValue: "Gmagick",
          ref: null
        }
      },
      compositeimage: {
        name: "compositeimage",
        url: "gmagick.compositeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Gmagick $source, int $COMPOSE, int $x, int $y",
          returnValue: "Gmagick",
          ref: null
        }
      },
      cropimage: {
        name: "cropimage",
        url: "gmagick.cropimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y",
          returnValue: "Gmagick",
          ref: null
        }
      },
      cropthumbnailimage: {
        name: "cropthumbnailimage",
        url: "gmagick.cropthumbnailimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height",
          returnValue: "Gmagick",
          ref: null
        }
      },
      current: {
        name: "current",
        url: "gmagick.current",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      cyclecolormapimage: {
        name: "cyclecolormapimage",
        url: "gmagick.cyclecolormapimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $displace",
          returnValue: "Gmagick",
          ref: null
        }
      },
      deconstructimages: {
        name: "deconstructimages",
        url: "gmagick.deconstructimages",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      despeckleimage: {
        name: "despeckleimage",
        url: "gmagick.despeckleimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      destroy: {
        name: "destroy",
        url: "gmagick.destroy",
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
      drawimage: {
        name: "drawimage",
        url: "gmagick.drawimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "GmagickDraw $GmagickDraw",
          returnValue: "Gmagick",
          ref: null
        }
      },
      edgeimage: {
        name: "edgeimage",
        url: "gmagick.edgeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "Gmagick",
          ref: null
        }
      },
      embossimage: {
        name: "embossimage",
        url: "gmagick.embossimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma",
          returnValue: "Gmagick",
          ref: null
        }
      },
      enhanceimage: {
        name: "enhanceimage",
        url: "gmagick.enhanceimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      equalizeimage: {
        name: "equalizeimage",
        url: "gmagick.equalizeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      flipimage: {
        name: "flipimage",
        url: "gmagick.flipimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      flopimage: {
        name: "flopimage",
        url: "gmagick.flopimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      frameimage: {
        name: "frameimage",
        url: "gmagick.frameimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "GmagickPixel $color, int $width, int $height, int $inner_bevel, int $outer_bevel",
          returnValue: "Gmagick",
          ref: null
        }
      },
      gammaimage: {
        name: "gammaimage",
        url: "gmagick.gammaimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $gamma",
          returnValue: "Gmagick",
          ref: null
        }
      },
      getcopyright: {
        name: "getcopyright",
        url: "gmagick.getcopyright",
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
        name: "getfilename",
        url: "gmagick.getfilename",
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
      getimagebackgroundcolor: {
        name: "getimagebackgroundcolor",
        url: "gmagick.getimagebackgroundcolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "GmagickPixel",
          ref: null
        }
      },
      getimageblueprimary: {
        name: "getimageblueprimary",
        url: "gmagick.getimageblueprimary",
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
      getimagebordercolor: {
        name: "getimagebordercolor",
        url: "gmagick.getimagebordercolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "GmagickPixel",
          ref: null
        }
      },
      getimagechanneldepth: {
        name: "getimagechanneldepth",
        url: "gmagick.getimagechanneldepth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channel_type",
          returnValue: "int",
          ref: null
        }
      },
      getimagecolors: {
        name: "getimagecolors",
        url: "gmagick.getimagecolors",
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
      getimagecolorspace: {
        name: "getimagecolorspace",
        url: "gmagick.getimagecolorspace",
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
      getimagecompose: {
        name: "getimagecompose",
        url: "gmagick.getimagecompose",
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
      getimagedelay: {
        name: "getimagedelay",
        url: "gmagick.getimagedelay",
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
      getimagedepth: {
        name: "getimagedepth",
        url: "gmagick.getimagedepth",
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
      getimagedispose: {
        name: "getimagedispose",
        url: "gmagick.getimagedispose",
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
      getimageextrema: {
        name: "getimageextrema",
        url: "gmagick.getimageextrema",
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
      getimagefilename: {
        name: "getimagefilename",
        url: "gmagick.getimagefilename",
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
      getimageformat: {
        name: "getimageformat",
        url: "gmagick.getimageformat",
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
      getimagegamma: {
        name: "getimagegamma",
        url: "gmagick.getimagegamma",
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
      getimagegreenprimary: {
        name: "getimagegreenprimary",
        url: "gmagick.getimagegreenprimary",
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
      getimageheight: {
        name: "getimageheight",
        url: "gmagick.getimageheight",
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
      getimagehistogram: {
        name: "getimagehistogram",
        url: "gmagick.getimagehistogram",
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
      getimageindex: {
        name: "getimageindex",
        url: "gmagick.getimageindex",
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
      getimageinterlacescheme: {
        name: "getimageinterlacescheme",
        url: "gmagick.getimageinterlacescheme",
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
      getimageiterations: {
        name: "getimageiterations",
        url: "gmagick.getimageiterations",
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
      getimagematte: {
        name: "getimagematte",
        url: "gmagick.getimagematte",
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
      getimagemattecolor: {
        name: "getimagemattecolor",
        url: "gmagick.getimagemattecolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "GmagickPixel",
          ref: null
        }
      },
      getimageprofile: {
        name: "getimageprofile",
        url: "gmagick.getimageprofile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "string",
          ref: null
        }
      },
      getimageredprimary: {
        name: "getimageredprimary",
        url: "gmagick.getimageredprimary",
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
      getimagerenderingintent: {
        name: "getimagerenderingintent",
        url: "gmagick.getimagerenderingintent",
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
      getimageresolution: {
        name: "getimageresolution",
        url: "gmagick.getimageresolution",
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
      getimagescene: {
        name: "getimagescene",
        url: "gmagick.getimagescene",
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
      getimagesignature: {
        name: "getimagesignature",
        url: "gmagick.getimagesignature",
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
      getimagetype: {
        name: "getimagetype",
        url: "gmagick.getimagetype",
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
      getimageunits: {
        name: "getimageunits",
        url: "gmagick.getimageunits",
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
      getimagewhitepoint: {
        name: "getimagewhitepoint",
        url: "gmagick.getimagewhitepoint",
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
      getimagewidth: {
        name: "getimagewidth",
        url: "gmagick.getimagewidth",
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
      getpackagename: {
        name: "getpackagename",
        url: "gmagick.getpackagename",
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
      getquantumdepth: {
        name: "getquantumdepth",
        url: "gmagick.getquantumdepth",
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
      getreleasedate: {
        name: "getreleasedate",
        url: "gmagick.getreleasedate",
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
      getsamplingfactors: {
        name: "getsamplingfactors",
        url: "gmagick.getsamplingfactors",
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
      getsize: {
        name: "getsize",
        url: "gmagick.getsize",
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
      getversion: {
        name: "getversion",
        url: "gmagick.getversion",
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
      hasnextimage: {
        name: "hasnextimage",
        url: "gmagick.hasnextimage",
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
      haspreviousimage: {
        name: "haspreviousimage",
        url: "gmagick.haspreviousimage",
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
      implodeimage: {
        name: "implodeimage",
        url: "gmagick.implodeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "mixed",
          ref: null
        }
      },
      labelimage: {
        name: "labelimage",
        url: "gmagick.labelimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $label",
          returnValue: "mixed",
          ref: null
        }
      },
      levelimage: {
        name: "levelimage",
        url: "gmagick.levelimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $blackPoint, float $gamma, float $whitePoint [, int $channel = Gmagick::CHANNEL_DEFAULT ]",
          returnValue: "mixed",
          ref: null
        }
      },
      magnifyimage: {
        name: "magnifyimage",
        url: "gmagick.magnifyimage",
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
      mapimage: {
        name: "mapimage",
        url: "gmagick.mapimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "gmagick $gmagick, bool $dither",
          returnValue: "Gmagick",
          ref: null
        }
      },
      medianfilterimage: {
        name: "medianfilterimage",
        url: "gmagick.medianfilterimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "void",
          ref: null
        }
      },
      minifyimage: {
        name: "minifyimage",
        url: "gmagick.minifyimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      modulateimage: {
        name: "modulateimage",
        url: "gmagick.modulateimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $brightness, float $saturation, float $hue",
          returnValue: "Gmagick",
          ref: null
        }
      },
      motionblurimage: {
        name: "motionblurimage",
        url: "gmagick.motionblurimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma, float $angle",
          returnValue: "Gmagick",
          ref: null
        }
      },
      newimage: {
        name: "newimage",
        url: "gmagick.newimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, string $background [, string $format ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      nextimage: {
        name: "nextimage",
        url: "gmagick.nextimage",
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
      normalizeimage: {
        name: "normalizeimage",
        url: "gmagick.normalizeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $channel ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      oilpaintimage: {
        name: "oilpaintimage",
        url: "gmagick.oilpaintimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "Gmagick",
          ref: null
        }
      },
      previousimage: {
        name: "previousimage",
        url: "gmagick.previousimage",
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
      profileimage: {
        name: "profileimage",
        url: "gmagick.profileimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, string $profile",
          returnValue: "Gmagick",
          ref: null
        }
      },
      quantizeimage: {
        name: "quantizeimage",
        url: "gmagick.quantizeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $numColors, int $colorspace, int $treeDepth, bool $dither, bool $measureError",
          returnValue: "Gmagick",
          ref: null
        }
      },
      quantizeimages: {
        name: "quantizeimages",
        url: "gmagick.quantizeimages",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $numColors, int $colorspace, int $treeDepth, bool $dither, bool $measureError",
          returnValue: "Gmagick",
          ref: null
        }
      },
      queryfontmetrics: {
        name: "queryfontmetrics",
        url: "gmagick.queryfontmetrics",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "GmagickDraw $draw, string $text",
          returnValue: "array",
          ref: null
        }
      },
      queryfonts: {
        name: "queryfonts",
        url: "gmagick.queryfonts",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $pattern = \"*\" ]",
          returnValue: "array",
          ref: null
        }
      },
      queryformats: {
        name: "queryformats",
        url: "gmagick.queryformats",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $pattern = \"*\" ]",
          returnValue: "array",
          ref: null
        }
      },
      radialblurimage: {
        name: "radialblurimage",
        url: "gmagick.radialblurimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $angle [, int $channel = Gmagick::CHANNEL_DEFAULT ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      raiseimage: {
        name: "raiseimage",
        url: "gmagick.raiseimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y, bool $raise",
          returnValue: "Gmagick",
          ref: null
        }
      },
      read: {
        name: "read",
        url: "gmagick.read",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename",
          returnValue: "Gmagick",
          ref: null
        }
      },
      readimage: {
        name: "readimage",
        url: "gmagick.readimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename",
          returnValue: "Gmagick",
          ref: null
        }
      },
      readimageblob: {
        name: "readimageblob",
        url: "gmagick.readimageblob",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $imageContents [, string $filename ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      readimagefile: {
        name: "readimagefile",
        url: "gmagick.readimagefile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "resource $fp [, string $filename ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      reducenoiseimage: {
        name: "reducenoiseimage",
        url: "gmagick.reducenoiseimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "Gmagick",
          ref: null
        }
      },
      removeimage: {
        name: "removeimage",
        url: "gmagick.removeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      removeimageprofile: {
        name: "removeimageprofile",
        url: "gmagick.removeimageprofile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "string",
          ref: null
        }
      },
      resampleimage: {
        name: "resampleimage",
        url: "gmagick.resampleimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $xResolution, float $yResolution, int $filter, float $blur",
          returnValue: "Gmagick",
          ref: null
        }
      },
      resizeimage: {
        name: "resizeimage",
        url: "gmagick.resizeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $filter, float $blur [, bool $fit = FALSE ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      rollimage: {
        name: "rollimage",
        url: "gmagick.rollimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $x, int $y",
          returnValue: "Gmagick",
          ref: null
        }
      },
      rotateimage: {
        name: "rotateimage",
        url: "gmagick.rotateimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $color, float $degrees",
          returnValue: "Gmagick",
          ref: null
        }
      },
      scaleimage: {
        name: "scaleimage",
        url: "gmagick.scaleimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height [, bool $fit = FALSE ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      separateimagechannel: {
        name: "separateimagechannel",
        url: "gmagick.separateimagechannel",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channel",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setcompressionquality: {
        name: "setCompressionQuality",
        url: "gmagick.setcompressionquality",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $quality = 75",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setfilename: {
        name: "setfilename",
        url: "gmagick.setfilename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagebackgroundcolor: {
        name: "setimagebackgroundcolor",
        url: "gmagick.setimagebackgroundcolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "GmagickPixel $color",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimageblueprimary: {
        name: "setimageblueprimary",
        url: "gmagick.setimageblueprimary",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagebordercolor: {
        name: "setimagebordercolor",
        url: "gmagick.setimagebordercolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "GmagickPixel $color",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagechanneldepth: {
        name: "setimagechanneldepth",
        url: "gmagick.setimagechanneldepth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channel, int $depth",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagecolorspace: {
        name: "setimagecolorspace",
        url: "gmagick.setimagecolorspace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $colorspace",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagecompose: {
        name: "setimagecompose",
        url: "gmagick.setimagecompose",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $composite",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagedelay: {
        name: "setimagedelay",
        url: "gmagick.setimagedelay",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $delay",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagedepth: {
        name: "setimagedepth",
        url: "gmagick.setimagedepth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $depth",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagedispose: {
        name: "setimagedispose",
        url: "gmagick.setimagedispose",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $disposeType",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagefilename: {
        name: "setimagefilename",
        url: "gmagick.setimagefilename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimageformat: {
        name: "setimageformat",
        url: "gmagick.setimageformat",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $imageFormat",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagegamma: {
        name: "setimagegamma",
        url: "gmagick.setimagegamma",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $gamma",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagegreenprimary: {
        name: "setimagegreenprimary",
        url: "gmagick.setimagegreenprimary",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimageindex: {
        name: "setimageindex",
        url: "gmagick.setimageindex",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $index",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimageinterlacescheme: {
        name: "setimageinterlacescheme",
        url: "gmagick.setimageinterlacescheme",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $interlace",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimageiterations: {
        name: "setimageiterations",
        url: "gmagick.setimageiterations",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $iterations",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimageprofile: {
        name: "setimageprofile",
        url: "gmagick.setimageprofile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, string $profile",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimageredprimary: {
        name: "setimageredprimary",
        url: "gmagick.setimageredprimary",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagerenderingintent: {
        name: "setimagerenderingintent",
        url: "gmagick.setimagerenderingintent",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $rendering_intent",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimageresolution: {
        name: "setimageresolution",
        url: "gmagick.setimageresolution",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $xResolution, float $yResolution",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagescene: {
        name: "setimagescene",
        url: "gmagick.setimagescene",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $scene",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagetype: {
        name: "setimagetype",
        url: "gmagick.setimagetype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $imgType",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimageunits: {
        name: "setimageunits",
        url: "gmagick.setimageunits",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $resolution",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setimagewhitepoint: {
        name: "setimagewhitepoint",
        url: "gmagick.setimagewhitepoint",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setsamplingfactors: {
        name: "setsamplingfactors",
        url: "gmagick.setsamplingfactors",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $factors",
          returnValue: "Gmagick",
          ref: null
        }
      },
      setsize: {
        name: "setsize",
        url: "gmagick.setsize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows",
          returnValue: "Gmagick",
          ref: null
        }
      },
      shearimage: {
        name: "shearimage",
        url: "gmagick.shearimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $color, float $xShear, float $yShear",
          returnValue: "Gmagick",
          ref: null
        }
      },
      solarizeimage: {
        name: "solarizeimage",
        url: "gmagick.solarizeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $threshold",
          returnValue: "Gmagick",
          ref: null
        }
      },
      spreadimage: {
        name: "spreadimage",
        url: "gmagick.spreadimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "Gmagick",
          ref: null
        }
      },
      stripimage: {
        name: "stripimage",
        url: "gmagick.stripimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Gmagick",
          ref: null
        }
      },
      swirlimage: {
        name: "swirlimage",
        url: "gmagick.swirlimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $degrees",
          returnValue: "Gmagick",
          ref: null
        }
      },
      thumbnailimage: {
        name: "thumbnailimage",
        url: "gmagick.thumbnailimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height [, bool $fit = FALSE ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      trimimage: {
        name: "trimimage",
        url: "gmagick.trimimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $fuzz",
          returnValue: "Gmagick",
          ref: null
        }
      },
      write: {
        name: "write",
        url: "gmagick.write",
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
      writeimage: {
        name: "writeimage",
        url: "gmagick.writeimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename [, bool $all_frames = FALSE ]",
          returnValue: "Gmagick",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "gmagick.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $filename ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  gmagickdraw: {
    name: "GmagickDraw",
    methods: {
      annotate: {
        name: "annotate",
        url: "gmagickdraw.annotate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y, string $text",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      arc: {
        name: "arc",
        url: "gmagickdraw.arc",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $sx, float $sy, float $ex, float $ey, float $sd, float $ed",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      bezier: {
        name: "bezier",
        url: "gmagickdraw.bezier",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $coordinate_array",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      ellipse: {
        name: "ellipse",
        url: "gmagickdraw.ellipse",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $ox, float $oy, float $rx, float $ry, float $start, float $end",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      getfillcolor: {
        name: "getfillcolor",
        url: "gmagickdraw.getfillcolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "GmagickPixel",
          ref: null
        }
      },
      getfillopacity: {
        name: "getfillopacity",
        url: "gmagickdraw.getfillopacity",
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
      getfont: {
        name: "getfont",
        url: "gmagickdraw.getfont",
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
      getfontsize: {
        name: "getfontsize",
        url: "gmagickdraw.getfontsize",
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
      getfontstyle: {
        name: "getfontstyle",
        url: "gmagickdraw.getfontstyle",
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
      getfontweight: {
        name: "getfontweight",
        url: "gmagickdraw.getfontweight",
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
      getstrokecolor: {
        name: "getstrokecolor",
        url: "gmagickdraw.getstrokecolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "GmagickPixel",
          ref: null
        }
      },
      getstrokeopacity: {
        name: "getstrokeopacity",
        url: "gmagickdraw.getstrokeopacity",
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
      getstrokewidth: {
        name: "getstrokewidth",
        url: "gmagickdraw.getstrokewidth",
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
      gettextdecoration: {
        name: "gettextdecoration",
        url: "gmagickdraw.gettextdecoration",
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
      gettextencoding: {
        name: "gettextencoding",
        url: "gmagickdraw.gettextencoding",
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
      line: {
        name: "line",
        url: "gmagickdraw.line",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $sx, float $sy, float $ex, float $ey",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      point: {
        name: "point",
        url: "gmagickdraw.point",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      polygon: {
        name: "polygon",
        url: "gmagickdraw.polygon",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $coordinates",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      polyline: {
        name: "polyline",
        url: "gmagickdraw.polyline",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $coordinate_array",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      rectangle: {
        name: "rectangle",
        url: "gmagickdraw.rectangle",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x2, float $y2",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      rotate: {
        name: "rotate",
        url: "gmagickdraw.rotate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $degrees",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      roundrectangle: {
        name: "roundrectangle",
        url: "gmagickdraw.roundrectangle",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x2, float $y2, float $rx, float $ry",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      scale: {
        name: "scale",
        url: "gmagickdraw.scale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      setfillcolor: {
        name: "setfillcolor",
        url: "gmagickdraw.setfillcolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $color",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      setfillopacity: {
        name: "setfillopacity",
        url: "gmagickdraw.setfillopacity",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $fill_opacity",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      setfont: {
        name: "setfont",
        url: "gmagickdraw.setfont",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $font",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      setfontsize: {
        name: "setfontsize",
        url: "gmagickdraw.setfontsize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $pointsize",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      setfontstyle: {
        name: "setfontstyle",
        url: "gmagickdraw.setfontstyle",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $style",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      setfontweight: {
        name: "setfontweight",
        url: "gmagickdraw.setfontweight",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $weight",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      setstrokecolor: {
        name: "setstrokecolor",
        url: "gmagickdraw.setstrokecolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $color",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      setstrokeopacity: {
        name: "setstrokeopacity",
        url: "gmagickdraw.setstrokeopacity",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $stroke_opacity",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      setstrokewidth: {
        name: "setstrokewidth",
        url: "gmagickdraw.setstrokewidth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $width",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      settextdecoration: {
        name: "settextdecoration",
        url: "gmagickdraw.settextdecoration",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $decoration",
          returnValue: "GmagickDraw",
          ref: null
        }
      },
      settextencoding: {
        name: "settextencoding",
        url: "gmagickdraw.settextencoding",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $encoding",
          returnValue: "GmagickDraw",
          ref: null
        }
      }
    }
  },
  gmagickpixel: {
    name: "GmagickPixel",
    methods: {
      getcolor: {
        name: "getcolor",
        url: "gmagickpixel.getcolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ bool $as_array = FALSE [, bool $normalize_array = FALSE ]]",
          returnValue: "mixed",
          ref: null
        }
      },
      getcolorcount: {
        name: "getcolorcount",
        url: "gmagickpixel.getcolorcount",
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
      getcolorvalue: {
        name: "getcolorvalue",
        url: "gmagickpixel.getcolorvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $color",
          returnValue: "float",
          ref: null
        }
      },
      setcolor: {
        name: "setcolor",
        url: "gmagickpixel.setcolor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $color",
          returnValue: "GmagickPixel",
          ref: null
        }
      },
      setcolorvalue: {
        name: "setcolorvalue",
        url: "gmagickpixel.setcolorvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $color, float $value",
          returnValue: "GmagickPixel",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "gmagickpixel.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $color ]",
          returnValue: "",
          ref: null
        }
      }
    }
  }
};
