functions.v = {
  variant_abs: {
    name: "variant_abs",
    url: "function.variant-abs",
    spec: {
      parameters: "mixed $val",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_add: {
    name: "variant_add",
    url: "function.variant-add",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_and: {
    name: "variant_and",
    url: "function.variant-and",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_cast: {
    name: "variant_cast",
    url: "function.variant-cast",
    spec: {
      parameters: "variant $variant, int $type",
      returnValue: "variant",
      ref: null
    }
  },
  variant_cat: {
    name: "variant_cat",
    url: "function.variant-cat",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_cmp: {
    name: "variant_cmp",
    url: "function.variant-cmp",
    spec: {
      parameters: "mixed $left, mixed $right [, int $lcid [, int $flags ]]",
      returnValue: "int",
      ref: null
    }
  },
  variant_date_from_timestamp: {
    name: "variant_date_from_timestamp",
    url: "function.variant-date-from-timestamp",
    spec: {
      parameters: "int $timestamp",
      returnValue: "variant",
      ref: null
    }
  },
  variant_date_to_timestamp: {
    name: "variant_date_to_timestamp",
    url: "function.variant-date-to-timestamp",
    spec: {
      parameters: "variant $variant",
      returnValue: "int",
      ref: null
    }
  },
  variant_div: {
    name: "variant_div",
    url: "function.variant-div",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_eqv: {
    name: "variant_eqv",
    url: "function.variant-eqv",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_fix: {
    name: "variant_fix",
    url: "function.variant-fix",
    spec: {
      parameters: "mixed $variant",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_get_type: {
    name: "variant_get_type",
    url: "function.variant-get-type",
    spec: {
      parameters: "variant $variant",
      returnValue: "int",
      ref: null
    }
  },
  variant_idiv: {
    name: "variant_idiv",
    url: "function.variant-idiv",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_imp: {
    name: "variant_imp",
    url: "function.variant-imp",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_int: {
    name: "variant_int",
    url: "function.variant-int",
    spec: {
      parameters: "mixed $variant",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_mod: {
    name: "variant_mod",
    url: "function.variant-mod",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_mul: {
    name: "variant_mul",
    url: "function.variant-mul",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_neg: {
    name: "variant_neg",
    url: "function.variant-neg",
    spec: {
      parameters: "mixed $variant",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_not: {
    name: "variant_not",
    url: "function.variant-not",
    spec: {
      parameters: "mixed $variant",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_or: {
    name: "variant_or",
    url: "function.variant-or",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_pow: {
    name: "variant_pow",
    url: "function.variant-pow",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_round: {
    name: "variant_round",
    url: "function.variant-round",
    spec: {
      parameters: "mixed $variant, int $decimals",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_set: {
    name: "variant_set",
    url: "function.variant-set",
    spec: {
      parameters: "variant $variant, mixed $value",
      returnValue: "void",
      ref: null
    }
  },
  variant_set_type: {
    name: "variant_set_type",
    url: "function.variant-set-type",
    spec: {
      parameters: "variant $variant, int $type",
      returnValue: "void",
      ref: null
    }
  },
  variant_sub: {
    name: "variant_sub",
    url: "function.variant-sub",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  variant_xor: {
    name: "variant_xor",
    url: "function.variant-xor",
    spec: {
      parameters: "mixed $left, mixed $right",
      returnValue: "mixed",
      ref: null
    }
  },
  var_dump: {
    name: "var_dump",
    url: "function.var-dump",
    spec: {
      parameters: "mixed $expression [, mixed $... ]",
      returnValue: "void",
      ref: null
    }
  },
  var_export: {
    name: "var_export",
    url: "function.var-export",
    spec: {
      parameters: "mixed $expression [, bool $return = FALSE ]",
      returnValue: "mixed",
      ref: null
    }
  },
  version_compare: {
    name: "version_compare",
    url: "function.version-compare",
    spec: {
      parameters: "string $version1, string $version2",
      returnValue: "int",
      ref: null
    }
  },
  vfprintf: {
    name: "vfprintf",
    url: "function.vfprintf",
    spec: {
      parameters: "resource $handle, string $format, array $args",
      returnValue: "int",
      ref: null
    }
  },
  virtual: {
    name: "virtual",
    url: "function.virtual",
    spec: {
      parameters: "string $filename",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_add_alias_domain: {
    name: "vpopmail_add_alias_domain",
    url: "function.vpopmail-add-alias-domain",
    spec: {
      parameters: "string $domain, string $aliasdomain",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_add_alias_domain_ex: {
    name: "vpopmail_add_alias_domain_ex",
    url: "function.vpopmail-add-alias-domain-ex",
    spec: {
      parameters: "string $olddomain, string $newdomain",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_add_domain: {
    name: "vpopmail_add_domain",
    url: "function.vpopmail-add-domain",
    spec: {
      parameters: "string $domain, string $dir, int $uid, int $gid",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_add_domain_ex: {
    name: "vpopmail_add_domain_ex",
    url: "function.vpopmail-add-domain-ex",
    spec: {
      parameters: "string $domain, string $passwd [, string $quota [, string $bounce [, bool $apop ]]]",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_add_user: {
    name: "vpopmail_add_user",
    url: "function.vpopmail-add-user",
    spec: {
      parameters: "string $user, string $domain, string $password [, string $gecos [, bool $apop ]]",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_alias_add: {
    name: "vpopmail_alias_add",
    url: "function.vpopmail-alias-add",
    spec: {
      parameters: "string $user, string $domain, string $alias",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_alias_del: {
    name: "vpopmail_alias_del",
    url: "function.vpopmail-alias-del",
    spec: {
      parameters: "string $user, string $domain",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_alias_del_domain: {
    name: "vpopmail_alias_del_domain",
    url: "function.vpopmail-alias-del-domain",
    spec: {
      parameters: "string $domain",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_alias_get: {
    name: "vpopmail_alias_get",
    url: "function.vpopmail-alias-get",
    spec: {
      parameters: "string $alias, string $domain",
      returnValue: "array",
      ref: null
    }
  },
  vpopmail_alias_get_all: {
    name: "vpopmail_alias_get_all",
    url: "function.vpopmail-alias-get-all",
    spec: {
      parameters: "string $domain",
      returnValue: "array",
      ref: null
    }
  },
  vpopmail_auth_user: {
    name: "vpopmail_auth_user",
    url: "function.vpopmail-auth-user",
    spec: {
      parameters: "string $user, string $domain, string $password [, string $apop ]",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_del_domain: {
    name: "vpopmail_del_domain",
    url: "function.vpopmail-del-domain",
    spec: {
      parameters: "string $domain",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_del_domain_ex: {
    name: "vpopmail_del_domain_ex",
    url: "function.vpopmail-del-domain-ex",
    spec: {
      parameters: "string $domain",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_del_user: {
    name: "vpopmail_del_user",
    url: "function.vpopmail-del-user",
    spec: {
      parameters: "string $user, string $domain",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_error: {
    name: "vpopmail_error",
    url: "function.vpopmail-error",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  vpopmail_passwd: {
    name: "vpopmail_passwd",
    url: "function.vpopmail-passwd",
    spec: {
      parameters: "string $user, string $domain, string $password [, bool $apop ]",
      returnValue: "bool",
      ref: null
    }
  },
  vpopmail_set_user_quota: {
    name: "vpopmail_set_user_quota",
    url: "function.vpopmail-set-user-quota",
    spec: {
      parameters: "string $user, string $domain, string $quota",
      returnValue: "bool",
      ref: null
    }
  },
  vprintf: {
    name: "vprintf",
    url: "function.vprintf",
    spec: {
      parameters: "string $format, array $args",
      returnValue: "int",
      ref: null
    }
  },
  vsprintf: {
    name: "vsprintf",
    url: "function.vsprintf",
    spec: {
      parameters: "string $format, array $args",
      returnValue: "string",
      ref: null
    }
  }
};
