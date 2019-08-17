functions.b = {
  "base64_decode": {
    "name": "base64_decode",
    "url": "function.base64-decode",
    "spec": {
      "parameters": "string $data [, bool $strict = false ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "base64_encode": {
    "name": "base64_encode",
    "url": "function.base64-encode",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "basename": {
    "name": "basename",
    "url": "function.basename",
    "spec": {
      "parameters": "string $path [, string $suffix ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "base_convert": {
    "name": "base_convert",
    "url": "function.base-convert",
    "spec": {
      "parameters": "string $number, int $frombase, int $tobase",
      "returnValue": "string",
      "ref": null
    }
  },
  "bbcode_add_element": {
    "name": "bbcode_add_element",
    "url": "function.bbcode-add-element",
    "spec": {
      "parameters": "resource $bbcode_container, string $tag_name, array $tag_rules",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bbcode_add_smiley": {
    "name": "bbcode_add_smiley",
    "url": "function.bbcode-add-smiley",
    "spec": {
      "parameters": "resource $bbcode_container, string $smiley, string $replace_by",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bbcode_create": {
    "name": "bbcode_create",
    "url": "function.bbcode-create",
    "spec": {
      "parameters": "[ array $bbcode_initial_tags = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "bbcode_destroy": {
    "name": "bbcode_destroy",
    "url": "function.bbcode-destroy",
    "spec": {
      "parameters": "resource $bbcode_container",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bbcode_parse": {
    "name": "bbcode_parse",
    "url": "function.bbcode-parse",
    "spec": {
      "parameters": "resource $bbcode_container, string $to_parse",
      "returnValue": "string",
      "ref": null
    }
  },
  "bbcode_set_arg_parser": {
    "name": "bbcode_set_arg_parser",
    "url": "function.bbcode-set-arg-parser",
    "spec": {
      "parameters": "resource $bbcode_container, resource $bbcode_arg_parser",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bbcode_set_flags": {
    "name": "bbcode_set_flags",
    "url": "function.bbcode-set-flags",
    "spec": {
      "parameters": "resource $bbcode_container, int $flags [, int $mode = BBCODE_SET_FLAGS_SET ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcadd": {
    "name": "bcadd",
    "url": "function.bcadd",
    "spec": {
      "parameters": "string $left_operand, string $right_operand [, int $scale = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "bccomp": {
    "name": "bccomp",
    "url": "function.bccomp",
    "spec": {
      "parameters": "string $left_operand, string $right_operand [, int $scale = 0 ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "bcdiv": {
    "name": "bcdiv",
    "url": "function.bcdiv",
    "spec": {
      "parameters": "string $left_operand, string $right_operand [, int $scale = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "bcmod": {
    "name": "bcmod",
    "url": "function.bcmod",
    "spec": {
      "parameters": "string $left_operand, string $modulus",
      "returnValue": "string",
      "ref": null
    }
  },
  "bcmul": {
    "name": "bcmul",
    "url": "function.bcmul",
    "spec": {
      "parameters": "string $left_operand, string $right_operand [, int $scale = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "bcompiler_load": {
    "name": "bcompiler_load",
    "url": "function.bcompiler-load",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_load_exe": {
    "name": "bcompiler_load_exe",
    "url": "function.bcompiler-load-exe",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_parse_class": {
    "name": "bcompiler_parse_class",
    "url": "function.bcompiler-parse-class",
    "spec": {
      "parameters": "string $class, string $callback",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_read": {
    "name": "bcompiler_read",
    "url": "function.bcompiler-read",
    "spec": {
      "parameters": "resource $filehandle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_write_class": {
    "name": "bcompiler_write_class",
    "url": "function.bcompiler-write-class",
    "spec": {
      "parameters": "resource $filehandle, string $className [, string $extends ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_write_constant": {
    "name": "bcompiler_write_constant",
    "url": "function.bcompiler-write-constant",
    "spec": {
      "parameters": "resource $filehandle, string $constantName",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_write_exe_footer": {
    "name": "bcompiler_write_exe_footer",
    "url": "function.bcompiler-write-exe-footer",
    "spec": {
      "parameters": "resource $filehandle, int $startpos",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_write_file": {
    "name": "bcompiler_write_file",
    "url": "function.bcompiler-write-file",
    "spec": {
      "parameters": "resource $filehandle, string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_write_footer": {
    "name": "bcompiler_write_footer",
    "url": "function.bcompiler-write-footer",
    "spec": {
      "parameters": "resource $filehandle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_write_function": {
    "name": "bcompiler_write_function",
    "url": "function.bcompiler-write-function",
    "spec": {
      "parameters": "resource $filehandle, string $functionName",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_write_functions_from_file": {
    "name": "bcompiler_write_functions_from_file",
    "url": "function.bcompiler-write-functions-from-file",
    "spec": {
      "parameters": "resource $filehandle, string $fileName",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_write_header": {
    "name": "bcompiler_write_header",
    "url": "function.bcompiler-write-header",
    "spec": {
      "parameters": "resource $filehandle [, string $write_ver ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcompiler_write_included_filename": {
    "name": "bcompiler_write_included_filename",
    "url": "function.bcompiler-write-included-filename",
    "spec": {
      "parameters": "resource $filehandle, string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcpow": {
    "name": "bcpow",
    "url": "function.bcpow",
    "spec": {
      "parameters": "string $left_operand, string $right_operand [, int $scale = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "bcpowmod": {
    "name": "bcpowmod",
    "url": "function.bcpowmod",
    "spec": {
      "parameters": "string $left_operand, string $right_operand, string $modulus [, int $scale = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "bcscale": {
    "name": "bcscale",
    "url": "function.bcscale",
    "spec": {
      "parameters": "int $scale",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bcsqrt": {
    "name": "bcsqrt",
    "url": "function.bcsqrt",
    "spec": {
      "parameters": "string $operand [, int $scale = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "bcsub": {
    "name": "bcsub",
    "url": "function.bcsub",
    "spec": {
      "parameters": "string $left_operand, string $right_operand [, int $scale = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "bin2hex": {
    "name": "bin2hex",
    "url": "function.bin2hex",
    "spec": {
      "parameters": "string $str",
      "returnValue": "string",
      "ref": null
    }
  },
  "bindec": {
    "name": "bindec",
    "url": "function.bindec",
    "spec": {
      "parameters": "string $binary_string",
      "returnValue": "number",
      "ref": null
    }
  },
  "bindtextdomain": {
    "name": "bindtextdomain",
    "url": "function.bindtextdomain",
    "spec": {
      "parameters": "string $domain, string $directory",
      "returnValue": "string",
      "ref": null
    }
  },
  "bind_textdomain_codeset": {
    "name": "bind_textdomain_codeset",
    "url": "function.bind-textdomain-codeset",
    "spec": {
      "parameters": "string $domain, string $codeset",
      "returnValue": "string",
      "ref": null
    }
  },
  "blenc_encrypt": {
    "name": "blenc_encrypt",
    "url": "function.blenc-encrypt",
    "spec": {
      "parameters": "string $plaintext, string $encodedfile [, string $encryption_key ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "boolval": {
    "name": "boolval",
    "url": "function.boolval",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bson_decode": {
    "name": "bson_decode",
    "url": "function.bson-decode",
    "spec": {
      "parameters": "string $bson",
      "returnValue": "array",
      "ref": null
    }
  },
  "bson_encode": {
    "name": "bson_encode",
    "url": "function.bson-encode",
    "spec": {
      "parameters": "mixed $anything",
      "returnValue": "string",
      "ref": null
    }
  },
  "bzclose": {
    "name": "bzclose",
    "url": "function.bzclose",
    "spec": {
      "parameters": "resource $bz",
      "returnValue": "int",
      "ref": null
    }
  },
  "bzcompress": {
    "name": "bzcompress",
    "url": "function.bzcompress",
    "spec": {
      "parameters": "string $source [, int $blocksize = 4 [, int $workfactor = 0 ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "bzdecompress": {
    "name": "bzdecompress",
    "url": "function.bzdecompress",
    "spec": {
      "parameters": "string $source [, int $small = 0 ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "bzerrno": {
    "name": "bzerrno",
    "url": "function.bzerrno",
    "spec": {
      "parameters": "resource $bz",
      "returnValue": "int",
      "ref": null
    }
  },
  "bzerror": {
    "name": "bzerror",
    "url": "function.bzerror",
    "spec": {
      "parameters": "resource $bz",
      "returnValue": "array",
      "ref": null
    }
  },
  "bzerrstr": {
    "name": "bzerrstr",
    "url": "function.bzerrstr",
    "spec": {
      "parameters": "resource $bz",
      "returnValue": "string",
      "ref": null
    }
  },
  "bzflush": {
    "name": "bzflush",
    "url": "function.bzflush",
    "spec": {
      "parameters": "resource $bz",
      "returnValue": "bool",
      "ref": null
    }
  },
  "bzopen": {
    "name": "bzopen",
    "url": "function.bzopen",
    "spec": {
      "parameters": "mixed $file, string $mode",
      "returnValue": "resource",
      "ref": null
    }
  },
  "bzread": {
    "name": "bzread",
    "url": "function.bzread",
    "spec": {
      "parameters": "resource $bz [, int $length = 1024 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "bzwrite": {
    "name": "bzwrite",
    "url": "function.bzwrite",
    "spec": {
      "parameters": "resource $bz, string $data [, int $length ]",
      "returnValue": "int",
      "ref": null
    }
  }
};
