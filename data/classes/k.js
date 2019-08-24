classes.k = {
  ktaglib_id3v2_attachedpictureframe: {
    name: "KTaglib_ID3v2_AttachedPictureFrame",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getdescription: {
        name: "getDescription",
        url: "id3v2attachedpictureframe.getdescription",
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
      getmimetype: {
        name: "getMimeType",
        url: "id3v2attachedpictureframe.getmimetype",
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
      gettype: {
        name: "getType",
        url: "id3v2attachedpictureframe.gettype",
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
      savepicture: {
        name: "savePicture",
        url: "id3v2attachedpictureframe.savepicture",
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
      setmimetype: {
        name: "setMimeType",
        url: "id3v2attachedpictureframe.setmimetype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $type",
          returnValue: "string",
          ref: null
        }
      },
      setpicture: {
        name: "setPicture",
        url: "id3v2attachedpictureframe.setpicture",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename",
          returnValue: "void",
          ref: null
        }
      },
      settype: {
        name: "setType",
        url: "id3v2attachedpictureframe.settype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $type",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.ktaglib_id3v2_attachedpictureframe",
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
  ktaglib_id3v2_frame: {
    name: "KTaglib_ID3v2_Frame",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getsize: {
        name: "getSize",
        url: "id3v2frame.getsize",
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
      __tostring: {
        name: "__toString",
        url: "id3v2frame.tostring",
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
      __construct: {
        name: "__construct",
        url: "class.ktaglib_id3v2_frame",
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
  ktaglib_id3v2_tag: {
    name: "KTaglib_ID3v2_Tag",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      addframe: {
        name: "addFrame",
        url: "id3v2tag.addframe",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "KTaglib_ID3v2_Frame $frame",
          returnValue: "bool",
          ref: null
        }
      },
      getframelist: {
        name: "getFrameList",
        url: "id3v2tag.getframelist",
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
      __construct: {
        name: "__construct",
        url: "class.ktaglib_id3v2_tag",
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
  ktaglib_mpeg_audioproperties: {
    name: "KTaglib_MPEG_AudioProperties",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getbitrate: {
        name: "getBitrate",
        url: "audioproperties.getbitrate",
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
      getchannels: {
        name: "getChannels",
        url: "audioproperties.getchannels",
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
      getlayer: {
        name: "getLayer",
        url: "audioproperties.getlayer",
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
      getlength: {
        name: "getLength",
        url: "audioproperties.getlength",
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
      getsamplebitrate: {
        name: "getSampleBitrate",
        url: "audioproperties.getsamplebitrate",
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
      getversion: {
        name: "getVersion",
        url: "audioproperties.getversion",
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
      iscopyrighted: {
        name: "isCopyrighted",
        url: "audioproperties.iscopyrighted",
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
      isoriginal: {
        name: "isOriginal",
        url: "audioproperties.isoriginal",
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
      isprotectionenabled: {
        name: "isProtectionEnabled",
        url: "audioproperties.isprotectionenabled",
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
        url: "class.ktaglib_mpeg_audioproperties",
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
  ktaglib_mpeg_file: {
    name: "KTaglib_MPEG_File",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getaudioproperties: {
        name: "getAudioProperties",
        url: "mpegfile.getaudioproperties",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "KTaglib_MPEG_File",
          ref: null
        }
      },
      getid3v1tag: {
        name: "getID3v1Tag",
        url: "mpegfile.getid3v1tag",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ bool $create = FALSE ]",
          returnValue: "KTaglib_ID3v1_Tag",
          ref: null
        }
      },
      getid3v2tag: {
        name: "getID3v2Tag",
        url: "mpegfile.getid3v2tag",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ bool $create = FALSE ]",
          returnValue: "KTaglib_ID3v2_Tag",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mpegfile.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  ktaglib_tag: {
    name: "KTaglib_Tag",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getalbum: {
        name: "getAlbum",
        url: "tag.getalbum",
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
      getartist: {
        name: "getArtist",
        url: "tag.getartist",
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
      getcomment: {
        name: "getComment",
        url: "tag.getcomment",
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
      getgenre: {
        name: "getGenre",
        url: "tag.getgenre",
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
      gettitle: {
        name: "getTitle",
        url: "tag.gettitle",
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
      gettrack: {
        name: "getTrack",
        url: "tag.gettrack",
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
      getyear: {
        name: "getYear",
        url: "tag.getyear",
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
      isempty: {
        name: "isEmpty",
        url: "tag.isempty",
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
        url: "class.ktaglib_tag",
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
  }
};
