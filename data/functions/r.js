functions.r = {
  rad2deg: {
    name: "rad2deg",
    url: "function.rad2deg",
    spec: {
      parameters: "float $number",
      returnValue: "float",
      ref: null
    }
  },
  radius_acct_open: {
    name: "radius_acct_open",
    url: "function.radius-acct-open",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  radius_add_server: {
    name: "radius_add_server",
    url: "function.radius-add-server",
    spec: {
      parameters: "resource $radius_handle, string $hostname, int $port, string $secret, int $timeout, int $max_tries",
      returnValue: "bool",
      ref: null
    }
  },
  radius_auth_open: {
    name: "radius_auth_open",
    url: "function.radius-auth-open",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  radius_close: {
    name: "radius_close",
    url: "function.radius-close",
    spec: {
      parameters: "resource $radius_handle",
      returnValue: "bool",
      ref: null
    }
  },
  radius_config: {
    name: "radius_config",
    url: "function.radius-config",
    spec: {
      parameters: "resource $radius_handle, string $file",
      returnValue: "bool",
      ref: null
    }
  },
  radius_create_request: {
    name: "radius_create_request",
    url: "function.radius-create-request",
    spec: {
      parameters: "resource $radius_handle, int $type",
      returnValue: "bool",
      ref: null
    }
  },
  radius_cvt_addr: {
    name: "radius_cvt_addr",
    url: "function.radius-cvt-addr",
    spec: {
      parameters: "string $data",
      returnValue: "string",
      ref: null
    }
  },
  radius_cvt_int: {
    name: "radius_cvt_int",
    url: "function.radius-cvt-int",
    spec: {
      parameters: "string $data",
      returnValue: "int",
      ref: null
    }
  },
  radius_cvt_string: {
    name: "radius_cvt_string",
    url: "function.radius-cvt-string",
    spec: {
      parameters: "string $data",
      returnValue: "string",
      ref: null
    }
  },
  radius_demangle: {
    name: "radius_demangle",
    url: "function.radius-demangle",
    spec: {
      parameters: "resource $radius_handle, string $mangled",
      returnValue: "string",
      ref: null
    }
  },
  radius_demangle_mppe_key: {
    name: "radius_demangle_mppe_key",
    url: "function.radius-demangle-mppe-key",
    spec: {
      parameters: "resource $radius_handle, string $mangled",
      returnValue: "string",
      ref: null
    }
  },
  radius_get_attr: {
    name: "radius_get_attr",
    url: "function.radius-get-attr",
    spec: {
      parameters: "resource $radius_handle",
      returnValue: "mixed",
      ref: null
    }
  },
  radius_get_tagged_attr_data: {
    name: "radius_get_tagged_attr_data",
    url: "function.radius-get-tagged-attr-data",
    spec: {
      parameters: "string $data",
      returnValue: "string",
      ref: null
    }
  },
  radius_get_tagged_attr_tag: {
    name: "radius_get_tagged_attr_tag",
    url: "function.radius-get-tagged-attr-tag",
    spec: {
      parameters: "string $data",
      returnValue: "int",
      ref: null
    }
  },
  radius_get_vendor_attr: {
    name: "radius_get_vendor_attr",
    url: "function.radius-get-vendor-attr",
    spec: {
      parameters: "string $data",
      returnValue: "array",
      ref: null
    }
  },
  radius_put_addr: {
    name: "radius_put_addr",
    url: "function.radius-put-addr",
    spec: {
      parameters: "resource $radius_handle, int $type, string $addr [, int $options = 0 [, int $tag ]]",
      returnValue: "bool",
      ref: null
    }
  },
  radius_put_attr: {
    name: "radius_put_attr",
    url: "function.radius-put-attr",
    spec: {
      parameters: "resource $radius_handle, int $type, string $value [, int $options = 0 [, int $tag ]]",
      returnValue: "bool",
      ref: null
    }
  },
  radius_put_int: {
    name: "radius_put_int",
    url: "function.radius-put-int",
    spec: {
      parameters: "resource $radius_handle, int $type, int $value [, int $options = 0 [, int $tag ]]",
      returnValue: "bool",
      ref: null
    }
  },
  radius_put_string: {
    name: "radius_put_string",
    url: "function.radius-put-string",
    spec: {
      parameters: "resource $radius_handle, int $type, string $value [, int $options = 0 [, int $tag ]]",
      returnValue: "bool",
      ref: null
    }
  },
  radius_put_vendor_addr: {
    name: "radius_put_vendor_addr",
    url: "function.radius-put-vendor-addr",
    spec: {
      parameters: "resource $radius_handle, int $vendor, int $type, string $addr",
      returnValue: "bool",
      ref: null
    }
  },
  radius_put_vendor_attr: {
    name: "radius_put_vendor_attr",
    url: "function.radius-put-vendor-attr",
    spec: {
      parameters: "resource $radius_handle, int $vendor, int $type, string $value [, int $options = 0 [, int $tag ]]",
      returnValue: "bool",
      ref: null
    }
  },
  radius_put_vendor_int: {
    name: "radius_put_vendor_int",
    url: "function.radius-put-vendor-int",
    spec: {
      parameters: "resource $radius_handle, int $vendor, int $type, int $value [, int $options = 0 [, int $tag ]]",
      returnValue: "bool",
      ref: null
    }
  },
  radius_put_vendor_string: {
    name: "radius_put_vendor_string",
    url: "function.radius-put-vendor-string",
    spec: {
      parameters: "resource $radius_handle, int $vendor, int $type, string $value [, int $options = 0 [, int $tag ]]",
      returnValue: "bool",
      ref: null
    }
  },
  radius_request_authenticator: {
    name: "radius_request_authenticator",
    url: "function.radius-request-authenticator",
    spec: {
      parameters: "resource $radius_handle",
      returnValue: "string",
      ref: null
    }
  },
  radius_salt_encrypt_attr: {
    name: "radius_salt_encrypt_attr",
    url: "function.radius-salt-encrypt-attr",
    spec: {
      parameters: "resource $radius_handle, string $data",
      returnValue: "string",
      ref: null
    }
  },
  radius_send_request: {
    name: "radius_send_request",
    url: "function.radius-send-request",
    spec: {
      parameters: "resource $radius_handle",
      returnValue: "int",
      ref: null
    }
  },
  radius_server_secret: {
    name: "radius_server_secret",
    url: "function.radius-server-secret",
    spec: {
      parameters: "resource $radius_handle",
      returnValue: "string",
      ref: null
    }
  },
  radius_strerror: {
    name: "radius_strerror",
    url: "function.radius-strerror",
    spec: {
      parameters: "resource $radius_handle",
      returnValue: "string",
      ref: null
    }
  },
  rand: {
    name: "rand",
    url: "function.rand",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  random_bytes: {
    name: "random_bytes",
    url: "function.random-bytes",
    spec: {
      parameters: "int $length",
      returnValue: "string",
      ref: null
    }
  },
  random_int: {
    name: "random_int",
    url: "function.random-int",
    spec: {
      parameters: "int $min, int $max",
      returnValue: "int",
      ref: null
    }
  },
  range: {
    name: "range",
    url: "function.range",
    spec: {
      parameters: "mixed $start, mixed $end [, number $step = 1 ]",
      returnValue: "array",
      ref: null
    }
  },
  rar_wrapper_cache_stats: {
    name: "rar_wrapper_cache_stats",
    url: "function.rar-wrapper-cache-stats",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  rawurldecode: {
    name: "rawurldecode",
    url: "function.rawurldecode",
    spec: {
      parameters: "string $str",
      returnValue: "string",
      ref: null
    }
  },
  rawurlencode: {
    name: "rawurlencode",
    url: "function.rawurlencode",
    spec: {
      parameters: "string $str",
      returnValue: "string",
      ref: null
    }
  },
  readdir: {
    name: "readdir",
    url: "function.readdir",
    spec: {
      parameters: "[ resource $dir_handle ]",
      returnValue: "string",
      ref: null
    }
  },
  readfile: {
    name: "readfile",
    url: "function.readfile",
    spec: {
      parameters: "string $filename [, bool $use_include_path = FALSE [, resource $context ]]",
      returnValue: "int",
      ref: null
    }
  },
  readgzfile: {
    name: "readgzfile",
    url: "function.readgzfile",
    spec: {
      parameters: "string $filename [, int $use_include_path = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  readline: {
    name: "readline",
    url: "function.readline",
    spec: {
      parameters: "[ string $prompt ]",
      returnValue: "string",
      ref: null
    }
  },
  readline_add_history: {
    name: "readline_add_history",
    url: "function.readline-add-history",
    spec: {
      parameters: "string $line",
      returnValue: "bool",
      ref: null
    }
  },
  readline_callback_handler_install: {
    name: "readline_callback_handler_install",
    url: "function.readline-callback-handler-install",
    spec: {
      parameters: "string $prompt, callable $callback",
      returnValue: "bool",
      ref: null
    }
  },
  readline_callback_handler_remove: {
    name: "readline_callback_handler_remove",
    url: "function.readline-callback-handler-remove",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  readline_callback_read_char: {
    name: "readline_callback_read_char",
    url: "function.readline-callback-read-char",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  readline_clear_history: {
    name: "readline_clear_history",
    url: "function.readline-clear-history",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  readline_completion_function: {
    name: "readline_completion_function",
    url: "function.readline-completion-function",
    spec: {
      parameters: "callable $function",
      returnValue: "bool",
      ref: null
    }
  },
  readline_info: {
    name: "readline_info",
    url: "function.readline-info",
    spec: {
      parameters: "[ string $varname [, string $newvalue ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  readline_list_history: {
    name: "readline_list_history",
    url: "function.readline-list-history",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  readline_on_new_line: {
    name: "readline_on_new_line",
    url: "function.readline-on-new-line",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  readline_read_history: {
    name: "readline_read_history",
    url: "function.readline-read-history",
    spec: {
      parameters: "[ string $filename ]",
      returnValue: "bool",
      ref: null
    }
  },
  readline_redisplay: {
    name: "readline_redisplay",
    url: "function.readline-redisplay",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  readline_write_history: {
    name: "readline_write_history",
    url: "function.readline-write-history",
    spec: {
      parameters: "[ string $filename ]",
      returnValue: "bool",
      ref: null
    }
  },
  readlink: {
    name: "readlink",
    url: "function.readlink",
    spec: {
      parameters: "string $path",
      returnValue: "string",
      ref: null
    }
  },
  read_exif_data: {
    name: "read_exif_data",
    url: "function.read-exif-data",
    spec: {
      parameters: "string $filename [, string $sections = NULL [, bool $arrays = false [, bool $thumbnail = false ]]]",
      returnValue: "array",
      ref: {
        name: "exif_read_data()",
        url: "function.exif-read-data"
      }
    }
  },
  realpath: {
    name: "realpath",
    url: "function.realpath",
    spec: {
      parameters: "string $path",
      returnValue: "string",
      ref: null
    }
  },
  realpath_cache_get: {
    name: "realpath_cache_get",
    url: "function.realpath-cache-get",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  realpath_cache_size: {
    name: "realpath_cache_size",
    url: "function.realpath-cache-size",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  recode: {
    name: "recode",
    url: "function.recode",
    spec: {
      parameters: "string $request, string $string",
      returnValue: "string",
      ref: {
        name: "recode_string()",
        url: "function.recode-string"
      }
    }
  },
  recode_file: {
    name: "recode_file",
    url: "function.recode-file",
    spec: {
      parameters: "string $request, resource $input, resource $output",
      returnValue: "bool",
      ref: null
    }
  },
  recode_string: {
    name: "recode_string",
    url: "function.recode-string",
    spec: {
      parameters: "string $request, string $string",
      returnValue: "string",
      ref: null
    }
  },
  register_shutdown_function: {
    name: "register_shutdown_function",
    url: "function.register-shutdown-function",
    spec: {
      parameters: "callable $callback [, mixed $... ]",
      returnValue: "void",
      ref: null
    }
  },
  register_tick_function: {
    name: "register_tick_function",
    url: "function.register-tick-function",
    spec: {
      parameters: "callable $function [, mixed $arg [, mixed $... ]]",
      returnValue: "bool",
      ref: null
    }
  },
  rename: {
    name: "rename",
    url: "function.rename",
    spec: {
      parameters: "string $oldname, string $newname [, resource $context ]",
      returnValue: "bool",
      ref: null
    }
  },
  rename_function: {
    name: "rename_function",
    url: "function.rename-function",
    spec: {
      parameters: "string $original_name, string $new_name",
      returnValue: "bool",
      ref: null
    }
  },
  reset: {
    name: "reset",
    url: "function.reset",
    spec: {
      parameters: "array &$array",
      returnValue: "mixed",
      ref: null
    }
  },
  restore_error_handler: {
    name: "restore_error_handler",
    url: "function.restore-error-handler",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  restore_exception_handler: {
    name: "restore_exception_handler",
    url: "function.restore-exception-handler",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  restore_include_path: {
    name: "restore_include_path",
    url: "function.restore-include-path",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  rewind: {
    name: "rewind",
    url: "function.rewind",
    spec: {
      parameters: "resource $handle",
      returnValue: "bool",
      ref: null
    }
  },
  rewinddir: {
    name: "rewinddir",
    url: "function.rewinddir",
    spec: {
      parameters: "[ resource $dir_handle ]",
      returnValue: "void",
      ref: null
    }
  },
  rmdir: {
    name: "rmdir",
    url: "function.rmdir",
    spec: {
      parameters: "string $dirname [, resource $context ]",
      returnValue: "bool",
      ref: null
    }
  },
  round: {
    name: "round",
    url: "function.round",
    spec: {
      parameters: "float $val [, int $precision = 0 [, int $mode = PHP_ROUND_HALF_UP ]]",
      returnValue: "float",
      ref: null
    }
  },
  rpm_close: {
    name: "rpm_close",
    url: "function.rpm-close",
    spec: {
      parameters: "resource $rpmr",
      returnValue: "bool",
      ref: null
    }
  },
  rpm_get_tag: {
    name: "rpm_get_tag",
    url: "function.rpm-get-tag",
    spec: {
      parameters: "resource $rpmr, int $tagnum",
      returnValue: "mixed",
      ref: null
    }
  },
  rpm_is_valid: {
    name: "rpm_is_valid",
    url: "function.rpm-is-valid",
    spec: {
      parameters: "string $filename",
      returnValue: "bool",
      ref: null
    }
  },
  rpm_open: {
    name: "rpm_open",
    url: "function.rpm-open",
    spec: {
      parameters: "string $filename",
      returnValue: "resource",
      ref: null
    }
  },
  rpm_version: {
    name: "rpm_version",
    url: "function.rpm-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  rrdc_disconnect: {
    name: "rrdc_disconnect",
    url: "function.rrdc-disconnect",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  rrd_create: {
    name: "rrd_create",
    url: "function.rrd-create",
    spec: {
      parameters: "string $filename, array $options",
      returnValue: "bool",
      ref: null
    }
  },
  rrd_error: {
    name: "rrd_error",
    url: "function.rrd-error",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  rrd_fetch: {
    name: "rrd_fetch",
    url: "function.rrd-fetch",
    spec: {
      parameters: "string $filename, array $options",
      returnValue: "array",
      ref: null
    }
  },
  rrd_first: {
    name: "rrd_first",
    url: "function.rrd-first",
    spec: {
      parameters: "string $file [, int $raaindex = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  rrd_graph: {
    name: "rrd_graph",
    url: "function.rrd-graph",
    spec: {
      parameters: "string $filename, array $options",
      returnValue: "array",
      ref: null
    }
  },
  rrd_info: {
    name: "rrd_info",
    url: "function.rrd-info",
    spec: {
      parameters: "string $filename",
      returnValue: "array",
      ref: null
    }
  },
  rrd_last: {
    name: "rrd_last",
    url: "function.rrd-last",
    spec: {
      parameters: "string $filename",
      returnValue: "int",
      ref: null
    }
  },
  rrd_lastupdate: {
    name: "rrd_lastupdate",
    url: "function.rrd-lastupdate",
    spec: {
      parameters: "string $filename",
      returnValue: "array",
      ref: null
    }
  },
  rrd_restore: {
    name: "rrd_restore",
    url: "function.rrd-restore",
    spec: {
      parameters: "string $xml_file, string $rrd_file [, array $options ]",
      returnValue: "bool",
      ref: null
    }
  },
  rrd_tune: {
    name: "rrd_tune",
    url: "function.rrd-tune",
    spec: {
      parameters: "string $filename, array $options",
      returnValue: "bool",
      ref: null
    }
  },
  rrd_update: {
    name: "rrd_update",
    url: "function.rrd-update",
    spec: {
      parameters: "string $filename, array $options",
      returnValue: "bool",
      ref: null
    }
  },
  rrd_version: {
    name: "rrd_version",
    url: "function.rrd-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  rrd_xport: {
    name: "rrd_xport",
    url: "function.rrd-xport",
    spec: {
      parameters: "array $options",
      returnValue: "array",
      ref: null
    }
  },
  rsort: {
    name: "rsort",
    url: "function.rsort",
    spec: {
      parameters: "array &$array [, int $sort_flags = SORT_REGULAR ]",
      returnValue: "bool",
      ref: null
    }
  },
  rtrim: {
    name: "rtrim",
    url: "function.rtrim",
    spec: {
      parameters: "string $str [, string $character_mask ]",
      returnValue: "string",
      ref: null
    }
  },
  runkit_class_adopt: {
    name: "runkit_class_adopt",
    url: "function.runkit-class-adopt",
    spec: {
      parameters: "string $classname, string $parentname",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_class_emancipate: {
    name: "runkit_class_emancipate",
    url: "function.runkit-class-emancipate",
    spec: {
      parameters: "string $classname",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_constant_add: {
    name: "runkit_constant_add",
    url: "function.runkit-constant-add",
    spec: {
      parameters: "string $constname, mixed $value",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_constant_redefine: {
    name: "runkit_constant_redefine",
    url: "function.runkit-constant-redefine",
    spec: {
      parameters: "string $constname, mixed $newvalue",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_constant_remove: {
    name: "runkit_constant_remove",
    url: "function.runkit-constant-remove",
    spec: {
      parameters: "string $constname",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_function_add: {
    name: "runkit_function_add",
    url: "function.runkit-function-add",
    spec: {
      parameters: "string $funcname, string $arglist, string $code [, bool $return_by_reference = NULL [, string $doc_comment = NULL ]]",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_function_copy: {
    name: "runkit_function_copy",
    url: "function.runkit-function-copy",
    spec: {
      parameters: "string $funcname, string $targetname",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_function_redefine: {
    name: "runkit_function_redefine",
    url: "function.runkit-function-redefine",
    spec: {
      parameters: "string $funcname, string $arglist, string $code [, bool $return_by_reference = NULL [, string $doc_comment = NULL ]]",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_function_remove: {
    name: "runkit_function_remove",
    url: "function.runkit-function-remove",
    spec: {
      parameters: "string $funcname",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_function_rename: {
    name: "runkit_function_rename",
    url: "function.runkit-function-rename",
    spec: {
      parameters: "string $funcname, string $newname",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_import: {
    name: "runkit_import",
    url: "function.runkit-import",
    spec: {
      parameters: "string $filename [, int $flags = RUNKIT_IMPORT_CLASS_METHODS ]",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_lint: {
    name: "runkit_lint",
    url: "function.runkit-lint",
    spec: {
      parameters: "string $code",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_lint_file: {
    name: "runkit_lint_file",
    url: "function.runkit-lint-file",
    spec: {
      parameters: "string $filename",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_method_add: {
    name: "runkit_method_add",
    url: "function.runkit-method-add",
    spec: {
      parameters: "string $classname, string $methodname, string $args, string $code [, int $flags = RUNKIT_ACC_PUBLIC [, string $doc_comment = NULL ]]",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_method_copy: {
    name: "runkit_method_copy",
    url: "function.runkit-method-copy",
    spec: {
      parameters: "string $dClass, string $dMethod, string $sClass [, string $sMethod ]",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_method_redefine: {
    name: "runkit_method_redefine",
    url: "function.runkit-method-redefine",
    spec: {
      parameters: "string $classname, string $methodname, string $args, string $code [, int $flags = RUNKIT_ACC_PUBLIC [, string $doc_comment = NULL ]]",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_method_remove: {
    name: "runkit_method_remove",
    url: "function.runkit-method-remove",
    spec: {
      parameters: "string $classname, string $methodname",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_method_rename: {
    name: "runkit_method_rename",
    url: "function.runkit-method-rename",
    spec: {
      parameters: "string $classname, string $methodname, string $newname",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_return_value_used: {
    name: "runkit_return_value_used",
    url: "function.runkit-return-value-used",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  runkit_sandbox: {
    name: "Runkit_Sandbox",
    url: "runkit.sandbox",
    spec: {
      parameters: "[ array $options ]",
      returnValue: "void",
      ref: null
    }
  },
  runkit_sandbox_output_handler: {
    name: "runkit_sandbox_output_handler",
    url: "function.runkit-sandbox-output-handler",
    spec: {
      parameters: "object $sandbox [, mixed $callback ]",
      returnValue: "mixed",
      ref: null
    }
  },
  runkit_sandbox_parent: {
    name: "Runkit_Sandbox_Parent",
    url: "runkit.sandbox-parent",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  runkit_superglobals: {
    name: "runkit_superglobals",
    url: "function.runkit-superglobals",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  }
};
