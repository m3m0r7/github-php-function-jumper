classes.c = {
  cachingiterator: {
    name: "CachingIterator",
    methods: {
      count: {
        name: "count",
        url: "cachingiterator.count",
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
      current: {
        name: "current",
        url: "cachingiterator.current",
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
      getcache: {
        name: "getCache",
        url: "cachingiterator.getcache",
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
      getflags: {
        name: "getFlags",
        url: "cachingiterator.getflags",
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
      getinneriterator: {
        name: "getInnerIterator",
        url: "cachingiterator.getinneriterator",
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
      hasnext: {
        name: "hasNext",
        url: "cachingiterator.hasnext",
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
      key: {
        name: "key",
        url: "cachingiterator.key",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "scalar",
          ref: null
        }
      },
      next: {
        name: "next",
        url: "cachingiterator.next",
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
      offsetexists: {
        name: "offsetExists",
        url: "cachingiterator.offsetexists",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $index",
          returnValue: "void",
          ref: null
        }
      },
      offsetget: {
        name: "offsetGet",
        url: "cachingiterator.offsetget",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $index",
          returnValue: "void",
          ref: null
        }
      },
      offsetset: {
        name: "offsetSet",
        url: "cachingiterator.offsetset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $index, string $newval",
          returnValue: "void",
          ref: null
        }
      },
      offsetunset: {
        name: "offsetUnset",
        url: "cachingiterator.offsetunset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $index",
          returnValue: "void",
          ref: null
        }
      },
      rewind: {
        name: "rewind",
        url: "cachingiterator.rewind",
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
      setflags: {
        name: "setFlags",
        url: "cachingiterator.setflags",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $flags",
          returnValue: "void",
          ref: null
        }
      },
      valid: {
        name: "valid",
        url: "cachingiterator.valid",
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
        url: "cachingiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Iterator $iterator [, int $flags = self::CALL_TOSTRING ]",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "cachingiterator.tostring",
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
  cairo: {
    name: "Cairo",
    methods: {
      availablefonts: {
        name: "availableFonts",
        url: "cairo.availablefonts",
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
      availablesurfaces: {
        name: "availableSurfaces",
        url: "cairo.availablesurfaces",
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
      statustostring: {
        name: "statusToString",
        url: "cairo.statustostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $status",
          returnValue: "string",
          ref: null
        }
      },
      version: {
        name: "version",
        url: "cairo.version",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      versionstring: {
        name: "versionString",
        url: "cairo.versionstring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "string",
          ref: null
        }
      }
    }
  },
  cairocontext: {
    name: "CairoContext",
    methods: {
      appendpath: {
        name: "appendPath",
        url: "cairocontext.appendpath",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoPath $path",
          returnValue: "void",
          ref: null
        }
      },
      arc: {
        name: "arc",
        url: "cairocontext.arc",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y, float $radius, float $angle1, float $angle2",
          returnValue: "void",
          ref: null
        }
      },
      arcnegative: {
        name: "arcNegative",
        url: "cairocontext.arcnegative",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y, float $radius, float $angle1, float $angle2",
          returnValue: "void",
          ref: null
        }
      },
      clip: {
        name: "clip",
        url: "cairocontext.clip",
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
      clipextents: {
        name: "clipExtents",
        url: "cairocontext.clipextents",
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
      clippreserve: {
        name: "clipPreserve",
        url: "cairocontext.clippreserve",
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
      cliprectanglelist: {
        name: "clipRectangleList",
        url: "cairocontext.cliprectanglelist",
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
      closepath: {
        name: "closePath",
        url: "cairocontext.closepath",
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
      copypage: {
        name: "copyPage",
        url: "cairocontext.copypage",
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
      copypath: {
        name: "copyPath",
        url: "cairocontext.copypath",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "CairoPath",
          ref: null
        }
      },
      copypathflat: {
        name: "copyPathFlat",
        url: "cairocontext.copypathflat",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "CairoPath",
          ref: null
        }
      },
      curveto: {
        name: "curveTo",
        url: "cairocontext.curveto",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x2, float $y2, float $x3, float $y3",
          returnValue: "void",
          ref: null
        }
      },
      devicetouser: {
        name: "deviceToUser",
        url: "cairocontext.devicetouser",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "array",
          ref: null
        }
      },
      devicetouserdistance: {
        name: "deviceToUserDistance",
        url: "cairocontext.devicetouserdistance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "array",
          ref: null
        }
      },
      fill: {
        name: "fill",
        url: "cairocontext.fill",
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
      fillextents: {
        name: "fillExtents",
        url: "cairocontext.fillextents",
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
      fillpreserve: {
        name: "fillPreserve",
        url: "cairocontext.fillpreserve",
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
      fontextents: {
        name: "fontExtents",
        url: "cairocontext.fontextents",
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
      getantialias: {
        name: "getAntialias",
        url: "cairocontext.getantialias",
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
      getcurrentpoint: {
        name: "getCurrentPoint",
        url: "cairocontext.getcurrentpoint",
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
      getdash: {
        name: "getDash",
        url: "cairocontext.getdash",
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
      getdashcount: {
        name: "getDashCount",
        url: "cairocontext.getdashcount",
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
      getfillrule: {
        name: "getFillRule",
        url: "cairocontext.getfillrule",
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
      getfontface: {
        name: "getFontFace",
        url: "cairocontext.getfontface",
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
      getfontmatrix: {
        name: "getFontMatrix",
        url: "cairocontext.getfontmatrix",
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
      getfontoptions: {
        name: "getFontOptions",
        url: "cairocontext.getfontoptions",
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
      getgrouptarget: {
        name: "getGroupTarget",
        url: "cairocontext.getgrouptarget",
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
      getlinecap: {
        name: "getLineCap",
        url: "cairocontext.getlinecap",
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
      getlinejoin: {
        name: "getLineJoin",
        url: "cairocontext.getlinejoin",
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
      getlinewidth: {
        name: "getLineWidth",
        url: "cairocontext.getlinewidth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "float",
          ref: null
        }
      },
      getmatrix: {
        name: "getMatrix",
        url: "cairocontext.getmatrix",
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
      getmiterlimit: {
        name: "getMiterLimit",
        url: "cairocontext.getmiterlimit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "float",
          ref: null
        }
      },
      getoperator: {
        name: "getOperator",
        url: "cairocontext.getoperator",
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
      getscaledfont: {
        name: "getScaledFont",
        url: "cairocontext.getscaledfont",
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
      getsource: {
        name: "getSource",
        url: "cairocontext.getsource",
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
      gettarget: {
        name: "getTarget",
        url: "cairocontext.gettarget",
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
      gettolerance: {
        name: "getTolerance",
        url: "cairocontext.gettolerance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "float",
          ref: null
        }
      },
      glyphpath: {
        name: "glyphPath",
        url: "cairocontext.glyphpath",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $glyphs",
          returnValue: "void",
          ref: null
        }
      },
      hascurrentpoint: {
        name: "hasCurrentPoint",
        url: "cairocontext.hascurrentpoint",
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
      identitymatrix: {
        name: "identityMatrix",
        url: "cairocontext.identitymatrix",
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
      infill: {
        name: "inFill",
        url: "cairocontext.infill",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      instroke: {
        name: "inStroke",
        url: "cairocontext.instroke",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      lineto: {
        name: "lineTo",
        url: "cairocontext.lineto",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "void",
          ref: null
        }
      },
      mask: {
        name: "mask",
        url: "cairocontext.mask",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoPattern $pattern",
          returnValue: "void",
          ref: null
        }
      },
      masksurface: {
        name: "maskSurface",
        url: "cairocontext.masksurface",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoSurface $surface [, float $x [, float $y ]]",
          returnValue: "void",
          ref: null
        }
      },
      moveto: {
        name: "moveTo",
        url: "cairocontext.moveto",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "void",
          ref: null
        }
      },
      newpath: {
        name: "newPath",
        url: "cairocontext.newpath",
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
      newsubpath: {
        name: "newSubPath",
        url: "cairocontext.newsubpath",
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
      paint: {
        name: "paint",
        url: "cairocontext.paint",
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
      paintwithalpha: {
        name: "paintWithAlpha",
        url: "cairocontext.paintwithalpha",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $alpha",
          returnValue: "void",
          ref: null
        }
      },
      pathextents: {
        name: "pathExtents",
        url: "cairocontext.pathextents",
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
      popgroup: {
        name: "popGroup",
        url: "cairocontext.popgroup",
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
      popgrouptosource: {
        name: "popGroupToSource",
        url: "cairocontext.popgrouptosource",
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
      pushgroup: {
        name: "pushGroup",
        url: "cairocontext.pushgroup",
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
      pushgroupwithcontent: {
        name: "pushGroupWithContent",
        url: "cairocontext.pushgroupwithcontent",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $content",
          returnValue: "void",
          ref: null
        }
      },
      rectangle: {
        name: "rectangle",
        url: "cairocontext.rectangle",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y, float $width, float $height",
          returnValue: "void",
          ref: null
        }
      },
      relcurveto: {
        name: "relCurveTo",
        url: "cairocontext.relcurveto",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x2, float $y2, float $x3, float $y3",
          returnValue: "void",
          ref: null
        }
      },
      rellineto: {
        name: "relLineTo",
        url: "cairocontext.rellineto",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "void",
          ref: null
        }
      },
      relmoveto: {
        name: "relMoveTo",
        url: "cairocontext.relmoveto",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "void",
          ref: null
        }
      },
      resetclip: {
        name: "resetClip",
        url: "cairocontext.resetclip",
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
      restore: {
        name: "restore",
        url: "cairocontext.restore",
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
      rotate: {
        name: "rotate",
        url: "cairocontext.rotate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $angle",
          returnValue: "void",
          ref: null
        }
      },
      save: {
        name: "save",
        url: "cairocontext.save",
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
      scale: {
        name: "scale",
        url: "cairocontext.scale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "void",
          ref: null
        }
      },
      selectfontface: {
        name: "selectFontFace",
        url: "cairocontext.selectfontface",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $family [, int $slant [, int $weight ]]",
          returnValue: "void",
          ref: null
        }
      },
      setantialias: {
        name: "setAntialias",
        url: "cairocontext.setantialias",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $antialias ]",
          returnValue: "void",
          ref: null
        }
      },
      setdash: {
        name: "setDash",
        url: "cairocontext.setdash",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $dashes [, float $offset ]",
          returnValue: "void",
          ref: null
        }
      },
      setfillrule: {
        name: "setFillRule",
        url: "cairocontext.setfillrule",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $setting",
          returnValue: "void",
          ref: null
        }
      },
      setfontface: {
        name: "setFontFace",
        url: "cairocontext.setfontface",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoFontFace $fontface",
          returnValue: "void",
          ref: null
        }
      },
      setfontmatrix: {
        name: "setFontMatrix",
        url: "cairocontext.setfontmatrix",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoMatrix $matrix",
          returnValue: "void",
          ref: null
        }
      },
      setfontoptions: {
        name: "setFontOptions",
        url: "cairocontext.setfontoptions",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoFontOptions $fontoptions",
          returnValue: "void",
          ref: null
        }
      },
      setfontsize: {
        name: "setFontSize",
        url: "cairocontext.setfontsize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $size",
          returnValue: "void",
          ref: null
        }
      },
      setlinecap: {
        name: "setLineCap",
        url: "cairocontext.setlinecap",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $setting",
          returnValue: "void",
          ref: null
        }
      },
      setlinejoin: {
        name: "setLineJoin",
        url: "cairocontext.setlinejoin",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $setting",
          returnValue: "void",
          ref: null
        }
      },
      setlinewidth: {
        name: "setLineWidth",
        url: "cairocontext.setlinewidth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $width",
          returnValue: "void",
          ref: null
        }
      },
      setmatrix: {
        name: "setMatrix",
        url: "cairocontext.setmatrix",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoMatrix $matrix",
          returnValue: "void",
          ref: null
        }
      },
      setmiterlimit: {
        name: "setMiterLimit",
        url: "cairocontext.setmiterlimit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $limit",
          returnValue: "void",
          ref: null
        }
      },
      setoperator: {
        name: "setOperator",
        url: "cairocontext.setoperator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $setting",
          returnValue: "void",
          ref: null
        }
      },
      setscaledfont: {
        name: "setScaledFont",
        url: "cairocontext.setscaledfont",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoScaledFont $scaledfont",
          returnValue: "void",
          ref: null
        }
      },
      setsource: {
        name: "setSource",
        url: "cairocontext.setsource",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoPattern $pattern",
          returnValue: "void",
          ref: null
        }
      },
      setsourcergb: {
        name: "setSourceRGB",
        url: "cairocontext.setsourcergb",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $red, float $green, float $blue",
          returnValue: "void",
          ref: null
        }
      },
      setsourcergba: {
        name: "setSourceRGBA",
        url: "cairocontext.setsourcergba",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $red, float $green, float $blue, float $alpha",
          returnValue: "void",
          ref: null
        }
      },
      setsourcesurface: {
        name: "setSourceSurface",
        url: "cairocontext.setsourcesurface",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoSurface $surface [, float $x [, float $y ]]",
          returnValue: "void",
          ref: null
        }
      },
      settolerance: {
        name: "setTolerance",
        url: "cairocontext.settolerance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $tolerance",
          returnValue: "void",
          ref: null
        }
      },
      showpage: {
        name: "showPage",
        url: "cairocontext.showpage",
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
      showtext: {
        name: "showText",
        url: "cairocontext.showtext",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $text",
          returnValue: "void",
          ref: null
        }
      },
      status: {
        name: "status",
        url: "cairocontext.status",
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
      stroke: {
        name: "stroke",
        url: "cairocontext.stroke",
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
      strokeextents: {
        name: "strokeExtents",
        url: "cairocontext.strokeextents",
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
      strokepreserve: {
        name: "strokePreserve",
        url: "cairocontext.strokepreserve",
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
      textextents: {
        name: "textExtents",
        url: "cairocontext.textextents",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $text",
          returnValue: "array",
          ref: null
        }
      },
      textpath: {
        name: "textPath",
        url: "cairocontext.textpath",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $string",
          returnValue: "void",
          ref: null
        }
      },
      transform: {
        name: "transform",
        url: "cairocontext.transform",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoMatrix $matrix",
          returnValue: "void",
          ref: null
        }
      },
      translate: {
        name: "translate",
        url: "cairocontext.translate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "void",
          ref: null
        }
      },
      usertodevice: {
        name: "userToDevice",
        url: "cairocontext.usertodevice",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "array",
          ref: null
        }
      },
      usertodevicedistance: {
        name: "userToDeviceDistance",
        url: "cairocontext.usertodevicedistance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "array",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "cairocontext.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoSurface $surface",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairofontface: {
    name: "CairoFontFace",
    methods: {
      gettype: {
        name: "getType",
        url: "cairofontface.gettype",
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
      status: {
        name: "status",
        url: "cairofontface.status",
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
      __construct: {
        name: "__construct",
        url: "cairofontface.construct",
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
  cairofontoptions: {
    name: "CairoFontOptions",
    methods: {
      equal: {
        name: "equal",
        url: "cairofontoptions.equal",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoFontOptions $other",
          returnValue: "bool",
          ref: null
        }
      },
      getantialias: {
        name: "getAntialias",
        url: "cairofontoptions.getantialias",
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
      gethintmetrics: {
        name: "getHintMetrics",
        url: "cairofontoptions.gethintmetrics",
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
      gethintstyle: {
        name: "getHintStyle",
        url: "cairofontoptions.gethintstyle",
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
      getsubpixelorder: {
        name: "getSubpixelOrder",
        url: "cairofontoptions.getsubpixelorder",
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
      hash: {
        name: "hash",
        url: "cairofontoptions.hash",
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
      merge: {
        name: "merge",
        url: "cairofontoptions.merge",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoFontOptions $other",
          returnValue: "void",
          ref: null
        }
      },
      setantialias: {
        name: "setAntialias",
        url: "cairofontoptions.setantialias",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $antialias",
          returnValue: "void",
          ref: null
        }
      },
      sethintmetrics: {
        name: "setHintMetrics",
        url: "cairofontoptions.sethintmetrics",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $hint_metrics",
          returnValue: "void",
          ref: null
        }
      },
      sethintstyle: {
        name: "setHintStyle",
        url: "cairofontoptions.sethintstyle",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $hint_style",
          returnValue: "void",
          ref: null
        }
      },
      setsubpixelorder: {
        name: "setSubpixelOrder",
        url: "cairofontoptions.setsubpixelorder",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $subpixel_order",
          returnValue: "void",
          ref: null
        }
      },
      status: {
        name: "status",
        url: "cairofontoptions.status",
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
      __construct: {
        name: "__construct",
        url: "cairofontoptions.construct",
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
  cairoformat: {
    name: "CairoFormat",
    methods: {
      strideforwidth: {
        name: "strideForWidth",
        url: "cairoformat.strideforwidth",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $format, int $width",
          returnValue: "int",
          ref: null
        }
      }
    }
  },
  cairogradientpattern: {
    name: "CairoGradientPattern",
    methods: {
      addcolorstoprgb: {
        name: "addColorStopRgb",
        url: "cairogradientpattern.addcolorstoprgb",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $offset, float $red, float $green, float $blue",
          returnValue: "void",
          ref: null
        }
      },
      addcolorstoprgba: {
        name: "addColorStopRgba",
        url: "cairogradientpattern.addcolorstoprgba",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $offset, float $red, float $green, float $blue, float $alpha",
          returnValue: "void",
          ref: null
        }
      },
      getcolorstopcount: {
        name: "getColorStopCount",
        url: "cairogradientpattern.getcolorstopcount",
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
      getcolorstoprgba: {
        name: "getColorStopRgba",
        url: "cairogradientpattern.getcolorstoprgba",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $index",
          returnValue: "array",
          ref: null
        }
      },
      getextend: {
        name: "getExtend",
        url: "cairogradientpattern.getextend",
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
      setextend: {
        name: "setExtend",
        url: "cairogradientpattern.setextend",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $extend",
          returnValue: "void",
          ref: null
        }
      }
    }
  },
  cairoimagesurface: {
    name: "CairoImageSurface",
    methods: {
      createfordata: {
        name: "createForData",
        url: "cairoimagesurface.createfordata",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $data, int $format, int $width, int $height",
          returnValue: "void",
          ref: null
        }
      },
      createfrompng: {
        name: "createFromPng",
        url: "cairoimagesurface.createfrompng",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $file",
          returnValue: "CairoImageSurface",
          ref: null
        }
      },
      getdata: {
        name: "getData",
        url: "cairoimagesurface.getdata",
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
      getformat: {
        name: "getFormat",
        url: "cairoimagesurface.getformat",
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
      getheight: {
        name: "getHeight",
        url: "cairoimagesurface.getheight",
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
      getstride: {
        name: "getStride",
        url: "cairoimagesurface.getstride",
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
      getwidth: {
        name: "getWidth",
        url: "cairoimagesurface.getwidth",
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
      __construct: {
        name: "__construct",
        url: "cairoimagesurface.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $format, int $width, int $height",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairolineargradient: {
    name: "CairoLinearGradient",
    methods: {
      getpoints: {
        name: "getPoints",
        url: "cairolineargradient.getpoints",
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
        url: "cairolineargradient.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x0, float $y0, float $x1, float $y1",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairomatrix: {
    name: "CairoMatrix",
    methods: {
      initidentity: {
        name: "initIdentity",
        url: "cairomatrix.initidentity",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      initrotate: {
        name: "initRotate",
        url: "cairomatrix.initrotate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "float $radians",
          returnValue: "void",
          ref: null
        }
      },
      initscale: {
        name: "initScale",
        url: "cairomatrix.initscale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "float $sx, float $sy",
          returnValue: "void",
          ref: null
        }
      },
      inittranslate: {
        name: "initTranslate",
        url: "cairomatrix.inittranslate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "float $tx, float $ty",
          returnValue: "void",
          ref: null
        }
      },
      invert: {
        name: "invert",
        url: "cairomatrix.invert",
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
      multiply: {
        name: "multiply",
        url: "cairomatrix.multiply",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "CairoMatrix $matrix1, CairoMatrix $matrix2",
          returnValue: "CairoMatrix",
          ref: null
        }
      },
      rotate: {
        name: "rotate",
        url: "cairomatrix.rotate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radians",
          returnValue: "void",
          ref: null
        }
      },
      scale: {
        name: "scale",
        url: "cairomatrix.scale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $sx, float $sy",
          returnValue: "void",
          ref: null
        }
      },
      transformdistance: {
        name: "transformDistance",
        url: "cairomatrix.transformdistance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $dx, float $dy",
          returnValue: "array",
          ref: null
        }
      },
      transformpoint: {
        name: "transformPoint",
        url: "cairomatrix.transformpoint",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $dx, float $dy",
          returnValue: "array",
          ref: null
        }
      },
      translate: {
        name: "translate",
        url: "cairomatrix.translate",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $tx, float $ty",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "cairomatrix.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ float $xx = 1.0 [, float $yx = 0.0 [, float $xy = 0.0 [, float $yy = 1.0 [, float $x0 = 0.0 [, float $y0 = 0.0 ]]]]]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairopattern: {
    name: "CairoPattern",
    methods: {
      getmatrix: {
        name: "getMatrix",
        url: "cairopattern.getmatrix",
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
      gettype: {
        name: "getType",
        url: "cairopattern.gettype",
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
      setmatrix: {
        name: "setMatrix",
        url: "cairopattern.setmatrix",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoMatrix $matrix",
          returnValue: "void",
          ref: null
        }
      },
      status: {
        name: "status",
        url: "cairopattern.status",
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
      __construct: {
        name: "__construct",
        url: "cairopattern.construct",
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
  cairopdfsurface: {
    name: "CairoPdfSurface",
    methods: {
      setsize: {
        name: "setSize",
        url: "cairopdfsurface.setsize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $width, float $height",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "cairopdfsurface.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $file, float $width, float $height",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairopssurface: {
    name: "CairoPsSurface",
    methods: {
      dscbeginpagesetup: {
        name: "dscBeginPageSetup",
        url: "cairopssurface.dscbeginpagesetup",
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
      dscbeginsetup: {
        name: "dscBeginSetup",
        url: "cairopssurface.dscbeginsetup",
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
      dsccomment: {
        name: "dscComment",
        url: "cairopssurface.dsccomment",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $comment",
          returnValue: "void",
          ref: null
        }
      },
      geteps: {
        name: "getEps",
        url: "cairopssurface.geteps",
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
      getlevels: {
        name: "getLevels",
        url: "cairopssurface.getlevels",
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
      leveltostring: {
        name: "levelToString",
        url: "cairopssurface.leveltostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $level",
          returnValue: "string",
          ref: null
        }
      },
      restricttolevel: {
        name: "restrictToLevel",
        url: "cairopssurface.restricttolevel",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $level",
          returnValue: "void",
          ref: null
        }
      },
      seteps: {
        name: "setEps",
        url: "cairopssurface.seteps",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $level",
          returnValue: "void",
          ref: null
        }
      },
      setsize: {
        name: "setSize",
        url: "cairopssurface.setsize",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $width, float $height",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "cairopssurface.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $file, float $width, float $height",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairoradialgradient: {
    name: "CairoRadialGradient",
    methods: {
      getcircles: {
        name: "getCircles",
        url: "cairoradialgradient.getcircles",
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
        url: "cairoradialgradient.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x0, float $y0, float $r0, float $x1, float $y1, float $r1",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairoscaledfont: {
    name: "CairoScaledFont",
    methods: {
      extents: {
        name: "extents",
        url: "cairoscaledfont.extents",
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
      getctm: {
        name: "getCtm",
        url: "cairoscaledfont.getctm",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "CairoMatrix",
          ref: null
        }
      },
      getfontface: {
        name: "getFontFace",
        url: "cairoscaledfont.getfontface",
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
      getfontmatrix: {
        name: "getFontMatrix",
        url: "cairoscaledfont.getfontmatrix",
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
      getfontoptions: {
        name: "getFontOptions",
        url: "cairoscaledfont.getfontoptions",
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
      getscalematrix: {
        name: "getScaleMatrix",
        url: "cairoscaledfont.getscalematrix",
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
      gettype: {
        name: "getType",
        url: "cairoscaledfont.gettype",
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
      glyphextents: {
        name: "glyphExtents",
        url: "cairoscaledfont.glyphextents",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $glyphs",
          returnValue: "array",
          ref: null
        }
      },
      status: {
        name: "status",
        url: "cairoscaledfont.status",
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
      textextents: {
        name: "textExtents",
        url: "cairoscaledfont.textextents",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $text",
          returnValue: "array",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "cairoscaledfont.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoFontFace $font_face, CairoMatrix $matrix, CairoMatrix $ctm, CairoFontOptions $options",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairosolidpattern: {
    name: "CairoSolidPattern",
    methods: {
      getrgba: {
        name: "getRgba",
        url: "cairosolidpattern.getrgba",
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
        url: "cairosolidpattern.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $red, float $green, float $blue [, float $alpha = 0 ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairosurface: {
    name: "CairoSurface",
    methods: {
      copypage: {
        name: "copyPage",
        url: "cairosurface.copypage",
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
      createsimilar: {
        name: "createSimilar",
        url: "cairosurface.createsimilar",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoSurface $other, int $content, string $width, string $height",
          returnValue: "void",
          ref: null
        }
      },
      finish: {
        name: "finish",
        url: "cairosurface.finish",
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
      flush: {
        name: "flush",
        url: "cairosurface.flush",
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
      getcontent: {
        name: "getContent",
        url: "cairosurface.getcontent",
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
      getdeviceoffset: {
        name: "getDeviceOffset",
        url: "cairosurface.getdeviceoffset",
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
      getfontoptions: {
        name: "getFontOptions",
        url: "cairosurface.getfontoptions",
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
      gettype: {
        name: "getType",
        url: "cairosurface.gettype",
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
      markdirty: {
        name: "markDirty",
        url: "cairosurface.markdirty",
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
      markdirtyrectangle: {
        name: "markDirtyRectangle",
        url: "cairosurface.markdirtyrectangle",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y, float $width, float $height",
          returnValue: "void",
          ref: null
        }
      },
      setdeviceoffset: {
        name: "setDeviceOffset",
        url: "cairosurface.setdeviceoffset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "void",
          ref: null
        }
      },
      setfallbackresolution: {
        name: "setFallbackResolution",
        url: "cairosurface.setfallbackresolution",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y",
          returnValue: "void",
          ref: null
        }
      },
      showpage: {
        name: "showPage",
        url: "cairosurface.showpage",
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
      status: {
        name: "status",
        url: "cairosurface.status",
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
      writetopng: {
        name: "writeToPng",
        url: "cairosurface.writetopng",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $file",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "cairosurface.construct",
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
  cairosurfacepattern: {
    name: "CairoSurfacePattern",
    methods: {
      getextend: {
        name: "getExtend",
        url: "cairosurfacepattern.getextend",
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
      getfilter: {
        name: "getFilter",
        url: "cairosurfacepattern.getfilter",
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
      getsurface: {
        name: "getSurface",
        url: "cairosurfacepattern.getsurface",
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
      setextend: {
        name: "setExtend",
        url: "cairosurfacepattern.setextend",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $extend",
          returnValue: "void",
          ref: null
        }
      },
      setfilter: {
        name: "setFilter",
        url: "cairosurfacepattern.setfilter",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $filter",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "cairosurfacepattern.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "CairoSurface $surface",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  cairosvgsurface: {
    name: "CairoSvgSurface",
    methods: {
      getversions: {
        name: "getVersions",
        url: "cairosvgsurface.getversions",
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
      restricttoversion: {
        name: "restrictToVersion",
        url: "cairosvgsurface.restricttoversion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $version",
          returnValue: "void",
          ref: null
        }
      },
      versiontostring: {
        name: "versionToString",
        url: "cairosvgsurface.versiontostring",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $version",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "cairosvgsurface.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $file, float $width, float $height",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  callbackfilteriterator: {
    name: "CallbackFilterIterator",
    methods: {
      accept: {
        name: "accept",
        url: "callbackfilteriterator.accept",
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
        url: "callbackfilteriterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Iterator $iterator, callable $callback",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  chdb: {
    name: "chdb",
    methods: {
      get: {
        name: "get",
        url: "chdb.get",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key",
          returnValue: "string",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "chdb.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $pathname",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  closure: {
    name: "Closure",
    methods: {
      bind: {
        name: "bind",
        url: "closure.bind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "Closure $closure, object $newthis [, mixed $newscope = \"static\" ]",
          returnValue: "Closure",
          ref: null
        }
      },
      bindto: {
        name: "bindTo",
        url: "closure.bindto",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $newthis [, mixed $newscope = \"static\" ]",
          returnValue: "Closure",
          ref: null
        }
      },
      call: {
        name: "call",
        url: "closure.call",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "object $newthis [, mixed $... ]",
          returnValue: "mixed",
          ref: null
        }
      },
      fromcallable: {
        name: "fromCallable",
        url: "closure.fromcallable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "callable $callable",
          returnValue: "Closure",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "closure.construct",
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
  collator: {
    name: "Collator",
    methods: {
      asort: {
        name: "asort",
        url: "collator.asort",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array &$arr [, int $sort_flag ]",
          returnValue: "bool",
          ref: null
        }
      },
      compare: {
        name: "compare",
        url: "collator.compare",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $str1, string $str2",
          returnValue: "int",
          ref: null
        }
      },
      create: {
        name: "create",
        url: "collator.create",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale",
          returnValue: "Collator",
          ref: null
        }
      },
      getattribute: {
        name: "getAttribute",
        url: "collator.getattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $attr",
          returnValue: "int",
          ref: null
        }
      },
      geterrorcode: {
        name: "getErrorCode",
        url: "collator.geterrorcode",
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
      geterrormessage: {
        name: "getErrorMessage",
        url: "collator.geterrormessage",
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
      getlocale: {
        name: "getLocale",
        url: "collator.getlocale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $type",
          returnValue: "string",
          ref: null
        }
      },
      getsortkey: {
        name: "getSortKey",
        url: "collator.getsortkey",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $str",
          returnValue: "string",
          ref: null
        }
      },
      getstrength: {
        name: "getStrength",
        url: "collator.getstrength",
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
        url: "collator.setattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $attr, int $val",
          returnValue: "bool",
          ref: null
        }
      },
      setstrength: {
        name: "setStrength",
        url: "collator.setstrength",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $strength",
          returnValue: "bool",
          ref: null
        }
      },
      sort: {
        name: "sort",
        url: "collator.sort",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array &$arr [, int $sort_flag ]",
          returnValue: "bool",
          ref: null
        }
      },
      sortwithsortkeys: {
        name: "sortWithSortKeys",
        url: "collator.sortwithsortkeys",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array &$arr",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "collator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $locale",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  collectable: {
    name: "Collectable",
    methods: {
      isgarbage: {
        name: "isGarbage",
        url: "collectable.isgarbage",
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
      setgarbage: {
        name: "setGarbage",
        url: "collectable.setgarbage",
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
  collection: {
    name: "Collection",
    methods: {
      add: {
        name: "add",
        url: "mysql-xdevapi-collection.add",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $document",
          returnValue: "mysql_xdevapi\\CollectionAdd",
          ref: null
        }
      },
      addorreplaceone: {
        name: "addOrReplaceOne",
        url: "mysql-xdevapi-collection.addorreplaceone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $id, string $doc",
          returnValue: "mysql_xdevapi\\Result",
          ref: null
        }
      },
      count: {
        name: "count",
        url: "mysql-xdevapi-collection.count",
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
      createindex: {
        name: "createIndex",
        url: "mysql-xdevapi-collection.createindex",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $index_name, string $index_desc_json",
          returnValue: "void",
          ref: null
        }
      },
      dropindex: {
        name: "dropIndex",
        url: "mysql-xdevapi-collection.dropindex",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $index_name",
          returnValue: "bool",
          ref: null
        }
      },
      existsindatabase: {
        name: "existsInDatabase",
        url: "mysql-xdevapi-collection.existsindatabase",
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
      find: {
        name: "find",
        url: "mysql-xdevapi-collection.find",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $search_condition ]",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      getname: {
        name: "getName",
        url: "mysql-xdevapi-collection.getname",
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
      getone: {
        name: "getOne",
        url: "mysql-xdevapi-collection.getone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $id",
          returnValue: "Document",
          ref: null
        }
      },
      getschema: {
        name: "getSchema",
        url: "mysql-xdevapi-collection.getschema",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Schema Object",
          ref: null
        }
      },
      getsession: {
        name: "getSession",
        url: "mysql-xdevapi-collection.getsession",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Session",
          ref: null
        }
      },
      modify: {
        name: "modify",
        url: "mysql-xdevapi-collection.modify",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $search_condition",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      remove: {
        name: "remove",
        url: "mysql-xdevapi-collection.remove",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $search_condition",
          returnValue: "mysql_xdevapi\\CollectionRemove",
          ref: null
        }
      },
      removeone: {
        name: "removeOne",
        url: "mysql-xdevapi-collection.removeone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $id",
          returnValue: "mysql_xdevapi\\Result",
          ref: null
        }
      },
      replaceone: {
        name: "replaceOne",
        url: "mysql-xdevapi-collection.replaceone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $id, string $doc",
          returnValue: "mysql_xdevapi\\Result",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-collection.construct",
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
  collectionadd: {
    name: "CollectionAdd",
    methods: {
      execute: {
        name: "execute",
        url: "mysql-xdevapi-collectionadd.execute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\Result",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-collectionadd.construct",
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
  collectionfind: {
    name: "CollectionFind",
    methods: {
      bind: {
        name: "bind",
        url: "mysql-xdevapi-collectionfind.bind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $placeholder_values",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      execute: {
        name: "execute",
        url: "mysql-xdevapi-collectionfind.execute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\DocResult",
          ref: null
        }
      },
      fields: {
        name: "fields",
        url: "mysql-xdevapi-collectionfind.fields",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $projection",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      groupby: {
        name: "groupBy",
        url: "mysql-xdevapi-collectionfind.groupby",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $sort_expr",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      having: {
        name: "having",
        url: "mysql-xdevapi-collectionfind.having",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $sort_expr",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      limit: {
        name: "limit",
        url: "mysql-xdevapi-collectionfind.limit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $rows",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      lockexclusive: {
        name: "lockExclusive",
        url: "mysql-xdevapi-collectionfind.lockexclusive",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ integer $lock_waiting_option ]",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      lockshared: {
        name: "lockShared",
        url: "mysql-xdevapi-collectionfind.lockshared",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ integer $lock_waiting_option ]",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      offset: {
        name: "offset",
        url: "mysql-xdevapi-collectionfind.offset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $position",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      sort: {
        name: "sort",
        url: "mysql-xdevapi-collectionfind.sort",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $sort_expr",
          returnValue: "mysql_xdevapi\\CollectionFind",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-collectionfind.construct",
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
  collectionmodify: {
    name: "CollectionModify",
    methods: {
      arrayappend: {
        name: "arrayAppend",
        url: "mysql-xdevapi-collectionmodify.arrayappend",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $collection_field, string $expression_or_literal",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      arrayinsert: {
        name: "arrayInsert",
        url: "mysql-xdevapi-collectionmodify.arrayinsert",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $collection_field, string $expression_or_literal",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      bind: {
        name: "bind",
        url: "mysql-xdevapi-collectionmodify.bind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $placeholder_values",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      execute: {
        name: "execute",
        url: "mysql-xdevapi-collectionmodify.execute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\Result",
          ref: null
        }
      },
      limit: {
        name: "limit",
        url: "mysql-xdevapi-collectionmodify.limit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $rows",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      patch: {
        name: "patch",
        url: "mysql-xdevapi-collectionmodify.patch",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $document",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      replace: {
        name: "replace",
        url: "mysql-xdevapi-collectionmodify.replace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $collection_field, string $expression_or_literal",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      set: {
        name: "set",
        url: "mysql-xdevapi-collectionmodify.set",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $collection_field, string $expression_or_literal",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      skip: {
        name: "skip",
        url: "mysql-xdevapi-collectionmodify.skip",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $position",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      sort: {
        name: "sort",
        url: "mysql-xdevapi-collectionmodify.sort",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $sort_expr",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      unset: {
        name: "unset",
        url: "mysql-xdevapi-collectionmodify.unset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $fields",
          returnValue: "mysql_xdevapi\\CollectionModify",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-collectionmodify.construct",
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
  collectionremove: {
    name: "CollectionRemove",
    methods: {
      bind: {
        name: "bind",
        url: "mysql-xdevapi-collectionremove.bind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $placeholder_values",
          returnValue: "mysql_xdevapi\\CollectionRemove",
          ref: null
        }
      },
      execute: {
        name: "execute",
        url: "mysql-xdevapi-collectionremove.execute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mysql_xdevapi\\Result",
          ref: null
        }
      },
      limit: {
        name: "limit",
        url: "mysql-xdevapi-collectionremove.limit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $rows",
          returnValue: "mysql_xdevapi\\CollectionRemove",
          ref: null
        }
      },
      sort: {
        name: "sort",
        url: "mysql-xdevapi-collectionremove.sort",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $sort_expr",
          returnValue: "mysql_xdevapi\\CollectionRemove",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "mysql-xdevapi-collectionremove.construct",
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
  columnresult: {
    name: "ColumnResult",
    methods: {
      getcharactersetname: {
        name: "getCharacterSetName",
        url: "mysql-xdevapi-columnresult.getcharactersetname",
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
      getcollationname: {
        name: "getCollationName",
        url: "mysql-xdevapi-columnresult.getcollationname",
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
      getcolumnlabel: {
        name: "getColumnLabel",
        url: "mysql-xdevapi-columnresult.getcolumnlabel",
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
      getcolumnname: {
        name: "getColumnName",
        url: "mysql-xdevapi-columnresult.getcolumnname",
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
      getfractionaldigits: {
        name: "getFractionalDigits",
        url: "mysql-xdevapi-columnresult.getfractionaldigits",
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
      getlength: {
        name: "getLength",
        url: "mysql-xdevapi-columnresult.getlength",
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
      getschemaname: {
        name: "getSchemaName",
        url: "mysql-xdevapi-columnresult.getschemaname",
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
      gettablelabel: {
        name: "getTableLabel",
        url: "mysql-xdevapi-columnresult.gettablelabel",
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
      gettablename: {
        name: "getTableName",
        url: "mysql-xdevapi-columnresult.gettablename",
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
        url: "mysql-xdevapi-columnresult.gettype",
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
      isnumbersigned: {
        name: "isNumberSigned",
        url: "mysql-xdevapi-columnresult.isnumbersigned",
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
      ispadded: {
        name: "isPadded",
        url: "mysql-xdevapi-columnresult.ispadded",
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
        url: "mysql-xdevapi-columnresult.construct",
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
  cond: {
    name: "Cond",
    methods: {
      broadcast: {
        name: "broadcast",
        url: "cond.broadcast",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "int $condition",
          returnValue: "bool",
          ref: null
        }
      },
      create: {
        name: "create",
        url: "cond.create",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      },
      destroy: {
        name: "destroy",
        url: "cond.destroy",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "int $condition",
          returnValue: "bool",
          ref: null
        }
      },
      signal: {
        name: "signal",
        url: "cond.signal",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "int $condition",
          returnValue: "bool",
          ref: null
        }
      },
      wait: {
        name: "wait",
        url: "cond.wait",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: true,
          isStatic: true,
          parameters: "int $condition, int $mutex [, int $timeout ]",
          returnValue: "bool",
          ref: null
        }
      }
    }
  },
  countable: {
    name: "Countable",
    methods: {
      count: {
        name: "count",
        url: "countable.count",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "int",
          ref: null
        }
      }
    }
  },
  counter: {
    name: "Counter",
    methods: {
      bumpvalue: {
        name: "bumpValue",
        url: "internals2.counter.counter-class.bumpvalue",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $offset",
          returnValue: "",
          ref: null
        }
      },
      getmeta: {
        name: "getMeta",
        url: "internals2.counter.counter-class.getmeta",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "integer $attribute",
          returnValue: "mixed",
          ref: null
        }
      },
      getnamed: {
        name: "getNamed",
        url: "internals2.counter.counter-class.getnamed",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $name",
          returnValue: "Counter",
          ref: null
        }
      },
      getvalue: {
        name: "getValue",
        url: "internals2.counter.counter-class.getvalue",
        spec: {
          isPublic: false,
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
      resetvalue: {
        name: "resetValue",
        url: "internals2.counter.counter-class.resetvalue",
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
      },
      setcounterclass: {
        name: "setCounterClass",
        url: "internals2.counter.counter-class.setcounterclass",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $name",
          returnValue: "",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "internals2.counter.counter-class.construct",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name [, integer $initial_value [, integer $flags ]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  crudoperationbindable: {
    name: "CrudOperationBindable",
    methods: {
      bind: {
        name: "bind",
        url: "mysql-xdevapi-crudoperationbindable.bind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "array $placeholder_values",
          returnValue: "mysql_xdevapi\\CrudOperationBindable",
          ref: null
        }
      }
    }
  },
  crudoperationlimitable: {
    name: "CrudOperationLimitable",
    methods: {
      limit: {
        name: "limit",
        url: "mysql-xdevapi-crudoperationlimitable.limit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "integer $rows",
          returnValue: "mysql_xdevapi\\CrudOperationLimitable",
          ref: null
        }
      }
    }
  },
  crudoperationskippable: {
    name: "CrudOperationSkippable",
    methods: {
      skip: {
        name: "skip",
        url: "mysql-xdevapi-crudoperationskippable.skip",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "integer $skip",
          returnValue: "mysql_xdevapi\\CrudOperationSkippable",
          ref: null
        }
      }
    }
  },
  crudoperationsortable: {
    name: "CrudOperationSortable",
    methods: {
      sort: {
        name: "sort",
        url: "mysql-xdevapi-crudoperationsortable.sort",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "string $sort_expr",
          returnValue: "mysql_xdevapi\\CrudOperationSortable",
          ref: null
        }
      }
    }
  },
  curlfile: {
    name: "CURLFile",
    methods: {
      getfilename: {
        name: "getFilename",
        url: "curlfile.getfilename",
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
        url: "curlfile.getmimetype",
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
      getpostfilename: {
        name: "getPostFilename",
        url: "curlfile.getpostfilename",
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
      setmimetype: {
        name: "setMimeType",
        url: "curlfile.setmimetype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $mime",
          returnValue: "void",
          ref: null
        }
      },
      setpostfilename: {
        name: "setPostFilename",
        url: "curlfile.setpostfilename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $postname",
          returnValue: "void",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "curlfile.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename [, string $mimetype [, string $postname ]]",
          returnValue: "",
          ref: null
        }
      },
      __wakeup: {
        name: "__wakeup",
        url: "curlfile.wakeup",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          "returnValue": "void",
          "ref": null
        }
      }
    }
  }
};
