functions.l = {
  "lcfirst": {
    "name": "lcfirst",
    "url": "function.lcfirst",
    "spec": {
      "parameters": "string $str",
      "returnValue": "string",
      "ref": null
    }
  },
  "lcg_value": {
    "name": "lcg_value",
    "url": "function.lcg-value",
    "spec": {
      "parameters": "void",
      "returnValue": "float",
      "ref": null
    }
  },
  "lchgrp": {
    "name": "lchgrp",
    "url": "function.lchgrp",
    "spec": {
      "parameters": "string $filename, mixed $group",
      "returnValue": "bool",
      "ref": null
    }
  },
  "lchown": {
    "name": "lchown",
    "url": "function.lchown",
    "spec": {
      "parameters": "string $filename, mixed $user",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_8859_to_t61": {
    "name": "ldap_8859_to_t61",
    "url": "function.ldap-8859-to-t61",
    "spec": {
      "parameters": "string $value",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_add": {
    "name": "ldap_add",
    "url": "function.ldap-add",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_add_ext": {
    "name": "ldap_add_ext",
    "url": "function.ldap-add-ext",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry [, array $serverctrls = array() ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_bind": {
    "name": "ldap_bind",
    "url": "function.ldap-bind",
    "spec": {
      "parameters": "resource $link_identifier [, string $bind_rdn = NULL [, string $bind_password = NULL ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_bind_ext": {
    "name": "ldap_bind_ext",
    "url": "function.ldap-bind-ext",
    "spec": {
      "parameters": "resource $link_identifier [, string $bind_rdn = NULL [, string $bind_password = NULL [, array $serverctrls = array() ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_close": {
    "name": "ldap_close",
    "url": "function.ldap-close",
    "spec": {
      "parameters": "resource $link_identifier",
      "returnValue": "bool",
      "ref": {
        "name": "ldap_unbind()",
        "url": "function.ldap-unbind"
      }
    }
  },
  "ldap_compare": {
    "name": "ldap_compare",
    "url": "function.ldap-compare",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, string $attribute, string $value",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ldap_connect": {
    "name": "ldap_connect",
    "url": "function.ldap-connect",
    "spec": {
      "parameters": "[ string $host = NULL [, int $port = 389 ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_control_paged_result": {
    "name": "ldap_control_paged_result",
    "url": "function.ldap-control-paged-result",
    "spec": {
      "parameters": "resource $link, int $pagesize [, bool $iscritical = FALSE [, string $cookie = \"\" ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_control_paged_result_response": {
    "name": "ldap_control_paged_result_response",
    "url": "function.ldap-control-paged-result-response",
    "spec": {
      "parameters": "resource $link, resource $result [, string &$cookie [, int &$estimated ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_count_entries": {
    "name": "ldap_count_entries",
    "url": "function.ldap-count-entries",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_identifier",
      "returnValue": "int",
      "ref": null
    }
  },
  "ldap_delete": {
    "name": "ldap_delete",
    "url": "function.ldap-delete",
    "spec": {
      "parameters": "resource $link_identifier, string $dn",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_delete_ext": {
    "name": "ldap_delete_ext",
    "url": "function.ldap-delete-ext",
    "spec": {
      "parameters": "resource $link_identifier, string $dn [, array $serverctrls = array() ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_dn2ufn": {
    "name": "ldap_dn2ufn",
    "url": "function.ldap-dn2ufn",
    "spec": {
      "parameters": "string $dn",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_err2str": {
    "name": "ldap_err2str",
    "url": "function.ldap-err2str",
    "spec": {
      "parameters": "int $errno",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_errno": {
    "name": "ldap_errno",
    "url": "function.ldap-errno",
    "spec": {
      "parameters": "resource $link_identifier",
      "returnValue": "int",
      "ref": null
    }
  },
  "ldap_error": {
    "name": "ldap_error",
    "url": "function.ldap-error",
    "spec": {
      "parameters": "resource $link_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_escape": {
    "name": "ldap_escape",
    "url": "function.ldap-escape",
    "spec": {
      "parameters": "string $value [, string $ignore = \"\" [, int $flags = 0 ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_exop": {
    "name": "ldap_exop",
    "url": "function.ldap-exop",
    "spec": {
      "parameters": "resource $link, string $reqoid [, string $reqdata = NULL [, array $serverctrls = NULL [, string &$retdata [, string &$retoid ]]]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ldap_exop_passwd": {
    "name": "ldap_exop_passwd",
    "url": "function.ldap-exop-passwd",
    "spec": {
      "parameters": "resource $link [, string $user = \"\" [, string $oldpw = \"\" [, string $newpw = \"\" [, array &$serverctrls ]]]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ldap_exop_refresh": {
    "name": "ldap_exop_refresh",
    "url": "function.ldap-exop-refresh",
    "spec": {
      "parameters": "resource $link, string $dn, int $ttl",
      "returnValue": "int",
      "ref": null
    }
  },
  "ldap_exop_whoami": {
    "name": "ldap_exop_whoami",
    "url": "function.ldap-exop-whoami",
    "spec": {
      "parameters": "resource $link",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_explode_dn": {
    "name": "ldap_explode_dn",
    "url": "function.ldap-explode-dn",
    "spec": {
      "parameters": "string $dn, int $with_attrib",
      "returnValue": "array",
      "ref": null
    }
  },
  "ldap_first_attribute": {
    "name": "ldap_first_attribute",
    "url": "function.ldap-first-attribute",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_entry_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_first_entry": {
    "name": "ldap_first_entry",
    "url": "function.ldap-first-entry",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_identifier",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_first_reference": {
    "name": "ldap_first_reference",
    "url": "function.ldap-first-reference",
    "spec": {
      "parameters": "resource $link, resource $result",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_free_result": {
    "name": "ldap_free_result",
    "url": "function.ldap-free-result",
    "spec": {
      "parameters": "resource $result_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_get_attributes": {
    "name": "ldap_get_attributes",
    "url": "function.ldap-get-attributes",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_entry_identifier",
      "returnValue": "array",
      "ref": null
    }
  },
  "ldap_get_dn": {
    "name": "ldap_get_dn",
    "url": "function.ldap-get-dn",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_entry_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_get_entries": {
    "name": "ldap_get_entries",
    "url": "function.ldap-get-entries",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_identifier",
      "returnValue": "array",
      "ref": null
    }
  },
  "ldap_get_option": {
    "name": "ldap_get_option",
    "url": "function.ldap-get-option",
    "spec": {
      "parameters": "resource $link_identifier, int $option, mixed &$retval",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_get_values": {
    "name": "ldap_get_values",
    "url": "function.ldap-get-values",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_entry_identifier, string $attribute",
      "returnValue": "array",
      "ref": null
    }
  },
  "ldap_get_values_len": {
    "name": "ldap_get_values_len",
    "url": "function.ldap-get-values-len",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_entry_identifier, string $attribute",
      "returnValue": "array",
      "ref": null
    }
  },
  "ldap_list": {
    "name": "ldap_list",
    "url": "function.ldap-list",
    "spec": {
      "parameters": "resource $link_identifier, string $base_dn, string $filter [, array $attributes [, int $attrsonly [, int $sizelimit [, int $timelimit [, int $deref ]]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_modify": {
    "name": "ldap_modify",
    "url": "function.ldap-modify",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_modify_batch": {
    "name": "ldap_modify_batch",
    "url": "function.ldap-modify-batch",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry [, array $serverctrls = array() ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_mod_add": {
    "name": "ldap_mod_add",
    "url": "function.ldap-mod-add",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_mod_add_ext": {
    "name": "ldap_mod_add_ext",
    "url": "function.ldap-mod_add-ext",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry [, array $serverctrls = array() ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_mod_del": {
    "name": "ldap_mod_del",
    "url": "function.ldap-mod-del",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_mod_del_ext": {
    "name": "ldap_mod_del_ext",
    "url": "function.ldap-mod_del-ext",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry [, array $serverctrls = array() ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_mod_replace": {
    "name": "ldap_mod_replace",
    "url": "function.ldap-mod-replace",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_mod_replace_ext": {
    "name": "ldap_mod_replace_ext",
    "url": "function.ldap-mod_replace-ext",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, array $entry [, array $serverctrls = array() ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_next_attribute": {
    "name": "ldap_next_attribute",
    "url": "function.ldap-next-attribute",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_entry_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_next_entry": {
    "name": "ldap_next_entry",
    "url": "function.ldap-next-entry",
    "spec": {
      "parameters": "resource $link_identifier, resource $result_entry_identifier",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_next_reference": {
    "name": "ldap_next_reference",
    "url": "function.ldap-next-reference",
    "spec": {
      "parameters": "resource $link, resource $entry",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_parse_exop": {
    "name": "ldap_parse_exop",
    "url": "function.ldap-parse-exop",
    "spec": {
      "parameters": "resource $link, resource $result [, string &$retdata [, string &$retoid ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_parse_reference": {
    "name": "ldap_parse_reference",
    "url": "function.ldap-parse-reference",
    "spec": {
      "parameters": "resource $link, resource $entry, array &$referrals",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_parse_result": {
    "name": "ldap_parse_result",
    "url": "function.ldap-parse-result",
    "spec": {
      "parameters": "resource $link, resource $result, int &$errcode [, string &$matcheddn [, string &$errmsg [, array &$referrals ]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_read": {
    "name": "ldap_read",
    "url": "function.ldap-read",
    "spec": {
      "parameters": "resource $link_identifier, string $base_dn, string $filter [, array $attributes [, int $attrsonly [, int $sizelimit [, int $timelimit [, int $deref ]]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_rename": {
    "name": "ldap_rename",
    "url": "function.ldap-rename",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, string $newrdn, string $newparent, bool $deleteoldrdn",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_rename_ext": {
    "name": "ldap_rename_ext",
    "url": "function.ldap-rename-ext",
    "spec": {
      "parameters": "resource $link_identifier, string $dn, string $newrdn, string $newparent, bool $deleteoldrdn [, array $serverctrls = array() ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_sasl_bind": {
    "name": "ldap_sasl_bind",
    "url": "function.ldap-sasl-bind",
    "spec": {
      "parameters": "resource $link [, string $binddn = NULL [, string $password = NULL [, string $sasl_mech = NULL [, string $sasl_realm = NULL [, string $sasl_authc_id = NULL [, string $sasl_authz_id = NULL [, string $props = NULL ]]]]]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_search": {
    "name": "ldap_search",
    "url": "function.ldap-search",
    "spec": {
      "parameters": "resource $link_identifier, string $base_dn, string $filter [, array $attributes [, int $attrsonly [, int $sizelimit [, int $timelimit [, int $deref ]]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ldap_set_option": {
    "name": "ldap_set_option",
    "url": "function.ldap-set-option",
    "spec": {
      "parameters": "resource $link_identifier, int $option, mixed $newval",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_set_rebind_proc": {
    "name": "ldap_set_rebind_proc",
    "url": "function.ldap-set-rebind-proc",
    "spec": {
      "parameters": "resource $link, callable $callback",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_sort": {
    "name": "ldap_sort",
    "url": "function.ldap-sort",
    "spec": {
      "parameters": "resource $link, resource $result, string $sortfilter",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_start_tls": {
    "name": "ldap_start_tls",
    "url": "function.ldap-start-tls",
    "spec": {
      "parameters": "resource $link",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ldap_t61_to_8859": {
    "name": "ldap_t61_to_8859",
    "url": "function.ldap-t61-to-8859",
    "spec": {
      "parameters": "string $value",
      "returnValue": "string",
      "ref": null
    }
  },
  "ldap_unbind": {
    "name": "ldap_unbind",
    "url": "function.ldap-unbind",
    "spec": {
      "parameters": "resource $link_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "levenshtein": {
    "name": "levenshtein",
    "url": "function.levenshtein",
    "spec": {
      "parameters": "string $str1, string $str2",
      "returnValue": "int",
      "ref": null
    }
  },
  "libxml_clear_errors": {
    "name": "libxml_clear_errors",
    "url": "function.libxml-clear-errors",
    "spec": {
      "parameters": "void",
      "returnValue": "void",
      "ref": null
    }
  },
  "libxml_disable_entity_loader": {
    "name": "libxml_disable_entity_loader",
    "url": "function.libxml-disable-entity-loader",
    "spec": {
      "parameters": "[ bool $disable = TRUE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "libxml_get_errors": {
    "name": "libxml_get_errors",
    "url": "function.libxml-get-errors",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "libxml_get_last_error": {
    "name": "libxml_get_last_error",
    "url": "function.libxml-get-last-error",
    "spec": {
      "parameters": "void",
      "returnValue": "LibXMLError",
      "ref": null
    }
  },
  "libxml_set_external_entity_loader": {
    "name": "libxml_set_external_entity_loader",
    "url": "function.libxml-set-external-entity-loader",
    "spec": {
      "parameters": "callable $resolver_function",
      "returnValue": "bool",
      "ref": null
    }
  },
  "libxml_set_streams_context": {
    "name": "libxml_set_streams_context",
    "url": "function.libxml-set-streams-context",
    "spec": {
      "parameters": "resource $streams_context",
      "returnValue": "void",
      "ref": null
    }
  },
  "libxml_use_internal_errors": {
    "name": "libxml_use_internal_errors",
    "url": "function.libxml-use-internal-errors",
    "spec": {
      "parameters": "[ bool $use_errors = FALSE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "link": {
    "name": "link",
    "url": "function.link",
    "spec": {
      "parameters": "string $target, string $link",
      "returnValue": "bool",
      "ref": null
    }
  },
  "linkinfo": {
    "name": "linkinfo",
    "url": "function.linkinfo",
    "spec": {
      "parameters": "string $path",
      "returnValue": "int",
      "ref": null
    }
  },
  "list": {
    "name": "list",
    "url": "function.list",
    "spec": {
      "isStructure": true,
      "parameters": "mixed $var1 [, mixed $... ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "localeconv": {
    "name": "localeconv",
    "url": "function.localeconv",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "localtime": {
    "name": "localtime",
    "url": "function.localtime",
    "spec": {
      "parameters": "[ int $timestamp = time() [, bool $is_associative = FALSE ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "log": {
    "name": "log",
    "url": "function.log",
    "spec": {
      "parameters": "float $arg [, float $base = M_E ]",
      "returnValue": "float",
      "ref": null
    }
  },
  "log1p": {
    "name": "log1p",
    "url": "function.log1p",
    "spec": {
      "parameters": "float $number",
      "returnValue": "float",
      "ref": null
    }
  },
  "log10": {
    "name": "log10",
    "url": "function.log10",
    "spec": {
      "parameters": "float $arg",
      "returnValue": "float",
      "ref": null
    }
  },
  "log_cmd_delete": {
    "name": "log_cmd_delete",
    "url": "function.log-cmd-delete",
    "spec": {
      "parameters": "array $server, array $writeOptions, array $deleteOptions, array $protocolOptions",
      "returnValue": "",
      "ref": null
    }
  },
  "log_cmd_insert": {
    "name": "log_cmd_insert",
    "url": "function.log-cmd-insert",
    "spec": {
      "parameters": "array $server, array $document, array $writeOptions, array $protocolOptions",
      "returnValue": "",
      "ref": null
    }
  },
  "log_cmd_update": {
    "name": "log_cmd_update",
    "url": "function.log-cmd-update",
    "spec": {
      "parameters": "array $server, array $writeOptions, array $updateOptions, array $protocolOptions",
      "returnValue": "",
      "ref": null
    }
  },
  "log_getmore": {
    "name": "log_getmore",
    "url": "function.log-getmore",
    "spec": {
      "parameters": "array $server, array $info",
      "returnValue": "",
      "ref": null
    }
  },
  "log_killcursor": {
    "name": "log_killcursor",
    "url": "function.log-killcursor",
    "spec": {
      "parameters": "array $server, array $info",
      "returnValue": "",
      "ref": null
    }
  },
  "log_reply": {
    "name": "log_reply",
    "url": "function.log-reply",
    "spec": {
      "parameters": "array $server, array $messageHeaders, array $operationHeaders",
      "returnValue": "",
      "ref": null
    }
  },
  "log_write_batch": {
    "name": "log_write_batch",
    "url": "function.log-write-batch",
    "spec": {
      "parameters": "array $server, array $writeOptions, array $batch, array $protocolOptions",
      "returnValue": "",
      "ref": null
    }
  },
  "long2ip": {
    "name": "long2ip",
    "url": "function.long2ip",
    "spec": {
      "parameters": "int $proper_address",
      "returnValue": "string",
      "ref": null
    }
  },
  "lstat": {
    "name": "lstat",
    "url": "function.lstat",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "array",
      "ref": null
    }
  },
  "ltrim": {
    "name": "ltrim",
    "url": "function.ltrim",
    "spec": {
      "parameters": "string $str [, string $character_mask ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "lzf_compress": {
    "name": "lzf_compress",
    "url": "function.lzf-compress",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "lzf_decompress": {
    "name": "lzf_decompress",
    "url": "function.lzf-decompress",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "lzf_optimized_for": {
    "name": "lzf_optimized_for",
    "url": "function.lzf-optimized-for",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  }
};
