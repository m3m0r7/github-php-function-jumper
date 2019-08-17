functions.k = {
  "kadm5_chpass_principal": {
    "name": "kadm5_chpass_principal",
    "url": "function.kadm5-chpass-principal",
    "spec": {
      "parameters": "resource $handle, string $principal, string $password",
      "returnValue": "bool",
      "ref": null
    }
  },
  "kadm5_create_principal": {
    "name": "kadm5_create_principal",
    "url": "function.kadm5-create-principal",
    "spec": {
      "parameters": "resource $handle, string $principal [, string $password [, array $options ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "kadm5_delete_principal": {
    "name": "kadm5_delete_principal",
    "url": "function.kadm5-delete-principal",
    "spec": {
      "parameters": "resource $handle, string $principal",
      "returnValue": "bool",
      "ref": null
    }
  },
  "kadm5_destroy": {
    "name": "kadm5_destroy",
    "url": "function.kadm5-destroy",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "kadm5_flush": {
    "name": "kadm5_flush",
    "url": "function.kadm5-flush",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "kadm5_get_policies": {
    "name": "kadm5_get_policies",
    "url": "function.kadm5-get-policies",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "array",
      "ref": null
    }
  },
  "kadm5_get_principal": {
    "name": "kadm5_get_principal",
    "url": "function.kadm5-get-principal",
    "spec": {
      "parameters": "resource $handle, string $principal",
      "returnValue": "array",
      "ref": null
    }
  },
  "kadm5_get_principals": {
    "name": "kadm5_get_principals",
    "url": "function.kadm5-get-principals",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "array",
      "ref": null
    }
  },
  "kadm5_init_with_password": {
    "name": "kadm5_init_with_password",
    "url": "function.kadm5-init-with-password",
    "spec": {
      "parameters": "string $admin_server, string $realm, string $principal, string $password",
      "returnValue": "resource",
      "ref": null
    }
  },
  "kadm5_modify_principal": {
    "name": "kadm5_modify_principal",
    "url": "function.kadm5-modify-principal",
    "spec": {
      "parameters": "resource $handle, string $principal, array $options",
      "returnValue": "bool",
      "ref": null
    }
  },
  "key": {
    "name": "key",
    "url": "function.key",
    "spec": {
      "parameters": "array $array",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "key_exists": {
    "name": "key_exists",
    "url": "function.key-exists",
    "spec": {
      "parameters": "mixed $key, array $array",
      "returnValue": "bool",
      "ref": {
        "name": "array_key_exists()",
        "url": "function.array-key-exists"
      }
    }
  },
  "krsort": {
    "name": "krsort",
    "url": "function.krsort",
    "spec": {
      "parameters": "array &$array [, int $sort_flags = SORT_REGULAR ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ksort": {
    "name": "ksort",
    "url": "function.ksort",
    "spec": {
      "parameters": "array &$array [, int $sort_flags = SORT_REGULAR ]",
      "returnValue": "bool",
      "ref": null
    }
  }
};
