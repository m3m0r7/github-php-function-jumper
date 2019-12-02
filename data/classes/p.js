classes.p = {
  parentiterator: {
    name: "ParentIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      accept: {
        name: "accept",
        url: "parentiterator.accept",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      getchildren: {
        name: "getChildren",
        url: "parentiterator.getchildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ParentIterator",
          ref: null
        }
      },
      haschildren: {
        name: "hasChildren",
        url: "parentiterator.haschildren",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      next: {
        name: "next",
        url: "parentiterator.next",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      rewind: {
        name: "rewind",
        url: "parentiterator.rewind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "parentiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "RecursiveIterator $iterator",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  pdo: {
    name: "PDO",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      begintransaction: {
        name: "beginTransaction",
        url: "pdo.begintransaction",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      commit: {
        name: "commit",
        url: "pdo.commit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      cubrid_schema: {
        name: "cubrid_schema",
        url: "pdo.cubrid-schema",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $schema_type [, string $table_name [, string $col_name ]]",
          returnValue: "array",
          ref: null
        }
      },
      errorcode: {
        name: "errorCode",
        url: "pdo.errorcode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      errorinfo: {
        name: "errorInfo",
        url: "pdo.errorinfo",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      exec: {
        name: "exec",
        url: "pdo.exec",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $statement",
          returnValue: "int",
          ref: null
        }
      },
      getattribute: {
        name: "getAttribute",
        url: "pdo.getattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $attribute",
          returnValue: "mixed",
          ref: null
        }
      },
      getavailabledrivers: {
        name: "getAvailableDrivers",
        url: "pdo.getavailabledrivers",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      intransaction: {
        name: "inTransaction",
        url: "pdo.intransaction",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      lastinsertid: {
        name: "lastInsertId",
        url: "pdo.lastinsertid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $name = NULL ]",
          returnValue: "string",
          ref: null
        }
      },
      pgsqlcopyfromarray: {
        name: "pgsqlCopyFromArray",
        url: "pdo.pgsqlcopyfromarray",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $table_name, array $rows [, string $delimiter = '\\t' [, string $null_as = \"\\\\\\\\N\" [, string $fields ]]]",
          returnValue: "bool",
          ref: null
        }
      },
      pgsqlcopyfromfile: {
        name: "pgsqlCopyFromFile",
        url: "pdo.pgsqlcopyfromfile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $table_name, string $filename [, string $delimiter = '\\t' [, string $null_as = \"\\\\\\\\N\" [, string $fields ]]]",
          returnValue: "bool",
          ref: null
        }
      },
      pgsqlcopytoarray: {
        name: "pgsqlCopyToArray",
        url: "pdo.pgsqlcopytoarray",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $table_name [, string $delimiter = '\\t' [, string $null_as = \"\\\\\\\\N\" [, string $fields ]]]",
          returnValue: "array",
          ref: null
        }
      },
      pgsqlcopytofile: {
        name: "pgsqlCopyToFile",
        url: "pdo.pgsqlcopytofile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $table_name, string $filename [, string $delimiter = '\\t' [, string $null_as = \"\\\\\\\\N\" [, string $fields ]]]",
          returnValue: "bool",
          ref: null
        }
      },
      pgsqlgetnotify: {
        name: "pgsqlGetNotify",
        url: "pdo.pgsqlgetnotify",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $result_type = PDO::FETCH_USE_DEFAULT [, int $ms_timeout = 0 ]]",
          returnValue: "array",
          ref: null
        }
      },
      pgsqlgetpid: {
        name: "pgsqlGetPid",
        url: "pdo.pgsqlgetpid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      pgsqllobcreate: {
        name: "pgsqlLOBCreate",
        url: "pdo.pgsqllobcreate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      pgsqllobopen: {
        name: "pgsqlLOBOpen",
        url: "pdo.pgsqllobopen",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $oid [, string $mode = \"rb\" ]",
          returnValue: "resource",
          ref: null
        }
      },
      pgsqllobunlink: {
        name: "pgsqlLOBUnlink",
        url: "pdo.pgsqllobunlink",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $oid",
          returnValue: "bool",
          ref: null
        }
      },
      prepare: {
        name: "prepare",
        url: "pdo.prepare",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $statement [, array $driver_options = array() ]",
          returnValue: "PDOStatement",
          ref: null
        }
      },
      query: {
        name: "query",
        url: "pdo.query",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $statement",
          returnValue: "PDOStatement",
          ref: null
        }
      },
      quote: {
        name: "quote",
        url: "pdo.quote",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $string [, int $parameter_type = PDO::PARAM_STR ]",
          returnValue: "string",
          ref: null
        }
      },
      rollback: {
        name: "rollBack",
        url: "pdo.rollback",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      setattribute: {
        name: "setAttribute",
        url: "pdo.setattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $attribute, mixed $value",
          returnValue: "bool",
          ref: null
        }
      },
      sqlitecreateaggregate: {
        name: "sqliteCreateAggregate",
        url: "pdo.sqlitecreateaggregate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, callable $step_func, callable $finalize_func [, int $num_args ]",
          returnValue: "bool",
          ref: null
        }
      },
      sqlitecreatecollation: {
        name: "sqliteCreateCollation",
        url: "pdo.sqlitecreatecollation",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, callable $callback",
          returnValue: "bool",
          ref: null
        }
      },
      sqlitecreatefunction: {
        name: "sqliteCreateFunction",
        url: "pdo.sqlitecreatefunction",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $function_name, callable $callback [, int $num_args = -1 [, int $flags = 0 ]]",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "pdo.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $dsn [, string $username [, string $passwd [, array $options ]]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  pdostatement: {
    name: "PDOStatement",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      bindcolumn: {
        name: "bindColumn",
        url: "pdostatement.bindcolumn",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $column, mixed &$param [, int $type [, int $maxlen [, mixed $driverdata ]]]",
          returnValue: "bool",
          ref: null
        }
      },
      bindparam: {
        name: "bindParam",
        url: "pdostatement.bindparam",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $parameter, mixed &$variable [, int $data_type = PDO::PARAM_STR [, int $length [, mixed $driver_options ]]]",
          returnValue: "bool",
          ref: null
        }
      },
      bindvalue: {
        name: "bindValue",
        url: "pdostatement.bindvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $parameter, mixed $value [, int $data_type = PDO::PARAM_STR ]",
          returnValue: "bool",
          ref: null
        }
      },
      closecursor: {
        name: "closeCursor",
        url: "pdostatement.closecursor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      columncount: {
        name: "columnCount",
        url: "pdostatement.columncount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      debugdumpparams: {
        name: "debugDumpParams",
        url: "pdostatement.debugdumpparams",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      errorcode: {
        name: "errorCode",
        url: "pdostatement.errorcode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      errorinfo: {
        name: "errorInfo",
        url: "pdostatement.errorinfo",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      execute: {
        name: "execute",
        url: "pdostatement.execute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ array $input_parameters ]",
          returnValue: "bool",
          ref: null
        }
      },
      fetch: {
        name: "fetch",
        url: "pdostatement.fetch",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $fetch_style [, int $cursor_orientation = PDO::FETCH_ORI_NEXT [, int $cursor_offset = 0 ]]]",
          returnValue: "mixed",
          ref: null
        }
      },
      fetchall: {
        name: "fetchAll",
        url: "pdostatement.fetchall",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $fetch_style [, mixed $fetch_argument [, array $ctor_args = array() ]]]",
          returnValue: "array",
          ref: null
        }
      },
      fetchcolumn: {
        name: "fetchColumn",
        url: "pdostatement.fetchcolumn",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $column_number = 0 ]",
          returnValue: "mixed",
          ref: null
        }
      },
      fetchobject: {
        name: "fetchObject",
        url: "pdostatement.fetchobject",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $class_name = \"stdClass\" [, array $ctor_args ]]",
          returnValue: "mixed",
          ref: null
        }
      },
      getattribute: {
        name: "getAttribute",
        url: "pdostatement.getattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $attribute",
          returnValue: "mixed",
          ref: null
        }
      },
      getcolumnmeta: {
        name: "getColumnMeta",
        url: "pdostatement.getcolumnmeta",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $column",
          returnValue: "array",
          ref: null
        }
      },
      nextrowset: {
        name: "nextRowset",
        url: "pdostatement.nextrowset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      rowcount: {
        name: "rowCount",
        url: "pdostatement.rowcount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      setattribute: {
        name: "setAttribute",
        url: "pdostatement.setattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $attribute, mixed $value",
          returnValue: "bool",
          ref: null
        }
      },
      setfetchmode: {
        name: "setFetchMode",
        url: "pdostatement.setfetchmode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $mode",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.pdostatement",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  phar: {
    name: "Phar",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      addemptydir: {
        name: "addEmptyDir",
        url: "phar.addemptydir",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $dirname",
          returnValue: "void",
          ref: null
        }
      },
      addfile: {
        name: "addFile",
        url: "phar.addfile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $file [, string $localname ]",
          returnValue: "void",
          ref: null
        }
      },
      addfromstring: {
        name: "addFromString",
        url: "phar.addfromstring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $localname, string $contents",
          returnValue: "void",
          ref: null
        }
      },
      apiversion: {
        name: "apiVersion",
        url: "phar.apiversion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      buildfromdirectory: {
        name: "buildFromDirectory",
        url: "phar.buildfromdirectory",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $base_dir [, string $regex ]",
          returnValue: "array",
          ref: null
        }
      },
      buildfromiterator: {
        name: "buildFromIterator",
        url: "phar.buildfromiterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Iterator $iter [, string $base_directory ]",
          returnValue: "array",
          ref: null
        }
      },
      cancompress: {
        name: "canCompress",
        url: "phar.cancompress",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "[ int $type = 0 ]",
          returnValue: "bool",
          ref: null
        }
      },
      canwrite: {
        name: "canWrite",
        url: "phar.canwrite",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      compress: {
        name: "compress",
        url: "phar.compress",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $compression [, string $extension ]",
          returnValue: "object",
          ref: null
        }
      },
      compressallfilesbzip2: {
        name: "compressAllFilesBZIP2",
        url: "phar.compressallfilesbzip2",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      compressallfilesgz: {
        name: "compressAllFilesGZ",
        url: "phar.compressallfilesgz",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      compressfiles: {
        name: "compressFiles",
        url: "phar.compressfiles",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $compression",
          returnValue: "void",
          ref: null
        }
      },
      converttodata: {
        name: "convertToData",
        url: "phar.converttodata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $format = 9021976 [, int $compression = 9021976 [, string $extension ]]]",
          returnValue: "PharData",
          ref: null
        }
      },
      converttoexecutable: {
        name: "convertToExecutable",
        url: "phar.converttoexecutable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $format = 9021976 [, int $compression = 9021976 [, string $extension ]]]",
          returnValue: "Phar",
          ref: null
        }
      },
      copy: {
        name: "copy",
        url: "phar.copy",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $oldfile, string $newfile",
          returnValue: "bool",
          ref: null
        }
      },
      count: {
        name: "count",
        url: "phar.count",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      createdefaultstub: {
        name: "createDefaultStub",
        url: "phar.createdefaultstub",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "[ string $indexfile [, string $webindexfile ]]",
          returnValue: "string",
          ref: null
        }
      },
      decompress: {
        name: "decompress",
        url: "phar.decompress",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $extension ]",
          returnValue: "object",
          ref: null
        }
      },
      decompressfiles: {
        name: "decompressFiles",
        url: "phar.decompressfiles",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      delete: {
        name: "delete",
        url: "phar.delete",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $entry",
          returnValue: "bool",
          ref: null
        }
      },
      delmetadata: {
        name: "delMetadata",
        url: "phar.delmetadata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      extractto: {
        name: "extractTo",
        url: "phar.extractto",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $pathto [, string|array $files [, bool $overwrite = FALSE ]]",
          returnValue: "bool",
          ref: null
        }
      },
      getalias: {
        name: "getAlias",
        url: "phar.getalias",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getmetadata: {
        name: "getMetadata",
        url: "phar.getmetadata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      getmodified: {
        name: "getModified",
        url: "phar.getmodified",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      getpath: {
        name: "getPath",
        url: "phar.getpath",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getsignature: {
        name: "getSignature",
        url: "phar.getsignature",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getstub: {
        name: "getStub",
        url: "phar.getstub",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getsupportedcompression: {
        name: "getSupportedCompression",
        url: "phar.getsupportedcompression",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getsupportedsignatures: {
        name: "getSupportedSignatures",
        url: "phar.getsupportedsignatures",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "void",
          returnValue: "array",
          ref: null
        }
      },
      getversion: {
        name: "getVersion",
        url: "phar.getversion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      hasmetadata: {
        name: "hasMetadata",
        url: "phar.hasmetadata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      interceptfilefuncs: {
        name: "interceptFileFuncs",
        url: "phar.interceptfilefuncs",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      isbuffering: {
        name: "isBuffering",
        url: "phar.isbuffering",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      iscompressed: {
        name: "isCompressed",
        url: "phar.iscompressed",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      isfileformat: {
        name: "isFileFormat",
        url: "phar.isfileformat",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $format",
          returnValue: "bool",
          ref: null
        }
      },
      isvalidpharfilename: {
        name: "isValidPharFilename",
        url: "phar.isvalidpharfilename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "string $filename [, bool $executable = TRUE ]",
          returnValue: "bool",
          ref: null
        }
      },
      iswritable: {
        name: "isWritable",
        url: "phar.iswritable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      loadphar: {
        name: "loadPhar",
        url: "phar.loadphar",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "string $filename [, string $alias ]",
          returnValue: "bool",
          ref: null
        }
      },
      mapphar: {
        name: "mapPhar",
        url: "phar.mapphar",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "[ string $alias [, int $dataoffset = 0 ]]",
          returnValue: "bool",
          ref: null
        }
      },
      mount: {
        name: "mount",
        url: "phar.mount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "string $pharpath, string $externalpath",
          returnValue: "void",
          ref: null
        }
      },
      mungserver: {
        name: "mungServer",
        url: "phar.mungserver",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "array $munglist",
          returnValue: "void",
          ref: null
        }
      },
      offsetexists: {
        name: "offsetExists",
        url: "phar.offsetexists",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $offset",
          returnValue: "bool",
          ref: null
        }
      },
      offsetget: {
        name: "offsetGet",
        url: "phar.offsetget",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $offset",
          returnValue: "int",
          ref: null
        }
      },
      offsetset: {
        name: "offsetSet",
        url: "phar.offsetset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $offset, string $value",
          returnValue: "void",
          ref: null
        }
      },
      offsetunset: {
        name: "offsetUnset",
        url: "phar.offsetunset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $offset",
          returnValue: "bool",
          ref: null
        }
      },
      running: {
        name: "running",
        url: "phar.running",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "[ bool $retphar = TRUE ]",
          returnValue: "string",
          ref: null
        }
      },
      setalias: {
        name: "setAlias",
        url: "phar.setalias",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $alias",
          returnValue: "bool",
          ref: null
        }
      },
      setdefaultstub: {
        name: "setDefaultStub",
        url: "phar.setdefaultstub",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $index [, string $webindex ]]",
          returnValue: "bool",
          ref: null
        }
      },
      setmetadata: {
        name: "setMetadata",
        url: "phardata.setmetadata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $metadata",
          returnValue: "void",
          ref: null
        }
      },
      setsignaturealgorithm: {
        name: "setSignatureAlgorithm",
        url: "phardata.setsignaturealgorithm",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $sigtype",
          returnValue: "void",
          ref: null
        }
      },
      setstub: {
        name: "setStub",
        url: "phar.setstub",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $stub [, int $len = -1 ]",
          returnValue: "bool",
          ref: null
        }
      },
      startbuffering: {
        name: "startBuffering",
        url: "phar.startbuffering",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      stopbuffering: {
        name: "stopBuffering",
        url: "phar.stopbuffering",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      uncompressallfiles: {
        name: "uncompressAllFiles",
        url: "phar.uncompressallfiles",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      unlinkarchive: {
        name: "unlinkArchive",
        url: "phar.unlinkarchive",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "string $archive",
          returnValue: "bool",
          ref: null
        }
      },
      webphar: {
        name: "webPhar",
        url: "phar.webphar",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "[ string $alias [, string $index = \"index.php\" [, string $f404 [, array $mimetypes [, callable $rewrites ]]]]]",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "phar.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $fname [, int $flags [, string $alias ]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  phardata: {
    name: "PharData",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      addemptydir: {
        name: "addEmptyDir",
        url: "phardata.addemptydir",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $dirname",
          returnValue: "void",
          ref: null
        }
      },
      addfile: {
        name: "addFile",
        url: "phardata.addfile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $file [, string $localname ]",
          returnValue: "void",
          ref: null
        }
      },
      addfromstring: {
        name: "addFromString",
        url: "phardata.addfromstring",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $localname, string $contents",
          returnValue: "void",
          ref: null
        }
      },
      buildfromdirectory: {
        name: "buildFromDirectory",
        url: "phardata.buildfromdirectory",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $base_dir [, string $regex ]",
          returnValue: "array",
          ref: null
        }
      },
      buildfromiterator: {
        name: "buildFromIterator",
        url: "phardata.buildfromiterator",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Iterator $iter [, string $base_directory ]",
          returnValue: "array",
          ref: null
        }
      },
      compress: {
        name: "compress",
        url: "phardata.compress",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $compression [, string $extension ]",
          returnValue: "object",
          ref: null
        }
      },
      compressfiles: {
        name: "compressFiles",
        url: "phardata.compressfiles",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $compression",
          returnValue: "void",
          ref: null
        }
      },
      converttodata: {
        name: "convertToData",
        url: "phardata.converttodata",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $format [, int $compression [, string $extension ]]]",
          returnValue: "PharData",
          ref: null
        }
      },
      converttoexecutable: {
        name: "convertToExecutable",
        url: "phardata.converttoexecutable",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $format [, int $compression [, string $extension ]]]",
          returnValue: "Phar",
          ref: null
        }
      },
      copy: {
        name: "copy",
        url: "phardata.copy",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $oldfile, string $newfile",
          returnValue: "bool",
          ref: null
        }
      },
      decompress: {
        name: "decompress",
        url: "phardata.decompress",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $extension ]",
          returnValue: "object",
          ref: null
        }
      },
      decompressfiles: {
        name: "decompressFiles",
        url: "phardata.decompressfiles",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      delete: {
        name: "delete",
        url: "phardata.delete",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $entry",
          returnValue: "bool",
          ref: null
        }
      },
      delmetadata: {
        name: "delMetadata",
        url: "phardata.delmetadata",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      extractto: {
        name: "extractTo",
        url: "phardata.extractto",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $pathto [, string|array $files [, bool $overwrite = FALSE ]]",
          returnValue: "bool",
          ref: null
        }
      },
      iswritable: {
        name: "isWritable",
        url: "phardata.iswritable",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      offsetset: {
        name: "offsetSet",
        url: "phardata.offsetset",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $offset, string $value",
          returnValue: "void",
          ref: null
        }
      },
      offsetunset: {
        name: "offsetUnset",
        url: "phardata.offsetunset",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $offset",
          returnValue: "bool",
          ref: null
        }
      },
      setalias: {
        name: "setAlias",
        url: "phardata.setalias",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $alias",
          returnValue: "bool",
          ref: null
        }
      },
      setdefaultstub: {
        name: "setDefaultStub",
        url: "phardata.setdefaultstub",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $index [, string $webindex ]]",
          returnValue: "bool",
          ref: null
        }
      },
      setstub: {
        name: "setStub",
        url: "phardata.setstub",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $stub [, int $len = -1 ]",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "phardata.construct",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $fname [, int $flags [, string $alias [, int $format = Phar::TAR ]]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  pharfileinfo: {
    name: "PharFileInfo",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      chmod: {
        name: "chmod",
        url: "pharfileinfo.chmod",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $permissions",
          returnValue: "void",
          ref: null
        }
      },
      compress: {
        name: "compress",
        url: "pharfileinfo.compress",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $compression",
          returnValue: "bool",
          ref: null
        }
      },
      decompress: {
        name: "decompress",
        url: "pharfileinfo.decompress",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      delmetadata: {
        name: "delMetadata",
        url: "pharfileinfo.delmetadata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      getcompressedsize: {
        name: "getCompressedSize",
        url: "pharfileinfo.getcompressedsize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getcontent: {
        name: "getContent",
        url: "pharfileinfo.getcontent",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getcrc32: {
        name: "getCRC32",
        url: "pharfileinfo.getcrc32",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      getmetadata: {
        name: "getMetadata",
        url: "pharfileinfo.getmetadata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      getpharflags: {
        name: "getPharFlags",
        url: "pharfileinfo.getpharflags",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      hasmetadata: {
        name: "hasMetadata",
        url: "pharfileinfo.hasmetadata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      iscompressed: {
        name: "isCompressed",
        url: "pharfileinfo.iscompressed",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $compression_type = 9021976 ]",
          returnValue: "bool",
          ref: null
        }
      },
      iscompressedbzip2: {
        name: "isCompressedBZIP2",
        url: "pharfileinfo.iscompressedbzip2",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      iscompressedgz: {
        name: "isCompressedGZ",
        url: "pharfileinfo.iscompressedgz",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      iscrcchecked: {
        name: "isCRCChecked",
        url: "pharfileinfo.iscrcchecked",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      setcompressedbzip2: {
        name: "setCompressedBZIP2",
        url: "pharfileinfo.setcompressedbzip2",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      setcompressedgz: {
        name: "setCompressedGZ",
        url: "pharfileinfo.setcompressedgz",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      setmetadata: {
        name: "setMetadata",
        url: "pharfileinfo.setmetadata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $metadata",
          returnValue: "void",
          ref: null
        }
      },
      setuncompressed: {
        name: "setUncompressed",
        url: "pharfileinfo.setuncompressed",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "pharfileinfo.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $entry",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  phdfs: {
    name: "phdfs",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      connect: {
        name: "connect",
        url: "phdfs.connect",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      copy: {
        name: "copy",
        url: "phdfs.copy",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $source_file, string $destination_file",
          returnValue: "bool",
          ref: null
        }
      },
      create_directory: {
        name: "create_directory",
        url: "phdfs.create-directory",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path",
          returnValue: "bool",
          ref: null
        }
      },
      delete: {
        name: "delete",
        url: "phdfs.delete",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path",
          returnValue: "bool",
          ref: null
        }
      },
      disconnect: {
        name: "disconnect",
        url: "phdfs.disconnect",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      exists: {
        name: "exists",
        url: "phdfs.exists",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path",
          returnValue: "bool",
          ref: null
        }
      },
      file_info: {
        name: "file_info",
        url: "phdfs.file-info",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path",
          returnValue: "array",
          ref: null
        }
      },
      list_directory: {
        name: "list_directory",
        url: "phdfs.list-directory",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path [, int $level = 0 ]",
          returnValue: "array",
          ref: null
        }
      },
      read: {
        name: "read",
        url: "phdfs.read",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path [, int $length = 0 ]",
          returnValue: "string",
          ref: null
        }
      },
      rename: {
        name: "rename",
        url: "phdfs.rename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $old_path, string $new_path",
          returnValue: "bool",
          ref: null
        }
      },
      tell: {
        name: "tell",
        url: "phdfs.tell",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path [, int $read_length = 1024 ]",
          returnValue: "int",
          ref: null
        }
      },
      write: {
        name: "write",
        url: "phdfs.write",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path, string $buffer [, int $mode = 0 ]",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "phdfs.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $ip, string $port",
          returnValue: "",
          ref: null
        }
      },
      __destruct: {
        name: "__destruct",
        url: "phdfs.destruct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      }
    }
  },
  php_user_filter: {
    name: "php_user_filter",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      filter: {
        name: "filter",
        url: "php-user-filter.filter",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "resource $in, resource $out, int &$consumed, bool $closing",
          returnValue: "int",
          ref: null
        }
      },
      onclose: {
        name: "onClose",
        url: "php-user-filter.onclose",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      oncreate: {
        name: "onCreate",
        url: "php-user-filter.oncreate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.php_user_filter",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  pool: {
    name: "Pool",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      collect: {
        name: "collect",
        url: "pool.collect",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ Callable $collector ]",
          returnValue: "int",
          ref: null
        }
      },
      resize: {
        name: "resize",
        url: "pool.resize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $size",
          returnValue: "void",
          ref: null
        }
      },
      shutdown: {
        name: "shutdown",
        url: "pool.shutdown",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      submit: {
        name: "submit",
        url: "pool.submit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Threaded $task",
          returnValue: "int",
          ref: null
        }
      },
      submitto: {
        name: "submitTo",
        url: "pool.submitTo",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $worker, Threaded $task",
          returnValue: "int",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "pool.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $size [, string $class [, array $ctor ]]",
          returnValue: "Pool",
          ref: null
        }
      }
    }
  }
};
