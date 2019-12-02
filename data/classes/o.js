classes.o = {
  oauth: {
    name: "OAuth",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      disabledebug: {
        name: "disableDebug",
        url: "oauth.disabledebug",
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
      disableredirects: {
        name: "disableRedirects",
        url: "oauth.disableredirects",
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
      disablesslchecks: {
        name: "disableSSLChecks",
        url: "oauth.disablesslchecks",
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
      enabledebug: {
        name: "enableDebug",
        url: "oauth.enabledebug",
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
      enableredirects: {
        name: "enableRedirects",
        url: "oauth.enableredirects",
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
      enablesslchecks: {
        name: "enableSSLChecks",
        url: "oauth.enablesslchecks",
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
      fetch: {
        name: "fetch",
        url: "oauth.fetch",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $protected_resource_url [, array $extra_parameters [, string $http_method [, array $http_headers ]]]",
          returnValue: "mixed",
          ref: null
        }
      },
      generatesignature: {
        name: "generateSignature",
        url: "oauth.generatesignature",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $http_method, string $url [, mixed $extra_parameters ]",
          returnValue: "string",
          ref: null
        }
      },
      getaccesstoken: {
        name: "getAccessToken",
        url: "oauth.getaccesstoken",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $access_token_url [, string $auth_session_handle [, string $verifier_token [, string $http_method ]]]",
          returnValue: "array",
          ref: null
        }
      },
      getcapath: {
        name: "getCAPath",
        url: "oauth.getcapath",
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
      getlastresponse: {
        name: "getLastResponse",
        url: "oauth.getlastresponse",
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
      getlastresponseheaders: {
        name: "getLastResponseHeaders",
        url: "oauth.getlastresponseheaders",
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
      getlastresponseinfo: {
        name: "getLastResponseInfo",
        url: "oauth.getlastresponseinfo",
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
      getrequestheader: {
        name: "getRequestHeader",
        url: "oauth.getrequestheader",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $http_method, string $url [, mixed $extra_parameters ]",
          returnValue: "string",
          ref: null
        }
      },
      getrequesttoken: {
        name: "getRequestToken",
        url: "oauth.getrequesttoken",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $request_token_url [, string $callback_url [, string $http_method ]]",
          returnValue: "array",
          ref: null
        }
      },
      setauthtype: {
        name: "setAuthType",
        url: "oauth.setauthtype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $auth_type",
          returnValue: "bool",
          ref: null
        }
      },
      setcapath: {
        name: "setCAPath",
        url: "oauth.setcapath",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $ca_path [, string $ca_info ]]",
          returnValue: "mixed",
          ref: null
        }
      },
      setnonce: {
        name: "setNonce",
        url: "oauth.setnonce",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $nonce",
          returnValue: "mixed",
          ref: null
        }
      },
      setrequestengine: {
        name: "setRequestEngine",
        url: "oauth.setrequestengine",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $reqengine",
          returnValue: "void",
          ref: null
        }
      },
      setrsacertificate: {
        name: "setRSACertificate",
        url: "oauth.setrsacertificate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $cert",
          returnValue: "mixed",
          ref: null
        }
      },
      setsslchecks: {
        name: "setSSLChecks",
        url: "oauth.setsslchecks",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $sslcheck",
          returnValue: "bool",
          ref: null
        }
      },
      settimestamp: {
        name: "setTimestamp",
        url: "oauth.settimestamp",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $timestamp",
          returnValue: "mixed",
          ref: null
        }
      },
      settoken: {
        name: "setToken",
        url: "oauth.settoken",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $token, string $token_secret",
          returnValue: "bool",
          ref: null
        }
      },
      setversion: {
        name: "setVersion",
        url: "oauth.setversion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $version",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "oauth.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $consumer_key, string $consumer_secret [, string $signature_method = OAUTH_SIG_METHOD_HMACSHA1 [, int $auth_type = 0 ]]",
          returnValue: "",
          ref: null
        }
      },
      __destruct: {
        name: "__destruct",
        url: "oauth.destruct",
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
  oauthprovider: {
    name: "OAuthProvider",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      addrequiredparameter: {
        name: "addRequiredParameter",
        url: "oauthprovider.addrequiredparameter",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "string $req_params",
          returnValue: "bool",
          ref: null
        }
      },
      callconsumerhandler: {
        name: "callconsumerHandler",
        url: "oauthprovider.callconsumerhandler",
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
      calltimestampnoncehandler: {
        name: "callTimestampNonceHandler",
        url: "oauthprovider.calltimestampnoncehandler",
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
      calltokenhandler: {
        name: "calltokenHandler",
        url: "oauthprovider.calltokenhandler",
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
      checkoauthrequest: {
        name: "checkOAuthRequest",
        url: "oauthprovider.checkoauthrequest",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $uri [, string $method ]]",
          returnValue: "void",
          ref: null
        }
      },
      consumerhandler: {
        name: "consumerHandler",
        url: "oauthprovider.consumerhandler",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback_function",
          returnValue: "void",
          ref: null
        }
      },
      generatetoken: {
        name: "generateToken",
        url: "oauthprovider.generatetoken",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "int $size [, bool $strong = FALSE ]",
          returnValue: "string",
          ref: null
        }
      },
      is2leggedendpoint: {
        name: "is2LeggedEndpoint",
        url: "oauthprovider.is2leggedendpoint",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $params_array",
          returnValue: "void",
          ref: null
        }
      },
      isrequesttokenendpoint: {
        name: "isRequestTokenEndpoint",
        url: "oauthprovider.isrequesttokenendpoint",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $will_issue_request_token",
          returnValue: "void",
          ref: null
        }
      },
      removerequiredparameter: {
        name: "removeRequiredParameter",
        url: "oauthprovider.removerequiredparameter",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "string $req_params",
          returnValue: "bool",
          ref: null
        }
      },
      reportproblem: {
        name: "reportProblem",
        url: "oauthprovider.reportproblem",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "string $oauthexception [, bool $send_headers = TRUE ]",
          returnValue: "string",
          ref: null
        }
      },
      setparam: {
        name: "setParam",
        url: "oauthprovider.setparam",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "string $param_key [, mixed $param_val ]",
          returnValue: "bool",
          ref: null
        }
      },
      setrequesttokenpath: {
        name: "setRequestTokenPath",
        url: "oauthprovider.setrequesttokenpath",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: false,
          parameters: "string $path",
          returnValue: "bool",
          ref: null
        }
      },
      timestampnoncehandler: {
        name: "timestampNonceHandler",
        url: "oauthprovider.timestampnoncehandler",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback_function",
          returnValue: "void",
          ref: null
        }
      },
      tokenhandler: {
        name: "tokenHandler",
        url: "oauthprovider.tokenhandler",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback_function",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "oauthprovider.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ array $params_array ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  outeriterator: {
    name: "OuterIterator",
    isClass: false,
    isInterface: true,
    isTrait: false,
    methods: {
      getinneriterator: {
        name: "getInnerIterator",
        url: "outeriterator.getinneriterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Iterator",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.outeriterator",
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
  outofboundsexception: {
    ref: () => classes.r.runtimeexception,
    url: "class.outofboundsexception"
  },
  outofrangeexception: {
    ref: () => classes.l.logicexception,
    url: "class.outofrangeexception"
  },
  overflowexception: {
    ref: () => classes.r.runtimeexception,
    url: "class.overflowexception"
  }
};
