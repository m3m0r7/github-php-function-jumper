functions.e = {
  "each": {
    "name": "each",
    "url": "function.each",
    "spec": {
      "parameters": "array &$array",
      "returnValue": "array",
      "ref": null
    }
  },
  "easter_date": {
    "name": "easter_date",
    "url": "function.easter-date",
    "spec": {
      "parameters": "[ int $year = date(\"Y\") ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "easter_days": {
    "name": "easter_days",
    "url": "function.easter-days",
    "spec": {
      "parameters": "[ int $year = date(\"Y\") [, int $method = CAL_EASTER_DEFAULT ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "echo": {
    "name": "echo",
    "url": "function.echo",
    "spec": {
      "parameters": "string $arg1 [, string $... ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_busy": {
    "name": "eio_busy",
    "url": "function.eio-busy",
    "spec": {
      "parameters": "int $delay [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_cancel": {
    "name": "eio_cancel",
    "url": "function.eio-cancel",
    "spec": {
      "parameters": "resource $req",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_chmod": {
    "name": "eio_chmod",
    "url": "function.eio-chmod",
    "spec": {
      "parameters": "string $path, int $mode [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_chown": {
    "name": "eio_chown",
    "url": "function.eio-chown",
    "spec": {
      "parameters": "string $path, int $uid [, int $gid = -1 [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_close": {
    "name": "eio_close",
    "url": "function.eio-close",
    "spec": {
      "parameters": "mixed $fd [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_custom": {
    "name": "eio_custom",
    "url": "function.eio-custom",
    "spec": {
      "parameters": "callable $execute, int $pri, callable $callback [, mixed $data = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_dup2": {
    "name": "eio_dup2",
    "url": "function.eio-dup2",
    "spec": {
      "parameters": "mixed $fd, mixed $fd2 [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_event_loop": {
    "name": "eio_event_loop",
    "url": "function.eio-event-loop",
    "spec": {
      "parameters": "void",
      "returnValue": "bool",
      "ref": null
    }
  },
  "eio_fallocate": {
    "name": "eio_fallocate",
    "url": "function.eio-fallocate",
    "spec": {
      "parameters": "mixed $fd, int $mode, int $offset, int $length [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_fchmod": {
    "name": "eio_fchmod",
    "url": "function.eio-fchmod",
    "spec": {
      "parameters": "mixed $fd, int $mode [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_fchown": {
    "name": "eio_fchown",
    "url": "function.eio-fchown",
    "spec": {
      "parameters": "mixed $fd, int $uid [, int $gid = -1 [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_fdatasync": {
    "name": "eio_fdatasync",
    "url": "function.eio-fdatasync",
    "spec": {
      "parameters": "mixed $fd [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_fstat": {
    "name": "eio_fstat",
    "url": "function.eio-fstat",
    "spec": {
      "parameters": "mixed $fd, int $pri, callable $callback [, mixed $data ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_fstatvfs": {
    "name": "eio_fstatvfs",
    "url": "function.eio-fstatvfs",
    "spec": {
      "parameters": "mixed $fd, int $pri, callable $callback [, mixed $data ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_fsync": {
    "name": "eio_fsync",
    "url": "function.eio-fsync",
    "spec": {
      "parameters": "mixed $fd [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_ftruncate": {
    "name": "eio_ftruncate",
    "url": "function.eio-ftruncate",
    "spec": {
      "parameters": "mixed $fd [, int $offset = 0 [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_futime": {
    "name": "eio_futime",
    "url": "function.eio-futime",
    "spec": {
      "parameters": "mixed $fd, float $atime, float $mtime [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_get_event_stream": {
    "name": "eio_get_event_stream",
    "url": "function.eio-get-event-stream",
    "spec": {
      "parameters": "void",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "eio_get_last_error": {
    "name": "eio_get_last_error",
    "url": "function.eio-get-last-error",
    "spec": {
      "parameters": "resource $req",
      "returnValue": "string",
      "ref": null
    }
  },
  "eio_grp": {
    "name": "eio_grp",
    "url": "function.eio-grp",
    "spec": {
      "parameters": "callable $callback [, string $data = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_grp_add": {
    "name": "eio_grp_add",
    "url": "function.eio-grp-add",
    "spec": {
      "parameters": "resource $grp, resource $req",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_grp_cancel": {
    "name": "eio_grp_cancel",
    "url": "function.eio-grp-cancel",
    "spec": {
      "parameters": "resource $grp",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_grp_limit": {
    "name": "eio_grp_limit",
    "url": "function.eio-grp-limit",
    "spec": {
      "parameters": "resource $grp, int $limit",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_init": {
    "name": "eio_init",
    "url": "function.eio-init",
    "spec": {
      "parameters": "void",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_link": {
    "name": "eio_link",
    "url": "function.eio-link",
    "spec": {
      "parameters": "string $path, string $new_path [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_lstat": {
    "name": "eio_lstat",
    "url": "function.eio-lstat",
    "spec": {
      "parameters": "string $path, int $pri, callable $callback [, mixed $data = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_mkdir": {
    "name": "eio_mkdir",
    "url": "function.eio-mkdir",
    "spec": {
      "parameters": "string $path, int $mode [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_mknod": {
    "name": "eio_mknod",
    "url": "function.eio-mknod",
    "spec": {
      "parameters": "string $path, int $mode, int $dev [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_nop": {
    "name": "eio_nop",
    "url": "function.eio-nop",
    "spec": {
      "parameters": "[ int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_npending": {
    "name": "eio_npending",
    "url": "function.eio-npending",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "eio_nready": {
    "name": "eio_nready",
    "url": "function.eio-nready",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "eio_nreqs": {
    "name": "eio_nreqs",
    "url": "function.eio-nreqs",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "eio_nthreads": {
    "name": "eio_nthreads",
    "url": "function.eio-nthreads",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "eio_open": {
    "name": "eio_open",
    "url": "function.eio-open",
    "spec": {
      "parameters": "string $path, int $flags, int $mode, int $pri, callable $callback [, mixed $data = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_poll": {
    "name": "eio_poll",
    "url": "function.eio-poll",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "eio_read": {
    "name": "eio_read",
    "url": "function.eio-read",
    "spec": {
      "parameters": "mixed $fd, int $length, int $offset, int $pri, callable $callback [, mixed $data = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_readahead": {
    "name": "eio_readahead",
    "url": "function.eio-readahead",
    "spec": {
      "parameters": "mixed $fd, int $offset, int $length [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_readdir": {
    "name": "eio_readdir",
    "url": "function.eio-readdir",
    "spec": {
      "parameters": "string $path, int $flags, int $pri, callable $callback [, string $data = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_readlink": {
    "name": "eio_readlink",
    "url": "function.eio-readlink",
    "spec": {
      "parameters": "string $path, int $pri, callable $callback [, string $data = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_realpath": {
    "name": "eio_realpath",
    "url": "function.eio-realpath",
    "spec": {
      "parameters": "string $path, int $pri, callable $callback [, string $data = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_rename": {
    "name": "eio_rename",
    "url": "function.eio-rename",
    "spec": {
      "parameters": "string $path, string $new_path [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_rmdir": {
    "name": "eio_rmdir",
    "url": "function.eio-rmdir",
    "spec": {
      "parameters": "string $path [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_seek": {
    "name": "eio_seek",
    "url": "function.eio-seek",
    "spec": {
      "parameters": "mixed $fd, int $offset, int $whence [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_sendfile": {
    "name": "eio_sendfile",
    "url": "function.eio-sendfile",
    "spec": {
      "parameters": "mixed $out_fd, mixed $in_fd, int $offset, int $length [, int $pri [, callable $callback [, string $data ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_set_max_idle": {
    "name": "eio_set_max_idle",
    "url": "function.eio-set-max-idle",
    "spec": {
      "parameters": "int $nthreads",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_set_max_parallel": {
    "name": "eio_set_max_parallel",
    "url": "function.eio-set-max-parallel",
    "spec": {
      "parameters": "int $nthreads",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_set_max_poll_reqs": {
    "name": "eio_set_max_poll_reqs",
    "url": "function.eio-set-max-poll-reqs",
    "spec": {
      "parameters": "int $nreqs",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_set_max_poll_time": {
    "name": "eio_set_max_poll_time",
    "url": "function.eio-set-max-poll-time",
    "spec": {
      "parameters": "float $nseconds",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_set_min_parallel": {
    "name": "eio_set_min_parallel",
    "url": "function.eio-set-min-parallel",
    "spec": {
      "parameters": "string $nthreads",
      "returnValue": "void",
      "ref": null
    }
  },
  "eio_stat": {
    "name": "eio_stat",
    "url": "function.eio-stat",
    "spec": {
      "parameters": "string $path, int $pri, callable $callback [, mixed $data = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_statvfs": {
    "name": "eio_statvfs",
    "url": "function.eio-statvfs",
    "spec": {
      "parameters": "string $path, int $pri, callable $callback [, mixed $data ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_symlink": {
    "name": "eio_symlink",
    "url": "function.eio-symlink",
    "spec": {
      "parameters": "string $path, string $new_path [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_sync": {
    "name": "eio_sync",
    "url": "function.eio-sync",
    "spec": {
      "parameters": "[ int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_syncfs": {
    "name": "eio_syncfs",
    "url": "function.eio-syncfs",
    "spec": {
      "parameters": "mixed $fd [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_sync_file_range": {
    "name": "eio_sync_file_range",
    "url": "function.eio-sync-file-range",
    "spec": {
      "parameters": "mixed $fd, int $offset, int $nbytes, int $flags [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_truncate": {
    "name": "eio_truncate",
    "url": "function.eio-truncate",
    "spec": {
      "parameters": "string $path [, int $offset = 0 [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_unlink": {
    "name": "eio_unlink",
    "url": "function.eio-unlink",
    "spec": {
      "parameters": "string $path [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_utime": {
    "name": "eio_utime",
    "url": "function.eio-utime",
    "spec": {
      "parameters": "string $path, float $atime, float $mtime [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "eio_write": {
    "name": "eio_write",
    "url": "function.eio-write",
    "spec": {
      "parameters": "mixed $fd, string $str [, int $length = 0 [, int $offset = 0 [, int $pri = EIO_PRI_DEFAULT [, callable $callback = NULL [, mixed $data = NULL ]]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "empty": {
    "name": "empty",
    "url": "function.empty",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_broker_describe": {
    "name": "enchant_broker_describe",
    "url": "function.enchant-broker-describe",
    "spec": {
      "parameters": "resource $broker",
      "returnValue": "array",
      "ref": null
    }
  },
  "enchant_broker_dict_exists": {
    "name": "enchant_broker_dict_exists",
    "url": "function.enchant-broker-dict-exists",
    "spec": {
      "parameters": "resource $broker, string $tag",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_broker_free": {
    "name": "enchant_broker_free",
    "url": "function.enchant-broker-free",
    "spec": {
      "parameters": "resource $broker",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_broker_free_dict": {
    "name": "enchant_broker_free_dict",
    "url": "function.enchant-broker-free-dict",
    "spec": {
      "parameters": "resource $dict",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_broker_get_dict_path": {
    "name": "enchant_broker_get_dict_path",
    "url": "function.enchant-broker-get-dict-path",
    "spec": {
      "parameters": "resource $broker, int $dict_type",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_broker_get_error": {
    "name": "enchant_broker_get_error",
    "url": "function.enchant-broker-get-error",
    "spec": {
      "parameters": "resource $broker",
      "returnValue": "string",
      "ref": null
    }
  },
  "enchant_broker_init": {
    "name": "enchant_broker_init",
    "url": "function.enchant-broker-init",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "enchant_broker_list_dicts": {
    "name": "enchant_broker_list_dicts",
    "url": "function.enchant-broker-list-dicts",
    "spec": {
      "parameters": "resource $broker",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "enchant_broker_request_dict": {
    "name": "enchant_broker_request_dict",
    "url": "function.enchant-broker-request-dict",
    "spec": {
      "parameters": "resource $broker, string $tag",
      "returnValue": "resource",
      "ref": null
    }
  },
  "enchant_broker_request_pwl_dict": {
    "name": "enchant_broker_request_pwl_dict",
    "url": "function.enchant-broker-request-pwl-dict",
    "spec": {
      "parameters": "resource $broker, string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "enchant_broker_set_dict_path": {
    "name": "enchant_broker_set_dict_path",
    "url": "function.enchant-broker-set-dict-path",
    "spec": {
      "parameters": "resource $broker, int $dict_type, string $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_broker_set_ordering": {
    "name": "enchant_broker_set_ordering",
    "url": "function.enchant-broker-set-ordering",
    "spec": {
      "parameters": "resource $broker, string $tag, string $ordering",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_dict_add_to_personal": {
    "name": "enchant_dict_add_to_personal",
    "url": "function.enchant-dict-add-to-personal",
    "spec": {
      "parameters": "resource $dict, string $word",
      "returnValue": "void",
      "ref": null
    }
  },
  "enchant_dict_add_to_session": {
    "name": "enchant_dict_add_to_session",
    "url": "function.enchant-dict-add-to-session",
    "spec": {
      "parameters": "resource $dict, string $word",
      "returnValue": "void",
      "ref": null
    }
  },
  "enchant_dict_check": {
    "name": "enchant_dict_check",
    "url": "function.enchant-dict-check",
    "spec": {
      "parameters": "resource $dict, string $word",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_dict_describe": {
    "name": "enchant_dict_describe",
    "url": "function.enchant-dict-describe",
    "spec": {
      "parameters": "resource $dict",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "enchant_dict_get_error": {
    "name": "enchant_dict_get_error",
    "url": "function.enchant-dict-get-error",
    "spec": {
      "parameters": "resource $dict",
      "returnValue": "string",
      "ref": null
    }
  },
  "enchant_dict_is_in_session": {
    "name": "enchant_dict_is_in_session",
    "url": "function.enchant-dict-is-in-session",
    "spec": {
      "parameters": "resource $dict, string $word",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_dict_quick_check": {
    "name": "enchant_dict_quick_check",
    "url": "function.enchant-dict-quick-check",
    "spec": {
      "parameters": "resource $dict, string $word [, array &$suggestions ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "enchant_dict_store_replacement": {
    "name": "enchant_dict_store_replacement",
    "url": "function.enchant-dict-store-replacement",
    "spec": {
      "parameters": "resource $dict, string $mis, string $cor",
      "returnValue": "void",
      "ref": null
    }
  },
  "enchant_dict_suggest": {
    "name": "enchant_dict_suggest",
    "url": "function.enchant-dict-suggest",
    "spec": {
      "parameters": "resource $dict, string $word",
      "returnValue": "array",
      "ref": null
    }
  },
  "end": {
    "name": "end",
    "url": "function.end",
    "spec": {
      "parameters": "array &$array",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ereg": {
    "name": "ereg",
    "url": "function.ereg",
    "spec": {
      "parameters": "string $pattern, string $string [, array &$regs ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "eregi": {
    "name": "eregi",
    "url": "function.eregi",
    "spec": {
      "parameters": "string $pattern, string $string [, array &$regs ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "eregi_replace": {
    "name": "eregi_replace",
    "url": "function.eregi-replace",
    "spec": {
      "parameters": "string $pattern, string $replacement, string $string",
      "returnValue": "string",
      "ref": null
    }
  },
  "ereg_replace": {
    "name": "ereg_replace",
    "url": "function.ereg-replace",
    "spec": {
      "parameters": "string $pattern, string $replacement, string $string",
      "returnValue": "string",
      "ref": null
    }
  },
  "error_clear_last": {
    "name": "error_clear_last",
    "url": "function.error-clear-last",
    "spec": {
      "parameters": "void",
      "returnValue": "void",
      "ref": null
    }
  },
  "error_get_last": {
    "name": "error_get_last",
    "url": "function.error-get-last",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "error_log": {
    "name": "error_log",
    "url": "function.error-log",
    "spec": {
      "parameters": "string $message [, int $message_type = 0 [, string $destination [, string $extra_headers ]]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "error_reporting": {
    "name": "error_reporting",
    "url": "function.error-reporting",
    "spec": {
      "parameters": "[ int $level ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "escapeshellarg": {
    "name": "escapeshellarg",
    "url": "function.escapeshellarg",
    "spec": {
      "parameters": "string $arg",
      "returnValue": "string",
      "ref": null
    }
  },
  "escapeshellcmd": {
    "name": "escapeshellcmd",
    "url": "function.escapeshellcmd",
    "spec": {
      "parameters": "string $command",
      "returnValue": "string",
      "ref": null
    }
  },
  "eval": {
    "name": "eval",
    "url": "function.eval",
    "spec": {
      "parameters": "string $code",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "event_base_free": {
    "name": "event_base_free",
    "url": "function.event-base-free",
    "spec": {
      "parameters": "resource $event_base",
      "returnValue": "void",
      "ref": null
    }
  },
  "event_base_loop": {
    "name": "event_base_loop",
    "url": "function.event-base-loop",
    "spec": {
      "parameters": "resource $event_base [, int $flags = 0 ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "event_base_loopbreak": {
    "name": "event_base_loopbreak",
    "url": "function.event-base-loopbreak",
    "spec": {
      "parameters": "resource $event_base",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_base_loopexit": {
    "name": "event_base_loopexit",
    "url": "function.event-base-loopexit",
    "spec": {
      "parameters": "resource $event_base [, int $timeout = -1 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_base_new": {
    "name": "event_base_new",
    "url": "function.event-base-new",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "event_base_priority_init": {
    "name": "event_base_priority_init",
    "url": "function.event-base-priority-init",
    "spec": {
      "parameters": "resource $event_base, int $npriorities",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_base_reinit": {
    "name": "event_base_reinit",
    "url": "function.event-base-reinit",
    "spec": {
      "parameters": "resource $event_base",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_base_set": {
    "name": "event_base_set",
    "url": "function.event-base-set",
    "spec": {
      "parameters": "resource $event, resource $event_base",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_buffer_base_set": {
    "name": "event_buffer_base_set",
    "url": "function.event-buffer-base-set",
    "spec": {
      "parameters": "resource $bevent, resource $event_base",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_buffer_disable": {
    "name": "event_buffer_disable",
    "url": "function.event-buffer-disable",
    "spec": {
      "parameters": "resource $bevent, int $events",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_buffer_enable": {
    "name": "event_buffer_enable",
    "url": "function.event-buffer-enable",
    "spec": {
      "parameters": "resource $bevent, int $events",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_buffer_fd_set": {
    "name": "event_buffer_fd_set",
    "url": "function.event-buffer-fd-set",
    "spec": {
      "parameters": "resource $bevent, resource $fd",
      "returnValue": "void",
      "ref": null
    }
  },
  "event_buffer_free": {
    "name": "event_buffer_free",
    "url": "function.event-buffer-free",
    "spec": {
      "parameters": "resource $bevent",
      "returnValue": "void",
      "ref": null
    }
  },
  "event_buffer_new": {
    "name": "event_buffer_new",
    "url": "function.event-buffer-new",
    "spec": {
      "parameters": "resource $stream, mixed $readcb, mixed $writecb, mixed $errorcb [, mixed $arg ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "event_buffer_priority_set": {
    "name": "event_buffer_priority_set",
    "url": "function.event-buffer-priority-set",
    "spec": {
      "parameters": "resource $bevent, int $priority",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_buffer_read": {
    "name": "event_buffer_read",
    "url": "function.event-buffer-read",
    "spec": {
      "parameters": "resource $bevent, int $data_size",
      "returnValue": "string",
      "ref": null
    }
  },
  "event_buffer_set_callback": {
    "name": "event_buffer_set_callback",
    "url": "function.event-buffer-set-callback",
    "spec": {
      "parameters": "resource $event, mixed $readcb, mixed $writecb, mixed $errorcb [, mixed $arg ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_buffer_timeout_set": {
    "name": "event_buffer_timeout_set",
    "url": "function.event-buffer-timeout-set",
    "spec": {
      "parameters": "resource $bevent, int $read_timeout, int $write_timeout",
      "returnValue": "void",
      "ref": null
    }
  },
  "event_buffer_watermark_set": {
    "name": "event_buffer_watermark_set",
    "url": "function.event-buffer-watermark-set",
    "spec": {
      "parameters": "resource $bevent, int $events, int $lowmark, int $highmark",
      "returnValue": "void",
      "ref": null
    }
  },
  "event_buffer_write": {
    "name": "event_buffer_write",
    "url": "function.event-buffer-write",
    "spec": {
      "parameters": "resource $bevent, string $data [, int $data_size = -1 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_new": {
    "name": "event_new",
    "url": "function.event-new",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "event_priority_set": {
    "name": "event_priority_set",
    "url": "function.event-priority-set",
    "spec": {
      "parameters": "resource $event, int $priority",
      "returnValue": "bool",
      "ref": null
    }
  },
  "event_timer_add": {
    "name": "event_timer_add",
    "url": "function.event-timer-add",
    "spec": {
      "parameters": "[ float $timeout ]",
      "returnValue": "bool",
      "ref": {
        "name": "event_add()",
        "url": "event.add"
      }
    }
  },
  "event_timer_del": {
    "name": "event_timer_del",
    "url": "function.event-timer-del",
    "spec": {
      "parameters": "void",
      "returnValue": "bool",
      "ref": {
        "name": "event_del()",
        "url": "event.del"
      }
    }
  },
  "event_timer_new": {
    "name": "event_timer_new",
    "url": "function.event-timer-new",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": {
        "name": "event_new()",
        "url": "function.event-new"
      }
    }
  },
  "event_timer_set": {
    "name": "event_timer_set",
    "url": "function.event-timer-set",
    "spec": {
      "parameters": "resource $event, callable $callback [, mixed $arg ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "exec": {
    "name": "exec",
    "url": "function.exec",
    "spec": {
      "parameters": "string $command [, array &$output [, int &$return_var ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "exif_imagetype": {
    "name": "exif_imagetype",
    "url": "function.exif-imagetype",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "exif_read_data": {
    "name": "exif_read_data",
    "url": "function.exif-read-data",
    "spec": {
      "parameters": "string $filename [, string $sections = NULL [, bool $arrays = false [, bool $thumbnail = false ]]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "exif_tagname": {
    "name": "exif_tagname",
    "url": "function.exif-tagname",
    "spec": {
      "parameters": "int $index",
      "returnValue": "string",
      "ref": null
    }
  },
  "exif_thumbnail": {
    "name": "exif_thumbnail",
    "url": "function.exif-thumbnail",
    "spec": {
      "parameters": "string $filename [, int &$width [, int &$height [, int &$imagetype ]]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "exit": {
    "name": "exit",
    "url": "function.exit",
    "spec": {
      "parameters": "[ string $status ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "exp": {
    "name": "exp",
    "url": "function.exp",
    "spec": {
      "parameters": "float $arg",
      "returnValue": "float",
      "ref": null
    }
  },
  "expect_expectl": {
    "name": "expect_expectl",
    "url": "function.expect-expectl",
    "spec": {
      "parameters": "resource $expect, array $cases [, array &$match ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "expect_popen": {
    "name": "expect_popen",
    "url": "function.expect-popen",
    "spec": {
      "parameters": "string $command",
      "returnValue": "resource",
      "ref": null
    }
  },
  "explode": {
    "name": "explode",
    "url": "function.explode",
    "spec": {
      "parameters": "string $delimiter, string $string [, int $limit = PHP_INT_MAX ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "expm1": {
    "name": "expm1",
    "url": "function.expm1",
    "spec": {
      "parameters": "float $arg",
      "returnValue": "float",
      "ref": null
    }
  },
  "expression": {
    "name": "expression",
    "url": "function.mysql-xdevapi-expression",
    "spec": {
      "parameters": "string $expression",
      "returnValue": "object",
      "ref": null
    }
  },
  "extension_loaded": {
    "name": "extension_loaded",
    "url": "function.extension-loaded",
    "spec": {
      "parameters": "string $name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "extract": {
    "name": "extract",
    "url": "function.extract",
    "spec": {
      "parameters": "array &$array [, int $flags = EXTR_OVERWRITE [, string $prefix = NULL ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ezmlm_hash": {
    "name": "ezmlm_hash",
    "url": "function.ezmlm-hash",
    "spec": {
      "parameters": "string $addr",
      "returnValue": "int",
      "ref": null
    }
  }
};
