functions.x = {
  xattr_get: {
    name: "xattr_get",
    url: "function.xattr-get",
    spec: {
      parameters: "string $filename, string $name [, int $flags = 0 ]",
      returnValue: "string",
      ref: null
    }
  },
  xattr_list: {
    name: "xattr_list",
    url: "function.xattr-list",
    spec: {
      parameters: "string $filename [, int $flags = 0 ]",
      returnValue: "array",
      ref: null
    }
  },
  xattr_remove: {
    name: "xattr_remove",
    url: "function.xattr-remove",
    spec: {
      parameters: "string $filename, string $name [, int $flags = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  xattr_set: {
    name: "xattr_set",
    url: "function.xattr-set",
    spec: {
      parameters: "string $filename, string $name, string $value [, int $flags = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  xattr_supported: {
    name: "xattr_supported",
    url: "function.xattr-supported",
    spec: {
      parameters: "string $filename [, int $flags = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  xdiff_file_bdiff: {
    name: "xdiff_file_bdiff",
    url: "function.xdiff-file-bdiff",
    spec: {
      parameters: "string $old_file, string $new_file, string $dest",
      returnValue: "bool",
      ref: null
    }
  },
  xdiff_file_bdiff_size: {
    name: "xdiff_file_bdiff_size",
    url: "function.xdiff-file-bdiff-size",
    spec: {
      parameters: "string $file",
      returnValue: "int",
      ref: null
    }
  },
  xdiff_file_bpatch: {
    name: "xdiff_file_bpatch",
    url: "function.xdiff-file-bpatch",
    spec: {
      parameters: "string $file, string $patch, string $dest",
      returnValue: "bool",
      ref: null
    }
  },
  xdiff_file_diff: {
    name: "xdiff_file_diff",
    url: "function.xdiff-file-diff",
    spec: {
      parameters: "string $old_file, string $new_file, string $dest [, int $context = 3 [, bool $minimal = FALSE ]]",
      returnValue: "bool",
      ref: null
    }
  },
  xdiff_file_diff_binary: {
    name: "xdiff_file_diff_binary",
    url: "function.xdiff-file-diff-binary",
    spec: {
      parameters: "string $old_file, string $new_file, string $dest",
      returnValue: "bool",
      ref: null
    }
  },
  xdiff_file_merge3: {
    name: "xdiff_file_merge3",
    url: "function.xdiff-file-merge3",
    spec: {
      parameters: "string $old_file, string $new_file1, string $new_file2, string $dest",
      returnValue: "mixed",
      ref: null
    }
  },
  xdiff_file_patch: {
    name: "xdiff_file_patch",
    url: "function.xdiff-file-patch",
    spec: {
      parameters: "string $file, string $patch, string $dest [, int $flags = DIFF_PATCH_NORMAL ]",
      returnValue: "mixed",
      ref: null
    }
  },
  xdiff_file_patch_binary: {
    name: "xdiff_file_patch_binary",
    url: "function.xdiff-file-patch-binary",
    spec: {
      parameters: "string $file, string $patch, string $dest",
      returnValue: "bool",
      ref: null
    }
  },
  xdiff_file_rabdiff: {
    name: "xdiff_file_rabdiff",
    url: "function.xdiff-file-rabdiff",
    spec: {
      parameters: "string $old_file, string $new_file, string $dest",
      returnValue: "bool",
      ref: null
    }
  },
  xdiff_string_bdiff: {
    name: "xdiff_string_bdiff",
    url: "function.xdiff-string-bdiff",
    spec: {
      parameters: "string $old_data, string $new_data",
      returnValue: "string",
      ref: null
    }
  },
  xdiff_string_bdiff_size: {
    name: "xdiff_string_bdiff_size",
    url: "function.xdiff-string-bdiff-size",
    spec: {
      parameters: "string $patch",
      returnValue: "int",
      ref: null
    }
  },
  xdiff_string_bpatch: {
    name: "xdiff_string_bpatch",
    url: "function.xdiff-string-bpatch",
    spec: {
      parameters: "string $str, string $patch",
      returnValue: "string",
      ref: null
    }
  },
  xdiff_string_diff: {
    name: "xdiff_string_diff",
    url: "function.xdiff-string-diff",
    spec: {
      parameters: "string $old_data, string $new_data [, int $context = 3 [, bool $minimal = FALSE ]]",
      returnValue: "string",
      ref: null
    }
  },
  xdiff_string_diff_binary: {
    name: "xdiff_string_diff_binary",
    url: "function.xdiff-string-diff-binary",
    spec: {
      parameters: "string $old_data, string $new_data",
      returnValue: "string",
      ref: null
    }
  },
  xdiff_string_merge3: {
    name: "xdiff_string_merge3",
    url: "function.xdiff-string-merge3",
    spec: {
      parameters: "string $old_data, string $new_data1, string $new_data2 [, string &$error ]",
      returnValue: "mixed",
      ref: null
    }
  },
  xdiff_string_patch: {
    name: "xdiff_string_patch",
    url: "function.xdiff-string-patch",
    spec: {
      parameters: "string $str, string $patch [, int $flags [, string &$error ]]",
      returnValue: "string",
      ref: null
    }
  },
  xdiff_string_patch_binary: {
    name: "xdiff_string_patch_binary",
    url: "function.xdiff-string-patch-binary",
    spec: {
      parameters: "string $str, string $patch",
      returnValue: "string",
      ref: null
    }
  },
  xdiff_string_rabdiff: {
    name: "xdiff_string_rabdiff",
    url: "function.xdiff-string-rabdiff",
    spec: {
      parameters: "string $old_data, string $new_data",
      returnValue: "string",
      ref: null
    }
  },
  xhprof_disable: {
    name: "xhprof_disable",
    url: "function.xhprof-disable",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  xhprof_enable: {
    name: "xhprof_enable",
    url: "function.xhprof-enable",
    spec: {
      parameters: "[ int $flags = 0 [, array $options ]]",
      returnValue: "void",
      ref: null
    }
  },
  xhprof_sample_disable: {
    name: "xhprof_sample_disable",
    url: "function.xhprof-sample-disable",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  xhprof_sample_enable: {
    name: "xhprof_sample_enable",
    url: "function.xhprof-sample-enable",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  xmlrpc_decode: {
    name: "xmlrpc_decode",
    url: "function.xmlrpc-decode",
    spec: {
      parameters: "string $xml [, string $encoding = \"iso-8859-1\" ]",
      returnValue: "mixed",
      ref: null
    }
  },
  xmlrpc_decode_request: {
    name: "xmlrpc_decode_request",
    url: "function.xmlrpc-decode-request",
    spec: {
      parameters: "string $xml, string &$method [, string $encoding ]",
      returnValue: "mixed",
      ref: null
    }
  },
  xmlrpc_encode: {
    name: "xmlrpc_encode",
    url: "function.xmlrpc-encode",
    spec: {
      parameters: "mixed $value",
      returnValue: "string",
      ref: null
    }
  },
  xmlrpc_encode_request: {
    name: "xmlrpc_encode_request",
    url: "function.xmlrpc-encode-request",
    spec: {
      parameters: "string $method, mixed $params [, array $output_options ]",
      returnValue: "string",
      ref: null
    }
  },
  xmlrpc_get_type: {
    name: "xmlrpc_get_type",
    url: "function.xmlrpc-get-type",
    spec: {
      parameters: "mixed $value",
      returnValue: "string",
      ref: null
    }
  },
  xmlrpc_is_fault: {
    name: "xmlrpc_is_fault",
    url: "function.xmlrpc-is-fault",
    spec: {
      parameters: "array $arg",
      returnValue: "bool",
      ref: null
    }
  },
  xmlrpc_parse_method_descriptions: {
    name: "xmlrpc_parse_method_descriptions",
    url: "function.xmlrpc-parse-method-descriptions",
    spec: {
      parameters: "string $xml",
      returnValue: "array",
      ref: null
    }
  },
  xmlrpc_server_add_introspection_data: {
    name: "xmlrpc_server_add_introspection_data",
    url: "function.xmlrpc-server-add-introspection-data",
    spec: {
      parameters: "resource $server, array $desc",
      returnValue: "int",
      ref: null
    }
  },
  xmlrpc_server_call_method: {
    name: "xmlrpc_server_call_method",
    url: "function.xmlrpc-server-call-method",
    spec: {
      parameters: "resource $server, string $xml, mixed $user_data [, array $output_options ]",
      returnValue: "string",
      ref: null
    }
  },
  xmlrpc_server_create: {
    name: "xmlrpc_server_create",
    url: "function.xmlrpc-server-create",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  xmlrpc_server_destroy: {
    name: "xmlrpc_server_destroy",
    url: "function.xmlrpc-server-destroy",
    spec: {
      parameters: "resource $server",
      returnValue: "int",
      ref: null
    }
  },
  xmlrpc_server_register_introspection_callback: {
    name: "xmlrpc_server_register_introspection_callback",
    url: "function.xmlrpc-server-register-introspection-callback",
    spec: {
      parameters: "resource $server, string $function",
      returnValue: "bool",
      ref: null
    }
  },
  xmlrpc_server_register_method: {
    name: "xmlrpc_server_register_method",
    url: "function.xmlrpc-server-register-method",
    spec: {
      parameters: "resource $server, string $method_name, string $function",
      returnValue: "bool",
      ref: null
    }
  },
  xmlrpc_set_type: {
    name: "xmlrpc_set_type",
    url: "function.xmlrpc-set-type",
    spec: {
      parameters: "string &$value, string $type",
      returnValue: "bool",
      ref: null
    }
  },
  xml_error_string: {
    name: "xml_error_string",
    url: "function.xml-error-string",
    spec: {
      parameters: "int $code",
      returnValue: "string",
      ref: null
    }
  },
  xml_get_current_byte_index: {
    name: "xml_get_current_byte_index",
    url: "function.xml-get-current-byte-index",
    spec: {
      parameters: "resource $parser",
      returnValue: "int",
      ref: null
    }
  },
  xml_get_current_column_number: {
    name: "xml_get_current_column_number",
    url: "function.xml-get-current-column-number",
    spec: {
      parameters: "resource $parser",
      returnValue: "int",
      ref: null
    }
  },
  xml_get_current_line_number: {
    name: "xml_get_current_line_number",
    url: "function.xml-get-current-line-number",
    spec: {
      parameters: "resource $parser",
      returnValue: "int",
      ref: null
    }
  },
  xml_get_error_code: {
    name: "xml_get_error_code",
    url: "function.xml-get-error-code",
    spec: {
      parameters: "resource $parser",
      returnValue: "int",
      ref: null
    }
  },
  xml_parse: {
    name: "xml_parse",
    url: "function.xml-parse",
    spec: {
      parameters: "resource $parser, string $data [, bool $is_final = false ]",
      returnValue: "int",
      ref: null
    }
  },
  xml_parser_create: {
    name: "xml_parser_create",
    url: "function.xml-parser-create",
    spec: {
      parameters: "[ string $encoding ]",
      returnValue: "resource",
      ref: null
    }
  },
  xml_parser_create_ns: {
    name: "xml_parser_create_ns",
    url: "function.xml-parser-create-ns",
    spec: {
      parameters: "[ string $encoding [, string $separator = \":\" ]]",
      returnValue: "resource",
      ref: null
    }
  },
  xml_parser_free: {
    name: "xml_parser_free",
    url: "function.xml-parser-free",
    spec: {
      parameters: "resource $parser",
      returnValue: "bool",
      ref: null
    }
  },
  xml_parser_get_option: {
    name: "xml_parser_get_option",
    url: "function.xml-parser-get-option",
    spec: {
      parameters: "resource $parser, int $option",
      returnValue: "mixed",
      ref: null
    }
  },
  xml_parser_set_option: {
    name: "xml_parser_set_option",
    url: "function.xml-parser-set-option",
    spec: {
      parameters: "resource $parser, int $option, mixed $value",
      returnValue: "bool",
      ref: null
    }
  },
  xml_parse_into_struct: {
    name: "xml_parse_into_struct",
    url: "function.xml-parse-into-struct",
    spec: {
      parameters: "resource $parser, string $data, array &$values [, array &$index ]",
      returnValue: "int",
      ref: null
    }
  },
  xml_set_character_data_handler: {
    name: "xml_set_character_data_handler",
    url: "function.xml-set-character-data-handler",
    spec: {
      parameters: "resource $parser, callable $handler",
      returnValue: "bool",
      ref: null
    }
  },
  xml_set_default_handler: {
    name: "xml_set_default_handler",
    url: "function.xml-set-default-handler",
    spec: {
      parameters: "resource $parser, callable $handler",
      returnValue: "bool",
      ref: null
    }
  },
  xml_set_element_handler: {
    name: "xml_set_element_handler",
    url: "function.xml-set-element-handler",
    spec: {
      parameters: "resource $parser, callable $start_element_handler, callable $end_element_handler",
      returnValue: "bool",
      ref: null
    }
  },
  xml_set_end_namespace_decl_handler: {
    name: "xml_set_end_namespace_decl_handler",
    url: "function.xml-set-end-namespace-decl-handler",
    spec: {
      parameters: "resource $parser, callable $handler",
      returnValue: "bool",
      ref: null
    }
  },
  xml_set_external_entity_ref_handler: {
    name: "xml_set_external_entity_ref_handler",
    url: "function.xml-set-external-entity-ref-handler",
    spec: {
      parameters: "resource $parser, callable $handler",
      returnValue: "bool",
      ref: null
    }
  },
  xml_set_notation_decl_handler: {
    name: "xml_set_notation_decl_handler",
    url: "function.xml-set-notation-decl-handler",
    spec: {
      parameters: "resource $parser, callable $handler",
      returnValue: "bool",
      ref: null
    }
  },
  xml_set_object: {
    name: "xml_set_object",
    url: "function.xml-set-object",
    spec: {
      parameters: "resource $parser, object &$object",
      returnValue: "bool",
      ref: null
    }
  },
  xml_set_processing_instruction_handler: {
    name: "xml_set_processing_instruction_handler",
    url: "function.xml-set-processing-instruction-handler",
    spec: {
      parameters: "resource $parser, callable $handler",
      returnValue: "bool",
      ref: null
    }
  },
  xml_set_start_namespace_decl_handler: {
    name: "xml_set_start_namespace_decl_handler",
    url: "function.xml-set-start-namespace-decl-handler",
    spec: {
      parameters: "resource $parser, callable $handler",
      returnValue: "bool",
      ref: null
    }
  },
  xml_set_unparsed_entity_decl_handler: {
    name: "xml_set_unparsed_entity_decl_handler",
    url: "function.xml-set-unparsed-entity-decl-handler",
    spec: {
      parameters: "resource $parser, callable $handler",
      returnValue: "bool",
      ref: null
    }
  }
};
