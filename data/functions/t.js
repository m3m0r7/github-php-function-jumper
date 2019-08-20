functions.t = {
  taint: {
    name: "taint",
    url: "function.taint",
    spec: {
      parameters: "string &$string [, string $... ]",
      returnValue: "bool",
      ref: null
    }
  },
  tan: {
    name: "tan",
    url: "function.tan",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  tanh: {
    name: "tanh",
    url: "function.tanh",
    spec: {
      parameters: "float $arg",
      returnValue: "float",
      ref: null
    }
  },
  tcpwrap_check: {
    name: "tcpwrap_check",
    url: "function.tcpwrap-check",
    spec: {
      parameters: "string $daemon, string $address [, string $user [, bool $nodns = FALSE ]]",
      returnValue: "bool",
      ref: null
    }
  },
  tempnam: {
    name: "tempnam",
    url: "function.tempnam",
    spec: {
      parameters: "string $dir, string $prefix",
      returnValue: "string",
      ref: null
    }
  },
  textdomain: {
    name: "textdomain",
    url: "function.textdomain",
    spec: {
      parameters: "string $text_domain = NULL",
      returnValue: "string",
      ref: null
    }
  },
  tidy_access_count: {
    name: "tidy_access_count",
    url: "function.tidy-access-count",
    spec: {
      parameters: "tidy $object",
      returnValue: "int",
      ref: null
    }
  },
  tidy_config_count: {
    name: "tidy_config_count",
    url: "function.tidy-config-count",
    spec: {
      parameters: "tidy $object",
      returnValue: "int",
      ref: null
    }
  },
  tidy_error_count: {
    name: "tidy_error_count",
    url: "function.tidy-error-count",
    spec: {
      parameters: "tidy $object",
      returnValue: "int",
      ref: null
    }
  },
  tidy_get_output: {
    name: "tidy_get_output",
    url: "function.tidy-get-output",
    spec: {
      parameters: "tidy $object",
      returnValue: "string",
      ref: null
    }
  },
  tidy_warning_count: {
    name: "tidy_warning_count",
    url: "function.tidy-warning-count",
    spec: {
      parameters: "tidy $object",
      returnValue: "int",
      ref: null
    }
  },
  time: {
    name: "time",
    url: "function.time",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  timezone_abbreviations_list: {
    name: "timezone_abbreviations_list",
    url: "function.timezone-abbreviations-list",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: {
        name: "DateTimeZone::listAbbreviations()",
        url: "datetimezone.listabbreviations"
      }
    }
  },
  timezone_identifiers_list: {
    name: "timezone_identifiers_list",
    url: "function.timezone-identifiers-list",
    spec: {
      parameters: "[ int $what = DateTimeZone::ALL [, string $country = NULL ]]",
      returnValue: "array",
      ref: {
        name: "DateTimeZone::listIdentifiers()",
        url: "datetimezone.listidentifiers"
      }
    }
  },
  timezone_location_get: {
    name: "timezone_location_get",
    url: "function.timezone-location-get",
    spec: {
      parameters: "void",
      returnValue: "array",
      ref: {
        name: "DateTimeZone::getLocation()",
        url: "datetimezone.getlocation"
      }
    }
  },
  timezone_name_from_abbr: {
    name: "timezone_name_from_abbr",
    url: "function.timezone-name-from-abbr",
    spec: {
      parameters: "string $abbr [, int $gmtOffset = -1 [, int $isdst = -1 ]]",
      returnValue: "string",
      ref: null
    }
  },
  timezone_name_get: {
    name: "timezone_name_get",
    url: "function.timezone-name-get",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: {
        name: "DateTimeZone::getName()",
        url: "datetimezone.getname"
      }
    }
  },
  timezone_offset_get: {
    name: "timezone_offset_get",
    url: "function.timezone-offset-get",
    spec: {
      parameters: "DateTime $datetime",
      returnValue: "int",
      ref: {
        name: "DateTimeZone::getOffset()",
        url: "datetimezone.getoffset"
      }
    }
  },
  timezone_open: {
    name: "timezone_open",
    url: "function.timezone-open",
    spec: {
      parameters: "string $timezone",
      returnValue: "DateTimeZone",
      ref: {
        name: "DateTimeZone::__construct()",
        url: "datetimezone.construct"
      }
    }
  },
  timezone_transitions_get: {
    name: "timezone_transitions_get",
    url: "function.timezone-transitions-get",
    spec: {
      parameters: "[ int $timestamp_begin [, int $timestamp_end ]]",
      returnValue: "array",
      ref: {
        name: "DateTimeZone::getTransitions()",
        url: "datetimezone.gettransitions"
      }
    }
  },
  timezone_version_get: {
    name: "timezone_version_get",
    url: "function.timezone-version-get",
    spec: {
      parameters: "void",
      returnValue: "string",
      ref: null
    }
  },
  time_nanosleep: {
    name: "time_nanosleep",
    url: "function.time-nanosleep",
    spec: {
      parameters: "int $seconds, int $nanoseconds",
      returnValue: "mixed",
      ref: null
    }
  },
  time_sleep_until: {
    name: "time_sleep_until",
    url: "function.time-sleep-until",
    spec: {
      parameters: "float $timestamp",
      returnValue: "bool",
      ref: null
    }
  },
  tmpfile: {
    name: "tmpfile",
    url: "function.tmpfile",
    spec: {
      parameters: "void",
      returnValue: "resource",
      ref: null
    }
  },
  token_get_all: {
    name: "token_get_all",
    url: "function.token-get-all",
    spec: {
      parameters: "string $source [, int $flags = 0 ]",
      returnValue: "array",
      ref: null
    }
  },
  token_name: {
    name: "token_name",
    url: "function.token-name",
    spec: {
      parameters: "int $token",
      returnValue: "string",
      ref: null
    }
  },
  touch: {
    name: "touch",
    url: "function.touch",
    spec: {
      parameters: "string $filename [, int $time = time() [, int $atime ]]",
      returnValue: "bool",
      ref: null
    }
  },
  trader_acos: {
    name: "trader_acos",
    url: "function.trader-acos",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_ad: {
    name: "trader_ad",
    url: "function.trader-ad",
    spec: {
      parameters: "array $high, array $low, array $close, array $volume",
      returnValue: "array",
      ref: null
    }
  },
  trader_add: {
    name: "trader_add",
    url: "function.trader-add",
    spec: {
      parameters: "array $real0, array $real1",
      returnValue: "array",
      ref: null
    }
  },
  trader_adosc: {
    name: "trader_adosc",
    url: "function.trader-adosc",
    spec: {
      parameters: "array $high, array $low, array $close, array $volume [, int $fastPeriod [, int $slowPeriod ]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_adx: {
    name: "trader_adx",
    url: "function.trader-adx",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_adxr: {
    name: "trader_adxr",
    url: "function.trader-adxr",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_apo: {
    name: "trader_apo",
    url: "function.trader-apo",
    spec: {
      parameters: "array $real [, int $fastPeriod [, int $slowPeriod [, int $mAType ]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_aroon: {
    name: "trader_aroon",
    url: "function.trader-aroon",
    spec: {
      parameters: "array $high, array $low [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_aroonosc: {
    name: "trader_aroonosc",
    url: "function.trader-aroonosc",
    spec: {
      parameters: "array $high, array $low [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_asin: {
    name: "trader_asin",
    url: "function.trader-asin",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_atan: {
    name: "trader_atan",
    url: "function.trader-atan",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_atr: {
    name: "trader_atr",
    url: "function.trader-atr",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_avgprice: {
    name: "trader_avgprice",
    url: "function.trader-avgprice",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_bbands: {
    name: "trader_bbands",
    url: "function.trader-bbands",
    spec: {
      parameters: "array $real [, int $timePeriod [, float $nbDevUp [, float $nbDevDn [, int $mAType ]]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_beta: {
    name: "trader_beta",
    url: "function.trader-beta",
    spec: {
      parameters: "array $real0, array $real1 [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_bop: {
    name: "trader_bop",
    url: "function.trader-bop",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cci: {
    name: "trader_cci",
    url: "function.trader-cci",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdl2crows: {
    name: "trader_cdl2crows",
    url: "function.trader-cdl2crows",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdl3blackcrows: {
    name: "trader_cdl3blackcrows",
    url: "function.trader-cdl3blackcrows",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdl3inside: {
    name: "trader_cdl3inside",
    url: "function.trader-cdl3inside",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdl3linestrike: {
    name: "trader_cdl3linestrike",
    url: "function.trader-cdl3linestrike",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdl3outside: {
    name: "trader_cdl3outside",
    url: "function.trader-cdl3outside",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdl3starsinsouth: {
    name: "trader_cdl3starsinsouth",
    url: "function.trader-cdl3starsinsouth",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdl3whitesoldiers: {
    name: "trader_cdl3whitesoldiers",
    url: "function.trader-cdl3whitesoldiers",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlabandonedbaby: {
    name: "trader_cdlabandonedbaby",
    url: "function.trader-cdlabandonedbaby",
    spec: {
      parameters: "array $open, array $high, array $low, array $close [, float $penetration ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdladvanceblock: {
    name: "trader_cdladvanceblock",
    url: "function.trader-cdladvanceblock",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlbelthold: {
    name: "trader_cdlbelthold",
    url: "function.trader-cdlbelthold",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlbreakaway: {
    name: "trader_cdlbreakaway",
    url: "function.trader-cdlbreakaway",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlclosingmarubozu: {
    name: "trader_cdlclosingmarubozu",
    url: "function.trader-cdlclosingmarubozu",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlconcealbabyswall: {
    name: "trader_cdlconcealbabyswall",
    url: "function.trader-cdlconcealbabyswall",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlcounterattack: {
    name: "trader_cdlcounterattack",
    url: "function.trader-cdlcounterattack",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdldarkcloudcover: {
    name: "trader_cdldarkcloudcover",
    url: "function.trader-cdldarkcloudcover",
    spec: {
      parameters: "array $open, array $high, array $low, array $close [, float $penetration ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdldoji: {
    name: "trader_cdldoji",
    url: "function.trader-cdldoji",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdldojistar: {
    name: "trader_cdldojistar",
    url: "function.trader-cdldojistar",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdldragonflydoji: {
    name: "trader_cdldragonflydoji",
    url: "function.trader-cdldragonflydoji",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlengulfing: {
    name: "trader_cdlengulfing",
    url: "function.trader-cdlengulfing",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdleveningdojistar: {
    name: "trader_cdleveningdojistar",
    url: "function.trader-cdleveningdojistar",
    spec: {
      parameters: "array $open, array $high, array $low, array $close [, float $penetration ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdleveningstar: {
    name: "trader_cdleveningstar",
    url: "function.trader-cdleveningstar",
    spec: {
      parameters: "array $open, array $high, array $low, array $close [, float $penetration ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlgapsidesidewhite: {
    name: "trader_cdlgapsidesidewhite",
    url: "function.trader-cdlgapsidesidewhite",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlgravestonedoji: {
    name: "trader_cdlgravestonedoji",
    url: "function.trader-cdlgravestonedoji",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlhammer: {
    name: "trader_cdlhammer",
    url: "function.trader-cdlhammer",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlhangingman: {
    name: "trader_cdlhangingman",
    url: "function.trader-cdlhangingman",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlharami: {
    name: "trader_cdlharami",
    url: "function.trader-cdlharami",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlharamicross: {
    name: "trader_cdlharamicross",
    url: "function.trader-cdlharamicross",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlhighwave: {
    name: "trader_cdlhighwave",
    url: "function.trader-cdlhighwave",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlhikkake: {
    name: "trader_cdlhikkake",
    url: "function.trader-cdlhikkake",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlhikkakemod: {
    name: "trader_cdlhikkakemod",
    url: "function.trader-cdlhikkakemod",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlhomingpigeon: {
    name: "trader_cdlhomingpigeon",
    url: "function.trader-cdlhomingpigeon",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlidentical3crows: {
    name: "trader_cdlidentical3crows",
    url: "function.trader-cdlidentical3crows",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlinneck: {
    name: "trader_cdlinneck",
    url: "function.trader-cdlinneck",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlinvertedhammer: {
    name: "trader_cdlinvertedhammer",
    url: "function.trader-cdlinvertedhammer",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlkicking: {
    name: "trader_cdlkicking",
    url: "function.trader-cdlkicking",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlkickingbylength: {
    name: "trader_cdlkickingbylength",
    url: "function.trader-cdlkickingbylength",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlladderbottom: {
    name: "trader_cdlladderbottom",
    url: "function.trader-cdlladderbottom",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdllongleggeddoji: {
    name: "trader_cdllongleggeddoji",
    url: "function.trader-cdllongleggeddoji",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdllongline: {
    name: "trader_cdllongline",
    url: "function.trader-cdllongline",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlmarubozu: {
    name: "trader_cdlmarubozu",
    url: "function.trader-cdlmarubozu",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlmatchinglow: {
    name: "trader_cdlmatchinglow",
    url: "function.trader-cdlmatchinglow",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlmathold: {
    name: "trader_cdlmathold",
    url: "function.trader-cdlmathold",
    spec: {
      parameters: "array $open, array $high, array $low, array $close [, float $penetration ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlmorningdojistar: {
    name: "trader_cdlmorningdojistar",
    url: "function.trader-cdlmorningdojistar",
    spec: {
      parameters: "array $open, array $high, array $low, array $close [, float $penetration ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlmorningstar: {
    name: "trader_cdlmorningstar",
    url: "function.trader-cdlmorningstar",
    spec: {
      parameters: "array $open, array $high, array $low, array $close [, float $penetration ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlonneck: {
    name: "trader_cdlonneck",
    url: "function.trader-cdlonneck",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlpiercing: {
    name: "trader_cdlpiercing",
    url: "function.trader-cdlpiercing",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlrickshawman: {
    name: "trader_cdlrickshawman",
    url: "function.trader-cdlrickshawman",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlrisefall3methods: {
    name: "trader_cdlrisefall3methods",
    url: "function.trader-cdlrisefall3methods",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlseparatinglines: {
    name: "trader_cdlseparatinglines",
    url: "function.trader-cdlseparatinglines",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlshootingstar: {
    name: "trader_cdlshootingstar",
    url: "function.trader-cdlshootingstar",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlshortline: {
    name: "trader_cdlshortline",
    url: "function.trader-cdlshortline",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlspinningtop: {
    name: "trader_cdlspinningtop",
    url: "function.trader-cdlspinningtop",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlstalledpattern: {
    name: "trader_cdlstalledpattern",
    url: "function.trader-cdlstalledpattern",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlsticksandwich: {
    name: "trader_cdlsticksandwich",
    url: "function.trader-cdlsticksandwich",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdltakuri: {
    name: "trader_cdltakuri",
    url: "function.trader-cdltakuri",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdltasukigap: {
    name: "trader_cdltasukigap",
    url: "function.trader-cdltasukigap",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlthrusting: {
    name: "trader_cdlthrusting",
    url: "function.trader-cdlthrusting",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdltristar: {
    name: "trader_cdltristar",
    url: "function.trader-cdltristar",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlunique3river: {
    name: "trader_cdlunique3river",
    url: "function.trader-cdlunique3river",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlupsidegap2crows: {
    name: "trader_cdlupsidegap2crows",
    url: "function.trader-cdlupsidegap2crows",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_cdlxsidegap3methods: {
    name: "trader_cdlxsidegap3methods",
    url: "function.trader-cdlxsidegap3methods",
    spec: {
      parameters: "array $open, array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_ceil: {
    name: "trader_ceil",
    url: "function.trader-ceil",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_cmo: {
    name: "trader_cmo",
    url: "function.trader-cmo",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_correl: {
    name: "trader_correl",
    url: "function.trader-correl",
    spec: {
      parameters: "array $real0, array $real1 [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_cos: {
    name: "trader_cos",
    url: "function.trader-cos",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_cosh: {
    name: "trader_cosh",
    url: "function.trader-cosh",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_dema: {
    name: "trader_dema",
    url: "function.trader-dema",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_div: {
    name: "trader_div",
    url: "function.trader-div",
    spec: {
      parameters: "array $real0, array $real1",
      returnValue: "array",
      ref: null
    }
  },
  trader_dx: {
    name: "trader_dx",
    url: "function.trader-dx",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_ema: {
    name: "trader_ema",
    url: "function.trader-ema",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_errno: {
    name: "trader_errno",
    url: "function.trader-errno",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  trader_exp: {
    name: "trader_exp",
    url: "function.trader-exp",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_floor: {
    name: "trader_floor",
    url: "function.trader-floor",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_get_compat: {
    name: "trader_get_compat",
    url: "function.trader-get-compat",
    spec: {
      parameters: "void",
      returnValue: "int",
      ref: null
    }
  },
  trader_get_unstable_period: {
    name: "trader_get_unstable_period",
    url: "function.trader-get-unstable-period",
    spec: {
      parameters: "int $functionId",
      returnValue: "int",
      ref: null
    }
  },
  trader_ht_dcperiod: {
    name: "trader_ht_dcperiod",
    url: "function.trader-ht-dcperiod",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_ht_dcphase: {
    name: "trader_ht_dcphase",
    url: "function.trader-ht-dcphase",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_ht_phasor: {
    name: "trader_ht_phasor",
    url: "function.trader-ht-phasor",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_ht_sine: {
    name: "trader_ht_sine",
    url: "function.trader-ht-sine",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_ht_trendline: {
    name: "trader_ht_trendline",
    url: "function.trader-ht-trendline",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_ht_trendmode: {
    name: "trader_ht_trendmode",
    url: "function.trader-ht-trendmode",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_kama: {
    name: "trader_kama",
    url: "function.trader-kama",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_linearreg: {
    name: "trader_linearreg",
    url: "function.trader-linearreg",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_linearreg_angle: {
    name: "trader_linearreg_angle",
    url: "function.trader-linearreg-angle",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_linearreg_intercept: {
    name: "trader_linearreg_intercept",
    url: "function.trader-linearreg-intercept",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_linearreg_slope: {
    name: "trader_linearreg_slope",
    url: "function.trader-linearreg-slope",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_ln: {
    name: "trader_ln",
    url: "function.trader-ln",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_log10: {
    name: "trader_log10",
    url: "function.trader-log10",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_ma: {
    name: "trader_ma",
    url: "function.trader-ma",
    spec: {
      parameters: "array $real [, int $timePeriod [, int $mAType ]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_macd: {
    name: "trader_macd",
    url: "function.trader-macd",
    spec: {
      parameters: "array $real [, int $fastPeriod [, int $slowPeriod [, int $signalPeriod ]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_macdext: {
    name: "trader_macdext",
    url: "function.trader-macdext",
    spec: {
      parameters: "array $real [, int $fastPeriod [, int $fastMAType [, int $slowPeriod [, int $slowMAType [, int $signalPeriod [, int $signalMAType ]]]]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_macdfix: {
    name: "trader_macdfix",
    url: "function.trader-macdfix",
    spec: {
      parameters: "array $real [, int $signalPeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_mama: {
    name: "trader_mama",
    url: "function.trader-mama",
    spec: {
      parameters: "array $real [, float $fastLimit [, float $slowLimit ]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_mavp: {
    name: "trader_mavp",
    url: "function.trader-mavp",
    spec: {
      parameters: "array $real, array $periods [, int $minPeriod [, int $maxPeriod [, int $mAType ]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_max: {
    name: "trader_max",
    url: "function.trader-max",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_maxindex: {
    name: "trader_maxindex",
    url: "function.trader-maxindex",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_medprice: {
    name: "trader_medprice",
    url: "function.trader-medprice",
    spec: {
      parameters: "array $high, array $low",
      returnValue: "array",
      ref: null
    }
  },
  trader_mfi: {
    name: "trader_mfi",
    url: "function.trader-mfi",
    spec: {
      parameters: "array $high, array $low, array $close, array $volume [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_midpoint: {
    name: "trader_midpoint",
    url: "function.trader-midpoint",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_midprice: {
    name: "trader_midprice",
    url: "function.trader-midprice",
    spec: {
      parameters: "array $high, array $low [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_min: {
    name: "trader_min",
    url: "function.trader-min",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_minindex: {
    name: "trader_minindex",
    url: "function.trader-minindex",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_minmax: {
    name: "trader_minmax",
    url: "function.trader-minmax",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_minmaxindex: {
    name: "trader_minmaxindex",
    url: "function.trader-minmaxindex",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_minus_di: {
    name: "trader_minus_di",
    url: "function.trader-minus-di",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_minus_dm: {
    name: "trader_minus_dm",
    url: "function.trader-minus-dm",
    spec: {
      parameters: "array $high, array $low [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_mom: {
    name: "trader_mom",
    url: "function.trader-mom",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_mult: {
    name: "trader_mult",
    url: "function.trader-mult",
    spec: {
      parameters: "array $real0, array $real1",
      returnValue: "array",
      ref: null
    }
  },
  trader_natr: {
    name: "trader_natr",
    url: "function.trader-natr",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_obv: {
    name: "trader_obv",
    url: "function.trader-obv",
    spec: {
      parameters: "array $real, array $volume",
      returnValue: "array",
      ref: null
    }
  },
  trader_plus_di: {
    name: "trader_plus_di",
    url: "function.trader-plus-di",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_plus_dm: {
    name: "trader_plus_dm",
    url: "function.trader-plus-dm",
    spec: {
      parameters: "array $high, array $low [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_ppo: {
    name: "trader_ppo",
    url: "function.trader-ppo",
    spec: {
      parameters: "array $real [, int $fastPeriod [, int $slowPeriod [, int $mAType ]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_roc: {
    name: "trader_roc",
    url: "function.trader-roc",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_rocp: {
    name: "trader_rocp",
    url: "function.trader-rocp",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_rocr: {
    name: "trader_rocr",
    url: "function.trader-rocr",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_rocr100: {
    name: "trader_rocr100",
    url: "function.trader-rocr100",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_rsi: {
    name: "trader_rsi",
    url: "function.trader-rsi",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_sar: {
    name: "trader_sar",
    url: "function.trader-sar",
    spec: {
      parameters: "array $high, array $low [, float $acceleration [, float $maximum ]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_sarext: {
    name: "trader_sarext",
    url: "function.trader-sarext",
    spec: {
      parameters: "array $high, array $low [, float $startValue [, float $offsetOnReverse [, float $accelerationInitLong [, float $accelerationLong [, float $accelerationMaxLong [, float $accelerationInitShort [, float $accelerationShort [, float $accelerationMaxShort ]]]]]]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_set_compat: {
    name: "trader_set_compat",
    url: "function.trader-set-compat",
    spec: {
      parameters: "int $compatId",
      returnValue: "void",
      ref: null
    }
  },
  trader_set_unstable_period: {
    name: "trader_set_unstable_period",
    url: "function.trader-set-unstable-period",
    spec: {
      parameters: "int $functionId, int $timePeriod",
      returnValue: "void",
      ref: null
    }
  },
  trader_sin: {
    name: "trader_sin",
    url: "function.trader-sin",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_sinh: {
    name: "trader_sinh",
    url: "function.trader-sinh",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_sma: {
    name: "trader_sma",
    url: "function.trader-sma",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_sqrt: {
    name: "trader_sqrt",
    url: "function.trader-sqrt",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_stddev: {
    name: "trader_stddev",
    url: "function.trader-stddev",
    spec: {
      parameters: "array $real [, int $timePeriod [, float $nbDev ]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_stoch: {
    name: "trader_stoch",
    url: "function.trader-stoch",
    spec: {
      parameters: "array $high, array $low, array $close [, int $fastK_Period [, int $slowK_Period [, int $slowK_MAType [, int $slowD_Period [, int $slowD_MAType ]]]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_stochf: {
    name: "trader_stochf",
    url: "function.trader-stochf",
    spec: {
      parameters: "array $high, array $low, array $close [, int $fastK_Period [, int $fastD_Period [, int $fastD_MAType ]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_stochrsi: {
    name: "trader_stochrsi",
    url: "function.trader-stochrsi",
    spec: {
      parameters: "array $real [, int $timePeriod [, int $fastK_Period [, int $fastD_Period [, int $fastD_MAType ]]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_sub: {
    name: "trader_sub",
    url: "function.trader-sub",
    spec: {
      parameters: "array $real0, array $real1",
      returnValue: "array",
      ref: null
    }
  },
  trader_sum: {
    name: "trader_sum",
    url: "function.trader-sum",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_t3: {
    name: "trader_t3",
    url: "function.trader-t3",
    spec: {
      parameters: "array $real [, int $timePeriod [, float $vFactor ]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_tan: {
    name: "trader_tan",
    url: "function.trader-tan",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_tanh: {
    name: "trader_tanh",
    url: "function.trader-tanh",
    spec: {
      parameters: "array $real",
      returnValue: "array",
      ref: null
    }
  },
  trader_tema: {
    name: "trader_tema",
    url: "function.trader-tema",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_trange: {
    name: "trader_trange",
    url: "function.trader-trange",
    spec: {
      parameters: "array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_trima: {
    name: "trader_trima",
    url: "function.trader-trima",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_trix: {
    name: "trader_trix",
    url: "function.trader-trix",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_tsf: {
    name: "trader_tsf",
    url: "function.trader-tsf",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_typprice: {
    name: "trader_typprice",
    url: "function.trader-typprice",
    spec: {
      parameters: "array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_ultosc: {
    name: "trader_ultosc",
    url: "function.trader-ultosc",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod1 [, int $timePeriod2 [, int $timePeriod3 ]]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_var: {
    name: "trader_var",
    url: "function.trader-var",
    spec: {
      parameters: "array $real [, int $timePeriod [, float $nbDev ]]",
      returnValue: "array",
      ref: null
    }
  },
  trader_wclprice: {
    name: "trader_wclprice",
    url: "function.trader-wclprice",
    spec: {
      parameters: "array $high, array $low, array $close",
      returnValue: "array",
      ref: null
    }
  },
  trader_willr: {
    name: "trader_willr",
    url: "function.trader-willr",
    spec: {
      parameters: "array $high, array $low, array $close [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trader_wma: {
    name: "trader_wma",
    url: "function.trader-wma",
    spec: {
      parameters: "array $real [, int $timePeriod ]",
      returnValue: "array",
      ref: null
    }
  },
  trait_exists: {
    name: "trait_exists",
    url: "function.trait-exists",
    spec: {
      parameters: "string $traitname [, bool $autoload ]",
      returnValue: "bool",
      ref: null
    }
  },
  trigger_error: {
    name: "trigger_error",
    url: "function.trigger-error",
    spec: {
      parameters: "string $error_msg [, int $error_type = E_USER_NOTICE ]",
      returnValue: "bool",
      ref: null
    }
  },
  trim: {
    name: "trim",
    url: "function.trim",
    spec: {
      parameters: "string $str [, string $character_mask = \" \\t\\n\\r\\0\\x0B\" ]",
      returnValue: "string",
      ref: null
    }
  }
};
