functions.a = {
  abs: {
    name: "abs",
    url: "function.abs",
    spec: {
      parameters: "mixed $number",
      returnValue: "number",
      ref: null
    }
  },
  acos: {
    name: "acos",
    url: "function.acos",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  acosh: {
    name: "acosh",
    url: "function.acosh",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  addcslashes: {
    name: "addcslashes",
    url: "function.addcslashes",
    spec: {
      parameters: "string $str, string $charlist",
      returnValue: "string",
      ref: null
    }
  },
  addslashes: {
    name: "addslashes",
    url: "function.addslashes",
    spec: {
      parameters: "string $str",
      returnValue: "string",
      ref: null
    }
  },
  apache_child_terminate: {
    name: "apache_child_terminate",
    url: "function.apache-child-terminate",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  apache_getenv: {
    name: "apache_getenv",
    url: "function.apache-getenv",
    spec: {
      parameters: "string $variable [, bool $walk_to_top = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  apache_get_modules: {
    name: "apache_get_modules",
    url: "function.apache-get-modules",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  apache_get_version: {
    name: "apache_get_version",
    url: "function.apache-get-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  apache_lookup_uri: {
    name: "apache_lookup_uri",
    url: "function.apache-lookup-uri",
    spec: {
      parameters: "string $filename",
      returnValue: "object",
      ref: null
    }
  },
  apache_note: {
    name: "apache_note",
    url: "function.apache-note",
    spec: {
      parameters: "string $note_name [, string $note_value = \"\" ]",
      returnValue: "string",
      ref: null
    }
  },
  apache_request_headers: {
    name: "apache_request_headers",
    url: "function.apache-request-headers",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  apache_reset_timeout: {
    name: "apache_reset_timeout",
    url: "function.apache-reset-timeout",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  apache_response_headers: {
    name: "apache_response_headers",
    url: "function.apache-response-headers",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  apache_setenv: {
    name: "apache_setenv",
    url: "function.apache-setenv",
    spec: {
      parameters: "string $variable, string $value [, bool $walk_to_top = FALSE ]",
      returnValue: "bool",
      ref: null
    }
  },
  apcu_add: {
    name: "apcu_add",
    url: "function.apcu-add",
    spec: {
      parameters: "string $key, mixed $var [, int $ttl = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  apcu_cache_info: {
    name: "apcu_cache_info",
    url: "function.apcu-cache-info",
    spec: {
      parameters: "[ bool $limited = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  apcu_cas: {
    name: "apcu_cas",
    url: "function.apcu-cas",
    spec: {
      parameters: "string $key, int $old, int $new",
      returnValue: "bool",
      ref: null
    }
  },
  apcu_clear_cache: {
    name: "apcu_clear_cache",
    url: "function.apcu-clear-cache",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  apcu_dec: {
    name: "apcu_dec",
    url: "function.apcu-dec",
    spec: {
      parameters: "string $key [, int $step = 1 [, bool &$success ]]",
      returnValue: "int",
      ref: null
    }
  },
  apcu_delete: {
    name: "apcu_delete",
    url: "function.apcu-delete",
    spec: {
      parameters: "mixed $key",
      returnValue: "bool",
      ref: null
    }
  },
  apcu_entry: {
    name: "apcu_entry",
    url: "function.apcu-entry",
    spec: {
      parameters: "string $key, callable $generator [, int $ttl = 0 ]",
      returnValue: "mixed",
      ref: null
    }
  },
  apcu_exists: {
    name: "apcu_exists",
    url: "function.apcu-exists",
    spec: {
      parameters: "mixed $keys",
      returnValue: "mixed",
      ref: null
    }
  },
  apcu_fetch: {
    name: "apcu_fetch",
    url: "function.apcu-fetch",
    spec: {
      parameters: "mixed $key [, bool &$success ]",
      returnValue: "mixed",
      ref: null
    }
  },
  apcu_inc: {
    name: "apcu_inc",
    url: "function.apcu-inc",
    spec: {
      parameters: "string $key [, int $step = 1 [, bool &$success ]]",
      returnValue: "int",
      ref: null
    }
  },
  apcu_sma_info: {
    name: "apcu_sma_info",
    url: "function.apcu-sma-info",
    spec: {
      parameters: "[ bool $limited = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  apcu_store: {
    name: "apcu_store",
    url: "function.apcu-store",
    spec: {
      parameters: "string $key, mixed $var [, int $ttl = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  apc_add: {
    name: "apc_add",
    url: "function.apc-add",
    spec: {
      parameters: "string $key, mixed $var [, int $ttl = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  apc_bin_dump: {
    name: "apc_bin_dump",
    url: "function.apc-bin-dump",
    spec: {
      parameters: "[ array $files = NULL [, array $user_vars = NULL ]]",
      returnValue: "string",
      ref: null
    }
  },
  apc_bin_dumpfile: {
    name: "apc_bin_dumpfile",
    url: "function.apc-bin-dumpfile",
    spec: {
      parameters: "array $files, array $user_vars, string $filename [, int $flags = 0 [, resource $context = NULL ]]",
      returnValue: "int",
      ref: null
    }
  },
  apc_bin_load: {
    name: "apc_bin_load",
    url: "function.apc-bin-load",
    spec: {
      parameters: "string $data [, int $flags = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  apc_bin_loadfile: {
    name: "apc_bin_loadfile",
    url: "function.apc-bin-loadfile",
    spec: {
      parameters: "string $filename [, resource $context = NULL [, int $flags = 0 ]]",
      returnValue: "bool",
      ref: null
    }
  },
  apc_cache_info: {
    name: "apc_cache_info",
    url: "function.apc-cache-info",
    spec: {
      parameters: "[ string $cache_type = \"\" [, bool $limited = FALSE ]]",
      returnValue: "array",
      ref: null
    }
  },
  apc_cas: {
    name: "apc_cas",
    url: "function.apc-cas",
    spec: {
      parameters: "string $key, int $old, int $new",
      returnValue: "bool",
      ref: null
    }
  },
  apc_clear_cache: {
    name: "apc_clear_cache",
    url: "function.apc-clear-cache",
    spec: {
      parameters: "[ string $cache_type = \"\" ]",
      returnValue: "bool",
      ref: null
    }
  },
  apc_compile_file: {
    name: "apc_compile_file",
    url: "function.apc-compile-file",
    spec: {
      parameters: "string $filename [, bool $atomic = TRUE ]",
      returnValue: "mixed",
      ref: null
    }
  },
  apc_dec: {
    name: "apc_dec",
    url: "function.apc-dec",
    spec: {
      parameters: "string $key [, int $step = 1 [, bool &$success ]]",
      returnValue: "int",
      ref: null
    }
  },
  apc_define_constants: {
    name: "apc_define_constants",
    url: "function.apc-define-constants",
    spec: {
      parameters: "string $key, array $constants [, bool $case_sensitive = TRUE ]",
      returnValue: "bool",
      ref: null
    }
  },
  apc_delete: {
    name: "apc_delete",
    url: "function.apc-delete",
    spec: {
      parameters: "string $key",
      returnValue: "mixed",
      ref: null
    }
  },
  apc_delete_file: {
    name: "apc_delete_file",
    url: "function.apc-delete-file",
    spec: {
      parameters: "mixed $keys",
      returnValue: "mixed",
      ref: null
    }
  },
  apc_exists: {
    name: "apc_exists",
    url: "function.apc-exists",
    spec: {
      parameters: "mixed $keys",
      returnValue: "mixed",
      ref: null
    }
  },
  apc_fetch: {
    name: "apc_fetch",
    url: "function.apc-fetch",
    spec: {
      parameters: "mixed $key [, bool &$success ]",
      returnValue: "mixed",
      ref: null
    }
  },
  apc_inc: {
    name: "apc_inc",
    url: "function.apc-inc",
    spec: {
      parameters: "string $key [, int $step = 1 [, bool &$success ]]",
      returnValue: "int",
      ref: null
    }
  },
  apc_load_constants: {
    name: "apc_load_constants",
    url: "function.apc-load-constants",
    spec: {
      parameters: "string $key [, bool $case_sensitive = TRUE ]",
      returnValue: "bool",
      ref: null
    }
  },
  apc_sma_info: {
    name: "apc_sma_info",
    url: "function.apc-sma-info",
    spec: {
      parameters: "[ bool $limited = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  apc_store: {
    name: "apc_store",
    url: "function.apc-store",
    spec: {
      parameters: "string $key, mixed $var [, int $ttl = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  apd_breakpoint: {
    name: "apd_breakpoint",
    url: "function.apd-breakpoint",
    spec: {
      parameters: "int $debug_level",
      returnValue: "bool",
      ref: null
    }
  },
  apd_callstack: {
    name: "apd_callstack",
    url: "function.apd-callstack",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  apd_clunk: {
    name: "apd_clunk",
    url: "function.apd-clunk",
    spec: {
      parameters: "string $warning [, string $delimiter = \"<BR \/>\" ]",
      returnValue: "void",
      ref: null
    }
  },
  apd_continue: {
    name: "apd_continue",
    url: "function.apd-continue",
    spec: {
      parameters: "int $debug_level",
      returnValue: "bool",
      ref: null
    }
  },
  apd_croak: {
    name: "apd_croak",
    url: "function.apd-croak",
    spec: {
      parameters: "string $warning [, string $delimiter = \"<BR \/>\" ]",
      returnValue: "void",
      ref: null
    }
  },
  apd_dump_function_table: {
    name: "apd_dump_function_table",
    url: "function.apd-dump-function-table",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  apd_dump_persistent_resources: {
    name: "apd_dump_persistent_resources",
    url: "function.apd-dump-persistent-resources",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  apd_dump_regular_resources: {
    name: "apd_dump_regular_resources",
    url: "function.apd-dump-regular-resources",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  apd_echo: {
    name: "apd_echo",
    url: "function.apd-echo",
    spec: {
      parameters: "string $output",
      returnValue: "bool",
      ref: null
    }
  },
  apd_get_active_symbols: {
    name: "apd_get_active_symbols",
    url: "function.apd-get-active-symbols",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  apd_set_pprof_trace: {
    name: "apd_set_pprof_trace",
    url: "function.apd-set-pprof-trace",
    spec: {
      parameters: "[ string $dump_directory = ini_get(\"apd.dumpdir\") [, string $fragment = \"pprof\" ]]",
      returnValue: "string",
      ref: null
    }
  },
  apd_set_session: {
    name: "apd_set_session",
    url: "function.apd-set-session",
    spec: {
      parameters: "int $debug_level",
      returnValue: "void",
      ref: null
    }
  },
  apd_set_session_trace: {
    name: "apd_set_session_trace",
    url: "function.apd-set-session-trace",
    spec: {
      parameters: "int $debug_level [, string $dump_directory = ini_get(\"apd.dumpdir\") ]",
      returnValue: "void",
      ref: null
    }
  },
  apd_set_session_trace_socket: {
    name: "apd_set_session_trace_socket",
    url: "function.apd-set-session-trace-socket",
    spec: {
      parameters: "string $tcp_server, int $socket_type, int $port, int $debug_level",
      returnValue: "bool",
      ref: null
    }
  },
  array: {
    name: "array",
    url: "function.array",
    spec: {
      parameters: "[ mixed $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_change_key_case: {
    name: "array_change_key_case",
    url: "function.array-change-key-case",
    spec: {
      parameters: "array $array [, int $case = CASE_LOWER ]",
      returnValue: "array",
      ref: null
    }
  },
  array_chunk: {
    name: "array_chunk",
    url: "function.array-chunk",
    spec: {
      parameters: "array $array, int $size [, bool $preserve_keys = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  array_column: {
    name: "array_column",
    url: "function.array-column",
    spec: {
      parameters: "array $input, mixed $column_key [, mixed $index_key = NULL ]",
      returnValue: "array",
      ref: null
    }
  },
  array_combine: {
    name: "array_combine",
    url: "function.array-combine",
    spec: {
      parameters: "array $keys, array $values",
      returnValue: "array",
      ref: null
    }
  },
  array_count_values: {
    name: "array_count_values",
    url: "function.array-count-values",
    spec: {
      parameters: "array $array",
      returnValue: "array",
      ref: null
    }
  },
  array_diff: {
    name: "array_diff",
    url: "function.array-diff",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_diff_assoc: {
    name: "array_diff_assoc",
    url: "function.array-diff-assoc",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_diff_key: {
    name: "array_diff_key",
    url: "function.array-diff-key",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_diff_uassoc: {
    name: "array_diff_uassoc",
    url: "function.array-diff-uassoc",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $key_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_diff_ukey: {
    name: "array_diff_ukey",
    url: "function.array-diff-ukey",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $key_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_fill: {
    name: "array_fill",
    url: "function.array-fill",
    spec: {
      parameters: "int $start_index, int $num, mixed $value",
      returnValue: "array",
      ref: null
    }
  },
  array_fill_keys: {
    name: "array_fill_keys",
    url: "function.array-fill-keys",
    spec: {
      parameters: "array $keys, mixed $value",
      returnValue: "array",
      ref: null
    }
  },
  array_filter: {
    name: "array_filter",
    url: "function.array-filter",
    spec: {
      parameters: "array $array [, callable $callback [, int $flag = 0 ]]",
      returnValue: "array",
      ref: null
    }
  },
  array_flip: {
    name: "array_flip",
    url: "function.array-flip",
    spec: {
      parameters: "array $array",
      returnValue: "array",
      ref: null
    }
  },
  array_intersect: {
    name: "array_intersect",
    url: "function.array-intersect",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_intersect_assoc: {
    name: "array_intersect_assoc",
    url: "function.array-intersect-assoc",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_intersect_key: {
    name: "array_intersect_key",
    url: "function.array-intersect-key",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_intersect_uassoc: {
    name: "array_intersect_uassoc",
    url: "function.array-intersect-uassoc",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $key_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_intersect_ukey: {
    name: "array_intersect_ukey",
    url: "function.array-intersect-ukey",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $key_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_keys: {
    name: "array_keys",
    url: "function.array-keys",
    spec: {
      parameters: "array $array [, mixed $search_value = NULL [, bool $strict = FALSE ]]",
      returnValue: "array",
      ref: null
    }
  },
  array_key_exists: {
    name: "array_key_exists",
    url: "function.array-key-exists",
    spec: {
      parameters: "mixed $key, array $array",
      returnValue: "bool",
      ref: null
    }
  },
  array_key_first: {
    name: "array_key_first",
    url: "function.array-key-first",
    spec: {
      parameters: "array $array",
      returnValue: "mixed",
      ref: null
    }
  },
  array_key_last: {
    name: "array_key_last",
    url: "function.array-key-last",
    spec: {
      parameters: "array $array",
      returnValue: "mixed",
      ref: null
    }
  },
  array_map: {
    name: "array_map",
    url: "function.array-map",
    spec: {
      parameters: "callable $callback, array $array1 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_merge: {
    name: "array_merge",
    url: "function.array-merge",
    spec: {
      parameters: "array $array1 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_merge_recursive: {
    name: "array_merge_recursive",
    url: "function.array-merge-recursive",
    spec: {
      parameters: "array $array1 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_multisort: {
    name: "array_multisort",
    url: "function.array-multisort",
    spec: {
      parameters: "array &$array1 [, mixed $array1_sort_order = SORT_ASC [, mixed $array1_sort_flags = SORT_REGULAR [, mixed $... ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  array_pad: {
    name: "array_pad",
    url: "function.array-pad",
    spec: {
      parameters: "array $array, int $size, mixed $value",
      returnValue: "array",
      ref: null
    }
  },
  array_pop: {
    name: "array_pop",
    url: "function.array-pop",
    spec: {
      parameters: "array &$array",
      returnValue: "mixed",
      ref: null
    }
  },
  array_product: {
    name: "array_product",
    url: "function.array-product",
    spec: {
      parameters: "array $array",
      returnValue: "number",
      ref: null
    }
  },
  array_push: {
    name: "array_push",
    url: "function.array-push",
    spec: {
      parameters: "array &$array [, mixed $... ]",
      returnValue: "int",
      ref: null
    }
  },
  array_rand: {
    name: "array_rand",
    url: "function.array-rand",
    spec: {
      parameters: "array $array [, int $num = 1 ]",
      returnValue: "mixed",
      ref: null
    }
  },
  array_reduce: {
    name: "array_reduce",
    url: "function.array-reduce",
    spec: {
      parameters: "array $array, callable $callback [, mixed $initial = NULL ]",
      returnValue: "mixed",
      ref: null
    }
  },
  array_replace: {
    name: "array_replace",
    url: "function.array-replace",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_replace_recursive: {
    name: "array_replace_recursive",
    url: "function.array-replace-recursive",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ]",
      returnValue: "array",
      ref: null
    }
  },
  array_reverse: {
    name: "array_reverse",
    url: "function.array-reverse",
    spec: {
      parameters: "array $array [, bool $preserve_keys = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  array_search: {
    name: "array_search",
    url: "function.array-search",
    spec: {
      parameters: "mixed $needle, array $haystack [, bool $strict = FALSE ]",
      returnValue: "mixed",
      ref: null
    }
  },
  array_shift: {
    name: "array_shift",
    url: "function.array-shift",
    spec: {
      parameters: "array &$array",
      returnValue: "mixed",
      ref: null
    }
  },
  array_slice: {
    name: "array_slice",
    url: "function.array-slice",
    spec: {
      parameters: "array $array, int $offset [, int $length = NULL [, bool $preserve_keys = FALSE ]]",
      returnValue: "array",
      ref: null
    }
  },
  array_splice: {
    name: "array_splice",
    url: "function.array-splice",
    spec: {
      parameters: "array &$input, int $offset [, int $length = count($input) [, mixed $replacement = array() ]]",
      returnValue: "array",
      ref: null
    }
  },
  array_sum: {
    name: "array_sum",
    url: "function.array-sum",
    spec: {
      parameters: "array $array",
      returnValue: "number",
      ref: null
    }
  },
  array_udiff: {
    name: "array_udiff",
    url: "function.array-udiff",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $value_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_udiff_assoc: {
    name: "array_udiff_assoc",
    url: "function.array-udiff-assoc",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $value_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_udiff_uassoc: {
    name: "array_udiff_uassoc",
    url: "function.array-udiff-uassoc",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $value_compare_func, callable $key_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_uintersect: {
    name: "array_uintersect",
    url: "function.array-uintersect",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $value_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_uintersect_assoc: {
    name: "array_uintersect_assoc",
    url: "function.array-uintersect-assoc",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $value_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_uintersect_uassoc: {
    name: "array_uintersect_uassoc",
    url: "function.array-uintersect-uassoc",
    spec: {
      parameters: "array $array1, array $array2 [, array $... ], callable $value_compare_func, callable $key_compare_func",
      returnValue: "array",
      ref: null
    }
  },
  array_unique: {
    name: "array_unique",
    url: "function.array-unique",
    spec: {
      parameters: "array $array [, int $sort_flags = SORT_STRING ]",
      returnValue: "array",
      ref: null
    }
  },
  array_unshift: {
    name: "array_unshift",
    url: "function.array-unshift",
    spec: {
      parameters: "array &$array [, mixed $... ]",
      returnValue: "int",
      ref: null
    }
  },
  array_values: {
    name: "array_values",
    url: "function.array-values",
    spec: {
      parameters: "array $array",
      returnValue: "array",
      ref: null
    }
  },
  array_walk: {
    name: "array_walk",
    url: "function.array-walk",
    spec: {
      parameters: "array &$array, callable $callback [, mixed $userdata = NULL ]",
      returnValue: "bool",
      ref: null
    }
  },
  array_walk_recursive: {
    name: "array_walk_recursive",
    url: "function.array-walk-recursive",
    spec: {
      parameters: "array &$array, callable $callback [, mixed $userdata = NULL ]",
      returnValue: "bool",
      ref: null
    }
  },
  arsort: {
    name: "arsort",
    url: "function.arsort",
    spec: {
      parameters: "array &$array [, int $sort_flags = SORT_REGULAR ]",
      returnValue: "bool",
      ref: null
    }
  },
  asin: {
    name: "asin",
    url: "function.asin",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  asinh: {
    name: "asinh",
    url: "function.asinh",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  asort: {
    name: "asort",
    url: "function.asort",
    spec: {
      parameters: "array &$array [, int $sort_flags = SORT_REGULAR ]",
      returnValue: "bool",
      ref: null
    }
  },
  assert: {
    name: "assert",
    url: "function.assert",
    spec: {
      parameters: "mixed $assertion [, string $description ]",
      returnValue: "bool",
      ref: null
    }
  },
  assert_options: {
    name: "assert_options",
    url: "function.assert-options",
    spec: {
      parameters: "int $what [, mixed $value ]",
      returnValue: "mixed",
      ref: null
    }
  },
  atan: {
    name: "atan",
    url: "function.atan",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  atan2: {
    name: "atan2",
    url: "function.atan2",
    spec: {
      parameters: "float $y, float $x",
      returnValue: "float",
      ref: null
    }
  },
  atanh: {
    name: "atanh",
    url: "function.atanh",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  }
};
