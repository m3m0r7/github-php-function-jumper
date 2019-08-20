classes.s = {
  "samconnection": {
    "name": "SAMConnection",
    "methods": {
      "commit": {
        "name": "commit",
        "url": "samconnection.commit",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "connect": {
        "name": "connect",
        "url": "samconnection.connect",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $protocol [, array $properties ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "disconnect": {
        "name": "disconnect",
        "url": "samconnection.disconnect",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "errno": {
        "name": "errno",
        "url": "samconnection.errno",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "",
          "returnValue": "",
          "ref": null
        }
      },
      "error": {
        "name": "error",
        "url": "samconnection.error",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "",
          "returnValue": "",
          "ref": null
        }
      },
      "isconnected": {
        "name": "isConnected",
        "url": "samconnection.isconnected",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "peek": {
        "name": "peek",
        "url": "samconnection.peek",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $target [, array $properties ]",
          "returnValue": "SAMMessage",
          "ref": null
        }
      },
      "peekall": {
        "name": "peekAll",
        "url": "samconnection.peekall",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $target [, array $properties ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "receive": {
        "name": "receive",
        "url": "samconnection.receive",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $target [, array $properties ]",
          "returnValue": "SAMMessage",
          "ref": null
        }
      },
      "remove": {
        "name": "remove",
        "url": "samconnection.remove",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $target [, array $properties ]",
          "returnValue": "SAMMessage",
          "ref": null
        }
      },
      "rollback": {
        "name": "rollback",
        "url": "samconnection.rollback",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "send": {
        "name": "send",
        "url": "samconnection.send",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $target, SAMMessage $msg [, array $properties ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "setdebug": {
        "name": "setDebug",
        "url": "samconnection.setdebug",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $switch",
          "returnValue": "void",
          "ref": null
        }
      },
      "subscribe": {
        "name": "subscribe",
        "url": "samconnection.subscribe",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $targetTopic",
          "returnValue": "string",
          "ref": null
        }
      },
      "unsubscribe": {
        "name": "unsubscribe",
        "url": "samconnection.unsubscribe",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $subscriptionId [, string $targetTopic ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "samconnection.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "sammessage": {
    "name": "SAMMessage",
    "methods": {
      "body": {
        "name": "body",
        "url": "sammessage.body",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "",
          "returnValue": "",
          "ref": null
        }
      },
      "header": {
        "name": "header",
        "url": "sammessage.header",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "",
          "returnValue": "",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "sammessage.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ mixed $body ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "sca": {
    "name": "SCA",
    "methods": {
      "createdataobject": {
        "name": "createDataObject",
        "url": "sca.createdataobject",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $type_namespace_uri, string $type_name",
          "returnValue": "SDO_DataObject",
          "ref": null
        }
      },
      "getservice": {
        "name": "getService",
        "url": "sca.getservice",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $target [, string $binding [, array $config ]]",
          "returnValue": "mixed",
          "ref": null
        }
      }
    }
  },
  "sca_localproxy": {
    "name": "SCA_LocalProxy",
    "methods": {
      "createdataobject": {
        "name": "createDataObject",
        "url": "sca-localproxy.createdataobject",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $type_namespace_uri, string $type_name",
          "returnValue": "SDO_DataObject",
          "ref": null
        }
      }
    }
  },
  "sca_soapproxy": {
    "name": "SCA_SoapProxy",
    "methods": {
      "createdataobject": {
        "name": "createDataObject",
        "url": "sca-soapproxy.createdataobject",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $type_namespace_uri, string $type_name",
          "returnValue": "SDO_DataObject",
          "ref": null
        }
      }
    }
  },
  "schema": {
    "name": "Schema",
    "methods": {
      "createcollection": {
        "name": "createCollection",
        "url": "mysql-xdevapi-schema.createcollection",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "mysql_xdevapi\\Collection",
          "ref": null
        }
      },
      "dropcollection": {
        "name": "dropCollection",
        "url": "mysql-xdevapi-schema.dropcollection",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $collection_name",
          "returnValue": "bool",
          "ref": null
        }
      },
      "existsindatabase": {
        "name": "existsInDatabase",
        "url": "mysql-xdevapi-schema.existsindatabase",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getcollection": {
        "name": "getCollection",
        "url": "mysql-xdevapi-schema.getcollection",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "mysql_xdevapi\\Collection",
          "ref": null
        }
      },
      "getcollectionastable": {
        "name": "getCollectionAsTable",
        "url": "mysql-xdevapi-schema.getcollectionastable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "mysql_xdevapi\\Table",
          "ref": null
        }
      },
      "getcollections": {
        "name": "getCollections",
        "url": "mysql-xdevapi-schema.getcollections",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getname": {
        "name": "getName",
        "url": "mysql-xdevapi-schema.getname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getsession": {
        "name": "getSession",
        "url": "mysql-xdevapi-schema.getsession",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysql_xdevapi\\Session",
          "ref": null
        }
      },
      "gettable": {
        "name": "getTable",
        "url": "mysql-xdevapi-schema.gettable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "mysql_xdevapi\\Table",
          "ref": null
        }
      },
      "gettables": {
        "name": "getTables",
        "url": "mysql-xdevapi-schema.gettables",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mysql-xdevapi-schema.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "schemaobject": {
    "name": "SchemaObject",
    "methods": {
      "getschema": {
        "name": "getSchema",
        "url": "mysql-xdevapi-schemaobject.getschema",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysql_xdevapi\\Schema",
          "ref": null
        }
      }
    }
  },
  "sdo_das_changesummary": {
    "name": "SDO_DAS_ChangeSummary",
    "methods": {
      "beginlogging": {
        "name": "beginLogging",
        "url": "sdo-das-changesummary.beginlogging",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "endlogging": {
        "name": "endLogging",
        "url": "sdo-das-changesummary.endlogging",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getchangeddataobjects": {
        "name": "getChangedDataObjects",
        "url": "sdo-das-changesummary.getchangeddataobjects",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_List",
          "ref": null
        }
      },
      "getchangetype": {
        "name": "getChangeType",
        "url": "sdo-das-changesummary.getchangetype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SDO_DataObject $dataObject",
          "returnValue": "int",
          "ref": null
        }
      },
      "getoldcontainer": {
        "name": "getOldContainer",
        "url": "sdo-das-changesummary.getoldcontainer",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SDO_DataObject $data_object",
          "returnValue": "SDO_DataObject",
          "ref": null
        }
      },
      "getoldvalues": {
        "name": "getOldValues",
        "url": "sdo-das-changesummary.getoldvalues",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SDO_DataObject $data_object",
          "returnValue": "SDO_List",
          "ref": null
        }
      },
      "islogging": {
        "name": "isLogging",
        "url": "sdo-das-changesummary.islogging",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "sdo_das_datafactory": {
    "name": "SDO_DAS_DataFactory",
    "methods": {
      "addpropertytotype": {
        "name": "addPropertyToType",
        "url": "sdo-das-datafactory.addpropertytotype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $parent_type_namespace_uri, string $parent_type_name, string $property_name, string $type_namespace_uri, string $type_name [, array $options ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "addtype": {
        "name": "addType",
        "url": "sdo-das-datafactory.addtype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $type_namespace_uri, string $type_name [, array $options ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "getdatafactory": {
        "name": "getDataFactory",
        "url": "sdo-das-datafactory.getdatafactory",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_DAS_DataFactory",
          "ref": null
        }
      }
    }
  },
  "sdo_das_dataobject": {
    "name": "SDO_DAS_DataObject",
    "methods": {
      "getchangesummary": {
        "name": "getChangeSummary",
        "url": "sdo-das-dataobject.getchangesummary",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_DAS_ChangeSummary",
          "ref": null
        }
      }
    }
  },
  "sdo_das_relational": {
    "name": "SDO_DAS_Relational",
    "methods": {
      "applychanges": {
        "name": "applyChanges",
        "url": "sdo-das-relational.applychanges",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "PDO $database_handle, SDODataObject $root_data_object",
          "returnValue": "void",
          "ref": null
        }
      },
      "createrootdataobject": {
        "name": "createRootDataObject",
        "url": "sdo-das-relational.createrootdataobject",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDODataObject",
          "ref": null
        }
      },
      "executepreparedquery": {
        "name": "executePreparedQuery",
        "url": "sdo-das-relational.executepreparedquery",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "PDO $database_handle, PDOStatement $prepared_statement, array $value_list [, array $column_specifier ]",
          "returnValue": "SDODataObject",
          "ref": null
        }
      },
      "executequery": {
        "name": "executeQuery",
        "url": "sdo-das-relational.executequery",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "PDO $database_handle, string $SQL_statement [, array $column_specifier ]",
          "returnValue": "SDODataObject",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "sdo-das-relational.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $database_metadata [, string $application_root_type [, array $SDO_containment_references_metadata ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "sdo_das_setting": {
    "name": "SDO_DAS_Setting",
    "methods": {
      "getlistindex": {
        "name": "getListIndex",
        "url": "sdo-das-setting.getlistindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getpropertyindex": {
        "name": "getPropertyIndex",
        "url": "sdo-das-setting.getpropertyindex",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getpropertyname": {
        "name": "getPropertyName",
        "url": "sdo-das-setting.getpropertyname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getvalue": {
        "name": "getValue",
        "url": "sdo-das-setting.getvalue",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "isset": {
        "name": "isSet",
        "url": "sdo-das-setting.isset",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "sdo_das_xml": {
    "name": "SDO_DAS_XML",
    "methods": {
      "addtypes": {
        "name": "addTypes",
        "url": "sdo-das-xml.addtypes",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $xsd_file",
          "returnValue": "void",
          "ref": null
        }
      },
      "create": {
        "name": "create",
        "url": "sdo-das-xml.create",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ mixed $xsd_file [, string $key ]]",
          "returnValue": "SDO_DAS_XML",
          "ref": null
        }
      },
      "createdataobject": {
        "name": "createDataObject",
        "url": "sdo-das-xml.createdataobject",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $namespace_uri, string $type_name",
          "returnValue": "SDO_DataObject",
          "ref": null
        }
      },
      "createdocument": {
        "name": "createDocument",
        "url": "sdo-das-xml.createdocument",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $document_element_name ]",
          "returnValue": "SDO_DAS_XML_Document",
          "ref": null
        }
      },
      "loadfile": {
        "name": "loadFile",
        "url": "sdo-das-xml.loadfile",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $xml_file",
          "returnValue": "SDO_XMLDocument",
          "ref": null
        }
      },
      "loadstring": {
        "name": "loadString",
        "url": "sdo-das-xml.loadstring",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $xml_string",
          "returnValue": "SDO_DAS_XML_Document",
          "ref": null
        }
      },
      "savefile": {
        "name": "saveFile",
        "url": "sdo-das-xml.savefile",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SDO_XMLDocument $xdoc, string $xml_file [, int $indent ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "savestring": {
        "name": "saveString",
        "url": "sdo-das-xml.savestring",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SDO_XMLDocument $xdoc [, int $indent ]",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "sdo_das_xml_document": {
    "name": "SDO_DAS_XML_Document",
    "methods": {
      "getrootdataobject": {
        "name": "getRootDataObject",
        "url": "sdo-das-xml-document.getrootdataobject",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_DataObject",
          "ref": null
        }
      },
      "getrootelementname": {
        "name": "getRootElementName",
        "url": "sdo-das-xml-document.getrootelementname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrootelementuri": {
        "name": "getRootElementURI",
        "url": "sdo-das-xml-document.getrootelementuri",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "setencoding": {
        "name": "setEncoding",
        "url": "sdo-das-xml-document.setencoding",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $encoding",
          "returnValue": "void",
          "ref": null
        }
      },
      "setxmldeclaration": {
        "name": "setXMLDeclaration",
        "url": "sdo-das-xml-document.setxmldeclaration",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $xmlDeclatation",
          "returnValue": "void",
          "ref": null
        }
      },
      "setxmlversion": {
        "name": "setXMLVersion",
        "url": "sdo-das-xml-document.setxmlversion",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $xmlVersion",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "sdo_datafactory": {
    "name": "SDO_DataFactory",
    "methods": {
      "create": {
        "name": "create",
        "url": "sdo-datafactory.create",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $type_namespace_uri, string $type_name",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "sdo_dataobject": {
    "name": "SDO_DataObject",
    "methods": {
      "clear": {
        "name": "clear",
        "url": "sdo-dataobject.clear",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "createdataobject": {
        "name": "createDataObject",
        "url": "sdo-dataobject.createdataobject",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $identifier",
          "returnValue": "SDO_DataObject",
          "ref": null
        }
      },
      "getcontainer": {
        "name": "getContainer",
        "url": "sdo-dataobject.getcontainer",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_DataObject",
          "ref": null
        }
      },
      "getsequence": {
        "name": "getSequence",
        "url": "sdo-dataobject.getsequence",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_Sequence",
          "ref": null
        }
      },
      "gettypename": {
        "name": "getTypeName",
        "url": "sdo-dataobject.gettypename",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "gettypenamespaceuri": {
        "name": "getTypeNamespaceURI",
        "url": "sdo-dataobject.gettypenamespaceuri",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "sdo_exception": {
    "name": "SDO_Exception",
    "methods": {
      "getcause": {
        "name": "getCause",
        "url": "sdo-exception.getcause",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      }
    }
  },
  "sdo_list": {
    "name": "SDO_List",
    "methods": {
      "insert": {
        "name": "insert",
        "url": "sdo-list.insert",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value [, int $index ]",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "sdo_model_property": {
    "name": "SDO_Model_Property",
    "methods": {
      "getcontainingtype": {
        "name": "getContainingType",
        "url": "sdo-model-property.getcontainingtype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_Model_Type",
          "ref": null
        }
      },
      "getdefault": {
        "name": "getDefault",
        "url": "sdo-model-property.getdefault",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getname": {
        "name": "getName",
        "url": "sdo-model-property.getname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "gettype": {
        "name": "getType",
        "url": "sdo-model-property.gettype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_Model_Type",
          "ref": null
        }
      },
      "iscontainment": {
        "name": "isContainment",
        "url": "sdo-model-property.iscontainment",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "ismany": {
        "name": "isMany",
        "url": "sdo-model-property.ismany",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "sdo_model_reflectiondataobject": {
    "name": "SDO_Model_ReflectionDataObject",
    "methods": {
      "export": {
        "name": "export",
        "url": "sdo-model-reflectiondataobject.export",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SDO_Model_ReflectionDataObject $rdo [, bool $return ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getcontainmentproperty": {
        "name": "getContainmentProperty",
        "url": "sdo-model-reflectiondataobject.getcontainmentproperty",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_Model_Property",
          "ref": null
        }
      },
      "getinstanceproperties": {
        "name": "getInstanceProperties",
        "url": "sdo-model-reflectiondataobject.getinstanceproperties",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "gettype": {
        "name": "getType",
        "url": "sdo-model-reflectiondataobject.gettype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_Model_Type",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "sdo-model-reflectiondataobject.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SDO_DataObject $data_object",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "sdo_model_type": {
    "name": "SDO_Model_Type",
    "methods": {
      "getbasetype": {
        "name": "getBaseType",
        "url": "sdo-model-type.getbasetype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SDO_Model_Type",
          "ref": null
        }
      },
      "getname": {
        "name": "getName",
        "url": "sdo-model-type.getname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getnamespaceuri": {
        "name": "getNamespaceURI",
        "url": "sdo-model-type.getnamespaceuri",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getproperties": {
        "name": "getProperties",
        "url": "sdo-model-type.getproperties",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getproperty": {
        "name": "getProperty",
        "url": "sdo-model-type.getproperty",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $identifier",
          "returnValue": "SDO_Model_Property",
          "ref": null
        }
      },
      "isabstracttype": {
        "name": "isAbstractType",
        "url": "sdo-model-type.isabstracttype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isdatatype": {
        "name": "isDataType",
        "url": "sdo-model-type.isdatatype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isinstance": {
        "name": "isInstance",
        "url": "sdo-model-type.isinstance",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SDO_DataObject $data_object",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isopentype": {
        "name": "isOpenType",
        "url": "sdo-model-type.isopentype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "issequencedtype": {
        "name": "isSequencedType",
        "url": "sdo-model-type.issequencedtype",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "sdo_sequence": {
    "name": "SDO_Sequence",
    "methods": {
      "getproperty": {
        "name": "getProperty",
        "url": "sdo-sequence.getproperty",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $sequence_index",
          "returnValue": "SDO_Model_Property",
          "ref": null
        }
      },
      "insert": {
        "name": "insert",
        "url": "sdo-sequence.insert",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value [, int $sequenceIndex [, mixed $propertyIdentifier ]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "move": {
        "name": "move",
        "url": "sdo-sequence.move",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $toIndex, int $fromIndex",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "seaslog": {
    "name": "SeasLog",
    "methods": {
      "alert": {
        "name": "alert",
        "url": "seaslog.alert",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $message [, array $content [, string $logger ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "analyzercount": {
        "name": "analyzerCount",
        "url": "seaslog.analyzercount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $level [, string $log_path [, string $key_word ]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "analyzerdetail": {
        "name": "analyzerDetail",
        "url": "seaslog.analyzerdetail",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $level [, string $log_path [, string $key_word [, int $start [, int $limit [, int $order ]]]]]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "closeloggerstream": {
        "name": "closeLoggerStream",
        "url": "seaslog.closeloggerstream",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "int $model, string $logger",
          "returnValue": "bool",
          "ref": null
        }
      },
      "critical": {
        "name": "critical",
        "url": "seaslog.critical",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $message [, array $content [, string $logger ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "debug": {
        "name": "debug",
        "url": "seaslog.debug",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $message [, array $content [, string $logger ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "emergency": {
        "name": "emergency",
        "url": "seaslog.emergency",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $message [, array $content [, string $logger ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "error": {
        "name": "error",
        "url": "seaslog.error",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $message [, array $content [, string $logger ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "flushbuffer": {
        "name": "flushBuffer",
        "url": "seaslog.flushbuffer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getbasepath": {
        "name": "getBasePath",
        "url": "seaslog.getbasepath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getbuffer": {
        "name": "getBuffer",
        "url": "seaslog.getbuffer",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getbufferenabled": {
        "name": "getBufferEnabled",
        "url": "seaslog.getbufferenabled",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getdatetimeformat": {
        "name": "getDatetimeFormat",
        "url": "seaslog.getdatetimeformat",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getlastlogger": {
        "name": "getLastLogger",
        "url": "seaslog.getlastlogger",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrequestid": {
        "name": "getRequestID",
        "url": "seaslog.getrequestid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrequestvariable": {
        "name": "getRequestVariable",
        "url": "seaslog.getrequestvariable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "int $key",
          "returnValue": "bool",
          "ref": null
        }
      },
      "info": {
        "name": "info",
        "url": "seaslog.info",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $message [, array $content [, string $logger ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "log": {
        "name": "log",
        "url": "seaslog.log",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $level [, string $message [, array $content [, string $logger ]]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "notice": {
        "name": "notice",
        "url": "seaslog.notice",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $message [, array $content [, string $logger ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setbasepath": {
        "name": "setBasePath",
        "url": "seaslog.setbasepath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $base_path",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setdatetimeformat": {
        "name": "setDatetimeFormat",
        "url": "seaslog.setdatetimeformat",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $format",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setlogger": {
        "name": "setLogger",
        "url": "seaslog.setlogger",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $logger",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setrequestid": {
        "name": "setRequestID",
        "url": "seaslog.setrequestid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $request_id",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setrequestvariable": {
        "name": "setRequestVariable",
        "url": "seaslog.setrequestvariable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "int $key, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "warning": {
        "name": "warning",
        "url": "seaslog.warning",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $message [, array $content [, string $logger ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "seaslog.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "seaslog.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "seekableiterator": {
    "name": "SeekableIterator",
    "methods": {
      "seek": {
        "name": "seek",
        "url": "seekableiterator.seek",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $position",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "serializable": {
    "name": "Serializable",
    "methods": {
      "serialize": {
        "name": "serialize",
        "url": "serializable.serialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "unserialize": {
        "name": "unserialize",
        "url": "serializable.unserialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $serialized",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "session": {
    "name": "Session",
    "methods": {
      "close": {
        "name": "close",
        "url": "mysql-xdevapi-session.close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "createschema": {
        "name": "createSchema",
        "url": "mysql-xdevapi-session.createschema",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $schema_name",
          "returnValue": "mysql_xdevapi\\Schema",
          "ref": null
        }
      },
      "dropschema": {
        "name": "dropSchema",
        "url": "mysql-xdevapi-session.dropschema",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $schema_name",
          "returnValue": "bool",
          "ref": null
        }
      },
      "generateuuid": {
        "name": "generateUUID",
        "url": "mysql-xdevapi-session.generateuuid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getschema": {
        "name": "getSchema",
        "url": "mysql-xdevapi-session.getschema",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $schema_name",
          "returnValue": "mysql_xdevapi\\Schema",
          "ref": null
        }
      },
      "getschemas": {
        "name": "getSchemas",
        "url": "mysql-xdevapi-session.getschemas",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getserverversion": {
        "name": "getServerVersion",
        "url": "mysql-xdevapi-session.getserverversion",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "integer",
          "ref": null
        }
      },
      "listclients": {
        "name": "listClients",
        "url": "mysql-xdevapi-session.listclients",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "quotename": {
        "name": "quoteName",
        "url": "mysql-xdevapi-session.quotename",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "string",
          "ref": null
        }
      },
      "releasesavepoint": {
        "name": "releaseSavepoint",
        "url": "mysql-xdevapi-session.releasesavepoint",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "rollback": {
        "name": "rollback",
        "url": "mysql-xdevapi-session.rollback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "rollbackto": {
        "name": "rollbackTo",
        "url": "mysql-xdevapi-session.rollbackto",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "setsavepoint": {
        "name": "setSavepoint",
        "url": "mysql-xdevapi-session.setsavepoint",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $name ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "sql": {
        "name": "sql",
        "url": "mysql-xdevapi-session.sql",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "mysql_xdevapi\\SqlStatement",
          "ref": null
        }
      },
      "starttransaction": {
        "name": "startTransaction",
        "url": "mysql-xdevapi-session.starttransaction",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mysql-xdevapi-session.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "sessionhandler": {
    "name": "SessionHandler",
    "methods": {
      "close": {
        "name": "close",
        "url": "sessionhandler.close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "create_sid": {
        "name": "create_sid",
        "url": "sessionhandler.create-sid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "destroy": {
        "name": "destroy",
        "url": "sessionhandler.destroy",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $session_id",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gc": {
        "name": "gc",
        "url": "sessionhandler.gc",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $maxlifetime",
          "returnValue": "int",
          "ref": null
        }
      },
      "open": {
        "name": "open",
        "url": "sessionhandler.open",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $save_path, string $session_name",
          "returnValue": "bool",
          "ref": null
        }
      },
      "read": {
        "name": "read",
        "url": "sessionhandler.read",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $session_id",
          "returnValue": "string",
          "ref": null
        }
      },
      "write": {
        "name": "write",
        "url": "sessionhandler.write",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $session_id, string $session_data",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "sessionhandlerinterface": {
    "name": "SessionHandlerInterface",
    "methods": {
      "close": {
        "name": "close",
        "url": "sessionhandlerinterface.close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "destroy": {
        "name": "destroy",
        "url": "sessionhandlerinterface.destroy",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $session_id",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gc": {
        "name": "gc",
        "url": "sessionhandlerinterface.gc",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $maxlifetime",
          "returnValue": "int",
          "ref": null
        }
      },
      "open": {
        "name": "open",
        "url": "sessionhandlerinterface.open",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $save_path, string $session_name",
          "returnValue": "bool",
          "ref": null
        }
      },
      "read": {
        "name": "read",
        "url": "sessionhandlerinterface.read",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $session_id",
          "returnValue": "string",
          "ref": null
        }
      },
      "write": {
        "name": "write",
        "url": "sessionhandlerinterface.write",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $session_id, string $session_data",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "sessionidinterface": {
    "name": "SessionIdInterface",
    "methods": {
      "create_sid": {
        "name": "create_sid",
        "url": "sessionidinterface.create-sid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "sessionupdatetimestamphandlerinterface": {
    "name": "SessionUpdateTimestampHandlerInterface",
    "methods": {
      "updatetimestamp": {
        "name": "updateTimestamp",
        "url": "sessionupdatetimestamphandlerinterface.updatetimestamp",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key, string $val",
          "returnValue": "bool",
          "ref": null
        }
      },
      "validateid": {
        "name": "validateId",
        "url": "sessionupdatetimestamphandlerinterface.validateid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $key",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "simplexmlelement": {
    "name": "SimpleXMLElement",
    "methods": {
      "addattribute": {
        "name": "addAttribute",
        "url": "simplexmlelement.addattribute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $value [, string $namespace ]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "addchild": {
        "name": "addChild",
        "url": "simplexmlelement.addchild",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $value [, string $namespace ]]",
          "returnValue": "SimpleXMLElement",
          "ref": null
        }
      },
      "asxml": {
        "name": "asXML",
        "url": "simplexmlelement.asxml",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $filename ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "attributes": {
        "name": "attributes",
        "url": "simplexmlelement.attributes",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $ns = NULL [, bool $is_prefix = FALSE ]]",
          "returnValue": "SimpleXMLElement",
          "ref": null
        }
      },
      "children": {
        "name": "children",
        "url": "simplexmlelement.children",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $ns [, bool $is_prefix = FALSE ]]",
          "returnValue": "SimpleXMLElement",
          "ref": null
        }
      },
      "count": {
        "name": "count",
        "url": "simplexmlelement.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getdocnamespaces": {
        "name": "getDocNamespaces",
        "url": "simplexmlelement.getdocnamespaces",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $recursive = FALSE [, bool $from_root = TRUE ]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getname": {
        "name": "getName",
        "url": "simplexmlelement.getname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getnamespaces": {
        "name": "getNamespaces",
        "url": "simplexmlelement.getnamespaces",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $recursive = FALSE ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "registerxpathnamespace": {
        "name": "registerXPathNamespace",
        "url": "simplexmlelement.registerxpathnamespace",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $prefix, string $ns",
          "returnValue": "bool",
          "ref": null
        }
      },
      "savexml": {
        "name": "saveXML",
        "url": "simplexmlelement.savexml",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "",
          "returnValue": "",
          "ref": null
        }
      },
      "xpath": {
        "name": "xpath",
        "url": "simplexmlelement.xpath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path",
          "returnValue": "array",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "simplexmlelement.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $data [, int $options = 0 [, bool $data_is_url = FALSE [, string $ns = \"\" [, bool $is_prefix = FALSE ]]]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "simplexmlelement.tostring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "simplexmliterator": {
    "name": "SimpleXMLIterator",
    "methods": {
      "current": {
        "name": "current",
        "url": "simplexmliterator.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getchildren": {
        "name": "getChildren",
        "url": "simplexmliterator.getchildren",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SimpleXMLIterator",
          "ref": null
        }
      },
      "haschildren": {
        "name": "hasChildren",
        "url": "simplexmliterator.haschildren",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "simplexmliterator.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "simplexmliterator.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "simplexmliterator.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "simplexmliterator.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "snmp": {
    "name": "SNMP",
    "methods": {
      "close": {
        "name": "close",
        "url": "snmp.close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "snmp.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $object_id [, bool $preserve_keys = FALSE ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "geterrno": {
        "name": "getErrno",
        "url": "snmp.geterrno",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "geterror": {
        "name": "getError",
        "url": "snmp.geterror",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getnext": {
        "name": "getnext",
        "url": "snmp.getnext",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $object_id",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "snmp.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $object_id, mixed $type, mixed $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setsecurity": {
        "name": "setSecurity",
        "url": "snmp.setsecurity",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $sec_level [, string $auth_protocol = [, string $auth_passphrase = [, string $priv_protocol = [, string $priv_passphrase = [, string $contextName = [, string $contextEngineID = ]]]]]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "walk": {
        "name": "walk",
        "url": "snmp.walk",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $object_id [, bool $suffix_as_key = FALSE [, int $max_repetitions [, int $non_repeaters ]]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "snmp.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $version, string $hostname, string $community [, int $timeout = 1000000 [, int $retries = 5 ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "soapclient": {
    "name": "SoapClient",
    "methods": {
      "soapclient": {
        "name": "SoapClient",
        "url": "soapclient.soapclient",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $wsdl [, array $options ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__call": {
        "name": "__call",
        "url": "soapclient.call",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $function_name, array $arguments",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "soapclient.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $wsdl [, array $options ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__dorequest": {
        "name": "__doRequest",
        "url": "soapclient.dorequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $request, string $location, string $action, int $version [, int $one_way = 0 ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "__getcookies": {
        "name": "__getCookies",
        "url": "soapclient.getcookies",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "__getfunctions": {
        "name": "__getFunctions",
        "url": "soapclient.getfunctions",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "__getlastrequest": {
        "name": "__getLastRequest",
        "url": "soapclient.getlastrequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "__getlastrequestheaders": {
        "name": "__getLastRequestHeaders",
        "url": "soapclient.getlastrequestheaders",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "__getlastresponse": {
        "name": "__getLastResponse",
        "url": "soapclient.getlastresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "__getlastresponseheaders": {
        "name": "__getLastResponseHeaders",
        "url": "soapclient.getlastresponseheaders",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "__gettypes": {
        "name": "__getTypes",
        "url": "soapclient.gettypes",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "__setcookie": {
        "name": "__setCookie",
        "url": "soapclient.setcookie",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name [, string $value ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "__setlocation": {
        "name": "__setLocation",
        "url": "soapclient.setlocation",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $new_location ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "__setsoapheaders": {
        "name": "__setSoapHeaders",
        "url": "soapclient.setsoapheaders",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ mixed $soapheaders ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__soapcall": {
        "name": "__soapCall",
        "url": "soapclient.soapcall",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $function_name, array $arguments [, array $options [, mixed $input_headers [, array &$output_headers ]]]",
          "returnValue": "mixed",
          "ref": null
        }
      }
    }
  },
  "soapfault": {
    "name": "SoapFault",
    "methods": {
      "soapfault": {
        "name": "SoapFault",
        "url": "soapfault.soapfault",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $faultcode, string $faultstring [, string $faultactor [, string $detail [, string $faultname [, string $headerfault ]]]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "soapfault.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $faultcode, string $faultstring [, string $faultactor [, string $detail [, string $faultname [, string $headerfault ]]]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "soapfault.tostring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "soapheader": {
    "name": "SoapHeader",
    "methods": {
      "soapheader": {
        "name": "SoapHeader",
        "url": "soapheader.soapheader",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $namespace, string $name [, mixed $data [, bool $mustunderstand = FALSE [, string $actor ]]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "soapheader.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $namespace, string $name [, mixed $data [, bool $mustunderstand [, string $actor ]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "soapparam": {
    "name": "SoapParam",
    "methods": {
      "soapparam": {
        "name": "SoapParam",
        "url": "soapparam.soapparam",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $data, string $name",
          "returnValue": "",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "soapparam.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $data, string $name",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "soapserver": {
    "name": "SoapServer",
    "methods": {
      "addfunction": {
        "name": "addFunction",
        "url": "soapserver.addfunction",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $functions",
          "returnValue": "void",
          "ref": null
        }
      },
      "addsoapheader": {
        "name": "addSoapHeader",
        "url": "soapserver.addsoapheader",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SoapHeader $object",
          "returnValue": "void",
          "ref": null
        }
      },
      "fault": {
        "name": "fault",
        "url": "soapserver.fault",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $code, string $string [, string $actor [, string $details [, string $name ]]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "getfunctions": {
        "name": "getFunctions",
        "url": "soapserver.getfunctions",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "handle": {
        "name": "handle",
        "url": "soapserver.handle",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $soap_request ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setclass": {
        "name": "setClass",
        "url": "soapserver.setclass",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $class_name [, mixed $... ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setobject": {
        "name": "setObject",
        "url": "soapserver.setobject",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object",
          "returnValue": "void",
          "ref": null
        }
      },
      "setpersistence": {
        "name": "setPersistence",
        "url": "soapserver.setpersistence",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $mode",
          "returnValue": "void",
          "ref": null
        }
      },
      "soapserver": {
        "name": "SoapServer",
        "url": "soapserver.soapserver",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $wsdl [, array $options ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "soapserver.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $wsdl [, array $options ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "soapvar": {
    "name": "SoapVar",
    "methods": {
      "soapvar": {
        "name": "SoapVar",
        "url": "soapvar.soapvar",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $data, string $encoding [, string $type_name [, string $type_namespace [, string $node_name [, string $node_namespace ]]]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "soapvar.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $data, string $encoding [, string $type_name [, string $type_namespace [, string $node_name [, string $node_namespace ]]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "solrclient": {
    "name": "SolrClient",
    "methods": {
      "adddocument": {
        "name": "addDocument",
        "url": "solrclient.adddocument",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SolrInputDocument $doc [, bool $overwrite = TRUE [, int $commitWithin = 0 ]]",
          "returnValue": "SolrUpdateResponse",
          "ref": null
        }
      },
      "adddocuments": {
        "name": "addDocuments",
        "url": "solrclient.adddocuments",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $docs [, bool $overwrite = TRUE [, int $commitWithin = 0 ]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "commit": {
        "name": "commit",
        "url": "solrclient.commit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $softCommit = FALSE [, bool $waitSearcher = TRUE [, bool $expungeDeletes = FALSE ]]]",
          "returnValue": "SolrUpdateResponse",
          "ref": null
        }
      },
      "deletebyid": {
        "name": "deleteById",
        "url": "solrclient.deletebyid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $id",
          "returnValue": "SolrUpdateResponse",
          "ref": null
        }
      },
      "deletebyids": {
        "name": "deleteByIds",
        "url": "solrclient.deletebyids",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $ids",
          "returnValue": "SolrUpdateResponse",
          "ref": null
        }
      },
      "deletebyqueries": {
        "name": "deleteByQueries",
        "url": "solrclient.deletebyqueries",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $queries",
          "returnValue": "SolrUpdateResponse",
          "ref": null
        }
      },
      "deletebyquery": {
        "name": "deleteByQuery",
        "url": "solrclient.deletebyquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "SolrUpdateResponse",
          "ref": null
        }
      },
      "getbyid": {
        "name": "getById",
        "url": "solrclient.getbyid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $id",
          "returnValue": "SolrQueryResponse",
          "ref": null
        }
      },
      "getbyids": {
        "name": "getByIds",
        "url": "solrclient.getbyids",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $ids",
          "returnValue": "SolrQueryResponse",
          "ref": null
        }
      },
      "getdebug": {
        "name": "getDebug",
        "url": "solrclient.getdebug",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getoptions": {
        "name": "getOptions",
        "url": "solrclient.getoptions",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "optimize": {
        "name": "optimize",
        "url": "solrclient.optimize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $maxSegments = 1 [, bool $softCommit = TRUE [, bool $waitSearcher = TRUE ]]]",
          "returnValue": "SolrUpdateResponse",
          "ref": null
        }
      },
      "ping": {
        "name": "ping",
        "url": "solrclient.ping",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SolrPingResponse",
          "ref": null
        }
      },
      "query": {
        "name": "query",
        "url": "solrclient.query",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SolrParams $query",
          "returnValue": "SolrQueryResponse",
          "ref": null
        }
      },
      "request": {
        "name": "request",
        "url": "solrclient.request",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $raw_request",
          "returnValue": "SolrUpdateResponse",
          "ref": null
        }
      },
      "rollback": {
        "name": "rollback",
        "url": "solrclient.rollback",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SolrUpdateResponse",
          "ref": null
        }
      },
      "setresponsewriter": {
        "name": "setResponseWriter",
        "url": "solrclient.setresponsewriter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $responseWriter",
          "returnValue": "void",
          "ref": null
        }
      },
      "setservlet": {
        "name": "setServlet",
        "url": "solrclient.setservlet",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $type, string $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "system": {
        "name": "system",
        "url": "solrclient.system",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "threads": {
        "name": "threads",
        "url": "solrclient.threads",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "solrclient.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $clientOptions",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrclient.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrclientexception": {
    "name": "SolrClientException",
    "methods": {
      "getinternalinfo": {
        "name": "getInternalInfo",
        "url": "solrclientexception.getinternalinfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      }
    }
  },
  "solrcollapsefunction": {
    "name": "SolrCollapseFunction",
    "methods": {
      "getfield": {
        "name": "getField",
        "url": "solrcollapsefunction.getfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "gethint": {
        "name": "getHint",
        "url": "solrcollapsefunction.gethint",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getmax": {
        "name": "getMax",
        "url": "solrcollapsefunction.getmax",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getmin": {
        "name": "getMin",
        "url": "solrcollapsefunction.getmin",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getnullpolicy": {
        "name": "getNullPolicy",
        "url": "solrcollapsefunction.getnullpolicy",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getsize": {
        "name": "getSize",
        "url": "solrcollapsefunction.getsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "setfield": {
        "name": "setField",
        "url": "solrcollapsefunction.setfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "SolrCollapseFunction",
          "ref": null
        }
      },
      "sethint": {
        "name": "setHint",
        "url": "solrcollapsefunction.sethint",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $hint",
          "returnValue": "SolrCollapseFunction",
          "ref": null
        }
      },
      "setmax": {
        "name": "setMax",
        "url": "solrcollapsefunction.setmax",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $max",
          "returnValue": "SolrCollapseFunction",
          "ref": null
        }
      },
      "setmin": {
        "name": "setMin",
        "url": "solrcollapsefunction.setmin",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $min",
          "returnValue": "SolrCollapseFunction",
          "ref": null
        }
      },
      "setnullpolicy": {
        "name": "setNullPolicy",
        "url": "solrcollapsefunction.setnullpolicy",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $nullPolicy",
          "returnValue": "SolrCollapseFunction",
          "ref": null
        }
      },
      "setsize": {
        "name": "setSize",
        "url": "solrcollapsefunction.setsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size",
          "returnValue": "SolrCollapseFunction",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "solrcollapsefunction.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "solrcollapsefunction.tostring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "solrdismaxquery": {
    "name": "SolrDisMaxQuery",
    "methods": {
      "addbigramphrasefield": {
        "name": "addBigramPhraseField",
        "url": "solrdismaxquery.addbigramphrasefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field, string $boost [, string $slop ]",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "addboostquery": {
        "name": "addBoostQuery",
        "url": "solrdismaxquery.addboostquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field, string $value [, string $boost ]",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "addphrasefield": {
        "name": "addPhraseField",
        "url": "solrdismaxquery.addphrasefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field, string $boost [, string $slop ]",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "addqueryfield": {
        "name": "addQueryField",
        "url": "solrdismaxquery.addqueryfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field [, string $boost ]",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "addtrigramphrasefield": {
        "name": "addTrigramPhraseField",
        "url": "solrdismaxquery.addtrigramphrasefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field, string $boost [, string $slop ]",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "adduserfield": {
        "name": "addUserField",
        "url": "solrdismaxquery.adduserfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "removebigramphrasefield": {
        "name": "removeBigramPhraseField",
        "url": "solrdismaxquery.removebigramphrasefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "removeboostquery": {
        "name": "removeBoostQuery",
        "url": "solrdismaxquery.removeboostquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "removephrasefield": {
        "name": "removePhraseField",
        "url": "solrdismaxquery.removephrasefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "removequeryfield": {
        "name": "removeQueryField",
        "url": "solrdismaxquery.removequeryfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "removetrigramphrasefield": {
        "name": "removeTrigramPhraseField",
        "url": "solrdismaxquery.removetrigramphrasefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "removeuserfield": {
        "name": "removeUserField",
        "url": "solrdismaxquery.removeuserfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setbigramphrasefields": {
        "name": "setBigramPhraseFields",
        "url": "solrdismaxquery.setbigramphrasefields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fields",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setbigramphraseslop": {
        "name": "setBigramPhraseSlop",
        "url": "solrdismaxquery.setbigramphraseslop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $slop",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setboostfunction": {
        "name": "setBoostFunction",
        "url": "solrdismaxquery.setboostfunction",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $function",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setboostquery": {
        "name": "setBoostQuery",
        "url": "solrdismaxquery.setboostquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $q",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setminimummatch": {
        "name": "setMinimumMatch",
        "url": "solrdismaxquery.setminimummatch",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setphrasefields": {
        "name": "setPhraseFields",
        "url": "solrdismaxquery.setphrasefields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fields",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setphraseslop": {
        "name": "setPhraseSlop",
        "url": "solrdismaxquery.setphraseslop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $slop",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setqueryalt": {
        "name": "setQueryAlt",
        "url": "solrdismaxquery.setqueryalt",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $q",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setqueryphraseslop": {
        "name": "setQueryPhraseSlop",
        "url": "solrdismaxquery.setqueryphraseslop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $slop",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "settiebreaker": {
        "name": "setTieBreaker",
        "url": "solrdismaxquery.settiebreaker",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $tieBreaker",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "settrigramphrasefields": {
        "name": "setTrigramPhraseFields",
        "url": "solrdismaxquery.settrigramphrasefields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fields",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "settrigramphraseslop": {
        "name": "setTrigramPhraseSlop",
        "url": "solrdismaxquery.settrigramphraseslop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $slop",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "setuserfields": {
        "name": "setUserFields",
        "url": "solrdismaxquery.setuserfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fields",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "usedismaxqueryparser": {
        "name": "useDisMaxQueryParser",
        "url": "solrdismaxquery.usedismaxqueryparser",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "useedismaxqueryparser": {
        "name": "useEDisMaxQueryParser",
        "url": "solrdismaxquery.useedismaxqueryparser",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SolrDisMaxQuery",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "solrdismaxquery.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $q ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "solrdocument": {
    "name": "SolrDocument",
    "methods": {
      "addfield": {
        "name": "addField",
        "url": "solrdocument.addfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName, string $fieldValue",
          "returnValue": "bool",
          "ref": null
        }
      },
      "clear": {
        "name": "clear",
        "url": "solrdocument.clear",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "solrdocument.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SolrDocumentField",
          "ref": null
        }
      },
      "deletefield": {
        "name": "deleteField",
        "url": "solrdocument.deletefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "bool",
          "ref": null
        }
      },
      "fieldexists": {
        "name": "fieldExists",
        "url": "solrdocument.fieldexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getchilddocuments": {
        "name": "getChildDocuments",
        "url": "solrdocument.getchilddocuments",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getchilddocumentscount": {
        "name": "getChildDocumentsCount",
        "url": "solrdocument.getchilddocumentscount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getfield": {
        "name": "getField",
        "url": "solrdocument.getfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "SolrDocumentField",
          "ref": null
        }
      },
      "getfieldcount": {
        "name": "getFieldCount",
        "url": "solrdocument.getfieldcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getfieldnames": {
        "name": "getFieldNames",
        "url": "solrdocument.getfieldnames",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getinputdocument": {
        "name": "getInputDocument",
        "url": "solrdocument.getinputdocument",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SolrInputDocument",
          "ref": null
        }
      },
      "haschilddocuments": {
        "name": "hasChildDocuments",
        "url": "solrdocument.haschilddocuments",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "solrdocument.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "merge": {
        "name": "merge",
        "url": "solrdocument.merge",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SolrDocument $sourceDoc [, bool $overwrite = TRUE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "solrdocument.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetexists": {
        "name": "offsetExists",
        "url": "solrdocument.offsetexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "bool",
          "ref": null
        }
      },
      "offsetget": {
        "name": "offsetGet",
        "url": "solrdocument.offsetget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "SolrDocumentField",
          "ref": null
        }
      },
      "offsetset": {
        "name": "offsetSet",
        "url": "solrdocument.offsetset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName, string $fieldValue",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetunset": {
        "name": "offsetUnset",
        "url": "solrdocument.offsetunset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "void",
          "ref": null
        }
      },
      "reset": {
        "name": "reset",
        "url": "solrdocument.reset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "solrdocument.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "serialize": {
        "name": "serialize",
        "url": "solrdocument.serialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "sort": {
        "name": "sort",
        "url": "solrdocument.sort",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $sortOrderBy [, int $sortDirection = SolrDocument::SORT_ASC ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "toarray": {
        "name": "toArray",
        "url": "solrdocument.toarray",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "unserialize": {
        "name": "unserialize",
        "url": "solrdocument.unserialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $serialized",
          "returnValue": "void",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "solrdocument.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "solrdocument.clone",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "solrdocument.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrdocument.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__get": {
        "name": "__get",
        "url": "solrdocument.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "SolrDocumentField",
          "ref": null
        }
      },
      "__isset": {
        "name": "__isset",
        "url": "solrdocument.isset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__set": {
        "name": "__set",
        "url": "solrdocument.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName, string $fieldValue",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__unset": {
        "name": "__unset",
        "url": "solrdocument.unset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "solrdocumentfield": {
    "name": "SolrDocumentField",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "solrdocumentfield.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrdocumentfield.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrexception": {
    "name": "SolrException",
    "methods": {
      "getinternalinfo": {
        "name": "getInternalInfo",
        "url": "solrexception.getinternalinfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      }
    }
  },
  "solrgenericresponse": {
    "name": "SolrGenericResponse",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "solrgenericresponse.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrgenericresponse.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrillegalargumentexception": {
    "name": "SolrIllegalArgumentException",
    "methods": {
      "getinternalinfo": {
        "name": "getInternalInfo",
        "url": "solrillegalargumentexception.getinternalinfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      }
    }
  },
  "solrillegaloperationexception": {
    "name": "SolrIllegalOperationException",
    "methods": {
      "getinternalinfo": {
        "name": "getInternalInfo",
        "url": "solrillegaloperationexception.getinternalinfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      }
    }
  },
  "solrinputdocument": {
    "name": "SolrInputDocument",
    "methods": {
      "addchilddocument": {
        "name": "addChildDocument",
        "url": "solrinputdocument.addchilddocument",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SolrInputDocument $child",
          "returnValue": "void",
          "ref": null
        }
      },
      "addchilddocuments": {
        "name": "addChildDocuments",
        "url": "solrinputdocument.addchilddocuments",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array &$docs",
          "returnValue": "void",
          "ref": null
        }
      },
      "addfield": {
        "name": "addField",
        "url": "solrinputdocument.addfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName, string $fieldValue [, float $fieldBoostValue = 0.0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "clear": {
        "name": "clear",
        "url": "solrinputdocument.clear",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "deletefield": {
        "name": "deleteField",
        "url": "solrinputdocument.deletefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "bool",
          "ref": null
        }
      },
      "fieldexists": {
        "name": "fieldExists",
        "url": "solrinputdocument.fieldexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getboost": {
        "name": "getBoost",
        "url": "solrinputdocument.getboost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getchilddocuments": {
        "name": "getChildDocuments",
        "url": "solrinputdocument.getchilddocuments",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getchilddocumentscount": {
        "name": "getChildDocumentsCount",
        "url": "solrinputdocument.getchilddocumentscount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getfield": {
        "name": "getField",
        "url": "solrinputdocument.getfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "SolrDocumentField",
          "ref": null
        }
      },
      "getfieldboost": {
        "name": "getFieldBoost",
        "url": "solrinputdocument.getfieldboost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName",
          "returnValue": "float",
          "ref": null
        }
      },
      "getfieldcount": {
        "name": "getFieldCount",
        "url": "solrinputdocument.getfieldcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getfieldnames": {
        "name": "getFieldNames",
        "url": "solrinputdocument.getfieldnames",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "haschilddocuments": {
        "name": "hasChildDocuments",
        "url": "solrinputdocument.haschilddocuments",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "merge": {
        "name": "merge",
        "url": "solrinputdocument.merge",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SolrInputDocument $sourceDoc [, bool $overwrite = TRUE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "reset": {
        "name": "reset",
        "url": "solrinputdocument.reset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setboost": {
        "name": "setBoost",
        "url": "solrinputdocument.setboost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $documentBoostValue",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setfieldboost": {
        "name": "setFieldBoost",
        "url": "solrinputdocument.setfieldboost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldName, float $fieldBoostValue",
          "returnValue": "bool",
          "ref": null
        }
      },
      "sort": {
        "name": "sort",
        "url": "solrinputdocument.sort",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $sortOrderBy [, int $sortDirection = SolrInputDocument::SORT_ASC ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "toarray": {
        "name": "toArray",
        "url": "solrinputdocument.toarray",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "__clone": {
        "name": "__clone",
        "url": "solrinputdocument.clone",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "solrinputdocument.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrinputdocument.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrmodifiableparams": {
    "name": "SolrModifiableParams",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "solrmodifiableparams.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrmodifiableparams.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrobject": {
    "name": "SolrObject",
    "methods": {
      "getpropertynames": {
        "name": "getPropertyNames",
        "url": "solrobject.getpropertynames",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "offsetexists": {
        "name": "offsetExists",
        "url": "solrobject.offsetexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $property_name",
          "returnValue": "bool",
          "ref": null
        }
      },
      "offsetget": {
        "name": "offsetGet",
        "url": "solrobject.offsetget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $property_name",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "offsetset": {
        "name": "offsetSet",
        "url": "solrobject.offsetset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $property_name, string $property_value",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetunset": {
        "name": "offsetUnset",
        "url": "solrobject.offsetunset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $property_name",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "solrobject.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrobject.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrparams": {
    "name": "SolrParams",
    "methods": {
      "add": {
        "name": "add",
        "url": "solrparams.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $name, string $value",
          "returnValue": "SolrParams",
          "ref": null
        }
      },
      "addparam": {
        "name": "addParam",
        "url": "solrparams.addparam",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $value",
          "returnValue": "SolrParams",
          "ref": null
        }
      },
      "get": {
        "name": "get",
        "url": "solrparams.get",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $param_name",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getparam": {
        "name": "getParam",
        "url": "solrparams.getparam",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "[ string $param_name ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getparams": {
        "name": "getParams",
        "url": "solrparams.getparams",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getpreparedparams": {
        "name": "getPreparedParams",
        "url": "solrparams.getpreparedparams",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "serialize": {
        "name": "serialize",
        "url": "solrparams.serialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "set": {
        "name": "set",
        "url": "solrparams.set",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $name, string $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "setparam": {
        "name": "setParam",
        "url": "solrparams.setparam",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, string $value",
          "returnValue": "SolrParams",
          "ref": null
        }
      },
      "tostring": {
        "name": "toString",
        "url": "solrparams.tostring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "[ bool $url_encode = FALSE ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "unserialize": {
        "name": "unserialize",
        "url": "solrparams.unserialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": true,
          "isStatic": false,
          "parameters": "string $serialized",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrpingresponse": {
    "name": "SolrPingResponse",
    "methods": {
      "getresponse": {
        "name": "getResponse",
        "url": "solrpingresponse.getresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "solrpingresponse.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrpingresponse.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrquery": {
    "name": "SolrQuery",
    "methods": {
      "addexpandfilterquery": {
        "name": "addExpandFilterQuery",
        "url": "solrquery.addexpandfilterquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fq",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addexpandsortfield": {
        "name": "addExpandSortField",
        "url": "solrquery.addexpandsortfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field [, string $order ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addfacetdatefield": {
        "name": "addFacetDateField",
        "url": "solrquery.addfacetdatefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $dateField",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addfacetdateother": {
        "name": "addFacetDateOther",
        "url": "solrquery.addfacetdateother",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addfacetfield": {
        "name": "addFacetField",
        "url": "solrquery.addfacetfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addfacetquery": {
        "name": "addFacetQuery",
        "url": "solrquery.addfacetquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $facetQuery",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addfield": {
        "name": "addField",
        "url": "solrquery.addfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addfilterquery": {
        "name": "addFilterQuery",
        "url": "solrquery.addfilterquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fq",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addgroupfield": {
        "name": "addGroupField",
        "url": "solrquery.addgroupfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addgroupfunction": {
        "name": "addGroupFunction",
        "url": "solrquery.addgroupfunction",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addgroupquery": {
        "name": "addGroupQuery",
        "url": "solrquery.addgroupquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addgroupsortfield": {
        "name": "addGroupSortField",
        "url": "solrquery.addgroupsortfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field [, int $order ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addhighlightfield": {
        "name": "addHighlightField",
        "url": "solrquery.addhighlightfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addmltfield": {
        "name": "addMltField",
        "url": "solrquery.addmltfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addmltqueryfield": {
        "name": "addMltQueryField",
        "url": "solrquery.addmltqueryfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field, float $boost",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addsortfield": {
        "name": "addSortField",
        "url": "solrquery.addsortfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field [, int $order = SolrQuery::ORDER_DESC ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addstatsfacet": {
        "name": "addStatsFacet",
        "url": "solrquery.addstatsfacet",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "addstatsfield": {
        "name": "addStatsField",
        "url": "solrquery.addstatsfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "collapse": {
        "name": "collapse",
        "url": "solrquery.collapse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SolrCollapseFunction $collapseFunction",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "getexpand": {
        "name": "getExpand",
        "url": "solrquery.getexpand",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getexpandfilterqueries": {
        "name": "getExpandFilterQueries",
        "url": "solrquery.getexpandfilterqueries",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getexpandquery": {
        "name": "getExpandQuery",
        "url": "solrquery.getexpandquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getexpandrows": {
        "name": "getExpandRows",
        "url": "solrquery.getexpandrows",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getexpandsortfields": {
        "name": "getExpandSortFields",
        "url": "solrquery.getexpandsortfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getfacet": {
        "name": "getFacet",
        "url": "solrquery.getfacet",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getfacetdateend": {
        "name": "getFacetDateEnd",
        "url": "solrquery.getfacetdateend",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getfacetdatefields": {
        "name": "getFacetDateFields",
        "url": "solrquery.getfacetdatefields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getfacetdategap": {
        "name": "getFacetDateGap",
        "url": "solrquery.getfacetdategap",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getfacetdatehardend": {
        "name": "getFacetDateHardEnd",
        "url": "solrquery.getfacetdatehardend",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getfacetdateother": {
        "name": "getFacetDateOther",
        "url": "solrquery.getfacetdateother",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "getfacetdatestart": {
        "name": "getFacetDateStart",
        "url": "solrquery.getfacetdatestart",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getfacetfields": {
        "name": "getFacetFields",
        "url": "solrquery.getfacetfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getfacetlimit": {
        "name": "getFacetLimit",
        "url": "solrquery.getfacetlimit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "getfacetmethod": {
        "name": "getFacetMethod",
        "url": "solrquery.getfacetmethod",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getfacetmincount": {
        "name": "getFacetMinCount",
        "url": "solrquery.getfacetmincount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "getfacetmissing": {
        "name": "getFacetMissing",
        "url": "solrquery.getfacetmissing",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getfacetoffset": {
        "name": "getFacetOffset",
        "url": "solrquery.getfacetoffset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "getfacetprefix": {
        "name": "getFacetPrefix",
        "url": "solrquery.getfacetprefix",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getfacetqueries": {
        "name": "getFacetQueries",
        "url": "solrquery.getfacetqueries",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getfacetsort": {
        "name": "getFacetSort",
        "url": "solrquery.getfacetsort",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "getfields": {
        "name": "getFields",
        "url": "solrquery.getfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getfilterqueries": {
        "name": "getFilterQueries",
        "url": "solrquery.getfilterqueries",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getgroup": {
        "name": "getGroup",
        "url": "solrquery.getgroup",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getgroupcachepercent": {
        "name": "getGroupCachePercent",
        "url": "solrquery.getgroupcachepercent",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getgroupfacet": {
        "name": "getGroupFacet",
        "url": "solrquery.getgroupfacet",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getgroupfields": {
        "name": "getGroupFields",
        "url": "solrquery.getgroupfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getgroupformat": {
        "name": "getGroupFormat",
        "url": "solrquery.getgroupformat",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getgroupfunctions": {
        "name": "getGroupFunctions",
        "url": "solrquery.getgroupfunctions",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getgrouplimit": {
        "name": "getGroupLimit",
        "url": "solrquery.getgrouplimit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getgroupmain": {
        "name": "getGroupMain",
        "url": "solrquery.getgroupmain",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getgroupngroups": {
        "name": "getGroupNGroups",
        "url": "solrquery.getgroupngroups",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getgroupoffset": {
        "name": "getGroupOffset",
        "url": "solrquery.getgroupoffset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getgroupqueries": {
        "name": "getGroupQueries",
        "url": "solrquery.getgroupqueries",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getgroupsortfields": {
        "name": "getGroupSortFields",
        "url": "solrquery.getgroupsortfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getgrouptruncate": {
        "name": "getGroupTruncate",
        "url": "solrquery.getgrouptruncate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gethighlight": {
        "name": "getHighlight",
        "url": "solrquery.gethighlight",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gethighlightalternatefield": {
        "name": "getHighlightAlternateField",
        "url": "solrquery.gethighlightalternatefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "gethighlightfields": {
        "name": "getHighlightFields",
        "url": "solrquery.gethighlightfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "gethighlightformatter": {
        "name": "getHighlightFormatter",
        "url": "solrquery.gethighlightformatter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "gethighlightfragmenter": {
        "name": "getHighlightFragmenter",
        "url": "solrquery.gethighlightfragmenter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "gethighlightfragsize": {
        "name": "getHighlightFragsize",
        "url": "solrquery.gethighlightfragsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "gethighlighthighlightmultiterm": {
        "name": "getHighlightHighlightMultiTerm",
        "url": "solrquery.gethighlighthighlightmultiterm",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gethighlightmaxalternatefieldlength": {
        "name": "getHighlightMaxAlternateFieldLength",
        "url": "solrquery.gethighlightmaxalternatefieldlength",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "gethighlightmaxanalyzedchars": {
        "name": "getHighlightMaxAnalyzedChars",
        "url": "solrquery.gethighlightmaxanalyzedchars",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "gethighlightmergecontiguous": {
        "name": "getHighlightMergeContiguous",
        "url": "solrquery.gethighlightmergecontiguous",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gethighlightregexmaxanalyzedchars": {
        "name": "getHighlightRegexMaxAnalyzedChars",
        "url": "solrquery.gethighlightregexmaxanalyzedchars",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "gethighlightregexpattern": {
        "name": "getHighlightRegexPattern",
        "url": "solrquery.gethighlightregexpattern",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "gethighlightregexslop": {
        "name": "getHighlightRegexSlop",
        "url": "solrquery.gethighlightregexslop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "gethighlightrequirefieldmatch": {
        "name": "getHighlightRequireFieldMatch",
        "url": "solrquery.gethighlightrequirefieldmatch",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gethighlightsimplepost": {
        "name": "getHighlightSimplePost",
        "url": "solrquery.gethighlightsimplepost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "gethighlightsimplepre": {
        "name": "getHighlightSimplePre",
        "url": "solrquery.gethighlightsimplepre",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "gethighlightsnippets": {
        "name": "getHighlightSnippets",
        "url": "solrquery.gethighlightsnippets",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $field_override ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "gethighlightusephrasehighlighter": {
        "name": "getHighlightUsePhraseHighlighter",
        "url": "solrquery.gethighlightusephrasehighlighter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getmlt": {
        "name": "getMlt",
        "url": "solrquery.getmlt",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getmltboost": {
        "name": "getMltBoost",
        "url": "solrquery.getmltboost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getmltcount": {
        "name": "getMltCount",
        "url": "solrquery.getmltcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmltfields": {
        "name": "getMltFields",
        "url": "solrquery.getmltfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getmltmaxnumqueryterms": {
        "name": "getMltMaxNumQueryTerms",
        "url": "solrquery.getmltmaxnumqueryterms",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmltmaxnumtokens": {
        "name": "getMltMaxNumTokens",
        "url": "solrquery.getmltmaxnumtokens",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmltmaxwordlength": {
        "name": "getMltMaxWordLength",
        "url": "solrquery.getmltmaxwordlength",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmltmindocfrequency": {
        "name": "getMltMinDocFrequency",
        "url": "solrquery.getmltmindocfrequency",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmltmintermfrequency": {
        "name": "getMltMinTermFrequency",
        "url": "solrquery.getmltmintermfrequency",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmltminwordlength": {
        "name": "getMltMinWordLength",
        "url": "solrquery.getmltminwordlength",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmltqueryfields": {
        "name": "getMltQueryFields",
        "url": "solrquery.getmltqueryfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getquery": {
        "name": "getQuery",
        "url": "solrquery.getquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrows": {
        "name": "getRows",
        "url": "solrquery.getrows",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getsortfields": {
        "name": "getSortFields",
        "url": "solrquery.getsortfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getstart": {
        "name": "getStart",
        "url": "solrquery.getstart",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getstats": {
        "name": "getStats",
        "url": "solrquery.getstats",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getstatsfacets": {
        "name": "getStatsFacets",
        "url": "solrquery.getstatsfacets",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getstatsfields": {
        "name": "getStatsFields",
        "url": "solrquery.getstatsfields",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getterms": {
        "name": "getTerms",
        "url": "solrquery.getterms",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gettermsfield": {
        "name": "getTermsField",
        "url": "solrquery.gettermsfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "gettermsincludelowerbound": {
        "name": "getTermsIncludeLowerBound",
        "url": "solrquery.gettermsincludelowerbound",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gettermsincludeupperbound": {
        "name": "getTermsIncludeUpperBound",
        "url": "solrquery.gettermsincludeupperbound",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gettermslimit": {
        "name": "getTermsLimit",
        "url": "solrquery.gettermslimit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "gettermslowerbound": {
        "name": "getTermsLowerBound",
        "url": "solrquery.gettermslowerbound",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "gettermsmaxcount": {
        "name": "getTermsMaxCount",
        "url": "solrquery.gettermsmaxcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "gettermsmincount": {
        "name": "getTermsMinCount",
        "url": "solrquery.gettermsmincount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "gettermsprefix": {
        "name": "getTermsPrefix",
        "url": "solrquery.gettermsprefix",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "gettermsreturnraw": {
        "name": "getTermsReturnRaw",
        "url": "solrquery.gettermsreturnraw",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "gettermssort": {
        "name": "getTermsSort",
        "url": "solrquery.gettermssort",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "gettermsupperbound": {
        "name": "getTermsUpperBound",
        "url": "solrquery.gettermsupperbound",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "gettimeallowed": {
        "name": "getTimeAllowed",
        "url": "solrquery.gettimeallowed",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "removeexpandfilterquery": {
        "name": "removeExpandFilterQuery",
        "url": "solrquery.removeexpandfilterquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fq",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removeexpandsortfield": {
        "name": "removeExpandSortField",
        "url": "solrquery.removeexpandsortfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removefacetdatefield": {
        "name": "removeFacetDateField",
        "url": "solrquery.removefacetdatefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removefacetdateother": {
        "name": "removeFacetDateOther",
        "url": "solrquery.removefacetdateother",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removefacetfield": {
        "name": "removeFacetField",
        "url": "solrquery.removefacetfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removefacetquery": {
        "name": "removeFacetQuery",
        "url": "solrquery.removefacetquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removefield": {
        "name": "removeField",
        "url": "solrquery.removefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removefilterquery": {
        "name": "removeFilterQuery",
        "url": "solrquery.removefilterquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fq",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removehighlightfield": {
        "name": "removeHighlightField",
        "url": "solrquery.removehighlightfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removemltfield": {
        "name": "removeMltField",
        "url": "solrquery.removemltfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removemltqueryfield": {
        "name": "removeMltQueryField",
        "url": "solrquery.removemltqueryfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $queryField",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removesortfield": {
        "name": "removeSortField",
        "url": "solrquery.removesortfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removestatsfacet": {
        "name": "removeStatsFacet",
        "url": "solrquery.removestatsfacet",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "removestatsfield": {
        "name": "removeStatsField",
        "url": "solrquery.removestatsfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setechohandler": {
        "name": "setEchoHandler",
        "url": "solrquery.setechohandler",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setechoparams": {
        "name": "setEchoParams",
        "url": "solrquery.setechoparams",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $type",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setexpand": {
        "name": "setExpand",
        "url": "solrquery.setexpand",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setexpandquery": {
        "name": "setExpandQuery",
        "url": "solrquery.setexpandquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $q",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setexpandrows": {
        "name": "setExpandRows",
        "url": "solrquery.setexpandrows",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setexplainother": {
        "name": "setExplainOther",
        "url": "solrquery.setexplainother",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacet": {
        "name": "setFacet",
        "url": "solrquery.setfacet",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetdateend": {
        "name": "setFacetDateEnd",
        "url": "solrquery.setfacetdateend",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetdategap": {
        "name": "setFacetDateGap",
        "url": "solrquery.setfacetdategap",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetdatehardend": {
        "name": "setFacetDateHardEnd",
        "url": "solrquery.setfacetdatehardend",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $value [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetdatestart": {
        "name": "setFacetDateStart",
        "url": "solrquery.setfacetdatestart",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetenumcachemindefaultfrequency": {
        "name": "setFacetEnumCacheMinDefaultFrequency",
        "url": "solrquery.setfacetenumcachemindefaultfrequency",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $frequency [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetlimit": {
        "name": "setFacetLimit",
        "url": "solrquery.setfacetlimit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $limit [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetmethod": {
        "name": "setFacetMethod",
        "url": "solrquery.setfacetmethod",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $method [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetmincount": {
        "name": "setFacetMinCount",
        "url": "solrquery.setfacetmincount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $mincount [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetmissing": {
        "name": "setFacetMissing",
        "url": "solrquery.setfacetmissing",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetoffset": {
        "name": "setFacetOffset",
        "url": "solrquery.setfacetoffset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $offset [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetprefix": {
        "name": "setFacetPrefix",
        "url": "solrquery.setfacetprefix",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $prefix [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setfacetsort": {
        "name": "setFacetSort",
        "url": "solrquery.setfacetsort",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $facetSort [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setgroup": {
        "name": "setGroup",
        "url": "solrquery.setgroup",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setgroupcachepercent": {
        "name": "setGroupCachePercent",
        "url": "solrquery.setgroupcachepercent",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $percent",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setgroupfacet": {
        "name": "setGroupFacet",
        "url": "solrquery.setgroupfacet",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setgroupformat": {
        "name": "setGroupFormat",
        "url": "solrquery.setgroupformat",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setgrouplimit": {
        "name": "setGroupLimit",
        "url": "solrquery.setgrouplimit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setgroupmain": {
        "name": "setGroupMain",
        "url": "solrquery.setgroupmain",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setgroupngroups": {
        "name": "setGroupNGroups",
        "url": "solrquery.setgroupngroups",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setgroupoffset": {
        "name": "setGroupOffset",
        "url": "solrquery.setgroupoffset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setgrouptruncate": {
        "name": "setGroupTruncate",
        "url": "solrquery.setgrouptruncate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlight": {
        "name": "setHighlight",
        "url": "solrquery.sethighlight",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightalternatefield": {
        "name": "setHighlightAlternateField",
        "url": "solrquery.sethighlightalternatefield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $field [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightformatter": {
        "name": "setHighlightFormatter",
        "url": "solrquery.sethighlightformatter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $formatter [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightfragmenter": {
        "name": "setHighlightFragmenter",
        "url": "solrquery.sethighlightfragmenter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fragmenter [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightfragsize": {
        "name": "setHighlightFragsize",
        "url": "solrquery.sethighlightfragsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlighthighlightmultiterm": {
        "name": "setHighlightHighlightMultiTerm",
        "url": "solrquery.sethighlighthighlightmultiterm",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightmaxalternatefieldlength": {
        "name": "setHighlightMaxAlternateFieldLength",
        "url": "solrquery.sethighlightmaxalternatefieldlength",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $fieldLength [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightmaxanalyzedchars": {
        "name": "setHighlightMaxAnalyzedChars",
        "url": "solrquery.sethighlightmaxanalyzedchars",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightmergecontiguous": {
        "name": "setHighlightMergeContiguous",
        "url": "solrquery.sethighlightmergecontiguous",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightregexmaxanalyzedchars": {
        "name": "setHighlightRegexMaxAnalyzedChars",
        "url": "solrquery.sethighlightregexmaxanalyzedchars",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $maxAnalyzedChars",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightregexpattern": {
        "name": "setHighlightRegexPattern",
        "url": "solrquery.sethighlightregexpattern",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightregexslop": {
        "name": "setHighlightRegexSlop",
        "url": "solrquery.sethighlightregexslop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $factor",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightrequirefieldmatch": {
        "name": "setHighlightRequireFieldMatch",
        "url": "solrquery.sethighlightrequirefieldmatch",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightsimplepost": {
        "name": "setHighlightSimplePost",
        "url": "solrquery.sethighlightsimplepost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $simplePost [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightsimplepre": {
        "name": "setHighlightSimplePre",
        "url": "solrquery.sethighlightsimplepre",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $simplePre [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightsnippets": {
        "name": "setHighlightSnippets",
        "url": "solrquery.sethighlightsnippets",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value [, string $field_override ]",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "sethighlightusephrasehighlighter": {
        "name": "setHighlightUsePhraseHighlighter",
        "url": "solrquery.sethighlightusephrasehighlighter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setmlt": {
        "name": "setMlt",
        "url": "solrquery.setmlt",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setmltboost": {
        "name": "setMltBoost",
        "url": "solrquery.setmltboost",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setmltcount": {
        "name": "setMltCount",
        "url": "solrquery.setmltcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $count",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setmltmaxnumqueryterms": {
        "name": "setMltMaxNumQueryTerms",
        "url": "solrquery.setmltmaxnumqueryterms",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setmltmaxnumtokens": {
        "name": "setMltMaxNumTokens",
        "url": "solrquery.setmltmaxnumtokens",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $value",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setmltmaxwordlength": {
        "name": "setMltMaxWordLength",
        "url": "solrquery.setmltmaxwordlength",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $maxWordLength",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setmltmindocfrequency": {
        "name": "setMltMinDocFrequency",
        "url": "solrquery.setmltmindocfrequency",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $minDocFrequency",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setmltmintermfrequency": {
        "name": "setMltMinTermFrequency",
        "url": "solrquery.setmltmintermfrequency",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $minTermFrequency",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setmltminwordlength": {
        "name": "setMltMinWordLength",
        "url": "solrquery.setmltminwordlength",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $minWordLength",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setomitheader": {
        "name": "setOmitHeader",
        "url": "solrquery.setomitheader",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setquery": {
        "name": "setQuery",
        "url": "solrquery.setquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setrows": {
        "name": "setRows",
        "url": "solrquery.setrows",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $rows",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setshowdebuginfo": {
        "name": "setShowDebugInfo",
        "url": "solrquery.setshowdebuginfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setstart": {
        "name": "setStart",
        "url": "solrquery.setstart",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $start",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setstats": {
        "name": "setStats",
        "url": "solrquery.setstats",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "setterms": {
        "name": "setTerms",
        "url": "solrquery.setterms",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermsfield": {
        "name": "setTermsField",
        "url": "solrquery.settermsfield",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $fieldname",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermsincludelowerbound": {
        "name": "setTermsIncludeLowerBound",
        "url": "solrquery.settermsincludelowerbound",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermsincludeupperbound": {
        "name": "setTermsIncludeUpperBound",
        "url": "solrquery.settermsincludeupperbound",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermslimit": {
        "name": "setTermsLimit",
        "url": "solrquery.settermslimit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $limit",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermslowerbound": {
        "name": "setTermsLowerBound",
        "url": "solrquery.settermslowerbound",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $lowerBound",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermsmaxcount": {
        "name": "setTermsMaxCount",
        "url": "solrquery.settermsmaxcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $frequency",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermsmincount": {
        "name": "setTermsMinCount",
        "url": "solrquery.settermsmincount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $frequency",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermsprefix": {
        "name": "setTermsPrefix",
        "url": "solrquery.settermsprefix",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $prefix",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermsreturnraw": {
        "name": "setTermsReturnRaw",
        "url": "solrquery.settermsreturnraw",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $flag",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermssort": {
        "name": "setTermsSort",
        "url": "solrquery.settermssort",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $sortType",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settermsupperbound": {
        "name": "setTermsUpperBound",
        "url": "solrquery.settermsupperbound",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $upperBound",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "settimeallowed": {
        "name": "setTimeAllowed",
        "url": "solrquery.settimeallowed",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $timeAllowed",
          "returnValue": "SolrQuery",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "solrquery.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $q ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrquery.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrqueryresponse": {
    "name": "SolrQueryResponse",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "solrqueryresponse.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrqueryresponse.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrresponse": {
    "name": "SolrResponse",
    "methods": {
      "getdigestedresponse": {
        "name": "getDigestedResponse",
        "url": "solrresponse.getdigestedresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "gethttpstatus": {
        "name": "getHttpStatus",
        "url": "solrresponse.gethttpstatus",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "gethttpstatusmessage": {
        "name": "getHttpStatusMessage",
        "url": "solrresponse.gethttpstatusmessage",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrawrequest": {
        "name": "getRawRequest",
        "url": "solrresponse.getrawrequest",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrawrequestheaders": {
        "name": "getRawRequestHeaders",
        "url": "solrresponse.getrawrequestheaders",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrawresponse": {
        "name": "getRawResponse",
        "url": "solrresponse.getrawresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrawresponseheaders": {
        "name": "getRawResponseHeaders",
        "url": "solrresponse.getrawresponseheaders",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getrequesturl": {
        "name": "getRequestUrl",
        "url": "solrresponse.getrequesturl",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getresponse": {
        "name": "getResponse",
        "url": "solrresponse.getresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SolrObject",
          "ref": null
        }
      },
      "setparsemode": {
        "name": "setParseMode",
        "url": "solrresponse.setparsemode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $parser_mode = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "success": {
        "name": "success",
        "url": "solrresponse.success",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "solrserverexception": {
    "name": "SolrServerException",
    "methods": {
      "getinternalinfo": {
        "name": "getInternalInfo",
        "url": "solrserverexception.getinternalinfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      }
    }
  },
  "solrupdateresponse": {
    "name": "SolrUpdateResponse",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "solrupdateresponse.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "solrupdateresponse.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "solrutils": {
    "name": "SolrUtils",
    "methods": {
      "digestxmlresponse": {
        "name": "digestXmlResponse",
        "url": "solrutils.digestxmlresponse",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $xmlresponse [, int $parse_mode = 0 ]",
          "returnValue": "SolrObject",
          "ref": null
        }
      },
      "escapequerychars": {
        "name": "escapeQueryChars",
        "url": "solrutils.escapequerychars",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $str",
          "returnValue": "string",
          "ref": null
        }
      },
      "getsolrversion": {
        "name": "getSolrVersion",
        "url": "solrutils.getsolrversion",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "queryphrase": {
        "name": "queryPhrase",
        "url": "solrutils.queryphrase",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $str",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "sphinxclient": {
    "name": "SphinxClient",
    "methods": {
      "addquery": {
        "name": "addQuery",
        "url": "sphinxclient.addquery",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query [, string $index = \"*\" [, string $comment = \"\" ]]",
          "returnValue": "int",
          "ref": null
        }
      },
      "buildexcerpts": {
        "name": "buildExcerpts",
        "url": "sphinxclient.buildexcerpts",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $docs, string $index, string $words [, array $opts ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "buildkeywords": {
        "name": "buildKeywords",
        "url": "sphinxclient.buildkeywords",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query, string $index, bool $hits",
          "returnValue": "array",
          "ref": null
        }
      },
      "close": {
        "name": "close",
        "url": "sphinxclient.close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "escapestring": {
        "name": "escapeString",
        "url": "sphinxclient.escapestring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $string",
          "returnValue": "string",
          "ref": null
        }
      },
      "getlasterror": {
        "name": "getLastError",
        "url": "sphinxclient.getlasterror",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getlastwarning": {
        "name": "getLastWarning",
        "url": "sphinxclient.getlastwarning",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "open": {
        "name": "open",
        "url": "sphinxclient.open",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "query": {
        "name": "query",
        "url": "sphinxclient.query",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query [, string $index = \"*\" [, string $comment = \"\" ]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "resetfilters": {
        "name": "resetFilters",
        "url": "sphinxclient.resetfilters",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "resetgroupby": {
        "name": "resetGroupBy",
        "url": "sphinxclient.resetgroupby",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "runqueries": {
        "name": "runQueries",
        "url": "sphinxclient.runqueries",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "setarrayresult": {
        "name": "setArrayResult",
        "url": "sphinxclient.setarrayresult",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "bool $array_result = FALSE",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setconnecttimeout": {
        "name": "setConnectTimeout",
        "url": "sphinxclient.setconnecttimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $timeout",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setfieldweights": {
        "name": "setFieldWeights",
        "url": "sphinxclient.setfieldweights",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $weights",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setfilter": {
        "name": "setFilter",
        "url": "sphinxclient.setfilter",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $attribute, array $values [, bool $exclude = FALSE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setfilterfloatrange": {
        "name": "setFilterFloatRange",
        "url": "sphinxclient.setfilterfloatrange",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $attribute, float $min, float $max [, bool $exclude = FALSE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setfilterrange": {
        "name": "setFilterRange",
        "url": "sphinxclient.setfilterrange",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $attribute, int $min, int $max [, bool $exclude = FALSE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setgeoanchor": {
        "name": "setGeoAnchor",
        "url": "sphinxclient.setgeoanchor",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $attrlat, string $attrlong, float $latitude, float $longitude",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setgroupby": {
        "name": "setGroupBy",
        "url": "sphinxclient.setgroupby",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $attribute, int $func [, string $groupsort = \"@group desc\" ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setgroupdistinct": {
        "name": "setGroupDistinct",
        "url": "sphinxclient.setgroupdistinct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $attribute",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setidrange": {
        "name": "setIDRange",
        "url": "sphinxclient.setidrange",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $min, int $max",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setindexweights": {
        "name": "setIndexWeights",
        "url": "sphinxclient.setindexweights",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $weights",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setlimits": {
        "name": "setLimits",
        "url": "sphinxclient.setlimits",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $offset, int $limit [, int $max_matches = 0 [, int $cutoff = 0 ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setmatchmode": {
        "name": "setMatchMode",
        "url": "sphinxclient.setmatchmode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $mode",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setmaxquerytime": {
        "name": "setMaxQueryTime",
        "url": "sphinxclient.setmaxquerytime",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $qtime",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setoverride": {
        "name": "setOverride",
        "url": "sphinxclient.setoverride",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $attribute, int $type, array $values",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setrankingmode": {
        "name": "setRankingMode",
        "url": "sphinxclient.setrankingmode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $ranker",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setretries": {
        "name": "setRetries",
        "url": "sphinxclient.setretries",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $count [, int $delay = 0 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setselect": {
        "name": "setSelect",
        "url": "sphinxclient.setselect",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $clause",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setserver": {
        "name": "setServer",
        "url": "sphinxclient.setserver",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $server, int $port",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setsortmode": {
        "name": "setSortMode",
        "url": "sphinxclient.setsortmode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $mode [, string $sortby ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "status": {
        "name": "status",
        "url": "sphinxclient.status",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "updateattributes": {
        "name": "updateAttributes",
        "url": "sphinxclient.updateattributes",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $index, array $attributes, array $values [, bool $mva = FALSE ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "sphinxclient.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "spldoublylinkedlist": {
    "name": "SplDoublyLinkedList",
    "methods": {
      "add": {
        "name": "add",
        "url": "spldoublylinkedlist.add",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $index, mixed $newval",
          "returnValue": "void",
          "ref": null
        }
      },
      "bottom": {
        "name": "bottom",
        "url": "spldoublylinkedlist.bottom",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "count": {
        "name": "count",
        "url": "spldoublylinkedlist.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "spldoublylinkedlist.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getiteratormode": {
        "name": "getIteratorMode",
        "url": "spldoublylinkedlist.getiteratormode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "isempty": {
        "name": "isEmpty",
        "url": "spldoublylinkedlist.isempty",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "spldoublylinkedlist.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "spldoublylinkedlist.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetexists": {
        "name": "offsetExists",
        "url": "spldoublylinkedlist.offsetexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $index",
          "returnValue": "bool",
          "ref": null
        }
      },
      "offsetget": {
        "name": "offsetGet",
        "url": "spldoublylinkedlist.offsetget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $index",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "offsetset": {
        "name": "offsetSet",
        "url": "spldoublylinkedlist.offsetset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $index, mixed $newval",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetunset": {
        "name": "offsetUnset",
        "url": "spldoublylinkedlist.offsetunset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $index",
          "returnValue": "void",
          "ref": null
        }
      },
      "pop": {
        "name": "pop",
        "url": "spldoublylinkedlist.pop",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "prev": {
        "name": "prev",
        "url": "spldoublylinkedlist.prev",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "push": {
        "name": "push",
        "url": "spldoublylinkedlist.push",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "spldoublylinkedlist.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "serialize": {
        "name": "serialize",
        "url": "spldoublylinkedlist.serialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "setiteratormode": {
        "name": "setIteratorMode",
        "url": "spldoublylinkedlist.setiteratormode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $mode",
          "returnValue": "void",
          "ref": null
        }
      },
      "shift": {
        "name": "shift",
        "url": "spldoublylinkedlist.shift",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "top": {
        "name": "top",
        "url": "spldoublylinkedlist.top",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "unserialize": {
        "name": "unserialize",
        "url": "spldoublylinkedlist.unserialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $serialized",
          "returnValue": "void",
          "ref": null
        }
      },
      "unshift": {
        "name": "unshift",
        "url": "spldoublylinkedlist.unshift",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "spldoublylinkedlist.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "spldoublylinkedlist.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "splenum": {
    "name": "SplEnum",
    "methods": {
      "getconstlist": {
        "name": "getConstList",
        "url": "splenum.getconstlist",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $include_default = FALSE ]",
          "returnValue": "array",
          "ref": null
        }
      }
    }
  },
  "splfileinfo": {
    "name": "SplFileInfo",
    "methods": {
      "getatime": {
        "name": "getATime",
        "url": "splfileinfo.getatime",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getbasename": {
        "name": "getBasename",
        "url": "splfileinfo.getbasename",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $suffix ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "getctime": {
        "name": "getCTime",
        "url": "splfileinfo.getctime",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getextension": {
        "name": "getExtension",
        "url": "splfileinfo.getextension",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getfileinfo": {
        "name": "getFileInfo",
        "url": "splfileinfo.getfileinfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $class_name ]",
          "returnValue": "SplFileInfo",
          "ref": null
        }
      },
      "getfilename": {
        "name": "getFilename",
        "url": "splfileinfo.getfilename",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getgroup": {
        "name": "getGroup",
        "url": "splfileinfo.getgroup",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getinode": {
        "name": "getInode",
        "url": "splfileinfo.getinode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getlinktarget": {
        "name": "getLinkTarget",
        "url": "splfileinfo.getlinktarget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getmtime": {
        "name": "getMTime",
        "url": "splfileinfo.getmtime",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getowner": {
        "name": "getOwner",
        "url": "splfileinfo.getowner",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getpath": {
        "name": "getPath",
        "url": "splfileinfo.getpath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getpathinfo": {
        "name": "getPathInfo",
        "url": "splfileinfo.getpathinfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $class_name ]",
          "returnValue": "SplFileInfo",
          "ref": null
        }
      },
      "getpathname": {
        "name": "getPathname",
        "url": "splfileinfo.getpathname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getperms": {
        "name": "getPerms",
        "url": "splfileinfo.getperms",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getrealpath": {
        "name": "getRealPath",
        "url": "splfileinfo.getrealpath",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getsize": {
        "name": "getSize",
        "url": "splfileinfo.getsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "gettype": {
        "name": "getType",
        "url": "splfileinfo.gettype",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "isdir": {
        "name": "isDir",
        "url": "splfileinfo.isdir",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isexecutable": {
        "name": "isExecutable",
        "url": "splfileinfo.isexecutable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isfile": {
        "name": "isFile",
        "url": "splfileinfo.isfile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "islink": {
        "name": "isLink",
        "url": "splfileinfo.islink",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isreadable": {
        "name": "isReadable",
        "url": "splfileinfo.isreadable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "iswritable": {
        "name": "isWritable",
        "url": "splfileinfo.iswritable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "openfile": {
        "name": "openFile",
        "url": "splfileinfo.openfile",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $open_mode = \"r\" [, bool $use_include_path = FALSE [, resource $context = NULL ]]]",
          "returnValue": "SplFileObject",
          "ref": null
        }
      },
      "setfileclass": {
        "name": "setFileClass",
        "url": "splfileinfo.setfileclass",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $class_name = \"SplFileObject\" ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setinfoclass": {
        "name": "setInfoClass",
        "url": "splfileinfo.setinfoclass",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $class_name = \"SplFileInfo\" ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "splfileinfo.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $file_name",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "splfileinfo.tostring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "splfileobject": {
    "name": "SplFileObject",
    "methods": {
      "current": {
        "name": "current",
        "url": "splfileobject.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string|array",
          "ref": null
        }
      },
      "eof": {
        "name": "eof",
        "url": "splfileobject.eof",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "fflush": {
        "name": "fflush",
        "url": "splfileobject.fflush",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "fgetc": {
        "name": "fgetc",
        "url": "splfileobject.fgetc",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "fgetcsv": {
        "name": "fgetcsv",
        "url": "splfileobject.fgetcsv",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $delimiter = \",\" [, string $enclosure = \"\\\"\" [, string $escape = \"\\\\\" ]]]",
          "returnValue": "array",
          "ref": null
        }
      },
      "fgets": {
        "name": "fgets",
        "url": "splfileobject.fgets",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "fgetss": {
        "name": "fgetss",
        "url": "splfileobject.fgetss",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $allowable_tags ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "flock": {
        "name": "flock",
        "url": "splfileobject.flock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $operation [, int &$wouldblock ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "fpassthru": {
        "name": "fpassthru",
        "url": "splfileobject.fpassthru",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "fputcsv": {
        "name": "fputcsv",
        "url": "splfileobject.fputcsv",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $fields [, string $delimiter = \",\" [, string $enclosure = '\"' [, string $escape = \"\\\\\" ]]]",
          "returnValue": "int",
          "ref": null
        }
      },
      "fread": {
        "name": "fread",
        "url": "splfileobject.fread",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $length",
          "returnValue": "string",
          "ref": null
        }
      },
      "fscanf": {
        "name": "fscanf",
        "url": "splfileobject.fscanf",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $format [, mixed &$... ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "fseek": {
        "name": "fseek",
        "url": "splfileobject.fseek",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $offset [, int $whence = SEEK_SET ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "fstat": {
        "name": "fstat",
        "url": "splfileobject.fstat",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "ftell": {
        "name": "ftell",
        "url": "splfileobject.ftell",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "ftruncate": {
        "name": "ftruncate",
        "url": "splfileobject.ftruncate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size",
          "returnValue": "bool",
          "ref": null
        }
      },
      "fwrite": {
        "name": "fwrite",
        "url": "splfileobject.fwrite",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $str [, int $length ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "getchildren": {
        "name": "getChildren",
        "url": "splfileobject.getchildren",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getcsvcontrol": {
        "name": "getCsvControl",
        "url": "splfileobject.getcsvcontrol",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getcurrentline": {
        "name": "getCurrentLine",
        "url": "splfileobject.getcurrentline",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "",
          "returnValue": "",
          "ref": null
        }
      },
      "getflags": {
        "name": "getFlags",
        "url": "splfileobject.getflags",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getmaxlinelen": {
        "name": "getMaxLineLen",
        "url": "splfileobject.getmaxlinelen",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "haschildren": {
        "name": "hasChildren",
        "url": "splfileobject.haschildren",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "splfileobject.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "splfileobject.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "splfileobject.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "seek": {
        "name": "seek",
        "url": "splfileobject.seek",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $line_pos",
          "returnValue": "void",
          "ref": null
        }
      },
      "setcsvcontrol": {
        "name": "setCsvControl",
        "url": "splfileobject.setcsvcontrol",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $delimiter = \",\" [, string $enclosure = \"\\\"\" [, string $escape = \"\\\\\" ]]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setflags": {
        "name": "setFlags",
        "url": "splfileobject.setflags",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $flags",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmaxlinelen": {
        "name": "setMaxLineLen",
        "url": "splfileobject.setmaxlinelen",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $max_len",
          "returnValue": "void",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "splfileobject.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "splfileobject.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename [, string $open_mode = \"r\" [, bool $use_include_path = FALSE [, resource $context ]]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__tostring": {
        "name": "__toString",
        "url": "splfileobject.tostring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "splfixedarray": {
    "name": "SplFixedArray",
    "methods": {
      "count": {
        "name": "count",
        "url": "splfixedarray.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "splfixedarray.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "fromarray": {
        "name": "fromArray",
        "url": "splfixedarray.fromarray",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "array $array [, bool $save_indexes = TRUE ]",
          "returnValue": "SplFixedArray",
          "ref": null
        }
      },
      "getsize": {
        "name": "getSize",
        "url": "splfixedarray.getsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "splfixedarray.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "splfixedarray.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetexists": {
        "name": "offsetExists",
        "url": "splfixedarray.offsetexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index",
          "returnValue": "bool",
          "ref": null
        }
      },
      "offsetget": {
        "name": "offsetGet",
        "url": "splfixedarray.offsetget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "offsetset": {
        "name": "offsetSet",
        "url": "splfixedarray.offsetset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index, mixed $newval",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetunset": {
        "name": "offsetUnset",
        "url": "splfixedarray.offsetunset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $index",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "splfixedarray.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "setsize": {
        "name": "setSize",
        "url": "splfixedarray.setsize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $size",
          "returnValue": "bool",
          "ref": null
        }
      },
      "toarray": {
        "name": "toArray",
        "url": "splfixedarray.toarray",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "splfixedarray.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "splfixedarray.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $size = 0 ]",
          "returnValue": "",
          "ref": null
        }
      },
      "__wakeup": {
        "name": "__wakeup",
        "url": "splfixedarray.wakeup",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "splheap": {
    "name": "SplHeap",
    "methods": {
      "compare": {
        "name": "compare",
        "url": "splheap.compare",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value1, mixed $value2",
          "returnValue": "int",
          "ref": null
        }
      },
      "count": {
        "name": "count",
        "url": "splheap.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "splheap.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "extract": {
        "name": "extract",
        "url": "splheap.extract",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "insert": {
        "name": "insert",
        "url": "splheap.insert",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "iscorrupted": {
        "name": "isCorrupted",
        "url": "splheap.iscorrupted",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isempty": {
        "name": "isEmpty",
        "url": "splheap.isempty",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "splheap.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "splheap.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "recoverfromcorruption": {
        "name": "recoverFromCorruption",
        "url": "splheap.recoverfromcorruption",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "splheap.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "top": {
        "name": "top",
        "url": "splheap.top",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "splheap.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "splheap.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "splmaxheap": {
    "name": "SplMaxHeap",
    "methods": {
      "compare": {
        "name": "compare",
        "url": "splmaxheap.compare",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value1, mixed $value2",
          "returnValue": "int",
          "ref": null
        }
      }
    }
  },
  "splminheap": {
    "name": "SplMinHeap",
    "methods": {
      "compare": {
        "name": "compare",
        "url": "splminheap.compare",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": true,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value1, mixed $value2",
          "returnValue": "int",
          "ref": null
        }
      }
    }
  },
  "splobjectstorage": {
    "name": "SplObjectStorage",
    "methods": {
      "addall": {
        "name": "addAll",
        "url": "splobjectstorage.addall",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SplObjectStorage $storage",
          "returnValue": "void",
          "ref": null
        }
      },
      "attach": {
        "name": "attach",
        "url": "splobjectstorage.attach",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object [, mixed $data = NULL ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "contains": {
        "name": "contains",
        "url": "splobjectstorage.contains",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object",
          "returnValue": "bool",
          "ref": null
        }
      },
      "count": {
        "name": "count",
        "url": "splobjectstorage.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "splobjectstorage.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "object",
          "ref": null
        }
      },
      "detach": {
        "name": "detach",
        "url": "splobjectstorage.detach",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object",
          "returnValue": "void",
          "ref": null
        }
      },
      "gethash": {
        "name": "getHash",
        "url": "splobjectstorage.gethash",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object",
          "returnValue": "string",
          "ref": null
        }
      },
      "getinfo": {
        "name": "getInfo",
        "url": "splobjectstorage.getinfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "splobjectstorage.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "splobjectstorage.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetexists": {
        "name": "offsetExists",
        "url": "splobjectstorage.offsetexists",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object",
          "returnValue": "bool",
          "ref": null
        }
      },
      "offsetget": {
        "name": "offsetGet",
        "url": "splobjectstorage.offsetget",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "offsetset": {
        "name": "offsetSet",
        "url": "splobjectstorage.offsetset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object [, mixed $data = NULL ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "offsetunset": {
        "name": "offsetUnset",
        "url": "splobjectstorage.offsetunset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object",
          "returnValue": "void",
          "ref": null
        }
      },
      "removeall": {
        "name": "removeAll",
        "url": "splobjectstorage.removeall",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SplObjectStorage $storage",
          "returnValue": "void",
          "ref": null
        }
      },
      "removeallexcept": {
        "name": "removeAllExcept",
        "url": "splobjectstorage.removeallexcept",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SplObjectStorage $storage",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "splobjectstorage.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "serialize": {
        "name": "serialize",
        "url": "splobjectstorage.serialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "setinfo": {
        "name": "setInfo",
        "url": "splobjectstorage.setinfo",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $data",
          "returnValue": "void",
          "ref": null
        }
      },
      "unserialize": {
        "name": "unserialize",
        "url": "splobjectstorage.unserialize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $serialized",
          "returnValue": "void",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "splobjectstorage.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "splobserver": {
    "name": "SplObserver",
    "methods": {
      "update": {
        "name": "update",
        "url": "splobserver.update",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SplSubject $subject",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "splpriorityqueue": {
    "name": "SplPriorityQueue",
    "methods": {
      "compare": {
        "name": "compare",
        "url": "splpriorityqueue.compare",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $priority1, mixed $priority2",
          "returnValue": "int",
          "ref": null
        }
      },
      "count": {
        "name": "count",
        "url": "splpriorityqueue.count",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "current": {
        "name": "current",
        "url": "splpriorityqueue.current",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "extract": {
        "name": "extract",
        "url": "splpriorityqueue.extract",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "getextractflags": {
        "name": "getExtractFlags",
        "url": "splpriorityqueue.getextractflags",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "insert": {
        "name": "insert",
        "url": "splpriorityqueue.insert",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value, mixed $priority",
          "returnValue": "bool",
          "ref": null
        }
      },
      "iscorrupted": {
        "name": "isCorrupted",
        "url": "splpriorityqueue.iscorrupted",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "isempty": {
        "name": "isEmpty",
        "url": "splpriorityqueue.isempty",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "key": {
        "name": "key",
        "url": "splpriorityqueue.key",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "next": {
        "name": "next",
        "url": "splpriorityqueue.next",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "recoverfromcorruption": {
        "name": "recoverFromCorruption",
        "url": "splpriorityqueue.recoverfromcorruption",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "rewind": {
        "name": "rewind",
        "url": "splpriorityqueue.rewind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "setextractflags": {
        "name": "setExtractFlags",
        "url": "splpriorityqueue.setextractflags",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $flags",
          "returnValue": "void",
          "ref": null
        }
      },
      "top": {
        "name": "top",
        "url": "splpriorityqueue.top",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "valid": {
        "name": "valid",
        "url": "splpriorityqueue.valid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "splpriorityqueue.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "splqueue": {
    "name": "SplQueue",
    "methods": {
      "dequeue": {
        "name": "dequeue",
        "url": "splqueue.dequeue",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "enqueue": {
        "name": "enqueue",
        "url": "splqueue.enqueue",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $value",
          "returnValue": "void",
          "ref": null
        }
      },
      "setiteratormode": {
        "name": "setIteratorMode",
        "url": "splqueue.setiteratormode",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $mode",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "splqueue.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "splstack": {
    "name": "SplStack",
    "methods": {
      "setiteratormode": {
        "name": "setIteratorMode",
        "url": "splstack.setiteratormode",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $mode",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "splstack.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "splsubject": {
    "name": "SplSubject",
    "methods": {
      "attach": {
        "name": "attach",
        "url": "splsubject.attach",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SplObserver $observer",
          "returnValue": "void",
          "ref": null
        }
      },
      "detach": {
        "name": "detach",
        "url": "splsubject.detach",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SplObserver $observer",
          "returnValue": "void",
          "ref": null
        }
      },
      "notify": {
        "name": "notify",
        "url": "splsubject.notify",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": true,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "spltempfileobject": {
    "name": "SplTempFileObject",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "spltempfileobject.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $max_memory ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "spltype": {
    "name": "SplType",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "spltype.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ mixed $initial_value [, bool $strict ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "spoofchecker": {
    "name": "Spoofchecker",
    "methods": {
      "areconfusable": {
        "name": "areConfusable",
        "url": "spoofchecker.areconfusable",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $str1, string $str2 [, string &$error ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "issuspicious": {
        "name": "isSuspicious",
        "url": "spoofchecker.issuspicious",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $text [, string &$error ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setallowedlocales": {
        "name": "setAllowedLocales",
        "url": "spoofchecker.setallowedlocales",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $locale_list",
          "returnValue": "void",
          "ref": null
        }
      },
      "setchecks": {
        "name": "setChecks",
        "url": "spoofchecker.setchecks",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "long $checks",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "spoofchecker.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "sqlite3": {
    "name": "SQLite3",
    "methods": {
      "busytimeout": {
        "name": "busyTimeout",
        "url": "sqlite3.busytimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $msecs",
          "returnValue": "bool",
          "ref": null
        }
      },
      "changes": {
        "name": "changes",
        "url": "sqlite3.changes",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "close": {
        "name": "close",
        "url": "sqlite3.close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "createaggregate": {
        "name": "createAggregate",
        "url": "sqlite3.createaggregate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, mixed $step_callback, mixed $final_callback [, int $argument_count = -1 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "createcollation": {
        "name": "createCollation",
        "url": "sqlite3.createcollation",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, callable $callback",
          "returnValue": "bool",
          "ref": null
        }
      },
      "createfunction": {
        "name": "createFunction",
        "url": "sqlite3.createfunction",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, mixed $callback [, int $argument_count = -1 [, int $flags = 0 ]]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "enableexceptions": {
        "name": "enableExceptions",
        "url": "sqlite3.enableexceptions",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $enableExceptions = FALSE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "escapestring": {
        "name": "escapeString",
        "url": "sqlite3.escapestring",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "string $value",
          "returnValue": "string",
          "ref": null
        }
      },
      "exec": {
        "name": "exec",
        "url": "sqlite3.exec",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "bool",
          "ref": null
        }
      },
      "lasterrorcode": {
        "name": "lastErrorCode",
        "url": "sqlite3.lasterrorcode",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "lasterrormsg": {
        "name": "lastErrorMsg",
        "url": "sqlite3.lasterrormsg",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "lastinsertrowid": {
        "name": "lastInsertRowID",
        "url": "sqlite3.lastinsertrowid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "loadextension": {
        "name": "loadExtension",
        "url": "sqlite3.loadextension",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $shared_library",
          "returnValue": "bool",
          "ref": null
        }
      },
      "open": {
        "name": "open",
        "url": "sqlite3.open",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename [, int $flags = SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE [, string $encryption_key = NULL ]]",
          "returnValue": "void",
          "ref": null
        }
      },
      "openblob": {
        "name": "openBlob",
        "url": "sqlite3.openblob",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $table, string $column, int $rowid [, string $dbname = \"main\" [, int $flags = SQLITE3_OPEN_READONLY ]]",
          "returnValue": "resource",
          "ref": null
        }
      },
      "prepare": {
        "name": "prepare",
        "url": "sqlite3.prepare",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "SQLite3Stmt",
          "ref": null
        }
      },
      "query": {
        "name": "query",
        "url": "sqlite3.query",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "SQLite3Result",
          "ref": null
        }
      },
      "querysingle": {
        "name": "querySingle",
        "url": "sqlite3.querysingle",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query [, bool $entire_row = FALSE ]",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "version": {
        "name": "version",
        "url": "sqlite3.version",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": true,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "sqlite3.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename [, int $flags = SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE [, string $encryption_key = NULL ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "sqlite3result": {
    "name": "SQLite3Result",
    "methods": {
      "columnname": {
        "name": "columnName",
        "url": "sqlite3result.columnname",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $column_number",
          "returnValue": "string",
          "ref": null
        }
      },
      "columntype": {
        "name": "columnType",
        "url": "sqlite3result.columntype",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $column_number",
          "returnValue": "int",
          "ref": null
        }
      },
      "fetcharray": {
        "name": "fetchArray",
        "url": "sqlite3result.fetcharray",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $mode = SQLITE3_BOTH ]",
          "returnValue": "array",
          "ref": null
        }
      },
      "finalize": {
        "name": "finalize",
        "url": "sqlite3result.finalize",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "numcolumns": {
        "name": "numColumns",
        "url": "sqlite3result.numcolumns",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "reset": {
        "name": "reset",
        "url": "sqlite3result.reset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "sqlite3stmt": {
    "name": "SQLite3Stmt",
    "methods": {
      "bindparam": {
        "name": "bindParam",
        "url": "sqlite3stmt.bindparam",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $sql_param, mixed &$param [, int $type ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "bindvalue": {
        "name": "bindValue",
        "url": "sqlite3stmt.bindvalue",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $sql_param, mixed $value [, int $type ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "clear": {
        "name": "clear",
        "url": "sqlite3stmt.clear",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "close": {
        "name": "close",
        "url": "sqlite3stmt.close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "execute": {
        "name": "execute",
        "url": "sqlite3stmt.execute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SQLite3Result",
          "ref": null
        }
      },
      "getsql": {
        "name": "getSQL",
        "url": "sqlite3stmt.getsql",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $expanded = FALSE ]",
          "returnValue": "string",
          "ref": null
        }
      },
      "paramcount": {
        "name": "paramCount",
        "url": "sqlite3stmt.paramcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "readonly": {
        "name": "readOnly",
        "url": "sqlite3stmt.readonly",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "reset": {
        "name": "reset",
        "url": "sqlite3stmt.reset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "sqlstatement": {
    "name": "SqlStatement",
    "methods": {
      "bind": {
        "name": "bind",
        "url": "mysql-xdevapi-sqlstatement.bind",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $param",
          "returnValue": "mysql_xdevapi\\SqlStatement",
          "ref": null
        }
      },
      "execute": {
        "name": "execute",
        "url": "mysql-xdevapi-sqlstatement.execute",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysql_xdevapi\\Result",
          "ref": null
        }
      },
      "getnextresult": {
        "name": "getNextResult",
        "url": "mysql-xdevapi-sqlstatement.getnextresult",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysql_xdevapi\\Result",
          "ref": null
        }
      },
      "getresult": {
        "name": "getResult",
        "url": "mysql-xdevapi-sqlstatement.getresult",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysql_xdevapi\\Result",
          "ref": null
        }
      },
      "hasmoreresults": {
        "name": "hasMoreResults",
        "url": "mysql-xdevapi-sqlstatement.hasmoreresults",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mysql-xdevapi-sqlstatement.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "sqlstatementresult": {
    "name": "SqlStatementResult",
    "methods": {
      "fetchall": {
        "name": "fetchAll",
        "url": "mysql-xdevapi-sqlstatementresult.fetchall",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "fetchone": {
        "name": "fetchOne",
        "url": "mysql-xdevapi-sqlstatementresult.fetchone",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getaffecteditemscount": {
        "name": "getAffectedItemsCount",
        "url": "mysql-xdevapi-sqlstatementresult.getaffecteditemscount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "integer",
          "ref": null
        }
      },
      "getcolumnnames": {
        "name": "getColumnNames",
        "url": "mysql-xdevapi-sqlstatementresult.getcolumnnames",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getcolumns": {
        "name": "getColumns",
        "url": "mysql-xdevapi-sqlstatementresult.getcolumns",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "Array",
          "ref": null
        }
      },
      "getcolumnscount": {
        "name": "getColumnsCount",
        "url": "mysql-xdevapi-sqlstatementresult.getcolumncount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "integer",
          "ref": null
        }
      },
      "getgeneratedids": {
        "name": "getGeneratedIds",
        "url": "mysql-xdevapi-sqlstatementresult.getgeneratedids",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getlastinsertid": {
        "name": "getLastInsertId",
        "url": "mysql-xdevapi-sqlstatementresult.getlastinsertid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "String",
          "ref": null
        }
      },
      "getwarnings": {
        "name": "getWarnings",
        "url": "mysql-xdevapi-sqlstatementresult.getwarnings",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getwarningscount": {
        "name": "getWarningsCount",
        "url": "mysql-xdevapi-sqlstatementresult.getwarningcount",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "integer",
          "ref": null
        }
      },
      "hasdata": {
        "name": "hasData",
        "url": "mysql-xdevapi-sqlstatementresult.hasdata",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "nextresult": {
        "name": "nextResult",
        "url": "mysql-xdevapi-sqlstatementresult.nextresult",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysql_xdevapi\\Result",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mysql-xdevapi-sqlstatementresult.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "statement": {
    "name": "Statement",
    "methods": {
      "getnextresult": {
        "name": "getNextResult",
        "url": "mysql-xdevapi-statement.getnextresult",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysql_xdevapi\\Result",
          "ref": null
        }
      },
      "getresult": {
        "name": "getResult",
        "url": "mysql-xdevapi-statement.getresult",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "mysql_xdevapi\\Result",
          "ref": null
        }
      },
      "hasmoreresults": {
        "name": "hasMoreResults",
        "url": "mysql-xdevapi-statement.hasmoreresults",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "mysql-xdevapi-statement.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": true,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "stomp": {
    "name": "Stomp",
    "methods": {
      "abort": {
        "name": "abort",
        "url": "stomp.abort",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $transaction_id [, array $headers ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "ack": {
        "name": "ack",
        "url": "stomp.ack",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $msg [, array $headers ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "begin": {
        "name": "begin",
        "url": "stomp.begin",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $transaction_id [, array $headers ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "commit": {
        "name": "commit",
        "url": "stomp.commit",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $transaction_id [, array $headers ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "error": {
        "name": "error",
        "url": "stomp.error",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "getreadtimeout": {
        "name": "getReadTimeout",
        "url": "stomp.getreadtimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getsessionid": {
        "name": "getSessionId",
        "url": "stomp.getsessionid",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "hasframe": {
        "name": "hasFrame",
        "url": "stomp.hasframe",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "readframe": {
        "name": "readFrame",
        "url": "stomp.readframe",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $class_name = \"stompFrame\" ]",
          "returnValue": "stompframe",
          "ref": null
        }
      },
      "send": {
        "name": "send",
        "url": "stomp.send",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $destination, mixed $msg [, array $headers ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "setreadtimeout": {
        "name": "setReadTimeout",
        "url": "stomp.setreadtimeout",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $seconds [, int $microseconds ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "subscribe": {
        "name": "subscribe",
        "url": "stomp.subscribe",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $destination [, array $headers ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "unsubscribe": {
        "name": "unsubscribe",
        "url": "stomp.unsubscribe",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $destination [, array $headers ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "stomp.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $broker = ini_get(\"stomp.default_broker_uri\") [, string $username [, string $password [, array $headers ]]]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "stomp.destruct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      }
    }
  },
  "stompexception": {
    "name": "StompException",
    "methods": {
      "getdetails": {
        "name": "getDetails",
        "url": "stomp.getdetails",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      }
    }
  },
  "stompframe": {
    "name": "StompFrame",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "stompframe.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $command [, array $headers [, string $body ]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "streamwrapper": {
    "name": "streamWrapper",
    "methods": {
      "dir_closedir": {
        "name": "dir_closedir",
        "url": "streamwrapper.dir-closedir",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "dir_opendir": {
        "name": "dir_opendir",
        "url": "streamwrapper.dir-opendir",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, int $options",
          "returnValue": "bool",
          "ref": null
        }
      },
      "dir_readdir": {
        "name": "dir_readdir",
        "url": "streamwrapper.dir-readdir",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "string",
          "ref": null
        }
      },
      "dir_rewinddir": {
        "name": "dir_rewinddir",
        "url": "streamwrapper.dir-rewinddir",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "mkdir": {
        "name": "mkdir",
        "url": "streamwrapper.mkdir",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, int $mode, int $options",
          "returnValue": "bool",
          "ref": null
        }
      },
      "rename": {
        "name": "rename",
        "url": "streamwrapper.rename",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path_from, string $path_to",
          "returnValue": "bool",
          "ref": null
        }
      },
      "rmdir": {
        "name": "rmdir",
        "url": "streamwrapper.rmdir",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, int $options",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stream_cast": {
        "name": "stream_cast",
        "url": "streamwrapper.stream-cast",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $cast_as",
          "returnValue": "resource",
          "ref": null
        }
      },
      "stream_close": {
        "name": "stream_close",
        "url": "streamwrapper.stream-close",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "stream_eof": {
        "name": "stream_eof",
        "url": "streamwrapper.stream-eof",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stream_flush": {
        "name": "stream_flush",
        "url": "streamwrapper.stream-flush",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stream_lock": {
        "name": "stream_lock",
        "url": "streamwrapper.stream-lock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $operation",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stream_metadata": {
        "name": "stream_metadata",
        "url": "streamwrapper.stream-metadata",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, int $option, mixed $value",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stream_open": {
        "name": "stream_open",
        "url": "streamwrapper.stream-open",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, string $mode, int $options, string &$opened_path",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stream_read": {
        "name": "stream_read",
        "url": "streamwrapper.stream-read",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $count",
          "returnValue": "string",
          "ref": null
        }
      },
      "stream_seek": {
        "name": "stream_seek",
        "url": "streamwrapper.stream-seek",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $offset, int $whence = SEEK_SET",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stream_set_option": {
        "name": "stream_set_option",
        "url": "streamwrapper.stream-set-option",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $option, int $arg1, int $arg2",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stream_stat": {
        "name": "stream_stat",
        "url": "streamwrapper.stream-stat",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "stream_tell": {
        "name": "stream_tell",
        "url": "streamwrapper.stream-tell",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "stream_truncate": {
        "name": "stream_truncate",
        "url": "streamwrapper.stream-truncate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $new_size",
          "returnValue": "bool",
          "ref": null
        }
      },
      "stream_write": {
        "name": "stream_write",
        "url": "streamwrapper.stream-write",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $data",
          "returnValue": "int",
          "ref": null
        }
      },
      "unlink": {
        "name": "unlink",
        "url": "streamwrapper.unlink",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path",
          "returnValue": "bool",
          "ref": null
        }
      },
      "url_stat": {
        "name": "url_stat",
        "url": "streamwrapper.url-stat",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $path, int $flags",
          "returnValue": "array",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "streamwrapper.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      },
      "__destruct": {
        "name": "__destruct",
        "url": "streamwrapper.destruct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "svm": {
    "name": "SVM",
    "methods": {
      "crossvalidate": {
        "name": "crossvalidate",
        "url": "svm.crossvalidate",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $problem, int $number_of_folds",
          "returnValue": "float",
          "ref": null
        }
      },
      "getoptions": {
        "name": "getOptions",
        "url": "svm.getoptions",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "setoptions": {
        "name": "setOptions",
        "url": "svm.setoptions",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $params",
          "returnValue": "bool",
          "ref": null
        }
      },
      "train": {
        "name": "train",
        "url": "svm.train",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $problem [, array $weights ]",
          "returnValue": "SVMModel",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "svm.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "svmmodel": {
    "name": "SVMModel",
    "methods": {
      "checkprobabilitymodel": {
        "name": "checkProbabilityModel",
        "url": "svmmodel.checkprobabilitymodel",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "getlabels": {
        "name": "getLabels",
        "url": "svmmodel.getlabels",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "getnrclass": {
        "name": "getNrClass",
        "url": "svmmodel.getnrclass",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getsvmtype": {
        "name": "getSvmType",
        "url": "svmmodel.getsvmtype",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "getsvrprobability": {
        "name": "getSvrProbability",
        "url": "svmmodel.getsvrprobability",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "load": {
        "name": "load",
        "url": "svmmodel.load",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename",
          "returnValue": "bool",
          "ref": null
        }
      },
      "predict": {
        "name": "predict",
        "url": "svmmodel.predict",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $data",
          "returnValue": "float",
          "ref": null
        }
      },
      "predict_probability": {
        "name": "predict_probability",
        "url": "svmmodel.predict-probability",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "array $data",
          "returnValue": "float",
          "ref": null
        }
      },
      "save": {
        "name": "save",
        "url": "svmmodel.save",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "svmmodel.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $filename ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfaction": {
    "name": "SWFAction",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "swfaction.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $script",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfbitmap": {
    "name": "SWFBitmap",
    "methods": {
      "getheight": {
        "name": "getHeight",
        "url": "swfbitmap.getheight",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getwidth": {
        "name": "getWidth",
        "url": "swfbitmap.getwidth",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swfbitmap.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $file [, mixed $alphafile ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfbutton": {
    "name": "SWFButton",
    "methods": {
      "addaction": {
        "name": "addAction",
        "url": "swfbutton.addaction",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFAction $action, int $flags",
          "returnValue": "void",
          "ref": null
        }
      },
      "addasound": {
        "name": "addASound",
        "url": "swfbutton.addasound",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFSound $sound, int $flags",
          "returnValue": "SWFSoundInstance",
          "ref": null
        }
      },
      "addshape": {
        "name": "addShape",
        "url": "swfbutton.addshape",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFShape $shape, int $flags",
          "returnValue": "void",
          "ref": null
        }
      },
      "setaction": {
        "name": "setAction",
        "url": "swfbutton.setaction",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFAction $action",
          "returnValue": "void",
          "ref": null
        }
      },
      "setdown": {
        "name": "setDown",
        "url": "swfbutton.setdown",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFShape $shape",
          "returnValue": "void",
          "ref": null
        }
      },
      "sethit": {
        "name": "setHit",
        "url": "swfbutton.sethit",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFShape $shape",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmenu": {
        "name": "setMenu",
        "url": "swfbutton.setmenu",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $flag",
          "returnValue": "void",
          "ref": null
        }
      },
      "setover": {
        "name": "setOver",
        "url": "swfbutton.setover",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFShape $shape",
          "returnValue": "void",
          "ref": null
        }
      },
      "setup": {
        "name": "setUp",
        "url": "swfbutton.setup",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFShape $shape",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swfbutton.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfdisplayitem": {
    "name": "SWFDisplayItem",
    "methods": {
      "addaction": {
        "name": "addAction",
        "url": "swfdisplayitem.addaction",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFAction $action, int $flags",
          "returnValue": "void",
          "ref": null
        }
      },
      "addcolor": {
        "name": "addColor",
        "url": "swfdisplayitem.addcolor",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $red, int $green, int $blue [, int $a ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "endmask": {
        "name": "endMask",
        "url": "swfdisplayitem.endmask",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "getrot": {
        "name": "getRot",
        "url": "swfdisplayitem.getrot",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getx": {
        "name": "getX",
        "url": "swfdisplayitem.getx",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getxscale": {
        "name": "getXScale",
        "url": "swfdisplayitem.getxscale",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getxskew": {
        "name": "getXSkew",
        "url": "swfdisplayitem.getxskew",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "gety": {
        "name": "getY",
        "url": "swfdisplayitem.gety",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getyscale": {
        "name": "getYScale",
        "url": "swfdisplayitem.getyscale",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getyskew": {
        "name": "getYSkew",
        "url": "swfdisplayitem.getyskew",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "move": {
        "name": "move",
        "url": "swfdisplayitem.move",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $dx, float $dy",
          "returnValue": "void",
          "ref": null
        }
      },
      "moveto": {
        "name": "moveTo",
        "url": "swfdisplayitem.moveto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $x, float $y",
          "returnValue": "void",
          "ref": null
        }
      },
      "multcolor": {
        "name": "multColor",
        "url": "swfdisplayitem.multcolor",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $red, float $green, float $blue [, float $a ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "remove": {
        "name": "remove",
        "url": "swfdisplayitem.remove",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "rotate": {
        "name": "rotate",
        "url": "swfdisplayitem.rotate",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $angle",
          "returnValue": "void",
          "ref": null
        }
      },
      "rotateto": {
        "name": "rotateTo",
        "url": "swfdisplayitem.rotateto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $angle",
          "returnValue": "void",
          "ref": null
        }
      },
      "scale": {
        "name": "scale",
        "url": "swfdisplayitem.scale",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $dx, float $dy",
          "returnValue": "void",
          "ref": null
        }
      },
      "scaleto": {
        "name": "scaleTo",
        "url": "swfdisplayitem.scaleto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $x [, float $y ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setdepth": {
        "name": "setDepth",
        "url": "swfdisplayitem.setdepth",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $depth",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmasklevel": {
        "name": "setMaskLevel",
        "url": "swfdisplayitem.setmasklevel",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $level",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmatrix": {
        "name": "setMatrix",
        "url": "swfdisplayitem.setmatrix",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $a, float $b, float $c, float $d, float $x, float $y",
          "returnValue": "void",
          "ref": null
        }
      },
      "setname": {
        "name": "setName",
        "url": "swfdisplayitem.setname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "setratio": {
        "name": "setRatio",
        "url": "swfdisplayitem.setratio",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $ratio",
          "returnValue": "void",
          "ref": null
        }
      },
      "skewx": {
        "name": "skewX",
        "url": "swfdisplayitem.skewx",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $ddegrees",
          "returnValue": "void",
          "ref": null
        }
      },
      "skewxto": {
        "name": "skewXTo",
        "url": "swfdisplayitem.skewxto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $degrees",
          "returnValue": "void",
          "ref": null
        }
      },
      "skewy": {
        "name": "skewY",
        "url": "swfdisplayitem.skewy",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $ddegrees",
          "returnValue": "void",
          "ref": null
        }
      },
      "skewyto": {
        "name": "skewYTo",
        "url": "swfdisplayitem.skewyto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $degrees",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "swffill": {
    "name": "SWFFill",
    "methods": {
      "moveto": {
        "name": "moveTo",
        "url": "swffill.moveto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $x, float $y",
          "returnValue": "void",
          "ref": null
        }
      },
      "rotateto": {
        "name": "rotateTo",
        "url": "swffill.rotateto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $angle",
          "returnValue": "void",
          "ref": null
        }
      },
      "scaleto": {
        "name": "scaleTo",
        "url": "swffill.scaleto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $x [, float $y ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "skewxto": {
        "name": "skewXTo",
        "url": "swffill.skewxto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $x",
          "returnValue": "void",
          "ref": null
        }
      },
      "skewyto": {
        "name": "skewYTo",
        "url": "swffill.skewyto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $y",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "swffont": {
    "name": "SWFFont",
    "methods": {
      "getascent": {
        "name": "getAscent",
        "url": "swffont.getascent",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getdescent": {
        "name": "getDescent",
        "url": "swffont.getdescent",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getleading": {
        "name": "getLeading",
        "url": "swffont.getleading",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getshape": {
        "name": "getShape",
        "url": "swffont.getshape",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $code",
          "returnValue": "string",
          "ref": null
        }
      },
      "getutf8width": {
        "name": "getUTF8Width",
        "url": "swffont.getutf8width",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $string",
          "returnValue": "float",
          "ref": null
        }
      },
      "getwidth": {
        "name": "getWidth",
        "url": "swffont.getwidth",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $string",
          "returnValue": "float",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swffont.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swffontchar": {
    "name": "SWFFontChar",
    "methods": {
      "addchars": {
        "name": "addChars",
        "url": "swffontchar.addchars",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $char",
          "returnValue": "void",
          "ref": null
        }
      },
      "addutf8chars": {
        "name": "addUTF8Chars",
        "url": "swffontchar.addutf8chars",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $char",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "swfgradient": {
    "name": "SWFGradient",
    "methods": {
      "addentry": {
        "name": "addEntry",
        "url": "swfgradient.addentry",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $ratio, int $red, int $green, int $blue [, int $alpha = 255 ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swfgradient.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfmorph": {
    "name": "SWFMorph",
    "methods": {
      "getshape1": {
        "name": "getShape1",
        "url": "swfmorph.getshape1",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SWFShape",
          "ref": null
        }
      },
      "getshape2": {
        "name": "getShape2",
        "url": "swfmorph.getshape2",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "SWFShape",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swfmorph.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfmovie": {
    "name": "SWFMovie",
    "methods": {
      "add": {
        "name": "add",
        "url": "swfmovie.add",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $instance",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "addexport": {
        "name": "addExport",
        "url": "swfmovie.addexport",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFCharacter $char, string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "addfont": {
        "name": "addFont",
        "url": "swfmovie.addfont",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFFont $font",
          "returnValue": "mixed",
          "ref": null
        }
      },
      "importchar": {
        "name": "importChar",
        "url": "swfmovie.importchar",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $libswf, string $name",
          "returnValue": "SWFSprite",
          "ref": null
        }
      },
      "importfont": {
        "name": "importFont",
        "url": "swfmovie.importfont",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $libswf, string $name",
          "returnValue": "SWFFontChar",
          "ref": null
        }
      },
      "labelframe": {
        "name": "labelFrame",
        "url": "swfmovie.labelframe",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $label",
          "returnValue": "void",
          "ref": null
        }
      },
      "nextframe": {
        "name": "nextFrame",
        "url": "swfmovie.nextframe",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "output": {
        "name": "output",
        "url": "swfmovie.output",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $compression ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "remove": {
        "name": "remove",
        "url": "swfmovie.remove",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $instance",
          "returnValue": "void",
          "ref": null
        }
      },
      "save": {
        "name": "save",
        "url": "swfmovie.save",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename [, int $compression = -1 ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "savetofile": {
        "name": "saveToFile",
        "url": "swfmovie.savetofile",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "resource $x [, int $compression = -1 ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "setbackground": {
        "name": "setbackground",
        "url": "swfmovie.setbackground",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $red, int $green, int $blue",
          "returnValue": "void",
          "ref": null
        }
      },
      "setdimension": {
        "name": "setDimension",
        "url": "swfmovie.setdimension",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $width, float $height",
          "returnValue": "void",
          "ref": null
        }
      },
      "setframes": {
        "name": "setFrames",
        "url": "swfmovie.setframes",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $number",
          "returnValue": "void",
          "ref": null
        }
      },
      "setrate": {
        "name": "setRate",
        "url": "swfmovie.setrate",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $rate",
          "returnValue": "void",
          "ref": null
        }
      },
      "startsound": {
        "name": "startSound",
        "url": "swfmovie.startsound",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFSound $sound",
          "returnValue": "SWFSoundInstance",
          "ref": null
        }
      },
      "stopsound": {
        "name": "stopSound",
        "url": "swfmovie.stopsound",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFSound $sound",
          "returnValue": "void",
          "ref": null
        }
      },
      "streammp3": {
        "name": "streamMP3",
        "url": "swfmovie.streammp3",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $mp3file [, float $skip = 0 ]",
          "returnValue": "int",
          "ref": null
        }
      },
      "writeexports": {
        "name": "writeExports",
        "url": "swfmovie.writeexports",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swfmovie.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $version ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfprebuiltclip": {
    "name": "SWFPrebuiltClip",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "swfprebuiltclip.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "mixed $file",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfshape": {
    "name": "SWFShape",
    "methods": {
      "addfill": {
        "name": "addFill",
        "url": "swfshape.addfill",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $red, int $green, int $blue [, int $alpha = 255 ]",
          "returnValue": "SWFFill",
          "ref": null
        }
      },
      "drawarc": {
        "name": "drawArc",
        "url": "swfshape.drawarc",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $r, float $startAngle, float $endAngle",
          "returnValue": "void",
          "ref": null
        }
      },
      "drawcircle": {
        "name": "drawCircle",
        "url": "swfshape.drawcircle",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $r",
          "returnValue": "void",
          "ref": null
        }
      },
      "drawcubic": {
        "name": "drawCubic",
        "url": "swfshape.drawcubic",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $bx, float $by, float $cx, float $cy, float $dx, float $dy",
          "returnValue": "int",
          "ref": null
        }
      },
      "drawcubicto": {
        "name": "drawCubicTo",
        "url": "swfshape.drawcubicto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $bx, float $by, float $cx, float $cy, float $dx, float $dy",
          "returnValue": "int",
          "ref": null
        }
      },
      "drawcurve": {
        "name": "drawCurve",
        "url": "swfshape.drawcurve",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $controldx, float $controldy, float $anchordx, float $anchordy [, float $targetdx ], float $targetdy",
          "returnValue": "int",
          "ref": null
        }
      },
      "drawcurveto": {
        "name": "drawCurveTo",
        "url": "swfshape.drawcurveto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $controlx, float $controly, float $anchorx, float $anchory [, float $targetx ], float $targety",
          "returnValue": "int",
          "ref": null
        }
      },
      "drawglyph": {
        "name": "drawGlyph",
        "url": "swfshape.drawglyph",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFFont $font, string $character [, int $size ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "drawline": {
        "name": "drawLine",
        "url": "swfshape.drawline",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $dx, float $dy",
          "returnValue": "void",
          "ref": null
        }
      },
      "drawlineto": {
        "name": "drawLineTo",
        "url": "swfshape.drawlineto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $x, float $y",
          "returnValue": "void",
          "ref": null
        }
      },
      "movepen": {
        "name": "movePen",
        "url": "swfshape.movepen",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $dx, float $dy",
          "returnValue": "void",
          "ref": null
        }
      },
      "movepento": {
        "name": "movePenTo",
        "url": "swfshape.movepento",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $x, float $y",
          "returnValue": "void",
          "ref": null
        }
      },
      "setleftfill": {
        "name": "setLeftFill",
        "url": "swfshape.setleftfill",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFGradient $fill",
          "returnValue": "void",
          "ref": null
        }
      },
      "setline": {
        "name": "setLine",
        "url": "swfshape.setline",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFShape $shape",
          "returnValue": "void",
          "ref": null
        }
      },
      "setrightfill": {
        "name": "setRightFill",
        "url": "swfshape.setrightfill",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFGradient $fill",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swfshape.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfsound": {
    "name": "SWFSound",
    "methods": {
      "__construct": {
        "name": "__construct",
        "url": "swfsound.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $filename [, int $flags = 0 ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfsoundinstance": {
    "name": "SWFSoundInstance",
    "methods": {
      "loopcount": {
        "name": "loopCount",
        "url": "swfsoundinstance.loopcount",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $point",
          "returnValue": "void",
          "ref": null
        }
      },
      "loopinpoint": {
        "name": "loopInPoint",
        "url": "swfsoundinstance.loopinpoint",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $point",
          "returnValue": "void",
          "ref": null
        }
      },
      "loopoutpoint": {
        "name": "loopOutPoint",
        "url": "swfsoundinstance.loopoutpoint",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $point",
          "returnValue": "void",
          "ref": null
        }
      },
      "nomultiple": {
        "name": "noMultiple",
        "url": "swfsoundinstance.nomultiple",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "swfsprite": {
    "name": "SWFSprite",
    "methods": {
      "add": {
        "name": "add",
        "url": "swfsprite.add",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object",
          "returnValue": "void",
          "ref": null
        }
      },
      "labelframe": {
        "name": "labelFrame",
        "url": "swfsprite.labelframe",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $label",
          "returnValue": "void",
          "ref": null
        }
      },
      "nextframe": {
        "name": "nextFrame",
        "url": "swfsprite.nextframe",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "remove": {
        "name": "remove",
        "url": "swfsprite.remove",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "object $object",
          "returnValue": "void",
          "ref": null
        }
      },
      "setframes": {
        "name": "setFrames",
        "url": "swfsprite.setframes",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $number",
          "returnValue": "void",
          "ref": null
        }
      },
      "startsound": {
        "name": "startSound",
        "url": "swfsprite.startsound",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFSound $sount",
          "returnValue": "SWFSoundInstance",
          "ref": null
        }
      },
      "stopsound": {
        "name": "stopSound",
        "url": "swfsprite.stopsound",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFSound $sount",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swfsprite.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swftext": {
    "name": "SWFText",
    "methods": {
      "addstring": {
        "name": "addString",
        "url": "swftext.addstring",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $string",
          "returnValue": "void",
          "ref": null
        }
      },
      "addutf8string": {
        "name": "addUTF8String",
        "url": "swftext.addutf8string",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $text",
          "returnValue": "void",
          "ref": null
        }
      },
      "getascent": {
        "name": "getAscent",
        "url": "swftext.getascent",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getdescent": {
        "name": "getDescent",
        "url": "swftext.getdescent",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getleading": {
        "name": "getLeading",
        "url": "swftext.getleading",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "float",
          "ref": null
        }
      },
      "getutf8width": {
        "name": "getUTF8Width",
        "url": "swftext.getutf8width",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $string",
          "returnValue": "float",
          "ref": null
        }
      },
      "getwidth": {
        "name": "getWidth",
        "url": "swftext.getwidth",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $string",
          "returnValue": "float",
          "ref": null
        }
      },
      "moveto": {
        "name": "moveTo",
        "url": "swftext.moveto",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $x, float $y",
          "returnValue": "void",
          "ref": null
        }
      },
      "setcolor": {
        "name": "setColor",
        "url": "swftext.setcolor",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $red, int $green, int $blue [, int $a = 255 ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setfont": {
        "name": "setFont",
        "url": "swftext.setfont",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFFont $font",
          "returnValue": "void",
          "ref": null
        }
      },
      "setheight": {
        "name": "setHeight",
        "url": "swftext.setheight",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $height",
          "returnValue": "void",
          "ref": null
        }
      },
      "setspacing": {
        "name": "setSpacing",
        "url": "swftext.setspacing",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $spacing",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swftext.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swftextfield": {
    "name": "SWFTextField",
    "methods": {
      "addchars": {
        "name": "addChars",
        "url": "swftextfield.addchars",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $chars",
          "returnValue": "void",
          "ref": null
        }
      },
      "addstring": {
        "name": "addString",
        "url": "swftextfield.addstring",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $string",
          "returnValue": "void",
          "ref": null
        }
      },
      "align": {
        "name": "align",
        "url": "swftextfield.align",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $alignement",
          "returnValue": "void",
          "ref": null
        }
      },
      "setbounds": {
        "name": "setBounds",
        "url": "swftextfield.setbounds",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $width, float $height",
          "returnValue": "void",
          "ref": null
        }
      },
      "setcolor": {
        "name": "setColor",
        "url": "swftextfield.setcolor",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $red, int $green, int $blue [, int $a = 255 ]",
          "returnValue": "void",
          "ref": null
        }
      },
      "setfont": {
        "name": "setFont",
        "url": "swftextfield.setfont",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "SWFFont $font",
          "returnValue": "void",
          "ref": null
        }
      },
      "setheight": {
        "name": "setHeight",
        "url": "swftextfield.setheight",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $height",
          "returnValue": "void",
          "ref": null
        }
      },
      "setindentation": {
        "name": "setIndentation",
        "url": "swftextfield.setindentation",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $width",
          "returnValue": "void",
          "ref": null
        }
      },
      "setleftmargin": {
        "name": "setLeftMargin",
        "url": "swftextfield.setleftmargin",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $width",
          "returnValue": "void",
          "ref": null
        }
      },
      "setlinespacing": {
        "name": "setLineSpacing",
        "url": "swftextfield.setlinespacing",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $height",
          "returnValue": "void",
          "ref": null
        }
      },
      "setmargins": {
        "name": "setMargins",
        "url": "swftextfield.setmargins",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $left, float $right",
          "returnValue": "void",
          "ref": null
        }
      },
      "setname": {
        "name": "setName",
        "url": "swftextfield.setname",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name",
          "returnValue": "void",
          "ref": null
        }
      },
      "setpadding": {
        "name": "setPadding",
        "url": "swftextfield.setpadding",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $padding",
          "returnValue": "void",
          "ref": null
        }
      },
      "setrightmargin": {
        "name": "setRightMargin",
        "url": "swftextfield.setrightmargin",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "float $width",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swftextfield.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $flags ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swfvideostream": {
    "name": "SWFVideoStream",
    "methods": {
      "getnumframes": {
        "name": "getNumFrames",
        "url": "swfvideostream.getnumframes",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "int",
          "ref": null
        }
      },
      "setdimension": {
        "name": "setDimension",
        "url": "swfvideostream.setdimension",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $x, int $y",
          "returnValue": "void",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swfvideostream.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $file ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "swish": {
    "name": "Swish",
    "methods": {
      "getmetalist": {
        "name": "getMetaList",
        "url": "swish.getmetalist",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $index_name",
          "returnValue": "array",
          "ref": null
        }
      },
      "getpropertylist": {
        "name": "getPropertyList",
        "url": "swish.getpropertylist",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $index_name",
          "returnValue": "array",
          "ref": null
        }
      },
      "prepare": {
        "name": "prepare",
        "url": "swish.prepare",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $query ]",
          "returnValue": "object",
          "ref": null
        }
      },
      "query": {
        "name": "query",
        "url": "swish.query",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $query",
          "returnValue": "object",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "swish.construct",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $index_names",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "swishresult": {
    "name": "SwishResult",
    "methods": {
      "getmetalist": {
        "name": "getMetaList",
        "url": "swishresult.getmetalist",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "array",
          "ref": null
        }
      },
      "stem": {
        "name": "stem",
        "url": "swishresult.stem",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $word",
          "returnValue": "array",
          "ref": null
        }
      }
    }
  },
  "swishresults": {
    "name": "SwishResults",
    "methods": {
      "getparsedwords": {
        "name": "getParsedWords",
        "url": "swishresults.getparsedwords",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $index_name",
          "returnValue": "array",
          "ref": null
        }
      },
      "getremovedstopwords": {
        "name": "getRemovedStopwords",
        "url": "swishresults.getremovedstopwords",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $index_name",
          "returnValue": "array",
          "ref": null
        }
      },
      "nextresult": {
        "name": "nextResult",
        "url": "swishresults.nextresult",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "object",
          "ref": null
        }
      },
      "seekresult": {
        "name": "seekResult",
        "url": "swishresults.seekresult",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $position",
          "returnValue": "int",
          "ref": null
        }
      }
    }
  },
  "swishsearch": {
    "name": "SwishSearch",
    "methods": {
      "execute": {
        "name": "execute",
        "url": "swishsearch.execute",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $query ]",
          "returnValue": "object",
          "ref": null
        }
      },
      "resetlimit": {
        "name": "resetLimit",
        "url": "swishsearch.resetlimit",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "void",
          "ref": null
        }
      },
      "setlimit": {
        "name": "setLimit",
        "url": "swishsearch.setlimit",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $property, string $low, string $high",
          "returnValue": "void",
          "ref": null
        }
      },
      "setphrasedelimiter": {
        "name": "setPhraseDelimiter",
        "url": "swishsearch.setphrasedelimiter",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $delimiter",
          "returnValue": "void",
          "ref": null
        }
      },
      "setsort": {
        "name": "setSort",
        "url": "swishsearch.setsort",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $sort",
          "returnValue": "void",
          "ref": null
        }
      },
      "setstructure": {
        "name": "setStructure",
        "url": "swishsearch.setstructure",
        "spec": {
          "isPublic": false,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "int $structure",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  },
  "syncevent": {
    "name": "SyncEvent",
    "methods": {
      "fire": {
        "name": "fire",
        "url": "syncevent.fire",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "reset": {
        "name": "reset",
        "url": "syncevent.reset",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "wait": {
        "name": "wait",
        "url": "syncevent.wait",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $wait = -1 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "syncevent.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $name [, bool $manual = FALSE [, bool $prefire = FALSE ]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "syncmutex": {
    "name": "SyncMutex",
    "methods": {
      "lock": {
        "name": "lock",
        "url": "syncmutex.lock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $wait = -1 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "unlock": {
        "name": "unlock",
        "url": "syncmutex.unlock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ bool $all = FALSE ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "syncmutex.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $name ]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "syncreaderwriter": {
    "name": "SyncReaderWriter",
    "methods": {
      "readlock": {
        "name": "readlock",
        "url": "syncreaderwriter.readlock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $wait = -1 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "readunlock": {
        "name": "readunlock",
        "url": "syncreaderwriter.readunlock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "writelock": {
        "name": "writelock",
        "url": "syncreaderwriter.writelock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $wait = -1 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "writeunlock": {
        "name": "writeunlock",
        "url": "syncreaderwriter.writeunlock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "syncreaderwriter.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $name [, bool $autounlock = TRUE ]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "syncsemaphore": {
    "name": "SyncSemaphore",
    "methods": {
      "lock": {
        "name": "lock",
        "url": "syncsemaphore.lock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $wait = -1 ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "unlock": {
        "name": "unlock",
        "url": "syncsemaphore.unlock",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int &$prevcount ]",
          "returnValue": "bool",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "syncsemaphore.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $name [, int $initialval = 1 [, bool $autounlock = TRUE ]]]",
          "returnValue": "",
          "ref": null
        }
      }
    }
  },
  "syncsharedmemory": {
    "name": "SyncSharedMemory",
    "methods": {
      "first": {
        "name": "first",
        "url": "syncsharedmemory.first",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "read": {
        "name": "read",
        "url": "syncsharedmemory.read",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ int $start = 0 [, int $length ]]",
          "returnValue": "",
          "ref": null
        }
      },
      "size": {
        "name": "size",
        "url": "syncsharedmemory.size",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "void",
          "returnValue": "bool",
          "ref": null
        }
      },
      "write": {
        "name": "write",
        "url": "syncsharedmemory.write",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "[ string $string [, int $start = 0 ]]",
          "returnValue": "",
          "ref": null
        }
      },
      "__construct": {
        "name": "__construct",
        "url": "syncsharedmemory.construct",
        "spec": {
          "isPublic": true,
          "isPrivate": false,
          "isProtected": false,
          "isAbstract": false,
          "isFinal": false,
          "isStatic": false,
          "parameters": "string $name, int $size",
          "returnValue": "",
          "ref": null
        }
      }
    }
  }
};
