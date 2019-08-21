functions.m = {
  magic_quotes_runtime: {
    name: "magic_quotes_runtime",
    url: "function.magic-quotes-runtime",
    spec: {
      parameters: "bool $new_setting",
      returnValue: "bool",
      ref: {
        name: "set_magic_quotes_runtime()",
        url: "function.set-magic-quotes-runtime"
      }
    }
  },
  mail: {
    name: "mail",
    url: "function.mail",
    spec: {
      parameters: "string $to, string $subject, string $message [, string $additional_headers [, string $additional_parameters ]]",
      returnValue: "bool",
      ref: null
    }
  },
  mailparse_determine_best_xfer_encoding: {
    name: "mailparse_determine_best_xfer_encoding",
    url: "function.mailparse-determine-best-xfer-encoding",
    spec: {
      parameters: "resource $fp",
      returnValue: "string",
      ref: null
    }
  },
  mailparse_msg_create: {
    name: "mailparse_msg_create",
    url: "function.mailparse-msg-create",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  mailparse_msg_extract_part: {
    name: "mailparse_msg_extract_part",
    url: "function.mailparse-msg-extract-part",
    spec: {
      parameters: "resource $mimemail, string $msgbody [, callable $callbackfunc ]",
      returnValue: "void",
      ref: null
    }
  },
  mailparse_msg_extract_part_file: {
    name: "mailparse_msg_extract_part_file",
    url: "function.mailparse-msg-extract-part-file",
    spec: {
      parameters: "resource $mimemail, mixed $filename [, callable $callbackfunc ]",
      returnValue: "string",
      ref: null
    }
  },
  mailparse_msg_extract_whole_part_file: {
    name: "mailparse_msg_extract_whole_part_file",
    url: "function.mailparse-msg-extract-whole-part-file",
    spec: {
      parameters: "resource $mimemail, string $filename [, callable $callbackfunc ]",
      returnValue: "string",
      ref: null
    }
  },
  mailparse_msg_free: {
    name: "mailparse_msg_free",
    url: "function.mailparse-msg-free",
    spec: {
      parameters: "resource $mimemail",
      returnValue: "bool",
      ref: null
    }
  },
  mailparse_msg_get_part: {
    name: "mailparse_msg_get_part",
    url: "function.mailparse-msg-get-part",
    spec: {
      parameters: "resource $mimemail, string $mimesection",
      returnValue: "resource",
      ref: null
    }
  },
  mailparse_msg_get_part_data: {
    name: "mailparse_msg_get_part_data",
    url: "function.mailparse-msg-get-part-data",
    spec: {
      parameters: "resource $mimemail",
      returnValue: "array",
      ref: null
    }
  },
  mailparse_msg_get_structure: {
    name: "mailparse_msg_get_structure",
    url: "function.mailparse-msg-get-structure",
    spec: {
      parameters: "resource $mimemail",
      returnValue: "array",
      ref: null
    }
  },
  mailparse_msg_parse: {
    name: "mailparse_msg_parse",
    url: "function.mailparse-msg-parse",
    spec: {
      parameters: "resource $mimemail, string $data",
      returnValue: "bool",
      ref: null
    }
  },
  mailparse_msg_parse_file: {
    name: "mailparse_msg_parse_file",
    url: "function.mailparse-msg-parse-file",
    spec: {
      parameters: "string $filename",
      returnValue: "resource",
      ref: null
    }
  },
  mailparse_rfc822_parse_addresses: {
    name: "mailparse_rfc822_parse_addresses",
    url: "function.mailparse-rfc822-parse-addresses",
    spec: {
      parameters: "string $addresses",
      returnValue: "array",
      ref: null
    }
  },
  mailparse_stream_encode: {
    name: "mailparse_stream_encode",
    url: "function.mailparse-stream-encode",
    spec: {
      parameters: "resource $sourcefp, resource $destfp, string $encoding",
      returnValue: "bool",
      ref: null
    }
  },
  mailparse_uudecode_all: {
    name: "mailparse_uudecode_all",
    url: "function.mailparse-uudecode-all",
    spec: {
      parameters: "resource $fp",
      returnValue: "array",
      ref: null
    }
  },
  main: {
    name: "main",
    url: "function.main",
    spec: {
      parameters: "",
      returnValue: null,
      ref: {
        name: null,
        url: ""
      }
    }
  },
  max: {
    name: "max",
    url: "function.max",
    spec: {
      parameters: "array $values",
      returnValue: "mixed",
      ref: null
    }
  },
  maxdb_affected_rows: {
    name: "maxdb_affected_rows",
    url: "function.maxdb-affected-rows",
    spec: {
      parameters: "resource $link",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_autocommit: {
    name: "maxdb_autocommit",
    url: "function.maxdb-autocommit",
    spec: {
      parameters: "resource $link, bool $mode",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_bind_param: {
    name: "maxdb_bind_param",
    url: "function.maxdb-bind-param",
    spec: {
      parameters: "resource $stmt, string $types, mixed &$var1 [, mixed &$... ]",
      returnValue: "bool",
      ref: {
        name: "maxdb_stmt_bind_param()",
        url: "function.maxdb-stmt-bind-param"
      }
    }
  },
  maxdb_bind_result: {
    name: "maxdb_bind_result",
    url: "function.maxdb-bind-result",
    spec: {
      parameters: "resource $stmt, mixed &$var1 [, mixed &$... ]",
      returnValue: "bool",
      ref: {
        name: "maxdb_stmt_bind_result()",
        url: "function.maxdb-stmt-bind-result"
      }
    }
  },
  maxdb_change_user: {
    name: "maxdb_change_user",
    url: "function.maxdb-change-user",
    spec: {
      parameters: "resource $link, string $user, string $password, string $database",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_character_set_name: {
    name: "maxdb_character_set_name",
    url: "function.maxdb-character-set-name",
    spec: {
      parameters: "resource $link",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_client_encoding: {
    name: "maxdb_client_encoding",
    url: "function.maxdb-client-encoding",
    spec: {
      parameters: "resource $link",
      returnValue: "string",
      ref: {
        name: "maxdb_character_set_name()",
        url: "function.maxdb-character-set-name"
      }
    }
  },
  maxdb_close: {
    name: "maxdb_close",
    url: "function.maxdb-close",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_close_long_data: {
    name: "maxdb_close_long_data",
    url: "function.maxdb-close-long-data",
    spec: {
      parameters: "resource $stmt, int $param_nr",
      returnValue: "bool",
      ref: {
        name: "maxdb_stmt_close_long_data()",
        url: "function.maxdb-stmt-close-long-data"
      }
    }
  },
  maxdb_commit: {
    name: "maxdb_commit",
    url: "function.maxdb-commit",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_connect: {
    name: "maxdb_connect",
    url: "function.maxdb-connect",
    spec: {
      parameters: "[ string $host [, string $username [, string $passwd [, string $dbname [, int $port = 0 [, string $socket ]]]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  maxdb_connect_errno: {
    name: "maxdb_connect_errno",
    url: "function.maxdb-connect-errno",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_connect_error: {
    name: "maxdb_connect_error",
    url: "function.maxdb-connect-error",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_data_seek: {
    name: "maxdb_data_seek",
    url: "function.maxdb-data-seek",
    spec: {
      parameters: "resource $result, int $offset",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_debug: {
    name: "maxdb_debug",
    url: "function.maxdb-debug",
    spec: {
      parameters: "string $debug",
      returnValue: "void",
      ref: null
    }
  },
  maxdb_disable_reads_from_master: {
    name: "maxdb_disable_reads_from_master",
    url: "function.maxdb-disable-reads-from-master",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_disable_rpl_parse: {
    name: "maxdb_disable_rpl_parse",
    url: "function.maxdb-disable-rpl-parse",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_dump_debug_info: {
    name: "maxdb_dump_debug_info",
    url: "function.maxdb-dump-debug-info",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_embedded_connect: {
    name: "maxdb_embedded_connect",
    url: "function.maxdb-embedded-connect",
    spec: {
      parameters: "[ string $dbname ]",
      returnValue: "resource",
      ref: null
    }
  },
  maxdb_enable_reads_from_master: {
    name: "maxdb_enable_reads_from_master",
    url: "function.maxdb-enable-reads-from-master",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_enable_rpl_parse: {
    name: "maxdb_enable_rpl_parse",
    url: "function.maxdb-enable-rpl-parse",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_errno: {
    name: "maxdb_errno",
    url: "function.maxdb-errno",
    spec: {
      parameters: "resource $link",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_error: {
    name: "maxdb_error",
    url: "function.maxdb-error",
    spec: {
      parameters: "resource $link",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_escape_string: {
    name: "maxdb_escape_string",
    url: "function.maxdb-escape-string",
    spec: {
      parameters: "resource $link, string $escapestr",
      returnValue: "string",
      ref: {
        name: "maxdb_real_escape_string()",
        url: "function.maxdb-real-escape-string"
      }
    }
  },
  maxdb_execute: {
    name: "maxdb_execute",
    url: "function.maxdb-execute",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: {
        name: "maxdb_stmt_execute()",
        url: "function.maxdb-stmt-execute"
      }
    }
  },
  maxdb_fetch: {
    name: "maxdb_fetch",
    url: "function.maxdb-fetch",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: {
        name: "maxdb_stmt_fetch()",
        url: "function.maxdb-stmt-fetch"
      }
    }
  },
  maxdb_fetch_array: {
    name: "maxdb_fetch_array",
    url: "function.maxdb-fetch-array",
    spec: {
      parameters: "resource $result [, int $resulttype ]",
      returnValue: "mixed",
      ref: null
    }
  },
  maxdb_fetch_assoc: {
    name: "maxdb_fetch_assoc",
    url: "function.maxdb-fetch-assoc",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  maxdb_fetch_field: {
    name: "maxdb_fetch_field",
    url: "function.maxdb-fetch-field",
    spec: {
      parameters: "resource $result",
      returnValue: "mixed",
      ref: null
    }
  },
  maxdb_fetch_fields: {
    name: "maxdb_fetch_fields",
    url: "function.maxdb-fetch-fields",
    spec: {
      parameters: "resource $result",
      returnValue: "mixed",
      ref: null
    }
  },
  maxdb_fetch_field_direct: {
    name: "maxdb_fetch_field_direct",
    url: "function.maxdb-fetch-field-direct",
    spec: {
      parameters: "resource $result, int $fieldnr",
      returnValue: "mixed",
      ref: null
    }
  },
  maxdb_fetch_lengths: {
    name: "maxdb_fetch_lengths",
    url: "function.maxdb-fetch-lengths",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  maxdb_fetch_object: {
    name: "maxdb_fetch_object",
    url: "function.maxdb-fetch-object",
    spec: {
      parameters: "object $result",
      returnValue: "object",
      ref: null
    }
  },
  maxdb_fetch_row: {
    name: "maxdb_fetch_row",
    url: "function.maxdb-fetch-row",
    spec: {
      parameters: "resource $result",
      returnValue: "mixed",
      ref: null
    }
  },
  maxdb_field_count: {
    name: "maxdb_field_count",
    url: "function.maxdb-field-count",
    spec: {
      parameters: "resource $link",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_field_seek: {
    name: "maxdb_field_seek",
    url: "function.maxdb-field-seek",
    spec: {
      parameters: "resource $result, int $fieldnr",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_field_tell: {
    name: "maxdb_field_tell",
    url: "function.maxdb-field-tell",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_free_result: {
    name: "maxdb_free_result",
    url: "function.maxdb-free-result",
    spec: {
      parameters: "resource $result",
      returnValue: "void",
      ref: null
    }
  },
  maxdb_get_client_info: {
    name: "maxdb_get_client_info",
    url: "function.maxdb-get-client-info",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_get_client_version: {
    name: "maxdb_get_client_version",
    url: "function.maxdb-get-client-version",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_get_host_info: {
    name: "maxdb_get_host_info",
    url: "function.maxdb-get-host-info",
    spec: {
      parameters: "resource $link",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_get_metadata: {
    name: "maxdb_get_metadata",
    url: "function.maxdb-get-metadata",
    spec: {
      parameters: "resource $stmt",
      returnValue: "resource",
      ref: {
        name: "maxdb_stmt_result_metadata()",
        url: "function.maxdb-stmt-result-metadata"
      }
    }
  },
  maxdb_get_proto_info: {
    name: "maxdb_get_proto_info",
    url: "function.maxdb-get-proto-info",
    spec: {
      parameters: "resource $link",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_get_server_info: {
    name: "maxdb_get_server_info",
    url: "function.maxdb-get-server-info",
    spec: {
      parameters: "resource $link",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_get_server_version: {
    name: "maxdb_get_server_version",
    url: "function.maxdb-get-server-version",
    spec: {
      parameters: "resource $link",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_info: {
    name: "maxdb_info",
    url: "function.maxdb-info",
    spec: {
      parameters: "resource $link",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_init: {
    name: "maxdb_init",
    url: "function.maxdb-init",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  maxdb_insert_id: {
    name: "maxdb_insert_id",
    url: "function.maxdb-insert-id",
    spec: {
      parameters: "resource $link",
      returnValue: "mixed",
      ref: null
    }
  },
  maxdb_kill: {
    name: "maxdb_kill",
    url: "function.maxdb-kill",
    spec: {
      parameters: "resource $link, int $processid",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_master_query: {
    name: "maxdb_master_query",
    url: "function.maxdb-master-query",
    spec: {
      parameters: "resource $link, string $query",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_more_results: {
    name: "maxdb_more_results",
    url: "function.maxdb-more-results",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_multi_query: {
    name: "maxdb_multi_query",
    url: "function.maxdb-multi-query",
    spec: {
      parameters: "resource $link, string $query",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_next_result: {
    name: "maxdb_next_result",
    url: "function.maxdb-next-result",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_num_fields: {
    name: "maxdb_num_fields",
    url: "function.maxdb-num-fields",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_num_rows: {
    name: "maxdb_num_rows",
    url: "function.maxdb-num-rows",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_options: {
    name: "maxdb_options",
    url: "function.maxdb-options",
    spec: {
      parameters: "resource $link, int $option, mixed $value",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_param_count: {
    name: "maxdb_param_count",
    url: "function.maxdb-param-count",
    spec: {
      parameters: "resource $stmt",
      returnValue: "int",
      ref: {
        name: "maxdb_stmt_param_count()",
        url: "function.maxdb-stmt-param-count"
      }
    }
  },
  maxdb_ping: {
    name: "maxdb_ping",
    url: "function.maxdb-ping",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_prepare: {
    name: "maxdb_prepare",
    url: "function.maxdb-prepare",
    spec: {
      parameters: "resource $link, string $query",
      returnValue: "resource",
      ref: null
    }
  },
  maxdb_query: {
    name: "maxdb_query",
    url: "function.maxdb-query",
    spec: {
      parameters: "resource $link, string $query [, int $resultmode ]",
      returnValue: "mixed",
      ref: null
    }
  },
  maxdb_real_connect: {
    name: "maxdb_real_connect",
    url: "function.maxdb-real-connect",
    spec: {
      parameters: "resource $link [, string $hostname [, string $username [, string $passwd [, string $dbname [, int $port = 0 [, string $socket ]]]]]]",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_real_escape_string: {
    name: "maxdb_real_escape_string",
    url: "function.maxdb-real-escape-string",
    spec: {
      parameters: "resource $link, string $escapestr",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_real_query: {
    name: "maxdb_real_query",
    url: "function.maxdb-real-query",
    spec: {
      parameters: "resource $link, string $query",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_report: {
    name: "maxdb_report",
    url: "function.maxdb-report",
    spec: {
      parameters: "int $flags",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_rollback: {
    name: "maxdb_rollback",
    url: "function.maxdb-rollback",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_rpl_parse_enabled: {
    name: "maxdb_rpl_parse_enabled",
    url: "function.maxdb-rpl-parse-enabled",
    spec: {
      parameters: "resource $link",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_rpl_probe: {
    name: "maxdb_rpl_probe",
    url: "function.maxdb-rpl-probe",
    spec: {
      parameters: "resource $link",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_rpl_query_type: {
    name: "maxdb_rpl_query_type",
    url: "function.maxdb-rpl-query-type",
    spec: {
      parameters: "resource $link",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_select_db: {
    name: "maxdb_select_db",
    url: "function.maxdb-select-db",
    spec: {
      parameters: "resource $link, string $dbname",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_send_long_data: {
    name: "maxdb_send_long_data",
    url: "function.maxdb-send-long-data",
    spec: {
      parameters: "resource $stmt, int $param_nr, string $data",
      returnValue: "bool",
      ref: {
        name: "maxdb_stmt_send_long_data()",
        url: "function.maxdb-stmt-send-long-data"
      }
    }
  },
  maxdb_send_query: {
    name: "maxdb_send_query",
    url: "function.maxdb-send-query",
    spec: {
      parameters: "resource $link, string $query",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_server_end: {
    name: "maxdb_server_end",
    url: "function.maxdb-server-end",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  maxdb_server_init: {
    name: "maxdb_server_init",
    url: "function.maxdb-server-init",
    spec: {
      parameters: "[ array $server [, array $groups ]]",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_set_opt: {
    name: "maxdb_set_opt",
    url: "function.maxdb-set-opt",
    spec: {
      parameters: "resource $link, int $option, mixed $value",
      returnValue: "bool",
      ref: {
        name: "maxdb_options()",
        url: "function.maxdb-options"
      }
    }
  },
  maxdb_sqlstate: {
    name: "maxdb_sqlstate",
    url: "function.maxdb-sqlstate",
    spec: {
      parameters: "resource $link",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_ssl_set: {
    name: "maxdb_ssl_set",
    url: "function.maxdb-ssl-set",
    spec: {
      parameters: "resource $link, string $key, string $cert, string $ca, string $capath, string $cipher",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stat: {
    name: "maxdb_stat",
    url: "function.maxdb-stat",
    spec: {
      parameters: "resource $link",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_stmt_affected_rows: {
    name: "maxdb_stmt_affected_rows",
    url: "function.maxdb-stmt-affected-rows",
    spec: {
      parameters: "resource $stmt",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_stmt_bind_param: {
    name: "maxdb_stmt_bind_param",
    url: "function.maxdb-stmt-bind-param",
    spec: {
      parameters: "resource $stmt, string $types, mixed &$var1 [, mixed &$... ]",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_bind_result: {
    name: "maxdb_stmt_bind_result",
    url: "function.maxdb-stmt-bind-result",
    spec: {
      parameters: "resource $stmt, mixed &$var1 [, mixed &$... ]",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_close: {
    name: "maxdb_stmt_close",
    url: "function.maxdb-stmt-close",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_close_long_data: {
    name: "maxdb_stmt_close_long_data",
    url: "function.maxdb-stmt-close-long-data",
    spec: {
      parameters: "resource $stmt, int $param_nr",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_data_seek: {
    name: "maxdb_stmt_data_seek",
    url: "function.maxdb-stmt-data-seek",
    spec: {
      parameters: "resource $statement, int $offset",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_errno: {
    name: "maxdb_stmt_errno",
    url: "function.maxdb-stmt-errno",
    spec: {
      parameters: "resource $stmt",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_stmt_error: {
    name: "maxdb_stmt_error",
    url: "function.maxdb-stmt-error",
    spec: {
      parameters: "resource $stmt",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_stmt_execute: {
    name: "maxdb_stmt_execute",
    url: "function.maxdb-stmt-execute",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_fetch: {
    name: "maxdb_stmt_fetch",
    url: "function.maxdb-stmt-fetch",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_free_result: {
    name: "maxdb_stmt_free_result",
    url: "function.maxdb-stmt-free-result",
    spec: {
      parameters: "resource $stmt",
      returnValue: "void",
      ref: null
    }
  },
  maxdb_stmt_init: {
    name: "maxdb_stmt_init",
    url: "function.maxdb-stmt-init",
    spec: {
      parameters: "resource $link",
      returnValue: "resource",
      ref: null
    }
  },
  maxdb_stmt_num_rows: {
    name: "maxdb_stmt_num_rows",
    url: "function.maxdb-stmt-num-rows",
    spec: {
      parameters: "resource $stmt",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_stmt_param_count: {
    name: "maxdb_stmt_param_count",
    url: "function.maxdb-stmt-param-count",
    spec: {
      parameters: "resource $stmt",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_stmt_prepare: {
    name: "maxdb_stmt_prepare",
    url: "function.maxdb-stmt-prepare",
    spec: {
      parameters: "resource $stmt, string $query",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_reset: {
    name: "maxdb_stmt_reset",
    url: "function.maxdb-stmt-reset",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_result_metadata: {
    name: "maxdb_stmt_result_metadata",
    url: "function.maxdb-stmt-result-metadata",
    spec: {
      parameters: "resource $stmt",
      returnValue: "resource",
      ref: null
    }
  },
  maxdb_stmt_send_long_data: {
    name: "maxdb_stmt_send_long_data",
    url: "function.maxdb-stmt-send-long-data",
    spec: {
      parameters: "resource $stmt, int $param_nr, string $data",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_stmt_sqlstate: {
    name: "maxdb_stmt_sqlstate",
    url: "function.maxdb-stmt-sqlstate",
    spec: {
      parameters: "resource $stmt",
      returnValue: "string",
      ref: null
    }
  },
  maxdb_stmt_store_result: {
    name: "maxdb_stmt_store_result",
    url: "function.maxdb-stmt-store-result",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_store_result: {
    name: "maxdb_store_result",
    url: "function.maxdb-store-result",
    spec: {
      parameters: "resource $link",
      returnValue: "resource",
      ref: null
    }
  },
  maxdb_thread_id: {
    name: "maxdb_thread_id",
    url: "function.maxdb-thread-id",
    spec: {
      parameters: "resource $link",
      returnValue: "int",
      ref: null
    }
  },
  maxdb_thread_safe: {
    name: "maxdb_thread_safe",
    url: "function.maxdb-thread-safe",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  maxdb_use_result: {
    name: "maxdb_use_result",
    url: "function.maxdb-use-result",
    spec: {
      parameters: "resource $link",
      returnValue: "resource",
      ref: null
    }
  },
  maxdb_warning_count: {
    name: "maxdb_warning_count",
    url: "function.maxdb-warning-count",
    spec: {
      parameters: "resource $link",
      returnValue: "int",
      ref: null
    }
  },
  mb_check_encoding: {
    name: "mb_check_encoding",
    url: "function.mb-check-encoding",
    spec: {
      parameters: "[ string $var = NULL [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "bool",
      ref: null
    }
  },
  mb_chr: {
    name: "mb_chr",
    url: "function.mb-chr",
    spec: {
      parameters: "int $cp [, string $encoding ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_convert_case: {
    name: "mb_convert_case",
    url: "function.mb-convert-case",
    spec: {
      parameters: "string $str, int $mode [, string $encoding = mb_internal_encoding() ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_convert_encoding: {
    name: "mb_convert_encoding",
    url: "function.mb-convert-encoding",
    spec: {
      parameters: "string $str, string $to_encoding [, mixed $from_encoding = mb_internal_encoding() ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_convert_kana: {
    name: "mb_convert_kana",
    url: "function.mb-convert-kana",
    spec: {
      parameters: "string $str [, string $option = \"KV\" [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_convert_variables: {
    name: "mb_convert_variables",
    url: "function.mb-convert-variables",
    spec: {
      parameters: "string $to_encoding, mixed $from_encoding, mixed &$vars [, mixed &$... ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_decode_mimeheader: {
    name: "mb_decode_mimeheader",
    url: "function.mb-decode-mimeheader",
    spec: {
      parameters: "string $str",
      returnValue: "string",
      ref: null
    }
  },
  mb_decode_numericentity: {
    name: "mb_decode_numericentity",
    url: "function.mb-decode-numericentity",
    spec: {
      parameters: "string $str, array $convmap [, string $encoding = mb_internal_encoding() [, bool $is_hex = FALSE ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_detect_encoding: {
    name: "mb_detect_encoding",
    url: "function.mb-detect-encoding",
    spec: {
      parameters: "string $str [, mixed $encoding_list = mb_detect_order() [, bool $strict = FALSE ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_detect_order: {
    name: "mb_detect_order",
    url: "function.mb-detect-order",
    spec: {
      parameters: "[ mixed $encoding_list = mb_detect_order() ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mb_encode_mimeheader: {
    name: "mb_encode_mimeheader",
    url: "function.mb-encode-mimeheader",
    spec: {
      parameters: "string $str [, string $charset = mb_language() \u306b\u3088\u3063\u3066\u6c7a\u307e\u308b\u5024 [, string $transfer_encoding = \"B\" [, string $linefeed = \"\\r\\n\" [, int $indent = 0 ]]]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_encode_numericentity: {
    name: "mb_encode_numericentity",
    url: "function.mb-encode-numericentity",
    spec: {
      parameters: "string $str, array $convmap [, string $encoding = mb_internal_encoding() [, bool $is_hex = FALSE ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_encoding_aliases: {
    name: "mb_encoding_aliases",
    url: "function.mb-encoding-aliases",
    spec: {
      parameters: "string $encoding",
      returnValue: "array",
      ref: null
    }
  },
  mb_ereg: {
    name: "mb_ereg",
    url: "function.mb-ereg",
    spec: {
      parameters: "string $pattern, string $string [, array &$regs ]",
      returnValue: "int",
      ref: null
    }
  },
  mb_eregi: {
    name: "mb_eregi",
    url: "function.mb-eregi",
    spec: {
      parameters: "string $pattern, string $string [, array &$regs ]",
      returnValue: "int",
      ref: null
    }
  },
  mb_eregi_replace: {
    name: "mb_eregi_replace",
    url: "function.mb-eregi-replace",
    spec: {
      parameters: "string $pattern, string $replace, string $string [, string $option = \"msri\" ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_ereg_match: {
    name: "mb_ereg_match",
    url: "function.mb-ereg-match",
    spec: {
      parameters: "string $pattern, string $string [, string $option = \"msr\" ]",
      returnValue: "bool",
      ref: null
    }
  },
  mb_ereg_replace: {
    name: "mb_ereg_replace",
    url: "function.mb-ereg-replace",
    spec: {
      parameters: "string $pattern, string $replacement, string $string [, string $option = \"msr\" ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_ereg_replace_callback: {
    name: "mb_ereg_replace_callback",
    url: "function.mb-ereg-replace-callback",
    spec: {
      parameters: "string $pattern, callable $callback, string $string [, string $option = \"msr\" ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_ereg_search: {
    name: "mb_ereg_search",
    url: "function.mb-ereg-search",
    spec: {
      parameters: "[ string $pattern [, string $option = \"ms\" ]]",
      returnValue: "bool",
      ref: null
    }
  },
  mb_ereg_search_getpos: {
    name: "mb_ereg_search_getpos",
    url: "function.mb-ereg-search-getpos",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  mb_ereg_search_getregs: {
    name: "mb_ereg_search_getregs",
    url: "function.mb-ereg-search-getregs",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mb_ereg_search_init: {
    name: "mb_ereg_search_init",
    url: "function.mb-ereg-search-init",
    spec: {
      parameters: "string $string [, string $pattern [, string $option = \"msr\" ]]",
      returnValue: "bool",
      ref: null
    }
  },
  mb_ereg_search_pos: {
    name: "mb_ereg_search_pos",
    url: "function.mb-ereg-search-pos",
    spec: {
      parameters: "[ string $pattern [, string $option = \"ms\" ]]",
      returnValue: "array",
      ref: null
    }
  },
  mb_ereg_search_regs: {
    name: "mb_ereg_search_regs",
    url: "function.mb-ereg-search-regs",
    spec: {
      parameters: "[ string $pattern [, string $option = \"ms\" ]]",
      returnValue: "array",
      ref: null
    }
  },
  mb_ereg_search_setpos: {
    name: "mb_ereg_search_setpos",
    url: "function.mb-ereg-search-setpos",
    spec: {
      parameters: "int $position",
      returnValue: "bool",
      ref: null
    }
  },
  mb_get_info: {
    name: "mb_get_info",
    url: "function.mb-get-info",
    spec: {
      parameters: "[ string $type = \"all\" ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mb_http_input: {
    name: "mb_http_input",
    url: "function.mb-http-input",
    spec: {
      parameters: "[ string $type = \"\" ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mb_http_output: {
    name: "mb_http_output",
    url: "function.mb-http-output",
    spec: {
      parameters: "[ string $encoding = mb_http_output() ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mb_internal_encoding: {
    name: "mb_internal_encoding",
    url: "function.mb-internal-encoding",
    spec: {
      parameters: "[ string $encoding = mb_internal_encoding() ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mb_language: {
    name: "mb_language",
    url: "function.mb-language",
    spec: {
      parameters: "[ string $language = mb_language() ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mb_list_encodings: {
    name: "mb_list_encodings",
    url: "function.mb-list-encodings",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mb_ord: {
    name: "mb_ord",
    url: "function.mb-ord",
    spec: {
      parameters: "string $str [, string $encoding ]",
      returnValue: "int",
      ref: null
    }
  },
  mb_output_handler: {
    name: "mb_output_handler",
    url: "function.mb-output-handler",
    spec: {
      parameters: "string $contents, int $status",
      returnValue: "string",
      ref: null
    }
  },
  mb_parse_str: {
    name: "mb_parse_str",
    url: "function.mb-parse-str",
    spec: {
      parameters: "string $encoded_string [, array &$result ]",
      returnValue: "bool",
      ref: null
    }
  },
  mb_preferred_mime_name: {
    name: "mb_preferred_mime_name",
    url: "function.mb-preferred-mime-name",
    spec: {
      parameters: "string $encoding",
      returnValue: "string",
      ref: null
    }
  },
  mb_regex_encoding: {
    name: "mb_regex_encoding",
    url: "function.mb-regex-encoding",
    spec: {
      parameters: "[ string $encoding = mb_regex_encoding() ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mb_regex_set_options: {
    name: "mb_regex_set_options",
    url: "function.mb-regex-set-options",
    spec: {
      parameters: "[ string $options = mb_regex_set_options() ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_scrub: {
    name: "mb_scrub",
    url: "function.mb-scrub",
    spec: {
      parameters: "string $str [, string $encoding ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_send_mail: {
    name: "mb_send_mail",
    url: "function.mb-send-mail",
    spec: {
      parameters: "string $to, string $subject, string $message [, mixed $additional_headers = NULL [, string $additional_parameter = NULL ]]",
      returnValue: "bool",
      ref: null
    }
  },
  mb_split: {
    name: "mb_split",
    url: "function.mb-split",
    spec: {
      parameters: "string $pattern, string $string [, int $limit = -1 ]",
      returnValue: "array",
      ref: null
    }
  },
  mb_strcut: {
    name: "mb_strcut",
    url: "function.mb-strcut",
    spec: {
      parameters: "string $str, int $start [, int $length = NULL [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_strimwidth: {
    name: "mb_strimwidth",
    url: "function.mb-strimwidth",
    spec: {
      parameters: "string $str, int $start, int $width [, string $trimmarker = \"\" [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_stripos: {
    name: "mb_stripos",
    url: "function.mb-stripos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "int",
      ref: null
    }
  },
  mb_stristr: {
    name: "mb_stristr",
    url: "function.mb-stristr",
    spec: {
      parameters: "string $haystack, string $needle [, bool $before_needle = FALSE [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_strlen: {
    name: "mb_strlen",
    url: "function.mb-strlen",
    spec: {
      parameters: "string $str [, string $encoding = mb_internal_encoding() ]",
      returnValue: "int",
      ref: null
    }
  },
  mb_strpos: {
    name: "mb_strpos",
    url: "function.mb-strpos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "int",
      ref: null
    }
  },
  mb_strrchr: {
    name: "mb_strrchr",
    url: "function.mb-strrchr",
    spec: {
      parameters: "string $haystack, string $needle [, bool $part = FALSE [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_strrichr: {
    name: "mb_strrichr",
    url: "function.mb-strrichr",
    spec: {
      parameters: "string $haystack, string $needle [, bool $part = FALSE [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_strripos: {
    name: "mb_strripos",
    url: "function.mb-strripos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "int",
      ref: null
    }
  },
  mb_strrpos: {
    name: "mb_strrpos",
    url: "function.mb-strrpos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "int",
      ref: null
    }
  },
  mb_strstr: {
    name: "mb_strstr",
    url: "function.mb-strstr",
    spec: {
      parameters: "string $haystack, string $needle [, bool $before_needle = FALSE [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_strtolower: {
    name: "mb_strtolower",
    url: "function.mb-strtolower",
    spec: {
      parameters: "string $str [, string $encoding = mb_internal_encoding() ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_strtoupper: {
    name: "mb_strtoupper",
    url: "function.mb-strtoupper",
    spec: {
      parameters: "string $str [, string $encoding = mb_internal_encoding() ]",
      returnValue: "string",
      ref: null
    }
  },
  mb_strwidth: {
    name: "mb_strwidth",
    url: "function.mb-strwidth",
    spec: {
      parameters: "string $str [, string $encoding = mb_internal_encoding() ]",
      returnValue: "int",
      ref: null
    }
  },
  mb_substitute_character: {
    name: "mb_substitute_character",
    url: "function.mb-substitute-character",
    spec: {
      parameters: "[ mixed $substchar = mb_substitute_character() ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mb_substr: {
    name: "mb_substr",
    url: "function.mb-substr",
    spec: {
      parameters: "string $str, int $start [, int $length = NULL [, string $encoding = mb_internal_encoding() ]]",
      returnValue: "string",
      ref: null
    }
  },
  mb_substr_count: {
    name: "mb_substr_count",
    url: "function.mb-substr-count",
    spec: {
      parameters: "string $haystack, string $needle [, string $encoding = mb_internal_encoding() ]",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_cbc: {
    name: "mcrypt_cbc",
    url: "function.mcrypt-cbc",
    spec: {
      parameters: "int $cipher, string $key, string $data, int $mode [, string $iv ]",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_cfb: {
    name: "mcrypt_cfb",
    url: "function.mcrypt-cfb",
    spec: {
      parameters: "int $cipher, string $key, string $data, int $mode, string $iv",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_create_iv: {
    name: "mcrypt_create_iv",
    url: "function.mcrypt-create-iv",
    spec: {
      parameters: "int $size [, int $source = MCRYPT_DEV_URANDOM ]",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_decrypt: {
    name: "mcrypt_decrypt",
    url: "function.mcrypt-decrypt",
    spec: {
      parameters: "string $cipher, string $key, string $data, string $mode [, string $iv ]",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_ecb: {
    name: "mcrypt_ecb",
    url: "function.mcrypt-ecb",
    spec: {
      parameters: "int $cipher, string $key, string $data, int $mode",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_encrypt: {
    name: "mcrypt_encrypt",
    url: "function.mcrypt-encrypt",
    spec: {
      parameters: "string $cipher, string $key, string $data, string $mode [, string $iv ]",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_enc_get_algorithms_name: {
    name: "mcrypt_enc_get_algorithms_name",
    url: "function.mcrypt-enc-get-algorithms-name",
    spec: {
      parameters: "resource $td",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_enc_get_block_size: {
    name: "mcrypt_enc_get_block_size",
    url: "function.mcrypt-enc-get-block-size",
    spec: {
      parameters: "resource $td",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_enc_get_iv_size: {
    name: "mcrypt_enc_get_iv_size",
    url: "function.mcrypt-enc-get-iv-size",
    spec: {
      parameters: "resource $td",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_enc_get_key_size: {
    name: "mcrypt_enc_get_key_size",
    url: "function.mcrypt-enc-get-key-size",
    spec: {
      parameters: "resource $td",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_enc_get_modes_name: {
    name: "mcrypt_enc_get_modes_name",
    url: "function.mcrypt-enc-get-modes-name",
    spec: {
      parameters: "resource $td",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_enc_get_supported_key_sizes: {
    name: "mcrypt_enc_get_supported_key_sizes",
    url: "function.mcrypt-enc-get-supported-key-sizes",
    spec: {
      parameters: "resource $td",
      returnValue: "array",
      ref: null
    }
  },
  mcrypt_enc_is_block_algorithm: {
    name: "mcrypt_enc_is_block_algorithm",
    url: "function.mcrypt-enc-is-block-algorithm",
    spec: {
      parameters: "resource $td",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_enc_is_block_algorithm_mode: {
    name: "mcrypt_enc_is_block_algorithm_mode",
    url: "function.mcrypt-enc-is-block-algorithm-mode",
    spec: {
      parameters: "resource $td",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_enc_is_block_mode: {
    name: "mcrypt_enc_is_block_mode",
    url: "function.mcrypt-enc-is-block-mode",
    spec: {
      parameters: "resource $td",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_enc_self_test: {
    name: "mcrypt_enc_self_test",
    url: "function.mcrypt-enc-self-test",
    spec: {
      parameters: "resource $td",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_generic: {
    name: "mcrypt_generic",
    url: "function.mcrypt-generic",
    spec: {
      parameters: "resource $td, string $data",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_generic_deinit: {
    name: "mcrypt_generic_deinit",
    url: "function.mcrypt-generic-deinit",
    spec: {
      parameters: "resource $td",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_generic_end: {
    name: "mcrypt_generic_end",
    url: "function.mcrypt-generic-end",
    spec: {
      parameters: "resource $td",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_generic_init: {
    name: "mcrypt_generic_init",
    url: "function.mcrypt-generic-init",
    spec: {
      parameters: "resource $td, string $key, string $iv",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_get_block_size: {
    name: "mcrypt_get_block_size",
    url: "function.mcrypt-get-block-size",
    spec: {
      parameters: "int $cipher",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_get_cipher_name: {
    name: "mcrypt_get_cipher_name",
    url: "function.mcrypt-get-cipher-name",
    spec: {
      parameters: "int $cipher",
      returnValue: "string",
      ref: null
    }
  },
  mcrypt_get_iv_size: {
    name: "mcrypt_get_iv_size",
    url: "function.mcrypt-get-iv-size",
    spec: {
      parameters: "string $cipher, string $mode",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_get_key_size: {
    name: "mcrypt_get_key_size",
    url: "function.mcrypt-get-key-size",
    spec: {
      parameters: "int $cipher",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_list_algorithms: {
    name: "mcrypt_list_algorithms",
    url: "function.mcrypt-list-algorithms",
    spec: {
      parameters: "[ string $lib_dir = ini_get(\"mcrypt.algorithms_dir\") ]",
      returnValue: "array",
      ref: null
    }
  },
  mcrypt_list_modes: {
    name: "mcrypt_list_modes",
    url: "function.mcrypt-list-modes",
    spec: {
      parameters: "[ string $lib_dir = ini_get(\"mcrypt.modes_dir\") ]",
      returnValue: "array",
      ref: null
    }
  },
  mcrypt_module_close: {
    name: "mcrypt_module_close",
    url: "function.mcrypt-module-close",
    spec: {
      parameters: "resource $td",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_module_get_algo_block_size: {
    name: "mcrypt_module_get_algo_block_size",
    url: "function.mcrypt-module-get-algo-block-size",
    spec: {
      parameters: "string $algorithm [, string $lib_dir ]",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_module_get_algo_key_size: {
    name: "mcrypt_module_get_algo_key_size",
    url: "function.mcrypt-module-get-algo-key-size",
    spec: {
      parameters: "string $algorithm [, string $lib_dir ]",
      returnValue: "int",
      ref: null
    }
  },
  mcrypt_module_get_supported_key_sizes: {
    name: "mcrypt_module_get_supported_key_sizes",
    url: "function.mcrypt-module-get-supported-key-sizes",
    spec: {
      parameters: "string $algorithm [, string $lib_dir ]",
      returnValue: "array",
      ref: null
    }
  },
  mcrypt_module_is_block_algorithm: {
    name: "mcrypt_module_is_block_algorithm",
    url: "function.mcrypt-module-is-block-algorithm",
    spec: {
      parameters: "string $algorithm [, string $lib_dir ]",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_module_is_block_algorithm_mode: {
    name: "mcrypt_module_is_block_algorithm_mode",
    url: "function.mcrypt-module-is-block-algorithm-mode",
    spec: {
      parameters: "string $mode [, string $lib_dir ]",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_module_is_block_mode: {
    name: "mcrypt_module_is_block_mode",
    url: "function.mcrypt-module-is-block-mode",
    spec: {
      parameters: "string $mode [, string $lib_dir ]",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_module_open: {
    name: "mcrypt_module_open",
    url: "function.mcrypt-module-open",
    spec: {
      parameters: "string $algorithm, string $algorithm_directory, string $mode, string $mode_directory",
      returnValue: "resource",
      ref: null
    }
  },
  mcrypt_module_self_test: {
    name: "mcrypt_module_self_test",
    url: "function.mcrypt-module-self-test",
    spec: {
      parameters: "string $algorithm [, string $lib_dir ]",
      returnValue: "bool",
      ref: null
    }
  },
  mcrypt_ofb: {
    name: "mcrypt_ofb",
    url: "function.mcrypt-ofb",
    spec: {
      parameters: "int $cipher, string $key, string $data, int $mode, string $iv",
      returnValue: "string",
      ref: null
    }
  },
  md5: {
    name: "md5",
    url: "function.md5",
    spec: {
      parameters: "string $str [, bool $raw_output = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  md5_file: {
    name: "md5_file",
    url: "function.md5-file",
    spec: {
      parameters: "string $filename [, bool $raw_output = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  mdecrypt_generic: {
    name: "mdecrypt_generic",
    url: "function.mdecrypt-generic",
    spec: {
      parameters: "resource $td, string $data",
      returnValue: "string",
      ref: null
    }
  },
  memcache_debug: {
    name: "memcache_debug",
    url: "function.memcache-debug",
    spec: {
      parameters: "bool $on_off",
      returnValue: "bool",
      ref: null
    }
  },
  memory_get_peak_usage: {
    name: "memory_get_peak_usage",
    url: "function.memory-get-peak-usage",
    spec: {
      parameters: "[ bool $real_usage = FALSE ]",
      returnValue: "int",
      ref: null
    }
  },
  memory_get_usage: {
    name: "memory_get_usage",
    url: "function.memory-get-usage",
    spec: {
      parameters: "[ bool $real_usage = FALSE ]",
      returnValue: "int",
      ref: null
    }
  },
  metaphone: {
    name: "metaphone",
    url: "function.metaphone",
    spec: {
      parameters: "string $str [, int $phonemes = 0 ]",
      returnValue: "string",
      ref: null
    }
  },
  method_exists: {
    name: "method_exists",
    url: "function.method-exists",
    spec: {
      parameters: "mixed $object, string $method_name",
      returnValue: "bool",
      ref: null
    }
  },
  mhash: {
    name: "mhash",
    url: "function.mhash",
    spec: {
      parameters: "int $hash, string $data [, string $key ]",
      returnValue: "string",
      ref: null
    }
  },
  mhash_count: {
    name: "mhash_count",
    url: "function.mhash-count",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  mhash_get_block_size: {
    name: "mhash_get_block_size",
    url: "function.mhash-get-block-size",
    spec: {
      parameters: "int $hash",
      returnValue: "int",
      ref: null
    }
  },
  mhash_get_hash_name: {
    name: "mhash_get_hash_name",
    url: "function.mhash-get-hash-name",
    spec: {
      parameters: "int $hash",
      returnValue: "string",
      ref: null
    }
  },
  mhash_keygen_s2k: {
    name: "mhash_keygen_s2k",
    url: "function.mhash-keygen-s2k",
    spec: {
      parameters: "int $hash, string $password, string $salt, int $bytes",
      returnValue: "string",
      ref: null
    }
  },
  microtime: {
    name: "microtime",
    url: "function.microtime",
    spec: {
      parameters: "[ bool $get_as_float = FALSE ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mime_content_type: {
    name: "mime_content_type",
    url: "function.mime-content-type",
    spec: {
      parameters: "string $filename",
      returnValue: "string",
      ref: null
    }
  },
  min: {
    name: "min",
    url: "function.min",
    spec: {
      parameters: "array $values",
      returnValue: "mixed",
      ref: null
    }
  },
  ming_keypress: {
    name: "ming_keypress",
    url: "function.ming-keypress",
    spec: {
      parameters: "string $char",
      returnValue: "int",
      ref: null
    }
  },
  ming_setcubicthreshold: {
    name: "ming_setcubicthreshold",
    url: "function.ming-setcubicthreshold",
    spec: {
      parameters: "int $threshold",
      returnValue: "void",
      ref: null
    }
  },
  ming_setscale: {
    name: "ming_setscale",
    url: "function.ming-setscale",
    spec: {
      parameters: "float $scale",
      returnValue: "void",
      ref: null
    }
  },
  ming_setswfcompression: {
    name: "ming_setswfcompression",
    url: "function.ming-setswfcompression",
    spec: {
      parameters: "int $level",
      returnValue: "void",
      ref: null
    }
  },
  ming_useconstants: {
    name: "ming_useconstants",
    url: "function.ming-useconstants",
    spec: {
      parameters: "int $use",
      returnValue: "void",
      ref: null
    }
  },
  ming_useswfversion: {
    name: "ming_useswfversion",
    url: "function.ming-useswfversion",
    spec: {
      parameters: "int $version",
      returnValue: "void",
      ref: null
    }
  },
  mkdir: {
    name: "mkdir",
    url: "function.mkdir",
    spec: {
      parameters: "string $pathname [, int $mode = 0777 [, bool $recursive = FALSE [, resource $context ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  mktime: {
    name: "mktime",
    url: "function.mktime",
    spec: {
      parameters: "[ int $hour = date(\"H\") [, int $minute = date(\"i\") [, int $second = date(\"s\") [, int $month = date(\"n\") [, int $day = date(\"j\") [, int $year = date(\"Y\") [, int $is_dst = -1 ]]]]]]]",
      returnValue: "int",
      ref: null
    }
  },
  money_format: {
    name: "money_format",
    url: "function.money-format",
    spec: {
      parameters: "string $format, float $number",
      returnValue: "string",
      ref: null
    }
  },
  move_uploaded_file: {
    name: "move_uploaded_file",
    url: "function.move-uploaded-file",
    spec: {
      parameters: "string $filename, string $destination",
      returnValue: "bool",
      ref: null
    }
  },
  mqseries_back: {
    name: "mqseries_back",
    url: "function.mqseries-back",
    spec: {
      parameters: "resource $hconn, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_begin: {
    name: "mqseries_begin",
    url: "function.mqseries-begin",
    spec: {
      parameters: "resource $hconn, array $beginOptions, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_close: {
    name: "mqseries_close",
    url: "function.mqseries-close",
    spec: {
      parameters: "resource $hconn, resource $hobj, int $options, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_cmit: {
    name: "mqseries_cmit",
    url: "function.mqseries-cmit",
    spec: {
      parameters: "resource $hconn, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_conn: {
    name: "mqseries_conn",
    url: "function.mqseries-conn",
    spec: {
      parameters: "string $qManagerName, resource &$hconn, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_connx: {
    name: "mqseries_connx",
    url: "function.mqseries-connx",
    spec: {
      parameters: "string $qManagerName, array &$connOptions, resource &$hconn, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_disc: {
    name: "mqseries_disc",
    url: "function.mqseries-disc",
    spec: {
      parameters: "resource $hconn, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_get: {
    name: "mqseries_get",
    url: "function.mqseries-get",
    spec: {
      parameters: "resource $hConn, resource $hObj, array &$md, array &$gmo, int &$bufferLength, string &$msg, int &$data_length, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_inq: {
    name: "mqseries_inq",
    url: "function.mqseries-inq",
    spec: {
      parameters: "resource $hconn, resource $hobj, int $selectorCount, array $selectors, int $intAttrCount, resource &$intAttr, int $charAttrLength, resource &$charAttr, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_open: {
    name: "mqseries_open",
    url: "function.mqseries-open",
    spec: {
      parameters: "resource $hconn, array &$objDesc, int $option, resource &$hobj, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_put: {
    name: "mqseries_put",
    url: "function.mqseries-put",
    spec: {
      parameters: "resource $hConn, resource $hObj, array &$md, array &$pmo, string $message, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_put1: {
    name: "mqseries_put1",
    url: "function.mqseries-put1",
    spec: {
      parameters: "resource $hconn, resource &$objDesc, resource &$msgDesc, resource &$pmo, string $buffer, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_set: {
    name: "mqseries_set",
    url: "function.mqseries-set",
    spec: {
      parameters: "resource $hConn, resource $hObj, int $selectorCount, array $selectors, int $intAttrCount, array $intAttrs, int $charAttrLength, array $charAttrs, resource &$compCode, resource &$reason",
      returnValue: "void",
      ref: null
    }
  },
  mqseries_strerror: {
    name: "mqseries_strerror",
    url: "function.mqseries-strerror",
    spec: {
      parameters: "int $reason",
      returnValue: "string",
      ref: null
    }
  },
  msession_connect: {
    name: "msession_connect",
    url: "function.msession-connect",
    spec: {
      parameters: "string $host, string $port",
      returnValue: "bool",
      ref: null
    }
  },
  msession_count: {
    name: "msession_count",
    url: "function.msession-count",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  msession_create: {
    name: "msession_create",
    url: "function.msession-create",
    spec: {
      parameters: "string $session [, string $classname [, string $data ]]",
      returnValue: "bool",
      ref: null
    }
  },
  msession_destroy: {
    name: "msession_destroy",
    url: "function.msession-destroy",
    spec: {
      parameters: "string $name",
      returnValue: "bool",
      ref: null
    }
  },
  msession_disconnect: {
    name: "msession_disconnect",
    url: "function.msession-disconnect",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  msession_find: {
    name: "msession_find",
    url: "function.msession-find",
    spec: {
      parameters: "string $name, string $value",
      returnValue: "array",
      ref: null
    }
  },
  msession_get: {
    name: "msession_get",
    url: "function.msession-get",
    spec: {
      parameters: "string $session, string $name, string $value",
      returnValue: "string",
      ref: null
    }
  },
  msession_get_array: {
    name: "msession_get_array",
    url: "function.msession-get-array",
    spec: {
      parameters: "string $session",
      returnValue: "array",
      ref: null
    }
  },
  msession_get_data: {
    name: "msession_get_data",
    url: "function.msession-get-data",
    spec: {
      parameters: "string $session",
      returnValue: "string",
      ref: null
    }
  },
  msession_inc: {
    name: "msession_inc",
    url: "function.msession-inc",
    spec: {
      parameters: "string $session, string $name",
      returnValue: "string",
      ref: null
    }
  },
  msession_list: {
    name: "msession_list",
    url: "function.msession-list",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  msession_listvar: {
    name: "msession_listvar",
    url: "function.msession-listvar",
    spec: {
      parameters: "string $name",
      returnValue: "array",
      ref: null
    }
  },
  msession_lock: {
    name: "msession_lock",
    url: "function.msession-lock",
    spec: {
      parameters: "string $name",
      returnValue: "int",
      ref: null
    }
  },
  msession_plugin: {
    name: "msession_plugin",
    url: "function.msession-plugin",
    spec: {
      parameters: "string $session, string $val [, string $param ]",
      returnValue: "string",
      ref: null
    }
  },
  msession_randstr: {
    name: "msession_randstr",
    url: "function.msession-randstr",
    spec: {
      parameters: "int $param",
      returnValue: "string",
      ref: null
    }
  },
  msession_set: {
    name: "msession_set",
    url: "function.msession-set",
    spec: {
      parameters: "string $session, string $name, string $value",
      returnValue: "bool",
      ref: null
    }
  },
  msession_set_array: {
    name: "msession_set_array",
    url: "function.msession-set-array",
    spec: {
      parameters: "string $session, array $tuples",
      returnValue: "void",
      ref: null
    }
  },
  msession_set_data: {
    name: "msession_set_data",
    url: "function.msession-set-data",
    spec: {
      parameters: "string $session, string $value",
      returnValue: "bool",
      ref: null
    }
  },
  msession_timeout: {
    name: "msession_timeout",
    url: "function.msession-timeout",
    spec: {
      parameters: "string $session [, int $param ]",
      returnValue: "int",
      ref: null
    }
  },
  msession_uniq: {
    name: "msession_uniq",
    url: "function.msession-uniq",
    spec: {
      parameters: "int $param [, string $classname [, string $data ]]",
      returnValue: "string",
      ref: null
    }
  },
  msession_unlock: {
    name: "msession_unlock",
    url: "function.msession-unlock",
    spec: {
      parameters: "string $session, int $key",
      returnValue: "int",
      ref: null
    }
  },
  msg_get_queue: {
    name: "msg_get_queue",
    url: "function.msg-get-queue",
    spec: {
      parameters: "int $key [, int $perms = 0666 ]",
      returnValue: "resource",
      ref: null
    }
  },
  msg_queue_exists: {
    name: "msg_queue_exists",
    url: "function.msg-queue-exists",
    spec: {
      parameters: "int $key",
      returnValue: "bool",
      ref: null
    }
  },
  msg_receive: {
    name: "msg_receive",
    url: "function.msg-receive",
    spec: {
      parameters: "resource $queue, int $desiredmsgtype, int &$msgtype, int $maxsize, mixed &$message [, bool $unserialize = true [, int $flags = 0 [, int &$errorcode ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  msg_remove_queue: {
    name: "msg_remove_queue",
    url: "function.msg-remove-queue",
    spec: {
      parameters: "resource $queue",
      returnValue: "bool",
      ref: null
    }
  },
  msg_send: {
    name: "msg_send",
    url: "function.msg-send",
    spec: {
      parameters: "resource $queue, int $msgtype, mixed $message [, bool $serialize = TRUE [, bool $blocking = TRUE [, int &$errorcode ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  msg_set_queue: {
    name: "msg_set_queue",
    url: "function.msg-set-queue",
    spec: {
      parameters: "resource $queue, array $data",
      returnValue: "bool",
      ref: null
    }
  },
  msg_stat_queue: {
    name: "msg_stat_queue",
    url: "function.msg-stat-queue",
    spec: {
      parameters: "resource $queue",
      returnValue: "array",
      ref: null
    }
  },
  msql: {
    name: "msql",
    url: "function.msql",
    spec: {
      parameters: "string $database, string $query [, resource $link_identifier ]",
      returnValue: "resource",
      ref: {
        name: "msql_db_query()",
        url: "function.msql-db-query"
      }
    }
  },
  msql_affected_rows: {
    name: "msql_affected_rows",
    url: "function.msql-affected-rows",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  msql_close: {
    name: "msql_close",
    url: "function.msql-close",
    spec: {
      parameters: "[ resource $link_identifier ]",
      returnValue: "bool",
      ref: null
    }
  },
  msql_connect: {
    name: "msql_connect",
    url: "function.msql-connect",
    spec: {
      parameters: "[ string $hostname ]",
      returnValue: "resource",
      ref: null
    }
  },
  msql_createdb: {
    name: "msql_createdb",
    url: "function.msql-createdb",
    spec: {
      parameters: "string $database_name [, resource $link_identifier ]",
      returnValue: "bool",
      ref: {
        name: "msql_create_db()",
        url: "function.msql-create-db"
      }
    }
  },
  msql_create_db: {
    name: "msql_create_db",
    url: "function.msql-create-db",
    spec: {
      parameters: "string $database_name [, resource $link_identifier ]",
      returnValue: "bool",
      ref: null
    }
  },
  msql_data_seek: {
    name: "msql_data_seek",
    url: "function.msql-data-seek",
    spec: {
      parameters: "resource $result, int $row_number",
      returnValue: "bool",
      ref: null
    }
  },
  msql_dbname: {
    name: "msql_dbname",
    url: "function.msql-dbname",
    spec: {
      parameters: "resource $result, int $row [, mixed $field ]",
      returnValue: "string",
      ref: {
        name: "msql_result()",
        url: "function.msql-result"
      }
    }
  },
  msql_db_query: {
    name: "msql_db_query",
    url: "function.msql-db-query",
    spec: {
      parameters: "string $database, string $query [, resource $link_identifier ]",
      returnValue: "resource",
      ref: null
    }
  },
  msql_drop_db: {
    name: "msql_drop_db",
    url: "function.msql-drop-db",
    spec: {
      parameters: "string $database_name [, resource $link_identifier ]",
      returnValue: "bool",
      ref: null
    }
  },
  msql_error: {
    name: "msql_error",
    url: "function.msql-error",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  msql_fetch_array: {
    name: "msql_fetch_array",
    url: "function.msql-fetch-array",
    spec: {
      parameters: "resource $result [, int $result_type ]",
      returnValue: "array",
      ref: null
    }
  },
  msql_fetch_field: {
    name: "msql_fetch_field",
    url: "function.msql-fetch-field",
    spec: {
      parameters: "resource $result [, int $field_offset = 0 ]",
      returnValue: "object",
      ref: null
    }
  },
  msql_fetch_object: {
    name: "msql_fetch_object",
    url: "function.msql-fetch-object",
    spec: {
      parameters: "resource $result",
      returnValue: "object",
      ref: null
    }
  },
  msql_fetch_row: {
    name: "msql_fetch_row",
    url: "function.msql-fetch-row",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  msql_fieldflags: {
    name: "msql_fieldflags",
    url: "function.msql-fieldflags",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: {
        name: "msql_field_flags()",
        url: "function.msql-field-flags"
      }
    }
  },
  msql_fieldlen: {
    name: "msql_fieldlen",
    url: "function.msql-fieldlen",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "int",
      ref: {
        name: "msql_field_len()",
        url: "function.msql-field-len"
      }
    }
  },
  msql_fieldname: {
    name: "msql_fieldname",
    url: "function.msql-fieldname",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: {
        name: "msql_field_name()",
        url: "function.msql-field-name"
      }
    }
  },
  msql_fieldtable: {
    name: "msql_fieldtable",
    url: "function.msql-fieldtable",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "int",
      ref: {
        name: "msql_field_table()",
        url: "function.msql-field-table"
      }
    }
  },
  msql_fieldtype: {
    name: "msql_fieldtype",
    url: "function.msql-fieldtype",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: {
        name: "msql_field_type()",
        url: "function.msql-field-type"
      }
    }
  },
  msql_field_flags: {
    name: "msql_field_flags",
    url: "function.msql-field-flags",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: null
    }
  },
  msql_field_len: {
    name: "msql_field_len",
    url: "function.msql-field-len",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "int",
      ref: null
    }
  },
  msql_field_name: {
    name: "msql_field_name",
    url: "function.msql-field-name",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: null
    }
  },
  msql_field_seek: {
    name: "msql_field_seek",
    url: "function.msql-field-seek",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "bool",
      ref: null
    }
  },
  msql_field_table: {
    name: "msql_field_table",
    url: "function.msql-field-table",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "int",
      ref: null
    }
  },
  msql_field_type: {
    name: "msql_field_type",
    url: "function.msql-field-type",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: null
    }
  },
  msql_free_result: {
    name: "msql_free_result",
    url: "function.msql-free-result",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  msql_list_dbs: {
    name: "msql_list_dbs",
    url: "function.msql-list-dbs",
    spec: {
      parameters: "[ resource $link_identifier ]",
      returnValue: "resource",
      ref: null
    }
  },
  msql_list_fields: {
    name: "msql_list_fields",
    url: "function.msql-list-fields",
    spec: {
      parameters: "string $database, string $tablename [, resource $link_identifier ]",
      returnValue: "resource",
      ref: null
    }
  },
  msql_list_tables: {
    name: "msql_list_tables",
    url: "function.msql-list-tables",
    spec: {
      parameters: "string $database [, resource $link_identifier ]",
      returnValue: "resource",
      ref: null
    }
  },
  msql_numfields: {
    name: "msql_numfields",
    url: "function.msql-numfields",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: {
        name: "msql_num_fields()",
        url: "function.msql-num-fields"
      }
    }
  },
  msql_numrows: {
    name: "msql_numrows",
    url: "function.msql-numrows",
    spec: {
      parameters: "resource $query_identifier",
      returnValue: "int",
      ref: {
        name: "msql_num_rows()",
        url: "function.msql-num-rows"
      }
    }
  },
  msql_num_fields: {
    name: "msql_num_fields",
    url: "function.msql-num-fields",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  msql_num_rows: {
    name: "msql_num_rows",
    url: "function.msql-num-rows",
    spec: {
      parameters: "resource $query_identifier",
      returnValue: "int",
      ref: null
    }
  },
  msql_pconnect: {
    name: "msql_pconnect",
    url: "function.msql-pconnect",
    spec: {
      parameters: "[ string $hostname ]",
      returnValue: "resource",
      ref: null
    }
  },
  msql_query: {
    name: "msql_query",
    url: "function.msql-query",
    spec: {
      parameters: "string $query [, resource $link_identifier ]",
      returnValue: "resource",
      ref: null
    }
  },
  msql_regcase: {
    name: "msql_regcase",
    url: "function.msql-regcase",
    spec: {
      parameters: "string $string",
      returnValue: "string",
      ref: {
        name: "sql_regcase()",
        url: "function.sql-regcase"
      }
    }
  },
  msql_result: {
    name: "msql_result",
    url: "function.msql-result",
    spec: {
      parameters: "resource $result, int $row [, mixed $field ]",
      returnValue: "string",
      ref: null
    }
  },
  msql_select_db: {
    name: "msql_select_db",
    url: "function.msql-select-db",
    spec: {
      parameters: "string $database_name [, resource $link_identifier ]",
      returnValue: "bool",
      ref: null
    }
  },
  msql_tablename: {
    name: "msql_tablename",
    url: "function.msql-tablename",
    spec: {
      parameters: "resource $result, int $row [, mixed $field ]",
      returnValue: "string",
      ref: {
        name: "msql_result()",
        url: "function.msql-result"
      }
    }
  },
  mssql_bind: {
    name: "mssql_bind",
    url: "function.mssql-bind",
    spec: {
      parameters: "resource $stmt, string $param_name, mixed &$var, int $type [, bool $is_output = FALSE [, bool $is_null = FALSE [, int $maxlen = -1 ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  mssql_close: {
    name: "mssql_close",
    url: "function.mssql-close",
    spec: {
      parameters: "[ resource $link_identifier ]",
      returnValue: "bool",
      ref: null
    }
  },
  mssql_connect: {
    name: "mssql_connect",
    url: "function.mssql-connect",
    spec: {
      parameters: "[ string $servername [, string $username [, string $password [, bool $new_link = FALSE ]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  mssql_data_seek: {
    name: "mssql_data_seek",
    url: "function.mssql-data-seek",
    spec: {
      parameters: "resource $result_identifier, int $row_number",
      returnValue: "bool",
      ref: null
    }
  },
  mssql_execute: {
    name: "mssql_execute",
    url: "function.mssql-execute",
    spec: {
      parameters: "resource $stmt [, bool $skip_results = FALSE ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mssql_fetch_array: {
    name: "mssql_fetch_array",
    url: "function.mssql-fetch-array",
    spec: {
      parameters: "resource $result [, int $result_type = MSSQL_BOTH ]",
      returnValue: "array",
      ref: null
    }
  },
  mssql_fetch_assoc: {
    name: "mssql_fetch_assoc",
    url: "function.mssql-fetch-assoc",
    spec: {
      parameters: "resource $result_id",
      returnValue: "array",
      ref: null
    }
  },
  mssql_fetch_batch: {
    name: "mssql_fetch_batch",
    url: "function.mssql-fetch-batch",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  mssql_fetch_field: {
    name: "mssql_fetch_field",
    url: "function.mssql-fetch-field",
    spec: {
      parameters: "resource $result [, int $field_offset = -1 ]",
      returnValue: "object",
      ref: null
    }
  },
  mssql_fetch_object: {
    name: "mssql_fetch_object",
    url: "function.mssql-fetch-object",
    spec: {
      parameters: "resource $result",
      returnValue: "object",
      ref: null
    }
  },
  mssql_fetch_row: {
    name: "mssql_fetch_row",
    url: "function.mssql-fetch-row",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  mssql_field_length: {
    name: "mssql_field_length",
    url: "function.mssql-field-length",
    spec: {
      parameters: "resource $result [, int $offset = -1 ]",
      returnValue: "int",
      ref: null
    }
  },
  mssql_field_name: {
    name: "mssql_field_name",
    url: "function.mssql-field-name",
    spec: {
      parameters: "resource $result [, int $offset = -1 ]",
      returnValue: "string",
      ref: null
    }
  },
  mssql_field_seek: {
    name: "mssql_field_seek",
    url: "function.mssql-field-seek",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "bool",
      ref: null
    }
  },
  mssql_field_type: {
    name: "mssql_field_type",
    url: "function.mssql-field-type",
    spec: {
      parameters: "resource $result [, int $offset = -1 ]",
      returnValue: "string",
      ref: null
    }
  },
  mssql_free_result: {
    name: "mssql_free_result",
    url: "function.mssql-free-result",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  mssql_free_statement: {
    name: "mssql_free_statement",
    url: "function.mssql-free-statement",
    spec: {
      parameters: "resource $stmt",
      returnValue: "bool",
      ref: null
    }
  },
  mssql_get_last_message: {
    name: "mssql_get_last_message",
    url: "function.mssql-get-last-message",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  mssql_guid_string: {
    name: "mssql_guid_string",
    url: "function.mssql-guid-string",
    spec: {
      parameters: "string $binary [, bool $short_format = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  mssql_init: {
    name: "mssql_init",
    url: "function.mssql-init",
    spec: {
      parameters: "string $sp_name [, resource $link_identifier ]",
      returnValue: "resource",
      ref: null
    }
  },
  mssql_min_error_severity: {
    name: "mssql_min_error_severity",
    url: "function.mssql-min-error-severity",
    spec: {
      parameters: "int $severity",
      returnValue: "void",
      ref: null
    }
  },
  mssql_min_message_severity: {
    name: "mssql_min_message_severity",
    url: "function.mssql-min-message-severity",
    spec: {
      parameters: "int $severity",
      returnValue: "void",
      ref: null
    }
  },
  mssql_next_result: {
    name: "mssql_next_result",
    url: "function.mssql-next-result",
    spec: {
      parameters: "resource $result_id",
      returnValue: "bool",
      ref: null
    }
  },
  mssql_num_fields: {
    name: "mssql_num_fields",
    url: "function.mssql-num-fields",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  mssql_num_rows: {
    name: "mssql_num_rows",
    url: "function.mssql-num-rows",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  mssql_pconnect: {
    name: "mssql_pconnect",
    url: "function.mssql-pconnect",
    spec: {
      parameters: "[ string $servername [, string $username [, string $password [, bool $new_link = FALSE ]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  mssql_query: {
    name: "mssql_query",
    url: "function.mssql-query",
    spec: {
      parameters: "string $query [, resource $link_identifier [, int $batch_size = 0 ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  mssql_result: {
    name: "mssql_result",
    url: "function.mssql-result",
    spec: {
      parameters: "resource $result, int $row, mixed $field",
      returnValue: "string",
      ref: null
    }
  },
  mssql_rows_affected: {
    name: "mssql_rows_affected",
    url: "function.mssql-rows-affected",
    spec: {
      parameters: "resource $link_identifier",
      returnValue: "int",
      ref: null
    }
  },
  mssql_select_db: {
    name: "mssql_select_db",
    url: "function.mssql-select-db",
    spec: {
      parameters: "string $database_name [, resource $link_identifier ]",
      returnValue: "bool",
      ref: null
    }
  },
  mt_getrandmax: {
    name: "mt_getrandmax",
    url: "function.mt-getrandmax",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  mt_rand: {
    name: "mt_rand",
    url: "function.mt-rand",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  mt_srand: {
    name: "mt_srand",
    url: "function.mt-srand",
    spec: {
      parameters: "[ int $seed [, int $mode = MT_RAND_MT19937 ]]",
      returnValue: "void",
      ref: null
    }
  },
  mysqli_bind_param: {
    name: "mysqli_bind_param",
    url: "function.mysqli-bind-param",
    spec: {
      parameters: "string $types, mixed &$var1 [, mixed &$... ]",
      returnValue: "bool",
      ref: {
        name: "mysqli_stmt_bind_param()",
        url: "mysqli-stmt.bind-param"
      }
    }
  },
  mysqli_bind_result: {
    name: "mysqli_bind_result",
    url: "function.mysqli-bind-result",
    spec: {
      parameters: "mixed &$var1 [, mixed &$... ]",
      returnValue: "bool",
      ref: {
        name: "mysqli_stmt_bind_result()",
        url: "mysqli-stmt.bind-result"
      }
    }
  },
  mysqli_client_encoding: {
    name: "mysqli_client_encoding",
    url: "function.mysqli-client-encoding",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: {
        name: "mysqli_character_set_name()",
        url: "mysqli.character-set-name"
      }
    }
  },
  mysqli_connect: {
    name: "mysqli_connect",
    url: "function.mysqli-connect",
    spec: {
      parameters: "[ string $host = ini_get(\"mysqli.default_host\") [, string $username = ini_get(\"mysqli.default_user\") [, string $passwd = ini_get(\"mysqli.default_pw\") [, string $dbname = \"\" [, int $port = ini_get(\"mysqli.default_port\") [, string $socket = ini_get(\"mysqli.default_socket\") ]]]]]]",
      returnValue: "void",
      ref: {
        name: "mysqli::__construct()",
        url: "mysqli.construct"
      }
    }
  },
  mysqli_disable_rpl_parse: {
    name: "mysqli_disable_rpl_parse",
    url: "function.mysqli-disable-rpl-parse",
    spec: {
      parameters: "mysqli $link",
      returnValue: "bool",
      ref: null
    }
  },
  mysqli_enable_reads_from_master: {
    name: "mysqli_enable_reads_from_master",
    url: "function.mysqli-enable-reads-from-master",
    spec: {
      parameters: "mysqli $link",
      returnValue: "bool",
      ref: null
    }
  },
  mysqli_enable_rpl_parse: {
    name: "mysqli_enable_rpl_parse",
    url: "function.mysqli-enable-rpl-parse",
    spec: {
      parameters: "mysqli $link",
      returnValue: "bool",
      ref: null
    }
  },
  mysqli_escape_string: {
    name: "mysqli_escape_string",
    url: "function.mysqli-escape-string",
    spec: {
      parameters: "string $escapestr",
      returnValue: "string",
      ref: {
        name: "mysqli_real_escape_string()",
        url: "mysqli.real-escape-string"
      }
    }
  },
  mysqli_execute: {
    name: "mysqli_execute",
    url: "function.mysqli-execute",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: {
        name: "mysqli_stmt_execute()",
        url: "mysqli-stmt.execute"
      }
    }
  },
  mysqli_fetch: {
    name: "mysqli_fetch",
    url: "function.mysqli-fetch",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: {
        name: "mysqli_stmt_fetch()",
        url: "mysqli-stmt.fetch"
      }
    }
  },
  mysqli_get_cache_stats: {
    name: "mysqli_get_cache_stats",
    url: "function.mysqli-get-cache-stats",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mysqli_get_client_stats: {
    name: "mysqli_get_client_stats",
    url: "function.mysqli-get-client-stats",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mysqli_get_links_stats: {
    name: "mysqli_get_links_stats",
    url: "function.mysqli-get-links-stats",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mysqli_get_metadata: {
    name: "mysqli_get_metadata",
    url: "function.mysqli-get-metadata",
    spec: {
      parameters: "void",
      returnValue: "mysqli_result",
      ref: {
        name: "mysqli_stmt_result_metadata()",
        url: "mysqli-stmt.result-metadata"
      }
    }
  },
  mysqli_master_query: {
    name: "mysqli_master_query",
    url: "function.mysqli-master-query",
    spec: {
      parameters: "mysqli $link, string $query",
      returnValue: "bool",
      ref: null
    }
  },
  mysqli_param_count: {
    name: "mysqli_param_count",
    url: "function.mysqli-param-count",
    spec: {
      parameters: "mysqli_stmt $stmt",
      returnValue: "int",
      ref: {
        name: "mysqli_stmt_param_count()",
        url: "mysqli-stmt.param-count"
      }
    }
  },
  mysqli_report: {
    name: "mysqli_report",
    url: "function.mysqli-report",
    spec: {
      parameters: "int $flags",
      returnValue: "bool",
      ref: {
        name: "mysqli_driver->report_mode",
        url: "mysqli-driver.report-mode"
      }
    }
  },
  mysqli_rpl_parse_enabled: {
    name: "mysqli_rpl_parse_enabled",
    url: "function.mysqli-rpl-parse-enabled",
    spec: {
      parameters: "mysqli $link",
      returnValue: "int",
      ref: null
    }
  },
  mysqli_rpl_probe: {
    name: "mysqli_rpl_probe",
    url: "function.mysqli-rpl-probe",
    spec: {
      parameters: "mysqli $link",
      returnValue: "bool",
      ref: null
    }
  },
  mysqli_send_long_data: {
    name: "mysqli_send_long_data",
    url: "function.mysqli-send-long-data",
    spec: {
      parameters: "int $param_nr, string $data",
      returnValue: "bool",
      ref: {
        name: "mysqli_stmt_send_long_data()",
        url: "mysqli-stmt.send-long-data"
      }
    }
  },
  mysqli_slave_query: {
    name: "mysqli_slave_query",
    url: "function.mysqli-slave-query",
    spec: {
      parameters: "mysqli $link, string $query",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_memcache_get_config: {
    name: "mysqlnd_memcache_get_config",
    url: "function.mysqlnd-memcache-get-config",
    spec: {
      parameters: "mixed $connection",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_memcache_set: {
    name: "mysqlnd_memcache_set",
    url: "function.mysqlnd-memcache-set",
    spec: {
      parameters: "mixed $mysql_connection [, Memcached $memcache_connection [, string $pattern [, callback $callback ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_ms_dump_servers: {
    name: "mysqlnd_ms_dump_servers",
    url: "function.mysqlnd-ms-dump-servers",
    spec: {
      parameters: "mixed $connection",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_ms_fabric_select_global: {
    name: "mysqlnd_ms_fabric_select_global",
    url: "function.mysqlnd-ms-fabric-select-global",
    spec: {
      parameters: "mixed $connection, mixed $table_name",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_ms_fabric_select_shard: {
    name: "mysqlnd_ms_fabric_select_shard",
    url: "function.mysqlnd-ms-fabric-select-shard",
    spec: {
      parameters: "mixed $connection, mixed $table_name, mixed $shard_key",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_ms_get_last_gtid: {
    name: "mysqlnd_ms_get_last_gtid",
    url: "function.mysqlnd-ms-get-last-gtid",
    spec: {
      parameters: "mixed $connection",
      returnValue: "string",
      ref: null
    }
  },
  mysqlnd_ms_get_last_used_connection: {
    name: "mysqlnd_ms_get_last_used_connection",
    url: "function.mysqlnd-ms-get-last-used-connection",
    spec: {
      parameters: "mixed $connection",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_ms_get_stats: {
    name: "mysqlnd_ms_get_stats",
    url: "function.mysqlnd-ms-get-stats",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_ms_match_wild: {
    name: "mysqlnd_ms_match_wild",
    url: "function.mysqlnd-ms-match-wild",
    spec: {
      parameters: "string $table_name, string $wildcard",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_ms_query_is_select: {
    name: "mysqlnd_ms_query_is_select",
    url: "function.mysqlnd-ms-query-is-select",
    spec: {
      parameters: "string $query",
      returnValue: "int",
      ref: null
    }
  },
  mysqlnd_ms_set_qos: {
    name: "mysqlnd_ms_set_qos",
    url: "function.mysqlnd-ms-set-qos",
    spec: {
      parameters: "mixed $connection, int $service_level [, int $service_level_option [, mixed $option_value ]]",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_ms_set_user_pick_server: {
    name: "mysqlnd_ms_set_user_pick_server",
    url: "function.mysqlnd-ms-set-user-pick-server",
    spec: {
      parameters: "string $function",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_ms_xa_begin: {
    name: "mysqlnd_ms_xa_begin",
    url: "function.mysqlnd-ms-xa-begin",
    spec: {
      parameters: "mixed $connection, string $gtrid [, int $timeout ]",
      returnValue: "int",
      ref: null
    }
  },
  mysqlnd_ms_xa_commit: {
    name: "mysqlnd_ms_xa_commit",
    url: "function.mysqlnd-ms-xa-commit",
    spec: {
      parameters: "mixed $connection, string $gtrid",
      returnValue: "int",
      ref: null
    }
  },
  mysqlnd_ms_xa_gc: {
    name: "mysqlnd_ms_xa_gc",
    url: "function.mysqlnd-ms-xa-gc",
    spec: {
      parameters: "mixed $connection [, string $gtrid [, bool $ignore_max_retries ]]",
      returnValue: "int",
      ref: null
    }
  },
  mysqlnd_ms_xa_rollback: {
    name: "mysqlnd_ms_xa_rollback",
    url: "function.mysqlnd-ms-xa-rollback",
    spec: {
      parameters: "mixed $connection, string $gtrid",
      returnValue: "int",
      ref: null
    }
  },
  mysqlnd_qc_clear_cache: {
    name: "mysqlnd_qc_clear_cache",
    url: "function.mysqlnd-qc-clear-cache",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_qc_get_available_handlers: {
    name: "mysqlnd_qc_get_available_handlers",
    url: "function.mysqlnd-qc-get-available-handlers",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_qc_get_cache_info: {
    name: "mysqlnd_qc_get_cache_info",
    url: "function.mysqlnd-qc-get-cache-info",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_qc_get_core_stats: {
    name: "mysqlnd_qc_get_core_stats",
    url: "function.mysqlnd-qc-get-core-stats",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_qc_get_normalized_query_trace_log: {
    name: "mysqlnd_qc_get_normalized_query_trace_log",
    url: "function.mysqlnd-qc-get-normalized-query-trace-log",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_qc_get_query_trace_log: {
    name: "mysqlnd_qc_get_query_trace_log",
    url: "function.mysqlnd-qc-get-query-trace-log",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  mysqlnd_qc_set_cache_condition: {
    name: "mysqlnd_qc_set_cache_condition",
    url: "function.mysqlnd-qc-set-cache-condition",
    spec: {
      parameters: "int $condition_type, mixed $condition, mixed $condition_option",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_qc_set_is_select: {
    name: "mysqlnd_qc_set_is_select",
    url: "function.mysqlnd-qc-set-is-select",
    spec: {
      parameters: "string $callback",
      returnValue: "mixed",
      ref: null
    }
  },
  mysqlnd_qc_set_storage_handler: {
    name: "mysqlnd_qc_set_storage_handler",
    url: "function.mysqlnd-qc-set-storage-handler",
    spec: {
      parameters: "string $handler",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_qc_set_user_handlers: {
    name: "mysqlnd_qc_set_user_handlers",
    url: "function.mysqlnd-qc-set-user-handlers",
    spec: {
      parameters: "string $get_hash, string $find_query_in_cache, string $return_to_cache, string $add_query_to_cache_if_not_exists, string $query_is_select, string $update_query_run_time_stats, string $get_stats, string $clear_cache",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_uh_convert_to_mysqlnd: {
    name: "mysqlnd_uh_convert_to_mysqlnd",
    url: "function.mysqlnd-uh-convert-to-mysqlnd",
    spec: {
      parameters: "mysqli &$mysql_connection",
      returnValue: "resource",
      ref: null
    }
  },
  mysqlnd_uh_set_connection_proxy: {
    name: "mysqlnd_uh_set_connection_proxy",
    url: "function.mysqlnd-uh-set-connection-proxy",
    spec: {
      parameters: "MysqlndUhConnection &$connection_proxy [, mysqli &$mysqli_connection ]",
      returnValue: "bool",
      ref: null
    }
  },
  mysqlnd_uh_set_statement_proxy: {
    name: "mysqlnd_uh_set_statement_proxy",
    url: "function.mysqlnd-uh-set-statement-proxy",
    spec: {
      parameters: "MysqlndUhStatement &$statement_proxy",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_affected_rows: {
    name: "mysql_affected_rows",
    url: "function.mysql-affected-rows",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "int",
      ref: null
    }
  },
  mysql_client_encoding: {
    name: "mysql_client_encoding",
    url: "function.mysql-client-encoding",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "string",
      ref: null
    }
  },
  mysql_close: {
    name: "mysql_close",
    url: "function.mysql-close",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_connect: {
    name: "mysql_connect",
    url: "function.mysql-connect",
    spec: {
      parameters: "[ string $server = ini_get(\"mysql.default_host\") [, string $username = ini_get(\"mysql.default_user\") [, string $password = ini_get(\"mysql.default_password\") [, bool $new_link = FALSE [, int $client_flags = 0 ]]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  mysql_create_db: {
    name: "mysql_create_db",
    url: "function.mysql-create-db",
    spec: {
      parameters: "string $database_name [, resource $link_identifier = NULL ]",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_data_seek: {
    name: "mysql_data_seek",
    url: "function.mysql-data-seek",
    spec: {
      parameters: "resource $result, int $row_number",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_db_name: {
    name: "mysql_db_name",
    url: "function.mysql-db-name",
    spec: {
      parameters: "resource $result, int $row [, mixed $field = NULL ]",
      returnValue: "string",
      ref: null
    }
  },
  mysql_db_query: {
    name: "mysql_db_query",
    url: "function.mysql-db-query",
    spec: {
      parameters: "string $database, string $query [, resource $link_identifier = NULL ]",
      returnValue: "resource",
      ref: null
    }
  },
  mysql_drop_db: {
    name: "mysql_drop_db",
    url: "function.mysql-drop-db",
    spec: {
      parameters: "string $database_name [, resource $link_identifier = NULL ]",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_errno: {
    name: "mysql_errno",
    url: "function.mysql-errno",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "int",
      ref: null
    }
  },
  mysql_error: {
    name: "mysql_error",
    url: "function.mysql-error",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "string",
      ref: null
    }
  },
  mysql_escape_string: {
    name: "mysql_escape_string",
    url: "function.mysql-escape-string",
    spec: {
      parameters: "string $unescaped_string",
      returnValue: "string",
      ref: null
    }
  },
  mysql_fetch_array: {
    name: "mysql_fetch_array",
    url: "function.mysql-fetch-array",
    spec: {
      parameters: "resource $result [, int $result_type = MYSQL_BOTH ]",
      returnValue: "array",
      ref: null
    }
  },
  mysql_fetch_assoc: {
    name: "mysql_fetch_assoc",
    url: "function.mysql-fetch-assoc",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  mysql_fetch_field: {
    name: "mysql_fetch_field",
    url: "function.mysql-fetch-field",
    spec: {
      parameters: "resource $result [, int $field_offset = 0 ]",
      returnValue: "object",
      ref: null
    }
  },
  mysql_fetch_lengths: {
    name: "mysql_fetch_lengths",
    url: "function.mysql-fetch-lengths",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  mysql_fetch_object: {
    name: "mysql_fetch_object",
    url: "function.mysql-fetch-object",
    spec: {
      parameters: "resource $result [, string $class_name [, array $params ]]",
      returnValue: "object",
      ref: null
    }
  },
  mysql_fetch_row: {
    name: "mysql_fetch_row",
    url: "function.mysql-fetch-row",
    spec: {
      parameters: "resource $result",
      returnValue: "array",
      ref: null
    }
  },
  mysql_field_flags: {
    name: "mysql_field_flags",
    url: "function.mysql-field-flags",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: null
    }
  },
  mysql_field_len: {
    name: "mysql_field_len",
    url: "function.mysql-field-len",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "int",
      ref: null
    }
  },
  mysql_field_name: {
    name: "mysql_field_name",
    url: "function.mysql-field-name",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: null
    }
  },
  mysql_field_seek: {
    name: "mysql_field_seek",
    url: "function.mysql-field-seek",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_field_table: {
    name: "mysql_field_table",
    url: "function.mysql-field-table",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: null
    }
  },
  mysql_field_type: {
    name: "mysql_field_type",
    url: "function.mysql-field-type",
    spec: {
      parameters: "resource $result, int $field_offset",
      returnValue: "string",
      ref: null
    }
  },
  mysql_free_result: {
    name: "mysql_free_result",
    url: "function.mysql-free-result",
    spec: {
      parameters: "resource $result",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_get_client_info: {
    name: "mysql_get_client_info",
    url: "function.mysql-get-client-info",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  mysql_get_host_info: {
    name: "mysql_get_host_info",
    url: "function.mysql-get-host-info",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "string",
      ref: null
    }
  },
  mysql_get_proto_info: {
    name: "mysql_get_proto_info",
    url: "function.mysql-get-proto-info",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "int",
      ref: null
    }
  },
  mysql_get_server_info: {
    name: "mysql_get_server_info",
    url: "function.mysql-get-server-info",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "string",
      ref: null
    }
  },
  mysql_info: {
    name: "mysql_info",
    url: "function.mysql-info",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "string",
      ref: null
    }
  },
  mysql_insert_id: {
    name: "mysql_insert_id",
    url: "function.mysql-insert-id",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "int",
      ref: null
    }
  },
  mysql_list_dbs: {
    name: "mysql_list_dbs",
    url: "function.mysql-list-dbs",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "resource",
      ref: null
    }
  },
  mysql_list_fields: {
    name: "mysql_list_fields",
    url: "function.mysql-list-fields",
    spec: {
      parameters: "string $database_name, string $table_name [, resource $link_identifier = NULL ]",
      returnValue: "resource",
      ref: null
    }
  },
  mysql_list_processes: {
    name: "mysql_list_processes",
    url: "function.mysql-list-processes",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "resource",
      ref: null
    }
  },
  mysql_list_tables: {
    name: "mysql_list_tables",
    url: "function.mysql-list-tables",
    spec: {
      parameters: "string $database [, resource $link_identifier = NULL ]",
      returnValue: "resource",
      ref: null
    }
  },
  mysql_num_fields: {
    name: "mysql_num_fields",
    url: "function.mysql-num-fields",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  mysql_num_rows: {
    name: "mysql_num_rows",
    url: "function.mysql-num-rows",
    spec: {
      parameters: "resource $result",
      returnValue: "int",
      ref: null
    }
  },
  mysql_pconnect: {
    name: "mysql_pconnect",
    url: "function.mysql-pconnect",
    spec: {
      parameters: "[ string $server = ini_get(\"mysql.default_host\") [, string $username = ini_get(\"mysql.default_user\") [, string $password = ini_get(\"mysql.default_password\") [, int $client_flags = 0 ]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  mysql_ping: {
    name: "mysql_ping",
    url: "function.mysql-ping",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_query: {
    name: "mysql_query",
    url: "function.mysql-query",
    spec: {
      parameters: "string $query [, resource $link_identifier = NULL ]",
      returnValue: "mixed",
      ref: null
    }
  },
  mysql_real_escape_string: {
    name: "mysql_real_escape_string",
    url: "function.mysql-real-escape-string",
    spec: {
      parameters: "string $unescaped_string [, resource $link_identifier = NULL ]",
      returnValue: "string",
      ref: null
    }
  },
  mysql_result: {
    name: "mysql_result",
    url: "function.mysql-result",
    spec: {
      parameters: "resource $result, int $row [, mixed $field = 0 ]",
      returnValue: "string",
      ref: null
    }
  },
  mysql_select_db: {
    name: "mysql_select_db",
    url: "function.mysql-select-db",
    spec: {
      parameters: "string $database_name [, resource $link_identifier = NULL ]",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_set_charset: {
    name: "mysql_set_charset",
    url: "function.mysql-set-charset",
    spec: {
      parameters: "string $charset [, resource $link_identifier = NULL ]",
      returnValue: "bool",
      ref: null
    }
  },
  mysql_stat: {
    name: "mysql_stat",
    url: "function.mysql-stat",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "string",
      ref: null
    }
  },
  mysql_tablename: {
    name: "mysql_tablename",
    url: "function.mysql-tablename",
    spec: {
      parameters: "resource $result, int $i",
      returnValue: "string",
      ref: null
    }
  },
  mysql_thread_id: {
    name: "mysql_thread_id",
    url: "function.mysql-thread-id",
    spec: {
      parameters: "[ resource $link_identifier = NULL ]",
      returnValue: "int",
      ref: null
    }
  },
  mysql_unbuffered_query: {
    name: "mysql_unbuffered_query",
    url: "function.mysql-unbuffered-query",
    spec: {
      parameters: "string $query [, resource $link_identifier = NULL ]",
      returnValue: "resource",
      ref: null
    }
  },
  m_checkstatus: {
    name: "m_checkstatus",
    url: "function.m-checkstatus",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "int",
      ref: null
    }
  },
  m_completeauthorizations: {
    name: "m_completeauthorizations",
    url: "function.m-completeauthorizations",
    spec: {
      parameters: "resource $conn, int &$array",
      returnValue: "int",
      ref: null
    }
  },
  m_connect: {
    name: "m_connect",
    url: "function.m-connect",
    spec: {
      parameters: "resource $conn",
      returnValue: "int",
      ref: null
    }
  },
  m_connectionerror: {
    name: "m_connectionerror",
    url: "function.m-connectionerror",
    spec: {
      parameters: "resource $conn",
      returnValue: "string",
      ref: null
    }
  },
  m_deletetrans: {
    name: "m_deletetrans",
    url: "function.m-deletetrans",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "bool",
      ref: null
    }
  },
  m_destroyconn: {
    name: "m_destroyconn",
    url: "function.m-destroyconn",
    spec: {
      parameters: "resource $conn",
      returnValue: "bool",
      ref: null
    }
  },
  m_destroyengine: {
    name: "m_destroyengine",
    url: "function.m-destroyengine",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  m_getcell: {
    name: "m_getcell",
    url: "function.m-getcell",
    spec: {
      parameters: "resource $conn, int $identifier, string $column, int $row",
      returnValue: "string",
      ref: null
    }
  },
  m_getcellbynum: {
    name: "m_getcellbynum",
    url: "function.m-getcellbynum",
    spec: {
      parameters: "resource $conn, int $identifier, int $column, int $row",
      returnValue: "string",
      ref: null
    }
  },
  m_getcommadelimited: {
    name: "m_getcommadelimited",
    url: "function.m-getcommadelimited",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "string",
      ref: null
    }
  },
  m_getheader: {
    name: "m_getheader",
    url: "function.m-getheader",
    spec: {
      parameters: "resource $conn, int $identifier, int $column_num",
      returnValue: "string",
      ref: null
    }
  },
  m_initconn: {
    name: "m_initconn",
    url: "function.m-initconn",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  m_initengine: {
    name: "m_initengine",
    url: "function.m-initengine",
    spec: {
      parameters: "string $location",
      returnValue: "int",
      ref: null
    }
  },
  m_iscommadelimited: {
    name: "m_iscommadelimited",
    url: "function.m-iscommadelimited",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "int",
      ref: null
    }
  },
  m_maxconntimeout: {
    name: "m_maxconntimeout",
    url: "function.m-maxconntimeout",
    spec: {
      parameters: "resource $conn, int $secs",
      returnValue: "bool",
      ref: null
    }
  },
  m_monitor: {
    name: "m_monitor",
    url: "function.m-monitor",
    spec: {
      parameters: "resource $conn",
      returnValue: "int",
      ref: null
    }
  },
  m_numcolumns: {
    name: "m_numcolumns",
    url: "function.m-numcolumns",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "int",
      ref: null
    }
  },
  m_numrows: {
    name: "m_numrows",
    url: "function.m-numrows",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "int",
      ref: null
    }
  },
  m_parsecommadelimited: {
    name: "m_parsecommadelimited",
    url: "function.m-parsecommadelimited",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "int",
      ref: null
    }
  },
  m_responsekeys: {
    name: "m_responsekeys",
    url: "function.m-responsekeys",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "array",
      ref: null
    }
  },
  m_responseparam: {
    name: "m_responseparam",
    url: "function.m-responseparam",
    spec: {
      parameters: "resource $conn, int $identifier, string $key",
      returnValue: "string",
      ref: null
    }
  },
  m_returnstatus: {
    name: "m_returnstatus",
    url: "function.m-returnstatus",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "int",
      ref: null
    }
  },
  m_setblocking: {
    name: "m_setblocking",
    url: "function.m-setblocking",
    spec: {
      parameters: "resource $conn, int $tf",
      returnValue: "int",
      ref: null
    }
  },
  m_setdropfile: {
    name: "m_setdropfile",
    url: "function.m-setdropfile",
    spec: {
      parameters: "resource $conn, string $directory",
      returnValue: "int",
      ref: null
    }
  },
  m_setip: {
    name: "m_setip",
    url: "function.m-setip",
    spec: {
      parameters: "resource $conn, string $host, int $port",
      returnValue: "int",
      ref: null
    }
  },
  m_setssl: {
    name: "m_setssl",
    url: "function.m-setssl",
    spec: {
      parameters: "resource $conn, string $host, int $port",
      returnValue: "int",
      ref: null
    }
  },
  m_setssl_cafile: {
    name: "m_setssl_cafile",
    url: "function.m-setssl-cafile",
    spec: {
      parameters: "resource $conn, string $cafile",
      returnValue: "int",
      ref: null
    }
  },
  m_setssl_files: {
    name: "m_setssl_files",
    url: "function.m-setssl-files",
    spec: {
      parameters: "resource $conn, string $sslkeyfile, string $sslcertfile",
      returnValue: "int",
      ref: null
    }
  },
  m_settimeout: {
    name: "m_settimeout",
    url: "function.m-settimeout",
    spec: {
      parameters: "resource $conn, int $seconds",
      returnValue: "int",
      ref: null
    }
  },
  m_sslcert_gen_hash: {
    name: "m_sslcert_gen_hash",
    url: "function.m-sslcert-gen-hash",
    spec: {
      parameters: "string $filename",
      returnValue: "string",
      ref: null
    }
  },
  m_transactionssent: {
    name: "m_transactionssent",
    url: "function.m-transactionssent",
    spec: {
      parameters: "resource $conn",
      returnValue: "int",
      ref: null
    }
  },
  m_transinqueue: {
    name: "m_transinqueue",
    url: "function.m-transinqueue",
    spec: {
      parameters: "resource $conn",
      returnValue: "int",
      ref: null
    }
  },
  m_transkeyval: {
    name: "m_transkeyval",
    url: "function.m-transkeyval",
    spec: {
      parameters: "resource $conn, int $identifier, string $key, string $value",
      returnValue: "int",
      ref: null
    }
  },
  m_transnew: {
    name: "m_transnew",
    url: "function.m-transnew",
    spec: {
      parameters: "resource $conn",
      returnValue: "int",
      ref: null
    }
  },
  m_transsend: {
    name: "m_transsend",
    url: "function.m-transsend",
    spec: {
      parameters: "resource $conn, int $identifier",
      returnValue: "int",
      ref: null
    }
  },
  m_uwait: {
    name: "m_uwait",
    url: "function.m-uwait",
    spec: {
      parameters: "int $microsecs",
      returnValue: "int",
      ref: null
    }
  },
  m_validateidentifier: {
    name: "m_validateidentifier",
    url: "function.m-validateidentifier",
    spec: {
      parameters: "resource $conn, int $tf",
      returnValue: "int",
      ref: null
    }
  },
  m_verifyconnection: {
    name: "m_verifyconnection",
    url: "function.m-verifyconnection",
    spec: {
      parameters: "resource $conn, int $tf",
      returnValue: "bool",
      ref: null
    }
  },
  m_verifysslcert: {
    name: "m_verifysslcert",
    url: "function.m-verifysslcert",
    spec: {
      parameters: "resource $conn, int $tf",
      returnValue: "bool",
      ref: null
    }
  }
};
