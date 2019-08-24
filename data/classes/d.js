classes.d = {
  databaseobject: {
    name: "DatabaseObject",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      existsindatabase: {
        name: "existsInDatabase",
        url: "mysql-xdevapi-databaseobject.existsindatabase",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "bool",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "mysql-xdevapi-databaseobject.getname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      },
      getsession: {
        name: "getSession",
        url: "mysql-xdevapi-databaseobject.getsession",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\Session",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.databaseobject",
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
  dateinterval: {
    name: "DateInterval",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      createfromdatestring: {
        name: "createFromDateString",
        url: "dateinterval.createfromdatestring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $time",
          returnValue: "DateInterval",
          ref: null
        }
      },
      format: {
        name: "format",
        url: "dateinterval.format",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $format",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "dateinterval.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $interval_spec",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  dateperiod: {
    name: "DatePeriod",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getdateinterval: {
        name: "getDateInterval",
        url: "dateperiod.getdateinterval",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "DateInterval",
          ref: null
        }
      },
      getenddate: {
        name: "getEndDate",
        url: "dateperiod.getenddate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "DateTimeInterface",
          ref: null
        }
      },
      getrecurrences: {
        name: "getRecurrences",
        url: "dateperiod.getrecurrences",
        spec: {
          isPublic: false,
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
      getstartdate: {
        name: "getStartDate",
        url: "dateperiod.getstartdate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "DateTimeInterface",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "dateperiod.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DateTimeInterface $start, DateInterval $interval, int $recurrences [, int $options ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  datetime: {
    name: "DateTime",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      add: {
        name: "add",
        url: "datetime.add",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DateInterval $interval",
          returnValue: "DateTime",
          ref: null
        }
      },
      createfromformat: {
        name: "createFromFormat",
        url: "datetime.createfromformat",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $format, string $time [, DateTimeZone $timezone ]",
          returnValue: "DateTime",
          ref: null
        }
      },
      createfromimmutable: {
        name: "createFromImmutable",
        url: "datetime.createfromimmutable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "DateTimeImmutable $datetime",
          returnValue: "DateTime",
          ref: null
        }
      },
      diff: {
        name: "diff",
        url: "datetime.diff",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DateTimeInterface $datetime2 [, bool $absolute = false ]",
          returnValue: "DateInterval",
          ref: null
        }
      },
      format: {
        name: "format",
        url: "datetime.format",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $format",
          returnValue: "string",
          ref: null
        }
      },
      getlasterrors: {
        name: "getLastErrors",
        url: "datetime.getlasterrors",
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
      getoffset: {
        name: "getOffset",
        url: "datetime.getoffset",
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
      gettimestamp: {
        name: "getTimestamp",
        url: "datetime.gettimestamp",
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
      gettimezone: {
        name: "getTimezone",
        url: "datetime.gettimezone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "DateTimeZone",
          ref: null
        }
      },
      modify: {
        name: "modify",
        url: "datetime.modify",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $modify",
          returnValue: "DateTime",
          ref: null
        }
      },
      setdate: {
        name: "setDate",
        url: "datetime.setdate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $year, int $month, int $day",
          returnValue: "DateTime",
          ref: null
        }
      },
      setisodate: {
        name: "setISODate",
        url: "datetime.setisodate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $year, int $week [, int $day = 1 ]",
          returnValue: "DateTime",
          ref: null
        }
      },
      settime: {
        name: "setTime",
        url: "datetime.settime",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $hour, int $minute [, int $second = 0 ]",
          returnValue: "DateTime",
          ref: null
        }
      },
      settimestamp: {
        name: "setTimestamp",
        url: "datetime.settimestamp",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $unixtimestamp",
          returnValue: "DateTime",
          ref: null
        }
      },
      settimezone: {
        name: "setTimezone",
        url: "datetime.settimezone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DateTimeZone $timezone",
          returnValue: "DateTime",
          ref: null
        }
      },
      sub: {
        name: "sub",
        url: "datetime.sub",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DateInterval $interval",
          returnValue: "DateTime",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "datetime.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $time = \"now\" [, DateTimeZone $timezone = NULL ]]",
          returnValue: "",
          ref: null
        }
      },
      __set_state: {
        name: "__set_state",
        url: "datetime.set-state",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $array",
          returnValue: "DateTime",
          ref: null
        }
      },
      __wakeup: {
        name: "__wakeup",
        url: "datetime.wakeup",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  datetimeimmutable: {
    name: "DateTimeImmutable",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      add: {
        name: "add",
        url: "datetimeimmutable.add",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DateInterval $interval",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      createfromformat: {
        name: "createFromFormat",
        url: "datetimeimmutable.createfromformat",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $format, string $time [, DateTimeZone $timezone ]",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      createfrommutable: {
        name: "createFromMutable",
        url: "datetimeimmutable.createfrommutable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "DateTime $datetime",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      getlasterrors: {
        name: "getLastErrors",
        url: "datetimeimmutable.getlasterrors",
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
      modify: {
        name: "modify",
        url: "datetimeimmutable.modify",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $modify",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      setdate: {
        name: "setDate",
        url: "datetimeimmutable.setdate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $year, int $month, int $day",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      setisodate: {
        name: "setISODate",
        url: "datetimeimmutable.setisodate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $year, int $week [, int $day = 1 ]",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      settime: {
        name: "setTime",
        url: "datetimeimmutable.settime",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $hour, int $minute [, int $second = 0 ]",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      settimestamp: {
        name: "setTimestamp",
        url: "datetimeimmutable.settimestamp",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $unixtimestamp",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      settimezone: {
        name: "setTimezone",
        url: "datetimeimmutable.settimezone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DateTimeZone $timezone",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      sub: {
        name: "sub",
        url: "datetimeimmutable.sub",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DateInterval $interval",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "datetimeimmutable.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $time = \"now\" [, DateTimeZone $timezone = NULL ]]",
          returnValue: "",
          ref: null
        }
      },
      __set_state: {
        name: "__set_state",
        url: "datetimeimmutable.set-state",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $array",
          returnValue: "DateTimeImmutable",
          ref: null
        }
      }
    }
  },
  datetimezone: {
    name: "DateTimeZone",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getlocation: {
        name: "getLocation",
        url: "datetimezone.getlocation",
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
      getname: {
        name: "getName",
        url: "datetimezone.getname",
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
      getoffset: {
        name: "getOffset",
        url: "datetimezone.getoffset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DateTime $datetime",
          returnValue: "int",
          ref: null
        }
      },
      gettransitions: {
        name: "getTransitions",
        url: "datetimezone.gettransitions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $timestamp_begin [, int $timestamp_end ]]",
          returnValue: "array",
          ref: null
        }
      },
      listabbreviations: {
        name: "listAbbreviations",
        url: "datetimezone.listabbreviations",
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
      listidentifiers: {
        name: "listIdentifiers",
        url: "datetimezone.listidentifiers",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "[ int $what = DateTimeZone::ALL [, string $country = NULL ]]",
          returnValue: "array",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "datetimezone.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $timezone",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  directory: {
    name: "Directory",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      close: {
        name: "close",
        url: "directory.close",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ resource $dir_handle ]",
          returnValue: "void",
          ref: null
        }
      },
      read: {
        name: "read",
        url: "directory.read",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ resource $dir_handle ]",
          returnValue: "string",
          ref: null
        }
      },
      rewind: {
        name: "rewind",
        url: "directory.rewind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ resource $dir_handle ]",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.directory",
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
  directoryiterator: {
    name: "DirectoryIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      current: {
        name: "current",
        url: "directoryiterator.current",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "DirectoryIterator",
          ref: null
        }
      },
      getatime: {
        name: "getATime",
        url: "directoryiterator.getatime",
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
      getbasename: {
        name: "getBasename",
        url: "directoryiterator.getbasename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $suffix ]",
          returnValue: "string",
          ref: null
        }
      },
      getctime: {
        name: "getCTime",
        url: "directoryiterator.getctime",
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
      getextension: {
        name: "getExtension",
        url: "directoryiterator.getextension",
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
      getfilename: {
        name: "getFilename",
        url: "directoryiterator.getfilename",
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
      getgroup: {
        name: "getGroup",
        url: "directoryiterator.getgroup",
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
      getinode: {
        name: "getInode",
        url: "directoryiterator.getinode",
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
      getmtime: {
        name: "getMTime",
        url: "directoryiterator.getmtime",
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
      getowner: {
        name: "getOwner",
        url: "directoryiterator.getowner",
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
      getpath: {
        name: "getPath",
        url: "directoryiterator.getpath",
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
      getpathname: {
        name: "getPathname",
        url: "directoryiterator.getpathname",
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
      getperms: {
        name: "getPerms",
        url: "directoryiterator.getperms",
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
      getsize: {
        name: "getSize",
        url: "directoryiterator.getsize",
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
      gettype: {
        name: "getType",
        url: "directoryiterator.gettype",
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
      isdir: {
        name: "isDir",
        url: "directoryiterator.isdir",
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
      isdot: {
        name: "isDot",
        url: "directoryiterator.isdot",
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
      isexecutable: {
        name: "isExecutable",
        url: "directoryiterator.isexecutable",
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
      isfile: {
        name: "isFile",
        url: "directoryiterator.isfile",
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
      islink: {
        name: "isLink",
        url: "directoryiterator.islink",
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
      isreadable: {
        name: "isReadable",
        url: "directoryiterator.isreadable",
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
      iswritable: {
        name: "isWritable",
        url: "directoryiterator.iswritable",
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
      key: {
        name: "key",
        url: "directoryiterator.key",
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
      next: {
        name: "next",
        url: "directoryiterator.next",
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
        url: "directoryiterator.rewind",
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
      seek: {
        name: "seek",
        url: "directoryiterator.seek",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $position",
          returnValue: "void",
          ref: null
        }
      },
      valid: {
        name: "valid",
        url: "directoryiterator.valid",
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
        url: "directoryiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $path",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "directoryiterator.tostring",
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
      }
    }
  },
  docresult: {
    name: "DocResult",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      fetchall: {
        name: "fetchAll",
        url: "mysql-xdevapi-docresult.fetchall",
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
      fetchone: {
        name: "fetchOne",
        url: "mysql-xdevapi-docresult.fetchone",
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
      getwarnings: {
        name: "getWarnings",
        url: "mysql-xdevapi-docresult.getwarnings",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Array",
          ref: null
        }
      },
      getwarningscount: {
        name: "getWarningsCount",
        url: "mysql-xdevapi-docresult.getwarningscount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "integer",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-docresult.construct",
        spec: {
          isPublic: false,
          isPrivate: true,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domattr: {
    name: "DOMAttr",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      isid: {
        name: "isId",
        url: "domattr.isid",
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
        url: "domattr.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name [, string $value ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domcdatasection: {
    name: "DOMCdataSection",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      __construct: {
        name: "__construct",
        url: "domcdatasection.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $value",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domcharacterdata: {
    name: "DOMCharacterData",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      appenddata: {
        name: "appendData",
        url: "domcharacterdata.appenddata",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data",
          returnValue: "void",
          ref: null
        }
      },
      deletedata: {
        name: "deleteData",
        url: "domcharacterdata.deletedata",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $offset, int $count",
          returnValue: "void",
          ref: null
        }
      },
      insertdata: {
        name: "insertData",
        url: "domcharacterdata.insertdata",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $offset, string $data",
          returnValue: "void",
          ref: null
        }
      },
      replacedata: {
        name: "replaceData",
        url: "domcharacterdata.replacedata",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $offset, int $count, string $data",
          returnValue: "void",
          ref: null
        }
      },
      substringdata: {
        name: "substringData",
        url: "domcharacterdata.substringdata",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $offset, int $count",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.domcharacterdata",
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
  domcomment: {
    name: "DOMComment",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      __construct: {
        name: "__construct",
        url: "domcomment.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $value ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domdocument: {
    name: "DOMDocument",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      createattribute: {
        name: "createAttribute",
        url: "domdocument.createattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "DOMAttr",
          ref: null
        }
      },
      createattributens: {
        name: "createAttributeNS",
        url: "domdocument.createattributens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $qualifiedName",
          returnValue: "DOMAttr",
          ref: null
        }
      },
      createcdatasection: {
        name: "createCDATASection",
        url: "domdocument.createcdatasection",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data",
          returnValue: "DOMCDATASection",
          ref: null
        }
      },
      createcomment: {
        name: "createComment",
        url: "domdocument.createcomment",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data",
          returnValue: "DOMComment",
          ref: null
        }
      },
      createdocumentfragment: {
        name: "createDocumentFragment",
        url: "domdocument.createdocumentfragment",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "DOMDocumentFragment",
          ref: null
        }
      },
      createelement: {
        name: "createElement",
        url: "domdocument.createelement",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name [, string $value ]",
          returnValue: "DOMElement",
          ref: null
        }
      },
      createelementns: {
        name: "createElementNS",
        url: "domdocument.createelementns",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $qualifiedName [, string $value ]",
          returnValue: "DOMElement",
          ref: null
        }
      },
      createentityreference: {
        name: "createEntityReference",
        url: "domdocument.createentityreference",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "DOMEntityReference",
          ref: null
        }
      },
      createprocessinginstruction: {
        name: "createProcessingInstruction",
        url: "domdocument.createprocessinginstruction",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $target [, string $data ]",
          returnValue: "DOMProcessingInstruction",
          ref: null
        }
      },
      createtextnode: {
        name: "createTextNode",
        url: "domdocument.createtextnode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $content",
          returnValue: "DOMText",
          ref: null
        }
      },
      getelementbyid: {
        name: "getElementById",
        url: "domdocument.getelementbyid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $elementId",
          returnValue: "DOMElement",
          ref: null
        }
      },
      getelementsbytagname: {
        name: "getElementsByTagName",
        url: "domdocument.getelementsbytagname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "DOMNodeList",
          ref: null
        }
      },
      getelementsbytagnamens: {
        name: "getElementsByTagNameNS",
        url: "domdocument.getelementsbytagnamens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $localName",
          returnValue: "DOMNodeList",
          ref: null
        }
      },
      importnode: {
        name: "importNode",
        url: "domdocument.importnode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMNode $importedNode [, bool $deep ]",
          returnValue: "DOMNode",
          ref: null
        }
      },
      load: {
        name: "load",
        url: "domdocument.load",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename [, int $options = 0 ]",
          returnValue: "mixed",
          ref: null
        }
      },
      loadhtml: {
        name: "loadHTML",
        url: "domdocument.loadhtml",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $source [, int $options = 0 ]",
          returnValue: "bool",
          ref: null
        }
      },
      loadhtmlfile: {
        name: "loadHTMLFile",
        url: "domdocument.loadhtmlfile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename [, int $options = 0 ]",
          returnValue: "bool",
          ref: null
        }
      },
      loadxml: {
        name: "loadXML",
        url: "domdocument.loadxml",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $source [, int $options = 0 ]",
          returnValue: "mixed",
          ref: null
        }
      },
      normalizedocument: {
        name: "normalizeDocument",
        url: "domdocument.normalizedocument",
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
      registernodeclass: {
        name: "registerNodeClass",
        url: "domdocument.registernodeclass",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $baseclass, string $extendedclass",
          returnValue: "bool",
          ref: null
        }
      },
      relaxngvalidate: {
        name: "relaxNGValidate",
        url: "domdocument.relaxngvalidate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename",
          returnValue: "bool",
          ref: null
        }
      },
      relaxngvalidatesource: {
        name: "relaxNGValidateSource",
        url: "domdocument.relaxngvalidatesource",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $source",
          returnValue: "bool",
          ref: null
        }
      },
      save: {
        name: "save",
        url: "domdocument.save",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename [, int $options ]",
          returnValue: "int",
          ref: null
        }
      },
      savehtml: {
        name: "saveHTML",
        url: "domdocument.savehtml",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ DOMNode $node = NULL ]",
          returnValue: "string",
          ref: null
        }
      },
      savehtmlfile: {
        name: "saveHTMLFile",
        url: "domdocument.savehtmlfile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename",
          returnValue: "int",
          ref: null
        }
      },
      savexml: {
        name: "saveXML",
        url: "domdocument.savexml",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ DOMNode $node [, int $options ]]",
          returnValue: "string",
          ref: null
        }
      },
      schemavalidate: {
        name: "schemaValidate",
        url: "domdocument.schemavalidate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename [, int $flags ]",
          returnValue: "bool",
          ref: null
        }
      },
      schemavalidatesource: {
        name: "schemaValidateSource",
        url: "domdocument.schemavalidatesource",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $source [, int $flags ]",
          returnValue: "bool",
          ref: null
        }
      },
      validate: {
        name: "validate",
        url: "domdocument.validate",
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
      xinclude: {
        name: "xinclude",
        url: "domdocument.xinclude",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $options ]",
          returnValue: "int",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "domdocument.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $version [, string $encoding ]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domdocumentfragment: {
    name: "DOMDocumentFragment",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      appendxml: {
        name: "appendXML",
        url: "domdocumentfragment.appendxml",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $data",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.domdocumentfragment",
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
  domelement: {
    name: "DOMElement",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getattribute: {
        name: "getAttribute",
        url: "domelement.getattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "string",
          ref: null
        }
      },
      getattributenode: {
        name: "getAttributeNode",
        url: "domelement.getattributenode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "DOMAttr",
          ref: null
        }
      },
      getattributenodens: {
        name: "getAttributeNodeNS",
        url: "domelement.getattributenodens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $localName",
          returnValue: "DOMAttr",
          ref: null
        }
      },
      getattributens: {
        name: "getAttributeNS",
        url: "domelement.getattributens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $localName",
          returnValue: "string",
          ref: null
        }
      },
      getelementsbytagname: {
        name: "getElementsByTagName",
        url: "domelement.getelementsbytagname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "DOMNodeList",
          ref: null
        }
      },
      getelementsbytagnamens: {
        name: "getElementsByTagNameNS",
        url: "domelement.getelementsbytagnamens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $localName",
          returnValue: "DOMNodeList",
          ref: null
        }
      },
      hasattribute: {
        name: "hasAttribute",
        url: "domelement.hasattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "bool",
          ref: null
        }
      },
      hasattributens: {
        name: "hasAttributeNS",
        url: "domelement.hasattributens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $localName",
          returnValue: "bool",
          ref: null
        }
      },
      removeattribute: {
        name: "removeAttribute",
        url: "domelement.removeattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "bool",
          ref: null
        }
      },
      removeattributenode: {
        name: "removeAttributeNode",
        url: "domelement.removeattributenode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMAttr $oldnode",
          returnValue: "bool",
          ref: null
        }
      },
      removeattributens: {
        name: "removeAttributeNS",
        url: "domelement.removeattributens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $localName",
          returnValue: "bool",
          ref: null
        }
      },
      setattribute: {
        name: "setAttribute",
        url: "domelement.setattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, string $value",
          returnValue: "DOMAttr",
          ref: null
        }
      },
      setattributenode: {
        name: "setAttributeNode",
        url: "domelement.setattributenode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMAttr $attr",
          returnValue: "DOMAttr",
          ref: null
        }
      },
      setattributenodens: {
        name: "setAttributeNodeNS",
        url: "domelement.setattributenodens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMAttr $attr",
          returnValue: "DOMAttr",
          ref: null
        }
      },
      setattributens: {
        name: "setAttributeNS",
        url: "domelement.setattributens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $qualifiedName, string $value",
          returnValue: "void",
          ref: null
        }
      },
      setidattribute: {
        name: "setIdAttribute",
        url: "domelement.setidattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, bool $isId",
          returnValue: "void",
          ref: null
        }
      },
      setidattributenode: {
        name: "setIdAttributeNode",
        url: "domelement.setidattributenode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMAttr $attr, bool $isId",
          returnValue: "void",
          ref: null
        }
      },
      setidattributens: {
        name: "setIdAttributeNS",
        url: "domelement.setidattributens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $localName, bool $isId",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "domelement.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name [, string $value [, string $namespaceURI ]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domentityreference: {
    name: "DOMEntityReference",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      __construct: {
        name: "__construct",
        url: "domentityreference.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domimplementation: {
    name: "DOMImplementation",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      createdocument: {
        name: "createDocument",
        url: "domimplementation.createdocument",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $namespaceURI = NULL [, string $qualifiedName = NULL [, DOMDocumentType $doctype = NULL ]]]",
          returnValue: "DOMDocument",
          ref: null
        }
      },
      createdocumenttype: {
        name: "createDocumentType",
        url: "domimplementation.createdocumenttype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $qualifiedName = NULL [, string $publicId = NULL [, string $systemId = NULL ]]]",
          returnValue: "DOMDocumentType",
          ref: null
        }
      },
      hasfeature: {
        name: "hasFeature",
        url: "domimplementation.hasfeature",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $feature, string $version",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "domimplementation.construct",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domnamednodemap: {
    name: "DOMNamedNodeMap",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      count: {
        name: "count",
        url: "domnamednodemap.count",
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
      getnameditem: {
        name: "getNamedItem",
        url: "domnamednodemap.getnameditem",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name",
          returnValue: "DOMNode",
          ref: null
        }
      },
      getnameditemns: {
        name: "getNamedItemNS",
        url: "domnamednodemap.getnameditemns",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI, string $localName",
          returnValue: "DOMNode",
          ref: null
        }
      },
      item: {
        name: "item",
        url: "domnamednodemap.item",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $index",
          returnValue: "DOMNode",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.domnamednodemap",
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
  domnode: {
    name: "DOMNode",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      appendchild: {
        name: "appendChild",
        url: "domnode.appendchild",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMNode $newnode",
          returnValue: "DOMNode",
          ref: null
        }
      },
      c14n: {
        name: "C14N",
        url: "domnode.c14n",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ bool $exclusive [, bool $with_comments [, array $xpath [, array $ns_prefixes ]]]]",
          returnValue: "string",
          ref: null
        }
      },
      c14nfile: {
        name: "C14NFile",
        url: "domnode.c14nfile",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $uri [, bool $exclusive [, bool $with_comments [, array $xpath [, array $ns_prefixes ]]]]",
          returnValue: "int",
          ref: null
        }
      },
      clonenode: {
        name: "cloneNode",
        url: "domnode.clonenode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ bool $deep ]",
          returnValue: "DOMNode",
          ref: null
        }
      },
      getlineno: {
        name: "getLineNo",
        url: "domnode.getlineno",
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
      getnodepath: {
        name: "getNodePath",
        url: "domnode.getnodepath",
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
      hasattributes: {
        name: "hasAttributes",
        url: "domnode.hasattributes",
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
      haschildnodes: {
        name: "hasChildNodes",
        url: "domnode.haschildnodes",
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
      insertbefore: {
        name: "insertBefore",
        url: "domnode.insertbefore",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMNode $newnode [, DOMNode $refnode ]",
          returnValue: "DOMNode",
          ref: null
        }
      },
      isdefaultnamespace: {
        name: "isDefaultNamespace",
        url: "domnode.isdefaultnamespace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI",
          returnValue: "bool",
          ref: null
        }
      },
      issamenode: {
        name: "isSameNode",
        url: "domnode.issamenode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMNode $node",
          returnValue: "bool",
          ref: null
        }
      },
      issupported: {
        name: "isSupported",
        url: "domnode.issupported",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $feature, string $version",
          returnValue: "bool",
          ref: null
        }
      },
      lookupnamespaceuri: {
        name: "lookupNamespaceURI",
        url: "domnode.lookupnamespaceuri",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $prefix",
          returnValue: "string",
          ref: null
        }
      },
      lookupprefix: {
        name: "lookupPrefix",
        url: "domnode.lookupprefix",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespaceURI",
          returnValue: "string",
          ref: null
        }
      },
      normalize: {
        name: "normalize",
        url: "domnode.normalize",
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
      removechild: {
        name: "removeChild",
        url: "domnode.removechild",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMNode $oldnode",
          returnValue: "DOMNode",
          ref: null
        }
      },
      replacechild: {
        name: "replaceChild",
        url: "domnode.replacechild",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMNode $newnode, DOMNode $oldnode",
          returnValue: "DOMNode",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.domnode",
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
  domnodelist: {
    name: "DOMNodeList",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      count: {
        name: "count",
        url: "domnodelist.count",
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
      item: {
        name: "item",
        url: "domnodelist.item",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $index",
          returnValue: "DOMElement",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.domnodelist",
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
  domprocessinginstruction: {
    name: "DOMProcessingInstruction",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      __construct: {
        name: "__construct",
        url: "domprocessinginstruction.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name [, string $value ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domtext: {
    name: "DOMText",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      iselementcontentwhitespace: {
        name: "isElementContentWhitespace",
        url: "domtext.iselementcontentwhitespace",
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
      iswhitespaceinelementcontent: {
        name: "isWhitespaceInElementContent",
        url: "domtext.iswhitespaceinelementcontent",
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
      splittext: {
        name: "splitText",
        url: "domtext.splittext",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $offset",
          returnValue: "DOMText",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "domtext.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $value ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  domxpath: {
    name: "DOMXPath",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      evaluate: {
        name: "evaluate",
        url: "domxpath.evaluate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $expression [, DOMNode $contextnode [, bool $registerNodeNS = TRUE ]]",
          returnValue: "mixed",
          ref: null
        }
      },
      query: {
        name: "query",
        url: "domxpath.query",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $expression [, DOMNode $contextnode [, bool $registerNodeNS = TRUE ]]",
          returnValue: "DOMNodeList",
          ref: null
        }
      },
      registernamespace: {
        name: "registerNamespace",
        url: "domxpath.registernamespace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $prefix, string $namespaceURI",
          returnValue: "bool",
          ref: null
        }
      },
      registerphpfunctions: {
        name: "registerPhpFunctions",
        url: "domxpath.registerphpfunctions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ mixed $restrict ]",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "domxpath.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMDocument $doc",
          returnValue: "",
          ref: null
        }
      }
    }
  }
};
