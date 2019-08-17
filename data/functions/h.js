functions.h = {
  "hash": {
    "name": "hash",
    "url": "function.hash",
    "spec": {
      "parameters": "string $algo, string $data [, bool $raw_output = FALSE ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "hash_algos": {
    "name": "hash_algos",
    "url": "function.hash-algos",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "hash_copy": {
    "name": "hash_copy",
    "url": "function.hash-copy",
    "spec": {
      "parameters": "resource $context",
      "returnValue": "resource",
      "ref": null
    }
  },
  "hash_equals": {
    "name": "hash_equals",
    "url": "function.hash-equals",
    "spec": {
      "parameters": "string $known_string, string $user_string",
      "returnValue": "bool",
      "ref": null
    }
  },
  "hash_file": {
    "name": "hash_file",
    "url": "function.hash-file",
    "spec": {
      "parameters": "string $algo, string $filename [, bool $raw_output = FALSE ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "hash_final": {
    "name": "hash_final",
    "url": "function.hash-final",
    "spec": {
      "parameters": "resource $context [, bool $raw_output = false ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "hash_hkdf": {
    "name": "hash_hkdf",
    "url": "function.hash-hkdf",
    "spec": {
      "parameters": "string $algo, string $ikm [, int $length = 0 [, string $info = '' [, string $salt = '' ]]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "hash_hmac": {
    "name": "hash_hmac",
    "url": "function.hash-hmac",
    "spec": {
      "parameters": "string $algo, string $data, string $key [, bool $raw_output = false ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "hash_hmac_algos": {
    "name": "hash_hmac_algos",
    "url": "function.hash-hmac-algos",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "hash_hmac_file": {
    "name": "hash_hmac_file",
    "url": "function.hash-hmac-file",
    "spec": {
      "parameters": "string $algo, string $filename, string $key [, bool $raw_output = false ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "hash_init": {
    "name": "hash_init",
    "url": "function.hash-init",
    "spec": {
      "parameters": "string $algo [, int $options = 0 [, string $key = NULL ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "hash_pbkdf2": {
    "name": "hash_pbkdf2",
    "url": "function.hash-pbkdf2",
    "spec": {
      "parameters": "string $algo, string $password, string $salt, int $iterations [, int $length = 0 [, bool $raw_output = FALSE ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "hash_update": {
    "name": "hash_update",
    "url": "function.hash-update",
    "spec": {
      "parameters": "resource $context, string $data",
      "returnValue": "bool",
      "ref": null
    }
  },
  "hash_update_file": {
    "name": "hash_update_file",
    "url": "function.hash-update-file",
    "spec": {
      "parameters": "resource $hcontext, string $filename [, resource $scontext = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "hash_update_stream": {
    "name": "hash_update_stream",
    "url": "function.hash-update-stream",
    "spec": {
      "parameters": "resource $context, resource $handle [, int $length = -1 ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "header": {
    "name": "header",
    "url": "function.header",
    "spec": {
      "parameters": "string $header [, bool $replace = TRUE [, int $http_response_code ]]",
      "returnValue": "void",
      "ref": null
    }
  },
  "headers_list": {
    "name": "headers_list",
    "url": "function.headers-list",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "headers_sent": {
    "name": "headers_sent",
    "url": "function.headers-sent",
    "spec": {
      "parameters": "[ string &$file [, int &$line ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "header_register_callback": {
    "name": "header_register_callback",
    "url": "function.header-register-callback",
    "spec": {
      "parameters": "callable $callback",
      "returnValue": "bool",
      "ref": null
    }
  },
  "header_remove": {
    "name": "header_remove",
    "url": "function.header-remove",
    "spec": {
      "parameters": "[ string $name ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "hebrev": {
    "name": "hebrev",
    "url": "function.hebrev",
    "spec": {
      "parameters": "string $hebrew_text [, int $max_chars_per_line = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "hebrevc": {
    "name": "hebrevc",
    "url": "function.hebrevc",
    "spec": {
      "parameters": "string $hebrew_text [, int $max_chars_per_line = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "hex2bin": {
    "name": "hex2bin",
    "url": "function.hex2bin",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "hexdec": {
    "name": "hexdec",
    "url": "function.hexdec",
    "spec": {
      "parameters": "string $hex_string",
      "returnValue": "number",
      "ref": null
    }
  },
  "highlight_file": {
    "name": "highlight_file",
    "url": "function.highlight-file",
    "spec": {
      "parameters": "string $filename [, bool $return = FALSE ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "highlight_string": {
    "name": "highlight_string",
    "url": "function.highlight-string",
    "spec": {
      "parameters": "string $str [, bool $return = FALSE ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "hrtime": {
    "name": "hrtime",
    "url": "function.hrtime",
    "spec": {
      "parameters": "[ bool $get_as_number = FALSE ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "htmlentities": {
    "name": "htmlentities",
    "url": "functionentities",
    "spec": {
      "parameters": "string $string [, int $flags = ENT_COMPAT | ENT_HTML401 [, string $encoding = ini_get(\"default_charset\") [, bool $double_encode = TRUE ]]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "htmlspecialchars": {
    "name": "htmlspecialchars",
    "url": "functionspecialchars",
    "spec": {
      "parameters": "string $string [, int $flags = ENT_COMPAT | ENT_HTML401 [, string $encoding = ini_get(\"default_charset\") [, bool $double_encode = TRUE ]]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "htmlspecialchars_decode": {
    "name": "htmlspecialchars_decode",
    "url": "functionspecialchars-decode",
    "spec": {
      "parameters": "string $string [, int $flags = ENT_COMPAT | ENT_HTML401 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "html_entity_decode": {
    "name": "html_entity_decode",
    "url": "function-entity-decode",
    "spec": {
      "parameters": "string $string [, int $flags = ENT_COMPAT | ENT_HTML401 [, string $encoding = ini_get(\"default_charset\") ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "http_build_query": {
    "name": "http_build_query",
    "url": "function.http-build-query",
    "spec": {
      "parameters": "mixed $query_data [, string $numeric_prefix [, string $arg_separator [, int $enc_type = PHP_QUERY_RFC1738 ]]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "http_response_code": {
    "name": "http_response_code",
    "url": "function.http-response-code",
    "spec": {
      "parameters": "[ int $response_code ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "hwapi_attribute_new": {
    "name": "hwapi_attribute_new",
    "url": "function.hwapi-attribute-new",
    "spec": {
      "parameters": "[ string $name [, string $value ]]",
      "returnValue": "HW_API_Attribute",
      "ref": null
    }
  },
  "hwapi_content_new": {
    "name": "hwapi_content_new",
    "url": "function.hwapi-content-new",
    "spec": {
      "parameters": "string $content, string $mimetype",
      "returnValue": "HW_API_Content",
      "ref": null
    }
  },
  "hwapi_hgcsp": {
    "name": "hwapi_hgcsp",
    "url": "function.hwapi-hgcsp",
    "spec": {
      "parameters": "string $hostname [, int $port ]",
      "returnValue": "HW_API",
      "ref": null
    }
  },
  "hwapi_object_new": {
    "name": "hwapi_object_new",
    "url": "function.hwapi-object-new",
    "spec": {
      "parameters": "array $parameter",
      "returnValue": "hw_api_object",
      "ref": null
    }
  },
  "hypot": {
    "name": "hypot",
    "url": "function.hypot",
    "spec": {
      "parameters": "float $x, float $y",
      "returnValue": "float",
      "ref": null
    }
  }
};
