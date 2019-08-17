functions.p = {
  "pack": {
    "name": "pack",
    "url": "function.pack",
    "spec": {
      "parameters": "string $format [, mixed $args [, mixed $... ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "parsekit_compile_file": {
    "name": "parsekit_compile_file",
    "url": "function.parsekit-compile-file",
    "spec": {
      "parameters": "string $filename [, array &$errors [, int $options = PARSEKIT_QUIET ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "parsekit_compile_string": {
    "name": "parsekit_compile_string",
    "url": "function.parsekit-compile-string",
    "spec": {
      "parameters": "string $phpcode [, array &$errors [, int $options = PARSEKIT_QUIET ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "parsekit_func_arginfo": {
    "name": "parsekit_func_arginfo",
    "url": "function.parsekit-func-arginfo",
    "spec": {
      "parameters": "mixed $function",
      "returnValue": "array",
      "ref": null
    }
  },
  "parse_ini_file": {
    "name": "parse_ini_file",
    "url": "function.parse-ini-file",
    "spec": {
      "parameters": "string $filename [, bool $process_sections = FALSE [, int $scanner_mode = INI_SCANNER_NORMAL ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "parse_ini_string": {
    "name": "parse_ini_string",
    "url": "function.parse-ini-string",
    "spec": {
      "parameters": "string $ini [, bool $process_sections = FALSE [, int $scanner_mode = INI_SCANNER_NORMAL ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "parse_str": {
    "name": "parse_str",
    "url": "function.parse-str",
    "spec": {
      "parameters": "string $encoded_string [, array &$result ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "parse_url": {
    "name": "parse_url",
    "url": "function.parse-url",
    "spec": {
      "parameters": "string $url [, int $component = -1 ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "passthru": {
    "name": "passthru",
    "url": "function.passthru",
    "spec": {
      "parameters": "string $command [, int &$return_var ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "password_get_info": {
    "name": "password_get_info",
    "url": "function.password-get-info",
    "spec": {
      "parameters": "string $hash",
      "returnValue": "array",
      "ref": null
    }
  },
  "password_hash": {
    "name": "password_hash",
    "url": "function.password-hash",
    "spec": {
      "parameters": "string $password, integer $algo [, array $options ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "password_needs_rehash": {
    "name": "password_needs_rehash",
    "url": "function.password-needs-rehash",
    "spec": {
      "parameters": "string $hash, integer $algo [, array $options ]",
      "returnValue": "boolean",
      "ref": null
    }
  },
  "password_verify": {
    "name": "password_verify",
    "url": "function.password-verify",
    "spec": {
      "parameters": "string $password, string $hash",
      "returnValue": "boolean",
      "ref": null
    }
  },
  "pathinfo": {
    "name": "pathinfo",
    "url": "function.pathinfo",
    "spec": {
      "parameters": "string $path [, int $options = PATHINFO_DIRNAME | PATHINFO_BASENAME | PATHINFO_EXTENSION | PATHINFO_FILENAME ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pclose": {
    "name": "pclose",
    "url": "function.pclose",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_alarm": {
    "name": "pcntl_alarm",
    "url": "function.pcntl-alarm",
    "spec": {
      "parameters": "int $seconds",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_async_signals": {
    "name": "pcntl_async_signals",
    "url": "function.pcntl-async-signals",
    "spec": {
      "parameters": "[ bool $on = NULL ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pcntl_errno": {
    "name": "pcntl_errno",
    "url": "function.pcntl-errno",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": {
        "name": "pcntl_get_last_error()",
        "url": "function.pcntl-get-last-error"
      }
    }
  },
  "pcntl_exec": {
    "name": "pcntl_exec",
    "url": "function.pcntl-exec",
    "spec": {
      "parameters": "string $path [, array $args [, array $envs ]]",
      "returnValue": "void",
      "ref": null
    }
  },
  "pcntl_fork": {
    "name": "pcntl_fork",
    "url": "function.pcntl-fork",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_getpriority": {
    "name": "pcntl_getpriority",
    "url": "function.pcntl-getpriority",
    "spec": {
      "parameters": "[ int $pid = getmypid() [, int $process_identifier = PRIO_PROCESS ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_get_last_error": {
    "name": "pcntl_get_last_error",
    "url": "function.pcntl-get-last-error",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_setpriority": {
    "name": "pcntl_setpriority",
    "url": "function.pcntl-setpriority",
    "spec": {
      "parameters": "int $priority [, int $pid = getmypid() [, int $process_identifier = PRIO_PROCESS ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pcntl_signal": {
    "name": "pcntl_signal",
    "url": "function.pcntl-signal",
    "spec": {
      "parameters": "int $signo, callable|int $handler [, bool $restart_syscalls = TRUE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pcntl_signal_dispatch": {
    "name": "pcntl_signal_dispatch",
    "url": "function.pcntl-signal-dispatch",
    "spec": {
      "parameters": "void",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pcntl_signal_get_handler": {
    "name": "pcntl_signal_get_handler",
    "url": "function.pcntl-signal-get-handler",
    "spec": {
      "parameters": "int $signo",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pcntl_sigprocmask": {
    "name": "pcntl_sigprocmask",
    "url": "function.pcntl-sigprocmask",
    "spec": {
      "parameters": "int $how, array $set [, array &$oldset ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pcntl_sigtimedwait": {
    "name": "pcntl_sigtimedwait",
    "url": "function.pcntl-sigtimedwait",
    "spec": {
      "parameters": "array $set [, array &$siginfo [, int $seconds = 0 [, int $nanoseconds = 0 ]]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_sigwaitinfo": {
    "name": "pcntl_sigwaitinfo",
    "url": "function.pcntl-sigwaitinfo",
    "spec": {
      "parameters": "array $set [, array &$siginfo ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_strerror": {
    "name": "pcntl_strerror",
    "url": "function.pcntl-strerror",
    "spec": {
      "parameters": "int $errno",
      "returnValue": "string",
      "ref": null
    }
  },
  "pcntl_wait": {
    "name": "pcntl_wait",
    "url": "function.pcntl-wait",
    "spec": {
      "parameters": "int &$status [, int $options = 0 [, array &$rusage ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_waitpid": {
    "name": "pcntl_waitpid",
    "url": "function.pcntl-waitpid",
    "spec": {
      "parameters": "int $pid, int &$status [, int $options = 0 [, array &$rusage ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_wexitstatus": {
    "name": "pcntl_wexitstatus",
    "url": "function.pcntl-wexitstatus",
    "spec": {
      "parameters": "int $status",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_wifexited": {
    "name": "pcntl_wifexited",
    "url": "function.pcntl-wifexited",
    "spec": {
      "parameters": "int $status",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pcntl_wifsignaled": {
    "name": "pcntl_wifsignaled",
    "url": "function.pcntl-wifsignaled",
    "spec": {
      "parameters": "int $status",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pcntl_wifstopped": {
    "name": "pcntl_wifstopped",
    "url": "function.pcntl-wifstopped",
    "spec": {
      "parameters": "int $status",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pcntl_wstopsig": {
    "name": "pcntl_wstopsig",
    "url": "function.pcntl-wstopsig",
    "spec": {
      "parameters": "int $status",
      "returnValue": "int",
      "ref": null
    }
  },
  "pcntl_wtermsig": {
    "name": "pcntl_wtermsig",
    "url": "function.pcntl-wtermsig",
    "spec": {
      "parameters": "int $status",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_activate_item": {
    "name": "PDF_activate_item",
    "url": "function.pdf-activate-item",
    "spec": {
      "parameters": "resource $pdfdoc, int $id",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_add_annotation": {
    "name": "PDF_add_annotation",
    "url": "function.pdf-add-annotation",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_add_bookmark": {
    "name": "PDF_add_bookmark",
    "url": "function.pdf-add-bookmark",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_add_launchlink": {
    "name": "PDF_add_launchlink",
    "url": "function.pdf-add-launchlink",
    "spec": {
      "parameters": "resource $pdfdoc, float $llx, float $lly, float $urx, float $ury, string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_add_locallink": {
    "name": "PDF_add_locallink",
    "url": "function.pdf-add-locallink",
    "spec": {
      "parameters": "resource $pdfdoc, float $lowerleftx, float $lowerlefty, float $upperrightx, float $upperrighty, int $page, string $dest",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_add_nameddest": {
    "name": "PDF_add_nameddest",
    "url": "function.pdf-add-nameddest",
    "spec": {
      "parameters": "resource $pdfdoc, string $name, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_add_note": {
    "name": "PDF_add_note",
    "url": "function.pdf-add-note",
    "spec": {
      "parameters": "resource $pdfdoc, float $llx, float $lly, float $urx, float $ury, string $contents, string $title, string $icon, int $open",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_add_outline": {
    "name": "PDF_add_outline",
    "url": "function.pdf-add-outline",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_add_pdflink": {
    "name": "PDF_add_pdflink",
    "url": "function.pdf-add-pdflink",
    "spec": {
      "parameters": "resource $pdfdoc, float $bottom_left_x, float $bottom_left_y, float $up_right_x, float $up_right_y, string $filename, int $page, string $dest",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_add_table_cell": {
    "name": "PDF_add_table_cell",
    "url": "function.pdf-add-table-cell",
    "spec": {
      "parameters": "resource $pdfdoc, int $table, int $column, int $row, string $text, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_add_textflow": {
    "name": "PDF_add_textflow",
    "url": "function.pdf-add-textflow",
    "spec": {
      "parameters": "resource $pdfdoc, int $textflow, string $text, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_add_thumbnail": {
    "name": "PDF_add_thumbnail",
    "url": "function.pdf-add-thumbnail",
    "spec": {
      "parameters": "resource $pdfdoc, int $image",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_add_weblink": {
    "name": "PDF_add_weblink",
    "url": "function.pdf-add-weblink",
    "spec": {
      "parameters": "resource $pdfdoc, float $lowerleftx, float $lowerlefty, float $upperrightx, float $upperrighty, string $url",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_arc": {
    "name": "PDF_arc",
    "url": "function.pdf-arc",
    "spec": {
      "parameters": "resource $p, float $x, float $y, float $r, float $alpha, float $beta",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_arcn": {
    "name": "PDF_arcn",
    "url": "function.pdf-arcn",
    "spec": {
      "parameters": "resource $p, float $x, float $y, float $r, float $alpha, float $beta",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_attach_file": {
    "name": "PDF_attach_file",
    "url": "function.pdf-attach-file",
    "spec": {
      "parameters": "resource $pdfdoc, float $llx, float $lly, float $urx, float $ury, string $filename, string $description, string $author, string $mimetype, string $icon",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_begin_document": {
    "name": "PDF_begin_document",
    "url": "function.pdf-begin-document",
    "spec": {
      "parameters": "resource $pdfdoc, string $filename, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_begin_font": {
    "name": "PDF_begin_font",
    "url": "function.pdf-begin-font",
    "spec": {
      "parameters": "resource $pdfdoc, string $filename, float $a, float $b, float $c, float $d, float $e, float $f, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_begin_glyph": {
    "name": "PDF_begin_glyph",
    "url": "function.pdf-begin-glyph",
    "spec": {
      "parameters": "resource $pdfdoc, string $glyphname, float $wx, float $llx, float $lly, float $urx, float $ury",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_begin_item": {
    "name": "PDF_begin_item",
    "url": "function.pdf-begin-item",
    "spec": {
      "parameters": "resource $pdfdoc, string $tag, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_begin_layer": {
    "name": "PDF_begin_layer",
    "url": "function.pdf-begin-layer",
    "spec": {
      "parameters": "resource $pdfdoc, int $layer",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_begin_page": {
    "name": "PDF_begin_page",
    "url": "function.pdf-begin-page",
    "spec": {
      "parameters": "resource $pdfdoc, float $width, float $height",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_begin_page_ext": {
    "name": "PDF_begin_page_ext",
    "url": "function.pdf-begin-page-ext",
    "spec": {
      "parameters": "resource $pdfdoc, float $width, float $height, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_begin_pattern": {
    "name": "PDF_begin_pattern",
    "url": "function.pdf-begin-pattern",
    "spec": {
      "parameters": "resource $pdfdoc, float $width, float $height, float $xstep, float $ystep, int $painttype",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_begin_template": {
    "name": "PDF_begin_template",
    "url": "function.pdf-begin-template",
    "spec": {
      "parameters": "resource $pdfdoc, float $width, float $height",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_begin_template_ext": {
    "name": "PDF_begin_template_ext",
    "url": "function.pdf-begin-template-ext",
    "spec": {
      "parameters": "resource $pdfdoc, float $width, float $height, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_circle": {
    "name": "PDF_circle",
    "url": "function.pdf-circle",
    "spec": {
      "parameters": "resource $pdfdoc, float $x, float $y, float $r",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_clip": {
    "name": "PDF_clip",
    "url": "function.pdf-clip",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_close": {
    "name": "PDF_close",
    "url": "function.pdf-close",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_closepath": {
    "name": "PDF_closepath",
    "url": "function.pdf-closepath",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_closepath_fill_stroke": {
    "name": "PDF_closepath_fill_stroke",
    "url": "function.pdf-closepath-fill-stroke",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_closepath_stroke": {
    "name": "PDF_closepath_stroke",
    "url": "function.pdf-closepath-stroke",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_close_image": {
    "name": "PDF_close_image",
    "url": "function.pdf-close-image",
    "spec": {
      "parameters": "resource $p, int $image",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_close_pdi": {
    "name": "PDF_close_pdi",
    "url": "function.pdf-close-pdi",
    "spec": {
      "parameters": "resource $p, int $doc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_close_pdi_page": {
    "name": "PDF_close_pdi_page",
    "url": "function.pdf-close-pdi-page",
    "spec": {
      "parameters": "resource $p, int $page",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_concat": {
    "name": "PDF_concat",
    "url": "function.pdf-concat",
    "spec": {
      "parameters": "resource $p, float $a, float $b, float $c, float $d, float $e, float $f",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_continue_text": {
    "name": "PDF_continue_text",
    "url": "function.pdf-continue-text",
    "spec": {
      "parameters": "resource $p, string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_create_3dview": {
    "name": "PDF_create_3dview",
    "url": "function.pdf-create-3dview",
    "spec": {
      "parameters": "resource $pdfdoc, string $username, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_create_action": {
    "name": "PDF_create_action",
    "url": "function.pdf-create-action",
    "spec": {
      "parameters": "resource $pdfdoc, string $type, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_create_annotation": {
    "name": "PDF_create_annotation",
    "url": "function.pdf-create-annotation",
    "spec": {
      "parameters": "resource $pdfdoc, float $llx, float $lly, float $urx, float $ury, string $type, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_create_bookmark": {
    "name": "PDF_create_bookmark",
    "url": "function.pdf-create-bookmark",
    "spec": {
      "parameters": "resource $pdfdoc, string $text, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_create_field": {
    "name": "PDF_create_field",
    "url": "function.pdf-create-field",
    "spec": {
      "parameters": "resource $pdfdoc, float $llx, float $lly, float $urx, float $ury, string $name, string $type, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_create_fieldgroup": {
    "name": "PDF_create_fieldgroup",
    "url": "function.pdf-create-fieldgroup",
    "spec": {
      "parameters": "resource $pdfdoc, string $name, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_create_gstate": {
    "name": "PDF_create_gstate",
    "url": "function.pdf-create-gstate",
    "spec": {
      "parameters": "resource $pdfdoc, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_create_pvf": {
    "name": "PDF_create_pvf",
    "url": "function.pdf-create-pvf",
    "spec": {
      "parameters": "resource $pdfdoc, string $filename, string $data, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_create_textflow": {
    "name": "PDF_create_textflow",
    "url": "function.pdf-create-textflow",
    "spec": {
      "parameters": "resource $pdfdoc, string $text, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_curveto": {
    "name": "PDF_curveto",
    "url": "function.pdf-curveto",
    "spec": {
      "parameters": "resource $p, float $x1, float $y1, float $x2, float $y2, float $x3, float $y3",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_define_layer": {
    "name": "PDF_define_layer",
    "url": "function.pdf-define-layer",
    "spec": {
      "parameters": "resource $pdfdoc, string $name, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_delete": {
    "name": "PDF_delete",
    "url": "function.pdf-delete",
    "spec": {
      "parameters": "resource $pdfdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_delete_pvf": {
    "name": "PDF_delete_pvf",
    "url": "function.pdf-delete-pvf",
    "spec": {
      "parameters": "resource $pdfdoc, string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_delete_table": {
    "name": "PDF_delete_table",
    "url": "function.pdf-delete-table",
    "spec": {
      "parameters": "resource $pdfdoc, int $table, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_delete_textflow": {
    "name": "PDF_delete_textflow",
    "url": "function.pdf-delete-textflow",
    "spec": {
      "parameters": "resource $pdfdoc, int $textflow",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_encoding_set_char": {
    "name": "PDF_encoding_set_char",
    "url": "function.pdf-encoding-set-char",
    "spec": {
      "parameters": "resource $pdfdoc, string $encoding, int $slot, string $glyphname, int $uv",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_endpath": {
    "name": "PDF_endpath",
    "url": "function.pdf-endpath",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_end_document": {
    "name": "PDF_end_document",
    "url": "function.pdf-end-document",
    "spec": {
      "parameters": "resource $pdfdoc, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_end_font": {
    "name": "PDF_end_font",
    "url": "function.pdf-end-font",
    "spec": {
      "parameters": "resource $pdfdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_end_glyph": {
    "name": "PDF_end_glyph",
    "url": "function.pdf-end-glyph",
    "spec": {
      "parameters": "resource $pdfdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_end_item": {
    "name": "PDF_end_item",
    "url": "function.pdf-end-item",
    "spec": {
      "parameters": "resource $pdfdoc, int $id",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_end_layer": {
    "name": "PDF_end_layer",
    "url": "function.pdf-end-layer",
    "spec": {
      "parameters": "resource $pdfdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_end_page": {
    "name": "PDF_end_page",
    "url": "function.pdf-end-page",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_end_page_ext": {
    "name": "PDF_end_page_ext",
    "url": "function.pdf-end-page-ext",
    "spec": {
      "parameters": "resource $pdfdoc, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_end_pattern": {
    "name": "PDF_end_pattern",
    "url": "function.pdf-end-pattern",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_end_template": {
    "name": "PDF_end_template",
    "url": "function.pdf-end-template",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_fill": {
    "name": "PDF_fill",
    "url": "function.pdf-fill",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_fill_imageblock": {
    "name": "PDF_fill_imageblock",
    "url": "function.pdf-fill-imageblock",
    "spec": {
      "parameters": "resource $pdfdoc, int $page, string $blockname, int $image, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_fill_pdfblock": {
    "name": "PDF_fill_pdfblock",
    "url": "function.pdf-fill-pdfblock",
    "spec": {
      "parameters": "resource $pdfdoc, int $page, string $blockname, int $contents, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_fill_stroke": {
    "name": "PDF_fill_stroke",
    "url": "function.pdf-fill-stroke",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_fill_textblock": {
    "name": "PDF_fill_textblock",
    "url": "function.pdf-fill-textblock",
    "spec": {
      "parameters": "resource $pdfdoc, int $page, string $blockname, string $text, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_findfont": {
    "name": "PDF_findfont",
    "url": "function.pdf-findfont",
    "spec": {
      "parameters": "resource $p, string $fontname, string $encoding, int $embed",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_fit_image": {
    "name": "PDF_fit_image",
    "url": "function.pdf-fit-image",
    "spec": {
      "parameters": "resource $pdfdoc, int $image, float $x, float $y, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_fit_pdi_page": {
    "name": "PDF_fit_pdi_page",
    "url": "function.pdf-fit-pdi-page",
    "spec": {
      "parameters": "resource $pdfdoc, int $page, float $x, float $y, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_fit_table": {
    "name": "PDF_fit_table",
    "url": "function.pdf-fit-table",
    "spec": {
      "parameters": "resource $pdfdoc, int $table, float $llx, float $lly, float $urx, float $ury, string $optlist",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_fit_textflow": {
    "name": "PDF_fit_textflow",
    "url": "function.pdf-fit-textflow",
    "spec": {
      "parameters": "resource $pdfdoc, int $textflow, float $llx, float $lly, float $urx, float $ury, string $optlist",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_fit_textline": {
    "name": "PDF_fit_textline",
    "url": "function.pdf-fit-textline",
    "spec": {
      "parameters": "resource $pdfdoc, string $text, float $x, float $y, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_get_apiname": {
    "name": "PDF_get_apiname",
    "url": "function.pdf-get-apiname",
    "spec": {
      "parameters": "resource $pdfdoc",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_get_buffer": {
    "name": "PDF_get_buffer",
    "url": "function.pdf-get-buffer",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_get_errmsg": {
    "name": "PDF_get_errmsg",
    "url": "function.pdf-get-errmsg",
    "spec": {
      "parameters": "resource $pdfdoc",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_get_errnum": {
    "name": "PDF_get_errnum",
    "url": "function.pdf-get-errnum",
    "spec": {
      "parameters": "resource $pdfdoc",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_get_font": {
    "name": "PDF_get_font",
    "url": "function.pdf-get-font",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_get_fontname": {
    "name": "PDF_get_fontname",
    "url": "function.pdf-get-fontname",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_get_fontsize": {
    "name": "PDF_get_fontsize",
    "url": "function.pdf-get-fontsize",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_get_image_height": {
    "name": "PDF_get_image_height",
    "url": "function.pdf-get-image-height",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_get_image_width": {
    "name": "PDF_get_image_width",
    "url": "function.pdf-get-image-width",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_get_majorversion": {
    "name": "PDF_get_majorversion",
    "url": "function.pdf-get-majorversion",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_get_minorversion": {
    "name": "PDF_get_minorversion",
    "url": "function.pdf-get-minorversion",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_get_parameter": {
    "name": "PDF_get_parameter",
    "url": "function.pdf-get-parameter",
    "spec": {
      "parameters": "resource $p, string $key, float $modifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_get_pdi_parameter": {
    "name": "PDF_get_pdi_parameter",
    "url": "function.pdf-get-pdi-parameter",
    "spec": {
      "parameters": "resource $p, string $key, int $doc, int $page, int $reserved",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_get_pdi_value": {
    "name": "PDF_get_pdi_value",
    "url": "function.pdf-get-pdi-value",
    "spec": {
      "parameters": "resource $p, string $key, int $doc, int $page, int $reserved",
      "returnValue": "float",
      "ref": null
    }
  },
  "pdf_get_value": {
    "name": "PDF_get_value",
    "url": "function.pdf-get-value",
    "spec": {
      "parameters": "resource $p, string $key, float $modifier",
      "returnValue": "float",
      "ref": null
    }
  },
  "pdf_info_font": {
    "name": "PDF_info_font",
    "url": "function.pdf-info-font",
    "spec": {
      "parameters": "resource $pdfdoc, int $font, string $keyword, string $optlist",
      "returnValue": "float",
      "ref": null
    }
  },
  "pdf_info_matchbox": {
    "name": "PDF_info_matchbox",
    "url": "function.pdf-info-matchbox",
    "spec": {
      "parameters": "resource $pdfdoc, string $boxname, int $num, string $keyword",
      "returnValue": "float",
      "ref": null
    }
  },
  "pdf_info_table": {
    "name": "PDF_info_table",
    "url": "function.pdf-info-table",
    "spec": {
      "parameters": "resource $pdfdoc, int $table, string $keyword",
      "returnValue": "float",
      "ref": null
    }
  },
  "pdf_info_textflow": {
    "name": "PDF_info_textflow",
    "url": "function.pdf-info-textflow",
    "spec": {
      "parameters": "resource $pdfdoc, int $textflow, string $keyword",
      "returnValue": "float",
      "ref": null
    }
  },
  "pdf_info_textline": {
    "name": "PDF_info_textline",
    "url": "function.pdf-info-textline",
    "spec": {
      "parameters": "resource $pdfdoc, string $text, string $keyword, string $optlist",
      "returnValue": "float",
      "ref": null
    }
  },
  "pdf_initgraphics": {
    "name": "PDF_initgraphics",
    "url": "function.pdf-initgraphics",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_lineto": {
    "name": "PDF_lineto",
    "url": "function.pdf-lineto",
    "spec": {
      "parameters": "resource $p, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_load_3ddata": {
    "name": "PDF_load_3ddata",
    "url": "function.pdf-load-3ddata",
    "spec": {
      "parameters": "resource $pdfdoc, string $filename, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_load_font": {
    "name": "PDF_load_font",
    "url": "function.pdf-load-font",
    "spec": {
      "parameters": "resource $pdfdoc, string $fontname, string $encoding, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_load_iccprofile": {
    "name": "PDF_load_iccprofile",
    "url": "function.pdf-load-iccprofile",
    "spec": {
      "parameters": "resource $pdfdoc, string $profilename, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_load_image": {
    "name": "PDF_load_image",
    "url": "function.pdf-load-image",
    "spec": {
      "parameters": "resource $pdfdoc, string $imagetype, string $filename, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_makespotcolor": {
    "name": "PDF_makespotcolor",
    "url": "function.pdf-makespotcolor",
    "spec": {
      "parameters": "resource $p, string $spotname",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_moveto": {
    "name": "PDF_moveto",
    "url": "function.pdf-moveto",
    "spec": {
      "parameters": "resource $p, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_new": {
    "name": "PDF_new",
    "url": "function.pdf-new",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pdf_open_ccitt": {
    "name": "PDF_open_ccitt",
    "url": "function.pdf-open-ccitt",
    "spec": {
      "parameters": "resource $pdfdoc, string $filename, int $width, int $height, int $BitReverse, int $k, int $Blackls1",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_open_file": {
    "name": "PDF_open_file",
    "url": "function.pdf-open-file",
    "spec": {
      "parameters": "resource $p, string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_open_gif": {
    "name": "PDF_open_gif",
    "url": "function.pdf-open-gif",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_open_image": {
    "name": "PDF_open_image",
    "url": "function.pdf-open-image",
    "spec": {
      "parameters": "resource $p, string $imagetype, string $source, string $data, int $length, int $width, int $height, int $components, int $bpc, string $params",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_open_image_file": {
    "name": "PDF_open_image_file",
    "url": "function.pdf-open-image-file",
    "spec": {
      "parameters": "resource $p, string $imagetype, string $filename, string $stringparam, int $intparam",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_open_jpeg": {
    "name": "PDF_open_jpeg",
    "url": "function.pdf-open-jpeg",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_open_memory_image": {
    "name": "PDF_open_memory_image",
    "url": "function.pdf-open-memory-image",
    "spec": {
      "parameters": "resource $p, resource $image",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_open_pdi": {
    "name": "PDF_open_pdi",
    "url": "function.pdf-open-pdi",
    "spec": {
      "parameters": "resource $pdfdoc, string $filename, string $optlist, int $len",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_open_pdi_document": {
    "name": "PDF_open_pdi_document",
    "url": "function.pdf-open-pdi-document",
    "spec": {
      "parameters": "resource $p, string $filename, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_open_pdi_page": {
    "name": "PDF_open_pdi_page",
    "url": "function.pdf-open-pdi-page",
    "spec": {
      "parameters": "resource $p, int $doc, int $pagenumber, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_open_tiff": {
    "name": "PDF_open_tiff",
    "url": "function.pdf-open-tiff",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_pcos_get_number": {
    "name": "PDF_pcos_get_number",
    "url": "function.pdf-pcos-get-number",
    "spec": {
      "parameters": "resource $p, int $doc, string $path",
      "returnValue": "float",
      "ref": null
    }
  },
  "pdf_pcos_get_stream": {
    "name": "PDF_pcos_get_stream",
    "url": "function.pdf-pcos-get-stream",
    "spec": {
      "parameters": "resource $p, int $doc, string $optlist, string $path",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_pcos_get_string": {
    "name": "PDF_pcos_get_string",
    "url": "function.pdf-pcos-get-string",
    "spec": {
      "parameters": "resource $p, int $doc, string $path",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_place_image": {
    "name": "PDF_place_image",
    "url": "function.pdf-place-image",
    "spec": {
      "parameters": "resource $pdfdoc, int $image, float $x, float $y, float $scale",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_place_pdi_page": {
    "name": "PDF_place_pdi_page",
    "url": "function.pdf-place-pdi-page",
    "spec": {
      "parameters": "resource $pdfdoc, int $page, float $x, float $y, float $sx, float $sy",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_process_pdi": {
    "name": "PDF_process_pdi",
    "url": "function.pdf-process-pdi",
    "spec": {
      "parameters": "resource $pdfdoc, int $doc, int $page, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_rect": {
    "name": "PDF_rect",
    "url": "function.pdf-rect",
    "spec": {
      "parameters": "resource $p, float $x, float $y, float $width, float $height",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_restore": {
    "name": "PDF_restore",
    "url": "function.pdf-restore",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_resume_page": {
    "name": "PDF_resume_page",
    "url": "function.pdf-resume-page",
    "spec": {
      "parameters": "resource $pdfdoc, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_rotate": {
    "name": "PDF_rotate",
    "url": "function.pdf-rotate",
    "spec": {
      "parameters": "resource $p, float $phi",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_save": {
    "name": "PDF_save",
    "url": "function.pdf-save",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_scale": {
    "name": "PDF_scale",
    "url": "function.pdf-scale",
    "spec": {
      "parameters": "resource $p, float $sx, float $sy",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setcolor": {
    "name": "PDF_setcolor",
    "url": "function.pdf-setcolor",
    "spec": {
      "parameters": "resource $p, string $fstype, string $colorspace, float $c1, float $c2, float $c3, float $c4",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setdash": {
    "name": "PDF_setdash",
    "url": "function.pdf-setdash",
    "spec": {
      "parameters": "resource $pdfdoc, float $b, float $w",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setdashpattern": {
    "name": "PDF_setdashpattern",
    "url": "function.pdf-setdashpattern",
    "spec": {
      "parameters": "resource $pdfdoc, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setflat": {
    "name": "PDF_setflat",
    "url": "function.pdf-setflat",
    "spec": {
      "parameters": "resource $pdfdoc, float $flatness",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setfont": {
    "name": "PDF_setfont",
    "url": "function.pdf-setfont",
    "spec": {
      "parameters": "resource $pdfdoc, int $font, float $fontsize",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setgray": {
    "name": "PDF_setgray",
    "url": "function.pdf-setgray",
    "spec": {
      "parameters": "resource $p, float $g",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setgray_fill": {
    "name": "PDF_setgray_fill",
    "url": "function.pdf-setgray-fill",
    "spec": {
      "parameters": "resource $p, float $g",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setgray_stroke": {
    "name": "PDF_setgray_stroke",
    "url": "function.pdf-setgray-stroke",
    "spec": {
      "parameters": "resource $p, float $g",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setlinecap": {
    "name": "PDF_setlinecap",
    "url": "function.pdf-setlinecap",
    "spec": {
      "parameters": "resource $p, int $linecap",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setlinejoin": {
    "name": "PDF_setlinejoin",
    "url": "function.pdf-setlinejoin",
    "spec": {
      "parameters": "resource $p, int $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setlinewidth": {
    "name": "PDF_setlinewidth",
    "url": "function.pdf-setlinewidth",
    "spec": {
      "parameters": "resource $p, float $width",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setmatrix": {
    "name": "PDF_setmatrix",
    "url": "function.pdf-setmatrix",
    "spec": {
      "parameters": "resource $p, float $a, float $b, float $c, float $d, float $e, float $f",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setmiterlimit": {
    "name": "PDF_setmiterlimit",
    "url": "function.pdf-setmiterlimit",
    "spec": {
      "parameters": "resource $pdfdoc, float $miter",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setpolydash": {
    "name": "PDF_setpolydash",
    "url": "function.pdf-setpolydash",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_setrgbcolor": {
    "name": "PDF_setrgbcolor",
    "url": "function.pdf-setrgbcolor",
    "spec": {
      "parameters": "resource $p, float $red, float $green, float $blue",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setrgbcolor_fill": {
    "name": "PDF_setrgbcolor_fill",
    "url": "function.pdf-setrgbcolor-fill",
    "spec": {
      "parameters": "resource $p, float $red, float $green, float $blue",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_setrgbcolor_stroke": {
    "name": "PDF_setrgbcolor_stroke",
    "url": "function.pdf-setrgbcolor-stroke",
    "spec": {
      "parameters": "resource $p, float $red, float $green, float $blue",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_border_color": {
    "name": "PDF_set_border_color",
    "url": "function.pdf-set-border-color",
    "spec": {
      "parameters": "resource $p, float $red, float $green, float $blue",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_border_dash": {
    "name": "PDF_set_border_dash",
    "url": "function.pdf-set-border-dash",
    "spec": {
      "parameters": "resource $pdfdoc, float $black, float $white",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_border_style": {
    "name": "PDF_set_border_style",
    "url": "function.pdf-set-border-style",
    "spec": {
      "parameters": "resource $pdfdoc, string $style, float $width",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_char_spacing": {
    "name": "PDF_set_char_spacing",
    "url": "function.pdf-set-char-spacing",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_duration": {
    "name": "PDF_set_duration",
    "url": "function.pdf-set-duration",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_gstate": {
    "name": "PDF_set_gstate",
    "url": "function.pdf-set-gstate",
    "spec": {
      "parameters": "resource $pdfdoc, int $gstate",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_horiz_scaling": {
    "name": "PDF_set_horiz_scaling",
    "url": "function.pdf-set-horiz-scaling",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_info": {
    "name": "PDF_set_info",
    "url": "function.pdf-set-info",
    "spec": {
      "parameters": "resource $p, string $key, string $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_info_author": {
    "name": "PDF_set_info_author",
    "url": "function.pdf-set-info-author",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_info_creator": {
    "name": "PDF_set_info_creator",
    "url": "function.pdf-set-info-creator",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_info_keywords": {
    "name": "PDF_set_info_keywords",
    "url": "function.pdf-set-info-keywords",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_info_subject": {
    "name": "PDF_set_info_subject",
    "url": "function.pdf-set-info-subject",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_info_title": {
    "name": "PDF_set_info_title",
    "url": "function.pdf-set-info-title",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_layer_dependency": {
    "name": "PDF_set_layer_dependency",
    "url": "function.pdf-set-layer-dependency",
    "spec": {
      "parameters": "resource $pdfdoc, string $type, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_leading": {
    "name": "PDF_set_leading",
    "url": "function.pdf-set-leading",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_parameter": {
    "name": "PDF_set_parameter",
    "url": "function.pdf-set-parameter",
    "spec": {
      "parameters": "resource $p, string $key, string $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_text_matrix": {
    "name": "PDF_set_text_matrix",
    "url": "function.pdf-set-text-matrix",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_text_pos": {
    "name": "PDF_set_text_pos",
    "url": "function.pdf-set-text-pos",
    "spec": {
      "parameters": "resource $p, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_text_rendering": {
    "name": "PDF_set_text_rendering",
    "url": "function.pdf-set-text-rendering",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_text_rise": {
    "name": "PDF_set_text_rise",
    "url": "function.pdf-set-text-rise",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_set_value": {
    "name": "PDF_set_value",
    "url": "function.pdf-set-value",
    "spec": {
      "parameters": "resource $p, string $key, float $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_set_word_spacing": {
    "name": "PDF_set_word_spacing",
    "url": "function.pdf-set-word-spacing",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pdf_shading": {
    "name": "PDF_shading",
    "url": "function.pdf-shading",
    "spec": {
      "parameters": "resource $pdfdoc, string $shtype, float $x0, float $y0, float $x1, float $y1, float $c1, float $c2, float $c3, float $c4, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_shading_pattern": {
    "name": "PDF_shading_pattern",
    "url": "function.pdf-shading-pattern",
    "spec": {
      "parameters": "resource $pdfdoc, int $shading, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_shfill": {
    "name": "PDF_shfill",
    "url": "function.pdf-shfill",
    "spec": {
      "parameters": "resource $pdfdoc, int $shading",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_show": {
    "name": "PDF_show",
    "url": "function.pdf-show",
    "spec": {
      "parameters": "resource $pdfdoc, string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_show_boxed": {
    "name": "PDF_show_boxed",
    "url": "function.pdf-show-boxed",
    "spec": {
      "parameters": "resource $p, string $text, float $left, float $top, float $width, float $height, string $mode, string $feature",
      "returnValue": "int",
      "ref": null
    }
  },
  "pdf_show_xy": {
    "name": "PDF_show_xy",
    "url": "function.pdf-show-xy",
    "spec": {
      "parameters": "resource $p, string $text, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_skew": {
    "name": "PDF_skew",
    "url": "function.pdf-skew",
    "spec": {
      "parameters": "resource $p, float $alpha, float $beta",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_stringwidth": {
    "name": "PDF_stringwidth",
    "url": "function.pdf-stringwidth",
    "spec": {
      "parameters": "resource $p, string $text, int $font, float $fontsize",
      "returnValue": "float",
      "ref": null
    }
  },
  "pdf_stroke": {
    "name": "PDF_stroke",
    "url": "function.pdf-stroke",
    "spec": {
      "parameters": "resource $p",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_suspend_page": {
    "name": "PDF_suspend_page",
    "url": "function.pdf-suspend-page",
    "spec": {
      "parameters": "resource $pdfdoc, string $optlist",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_translate": {
    "name": "PDF_translate",
    "url": "function.pdf-translate",
    "spec": {
      "parameters": "resource $p, float $tx, float $ty",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pdf_utf8_to_utf16": {
    "name": "PDF_utf8_to_utf16",
    "url": "function.pdf-utf8-to-utf16",
    "spec": {
      "parameters": "resource $pdfdoc, string $utf8string, string $ordering",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_utf16_to_utf8": {
    "name": "PDF_utf16_to_utf8",
    "url": "function.pdf-utf16-to-utf8",
    "spec": {
      "parameters": "resource $pdfdoc, string $utf16string",
      "returnValue": "string",
      "ref": null
    }
  },
  "pdf_utf32_to_utf16": {
    "name": "PDF_utf32_to_utf16",
    "url": "function.pdf-utf32-to-utf16",
    "spec": {
      "parameters": "resource $pdfdoc, string $utf32string, string $ordering",
      "returnValue": "string",
      "ref": null
    }
  },
  "pfsockopen": {
    "name": "pfsockopen",
    "url": "function.pfsockopen",
    "spec": {
      "parameters": "string $hostname [, int $port = -1 [, int &$errno [, string &$errstr [, float $timeout = ini_get(\"default_socket_timeout\") ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_affected_rows": {
    "name": "pg_affected_rows",
    "url": "function.pg-affected-rows",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_cancel_query": {
    "name": "pg_cancel_query",
    "url": "function.pg-cancel-query",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_client_encoding": {
    "name": "pg_client_encoding",
    "url": "function.pg-client-encoding",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_close": {
    "name": "pg_close",
    "url": "function.pg-close",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_connect": {
    "name": "pg_connect",
    "url": "function.pg-connect",
    "spec": {
      "parameters": "string $connection_string [, int $connect_type ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_connection_busy": {
    "name": "pg_connection_busy",
    "url": "function.pg-connection-busy",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_connection_reset": {
    "name": "pg_connection_reset",
    "url": "function.pg-connection-reset",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_connection_status": {
    "name": "pg_connection_status",
    "url": "function.pg-connection-status",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_connect_poll": {
    "name": "pg_connect_poll",
    "url": "function.pg-connect-poll",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_consume_input": {
    "name": "pg_consume_input",
    "url": "function.pg-consume-input",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_convert": {
    "name": "pg_convert",
    "url": "function.pg-convert",
    "spec": {
      "parameters": "resource $connection, string $table_name, array $assoc_array [, int $options = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pg_copy_from": {
    "name": "pg_copy_from",
    "url": "function.pg-copy-from",
    "spec": {
      "parameters": "resource $connection, string $table_name, array $rows [, string $delimiter [, string $null_as ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_copy_to": {
    "name": "pg_copy_to",
    "url": "function.pg-copy-to",
    "spec": {
      "parameters": "resource $connection, string $table_name [, string $delimiter [, string $null_as ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pg_dbname": {
    "name": "pg_dbname",
    "url": "function.pg-dbname",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_delete": {
    "name": "pg_delete",
    "url": "function.pg-delete",
    "spec": {
      "parameters": "resource $connection, string $table_name, array $assoc_array [, int $options = PGSQL_DML_EXEC ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pg_end_copy": {
    "name": "pg_end_copy",
    "url": "function.pg-end-copy",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_escape_bytea": {
    "name": "pg_escape_bytea",
    "url": "function.pg-escape-bytea",
    "spec": {
      "parameters": "[ resource $connection ], string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_escape_identifier": {
    "name": "pg_escape_identifier",
    "url": "function.pg-escape-identifier",
    "spec": {
      "parameters": "[ resource $connection ], string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_escape_literal": {
    "name": "pg_escape_literal",
    "url": "function.pg-escape-literal",
    "spec": {
      "parameters": "[ resource $connection ], string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_escape_string": {
    "name": "pg_escape_string",
    "url": "function.pg-escape-string",
    "spec": {
      "parameters": "[ resource $connection ], string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_execute": {
    "name": "pg_execute",
    "url": "function.pg-execute",
    "spec": {
      "parameters": "[ resource $connection ], string $stmtname, array $params",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_fetch_all": {
    "name": "pg_fetch_all",
    "url": "function.pg-fetch-all",
    "spec": {
      "parameters": "resource $result [, int $result_type = PGSQL_ASSOC ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pg_fetch_all_columns": {
    "name": "pg_fetch_all_columns",
    "url": "function.pg-fetch-all-columns",
    "spec": {
      "parameters": "resource $result [, int $column = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pg_fetch_array": {
    "name": "pg_fetch_array",
    "url": "function.pg-fetch-array",
    "spec": {
      "parameters": "resource $result [, int $row [, int $result_type = PGSQL_BOTH ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pg_fetch_assoc": {
    "name": "pg_fetch_assoc",
    "url": "function.pg-fetch-assoc",
    "spec": {
      "parameters": "resource $result [, int $row ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pg_fetch_object": {
    "name": "pg_fetch_object",
    "url": "function.pg-fetch-object",
    "spec": {
      "parameters": "resource $result [, int $row [, int $result_type = PGSQL_ASSOC ]]",
      "returnValue": "object",
      "ref": null
    }
  },
  "pg_fetch_result": {
    "name": "pg_fetch_result",
    "url": "function.pg-fetch-result",
    "spec": {
      "parameters": "resource $result, int $row, mixed $field",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_fetch_row": {
    "name": "pg_fetch_row",
    "url": "function.pg-fetch-row",
    "spec": {
      "parameters": "resource $result [, int $row ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pg_field_is_null": {
    "name": "pg_field_is_null",
    "url": "function.pg-field-is-null",
    "spec": {
      "parameters": "resource $result, int $row, mixed $field",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_field_name": {
    "name": "pg_field_name",
    "url": "function.pg-field-name",
    "spec": {
      "parameters": "resource $result, int $field_number",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_field_num": {
    "name": "pg_field_num",
    "url": "function.pg-field-num",
    "spec": {
      "parameters": "resource $result, string $field_name",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_field_prtlen": {
    "name": "pg_field_prtlen",
    "url": "function.pg-field-prtlen",
    "spec": {
      "parameters": "resource $result, int $row_number, mixed $field_name_or_number",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_field_size": {
    "name": "pg_field_size",
    "url": "function.pg-field-size",
    "spec": {
      "parameters": "resource $result, int $field_number",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_field_table": {
    "name": "pg_field_table",
    "url": "function.pg-field-table",
    "spec": {
      "parameters": "resource $result, int $field_number [, bool $oid_only = FALSE ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pg_field_type": {
    "name": "pg_field_type",
    "url": "function.pg-field-type",
    "spec": {
      "parameters": "resource $result, int $field_number",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_field_type_oid": {
    "name": "pg_field_type_oid",
    "url": "function.pg-field-type-oid",
    "spec": {
      "parameters": "resource $result, int $field_number",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_flush": {
    "name": "pg_flush",
    "url": "function.pg-flush",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pg_free_result": {
    "name": "pg_free_result",
    "url": "function.pg-free-result",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_get_notify": {
    "name": "pg_get_notify",
    "url": "function.pg-get-notify",
    "spec": {
      "parameters": "resource $connection [, int $result_type ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pg_get_pid": {
    "name": "pg_get_pid",
    "url": "function.pg-get-pid",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_get_result": {
    "name": "pg_get_result",
    "url": "function.pg-get-result",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_host": {
    "name": "pg_host",
    "url": "function.pg-host",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_insert": {
    "name": "pg_insert",
    "url": "function.pg-insert",
    "spec": {
      "parameters": "resource $connection, string $table_name, array $assoc_array [, int $options = PGSQL_DML_EXEC ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pg_last_error": {
    "name": "pg_last_error",
    "url": "function.pg-last-error",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_last_notice": {
    "name": "pg_last_notice",
    "url": "function.pg-last-notice",
    "spec": {
      "parameters": "resource $connection [, int $option = PGSQL_NOTICE_LAST ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pg_last_oid": {
    "name": "pg_last_oid",
    "url": "function.pg-last-oid",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_lo_close": {
    "name": "pg_lo_close",
    "url": "function.pg-lo-close",
    "spec": {
      "parameters": "resource $large_object",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_lo_create": {
    "name": "pg_lo_create",
    "url": "function.pg-lo-create",
    "spec": {
      "parameters": "[ resource $connection [, mixed $object_id ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_lo_export": {
    "name": "pg_lo_export",
    "url": "function.pg-lo-export",
    "spec": {
      "parameters": "[ resource $connection ], int $oid, string $pathname",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_lo_import": {
    "name": "pg_lo_import",
    "url": "function.pg-lo-import",
    "spec": {
      "parameters": "[ resource $connection ], string $pathname [, mixed $object_id ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_lo_open": {
    "name": "pg_lo_open",
    "url": "function.pg-lo-open",
    "spec": {
      "parameters": "resource $connection, int $oid, string $mode",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_lo_read": {
    "name": "pg_lo_read",
    "url": "function.pg-lo-read",
    "spec": {
      "parameters": "resource $large_object [, int $len = 8192 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_lo_read_all": {
    "name": "pg_lo_read_all",
    "url": "function.pg-lo-read-all",
    "spec": {
      "parameters": "resource $large_object",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_lo_seek": {
    "name": "pg_lo_seek",
    "url": "function.pg-lo-seek",
    "spec": {
      "parameters": "resource $large_object, int $offset [, int $whence = PGSQL_SEEK_CUR ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_lo_tell": {
    "name": "pg_lo_tell",
    "url": "function.pg-lo-tell",
    "spec": {
      "parameters": "resource $large_object",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_lo_truncate": {
    "name": "pg_lo_truncate",
    "url": "function.pg-lo-truncate",
    "spec": {
      "parameters": "resource $large_object, int $size",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_lo_unlink": {
    "name": "pg_lo_unlink",
    "url": "function.pg-lo-unlink",
    "spec": {
      "parameters": "resource $connection, int $oid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_lo_write": {
    "name": "pg_lo_write",
    "url": "function.pg-lo-write",
    "spec": {
      "parameters": "resource $large_object, string $data [, int $len ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_meta_data": {
    "name": "pg_meta_data",
    "url": "function.pg-meta-data",
    "spec": {
      "parameters": "resource $connection, string $table_name [, bool $extended = FALSE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pg_num_fields": {
    "name": "pg_num_fields",
    "url": "function.pg-num-fields",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_num_rows": {
    "name": "pg_num_rows",
    "url": "function.pg-num-rows",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_options": {
    "name": "pg_options",
    "url": "function.pg-options",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_parameter_status": {
    "name": "pg_parameter_status",
    "url": "function.pg-parameter-status",
    "spec": {
      "parameters": "[ resource $connection ], string $param_name",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_pconnect": {
    "name": "pg_pconnect",
    "url": "function.pg-pconnect",
    "spec": {
      "parameters": "string $connection_string [, int $connect_type ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_ping": {
    "name": "pg_ping",
    "url": "function.pg-ping",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_port": {
    "name": "pg_port",
    "url": "function.pg-port",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_prepare": {
    "name": "pg_prepare",
    "url": "function.pg-prepare",
    "spec": {
      "parameters": "[ resource $connection ], string $stmtname, string $query",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_put_line": {
    "name": "pg_put_line",
    "url": "function.pg-put-line",
    "spec": {
      "parameters": "[ resource $connection ], string $data",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_query": {
    "name": "pg_query",
    "url": "function.pg-query",
    "spec": {
      "parameters": "[ resource $connection ], string $query",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_query_params": {
    "name": "pg_query_params",
    "url": "function.pg-query-params",
    "spec": {
      "parameters": "[ resource $connection ], string $query, array $params",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_result_error": {
    "name": "pg_result_error",
    "url": "function.pg-result-error",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_result_error_field": {
    "name": "pg_result_error_field",
    "url": "function.pg-result-error-field",
    "spec": {
      "parameters": "resource $result, int $fieldcode",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_result_seek": {
    "name": "pg_result_seek",
    "url": "function.pg-result-seek",
    "spec": {
      "parameters": "resource $result, int $offset",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_result_status": {
    "name": "pg_result_status",
    "url": "function.pg-result-status",
    "spec": {
      "parameters": "resource $result [, int $type = PGSQL_STATUS_LONG ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pg_select": {
    "name": "pg_select",
    "url": "function.pg-select",
    "spec": {
      "parameters": "resource $connection, string $table_name, array $assoc_array [, int $options = PGSQL_DML_EXEC [, int $result_type = PGSQL_ASSOC ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pg_send_execute": {
    "name": "pg_send_execute",
    "url": "function.pg-send-execute",
    "spec": {
      "parameters": "resource $connection, string $stmtname, array $params",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_send_prepare": {
    "name": "pg_send_prepare",
    "url": "function.pg-send-prepare",
    "spec": {
      "parameters": "resource $connection, string $stmtname, string $query",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_send_query": {
    "name": "pg_send_query",
    "url": "function.pg-send-query",
    "spec": {
      "parameters": "resource $connection, string $query",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_send_query_params": {
    "name": "pg_send_query_params",
    "url": "function.pg-send-query-params",
    "spec": {
      "parameters": "resource $connection, string $query, array $params",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_set_client_encoding": {
    "name": "pg_set_client_encoding",
    "url": "function.pg-set-client-encoding",
    "spec": {
      "parameters": "[ resource $connection ], string $encoding",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_set_error_verbosity": {
    "name": "pg_set_error_verbosity",
    "url": "function.pg-set-error-verbosity",
    "spec": {
      "parameters": "[ resource $connection ], int $verbosity",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_socket": {
    "name": "pg_socket",
    "url": "function.pg-socket",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pg_trace": {
    "name": "pg_trace",
    "url": "function.pg-trace",
    "spec": {
      "parameters": "string $pathname [, string $mode = \"w\" [, resource $connection ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_transaction_status": {
    "name": "pg_transaction_status",
    "url": "function.pg-transaction-status",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "int",
      "ref": null
    }
  },
  "pg_tty": {
    "name": "pg_tty",
    "url": "function.pg-tty",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_unescape_bytea": {
    "name": "pg_unescape_bytea",
    "url": "function.pg-unescape-bytea",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "pg_untrace": {
    "name": "pg_untrace",
    "url": "function.pg-untrace",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pg_update": {
    "name": "pg_update",
    "url": "function.pg-update",
    "spec": {
      "parameters": "resource $connection, string $table_name, array $data, array $condition [, int $options = PGSQL_DML_EXEC ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "pg_version": {
    "name": "pg_version",
    "url": "function.pg-version",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "pharexception": {
    "name": "PharException",
    "url": "pharexception.intro.unused",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpcredits": {
    "name": "phpcredits",
    "url": "function.phpcredits",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_break_file": {
    "name": "phpdbg_break_file",
    "url": "function.phpdbg-break-file",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_break_function": {
    "name": "phpdbg_break_function",
    "url": "function.phpdbg-break-function",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_break_method": {
    "name": "phpdbg_break_method",
    "url": "function.phpdbg-break-method",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_break_next": {
    "name": "phpdbg_break_next",
    "url": "function.phpdbg-break-next",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_clear": {
    "name": "phpdbg_clear",
    "url": "function.phpdbg-clear",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_color": {
    "name": "phpdbg_color",
    "url": "function.phpdbg-color",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_end_oplog": {
    "name": "phpdbg_end_oplog",
    "url": "function.phpdbg-end-oplog",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_exec": {
    "name": "phpdbg_exec",
    "url": "function.phpdbg-exec",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_get_executable": {
    "name": "phpdbg_get_executable",
    "url": "function.phpdbg-get-executable",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_prompt": {
    "name": "phpdbg_prompt",
    "url": "function.phpdbg-prompt",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpdbg_start_oplog": {
    "name": "phpdbg_start_oplog",
    "url": "function.phpdbg-start-oplog",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpinfo": {
    "name": "phpinfo",
    "url": "function.phpinfo",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "phpversion": {
    "name": "phpversion",
    "url": "function.phpversion",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "php_check_syntax": {
    "name": "php_check_syntax",
    "url": "function.php-check-syntax",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "php_ini_loaded_file": {
    "name": "php_ini_loaded_file",
    "url": "function.php-ini-loaded-file",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "php_ini_scanned_files": {
    "name": "php_ini_scanned_files",
    "url": "function.php-ini-scanned-files",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "php_logo_guid": {
    "name": "php_logo_guid",
    "url": "function.php-logo-guid",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "php_sapi_name": {
    "name": "php_sapi_name",
    "url": "function.php-sapi-name",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "php_strip_whitespace": {
    "name": "php_strip_whitespace",
    "url": "function.php-strip-whitespace",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "php_uname": {
    "name": "php_uname",
    "url": "function.php-uname",
    "spec": {
      "parameters": "",
      "returnValue": null,
      "ref": {
        "name": null,
        "url": ""
      }
    }
  },
  "pi": {
    "name": "pi",
    "url": "function.pi",
    "spec": {
      "parameters": "void",
      "returnValue": "float",
      "ref": null
    }
  },
  "png2wbmp": {
    "name": "png2wbmp",
    "url": "function.png2wbmp",
    "spec": {
      "parameters": "string $pngname, string $wbmpname, int $dest_height, int $dest_width, int $threshold",
      "returnValue": "bool",
      "ref": null
    }
  },
  "popen": {
    "name": "popen",
    "url": "function.popen",
    "spec": {
      "parameters": "string $command, string $mode",
      "returnValue": "resource",
      "ref": null
    }
  },
  "pos": {
    "name": "pos",
    "url": "function.pos",
    "spec": {
      "parameters": "array $array",
      "returnValue": "mixed",
      "ref": {
        "name": "current()",
        "url": "function.current"
      }
    }
  },
  "posix_access": {
    "name": "posix_access",
    "url": "function.posix-access",
    "spec": {
      "parameters": "string $file [, int $mode = POSIX_F_OK ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_ctermid": {
    "name": "posix_ctermid",
    "url": "function.posix-ctermid",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "posix_errno": {
    "name": "posix_errno",
    "url": "function.posix-errno",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": {
        "name": "posix_get_last_error()",
        "url": "function.posix-get-last-error"
      }
    }
  },
  "posix_getcwd": {
    "name": "posix_getcwd",
    "url": "function.posix-getcwd",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "posix_getegid": {
    "name": "posix_getegid",
    "url": "function.posix-getegid",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_geteuid": {
    "name": "posix_geteuid",
    "url": "function.posix-geteuid",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_getgid": {
    "name": "posix_getgid",
    "url": "function.posix-getgid",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_getgrgid": {
    "name": "posix_getgrgid",
    "url": "function.posix-getgrgid",
    "spec": {
      "parameters": "int $gid",
      "returnValue": "array",
      "ref": null
    }
  },
  "posix_getgrnam": {
    "name": "posix_getgrnam",
    "url": "function.posix-getgrnam",
    "spec": {
      "parameters": "string $name",
      "returnValue": "array",
      "ref": null
    }
  },
  "posix_getgroups": {
    "name": "posix_getgroups",
    "url": "function.posix-getgroups",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "posix_getlogin": {
    "name": "posix_getlogin",
    "url": "function.posix-getlogin",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "posix_getpgid": {
    "name": "posix_getpgid",
    "url": "function.posix-getpgid",
    "spec": {
      "parameters": "int $pid",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_getpgrp": {
    "name": "posix_getpgrp",
    "url": "function.posix-getpgrp",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_getpid": {
    "name": "posix_getpid",
    "url": "function.posix-getpid",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_getppid": {
    "name": "posix_getppid",
    "url": "function.posix-getppid",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_getpwnam": {
    "name": "posix_getpwnam",
    "url": "function.posix-getpwnam",
    "spec": {
      "parameters": "string $username",
      "returnValue": "array",
      "ref": null
    }
  },
  "posix_getpwuid": {
    "name": "posix_getpwuid",
    "url": "function.posix-getpwuid",
    "spec": {
      "parameters": "int $uid",
      "returnValue": "array",
      "ref": null
    }
  },
  "posix_getrlimit": {
    "name": "posix_getrlimit",
    "url": "function.posix-getrlimit",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "posix_getsid": {
    "name": "posix_getsid",
    "url": "function.posix-getsid",
    "spec": {
      "parameters": "int $pid",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_getuid": {
    "name": "posix_getuid",
    "url": "function.posix-getuid",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_get_last_error": {
    "name": "posix_get_last_error",
    "url": "function.posix-get-last-error",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_initgroups": {
    "name": "posix_initgroups",
    "url": "function.posix-initgroups",
    "spec": {
      "parameters": "string $name, int $base_group_id",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_isatty": {
    "name": "posix_isatty",
    "url": "function.posix-isatty",
    "spec": {
      "parameters": "mixed $fd",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_kill": {
    "name": "posix_kill",
    "url": "function.posix-kill",
    "spec": {
      "parameters": "int $pid, int $sig",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_mkfifo": {
    "name": "posix_mkfifo",
    "url": "function.posix-mkfifo",
    "spec": {
      "parameters": "string $pathname, int $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_mknod": {
    "name": "posix_mknod",
    "url": "function.posix-mknod",
    "spec": {
      "parameters": "string $pathname, int $mode [, int $major = 0 [, int $minor = 0 ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_setegid": {
    "name": "posix_setegid",
    "url": "function.posix-setegid",
    "spec": {
      "parameters": "int $gid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_seteuid": {
    "name": "posix_seteuid",
    "url": "function.posix-seteuid",
    "spec": {
      "parameters": "int $uid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_setgid": {
    "name": "posix_setgid",
    "url": "function.posix-setgid",
    "spec": {
      "parameters": "int $gid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_setpgid": {
    "name": "posix_setpgid",
    "url": "function.posix-setpgid",
    "spec": {
      "parameters": "int $pid, int $pgid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_setrlimit": {
    "name": "posix_setrlimit",
    "url": "function.posix-setrlimit",
    "spec": {
      "parameters": "int $resource, int $softlimit, int $hardlimit",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_setsid": {
    "name": "posix_setsid",
    "url": "function.posix-setsid",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "posix_setuid": {
    "name": "posix_setuid",
    "url": "function.posix-setuid",
    "spec": {
      "parameters": "int $uid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "posix_strerror": {
    "name": "posix_strerror",
    "url": "function.posix-strerror",
    "spec": {
      "parameters": "int $errno",
      "returnValue": "string",
      "ref": null
    }
  },
  "posix_times": {
    "name": "posix_times",
    "url": "function.posix-times",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "posix_ttyname": {
    "name": "posix_ttyname",
    "url": "function.posix-ttyname",
    "spec": {
      "parameters": "mixed $fd",
      "returnValue": "string",
      "ref": null
    }
  },
  "posix_uname": {
    "name": "posix_uname",
    "url": "function.posix-uname",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "pow": {
    "name": "pow",
    "url": "function.pow",
    "spec": {
      "parameters": "number $base, number $exp",
      "returnValue": "number",
      "ref": null
    }
  },
  "preg_filter": {
    "name": "preg_filter",
    "url": "function.preg-filter",
    "spec": {
      "parameters": "mixed $pattern, mixed $replacement, mixed $subject [, int $limit = -1 [, int &$count ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "preg_grep": {
    "name": "preg_grep",
    "url": "function.preg-grep",
    "spec": {
      "parameters": "string $pattern, array $input [, int $flags = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "preg_last_error": {
    "name": "preg_last_error",
    "url": "function.preg-last-error",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "preg_match": {
    "name": "preg_match",
    "url": "function.preg-match",
    "spec": {
      "parameters": "string $pattern, string $subject [, array &$matches [, int $flags = 0 [, int $offset = 0 ]]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "preg_match_all": {
    "name": "preg_match_all",
    "url": "function.preg-match-all",
    "spec": {
      "parameters": "string $pattern, string $subject [, array &$matches [, int $flags = PREG_PATTERN_ORDER [, int $offset = 0 ]]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "preg_quote": {
    "name": "preg_quote",
    "url": "function.preg-quote",
    "spec": {
      "parameters": "string $str [, string $delimiter = NULL ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "preg_replace": {
    "name": "preg_replace",
    "url": "function.preg-replace",
    "spec": {
      "parameters": "mixed $pattern, mixed $replacement, mixed $subject [, int $limit = -1 [, int &$count ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "preg_replace_callback": {
    "name": "preg_replace_callback",
    "url": "function.preg-replace-callback",
    "spec": {
      "parameters": "mixed $pattern, callable $callback, mixed $subject [, int $limit = -1 [, int &$count ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "preg_replace_callback_array": {
    "name": "preg_replace_callback_array",
    "url": "function.preg-replace-callback-array",
    "spec": {
      "parameters": "array $patterns_and_callbacks, mixed $subject [, int $limit = -1 [, int &$count ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "preg_split": {
    "name": "preg_split",
    "url": "function.preg-split",
    "spec": {
      "parameters": "string $pattern, string $subject [, int $limit = -1 [, int $flags = 0 ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "prev": {
    "name": "prev",
    "url": "function.prev",
    "spec": {
      "parameters": "array &$array",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "print": {
    "name": "print",
    "url": "function.print",
    "spec": {
      "parameters": "string $arg",
      "returnValue": "int",
      "ref": null
    }
  },
  "printf": {
    "name": "printf",
    "url": "function.printf",
    "spec": {
      "parameters": "string $format [, mixed $args [, mixed $... ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "print_r": {
    "name": "print_r",
    "url": "function.print-r",
    "spec": {
      "parameters": "mixed $expression [, bool $return = FALSE ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "proc_close": {
    "name": "proc_close",
    "url": "function.proc-close",
    "spec": {
      "parameters": "resource $process",
      "returnValue": "int",
      "ref": null
    }
  },
  "proc_get_status": {
    "name": "proc_get_status",
    "url": "function.proc-get-status",
    "spec": {
      "parameters": "resource $process",
      "returnValue": "array",
      "ref": null
    }
  },
  "proc_nice": {
    "name": "proc_nice",
    "url": "function.proc-nice",
    "spec": {
      "parameters": "int $increment",
      "returnValue": "bool",
      "ref": null
    }
  },
  "proc_open": {
    "name": "proc_open",
    "url": "function.proc-open",
    "spec": {
      "parameters": "string $cmd, array $descriptorspec, array &$pipes [, string $cwd [, array $env [, array $other_options ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "proc_terminate": {
    "name": "proc_terminate",
    "url": "function.proc-terminate",
    "spec": {
      "parameters": "resource $process [, int $signal = 15 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "property_exists": {
    "name": "property_exists",
    "url": "function.property-exists",
    "spec": {
      "parameters": "mixed $class, string $property",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_add_to_personal": {
    "name": "pspell_add_to_personal",
    "url": "function.pspell-add-to-personal",
    "spec": {
      "parameters": "int $dictionary_link, string $word",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_add_to_session": {
    "name": "pspell_add_to_session",
    "url": "function.pspell-add-to-session",
    "spec": {
      "parameters": "int $dictionary_link, string $word",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_check": {
    "name": "pspell_check",
    "url": "function.pspell-check",
    "spec": {
      "parameters": "int $dictionary_link, string $word",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_clear_session": {
    "name": "pspell_clear_session",
    "url": "function.pspell-clear-session",
    "spec": {
      "parameters": "int $dictionary_link",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_config_create": {
    "name": "pspell_config_create",
    "url": "function.pspell-config-create",
    "spec": {
      "parameters": "string $language [, string $spelling [, string $jargon [, string $encoding ]]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pspell_config_data_dir": {
    "name": "pspell_config_data_dir",
    "url": "function.pspell-config-data-dir",
    "spec": {
      "parameters": "int $conf, string $directory",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_config_dict_dir": {
    "name": "pspell_config_dict_dir",
    "url": "function.pspell-config-dict-dir",
    "spec": {
      "parameters": "int $conf, string $directory",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_config_ignore": {
    "name": "pspell_config_ignore",
    "url": "function.pspell-config-ignore",
    "spec": {
      "parameters": "int $dictionary_link, int $n",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_config_mode": {
    "name": "pspell_config_mode",
    "url": "function.pspell-config-mode",
    "spec": {
      "parameters": "int $dictionary_link, int $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_config_personal": {
    "name": "pspell_config_personal",
    "url": "function.pspell-config-personal",
    "spec": {
      "parameters": "int $dictionary_link, string $file",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_config_repl": {
    "name": "pspell_config_repl",
    "url": "function.pspell-config-repl",
    "spec": {
      "parameters": "int $dictionary_link, string $file",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_config_runtogether": {
    "name": "pspell_config_runtogether",
    "url": "function.pspell-config-runtogether",
    "spec": {
      "parameters": "int $dictionary_link, bool $flag",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_config_save_repl": {
    "name": "pspell_config_save_repl",
    "url": "function.pspell-config-save-repl",
    "spec": {
      "parameters": "int $dictionary_link, bool $flag",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_new": {
    "name": "pspell_new",
    "url": "function.pspell-new",
    "spec": {
      "parameters": "string $language [, string $spelling [, string $jargon [, string $encoding [, int $mode = 0 ]]]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pspell_new_config": {
    "name": "pspell_new_config",
    "url": "function.pspell-new-config",
    "spec": {
      "parameters": "int $config",
      "returnValue": "int",
      "ref": null
    }
  },
  "pspell_new_personal": {
    "name": "pspell_new_personal",
    "url": "function.pspell-new-personal",
    "spec": {
      "parameters": "string $personal, string $language [, string $spelling [, string $jargon [, string $encoding [, int $mode = 0 ]]]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "pspell_save_wordlist": {
    "name": "pspell_save_wordlist",
    "url": "function.pspell-save-wordlist",
    "spec": {
      "parameters": "int $dictionary_link",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_store_replacement": {
    "name": "pspell_store_replacement",
    "url": "function.pspell-store-replacement",
    "spec": {
      "parameters": "int $dictionary_link, string $misspelled, string $correct",
      "returnValue": "bool",
      "ref": null
    }
  },
  "pspell_suggest": {
    "name": "pspell_suggest",
    "url": "function.pspell-suggest",
    "spec": {
      "parameters": "int $dictionary_link, string $word",
      "returnValue": "array",
      "ref": null
    }
  },
  "ps_add_bookmark": {
    "name": "ps_add_bookmark",
    "url": "function.ps-add-bookmark",
    "spec": {
      "parameters": "resource $psdoc, string $text [, int $parent = 0 [, int $open = 0 ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_add_launchlink": {
    "name": "ps_add_launchlink",
    "url": "function.ps-add-launchlink",
    "spec": {
      "parameters": "resource $psdoc, float $llx, float $lly, float $urx, float $ury, string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_add_locallink": {
    "name": "ps_add_locallink",
    "url": "function.ps-add-locallink",
    "spec": {
      "parameters": "resource $psdoc, float $llx, float $lly, float $urx, float $ury, int $page, string $dest",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_add_note": {
    "name": "ps_add_note",
    "url": "function.ps-add-note",
    "spec": {
      "parameters": "resource $psdoc, float $llx, float $lly, float $urx, float $ury, string $contents, string $title, string $icon, int $open",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_add_pdflink": {
    "name": "ps_add_pdflink",
    "url": "function.ps-add-pdflink",
    "spec": {
      "parameters": "resource $psdoc, float $llx, float $lly, float $urx, float $ury, string $filename, int $page, string $dest",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_add_weblink": {
    "name": "ps_add_weblink",
    "url": "function.ps-add-weblink",
    "spec": {
      "parameters": "resource $psdoc, float $llx, float $lly, float $urx, float $ury, string $url",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_arc": {
    "name": "ps_arc",
    "url": "function.ps-arc",
    "spec": {
      "parameters": "resource $psdoc, float $x, float $y, float $radius, float $alpha, float $beta",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_arcn": {
    "name": "ps_arcn",
    "url": "function.ps-arcn",
    "spec": {
      "parameters": "resource $psdoc, float $x, float $y, float $radius, float $alpha, float $beta",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_begin_page": {
    "name": "ps_begin_page",
    "url": "function.ps-begin-page",
    "spec": {
      "parameters": "resource $psdoc, float $width, float $height",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_begin_pattern": {
    "name": "ps_begin_pattern",
    "url": "function.ps-begin-pattern",
    "spec": {
      "parameters": "resource $psdoc, float $width, float $height, float $xstep, float $ystep, int $painttype",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_begin_template": {
    "name": "ps_begin_template",
    "url": "function.ps-begin-template",
    "spec": {
      "parameters": "resource $psdoc, float $width, float $height",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_circle": {
    "name": "ps_circle",
    "url": "function.ps-circle",
    "spec": {
      "parameters": "resource $psdoc, float $x, float $y, float $radius",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_clip": {
    "name": "ps_clip",
    "url": "function.ps-clip",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_close": {
    "name": "ps_close",
    "url": "function.ps-close",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_closepath": {
    "name": "ps_closepath",
    "url": "function.ps-closepath",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_closepath_stroke": {
    "name": "ps_closepath_stroke",
    "url": "function.ps-closepath-stroke",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_close_image": {
    "name": "ps_close_image",
    "url": "function.ps-close-image",
    "spec": {
      "parameters": "resource $psdoc, int $imageid",
      "returnValue": "void",
      "ref": null
    }
  },
  "ps_continue_text": {
    "name": "ps_continue_text",
    "url": "function.ps-continue-text",
    "spec": {
      "parameters": "resource $psdoc, string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_curveto": {
    "name": "ps_curveto",
    "url": "function.ps-curveto",
    "spec": {
      "parameters": "resource $psdoc, float $x1, float $y1, float $x2, float $y2, float $x3, float $y3",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_delete": {
    "name": "ps_delete",
    "url": "function.ps-delete",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_end_page": {
    "name": "ps_end_page",
    "url": "function.ps-end-page",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_end_pattern": {
    "name": "ps_end_pattern",
    "url": "function.ps-end-pattern",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_end_template": {
    "name": "ps_end_template",
    "url": "function.ps-end-template",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_fill": {
    "name": "ps_fill",
    "url": "function.ps-fill",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_fill_stroke": {
    "name": "ps_fill_stroke",
    "url": "function.ps-fill-stroke",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_findfont": {
    "name": "ps_findfont",
    "url": "function.ps-findfont",
    "spec": {
      "parameters": "resource $psdoc, string $fontname, string $encoding [, bool $embed = FALSE ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_get_buffer": {
    "name": "ps_get_buffer",
    "url": "function.ps-get-buffer",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "string",
      "ref": null
    }
  },
  "ps_get_parameter": {
    "name": "ps_get_parameter",
    "url": "function.ps-get-parameter",
    "spec": {
      "parameters": "resource $psdoc, string $name [, float $modifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ps_get_value": {
    "name": "ps_get_value",
    "url": "function.ps-get-value",
    "spec": {
      "parameters": "resource $psdoc, string $name [, float $modifier ]",
      "returnValue": "float",
      "ref": null
    }
  },
  "ps_hyphenate": {
    "name": "ps_hyphenate",
    "url": "function.ps-hyphenate",
    "spec": {
      "parameters": "resource $psdoc, string $text",
      "returnValue": "array",
      "ref": null
    }
  },
  "ps_include_file": {
    "name": "ps_include_file",
    "url": "function.ps-include-file",
    "spec": {
      "parameters": "resource $psdoc, string $file",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_lineto": {
    "name": "ps_lineto",
    "url": "function.ps-lineto",
    "spec": {
      "parameters": "resource $psdoc, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_makespotcolor": {
    "name": "ps_makespotcolor",
    "url": "function.ps-makespotcolor",
    "spec": {
      "parameters": "resource $psdoc, string $name [, int $reserved = 0 ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_moveto": {
    "name": "ps_moveto",
    "url": "function.ps-moveto",
    "spec": {
      "parameters": "resource $psdoc, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_new": {
    "name": "ps_new",
    "url": "function.ps-new",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ps_open_file": {
    "name": "ps_open_file",
    "url": "function.ps-open-file",
    "spec": {
      "parameters": "resource $psdoc [, string $filename ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_open_image": {
    "name": "ps_open_image",
    "url": "function.ps-open-image",
    "spec": {
      "parameters": "resource $psdoc, string $type, string $source, string $data, int $lenght, int $width, int $height, int $components, int $bpc, string $params",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_open_image_file": {
    "name": "ps_open_image_file",
    "url": "function.ps-open-image-file",
    "spec": {
      "parameters": "resource $psdoc, string $type, string $filename [, string $stringparam [, int $intparam = 0 ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_open_memory_image": {
    "name": "ps_open_memory_image",
    "url": "function.ps-open-memory-image",
    "spec": {
      "parameters": "resource $psdoc, int $gd",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_place_image": {
    "name": "ps_place_image",
    "url": "function.ps-place-image",
    "spec": {
      "parameters": "resource $psdoc, int $imageid, float $x, float $y, float $scale",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_rect": {
    "name": "ps_rect",
    "url": "function.ps-rect",
    "spec": {
      "parameters": "resource $psdoc, float $x, float $y, float $width, float $height",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_restore": {
    "name": "ps_restore",
    "url": "function.ps-restore",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_rotate": {
    "name": "ps_rotate",
    "url": "function.ps-rotate",
    "spec": {
      "parameters": "resource $psdoc, float $rot",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_save": {
    "name": "ps_save",
    "url": "function.ps-save",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_scale": {
    "name": "ps_scale",
    "url": "function.ps-scale",
    "spec": {
      "parameters": "resource $psdoc, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setcolor": {
    "name": "ps_setcolor",
    "url": "function.ps-setcolor",
    "spec": {
      "parameters": "resource $psdoc, string $type, string $colorspace, float $c1, float $c2, float $c3, float $c4",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setdash": {
    "name": "ps_setdash",
    "url": "function.ps-setdash",
    "spec": {
      "parameters": "resource $psdoc, float $on, float $off",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setflat": {
    "name": "ps_setflat",
    "url": "function.ps-setflat",
    "spec": {
      "parameters": "resource $psdoc, float $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setfont": {
    "name": "ps_setfont",
    "url": "function.ps-setfont",
    "spec": {
      "parameters": "resource $psdoc, int $fontid, float $size",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setgray": {
    "name": "ps_setgray",
    "url": "function.ps-setgray",
    "spec": {
      "parameters": "resource $psdoc, float $gray",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setlinecap": {
    "name": "ps_setlinecap",
    "url": "function.ps-setlinecap",
    "spec": {
      "parameters": "resource $psdoc, int $type",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setlinejoin": {
    "name": "ps_setlinejoin",
    "url": "function.ps-setlinejoin",
    "spec": {
      "parameters": "resource $psdoc, int $type",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setlinewidth": {
    "name": "ps_setlinewidth",
    "url": "function.ps-setlinewidth",
    "spec": {
      "parameters": "resource $psdoc, float $width",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setmiterlimit": {
    "name": "ps_setmiterlimit",
    "url": "function.ps-setmiterlimit",
    "spec": {
      "parameters": "resource $psdoc, float $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setoverprintmode": {
    "name": "ps_setoverprintmode",
    "url": "function.ps-setoverprintmode",
    "spec": {
      "parameters": "resource $psdoc, int $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_setpolydash": {
    "name": "ps_setpolydash",
    "url": "function.ps-setpolydash",
    "spec": {
      "parameters": "resource $psdoc, float $arr",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_set_border_color": {
    "name": "ps_set_border_color",
    "url": "function.ps-set-border-color",
    "spec": {
      "parameters": "resource $psdoc, float $red, float $green, float $blue",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_set_border_dash": {
    "name": "ps_set_border_dash",
    "url": "function.ps-set-border-dash",
    "spec": {
      "parameters": "resource $psdoc, float $black, float $white",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_set_border_style": {
    "name": "ps_set_border_style",
    "url": "function.ps-set-border-style",
    "spec": {
      "parameters": "resource $psdoc, string $style, float $width",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_set_info": {
    "name": "ps_set_info",
    "url": "function.ps-set-info",
    "spec": {
      "parameters": "resource $p, string $key, string $val",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_set_parameter": {
    "name": "ps_set_parameter",
    "url": "function.ps-set-parameter",
    "spec": {
      "parameters": "resource $psdoc, string $name, string $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_set_text_pos": {
    "name": "ps_set_text_pos",
    "url": "function.ps-set-text-pos",
    "spec": {
      "parameters": "resource $psdoc, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_set_value": {
    "name": "ps_set_value",
    "url": "function.ps-set-value",
    "spec": {
      "parameters": "resource $psdoc, string $name, float $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_shading": {
    "name": "ps_shading",
    "url": "function.ps-shading",
    "spec": {
      "parameters": "resource $psdoc, string $type, float $x0, float $y0, float $x1, float $y1, float $c1, float $c2, float $c3, float $c4, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_shading_pattern": {
    "name": "ps_shading_pattern",
    "url": "function.ps-shading-pattern",
    "spec": {
      "parameters": "resource $psdoc, int $shadingid, string $optlist",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_shfill": {
    "name": "ps_shfill",
    "url": "function.ps-shfill",
    "spec": {
      "parameters": "resource $psdoc, int $shadingid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_show": {
    "name": "ps_show",
    "url": "function.ps-show",
    "spec": {
      "parameters": "resource $psdoc, string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_show2": {
    "name": "ps_show2",
    "url": "function.ps-show2",
    "spec": {
      "parameters": "resource $psdoc, string $text, int $len",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_show_boxed": {
    "name": "ps_show_boxed",
    "url": "function.ps-show-boxed",
    "spec": {
      "parameters": "resource $psdoc, string $text, float $left, float $bottom, float $width, float $height, string $hmode [, string $feature ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ps_show_xy": {
    "name": "ps_show_xy",
    "url": "function.ps-show-xy",
    "spec": {
      "parameters": "resource $psdoc, string $text, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_show_xy2": {
    "name": "ps_show_xy2",
    "url": "function.ps-show-xy2",
    "spec": {
      "parameters": "resource $psdoc, string $text, int $len, float $xcoor, float $ycoor",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_stringwidth": {
    "name": "ps_stringwidth",
    "url": "function.ps-stringwidth",
    "spec": {
      "parameters": "resource $psdoc, string $text [, int $fontid = 0 [, float $size = 0.0 ]]",
      "returnValue": "float",
      "ref": null
    }
  },
  "ps_string_geometry": {
    "name": "ps_string_geometry",
    "url": "function.ps-string-geometry",
    "spec": {
      "parameters": "resource $psdoc, string $text [, int $fontid = 0 [, float $size = 0.0 ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "ps_stroke": {
    "name": "ps_stroke",
    "url": "function.ps-stroke",
    "spec": {
      "parameters": "resource $psdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_symbol": {
    "name": "ps_symbol",
    "url": "function.ps-symbol",
    "spec": {
      "parameters": "resource $psdoc, int $ord",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ps_symbol_name": {
    "name": "ps_symbol_name",
    "url": "function.ps-symbol-name",
    "spec": {
      "parameters": "resource $psdoc, int $ord [, int $fontid = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ps_symbol_width": {
    "name": "ps_symbol_width",
    "url": "function.ps-symbol-width",
    "spec": {
      "parameters": "resource $psdoc, int $ord [, int $fontid = 0 [, float $size = 0.0 ]]",
      "returnValue": "float",
      "ref": null
    }
  },
  "ps_translate": {
    "name": "ps_translate",
    "url": "function.ps-translate",
    "spec": {
      "parameters": "resource $psdoc, float $x, float $y",
      "returnValue": "bool",
      "ref": null
    }
  },
  "putenv": {
    "name": "putenv",
    "url": "function.putenv",
    "spec": {
      "parameters": "string $setting",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_close": {
    "name": "px_close",
    "url": "function.px-close",
    "spec": {
      "parameters": "resource $pxdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_create_fp": {
    "name": "px_create_fp",
    "url": "function.px-create-fp",
    "spec": {
      "parameters": "resource $pxdoc, resource $file, array $fielddesc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_date2string": {
    "name": "px_date2string",
    "url": "function.px-date2string",
    "spec": {
      "parameters": "resource $pxdoc, int $value, string $format",
      "returnValue": "string",
      "ref": null
    }
  },
  "px_delete": {
    "name": "px_delete",
    "url": "function.px-delete",
    "spec": {
      "parameters": "resource $pxdoc",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_delete_record": {
    "name": "px_delete_record",
    "url": "function.px-delete-record",
    "spec": {
      "parameters": "resource $pxdoc, int $num",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_get_field": {
    "name": "px_get_field",
    "url": "function.px-get-field",
    "spec": {
      "parameters": "resource $pxdoc, int $fieldno",
      "returnValue": "array",
      "ref": null
    }
  },
  "px_get_info": {
    "name": "px_get_info",
    "url": "function.px-get-info",
    "spec": {
      "parameters": "resource $pxdoc",
      "returnValue": "array",
      "ref": null
    }
  },
  "px_get_parameter": {
    "name": "px_get_parameter",
    "url": "function.px-get-parameter",
    "spec": {
      "parameters": "resource $pxdoc, string $name",
      "returnValue": "string",
      "ref": null
    }
  },
  "px_get_record": {
    "name": "px_get_record",
    "url": "function.px-get-record",
    "spec": {
      "parameters": "resource $pxdoc, int $num [, int $mode = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "px_get_schema": {
    "name": "px_get_schema",
    "url": "function.px-get-schema",
    "spec": {
      "parameters": "resource $pxdoc [, int $mode = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "px_get_value": {
    "name": "px_get_value",
    "url": "function.px-get-value",
    "spec": {
      "parameters": "resource $pxdoc, string $name",
      "returnValue": "float",
      "ref": null
    }
  },
  "px_insert_record": {
    "name": "px_insert_record",
    "url": "function.px-insert-record",
    "spec": {
      "parameters": "resource $pxdoc, array $data",
      "returnValue": "int",
      "ref": null
    }
  },
  "px_new": {
    "name": "px_new",
    "url": "function.px-new",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "px_numfields": {
    "name": "px_numfields",
    "url": "function.px-numfields",
    "spec": {
      "parameters": "resource $pxdoc",
      "returnValue": "int",
      "ref": null
    }
  },
  "px_numrecords": {
    "name": "px_numrecords",
    "url": "function.px-numrecords",
    "spec": {
      "parameters": "resource $pxdoc",
      "returnValue": "int",
      "ref": null
    }
  },
  "px_open_fp": {
    "name": "px_open_fp",
    "url": "function.px-open-fp",
    "spec": {
      "parameters": "resource $pxdoc, resource $file",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_put_record": {
    "name": "px_put_record",
    "url": "function.px-put-record",
    "spec": {
      "parameters": "resource $pxdoc, array $record [, int $recpos = -1 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_retrieve_record": {
    "name": "px_retrieve_record",
    "url": "function.px-retrieve-record",
    "spec": {
      "parameters": "resource $pxdoc, int $num [, int $mode = 0 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "px_set_blob_file": {
    "name": "px_set_blob_file",
    "url": "function.px-set-blob-file",
    "spec": {
      "parameters": "resource $pxdoc, string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_set_parameter": {
    "name": "px_set_parameter",
    "url": "function.px-set-parameter",
    "spec": {
      "parameters": "resource $pxdoc, string $name, string $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_set_tablename": {
    "name": "px_set_tablename",
    "url": "function.px-set-tablename",
    "spec": {
      "parameters": "resource $pxdoc, string $name",
      "returnValue": "void",
      "ref": null
    }
  },
  "px_set_targetencoding": {
    "name": "px_set_targetencoding",
    "url": "function.px-set-targetencoding",
    "spec": {
      "parameters": "resource $pxdoc, string $encoding",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_set_value": {
    "name": "px_set_value",
    "url": "function.px-set-value",
    "spec": {
      "parameters": "resource $pxdoc, string $name, float $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "px_timestamp2string": {
    "name": "px_timestamp2string",
    "url": "function.px-timestamp2string",
    "spec": {
      "parameters": "resource $pxdoc, float $value, string $format",
      "returnValue": "string",
      "ref": null
    }
  },
  "px_update_record": {
    "name": "px_update_record",
    "url": "function.px-update-record",
    "spec": {
      "parameters": "resource $pxdoc, array $data, int $num",
      "returnValue": "bool",
      "ref": null
    }
  }
};
