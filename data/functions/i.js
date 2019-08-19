functions.i = {
  "ibase_add_user": {
    "name": "ibase_add_user",
    "url": "function.ibase-add-user",
    "spec": {
      "parameters": "resource $service_handle, string $user_name, string $password [, string $first_name [, string $middle_name [, string $last_name ]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_affected_rows": {
    "name": "ibase_affected_rows",
    "url": "function.ibase-affected-rows",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ibase_backup": {
    "name": "ibase_backup",
    "url": "function.ibase-backup",
    "spec": {
      "parameters": "resource $service_handle, string $source_db, string $dest_file [, int $options = 0 [, bool $verbose = FALSE ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ibase_blob_add": {
    "name": "ibase_blob_add",
    "url": "function.ibase-blob-add",
    "spec": {
      "parameters": "resource $blob_handle, string $data",
      "returnValue": "void",
      "ref": null
    }
  },
  "ibase_blob_cancel": {
    "name": "ibase_blob_cancel",
    "url": "function.ibase-blob-cancel",
    "spec": {
      "parameters": "resource $blob_handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_blob_close": {
    "name": "ibase_blob_close",
    "url": "function.ibase-blob-close",
    "spec": {
      "parameters": "resource $blob_handle",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ibase_blob_create": {
    "name": "ibase_blob_create",
    "url": "function.ibase-blob-create",
    "spec": {
      "parameters": "[ resource $link_identifier = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_blob_echo": {
    "name": "ibase_blob_echo",
    "url": "function.ibase-blob-echo",
    "spec": {
      "parameters": "string $blob_id",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_blob_get": {
    "name": "ibase_blob_get",
    "url": "function.ibase-blob-get",
    "spec": {
      "parameters": "resource $blob_handle, int $len",
      "returnValue": "string",
      "ref": null
    }
  },
  "ibase_blob_import": {
    "name": "ibase_blob_import",
    "url": "function.ibase-blob-import",
    "spec": {
      "parameters": "resource $link_identifier, resource $file_handle",
      "returnValue": "string",
      "ref": null
    }
  },
  "ibase_blob_info": {
    "name": "ibase_blob_info",
    "url": "function.ibase-blob-info",
    "spec": {
      "parameters": "resource $link_identifier, string $blob_id",
      "returnValue": "array",
      "ref": null
    }
  },
  "ibase_blob_open": {
    "name": "ibase_blob_open",
    "url": "function.ibase-blob-open",
    "spec": {
      "parameters": "resource $link_identifier, string $blob_id",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_close": {
    "name": "ibase_close",
    "url": "function.ibase-close",
    "spec": {
      "parameters": "[ resource $connection_id = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_commit": {
    "name": "ibase_commit",
    "url": "function.ibase-commit",
    "spec": {
      "parameters": "[ resource $link_or_trans_identifier = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_commit_ret": {
    "name": "ibase_commit_ret",
    "url": "function.ibase-commit-ret",
    "spec": {
      "parameters": "[ resource $link_or_trans_identifier = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_connect": {
    "name": "ibase_connect",
    "url": "function.ibase-connect",
    "spec": {
      "parameters": "[ string $database [, string $username [, string $password [, string $charset [, int $buffers [, int $dialect [, string $role [, int $sync ]]]]]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_db_info": {
    "name": "ibase_db_info",
    "url": "function.ibase-db-info",
    "spec": {
      "parameters": "resource $service_handle, string $db, int $action [, int $argument = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ibase_delete_user": {
    "name": "ibase_delete_user",
    "url": "function.ibase-delete-user",
    "spec": {
      "parameters": "resource $service_handle, string $user_name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_drop_db": {
    "name": "ibase_drop_db",
    "url": "function.ibase-drop-db",
    "spec": {
      "parameters": "[ resource $connection = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_errcode": {
    "name": "ibase_errcode",
    "url": "function.ibase-errcode",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "ibase_errmsg": {
    "name": "ibase_errmsg",
    "url": "function.ibase-errmsg",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "ibase_execute": {
    "name": "ibase_execute",
    "url": "function.ibase-execute",
    "spec": {
      "parameters": "resource $query [, mixed $... ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_fetch_assoc": {
    "name": "ibase_fetch_assoc",
    "url": "function.ibase-fetch-assoc",
    "spec": {
      "parameters": "resource $result [, int $fetch_flag = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "ibase_fetch_object": {
    "name": "ibase_fetch_object",
    "url": "function.ibase-fetch-object",
    "spec": {
      "parameters": "resource $result_id [, int $fetch_flag = 0 ]",
      "returnValue": "object",
      "ref": null
    }
  },
  "ibase_fetch_row": {
    "name": "ibase_fetch_row",
    "url": "function.ibase-fetch-row",
    "spec": {
      "parameters": "resource $result_identifier [, int $fetch_flag = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "ibase_field_info": {
    "name": "ibase_field_info",
    "url": "function.ibase-field-info",
    "spec": {
      "parameters": "resource $result, int $field_number",
      "returnValue": "array",
      "ref": null
    }
  },
  "ibase_free_event_handler": {
    "name": "ibase_free_event_handler",
    "url": "function.ibase-free-event-handler",
    "spec": {
      "parameters": "resource $event",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_free_query": {
    "name": "ibase_free_query",
    "url": "function.ibase-free-query",
    "spec": {
      "parameters": "resource $query",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_free_result": {
    "name": "ibase_free_result",
    "url": "function.ibase-free-result",
    "spec": {
      "parameters": "resource $result_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_gen_id": {
    "name": "ibase_gen_id",
    "url": "function.ibase-gen-id",
    "spec": {
      "parameters": "string $generator [, int $increment = 1 [, resource $link_identifier = NULL ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ibase_maintain_db": {
    "name": "ibase_maintain_db",
    "url": "function.ibase-maintain-db",
    "spec": {
      "parameters": "resource $service_handle, string $db, int $action [, int $argument = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_modify_user": {
    "name": "ibase_modify_user",
    "url": "function.ibase-modify-user",
    "spec": {
      "parameters": "resource $service_handle, string $user_name, string $password [, string $first_name [, string $middle_name [, string $last_name ]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_name_result": {
    "name": "ibase_name_result",
    "url": "function.ibase-name-result",
    "spec": {
      "parameters": "resource $result, string $name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_num_fields": {
    "name": "ibase_num_fields",
    "url": "function.ibase-num-fields",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "int",
      "ref": null
    }
  },
  "ibase_num_params": {
    "name": "ibase_num_params",
    "url": "function.ibase-num-params",
    "spec": {
      "parameters": "resource $query",
      "returnValue": "int",
      "ref": null
    }
  },
  "ibase_param_info": {
    "name": "ibase_param_info",
    "url": "function.ibase-param-info",
    "spec": {
      "parameters": "resource $query, int $param_number",
      "returnValue": "array",
      "ref": null
    }
  },
  "ibase_pconnect": {
    "name": "ibase_pconnect",
    "url": "function.ibase-pconnect",
    "spec": {
      "parameters": "[ string $database [, string $username [, string $password [, string $charset [, int $buffers [, int $dialect [, string $role [, int $sync ]]]]]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_prepare": {
    "name": "ibase_prepare",
    "url": "function.ibase-prepare",
    "spec": {
      "parameters": "string $query",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_query": {
    "name": "ibase_query",
    "url": "function.ibase-query",
    "spec": {
      "parameters": "[ resource $link_identifier ], string $query [, int $bind_args ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_restore": {
    "name": "ibase_restore",
    "url": "function.ibase-restore",
    "spec": {
      "parameters": "resource $service_handle, string $source_file, string $dest_db [, int $options = 0 [, bool $verbose = FALSE ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ibase_rollback": {
    "name": "ibase_rollback",
    "url": "function.ibase-rollback",
    "spec": {
      "parameters": "[ resource $link_or_trans_identifier = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_rollback_ret": {
    "name": "ibase_rollback_ret",
    "url": "function.ibase-rollback-ret",
    "spec": {
      "parameters": "[ resource $link_or_trans_identifier = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_server_info": {
    "name": "ibase_server_info",
    "url": "function.ibase-server-info",
    "spec": {
      "parameters": "resource $service_handle, int $action",
      "returnValue": "string",
      "ref": null
    }
  },
  "ibase_service_attach": {
    "name": "ibase_service_attach",
    "url": "function.ibase-service-attach",
    "spec": {
      "parameters": "string $host, string $dba_username, string $dba_password",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_service_detach": {
    "name": "ibase_service_detach",
    "url": "function.ibase-service-detach",
    "spec": {
      "parameters": "resource $service_handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ibase_set_event_handler": {
    "name": "ibase_set_event_handler",
    "url": "function.ibase-set-event-handler",
    "spec": {
      "parameters": "callable $event_handler, string $event_name1 [, string $... ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_trans": {
    "name": "ibase_trans",
    "url": "function.ibase-trans",
    "spec": {
      "parameters": "[ int $trans_args [, resource $link_identifier ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ibase_wait_event": {
    "name": "ibase_wait_event",
    "url": "function.ibase-wait-event",
    "spec": {
      "parameters": "string $event_name1 [, string $... ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "iconv": {
    "name": "iconv",
    "url": "function.iconv",
    "spec": {
      "parameters": "string $in_charset, string $out_charset, string $str",
      "returnValue": "string",
      "ref": null
    }
  },
  "iconv_get_encoding": {
    "name": "iconv_get_encoding",
    "url": "function.iconv-get-encoding",
    "spec": {
      "parameters": "[ string $type = \"all\" ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "iconv_mime_decode": {
    "name": "iconv_mime_decode",
    "url": "function.iconv-mime-decode",
    "spec": {
      "parameters": "string $encoded_header [, int $mode = 0 [, string $charset = ini_get(\"iconv.internal_encoding\") ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "iconv_mime_decode_headers": {
    "name": "iconv_mime_decode_headers",
    "url": "function.iconv-mime-decode-headers",
    "spec": {
      "parameters": "string $encoded_headers [, int $mode = 0 [, string $charset = ini_get(\"iconv.internal_encoding\") ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "iconv_mime_encode": {
    "name": "iconv_mime_encode",
    "url": "function.iconv-mime-encode",
    "spec": {
      "parameters": "string $field_name, string $field_value [, array $preferences = NULL ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "iconv_set_encoding": {
    "name": "iconv_set_encoding",
    "url": "function.iconv-set-encoding",
    "spec": {
      "parameters": "string $type, string $charset",
      "returnValue": "bool",
      "ref": null
    }
  },
  "iconv_strlen": {
    "name": "iconv_strlen",
    "url": "function.iconv-strlen",
    "spec": {
      "parameters": "string $str [, string $charset = ini_get(\"iconv.internal_encoding\") ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "iconv_strpos": {
    "name": "iconv_strpos",
    "url": "function.iconv-strpos",
    "spec": {
      "parameters": "string $haystack, string $needle [, int $offset = 0 [, string $charset = ini_get(\"iconv.internal_encoding\") ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "iconv_strrpos": {
    "name": "iconv_strrpos",
    "url": "function.iconv-strrpos",
    "spec": {
      "parameters": "string $haystack, string $needle [, string $charset = ini_get(\"iconv.internal_encoding\") ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "iconv_substr": {
    "name": "iconv_substr",
    "url": "function.iconv-substr",
    "spec": {
      "parameters": "string $str, int $offset [, int $length = iconv_strlen($str, $charset) [, string $charset = ini_get(\"iconv.internal_encoding\") ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "id3_get_frame_long_name": {
    "name": "id3_get_frame_long_name",
    "url": "function.id3-get-frame-long-name",
    "spec": {
      "parameters": "string $frameId",
      "returnValue": "string",
      "ref": null
    }
  },
  "id3_get_frame_short_name": {
    "name": "id3_get_frame_short_name",
    "url": "function.id3-get-frame-short-name",
    "spec": {
      "parameters": "string $frameId",
      "returnValue": "string",
      "ref": null
    }
  },
  "id3_get_genre_id": {
    "name": "id3_get_genre_id",
    "url": "function.id3-get-genre-id",
    "spec": {
      "parameters": "string $genre",
      "returnValue": "int",
      "ref": null
    }
  },
  "id3_get_genre_list": {
    "name": "id3_get_genre_list",
    "url": "function.id3-get-genre-list",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "id3_get_genre_name": {
    "name": "id3_get_genre_name",
    "url": "function.id3-get-genre-name",
    "spec": {
      "parameters": "int $genre_id",
      "returnValue": "string",
      "ref": null
    }
  },
  "id3_get_tag": {
    "name": "id3_get_tag",
    "url": "function.id3-get-tag",
    "spec": {
      "parameters": "string $filename [, int $version = ID3_BEST ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "id3_get_version": {
    "name": "id3_get_version",
    "url": "function.id3-get-version",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "id3_remove_tag": {
    "name": "id3_remove_tag",
    "url": "function.id3-remove-tag",
    "spec": {
      "parameters": "string $filename [, int $version = ID3_V1_0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "id3_set_tag": {
    "name": "id3_set_tag",
    "url": "function.id3-set-tag",
    "spec": {
      "parameters": "string $filename, array $tag [, int $version = ID3_V1_0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "idate": {
    "name": "idate",
    "url": "function.idate",
    "spec": {
      "parameters": "string $format [, int $timestamp = time() ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "idn_to_ascii": {
    "name": "idn_to_ascii",
    "url": "function.idn-to-ascii",
    "spec": {
      "parameters": "string $domain [, int $options = 0 [, int $variant = INTL_IDNA_VARIANT_2003 [, array &$idna_info ]]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "idn_to_utf8": {
    "name": "idn_to_utf8",
    "url": "function.idn-to-utf8",
    "spec": {
      "parameters": "string $domain [, int $options = 0 [, int $variant = INTL_IDNA_VARIANT_2003 [, array &$idna_info ]]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ifxus_close_slob": {
    "name": "ifxus_close_slob",
    "url": "function.ifxus-close-slob",
    "spec": {
      "parameters": "int $bid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifxus_create_slob": {
    "name": "ifxus_create_slob",
    "url": "function.ifxus-create-slob",
    "spec": {
      "parameters": "int $mode",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifxus_free_slob": {
    "name": "ifxus_free_slob",
    "url": "function.ifxus-free-slob",
    "spec": {
      "parameters": "int $bid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifxus_open_slob": {
    "name": "ifxus_open_slob",
    "url": "function.ifxus-open-slob",
    "spec": {
      "parameters": "int $bid, int $mode",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifxus_read_slob": {
    "name": "ifxus_read_slob",
    "url": "function.ifxus-read-slob",
    "spec": {
      "parameters": "int $bid, int $nbytes",
      "returnValue": "string",
      "ref": null
    }
  },
  "ifxus_seek_slob": {
    "name": "ifxus_seek_slob",
    "url": "function.ifxus-seek-slob",
    "spec": {
      "parameters": "int $bid, int $mode, int $offset",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifxus_tell_slob": {
    "name": "ifxus_tell_slob",
    "url": "function.ifxus-tell-slob",
    "spec": {
      "parameters": "int $bid",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifxus_write_slob": {
    "name": "ifxus_write_slob",
    "url": "function.ifxus-write-slob",
    "spec": {
      "parameters": "int $bid, string $content",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifx_affected_rows": {
    "name": "ifx_affected_rows",
    "url": "function.ifx-affected-rows",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifx_blobinfile_mode": {
    "name": "ifx_blobinfile_mode",
    "url": "function.ifx-blobinfile-mode",
    "spec": {
      "parameters": "int $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_byteasvarchar": {
    "name": "ifx_byteasvarchar",
    "url": "function.ifx-byteasvarchar",
    "spec": {
      "parameters": "int $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_close": {
    "name": "ifx_close",
    "url": "function.ifx-close",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_connect": {
    "name": "ifx_connect",
    "url": "function.ifx-connect",
    "spec": {
      "parameters": "[ string $database [, string $userid [, string $password ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ifx_copy_blob": {
    "name": "ifx_copy_blob",
    "url": "function.ifx-copy-blob",
    "spec": {
      "parameters": "int $bid",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifx_create_blob": {
    "name": "ifx_create_blob",
    "url": "function.ifx-create-blob",
    "spec": {
      "parameters": "int $type, int $mode, string $param",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifx_create_char": {
    "name": "ifx_create_char",
    "url": "function.ifx-create-char",
    "spec": {
      "parameters": "string $param",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifx_do": {
    "name": "ifx_do",
    "url": "function.ifx-do",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_error": {
    "name": "ifx_error",
    "url": "function.ifx-error",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ifx_errormsg": {
    "name": "ifx_errormsg",
    "url": "function.ifx-errormsg",
    "spec": {
      "parameters": "[ int $errorcode ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ifx_fetch_row": {
    "name": "ifx_fetch_row",
    "url": "function.ifx-fetch-row",
    "spec": {
      "parameters": "resource $result_id [, mixed $position ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "ifx_fieldproperties": {
    "name": "ifx_fieldproperties",
    "url": "function.ifx-fieldproperties",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "array",
      "ref": null
    }
  },
  "ifx_fieldtypes": {
    "name": "ifx_fieldtypes",
    "url": "function.ifx-fieldtypes",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "array",
      "ref": null
    }
  },
  "ifx_free_blob": {
    "name": "ifx_free_blob",
    "url": "function.ifx-free-blob",
    "spec": {
      "parameters": "int $bid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_free_char": {
    "name": "ifx_free_char",
    "url": "function.ifx-free-char",
    "spec": {
      "parameters": "int $bid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_free_result": {
    "name": "ifx_free_result",
    "url": "function.ifx-free-result",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_getsqlca": {
    "name": "ifx_getsqlca",
    "url": "function.ifx-getsqlca",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "array",
      "ref": null
    }
  },
  "ifx_get_blob": {
    "name": "ifx_get_blob",
    "url": "function.ifx-get-blob",
    "spec": {
      "parameters": "int $bid",
      "returnValue": "string",
      "ref": null
    }
  },
  "ifx_get_char": {
    "name": "ifx_get_char",
    "url": "function.ifx-get-char",
    "spec": {
      "parameters": "int $bid",
      "returnValue": "string",
      "ref": null
    }
  },
  "ifx_htmltbl_result": {
    "name": "ifx_htmltbl_result",
    "url": "function.ifx-htmltbl-result",
    "spec": {
      "parameters": "resource $result_id [, string $html_table_options ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifx_nullformat": {
    "name": "ifx_nullformat",
    "url": "function.ifx-nullformat",
    "spec": {
      "parameters": "int $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_num_fields": {
    "name": "ifx_num_fields",
    "url": "function.ifx-num-fields",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifx_num_rows": {
    "name": "ifx_num_rows",
    "url": "function.ifx-num-rows",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "int",
      "ref": null
    }
  },
  "ifx_pconnect": {
    "name": "ifx_pconnect",
    "url": "function.ifx-pconnect",
    "spec": {
      "parameters": "[ string $database [, string $userid [, string $password ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ifx_prepare": {
    "name": "ifx_prepare",
    "url": "function.ifx-prepare",
    "spec": {
      "parameters": "string $query, resource $link_identifier [, int $cursor_def ], mixed $blobidarray",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ifx_query": {
    "name": "ifx_query",
    "url": "function.ifx-query",
    "spec": {
      "parameters": "string $query, resource $link_identifier [, int $cursor_type [, mixed $blobidarray ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ifx_textasvarchar": {
    "name": "ifx_textasvarchar",
    "url": "function.ifx-textasvarchar",
    "spec": {
      "parameters": "int $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_update_blob": {
    "name": "ifx_update_blob",
    "url": "function.ifx-update-blob",
    "spec": {
      "parameters": "int $bid, string $content",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ifx_update_char": {
    "name": "ifx_update_char",
    "url": "function.ifx-update-char",
    "spec": {
      "parameters": "int $bid, string $content",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ignore_user_abort": {
    "name": "ignore_user_abort",
    "url": "function.ignore-user-abort",
    "spec": {
      "parameters": "[ bool $value ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_add_server": {
    "name": "iis_add_server",
    "url": "function.iis-add-server",
    "spec": {
      "parameters": "string $path, string $comment, string $server_ip, int $port, string $host_name, int $rights, int $start_server",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_get_dir_security": {
    "name": "iis_get_dir_security",
    "url": "function.iis-get-dir-security",
    "spec": {
      "parameters": "int $server_instance, string $virtual_path",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_get_script_map": {
    "name": "iis_get_script_map",
    "url": "function.iis-get-script-map",
    "spec": {
      "parameters": "int $server_instance, string $virtual_path, string $script_extension",
      "returnValue": "string",
      "ref": null
    }
  },
  "iis_get_server_by_comment": {
    "name": "iis_get_server_by_comment",
    "url": "function.iis-get-server-by-comment",
    "spec": {
      "parameters": "string $comment",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_get_server_by_path": {
    "name": "iis_get_server_by_path",
    "url": "function.iis-get-server-by-path",
    "spec": {
      "parameters": "string $path",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_get_server_rights": {
    "name": "iis_get_server_rights",
    "url": "function.iis-get-server-rights",
    "spec": {
      "parameters": "int $server_instance, string $virtual_path",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_get_service_state": {
    "name": "iis_get_service_state",
    "url": "function.iis-get-service-state",
    "spec": {
      "parameters": "string $service_id",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_remove_server": {
    "name": "iis_remove_server",
    "url": "function.iis-remove-server",
    "spec": {
      "parameters": "int $server_instance",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_set_app_settings": {
    "name": "iis_set_app_settings",
    "url": "function.iis-set-app-settings",
    "spec": {
      "parameters": "int $server_instance, string $virtual_path, string $application_scope",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_set_dir_security": {
    "name": "iis_set_dir_security",
    "url": "function.iis-set-dir-security",
    "spec": {
      "parameters": "int $server_instance, string $virtual_path, int $directory_flags",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_set_script_map": {
    "name": "iis_set_script_map",
    "url": "function.iis-set-script-map",
    "spec": {
      "parameters": "int $server_instance, string $virtual_path, string $script_extension, string $engine_path, int $allow_scripting",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_set_server_rights": {
    "name": "iis_set_server_rights",
    "url": "function.iis-set-server-rights",
    "spec": {
      "parameters": "int $server_instance, string $virtual_path, int $directory_flags",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_start_server": {
    "name": "iis_start_server",
    "url": "function.iis-start-server",
    "spec": {
      "parameters": "int $server_instance",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_start_service": {
    "name": "iis_start_service",
    "url": "function.iis-start-service",
    "spec": {
      "parameters": "string $service_id",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_stop_server": {
    "name": "iis_stop_server",
    "url": "function.iis-stop-server",
    "spec": {
      "parameters": "int $server_instance",
      "returnValue": "int",
      "ref": null
    }
  },
  "iis_stop_service": {
    "name": "iis_stop_service",
    "url": "function.iis-stop-service",
    "spec": {
      "parameters": "string $service_id",
      "returnValue": "int",
      "ref": null
    }
  },
  "image2wbmp": {
    "name": "image2wbmp",
    "url": "function.image2wbmp",
    "spec": {
      "parameters": "resource $image [, string $filename [, int $threshold ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imageaffine": {
    "name": "imageaffine",
    "url": "function.imageaffine",
    "spec": {
      "parameters": "resource $image, array $affine [, array $clip ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imageaffinematrixconcat": {
    "name": "imageaffinematrixconcat",
    "url": "function.imageaffinematrixconcat",
    "spec": {
      "parameters": "array $m1, array $m2",
      "returnValue": "array",
      "ref": null
    }
  },
  "imageaffinematrixget": {
    "name": "imageaffinematrixget",
    "url": "function.imageaffinematrixget",
    "spec": {
      "parameters": "int $type [, mixed $options ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "imagealphablending": {
    "name": "imagealphablending",
    "url": "function.imagealphablending",
    "spec": {
      "parameters": "resource $image, bool $blendmode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imageantialias": {
    "name": "imageantialias",
    "url": "function.imageantialias",
    "spec": {
      "parameters": "resource $image, bool $enabled",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagearc": {
    "name": "imagearc",
    "url": "function.imagearc",
    "spec": {
      "parameters": "resource $image, int $cx, int $cy, int $width, int $height, int $start, int $end, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagebmp": {
    "name": "imagebmp",
    "url": "function.imagebmp",
    "spec": {
      "parameters": "resource $image [, mixed $to = NULL [, bool $compressed = TRUE ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagechar": {
    "name": "imagechar",
    "url": "function.imagechar",
    "spec": {
      "parameters": "resource $image, int $font, int $x, int $y, string $c, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecharup": {
    "name": "imagecharup",
    "url": "function.imagecharup",
    "spec": {
      "parameters": "resource $image, int $font, int $x, int $y, string $c, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecolorallocate": {
    "name": "imagecolorallocate",
    "url": "function.imagecolorallocate",
    "spec": {
      "parameters": "resource $image, int $red, int $green, int $blue",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolorallocatealpha": {
    "name": "imagecolorallocatealpha",
    "url": "function.imagecolorallocatealpha",
    "spec": {
      "parameters": "resource $image, int $red, int $green, int $blue, int $alpha",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolorat": {
    "name": "imagecolorat",
    "url": "function.imagecolorat",
    "spec": {
      "parameters": "resource $image, int $x, int $y",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolorclosest": {
    "name": "imagecolorclosest",
    "url": "function.imagecolorclosest",
    "spec": {
      "parameters": "resource $image, int $red, int $green, int $blue",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolorclosestalpha": {
    "name": "imagecolorclosestalpha",
    "url": "function.imagecolorclosestalpha",
    "spec": {
      "parameters": "resource $image, int $red, int $green, int $blue, int $alpha",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolorclosesthwb": {
    "name": "imagecolorclosesthwb",
    "url": "function.imagecolorclosesthwb",
    "spec": {
      "parameters": "resource $image, int $red, int $green, int $blue",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolordeallocate": {
    "name": "imagecolordeallocate",
    "url": "function.imagecolordeallocate",
    "spec": {
      "parameters": "resource $image, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecolorexact": {
    "name": "imagecolorexact",
    "url": "function.imagecolorexact",
    "spec": {
      "parameters": "resource $image, int $red, int $green, int $blue",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolorexactalpha": {
    "name": "imagecolorexactalpha",
    "url": "function.imagecolorexactalpha",
    "spec": {
      "parameters": "resource $image, int $red, int $green, int $blue, int $alpha",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolormatch": {
    "name": "imagecolormatch",
    "url": "function.imagecolormatch",
    "spec": {
      "parameters": "resource $image1, resource $image2",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecolorresolve": {
    "name": "imagecolorresolve",
    "url": "function.imagecolorresolve",
    "spec": {
      "parameters": "resource $image, int $red, int $green, int $blue",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolorresolvealpha": {
    "name": "imagecolorresolvealpha",
    "url": "function.imagecolorresolvealpha",
    "spec": {
      "parameters": "resource $image, int $red, int $green, int $blue, int $alpha",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolorset": {
    "name": "imagecolorset",
    "url": "function.imagecolorset",
    "spec": {
      "parameters": "resource $image, int $index, int $red, int $green, int $blue [, int $alpha = 0 ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "imagecolorsforindex": {
    "name": "imagecolorsforindex",
    "url": "function.imagecolorsforindex",
    "spec": {
      "parameters": "resource $image, int $index",
      "returnValue": "array",
      "ref": null
    }
  },
  "imagecolorstotal": {
    "name": "imagecolorstotal",
    "url": "function.imagecolorstotal",
    "spec": {
      "parameters": "resource $image",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagecolortransparent": {
    "name": "imagecolortransparent",
    "url": "function.imagecolortransparent",
    "spec": {
      "parameters": "resource $image [, int $color ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "imageconvolution": {
    "name": "imageconvolution",
    "url": "function.imageconvolution",
    "spec": {
      "parameters": "resource $image, array $matrix, float $div, float $offset",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecopy": {
    "name": "imagecopy",
    "url": "function.imagecopy",
    "spec": {
      "parameters": "resource $dst_im, resource $src_im, int $dst_x, int $dst_y, int $src_x, int $src_y, int $src_w, int $src_h",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecopymerge": {
    "name": "imagecopymerge",
    "url": "function.imagecopymerge",
    "spec": {
      "parameters": "resource $dst_im, resource $src_im, int $dst_x, int $dst_y, int $src_x, int $src_y, int $src_w, int $src_h, int $pct",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecopymergegray": {
    "name": "imagecopymergegray",
    "url": "function.imagecopymergegray",
    "spec": {
      "parameters": "resource $dst_im, resource $src_im, int $dst_x, int $dst_y, int $src_x, int $src_y, int $src_w, int $src_h, int $pct",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecopyresampled": {
    "name": "imagecopyresampled",
    "url": "function.imagecopyresampled",
    "spec": {
      "parameters": "resource $dst_image, resource $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $dst_w, int $dst_h, int $src_w, int $src_h",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecopyresized": {
    "name": "imagecopyresized",
    "url": "function.imagecopyresized",
    "spec": {
      "parameters": "resource $dst_image, resource $src_image, int $dst_x, int $dst_y, int $src_x, int $src_y, int $dst_w, int $dst_h, int $src_w, int $src_h",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagecreate": {
    "name": "imagecreate",
    "url": "function.imagecreate",
    "spec": {
      "parameters": "int $width, int $height",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefrombmp": {
    "name": "imagecreatefrombmp",
    "url": "function.imagecreatefrombmp",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromgd": {
    "name": "imagecreatefromgd",
    "url": "function.imagecreatefromgd",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromgd2": {
    "name": "imagecreatefromgd2",
    "url": "function.imagecreatefromgd2",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromgd2part": {
    "name": "imagecreatefromgd2part",
    "url": "function.imagecreatefromgd2part",
    "spec": {
      "parameters": "string $filename, int $srcX, int $srcY, int $width, int $height",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromgif": {
    "name": "imagecreatefromgif",
    "url": "function.imagecreatefromgif",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromjpeg": {
    "name": "imagecreatefromjpeg",
    "url": "function.imagecreatefromjpeg",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefrompng": {
    "name": "imagecreatefrompng",
    "url": "function.imagecreatefrompng",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromstring": {
    "name": "imagecreatefromstring",
    "url": "function.imagecreatefromstring",
    "spec": {
      "parameters": "string $image",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromwbmp": {
    "name": "imagecreatefromwbmp",
    "url": "function.imagecreatefromwbmp",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromwebp": {
    "name": "imagecreatefromwebp",
    "url": "function.imagecreatefromwebp",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromxbm": {
    "name": "imagecreatefromxbm",
    "url": "function.imagecreatefromxbm",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatefromxpm": {
    "name": "imagecreatefromxpm",
    "url": "function.imagecreatefromxpm",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecreatetruecolor": {
    "name": "imagecreatetruecolor",
    "url": "function.imagecreatetruecolor",
    "spec": {
      "parameters": "int $width, int $height",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecrop": {
    "name": "imagecrop",
    "url": "function.imagecrop",
    "spec": {
      "parameters": "resource $image, array $rect",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagecropauto": {
    "name": "imagecropauto",
    "url": "function.imagecropauto",
    "spec": {
      "parameters": "resource $image [, int $mode = -1 [, float $threshold = .5 [, int $color = -1 ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagedashedline": {
    "name": "imagedashedline",
    "url": "function.imagedashedline",
    "spec": {
      "parameters": "resource $image, int $x1, int $y1, int $x2, int $y2, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagedestroy": {
    "name": "imagedestroy",
    "url": "function.imagedestroy",
    "spec": {
      "parameters": "resource $image",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imageellipse": {
    "name": "imageellipse",
    "url": "function.imageellipse",
    "spec": {
      "parameters": "resource $image, int $cx, int $cy, int $width, int $height, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagefill": {
    "name": "imagefill",
    "url": "function.imagefill",
    "spec": {
      "parameters": "resource $image, int $x, int $y, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagefilledarc": {
    "name": "imagefilledarc",
    "url": "function.imagefilledarc",
    "spec": {
      "parameters": "resource $image, int $cx, int $cy, int $width, int $height, int $start, int $end, int $color, int $style",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagefilledellipse": {
    "name": "imagefilledellipse",
    "url": "function.imagefilledellipse",
    "spec": {
      "parameters": "resource $image, int $cx, int $cy, int $width, int $height, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagefilledpolygon": {
    "name": "imagefilledpolygon",
    "url": "function.imagefilledpolygon",
    "spec": {
      "parameters": "resource $image, array $points, int $num_points, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagefilledrectangle": {
    "name": "imagefilledrectangle",
    "url": "function.imagefilledrectangle",
    "spec": {
      "parameters": "resource $image, int $x1, int $y1, int $x2, int $y2, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagefilltoborder": {
    "name": "imagefilltoborder",
    "url": "function.imagefilltoborder",
    "spec": {
      "parameters": "resource $image, int $x, int $y, int $border, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagefilter": {
    "name": "imagefilter",
    "url": "function.imagefilter",
    "spec": {
      "parameters": "resource $image, int $filtertype [, int $arg1 [, int $arg2 [, int $arg3 [, int $arg4 ]]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imageflip": {
    "name": "imageflip",
    "url": "function.imageflip",
    "spec": {
      "parameters": "resource $image, int $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagefontheight": {
    "name": "imagefontheight",
    "url": "function.imagefontheight",
    "spec": {
      "parameters": "int $font",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagefontwidth": {
    "name": "imagefontwidth",
    "url": "function.imagefontwidth",
    "spec": {
      "parameters": "int $font",
      "returnValue": "int",
      "ref": null
    }
  },
  "imageftbbox": {
    "name": "imageftbbox",
    "url": "function.imageftbbox",
    "spec": {
      "parameters": "float $size, float $angle, string $fontfile, string $text [, array $extrainfo ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "imagefttext": {
    "name": "imagefttext",
    "url": "function.imagefttext",
    "spec": {
      "parameters": "resource $image, float $size, float $angle, int $x, int $y, int $color, string $fontfile, string $text [, array $extrainfo ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "imagegammacorrect": {
    "name": "imagegammacorrect",
    "url": "function.imagegammacorrect",
    "spec": {
      "parameters": "resource $image, float $inputgamma, float $outputgamma",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagegd": {
    "name": "imagegd",
    "url": "function.imagegd",
    "spec": {
      "parameters": "resource $image [, mixed $to = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagegd2": {
    "name": "imagegd2",
    "url": "function.imagegd2",
    "spec": {
      "parameters": "resource $image [, mixed $to = NULL [, int $chunk_size = 128 [, int $type = IMG_GD2_RAW ]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagegetclip": {
    "name": "imagegetclip",
    "url": "function.imagegetclip",
    "spec": {
      "parameters": "resource $im",
      "returnValue": "array",
      "ref": null
    }
  },
  "imagegif": {
    "name": "imagegif",
    "url": "function.imagegif",
    "spec": {
      "parameters": "resource $image [, mixed $to ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagegrabscreen": {
    "name": "imagegrabscreen",
    "url": "function.imagegrabscreen",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagegrabwindow": {
    "name": "imagegrabwindow",
    "url": "function.imagegrabwindow",
    "spec": {
      "parameters": "int $window_handle [, int $client_area = 0 ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imageinterlace": {
    "name": "imageinterlace",
    "url": "function.imageinterlace",
    "spec": {
      "parameters": "resource $image [, int $interlace = 0 ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "imageistruecolor": {
    "name": "imageistruecolor",
    "url": "function.imageistruecolor",
    "spec": {
      "parameters": "resource $image",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagejpeg": {
    "name": "imagejpeg",
    "url": "function.imagejpeg",
    "spec": {
      "parameters": "resource $image [, mixed $to [, int $quality ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagelayereffect": {
    "name": "imagelayereffect",
    "url": "function.imagelayereffect",
    "spec": {
      "parameters": "resource $image, int $effect",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imageline": {
    "name": "imageline",
    "url": "function.imageline",
    "spec": {
      "parameters": "resource $image, int $x1, int $y1, int $x2, int $y2, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imageloadfont": {
    "name": "imageloadfont",
    "url": "function.imageloadfont",
    "spec": {
      "parameters": "string $file",
      "returnValue": "int",
      "ref": null
    }
  },
  "imageopenpolygon": {
    "name": "imageopenpolygon",
    "url": "function.imageopenpolygon",
    "spec": {
      "parameters": "resource $image, array $points, int $num_points, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagepalettecopy": {
    "name": "imagepalettecopy",
    "url": "function.imagepalettecopy",
    "spec": {
      "parameters": "resource $destination, resource $source",
      "returnValue": "void",
      "ref": null
    }
  },
  "imagepalettetotruecolor": {
    "name": "imagepalettetotruecolor",
    "url": "function.imagepalettetotruecolor",
    "spec": {
      "parameters": "resource $src",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagepng": {
    "name": "imagepng",
    "url": "function.imagepng",
    "spec": {
      "parameters": "resource $image [, mixed $to [, int $quality [, int $filters ]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagepolygon": {
    "name": "imagepolygon",
    "url": "function.imagepolygon",
    "spec": {
      "parameters": "resource $image, array $points, int $num_points, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagepsbbox": {
    "name": "imagepsbbox",
    "url": "function.imagepsbbox",
    "spec": {
      "parameters": "string $text, resource $font, int $size",
      "returnValue": "array",
      "ref": null
    }
  },
  "imagepsencodefont": {
    "name": "imagepsencodefont",
    "url": "function.imagepsencodefont",
    "spec": {
      "parameters": "resource $font_index, string $encodingfile",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagepsextendfont": {
    "name": "imagepsextendfont",
    "url": "function.imagepsextendfont",
    "spec": {
      "parameters": "resource $font_index, float $extend",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagepsfreefont": {
    "name": "imagepsfreefont",
    "url": "function.imagepsfreefont",
    "spec": {
      "parameters": "resource $font_index",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagepsloadfont": {
    "name": "imagepsloadfont",
    "url": "function.imagepsloadfont",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagepsslantfont": {
    "name": "imagepsslantfont",
    "url": "function.imagepsslantfont",
    "spec": {
      "parameters": "resource $font_index, float $slant",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagepstext": {
    "name": "imagepstext",
    "url": "function.imagepstext",
    "spec": {
      "parameters": "resource $image, string $text, resource $font_index, int $size, int $foreground, int $background, int $x, int $y [, int $space = 0 [, int $tightness = 0 [, float $angle = 0.0 [, int $antialias_steps = 4 ]]]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "imagerectangle": {
    "name": "imagerectangle",
    "url": "function.imagerectangle",
    "spec": {
      "parameters": "resource $image, int $x1, int $y1, int $x2, int $y2, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imageresolution": {
    "name": "imageresolution",
    "url": "function.imageresolution",
    "spec": {
      "parameters": "resource $image",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "imagerotate": {
    "name": "imagerotate",
    "url": "function.imagerotate",
    "spec": {
      "parameters": "resource $image, float $angle, int $bgd_color [, int $ignore_transparent = 0 ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagesavealpha": {
    "name": "imagesavealpha",
    "url": "function.imagesavealpha",
    "spec": {
      "parameters": "resource $image, bool $saveflag",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagescale": {
    "name": "imagescale",
    "url": "function.imagescale",
    "spec": {
      "parameters": "resource $image, int $new_width [, int $new_height = -1 [, int $mode = IMG_BILINEAR_FIXED ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imagesetbrush": {
    "name": "imagesetbrush",
    "url": "function.imagesetbrush",
    "spec": {
      "parameters": "resource $image, resource $brush",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagesetclip": {
    "name": "imagesetclip",
    "url": "function.imagesetclip",
    "spec": {
      "parameters": "resource $im, int $x1, int $y1, int $x2, int $y2",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagesetinterpolation": {
    "name": "imagesetinterpolation",
    "url": "function.imagesetinterpolation",
    "spec": {
      "parameters": "resource $image [, int $method = IMG_BILINEAR_FIXED ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagesetpixel": {
    "name": "imagesetpixel",
    "url": "function.imagesetpixel",
    "spec": {
      "parameters": "resource $image, int $x, int $y, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagesetstyle": {
    "name": "imagesetstyle",
    "url": "function.imagesetstyle",
    "spec": {
      "parameters": "resource $image, array $style",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagesetthickness": {
    "name": "imagesetthickness",
    "url": "function.imagesetthickness",
    "spec": {
      "parameters": "resource $image, int $thickness",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagesettile": {
    "name": "imagesettile",
    "url": "function.imagesettile",
    "spec": {
      "parameters": "resource $image, resource $tile",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagestring": {
    "name": "imagestring",
    "url": "function.imagestring",
    "spec": {
      "parameters": "resource $image, int $font, int $x, int $y, string $string, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagestringup": {
    "name": "imagestringup",
    "url": "function.imagestringup",
    "spec": {
      "parameters": "resource $image, int $font, int $x, int $y, string $string, int $color",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagesx": {
    "name": "imagesx",
    "url": "function.imagesx",
    "spec": {
      "parameters": "resource $image",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagesy": {
    "name": "imagesy",
    "url": "function.imagesy",
    "spec": {
      "parameters": "resource $image",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagetruecolortopalette": {
    "name": "imagetruecolortopalette",
    "url": "function.imagetruecolortopalette",
    "spec": {
      "parameters": "resource $image, bool $dither, int $ncolors",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagettfbbox": {
    "name": "imagettfbbox",
    "url": "function.imagettfbbox",
    "spec": {
      "parameters": "float $size, float $angle, string $fontfile, string $text",
      "returnValue": "array",
      "ref": null
    }
  },
  "imagettftext": {
    "name": "imagettftext",
    "url": "function.imagettftext",
    "spec": {
      "parameters": "resource $image, float $size, float $angle, int $x, int $y, int $color, string $fontfile, string $text",
      "returnValue": "array",
      "ref": null
    }
  },
  "imagetypes": {
    "name": "imagetypes",
    "url": "function.imagetypes",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "imagewbmp": {
    "name": "imagewbmp",
    "url": "function.imagewbmp",
    "spec": {
      "parameters": "resource $image [, mixed $to [, int $foreground ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagewebp": {
    "name": "imagewebp",
    "url": "function.imagewebp",
    "spec": {
      "parameters": "resource $image [, mixed $to = NULL [, int $quality = 80 ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imagexbm": {
    "name": "imagexbm",
    "url": "function.imagexbm",
    "spec": {
      "parameters": "resource $image, string $filename [, int $foreground ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "image_type_to_extension": {
    "name": "image_type_to_extension",
    "url": "function.image-type-to-extension",
    "spec": {
      "parameters": "int $imagetype [, bool $include_dot = TRUE ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "image_type_to_mime_type": {
    "name": "image_type_to_mime_type",
    "url": "function.image-type-to-mime-type",
    "spec": {
      "parameters": "int $imagetype",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_8bit": {
    "name": "imap_8bit",
    "url": "function.imap-8bit",
    "spec": {
      "parameters": "string $string",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_alerts": {
    "name": "imap_alerts",
    "url": "function.imap-alerts",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_append": {
    "name": "imap_append",
    "url": "function.imap-append",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox, string $message [, string $options = NULL [, string $internal_date = NULL ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_base64": {
    "name": "imap_base64",
    "url": "function.imap-base64",
    "spec": {
      "parameters": "string $text",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_binary": {
    "name": "imap_binary",
    "url": "function.imap-binary",
    "spec": {
      "parameters": "string $string",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_body": {
    "name": "imap_body",
    "url": "function.imap-body",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number [, int $options = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_bodystruct": {
    "name": "imap_bodystruct",
    "url": "function.imap-bodystruct",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number, string $section",
      "returnValue": "object",
      "ref": null
    }
  },
  "imap_check": {
    "name": "imap_check",
    "url": "function.imap-check",
    "spec": {
      "parameters": "resource $imap_stream",
      "returnValue": "object",
      "ref": null
    }
  },
  "imap_clearflag_full": {
    "name": "imap_clearflag_full",
    "url": "function.imap-clearflag-full",
    "spec": {
      "parameters": "resource $imap_stream, string $sequence, string $flag [, int $options = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_close": {
    "name": "imap_close",
    "url": "function.imap-close",
    "spec": {
      "parameters": "resource $imap_stream [, int $flag = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_create": {
    "name": "imap_create",
    "url": "function.imap-create",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox",
      "returnValue": "bool",
      "ref": {
        "name": "imap_createmailbox()",
        "url": "function.imap-createmailbox"
      }
    }
  },
  "imap_createmailbox": {
    "name": "imap_createmailbox",
    "url": "function.imap-createmailbox",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_delete": {
    "name": "imap_delete",
    "url": "function.imap-delete",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number [, int $options = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_deletemailbox": {
    "name": "imap_deletemailbox",
    "url": "function.imap-deletemailbox",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_errors": {
    "name": "imap_errors",
    "url": "function.imap-errors",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_expunge": {
    "name": "imap_expunge",
    "url": "function.imap-expunge",
    "spec": {
      "parameters": "resource $imap_stream",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_fetchbody": {
    "name": "imap_fetchbody",
    "url": "function.imap-fetchbody",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number, string $section [, int $options = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_fetchheader": {
    "name": "imap_fetchheader",
    "url": "function.imap-fetchheader",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number [, int $options = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_fetchmime": {
    "name": "imap_fetchmime",
    "url": "function.imap-fetchmime",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number, string $section [, int $options = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_fetchstructure": {
    "name": "imap_fetchstructure",
    "url": "function.imap-fetchstructure",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number [, int $options = 0 ]",
      "returnValue": "object",
      "ref": null
    }
  },
  "imap_fetchtext": {
    "name": "imap_fetchtext",
    "url": "function.imap-fetchtext",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number [, int $options = 0 ]",
      "returnValue": "string",
      "ref": {
        "name": "imap_body()",
        "url": "function.imap-body"
      }
    }
  },
  "imap_fetch_overview": {
    "name": "imap_fetch_overview",
    "url": "function.imap-fetch-overview",
    "spec": {
      "parameters": "resource $imap_stream, string $sequence [, int $options = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_gc": {
    "name": "imap_gc",
    "url": "function.imap-gc",
    "spec": {
      "parameters": "resource $imap_stream, int $caches",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_getacl": {
    "name": "imap_getacl",
    "url": "function.imap-getacl",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_getmailboxes": {
    "name": "imap_getmailboxes",
    "url": "function.imap-getmailboxes",
    "spec": {
      "parameters": "resource $imap_stream, string $ref, string $pattern",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_getsubscribed": {
    "name": "imap_getsubscribed",
    "url": "function.imap-getsubscribed",
    "spec": {
      "parameters": "resource $imap_stream, string $ref, string $pattern",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_get_quota": {
    "name": "imap_get_quota",
    "url": "function.imap-get-quota",
    "spec": {
      "parameters": "resource $imap_stream, string $quota_root",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_get_quotaroot": {
    "name": "imap_get_quotaroot",
    "url": "function.imap-get-quotaroot",
    "spec": {
      "parameters": "resource $imap_stream, string $quota_root",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_header": {
    "name": "imap_header",
    "url": "function.imap-header",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number [, int $fromlength = 0 [, int $subjectlength = 0 [, string $defaulthost = NULL ]]]",
      "returnValue": "object",
      "ref": {
        "name": "imap_headerinfo()",
        "url": "function.imap-headerinfo"
      }
    }
  },
  "imap_headerinfo": {
    "name": "imap_headerinfo",
    "url": "function.imap-headerinfo",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number [, int $fromlength = 0 [, int $subjectlength = 0 [, string $defaulthost = NULL ]]]",
      "returnValue": "object",
      "ref": null
    }
  },
  "imap_headers": {
    "name": "imap_headers",
    "url": "function.imap-headers",
    "spec": {
      "parameters": "resource $imap_stream",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_last_error": {
    "name": "imap_last_error",
    "url": "function.imap-last-error",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_list": {
    "name": "imap_list",
    "url": "function.imap-list",
    "spec": {
      "parameters": "resource $imap_stream, string $ref, string $pattern",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_listmailbox": {
    "name": "imap_listmailbox",
    "url": "function.imap-listmailbox",
    "spec": {
      "parameters": "resource $imap_stream, string $ref, string $pattern",
      "returnValue": "array",
      "ref": {
        "name": "imap_list()",
        "url": "function.imap-list"
      }
    }
  },
  "imap_listscan": {
    "name": "imap_listscan",
    "url": "function.imap-listscan",
    "spec": {
      "parameters": "resource $imap_stream, string $ref, string $pattern, string $content",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_listsubscribed": {
    "name": "imap_listsubscribed",
    "url": "function.imap-listsubscribed",
    "spec": {
      "parameters": "resource $imap_stream, string $ref, string $pattern",
      "returnValue": "array",
      "ref": {
        "name": "imap_lsub()",
        "url": "function.imap-lsub"
      }
    }
  },
  "imap_lsub": {
    "name": "imap_lsub",
    "url": "function.imap-lsub",
    "spec": {
      "parameters": "resource $imap_stream, string $ref, string $pattern",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_mail": {
    "name": "imap_mail",
    "url": "function.imap-mail",
    "spec": {
      "parameters": "string $to, string $subject, string $message [, string $additional_headers = NULL [, string $cc = NULL [, string $bcc = NULL [, string $rpath = NULL ]]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_mailboxmsginfo": {
    "name": "imap_mailboxmsginfo",
    "url": "function.imap-mailboxmsginfo",
    "spec": {
      "parameters": "resource $imap_stream",
      "returnValue": "object",
      "ref": null
    }
  },
  "imap_mail_compose": {
    "name": "imap_mail_compose",
    "url": "function.imap-mail-compose",
    "spec": {
      "parameters": "array $envelope, array $body",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_mail_copy": {
    "name": "imap_mail_copy",
    "url": "function.imap-mail-copy",
    "spec": {
      "parameters": "resource $imap_stream, string $msglist, string $mailbox [, int $options = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_mail_move": {
    "name": "imap_mail_move",
    "url": "function.imap-mail-move",
    "spec": {
      "parameters": "resource $imap_stream, string $msglist, string $mailbox [, int $options = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_mime_header_decode": {
    "name": "imap_mime_header_decode",
    "url": "function.imap-mime-header-decode",
    "spec": {
      "parameters": "string $text",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_msgno": {
    "name": "imap_msgno",
    "url": "function.imap-msgno",
    "spec": {
      "parameters": "resource $imap_stream, int $uid",
      "returnValue": "int",
      "ref": null
    }
  },
  "imap_mutf7_to_utf8": {
    "name": "imap_mutf7_to_utf8",
    "url": "function.imap-mutf7-to-utf8",
    "spec": {
      "parameters": "string $in",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_num_msg": {
    "name": "imap_num_msg",
    "url": "function.imap-num-msg",
    "spec": {
      "parameters": "resource $imap_stream",
      "returnValue": "int",
      "ref": null
    }
  },
  "imap_num_recent": {
    "name": "imap_num_recent",
    "url": "function.imap-num-recent",
    "spec": {
      "parameters": "resource $imap_stream",
      "returnValue": "int",
      "ref": null
    }
  },
  "imap_open": {
    "name": "imap_open",
    "url": "function.imap-open",
    "spec": {
      "parameters": "string $mailbox, string $username, string $password [, int $options = 0 [, int $n_retries = 0 [, array $params = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "imap_ping": {
    "name": "imap_ping",
    "url": "function.imap-ping",
    "spec": {
      "parameters": "resource $imap_stream",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_qprint": {
    "name": "imap_qprint",
    "url": "function.imap-qprint",
    "spec": {
      "parameters": "string $string",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_rename": {
    "name": "imap_rename",
    "url": "function.imap-rename",
    "spec": {
      "parameters": "resource $imap_stream, string $old_mbox, string $new_mbox",
      "returnValue": "bool",
      "ref": {
        "name": "imap_renamemailbox()",
        "url": "function.imap-renamemailbox"
      }
    }
  },
  "imap_renamemailbox": {
    "name": "imap_renamemailbox",
    "url": "function.imap-renamemailbox",
    "spec": {
      "parameters": "resource $imap_stream, string $old_mbox, string $new_mbox",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_reopen": {
    "name": "imap_reopen",
    "url": "function.imap-reopen",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox [, int $options = 0 [, int $n_retries = 0 ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_rfc822_parse_adrlist": {
    "name": "imap_rfc822_parse_adrlist",
    "url": "function.imap-rfc822-parse-adrlist",
    "spec": {
      "parameters": "string $address, string $default_host",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_rfc822_parse_headers": {
    "name": "imap_rfc822_parse_headers",
    "url": "function.imap-rfc822-parse-headers",
    "spec": {
      "parameters": "string $headers [, string $defaulthost = \"UNKNOWN\" ]",
      "returnValue": "object",
      "ref": null
    }
  },
  "imap_rfc822_write_address": {
    "name": "imap_rfc822_write_address",
    "url": "function.imap-rfc822-write-address",
    "spec": {
      "parameters": "string $mailbox, string $host, string $personal",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_savebody": {
    "name": "imap_savebody",
    "url": "function.imap-savebody",
    "spec": {
      "parameters": "resource $imap_stream, mixed $file, int $msg_number [, string $part_number = \"\" [, int $options = 0 ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_scan": {
    "name": "imap_scan",
    "url": "function.imap-scan",
    "spec": {
      "parameters": "resource $imap_stream, string $ref, string $pattern, string $content",
      "returnValue": "array",
      "ref": {
        "name": "imap_listscan()",
        "url": "function.imap-listscan"
      }
    }
  },
  "imap_scanmailbox": {
    "name": "imap_scanmailbox",
    "url": "function.imap-scanmailbox",
    "spec": {
      "parameters": "resource $imap_stream, string $ref, string $pattern, string $content",
      "returnValue": "array",
      "ref": {
        "name": "imap_listscan()",
        "url": "function.imap-listscan"
      }
    }
  },
  "imap_search": {
    "name": "imap_search",
    "url": "function.imap-search",
    "spec": {
      "parameters": "resource $imap_stream, string $criteria [, int $options = SE_FREE [, string $charset = NULL ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_setacl": {
    "name": "imap_setacl",
    "url": "function.imap-setacl",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox, string $id, string $rights",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_setflag_full": {
    "name": "imap_setflag_full",
    "url": "function.imap-setflag-full",
    "spec": {
      "parameters": "resource $imap_stream, string $sequence, string $flag [, int $options = NIL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_set_quota": {
    "name": "imap_set_quota",
    "url": "function.imap-set-quota",
    "spec": {
      "parameters": "resource $imap_stream, string $quota_root, int $quota_limit",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_sort": {
    "name": "imap_sort",
    "url": "function.imap-sort",
    "spec": {
      "parameters": "resource $imap_stream, int $criteria, int $reverse [, int $options = 0 [, string $search_criteria = NULL [, string $charset = NULL ]]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_status": {
    "name": "imap_status",
    "url": "function.imap-status",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox, int $options",
      "returnValue": "object",
      "ref": null
    }
  },
  "imap_subscribe": {
    "name": "imap_subscribe",
    "url": "function.imap-subscribe",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_thread": {
    "name": "imap_thread",
    "url": "function.imap-thread",
    "spec": {
      "parameters": "resource $imap_stream [, int $options = SE_FREE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "imap_timeout": {
    "name": "imap_timeout",
    "url": "function.imap-timeout",
    "spec": {
      "parameters": "int $timeout_type [, int $timeout = -1 ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "imap_uid": {
    "name": "imap_uid",
    "url": "function.imap-uid",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number",
      "returnValue": "int",
      "ref": null
    }
  },
  "imap_undelete": {
    "name": "imap_undelete",
    "url": "function.imap-undelete",
    "spec": {
      "parameters": "resource $imap_stream, int $msg_number [, int $flags = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_unsubscribe": {
    "name": "imap_unsubscribe",
    "url": "function.imap-unsubscribe",
    "spec": {
      "parameters": "resource $imap_stream, string $mailbox",
      "returnValue": "bool",
      "ref": null
    }
  },
  "imap_utf7_decode": {
    "name": "imap_utf7_decode",
    "url": "function.imap-utf7-decode",
    "spec": {
      "parameters": "string $text",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_utf7_encode": {
    "name": "imap_utf7_encode",
    "url": "function.imap-utf7-encode",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_utf8": {
    "name": "imap_utf8",
    "url": "function.imap-utf8",
    "spec": {
      "parameters": "string $mime_encoded_text",
      "returnValue": "string",
      "ref": null
    }
  },
  "imap_utf8_to_mutf7": {
    "name": "imap_utf8_to_mutf7",
    "url": "function.imap-utf8-to-mutf7",
    "spec": {
      "parameters": "string $in",
      "returnValue": "string",
      "ref": null
    }
  },
  "implode": {
    "name": "implode",
    "url": "function.implode",
    "spec": {
      "parameters": "string $glue, array $pieces",
      "returnValue": "string",
      "ref": null
    }
  },
  "import_request_variables": {
    "name": "import_request_variables",
    "url": "function.import-request-variables",
    "spec": {
      "parameters": "string $types [, string $prefix ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "inclued_get_data": {
    "name": "inclued_get_data",
    "url": "function.inclued-get-data",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "inet_ntop": {
    "name": "inet_ntop",
    "url": "function.inet-ntop",
    "spec": {
      "parameters": "string $in_addr",
      "returnValue": "string",
      "ref": null
    }
  },
  "inet_pton": {
    "name": "inet_pton",
    "url": "function.inet-pton",
    "spec": {
      "parameters": "string $address",
      "returnValue": "string",
      "ref": null
    }
  },
  "inflate_add": {
    "name": "inflate_add",
    "url": "function.inflate-add",
    "spec": {
      "parameters": "resource $context, string $encoded_data [, int $flush_mode = ZLIB_SYNC_FLUSH ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "inflate_get_read_len": {
    "name": "inflate_get_read_len",
    "url": "function.inflate-get-read-len",
    "spec": {
      "parameters": "resource $resource",
      "returnValue": "int",
      "ref": null
    }
  },
  "inflate_get_status": {
    "name": "inflate_get_status",
    "url": "function.inflate-get-status",
    "spec": {
      "parameters": "resource $resource",
      "returnValue": "int",
      "ref": null
    }
  },
  "inflate_init": {
    "name": "inflate_init",
    "url": "function.inflate-init",
    "spec": {
      "parameters": "int $encoding [, array $options = array() ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ingres_autocommit": {
    "name": "ingres_autocommit",
    "url": "function.ingres-autocommit",
    "spec": {
      "parameters": "resource $link",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_autocommit_state": {
    "name": "ingres_autocommit_state",
    "url": "function.ingres-autocommit-state",
    "spec": {
      "parameters": "resource $link",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_charset": {
    "name": "ingres_charset",
    "url": "function.ingres-charset",
    "spec": {
      "parameters": "resource $link",
      "returnValue": "string",
      "ref": null
    }
  },
  "ingres_close": {
    "name": "ingres_close",
    "url": "function.ingres-close",
    "spec": {
      "parameters": "resource $link",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_commit": {
    "name": "ingres_commit",
    "url": "function.ingres-commit",
    "spec": {
      "parameters": "resource $link",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_connect": {
    "name": "ingres_connect",
    "url": "function.ingres-connect",
    "spec": {
      "parameters": "[ string $database [, string $username [, string $password [, array $options ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ingres_cursor": {
    "name": "ingres_cursor",
    "url": "function.ingres-cursor",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "string",
      "ref": null
    }
  },
  "ingres_errno": {
    "name": "ingres_errno",
    "url": "function.ingres-errno",
    "spec": {
      "parameters": "[ resource $link ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ingres_error": {
    "name": "ingres_error",
    "url": "function.ingres-error",
    "spec": {
      "parameters": "[ resource $link ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ingres_errsqlstate": {
    "name": "ingres_errsqlstate",
    "url": "function.ingres-errsqlstate",
    "spec": {
      "parameters": "[ resource $link ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ingres_escape_string": {
    "name": "ingres_escape_string",
    "url": "function.ingres-escape-string",
    "spec": {
      "parameters": "resource $link, string $source_string",
      "returnValue": "string",
      "ref": null
    }
  },
  "ingres_execute": {
    "name": "ingres_execute",
    "url": "function.ingres-execute",
    "spec": {
      "parameters": "resource $result [, array $params [, string $types ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_fetch_array": {
    "name": "ingres_fetch_array",
    "url": "function.ingres-fetch-array",
    "spec": {
      "parameters": "resource $result [, int $result_type ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "ingres_fetch_assoc": {
    "name": "ingres_fetch_assoc",
    "url": "function.ingres-fetch-assoc",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "array",
      "ref": null
    }
  },
  "ingres_fetch_object": {
    "name": "ingres_fetch_object",
    "url": "function.ingres-fetch-object",
    "spec": {
      "parameters": "resource $result [, int $result_type ]",
      "returnValue": "object",
      "ref": null
    }
  },
  "ingres_fetch_proc_return": {
    "name": "ingres_fetch_proc_return",
    "url": "function.ingres-fetch-proc-return",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "ingres_fetch_row": {
    "name": "ingres_fetch_row",
    "url": "function.ingres-fetch-row",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "array",
      "ref": null
    }
  },
  "ingres_field_length": {
    "name": "ingres_field_length",
    "url": "function.ingres-field-length",
    "spec": {
      "parameters": "resource $result, int $index",
      "returnValue": "int",
      "ref": null
    }
  },
  "ingres_field_name": {
    "name": "ingres_field_name",
    "url": "function.ingres-field-name",
    "spec": {
      "parameters": "resource $result, int $index",
      "returnValue": "string",
      "ref": null
    }
  },
  "ingres_field_nullable": {
    "name": "ingres_field_nullable",
    "url": "function.ingres-field-nullable",
    "spec": {
      "parameters": "resource $result, int $index",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_field_precision": {
    "name": "ingres_field_precision",
    "url": "function.ingres-field-precision",
    "spec": {
      "parameters": "resource $result, int $index",
      "returnValue": "int",
      "ref": null
    }
  },
  "ingres_field_scale": {
    "name": "ingres_field_scale",
    "url": "function.ingres-field-scale",
    "spec": {
      "parameters": "resource $result, int $index",
      "returnValue": "int",
      "ref": null
    }
  },
  "ingres_field_type": {
    "name": "ingres_field_type",
    "url": "function.ingres-field-type",
    "spec": {
      "parameters": "resource $result, int $index",
      "returnValue": "string",
      "ref": null
    }
  },
  "ingres_free_result": {
    "name": "ingres_free_result",
    "url": "function.ingres-free-result",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_next_error": {
    "name": "ingres_next_error",
    "url": "function.ingres-next-error",
    "spec": {
      "parameters": "[ resource $link ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_num_fields": {
    "name": "ingres_num_fields",
    "url": "function.ingres-num-fields",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "ingres_num_rows": {
    "name": "ingres_num_rows",
    "url": "function.ingres-num-rows",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "ingres_pconnect": {
    "name": "ingres_pconnect",
    "url": "function.ingres-pconnect",
    "spec": {
      "parameters": "[ string $database [, string $username [, string $password [, array $options ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ingres_prepare": {
    "name": "ingres_prepare",
    "url": "function.ingres-prepare",
    "spec": {
      "parameters": "resource $link, string $query",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ingres_query": {
    "name": "ingres_query",
    "url": "function.ingres-query",
    "spec": {
      "parameters": "resource $link, string $query [, array $params [, string $types ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ingres_result_seek": {
    "name": "ingres_result_seek",
    "url": "function.ingres-result-seek",
    "spec": {
      "parameters": "resource $result, int $position",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_rollback": {
    "name": "ingres_rollback",
    "url": "function.ingres-rollback",
    "spec": {
      "parameters": "resource $link",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_set_environment": {
    "name": "ingres_set_environment",
    "url": "function.ingres-set-environment",
    "spec": {
      "parameters": "resource $link, array $options",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ingres_unbuffered_query": {
    "name": "ingres_unbuffered_query",
    "url": "function.ingres-unbuffered-query",
    "spec": {
      "parameters": "resource $link, string $query [, array $params [, string $types ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ini_alter": {
    "name": "ini_alter",
    "url": "function.ini-alter",
    "spec": {
      "parameters": "string $varname, string $newvalue",
      "returnValue": "string",
      "ref": {
        "name": "ini_set()",
        "url": "function.ini-set"
      }
    }
  },
  "ini_get": {
    "name": "ini_get",
    "url": "function.ini-get",
    "spec": {
      "parameters": "string $varname",
      "returnValue": "string",
      "ref": null
    }
  },
  "ini_get_all": {
    "name": "ini_get_all",
    "url": "function.ini-get-all",
    "spec": {
      "parameters": "[ string $extension [, bool $details = TRUE ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "ini_restore": {
    "name": "ini_restore",
    "url": "function.ini-restore",
    "spec": {
      "parameters": "string $varname",
      "returnValue": "void",
      "ref": null
    }
  },
  "ini_set": {
    "name": "ini_set",
    "url": "function.ini-set",
    "spec": {
      "parameters": "string $varname, string $newvalue",
      "returnValue": "string",
      "ref": null
    }
  },
  "inotify_add_watch": {
    "name": "inotify_add_watch",
    "url": "function.inotify-add-watch",
    "spec": {
      "parameters": "resource $inotify_instance, string $pathname, int $mask",
      "returnValue": "int",
      "ref": null
    }
  },
  "inotify_init": {
    "name": "inotify_init",
    "url": "function.inotify-init",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "inotify_queue_len": {
    "name": "inotify_queue_len",
    "url": "function.inotify-queue-len",
    "spec": {
      "parameters": "resource $inotify_instance",
      "returnValue": "int",
      "ref": null
    }
  },
  "inotify_read": {
    "name": "inotify_read",
    "url": "function.inotify-read",
    "spec": {
      "parameters": "resource $inotify_instance",
      "returnValue": "array",
      "ref": null
    }
  },
  "inotify_rm_watch": {
    "name": "inotify_rm_watch",
    "url": "function.inotify-rm-watch",
    "spec": {
      "parameters": "resource $inotify_instance, int $watch_descriptor",
      "returnValue": "bool",
      "ref": null
    }
  },
  "intdiv": {
    "name": "intdiv",
    "url": "function.intdiv",
    "spec": {
      "parameters": "int $dividend, int $divisor",
      "returnValue": "int",
      "ref": null
    }
  },
  "interface_exists": {
    "name": "interface_exists",
    "url": "function.interface-exists",
    "spec": {
      "parameters": "string $interface_name [, bool $autoload = TRUE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "intl_error_name": {
    "name": "intl_error_name",
    "url": "function.intl-error-name",
    "spec": {
      "parameters": "int $error_code",
      "returnValue": "string",
      "ref": null
    }
  },
  "intl_get_error_code": {
    "name": "intl_get_error_code",
    "url": "function.intl-get-error-code",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "intl_get_error_message": {
    "name": "intl_get_error_message",
    "url": "function.intl-get-error-message",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "intl_is_failure": {
    "name": "intl_is_failure",
    "url": "function.intl-is-failure",
    "spec": {
      "parameters": "int $error_code",
      "returnValue": "bool",
      "ref": null
    }
  },
  "intval": {
    "name": "intval",
    "url": "function.intval",
    "spec": {
      "parameters": "mixed $var [, int $base = 10 ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "in_array": {
    "name": "in_array",
    "url": "function.in-array",
    "spec": {
      "parameters": "mixed $needle, array $haystack [, bool $strict = FALSE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ip2long": {
    "name": "ip2long",
    "url": "function.ip2long",
    "spec": {
      "parameters": "string $ip_address",
      "returnValue": "int",
      "ref": null
    }
  },
  "iptcembed": {
    "name": "iptcembed",
    "url": "function.iptcembed",
    "spec": {
      "parameters": "string $iptcdata, string $jpeg_file_name [, int $spool = 0 ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "iptcparse": {
    "name": "iptcparse",
    "url": "function.iptcparse",
    "spec": {
      "parameters": "string $iptcblock",
      "returnValue": "array",
      "ref": null
    }
  },
  "isset": {
    "name": "isset",
    "url": "function.isset",
    "spec": {
      "isStructure": true,
      "parameters": "mixed $var [, mixed $... ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_a": {
    "name": "is_a",
    "url": "function.is-a",
    "spec": {
      "parameters": "object $object, string $class_name [, bool $allow_string = FALSE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_array": {
    "name": "is_array",
    "url": "function.is-array",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_bool": {
    "name": "is_bool",
    "url": "function.is-bool",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_callable": {
    "name": "is_callable",
    "url": "function.is-callable",
    "spec": {
      "parameters": "mixed $var [, bool $syntax_only = FALSE [, string &$callable_name ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_countable": {
    "name": "is_countable",
    "url": "function.is-countable",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_dir": {
    "name": "is_dir",
    "url": "function.is-dir",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_double": {
    "name": "is_double",
    "url": "function.is-double",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": {
        "name": "is_float()",
        "url": "function.is-float"
      }
    }
  },
  "is_executable": {
    "name": "is_executable",
    "url": "function.is-executable",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_file": {
    "name": "is_file",
    "url": "function.is-file",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_finite": {
    "name": "is_finite",
    "url": "function.is-finite",
    "spec": {
      "parameters": "float $val",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_float": {
    "name": "is_float",
    "url": "function.is-float",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_infinite": {
    "name": "is_infinite",
    "url": "function.is-infinite",
    "spec": {
      "parameters": "float $val",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_int": {
    "name": "is_int",
    "url": "function.is-int",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_integer": {
    "name": "is_integer",
    "url": "function.is-integer",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": {
        "name": "is_int()",
        "url": "function.is-int"
      }
    }
  },
  "is_iterable": {
    "name": "is_iterable",
    "url": "function.is-iterable",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_link": {
    "name": "is_link",
    "url": "function.is-link",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_long": {
    "name": "is_long",
    "url": "function.is-long",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": {
        "name": "is_int()",
        "url": "function.is-int"
      }
    }
  },
  "is_nan": {
    "name": "is_nan",
    "url": "function.is-nan",
    "spec": {
      "parameters": "float $val",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_null": {
    "name": "is_null",
    "url": "function.is-null",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_numeric": {
    "name": "is_numeric",
    "url": "function.is-numeric",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_object": {
    "name": "is_object",
    "url": "function.is-object",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_readable": {
    "name": "is_readable",
    "url": "function.is-readable",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_real": {
    "name": "is_real",
    "url": "function.is-real",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": {
        "name": "is_float()",
        "url": "function.is-float"
      }
    }
  },
  "is_resource": {
    "name": "is_resource",
    "url": "function.is-resource",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_scalar": {
    "name": "is_scalar",
    "url": "function.is-scalar",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_soap_fault": {
    "name": "is_soap_fault",
    "url": "function.is-soap-fault",
    "spec": {
      "parameters": "mixed $object",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_string": {
    "name": "is_string",
    "url": "function.is-string",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_subclass_of": {
    "name": "is_subclass_of",
    "url": "function.is-subclass-of",
    "spec": {
      "parameters": "mixed $object, string $class_name [, bool $allow_string = TRUE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_tainted": {
    "name": "is_tainted",
    "url": "function.is-tainted",
    "spec": {
      "parameters": "string $string",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_uploaded_file": {
    "name": "is_uploaded_file",
    "url": "function.is-uploaded-file",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_writable": {
    "name": "is_writable",
    "url": "function.is-writable",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "is_writeable": {
    "name": "is_writeable",
    "url": "function.is-writeable",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": {
        "name": "is_writable()",
        "url": "function.is-writable"
      }
    }
  },
  "iterator_apply": {
    "name": "iterator_apply",
    "url": "function.iterator-apply",
    "spec": {
      "parameters": "Traversable $iterator, callable $function [, array $args ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "iterator_count": {
    "name": "iterator_count",
    "url": "function.iterator-count",
    "spec": {
      "parameters": "Traversable $iterator",
      "returnValue": "int",
      "ref": null
    }
  },
  "iterator_to_array": {
    "name": "iterator_to_array",
    "url": "function.iterator-to-array",
    "spec": {
      "parameters": "Traversable $iterator [, bool $use_keys = TRUE ]",
      "returnValue": "array",
      "ref": null
    }
  }
};
