functions.u = {
  "uasort": {
    "name": "uasort",
    "url": "function.uasort",
    "spec": {
      "parameters": "array &$array, callable $value_compare_func",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ucfirst": {
    "name": "ucfirst",
    "url": "function.ucfirst",
    "spec": {
      "parameters": "string $str",
      "returnValue": "string",
      "ref": null
    }
  },
  "ucwords": {
    "name": "ucwords",
    "url": "function.ucwords",
    "spec": {
      "parameters": "string $str [, string $delimiters = \" \\t\\r\\n\\f\\v\" ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "udm_add_search_limit": {
    "name": "udm_add_search_limit",
    "url": "function.udm-add-search-limit",
    "spec": {
      "parameters": "resource $agent, int $var, string $val",
      "returnValue": "bool",
      "ref": null
    }
  },
  "udm_alloc_agent": {
    "name": "udm_alloc_agent",
    "url": "function.udm-alloc-agent",
    "spec": {
      "parameters": "string $dbaddr [, string $dbmode ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "udm_alloc_agent_array": {
    "name": "udm_alloc_agent_array",
    "url": "function.udm-alloc-agent-array",
    "spec": {
      "parameters": "array $databases",
      "returnValue": "resource",
      "ref": null
    }
  },
  "udm_api_version": {
    "name": "udm_api_version",
    "url": "function.udm-api-version",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "udm_cat_list": {
    "name": "udm_cat_list",
    "url": "function.udm-cat-list",
    "spec": {
      "parameters": "resource $agent, string $category",
      "returnValue": "array",
      "ref": null
    }
  },
  "udm_cat_path": {
    "name": "udm_cat_path",
    "url": "function.udm-cat-path",
    "spec": {
      "parameters": "resource $agent, string $category",
      "returnValue": "array",
      "ref": null
    }
  },
  "udm_check_charset": {
    "name": "udm_check_charset",
    "url": "function.udm-check-charset",
    "spec": {
      "parameters": "resource $agent, string $charset",
      "returnValue": "bool",
      "ref": null
    }
  },
  "udm_clear_search_limits": {
    "name": "udm_clear_search_limits",
    "url": "function.udm-clear-search-limits",
    "spec": {
      "parameters": "resource $agent",
      "returnValue": "bool",
      "ref": null
    }
  },
  "udm_crc32": {
    "name": "udm_crc32",
    "url": "function.udm-crc32",
    "spec": {
      "parameters": "resource $agent, string $str",
      "returnValue": "int",
      "ref": null
    }
  },
  "udm_errno": {
    "name": "udm_errno",
    "url": "function.udm-errno",
    "spec": {
      "parameters": "resource $agent",
      "returnValue": "int",
      "ref": null
    }
  },
  "udm_error": {
    "name": "udm_error",
    "url": "function.udm-error",
    "spec": {
      "parameters": "resource $agent",
      "returnValue": "string",
      "ref": null
    }
  },
  "udm_find": {
    "name": "udm_find",
    "url": "function.udm-find",
    "spec": {
      "parameters": "resource $agent, string $query",
      "returnValue": "resource",
      "ref": null
    }
  },
  "udm_free_agent": {
    "name": "udm_free_agent",
    "url": "function.udm-free-agent",
    "spec": {
      "parameters": "resource $agent",
      "returnValue": "int",
      "ref": null
    }
  },
  "udm_free_ispell_data": {
    "name": "udm_free_ispell_data",
    "url": "function.udm-free-ispell-data",
    "spec": {
      "parameters": "int $agent",
      "returnValue": "bool",
      "ref": null
    }
  },
  "udm_free_res": {
    "name": "udm_free_res",
    "url": "function.udm-free-res",
    "spec": {
      "parameters": "resource $res",
      "returnValue": "bool",
      "ref": null
    }
  },
  "udm_get_doc_count": {
    "name": "udm_get_doc_count",
    "url": "function.udm-get-doc-count",
    "spec": {
      "parameters": "resource $agent",
      "returnValue": "int",
      "ref": null
    }
  },
  "udm_get_res_field": {
    "name": "udm_get_res_field",
    "url": "function.udm-get-res-field",
    "spec": {
      "parameters": "resource $res, int $row, int $field",
      "returnValue": "string",
      "ref": null
    }
  },
  "udm_get_res_param": {
    "name": "udm_get_res_param",
    "url": "function.udm-get-res-param",
    "spec": {
      "parameters": "resource $res, int $param",
      "returnValue": "string",
      "ref": null
    }
  },
  "udm_hash32": {
    "name": "udm_hash32",
    "url": "function.udm-hash32",
    "spec": {
      "parameters": "resource $agent, string $str",
      "returnValue": "int",
      "ref": null
    }
  },
  "udm_load_ispell_data": {
    "name": "udm_load_ispell_data",
    "url": "function.udm-load-ispell-data",
    "spec": {
      "parameters": "resource $agent, int $var, string $val1, string $val2, int $flag",
      "returnValue": "bool",
      "ref": null
    }
  },
  "udm_set_agent_param": {
    "name": "udm_set_agent_param",
    "url": "function.udm-set-agent-param",
    "spec": {
      "parameters": "resource $agent, int $var, string $val",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uksort": {
    "name": "uksort",
    "url": "function.uksort",
    "spec": {
      "parameters": "array &$array, callable $key_compare_func",
      "returnValue": "bool",
      "ref": null
    }
  },
  "umask": {
    "name": "umask",
    "url": "function.umask",
    "spec": {
      "parameters": "[ int $mask ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "uniqid": {
    "name": "uniqid",
    "url": "function.uniqid",
    "spec": {
      "parameters": "[ string $prefix = \"\" [, bool $more_entropy = FALSE ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "unixtojd": {
    "name": "unixtojd",
    "url": "function.unixtojd",
    "spec": {
      "parameters": "[ int $timestamp = time() ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "unlink": {
    "name": "unlink",
    "url": "function.unlink",
    "spec": {
      "parameters": "string $filename [, resource $context ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "unpack": {
    "name": "unpack",
    "url": "function.unpack",
    "spec": {
      "parameters": "string $format, string $data",
      "returnValue": "array",
      "ref": null
    }
  },
  "unregister_tick_function": {
    "name": "unregister_tick_function",
    "url": "function.unregister-tick-function",
    "spec": {
      "parameters": "string $function_name",
      "returnValue": "void",
      "ref": null
    }
  },
  "unserialize": {
    "name": "unserialize",
    "url": "function.unserialize",
    "spec": {
      "parameters": "string $str [, array $options ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "unset": {
    "name": "unset",
    "url": "function.unset",
    "spec": {
      "parameters": "mixed $var [, mixed $... ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "untaint": {
    "name": "untaint",
    "url": "function.untaint",
    "spec": {
      "parameters": "string &$string [, string $... ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_add_function": {
    "name": "uopz_add_function",
    "url": "function.uopz-add-function",
    "spec": {
      "parameters": "string $function, Closure $handler [, int &$flags = ZEND_ACC_PUBLIC ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_allow_exit": {
    "name": "uopz_allow_exit",
    "url": "function.uopz-allow-exit",
    "spec": {
      "parameters": "bool $allow",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_backup": {
    "name": "uopz_backup",
    "url": "function.uopz-backup",
    "spec": {
      "parameters": "string $function",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_compose": {
    "name": "uopz_compose",
    "url": "function.uopz-compose",
    "spec": {
      "parameters": "string $name, array $classes [, array $methods [, array $properties [, int $flags ]]]",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_copy": {
    "name": "uopz_copy",
    "url": "function.uopz-copy",
    "spec": {
      "parameters": "string $function",
      "returnValue": "Closure",
      "ref": null
    }
  },
  "uopz_delete": {
    "name": "uopz_delete",
    "url": "function.uopz-delete",
    "spec": {
      "parameters": "string $function",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_del_function": {
    "name": "uopz_del_function",
    "url": "function.uopz-del-function",
    "spec": {
      "parameters": "string $function",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_extend": {
    "name": "uopz_extend",
    "url": "function.uopz-extend",
    "spec": {
      "parameters": "string $class, string $parent",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_flags": {
    "name": "uopz_flags",
    "url": "function.uopz-flags",
    "spec": {
      "parameters": "string $function, int $flags",
      "returnValue": "int",
      "ref": null
    }
  },
  "uopz_function": {
    "name": "uopz_function",
    "url": "function.uopz-function",
    "spec": {
      "parameters": "string $function, Closure $handler [, int $modifiers ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_get_exit_status": {
    "name": "uopz_get_exit_status",
    "url": "function.uopz-get-exit-status",
    "spec": {
      "parameters": "void",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "uopz_get_hook": {
    "name": "uopz_get_hook",
    "url": "function.uopz-get-hook",
    "spec": {
      "parameters": "string $function",
      "returnValue": "Closure",
      "ref": null
    }
  },
  "uopz_get_mock": {
    "name": "uopz_get_mock",
    "url": "function.uopz-get-mock",
    "spec": {
      "parameters": "string $class",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "uopz_get_property": {
    "name": "uopz_get_property",
    "url": "function.uopz-get-property",
    "spec": {
      "parameters": "string $class, string $property",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "uopz_get_return": {
    "name": "uopz_get_return",
    "url": "function.uopz-get-return",
    "spec": {
      "parameters": "string $function",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "uopz_get_static": {
    "name": "uopz_get_static",
    "url": "function.uopz-get-static",
    "spec": {
      "parameters": "string $class, string $function",
      "returnValue": "array",
      "ref": null
    }
  },
  "uopz_implement": {
    "name": "uopz_implement",
    "url": "function.uopz-implement",
    "spec": {
      "parameters": "string $class, string $interface",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_overload": {
    "name": "uopz_overload",
    "url": "function.uopz-overload",
    "spec": {
      "parameters": "int $opcode, Callable $callable",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_redefine": {
    "name": "uopz_redefine",
    "url": "function.uopz-redefine",
    "spec": {
      "parameters": "string $constant, mixed $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_rename": {
    "name": "uopz_rename",
    "url": "function.uopz-rename",
    "spec": {
      "parameters": "string $function, string $rename",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_restore": {
    "name": "uopz_restore",
    "url": "function.uopz-restore",
    "spec": {
      "parameters": "string $function",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_set_hook": {
    "name": "uopz_set_hook",
    "url": "function.uopz-set-hook",
    "spec": {
      "parameters": "string $function, Closure $hook",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_set_mock": {
    "name": "uopz_set_mock",
    "url": "function.uopz-set-mock",
    "spec": {
      "parameters": "string $class, mixed $mock",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_set_property": {
    "name": "uopz_set_property",
    "url": "function.uopz-set-property",
    "spec": {
      "parameters": "string $class, string $property, mixed $value",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_set_return": {
    "name": "uopz_set_return",
    "url": "function.uopz-set-return",
    "spec": {
      "parameters": "string $function, mixed $value [, bool $execute = FALSE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_set_static": {
    "name": "uopz_set_static",
    "url": "function.uopz-set-static",
    "spec": {
      "parameters": "string $function, array $static",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_undefine": {
    "name": "uopz_undefine",
    "url": "function.uopz-undefine",
    "spec": {
      "parameters": "string $constant",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_unset_hook": {
    "name": "uopz_unset_hook",
    "url": "function.uopz-unset-hook",
    "spec": {
      "parameters": "string $function",
      "returnValue": "bool",
      "ref": null
    }
  },
  "uopz_unset_mock": {
    "name": "uopz_unset_mock",
    "url": "function.uopz-unset-mock",
    "spec": {
      "parameters": "string $class",
      "returnValue": "void",
      "ref": null
    }
  },
  "uopz_unset_return": {
    "name": "uopz_unset_return",
    "url": "function.uopz-unset-return",
    "spec": {
      "parameters": "string $function",
      "returnValue": "bool",
      "ref": null
    }
  },
  "urldecode": {
    "name": "urldecode",
    "url": "function.urldecode",
    "spec": {
      "parameters": "string $str",
      "returnValue": "string",
      "ref": null
    }
  },
  "urlencode": {
    "name": "urlencode",
    "url": "function.urlencode",
    "spec": {
      "parameters": "string $str",
      "returnValue": "string",
      "ref": null
    }
  },
  "user_error": {
    "name": "user_error",
    "url": "function.user-error",
    "spec": {
      "parameters": "string $error_msg [, int $error_type = E_USER_NOTICE ]",
      "returnValue": "bool",
      "ref": {
        "name": "trigger_error()",
        "url": "function.trigger-error"
      }
    }
  },
  "use_soap_error_handler": {
    "name": "use_soap_error_handler",
    "url": "function.use-soap-error-handler",
    "spec": {
      "parameters": "[ bool $handler = TRUE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "usleep": {
    "name": "usleep",
    "url": "function.usleep",
    "spec": {
      "parameters": "int $micro_seconds",
      "returnValue": "void",
      "ref": null
    }
  },
  "usort": {
    "name": "usort",
    "url": "function.usort",
    "spec": {
      "parameters": "array &$array, callable $value_compare_func",
      "returnValue": "bool",
      "ref": null
    }
  },
  "utf8_decode": {
    "name": "utf8_decode",
    "url": "function.utf8-decode",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "utf8_encode": {
    "name": "utf8_encode",
    "url": "function.utf8-encode",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  }
};
