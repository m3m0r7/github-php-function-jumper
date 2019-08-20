functions.g = {
  gc_collect_cycles: {
    name: "gc_collect_cycles",
    url: "function.gc-collect-cycles",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  gc_disable: {
    name: "gc_disable",
    url: "function.gc-disable",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  gc_enable: {
    name: "gc_enable",
    url: "function.gc-enable",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  gc_enabled: {
    name: "gc_enabled",
    url: "function.gc-enabled",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  gc_mem_caches: {
    name: "gc_mem_caches",
    url: "function.gc-mem-caches",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  gc_status: {
    name: "gc_status",
    url: "function.gc-status",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  gd_info: {
    name: "gd_info",
    url: "function.gd-info",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  geoip_asnum_by_name: {
    name: "geoip_asnum_by_name",
    url: "function.geoip-asnum-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  geoip_continent_code_by_name: {
    name: "geoip_continent_code_by_name",
    url: "function.geoip-continent-code-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  geoip_country_code3_by_name: {
    name: "geoip_country_code3_by_name",
    url: "function.geoip-country-code3-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  geoip_country_code_by_name: {
    name: "geoip_country_code_by_name",
    url: "function.geoip-country-code-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  geoip_country_name_by_name: {
    name: "geoip_country_name_by_name",
    url: "function.geoip-country-name-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  geoip_database_info: {
    name: "geoip_database_info",
    url: "function.geoip-database-info",
    spec: {
      parameters: "[ int $database = GEOIP_COUNTRY_EDITION ]",
      returnValue: "string",
      ref: null
    }
  },
  geoip_db_avail: {
    name: "geoip_db_avail",
    url: "function.geoip-db-avail",
    spec: {
      parameters: "int $database",
      returnValue: "bool",
      ref: null
    }
  },
  geoip_db_filename: {
    name: "geoip_db_filename",
    url: "function.geoip-db-filename",
    spec: {
      parameters: "int $database",
      returnValue: "string",
      ref: null
    }
  },
  geoip_db_get_all_info: {
    name: "geoip_db_get_all_info",
    url: "function.geoip-db-get-all-info",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  geoip_domain_by_name: {
    name: "geoip_domain_by_name",
    url: "function.geoip-domain-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  geoip_id_by_name: {
    name: "geoip_id_by_name",
    url: "function.geoip-id-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "int",
      ref: null
    }
  },
  geoip_isp_by_name: {
    name: "geoip_isp_by_name",
    url: "function.geoip-isp-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  geoip_netspeedcell_by_name: {
    name: "geoip_netspeedcell_by_name",
    url: "function.geoip-netspeedcell-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  geoip_org_by_name: {
    name: "geoip_org_by_name",
    url: "function.geoip-org-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  geoip_record_by_name: {
    name: "geoip_record_by_name",
    url: "function.geoip-record-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "array",
      ref: null
    }
  },
  geoip_region_by_name: {
    name: "geoip_region_by_name",
    url: "function.geoip-region-by-name",
    spec: {
      parameters: "string $hostname",
      returnValue: "array",
      ref: null
    }
  },
  geoip_region_name_by_code: {
    name: "geoip_region_name_by_code",
    url: "function.geoip-region-name-by-code",
    spec: {
      parameters: "string $country_code, string $region_code",
      returnValue: "string",
      ref: null
    }
  },
  geoip_setup_custom_directory: {
    name: "geoip_setup_custom_directory",
    url: "function.geoip-setup-custom-directory",
    spec: {
      parameters: "string $path",
      returnValue: "void",
      ref: null
    }
  },
  geoip_time_zone_by_country_and_region: {
    name: "geoip_time_zone_by_country_and_region",
    url: "function.geoip-time-zone-by-country-and-region",
    spec: {
      parameters: "string $country_code [, string $region_code ]",
      returnValue: "string",
      ref: null
    }
  },
  getallheaders: {
    name: "getallheaders",
    url: "function.getallheaders",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  getcwd: {
    name: "getcwd",
    url: "function.getcwd",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  getdate: {
    name: "getdate",
    url: "function.getdate",
    spec: {
      parameters: "[ int $timestamp = time() ]",
      returnValue: "array",
      ref: null
    }
  },
  getenv: {
    name: "getenv",
    url: "function.getenv",
    spec: {
      parameters: "string $varname [, bool $local_only = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  gethostbyaddr: {
    name: "gethostbyaddr",
    url: "function.gethostbyaddr",
    spec: {
      parameters: "string $ip_address",
      returnValue: "string",
      ref: null
    }
  },
  gethostbyname: {
    name: "gethostbyname",
    url: "function.gethostbyname",
    spec: {
      parameters: "string $hostname",
      returnValue: "string",
      ref: null
    }
  },
  gethostbynamel: {
    name: "gethostbynamel",
    url: "function.gethostbynamel",
    spec: {
      parameters: "string $hostname",
      returnValue: "array",
      ref: null
    }
  },
  gethostname: {
    name: "gethostname",
    url: "function.gethostname",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  getimagesize: {
    name: "getimagesize",
    url: "function.getimagesize",
    spec: {
      parameters: "string $filename [, array &$imageinfo ]",
      returnValue: "array",
      ref: null
    }
  },
  getimagesizefromstring: {
    name: "getimagesizefromstring",
    url: "function.getimagesizefromstring",
    spec: {
      parameters: "string $imagedata [, array &$imageinfo ]",
      returnValue: "array",
      ref: null
    }
  },
  getlastmod: {
    name: "getlastmod",
    url: "function.getlastmod",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  getmxrr: {
    name: "getmxrr",
    url: "function.getmxrr",
    spec: {
      parameters: "string $hostname, array &$mxhosts [, array &$weight ]",
      returnValue: "bool",
      ref: null
    }
  },
  getmygid: {
    name: "getmygid",
    url: "function.getmygid",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  getmyinode: {
    name: "getmyinode",
    url: "function.getmyinode",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  getmypid: {
    name: "getmypid",
    url: "function.getmypid",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  getmyuid: {
    name: "getmyuid",
    url: "function.getmyuid",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  getopt: {
    name: "getopt",
    url: "function.getopt",
    spec: {
      parameters: "string $options [, array $longopts [, int &$optind ]]",
      returnValue: "array",
      ref: null
    }
  },
  getprotobyname: {
    name: "getprotobyname",
    url: "function.getprotobyname",
    spec: {
      parameters: "string $name",
      returnValue: "int",
      ref: null
    }
  },
  getprotobynumber: {
    name: "getprotobynumber",
    url: "function.getprotobynumber",
    spec: {
      parameters: "int $number",
      returnValue: "string",
      ref: null
    }
  },
  getrandmax: {
    name: "getrandmax",
    url: "function.getrandmax",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  getrusage: {
    name: "getrusage",
    url: "function.getrusage",
    spec: {
      parameters: "[ int $who = 0 ]",
      returnValue: "array",
      ref: null
    }
  },
  getservbyname: {
    name: "getservbyname",
    url: "function.getservbyname",
    spec: {
      parameters: "string $service, string $protocol",
      returnValue: "int",
      ref: null
    }
  },
  getservbyport: {
    name: "getservbyport",
    url: "function.getservbyport",
    spec: {
      parameters: "int $port, string $protocol",
      returnValue: "string",
      ref: null
    }
  },
  getsession: {
    name: "getSession",
    url: "function.mysql-xdevapi-getsession",
    spec: {
      parameters: "",
      returnValue: null,
      ref: null
    }
  },
  gettext: {
    name: "gettext",
    url: "function.gettext",
    spec: {
      parameters: "string $message",
      returnValue: "string",
      ref: null
    }
  },
  gettimeofday: {
    name: "gettimeofday",
    url: "function.gettimeofday",
    spec: {
      parameters: "[ bool $return_float = FALSE ]",
      returnValue: "mixed",
      ref: null
    }
  },
  gettype: {
    name: "gettype",
    url: "function.gettype",
    spec: {
      parameters: "mixed $var",
      returnValue: "string",
      ref: null
    }
  },
  get_browser: {
    name: "get_browser",
    url: "function.get-browser",
    spec: {
      parameters: "[ string $user_agent [, bool $return_array = FALSE ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  get_called_class: {
    name: "get_called_class",
    url: "function.get-called-class",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  get_cfg_var: {
    name: "get_cfg_var",
    url: "function.get-cfg-var",
    spec: {
      parameters: "string $option",
      returnValue: "mixed",
      ref: null
    }
  },
  get_class: {
    name: "get_class",
    url: "function.get-class",
    spec: {
      parameters: "[ object $object ]",
      returnValue: "string",
      ref: null
    }
  },
  get_class_methods: {
    name: "get_class_methods",
    url: "function.get-class-methods",
    spec: {
      parameters: "mixed $class_name",
      returnValue: "array",
      ref: null
    }
  },
  get_class_vars: {
    name: "get_class_vars",
    url: "function.get-class-vars",
    spec: {
      parameters: "string $class_name",
      returnValue: "array",
      ref: null
    }
  },
  get_current_user: {
    name: "get_current_user",
    url: "function.get-current-user",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  get_declared_classes: {
    name: "get_declared_classes",
    url: "function.get-declared-classes",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  get_declared_interfaces: {
    name: "get_declared_interfaces",
    url: "function.get-declared-interfaces",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  get_declared_traits: {
    name: "get_declared_traits",
    url: "function.get-declared-traits",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  get_defined_constants: {
    name: "get_defined_constants",
    url: "function.get-defined-constants",
    spec: {
      parameters: "[ bool $categorize = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  get_defined_functions: {
    name: "get_defined_functions",
    url: "function.get-defined-functions",
    spec: {
      parameters: "[ bool $exclude_disabled = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  get_defined_vars: {
    name: "get_defined_vars",
    url: "function.get-defined-vars",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  get_extension_funcs: {
    name: "get_extension_funcs",
    url: "function.get-extension-funcs",
    spec: {
      parameters: "string $module_name",
      returnValue: "array",
      ref: null
    }
  },
  get_headers: {
    name: "get_headers",
    url: "function.get-headers",
    spec: {
      parameters: "string $url [, int $format = 0 ]",
      returnValue: "array",
      ref: null
    }
  },
  get_html_translation_table: {
    name: "get_html_translation_table",
    url: "function.get-html-translation-table",
    spec: {
      parameters: "[ int $table = HTML_SPECIALCHARS [, int $flags = ENT_COMPAT | ENT_HTML401 [, string $encoding = \"UTF-8\" ]]]",
      returnValue: "array",
      ref: null
    }
  },
  get_included_files: {
    name: "get_included_files",
    url: "function.get-included-files",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  get_include_path: {
    name: "get_include_path",
    url: "function.get-include-path",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  get_loaded_extensions: {
    name: "get_loaded_extensions",
    url: "function.get-loaded-extensions",
    spec: {
      parameters: "[ bool $zend_extensions = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  get_magic_quotes_gpc: {
    name: "get_magic_quotes_gpc",
    url: "function.get-magic-quotes-gpc",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  get_magic_quotes_runtime: {
    name: "get_magic_quotes_runtime",
    url: "function.get-magic-quotes-runtime",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  get_meta_tags: {
    name: "get_meta_tags",
    url: "function.get-meta-tags",
    spec: {
      parameters: "string $filename [, bool $use_include_path = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  get_object_vars: {
    name: "get_object_vars",
    url: "function.get-object-vars",
    spec: {
      parameters: "object $object",
      returnValue: "array",
      ref: null
    }
  },
  get_parent_class: {
    name: "get_parent_class",
    url: "function.get-parent-class",
    spec: {
      parameters: "[ mixed $object ]",
      returnValue: "string",
      ref: null
    }
  },
  get_required_files: {
    name: "get_required_files",
    url: "function.get-required-files",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: {
        name: "get_included_files()",
        url: "function.get-included-files"
      }
    }
  },
  get_resources: {
    name: "get_resources",
    url: "function.get-resources",
    spec: {
      parameters: "[ string $type ]",
      returnValue: "array",
      ref: null
    }
  },
  get_resource_type: {
    name: "get_resource_type",
    url: "function.get-resource-type",
    spec: {
      parameters: "resource $handle",
      returnValue: "string",
      ref: null
    }
  },
  glob: {
    name: "glob",
    url: "function.glob",
    spec: {
      parameters: "string $pattern [, int $flags = 0 ]",
      returnValue: "array",
      ref: null
    }
  },
  gmdate: {
    name: "gmdate",
    url: "function.gmdate",
    spec: {
      parameters: "string $format [, int $timestamp = time() ]",
      returnValue: "string",
      ref: null
    }
  },
  gmmktime: {
    name: "gmmktime",
    url: "function.gmmktime",
    spec: {
      parameters: "[ int $hour = gmdate(\"H\") [, int $minute = gmdate(\"i\") [, int $second = gmdate(\"s\") [, int $month = gmdate(\"n\") [, int $day = gmdate(\"j\") [, int $year = gmdate(\"Y\") [, int $is_dst = -1 ]]]]]]]",
      returnValue: "int",
      ref: null
    }
  },
  gmp_abs: {
    name: "gmp_abs",
    url: "function.gmp-abs",
    spec: {
      parameters: "GMP $a",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_add: {
    name: "gmp_add",
    url: "function.gmp-add",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_and: {
    name: "gmp_and",
    url: "function.gmp-and",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_binomial: {
    name: "gmp_binomial",
    url: "function.gmp-binomial",
    spec: {
      parameters: "mixed $n, int $k",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_clrbit: {
    name: "gmp_clrbit",
    url: "function.gmp-clrbit",
    spec: {
      parameters: "GMP $a, int $index",
      returnValue: "void",
      ref: null
    }
  },
  gmp_cmp: {
    name: "gmp_cmp",
    url: "function.gmp-cmp",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "int",
      ref: null
    }
  },
  gmp_com: {
    name: "gmp_com",
    url: "function.gmp-com",
    spec: {
      parameters: "GMP $a",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_div: {
    name: "gmp_div",
    url: "function.gmp-div",
    spec: {
      parameters: "GMP $a, GMP $b [, int $round = GMP_ROUND_ZERO ]",
      returnValue: "GMP",
      ref: {
        name: "gmp_div_q()",
        url: "function.gmp-div-q"
      }
    }
  },
  gmp_divexact: {
    name: "gmp_divexact",
    url: "function.gmp-divexact",
    spec: {
      parameters: "GMP $n, GMP $d",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_div_q: {
    name: "gmp_div_q",
    url: "function.gmp-div-q",
    spec: {
      parameters: "GMP $a, GMP $b [, int $round = GMP_ROUND_ZERO ]",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_div_qr: {
    name: "gmp_div_qr",
    url: "function.gmp-div-qr",
    spec: {
      parameters: "GMP $n, GMP $d [, int $round = GMP_ROUND_ZERO ]",
      returnValue: "array",
      ref: null
    }
  },
  gmp_div_r: {
    name: "gmp_div_r",
    url: "function.gmp-div-r",
    spec: {
      parameters: "GMP $n, GMP $d [, int $round = GMP_ROUND_ZERO ]",
      returnValue: "resource",
      ref: null
    }
  },
  gmp_export: {
    name: "gmp_export",
    url: "function.gmp-export",
    spec: {
      parameters: "GMP $gmpnumber [, int $word_size = 1 [, int $options = GMP_MSW_FIRST | GMP_NATIVE_ENDIAN ]]",
      returnValue: "string",
      ref: null
    }
  },
  gmp_fact: {
    name: "gmp_fact",
    url: "function.gmp-fact",
    spec: {
      parameters: "mixed $a",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_gcd: {
    name: "gmp_gcd",
    url: "function.gmp-gcd",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_gcdext: {
    name: "gmp_gcdext",
    url: "function.gmp-gcdext",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "array",
      ref: null
    }
  },
  gmp_hamdist: {
    name: "gmp_hamdist",
    url: "function.gmp-hamdist",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "int",
      ref: null
    }
  },
  gmp_import: {
    name: "gmp_import",
    url: "function.gmp-import",
    spec: {
      parameters: "string $data [, int $word_size = 1 [, int $options = GMP_MSW_FIRST | GMP_NATIVE_ENDIAN ]]",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_init: {
    name: "gmp_init",
    url: "function.gmp-init",
    spec: {
      parameters: "mixed $number [, int $base = 0 ]",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_intval: {
    name: "gmp_intval",
    url: "function.gmp-intval",
    spec: {
      parameters: "GMP $gmpnumber",
      returnValue: "int",
      ref: null
    }
  },
  gmp_invert: {
    name: "gmp_invert",
    url: "function.gmp-invert",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_jacobi: {
    name: "gmp_jacobi",
    url: "function.gmp-jacobi",
    spec: {
      parameters: "GMP $a, GMP $p",
      returnValue: "int",
      ref: null
    }
  },
  gmp_kronecker: {
    name: "gmp_kronecker",
    url: "function.gmp-kronecker",
    spec: {
      parameters: "mixed $a, mixed $b",
      returnValue: "int",
      ref: null
    }
  },
  gmp_lcm: {
    name: "gmp_lcm",
    url: "function.gmp-lcm",
    spec: {
      parameters: "mixed $a, mixed $b",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_legendre: {
    name: "gmp_legendre",
    url: "function.gmp-legendre",
    spec: {
      parameters: "GMP $a, GMP $p",
      returnValue: "int",
      ref: null
    }
  },
  gmp_mod: {
    name: "gmp_mod",
    url: "function.gmp-mod",
    spec: {
      parameters: "GMP $n, GMP $d",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_mul: {
    name: "gmp_mul",
    url: "function.gmp-mul",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_neg: {
    name: "gmp_neg",
    url: "function.gmp-neg",
    spec: {
      parameters: "GMP $a",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_nextprime: {
    name: "gmp_nextprime",
    url: "function.gmp-nextprime",
    spec: {
      parameters: "int $a",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_or: {
    name: "gmp_or",
    url: "function.gmp-or",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_perfect_power: {
    name: "gmp_perfect_power",
    url: "function.gmp-perfect-power",
    spec: {
      parameters: "mixed $a",
      returnValue: "bool",
      ref: null
    }
  },
  gmp_perfect_square: {
    name: "gmp_perfect_square",
    url: "function.gmp-perfect-square",
    spec: {
      parameters: "GMP $a",
      returnValue: "bool",
      ref: null
    }
  },
  gmp_popcount: {
    name: "gmp_popcount",
    url: "function.gmp-popcount",
    spec: {
      parameters: "GMP $a",
      returnValue: "int",
      ref: null
    }
  },
  gmp_pow: {
    name: "gmp_pow",
    url: "function.gmp-pow",
    spec: {
      parameters: "GMP $base, int $exp",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_powm: {
    name: "gmp_powm",
    url: "function.gmp-powm",
    spec: {
      parameters: "GMP $base, GMP $exp, GMP $mod",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_prob_prime: {
    name: "gmp_prob_prime",
    url: "function.gmp-prob-prime",
    spec: {
      parameters: "GMP $a [, int $reps = 10 ]",
      returnValue: "int",
      ref: null
    }
  },
  gmp_random: {
    name: "gmp_random",
    url: "function.gmp-random",
    spec: {
      parameters: "[ int $limiter = 20 ]",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_random_bits: {
    name: "gmp_random_bits",
    url: "function.gmp-random-bits",
    spec: {
      parameters: "int $bits",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_random_range: {
    name: "gmp_random_range",
    url: "function.gmp-random-range",
    spec: {
      parameters: "GMP $min, GMP $max",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_random_seed: {
    name: "gmp_random_seed",
    url: "function.gmp-random-seed",
    spec: {
      parameters: "mixed $seed",
      returnValue: "void",
      ref: null
    }
  },
  gmp_root: {
    name: "gmp_root",
    url: "function.gmp-root",
    spec: {
      parameters: "GMP $a, int $nth",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_rootrem: {
    name: "gmp_rootrem",
    url: "function.gmp-rootrem",
    spec: {
      parameters: "GMP $a, int $nth",
      returnValue: "array",
      ref: null
    }
  },
  gmp_scan0: {
    name: "gmp_scan0",
    url: "function.gmp-scan0",
    spec: {
      parameters: "GMP $a, int $start",
      returnValue: "int",
      ref: null
    }
  },
  gmp_scan1: {
    name: "gmp_scan1",
    url: "function.gmp-scan1",
    spec: {
      parameters: "GMP $a, int $start",
      returnValue: "int",
      ref: null
    }
  },
  gmp_setbit: {
    name: "gmp_setbit",
    url: "function.gmp-setbit",
    spec: {
      parameters: "GMP $a, int $index [, bool $bit_on = TRUE ]",
      returnValue: "void",
      ref: null
    }
  },
  gmp_sign: {
    name: "gmp_sign",
    url: "function.gmp-sign",
    spec: {
      parameters: "GMP $a",
      returnValue: "int",
      ref: null
    }
  },
  gmp_sqrt: {
    name: "gmp_sqrt",
    url: "function.gmp-sqrt",
    spec: {
      parameters: "GMP $a",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_sqrtrem: {
    name: "gmp_sqrtrem",
    url: "function.gmp-sqrtrem",
    spec: {
      parameters: "GMP $a",
      returnValue: "array",
      ref: null
    }
  },
  gmp_strval: {
    name: "gmp_strval",
    url: "function.gmp-strval",
    spec: {
      parameters: "GMP $gmpnumber [, int $base = 10 ]",
      returnValue: "string",
      ref: null
    }
  },
  gmp_sub: {
    name: "gmp_sub",
    url: "function.gmp-sub",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "GMP",
      ref: null
    }
  },
  gmp_testbit: {
    name: "gmp_testbit",
    url: "function.gmp-testbit",
    spec: {
      parameters: "GMP $a, int $index",
      returnValue: "bool",
      ref: null
    }
  },
  gmp_xor: {
    name: "gmp_xor",
    url: "function.gmp-xor",
    spec: {
      parameters: "GMP $a, GMP $b",
      returnValue: "GMP",
      ref: null
    }
  },
  gmstrftime: {
    name: "gmstrftime",
    url: "function.gmstrftime",
    spec: {
      parameters: "string $format [, int $timestamp = time() ]",
      returnValue: "string",
      ref: null
    }
  },
  gnupg_adddecryptkey: {
    name: "gnupg_adddecryptkey",
    url: "function.gnupg-adddecryptkey",
    spec: {
      parameters: "resource $identifier, string $fingerprint, string $passphrase",
      returnValue: "bool",
      ref: null
    }
  },
  gnupg_addencryptkey: {
    name: "gnupg_addencryptkey",
    url: "function.gnupg-addencryptkey",
    spec: {
      parameters: "resource $identifier, string $fingerprint",
      returnValue: "bool",
      ref: null
    }
  },
  gnupg_addsignkey: {
    name: "gnupg_addsignkey",
    url: "function.gnupg-addsignkey",
    spec: {
      parameters: "resource $identifier, string $fingerprint [, string $passphrase ]",
      returnValue: "bool",
      ref: null
    }
  },
  gnupg_cleardecryptkeys: {
    name: "gnupg_cleardecryptkeys",
    url: "function.gnupg-cleardecryptkeys",
    spec: {
      parameters: "resource $identifier",
      returnValue: "bool",
      ref: null
    }
  },
  gnupg_clearencryptkeys: {
    name: "gnupg_clearencryptkeys",
    url: "function.gnupg-clearencryptkeys",
    spec: {
      parameters: "resource $identifier",
      returnValue: "bool",
      ref: null
    }
  },
  gnupg_clearsignkeys: {
    name: "gnupg_clearsignkeys",
    url: "function.gnupg-clearsignkeys",
    spec: {
      parameters: "resource $identifier",
      returnValue: "bool",
      ref: null
    }
  },
  gnupg_decrypt: {
    name: "gnupg_decrypt",
    url: "function.gnupg-decrypt",
    spec: {
      parameters: "resource $identifier, string $text",
      returnValue: "string",
      ref: null
    }
  },
  gnupg_decryptverify: {
    name: "gnupg_decryptverify",
    url: "function.gnupg-decryptverify",
    spec: {
      parameters: "resource $identifier, string $text, string &$plaintext",
      returnValue: "array",
      ref: null
    }
  },
  gnupg_encrypt: {
    name: "gnupg_encrypt",
    url: "function.gnupg-encrypt",
    spec: {
      parameters: "resource $identifier, string $plaintext",
      returnValue: "string",
      ref: null
    }
  },
  gnupg_encryptsign: {
    name: "gnupg_encryptsign",
    url: "function.gnupg-encryptsign",
    spec: {
      parameters: "resource $identifier, string $plaintext",
      returnValue: "string",
      ref: null
    }
  },
  gnupg_export: {
    name: "gnupg_export",
    url: "function.gnupg-export",
    spec: {
      parameters: "resource $identifier, string $fingerprint",
      returnValue: "string",
      ref: null
    }
  },
  gnupg_geterror: {
    name: "gnupg_geterror",
    url: "function.gnupg-geterror",
    spec: {
      parameters: "resource $identifier",
      returnValue: "string",
      ref: null
    }
  },
  gnupg_getprotocol: {
    name: "gnupg_getprotocol",
    url: "function.gnupg-getprotocol",
    spec: {
      parameters: "resource $identifier",
      returnValue: "int",
      ref: null
    }
  },
  gnupg_import: {
    name: "gnupg_import",
    url: "function.gnupg-import",
    spec: {
      parameters: "resource $identifier, string $keydata",
      returnValue: "array",
      ref: null
    }
  },
  gnupg_init: {
    name: "gnupg_init",
    url: "function.gnupg-init",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  gnupg_keyinfo: {
    name: "gnupg_keyinfo",
    url: "function.gnupg-keyinfo",
    spec: {
      parameters: "resource $identifier, string $pattern",
      returnValue: "array",
      ref: null
    }
  },
  gnupg_setarmor: {
    name: "gnupg_setarmor",
    url: "function.gnupg-setarmor",
    spec: {
      parameters: "resource $identifier, int $armor",
      returnValue: "bool",
      ref: null
    }
  },
  gnupg_seterrormode: {
    name: "gnupg_seterrormode",
    url: "function.gnupg-seterrormode",
    spec: {
      parameters: "resource $identifier, int $errormode",
      returnValue: "void",
      ref: null
    }
  },
  gnupg_setsignmode: {
    name: "gnupg_setsignmode",
    url: "function.gnupg-setsignmode",
    spec: {
      parameters: "resource $identifier, int $signmode",
      returnValue: "bool",
      ref: null
    }
  },
  gnupg_sign: {
    name: "gnupg_sign",
    url: "function.gnupg-sign",
    spec: {
      parameters: "resource $identifier, string $plaintext",
      returnValue: "string",
      ref: null
    }
  },
  gnupg_verify: {
    name: "gnupg_verify",
    url: "function.gnupg-verify",
    spec: {
      parameters: "resource $identifier, string $signed_text, string $signature [, string &$plaintext ]",
      returnValue: "array",
      ref: null
    }
  },
  gopher_parsedir: {
    name: "gopher_parsedir",
    url: "function.gopher-parsedir",
    spec: {
      parameters: "string $dirent",
      returnValue: "array",
      ref: null
    }
  },
  grapheme_extract: {
    name: "grapheme_extract",
    url: "function.grapheme-extract",
    spec: {
      parameters: "string $haystack, int $size [, int $extract_type [, int $start = 0 [, int &$next ]]]",
      returnValue: "string",
      ref: null
    }
  },
  grapheme_stripos: {
    name: "grapheme_stripos",
    url: "function.grapheme-stripos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  grapheme_stristr: {
    name: "grapheme_stristr",
    url: "function.grapheme-stristr",
    spec: {
      parameters: "string $haystack, string $needle [, bool $before_needle = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  grapheme_strlen: {
    name: "grapheme_strlen",
    url: "function.grapheme-strlen",
    spec: {
      parameters: "string $input",
      returnValue: "int",
      ref: null
    }
  },
  grapheme_strpos: {
    name: "grapheme_strpos",
    url: "function.grapheme-strpos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  grapheme_strripos: {
    name: "grapheme_strripos",
    url: "function.grapheme-strripos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  grapheme_strrpos: {
    name: "grapheme_strrpos",
    url: "function.grapheme-strrpos",
    spec: {
      parameters: "string $haystack, string $needle [, int $offset = 0 ]",
      returnValue: "int",
      ref: null
    }
  },
  grapheme_strstr: {
    name: "grapheme_strstr",
    url: "function.grapheme-strstr",
    spec: {
      parameters: "string $haystack, string $needle [, bool $before_needle = FALSE ]",
      returnValue: "string",
      ref: null
    }
  },
  grapheme_substr: {
    name: "grapheme_substr",
    url: "function.grapheme-substr",
    spec: {
      parameters: "string $string, int $start [, int $length ]",
      returnValue: "string",
      ref: null
    }
  },
  gregoriantojd: {
    name: "gregoriantojd",
    url: "function.gregoriantojd",
    spec: {
      parameters: "int $month, int $day, int $year",
      returnValue: "int",
      ref: null
    }
  },
  gupnp_context_get_host_ip: {
    name: "gupnp_context_get_host_ip",
    url: "function.gupnp-context-get-host-ip",
    spec: {
      parameters: "resource $context",
      returnValue: "string",
      ref: null
    }
  },
  gupnp_context_get_port: {
    name: "gupnp_context_get_port",
    url: "function.gupnp-context-get-port",
    spec: {
      parameters: "resource $context",
      returnValue: "int",
      ref: null
    }
  },
  gupnp_context_get_subscription_timeout: {
    name: "gupnp_context_get_subscription_timeout",
    url: "function.gupnp-context-get-subscription-timeout",
    spec: {
      parameters: "resource $context",
      returnValue: "int",
      ref: null
    }
  },
  gupnp_context_host_path: {
    name: "gupnp_context_host_path",
    url: "function.gupnp-context-host-path",
    spec: {
      parameters: "resource $context, string $local_path, string $server_path",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_context_new: {
    name: "gupnp_context_new",
    url: "function.gupnp-context-new",
    spec: {
      parameters: "[ string $host_ip [, int $port = 0 ]]",
      returnValue: "resource",
      ref: null
    }
  },
  gupnp_context_set_subscription_timeout: {
    name: "gupnp_context_set_subscription_timeout",
    url: "function.gupnp-context-set-subscription-timeout",
    spec: {
      parameters: "resource $context, int $timeout",
      returnValue: "void",
      ref: null
    }
  },
  gupnp_context_timeout_add: {
    name: "gupnp_context_timeout_add",
    url: "function.gupnp-context-timeout-add",
    spec: {
      parameters: "resource $context, int $timeout, mixed $callback [, mixed $arg ]",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_context_unhost_path: {
    name: "gupnp_context_unhost_path",
    url: "function.gupnp-context-unhost-path",
    spec: {
      parameters: "resource $context, string $server_path",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_control_point_browse_start: {
    name: "gupnp_control_point_browse_start",
    url: "function.gupnp-control-point-browse-start",
    spec: {
      parameters: "resource $cpoint",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_control_point_browse_stop: {
    name: "gupnp_control_point_browse_stop",
    url: "function.gupnp-control-point-browse-stop",
    spec: {
      parameters: "resource $cpoint",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_control_point_callback_set: {
    name: "gupnp_control_point_callback_set",
    url: "function.gupnp-control-point-callback-set",
    spec: {
      parameters: "resource $cpoint, int $signal, mixed $callback [, mixed $arg ]",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_control_point_new: {
    name: "gupnp_control_point_new",
    url: "function.gupnp-control-point-new",
    spec: {
      parameters: "resource $context, string $target",
      returnValue: "resource",
      ref: null
    }
  },
  gupnp_device_action_callback_set: {
    name: "gupnp_device_action_callback_set",
    url: "function.gupnp-device-action-callback-set",
    spec: {
      parameters: "resource $root_device, int $signal, string $action_name, mixed $callback [, mixed $arg ]",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_device_info_get: {
    name: "gupnp_device_info_get",
    url: "function.gupnp-device-info-get",
    spec: {
      parameters: "resource $root_device",
      returnValue: "array",
      ref: null
    }
  },
  gupnp_device_info_get_service: {
    name: "gupnp_device_info_get_service",
    url: "function.gupnp-device-info-get-service",
    spec: {
      parameters: "resource $root_device, string $type",
      returnValue: "resource",
      ref: null
    }
  },
  gupnp_root_device_get_available: {
    name: "gupnp_root_device_get_available",
    url: "function.gupnp-root-device-get-available",
    spec: {
      parameters: "resource $root_device",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_root_device_get_relative_location: {
    name: "gupnp_root_device_get_relative_location",
    url: "function.gupnp-root-device-get-relative-location",
    spec: {
      parameters: "resource $root_device",
      returnValue: "string",
      ref: null
    }
  },
  gupnp_root_device_new: {
    name: "gupnp_root_device_new",
    url: "function.gupnp-root-device-new",
    spec: {
      parameters: "resource $context, string $location, string $description_dir",
      returnValue: "resource",
      ref: null
    }
  },
  gupnp_root_device_set_available: {
    name: "gupnp_root_device_set_available",
    url: "function.gupnp-root-device-set-available",
    spec: {
      parameters: "resource $root_device, bool $available",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_root_device_start: {
    name: "gupnp_root_device_start",
    url: "function.gupnp-root-device-start",
    spec: {
      parameters: "resource $root_device",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_root_device_stop: {
    name: "gupnp_root_device_stop",
    url: "function.gupnp-root-device-stop",
    spec: {
      parameters: "resource $root_device",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_action_get: {
    name: "gupnp_service_action_get",
    url: "function.gupnp-service-action-get",
    spec: {
      parameters: "resource $action, string $name, int $type",
      returnValue: "mixed",
      ref: null
    }
  },
  gupnp_service_action_return: {
    name: "gupnp_service_action_return",
    url: "function.gupnp-service-action-return",
    spec: {
      parameters: "resource $action",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_action_return_error: {
    name: "gupnp_service_action_return_error",
    url: "function.gupnp-service-action-return-error",
    spec: {
      parameters: "resource $action, int $error_code [, string $error_description ]",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_action_set: {
    name: "gupnp_service_action_set",
    url: "function.gupnp-service-action-set",
    spec: {
      parameters: "resource $action, string $name, int $type, mixed $value",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_freeze_notify: {
    name: "gupnp_service_freeze_notify",
    url: "function.gupnp-service-freeze-notify",
    spec: {
      parameters: "resource $service",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_info_get: {
    name: "gupnp_service_info_get",
    url: "function.gupnp-service-info-get",
    spec: {
      parameters: "resource $proxy",
      returnValue: "array",
      ref: null
    }
  },
  gupnp_service_info_get_introspection: {
    name: "gupnp_service_info_get_introspection",
    url: "function.gupnp-service-info-get-introspection",
    spec: {
      parameters: "resource $proxy [, mixed $callback [, mixed $arg ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  gupnp_service_introspection_get_state_variable: {
    name: "gupnp_service_introspection_get_state_variable",
    url: "function.gupnp-service-introspection-get-state-variable",
    spec: {
      parameters: "resource $introspection, string $variable_name",
      returnValue: "array",
      ref: null
    }
  },
  gupnp_service_notify: {
    name: "gupnp_service_notify",
    url: "function.gupnp-service-notify",
    spec: {
      parameters: "resource $service, string $name, int $type, mixed $value",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_proxy_action_get: {
    name: "gupnp_service_proxy_action_get",
    url: "function.gupnp-service-proxy-action-get",
    spec: {
      parameters: "resource $proxy, string $action, string $name, int $type",
      returnValue: "mixed",
      ref: null
    }
  },
  gupnp_service_proxy_action_set: {
    name: "gupnp_service_proxy_action_set",
    url: "function.gupnp-service-proxy-action-set",
    spec: {
      parameters: "resource $proxy, string $action, string $name, mixed $value, int $type",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_proxy_add_notify: {
    name: "gupnp_service_proxy_add_notify",
    url: "function.gupnp-service-proxy-add-notify",
    spec: {
      parameters: "resource $proxy, string $value, int $type, mixed $callback [, mixed $arg ]",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_proxy_callback_set: {
    name: "gupnp_service_proxy_callback_set",
    url: "function.gupnp-service-proxy-callback-set",
    spec: {
      parameters: "resource $proxy, int $signal, mixed $callback [, mixed $arg ]",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_proxy_get_subscribed: {
    name: "gupnp_service_proxy_get_subscribed",
    url: "function.gupnp-service-proxy-get-subscribed",
    spec: {
      parameters: "resource $proxy",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_proxy_remove_notify: {
    name: "gupnp_service_proxy_remove_notify",
    url: "function.gupnp-service-proxy-remove-notify",
    spec: {
      parameters: "resource $proxy, string $value",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_proxy_send_action: {
    name: "gupnp_service_proxy_send_action",
    url: "gupnp-service-proxy-send-action",
    spec: {
      parameters: "resource $proxy, string $action, array $in_params, array $out_params",
      returnValue: "array",
      ref: null
    }
  },
  gupnp_service_proxy_set_subscribed: {
    name: "gupnp_service_proxy_set_subscribed",
    url: "function.gupnp-service-proxy-set-subscribed",
    spec: {
      parameters: "resource $proxy, bool $subscribed",
      returnValue: "bool",
      ref: null
    }
  },
  gupnp_service_thaw_notify: {
    name: "gupnp_service_thaw_notify",
    url: "function.gupnp-service-thaw-notify",
    spec: {
      parameters: "resource $service",
      returnValue: "bool",
      ref: null
    }
  },
  gzclose: {
    name: "gzclose",
    url: "function.gzclose",
    spec: {
      parameters: "resource $zp",
      returnValue: "bool",
      ref: null
    }
  },
  gzcompress: {
    name: "gzcompress",
    url: "function.gzcompress",
    spec: {
      parameters: "string $data [, int $level = -1 [, int $encoding = ZLIB_ENCODING_DEFLATE ]]",
      returnValue: "string",
      ref: null
    }
  },
  gzdecode: {
    name: "gzdecode",
    url: "function.gzdecode",
    spec: {
      parameters: "string $data [, int $length ]",
      returnValue: "string",
      ref: null
    }
  },
  gzdeflate: {
    name: "gzdeflate",
    url: "function.gzdeflate",
    spec: {
      parameters: "string $data [, int $level = -1 [, int $encoding = ZLIB_ENCODING_RAW ]]",
      returnValue: "string",
      ref: null
    }
  },
  gzencode: {
    name: "gzencode",
    url: "function.gzencode",
    spec: {
      parameters: "string $data [, int $level = -1 [, int $encoding_mode = FORCE_GZIP ]]",
      returnValue: "string",
      ref: null
    }
  },
  gzeof: {
    name: "gzeof",
    url: "function.gzeof",
    spec: {
      parameters: "resource $zp",
      returnValue: "int",
      ref: null
    }
  },
  gzfile: {
    name: "gzfile",
    url: "function.gzfile",
    spec: {
      parameters: "string $filename [, int $use_include_path = 0 ]",
      returnValue: "array",
      ref: null
    }
  },
  gzgetc: {
    name: "gzgetc",
    url: "function.gzgetc",
    spec: {
      parameters: "resource $zp",
      returnValue: "string",
      ref: null
    }
  },
  gzgets: {
    name: "gzgets",
    url: "function.gzgets",
    spec: {
      parameters: "resource $zp [, int $length ]",
      returnValue: "string",
      ref: null
    }
  },
  gzgetss: {
    name: "gzgetss",
    url: "function.gzgetss",
    spec: {
      parameters: "resource $zp, int $length [, string $allowable_tags ]",
      returnValue: "string",
      ref: null
    }
  },
  gzinflate: {
    name: "gzinflate",
    url: "function.gzinflate",
    spec: {
      parameters: "string $data [, int $length = 0 ]",
      returnValue: "string",
      ref: null
    }
  },
  gzopen: {
    name: "gzopen",
    url: "function.gzopen",
    spec: {
      parameters: "string $filename, string $mode [, int $use_include_path = 0 ]",
      returnValue: "resource",
      ref: null
    }
  },
  gzpassthru: {
    name: "gzpassthru",
    url: "function.gzpassthru",
    spec: {
      parameters: "resource $zp",
      returnValue: "int",
      ref: null
    }
  },
  gzputs: {
    name: "gzputs",
    url: "function.gzputs",
    spec: {
      parameters: "resource $zp, string $string [, int $length ]",
      returnValue: "int",
      ref: {
        name: "gzwrite()",
        url: "function.gzwrite"
      }
    }
  },
  gzread: {
    name: "gzread",
    url: "function.gzread",
    spec: {
      parameters: "resource $zp, int $length",
      returnValue: "string",
      ref: null
    }
  },
  gzrewind: {
    name: "gzrewind",
    url: "function.gzrewind",
    spec: {
      parameters: "resource $zp",
      returnValue: "bool",
      ref: null
    }
  },
  gzseek: {
    name: "gzseek",
    url: "function.gzseek",
    spec: {
      parameters: "resource $zp, int $offset [, int $whence = SEEK_SET ]",
      returnValue: "int",
      ref: null
    }
  },
  gztell: {
    name: "gztell",
    url: "function.gztell",
    spec: {
      parameters: "resource $zp",
      returnValue: "int",
      ref: null
    }
  },
  gzuncompress: {
    name: "gzuncompress",
    url: "function.gzuncompress",
    spec: {
      parameters: "string $data [, int $length = 0 ]",
      returnValue: "string",
      ref: null
    }
  },
  gzwrite: {
    name: "gzwrite",
    url: "function.gzwrite",
    spec: {
      parameters: "resource $zp, string $string [, int $length ]",
      returnValue: "int",
      ref: null
    }
  }
};
