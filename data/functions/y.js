functions.y = {
  yaml_emit: {
    name: "yaml_emit",
    url: "function.yaml-emit",
    spec: {
      parameters: "mixed $data [, int $encoding = YAML_ANY_ENCODING [, int $linebreak = YAML_ANY_BREAK [, array $callbacks = NULL ]]]",
      returnValue: "string",
      ref: null
    }
  },
  yaml_emit_file: {
    name: "yaml_emit_file",
    url: "function.yaml-emit-file",
    spec: {
      parameters: "string $filename, mixed $data [, int $encoding = YAML_ANY_ENCODING [, int $linebreak = YAML_ANY_BREAK [, array $callbacks = NULL ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  yaml_parse: {
    name: "yaml_parse",
    url: "function.yaml-parse",
    spec: {
      parameters: "string $input [, int $pos = 0 [, int &$ndocs [, array $callbacks = NULL ]]]",
      returnValue: "mixed",
      ref: null
    }
  },
  yaml_parse_file: {
    name: "yaml_parse_file",
    url: "function.yaml-parse-file",
    spec: {
      parameters: "string $filename [, int $pos = 0 [, int &$ndocs [, array $callbacks = NULL ]]]",
      returnValue: "mixed",
      ref: null
    }
  },
  yaml_parse_url: {
    name: "yaml_parse_url",
    url: "function.yaml-parse-url",
    spec: {
      parameters: "string $url [, int $pos = 0 [, int &$ndocs [, array $callbacks = NULL ]]]",
      returnValue: "mixed",
      ref: null
    }
  },
  yaz_addinfo: {
    name: "yaz_addinfo",
    url: "function.yaz-addinfo",
    spec: {
      parameters: "resource $id",
      returnValue: "string",
      ref: null
    }
  },
  yaz_ccl_conf: {
    name: "yaz_ccl_conf",
    url: "function.yaz-ccl-conf",
    spec: {
      parameters: "resource $id, array $config",
      returnValue: "void",
      ref: null
    }
  },
  yaz_ccl_parse: {
    name: "yaz_ccl_parse",
    url: "function.yaz-ccl-parse",
    spec: {
      parameters: "resource $id, string $query, array &$result",
      returnValue: "bool",
      ref: null
    }
  },
  yaz_close: {
    name: "yaz_close",
    url: "function.yaz-close",
    spec: {
      parameters: "resource $id",
      returnValue: "bool",
      ref: null
    }
  },
  yaz_connect: {
    name: "yaz_connect",
    url: "function.yaz-connect",
    spec: {
      parameters: "string $zurl [, mixed $options ]",
      returnValue: "mixed",
      ref: null
    }
  },
  yaz_database: {
    name: "yaz_database",
    url: "function.yaz-database",
    spec: {
      parameters: "resource $id, string $databases",
      returnValue: "bool",
      ref: null
    }
  },
  yaz_element: {
    name: "yaz_element",
    url: "function.yaz-element",
    spec: {
      parameters: "resource $id, string $elementset",
      returnValue: "bool",
      ref: null
    }
  },
  yaz_errno: {
    name: "yaz_errno",
    url: "function.yaz-errno",
    spec: {
      parameters: "resource $id",
      returnValue: "int",
      ref: null
    }
  },
  yaz_error: {
    name: "yaz_error",
    url: "function.yaz-error",
    spec: {
      parameters: "resource $id",
      returnValue: "string",
      ref: null
    }
  },
  yaz_es: {
    name: "yaz_es",
    url: "function.yaz-es",
    spec: {
      parameters: "resource $id, string $type, array $args",
      returnValue: "void",
      ref: null
    }
  },
  yaz_es_result: {
    name: "yaz_es_result",
    url: "function.yaz-es-result",
    spec: {
      parameters: "resource $id",
      returnValue: "array",
      ref: null
    }
  },
  yaz_get_option: {
    name: "yaz_get_option",
    url: "function.yaz-get-option",
    spec: {
      parameters: "resource $id, string $name",
      returnValue: "string",
      ref: null
    }
  },
  yaz_hits: {
    name: "yaz_hits",
    url: "function.yaz-hits",
    spec: {
      parameters: "resource $id [, array &$searchresult ]",
      returnValue: "int",
      ref: null
    }
  },
  yaz_itemorder: {
    name: "yaz_itemorder",
    url: "function.yaz-itemorder",
    spec: {
      parameters: "resource $id, array $args",
      returnValue: "void",
      ref: null
    }
  },
  yaz_present: {
    name: "yaz_present",
    url: "function.yaz-present",
    spec: {
      parameters: "resource $id",
      returnValue: "bool",
      ref: null
    }
  },
  yaz_range: {
    name: "yaz_range",
    url: "function.yaz-range",
    spec: {
      parameters: "resource $id, int $start, int $number",
      returnValue: "void",
      ref: null
    }
  },
  yaz_record: {
    name: "yaz_record",
    url: "function.yaz-record",
    spec: {
      parameters: "resource $id, int $pos, string $type",
      returnValue: "string",
      ref: null
    }
  },
  yaz_scan: {
    name: "yaz_scan",
    url: "function.yaz-scan",
    spec: {
      parameters: "resource $id, string $type, string $startterm [, array $flags ]",
      returnValue: "void",
      ref: null
    }
  },
  yaz_scan_result: {
    name: "yaz_scan_result",
    url: "function.yaz-scan-result",
    spec: {
      parameters: "resource $id [, array &$result ]",
      returnValue: "array",
      ref: null
    }
  },
  yaz_schema: {
    name: "yaz_schema",
    url: "function.yaz-schema",
    spec: {
      parameters: "resource $id, string $schema",
      returnValue: "void",
      ref: null
    }
  },
  yaz_search: {
    name: "yaz_search",
    url: "function.yaz-search",
    spec: {
      parameters: "resource $id, string $type, string $query",
      returnValue: "bool",
      ref: null
    }
  },
  yaz_set_option: {
    name: "yaz_set_option",
    url: "function.yaz-set-option",
    spec: {
      parameters: "resource $id, string $name, string $value",
      returnValue: "void",
      ref: null
    }
  },
  yaz_sort: {
    name: "yaz_sort",
    url: "function.yaz-sort",
    spec: {
      parameters: "resource $id, string $criteria",
      returnValue: "void",
      ref: null
    }
  },
  yaz_syntax: {
    name: "yaz_syntax",
    url: "function.yaz-syntax",
    spec: {
      parameters: "resource $id, string $syntax",
      returnValue: "void",
      ref: null
    }
  },
  yaz_wait: {
    name: "yaz_wait",
    url: "function.yaz-wait",
    spec: {
      parameters: "[ array &$options ]",
      returnValue: "mixed",
      ref: null
    }
  },
  yp_all: {
    name: "yp_all",
    url: "function.yp-all",
    spec: {
      parameters: "string $domain, string $map, string $callback",
      returnValue: "void",
      ref: null
    }
  },
  yp_cat: {
    name: "yp_cat",
    url: "function.yp-cat",
    spec: {
      parameters: "string $domain, string $map",
      returnValue: "array",
      ref: null
    }
  },
  yp_errno: {
    name: "yp_errno",
    url: "function.yp-errno",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  yp_err_string: {
    name: "yp_err_string",
    url: "function.yp-err-string",
    spec: {
      parameters: "int $errorcode",
      returnValue: "string",
      ref: null
    }
  },
  yp_first: {
    name: "yp_first",
    url: "function.yp-first",
    spec: {
      parameters: "string $domain, string $map",
      returnValue: "array",
      ref: null
    }
  },
  yp_get_default_domain: {
    name: "yp_get_default_domain",
    url: "function.yp-get-default-domain",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  yp_master: {
    name: "yp_master",
    url: "function.yp-master",
    spec: {
      parameters: "string $domain, string $map",
      returnValue: "string",
      ref: null
    }
  },
  yp_match: {
    name: "yp_match",
    url: "function.yp-match",
    spec: {
      parameters: "string $domain, string $map, string $key",
      returnValue: "string",
      ref: null
    }
  },
  yp_next: {
    name: "yp_next",
    url: "function.yp-next",
    spec: {
      parameters: "string $domain, string $map, string $key",
      returnValue: "array",
      ref: null
    }
  },
  yp_order: {
    name: "yp_order",
    url: "function.yp-order",
    spec: {
      parameters: "string $domain, string $map",
      returnValue: "int",
      ref: null
    }
  }
};
