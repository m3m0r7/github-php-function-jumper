functions.s = {
  sapi_windows_cp_conv: {
    name: "sapi_windows_cp_conv",
    url: "function.sapi-windows-cp-conv",
    spec: {
      parameters: "int|string $in_codepage, int|string $out_codepage, string $subject",
      returnValue: "string",
      ref: null
    }
  },
  sapi_windows_cp_get: {
    name: "sapi_windows_cp_get",
    url: "function.sapi-windows-cp-get",
    spec: {
      parameters: "string $kind",
      returnValue: "int",
      ref: null
    }
  },
  sapi_windows_cp_is_utf8: {
    name: "sapi_windows_cp_is_utf8",
    url: "function.sapi-windows-cp-is-utf8",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  sapi_windows_cp_set: {
    name: "sapi_windows_cp_set",
    url: "function.sapi-windows-cp-set",
    spec: {
      parameters: "int $cp",
      returnValue: "bool",
      ref: null
    }
  },
  sapi_windows_vt100_support: {
    name: "sapi_windows_vt100_support",
    url: "function.sapi-windows-vt100-support",
    spec: {
      parameters: "resource $stream [, bool $enable ]",
      returnValue: "bool",
      ref: null
    }
  },
  scandir: {
    name: "scandir",
    url: "function.scandir",
    spec: {
      parameters: "string $directory [, int $sorting_order = SCANDIR_SORT_ASCENDING [, resource $context ]]",
      returnValue: "array",
      ref: null
    }
  },
  seaslog_get_author: {
    name: "seaslog_get_author",
    url: "function.seaslog-get-author",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  seaslog_get_version: {
    name: "seaslog_get_version",
    url: "function.seaslog-get-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sem_acquire: {
    name: "sem_acquire",
    url: "function.sem-acquire",
    spec: {
      parameters: "resource $sem_identifier [, bool $nowait = FALSE ]",
      returnValue: "bool",
      ref: null
    }
  },
  sem_get: {
    name: "sem_get",
    url: "function.sem-get",
    spec: {
      parameters: "int $key [, int $max_acquire = 1 [, int $perm = 0666 [, int $auto_release = 1 ]]]",
      returnValue: "resource",
      ref: null
    }
  },
  sem_release: {
    name: "sem_release",
    url: "function.sem-release",
    spec: {
      parameters: "resource $sem_identifier",
      returnValue: "bool",
      ref: null
    }
  },
  sem_remove: {
    name: "sem_remove",
    url: "function.sem-remove",
    spec: {
      parameters: "resource $sem_identifier",
      returnValue: "bool",
      ref: null
    }
  },
  serialize: {
    name: "serialize",
    url: "function.serialize",
    spec: {
      parameters: "mixed $value",
      returnValue: "string",
      ref: null
    }
  },
  session_abort: {
    name: "session_abort",
    url: "function.session-abort",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  session_cache_expire: {
    name: "session_cache_expire",
    url: "function.session-cache-expire",
    spec: {
      parameters: "[ string $new_cache_expire ]",
      returnValue: "int",
      ref: null
    }
  },
  session_cache_limiter: {
    name: "session_cache_limiter",
    url: "function.session-cache-limiter",
    spec: {
      parameters: "[ string $cache_limiter ]",
      returnValue: "string",
      ref: null
    }
  },
  session_commit: {
    name: "session_commit",
    url: "function.session-commit",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: {
        name: "session_write_close()",
        url: "function.session-write-close"
      }
    }
  },
  session_create_id: {
    name: "session_create_id",
    url: "function.session-create-id",
    spec: {
      parameters: "[ string $prefix ]",
      returnValue: "string",
      ref: null
    }
  },
  session_decode: {
    name: "session_decode",
    url: "function.session-decode",
    spec: {
      parameters: "string $data",
      returnValue: "bool",
      ref: null
    }
  },
  session_destroy: {
    name: "session_destroy",
    url: "function.session-destroy",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  session_encode: {
    name: "session_encode",
    url: "function.session-encode",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  session_gc: {
    name: "session_gc",
    url: "function.session-gc",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  session_get_cookie_params: {
    name: "session_get_cookie_params",
    url: "function.session-get-cookie-params",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  session_id: {
    name: "session_id",
    url: "function.session-id",
    spec: {
      parameters: "[ string $id ]",
      returnValue: "string",
      ref: null
    }
  },
  session_is_registered: {
    name: "session_is_registered",
    url: "function.session-is-registered",
    spec: {
      parameters: "string $name",
      returnValue: "bool",
      ref: null
    }
  },
  session_module_name: {
    name: "session_module_name",
    url: "function.session-module-name",
    spec: {
      parameters: "[ string $module ]",
      returnValue: "string",
      ref: null
    }
  },
  session_name: {
    name: "session_name",
    url: "function.session-name",
    spec: {
      parameters: "[ string $name ]",
      returnValue: "string",
      ref: null
    }
  },
  session_pgsql_add_error: {
    name: "session_pgsql_add_error",
    url: "function.session-pgsql-add-error",
    spec: {
      parameters: "int $error_level [, string $error_message ]",
      returnValue: "bool",
      ref: null
    }
  },
  session_pgsql_get_error: {
    name: "session_pgsql_get_error",
    url: "function.session-pgsql-get-error",
    spec: {
      parameters: "[ bool $with_error_message = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  session_pgsql_get_field: {
    name: "session_pgsql_get_field",
    url: "function.session-pgsql-get-field",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  session_pgsql_reset: {
    name: "session_pgsql_reset",
    url: "function.session-pgsql-reset",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  session_pgsql_set_field: {
    name: "session_pgsql_set_field",
    url: "function.session-pgsql-set-field",
    spec: {
      parameters: "string $value",
      returnValue: "bool",
      ref: null
    }
  },
  session_pgsql_status: {
    name: "session_pgsql_status",
    url: "function.session-pgsql-status",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  session_regenerate_id: {
    name: "session_regenerate_id",
    url: "function.session-regenerate-id",
    spec: {
      parameters: "[ bool $delete_old_session = FALSE ]",
      returnValue: "bool",
      ref: null
    }
  },
  session_register: {
    name: "session_register",
    url: "function.session-register",
    spec: {
      parameters: "mixed $name [, mixed $... ]",
      returnValue: "bool",
      ref: null
    }
  },
  session_register_shutdown: {
    name: "session_register_shutdown",
    url: "function.session-register-shutdown",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  session_reset: {
    name: "session_reset",
    url: "function.session-reset",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  session_save_path: {
    name: "session_save_path",
    url: "function.session-save-path",
    spec: {
      parameters: "[ string $path ]",
      returnValue: "string",
      ref: null
    }
  },
  session_set_cookie_params: {
    name: "session_set_cookie_params",
    url: "function.session-set-cookie-params",
    spec: {
      parameters: "int $lifetime [, string $path [, string $domain [, bool $secure = FALSE [, bool $httponly = FALSE ]]]]",
      returnValue: "bool",
      ref: null
    }
  },
  session_set_save_handler: {
    name: "session_set_save_handler",
    url: "function.session-set-save-handler",
    spec: {
      parameters: "callable $open, callable $close, callable $read, callable $write, callable $destroy, callable $gc [, callable $create_sid [, callable $validate_sid [, callable $update_timestamp ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  session_start: {
    name: "session_start",
    url: "function.session-start",
    spec: {
      parameters: "[ array $options = array() ]",
      returnValue: "bool",
      ref: null
    }
  },
  session_status: {
    name: "session_status",
    url: "function.session-status",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  session_unregister: {
    name: "session_unregister",
    url: "function.session-unregister",
    spec: {
      parameters: "string $name",
      returnValue: "bool",
      ref: null
    }
  },
  session_unset: {
    name: "session_unset",
    url: "function.session-unset",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  session_write_close: {
    name: "session_write_close",
    url: "function.session-write-close",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  setcookie: {
    name: "setcookie",
    url: "function.setcookie",
    spec: {
      parameters: "string $name [, string $value = \"\" [, int $expire = 0 [, string $path = \"\" [, string $domain = \"\" [, bool $secure = FALSE [, bool $httponly = FALSE ]]]]]]",
      returnValue: "bool",
      ref: null
    }
  },
  setlocale: {
    name: "setlocale",
    url: "function.setlocale",
    spec: {
      parameters: "int $category, string $locale [, string $... ]",
      returnValue: "string",
      ref: null
    }
  },
  setproctitle: {
    name: "setproctitle",
    url: "function.setproctitle",
    spec: {
      parameters: "string $title",
      returnValue: "void",
      ref: null
    }
  },
  setrawcookie: {
    name: "setrawcookie",
    url: "function.setrawcookie",
    spec: {
      parameters: "string $name [, string $value [, int $expire = 0 [, string $path [, string $domain [, bool $secure = FALSE [, bool $httponly = FALSE ]]]]]]",
      returnValue: "bool",
      ref: null
    }
  },
  setthreadtitle: {
    name: "setthreadtitle",
    url: "function.setthreadtitle",
    spec: {
      parameters: "string $title",
      returnValue: "bool",
      ref: null
    }
  },
  settype: {
    name: "settype",
    url: "function.settype",
    spec: {
      parameters: "mixed &$var, string $type",
      returnValue: "bool",
      ref: null
    }
  },
  set_error_handler: {
    name: "set_error_handler",
    url: "function.set-error-handler",
    spec: {
      parameters: "callable $error_handler [, int $error_types = E_ALL | E_STRICT ]",
      returnValue: "mixed",
      ref: null
    }
  },
  set_exception_handler: {
    name: "set_exception_handler",
    url: "function.set-exception-handler",
    spec: {
      parameters: "callable $exception_handler",
      returnValue: "callable",
      ref: null
    }
  },
  set_file_buffer: {
    name: "set_file_buffer",
    url: "function.set-file-buffer",
    spec: {
      parameters: "resource $stream, int $buffer",
      returnValue: "int",
      ref: {
        name: "stream_set_write_buffer()",
        url: "function.stream-set-write-buffer"
      }
    }
  },
  set_include_path: {
    name: "set_include_path",
    url: "function.set-include-path",
    spec: {
      parameters: "string $new_include_path",
      returnValue: "string",
      ref: null
    }
  },
  set_magic_quotes_runtime: {
    name: "set_magic_quotes_runtime",
    url: "function.set-magic-quotes-runtime",
    spec: {
      parameters: "bool $new_setting",
      returnValue: "bool",
      ref: null
    }
  },
  set_socket_blocking: {
    name: "set_socket_blocking",
    url: "function.set-socket-blocking",
    spec: {
      parameters: "resource $stream, bool $mode",
      returnValue: "bool",
      ref: {
        name: "stream_set_blocking()",
        url: "function.stream-set-blocking"
      }
    }
  },
  set_time_limit: {
    name: "set_time_limit",
    url: "function.set-time-limit",
    spec: {
      parameters: "int $seconds",
      returnValue: "bool",
      ref: null
    }
  },
  sha1: {
    name: "sha1",
    url: "function.sha1",
    spec: {
      parameters: "string $str [, bool $raw_output = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  sha1_file: {
    name: "sha1_file",
    url: "function.sha1-file",
    spec: {
      parameters: "string $filename [, bool $raw_output = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  shell_exec: {
    name: "shell_exec",
    url: "function.shell-exec",
    spec: {
      parameters: "string $cmd",
      returnValue: "string",
      ref: null
    }
  },
  shmop_close: {
    name: "shmop_close",
    url: "function.shmop-close",
    spec: {
      parameters: "resource $shmid",
      returnValue: "void",
      ref: null
    }
  },
  shmop_delete: {
    name: "shmop_delete",
    url: "function.shmop-delete",
    spec: {
      parameters: "resource $shmid",
      returnValue: "bool",
      ref: null
    }
  },
  shmop_open: {
    name: "shmop_open",
    url: "function.shmop-open",
    spec: {
      parameters: "int $key, string $flags, int $mode, int $size",
      returnValue: "resource",
      ref: null
    }
  },
  shmop_read: {
    name: "shmop_read",
    url: "function.shmop-read",
    spec: {
      parameters: "resource $shmid, int $start, int $count",
      returnValue: "string",
      ref: null
    }
  },
  shmop_size: {
    name: "shmop_size",
    url: "function.shmop-size",
    spec: {
      parameters: "resource $shmid",
      returnValue: "int",
      ref: null
    }
  },
  shmop_write: {
    name: "shmop_write",
    url: "function.shmop-write",
    spec: {
      parameters: "resource $shmid, string $data, int $offset",
      returnValue: "int",
      ref: null
    }
  },
  shm_attach: {
    name: "shm_attach",
    url: "function.shm-attach",
    spec: {
      parameters: "int $key [, int $memsize [, int $perm = 0666 ]]",
      returnValue: "resource",
      ref: null
    }
  },
  shm_detach: {
    name: "shm_detach",
    url: "function.shm-detach",
    spec: {
      parameters: "resource $shm_identifier",
      returnValue: "bool",
      ref: null
    }
  },
  shm_get_var: {
    name: "shm_get_var",
    url: "function.shm-get-var",
    spec: {
      parameters: "resource $shm_identifier, int $variable_key",
      returnValue: "mixed",
      ref: null
    }
  },
  shm_has_var: {
    name: "shm_has_var",
    url: "function.shm-has-var",
    spec: {
      parameters: "resource $shm_identifier, int $variable_key",
      returnValue: "bool",
      ref: null
    }
  },
  shm_put_var: {
    name: "shm_put_var",
    url: "function.shm-put-var",
    spec: {
      parameters: "resource $shm_identifier, int $variable_key, mixed $variable",
      returnValue: "bool",
      ref: null
    }
  },
  shm_remove: {
    name: "shm_remove",
    url: "function.shm-remove",
    spec: {
      parameters: "resource $shm_identifier",
      returnValue: "bool",
      ref: null
    }
  },
  shm_remove_var: {
    name: "shm_remove_var",
    url: "function.shm-remove-var",
    spec: {
      parameters: "resource $shm_identifier, int $variable_key",
      returnValue: "bool",
      ref: null
    }
  },
  show_source: {
    name: "show_source",
    url: "function.show-source",
    spec: {
      parameters: "string $filename [, bool $return = FALSE ]",
      returnValue: "mixed",
      ref: {
        name: "highlight_file()",
        url: "function.highlight-file"
      }
    }
  },
  shuffle: {
    name: "shuffle",
    url: "function.shuffle",
    spec: {
      parameters: "array &$array",
      returnValue: "bool",
      ref: null
    }
  },
  similar_text: {
    name: "similar_text",
    url: "function.similar-text",
    spec: {
      parameters: "string $first, string $second [, float &$percent ]",
      returnValue: "int",
      ref: null
    }
  },
  simplexml_import_dom: {
    name: "simplexml_import_dom",
    url: "function.simplexml-import-dom",
    spec: {
      parameters: "DOMNode $node [, string $class_name = \"SimpleXMLElement\" ]",
      returnValue: "SimpleXMLElement",
      ref: null
    }
  },
  simplexml_load_file: {
    name: "simplexml_load_file",
    url: "function.simplexml-load-file",
    spec: {
      parameters: "string $filename [, string $class_name = \"SimpleXMLElement\" [, int $options = 0 [, string $ns = \"\" [, bool $is_prefix = FALSE ]]]]",
      returnValue: "SimpleXMLElement",
      ref: null
    }
  },
  simplexml_load_string: {
    name: "simplexml_load_string",
    url: "function.simplexml-load-string",
    spec: {
      parameters: "string $data [, string $class_name = \"SimpleXMLElement\" [, int $options = 0 [, string $ns [, bool $is_prefix = FALSE ]]]]",
      returnValue: "SimpleXMLElement",
      ref: null
    }
  },
  sin: {
    name: "sin",
    url: "function.sin",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  sinh: {
    name: "sinh",
    url: "function.sinh",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  sizeof: {
    name: "sizeof",
    url: "function.sizeof",
    spec: {
      parameters: "mixed $array_or_countable [, int $mode = COUNT_NORMAL ]",
      returnValue: "int",
      ref: {
        name: "count()",
        url: "function.count"
      }
    }
  },
  sleep: {
    name: "sleep",
    url: "function.sleep",
    spec: {
      parameters: "int $seconds",
      returnValue: "int",
      ref: null
    }
  },
  snmp2_get: {
    name: "snmp2_get",
    url: "function.snmp2-get",
    spec: {
      parameters: "string $host, string $community, string $object_id [, string $timeout = 1000000 [, string $retries = 5 ]]",
      returnValue: "string",
      ref: null
    }
  },
  snmp2_getnext: {
    name: "snmp2_getnext",
    url: "function.snmp2-getnext",
    spec: {
      parameters: "string $host, string $community, string $object_id [, string $timeout = 1000000 [, string $retries = 5 ]]",
      returnValue: "string",
      ref: null
    }
  },
  snmp2_real_walk: {
    name: "snmp2_real_walk",
    url: "function.snmp2-real-walk",
    spec: {
      parameters: "string $host, string $community, string $object_id [, string $timeout = 1000000 [, string $retries = 5 ]]",
      returnValue: "array",
      ref: null
    }
  },
  snmp2_set: {
    name: "snmp2_set",
    url: "function.snmp2-set",
    spec: {
      parameters: "string $host, string $community, string $object_id, string $type, string $value [, string $timeout = 1000000 [, string $retries = 5 ]]",
      returnValue: "bool",
      ref: null
    }
  },
  snmp2_walk: {
    name: "snmp2_walk",
    url: "function.snmp2-walk",
    spec: {
      parameters: "string $host, string $community, string $object_id [, string $timeout = 1000000 [, string $retries = 5 ]]",
      returnValue: "array",
      ref: null
    }
  },
  snmp3_get: {
    name: "snmp3_get",
    url: "function.snmp3-get",
    spec: {
      parameters: "string $host, string $sec_name, string $sec_level, string $auth_protocol, string $auth_passphrase, string $priv_protocol, string $priv_passphrase, string $object_id [, string $timeout = 1000000 [, string $retries = 5 ]]",
      returnValue: "string",
      ref: null
    }
  },
  snmp3_getnext: {
    name: "snmp3_getnext",
    url: "function.snmp3-getnext",
    spec: {
      parameters: "string $host, string $sec_name, string $sec_level, string $auth_protocol, string $auth_passphrase, string $priv_protocol, string $priv_passphrase, string $object_id [, string $timeout = 1000000 [, string $retries = 5 ]]",
      returnValue: "string",
      ref: null
    }
  },
  snmp3_real_walk: {
    name: "snmp3_real_walk",
    url: "function.snmp3-real-walk",
    spec: {
      parameters: "string $host, string $sec_name, string $sec_level, string $auth_protocol, string $auth_passphrase, string $priv_protocol, string $priv_passphrase, string $object_id [, string $timeout = 1000000 [, string $retries = 5 ]]",
      returnValue: "array",
      ref: null
    }
  },
  snmp3_set: {
    name: "snmp3_set",
    url: "function.snmp3-set",
    spec: {
      parameters: "string $host, string $sec_name, string $sec_level, string $auth_protocol, string $auth_passphrase, string $priv_protocol, string $priv_passphrase, string $object_id, string $type, string $value [, int $timeout = 1000000 [, int $retries = 5 ]]",
      returnValue: "bool",
      ref: null
    }
  },
  snmp3_walk: {
    name: "snmp3_walk",
    url: "function.snmp3-walk",
    spec: {
      parameters: "string $host, string $sec_name, string $sec_level, string $auth_protocol, string $auth_passphrase, string $priv_protocol, string $priv_passphrase, string $object_id [, string $timeout = 1000000 [, string $retries = 5 ]]",
      returnValue: "array",
      ref: null
    }
  },
  snmpget: {
    name: "snmpget",
    url: "function.snmpget",
    spec: {
      parameters: "string $hostname, string $community, string $object_id [, int $timeout = 1000000 [, int $retries = 5 ]]",
      returnValue: "string",
      ref: null
    }
  },
  snmpgetnext: {
    name: "snmpgetnext",
    url: "function.snmpgetnext",
    spec: {
      parameters: "string $host, string $community, string $object_id [, int $timeout = 1000000 [, int $retries = 5 ]]",
      returnValue: "string",
      ref: null
    }
  },
  snmprealwalk: {
    name: "snmprealwalk",
    url: "function.snmprealwalk",
    spec: {
      parameters: "string $host, string $community, string $object_id [, int $timeout = 1000000 [, int $retries = 5 ]]",
      returnValue: "array",
      ref: null
    }
  },
  snmpset: {
    name: "snmpset",
    url: "function.snmpset",
    spec: {
      parameters: "string $host, string $community, string $object_id, string $type, mixed $value [, int $timeout = 1000000 [, int $retries = 5 ]]",
      returnValue: "bool",
      ref: null
    }
  },
  snmpwalk: {
    name: "snmpwalk",
    url: "function.snmpwalk",
    spec: {
      parameters: "string $hostname, string $community, string $object_id [, int $timeout = 1000000 [, int $retries = 5 ]]",
      returnValue: "array",
      ref: null
    }
  },
  snmpwalkoid: {
    name: "snmpwalkoid",
    url: "function.snmpwalkoid",
    spec: {
      parameters: "string $hostname, string $community, string $object_id [, int $timeout = 1000000 [, int $retries = 5 ]]",
      returnValue: "array",
      ref: null
    }
  },
  snmp_get_quick_print: {
    name: "snmp_get_quick_print",
    url: "function.snmp-get-quick-print",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  snmp_get_valueretrieval: {
    name: "snmp_get_valueretrieval",
    url: "function.snmp-get-valueretrieval",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  snmp_read_mib: {
    name: "snmp_read_mib",
    url: "function.snmp-read-mib",
    spec: {
      parameters: "string $filename",
      returnValue: "bool",
      ref: null
    }
  },
  snmp_set_enum_print: {
    name: "snmp_set_enum_print",
    url: "function.snmp-set-enum-print",
    spec: {
      parameters: "int $enum_print",
      returnValue: "bool",
      ref: null
    }
  },
  snmp_set_oid_numeric_print: {
    name: "snmp_set_oid_numeric_print",
    url: "function.snmp-set-oid-numeric-print",
    spec: {
      parameters: "int $oid_format",
      returnValue: "void",
      ref: null
    }
  },
  snmp_set_oid_output_format: {
    name: "snmp_set_oid_output_format",
    url: "function.snmp-set-oid-output-format",
    spec: {
      parameters: "int $oid_format = SNMP_OID_OUTPUT_MODULE",
      returnValue: "bool",
      ref: null
    }
  },
  snmp_set_quick_print: {
    name: "snmp_set_quick_print",
    url: "function.snmp-set-quick-print",
    spec: {
      parameters: "bool $quick_print",
      returnValue: "bool",
      ref: null
    }
  },
  snmp_set_valueretrieval: {
    name: "snmp_set_valueretrieval",
    url: "function.snmp-set-valueretrieval",
    spec: {
      parameters: "int $method = SNMP_VALUE_LIBRARY",
      returnValue: "bool",
      ref: null
    }
  },
  socket_accept: {
    name: "socket_accept",
    url: "function.socket-accept",
    spec: {
      parameters: "resource $socket",
      returnValue: "resource",
      ref: null
    }
  },
  socket_addrinfo_bind: {
    name: "socket_addrinfo_bind",
    url: "function.socket-addrinfo-bind",
    spec: {
      parameters: "resource $addr",
      returnValue: "resource",
      ref: null
    }
  },
  socket_addrinfo_connect: {
    name: "socket_addrinfo_connect",
    url: "function.socket-addrinfo-connect",
    spec: {
      parameters: "resource $addr",
      returnValue: "resource",
      ref: null
    }
  },
  socket_addrinfo_explain: {
    name: "socket_addrinfo_explain",
    url: "function.socket-addrinfo-explain",
    spec: {
      parameters: "resource $addr",
      returnValue: "array",
      ref: null
    }
  },
  socket_addrinfo_lookup: {
    name: "socket_addrinfo_lookup",
    url: "function.socket-addrinfo-lookup",
    spec: {
      parameters: "string $host [, string $service [, array $hints ]]",
      returnValue: "array",
      ref: null
    }
  },
  socket_bind: {
    name: "socket_bind",
    url: "function.socket-bind",
    spec: {
      parameters: "resource $socket, string $address [, int $port = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  socket_clear_error: {
    name: "socket_clear_error",
    url: "function.socket-clear-error",
    spec: {
      parameters: "[ resource $socket ]",
      returnValue: "void",
      ref: null
    }
  },
  socket_close: {
    name: "socket_close",
    url: "function.socket-close",
    spec: {
      parameters: "resource $socket",
      returnValue: "void",
      ref: null
    }
  },
  socket_cmsg_space: {
    name: "socket_cmsg_space",
    url: "function.socket-cmsg-space",
    spec: {
      parameters: "int $level, int $type",
      returnValue: "int",
      ref: null
    }
  },
  socket_connect: {
    name: "socket_connect",
    url: "function.socket-connect",
    spec: {
      parameters: "resource $socket, string $address [, int $port = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  socket_create: {
    name: "socket_create",
    url: "function.socket-create",
    spec: {
      parameters: "int $domain, int $type, int $protocol",
      returnValue: "resource",
      ref: null
    }
  },
  socket_create_listen: {
    name: "socket_create_listen",
    url: "function.socket-create-listen",
    spec: {
      parameters: "int $port [, int $backlog = 128 ]",
      returnValue: "resource",
      ref: null
    }
  },
  socket_create_pair: {
    name: "socket_create_pair",
    url: "function.socket-create-pair",
    spec: {
      parameters: "int $domain, int $type, int $protocol, array &$fd",
      returnValue: "bool",
      ref: null
    }
  },
  socket_export_stream: {
    name: "socket_export_stream",
    url: "function.socket-export-stream",
    spec: {
      parameters: "resource $socket",
      returnValue: "resource",
      ref: null
    }
  },
  socket_getopt: {
    name: "socket_getopt",
    url: "function.socket-getopt",
    spec: {
      parameters: "resource $socket, int $level, int $optname",
      returnValue: "mixed",
      ref: {
        name: "socket_get_option()",
        url: "function.socket-get-option"
      }
    }
  },
  socket_getpeername: {
    name: "socket_getpeername",
    url: "function.socket-getpeername",
    spec: {
      parameters: "resource $socket, string &$address [, int &$port ]",
      returnValue: "bool",
      ref: null
    }
  },
  socket_getsockname: {
    name: "socket_getsockname",
    url: "function.socket-getsockname",
    spec: {
      parameters: "resource $socket, string &$addr [, int &$port ]",
      returnValue: "bool",
      ref: null
    }
  },
  socket_get_option: {
    name: "socket_get_option",
    url: "function.socket-get-option",
    spec: {
      parameters: "resource $socket, int $level, int $optname",
      returnValue: "mixed",
      ref: null
    }
  },
  socket_get_status: {
    name: "socket_get_status",
    url: "function.socket-get-status",
    spec: {
      parameters: "resource $stream",
      returnValue: "array",
      ref: {
        name: "stream_get_meta_data()",
        url: "function.stream-get-meta-data"
      }
    }
  },
  socket_import_stream: {
    name: "socket_import_stream",
    url: "function.socket-import-stream",
    spec: {
      parameters: "resource $stream",
      returnValue: "resource",
      ref: null
    }
  },
  socket_last_error: {
    name: "socket_last_error",
    url: "function.socket-last-error",
    spec: {
      parameters: "[ resource $socket ]",
      returnValue: "int",
      ref: null
    }
  },
  socket_listen: {
    name: "socket_listen",
    url: "function.socket-listen",
    spec: {
      parameters: "resource $socket [, int $backlog = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  socket_read: {
    name: "socket_read",
    url: "function.socket-read",
    spec: {
      parameters: "resource $socket, int $length [, int $type = PHP_BINARY_READ ]",
      returnValue: "string",
      ref: null
    }
  },
  socket_recv: {
    name: "socket_recv",
    url: "function.socket-recv",
    spec: {
      parameters: "resource $socket, string &$buf, int $len, int $flags",
      returnValue: "int",
      ref: null
    }
  },
  socket_recvfrom: {
    name: "socket_recvfrom",
    url: "function.socket-recvfrom",
    spec: {
      parameters: "resource $socket, string &$buf, int $len, int $flags, string &$name [, int &$port ]",
      returnValue: "int",
      ref: null
    }
  },
  socket_recvmsg: {
    name: "socket_recvmsg",
    url: "function.socket-recvmsg",
    spec: {
      parameters: "resource $socket, string $message [, int $flags ]",
      returnValue: "int",
      ref: null
    }
  },
  socket_select: {
    name: "socket_select",
    url: "function.socket-select",
    spec: {
      parameters: "array &$read, array &$write, array &$except, int $tv_sec [, int $tv_usec = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  socket_send: {
    name: "socket_send",
    url: "function.socket-send",
    spec: {
      parameters: "resource $socket, string $buf, int $len, int $flags",
      returnValue: "int",
      ref: null
    }
  },
  socket_sendmsg: {
    name: "socket_sendmsg",
    url: "function.socket-sendmsg",
    spec: {
      parameters: "resource $socket, array $message, int $flags",
      returnValue: "int",
      ref: null
    }
  },
  socket_sendto: {
    name: "socket_sendto",
    url: "function.socket-sendto",
    spec: {
      parameters: "resource $socket, string $buf, int $len, int $flags, string $addr [, int $port = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  socket_setopt: {
    name: "socket_setopt",
    url: "function.socket-setopt",
    spec: {
      parameters: "resource $socket, int $level, int $optname, mixed $optval",
      returnValue: "bool",
      ref: {
        name: "socket_set_option()",
        url: "function.socket-set-option"
      }
    }
  },
  socket_set_block: {
    name: "socket_set_block",
    url: "function.socket-set-block",
    spec: {
      parameters: "resource $socket",
      returnValue: "bool",
      ref: null
    }
  },
  socket_set_blocking: {
    name: "socket_set_blocking",
    url: "function.socket-set-blocking",
    spec: {
      parameters: "resource $stream, bool $mode",
      returnValue: "bool",
      ref: {
        name: "stream_set_blocking()",
        url: "function.stream-set-blocking"
      }
    }
  },
  socket_set_nonblock: {
    name: "socket_set_nonblock",
    url: "function.socket-set-nonblock",
    spec: {
      parameters: "resource $socket",
      returnValue: "bool",
      ref: null
    }
  },
  socket_set_option: {
    name: "socket_set_option",
    url: "function.socket-set-option",
    spec: {
      parameters: "resource $socket, int $level, int $optname, mixed $optval",
      returnValue: "bool",
      ref: null
    }
  },
  socket_set_timeout: {
    name: "socket_set_timeout",
    url: "function.socket-set-timeout",
    spec: {
      parameters: "resource $stream, int $seconds [, int $microseconds = 0 ]",
      returnValue: "bool",
      ref: {
        name: "stream_set_timeout()",
        url: "function.stream-set-timeout"
      }
    }
  },
  socket_shutdown: {
    name: "socket_shutdown",
    url: "function.socket-shutdown",
    spec: {
      parameters: "resource $socket [, int $how = 2 ]",
      returnValue: "bool",
      ref: null
    }
  },
  socket_strerror: {
    name: "socket_strerror",
    url: "function.socket-strerror",
    spec: {
      parameters: "int $errno",
      returnValue: "string",
      ref: null
    }
  },
  socket_write: {
    name: "socket_write",
    url: "function.socket-write",
    spec: {
      parameters: "resource $socket, string $buffer [, int $length = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  socket_wsaprotocol_info_export: {
    name: "socket_wsaprotocol_info_export",
    url: "function.socket-wsaprotocol-info-export",
    spec: {
      parameters: "resource $socket, int $target_pid",
      returnValue: "string",
      ref: null
    }
  },
  socket_wsaprotocol_info_import: {
    name: "socket_wsaprotocol_info_import",
    url: "function.socket-wsaprotocol-info-import",
    spec: {
      parameters: "string $info_id",
      returnValue: "resource",
      ref: null
    }
  },
  socket_wsaprotocol_info_release: {
    name: "socket_wsaprotocol_info_release",
    url: "function.socket-wsaprotocol-info-release",
    spec: {
      parameters: "string $info_id",
      returnValue: "bool",
      ref: null
    }
  },
  sodium_add: {
    name: "sodium_add",
    url: "function.sodium-add",
    spec: {
      parameters: "string &$val, string $addv",
      returnValue: "void",
      ref: null
    }
  },
  sodium_base642bin: {
    name: "sodium_base642bin",
    url: "function.sodium-base642bin",
    spec: {
      parameters: "string $b64, int $id [, string $ignore ]",
      returnValue: "string",
      ref: null
    }
  },
  sodium_bin2base64: {
    name: "sodium_bin2base64",
    url: "function.sodium-bin2base64",
    spec: {
      parameters: "string $bin, int $id",
      returnValue: "string",
      ref: null
    }
  },
  sodium_bin2hex: {
    name: "sodium_bin2hex",
    url: "function.sodium-bin2hex",
    spec: {
      parameters: "string $bin",
      returnValue: "string",
      ref: null
    }
  },
  sodium_compare: {
    name: "sodium_compare",
    url: "function.sodium-compare",
    spec: {
      parameters: "string $buf1, string $buf2",
      returnValue: "int",
      ref: null
    }
  },
  sodium_crypto_aead_aes256gcm_decrypt: {
    name: "sodium_crypto_aead_aes256gcm_decrypt",
    url: "function.sodium-crypto-aead-aes256gcm-decrypt",
    spec: {
      parameters: "string $ciphertext, string $ad, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_aes256gcm_encrypt: {
    name: "sodium_crypto_aead_aes256gcm_encrypt",
    url: "function.sodium-crypto-aead-aes256gcm-encrypt",
    spec: {
      parameters: "string $msg, string $ad, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_aes256gcm_is_available: {
    name: "sodium_crypto_aead_aes256gcm_is_available",
    url: "function.sodium-crypto-aead-aes256gcm-is-available",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  sodium_crypto_aead_aes256gcm_keygen: {
    name: "sodium_crypto_aead_aes256gcm_keygen",
    url: "function.sodium-crypto-aead-aes256gcm-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_chacha20poly1305_decrypt: {
    name: "sodium_crypto_aead_chacha20poly1305_decrypt",
    url: "function.sodium-crypto-aead-chacha20poly1305-decrypt",
    spec: {
      parameters: "string $ciphertext, string $ad, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_chacha20poly1305_encrypt: {
    name: "sodium_crypto_aead_chacha20poly1305_encrypt",
    url: "function.sodium-crypto-aead-chacha20poly1305-encrypt",
    spec: {
      parameters: "string $msg, string $ad, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_chacha20poly1305_ietf_decrypt: {
    name: "sodium_crypto_aead_chacha20poly1305_ietf_decrypt",
    url: "function.sodium-crypto-aead-chacha20poly1305-ietf-decrypt",
    spec: {
      parameters: "string $ciphertext, string $ad, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_chacha20poly1305_ietf_encrypt: {
    name: "sodium_crypto_aead_chacha20poly1305_ietf_encrypt",
    url: "function.sodium-crypto-aead-chacha20poly1305-ietf-encrypt",
    spec: {
      parameters: "string $msg, string $ad, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_chacha20poly1305_ietf_keygen: {
    name: "sodium_crypto_aead_chacha20poly1305_ietf_keygen",
    url: "function.sodium-crypto-aead-chacha20poly1305-ietf-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_chacha20poly1305_keygen: {
    name: "sodium_crypto_aead_chacha20poly1305_keygen",
    url: "function.sodium-crypto-aead-chacha20poly1305-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_xchacha20poly1305_ietf_decrypt: {
    name: "sodium_crypto_aead_xchacha20poly1305_ietf_decrypt",
    url: "function.sodium-crypto-aead-xchacha20poly1305-ietf-decrypt",
    spec: {
      parameters: "string $ciphertext, string $ad, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_xchacha20poly1305_ietf_encrypt: {
    name: "sodium_crypto_aead_xchacha20poly1305_ietf_encrypt",
    url: "function.sodium-crypto-aead-xchacha20poly1305-ietf-encrypt",
    spec: {
      parameters: "string $msg, string $ad, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_aead_xchacha20poly1305_ietf_keygen: {
    name: "sodium_crypto_aead_xchacha20poly1305_ietf_keygen",
    url: "function.sodium-crypto-aead-xchacha20poly1305-ietf-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_auth: {
    name: "sodium_crypto_auth",
    url: "function.sodium-crypto-auth",
    spec: {
      parameters: "string $msg, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_auth_keygen: {
    name: "sodium_crypto_auth_keygen",
    url: "function.sodium-crypto-auth-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_auth_verify: {
    name: "sodium_crypto_auth_verify",
    url: "function.sodium-crypto-auth-verify",
    spec: {
      parameters: "string $signature, string $msg, string $key",
      returnValue: "bool",
      ref: null
    }
  },
  sodium_crypto_box: {
    name: "sodium_crypto_box",
    url: "function.sodium-crypto-box",
    spec: {
      parameters: "string $msg, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_box_keypair: {
    name: "sodium_crypto_box_keypair",
    url: "function.sodium-crypto-box-keypair",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_box_keypair_from_secretkey_and_publickey: {
    name: "sodium_crypto_box_keypair_from_secretkey_and_publickey",
    url: "function.sodium-crypto-box-keypair-from-secretkey-and-publickey",
    spec: {
      parameters: "string $secret_key, string $public_key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_box_open: {
    name: "sodium_crypto_box_open",
    url: "function.sodium-crypto-box-open",
    spec: {
      parameters: "string $ciphertext, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_box_publickey: {
    name: "sodium_crypto_box_publickey",
    url: "function.sodium-crypto-box-publickey",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_box_publickey_from_secretkey: {
    name: "sodium_crypto_box_publickey_from_secretkey",
    url: "function.sodium-crypto-box-publickey-from-secretkey",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_box_seal: {
    name: "sodium_crypto_box_seal",
    url: "function.sodium-crypto-box-seal",
    spec: {
      parameters: "string $msg, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_box_seal_open: {
    name: "sodium_crypto_box_seal_open",
    url: "function.sodium-crypto-box-seal-open",
    spec: {
      parameters: "string $ciphertext, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_box_secretkey: {
    name: "sodium_crypto_box_secretkey",
    url: "function.sodium-crypto-box-secretkey",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_box_seed_keypair: {
    name: "sodium_crypto_box_seed_keypair",
    url: "function.sodium-crypto-box-seed-keypair",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_generichash: {
    name: "sodium_crypto_generichash",
    url: "function.sodium-crypto-generichash",
    spec: {
      parameters: "string $msg [, string $key [, int $length = SODIUM_CRYPTO_GENERICHASH_BYTES ]]",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_generichash_final: {
    name: "sodium_crypto_generichash_final",
    url: "function.sodium-crypto-generichash-final",
    spec: {
      parameters: "string &$state [, int $length = SODIUM_CRYPTO_GENERICHASH_BYTES ]",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_generichash_init: {
    name: "sodium_crypto_generichash_init",
    url: "function.sodium-crypto-generichash-init",
    spec: {
      parameters: "[ string $key [, int $length = SODIUM_CRYPTO_GENERICHASH_BYTES ]]",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_generichash_keygen: {
    name: "sodium_crypto_generichash_keygen",
    url: "function.sodium-crypto-generichash-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_generichash_update: {
    name: "sodium_crypto_generichash_update",
    url: "function.sodium-crypto-generichash-update",
    spec: {
      parameters: "string &$state, string $msg",
      returnValue: "bool",
      ref: null
    }
  },
  sodium_crypto_kdf_derive_from_key: {
    name: "sodium_crypto_kdf_derive_from_key",
    url: "function.sodium-crypto-kdf-derive-from-key",
    spec: {
      parameters: "int $subkey_len, int $subkey_id, string $context, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_kdf_keygen: {
    name: "sodium_crypto_kdf_keygen",
    url: "function.sodium-crypto-kdf-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_kx_client_session_keys: {
    name: "sodium_crypto_kx_client_session_keys",
    url: "function.sodium-crypto-kx-client-session-keys",
    spec: {
      parameters: "string $client_keypair, string $server_key",
      returnValue: "array",
      ref: null
    }
  },
  sodium_crypto_kx_keypair: {
    name: "sodium_crypto_kx_keypair",
    url: "function.sodium-crypto-kx-keypair",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_kx_publickey: {
    name: "sodium_crypto_kx_publickey",
    url: "function.sodium-crypto-kx-publickey",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_kx_secretkey: {
    name: "sodium_crypto_kx_secretkey",
    url: "function.sodium-crypto-kx-secretkey",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_kx_seed_keypair: {
    name: "sodium_crypto_kx_seed_keypair",
    url: "function.sodium-crypto-kx-seed-keypair",
    spec: {
      parameters: "string $string",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_kx_server_session_keys: {
    name: "sodium_crypto_kx_server_session_keys",
    url: "function.sodium-crypto-kx-server-session-keys",
    spec: {
      parameters: "string $server_keypair, string $client_key",
      returnValue: "array",
      ref: null
    }
  },
  sodium_crypto_pwhash: {
    name: "sodium_crypto_pwhash",
    url: "function.sodium-crypto-pwhash",
    spec: {
      parameters: "int $length, string $password, string $salt, int $opslimit, int $memlimit [, int $alg ]",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_pwhash_scryptsalsa208sha256: {
    name: "sodium_crypto_pwhash_scryptsalsa208sha256",
    url: "function.sodium-crypto-pwhash-scryptsalsa208sha256",
    spec: {
      parameters: "int $length, string $password, string $salt, int $opslimit, int $memlimit",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_pwhash_scryptsalsa208sha256_str: {
    name: "sodium_crypto_pwhash_scryptsalsa208sha256_str",
    url: "function.sodium-crypto-pwhash-scryptsalsa208sha256-str",
    spec: {
      parameters: "string $password, int $opslimit, int $memlimit",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_pwhash_scryptsalsa208sha256_str_verify: {
    name: "sodium_crypto_pwhash_scryptsalsa208sha256_str_verify",
    url: "function.sodium-crypto-pwhash-scryptsalsa208sha256-str-verify",
    spec: {
      parameters: "string $hash, string $password",
      returnValue: "bool",
      ref: null
    }
  },
  sodium_crypto_pwhash_str: {
    name: "sodium_crypto_pwhash_str",
    url: "function.sodium-crypto-pwhash-str",
    spec: {
      parameters: "string $password, int $opslimit, int $memlimit",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_pwhash_str_needs_rehash: {
    name: "sodium_crypto_pwhash_str_needs_rehash",
    url: "function.sodium-crypto-pwhash-str-needs-rehash",
    spec: {
      parameters: "string $password, int $opslimit, int $memlimit",
      returnValue: "bool",
      ref: null
    }
  },
  sodium_crypto_pwhash_str_verify: {
    name: "sodium_crypto_pwhash_str_verify",
    url: "function.sodium-crypto-pwhash-str-verify",
    spec: {
      parameters: "string $hash, string $password",
      returnValue: "bool",
      ref: null
    }
  },
  sodium_crypto_scalarmult: {
    name: "sodium_crypto_scalarmult",
    url: "function.sodium-crypto-scalarmult",
    spec: {
      parameters: "string $n, string $p",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_scalarmult_base: {
    name: "sodium_crypto_scalarmult_base",
    url: "function.sodium-crypto-scalarmult-base",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: {
        name: "sodium_crypto_box_publickey_from_secretkey()",
        url: "function.sodium-crypto-box-publickey-from-secretkey"
      }
    }
  },
  sodium_crypto_secretbox: {
    name: "sodium_crypto_secretbox",
    url: "function.sodium-crypto-secretbox",
    spec: {
      parameters: "string $string, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_secretbox_keygen: {
    name: "sodium_crypto_secretbox_keygen",
    url: "function.sodium-crypto-secretbox-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_secretbox_open: {
    name: "sodium_crypto_secretbox_open",
    url: "function.sodium-crypto-secretbox-open",
    spec: {
      parameters: "string $ciphertext, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_secretstream_xchacha20poly1305_init_pull: {
    name: "sodium_crypto_secretstream_xchacha20poly1305_init_pull",
    url: "function.sodium-crypto-secretstream-xchacha20poly1305-init-pull",
    spec: {
      parameters: "string $header, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_secretstream_xchacha20poly1305_init_push: {
    name: "sodium_crypto_secretstream_xchacha20poly1305_init_push",
    url: "function.sodium-crypto-secretstream-xchacha20poly1305-init-push",
    spec: {
      parameters: "string $key",
      returnValue: "array",
      ref: null
    }
  },
  sodium_crypto_secretstream_xchacha20poly1305_keygen: {
    name: "sodium_crypto_secretstream_xchacha20poly1305_keygen",
    url: "function.sodium-crypto-secretstream-xchacha20poly1305-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_secretstream_xchacha20poly1305_pull: {
    name: "sodium_crypto_secretstream_xchacha20poly1305_pull",
    url: "function.sodium-crypto-secretstream-xchacha20poly1305-pull",
    spec: {
      parameters: "string &$state, string $c [, string $ad ]",
      returnValue: "array",
      ref: null
    }
  },
  sodium_crypto_secretstream_xchacha20poly1305_push: {
    name: "sodium_crypto_secretstream_xchacha20poly1305_push",
    url: "function.sodium-crypto-secretstream-xchacha20poly1305-push",
    spec: {
      parameters: "string &$state, string $msg [, string $ad [, int $tag ]]",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_secretstream_xchacha20poly1305_rekey: {
    name: "sodium_crypto_secretstream_xchacha20poly1305_rekey",
    url: "function.sodium-crypto-secretstream-xchacha20poly1305-rekey",
    spec: {
      parameters: "string &$state",
      returnValue: "void",
      ref: null
    }
  },
  sodium_crypto_shorthash: {
    name: "sodium_crypto_shorthash",
    url: "function.sodium-crypto-shorthash",
    spec: {
      parameters: "string $msg, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_shorthash_keygen: {
    name: "sodium_crypto_shorthash_keygen",
    url: "function.sodium-crypto-shorthash-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign: {
    name: "sodium_crypto_sign",
    url: "function.sodium-crypto-sign",
    spec: {
      parameters: "string $msg, string $secret_key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_detached: {
    name: "sodium_crypto_sign_detached",
    url: "function.sodium-crypto-sign-detached",
    spec: {
      parameters: "string $msg, string $secretkey",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_ed25519_pk_to_curve25519: {
    name: "sodium_crypto_sign_ed25519_pk_to_curve25519",
    url: "function.sodium-crypto-sign-ed25519-pk-to-curve25519",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_ed25519_sk_to_curve25519: {
    name: "sodium_crypto_sign_ed25519_sk_to_curve25519",
    url: "function.sodium-crypto-sign-ed25519-sk-to-curve25519",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_keypair: {
    name: "sodium_crypto_sign_keypair",
    url: "function.sodium-crypto-sign-keypair",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_keypair_from_secretkey_and_publickey: {
    name: "sodium_crypto_sign_keypair_from_secretkey_and_publickey",
    url: "function.sodium-crypto-sign-keypair-from-secretkey-and-publickey",
    spec: {
      parameters: "string $secret_key, string $public_key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_open: {
    name: "sodium_crypto_sign_open",
    url: "function.sodium-crypto-sign-open",
    spec: {
      parameters: "string $string, string $public_key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_publickey: {
    name: "sodium_crypto_sign_publickey",
    url: "function.sodium-crypto-sign-publickey",
    spec: {
      parameters: "string $keypair",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_publickey_from_secretkey: {
    name: "sodium_crypto_sign_publickey_from_secretkey",
    url: "function.sodium-crypto-sign-publickey-from-secretkey",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_secretkey: {
    name: "sodium_crypto_sign_secretkey",
    url: "function.sodium-crypto-sign-secretkey",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_seed_keypair: {
    name: "sodium_crypto_sign_seed_keypair",
    url: "function.sodium-crypto-sign-seed-keypair",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_sign_verify_detached: {
    name: "sodium_crypto_sign_verify_detached",
    url: "function.sodium-crypto-sign-verify-detached",
    spec: {
      parameters: "string $signature, string $msg, string $public_key",
      returnValue: "bool",
      ref: null
    }
  },
  sodium_crypto_stream: {
    name: "sodium_crypto_stream",
    url: "function.sodium-crypto-stream",
    spec: {
      parameters: "int $length, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_stream_keygen: {
    name: "sodium_crypto_stream_keygen",
    url: "function.sodium-crypto-stream-keygen",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sodium_crypto_stream_xor: {
    name: "sodium_crypto_stream_xor",
    url: "function.sodium-crypto-stream-xor",
    spec: {
      parameters: "string $msg, string $nonce, string $key",
      returnValue: "string",
      ref: null
    }
  },
  sodium_hex2bin: {
    name: "sodium_hex2bin",
    url: "function.sodium-hex2bin",
    spec: {
      parameters: "string $hex [, string $ignore ]",
      returnValue: "string",
      ref: null
    }
  },
  sodium_increment: {
    name: "sodium_increment",
    url: "function.sodium-increment",
    spec: {
      parameters: "string &$val",
      returnValue: "void",
      ref: null
    }
  },
  sodium_memcmp: {
    name: "sodium_memcmp",
    url: "function.sodium-memcmp",
    spec: {
      parameters: "string $buf1, string $buf2",
      returnValue: "int",
      ref: null
    }
  },
  sodium_memzero: {
    name: "sodium_memzero",
    url: "function.sodium-memzero",
    spec: {
      parameters: "string &$buf",
      returnValue: "void",
      ref: null
    }
  },
  sodium_pad: {
    name: "sodium_pad",
    url: "function.sodium-pad",
    spec: {
      parameters: "string $unpadded, int $length",
      returnValue: "string",
      ref: null
    }
  },
  sodium_unpad: {
    name: "sodium_unpad",
    url: "function.sodium-unpad",
    spec: {
      parameters: "string $padded, int $length",
      returnValue: "string",
      ref: null
    }
  },
  solr_get_version: {
    name: "solr_get_version",
    url: "function.solr-get-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sort: {
    name: "sort",
    url: "function.sort",
    spec: {
      parameters: "array &$array [, int $sort_flags = SORT_REGULAR ]",
      returnValue: "bool",
      ref: null
    }
  },
  soundex: {
    name: "soundex",
    url: "function.soundex",
    spec: {
      parameters: "string $str",
      returnValue: "string",
      ref: null
    }
  },
  split: {
    name: "split",
    url: "function.split",
    spec: {
      parameters: "string $pattern, string $string [, int $limit = -1 ]",
      returnValue: "array",
      ref: null
    }
  },
  spliti: {
    name: "spliti",
    url: "function.spliti",
    spec: {
      parameters: "string $pattern, string $string [, int $limit = -1 ]",
      returnValue: "array",
      ref: null
    }
  },
  spl_autoload: {
    name: "spl_autoload",
    url: "function.spl-autoload",
    spec: {
      parameters: "string $class_name [, string $file_extensions = spl_autoload_extensions() ]",
      returnValue: "void",
      ref: null
    }
  },
  spl_autoload_call: {
    name: "spl_autoload_call",
    url: "function.spl-autoload-call",
    spec: {
      parameters: "string $class_name",
      returnValue: "void",
      ref: null
    }
  },
  spl_autoload_extensions: {
    name: "spl_autoload_extensions",
    url: "function.spl-autoload-extensions",
    spec: {
      parameters: "[ string $file_extensions ]",
      returnValue: "string",
      ref: null
    }
  },
  spl_autoload_functions: {
    name: "spl_autoload_functions",
    url: "function.spl-autoload-functions",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  spl_autoload_register: {
    name: "spl_autoload_register",
    url: "function.spl-autoload-register",
    spec: {
      parameters: "[ callable $autoload_function [, bool $throw = TRUE [, bool $prepend = FALSE ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  spl_autoload_unregister: {
    name: "spl_autoload_unregister",
    url: "function.spl-autoload-unregister",
    spec: {
      parameters: "mixed $autoload_function",
      returnValue: "bool",
      ref: null
    }
  },
  spl_classes: {
    name: "spl_classes",
    url: "function.spl-classes",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  spl_object_hash: {
    name: "spl_object_hash",
    url: "function.spl-object-hash",
    spec: {
      parameters: "object $obj",
      returnValue: "string",
      ref: null
    }
  },
  spl_object_id: {
    name: "spl_object_id",
    url: "function.spl-object-id",
    spec: {
      parameters: "object $obj",
      returnValue: "int",
      ref: null
    }
  },
  sprintf: {
    name: "sprintf",
    url: "function.sprintf",
    spec: {
      parameters: "string $format [, mixed $args [, mixed $... ]]",
      returnValue: "string",
      ref: null
    }
  },
  sqlite_array_query: {
    name: "sqlite_array_query",
    url: "function.sqlite-array-query",
    spec: {
      parameters: "resource $dbhandle, string $query [, int $result_type = SQLITE_BOTH [, bool $decode_binary = TRUE ]]",
      returnValue: "array",
      ref: null
    }
  },
  sqlite_busy_timeout: {
    name: "sqlite_busy_timeout",
    url: "function.sqlite-busy-timeout",
    spec: {
      parameters: "resource $dbhandle, int $milliseconds",
      returnValue: "void",
      ref: null
    }
  },
  sqlite_changes: {
    name: "sqlite_changes",
    url: "function.sqlite-changes",
    spec: {
      parameters: "resource $dbhandle",
      returnValue: "int",
      ref: null
    }
  },
  sqlite_close: {
    name: "sqlite_close",
    url: "function.sqlite-close",
    spec: {
      parameters: "resource $dbhandle",
      returnValue: "void",
      ref: null
    }
  },
  sqlite_column: {
    name: "sqlite_column",
    url: "function.sqlite-column",
    spec: {
      parameters: "resource $result, mixed $index_or_name [, bool $decode_binary = TRUE ]",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlite_create_aggregate: {
    name: "sqlite_create_aggregate",
    url: "function.sqlite-create-aggregate",
    spec: {
      parameters: "resource $dbhandle, string $function_name, callable $step_func, callable $finalize_func [, int $num_args = -1 ]",
      returnValue: "void",
      ref: null
    }
  },
  sqlite_create_function: {
    name: "sqlite_create_function",
    url: "function.sqlite-create-function",
    spec: {
      parameters: "resource $dbhandle, string $function_name, callable $callback [, int $num_args = -1 ]",
      returnValue: "void",
      ref: null
    }
  },
  sqlite_current: {
    name: "sqlite_current",
    url: "function.sqlite-current",
    spec: {
      parameters: "resource $result [, int $result_type = SQLITE_BOTH [, bool $decode_binary = TRUE ]]",
      returnValue: "array",
      ref: null
    }
  },
  sqlite_error_string: {
    name: "sqlite_error_string",
    url: "function.sqlite-error-string",
    spec: {
      parameters: "int $error_code",
      returnValue: "string",
      ref: null
    }
  },
  sqlite_escape_string: {
    name: "sqlite_escape_string",
    url: "function.sqlite-escape-string",
    spec: {
      parameters: "string $item",
      returnValue: "string",
      ref: null
    }
  },
  sqlite_exec: {
    name: "sqlite_exec",
    url: "function.sqlite-exec",
    spec: {
      parameters: "resource $dbhandle, string $query [, string &$error_msg ]",
      returnValue: "bool",
      ref: null
    }
  },
  sqlite_factory: {
    name: "sqlite_factory",
    url: "function.sqlite-factory",
    spec: {
      parameters: "string $filename [, int $mode = 0666 [, string &$error_message ]]",
      returnValue: "SQLiteDatabase",
      ref: null
    }
  },
  sqlite_fetch_all: {
    name: "sqlite_fetch_all",
    url: "function.sqlite-fetch-all",
    spec: {
      parameters: "resource $result [, int $result_type = SQLITE_BOTH [, bool $decode_binary = TRUE ]]",
      returnValue: "array",
      ref: null
    }
  },
  sqlite_fetch_array: {
    name: "sqlite_fetch_array",
    url: "function.sqlite-fetch-array",
    spec: {
      parameters: "resource $result [, int $result_type = SQLITE_BOTH [, bool $decode_binary = TRUE ]]",
      returnValue: "array",
      ref: null
    }
  },
  sqlite_fetch_column_types: {
    name: "sqlite_fetch_column_types",
    url: "function.sqlite-fetch-column-types",
    spec: {
      parameters: "string $table_name, resource $dbhandle [, int $result_type = SQLITE_ASSOC ]",
      returnValue: "array",
      ref: null
    }
  },
  sqlite_fetch_object: {
    name: "sqlite_fetch_object",
    url: "function.sqlite-fetch-object",
    spec: {
      parameters: "resource $result [, string $class_name [, array $ctor_params [, bool $decode_binary = TRUE ]]]",
      returnValue: "object",
      ref: null
    }
  },
  sqlite_fetch_single: {
    name: "sqlite_fetch_single",
    url: "function.sqlite-fetch-single",
    spec: {
      parameters: "resource $result [, bool $decode_binary = TRUE ]",
      returnValue: "string",
      ref: null
    }
  },
  sqlite_fetch_string: {
    name: "sqlite_fetch_string",
    url: "function.sqlite-fetch-string",
    spec: {
      parameters: "resource $result [, bool $decode_binary = TRUE ]",
      returnValue: "string",
      ref: {
        name: "sqlite_fetch_single()",
        url: "function.sqlite-fetch-single"
      }
    }
  },
  sqlite_field_name: {
    name: "sqlite_field_name",
    url: "function.sqlite-field-name",
    spec: {
      parameters: "resource $result, int $field_index",
      returnValue: "string",
      ref: null
    }
  },
  sqlite_has_more: {
    name: "sqlite_has_more",
    url: "function.sqlite-has-more",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  sqlite_has_prev: {
    name: "sqlite_has_prev",
    url: "function.sqlite-has-prev",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  sqlite_key: {
    name: "sqlite_key",
    url: "function.sqlite-key",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  sqlite_last_error: {
    name: "sqlite_last_error",
    url: "function.sqlite-last-error",
    spec: {
      parameters: "resource $dbhandle",
      returnValue: "int",
      ref: null
    }
  },
  sqlite_last_insert_rowid: {
    name: "sqlite_last_insert_rowid",
    url: "function.sqlite-last-insert-rowid",
    spec: {
      parameters: "resource $dbhandle",
      returnValue: "int",
      ref: null
    }
  },
  sqlite_libencoding: {
    name: "sqlite_libencoding",
    url: "function.sqlite-libencoding",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sqlite_libversion: {
    name: "sqlite_libversion",
    url: "function.sqlite-libversion",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sqlite_next: {
    name: "sqlite_next",
    url: "function.sqlite-next",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  sqlite_num_fields: {
    name: "sqlite_num_fields",
    url: "function.sqlite-num-fields",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  sqlite_num_rows: {
    name: "sqlite_num_rows",
    url: "function.sqlite-num-rows",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  sqlite_open: {
    name: "sqlite_open",
    url: "function.sqlite-open",
    spec: {
      parameters: "string $filename [, int $mode = 0666 [, string &$error_message ]]",
      returnValue: "resource",
      ref: null
    }
  },
  sqlite_popen: {
    name: "sqlite_popen",
    url: "function.sqlite-popen",
    spec: {
      parameters: "string $filename [, int $mode = 0666 [, string &$error_message ]]",
      returnValue: "resource",
      ref: null
    }
  },
  sqlite_prev: {
    name: "sqlite_prev",
    url: "function.sqlite-prev",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  sqlite_query: {
    name: "sqlite_query",
    url: "function.sqlite-query",
    spec: {
      parameters: "resource $dbhandle, string $query [, int $result_type = SQLITE_BOTH [, string &$error_msg ]]",
      returnValue: "resource",
      ref: null
    }
  },
  sqlite_rewind: {
    name: "sqlite_rewind",
    url: "function.sqlite-rewind",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  sqlite_seek: {
    name: "sqlite_seek",
    url: "function.sqlite-seek",
    spec: {
      parameters: "resource $result, int $rownum",
      returnValue: "bool",
      ref: null
    }
  },
  sqlite_single_query: {
    name: "sqlite_single_query",
    url: "function.sqlite-single-query",
    spec: {
      parameters: "resource $db, string $query [, bool $first_row_only [, bool $decode_binary ]]",
      returnValue: "array",
      ref: null
    }
  },
  sqlite_udf_decode_binary: {
    name: "sqlite_udf_decode_binary",
    url: "function.sqlite-udf-decode-binary",
    spec: {
      parameters: "string $data",
      returnValue: "string",
      ref: null
    }
  },
  sqlite_udf_encode_binary: {
    name: "sqlite_udf_encode_binary",
    url: "function.sqlite-udf-encode-binary",
    spec: {
      parameters: "string $data",
      returnValue: "string",
      ref: null
    }
  },
  sqlite_unbuffered_query: {
    name: "sqlite_unbuffered_query",
    url: "function.sqlite-unbuffered-query",
    spec: {
      parameters: "resource $dbhandle, string $query [, int $result_type = SQLITE_BOTH [, string &$error_msg ]]",
      returnValue: "resource",
      ref: null
    }
  },
  sqlite_valid: {
    name: "sqlite_valid",
    url: "function.sqlite-valid",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_begin_transaction: {
    name: "sqlsrv_begin_transaction",
    url: "function.sqlsrv-begin-transaction",
    spec: {
      parameters: "resource $conn",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_cancel: {
    name: "sqlsrv_cancel",
    url: "function.sqlsrv-cancel",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_client_info: {
    name: "sqlsrv_client_info",
    url: "function.sqlsrv-client-info",
    spec: {
      parameters: "resource $conn",
      returnValue: "array",
      ref: null
    }
  },
  sqlsrv_close: {
    name: "sqlsrv_close",
    url: "function.sqlsrv-close",
    spec: {
      parameters: "resource $conn",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_commit: {
    name: "sqlsrv_commit",
    url: "function.sqlsrv-commit",
    spec: {
      parameters: "resource $conn",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_configure: {
    name: "sqlsrv_configure",
    url: "function.sqlsrv-configure",
    spec: {
      parameters: "string $setting, mixed $value",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_connect: {
    name: "sqlsrv_connect",
    url: "function.sqlsrv-connect",
    spec: {
      parameters: "string $serverName [, array $connectionInfo ]",
      returnValue: "resource",
      ref: null
    }
  },
  sqlsrv_errors: {
    name: "sqlsrv_errors",
    url: "function.sqlsrv-errors",
    spec: {
      parameters: "[ int $errorsOrWarnings ]",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_execute: {
    name: "sqlsrv_execute",
    url: "function.sqlsrv-execute",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_fetch: {
    name: "sqlsrv_fetch",
    url: "function.sqlsrv-fetch",
    spec: {
      parameters: "resource $stmt [, int $row [, int $offset ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_fetch_array: {
    name: "sqlsrv_fetch_array",
    url: "function.sqlsrv-fetch-array",
    spec: {
      parameters: "resource $stmt [, int $fetchType [, int $row [, int $offset ]]]",
      returnValue: "array",
      ref: null
    }
  },
  sqlsrv_fetch_object: {
    name: "sqlsrv_fetch_object",
    url: "function.sqlsrv-fetch-object",
    spec: {
      parameters: "resource $stmt [, string $className [, array $ctorParams [, int $row [, int $offset ]]]]",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_field_metadata: {
    name: "sqlsrv_field_metadata",
    url: "function.sqlsrv-field-metadata",
    spec: {
      parameters: "resource $stmt",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_free_stmt: {
    name: "sqlsrv_free_stmt",
    url: "function.sqlsrv-free-stmt",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_get_config: {
    name: "sqlsrv_get_config",
    url: "function.sqlsrv-get-config",
    spec: {
      parameters: "string $setting",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_get_field: {
    name: "sqlsrv_get_field",
    url: "function.sqlsrv-get-field",
    spec: {
      parameters: "resource $stmt, int $fieldIndex [, int $getAsType ]",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_has_rows: {
    name: "sqlsrv_has_rows",
    url: "function.sqlsrv-has-rows",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_next_result: {
    name: "sqlsrv_next_result",
    url: "function.sqlsrv-next-result",
    spec: {
      parameters: "resource $stmt",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_num_fields: {
    name: "sqlsrv_num_fields",
    url: "function.sqlsrv-num-fields",
    spec: {
      parameters: "resource $stmt",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_num_rows: {
    name: "sqlsrv_num_rows",
    url: "function.sqlsrv-num-rows",
    spec: {
      parameters: "resource $stmt",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_prepare: {
    name: "sqlsrv_prepare",
    url: "function.sqlsrv-prepare",
    spec: {
      parameters: "resource $conn, string $sql [, array $params [, array $options ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_query: {
    name: "sqlsrv_query",
    url: "function.sqlsrv-query",
    spec: {
      parameters: "resource $conn, string $sql [, array $params [, array $options ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  sqlsrv_rollback: {
    name: "sqlsrv_rollback",
    url: "function.sqlsrv-rollback",
    spec: {
      parameters: "resource $conn",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_rows_affected: {
    name: "sqlsrv_rows_affected",
    url: "function.sqlsrv-rows-affected",
    spec: {
      parameters: "resource $stmt",
      returnValue: "int",
      ref: null
    }
  },
  sqlsrv_send_stream_data: {
    name: "sqlsrv_send_stream_data",
    url: "function.sqlsrv-send-stream-data",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  sqlsrv_server_info: {
    name: "sqlsrv_server_info",
    url: "function.sqlsrv-server-info",
    spec: {
      parameters: "resource $conn",
      returnValue: "array",
      ref: null
    }
  },
  sql_regcase: {
    name: "sql_regcase",
    url: "function.sql-regcase",
    spec: {
      parameters: "string $string",
      returnValue: "string",
      ref: null
    }
  },
  sqrt: {
    name: "sqrt",
    url: "function.sqrt",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  srand: {
    name: "srand",
    url: "function.srand",
    spec: {
      parameters: "[ int $seed ]",
      returnValue: "void",
      ref: null
    }
  },
  sscanf: {
    name: "sscanf",
    url: "function.sscanf",
    spec: {
      parameters: "string $str, string $format [, mixed &$... ]",
      returnValue: "mixed",
      ref: null
    }
  },
  ssdeep_fuzzy_compare: {
    name: "ssdeep_fuzzy_compare",
    url: "function.ssdeep-fuzzy-compare",
    spec: {
      parameters: "string $signature1, string $signature2",
      returnValue: "int",
      ref: null
    }
  },
  ssdeep_fuzzy_hash: {
    name: "ssdeep_fuzzy_hash",
    url: "function.ssdeep-fuzzy-hash",
    spec: {
      parameters: "string $to_hash",
      returnValue: "string",
      ref: null
    }
  },
  ssdeep_fuzzy_hash_filename: {
    name: "ssdeep_fuzzy_hash_filename",
    url: "function.ssdeep-fuzzy-hash-filename",
    spec: {
      parameters: "string $file_name",
      returnValue: "string",
      ref: null
    }
  },
  ssh2_auth_agent: {
    name: "ssh2_auth_agent",
    url: "function.ssh2-auth-agent",
    spec: {
      parameters: "resource $session, string $username",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_auth_hostbased_file: {
    name: "ssh2_auth_hostbased_file",
    url: "function.ssh2-auth-hostbased-file",
    spec: {
      parameters: "resource $session, string $username, string $hostname, string $pubkeyfile, string $privkeyfile [, string $passphrase [, string $local_username ]]",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_auth_none: {
    name: "ssh2_auth_none",
    url: "function.ssh2-auth-none",
    spec: {
      parameters: "resource $session, string $username",
      returnValue: "mixed",
      ref: null
    }
  },
  ssh2_auth_password: {
    name: "ssh2_auth_password",
    url: "function.ssh2-auth-password",
    spec: {
      parameters: "resource $session, string $username, string $password",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_auth_pubkey_file: {
    name: "ssh2_auth_pubkey_file",
    url: "function.ssh2-auth-pubkey-file",
    spec: {
      parameters: "resource $session, string $username, string $pubkeyfile, string $privkeyfile [, string $passphrase ]",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_connect: {
    name: "ssh2_connect",
    url: "function.ssh2-connect",
    spec: {
      parameters: "string $host [, int $port = 22 [, array $methods [, array $callbacks ]]]",
      returnValue: "resource",
      ref: null
    }
  },
  ssh2_disconnect: {
    name: "ssh2_disconnect",
    url: "function.ssh2-disconnect",
    spec: {
      parameters: "resource $session",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_exec: {
    name: "ssh2_exec",
    url: "function.ssh2-exec",
    spec: {
      parameters: "resource $session, string $command [, string $pty [, array $env [, int $width = 80 [, int $height = 25 [, int $width_height_type = SSH2_TERM_UNIT_CHARS ]]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  ssh2_fetch_stream: {
    name: "ssh2_fetch_stream",
    url: "function.ssh2-fetch-stream",
    spec: {
      parameters: "resource $channel, int $streamid",
      returnValue: "resource",
      ref: null
    }
  },
  ssh2_fingerprint: {
    name: "ssh2_fingerprint",
    url: "function.ssh2-fingerprint",
    spec: {
      parameters: "resource $session [, int $flags = SSH2_FINGERPRINT_MD5 | SSH2_FINGERPRINT_HEX ]",
      returnValue: "string",
      ref: null
    }
  },
  ssh2_methods_negotiated: {
    name: "ssh2_methods_negotiated",
    url: "function.ssh2-methods-negotiated",
    spec: {
      parameters: "resource $session",
      returnValue: "array",
      ref: null
    }
  },
  ssh2_publickey_add: {
    name: "ssh2_publickey_add",
    url: "function.ssh2-publickey-add",
    spec: {
      parameters: "resource $pkey, string $algoname, string $blob [, bool $overwrite = FALSE [, array $attributes ]]",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_publickey_init: {
    name: "ssh2_publickey_init",
    url: "function.ssh2-publickey-init",
    spec: {
      parameters: "resource $session",
      returnValue: "resource",
      ref: null
    }
  },
  ssh2_publickey_list: {
    name: "ssh2_publickey_list",
    url: "function.ssh2-publickey-list",
    spec: {
      parameters: "resource $pkey",
      returnValue: "array",
      ref: null
    }
  },
  ssh2_publickey_remove: {
    name: "ssh2_publickey_remove",
    url: "function.ssh2-publickey-remove",
    spec: {
      parameters: "resource $pkey, string $algoname, string $blob",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_scp_recv: {
    name: "ssh2_scp_recv",
    url: "function.ssh2-scp-recv",
    spec: {
      parameters: "resource $session, string $remote_file, string $local_file",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_scp_send: {
    name: "ssh2_scp_send",
    url: "function.ssh2-scp-send",
    spec: {
      parameters: "resource $session, string $local_file, string $remote_file [, int $create_mode = 0644 ]",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_sftp: {
    name: "ssh2_sftp",
    url: "function.ssh2-sftp",
    spec: {
      parameters: "resource $session",
      returnValue: "resource",
      ref: null
    }
  },
  ssh2_sftp_chmod: {
    name: "ssh2_sftp_chmod",
    url: "function.ssh2-sftp-chmod",
    spec: {
      parameters: "resource $sftp, string $filename, int $mode",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_sftp_lstat: {
    name: "ssh2_sftp_lstat",
    url: "function.ssh2-sftp-lstat",
    spec: {
      parameters: "resource $sftp, string $path",
      returnValue: "array",
      ref: null
    }
  },
  ssh2_sftp_mkdir: {
    name: "ssh2_sftp_mkdir",
    url: "function.ssh2-sftp-mkdir",
    spec: {
      parameters: "resource $sftp, string $dirname [, int $mode = 0777 [, bool $recursive = FALSE ]]",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_sftp_readlink: {
    name: "ssh2_sftp_readlink",
    url: "function.ssh2-sftp-readlink",
    spec: {
      parameters: "resource $sftp, string $link",
      returnValue: "string",
      ref: null
    }
  },
  ssh2_sftp_realpath: {
    name: "ssh2_sftp_realpath",
    url: "function.ssh2-sftp-realpath",
    spec: {
      parameters: "resource $sftp, string $filename",
      returnValue: "string",
      ref: null
    }
  },
  ssh2_sftp_rename: {
    name: "ssh2_sftp_rename",
    url: "function.ssh2-sftp-rename",
    spec: {
      parameters: "resource $sftp, string $from, string $to",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_sftp_rmdir: {
    name: "ssh2_sftp_rmdir",
    url: "function.ssh2-sftp-rmdir",
    spec: {
      parameters: "resource $sftp, string $dirname",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_sftp_stat: {
    name: "ssh2_sftp_stat",
    url: "function.ssh2-sftp-stat",
    spec: {
      parameters: "resource $sftp, string $path",
      returnValue: "array",
      ref: null
    }
  },
  ssh2_sftp_symlink: {
    name: "ssh2_sftp_symlink",
    url: "function.ssh2-sftp-symlink",
    spec: {
      parameters: "resource $sftp, string $target, string $link",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_sftp_unlink: {
    name: "ssh2_sftp_unlink",
    url: "function.ssh2-sftp-unlink",
    spec: {
      parameters: "resource $sftp, string $filename",
      returnValue: "bool",
      ref: null
    }
  },
  ssh2_shell: {
    name: "ssh2_shell",
    url: "function.ssh2-shell",
    spec: {
      parameters: "resource $session [, string $term_type = \"vanilla\" [, array $env [, int $width = 80 [, int $height = 25 [, int $width_height_type = SSH2_TERM_UNIT_CHARS ]]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  ssh2_tunnel: {
    name: "ssh2_tunnel",
    url: "function.ssh2-tunnel",
    spec: {
      parameters: "resource $session, string $host, int $port",
      returnValue: "resource",
      ref: null
    }
  },
  stat: {
    name: "stat",
    url: "function.stat",
    spec: {
      parameters: "string $filename",
      returnValue: "array",
      ref: null
    }
  },
  stats_absolute_deviation: {
    name: "stats_absolute_deviation",
    url: "function.stats-absolute-deviation",
    spec: {
      parameters: "array $a",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_beta: {
    name: "stats_cdf_beta",
    url: "function.stats-cdf-beta",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_binomial: {
    name: "stats_cdf_binomial",
    url: "function.stats-cdf-binomial",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_cauchy: {
    name: "stats_cdf_cauchy",
    url: "function.stats-cdf-cauchy",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_chisquare: {
    name: "stats_cdf_chisquare",
    url: "function.stats-cdf-chisquare",
    spec: {
      parameters: "float $par1, float $par2, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_exponential: {
    name: "stats_cdf_exponential",
    url: "function.stats-cdf-exponential",
    spec: {
      parameters: "float $par1, float $par2, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_f: {
    name: "stats_cdf_f",
    url: "function.stats-cdf-f",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_gamma: {
    name: "stats_cdf_gamma",
    url: "function.stats-cdf-gamma",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_laplace: {
    name: "stats_cdf_laplace",
    url: "function.stats-cdf-laplace",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_logistic: {
    name: "stats_cdf_logistic",
    url: "function.stats-cdf-logistic",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_negative_binomial: {
    name: "stats_cdf_negative_binomial",
    url: "function.stats-cdf-negative-binomial",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_noncentral_chisquare: {
    name: "stats_cdf_noncentral_chisquare",
    url: "function.stats-cdf-noncentral-chisquare",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_noncentral_f: {
    name: "stats_cdf_noncentral_f",
    url: "function.stats-cdf-noncentral-f",
    spec: {
      parameters: "float $par1, float $par2, float $par3, float $par4, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_noncentral_t: {
    name: "stats_cdf_noncentral_t",
    url: "function.stats-cdf-noncentral-t",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_normal: {
    name: "stats_cdf_normal",
    url: "function.stats-cdf-normal",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_poisson: {
    name: "stats_cdf_poisson",
    url: "function.stats-cdf-poisson",
    spec: {
      parameters: "float $par1, float $par2, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_t: {
    name: "stats_cdf_t",
    url: "function.stats-cdf-t",
    spec: {
      parameters: "float $par1, float $par2, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_uniform: {
    name: "stats_cdf_uniform",
    url: "function.stats-cdf-uniform",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_cdf_weibull: {
    name: "stats_cdf_weibull",
    url: "function.stats-cdf-weibull",
    spec: {
      parameters: "float $par1, float $par2, float $par3, int $which",
      returnValue: "float",
      ref: null
    }
  },
  stats_covariance: {
    name: "stats_covariance",
    url: "function.stats-covariance",
    spec: {
      parameters: "array $a, array $b",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_beta: {
    name: "stats_dens_beta",
    url: "function.stats-dens-beta",
    spec: {
      parameters: "float $x, float $a, float $b",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_cauchy: {
    name: "stats_dens_cauchy",
    url: "function.stats-dens-cauchy",
    spec: {
      parameters: "float $x, float $ave, float $stdev",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_chisquare: {
    name: "stats_dens_chisquare",
    url: "function.stats-dens-chisquare",
    spec: {
      parameters: "float $x, float $dfr",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_exponential: {
    name: "stats_dens_exponential",
    url: "function.stats-dens-exponential",
    spec: {
      parameters: "float $x, float $scale",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_f: {
    name: "stats_dens_f",
    url: "function.stats-dens-f",
    spec: {
      parameters: "float $x, float $dfr1, float $dfr2",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_gamma: {
    name: "stats_dens_gamma",
    url: "function.stats-dens-gamma",
    spec: {
      parameters: "float $x, float $shape, float $scale",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_laplace: {
    name: "stats_dens_laplace",
    url: "function.stats-dens-laplace",
    spec: {
      parameters: "float $x, float $ave, float $stdev",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_logistic: {
    name: "stats_dens_logistic",
    url: "function.stats-dens-logistic",
    spec: {
      parameters: "float $x, float $ave, float $stdev",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_normal: {
    name: "stats_dens_normal",
    url: "function.stats-dens-normal",
    spec: {
      parameters: "float $x, float $ave, float $stdev",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_pmf_binomial: {
    name: "stats_dens_pmf_binomial",
    url: "function.stats-dens-pmf-binomial",
    spec: {
      parameters: "float $x, float $n, float $pi",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_pmf_hypergeometric: {
    name: "stats_dens_pmf_hypergeometric",
    url: "function.stats-dens-pmf-hypergeometric",
    spec: {
      parameters: "float $n1, float $n2, float $N1, float $N2",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_pmf_negative_binomial: {
    name: "stats_dens_pmf_negative_binomial",
    url: "function.stats-dens-pmf-negative-binomial",
    spec: {
      parameters: "float $x, float $n, float $pi",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_pmf_poisson: {
    name: "stats_dens_pmf_poisson",
    url: "function.stats-dens-pmf-poisson",
    spec: {
      parameters: "float $x, float $lb",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_t: {
    name: "stats_dens_t",
    url: "function.stats-dens-t",
    spec: {
      parameters: "float $x, float $dfr",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_uniform: {
    name: "stats_dens_uniform",
    url: "function.stats-dens-uniform",
    spec: {
      parameters: "float $x, float $a, float $b",
      returnValue: "float",
      ref: null
    }
  },
  stats_dens_weibull: {
    name: "stats_dens_weibull",
    url: "function.stats-dens-weibull",
    spec: {
      parameters: "float $x, float $a, float $b",
      returnValue: "float",
      ref: null
    }
  },
  stats_harmonic_mean: {
    name: "stats_harmonic_mean",
    url: "function.stats-harmonic-mean",
    spec: {
      parameters: "array $a",
      returnValue: "number",
      ref: null
    }
  },
  stats_kurtosis: {
    name: "stats_kurtosis",
    url: "function.stats-kurtosis",
    spec: {
      parameters: "array $a",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_beta: {
    name: "stats_rand_gen_beta",
    url: "function.stats-rand-gen-beta",
    spec: {
      parameters: "float $a, float $b",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_chisquare: {
    name: "stats_rand_gen_chisquare",
    url: "function.stats-rand-gen-chisquare",
    spec: {
      parameters: "float $df",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_exponential: {
    name: "stats_rand_gen_exponential",
    url: "function.stats-rand-gen-exponential",
    spec: {
      parameters: "float $av",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_f: {
    name: "stats_rand_gen_f",
    url: "function.stats-rand-gen-f",
    spec: {
      parameters: "float $dfn, float $dfd",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_funiform: {
    name: "stats_rand_gen_funiform",
    url: "function.stats-rand-gen-funiform",
    spec: {
      parameters: "float $low, float $high",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_gamma: {
    name: "stats_rand_gen_gamma",
    url: "function.stats-rand-gen-gamma",
    spec: {
      parameters: "float $a, float $r",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_ibinomial: {
    name: "stats_rand_gen_ibinomial",
    url: "function.stats-rand-gen-ibinomial",
    spec: {
      parameters: "int $n, float $pp",
      returnValue: "int",
      ref: null
    }
  },
  stats_rand_gen_ibinomial_negative: {
    name: "stats_rand_gen_ibinomial_negative",
    url: "function.stats-rand-gen-ibinomial-negative",
    spec: {
      parameters: "int $n, float $p",
      returnValue: "int",
      ref: null
    }
  },
  stats_rand_gen_int: {
    name: "stats_rand_gen_int",
    url: "function.stats-rand-gen-int",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  stats_rand_gen_ipoisson: {
    name: "stats_rand_gen_ipoisson",
    url: "function.stats-rand-gen-ipoisson",
    spec: {
      parameters: "float $mu",
      returnValue: "int",
      ref: null
    }
  },
  stats_rand_gen_iuniform: {
    name: "stats_rand_gen_iuniform",
    url: "function.stats-rand-gen-iuniform",
    spec: {
      parameters: "int $low, int $high",
      returnValue: "int",
      ref: null
    }
  },
  stats_rand_gen_noncentral_chisquare: {
    name: "stats_rand_gen_noncentral_chisquare",
    url: "function.stats-rand-gen-noncentral-chisquare",
    spec: {
      parameters: "float $df, float $xnonc",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_noncentral_f: {
    name: "stats_rand_gen_noncentral_f",
    url: "function.stats-rand-gen-noncentral-f",
    spec: {
      parameters: "float $dfn, float $dfd, float $xnonc",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_noncentral_t: {
    name: "stats_rand_gen_noncentral_t",
    url: "function.stats-rand-gen-noncentral-t",
    spec: {
      parameters: "float $df, float $xnonc",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_normal: {
    name: "stats_rand_gen_normal",
    url: "function.stats-rand-gen-normal",
    spec: {
      parameters: "float $av, float $sd",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_gen_t: {
    name: "stats_rand_gen_t",
    url: "function.stats-rand-gen-t",
    spec: {
      parameters: "float $df",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_get_seeds: {
    name: "stats_rand_get_seeds",
    url: "function.stats-rand-get-seeds",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  stats_rand_phrase_to_seeds: {
    name: "stats_rand_phrase_to_seeds",
    url: "function.stats-rand-phrase-to-seeds",
    spec: {
      parameters: "string $phrase",
      returnValue: "array",
      ref: null
    }
  },
  stats_rand_ranf: {
    name: "stats_rand_ranf",
    url: "function.stats-rand-ranf",
    spec: {
      parameters: "void",
      returnValue: "float",
      ref: null
    }
  },
  stats_rand_setall: {
    name: "stats_rand_setall",
    url: "function.stats-rand-setall",
    spec: {
      parameters: "int $iseed1, int $iseed2",
      returnValue: "void",
      ref: null
    }
  },
  stats_skew: {
    name: "stats_skew",
    url: "function.stats-skew",
    spec: {
      parameters: "array $a",
      returnValue: "float",
      ref: null
    }
  },
  stats_standard_deviation: {
    name: "stats_standard_deviation",
    url: "function.stats-standard-deviation",
    spec: {
      parameters: "array $a [, bool $sample = FALSE ]",
      returnValue: "float",
      ref: null
    }
  },
  stats_stat_binomial_coef: {
    name: "stats_stat_binomial_coef",
    url: "function.stats-stat-binomial-coef",
    spec: {
      parameters: "int $x, int $n",
      returnValue: "float",
      ref: null
    }
  },
  stats_stat_correlation: {
    name: "stats_stat_correlation",
    url: "function.stats-stat-correlation",
    spec: {
      parameters: "array $arr1, array $arr2",
      returnValue: "float",
      ref: null
    }
  },
  stats_stat_factorial: {
    name: "stats_stat_factorial",
    url: "function.stats-stat-factorial",
    spec: {
      parameters: "int $n",
      returnValue: "float",
      ref: null
    }
  },
  stats_stat_independent_t: {
    name: "stats_stat_independent_t",
    url: "function.stats-stat-independent-t",
    spec: {
      parameters: "array $arr1, array $arr2",
      returnValue: "float",
      ref: null
    }
  },
  stats_stat_innerproduct: {
    name: "stats_stat_innerproduct",
    url: "function.stats-stat-innerproduct",
    spec: {
      parameters: "array $arr1, array $arr2",
      returnValue: "float",
      ref: null
    }
  },
  stats_stat_paired_t: {
    name: "stats_stat_paired_t",
    url: "function.stats-stat-paired-t",
    spec: {
      parameters: "array $arr1, array $arr2",
      returnValue: "float",
      ref: null
    }
  },
  stats_stat_percentile: {
    name: "stats_stat_percentile",
    url: "function.stats-stat-percentile",
    spec: {
      parameters: "array $arr, float $perc",
      returnValue: "float",
      ref: null
    }
  },
  stats_stat_powersum: {
    name: "stats_stat_powersum",
    url: "function.stats-stat-powersum",
    spec: {
      parameters: "array $arr, float $power",
      returnValue: "float",
      ref: null
    }
  },
  stats_variance: {
    name: "stats_variance",
    url: "function.stats-variance",
    spec: {
      parameters: "array $a [, bool $sample = FALSE ]",
      returnValue: "float",
      ref: null
    }
  },
  stomp_connect_error: {
    name: "stomp_connect_error",
    url: "function.stomp-connect-error",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  stomp_version: {
    name: "stomp_version",
    url: "function.stomp-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  strcasecmp: {
    name: "strcasecmp",
    url: "function.strcasecmp",
    spec: {
      parameters: "string $str1, string $str2",
      returnValue: "int",
      ref: null
    }
  },
  strchr: {
    name: "strchr",
    url: "function.strchr",
    spec: {
      parameters: "string $haystack, mixed $needle [, bool $before_needle = FALSE ]",
      returnValue: "string",
      ref: {
        name: "strstr()",
        url: "function.strstr"
      }
    }
  },
  strcmp: {
    name: "strcmp",
    url: "function.strcmp",
    spec: {
      parameters: "string $str1, string $str2",
      returnValue: "int",
      ref: null
    }
  },
  strcoll: {
    name: "strcoll",
    url: "function.strcoll",
    spec: {
      parameters: "string $str1, string $str2",
      returnValue: "int",
      ref: null
    }
  },
  strcspn: {
    name: "strcspn",
    url: "function.strcspn",
    spec: {
      parameters: "string $subject, string $mask [, int $start [, int $length ]]",
      returnValue: "int",
      ref: null
    }
  },
  stream_bucket_append: {
    name: "stream_bucket_append",
    url: "function.stream-bucket-append",
    spec: {
      parameters: "resource $brigade, object $bucket",
      returnValue: "void",
      ref: null
    }
  },
  stream_bucket_make_writeable: {
    name: "stream_bucket_make_writeable",
    url: "function.stream-bucket-make-writeable",
    spec: {
      parameters: "resource $brigade",
      returnValue: "object",
      ref: null
    }
  },
  stream_bucket_new: {
    name: "stream_bucket_new",
    url: "function.stream-bucket-new",
    spec: {
      parameters: "resource $stream, string $buffer",
      returnValue: "object",
      ref: null
    }
  },
  stream_bucket_prepend: {
    name: "stream_bucket_prepend",
    url: "function.stream-bucket-prepend",
    spec: {
      parameters: "resource $brigade, object $bucket",
      returnValue: "void",
      ref: null
    }
  },
  stream_context_create: {
    name: "stream_context_create",
    url: "function.stream-context-create",
    spec: {
      parameters: "[ array $options [, array $params ]]",
      returnValue: "resource",
      ref: null
    }
  },
  stream_context_get_default: {
    name: "stream_context_get_default",
    url: "function.stream-context-get-default",
    spec: {
      parameters: "[ array $options ]",
      returnValue: "resource",
      ref: null
    }
  },
  stream_context_get_options: {
    name: "stream_context_get_options",
    url: "function.stream-context-get-options",
    spec: {
      parameters: "resource $stream_or_context",
      returnValue: "array",
      ref: null
    }
  },
  stream_context_get_params: {
    name: "stream_context_get_params",
    url: "function.stream-context-get-params",
    spec: {
      parameters: "resource $stream_or_context",
      returnValue: "array",
      ref: null
    }
  },
  stream_context_set_default: {
    name: "stream_context_set_default",
    url: "function.stream-context-set-default",
    spec: {
      parameters: "array $options",
      returnValue: "resource",
      ref: null
    }
  },
  stream_context_set_option: {
    name: "stream_context_set_option",
    url: "function.stream-context-set-option",
    spec: {
      parameters: "resource $stream_or_context, string $wrapper, string $option, mixed $value",
      returnValue: "bool",
      ref: null
    }
  },
  stream_context_set_params: {
    name: "stream_context_set_params",
    url: "function.stream-context-set-params",
    spec: {
      parameters: "resource $stream_or_context, array $params",
      returnValue: "bool",
      ref: null
    }
  },
  stream_copy_to_stream: {
    name: "stream_copy_to_stream",
    url: "function.stream-copy-to-stream",
    spec: {
      parameters: "resource $source, resource $dest [, int $maxlength = -1 [, int $offset = 0 ]]",
      returnValue: "int",
      ref: null
    }
  },
  stream_filter_append: {
    name: "stream_filter_append",
    url: "function.stream-filter-append",
    spec: {
      parameters: "resource $stream, string $filtername [, int $read_write [, mixed $params ]]",
      returnValue: "resource",
      ref: null
    }
  },
  stream_filter_prepend: {
    name: "stream_filter_prepend",
    url: "function.stream-filter-prepend",
    spec: {
      parameters: "resource $stream, string $filtername [, int $read_write [, mixed $params ]]",
      returnValue: "resource",
      ref: null
    }
  },
  stream_filter_register: {
    name: "stream_filter_register",
    url: "function.stream-filter-register",
    spec: {
      parameters: "string $filtername, string $classname",
      returnValue: "bool",
      ref: null
    }
  },
  stream_filter_remove: {
    name: "stream_filter_remove",
    url: "function.stream-filter-remove",
    spec: {
      parameters: "resource $stream_filter",
      returnValue: "bool",
      ref: null
    }
  },
  stream_get_contents: {
    name: "stream_get_contents",
    url: "function.stream-get-contents",
    spec: {
      parameters: "resource $handle [, int $maxlength = -1 [, int $offset = -1 ]]",
      returnValue: "string",
      ref: null
    }
  },
  stream_get_filters: {
    name: "stream_get_filters",
    url: "function.stream-get-filters",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  stream_get_line: {
    name: "stream_get_line",
    url: "function.stream-get-line",
    spec: {
      parameters: "resource $handle, int $length [, string $ending ]",
      returnValue: "string",
      ref: null
    }
  },
  stream_get_meta_data: {
    name: "stream_get_meta_data",
    url: "function.stream-get-meta-data",
    spec: {
      parameters: "resource $stream",
      returnValue: "array",
      ref: null
    }
  },
  stream_get_transports: {
    name: "stream_get_transports",
    url: "function.stream-get-transports",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  stream_get_wrappers: {
    name: "stream_get_wrappers",
    url: "function.stream-get-wrappers",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  stream_isatty: {
    name: "stream_isatty",
    url: "function.stream-isatty",
    spec: {
      parameters: "resource $stream",
      returnValue: "bool",
      ref: null
    }
  },
  stream_is_local: {
    name: "stream_is_local",
    url: "function.stream-is-local",
    spec: {
      parameters: "mixed $stream_or_url",
      returnValue: "bool",
      ref: null
    }
  },
  stream_notification_callback: {
    name: "stream_notification_callback",
    url: "function.stream-notification-callback",
    spec: {
      parameters: "int $notification_code, int $severity, string $message, int $message_code, int $bytes_transferred, int $bytes_max",
      returnValue: "void",
      ref: null
    }
  },
  stream_register_wrapper: {
    name: "stream_register_wrapper",
    url: "function.stream-register-wrapper",
    spec: {
      parameters: "string $protocol, string $classname [, int $flags = 0 ]",
      returnValue: "bool",
      ref: {
        name: "stream_wrapper_register()",
        url: "function.stream-wrapper-register"
      }
    }
  },
  stream_resolve_include_path: {
    name: "stream_resolve_include_path",
    url: "function.stream-resolve-include-path",
    spec: {
      parameters: "string $filename",
      returnValue: "string",
      ref: null
    }
  },
  stream_select: {
    name: "stream_select",
    url: "function.stream-select",
    spec: {
      parameters: "array &$read, array &$write, array &$except, int $tv_sec [, int $tv_usec = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  stream_set_blocking: {
    name: "stream_set_blocking",
    url: "function.stream-set-blocking",
    spec: {
      parameters: "resource $stream, bool $mode",
      returnValue: "bool",
      ref: null
    }
  },
  stream_set_chunk_size: {
    name: "stream_set_chunk_size",
    url: "function.stream-set-chunk-size",
    spec: {
      parameters: "resource $fp, int $chunk_size",
      returnValue: "int",
      ref: null
    }
  },
  stream_set_read_buffer: {
    name: "stream_set_read_buffer",
    url: "function.stream-set-read-buffer",
    spec: {
      parameters: "resource $stream, int $buffer",
      returnValue: "int",
      ref: null
    }
  },
  stream_set_timeout: {
    name: "stream_set_timeout",
    url: "function.stream-set-timeout",
    spec: {
      parameters: "resource $stream, int $seconds [, int $microseconds = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  stream_set_write_buffer: {
    name: "stream_set_write_buffer",
    url: "function.stream-set-write-buffer",
    spec: {
      parameters: "resource $stream, int $buffer",
      returnValue: "int",
      ref: null
    }
  },
  stream_socket_accept: {
    name: "stream_socket_accept",
    url: "function.stream-socket-accept",
    spec: {
      parameters: "resource $server_socket [, float $timeout = ini_get(\"default_socket_timeout\") [, string &$peername ]]",
      returnValue: "resource",
      ref: null
    }
  },
  stream_socket_client: {
    name: "stream_socket_client",
    url: "function.stream-socket-client",
    spec: {
      parameters: "string $remote_socket [, int &$errno [, string &$errstr [, float $timeout = ini_get(\"default_socket_timeout\") [, int $flags = STREAM_CLIENT_CONNECT [, resource $context ]]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  stream_socket_enable_crypto: {
    name: "stream_socket_enable_crypto",
    url: "function.stream-socket-enable-crypto",
    spec: {
      parameters: "resource $stream, bool $enable [, int $crypto_type [, resource $session_stream ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  stream_socket_get_name: {
    name: "stream_socket_get_name",
    url: "function.stream-socket-get-name",
    spec: {
      parameters: "resource $handle, bool $want_peer",
      returnValue: "string",
      ref: null
    }
  },
  stream_socket_pair: {
    name: "stream_socket_pair",
    url: "function.stream-socket-pair",
    spec: {
      parameters: "int $domain, int $type, int $protocol",
      returnValue: "array",
      ref: null
    }
  },
  stream_socket_recvfrom: {
    name: "stream_socket_recvfrom",
    url: "function.stream-socket-recvfrom",
    spec: {
      parameters: "resource $socket, int $length [, int $flags = 0 [, string &$address ]]",
      returnValue: "string",
      ref: null
    }
  },
  stream_socket_sendto: {
    name: "stream_socket_sendto",
    url: "function.stream-socket-sendto",
    spec: {
      parameters: "resource $socket, string $data [, int $flags = 0 [, string $address ]]",
      returnValue: "int",
      ref: null
    }
  },
  stream_socket_server: {
    name: "stream_socket_server",
    url: "function.stream-socket-server",
    spec: {
      parameters: "string $local_socket [, int &$errno [, string &$errstr [, int $flags = STREAM_SERVER_BIND | STREAM_SERVER_LISTEN [, resource $context ]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  stream_socket_shutdown: {
    name: "stream_socket_shutdown",
    url: "function.stream-socket-shutdown",
    spec: {
      parameters: "resource $stream, int $how",
      returnValue: "bool",
      ref: null
    }
  },
  stream_supports_lock: {
    name: "stream_supports_lock",
    url: "function.stream-supports-lock",
    spec: {
      parameters: "resource $stream",
      returnValue: "bool",
      ref: null
    }
  },
  stream_wrapper_register: {
    name: "stream_wrapper_register",
    url: "function.stream-wrapper-register",
    spec: {
      parameters: "string $protocol, string $classname [, int $flags = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  stream_wrapper_restore: {
    name: "stream_wrapper_restore",
    url: "function.stream-wrapper-restore",
    spec: {
      parameters: "string $protocol",
      returnValue: "bool",
      ref: null
    }
  },
  stream_wrapper_unregister: {
    name: "stream_wrapper_unregister",
    url: "function.stream-wrapper-unregister",
    spec: {
      parameters: "string $protocol",
      returnValue: "bool",
      ref: null
    }
  },
  strftime: {
    name: "strftime",
    url: "function.strftime",
    spec: {
      parameters: "string $format [, int $timestamp = time() ]",
      returnValue: "string",
      ref: null
    }
  },
  stripcslashes: {
    name: "stripcslashes",
    url: "function.stripcslashes",
    spec: {
      parameters: "string $str",
      returnValue: "string",
      ref: null
    }
  },
  stripos: {
    name: "stripos",
    url: "function.stripos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  stripslashes: {
    name: "stripslashes",
    url: "function.stripslashes",
    spec: {
      parameters: "string $str",
      returnValue: "string",
      ref: null
    }
  },
  strip_tags: {
    name: "strip_tags",
    url: "function.strip-tags",
    spec: {
      parameters: "string $str [, string $allowable_tags ]",
      returnValue: "string",
      ref: null
    }
  },
  stristr: {
    name: "stristr",
    url: "function.stristr",
    spec: {
      parameters: "string $haystack, mixed $needle [, bool $before_needle = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  strlen: {
    name: "strlen",
    url: "function.strlen",
    spec: {
      parameters: "string $string",
      returnValue: "int",
      ref: null
    }
  },
  strnatcasecmp: {
    name: "strnatcasecmp",
    url: "function.strnatcasecmp",
    spec: {
      parameters: "string $str1, string $str2",
      returnValue: "int",
      ref: null
    }
  },
  strnatcmp: {
    name: "strnatcmp",
    url: "function.strnatcmp",
    spec: {
      parameters: "string $str1, string $str2",
      returnValue: "int",
      ref: null
    }
  },
  strncasecmp: {
    name: "strncasecmp",
    url: "function.strncasecmp",
    spec: {
      parameters: "string $str1, string $str2, int $len",
      returnValue: "int",
      ref: null
    }
  },
  strncmp: {
    name: "strncmp",
    url: "function.strncmp",
    spec: {
      parameters: "string $str1, string $str2, int $len",
      returnValue: "int",
      ref: null
    }
  },
  strpbrk: {
    name: "strpbrk",
    url: "function.strpbrk",
    spec: {
      parameters: "string $haystack, string $char_list",
      returnValue: "string",
      ref: null
    }
  },
  strpos: {
    name: "strpos",
    url: "function.strpos",
    spec: {
      parameters: "string $haystack, mixed $needle [, int $offset = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  strptime: {
    name: "strptime",
    url: "function.strptime",
    spec: {
      parameters: "string $date, string $format",
      returnValue: "array",
      ref: null
    }
  },
  strrchr: {
    name: "strrchr",
    url: "function.strrchr",
    spec: {
      parameters: "string $haystack, mixed $needle",
      returnValue: "string",
      ref: null
    }
  },
  strrev: {
    name: "strrev",
    url: "function.strrev",
    spec: {
      parameters: "string $string",
      returnValue: "string",
      ref: null
    }
  },
  strripos: {
    name: "strripos",
    url: "function.strripos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  strrpos: {
    name: "strrpos",
    url: "function.strrpos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  strspn: {
    name: "strspn",
    url: "function.strspn",
    spec: {
      parameters: "string $subject, string $mask [, int $start [, int $length ]]",
      returnValue: "int",
      ref: null
    }
  },
  strstr: {
    name: "strstr",
    url: "function.strstr",
    spec: {
      parameters: "string $haystack, mixed $needle [, bool $before_needle = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  strtok: {
    name: "strtok",
    url: "function.strtok",
    spec: {
      parameters: "string $str, string $token",
      returnValue: "string",
      ref: null
    }
  },
  strtolower: {
    name: "strtolower",
    url: "function.strtolower",
    spec: {
      parameters: "string $string",
      returnValue: "string",
      ref: null
    }
  },
  strtotime: {
    name: "strtotime",
    url: "function.strtotime",
    spec: {
      parameters: "string $time [, int $now = time() ]",
      returnValue: "int",
      ref: null
    }
  },
  strtoupper: {
    name: "strtoupper",
    url: "function.strtoupper",
    spec: {
      parameters: "string $string",
      returnValue: "string",
      ref: null
    }
  },
  strtr: {
    name: "strtr",
    url: "function.strtr",
    spec: {
      parameters: "string $str, string $from, string $to",
      returnValue: "string",
      ref: null
    }
  },
  strval: {
    name: "strval",
    url: "function.strval",
    spec: {
      parameters: "mixed $var",
      returnValue: "string",
      ref: null
    }
  },
  str_getcsv: {
    name: "str_getcsv",
    url: "function.str-getcsv",
    spec: {
      parameters: "string $input [, string $delimiter = \",\" [, string $enclosure = '\"' [, string $escape = \"\\\\\" ]]]",
      returnValue: "array",
      ref: null
    }
  },
  str_ireplace: {
    name: "str_ireplace",
    url: "function.str-ireplace",
    spec: {
      parameters: "mixed $search, mixed $replace, mixed $subject [, int &$count ]",
      returnValue: "mixed",
      ref: null
    }
  },
  str_pad: {
    name: "str_pad",
    url: "function.str-pad",
    spec: {
      parameters: "string $input, int $pad_length [, string $pad_string = \" \" [, int $pad_type = STR_PAD_RIGHT ]]",
      returnValue: "string",
      ref: null
    }
  },
  str_repeat: {
    name: "str_repeat",
    url: "function.str-repeat",
    spec: {
      parameters: "string $input, int $multiplier",
      returnValue: "string",
      ref: null
    }
  },
  str_replace: {
    name: "str_replace",
    url: "function.str-replace",
    spec: {
      parameters: "mixed $search, mixed $replace, mixed $subject [, int &$count ]",
      returnValue: "mixed",
      ref: null
    }
  },
  str_rot13: {
    name: "str_rot13",
    url: "function.str-rot13",
    spec: {
      parameters: "string $str",
      returnValue: "string",
      ref: null
    }
  },
  str_shuffle: {
    name: "str_shuffle",
    url: "function.str-shuffle",
    spec: {
      parameters: "string $str",
      returnValue: "string",
      ref: null
    }
  },
  str_split: {
    name: "str_split",
    url: "function.str-split",
    spec: {
      parameters: "string $string [, int $split_length = 1 ]",
      returnValue: "array",
      ref: null
    }
  },
  str_word_count: {
    name: "str_word_count",
    url: "function.str-word-count",
    spec: {
      parameters: "string $string [, int $format = 0 [, string $charlist ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  substr: {
    name: "substr",
    url: "function.substr",
    spec: {
      parameters: "string $string, int $start [, int $length ]",
      returnValue: "string",
      ref: null
    }
  },
  substr_compare: {
    name: "substr_compare",
    url: "function.substr-compare",
    spec: {
      parameters: "string $main_str, string $str, int $offset [, int $length [, bool $case_insensitivity = FALSE ]]",
      returnValue: "int",
      ref: null
    }
  },
  substr_count: {
    name: "substr_count",
    url: "function.substr-count",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 [, int $length ]]",
      returnValue: "int",
      ref: null
    }
  },
  substr_replace: {
    name: "substr_replace",
    url: "function.substr-replace",
    spec: {
      parameters: "mixed $string, mixed $replacement, mixed $start [, mixed $length ]",
      returnValue: "mixed",
      ref: null
    }
  },
  svn_add: {
    name: "svn_add",
    url: "function.svn-add",
    spec: {
      parameters: "string $path [, bool $recursive = TRUE [, bool $force = FALSE ]]",
      returnValue: "bool",
      ref: null
    }
  },
  svn_auth_get_parameter: {
    name: "svn_auth_get_parameter",
    url: "function.svn-auth-get-parameter",
    spec: {
      parameters: "string $key",
      returnValue: "string",
      ref: null
    }
  },
  svn_auth_set_parameter: {
    name: "svn_auth_set_parameter",
    url: "function.svn-auth-set-parameter",
    spec: {
      parameters: "string $key, string $value",
      returnValue: "void",
      ref: null
    }
  },
  svn_blame: {
    name: "svn_blame",
    url: "function.svn-blame",
    spec: {
      parameters: "string $repository_url [, int $revision_no = SVN_REVISION_HEAD ]",
      returnValue: "array",
      ref: null
    }
  },
  svn_cat: {
    name: "svn_cat",
    url: "function.svn-cat",
    spec: {
      parameters: "string $repos_url [, int $revision_no ]",
      returnValue: "string",
      ref: null
    }
  },
  svn_checkout: {
    name: "svn_checkout",
    url: "function.svn-checkout",
    spec: {
      parameters: "string $repos, string $targetpath [, int $revision [, int $flags = 0 ]]",
      returnValue: "bool",
      ref: null
    }
  },
  svn_cleanup: {
    name: "svn_cleanup",
    url: "function.svn-cleanup",
    spec: {
      parameters: "string $workingdir",
      returnValue: "bool",
      ref: null
    }
  },
  svn_client_version: {
    name: "svn_client_version",
    url: "function.svn-client-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  svn_commit: {
    name: "svn_commit",
    url: "function.svn-commit",
    spec: {
      parameters: "string $log, array $targets [, bool $recursive = TRUE ]",
      returnValue: "array",
      ref: null
    }
  },
  svn_delete: {
    name: "svn_delete",
    url: "function.svn-delete",
    spec: {
      parameters: "string $path [, bool $force = FALSE ]",
      returnValue: "bool",
      ref: null
    }
  },
  svn_diff: {
    name: "svn_diff",
    url: "function.svn-diff",
    spec: {
      parameters: "string $path1, int $rev1, string $path2, int $rev2",
      returnValue: "array",
      ref: null
    }
  },
  svn_export: {
    name: "svn_export",
    url: "function.svn-export",
    spec: {
      parameters: "string $frompath, string $topath [, bool $working_copy = TRUE [, int $revision_no = -1 ]]",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_abort_txn: {
    name: "svn_fs_abort_txn",
    url: "function.svn-fs-abort-txn",
    spec: {
      parameters: "resource $txn",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_apply_text: {
    name: "svn_fs_apply_text",
    url: "function.svn-fs-apply-text",
    spec: {
      parameters: "resource $root, string $path",
      returnValue: "resource",
      ref: null
    }
  },
  svn_fs_begin_txn2: {
    name: "svn_fs_begin_txn2",
    url: "function.svn-fs-begin-txn2",
    spec: {
      parameters: "resource $repos, int $rev",
      returnValue: "resource",
      ref: null
    }
  },
  svn_fs_change_node_prop: {
    name: "svn_fs_change_node_prop",
    url: "function.svn-fs-change-node-prop",
    spec: {
      parameters: "resource $root, string $path, string $name, string $value",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_check_path: {
    name: "svn_fs_check_path",
    url: "function.svn-fs-check-path",
    spec: {
      parameters: "resource $fsroot, string $path",
      returnValue: "int",
      ref: null
    }
  },
  svn_fs_contents_changed: {
    name: "svn_fs_contents_changed",
    url: "function.svn-fs-contents-changed",
    spec: {
      parameters: "resource $root1, string $path1, resource $root2, string $path2",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_copy: {
    name: "svn_fs_copy",
    url: "function.svn-fs-copy",
    spec: {
      parameters: "resource $from_root, string $from_path, resource $to_root, string $to_path",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_delete: {
    name: "svn_fs_delete",
    url: "function.svn-fs-delete",
    spec: {
      parameters: "resource $root, string $path",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_dir_entries: {
    name: "svn_fs_dir_entries",
    url: "function.svn-fs-dir-entries",
    spec: {
      parameters: "resource $fsroot, string $path",
      returnValue: "array",
      ref: null
    }
  },
  svn_fs_file_contents: {
    name: "svn_fs_file_contents",
    url: "function.svn-fs-file-contents",
    spec: {
      parameters: "resource $fsroot, string $path",
      returnValue: "resource",
      ref: null
    }
  },
  svn_fs_file_length: {
    name: "svn_fs_file_length",
    url: "function.svn-fs-file-length",
    spec: {
      parameters: "resource $fsroot, string $path",
      returnValue: "int",
      ref: null
    }
  },
  svn_fs_is_dir: {
    name: "svn_fs_is_dir",
    url: "function.svn-fs-is-dir",
    spec: {
      parameters: "resource $root, string $path",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_is_file: {
    name: "svn_fs_is_file",
    url: "function.svn-fs-is-file",
    spec: {
      parameters: "resource $root, string $path",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_make_dir: {
    name: "svn_fs_make_dir",
    url: "function.svn-fs-make-dir",
    spec: {
      parameters: "resource $root, string $path",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_make_file: {
    name: "svn_fs_make_file",
    url: "function.svn-fs-make-file",
    spec: {
      parameters: "resource $root, string $path",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_node_created_rev: {
    name: "svn_fs_node_created_rev",
    url: "function.svn-fs-node-created-rev",
    spec: {
      parameters: "resource $fsroot, string $path",
      returnValue: "int",
      ref: null
    }
  },
  svn_fs_node_prop: {
    name: "svn_fs_node_prop",
    url: "function.svn-fs-node-prop",
    spec: {
      parameters: "resource $fsroot, string $path, string $propname",
      returnValue: "string",
      ref: null
    }
  },
  svn_fs_props_changed: {
    name: "svn_fs_props_changed",
    url: "function.svn-fs-props-changed",
    spec: {
      parameters: "resource $root1, string $path1, resource $root2, string $path2",
      returnValue: "bool",
      ref: null
    }
  },
  svn_fs_revision_prop: {
    name: "svn_fs_revision_prop",
    url: "function.svn-fs-revision-prop",
    spec: {
      parameters: "resource $fs, int $revnum, string $propname",
      returnValue: "string",
      ref: null
    }
  },
  svn_fs_revision_root: {
    name: "svn_fs_revision_root",
    url: "function.svn-fs-revision-root",
    spec: {
      parameters: "resource $fs, int $revnum",
      returnValue: "resource",
      ref: null
    }
  },
  svn_fs_txn_root: {
    name: "svn_fs_txn_root",
    url: "function.svn-fs-txn-root",
    spec: {
      parameters: "resource $txn",
      returnValue: "resource",
      ref: null
    }
  },
  svn_fs_youngest_rev: {
    name: "svn_fs_youngest_rev",
    url: "function.svn-fs-youngest-rev",
    spec: {
      parameters: "resource $fs",
      returnValue: "int",
      ref: null
    }
  },
  svn_import: {
    name: "svn_import",
    url: "function.svn-import",
    spec: {
      parameters: "string $path, string $url, bool $nonrecursive",
      returnValue: "bool",
      ref: null
    }
  },
  svn_log: {
    name: "svn_log",
    url: "function.svn-log",
    spec: {
      parameters: "string $repos_url [, int $start_revision [, int $end_revision [, int $limit = 0 [, int $flags = SVN_DISCOVER_CHANGED_PATHS | SVN_STOP_ON_COPY ]]]]",
      returnValue: "array",
      ref: null
    }
  },
  svn_ls: {
    name: "svn_ls",
    url: "function.svn-ls",
    spec: {
      parameters: "string $repos_url [, int $revision_no = SVN_REVISION_HEAD [, bool $recurse = FALSE [, bool $peg = FALSE ]]]",
      returnValue: "array",
      ref: null
    }
  },
  svn_mkdir: {
    name: "svn_mkdir",
    url: "function.svn-mkdir",
    spec: {
      parameters: "string $path [, string $log_message ]",
      returnValue: "bool",
      ref: null
    }
  },
  svn_repos_create: {
    name: "svn_repos_create",
    url: "function.svn-repos-create",
    spec: {
      parameters: "string $path [, array $config [, array $fsconfig ]]",
      returnValue: "resource",
      ref: null
    }
  },
  svn_repos_fs: {
    name: "svn_repos_fs",
    url: "function.svn-repos-fs",
    spec: {
      parameters: "resource $repos",
      returnValue: "resource",
      ref: null
    }
  },
  svn_repos_fs_begin_txn_for_commit: {
    name: "svn_repos_fs_begin_txn_for_commit",
    url: "function.svn-repos-fs-begin-txn-for-commit",
    spec: {
      parameters: "resource $repos, int $rev, string $author, string $log_msg",
      returnValue: "resource",
      ref: null
    }
  },
  svn_repos_fs_commit_txn: {
    name: "svn_repos_fs_commit_txn",
    url: "function.svn-repos-fs-commit-txn",
    spec: {
      parameters: "resource $txn",
      returnValue: "int",
      ref: null
    }
  },
  svn_repos_hotcopy: {
    name: "svn_repos_hotcopy",
    url: "function.svn-repos-hotcopy",
    spec: {
      parameters: "string $repospath, string $destpath, bool $cleanlogs",
      returnValue: "bool",
      ref: null
    }
  },
  svn_repos_open: {
    name: "svn_repos_open",
    url: "function.svn-repos-open",
    spec: {
      parameters: "string $path",
      returnValue: "resource",
      ref: null
    }
  },
  svn_repos_recover: {
    name: "svn_repos_recover",
    url: "function.svn-repos-recover",
    spec: {
      parameters: "string $path",
      returnValue: "bool",
      ref: null
    }
  },
  svn_revert: {
    name: "svn_revert",
    url: "function.svn-revert",
    spec: {
      parameters: "string $path [, bool $recursive = FALSE ]",
      returnValue: "bool",
      ref: null
    }
  },
  svn_status: {
    name: "svn_status",
    url: "function.svn-status",
    spec: {
      parameters: "string $path [, int $flags = 0 ]",
      returnValue: "array",
      ref: null
    }
  },
  svn_update: {
    name: "svn_update",
    url: "function.svn-update",
    spec: {
      parameters: "string $path [, int $revno = SVN_REVISION_HEAD [, bool $recurse = TRUE ]]",
      returnValue: "int",
      ref: null
    }
  },
  swoole_async_dns_lookup: {
    name: "swoole_async_dns_lookup",
    url: "function.swoole-async-dns-lookup",
    spec: {
      parameters: "string $hostname, callable $callback",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_async_read: {
    name: "swoole_async_read",
    url: "function.swoole-async-read",
    spec: {
      parameters: "string $filename, callable $callback [, int $chunk_size = 65536 [, int $offset = 0 ]]",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_async_readfile: {
    name: "swoole_async_readfile",
    url: "function.swoole-async-readfile",
    spec: {
      parameters: "string $filename, callable $callback",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_async_set: {
    name: "swoole_async_set",
    url: "function.swoole-async-set",
    spec: {
      parameters: "array $settings",
      returnValue: "void",
      ref: null
    }
  },
  swoole_async_write: {
    name: "swoole_async_write",
    url: "function.swoole-async-write",
    spec: {
      parameters: "string $filename, string $content [, integer $offset [, callable $callback ]]",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_async_writefile: {
    name: "swoole_async_writefile",
    url: "function.swoole-async-writefile",
    spec: {
      parameters: "string $filename, string $content [, callable $callback [, int $flags = 0 ]]",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_client_select: {
    name: "swoole_client_select",
    url: "function.swoole-client-select",
    spec: {
      parameters: "array &$read_array, array &$write_array, array &$error_array [, float $timeout = 0.5 ]",
      returnValue: "int",
      ref: null
    }
  },
  swoole_cpu_num: {
    name: "swoole_cpu_num",
    url: "function.swoole-cpu-num",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  swoole_errno: {
    name: "swoole_errno",
    url: "function.swoole-errno",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  swoole_event_add: {
    name: "swoole_event_add",
    url: "function.swoole-event-add",
    spec: {
      parameters: "int $fd [, callable $read_callback [, callable $write_callback [, int $events = 0 ]]]",
      returnValue: "int",
      ref: null
    }
  },
  swoole_event_defer: {
    name: "swoole_event_defer",
    url: "function.swoole-event-defer",
    spec: {
      parameters: "callable $callback",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_event_del: {
    name: "swoole_event_del",
    url: "function.swoole-event-del",
    spec: {
      parameters: "int $fd",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_event_exit: {
    name: "swoole_event_exit",
    url: "function.swoole-event-exit",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  swoole_event_set: {
    name: "swoole_event_set",
    url: "function.swoole-event-set",
    spec: {
      parameters: "int $fd [, callable $read_callback [, callable $write_callback [, int $events = 0 ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_event_wait: {
    name: "swoole_event_wait",
    url: "function.swoole-event-wait",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  swoole_event_write: {
    name: "swoole_event_write",
    url: "function.swoole-event-write",
    spec: {
      parameters: "int $fd, string $data",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_get_local_ip: {
    name: "swoole_get_local_ip",
    url: "function.swoole-get-local-ip",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  swoole_last_error: {
    name: "swoole_last_error",
    url: "function.swoole-last-error",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  swoole_load_module: {
    name: "swoole_load_module",
    url: "function.swoole-load-module",
    spec: {
      parameters: "string $filename",
      returnValue: "mixed",
      ref: null
    }
  },
  swoole_select: {
    name: "swoole_select",
    url: "function.swoole-select",
    spec: {
      parameters: "array &$read_array, array &$write_array, array &$error_array [, float $timeout ]",
      returnValue: "int",
      ref: null
    }
  },
  swoole_set_process_name: {
    name: "swoole_set_process_name",
    url: "function.swoole-set-process-name",
    spec: {
      parameters: "string $process_name [, int $size = 128 ]",
      returnValue: "void",
      ref: null
    }
  },
  swoole_strerror: {
    name: "swoole_strerror",
    url: "function.swoole-strerror",
    spec: {
      parameters: "int $errno [, int $error_type = 0 ]",
      returnValue: "string",
      ref: null
    }
  },
  swoole_timer_after: {
    name: "swoole_timer_after",
    url: "function.swoole-timer-after",
    spec: {
      parameters: "int $ms, callable $callback [, mixed $param ]",
      returnValue: "int",
      ref: null
    }
  },
  swoole_timer_exists: {
    name: "swoole_timer_exists",
    url: "function.swoole-timer-exists",
    spec: {
      parameters: "int $timer_id",
      returnValue: "bool",
      ref: null
    }
  },
  swoole_timer_tick: {
    name: "swoole_timer_tick",
    url: "function.swoole-timer-tick",
    spec: {
      parameters: "int $ms, callable $callback [, mixed $param ]",
      returnValue: "int",
      ref: null
    }
  },
  swoole_version: {
    name: "swoole_version",
    url: "function.swoole-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sybase_affected_rows: {
    name: "sybase_affected_rows",
    url: "function.sybase-affected-rows",
    spec: {
      parameters: "[ resource $link_identifier ]",
      returnValue: "int",
      ref: null
    }
  },
  sybase_close: {
    name: "sybase_close",
    url: "function.sybase-close",
    spec: {
      parameters: "[ resource $link_identifier ]",
      returnValue: "bool",
      ref: null
    }
  },
  sybase_connect: {
    name: "sybase_connect",
    url: "function.sybase-connect",
    spec: {
      parameters: "[ string $servername [, string $username [, string $password [, string $charset [, string $appname [, bool $new = FALSE ]]]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  sybase_data_seek: {
    name: "sybase_data_seek",
    url: "function.sybase-data-seek",
    spec: {
      parameters: "resource $result_identifier, int $row_number",
      returnValue: "bool",
      ref: null
    }
  },
  sybase_deadlock_retry_count: {
    name: "sybase_deadlock_retry_count",
    url: "function.sybase-deadlock-retry-count",
    spec: {
      parameters: "int $retry_count",
      returnValue: "void",
      ref: null
    }
  },
  sybase_fetch_array: {
    name: "sybase_fetch_array",
    url: "function.sybase-fetch-array",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  sybase_fetch_assoc: {
    name: "sybase_fetch_assoc",
    url: "function.sybase-fetch-assoc",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  sybase_fetch_field: {
    name: "sybase_fetch_field",
    url: "function.sybase-fetch-field",
    spec: {
      parameters: "resource $result [, int $field_offset = -1 ]",
      returnValue: "object",
      ref: null
    }
  },
  sybase_fetch_object: {
    name: "sybase_fetch_object",
    url: "function.sybase-fetch-object",
    spec: {
      parameters: "resource $result [, mixed $object ]",
      returnValue: "object",
      ref: null
    }
  },
  sybase_fetch_row: {
    name: "sybase_fetch_row",
    url: "function.sybase-fetch-row",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  sybase_field_seek: {
    name: "sybase_field_seek",
    url: "function.sybase-field-seek",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "bool",
      ref: null
    }
  },
  sybase_free_result: {
    name: "sybase_free_result",
    url: "function.sybase-free-result",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  sybase_get_last_message: {
    name: "sybase_get_last_message",
    url: "function.sybase-get-last-message",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  sybase_min_client_severity: {
    name: "sybase_min_client_severity",
    url: "function.sybase-min-client-severity",
    spec: {
      parameters: "int $severity",
      returnValue: "void",
      ref: null
    }
  },
  sybase_min_error_severity: {
    name: "sybase_min_error_severity",
    url: "function.sybase-min-error-severity",
    spec: {
      parameters: "int $severity",
      returnValue: "void",
      ref: null
    }
  },
  sybase_min_message_severity: {
    name: "sybase_min_message_severity",
    url: "function.sybase-min-message-severity",
    spec: {
      parameters: "int $severity",
      returnValue: "void",
      ref: null
    }
  },
  sybase_min_server_severity: {
    name: "sybase_min_server_severity",
    url: "function.sybase-min-server-severity",
    spec: {
      parameters: "int $severity",
      returnValue: "void",
      ref: null
    }
  },
  sybase_num_fields: {
    name: "sybase_num_fields",
    url: "function.sybase-num-fields",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  sybase_num_rows: {
    name: "sybase_num_rows",
    url: "function.sybase-num-rows",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  sybase_pconnect: {
    name: "sybase_pconnect",
    url: "function.sybase-pconnect",
    spec: {
      parameters: "[ string $servername [, string $username [, string $password [, string $charset [, string $appname ]]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  sybase_query: {
    name: "sybase_query",
    url: "function.sybase-query",
    spec: {
      parameters: "string $query [, resource $link_identifier ]",
      returnValue: "mixed",
      ref: null
    }
  },
  sybase_result: {
    name: "sybase_result",
    url: "function.sybase-result",
    spec: {
      parameters: "resource $result, int $row, mixed $field",
      returnValue: "string",
      ref: null
    }
  },
  sybase_select_db: {
    name: "sybase_select_db",
    url: "function.sybase-select-db",
    spec: {
      parameters: "string $database_name [, resource $link_identifier ]",
      returnValue: "bool",
      ref: null
    }
  },
  sybase_set_message_handler: {
    name: "sybase_set_message_handler",
    url: "function.sybase-set-message-handler",
    spec: {
      parameters: "callable $handler [, resource $link_identifier ]",
      returnValue: "bool",
      ref: null
    }
  },
  sybase_unbuffered_query: {
    name: "sybase_unbuffered_query",
    url: "function.sybase-unbuffered-query",
    spec: {
      parameters: "string $query, resource $link_identifier [, bool $store_result ]",
      returnValue: "resource",
      ref: null
    }
  },
  symlink: {
    name: "symlink",
    url: "function.symlink",
    spec: {
      parameters: "string $target, string $link",
      returnValue: "bool",
      ref: null
    }
  },
  syslog: {
    name: "syslog",
    url: "function.syslog",
    spec: {
      parameters: "int $priority, string $message",
      returnValue: "bool",
      ref: null
    }
  },
  system: {
    name: "system",
    url: "function.system",
    spec: {
      parameters: "string $command [, int &$return_var ]",
      returnValue: "string",
      ref: null
    }
  },
  sys_getloadavg: {
    name: "sys_getloadavg",
    url: "function.sys-getloadavg",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  sys_get_temp_dir: {
    name: "sys_get_temp_dir",
    url: "function.sys-get-temp-dir",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  }
};
