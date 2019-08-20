functions.d = {
  "date": {
    "name": "date",
    "url": "function.date",
    "spec": {
      "parameters": "string $format [, int $timestamp = time() ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "date_add": {
    "name": "date_add",
    "url": "function.date-add",
    "spec": {
      "parameters": "DateInterval $interval",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::add()",
        "url": "datetime.add"
      }
    }
  },
  "date_create": {
    "name": "date_create",
    "url": "function.date-create",
    "spec": {
      "parameters": "[ string $time = \"now\" [, DateTimeZone $timezone = NULL ]]",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::__construct()",
        "url": "datetime.construct"
      }
    }
  },
  "date_create_from_format": {
    "name": "date_create_from_format",
    "url": "function.date-create-from-format",
    "spec": {
      "parameters": "string $format, string $time [, DateTimeZone $timezone ]",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::createFromFormat()",
        "url": "datetime.createfromformat"
      }
    }
  },
  "date_create_immutable": {
    "name": "date_create_immutable",
    "url": "function.date-create-immutable",
    "spec": {
      "parameters": "[ string $time = \"now\" [, DateTimeZone $timezone = NULL ]]",
      "returnValue": "DateTimeImmutable",
      "ref": {
        "name": "DateTimeImmutable::__construct()",
        "url": "datetimeimmutable.construct"
      }
    }
  },
  "date_create_immutable_from_format": {
    "name": "date_create_immutable_from_format",
    "url": "function.date-create-immutable-from-format",
    "spec": {
      "parameters": "string $format, string $time [, DateTimeZone $timezone ]",
      "returnValue": "DateTimeImmutable",
      "ref": {
        "name": "DateTimeImmutable::createFromFormat()",
        "url": "datetimeimmutable.createfromformat"
      }
    }
  },
  "date_date_set": {
    "name": "date_date_set",
    "url": "function.date-date-set",
    "spec": {
      "parameters": "int $year, int $month, int $day",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::setDate()",
        "url": "datetime.setdate"
      }
    }
  },
  "date_default_timezone_get": {
    "name": "date_default_timezone_get",
    "url": "function.date-default-timezone-get",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "date_default_timezone_set": {
    "name": "date_default_timezone_set",
    "url": "function.date-default-timezone-set",
    "spec": {
      "parameters": "string $timezone_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "date_diff": {
    "name": "date_diff",
    "url": "function.date-diff",
    "spec": {
      "parameters": "DateTimeInterface $datetime2 [, bool $absolute = false ]",
      "returnValue": "DateInterval",
      "ref": {
        "name": "DateTime::diff()",
        "url": "datetime.diff"
      }
    }
  },
  "date_format": {
    "name": "date_format",
    "url": "function.date-format",
    "spec": {
      "parameters": "string $format",
      "returnValue": "string",
      "ref": {
        "name": "DateTime::format()",
        "url": "datetime.format"
      }
    }
  },
  "date_get_last_errors": {
    "name": "date_get_last_errors",
    "url": "function.date-get-last-errors",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": {
        "name": "DateTime::getLastErrors()",
        "url": "datetime.getlasterrors"
      }
    }
  },
  "date_interval_create_from_date_string": {
    "name": "date_interval_create_from_date_string",
    "url": "function.date-interval-create-from-date-string",
    "spec": {
      "parameters": "string $time",
      "returnValue": "DateInterval",
      "ref": {
        "name": "DateInterval::createFromDateString()",
        "url": "dateinterval.createfromdatestring"
      }
    }
  },
  "date_interval_format": {
    "name": "date_interval_format",
    "url": "function.date-interval-format",
    "spec": {
      "parameters": "string $format",
      "returnValue": "string",
      "ref": {
        "name": "DateInterval::format()",
        "url": "dateinterval.format"
      }
    }
  },
  "date_isodate_set": {
    "name": "date_isodate_set",
    "url": "function.date-isodate-set",
    "spec": {
      "parameters": "int $year, int $week [, int $day = 1 ]",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::setISODate()",
        "url": "datetime.setisodate"
      }
    }
  },
  "date_modify": {
    "name": "date_modify",
    "url": "function.date-modify",
    "spec": {
      "parameters": "string $modify",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::modify()",
        "url": "datetime.modify"
      }
    }
  },
  "date_offset_get": {
    "name": "date_offset_get",
    "url": "function.date-offset-get",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": {
        "name": "DateTime::getOffset()",
        "url": "datetime.getoffset"
      }
    }
  },
  "date_parse": {
    "name": "date_parse",
    "url": "function.date-parse",
    "spec": {
      "parameters": "string $date",
      "returnValue": "array",
      "ref": null
    }
  },
  "date_parse_from_format": {
    "name": "date_parse_from_format",
    "url": "function.date-parse-from-format",
    "spec": {
      "parameters": "string $format, string $date",
      "returnValue": "array",
      "ref": null
    }
  },
  "date_sub": {
    "name": "date_sub",
    "url": "function.date-sub",
    "spec": {
      "parameters": "DateInterval $interval",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::sub()",
        "url": "datetime.sub"
      }
    }
  },
  "date_sunrise": {
    "name": "date_sunrise",
    "url": "function.date-sunrise",
    "spec": {
      "parameters": "int $timestamp [, int $format = SUNFUNCS_RET_STRING [, float $latitude = ini_get(\"date.default_latitude\") [, float $longitude = ini_get(\"date.default_longitude\") [, float $zenith = ini_get(\"date.sunrise_zenith\") [, float $gmt_offset = 0 ]]]]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "date_sunset": {
    "name": "date_sunset",
    "url": "function.date-sunset",
    "spec": {
      "parameters": "int $timestamp [, int $format = SUNFUNCS_RET_STRING [, float $latitude = ini_get(\"date.default_latitude\") [, float $longitude = ini_get(\"date.default_longitude\") [, float $zenith = ini_get(\"date.sunset_zenith\") [, float $gmt_offset = 0 ]]]]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "date_sun_info": {
    "name": "date_sun_info",
    "url": "function.date-sun-info",
    "spec": {
      "parameters": "int $time, float $latitude, float $longitude",
      "returnValue": "array",
      "ref": null
    }
  },
  "date_timestamp_get": {
    "name": "date_timestamp_get",
    "url": "function.date-timestamp-get",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": {
        "name": "DateTime::getTimestamp()",
        "url": "datetime.gettimestamp"
      }
    }
  },
  "date_timestamp_set": {
    "name": "date_timestamp_set",
    "url": "function.date-timestamp-set",
    "spec": {
      "parameters": "int $unixtimestamp",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::setTimestamp()",
        "url": "datetime.settimestamp"
      }
    }
  },
  "date_timezone_get": {
    "name": "date_timezone_get",
    "url": "function.date-timezone-get",
    "spec": {
      "parameters": "void",
      "returnValue": "DateTimeZone",
      "ref": {
        "name": "DateTime::getTimezone()",
        "url": "datetime.gettimezone"
      }
    }
  },
  "date_timezone_set": {
    "name": "date_timezone_set",
    "url": "function.date-timezone-set",
    "spec": {
      "parameters": "DateTimeZone $timezone",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::setTimezone()",
        "url": "datetime.settimezone"
      }
    }
  },
  "date_time_set": {
    "name": "date_time_set",
    "url": "function.date-time-set",
    "spec": {
      "parameters": "int $hour, int $minute [, int $second = 0 ]",
      "returnValue": "DateTime",
      "ref": {
        "name": "DateTime::setTime()",
        "url": "datetime.settime"
      }
    }
  },
  "db2_autocommit": {
    "name": "db2_autocommit",
    "url": "function.db2-autocommit",
    "spec": {
      "parameters": "resource $connection [, bool $value ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "db2_bind_param": {
    "name": "db2_bind_param",
    "url": "function.db2-bind-param",
    "spec": {
      "parameters": "resource $stmt, int $parameter-number, string $variable-name [, int $parameter-type [, int $data-type = 0 [, int $precision = -1 [, int $scale = 0 ]]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_client_info": {
    "name": "db2_client_info",
    "url": "function.db2-client-info",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "object",
      "ref": null
    }
  },
  "db2_close": {
    "name": "db2_close",
    "url": "function.db2-close",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_columns": {
    "name": "db2_columns",
    "url": "function.db2-columns",
    "spec": {
      "parameters": "resource $connection [, string $qualifier [, string $schema [, string $table-name [, string $column-name ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_column_privileges": {
    "name": "db2_column_privileges",
    "url": "function.db2-column-privileges",
    "spec": {
      "parameters": "resource $connection [, string $qualifier [, string $schema [, string $table-name [, string $column-name ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_commit": {
    "name": "db2_commit",
    "url": "function.db2-commit",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_connect": {
    "name": "db2_connect",
    "url": "function.db2-connect",
    "spec": {
      "parameters": "string $database, string $username, string $password [, array $options ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_conn_error": {
    "name": "db2_conn_error",
    "url": "function.db2-conn-error",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_conn_errormsg": {
    "name": "db2_conn_errormsg",
    "url": "function.db2-conn-errormsg",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_cursor_type": {
    "name": "db2_cursor_type",
    "url": "function.db2-cursor-type",
    "spec": {
      "parameters": "resource $stmt",
      "returnValue": "int",
      "ref": null
    }
  },
  "db2_escape_string": {
    "name": "db2_escape_string",
    "url": "function.db2-escape-string",
    "spec": {
      "parameters": "string $string_literal",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_exec": {
    "name": "db2_exec",
    "url": "function.db2-exec",
    "spec": {
      "parameters": "resource $connection, string $statement [, array $options ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_execute": {
    "name": "db2_execute",
    "url": "function.db2-execute",
    "spec": {
      "parameters": "resource $stmt [, array $parameters ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_fetch_array": {
    "name": "db2_fetch_array",
    "url": "function.db2-fetch-array",
    "spec": {
      "parameters": "resource $stmt [, int $row_number = -1 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "db2_fetch_assoc": {
    "name": "db2_fetch_assoc",
    "url": "function.db2-fetch-assoc",
    "spec": {
      "parameters": "resource $stmt [, int $row_number = -1 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "db2_fetch_both": {
    "name": "db2_fetch_both",
    "url": "function.db2-fetch-both",
    "spec": {
      "parameters": "resource $stmt [, int $row_number = -1 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "db2_fetch_object": {
    "name": "db2_fetch_object",
    "url": "function.db2-fetch-object",
    "spec": {
      "parameters": "resource $stmt [, int $row_number = -1 ]",
      "returnValue": "object",
      "ref": null
    }
  },
  "db2_fetch_row": {
    "name": "db2_fetch_row",
    "url": "function.db2-fetch-row",
    "spec": {
      "parameters": "resource $stmt [, int $row_number ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_field_display_size": {
    "name": "db2_field_display_size",
    "url": "function.db2-field-display-size",
    "spec": {
      "parameters": "resource $stmt, mixed $column",
      "returnValue": "int",
      "ref": null
    }
  },
  "db2_field_name": {
    "name": "db2_field_name",
    "url": "function.db2-field-name",
    "spec": {
      "parameters": "resource $stmt, mixed $column",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_field_num": {
    "name": "db2_field_num",
    "url": "function.db2-field-num",
    "spec": {
      "parameters": "resource $stmt, mixed $column",
      "returnValue": "int",
      "ref": null
    }
  },
  "db2_field_precision": {
    "name": "db2_field_precision",
    "url": "function.db2-field-precision",
    "spec": {
      "parameters": "resource $stmt, mixed $column",
      "returnValue": "int",
      "ref": null
    }
  },
  "db2_field_scale": {
    "name": "db2_field_scale",
    "url": "function.db2-field-scale",
    "spec": {
      "parameters": "resource $stmt, mixed $column",
      "returnValue": "int",
      "ref": null
    }
  },
  "db2_field_type": {
    "name": "db2_field_type",
    "url": "function.db2-field-type",
    "spec": {
      "parameters": "resource $stmt, mixed $column",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_field_width": {
    "name": "db2_field_width",
    "url": "function.db2-field-width",
    "spec": {
      "parameters": "resource $stmt, mixed $column",
      "returnValue": "int",
      "ref": null
    }
  },
  "db2_foreign_keys": {
    "name": "db2_foreign_keys",
    "url": "function.db2-foreign-keys",
    "spec": {
      "parameters": "resource $connection, string $qualifier, string $schema, string $table-name",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_free_result": {
    "name": "db2_free_result",
    "url": "function.db2-free-result",
    "spec": {
      "parameters": "resource $stmt",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_free_stmt": {
    "name": "db2_free_stmt",
    "url": "function.db2-free-stmt",
    "spec": {
      "parameters": "resource $stmt",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_get_option": {
    "name": "db2_get_option",
    "url": "function.db2-get-option",
    "spec": {
      "parameters": "resource $resource, string $option",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_last_insert_id": {
    "name": "db2_last_insert_id",
    "url": "function.db2-last-insert-id",
    "spec": {
      "parameters": "resource $resource",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_lob_read": {
    "name": "db2_lob_read",
    "url": "function.db2-lob-read",
    "spec": {
      "parameters": "resource $stmt, int $colnum, int $length",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_next_result": {
    "name": "db2_next_result",
    "url": "function.db2-next-result",
    "spec": {
      "parameters": "resource $stmt",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_num_fields": {
    "name": "db2_num_fields",
    "url": "function.db2-num-fields",
    "spec": {
      "parameters": "resource $stmt",
      "returnValue": "int",
      "ref": null
    }
  },
  "db2_num_rows": {
    "name": "db2_num_rows",
    "url": "function.db2-num-rows",
    "spec": {
      "parameters": "resource $stmt",
      "returnValue": "int",
      "ref": null
    }
  },
  "db2_pclose": {
    "name": "db2_pclose",
    "url": "function.db2-pclose",
    "spec": {
      "parameters": "resource $resource",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_pconnect": {
    "name": "db2_pconnect",
    "url": "function.db2-pconnect",
    "spec": {
      "parameters": "string $database, string $username, string $password [, array $options ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_prepare": {
    "name": "db2_prepare",
    "url": "function.db2-prepare",
    "spec": {
      "parameters": "resource $connection, string $statement [, array $options ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_primary_keys": {
    "name": "db2_primary_keys",
    "url": "function.db2-primary-keys",
    "spec": {
      "parameters": "resource $connection, string $qualifier, string $schema, string $table-name",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_procedures": {
    "name": "db2_procedures",
    "url": "function.db2-procedures",
    "spec": {
      "parameters": "resource $connection, string $qualifier, string $schema, string $procedure",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_procedure_columns": {
    "name": "db2_procedure_columns",
    "url": "function.db2-procedure-columns",
    "spec": {
      "parameters": "resource $connection, string $qualifier, string $schema, string $procedure, string $parameter",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_result": {
    "name": "db2_result",
    "url": "function.db2-result",
    "spec": {
      "parameters": "resource $stmt, mixed $column",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "db2_rollback": {
    "name": "db2_rollback",
    "url": "function.db2-rollback",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_server_info": {
    "name": "db2_server_info",
    "url": "function.db2-server-info",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "object",
      "ref": null
    }
  },
  "db2_set_option": {
    "name": "db2_set_option",
    "url": "function.db2-set-option",
    "spec": {
      "parameters": "resource $resource, array $options, int $type",
      "returnValue": "bool",
      "ref": null
    }
  },
  "db2_special_columns": {
    "name": "db2_special_columns",
    "url": "function.db2-special-columns",
    "spec": {
      "parameters": "resource $connection, string $qualifier, string $schema, string $table_name, int $scope",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_statistics": {
    "name": "db2_statistics",
    "url": "function.db2-statistics",
    "spec": {
      "parameters": "resource $connection, string $qualifier, string $schema, string $table-name, bool $unique",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_stmt_error": {
    "name": "db2_stmt_error",
    "url": "function.db2-stmt-error",
    "spec": {
      "parameters": "[ resource $stmt ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_stmt_errormsg": {
    "name": "db2_stmt_errormsg",
    "url": "function.db2-stmt-errormsg",
    "spec": {
      "parameters": "[ resource $stmt ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "db2_tables": {
    "name": "db2_tables",
    "url": "function.db2-tables",
    "spec": {
      "parameters": "resource $connection [, string $qualifier [, string $schema [, string $table-name [, string $table-type ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "db2_table_privileges": {
    "name": "db2_table_privileges",
    "url": "function.db2-table-privileges",
    "spec": {
      "parameters": "resource $connection [, string $qualifier [, string $schema [, string $table_name ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dbase_add_record": {
    "name": "dbase_add_record",
    "url": "function.dbase-add-record",
    "spec": {
      "parameters": "resource $dbase_identifier, array $record",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dbase_close": {
    "name": "dbase_close",
    "url": "function.dbase-close",
    "spec": {
      "parameters": "resource $dbase_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dbase_create": {
    "name": "dbase_create",
    "url": "function.dbase-create",
    "spec": {
      "parameters": "string $filename, array $fields [, int $type = DBASE_TYPE_DBASE ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dbase_delete_record": {
    "name": "dbase_delete_record",
    "url": "function.dbase-delete-record",
    "spec": {
      "parameters": "resource $dbase_identifier, int $record_number",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dbase_get_header_info": {
    "name": "dbase_get_header_info",
    "url": "function.dbase-get-header-info",
    "spec": {
      "parameters": "resource $dbase_identifier",
      "returnValue": "array",
      "ref": null
    }
  },
  "dbase_get_record": {
    "name": "dbase_get_record",
    "url": "function.dbase-get-record",
    "spec": {
      "parameters": "resource $dbase_identifier, int $record_number",
      "returnValue": "array",
      "ref": null
    }
  },
  "dbase_get_record_with_names": {
    "name": "dbase_get_record_with_names",
    "url": "function.dbase-get-record-with-names",
    "spec": {
      "parameters": "resource $dbase_identifier, int $record_number",
      "returnValue": "array",
      "ref": null
    }
  },
  "dbase_numfields": {
    "name": "dbase_numfields",
    "url": "function.dbase-numfields",
    "spec": {
      "parameters": "resource $dbase_identifier",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbase_numrecords": {
    "name": "dbase_numrecords",
    "url": "function.dbase-numrecords",
    "spec": {
      "parameters": "resource $dbase_identifier",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbase_open": {
    "name": "dbase_open",
    "url": "function.dbase-open",
    "spec": {
      "parameters": "string $filename, int $mode",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dbase_pack": {
    "name": "dbase_pack",
    "url": "function.dbase-pack",
    "spec": {
      "parameters": "resource $dbase_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dbase_replace_record": {
    "name": "dbase_replace_record",
    "url": "function.dbase-replace-record",
    "spec": {
      "parameters": "resource $dbase_identifier, array $record, int $record_number",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dba_close": {
    "name": "dba_close",
    "url": "function.dba-close",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "void",
      "ref": null
    }
  },
  "dba_delete": {
    "name": "dba_delete",
    "url": "function.dba-delete",
    "spec": {
      "parameters": "string $key, resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dba_exists": {
    "name": "dba_exists",
    "url": "function.dba-exists",
    "spec": {
      "parameters": "string $key, resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dba_fetch": {
    "name": "dba_fetch",
    "url": "function.dba-fetch",
    "spec": {
      "parameters": "string $key, resource $handle",
      "returnValue": "string",
      "ref": null
    }
  },
  "dba_firstkey": {
    "name": "dba_firstkey",
    "url": "function.dba-firstkey",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "string",
      "ref": null
    }
  },
  "dba_handlers": {
    "name": "dba_handlers",
    "url": "function.dba-handlers",
    "spec": {
      "parameters": "[ bool $full_info = FALSE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "dba_insert": {
    "name": "dba_insert",
    "url": "function.dba-insert",
    "spec": {
      "parameters": "string $key, string $value, resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dba_key_split": {
    "name": "dba_key_split",
    "url": "function.dba-key-split",
    "spec": {
      "parameters": "mixed $key",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "dba_list": {
    "name": "dba_list",
    "url": "function.dba-list",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "dba_nextkey": {
    "name": "dba_nextkey",
    "url": "function.dba-nextkey",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "string",
      "ref": null
    }
  },
  "dba_open": {
    "name": "dba_open",
    "url": "function.dba-open",
    "spec": {
      "parameters": "string $path, string $mode [, string $handler [, mixed $... ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dba_optimize": {
    "name": "dba_optimize",
    "url": "function.dba-optimize",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dba_popen": {
    "name": "dba_popen",
    "url": "function.dba-popen",
    "spec": {
      "parameters": "string $path, string $mode [, string $handler [, mixed $... ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dba_replace": {
    "name": "dba_replace",
    "url": "function.dba-replace",
    "spec": {
      "parameters": "string $key, string $value, resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dba_sync": {
    "name": "dba_sync",
    "url": "function.dba-sync",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dbplus_add": {
    "name": "dbplus_add",
    "url": "function.dbplus-add",
    "spec": {
      "parameters": "resource $relation, array $tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_aql": {
    "name": "dbplus_aql",
    "url": "function.dbplus-aql",
    "spec": {
      "parameters": "string $query [, string $server [, string $dbpath ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dbplus_chdir": {
    "name": "dbplus_chdir",
    "url": "function.dbplus-chdir",
    "spec": {
      "parameters": "[ string $newdir ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "dbplus_close": {
    "name": "dbplus_close",
    "url": "function.dbplus-close",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "dbplus_curr": {
    "name": "dbplus_curr",
    "url": "function.dbplus-curr",
    "spec": {
      "parameters": "resource $relation, array &$tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_errcode": {
    "name": "dbplus_errcode",
    "url": "function.dbplus-errcode",
    "spec": {
      "parameters": "[ int $errno ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "dbplus_errno": {
    "name": "dbplus_errno",
    "url": "function.dbplus-errno",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_find": {
    "name": "dbplus_find",
    "url": "function.dbplus-find",
    "spec": {
      "parameters": "resource $relation, array $constraints, mixed $tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_first": {
    "name": "dbplus_first",
    "url": "function.dbplus-first",
    "spec": {
      "parameters": "resource $relation, array &$tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_flush": {
    "name": "dbplus_flush",
    "url": "function.dbplus-flush",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_freealllocks": {
    "name": "dbplus_freealllocks",
    "url": "function.dbplus-freealllocks",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_freelock": {
    "name": "dbplus_freelock",
    "url": "function.dbplus-freelock",
    "spec": {
      "parameters": "resource $relation, string $tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_freerlocks": {
    "name": "dbplus_freerlocks",
    "url": "function.dbplus-freerlocks",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_getlock": {
    "name": "dbplus_getlock",
    "url": "function.dbplus-getlock",
    "spec": {
      "parameters": "resource $relation, string $tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_getunique": {
    "name": "dbplus_getunique",
    "url": "function.dbplus-getunique",
    "spec": {
      "parameters": "resource $relation, int $uniqueid",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_info": {
    "name": "dbplus_info",
    "url": "function.dbplus-info",
    "spec": {
      "parameters": "resource $relation, string $key, array &$result",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_last": {
    "name": "dbplus_last",
    "url": "function.dbplus-last",
    "spec": {
      "parameters": "resource $relation, array &$tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_lockrel": {
    "name": "dbplus_lockrel",
    "url": "function.dbplus-lockrel",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_next": {
    "name": "dbplus_next",
    "url": "function.dbplus-next",
    "spec": {
      "parameters": "resource $relation, array &$tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_open": {
    "name": "dbplus_open",
    "url": "function.dbplus-open",
    "spec": {
      "parameters": "string $name",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dbplus_prev": {
    "name": "dbplus_prev",
    "url": "function.dbplus-prev",
    "spec": {
      "parameters": "resource $relation, array &$tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_rchperm": {
    "name": "dbplus_rchperm",
    "url": "function.dbplus-rchperm",
    "spec": {
      "parameters": "resource $relation, int $mask, string $user, string $group",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_rcreate": {
    "name": "dbplus_rcreate",
    "url": "function.dbplus-rcreate",
    "spec": {
      "parameters": "string $name, mixed $domlist [, bool $overwrite ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dbplus_rcrtexact": {
    "name": "dbplus_rcrtexact",
    "url": "function.dbplus-rcrtexact",
    "spec": {
      "parameters": "string $name, resource $relation [, bool $overwrite ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "dbplus_rcrtlike": {
    "name": "dbplus_rcrtlike",
    "url": "function.dbplus-rcrtlike",
    "spec": {
      "parameters": "string $name, resource $relation [, int $overwrite ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "dbplus_resolve": {
    "name": "dbplus_resolve",
    "url": "function.dbplus-resolve",
    "spec": {
      "parameters": "string $relation_name",
      "returnValue": "array",
      "ref": null
    }
  },
  "dbplus_restorepos": {
    "name": "dbplus_restorepos",
    "url": "function.dbplus-restorepos",
    "spec": {
      "parameters": "resource $relation, array $tuple",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_rkeys": {
    "name": "dbplus_rkeys",
    "url": "function.dbplus-rkeys",
    "spec": {
      "parameters": "resource $relation, mixed $domlist",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "dbplus_ropen": {
    "name": "dbplus_ropen",
    "url": "function.dbplus-ropen",
    "spec": {
      "parameters": "string $name",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dbplus_rquery": {
    "name": "dbplus_rquery",
    "url": "function.dbplus-rquery",
    "spec": {
      "parameters": "string $query [, string $dbpath ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dbplus_rrename": {
    "name": "dbplus_rrename",
    "url": "function.dbplus-rrename",
    "spec": {
      "parameters": "resource $relation, string $name",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_rsecindex": {
    "name": "dbplus_rsecindex",
    "url": "function.dbplus-rsecindex",
    "spec": {
      "parameters": "resource $relation, mixed $domlist, int $type",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "dbplus_runlink": {
    "name": "dbplus_runlink",
    "url": "function.dbplus-runlink",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_rzap": {
    "name": "dbplus_rzap",
    "url": "function.dbplus-rzap",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_savepos": {
    "name": "dbplus_savepos",
    "url": "function.dbplus-savepos",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_setindex": {
    "name": "dbplus_setindex",
    "url": "function.dbplus-setindex",
    "spec": {
      "parameters": "resource $relation, string $idx_name",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_setindexbynumber": {
    "name": "dbplus_setindexbynumber",
    "url": "function.dbplus-setindexbynumber",
    "spec": {
      "parameters": "resource $relation, int $idx_number",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_sql": {
    "name": "dbplus_sql",
    "url": "function.dbplus-sql",
    "spec": {
      "parameters": "string $query [, string $server [, string $dbpath ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dbplus_tcl": {
    "name": "dbplus_tcl",
    "url": "function.dbplus-tcl",
    "spec": {
      "parameters": "int $sid, string $script",
      "returnValue": "string",
      "ref": null
    }
  },
  "dbplus_tremove": {
    "name": "dbplus_tremove",
    "url": "function.dbplus-tremove",
    "spec": {
      "parameters": "resource $relation, array $tuple [, array &$current ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_undo": {
    "name": "dbplus_undo",
    "url": "function.dbplus-undo",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_undoprepare": {
    "name": "dbplus_undoprepare",
    "url": "function.dbplus-undoprepare",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_unlockrel": {
    "name": "dbplus_unlockrel",
    "url": "function.dbplus-unlockrel",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_unselect": {
    "name": "dbplus_unselect",
    "url": "function.dbplus-unselect",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_update": {
    "name": "dbplus_update",
    "url": "function.dbplus-update",
    "spec": {
      "parameters": "resource $relation, array $old, array $new",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_xlockrel": {
    "name": "dbplus_xlockrel",
    "url": "function.dbplus-xlockrel",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbplus_xunlockrel": {
    "name": "dbplus_xunlockrel",
    "url": "function.dbplus-xunlockrel",
    "spec": {
      "parameters": "resource $relation",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbx_close": {
    "name": "dbx_close",
    "url": "function.dbx-close",
    "spec": {
      "parameters": "object $link_identifier",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbx_compare": {
    "name": "dbx_compare",
    "url": "function.dbx-compare",
    "spec": {
      "parameters": "array $row_a, array $row_b, string $column_key [, int $flags = DBX_CMP_ASC | DBX_CMP_NATIVE ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "dbx_connect": {
    "name": "dbx_connect",
    "url": "function.dbx-connect",
    "spec": {
      "parameters": "mixed $module, string $host, string $database, string $username, string $password [, int $persistent ]",
      "returnValue": "object",
      "ref": null
    }
  },
  "dbx_error": {
    "name": "dbx_error",
    "url": "function.dbx-error",
    "spec": {
      "parameters": "object $link_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "dbx_escape_string": {
    "name": "dbx_escape_string",
    "url": "function.dbx-escape-string",
    "spec": {
      "parameters": "object $link_identifier, string $text",
      "returnValue": "string",
      "ref": null
    }
  },
  "dbx_fetch_row": {
    "name": "dbx_fetch_row",
    "url": "function.dbx-fetch-row",
    "spec": {
      "parameters": "object $result_identifier",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "dbx_query": {
    "name": "dbx_query",
    "url": "function.dbx-query",
    "spec": {
      "parameters": "object $link_identifier, string $sql_statement [, int $flags ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "dbx_sort": {
    "name": "dbx_sort",
    "url": "function.dbx-sort",
    "spec": {
      "parameters": "object $result, string $user_compare_function",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dcgettext": {
    "name": "dcgettext",
    "url": "function.dcgettext",
    "spec": {
      "parameters": "string $domain, string $message, int $category",
      "returnValue": "string",
      "ref": null
    }
  },
  "dcngettext": {
    "name": "dcngettext",
    "url": "function.dcngettext",
    "spec": {
      "parameters": "string $domain, string $msgid1, string $msgid2, int $n, int $category",
      "returnValue": "string",
      "ref": null
    }
  },
  "debug_backtrace": {
    "name": "debug_backtrace",
    "url": "function.debug-backtrace",
    "spec": {
      "parameters": "[ int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT [, int $limit = 0 ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "debug_print_backtrace": {
    "name": "debug_print_backtrace",
    "url": "function.debug-print-backtrace",
    "spec": {
      "parameters": "[ int $options = 0 [, int $limit = 0 ]]",
      "returnValue": "void",
      "ref": null
    }
  },
  "debug_zval_dump": {
    "name": "debug_zval_dump",
    "url": "function.debug-zval-dump",
    "spec": {
      "parameters": "mixed $variable [, mixed $... ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "decbin": {
    "name": "decbin",
    "url": "function.decbin",
    "spec": {
      "parameters": "int $number",
      "returnValue": "string",
      "ref": null
    }
  },
  "dechex": {
    "name": "dechex",
    "url": "function.dechex",
    "spec": {
      "parameters": "int $number",
      "returnValue": "string",
      "ref": null
    }
  },
  "decoct": {
    "name": "decoct",
    "url": "function.decoct",
    "spec": {
      "parameters": "int $number",
      "returnValue": "string",
      "ref": null
    }
  },
  "define": {
    "name": "define",
    "url": "function.define",
    "spec": {
      "parameters": "string $name, mixed $value [, bool $case_insensitive = false ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "defined": {
    "name": "defined",
    "url": "function.defined",
    "spec": {
      "parameters": "string $name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "define_syslog_variables": {
    "name": "define_syslog_variables",
    "url": "function.define-syslog-variables",
    "spec": {
      "parameters": "void",
      "returnValue": "void",
      "ref": null
    }
  },
  "deflate_add": {
    "name": "deflate_add",
    "url": "function.deflate-add",
    "spec": {
      "parameters": "resource $context, string $data [, int $flush_mode = ZLIB_SYNC_FLUSH ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "deflate_init": {
    "name": "deflate_init",
    "url": "function.deflate-init",
    "spec": {
      "parameters": "int $encoding [, array $options = array() ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "deg2rad": {
    "name": "deg2rad",
    "url": "function.deg2rad",
    "spec": {
      "parameters": "float $number",
      "returnValue": "float",
      "ref": null
    }
  },
  "delete": {
    "name": "delete",
    "url": "function.delete",
    "spec": {
      "parameters": "string $filename [, resource $context ]",
      "returnValue": "bool",
      "ref": {
        "name": "unlink()",
        "url": "function.unlink"
      }
    }
  },
  "dgettext": {
    "name": "dgettext",
    "url": "function.dgettext",
    "spec": {
      "parameters": "string $domain, string $message",
      "returnValue": "string",
      "ref": null
    }
  },
  "die": {
    "name": "die",
    "url": "function.die",
    "spec": {
      "isStructure": true,
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "dio_close": {
    "name": "dio_close",
    "url": "function.dio-close",
    "spec": {
      "parameters": "resource $fd",
      "returnValue": "void",
      "ref": null
    }
  },
  "dio_fcntl": {
    "name": "dio_fcntl",
    "url": "function.dio-fcntl",
    "spec": {
      "parameters": "resource $fd, int $cmd [, mixed $args ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "dio_open": {
    "name": "dio_open",
    "url": "function.dio-open",
    "spec": {
      "parameters": "string $filename, int $flags [, int $mode = 0 ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "dio_read": {
    "name": "dio_read",
    "url": "function.dio-read",
    "spec": {
      "parameters": "resource $fd [, int $len = 1024 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "dio_seek": {
    "name": "dio_seek",
    "url": "function.dio-seek",
    "spec": {
      "parameters": "resource $fd, int $pos [, int $whence = SEEK_SET ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "dio_stat": {
    "name": "dio_stat",
    "url": "function.dio-stat",
    "spec": {
      "parameters": "resource $fd",
      "returnValue": "array",
      "ref": null
    }
  },
  "dio_tcsetattr": {
    "name": "dio_tcsetattr",
    "url": "function.dio-tcsetattr",
    "spec": {
      "parameters": "resource $fd, array $options",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dio_truncate": {
    "name": "dio_truncate",
    "url": "function.dio-truncate",
    "spec": {
      "parameters": "resource $fd, int $offset",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dio_write": {
    "name": "dio_write",
    "url": "function.dio-write",
    "spec": {
      "parameters": "resource $fd, string $data [, int $len = 0 ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "dir": {
    "name": "dir",
    "url": "function.dir",
    "spec": {
      "parameters": "string $directory [, resource $context ]",
      "returnValue": "Directory",
      "ref": null
    }
  },
  "dirname": {
    "name": "dirname",
    "url": "function.dirname",
    "spec": {
      "parameters": "string $path [, int $levels = 1 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "diskfreespace": {
    "name": "diskfreespace",
    "url": "function.diskfreespace",
    "spec": {
      "parameters": "string $directory",
      "returnValue": "float",
      "ref": {
        "name": "disk_free_space()",
        "url": "function.disk-free-space"
      }
    }
  },
  "disk_free_space": {
    "name": "disk_free_space",
    "url": "function.disk-free-space",
    "spec": {
      "parameters": "string $directory",
      "returnValue": "float",
      "ref": null
    }
  },
  "disk_total_space": {
    "name": "disk_total_space",
    "url": "function.disk-total-space",
    "spec": {
      "parameters": "string $directory",
      "returnValue": "float",
      "ref": null
    }
  },
  "dl": {
    "name": "dl",
    "url": "function.dl",
    "spec": {
      "parameters": "string $library",
      "returnValue": "bool",
      "ref": null
    }
  },
  "dngettext": {
    "name": "dngettext",
    "url": "function.dngettext",
    "spec": {
      "parameters": "string $domain, string $msgid1, string $msgid2, int $n",
      "returnValue": "string",
      "ref": null
    }
  },
  "dns_check_record": {
    "name": "dns_check_record",
    "url": "function.dns-check-record",
    "spec": {
      "parameters": "string $host [, string $type = \"MX\" ]",
      "returnValue": "bool",
      "ref": {
        "name": "checkdnsrr()",
        "url": "function.checkdnsrr"
      }
    }
  },
  "dns_get_mx": {
    "name": "dns_get_mx",
    "url": "function.dns-get-mx",
    "spec": {
      "parameters": "string $hostname, array &$mxhosts [, array &$weight ]",
      "returnValue": "bool",
      "ref": {
        "name": "getmxrr()",
        "url": "function.getmxrr"
      }
    }
  },
  "dns_get_record": {
    "name": "dns_get_record",
    "url": "function.dns-get-record",
    "spec": {
      "parameters": "string $hostname [, int $type = DNS_ANY [, array &$authns [, array &$addtl [, bool $raw = FALSE ]]]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "dom_import_simplexml": {
    "name": "dom_import_simplexml",
    "url": "function.dom-import-simplexml",
    "spec": {
      "parameters": "SimpleXMLElement $node",
      "returnValue": "DOMElement",
      "ref": null
    }
  },
  "doubleval": {
    "name": "doubleval",
    "url": "function.doubleval",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "float",
      "ref": {
        "name": "floatval()",
        "url": "function.floatval"
      }
    }
  }
};
