classes.x = {
  xmlreader: {
    name: "XMLReader",
    methods: {
      close: {
        name: "close",
        url: "xmlreader.close",
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
      expand: {
        name: "expand",
        url: "xmlreader.expand",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ DOMNode $basenode ]",
          returnValue: "DOMNode",
          ref: null
        }
      },
      getattribute: {
        name: "getAttribute",
        url: "xmlreader.getattribute",
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
      getattributeno: {
        name: "getAttributeNo",
        url: "xmlreader.getattributeno",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $index",
          returnValue: "string",
          ref: null
        }
      },
      getattributens: {
        name: "getAttributeNs",
        url: "xmlreader.getattributens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $localName, string $namespaceURI",
          returnValue: "string",
          ref: null
        }
      },
      getparserproperty: {
        name: "getParserProperty",
        url: "xmlreader.getparserproperty",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $property",
          returnValue: "bool",
          ref: null
        }
      },
      isvalid: {
        name: "isValid",
        url: "xmlreader.isvalid",
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
      lookupnamespace: {
        name: "lookupNamespace",
        url: "xmlreader.lookupnamespace",
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
      movetoattribute: {
        name: "moveToAttribute",
        url: "xmlreader.movetoattribute",
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
      movetoattributeno: {
        name: "moveToAttributeNo",
        url: "xmlreader.movetoattributeno",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $index",
          returnValue: "bool",
          ref: null
        }
      },
      movetoattributens: {
        name: "moveToAttributeNs",
        url: "xmlreader.movetoattributens",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $localName, string $namespaceURI",
          returnValue: "bool",
          ref: null
        }
      },
      movetoelement: {
        name: "moveToElement",
        url: "xmlreader.movetoelement",
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
      movetofirstattribute: {
        name: "moveToFirstAttribute",
        url: "xmlreader.movetofirstattribute",
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
      movetonextattribute: {
        name: "moveToNextAttribute",
        url: "xmlreader.movetonextattribute",
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
        url: "xmlreader.next",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $localname ]",
          returnValue: "bool",
          ref: null
        }
      },
      open: {
        name: "open",
        url: "xmlreader.open",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $URI [, string $encoding [, int $options = 0 ]]",
          returnValue: "bool",
          ref: null
        }
      },
      read: {
        name: "read",
        url: "xmlreader.read",
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
      readinnerxml: {
        name: "readInnerXML",
        url: "xmlreader.readinnerxml",
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
      readouterxml: {
        name: "readOuterXML",
        url: "xmlreader.readouterxml",
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
      readstring: {
        name: "readString",
        url: "xmlreader.readstring",
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
      setparserproperty: {
        name: "setParserProperty",
        url: "xmlreader.setparserproperty",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $property, bool $value",
          returnValue: "bool",
          ref: null
        }
      },
      setrelaxngschema: {
        name: "setRelaxNGSchema",
        url: "xmlreader.setrelaxngschema",
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
      setrelaxngschemasource: {
        name: "setRelaxNGSchemaSource",
        url: "xmlreader.setrelaxngschemasource",
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
      setschema: {
        name: "setSchema",
        url: "xmlreader.setschema",
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
      xml: {
        name: "XML",
        url: "xmlreader.xml",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $source [, string $encoding [, int $options = 0 ]]",
          returnValue: "bool",
          ref: null
        }
      }
    }
  },
  xsession: {
    name: "XSession",
    methods: {
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-xsession.construct",
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
  xsltprocessor: {
    name: "XSLTProcessor",
    methods: {
      getparameter: {
        name: "getParameter",
        url: "xsltprocessor.getparameter",
        spec: {
          isPublic: false,
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
      getsecurityprefs: {
        name: "getSecurityPrefs",
        url: "xsltprocessor.getsecurityprefs",
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
      hasexsltsupport: {
        name: "hasExsltSupport",
        url: "xsltprocessor.hasexsltsupport",
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
      importstylesheet: {
        name: "importStylesheet",
        url: "xsltprocessor.importstylesheet",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $stylesheet",
          returnValue: "bool",
          ref: null
        }
      },
      registerphpfunctions: {
        name: "registerPHPFunctions",
        url: "xsltprocessor.registerphpfunctions",
        spec: {
          isPublic: false,
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
      removeparameter: {
        name: "removeParameter",
        url: "xsltprocessor.removeparameter",
        spec: {
          isPublic: false,
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
      setparameter: {
        name: "setParameter",
        url: "xsltprocessor.setparameter",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $namespace, string $name, string $value",
          returnValue: "bool",
          ref: null
        }
      },
      setprofiling: {
        name: "setProfiling",
        url: "xsltprocessor.setprofiling",
        spec: {
          isPublic: false,
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
      setsecurityprefs: {
        name: "setSecurityPrefs",
        url: "xsltprocessor.setsecurityprefs",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $securityPrefs",
          returnValue: "int",
          ref: null
        }
      },
      transformtodoc: {
        name: "transformToDoc",
        url: "xsltprocessor.transformtodoc",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMNode $doc",
          returnValue: "DOMDocument",
          ref: null
        }
      },
      transformtouri: {
        name: "transformToUri",
        url: "xsltprocessor.transformtouri",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "DOMDocument $doc, string $uri",
          returnValue: "int",
          ref: null
        }
      },
      transformtoxml: {
        name: "transformToXML",
        url: "xsltprocessor.transformtoxml",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $doc",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "xsltprocessor.construct",
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
  }
};
