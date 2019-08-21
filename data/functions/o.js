functions.o = {
  oauth_get_sbs: {
    name: "oauth_get_sbs",
    url: "function.oauth-get-sbs",
    spec: {
      parameters: "string $http_method, string $uri [, array $request_parameters ]",
      returnValue: "string",
      ref: null
    }
  },
  oauth_urlencode: {
    name: "oauth_urlencode",
    url: "function.oauth-urlencode",
    spec: {
      parameters: "string $uri",
      returnValue: "string",
      ref: null
    }
  },
  ob_clean: {
    name: "ob_clean",
    url: "function.ob-clean",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  ob_end_clean: {
    name: "ob_end_clean",
    url: "function.ob-end-clean",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  ob_end_flush: {
    name: "ob_end_flush",
    url: "function.ob-end-flush",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  ob_flush: {
    name: "ob_flush",
    url: "function.ob-flush",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  ob_get_clean: {
    name: "ob_get_clean",
    url: "function.ob-get-clean",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  ob_get_contents: {
    name: "ob_get_contents",
    url: "function.ob-get-contents",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  ob_get_flush: {
    name: "ob_get_flush",
    url: "function.ob-get-flush",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  ob_get_length: {
    name: "ob_get_length",
    url: "function.ob-get-length",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  ob_get_level: {
    name: "ob_get_level",
    url: "function.ob-get-level",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  ob_get_status: {
    name: "ob_get_status",
    url: "function.ob-get-status",
    spec: {
      parameters: "[ bool $full_status = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  ob_gzhandler: {
    name: "ob_gzhandler",
    url: "function.ob-gzhandler",
    spec: {
      parameters: "string $buffer, int $mode",
      returnValue: "string",
      ref: null
    }
  },
  ob_iconv_handler: {
    name: "ob_iconv_handler",
    url: "function.ob-iconv-handler",
    spec: {
      parameters: "string $contents, int $status",
      returnValue: "string",
      ref: null
    }
  },
  ob_implicit_flush: {
    name: "ob_implicit_flush",
    url: "function.ob-implicit-flush",
    spec: {
      parameters: "[ int $flag = 1 ]",
      returnValue: "void",
      ref: null
    }
  },
  ob_list_handlers: {
    name: "ob_list_handlers",
    url: "function.ob-list-handlers",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  ob_start: {
    name: "ob_start",
    url: "function.ob-start",
    spec: {
      parameters: "[ callable $output_callback = NULL [, int $chunk_size = 0 [, int $flags = PHP_OUTPUT_HANDLER_STDFLAGS ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  ob_tidyhandler: {
    name: "ob_tidyhandler",
    url: "function.ob-tidyhandler",
    spec: {
      parameters: "string $input [, int $mode ]",
      returnValue: "string",
      ref: null
    }
  },
  ocibindbyname: {
    name: "ocibindbyname",
    url: "function.ocibindbyname",
    spec: {
      parameters: "resource $statement, string $bv_name, mixed &$variable [, int $maxlength = -1 [, int $type = SQLT_CHR ]]",
      returnValue: "bool",
      ref: {
        name: "oci_bind_by_name()",
        url: "function.oci-bind-by-name"
      }
    }
  },
  ocicancel: {
    name: "ocicancel",
    url: "function.ocicancel",
    spec: {
      parameters: "resource $statement",
      returnValue: "bool",
      ref: {
        name: "oci_cancel()",
        url: "function.oci-cancel"
      }
    }
  },
  ocicloselob: {
    name: "ocicloselob",
    url: "function.ocicloselob",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: {
        name: "OCI-Lob::close()",
        url: "oci-lob.close"
      }
    }
  },
  ocicollappend: {
    name: "ocicollappend",
    url: "function.ocicollappend",
    spec: {
      parameters: "mixed $value",
      returnValue: "bool",
      ref: {
        name: "OCI-Collection::append()",
        url: "oci-collection.append"
      }
    }
  },
  ocicollassign: {
    name: "ocicollassign",
    url: "function.ocicollassign",
    spec: {
      parameters: "OCI-Collection $from",
      returnValue: "bool",
      ref: {
        name: "OCI-Collection::assign()",
        url: "oci-collection.assign"
      }
    }
  },
  ocicollassignelem: {
    name: "ocicollassignelem",
    url: "function.ocicollassignelem",
    spec: {
      parameters: "int $index, mixed $value",
      returnValue: "bool",
      ref: {
        name: "OCI-Collection::assignElem()",
        url: "oci-collection.assignelem"
      }
    }
  },
  ocicollgetelem: {
    name: "ocicollgetelem",
    url: "function.ocicollgetelem",
    spec: {
      parameters: "int $index",
      returnValue: "mixed",
      ref: {
        name: "OCI-Collection::getElem()",
        url: "oci-collection.getelem"
      }
    }
  },
  ocicollmax: {
    name: "ocicollmax",
    url: "function.ocicollmax",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: {
        name: "OCI-Collection::max()",
        url: "oci-collection.max"
      }
    }
  },
  ocicollsize: {
    name: "ocicollsize",
    url: "function.ocicollsize",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: {
        name: "OCI-Collection::size()",
        url: "oci-collection.size"
      }
    }
  },
  ocicolltrim: {
    name: "ocicolltrim",
    url: "function.ocicolltrim",
    spec: {
      parameters: "int $num",
      returnValue: "bool",
      ref: {
        name: "OCI-Collection::trim()",
        url: "oci-collection.trim"
      }
    }
  },
  ocicolumnisnull: {
    name: "ocicolumnisnull",
    url: "function.ocicolumnisnull",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "bool",
      ref: {
        name: "oci_field_is_null()",
        url: "function.oci-field-is-null"
      }
    }
  },
  ocicolumnname: {
    name: "ocicolumnname",
    url: "function.ocicolumnname",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "string",
      ref: {
        name: "oci_field_name()",
        url: "function.oci-field-name"
      }
    }
  },
  ocicolumnprecision: {
    name: "ocicolumnprecision",
    url: "function.ocicolumnprecision",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "int",
      ref: {
        name: "oci_field_precision()",
        url: "function.oci-field-precision"
      }
    }
  },
  ocicolumnscale: {
    name: "ocicolumnscale",
    url: "function.ocicolumnscale",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "int",
      ref: {
        name: "oci_field_scale()",
        url: "function.oci-field-scale"
      }
    }
  },
  ocicolumnsize: {
    name: "ocicolumnsize",
    url: "function.ocicolumnsize",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "int",
      ref: {
        name: "oci_field_size()",
        url: "function.oci-field-size"
      }
    }
  },
  ocicolumntype: {
    name: "ocicolumntype",
    url: "function.ocicolumntype",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "mixed",
      ref: {
        name: "oci_field_type()",
        url: "function.oci-field-type"
      }
    }
  },
  ocicolumntyperaw: {
    name: "ocicolumntyperaw",
    url: "function.ocicolumntyperaw",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "int",
      ref: {
        name: "oci_field_type_raw()",
        url: "function.oci-field-type-raw"
      }
    }
  },
  ocicommit: {
    name: "ocicommit",
    url: "function.ocicommit",
    spec: {
      parameters: "resource $connection",
      returnValue: "bool",
      ref: {
        name: "oci_commit()",
        url: "function.oci-commit"
      }
    }
  },
  ocidefinebyname: {
    name: "ocidefinebyname",
    url: "function.ocidefinebyname",
    spec: {
      parameters: "resource $statement, string $column_name, mixed &$variable [, int $type = SQLT_CHR ]",
      returnValue: "bool",
      ref: {
        name: "oci_define_by_name()",
        url: "function.oci-define-by-name"
      }
    }
  },
  ocierror: {
    name: "ocierror",
    url: "function.ocierror",
    spec: {
      parameters: "[ resource $resource ]",
      returnValue: "array",
      ref: {
        name: "oci_error()",
        url: "function.oci-error"
      }
    }
  },
  ociexecute: {
    name: "ociexecute",
    url: "function.ociexecute",
    spec: {
      parameters: "resource $statement [, int $mode = OCI_COMMIT_ON_SUCCESS ]",
      returnValue: "bool",
      ref: {
        name: "oci_execute()",
        url: "function.oci-execute"
      }
    }
  },
  ocifetch: {
    name: "ocifetch",
    url: "function.ocifetch",
    spec: {
      parameters: "resource $statement",
      returnValue: "bool",
      ref: {
        name: "oci_fetch()",
        url: "function.oci-fetch"
      }
    }
  },
  ocifetchinto: {
    name: "ocifetchinto",
    url: "function.ocifetchinto",
    spec: {
      parameters: "resource $statement [, int $mode ]",
      returnValue: "array",
      ref: {
        name: "oci_fetch_array()",
        url: "function.oci-fetch-array"
      }
    }
  },
  ocifetchstatement: {
    name: "ocifetchstatement",
    url: "function.ocifetchstatement",
    spec: {
      parameters: "resource $statement, array &$output [, int $skip = 0 [, int $maxrows = -1 [, int $flags = OCI_FETCHSTATEMENT_BY_COLUMN + OCI_ASSOC ]]]",
      returnValue: "int",
      ref: {
        name: "oci_fetch_all()",
        url: "function.oci-fetch-all"
      }
    }
  },
  ocifreecollection: {
    name: "ocifreecollection",
    url: "function.ocifreecollection",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: {
        name: "OCI-Collection::free()",
        url: "oci-collection.free"
      }
    }
  },
  ocifreecursor: {
    name: "ocifreecursor",
    url: "function.ocifreecursor",
    spec: {
      parameters: "resource $statement",
      returnValue: "bool",
      ref: {
        name: "oci_free_statement()",
        url: "function.oci-free-statement"
      }
    }
  },
  ocifreedesc: {
    name: "ocifreedesc",
    url: "function.ocifreedesc",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: {
        name: "OCI-Lob::free()",
        url: "oci-lob.free"
      }
    }
  },
  ocifreestatement: {
    name: "ocifreestatement",
    url: "function.ocifreestatement",
    spec: {
      parameters: "resource $statement",
      returnValue: "bool",
      ref: {
        name: "oci_free_statement()",
        url: "function.oci-free-statement"
      }
    }
  },
  ociinternaldebug: {
    name: "ociinternaldebug",
    url: "function.ociinternaldebug",
    spec: {
      parameters: "bool $onoff",
      returnValue: "void",
      ref: {
        name: "oci_internal_debug()",
        url: "function.oci-internal-debug"
      }
    }
  },
  ociloadlob: {
    name: "ociloadlob",
    url: "function.ociloadlob",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: {
        name: "OCI-Lob::load()",
        url: "oci-lob.load"
      }
    }
  },
  ocilogoff: {
    name: "ocilogoff",
    url: "function.ocilogoff",
    spec: {
      parameters: "resource $connection",
      returnValue: "bool",
      ref: {
        name: "oci_close()",
        url: "function.oci-close"
      }
    }
  },
  ocilogon: {
    name: "ocilogon",
    url: "function.ocilogon",
    spec: {
      parameters: "string $username, string $password [, string $connection_string [, string $character_set [, int $session_mode ]]]",
      returnValue: "resource",
      ref: {
        name: "oci_connect()",
        url: "function.oci-connect"
      }
    }
  },
  ocinewcollection: {
    name: "ocinewcollection",
    url: "function.ocinewcollection",
    spec: {
      parameters: "",
      returnValue: null,
      ref: {
        name: "oci_new_collection()",
        url: "function.oci-new-collection"
      }
    }
  },
  ocinewcursor: {
    name: "ocinewcursor",
    url: "function.ocinewcursor",
    spec: {
      parameters: "resource $connection",
      returnValue: "resource",
      ref: {
        name: "oci_new_cursor()",
        url: "function.oci-new-cursor"
      }
    }
  },
  ocinewdescriptor: {
    name: "ocinewdescriptor",
    url: "function.ocinewdescriptor",
    spec: {
      parameters: "",
      returnValue: null,
      ref: {
        name: "oci_new_descriptor()",
        url: "function.oci-new-descriptor"
      }
    }
  },
  ocinlogon: {
    name: "ocinlogon",
    url: "function.ocinlogon",
    spec: {
      parameters: "string $username, string $password [, string $connection_string [, string $character_set [, int $session_mode ]]]",
      returnValue: "resource",
      ref: {
        name: "oci_new_connect()",
        url: "function.oci-new-connect"
      }
    }
  },
  ocinumcols: {
    name: "ocinumcols",
    url: "function.ocinumcols",
    spec: {
      parameters: "resource $statement",
      returnValue: "int",
      ref: {
        name: "oci_num_fields()",
        url: "function.oci-num-fields"
      }
    }
  },
  ociparse: {
    name: "ociparse",
    url: "function.ociparse",
    spec: {
      parameters: "resource $connection, string $sql_text",
      returnValue: "resource",
      ref: {
        name: "oci_parse()",
        url: "function.oci-parse"
      }
    }
  },
  ociplogon: {
    name: "ociplogon",
    url: "function.ociplogon",
    spec: {
      parameters: "string $username, string $password [, string $connection_string [, string $character_set [, int $session_mode ]]]",
      returnValue: "resource",
      ref: {
        name: "oci_pconnect()",
        url: "function.oci-pconnect"
      }
    }
  },
  ociresult: {
    name: "ociresult",
    url: "function.ociresult",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "mixed",
      ref: {
        name: "oci_result()",
        url: "function.oci-result"
      }
    }
  },
  ocirollback: {
    name: "ocirollback",
    url: "function.ocirollback",
    spec: {
      parameters: "resource $connection",
      returnValue: "bool",
      ref: {
        name: "oci_rollback()",
        url: "function.oci-rollback"
      }
    }
  },
  ocirowcount: {
    name: "ocirowcount",
    url: "function.ocirowcount",
    spec: {
      parameters: "resource $statement",
      returnValue: "int",
      ref: {
        name: "oci_num_rows()",
        url: "function.oci-num-rows"
      }
    }
  },
  ocisavelob: {
    name: "ocisavelob",
    url: "function.ocisavelob",
    spec: {
      parameters: "string $data [, int $offset ]",
      returnValue: "bool",
      ref: {
        name: "OCI-Lob::save()",
        url: "oci-lob.save"
      }
    }
  },
  ocisavelobfile: {
    name: "ocisavelobfile",
    url: "function.ocisavelobfile",
    spec: {
      parameters: "string $filename",
      returnValue: "bool",
      ref: {
        name: "OCI-Lob::import()",
        url: "oci-lob.import"
      }
    }
  },
  ociserverversion: {
    name: "ociserverversion",
    url: "function.ociserverversion",
    spec: {
      parameters: "resource $connection",
      returnValue: "string",
      ref: {
        name: "oci_server_version()",
        url: "function.oci-server-version"
      }
    }
  },
  ocisetprefetch: {
    name: "ocisetprefetch",
    url: "function.ocisetprefetch",
    spec: {
      parameters: "resource $statement, int $rows",
      returnValue: "bool",
      ref: {
        name: "oci_set_prefetch()",
        url: "function.oci-set-prefetch"
      }
    }
  },
  ocistatementtype: {
    name: "ocistatementtype",
    url: "function.ocistatementtype",
    spec: {
      parameters: "resource $statement",
      returnValue: "string",
      ref: {
        name: "oci_statement_type()",
        url: "function.oci-statement-type"
      }
    }
  },
  ociwritelobtofile: {
    name: "ociwritelobtofile",
    url: "function.ociwritelobtofile",
    spec: {
      parameters: "string $filename [, int $start [, int $length ]]",
      returnValue: "bool",
      ref: {
        name: "OCI-Lob::export()",
        url: "oci-lob.export"
      }
    }
  },
  ociwritetemporarylob: {
    name: "ociwritetemporarylob",
    url: "function.ociwritetemporarylob",
    spec: {
      parameters: "string $data [, int $lob_type = OCI_TEMP_CLOB ]",
      returnValue: "bool",
      ref: {
        name: "OCI-Lob::writeTemporary()",
        url: "oci-lob.writetemporary"
      }
    }
  },
  oci_bind_array_by_name: {
    name: "oci_bind_array_by_name",
    url: "function.oci-bind-array-by-name",
    spec: {
      parameters: "resource $statement, string $name, array &$var_array, int $max_table_length [, int $max_item_length = -1 [, int $type = SQLT_AFC ]]",
      returnValue: "bool",
      ref: null
    }
  },
  oci_bind_by_name: {
    name: "oci_bind_by_name",
    url: "function.oci-bind-by-name",
    spec: {
      parameters: "resource $statement, string $bv_name, mixed &$variable [, int $maxlength = -1 [, int $type = SQLT_CHR ]]",
      returnValue: "bool",
      ref: null
    }
  },
  oci_cancel: {
    name: "oci_cancel",
    url: "function.oci-cancel",
    spec: {
      parameters: "resource $statement",
      returnValue: "bool",
      ref: null
    }
  },
  oci_client_version: {
    name: "oci_client_version",
    url: "function.oci-client-version",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  oci_close: {
    name: "oci_close",
    url: "function.oci-close",
    spec: {
      parameters: "resource $connection",
      returnValue: "bool",
      ref: null
    }
  },
  oci_commit: {
    name: "oci_commit",
    url: "function.oci-commit",
    spec: {
      parameters: "resource $connection",
      returnValue: "bool",
      ref: null
    }
  },
  oci_connect: {
    name: "oci_connect",
    url: "function.oci-connect",
    spec: {
      parameters: "string $username, string $password [, string $connection_string [, string $character_set [, int $session_mode ]]]",
      returnValue: "resource",
      ref: null
    }
  },
  oci_define_by_name: {
    name: "oci_define_by_name",
    url: "function.oci-define-by-name",
    spec: {
      parameters: "resource $statement, string $column_name, mixed &$variable [, int $type = SQLT_CHR ]",
      returnValue: "bool",
      ref: null
    }
  },
  oci_error: {
    name: "oci_error",
    url: "function.oci-error",
    spec: {
      parameters: "[ resource $resource ]",
      returnValue: "array",
      ref: null
    }
  },
  oci_execute: {
    name: "oci_execute",
    url: "function.oci-execute",
    spec: {
      parameters: "resource $statement [, int $mode = OCI_COMMIT_ON_SUCCESS ]",
      returnValue: "bool",
      ref: null
    }
  },
  oci_fetch: {
    name: "oci_fetch",
    url: "function.oci-fetch",
    spec: {
      parameters: "resource $statement",
      returnValue: "bool",
      ref: null
    }
  },
  oci_fetch_all: {
    name: "oci_fetch_all",
    url: "function.oci-fetch-all",
    spec: {
      parameters: "resource $statement, array &$output [, int $skip = 0 [, int $maxrows = -1 [, int $flags = OCI_FETCHSTATEMENT_BY_COLUMN + OCI_ASSOC ]]]",
      returnValue: "int",
      ref: null
    }
  },
  oci_fetch_array: {
    name: "oci_fetch_array",
    url: "function.oci-fetch-array",
    spec: {
      parameters: "resource $statement [, int $mode ]",
      returnValue: "array",
      ref: null
    }
  },
  oci_fetch_assoc: {
    name: "oci_fetch_assoc",
    url: "function.oci-fetch-assoc",
    spec: {
      parameters: "resource $statement",
      returnValue: "array",
      ref: null
    }
  },
  oci_fetch_object: {
    name: "oci_fetch_object",
    url: "function.oci-fetch-object",
    spec: {
      parameters: "resource $statement",
      returnValue: "object",
      ref: null
    }
  },
  oci_fetch_row: {
    name: "oci_fetch_row",
    url: "function.oci-fetch-row",
    spec: {
      parameters: "resource $statement",
      returnValue: "array",
      ref: null
    }
  },
  oci_field_is_null: {
    name: "oci_field_is_null",
    url: "function.oci-field-is-null",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "bool",
      ref: null
    }
  },
  oci_field_name: {
    name: "oci_field_name",
    url: "function.oci-field-name",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "string",
      ref: null
    }
  },
  oci_field_precision: {
    name: "oci_field_precision",
    url: "function.oci-field-precision",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "int",
      ref: null
    }
  },
  oci_field_scale: {
    name: "oci_field_scale",
    url: "function.oci-field-scale",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "int",
      ref: null
    }
  },
  oci_field_size: {
    name: "oci_field_size",
    url: "function.oci-field-size",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "int",
      ref: null
    }
  },
  oci_field_type: {
    name: "oci_field_type",
    url: "function.oci-field-type",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "mixed",
      ref: null
    }
  },
  oci_field_type_raw: {
    name: "oci_field_type_raw",
    url: "function.oci-field-type-raw",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "int",
      ref: null
    }
  },
  oci_free_descriptor: {
    name: "oci_free_descriptor",
    url: "function.oci-free-descriptor",
    spec: {
      parameters: "resource $descriptor",
      returnValue: "bool",
      ref: null
    }
  },
  oci_free_statement: {
    name: "oci_free_statement",
    url: "function.oci-free-statement",
    spec: {
      parameters: "resource $statement",
      returnValue: "bool",
      ref: null
    }
  },
  oci_get_implicit_resultset: {
    name: "oci_get_implicit_resultset",
    url: "function.oci-get-implicit-resultset",
    spec: {
      parameters: "",
      returnValue: null,
      ref: null
    }
  },
  oci_internal_debug: {
    name: "oci_internal_debug",
    url: "function.oci-internal-debug",
    spec: {
      parameters: "bool $onoff",
      returnValue: "void",
      ref: null
    }
  },
  oci_lob_copy: {
    name: "oci_lob_copy",
    url: "function.oci-lob-copy",
    spec: {
      parameters: "OCI-Lob $lob_to, OCI-Lob $lob_from [, int $length = 0 ]",
      returnValue: "bool",
      ref: null
    }
  },
  oci_lob_is_equal: {
    name: "oci_lob_is_equal",
    url: "function.oci-lob-is-equal",
    spec: {
      parameters: "OCI-Lob $lob1, OCI-Lob $lob2",
      returnValue: "bool",
      ref: null
    }
  },
  oci_new_collection: {
    name: "oci_new_collection",
    url: "function.oci-new-collection",
    spec: {
      parameters: "",
      returnValue: null,
      ref: null
    }
  },
  oci_new_connect: {
    name: "oci_new_connect",
    url: "function.oci-new-connect",
    spec: {
      parameters: "string $username, string $password [, string $connection_string [, string $character_set [, int $session_mode ]]]",
      returnValue: "resource",
      ref: null
    }
  },
  oci_new_cursor: {
    name: "oci_new_cursor",
    url: "function.oci-new-cursor",
    spec: {
      parameters: "resource $connection",
      returnValue: "resource",
      ref: null
    }
  },
  oci_new_descriptor: {
    name: "oci_new_descriptor",
    url: "function.oci-new-descriptor",
    spec: {
      parameters: "",
      returnValue: null,
      ref: null
    }
  },
  oci_num_fields: {
    name: "oci_num_fields",
    url: "function.oci-num-fields",
    spec: {
      parameters: "resource $statement",
      returnValue: "int",
      ref: null
    }
  },
  oci_num_rows: {
    name: "oci_num_rows",
    url: "function.oci-num-rows",
    spec: {
      parameters: "resource $statement",
      returnValue: "int",
      ref: null
    }
  },
  oci_parse: {
    name: "oci_parse",
    url: "function.oci-parse",
    spec: {
      parameters: "resource $connection, string $sql_text",
      returnValue: "resource",
      ref: null
    }
  },
  oci_password_change: {
    name: "oci_password_change",
    url: "function.oci-password-change",
    spec: {
      parameters: "resource $connection, string $username, string $old_password, string $new_password",
      returnValue: "bool",
      ref: null
    }
  },
  oci_pconnect: {
    name: "oci_pconnect",
    url: "function.oci-pconnect",
    spec: {
      parameters: "string $username, string $password [, string $connection_string [, string $character_set [, int $session_mode ]]]",
      returnValue: "resource",
      ref: null
    }
  },
  oci_register_taf_callback: {
    name: "oci_register_taf_callback",
    url: "function.oci-register-taf-callback",
    spec: {
      parameters: "resource $connection [, mixed $callbackFn ]",
      returnValue: "bool",
      ref: null
    }
  },
  oci_result: {
    name: "oci_result",
    url: "function.oci-result",
    spec: {
      parameters: "resource $statement, mixed $field",
      returnValue: "mixed",
      ref: null
    }
  },
  oci_rollback: {
    name: "oci_rollback",
    url: "function.oci-rollback",
    spec: {
      parameters: "resource $connection",
      returnValue: "bool",
      ref: null
    }
  },
  oci_server_version: {
    name: "oci_server_version",
    url: "function.oci-server-version",
    spec: {
      parameters: "resource $connection",
      returnValue: "string",
      ref: null
    }
  },
  oci_set_action: {
    name: "oci_set_action",
    url: "function.oci-set-action",
    spec: {
      parameters: "resource $connection, string $action_name",
      returnValue: "bool",
      ref: null
    }
  },
  oci_set_call_timeout: {
    name: "oci_set_call_timeout",
    url: "function.oci-set-call-timout",
    spec: {
      parameters: "resource $connection, int $time_out",
      returnValue: "bool",
      ref: null
    }
  },
  oci_set_client_identifier: {
    name: "oci_set_client_identifier",
    url: "function.oci-set-client-identifier",
    spec: {
      parameters: "resource $connection, string $client_identifier",
      returnValue: "bool",
      ref: null
    }
  },
  oci_set_client_info: {
    name: "oci_set_client_info",
    url: "function.oci-set-client-info",
    spec: {
      parameters: "resource $connection, string $client_info",
      returnValue: "bool",
      ref: null
    }
  },
  oci_set_db_operation: {
    name: "oci_set_db_operation",
    url: "function.oci-set-db-operation",
    spec: {
      parameters: "resource $connection, string $dbop",
      returnValue: "bool",
      ref: null
    }
  },
  oci_set_edition: {
    name: "oci_set_edition",
    url: "function.oci-set-edition",
    spec: {
      parameters: "string $edition",
      returnValue: "bool",
      ref: null
    }
  },
  oci_set_module_name: {
    name: "oci_set_module_name",
    url: "function.oci-set-module-name",
    spec: {
      parameters: "resource $connection, string $module_name",
      returnValue: "bool",
      ref: null
    }
  },
  oci_set_prefetch: {
    name: "oci_set_prefetch",
    url: "function.oci-set-prefetch",
    spec: {
      parameters: "resource $statement, int $rows",
      returnValue: "bool",
      ref: null
    }
  },
  oci_statement_type: {
    name: "oci_statement_type",
    url: "function.oci-statement-type",
    spec: {
      parameters: "resource $statement",
      returnValue: "string",
      ref: null
    }
  },
  oci_unregister_taf_callback: {
    name: "oci_unregister_taf_callback",
    url: "function.oci-unregister-taf-callback",
    spec: {
      parameters: "resource $connection",
      returnValue: "bool",
      ref: null
    }
  },
  octdec: {
    name: "octdec",
    url: "function.octdec",
    spec: {
      parameters: "string $octal_string",
      returnValue: "number",
      ref: null
    }
  },
  odbc_autocommit: {
    name: "odbc_autocommit",
    url: "function.odbc-autocommit",
    spec: {
      parameters: "resource $connection_id [, bool $OnOff = FALSE ]",
      returnValue: "mixed",
      ref: null
    }
  },
  odbc_binmode: {
    name: "odbc_binmode",
    url: "function.odbc-binmode",
    spec: {
      parameters: "resource $result_id, int $mode",
      returnValue: "bool",
      ref: null
    }
  },
  odbc_close: {
    name: "odbc_close",
    url: "function.odbc-close",
    spec: {
      parameters: "resource $connection_id",
      returnValue: "void",
      ref: null
    }
  },
  odbc_close_all: {
    name: "odbc_close_all",
    url: "function.odbc-close-all",
    spec: {
      parameters: "void",
      returnValue: "void",
      ref: null
    }
  },
  odbc_columnprivileges: {
    name: "odbc_columnprivileges",
    url: "function.odbc-columnprivileges",
    spec: {
      parameters: "resource $connection_id, string $qualifier, string $owner, string $table_name, string $column_name",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_columns: {
    name: "odbc_columns",
    url: "function.odbc-columns",
    spec: {
      parameters: "resource $connection_id [, string $qualifier [, string $schema [, string $table_name [, string $column_name ]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_commit: {
    name: "odbc_commit",
    url: "function.odbc-commit",
    spec: {
      parameters: "resource $connection_id",
      returnValue: "bool",
      ref: null
    }
  },
  odbc_connect: {
    name: "odbc_connect",
    url: "function.odbc-connect",
    spec: {
      parameters: "string $dsn, string $user, string $password [, int $cursor_type ]",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_cursor: {
    name: "odbc_cursor",
    url: "function.odbc-cursor",
    spec: {
      parameters: "resource $result_id",
      returnValue: "string",
      ref: null
    }
  },
  odbc_data_source: {
    name: "odbc_data_source",
    url: "function.odbc-data-source",
    spec: {
      parameters: "resource $connection_id, int $fetch_type",
      returnValue: "array",
      ref: null
    }
  },
  odbc_do: {
    name: "odbc_do",
    url: "function.odbc-do",
    spec: {
      parameters: "resource $connection_id, string $query_string [, int $flags ]",
      returnValue: "resource",
      ref: {
        name: "odbc_exec()",
        url: "function.odbc-exec"
      }
    }
  },
  odbc_error: {
    name: "odbc_error",
    url: "function.odbc-error",
    spec: {
      parameters: "[ resource $connection_id ]",
      returnValue: "string",
      ref: null
    }
  },
  odbc_errormsg: {
    name: "odbc_errormsg",
    url: "function.odbc-errormsg",
    spec: {
      parameters: "[ resource $connection_id ]",
      returnValue: "string",
      ref: null
    }
  },
  odbc_exec: {
    name: "odbc_exec",
    url: "function.odbc-exec",
    spec: {
      parameters: "resource $connection_id, string $query_string [, int $flags ]",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_execute: {
    name: "odbc_execute",
    url: "function.odbc-execute",
    spec: {
      parameters: "resource $result_id [, array $parameters_array ]",
      returnValue: "bool",
      ref: null
    }
  },
  odbc_fetch_array: {
    name: "odbc_fetch_array",
    url: "function.odbc-fetch-array",
    spec: {
      parameters: "resource $result [, int $rownumber ]",
      returnValue: "array",
      ref: null
    }
  },
  odbc_fetch_into: {
    name: "odbc_fetch_into",
    url: "function.odbc-fetch-into",
    spec: {
      parameters: "resource $result_id, array &$result_array [, int $rownumber ]",
      returnValue: "int",
      ref: null
    }
  },
  odbc_fetch_object: {
    name: "odbc_fetch_object",
    url: "function.odbc-fetch-object",
    spec: {
      parameters: "resource $result [, int $rownumber ]",
      returnValue: "object",
      ref: null
    }
  },
  odbc_fetch_row: {
    name: "odbc_fetch_row",
    url: "function.odbc-fetch-row",
    spec: {
      parameters: "resource $result_id [, int $row_number = 1 ]",
      returnValue: "bool",
      ref: null
    }
  },
  odbc_field_len: {
    name: "odbc_field_len",
    url: "function.odbc-field-len",
    spec: {
      parameters: "resource $result_id, int $field_number",
      returnValue: "int",
      ref: null
    }
  },
  odbc_field_name: {
    name: "odbc_field_name",
    url: "function.odbc-field-name",
    spec: {
      parameters: "resource $result_id, int $field_number",
      returnValue: "string",
      ref: null
    }
  },
  odbc_field_num: {
    name: "odbc_field_num",
    url: "function.odbc-field-num",
    spec: {
      parameters: "resource $result_id, string $field_name",
      returnValue: "int",
      ref: null
    }
  },
  odbc_field_precision: {
    name: "odbc_field_precision",
    url: "function.odbc-field-precision",
    spec: {
      parameters: "resource $result_id, int $field_number",
      returnValue: "int",
      ref: {
        name: "odbc_field_len()",
        url: "function.odbc-field-len"
      }
    }
  },
  odbc_field_scale: {
    name: "odbc_field_scale",
    url: "function.odbc-field-scale",
    spec: {
      parameters: "resource $result_id, int $field_number",
      returnValue: "int",
      ref: null
    }
  },
  odbc_field_type: {
    name: "odbc_field_type",
    url: "function.odbc-field-type",
    spec: {
      parameters: "resource $result_id, int $field_number",
      returnValue: "string",
      ref: null
    }
  },
  odbc_foreignkeys: {
    name: "odbc_foreignkeys",
    url: "function.odbc-foreignkeys",
    spec: {
      parameters: "resource $connection_id, string $pk_qualifier, string $pk_owner, string $pk_table, string $fk_qualifier, string $fk_owner, string $fk_table",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_free_result: {
    name: "odbc_free_result",
    url: "function.odbc-free-result",
    spec: {
      parameters: "resource $result_id",
      returnValue: "bool",
      ref: null
    }
  },
  odbc_gettypeinfo: {
    name: "odbc_gettypeinfo",
    url: "function.odbc-gettypeinfo",
    spec: {
      parameters: "resource $connection_id [, int $data_type ]",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_longreadlen: {
    name: "odbc_longreadlen",
    url: "function.odbc-longreadlen",
    spec: {
      parameters: "resource $result_id, int $length",
      returnValue: "bool",
      ref: null
    }
  },
  odbc_next_result: {
    name: "odbc_next_result",
    url: "function.odbc-next-result",
    spec: {
      parameters: "resource $result_id",
      returnValue: "bool",
      ref: null
    }
  },
  odbc_num_fields: {
    name: "odbc_num_fields",
    url: "function.odbc-num-fields",
    spec: {
      parameters: "resource $result_id",
      returnValue: "int",
      ref: null
    }
  },
  odbc_num_rows: {
    name: "odbc_num_rows",
    url: "function.odbc-num-rows",
    spec: {
      parameters: "resource $result_id",
      returnValue: "int",
      ref: null
    }
  },
  odbc_pconnect: {
    name: "odbc_pconnect",
    url: "function.odbc-pconnect",
    spec: {
      parameters: "string $dsn, string $user, string $password [, int $cursor_type ]",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_prepare: {
    name: "odbc_prepare",
    url: "function.odbc-prepare",
    spec: {
      parameters: "resource $connection_id, string $query_string",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_primarykeys: {
    name: "odbc_primarykeys",
    url: "function.odbc-primarykeys",
    spec: {
      parameters: "resource $connection_id, string $qualifier, string $owner, string $table",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_procedurecolumns: {
    name: "odbc_procedurecolumns",
    url: "function.odbc-procedurecolumns",
    spec: {
      parameters: "resource $connection_id",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_procedures: {
    name: "odbc_procedures",
    url: "function.odbc-procedures",
    spec: {
      parameters: "resource $connection_id",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_result: {
    name: "odbc_result",
    url: "function.odbc-result",
    spec: {
      parameters: "resource $result_id, mixed $field",
      returnValue: "mixed",
      ref: null
    }
  },
  odbc_result_all: {
    name: "odbc_result_all",
    url: "function.odbc-result-all",
    spec: {
      parameters: "resource $result_id [, string $format ]",
      returnValue: "int",
      ref: null
    }
  },
  odbc_rollback: {
    name: "odbc_rollback",
    url: "function.odbc-rollback",
    spec: {
      parameters: "resource $connection_id",
      returnValue: "bool",
      ref: null
    }
  },
  odbc_setoption: {
    name: "odbc_setoption",
    url: "function.odbc-setoption",
    spec: {
      parameters: "resource $id, int $function, int $option, int $param",
      returnValue: "bool",
      ref: null
    }
  },
  odbc_specialcolumns: {
    name: "odbc_specialcolumns",
    url: "function.odbc-specialcolumns",
    spec: {
      parameters: "resource $connection_id, int $type, string $qualifier, string $table, int $scope, int $nullable",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_statistics: {
    name: "odbc_statistics",
    url: "function.odbc-statistics",
    spec: {
      parameters: "resource $connection_id, string $qualifier, string $owner, string $table_name, int $unique, int $accuracy",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_tableprivileges: {
    name: "odbc_tableprivileges",
    url: "function.odbc-tableprivileges",
    spec: {
      parameters: "resource $connection_id, string $qualifier, string $owner, string $name",
      returnValue: "resource",
      ref: null
    }
  },
  odbc_tables: {
    name: "odbc_tables",
    url: "function.odbc-tables",
    spec: {
      parameters: "resource $connection_id [, string $qualifier [, string $owner [, string $name [, string $types ]]]]",
      returnValue: "resource",
      ref: null
    }
  },
  opcache_compile_file: {
    name: "opcache_compile_file",
    url: "function.opcache-compile-file",
    spec: {
      parameters: "string $file",
      returnValue: "bool",
      ref: null
    }
  },
  opcache_get_configuration: {
    name: "opcache_get_configuration",
    url: "function.opcache-get-configuration",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  opcache_get_status: {
    name: "opcache_get_status",
    url: "function.opcache-get-status",
    spec: {
      parameters: "[ bool $get_scripts = TRUE ]",
      returnValue: "array",
      ref: null
    }
  },
  opcache_invalidate: {
    name: "opcache_invalidate",
    url: "function.opcache-invalidate",
    spec: {
      parameters: "string $script [, bool $force = FALSE ]",
      returnValue: "bool",
      ref: null
    }
  },
  opcache_is_script_cached: {
    name: "opcache_is_script_cached",
    url: "function.opcache-is-script-cached",
    spec: {
      parameters: "string $file",
      returnValue: "bool",
      ref: null
    }
  },
  opcache_reset: {
    name: "opcache_reset",
    url: "function.opcache-reset",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  openal_buffer_create: {
    name: "openal_buffer_create",
    url: "function.openal-buffer-create",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  openal_buffer_data: {
    name: "openal_buffer_data",
    url: "function.openal-buffer-data",
    spec: {
      parameters: "resource $buffer, int $format, string $data, int $freq",
      returnValue: "bool",
      ref: null
    }
  },
  openal_buffer_destroy: {
    name: "openal_buffer_destroy",
    url: "function.openal-buffer-destroy",
    spec: {
      parameters: "resource $buffer",
      returnValue: "bool",
      ref: null
    }
  },
  openal_buffer_get: {
    name: "openal_buffer_get",
    url: "function.openal-buffer-get",
    spec: {
      parameters: "resource $buffer, int $property",
      returnValue: "int",
      ref: null
    }
  },
  openal_buffer_loadwav: {
    name: "openal_buffer_loadwav",
    url: "function.openal-buffer-loadwav",
    spec: {
      parameters: "resource $buffer, string $wavfile",
      returnValue: "bool",
      ref: null
    }
  },
  openal_context_create: {
    name: "openal_context_create",
    url: "function.openal-context-create",
    spec: {
      parameters: "resource $device",
      returnValue: "resource",
      ref: null
    }
  },
  openal_context_current: {
    name: "openal_context_current",
    url: "function.openal-context-current",
    spec: {
      parameters: "resource $context",
      returnValue: "bool",
      ref: null
    }
  },
  openal_context_destroy: {
    name: "openal_context_destroy",
    url: "function.openal-context-destroy",
    spec: {
      parameters: "resource $context",
      returnValue: "bool",
      ref: null
    }
  },
  openal_context_process: {
    name: "openal_context_process",
    url: "function.openal-context-process",
    spec: {
      parameters: "resource $context",
      returnValue: "bool",
      ref: null
    }
  },
  openal_context_suspend: {
    name: "openal_context_suspend",
    url: "function.openal-context-suspend",
    spec: {
      parameters: "resource $context",
      returnValue: "bool",
      ref: null
    }
  },
  openal_device_close: {
    name: "openal_device_close",
    url: "function.openal-device-close",
    spec: {
      parameters: "resource $device",
      returnValue: "bool",
      ref: null
    }
  },
  openal_device_open: {
    name: "openal_device_open",
    url: "function.openal-device-open",
    spec: {
      parameters: "[ string $device_desc ]",
      returnValue: "resource",
      ref: null
    }
  },
  openal_listener_get: {
    name: "openal_listener_get",
    url: "function.openal-listener-get",
    spec: {
      parameters: "int $property",
      returnValue: "mixed",
      ref: null
    }
  },
  openal_listener_set: {
    name: "openal_listener_set",
    url: "function.openal-listener-set",
    spec: {
      parameters: "int $property, mixed $setting",
      returnValue: "bool",
      ref: null
    }
  },
  openal_source_create: {
    name: "openal_source_create",
    url: "function.openal-source-create",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  openal_source_destroy: {
    name: "openal_source_destroy",
    url: "function.openal-source-destroy",
    spec: {
      parameters: "resource $source",
      returnValue: "bool",
      ref: null
    }
  },
  openal_source_get: {
    name: "openal_source_get",
    url: "function.openal-source-get",
    spec: {
      parameters: "resource $source, int $property",
      returnValue: "mixed",
      ref: null
    }
  },
  openal_source_pause: {
    name: "openal_source_pause",
    url: "function.openal-source-pause",
    spec: {
      parameters: "resource $source",
      returnValue: "bool",
      ref: null
    }
  },
  openal_source_play: {
    name: "openal_source_play",
    url: "function.openal-source-play",
    spec: {
      parameters: "resource $source",
      returnValue: "bool",
      ref: null
    }
  },
  openal_source_rewind: {
    name: "openal_source_rewind",
    url: "function.openal-source-rewind",
    spec: {
      parameters: "resource $source",
      returnValue: "bool",
      ref: null
    }
  },
  openal_source_set: {
    name: "openal_source_set",
    url: "function.openal-source-set",
    spec: {
      parameters: "resource $source, int $property, mixed $setting",
      returnValue: "bool",
      ref: null
    }
  },
  openal_source_stop: {
    name: "openal_source_stop",
    url: "function.openal-source-stop",
    spec: {
      parameters: "resource $source",
      returnValue: "bool",
      ref: null
    }
  },
  openal_stream: {
    name: "openal_stream",
    url: "function.openal-stream",
    spec: {
      parameters: "resource $source, int $format, int $rate",
      returnValue: "resource",
      ref: null
    }
  },
  opendir: {
    name: "opendir",
    url: "function.opendir",
    spec: {
      parameters: "string $path [, resource $context ]",
      returnValue: "resource",
      ref: null
    }
  },
  openlog: {
    name: "openlog",
    url: "function.openlog",
    spec: {
      parameters: "string $ident, int $option, int $facility",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_cipher_iv_length: {
    name: "openssl_cipher_iv_length",
    url: "function.openssl-cipher-iv-length",
    spec: {
      parameters: "string $method",
      returnValue: "int",
      ref: null
    }
  },
  openssl_csr_export: {
    name: "openssl_csr_export",
    url: "function.openssl-csr-export",
    spec: {
      parameters: "resource $csr, string &$out [, bool $notext = true ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_csr_export_to_file: {
    name: "openssl_csr_export_to_file",
    url: "function.openssl-csr-export-to-file",
    spec: {
      parameters: "resource $csr, string $outfilename [, bool $notext = true ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_csr_get_public_key: {
    name: "openssl_csr_get_public_key",
    url: "function.openssl-csr-get-public-key",
    spec: {
      parameters: "mixed $csr [, bool $use_shortnames = TRUE ]",
      returnValue: "resource",
      ref: null
    }
  },
  openssl_csr_get_subject: {
    name: "openssl_csr_get_subject",
    url: "function.openssl-csr-get-subject",
    spec: {
      parameters: "mixed $csr [, bool $use_shortnames = TRUE ]",
      returnValue: "array",
      ref: null
    }
  },
  openssl_csr_new: {
    name: "openssl_csr_new",
    url: "function.openssl-csr-new",
    spec: {
      parameters: "array $dn, resource &$privkey [, array $configargs [, array $extraattribs ]]",
      returnValue: "mixed",
      ref: null
    }
  },
  openssl_csr_sign: {
    name: "openssl_csr_sign",
    url: "function.openssl-csr-sign",
    spec: {
      parameters: "mixed $csr, mixed $cacert, mixed $priv_key, int $days [, array $configargs [, int $serial = 0 ]]",
      returnValue: "resource",
      ref: null
    }
  },
  openssl_decrypt: {
    name: "openssl_decrypt",
    url: "function.openssl-decrypt",
    spec: {
      parameters: "string $data, string $method, string $key [, int $options = 0 [, string $iv = \"\" [, string $tag = \"\" [, string $aad = \"\" ]]]]",
      returnValue: "string",
      ref: null
    }
  },
  openssl_dh_compute_key: {
    name: "openssl_dh_compute_key",
    url: "function.openssl-dh-compute-key",
    spec: {
      parameters: "string $pub_key, resource $dh_key",
      returnValue: "string",
      ref: null
    }
  },
  openssl_digest: {
    name: "openssl_digest",
    url: "function.openssl-digest",
    spec: {
      parameters: "string $data, string $method [, bool $raw_output = false ]",
      returnValue: "string",
      ref: null
    }
  },
  openssl_encrypt: {
    name: "openssl_encrypt",
    url: "function.openssl-encrypt",
    spec: {
      parameters: "string $data, string $method, string $key [, int $options = 0 [, string $iv = \"\" [, string &$tag = NULL [, string $aad = \"\" [, int $tag_length = 16 ]]]]]",
      returnValue: "string",
      ref: null
    }
  },
  openssl_error_string: {
    name: "openssl_error_string",
    url: "function.openssl-error-string",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  openssl_free_key: {
    name: "openssl_free_key",
    url: "function.openssl-free-key",
    spec: {
      parameters: "resource $key_identifier",
      returnValue: "void",
      ref: null
    }
  },
  openssl_get_cert_locations: {
    name: "openssl_get_cert_locations",
    url: "function.openssl-get-cert-locations",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  openssl_get_cipher_methods: {
    name: "openssl_get_cipher_methods",
    url: "function.openssl-get-cipher-methods",
    spec: {
      parameters: "[ bool $aliases = false ]",
      returnValue: "array",
      ref: null
    }
  },
  openssl_get_curve_names: {
    name: "openssl_get_curve_names",
    url: "function.openssl-get-curve-names",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: null
    }
  },
  openssl_get_md_methods: {
    name: "openssl_get_md_methods",
    url: "function.openssl-get-md-methods",
    spec: {
      parameters: "[ bool $aliases = FALSE ]",
      returnValue: "array",
      ref: null
    }
  },
  openssl_get_privatekey: {
    name: "openssl_get_privatekey",
    url: "function.openssl-get-privatekey",
    spec: {
      parameters: "mixed $key [, string $passphrase = \"\" ]",
      returnValue: "resource",
      ref: {
        name: "openssl_pkey_get_private()",
        url: "function.openssl-pkey-get-private"
      }
    }
  },
  openssl_get_publickey: {
    name: "openssl_get_publickey",
    url: "function.openssl-get-publickey",
    spec: {
      parameters: "mixed $certificate",
      returnValue: "resource",
      ref: {
        name: "openssl_pkey_get_public()",
        url: "function.openssl-pkey-get-public"
      }
    }
  },
  openssl_open: {
    name: "openssl_open",
    url: "function.openssl-open",
    spec: {
      parameters: "string $sealed_data, string &$open_data, string $env_key, mixed $priv_key_id [, string $method ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pbkdf2: {
    name: "openssl_pbkdf2",
    url: "function.openssl-pbkdf2",
    spec: {
      parameters: "string $password, string $salt, int $key_length, int $iterations [, string $digest_algorithm ]",
      returnValue: "string",
      ref: null
    }
  },
  openssl_pkcs7_decrypt: {
    name: "openssl_pkcs7_decrypt",
    url: "function.openssl-pkcs7-decrypt",
    spec: {
      parameters: "string $infilename, string $outfilename, mixed $recipcert [, mixed $recipkey ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pkcs7_encrypt: {
    name: "openssl_pkcs7_encrypt",
    url: "function.openssl-pkcs7-encrypt",
    spec: {
      parameters: "string $infile, string $outfile, mixed $recipcerts, array $headers [, int $flags = 0 [, int $cipherid = OPENSSL_CIPHER_RC2_40 ]]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pkcs7_read: {
    name: "openssl_pkcs7_read",
    url: "function.openssl-pkcs7-read",
    spec: {
      parameters: "string $infilename, array &$certs",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pkcs7_sign: {
    name: "openssl_pkcs7_sign",
    url: "function.openssl-pkcs7-sign",
    spec: {
      parameters: "string $infilename, string $outfilename, mixed $signcert, mixed $privkey, array $headers [, int $flags = PKCS7_DETACHED [, string $extracerts ]]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pkcs7_verify: {
    name: "openssl_pkcs7_verify",
    url: "function.openssl-pkcs7-verify",
    spec: {
      parameters: "string $filename, int $flags [, string $outfilename [, array $cainfo [, string $extracerts [, string $content [, string $p7bfilename ]]]]]",
      returnValue: "mixed",
      ref: null
    }
  },
  openssl_pkcs12_export: {
    name: "openssl_pkcs12_export",
    url: "function.openssl-pkcs12-export",
    spec: {
      parameters: "mixed $x509, string &$out, mixed $priv_key, string $pass [, array $args ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pkcs12_export_to_file: {
    name: "openssl_pkcs12_export_to_file",
    url: "function.openssl-pkcs12-export-to-file",
    spec: {
      parameters: "mixed $x509, string $filename, mixed $priv_key, string $pass [, array $args ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pkcs12_read: {
    name: "openssl_pkcs12_read",
    url: "function.openssl-pkcs12-read",
    spec: {
      parameters: "string $pkcs12, array &$certs, string $pass",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pkey_export: {
    name: "openssl_pkey_export",
    url: "function.openssl-pkey-export",
    spec: {
      parameters: "mixed $key, string &$out [, string $passphrase [, array $configargs ]]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pkey_export_to_file: {
    name: "openssl_pkey_export_to_file",
    url: "function.openssl-pkey-export-to-file",
    spec: {
      parameters: "mixed $key, string $outfilename [, string $passphrase [, array $configargs ]]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_pkey_free: {
    name: "openssl_pkey_free",
    url: "function.openssl-pkey-free",
    spec: {
      parameters: "resource $key",
      returnValue: "void",
      ref: null
    }
  },
  openssl_pkey_get_details: {
    name: "openssl_pkey_get_details",
    url: "function.openssl-pkey-get-details",
    spec: {
      parameters: "resource $key",
      returnValue: "array",
      ref: null
    }
  },
  openssl_pkey_get_private: {
    name: "openssl_pkey_get_private",
    url: "function.openssl-pkey-get-private",
    spec: {
      parameters: "mixed $key [, string $passphrase = \"\" ]",
      returnValue: "resource",
      ref: null
    }
  },
  openssl_pkey_get_public: {
    name: "openssl_pkey_get_public",
    url: "function.openssl-pkey-get-public",
    spec: {
      parameters: "mixed $certificate",
      returnValue: "resource",
      ref: null
    }
  },
  openssl_pkey_new: {
    name: "openssl_pkey_new",
    url: "function.openssl-pkey-new",
    spec: {
      parameters: "[ array $configargs ]",
      returnValue: "resource",
      ref: null
    }
  },
  openssl_private_decrypt: {
    name: "openssl_private_decrypt",
    url: "function.openssl-private-decrypt",
    spec: {
      parameters: "string $data, string &$decrypted, mixed $key [, int $padding = OPENSSL_PKCS1_PADDING ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_private_encrypt: {
    name: "openssl_private_encrypt",
    url: "function.openssl-private-encrypt",
    spec: {
      parameters: "string $data, string &$crypted, mixed $key [, int $padding = OPENSSL_PKCS1_PADDING ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_public_decrypt: {
    name: "openssl_public_decrypt",
    url: "function.openssl-public-decrypt",
    spec: {
      parameters: "string $data, string &$decrypted, mixed $key [, int $padding = OPENSSL_PKCS1_PADDING ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_public_encrypt: {
    name: "openssl_public_encrypt",
    url: "function.openssl-public-encrypt",
    spec: {
      parameters: "string $data, string &$crypted, mixed $key [, int $padding = OPENSSL_PKCS1_PADDING ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_random_pseudo_bytes: {
    name: "openssl_random_pseudo_bytes",
    url: "function.openssl-random-pseudo-bytes",
    spec: {
      parameters: "int $length [, bool &$crypto_strong ]",
      returnValue: "string",
      ref: null
    }
  },
  openssl_seal: {
    name: "openssl_seal",
    url: "function.openssl-seal",
    spec: {
      parameters: "string $data, string &$sealed_data, array &$env_keys, array $pub_key_ids [, string $method = \"RC4\" ]",
      returnValue: "int",
      ref: null
    }
  },
  openssl_sign: {
    name: "openssl_sign",
    url: "function.openssl-sign",
    spec: {
      parameters: "string $data, string &$signature, mixed $priv_key_id [, mixed $signature_alg = OPENSSL_ALGO_SHA1 ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_spki_export: {
    name: "openssl_spki_export",
    url: "function.openssl-spki-export",
    spec: {
      parameters: "string &$spkac",
      returnValue: "string",
      ref: null
    }
  },
  openssl_spki_export_challenge: {
    name: "openssl_spki_export_challenge",
    url: "function.openssl-spki-export-challenge",
    spec: {
      parameters: "string &$spkac",
      returnValue: "string",
      ref: null
    }
  },
  openssl_spki_new: {
    name: "openssl_spki_new",
    url: "function.openssl-spki-new",
    spec: {
      parameters: "resource &$privkey, string &$challenge [, int $algorithm = 0 ]",
      returnValue: "string",
      ref: null
    }
  },
  openssl_spki_verify: {
    name: "openssl_spki_verify",
    url: "function.openssl-spki-verify",
    spec: {
      parameters: "string &$spkac",
      returnValue: "string",
      ref: null
    }
  },
  openssl_verify: {
    name: "openssl_verify",
    url: "function.openssl-verify",
    spec: {
      parameters: "string $data, string $signature, mixed $pub_key_id [, mixed $signature_alg = OPENSSL_ALGO_SHA1 ]",
      returnValue: "int",
      ref: null
    }
  },
  openssl_x509_checkpurpose: {
    name: "openssl_x509_checkpurpose",
    url: "function.openssl-x509-checkpurpose",
    spec: {
      parameters: "mixed $x509cert, int $purpose [, array $cainfo = array() [, string $untrustedfile ]]",
      returnValue: "int",
      ref: null
    }
  },
  openssl_x509_check_private_key: {
    name: "openssl_x509_check_private_key",
    url: "function.openssl-x509-check-private-key",
    spec: {
      parameters: "mixed $cert, mixed $key",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_x509_export: {
    name: "openssl_x509_export",
    url: "function.openssl-x509-export",
    spec: {
      parameters: "mixed $x509, string &$output [, bool $notext = TRUE ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_x509_export_to_file: {
    name: "openssl_x509_export_to_file",
    url: "function.openssl-x509-export-to-file",
    spec: {
      parameters: "mixed $x509, string $outfilename [, bool $notext = TRUE ]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_x509_fingerprint: {
    name: "openssl_x509_fingerprint",
    url: "function.openssl-x509-fingerprint",
    spec: {
      parameters: "mixed $x509 [, string $hash_algorithm = \"sha1\" [, bool $raw_output = FALSE ]]",
      returnValue: "bool",
      ref: null
    }
  },
  openssl_x509_free: {
    name: "openssl_x509_free",
    url: "function.openssl-x509-free",
    spec: {
      parameters: "resource $x509cert",
      returnValue: "void",
      ref: null
    }
  },
  openssl_x509_parse: {
    name: "openssl_x509_parse",
    url: "function.openssl-x509-parse",
    spec: {
      parameters: "mixed $x509cert [, bool $shortnames = TRUE ]",
      returnValue: "array",
      ref: null
    }
  },
  openssl_x509_read: {
    name: "openssl_x509_read",
    url: "function.openssl-x509-read",
    spec: {
      parameters: "mixed $x509certdata",
      returnValue: "resource",
      ref: null
    }
  },
  ord: {
    name: "ord",
    url: "function.ord",
    spec: {
      parameters: "string $string",
      returnValue: "int",
      ref: null
    }
  },
  output_add_rewrite_var: {
    name: "output_add_rewrite_var",
    url: "function.output-add-rewrite-var",
    spec: {
      parameters: "string $name, string $value",
      returnValue: "bool",
      ref: null
    }
  },
  output_reset_rewrite_vars: {
    name: "output_reset_rewrite_vars",
    url: "function.output-reset-rewrite-vars",
    spec: {
      parameters: "void",
      returnValue: "bool",
      ref: null
    }
  },
  override_function: {
    name: "override_function",
    url: "function.override-function",
    spec: {
      parameters: "string $function_name, string $function_args, string $function_code",
      returnValue: "bool",
      ref: null
    }
  }
};
