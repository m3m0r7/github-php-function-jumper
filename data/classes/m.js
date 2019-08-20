classes.m = {
  "memcache": {
    "name": "Memcache",
    "methods": {
      "add": {
        "name": "add",
        "url": "memcache.add",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, mixed $var [, int $flag [, int $expire ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addserver": {
        "name": "addServer",
        "url": "memcache.addserver",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $host [, int $port = 11211 [, bool $persistent [, int $weight [, int $timeout [, int $retry_interval [, bool $status [, callable $failure_callback [, int $timeoutms ]]]]]]]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "close": {
        "name": "close",
        "url": "memcache.close",
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
      "connect": {
        "name": "connect",
        "url": "memcache.connect",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $host [, int $port [, int $timeout ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "decrement": {
        "name": "decrement",
        "url": "memcache.decrement",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key [, int $value = 1 ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "delete": {
        "name": "delete",
        "url": "memcache.delete",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key [, int $timeout = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "flush": {
        "name": "flush",
        "url": "memcache.flush",
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
      "get": {
        "name": "get",
        "url": "memcache.get",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key [, int &$flags ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getextendedstats": {
        "name": "getExtendedStats",
        "url": "memcache.getextendedstats",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $type [, int $slabid [, int $limit = 100 ]]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getserverstatus": {
        "name": "getServerStatus",
        "url": "memcache.getserverstatus",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $host [, int $port = 11211 ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "getstats": {
        "name": "getStats",
        "url": "memcache.getstats",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $type [, int $slabid [, int $limit = 100 ]]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getversion": {
        "name": "getVersion",
        "url": "memcache.getversion",
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
      "increment": {
        "name": "increment",
        "url": "memcache.increment",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key [, int $value = 1 ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "pconnect": {
        "name": "pconnect",
        "url": "memcache.pconnect",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $host [, int $port [, int $timeout ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "replace": {
        "name": "replace",
        "url": "memcache.replace",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, mixed $var [, int $flag [, int $expire ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "memcache.set",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, mixed $var [, int $flag [, int $expire ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcompressthreshold": {
        "name": "setCompressThreshold",
        "url": "memcache.setcompressthreshold",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $threshold [, float $min_savings ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setserverparams": {
        "name": "setServerParams",
        "url": "memcache.setserverparams",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $host [, int $port = 11211 [, int $timeout [, int $retry_interval = FALSE [, bool $status [, callable $failure_callback ]]]]]",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "memcached": {
    "name": "Memcached",
    "methods": {
      "add": {
        "name": "add",
        "url": "memcached.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, mixed $value [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addbykey": {
        "name": "addByKey",
        "url": "memcached.addbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key, mixed $value [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addserver": {
        "name": "addServer",
        "url": "memcached.addserver",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $host, int $port [, int $weight = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "addservers": {
        "name": "addServers",
        "url": "memcached.addservers",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $servers",
          "returnValue": "bool",
          "ref": null
        }
      },
      "append": {
        "name": "append",
        "url": "memcached.append",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "appendbykey": {
        "name": "appendByKey",
        "url": "memcached.appendbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "cas": {
        "name": "cas",
        "url": "memcached.cas",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $cas_token, string $key, mixed $value [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "casbykey": {
        "name": "casByKey",
        "url": "memcached.casbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $cas_token, string $server_key, string $key, mixed $value [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "decrement": {
        "name": "decrement",
        "url": "memcached.decrement",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key [, int $offset = 1 [, int $initial_value = 0 [, int $expiry = 0 ]]]",
          "returnValue": "int",
          "ref": null
        }
      },
      "decrementbykey": {
        "name": "decrementByKey",
        "url": "memcached.decrementbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key [, int $offset = 1 [, int $initial_value = 0 [, int $expiry = 0 ]]]",
          "returnValue": "int",
          "ref": null
        }
      },
      "delete": {
        "name": "delete",
        "url": "memcached.delete",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key [, int $time = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "deletebykey": {
        "name": "deleteByKey",
        "url": "memcached.deletebykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key [, int $time = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "deletemulti": {
        "name": "deleteMulti",
        "url": "memcached.deletemulti",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $keys [, int $time = 0 ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "deletemultibykey": {
        "name": "deleteMultiByKey",
        "url": "memcached.deletemultibykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, array $keys [, int $time = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "fetch": {
        "name": "fetch",
        "url": "memcached.fetch",
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
      "fetchall": {
        "name": "fetchAll",
        "url": "memcached.fetchall",
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
      "flush": {
        "name": "flush",
        "url": "memcached.flush",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $delay = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "memcached.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key [, callable $cache_cb [, int $$flags ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getallkeys": {
        "name": "getAllKeys",
        "url": "memcached.getallkeys",
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
      "getbykey": {
        "name": "getByKey",
        "url": "memcached.getbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key [, callable $cache_cb [, int $flags ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getdelayed": {
        "name": "getDelayed",
        "url": "memcached.getdelayed",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $keys [, bool $with_cas [, callable $value_cb ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getdelayedbykey": {
        "name": "getDelayedByKey",
        "url": "memcached.getdelayedbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, array $keys [, bool $with_cas [, callable $value_cb ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getmulti": {
        "name": "getMulti",
        "url": "memcached.getmulti",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $keys [, int $flags ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getmultibykey": {
        "name": "getMultiByKey",
        "url": "memcached.getmultibykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, array $keys [, int $flags ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getoption": {
        "name": "getOption",
        "url": "memcached.getoption",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $option",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getresultcode": {
        "name": "getResultCode",
        "url": "memcached.getresultcode",
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
      "getresultmessage": {
        "name": "getResultMessage",
        "url": "memcached.getresultmessage",
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
      "getserverbykey": {
        "name": "getServerByKey",
        "url": "memcached.getserverbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key",
          "returnValue": "array",
          "ref": null
        }
      },
      "getserverlist": {
        "name": "getServerList",
        "url": "memcached.getserverlist",
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
      "getstats": {
        "name": "getStats",
        "url": "memcached.getstats",
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
      "getversion": {
        "name": "getVersion",
        "url": "memcached.getversion",
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
      "increment": {
        "name": "increment",
        "url": "memcached.increment",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key [, int $offset = 1 [, int $initial_value = 0 [, int $expiry = 0 ]]]",
          "returnValue": "int",
          "ref": null
        }
      },
      "incrementbykey": {
        "name": "incrementByKey",
        "url": "memcached.incrementbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key [, int $offset = 1 [, int $initial_value = 0 [, int $expiry = 0 ]]]",
          "returnValue": "int",
          "ref": null
        }
      },
      "ispersistent": {
        "name": "isPersistent",
        "url": "memcached.ispersistent",
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
      "ispristine": {
        "name": "isPristine",
        "url": "memcached.ispristine",
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
      "prepend": {
        "name": "prepend",
        "url": "memcached.prepend",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "prependbykey": {
        "name": "prependByKey",
        "url": "memcached.prependbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "quit": {
        "name": "quit",
        "url": "memcached.quit",
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
      "replace": {
        "name": "replace",
        "url": "memcached.replace",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, mixed $value [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "replacebykey": {
        "name": "replaceByKey",
        "url": "memcached.replacebykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key, mixed $value [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "resetserverlist": {
        "name": "resetServerList",
        "url": "memcached.resetserverlist",
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
        "url": "memcached.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, mixed $value [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setbykey": {
        "name": "setByKey",
        "url": "memcached.setbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key, mixed $value [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setmulti": {
        "name": "setMulti",
        "url": "memcached.setmulti",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $items [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setmultibykey": {
        "name": "setMultiByKey",
        "url": "memcached.setmultibykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, array $items [, int $expiration ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setoption": {
        "name": "setOption",
        "url": "memcached.setoption",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $option, mixed $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setoptions": {
        "name": "setOptions",
        "url": "memcached.setoptions",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $options",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setsaslauthdata": {
        "name": "setSaslAuthData",
        "url": "memcached.setsaslauthdata",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $username, string $password",
          "returnValue": "void",
          "ref": null
        }
      },
      "touch": {
        "name": "touch",
        "url": "memcached.touch",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, int $expiration",
          "returnValue": "bool",
          "ref": null
        }
      },
      "touchbykey": {
        "name": "touchByKey",
        "url": "memcached.touchbykey",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_key, string $key, int $expiration",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "memcached.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $persistent_id ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "messageformatter": {
    "name": "MessageFormatter",
    "methods": {
      "create": {
        "name": "create",
        "url": "messageformatter.create",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $locale, string $pattern",
          "returnValue": "MessageFormatter",
          "ref": null
        }
      },
      "format": {
        "name": "format",
        "url": "messageformatter.format",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $args",
          "returnValue": "string",
          "ref": null
        }
      },
      "formatmessage": {
        "name": "formatMessage",
        "url": "messageformatter.formatmessage",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $locale, string $pattern, array $args",
          "returnValue": "string",
          "ref": null
        }
      },
      "geterrorcode": {
        "name": "getErrorCode",
        "url": "messageformatter.geterrorcode",
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
        "url": "messageformatter.geterrormessage",
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
        "url": "messageformatter.getlocale",
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
      "getpattern": {
        "name": "getPattern",
        "url": "messageformatter.getpattern",
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
      "parse": {
        "name": "parse",
        "url": "messageformatter.parse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "array",
          "ref": null
        }
      },
      "parsemessage": {
        "name": "parseMessage",
        "url": "messageformatter.parsemessage",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $locale, string $pattern, string $source",
          "returnValue": "array",
          "ref": null
        }
      },
      "setpattern": {
        "name": "setPattern",
        "url": "messageformatter.setpattern",
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
      }
    }
  },
  "mongo": {
    "name": "Mongo",
    "methods": {
      "close": {
        "name": "close",
        "url": "mongo.close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ boolean|string $connection ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "connect": {
        "name": "connect",
        "url": "mongo.connect",
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
      "connectutil": {
        "name": "connectUtil",
        "url": "mongo.connectutil",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gethosts": {
        "name": "getHosts",
        "url": "mongo.gethosts",
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
      "getpoolsize": {
        "name": "getPoolSize",
        "url": "mongo.getpoolsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getslave": {
        "name": "getSlave",
        "url": "mongo.getslave",
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
      "getslaveokay": {
        "name": "getSlaveOkay",
        "url": "mongo.getslaveokay",
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
      "pooldebug": {
        "name": "poolDebug",
        "url": "mongo.pooldebug",
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
      "setpoolsize": {
        "name": "setPoolSize",
        "url": "mongo.setpoolsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "int $size",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setslaveokay": {
        "name": "setSlaveOkay",
        "url": "mongo.setslaveokay",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $ok = TRUE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "switchslave": {
        "name": "switchSlave",
        "url": "mongo.switchslave",
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
        "url": "mongo.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $server [, array $options ]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__get": {
        "name": "__get",
        "url": "mongo.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $dbname",
          "returnValue": "MongoDB",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongo.tostring",
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
  "mongobindata": {
    "name": "MongoBinData",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mongobindata.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $data [, int $type = 0 ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongobindata.tostring",
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
  "mongoclient": {
    "name": "MongoClient",
    "methods": {
      "dropdb": {
        "name": "dropDB",
        "url": "mongoclient.dropdb",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $db",
          "returnValue": "array",
          "ref": null
        }
      },
      "getconnections": {
        "name": "getConnections",
        "url": "mongoclient.getconnections",
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
      "getreadpreference": {
        "name": "getReadPreference",
        "url": "mongoclient.getreadpreference",
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
      "getwriteconcern": {
        "name": "getWriteConcern",
        "url": "mongoclient.getwriteconcern",
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
      "killcursor": {
        "name": "killCursor",
        "url": "mongoclient.killcursor",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server_hash, int|MongoInt64 $id",
          "returnValue": "bool",
          "ref": null
        }
      },
      "listdbs": {
        "name": "listDBs",
        "url": "mongoclient.listdbs",
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
      "selectcollection": {
        "name": "selectCollection",
        "url": "mongoclient.selectcollection",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $db, string $collection",
          "returnValue": "MongoCollection",
          "ref": null
        }
      },
      "selectdb": {
        "name": "selectDB",
        "url": "mongoclient.selectdb",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "MongoDB",
          "ref": null
        }
      },
      "setreadpreference": {
        "name": "setReadPreference",
        "url": "mongoclient.setreadpreference",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $read_preference [, array $tags ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setwriteconcern": {
        "name": "setWriteConcern",
        "url": "mongoclient.setwriteconcern",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $w [, int $wtimeout ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mongoclient.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $server = \"mongodb:\/\/localhost:27017\" [, array $options = array(\"connect\" => TRUE) [, array $driver_options ]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongocode": {
    "name": "MongoCode",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mongocode.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $code [, array $scope = array() ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongocode.tostring",
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
  "mongocollection": {
    "name": "MongoCollection",
    "methods": {
      "aggregate": {
        "name": "aggregate",
        "url": "mongocollection.aggregate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $pipeline [, array $options ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "aggregatecursor": {
        "name": "aggregateCursor",
        "url": "mongocollection.aggregatecursor",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $command [, array $options ]",
          "returnValue": "MongoCommandCursor",
          "ref": null
        }
      },
      "batchinsert": {
        "name": "batchInsert",
        "url": "mongocollection.batchinsert",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $a [, array $options = array() ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "count": {
        "name": "count",
        "url": "mongocollection.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $query = array() [, array $options = array() ]]",
          "returnValue": "int",
          "ref": null
        }
      },
      "createdbref": {
        "name": "createDBRef",
        "url": "mongocollection.createdbref",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $document_or_id",
          "returnValue": "array",
          "ref": null
        }
      },
      "createindex": {
        "name": "createIndex",
        "url": "mongocollection.createindex",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $keys [, array $options = array() ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "deleteindex": {
        "name": "deleteIndex",
        "url": "mongocollection.deleteindex",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string|array $keys",
          "returnValue": "array",
          "ref": null
        }
      },
      "deleteindexes": {
        "name": "deleteIndexes",
        "url": "mongocollection.deleteindexes",
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
      "distinct": {
        "name": "distinct",
        "url": "mongocollection.distinct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key [, array $query ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "drop": {
        "name": "drop",
        "url": "mongocollection.drop",
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
      "ensureindex": {
        "name": "ensureIndex",
        "url": "mongocollection.ensureindex",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string|array $key|keys [, array $options = array() ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "find": {
        "name": "find",
        "url": "mongocollection.find",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $query = array() [, array $fields = array() ]]",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "findandmodify": {
        "name": "findAndModify",
        "url": "mongocollection.findandmodify",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $query [, array $update [, array $fields [, array $options ]]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "findone": {
        "name": "findOne",
        "url": "mongocollection.findone",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $query = array() [, array $fields = array() [, array $options = array() ]]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getdbref": {
        "name": "getDBRef",
        "url": "mongocollection.getdbref",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $ref",
          "returnValue": "array",
          "ref": null
        }
      },
      "getindexinfo": {
        "name": "getIndexInfo",
        "url": "mongocollection.getindexinfo",
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
      "getname": {
        "name": "getName",
        "url": "mongocollection.getname",
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
      "getreadpreference": {
        "name": "getReadPreference",
        "url": "mongocollection.getreadpreference",
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
      "getslaveokay": {
        "name": "getSlaveOkay",
        "url": "mongocollection.getslaveokay",
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
      "getwriteconcern": {
        "name": "getWriteConcern",
        "url": "mongocollection.getwriteconcern",
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
      "group": {
        "name": "group",
        "url": "mongocollection.group",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $keys, array $initial, MongoCode $reduce [, array $options = array() ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "insert": {
        "name": "insert",
        "url": "mongocollection.insert",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array|object $document [, array $options = array() ]",
          "returnValue": "bool|array",
          "ref": null
        }
      },
      "parallelcollectionscan": {
        "name": "parallelCollectionScan",
        "url": "mongocollection.parallelcollectionscan",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $num_cursors",
          "returnValue": "array[MongoCommandCursor]",
          "ref": null
        }
      },
      "remove": {
        "name": "remove",
        "url": "mongocollection.remove",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $criteria = array() [, array $options = array() ]]",
          "returnValue": "bool|array",
          "ref": null
        }
      },
      "save": {
        "name": "save",
        "url": "mongocollection.save",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array|object $document [, array $options = array() ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "setreadpreference": {
        "name": "setReadPreference",
        "url": "mongocollection.setreadpreference",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $read_preference [, array $tags ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setslaveokay": {
        "name": "setSlaveOkay",
        "url": "mongocollection.setslaveokay",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $ok = TRUE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setwriteconcern": {
        "name": "setWriteConcern",
        "url": "mongocollection.setwriteconcern",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $w [, int $wtimeout ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "toindexstring": {
        "name": "toIndexString",
        "url": "mongocollection.toindexstring",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "",
          "returnValue": null,
          "ref": null
        }
      },
      "update": {
        "name": "update",
        "url": "mongocollection.update",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $criteria, array $new_object [, array $options = array() ]",
          "returnValue": "bool|array",
          "ref": null
        }
      },
      "validate": {
        "name": "validate",
        "url": "mongocollection.validate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $scan_data = FALSE ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mongocollection.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoDB $db, string $name",
          "returnValue": "",
          "ref": null
        }
      },
      "__get": {
        "name": "__get",
        "url": "mongocollection.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "MongoCollection",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongocollection.--tostring",
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
  "mongocommandcursor": {
    "name": "MongoCommandCursor",
    "methods": {
      "batchsize": {
        "name": "batchSize",
        "url": "mongocommandcursor.batchsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $batchSize",
          "returnValue": "MongoCommandCursor",
          "ref": null
        }
      },
      "createfromdocument": {
        "name": "createFromDocument",
        "url": "mongocommandcursor.createfromdocument",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "MongoClient $connection, string $hash, array $document",
          "returnValue": "MongoCommandCursor",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "mongocommandcursor.current",
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
      "dead": {
        "name": "dead",
        "url": "mongocommandcursor.dead",
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
      "getreadpreference": {
        "name": "getReadPreference",
        "url": "mongocommandcursor.getreadpreference",
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
      "info": {
        "name": "info",
        "url": "mongocommandcursor.info",
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
      "key": {
        "name": "key",
        "url": "mongocommandcursor.key",
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
      "next": {
        "name": "next",
        "url": "mongocommandcursor.next",
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
        "url": "mongocommandcursor.rewind",
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
      "setreadpreference": {
        "name": "setReadPreference",
        "url": "mongocommandcursor.setreadpreference",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $read_preference [, array $tags ]",
          "returnValue": "MongoCommandCursor",
          "ref": null
        }
      },
      "timeout": {
        "name": "timeout",
        "url": "mongocommandcursor.timeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $ms",
          "returnValue": "MongoCommandCursor",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "mongocommandcursor.valid",
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
        "url": "mongocommandcursor.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoClient $connection, string $ns, array $command = array()",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongocursor": {
    "name": "MongoCursor",
    "methods": {
      "addoption": {
        "name": "addOption",
        "url": "mongocursor.addoption",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, mixed $value",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "awaitdata": {
        "name": "awaitData",
        "url": "mongocursor.awaitdata",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $wait = TRUE ]",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "batchsize": {
        "name": "batchSize",
        "url": "mongocursor.batchsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $batchSize",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "count": {
        "name": "count",
        "url": "mongocursor.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $foundOnly = FALSE ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "mongocursor.current",
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
      "dead": {
        "name": "dead",
        "url": "mongocursor.dead",
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
      "doquery": {
        "name": "doQuery",
        "url": "mongocursor.doquery",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "explain": {
        "name": "explain",
        "url": "mongocursor.explain",
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
      "fields": {
        "name": "fields",
        "url": "mongocursor.fields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $f",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "getnext": {
        "name": "getNext",
        "url": "mongocursor.getnext",
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
      "getreadpreference": {
        "name": "getReadPreference",
        "url": "mongocursor.getreadpreference",
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
      "hasnext": {
        "name": "hasNext",
        "url": "mongocursor.hasnext",
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
      "hint": {
        "name": "hint",
        "url": "mongocursor.hint",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $index",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "immortal": {
        "name": "immortal",
        "url": "mongocursor.immortal",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $liveForever = TRUE ]",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "info": {
        "name": "info",
        "url": "mongocursor.info",
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
      "key": {
        "name": "key",
        "url": "mongocursor.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string|int",
          "ref": null
        }
      },
      "limit": {
        "name": "limit",
        "url": "mongocursor.limit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $num",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "maxtimems": {
        "name": "maxTimeMS",
        "url": "mongocursor.maxtimems",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $ms",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "mongocursor.next",
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
      "partial": {
        "name": "partial",
        "url": "mongocursor.partial",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $okay = TRUE ]",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "reset": {
        "name": "reset",
        "url": "mongocursor.reset",
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
        "url": "mongocursor.rewind",
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
      "setflag": {
        "name": "setFlag",
        "url": "mongocursor.setflag",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $flag [, bool $set = TRUE ]",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "setreadpreference": {
        "name": "setReadPreference",
        "url": "mongocursor.setreadpreference",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $read_preference [, array $tags ]",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "skip": {
        "name": "skip",
        "url": "mongocursor.skip",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $num",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "slaveokay": {
        "name": "slaveOkay",
        "url": "mongocursor.slaveokay",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $okay = TRUE ]",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "snapshot": {
        "name": "snapshot",
        "url": "mongocursor.snapshot",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "sort": {
        "name": "sort",
        "url": "mongocursor.sort",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $fields",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "tailable": {
        "name": "tailable",
        "url": "mongocursor.tailable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $tail = TRUE ]",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "timeout": {
        "name": "timeout",
        "url": "mongocursor.timeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $ms",
          "returnValue": "MongoCursor",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "mongocursor.valid",
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
        "url": "mongocursor.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoClient $connection, string $ns [, array $query = array() [, array $fields = array() ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongocursorexception": {
    "name": "MongoCursorException",
    "methods": {
      "gethost": {
        "name": "getHost",
        "url": "mongocursorexception.gethost",
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
  "mongocursorinterface": {
    "name": "MongoCursorInterface",
    "methods": {
      "batchsize": {
        "name": "batchSize",
        "url": "mongocursorinterface.batchsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $batchSize",
          "returnValue": "MongoCursorInterface",
          "ref": null
        }
      },
      "dead": {
        "name": "dead",
        "url": "mongocursorinterface.dead",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getreadpreference": {
        "name": "getReadPreference",
        "url": "mongocursorinterface.getreadpreference",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "info": {
        "name": "info",
        "url": "mongocursorinterface.info",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "setreadpreference": {
        "name": "setReadPreference",
        "url": "mongocursorinterface.setreadpreference",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $read_preference [, array $tags ]",
          "returnValue": "MongoCursorInterface",
          "ref": null
        }
      },
      "timeout": {
        "name": "timeout",
        "url": "mongocursorinterface.timeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $ms",
          "returnValue": "MongoCursorInterface",
          "ref": null
        }
      }
    }
  },
  "mongodate": {
    "name": "MongoDate",
    "methods": {
      "todatetime": {
        "name": "toDateTime",
        "url": "mongodate.todatetime",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "DateTime",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mongodate.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $sec = time() [, int $usec = 0 ]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongodate.tostring",
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
  "mongodb": {
    "name": "MongoDB",
    "methods": {
      "authenticate": {
        "name": "authenticate",
        "url": "mongodb.authenticate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $username, string $password",
          "returnValue": "array",
          "ref": null
        }
      },
      "command": {
        "name": "command",
        "url": "mongodb.command",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $command [, array $options = array() [, string &$hash ]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "createcollection": {
        "name": "createCollection",
        "url": "mongodb.createcollection",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, array $options ]",
          "returnValue": "MongoCollection",
          "ref": null
        }
      },
      "createdbref": {
        "name": "createDBRef",
        "url": "mongodb.createdbref",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $collection, mixed $document_or_id",
          "returnValue": "array",
          "ref": null
        }
      },
      "drop": {
        "name": "drop",
        "url": "mongodb.drop",
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
      "dropcollection": {
        "name": "dropCollection",
        "url": "mongodb.dropcollection",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $coll",
          "returnValue": "array",
          "ref": null
        }
      },
      "execute": {
        "name": "execute",
        "url": "mongodb.execute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $code [, array $args = array() ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "forceerror": {
        "name": "forceError",
        "url": "mongodb.forceerror",
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
      "getcollectioninfo": {
        "name": "getCollectionInfo",
        "url": "mongodb.getcollectioninfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $options = array() ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getcollectionnames": {
        "name": "getCollectionNames",
        "url": "mongodb.getcollectionnames",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $options = array() ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getdbref": {
        "name": "getDBRef",
        "url": "mongodb.getdbref",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $ref",
          "returnValue": "array",
          "ref": null
        }
      },
      "getgridfs": {
        "name": "getGridFS",
        "url": "mongodb.getgridfs",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $prefix = \"fs\" ]",
          "returnValue": "MongoGridFS",
          "ref": null
        }
      },
      "getprofilinglevel": {
        "name": "getProfilingLevel",
        "url": "mongodb.getprofilinglevel",
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
      "getreadpreference": {
        "name": "getReadPreference",
        "url": "mongodb.getreadpreference",
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
      "getslaveokay": {
        "name": "getSlaveOkay",
        "url": "mongodb.getslaveokay",
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
      "getwriteconcern": {
        "name": "getWriteConcern",
        "url": "mongodb.getwriteconcern",
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
      "lasterror": {
        "name": "lastError",
        "url": "mongodb.lasterror",
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
      "listcollections": {
        "name": "listCollections",
        "url": "mongodb.listcollections",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $options = array() ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "preverror": {
        "name": "prevError",
        "url": "mongodb.preverror",
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
      "repair": {
        "name": "repair",
        "url": "mongodb.repair",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $preserve_cloned_files = FALSE [, bool $backup_original_files = FALSE ]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "reseterror": {
        "name": "resetError",
        "url": "mongodb.reseterror",
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
      "selectcollection": {
        "name": "selectCollection",
        "url": "mongodb.selectcollection",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "MongoCollection",
          "ref": null
        }
      },
      "setprofilinglevel": {
        "name": "setProfilingLevel",
        "url": "mongodb.setprofilinglevel",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $level",
          "returnValue": "int",
          "ref": null
        }
      },
      "setreadpreference": {
        "name": "setReadPreference",
        "url": "mongodb.setreadpreference",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $read_preference [, array $tags ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setslaveokay": {
        "name": "setSlaveOkay",
        "url": "mongodb.setslaveokay",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $ok = TRUE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setwriteconcern": {
        "name": "setWriteConcern",
        "url": "mongodb.setwriteconcern",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $w [, int $wtimeout ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mongodb.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoClient $conn, string $name",
          "returnValue": "",
          "ref": null
        }
      },
      "__get": {
        "name": "__get",
        "url": "mongodb.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "MongoCollection",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongodb.--tostring",
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
  "mongodbref": {
    "name": "MongoDBRef",
    "methods": {
      "create": {
        "name": "create",
        "url": "mongodbref.create",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $collection, mixed $id [, string $database ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "mongodbref.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "MongoDB $db, array $ref",
          "returnValue": "array",
          "ref": null
        }
      },
      "isref": {
        "name": "isRef",
        "url": "mongodbref.isref",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "mixed $ref",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "mongodeletebatch": {
    "name": "MongoDeleteBatch",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mongodeletebatch.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoCollection $collection [, array $write_options ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongogridfs": {
    "name": "MongoGridFS",
    "methods": {
      "delete": {
        "name": "delete",
        "url": "mongogridfs.delete",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $id",
          "returnValue": "bool|array",
          "ref": null
        }
      },
      "drop": {
        "name": "drop",
        "url": "mongogridfs.drop",
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
      "find": {
        "name": "find",
        "url": "mongogridfs.find",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $query = array() [, array $fields = array() ]]",
          "returnValue": "MongoGridFSCursor",
          "ref": null
        }
      },
      "findone": {
        "name": "findOne",
        "url": "mongogridfs.findone",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ mixed $query = array() [, mixed $fields = array() ]]",
          "returnValue": "MongoGridFSFile",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "mongogridfs.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $id",
          "returnValue": "MongoGridFSFile",
          "ref": null
        }
      },
      "put": {
        "name": "put",
        "url": "mongogridfs.put",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename [, array $metadata = array() [, array $options = array() ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "remove": {
        "name": "remove",
        "url": "mongogridfs.remove",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ array $criteria = array() [, array $options = array() ]]",
          "returnValue": "bool|array",
          "ref": null
        }
      },
      "storebytes": {
        "name": "storeBytes",
        "url": "mongogridfs.storebytes",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $bytes [, array $metadata = array() [, array $options = array() ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "storefile": {
        "name": "storeFile",
        "url": "mongogridfs.storefile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string|resource $filename [, array $metadata = array() [, array $options = array() ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "storeupload": {
        "name": "storeUpload",
        "url": "mongogridfs.storeupload",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, array $metadata ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mongogridfs.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoDB $db [, string $prefix = \"fs\" [, mixed $chunks = \"fs\" ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongogridfscursor": {
    "name": "MongoGridFSCursor",
    "methods": {
      "current": {
        "name": "current",
        "url": "mongogridfscursor.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "MongoGridFSFile",
          "ref": null
        }
      },
      "getnext": {
        "name": "getNext",
        "url": "mongogridfscursor.getnext",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "MongoGridFSFile",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "mongogridfscursor.key",
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
        "url": "mongogridfscursor.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoGridFS $gridfs, resource $connection, string $ns, array $query, array $fields",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongogridfsfile": {
    "name": "MongoGridFSFile",
    "methods": {
      "getbytes": {
        "name": "getBytes",
        "url": "mongogridfsfile.getbytes",
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
      "getfilename": {
        "name": "getFilename",
        "url": "mongogridfsfile.getfilename",
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
      "getresource": {
        "name": "getResource",
        "url": "mongogridfsfile.getresource",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "resource",
          "ref": null
        }
      },
      "getsize": {
        "name": "getSize",
        "url": "mongogridfsfile.getsize",
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
      "write": {
        "name": "write",
        "url": "mongogridfsfile.write",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $filename = NULL ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mongogridfsfile.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoGridFS $gridfs, array $file",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongoid": {
    "name": "MongoId",
    "methods": {
      "gethostname": {
        "name": "getHostname",
        "url": "mongoid.gethostname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getinc": {
        "name": "getInc",
        "url": "mongoid.getinc",
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
      "getpid": {
        "name": "getPID",
        "url": "mongoid.getpid",
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
      "gettimestamp": {
        "name": "getTimestamp",
        "url": "mongoid.gettimestamp",
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
      "isvalid": {
        "name": "isValid",
        "url": "mongoid.isvalid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "mixed $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mongoid.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string|MongoId $id = NULL ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__set_state": {
        "name": "__set_state",
        "url": "mongoid.set-state",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "array $props",
          "returnValue": "MongoId",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongoid.tostring",
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
  "mongoinsertbatch": {
    "name": "MongoInsertBatch",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mongoinsertbatch.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoCollection $collection [, array $write_options ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongoint32": {
    "name": "MongoInt32",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mongoint32.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongoint32.tostring",
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
  "mongoint64": {
    "name": "MongoInt64",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mongoint64.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongoint64.tostring",
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
  "mongolog": {
    "name": "MongoLog",
    "methods": {
      "getcallback": {
        "name": "getCallback",
        "url": "mongolog.getcallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "callable",
          "ref": null
        }
      },
      "getlevel": {
        "name": "getLevel",
        "url": "mongolog.getlevel",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmodule": {
        "name": "getModule",
        "url": "mongolog.getmodule",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "setcallback": {
        "name": "setCallback",
        "url": "mongolog.setcallback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "callable $log_function",
          "returnValue": "void",
          "ref": null
        }
      },
      "setlevel": {
        "name": "setLevel",
        "url": "mongolog.setlevel",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "int $level",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmodule": {
        "name": "setModule",
        "url": "mongolog.setmodule",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "int $module",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "mongopool": {
    "name": "MongoPool",
    "methods": {
      "getsize": {
        "name": "getSize",
        "url": "mongopool.getsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "info": {
        "name": "info",
        "url": "mongopool.info",
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
      "setsize": {
        "name": "setSize",
        "url": "mongopool.setsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "int $size",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "mongoregex": {
    "name": "MongoRegex",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mongoregex.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $regex",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongoregex.tostring",
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
  "mongoresultexception": {
    "name": "MongoResultException",
    "methods": {
      "getdocument": {
        "name": "getDocument",
        "url": "mongoresultexception.getdocument",
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
      }
    }
  },
  "mongotimestamp": {
    "name": "MongoTimestamp",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mongotimestamp.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $sec = time() [, int $inc ]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "mongotimestamp.tostring",
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
  "mongoupdatebatch": {
    "name": "MongoUpdateBatch",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "mongoupdatebatch.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoCollection $collection [, array $write_options ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongowritebatch": {
    "name": "MongoWriteBatch",
    "methods": {
      "add": {
        "name": "add",
        "url": "mongowritebatch.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $item",
          "returnValue": "bool",
          "ref": null
        }
      },
      "execute": {
        "name": "execute",
        "url": "mongowritebatch.execute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "array $write_options",
          "returnValue": "array",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mongowritebatch.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "MongoCollection $collection [, string $batch_type [, array $write_options ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mongowriteconcernexception": {
    "name": "MongoWriteConcernException",
    "methods": {
      "getdocument": {
        "name": "getDocument",
        "url": "mongowriteconcernexception.getdocument",
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
      }
    }
  },
  "multipleiterator": {
    "name": "MultipleIterator",
    "methods": {
      "attachiterator": {
        "name": "attachIterator",
        "url": "multipleiterator.attachiterator",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Iterator $iterator [, string $infos ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "containsiterator": {
        "name": "containsIterator",
        "url": "multipleiterator.containsiterator",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Iterator $iterator",
          "returnValue": "bool",
          "ref": null
        }
      },
      "countiterators": {
        "name": "countIterators",
        "url": "multipleiterator.countiterators",
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
      "current": {
        "name": "current",
        "url": "multipleiterator.current",
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
      "detachiterator": {
        "name": "detachIterator",
        "url": "multipleiterator.detachiterator",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "Iterator $iterator",
          "returnValue": "void",
          "ref": null
        }
      },
      "getflags": {
        "name": "getFlags",
        "url": "multipleiterator.getflags",
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
      "key": {
        "name": "key",
        "url": "multipleiterator.key",
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
      "next": {
        "name": "next",
        "url": "multipleiterator.next",
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
        "url": "multipleiterator.rewind",
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
      "setflags": {
        "name": "setFlags",
        "url": "multipleiterator.setflags",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $flags",
          "returnValue": "void",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "multipleiterator.valid",
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
        "url": "multipleiterator.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $flags = MultipleIterator::MIT_NEED_ALL|MultipleIterator::MIT_KEYS_NUMERIC ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mutex": {
    "name": "Mutex",
    "methods": {
      "create": {
        "name": "create",
        "url": "mutex.create",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "[ bool $lock ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "destroy": {
        "name": "destroy",
        "url": "mutex.destroy",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "int $mutex",
          "returnValue": "bool",
          "ref": null
        }
      },
      "lock": {
        "name": "lock",
        "url": "mutex.lock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "int $mutex",
          "returnValue": "bool",
          "ref": null
        }
      },
      "trylock": {
        "name": "trylock",
        "url": "mutex.trylock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "int $mutex",
          "returnValue": "bool",
          "ref": null
        }
      },
      "unlock": {
        "name": "unlock",
        "url": "mutex.unlock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": true,
          "parameters": "int $mutex [, bool $destroy ]",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "mysqli": {
    "name": "mysqli",
    "methods": {
      "autocommit": {
        "name": "autocommit",
        "url": "mysqli.autocommit",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $mode",
          "returnValue": "bool",
          "ref": null
        }
      },
      "begin_transaction": {
        "name": "begin_transaction",
        "url": "mysqli.begin-transaction",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $flags [, string $name ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "change_user": {
        "name": "change_user",
        "url": "mysqli.change-user",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $user, string $password, string $database",
          "returnValue": "bool",
          "ref": null
        }
      },
      "character_set_name": {
        "name": "character_set_name",
        "url": "mysqli.character-set-name",
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
      "close": {
        "name": "close",
        "url": "mysqli.close",
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
      "commit": {
        "name": "commit",
        "url": "mysqli.commit",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $flags [, string $name ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "debug": {
        "name": "debug",
        "url": "mysqli.debug",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $message",
          "returnValue": "bool",
          "ref": null
        }
      },
      "dump_debug_info": {
        "name": "dump_debug_info",
        "url": "mysqli.dump-debug-info",
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
      "get_charset": {
        "name": "get_charset",
        "url": "mysqli.get-charset",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "object",
          "ref": null
        }
      },
      "get_connection_stats": {
        "name": "get_connection_stats",
        "url": "mysqli.get-connection-stats",
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
      "get_warnings": {
        "name": "get_warnings",
        "url": "mysqli.get-warnings",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysqli_warning",
          "ref": null
        }
      },
      "init": {
        "name": "init",
        "url": "mysqli.init",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysqli",
          "ref": null
        }
      },
      "kill": {
        "name": "kill",
        "url": "mysqli.kill",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $processid",
          "returnValue": "bool",
          "ref": null
        }
      },
      "more_results": {
        "name": "more_results",
        "url": "mysqli.more-results",
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
      "multi_query": {
        "name": "multi_query",
        "url": "mysqli.multi-query",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "bool",
          "ref": null
        }
      },
      "next_result": {
        "name": "next_result",
        "url": "mysqli.next-result",
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
      "options": {
        "name": "options",
        "url": "mysqli.options",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $option, mixed $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "ping": {
        "name": "ping",
        "url": "mysqli.ping",
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
      "poll": {
        "name": "poll",
        "url": "mysqli.poll",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "array &$read, array &$error, array &$reject, int $sec [, int $usec ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "prepare": {
        "name": "prepare",
        "url": "mysqli.prepare",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "mysqli_stmt",
          "ref": null
        }
      },
      "query": {
        "name": "query",
        "url": "mysqli.query",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query [, int $resultmode = MYSQLI_STORE_RESULT ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "real_connect": {
        "name": "real_connect",
        "url": "mysqli.real-connect",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $host [, string $username [, string $passwd [, string $dbname [, int $port [, string $socket [, int $flags ]]]]]]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "real_escape_string": {
        "name": "real_escape_string",
        "url": "mysqli.real-escape-string",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $escapestr",
          "returnValue": "string",
          "ref": null
        }
      },
      "real_query": {
        "name": "real_query",
        "url": "mysqli.real-query",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "bool",
          "ref": null
        }
      },
      "reap_async_query": {
        "name": "reap_async_query",
        "url": "mysqli.reap-async-query",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysqli_result",
          "ref": null
        }
      },
      "refresh": {
        "name": "refresh",
        "url": "mysqli.refresh",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $options",
          "returnValue": "bool",
          "ref": null
        }
      },
      "release_savepoint": {
        "name": "release_savepoint",
        "url": "mysqli.release-savepoint",
        "spec": {
          "isPublic": true,
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
      "rollback": {
        "name": "rollback",
        "url": "mysqli.rollback",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $flags [, string $name ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "rpl_query_type": {
        "name": "rpl_query_type",
        "url": "mysqli.rpl-query-type",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "int",
          "ref": null
        }
      },
      "savepoint": {
        "name": "savepoint",
        "url": "mysqli.savepoint",
        "spec": {
          "isPublic": true,
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
      "select_db": {
        "name": "select_db",
        "url": "mysqli.select-db",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $dbname",
          "returnValue": "bool",
          "ref": null
        }
      },
      "send_query": {
        "name": "send_query",
        "url": "mysqli.send-query",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "bool",
          "ref": null
        }
      },
      "set_charset": {
        "name": "set_charset",
        "url": "mysqli.set-charset",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $charset",
          "returnValue": "bool",
          "ref": null
        }
      },
      "set_local_infile_default": {
        "name": "set_local_infile_default",
        "url": "mysqli.set-local-infile-default",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqli $link",
          "returnValue": "void",
          "ref": null
        }
      },
      "set_local_infile_handler": {
        "name": "set_local_infile_handler",
        "url": "mysqli.set-local-infile-handler",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqli $link, callable $read_func",
          "returnValue": "bool",
          "ref": null
        }
      },
      "ssl_set": {
        "name": "ssl_set",
        "url": "mysqli.ssl-set",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, string $cert, string $ca, string $capath, string $cipher",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stat": {
        "name": "stat",
        "url": "mysqli.stat",
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
      "stmt_init": {
        "name": "stmt_init",
        "url": "mysqli.stmt-init",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysqli_stmt",
          "ref": null
        }
      },
      "store_result": {
        "name": "store_result",
        "url": "mysqli.store-result",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $option ]",
          "returnValue": "mysqli_result",
          "ref": null
        }
      },
      "thread_safe": {
        "name": "thread_safe",
        "url": "mysqli.thread-safe",
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
      "use_result": {
        "name": "use_result",
        "url": "mysqli.use-result",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysqli_result",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mysqli.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $host = ini_get(\"mysqli.default_host\") [, string $username = ini_get(\"mysqli.default_user\") [, string $passwd = ini_get(\"mysqli.default_pw\") [, string $dbname = \"\" [, int $port = ini_get(\"mysqli.default_port\") [, string $socket = ini_get(\"mysqli.default_socket\") ]]]]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mysqli_driver": {
    "name": "mysqli_driver",
    "methods": {
      "embedded_server_end": {
        "name": "embedded_server_end",
        "url": "mysqli-driver.embedded-server-end",
        "spec": {
          "isPublic": false,
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
      "embedded_server_start": {
        "name": "embedded_server_start",
        "url": "mysqli-driver.embedded-server-start",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $start, array $arguments, array $groups",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "mysqli_result": {
    "name": "mysqli_result",
    "methods": {
      "data_seek": {
        "name": "data_seek",
        "url": "mysqli-result.data-seek",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $offset",
          "returnValue": "bool",
          "ref": null
        }
      },
      "fetch_all": {
        "name": "fetch_all",
        "url": "mysqli-result.fetch-all",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $resulttype = MYSQLI_NUM ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "fetch_array": {
        "name": "fetch_array",
        "url": "mysqli-result.fetch-array",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $resulttype = MYSQLI_BOTH ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "fetch_assoc": {
        "name": "fetch_assoc",
        "url": "mysqli-result.fetch-assoc",
        "spec": {
          "isPublic": false,
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
      "fetch_field": {
        "name": "fetch_field",
        "url": "mysqli-result.fetch-field",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "object",
          "ref": null
        }
      },
      "fetch_fields": {
        "name": "fetch_fields",
        "url": "mysqli-result.fetch-fields",
        "spec": {
          "isPublic": false,
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
      "fetch_field_direct": {
        "name": "fetch_field_direct",
        "url": "mysqli-result.fetch-field-direct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $fieldnr",
          "returnValue": "object",
          "ref": null
        }
      },
      "fetch_object": {
        "name": "fetch_object",
        "url": "mysqli-result.fetch-object",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $class_name = \"stdClass\" [, array $params ]]",
          "returnValue": "object",
          "ref": null
        }
      },
      "fetch_row": {
        "name": "fetch_row",
        "url": "mysqli-result.fetch-row",
        "spec": {
          "isPublic": false,
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
      "field_seek": {
        "name": "field_seek",
        "url": "mysqli-result.field-seek",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $fieldnr",
          "returnValue": "bool",
          "ref": null
        }
      },
      "free": {
        "name": "free",
        "url": "mysqli-result.free",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "mysqli_stmt": {
    "name": "mysqli_stmt",
    "methods": {
      "attr_get": {
        "name": "attr_get",
        "url": "mysqli-stmt.attr-get",
        "spec": {
          "isPublic": false,
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
      "attr_set": {
        "name": "attr_set",
        "url": "mysqli-stmt.attr-set",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $attr, int $mode",
          "returnValue": "bool",
          "ref": null
        }
      },
      "bind_param": {
        "name": "bind_param",
        "url": "mysqli-stmt.bind-param",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $types, mixed &$var1 [, mixed &$... ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "bind_result": {
        "name": "bind_result",
        "url": "mysqli-stmt.bind-result",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed &$var1 [, mixed &$... ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "close": {
        "name": "close",
        "url": "mysqli-stmt.close",
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
      "data_seek": {
        "name": "data_seek",
        "url": "mysqli-stmt.data-seek",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $offset",
          "returnValue": "void",
          "ref": null
        }
      },
      "execute": {
        "name": "execute",
        "url": "mysqli-stmt.execute",
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
      "fetch": {
        "name": "fetch",
        "url": "mysqli-stmt.fetch",
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
      "free_result": {
        "name": "free_result",
        "url": "mysqli-stmt.free-result",
        "spec": {
          "isPublic": false,
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
      "get_result": {
        "name": "get_result",
        "url": "mysqli-stmt.get-result",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysqli_result",
          "ref": null
        }
      },
      "get_warnings": {
        "name": "get_warnings",
        "url": "mysqli-stmt.get-warnings",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqli_stmt $stmt",
          "returnValue": "object",
          "ref": null
        }
      },
      "more_results": {
        "name": "more_results",
        "url": "mysqli-stmt.more-results",
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
      "next_result": {
        "name": "next_result",
        "url": "mysqli-stmt.next-result",
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
      "prepare": {
        "name": "prepare",
        "url": "mysqli-stmt.prepare",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "reset": {
        "name": "reset",
        "url": "mysqli-stmt.reset",
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
      "result_metadata": {
        "name": "result_metadata",
        "url": "mysqli-stmt.result-metadata",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysqli_result",
          "ref": null
        }
      },
      "send_long_data": {
        "name": "send_long_data",
        "url": "mysqli-stmt.send-long-data",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $param_nr, string $data",
          "returnValue": "bool",
          "ref": null
        }
      },
      "store_result": {
        "name": "store_result",
        "url": "mysqli-stmt.store-result",
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
      "__construct": {
        "name": "__construct",
        "url": "mysqli-stmt.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqli $link [, string $query ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "mysqli_warning": {
    "name": "mysqli_warning",
    "methods": {
      "next": {
        "name": "next",
        "url": "mysqli-warning.next",
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
        "url": "mysqli-warning.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
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
  "mysqlnduhconnection": {
    "name": "MysqlndUhConnection",
    "methods": {
      "changeuser": {
        "name": "changeUser",
        "url": "mysqlnduhconnection.changeuser",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $user, string $password, string $database, bool $silent, int $passwd_len",
          "returnValue": "bool",
          "ref": null
        }
      },
      "charsetname": {
        "name": "charsetName",
        "url": "mysqlnduhconnection.charsetname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "string",
          "ref": null
        }
      },
      "close": {
        "name": "close",
        "url": "mysqlnduhconnection.close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, int $close_type",
          "returnValue": "bool",
          "ref": null
        }
      },
      "connect": {
        "name": "connect",
        "url": "mysqlnduhconnection.connect",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $host, string $use\", string $password, string $database, int $port, string $socket, int $mysql_flags",
          "returnValue": "bool",
          "ref": null
        }
      },
      "endpsession": {
        "name": "endPSession",
        "url": "mysqlnduhconnection.endpsession",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "escapestring": {
        "name": "escapeString",
        "url": "mysqlnduhconnection.escapestring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $escape_string",
          "returnValue": "string",
          "ref": null
        }
      },
      "getaffectedrows": {
        "name": "getAffectedRows",
        "url": "mysqlnduhconnection.getaffectedrows",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "int",
          "ref": null
        }
      },
      "geterrornumber": {
        "name": "getErrorNumber",
        "url": "mysqlnduhconnection.geterrornumber",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "int",
          "ref": null
        }
      },
      "geterrorstring": {
        "name": "getErrorString",
        "url": "mysqlnduhconnection.geterrorstring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "string",
          "ref": null
        }
      },
      "getfieldcount": {
        "name": "getFieldCount",
        "url": "mysqlnduhconnection.getfieldcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "int",
          "ref": null
        }
      },
      "gethostinformation": {
        "name": "getHostInformation",
        "url": "mysqlnduhconnection.gethostinformation",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "string",
          "ref": null
        }
      },
      "getlastinsertid": {
        "name": "getLastInsertId",
        "url": "mysqlnduhconnection.getlastinsertid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "int",
          "ref": null
        }
      },
      "getlastmessage": {
        "name": "getLastMessage",
        "url": "mysqlnduhconnection.getlastmessage",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "void",
          "ref": null
        }
      },
      "getprotocolinformation": {
        "name": "getProtocolInformation",
        "url": "mysqlnduhconnection.getprotocolinformation",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "string",
          "ref": null
        }
      },
      "getserverinformation": {
        "name": "getServerInformation",
        "url": "mysqlnduhconnection.getserverinformation",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "string",
          "ref": null
        }
      },
      "getserverstatistics": {
        "name": "getServerStatistics",
        "url": "mysqlnduhconnection.getserverstatistics",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "string",
          "ref": null
        }
      },
      "getserverversion": {
        "name": "getServerVersion",
        "url": "mysqlnduhconnection.getserverversion",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "int",
          "ref": null
        }
      },
      "getsqlstate": {
        "name": "getSqlstate",
        "url": "mysqlnduhconnection.getsqlstate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "string",
          "ref": null
        }
      },
      "getstatistics": {
        "name": "getStatistics",
        "url": "mysqlnduhconnection.getstatistics",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "array",
          "ref": null
        }
      },
      "getthreadid": {
        "name": "getThreadId",
        "url": "mysqlnduhconnection.getthreadid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "int",
          "ref": null
        }
      },
      "getwarningcount": {
        "name": "getWarningCount",
        "url": "mysqlnduhconnection.getwarningcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "int",
          "ref": null
        }
      },
      "init": {
        "name": "init",
        "url": "mysqlnduhconnection.init",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "killconnection": {
        "name": "killConnection",
        "url": "mysqlnduhconnection.killconnection",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, int $pid",
          "returnValue": "bool",
          "ref": null
        }
      },
      "listfields": {
        "name": "listFields",
        "url": "mysqlnduhconnection.listfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $table, string $achtung_wild",
          "returnValue": "array",
          "ref": null
        }
      },
      "listmethod": {
        "name": "listMethod",
        "url": "mysqlnduhconnection.listmethod",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $query, string $achtung_wild, string $par1",
          "returnValue": "void",
          "ref": null
        }
      },
      "moreresults": {
        "name": "moreResults",
        "url": "mysqlnduhconnection.moreresults",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "nextresult": {
        "name": "nextResult",
        "url": "mysqlnduhconnection.nextresult",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "ping": {
        "name": "ping",
        "url": "mysqlnduhconnection.ping",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "query": {
        "name": "query",
        "url": "mysqlnduhconnection.query",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $query",
          "returnValue": "bool",
          "ref": null
        }
      },
      "queryreadresultsetheader": {
        "name": "queryReadResultsetHeader",
        "url": "mysqlnduhconnection.queryreadresultsetheader",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, mysqlnd_statement $mysqlnd_stmt",
          "returnValue": "bool",
          "ref": null
        }
      },
      "reapquery": {
        "name": "reapQuery",
        "url": "mysqlnduhconnection.reapquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "refreshserver": {
        "name": "refreshServer",
        "url": "mysqlnduhconnection.refreshserver",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, int $options",
          "returnValue": "bool",
          "ref": null
        }
      },
      "restartpsession": {
        "name": "restartPSession",
        "url": "mysqlnduhconnection.restartpsession",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "selectdb": {
        "name": "selectDb",
        "url": "mysqlnduhconnection.selectdb",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $database",
          "returnValue": "bool",
          "ref": null
        }
      },
      "sendclose": {
        "name": "sendClose",
        "url": "mysqlnduhconnection.sendclose",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "sendquery": {
        "name": "sendQuery",
        "url": "mysqlnduhconnection.sendquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $query",
          "returnValue": "bool",
          "ref": null
        }
      },
      "serverdumpdebuginformation": {
        "name": "serverDumpDebugInformation",
        "url": "mysqlnduhconnection.serverdumpdebuginformation",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setautocommit": {
        "name": "setAutocommit",
        "url": "mysqlnduhconnection.setautocommit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, int $mode",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setcharset": {
        "name": "setCharset",
        "url": "mysqlnduhconnection.setcharset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $charset",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setclientoption": {
        "name": "setClientOption",
        "url": "mysqlnduhconnection.setclientoption",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, int $option, int $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setserveroption": {
        "name": "setServerOption",
        "url": "mysqlnduhconnection.setserveroption",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, int $option",
          "returnValue": "void",
          "ref": null
        }
      },
      "shutdownserver": {
        "name": "shutdownServer",
        "url": "mysqlnduhconnection.shutdownserver",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $MYSQLND_UH_RES_MYSQLND_NAME, string $level",
          "returnValue": "void",
          "ref": null
        }
      },
      "simplecommand": {
        "name": "simpleCommand",
        "url": "mysqlnduhconnection.simplecommand",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, int $command, string $arg, int $ok_packet, bool $silent, bool $ignore_upsert_status",
          "returnValue": "bool",
          "ref": null
        }
      },
      "simplecommandhandleresponse": {
        "name": "simpleCommandHandleResponse",
        "url": "mysqlnduhconnection.simplecommandhandleresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, int $ok_packet, bool $silent, int $command, bool $ignore_upsert_status",
          "returnValue": "bool",
          "ref": null
        }
      },
      "sslset": {
        "name": "sslSet",
        "url": "mysqlnduhconnection.sslset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection, string $key, string $cert, string $ca, string $capath, string $cipher",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stmtinit": {
        "name": "stmtInit",
        "url": "mysqlnduhconnection.stmtinit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "resource",
          "ref": null
        }
      },
      "storeresult": {
        "name": "storeResult",
        "url": "mysqlnduhconnection.storeresult",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "resource",
          "ref": null
        }
      },
      "txcommit": {
        "name": "txCommit",
        "url": "mysqlnduhconnection.txcommit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "txrollback": {
        "name": "txRollback",
        "url": "mysqlnduhconnection.txrollback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "bool",
          "ref": null
        }
      },
      "useresult": {
        "name": "useResult",
        "url": "mysqlnduhconnection.useresult",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_connection $connection",
          "returnValue": "resource",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mysqlnduhconnection.construct",
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
  "mysqlnduhpreparedstatement": {
    "name": "MysqlndUhPreparedStatement",
    "methods": {
      "execute": {
        "name": "execute",
        "url": "mysqlnduhpreparedstatement.execute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_prepared_statement $statement",
          "returnValue": "bool",
          "ref": null
        }
      },
      "prepare": {
        "name": "prepare",
        "url": "mysqlnduhpreparedstatement.prepare",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mysqlnd_prepared_statement $statement, string $query",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mysqlnduhpreparedstatement.construct",
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
  }
};
