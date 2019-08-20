functions.j = {
  jddayofweek: {
    name: "jddayofweek",
    url: "function.jddayofweek",
    spec: {
      parameters: "int $julianday [, int $mode = CAL_DOW_DAYNO ]",
      returnValue: "mixed",
      ref: null
    }
  },
  jdmonthname: {
    name: "jdmonthname",
    url: "function.jdmonthname",
    spec: {
      parameters: "int $julianday, int $mode",
      returnValue: "string",
      ref: null
    }
  },
  jdtofrench: {
    name: "jdtofrench",
    url: "function.jdtofrench",
    spec: {
      parameters: "int $juliandaycount",
      returnValue: "string",
      ref: null
    }
  },
  jdtogregorian: {
    name: "jdtogregorian",
    url: "function.jdtogregorian",
    spec: {
      parameters: "int $julianday",
      returnValue: "string",
      ref: null
    }
  },
  jdtojewish: {
    name: "jdtojewish",
    url: "function.jdtojewish",
    spec: {
      parameters: "int $juliandaycount [, bool $hebrew = false [, int $fl = 0 ]]",
      returnValue: "string",
      ref: null
    }
  },
  jdtojulian: {
    name: "jdtojulian",
    url: "function.jdtojulian",
    spec: {
      parameters: "int $julianday",
      returnValue: "string",
      ref: null
    }
  },
  jdtounix: {
    name: "jdtounix",
    url: "function.jdtounix",
    spec: {
      parameters: "int $jday",
      returnValue: "int",
      ref: null
    }
  },
  jewishtojd: {
    name: "jewishtojd",
    url: "function.jewishtojd",
    spec: {
      parameters: "int $month, int $day, int $year",
      returnValue: "int",
      ref: null
    }
  },
  join: {
    name: "join",
    url: "function.join",
    spec: {
      parameters: "string $glue, array $pieces",
      returnValue: "string",
      ref: {
        name: "implode()",
        url: "function.implode"
      }
    }
  },
  jpeg2wbmp: {
    name: "jpeg2wbmp",
    url: "function.jpeg2wbmp",
    spec: {
      parameters: "string $jpegname, string $wbmpname, int $dest_height, int $dest_width, int $threshold",
      returnValue: "bool",
      ref: null
    }
  },
  json_decode: {
    name: "json_decode",
    url: "function.json-decode",
    spec: {
      parameters: "string $json [, bool $assoc = false [, int $depth = 512 [, int $options = 0 ]]]",
      returnValue: "mixed",
      ref: null
    }
  },
  json_encode: {
    name: "json_encode",
    url: "function.json-encode",
    spec: {
      parameters: "mixed $value [, int $options = 0 [, int $depth = 512 ]]",
      returnValue: "string",
      ref: null
    }
  },
  json_last_error: {
    name: "json_last_error",
    url: "function.json-last-error",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  json_last_error_msg: {
    name: "json_last_error_msg",
    url: "function.json-last-error-msg",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  judy_type: {
    name: "judy_type",
    url: "function.judy-type",
    spec: {
      parameters: "Judy $array",
      returnValue: "int",
      ref: null
    }
  },
  judy_version: {
    name: "judy_version",
    url: "function.judy-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  juliantojd: {
    name: "juliantojd",
    url: "function.juliantojd",
    spec: {
      parameters: "int $month, int $day, int $year",
      returnValue: "int",
      ref: null
    }
  }
};
