functions.w = {
  "wddx_add_vars": {
    "name": "wddx_add_vars",
    "url": "function.wddx-add-vars",
    "spec": {
      "parameters": "resource $packet_id, mixed $var_name [, mixed $... ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wddx_deserialize": {
    "name": "wddx_deserialize",
    "url": "function.wddx-deserialize",
    "spec": {
      "parameters": "string $packet",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "wddx_packet_end": {
    "name": "wddx_packet_end",
    "url": "function.wddx-packet-end",
    "spec": {
      "parameters": "resource $packet_id",
      "returnValue": "string",
      "ref": null
    }
  },
  "wddx_packet_start": {
    "name": "wddx_packet_start",
    "url": "function.wddx-packet-start",
    "spec": {
      "parameters": "[ string $comment ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "wddx_serialize_value": {
    "name": "wddx_serialize_value",
    "url": "function.wddx-serialize-value",
    "spec": {
      "parameters": "mixed $var [, string $comment ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "wddx_serialize_vars": {
    "name": "wddx_serialize_vars",
    "url": "function.wddx-serialize-vars",
    "spec": {
      "parameters": "mixed $var_name [, mixed $... ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "win32_continue_service": {
    "name": "win32_continue_service",
    "url": "function.win32-continue-service",
    "spec": {
      "parameters": "string $servicename [, string $machine ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "win32_create_service": {
    "name": "win32_create_service",
    "url": "function.win32-create-service",
    "spec": {
      "parameters": "array $details [, string $machine ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "win32_delete_service": {
    "name": "win32_delete_service",
    "url": "function.win32-delete-service",
    "spec": {
      "parameters": "string $servicename [, string $machine ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "win32_get_last_control_message": {
    "name": "win32_get_last_control_message",
    "url": "function.win32-get-last-control-message",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "win32_pause_service": {
    "name": "win32_pause_service",
    "url": "function.win32-pause-service",
    "spec": {
      "parameters": "string $servicename [, string $machine ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "win32_ps_list_procs": {
    "name": "win32_ps_list_procs",
    "url": "function.win32-ps-list-procs",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "win32_ps_stat_mem": {
    "name": "win32_ps_stat_mem",
    "url": "function.win32-ps-stat-mem",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "win32_ps_stat_proc": {
    "name": "win32_ps_stat_proc",
    "url": "function.win32-ps-stat-proc",
    "spec": {
      "parameters": "[ int $pid = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "win32_query_service_status": {
    "name": "win32_query_service_status",
    "url": "function.win32-query-service-status",
    "spec": {
      "parameters": "string $servicename [, string $machine ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "win32_send_custom_control": {
    "name": "win32_send_custom_control",
    "url": "function.win32-send-custom-control",
    "spec": {
      "parameters": "string $servicename, int $control [, string $machine ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "win32_set_service_exit_code": {
    "name": "win32_set_service_exit_code",
    "url": "function.win32-set-service-exit-code",
    "spec": {
      "parameters": "[ int $exitCode = 1 ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "win32_set_service_exit_mode": {
    "name": "win32_set_service_exit_mode",
    "url": "function.win32-set-service-exit-mode",
    "spec": {
      "parameters": "[ bool $gracefulMode = true ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "win32_set_service_status": {
    "name": "win32_set_service_status",
    "url": "function.win32-set-service-status",
    "spec": {
      "parameters": "int $status [, int $checkpoint = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "win32_start_service": {
    "name": "win32_start_service",
    "url": "function.win32-start-service",
    "spec": {
      "parameters": "string $servicename [, string $machine ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "win32_start_service_ctrl_dispatcher": {
    "name": "win32_start_service_ctrl_dispatcher",
    "url": "function.win32-start-service-ctrl-dispatcher",
    "spec": {
      "parameters": "string $name",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "win32_stop_service": {
    "name": "win32_stop_service",
    "url": "function.win32-stop-service",
    "spec": {
      "parameters": "string $servicename [, string $machine ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "wincache_fcache_fileinfo": {
    "name": "wincache_fcache_fileinfo",
    "url": "function.wincache-fcache-fileinfo",
    "spec": {
      "parameters": "[ bool $summaryonly = FALSE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_fcache_meminfo": {
    "name": "wincache_fcache_meminfo",
    "url": "function.wincache-fcache-meminfo",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_lock": {
    "name": "wincache_lock",
    "url": "function.wincache-lock",
    "spec": {
      "parameters": "string $key [, bool $isglobal = FALSE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wincache_ocache_fileinfo": {
    "name": "wincache_ocache_fileinfo",
    "url": "function.wincache-ocache-fileinfo",
    "spec": {
      "parameters": "[ bool $summaryonly = FALSE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_ocache_meminfo": {
    "name": "wincache_ocache_meminfo",
    "url": "function.wincache-ocache-meminfo",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_refresh_if_changed": {
    "name": "wincache_refresh_if_changed",
    "url": "function.wincache-refresh-if-changed",
    "spec": {
      "parameters": "[ array $files = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wincache_rplist_fileinfo": {
    "name": "wincache_rplist_fileinfo",
    "url": "function.wincache-rplist-fileinfo",
    "spec": {
      "parameters": "[ bool $summaryonly = FALSE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_rplist_meminfo": {
    "name": "wincache_rplist_meminfo",
    "url": "function.wincache-rplist-meminfo",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_scache_info": {
    "name": "wincache_scache_info",
    "url": "function.wincache-scache-info",
    "spec": {
      "parameters": "[ bool $summaryonly = FALSE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_scache_meminfo": {
    "name": "wincache_scache_meminfo",
    "url": "function.wincache-scache-meminfo",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_ucache_add": {
    "name": "wincache_ucache_add",
    "url": "function.wincache-ucache-add",
    "spec": {
      "parameters": "string $key, mixed $value [, int $ttl = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wincache_ucache_cas": {
    "name": "wincache_ucache_cas",
    "url": "function.wincache-ucache-cas",
    "spec": {
      "parameters": "string $key, int $old_value, int $new_value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wincache_ucache_clear": {
    "name": "wincache_ucache_clear",
    "url": "function.wincache-ucache-clear",
    "spec": {
      "parameters": "void",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wincache_ucache_dec": {
    "name": "wincache_ucache_dec",
    "url": "function.wincache-ucache-dec",
    "spec": {
      "parameters": "string $key [, int $dec_by = 1 [, bool &$success ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "wincache_ucache_delete": {
    "name": "wincache_ucache_delete",
    "url": "function.wincache-ucache-delete",
    "spec": {
      "parameters": "mixed $key",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wincache_ucache_exists": {
    "name": "wincache_ucache_exists",
    "url": "function.wincache-ucache-exists",
    "spec": {
      "parameters": "string $key",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wincache_ucache_get": {
    "name": "wincache_ucache_get",
    "url": "function.wincache-ucache-get",
    "spec": {
      "parameters": "mixed $key [, bool &$success ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "wincache_ucache_inc": {
    "name": "wincache_ucache_inc",
    "url": "function.wincache-ucache-inc",
    "spec": {
      "parameters": "string $key [, int $inc_by = 1 [, bool &$success ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "wincache_ucache_info": {
    "name": "wincache_ucache_info",
    "url": "function.wincache-ucache-info",
    "spec": {
      "parameters": "[ bool $summaryonly = FALSE [, string $key = NULL ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_ucache_meminfo": {
    "name": "wincache_ucache_meminfo",
    "url": "function.wincache-ucache-meminfo",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "wincache_ucache_set": {
    "name": "wincache_ucache_set",
    "url": "function.wincache-ucache-set",
    "spec": {
      "parameters": "mixed $key, mixed $value [, int $ttl = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wincache_unlock": {
    "name": "wincache_unlock",
    "url": "function.wincache-unlock",
    "spec": {
      "parameters": "string $key",
      "returnValue": "bool",
      "ref": null
    }
  },
  "wordwrap": {
    "name": "wordwrap",
    "url": "function.wordwrap",
    "spec": {
      "parameters": "string $str [, int $width = 75 [, string $break = \"\\n\" [, bool $cut = FALSE ]]]",
      "returnValue": "string",
      "ref": null
    }
  }
};
