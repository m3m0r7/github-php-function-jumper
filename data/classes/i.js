classes.i = {
  imagick: {
    name: "Imagick",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      adaptiveblurimage: {
        name: "adaptiveBlurImage",
        url: "imagick.adaptiveblurimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      adaptiveresizeimage: {
        name: "adaptiveResizeImage",
        url: "imagick.adaptiveresizeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows [, bool $bestfit = false ]",
          returnValue: "bool",
          ref: null
        }
      },
      adaptivesharpenimage: {
        name: "adaptiveSharpenImage",
        url: "imagick.adaptivesharpenimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      adaptivethresholdimage: {
        name: "adaptiveThresholdImage",
        url: "imagick.adaptivethresholdimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $offset",
          returnValue: "bool",
          ref: null
        }
      },
      addimage: {
        name: "addImage",
        url: "imagick.addimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $source",
          returnValue: "bool",
          ref: null
        }
      },
      addnoiseimage: {
        name: "addNoiseImage",
        url: "imagick.addnoiseimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $noise_type [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      affinetransformimage: {
        name: "affineTransformImage",
        url: "imagick.affinetransformimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickDraw $matrix",
          returnValue: "bool",
          ref: null
        }
      },
      animateimages: {
        name: "animateImages",
        url: "imagick.animateimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $x_server",
          returnValue: "bool",
          ref: null
        }
      },
      annotateimage: {
        name: "annotateImage",
        url: "imagick.annotateimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickDraw $draw_settings, float $x, float $y, float $angle, string $text",
          returnValue: "bool",
          ref: null
        }
      },
      appendimages: {
        name: "appendImages",
        url: "imagick.appendimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $stack = false",
          returnValue: "Imagick",
          ref: null
        }
      },
      autolevelimage: {
        name: "autoLevelImage",
        url: "imagick.autolevelimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      averageimages: {
        name: "averageImages",
        url: "imagick.averageimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Imagick",
          ref: null
        }
      },
      blackthresholdimage: {
        name: "blackThresholdImage",
        url: "imagick.blackthresholdimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $threshold",
          returnValue: "bool",
          ref: null
        }
      },
      blueshiftimage: {
        name: "blueShiftImage",
        url: "imagick.blueshiftimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ float $factor = 1.5 ]",
          returnValue: "bool",
          ref: null
        }
      },
      blurimage: {
        name: "blurImage",
        url: "imagick.blurimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma [, int $channel ]",
          returnValue: "bool",
          ref: null
        }
      },
      borderimage: {
        name: "borderImage",
        url: "imagick.borderimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $bordercolor, int $width, int $height",
          returnValue: "bool",
          ref: null
        }
      },
      brightnesscontrastimage: {
        name: "brightnessContrastImage",
        url: "imagick.brightnesscontrastimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $brightness, float $contrast [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      charcoalimage: {
        name: "charcoalImage",
        url: "imagick.charcoalimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma",
          returnValue: "bool",
          ref: null
        }
      },
      chopimage: {
        name: "chopImage",
        url: "imagick.chopimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      clampimage: {
        name: "clampImage",
        url: "imagick.clampimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      clear: {
        name: "clear",
        url: "imagick.clear",
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
      clipimage: {
        name: "clipImage",
        url: "imagick.clipimage",
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
      clipimagepath: {
        name: "clipImagePath",
        url: "imagick.clipimagepath",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $pathname, string $inside",
          returnValue: "void",
          ref: null
        }
      },
      clippathimage: {
        name: "clipPathImage",
        url: "imagick.clippathimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $pathname, bool $inside",
          returnValue: "bool",
          ref: null
        }
      },
      clone: {
        name: "clone",
        url: "imagick.clone",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Imagick",
          ref: null
        }
      },
      clutimage: {
        name: "clutImage",
        url: "imagick.clutimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $lookup_table [, float $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      coalesceimages: {
        name: "coalesceImages",
        url: "imagick.coalesceimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Imagick",
          ref: null
        }
      },
      colorfloodfillimage: {
        name: "colorFloodfillImage",
        url: "imagick.colorfloodfillimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $fill, float $fuzz, mixed $bordercolor, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      colorizeimage: {
        name: "colorizeImage",
        url: "imagick.colorizeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $colorize, mixed $opacity",
          returnValue: "bool",
          ref: null
        }
      },
      colormatriximage: {
        name: "colorMatrixImage",
        url: "imagick.colormatriximage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $color_matrix = Imagick::CHANNEL_DEFAULT",
          returnValue: "bool",
          ref: null
        }
      },
      combineimages: {
        name: "combineImages",
        url: "imagick.combineimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channelType",
          returnValue: "Imagick",
          ref: null
        }
      },
      commentimage: {
        name: "commentImage",
        url: "imagick.commentimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $comment",
          returnValue: "bool",
          ref: null
        }
      },
      compareimagechannels: {
        name: "compareImageChannels",
        url: "imagick.compareimagechannels",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $image, int $channelType, int $metricType",
          returnValue: "array",
          ref: null
        }
      },
      compareimagelayers: {
        name: "compareImageLayers",
        url: "imagick.compareimagelayers",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $method",
          returnValue: "Imagick",
          ref: null
        }
      },
      compareimages: {
        name: "compareImages",
        url: "imagick.compareimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $compare, int $metric",
          returnValue: "array",
          ref: null
        }
      },
      compositeimage: {
        name: "compositeImage",
        url: "imagick.compositeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $composite_object, int $composite, int $x, int $y [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      contrastimage: {
        name: "contrastImage",
        url: "imagick.contrastimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $sharpen",
          returnValue: "bool",
          ref: null
        }
      },
      contraststretchimage: {
        name: "contrastStretchImage",
        url: "imagick.contraststretchimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $black_point, float $white_point [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      convolveimage: {
        name: "convolveImage",
        url: "imagick.convolveimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $kernel [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      count: {
        name: "count",
        url: "imagick.count",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $mode = 0 ]",
          returnValue: "int",
          ref: null
        }
      },
      cropimage: {
        name: "cropImage",
        url: "imagick.cropimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      cropthumbnailimage: {
        name: "cropThumbnailImage",
        url: "imagick.cropthumbnailimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height",
          returnValue: "bool",
          ref: null
        }
      },
      current: {
        name: "current",
        url: "imagick.current",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Imagick",
          ref: null
        }
      },
      cyclecolormapimage: {
        name: "cycleColormapImage",
        url: "imagick.cyclecolormapimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $displace",
          returnValue: "bool",
          ref: null
        }
      },
      decipherimage: {
        name: "decipherImage",
        url: "imagick.decipherimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $passphrase",
          returnValue: "bool",
          ref: null
        }
      },
      deconstructimages: {
        name: "deconstructImages",
        url: "imagick.deconstructimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Imagick",
          ref: null
        }
      },
      deleteimageartifact: {
        name: "deleteImageArtifact",
        url: "imagick.deleteimageartifact",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $artifact",
          returnValue: "bool",
          ref: null
        }
      },
      deleteimageproperty: {
        name: "deleteImageProperty",
        url: "imagick.deleteimageproperty",
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
      deskewimage: {
        name: "deskewImage",
        url: "imagick.deskewimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $threshold",
          returnValue: "bool",
          ref: null
        }
      },
      despeckleimage: {
        name: "despeckleImage",
        url: "imagick.despeckleimage",
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
      destroy: {
        name: "destroy",
        url: "imagick.destroy",
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
      displayimage: {
        name: "displayImage",
        url: "imagick.displayimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $servername",
          returnValue: "bool",
          ref: null
        }
      },
      displayimages: {
        name: "displayImages",
        url: "imagick.displayimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $servername",
          returnValue: "bool",
          ref: null
        }
      },
      distortimage: {
        name: "distortImage",
        url: "imagick.distortimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $method, array $arguments, bool $bestfit",
          returnValue: "bool",
          ref: null
        }
      },
      drawimage: {
        name: "drawImage",
        url: "imagick.drawimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickDraw $draw",
          returnValue: "bool",
          ref: null
        }
      },
      edgeimage: {
        name: "edgeImage",
        url: "imagick.edgeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "bool",
          ref: null
        }
      },
      embossimage: {
        name: "embossImage",
        url: "imagick.embossimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma",
          returnValue: "bool",
          ref: null
        }
      },
      encipherimage: {
        name: "encipherImage",
        url: "imagick.encipherimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $passphrase",
          returnValue: "bool",
          ref: null
        }
      },
      enhanceimage: {
        name: "enhanceImage",
        url: "imagick.enhanceimage",
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
      equalizeimage: {
        name: "equalizeImage",
        url: "imagick.equalizeimage",
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
      evaluateimage: {
        name: "evaluateImage",
        url: "imagick.evaluateimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $op, float $constant [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      exportimagepixels: {
        name: "exportImagePixels",
        url: "imagick.exportimagepixels",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $x, int $y, int $width, int $height, string $map, int $STORAGE",
          returnValue: "array",
          ref: null
        }
      },
      extentimage: {
        name: "extentImage",
        url: "imagick.extentimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      filter: {
        name: "filter",
        url: "imagick.filter",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickKernel $ImagickKernel [, int $channel = Imagick::CHANNEL_UNDEFINED ]",
          returnValue: "bool",
          ref: null
        }
      },
      flattenimages: {
        name: "flattenImages",
        url: "imagick.flattenimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Imagick",
          ref: null
        }
      },
      flipimage: {
        name: "flipImage",
        url: "imagick.flipimage",
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
      floodfillpaintimage: {
        name: "floodFillPaintImage",
        url: "imagick.floodfillpaintimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $fill, float $fuzz, mixed $target, int $x, int $y, bool $invert [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      flopimage: {
        name: "flopImage",
        url: "imagick.flopimage",
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
      forwardfouriertransformimage: {
        name: "forwardFourierTransformImage",
        url: "imagick.forwardfouriertransformimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $magnitude",
          returnValue: "bool",
          ref: null
        }
      },
      frameimage: {
        name: "frameImage",
        url: "imagick.frameimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $matte_color, int $width, int $height, int $inner_bevel, int $outer_bevel",
          returnValue: "bool",
          ref: null
        }
      },
      functionimage: {
        name: "functionImage",
        url: "imagick.functionimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $function, array $arguments [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      fximage: {
        name: "fxImage",
        url: "imagick.fximage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $expression [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "Imagick",
          ref: null
        }
      },
      gammaimage: {
        name: "gammaImage",
        url: "imagick.gammaimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $gamma [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      gaussianblurimage: {
        name: "gaussianBlurImage",
        url: "imagick.gaussianblurimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      getcolorspace: {
        name: "getColorspace",
        url: "imagick.getcolorspace",
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
      getcompression: {
        name: "getCompression",
        url: "imagick.getcompression",
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
      getcompressionquality: {
        name: "getCompressionQuality",
        url: "imagick.getcompressionquality",
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
      getcopyright: {
        name: "getCopyright",
        url: "imagick.getcopyright",
        spec: {
          isPublic: false,
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
        url: "imagick.getfilename",
        spec: {
          isPublic: false,
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
      getfont: {
        name: "getFont",
        url: "imagick.getfont",
        spec: {
          isPublic: false,
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
        url: "imagick.getformat",
        spec: {
          isPublic: false,
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
      getgravity: {
        name: "getGravity",
        url: "imagick.getgravity",
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
      gethomeurl: {
        name: "getHomeURL",
        url: "imagick.gethomeurl",
        spec: {
          isPublic: false,
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
      getimage: {
        name: "getImage",
        url: "imagick.getimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Imagick",
          ref: null
        }
      },
      getimagealphachannel: {
        name: "getImageAlphaChannel",
        url: "imagick.getimagealphachannel",
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
      getimageartifact: {
        name: "getImageArtifact",
        url: "imagick.getimageartifact",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $artifact",
          returnValue: "string",
          ref: null
        }
      },
      getimageattribute: {
        name: "getImageAttribute",
        url: "imagick.getimageattribute",
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
      getimagebackgroundcolor: {
        name: "getImageBackgroundColor",
        url: "imagick.getimagebackgroundcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ImagickPixel",
          ref: null
        }
      },
      getimageblob: {
        name: "getImageBlob",
        url: "imagick.getimageblob",
        spec: {
          isPublic: false,
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
      getimageblueprimary: {
        name: "getImageBluePrimary",
        url: "imagick.getimageblueprimary",
        spec: {
          isPublic: false,
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
      getimagebordercolor: {
        name: "getImageBorderColor",
        url: "imagick.getimagebordercolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ImagickPixel",
          ref: null
        }
      },
      getimagechanneldepth: {
        name: "getImageChannelDepth",
        url: "imagick.getimagechanneldepth",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channel",
          returnValue: "int",
          ref: null
        }
      },
      getimagechanneldistortion: {
        name: "getImageChannelDistortion",
        url: "imagick.getimagechanneldistortion",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $reference, int $channel, int $metric",
          returnValue: "float",
          ref: null
        }
      },
      getimagechanneldistortions: {
        name: "getImageChannelDistortions",
        url: "imagick.getimagechanneldistortions",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $reference, int $metric [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "float",
          ref: null
        }
      },
      getimagechannelextrema: {
        name: "getImageChannelExtrema",
        url: "imagick.getimagechannelextrema",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channel",
          returnValue: "array",
          ref: null
        }
      },
      getimagechannelkurtosis: {
        name: "getImageChannelKurtosis",
        url: "imagick.getimagechannelkurtosis",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "array",
          ref: null
        }
      },
      getimagechannelmean: {
        name: "getImageChannelMean",
        url: "imagick.getimagechannelmean",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channel",
          returnValue: "array",
          ref: null
        }
      },
      getimagechannelrange: {
        name: "getImageChannelRange",
        url: "imagick.getimagechannelrange",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channel",
          returnValue: "array",
          ref: null
        }
      },
      getimagechannelstatistics: {
        name: "getImageChannelStatistics",
        url: "imagick.getimagechannelstatistics",
        spec: {
          isPublic: false,
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
      getimageclipmask: {
        name: "getImageClipMask",
        url: "imagick.getimageclipmask",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Imagick",
          ref: null
        }
      },
      getimagecolormapcolor: {
        name: "getImageColormapColor",
        url: "imagick.getimagecolormapcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $index",
          returnValue: "ImagickPixel",
          ref: null
        }
      },
      getimagecolors: {
        name: "getImageColors",
        url: "imagick.getimagecolors",
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
      getimagecolorspace: {
        name: "getImageColorspace",
        url: "imagick.getimagecolorspace",
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
      getimagecompose: {
        name: "getImageCompose",
        url: "imagick.getimagecompose",
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
      getimagecompression: {
        name: "getImageCompression",
        url: "imagick.getimagecompression",
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
      getimagecompressionquality: {
        name: "getImageCompressionQuality",
        url: "imagick.getimagecompressionquality",
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
      getimagedelay: {
        name: "getImageDelay",
        url: "imagick.getimagedelay",
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
      getimagedepth: {
        name: "getImageDepth",
        url: "imagick.getimagedepth",
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
      getimagedispose: {
        name: "getImageDispose",
        url: "imagick.getimagedispose",
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
      getimagedistortion: {
        name: "getImageDistortion",
        url: "imagick.getimagedistortion",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "MagickWand $reference, int $metric",
          returnValue: "float",
          ref: null
        }
      },
      getimageextrema: {
        name: "getImageExtrema",
        url: "imagick.getimageextrema",
        spec: {
          isPublic: false,
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
      getimagefilename: {
        name: "getImageFilename",
        url: "imagick.getimagefilename",
        spec: {
          isPublic: false,
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
      getimageformat: {
        name: "getImageFormat",
        url: "imagick.getimageformat",
        spec: {
          isPublic: false,
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
      getimagegamma: {
        name: "getImageGamma",
        url: "imagick.getimagegamma",
        spec: {
          isPublic: false,
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
      getimagegeometry: {
        name: "getImageGeometry",
        url: "imagick.getimagegeometry",
        spec: {
          isPublic: false,
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
      getimagegravity: {
        name: "getImageGravity",
        url: "imagick.getimagegravity",
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
      getimagegreenprimary: {
        name: "getImageGreenPrimary",
        url: "imagick.getimagegreenprimary",
        spec: {
          isPublic: false,
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
      getimageheight: {
        name: "getImageHeight",
        url: "imagick.getimageheight",
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
      getimagehistogram: {
        name: "getImageHistogram",
        url: "imagick.getimagehistogram",
        spec: {
          isPublic: false,
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
      getimageindex: {
        name: "getImageIndex",
        url: "imagick.getimageindex",
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
      getimageinterlacescheme: {
        name: "getImageInterlaceScheme",
        url: "imagick.getimageinterlacescheme",
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
      getimageinterpolatemethod: {
        name: "getImageInterpolateMethod",
        url: "imagick.getimageinterpolatemethod",
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
      getimageiterations: {
        name: "getImageIterations",
        url: "imagick.getimageiterations",
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
      getimagelength: {
        name: "getImageLength",
        url: "imagick.getimagelength",
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
      getimagemagicklicense: {
        name: "getImageMagickLicense",
        url: "imagick.getimagemagicklicense",
        spec: {
          isPublic: false,
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
      getimagematte: {
        name: "getImageMatte",
        url: "imagick.getimagematte",
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
      getimagemattecolor: {
        name: "getImageMatteColor",
        url: "imagick.getimagemattecolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ImagickPixel",
          ref: null
        }
      },
      getimagemimetype: {
        name: "getImageMimeType",
        url: "imagick.getimagemimetype",
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
      getimageorientation: {
        name: "getImageOrientation",
        url: "imagick.getimageorientation",
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
      getimagepage: {
        name: "getImagePage",
        url: "imagick.getimagepage",
        spec: {
          isPublic: false,
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
      getimagepixelcolor: {
        name: "getImagePixelColor",
        url: "imagick.getimagepixelcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $x, int $y",
          returnValue: "ImagickPixel",
          ref: null
        }
      },
      getimageprofile: {
        name: "getImageProfile",
        url: "imagick.getimageprofile",
        spec: {
          isPublic: false,
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
      getimageprofiles: {
        name: "getImageProfiles",
        url: "imagick.getimageprofiles",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $pattern = \"*\" [, bool $include_values = TRUE ]]",
          returnValue: "array",
          ref: null
        }
      },
      getimageproperties: {
        name: "getImageProperties",
        url: "imagick.getimageproperties",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $pattern = \"*\" [, bool $include_values = TRUE ]]",
          returnValue: "array",
          ref: null
        }
      },
      getimageproperty: {
        name: "getImageProperty",
        url: "imagick.getimageproperty",
        spec: {
          isPublic: false,
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
      getimageredprimary: {
        name: "getImageRedPrimary",
        url: "imagick.getimageredprimary",
        spec: {
          isPublic: false,
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
      getimageregion: {
        name: "getImageRegion",
        url: "imagick.getimageregion",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y",
          returnValue: "Imagick",
          ref: null
        }
      },
      getimagerenderingintent: {
        name: "getImageRenderingIntent",
        url: "imagick.getimagerenderingintent",
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
      getimageresolution: {
        name: "getImageResolution",
        url: "imagick.getimageresolution",
        spec: {
          isPublic: false,
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
      getimagesblob: {
        name: "getImagesBlob",
        url: "imagick.getimagesblob",
        spec: {
          isPublic: false,
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
      getimagescene: {
        name: "getImageScene",
        url: "imagick.getimagescene",
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
      getimagesignature: {
        name: "getImageSignature",
        url: "imagick.getimagesignature",
        spec: {
          isPublic: false,
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
      getimagesize: {
        name: "getImageSize",
        url: "imagick.getimagesize",
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
      getimagetickspersecond: {
        name: "getImageTicksPerSecond",
        url: "imagick.getimagetickspersecond",
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
      getimagetotalinkdensity: {
        name: "getImageTotalInkDensity",
        url: "imagick.getimagetotalinkdensity",
        spec: {
          isPublic: false,
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
      getimagetype: {
        name: "getImageType",
        url: "imagick.getimagetype",
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
      getimageunits: {
        name: "getImageUnits",
        url: "imagick.getimageunits",
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
      getimagevirtualpixelmethod: {
        name: "getImageVirtualPixelMethod",
        url: "imagick.getimagevirtualpixelmethod",
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
      getimagewhitepoint: {
        name: "getImageWhitePoint",
        url: "imagick.getimagewhitepoint",
        spec: {
          isPublic: false,
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
      getimagewidth: {
        name: "getImageWidth",
        url: "imagick.getimagewidth",
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
      getinterlacescheme: {
        name: "getInterlaceScheme",
        url: "imagick.getinterlacescheme",
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
      getiteratorindex: {
        name: "getIteratorIndex",
        url: "imagick.getiteratorindex",
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
      getnumberimages: {
        name: "getNumberImages",
        url: "imagick.getnumberimages",
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
      getoption: {
        name: "getOption",
        url: "imagick.getoption",
        spec: {
          isPublic: false,
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
      getpackagename: {
        name: "getPackageName",
        url: "imagick.getpackagename",
        spec: {
          isPublic: false,
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
      getpage: {
        name: "getPage",
        url: "imagick.getpage",
        spec: {
          isPublic: false,
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
      getpixeliterator: {
        name: "getPixelIterator",
        url: "imagick.getpixeliterator",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ImagickPixelIterator",
          ref: null
        }
      },
      getpixelregioniterator: {
        name: "getPixelRegionIterator",
        url: "imagick.getpixelregioniterator",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $x, int $y, int $columns, int $rows",
          returnValue: "ImagickPixelIterator",
          ref: null
        }
      },
      getpointsize: {
        name: "getPointSize",
        url: "imagick.getpointsize",
        spec: {
          isPublic: false,
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
      getquantum: {
        name: "getQuantum",
        url: "imagick.getquantum",
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
      getquantumdepth: {
        name: "getQuantumDepth",
        url: "imagick.getquantumdepth",
        spec: {
          isPublic: false,
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
      getquantumrange: {
        name: "getQuantumRange",
        url: "imagick.getquantumrange",
        spec: {
          isPublic: false,
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
      getregistry: {
        name: "getRegistry",
        url: "imagick.getregistry",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $key",
          returnValue: "string",
          ref: null
        }
      },
      getreleasedate: {
        name: "getReleaseDate",
        url: "imagick.getreleasedate",
        spec: {
          isPublic: false,
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
      getresource: {
        name: "getResource",
        url: "imagick.getresource",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $type",
          returnValue: "int",
          ref: null
        }
      },
      getresourcelimit: {
        name: "getResourceLimit",
        url: "imagick.getresourcelimit",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $type",
          returnValue: "int",
          ref: null
        }
      },
      getsamplingfactors: {
        name: "getSamplingFactors",
        url: "imagick.getsamplingfactors",
        spec: {
          isPublic: false,
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
      getsize: {
        name: "getSize",
        url: "imagick.getsize",
        spec: {
          isPublic: false,
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
      getsizeoffset: {
        name: "getSizeOffset",
        url: "imagick.getsizeoffset",
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
      getversion: {
        name: "getVersion",
        url: "imagick.getversion",
        spec: {
          isPublic: false,
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
      haldclutimage: {
        name: "haldClutImage",
        url: "imagick.haldclutimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $clut [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      hasnextimage: {
        name: "hasNextImage",
        url: "imagick.hasnextimage",
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
      haspreviousimage: {
        name: "hasPreviousImage",
        url: "imagick.haspreviousimage",
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
      identifyformat: {
        name: "identifyFormat",
        url: "imagick.identifyformat",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $embedText",
          returnValue: "string",
          ref: null
        }
      },
      identifyimage: {
        name: "identifyImage",
        url: "imagick.identifyimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ bool $appendRawOutput = FALSE ]",
          returnValue: "array",
          ref: null
        }
      },
      implodeimage: {
        name: "implodeImage",
        url: "imagick.implodeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "bool",
          ref: null
        }
      },
      importimagepixels: {
        name: "importImagePixels",
        url: "imagick.importimagepixels",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $x, int $y, int $width, int $height, string $map, int $storage, array $pixels",
          returnValue: "bool",
          ref: null
        }
      },
      inversefouriertransformimage: {
        name: "inverseFourierTransformImage",
        url: "imagick.inversefouriertransformimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $complement, bool $magnitude",
          returnValue: "bool",
          ref: null
        }
      },
      labelimage: {
        name: "labelImage",
        url: "imagick.labelimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $label",
          returnValue: "bool",
          ref: null
        }
      },
      levelimage: {
        name: "levelImage",
        url: "imagick.levelimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $blackPoint, float $gamma, float $whitePoint [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      linearstretchimage: {
        name: "linearStretchImage",
        url: "imagick.linearstretchimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $blackPoint, float $whitePoint",
          returnValue: "bool",
          ref: null
        }
      },
      liquidrescaleimage: {
        name: "liquidRescaleImage",
        url: "imagick.liquidrescaleimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, float $delta_x, float $rigidity",
          returnValue: "bool",
          ref: null
        }
      },
      listregistry: {
        name: "listRegistry",
        url: "imagick.listregistry",
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
      magnifyimage: {
        name: "magnifyImage",
        url: "imagick.magnifyimage",
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
      mapimage: {
        name: "mapImage",
        url: "imagick.mapimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $map, bool $dither",
          returnValue: "bool",
          ref: null
        }
      },
      mattefloodfillimage: {
        name: "matteFloodfillImage",
        url: "imagick.mattefloodfillimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $alpha, float $fuzz, mixed $bordercolor, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      medianfilterimage: {
        name: "medianFilterImage",
        url: "imagick.medianfilterimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "bool",
          ref: null
        }
      },
      mergeimagelayers: {
        name: "mergeImageLayers",
        url: "imagick.mergeimagelayers",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $layer_method",
          returnValue: "Imagick",
          ref: null
        }
      },
      minifyimage: {
        name: "minifyImage",
        url: "imagick.minifyimage",
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
      modulateimage: {
        name: "modulateImage",
        url: "imagick.modulateimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $brightness, float $saturation, float $hue",
          returnValue: "bool",
          ref: null
        }
      },
      montageimage: {
        name: "montageImage",
        url: "imagick.montageimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickDraw $draw, string $tile_geometry, string $thumbnail_geometry, int $mode, string $frame",
          returnValue: "Imagick",
          ref: null
        }
      },
      morphimages: {
        name: "morphImages",
        url: "imagick.morphimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $number_frames",
          returnValue: "Imagick",
          ref: null
        }
      },
      morphology: {
        name: "morphology",
        url: "imagick.morphology",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $morphologyMethod, int $iterations, ImagickKernel $ImagickKernel [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      mosaicimages: {
        name: "mosaicImages",
        url: "imagick.mosaicimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Imagick",
          ref: null
        }
      },
      motionblurimage: {
        name: "motionBlurImage",
        url: "imagick.motionblurimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma, float $angle [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      negateimage: {
        name: "negateImage",
        url: "imagick.negateimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $gray [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      newimage: {
        name: "newImage",
        url: "imagick.newimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $cols, int $rows, mixed $background [, string $format ]",
          returnValue: "bool",
          ref: null
        }
      },
      newpseudoimage: {
        name: "newPseudoImage",
        url: "imagick.newpseudoimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows, string $pseudoString",
          returnValue: "bool",
          ref: null
        }
      },
      nextimage: {
        name: "nextImage",
        url: "imagick.nextimage",
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
      normalizeimage: {
        name: "normalizeImage",
        url: "imagick.normalizeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      oilpaintimage: {
        name: "oilPaintImage",
        url: "imagick.oilpaintimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "bool",
          ref: null
        }
      },
      opaquepaintimage: {
        name: "opaquePaintImage",
        url: "imagick.opaquepaintimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $target, mixed $fill, float $fuzz, bool $invert [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      optimizeimagelayers: {
        name: "optimizeImageLayers",
        url: "imagick.optimizeimagelayers",
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
      orderedposterizeimage: {
        name: "orderedPosterizeImage",
        url: "imagick.orderedposterizeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $threshold_map [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      paintfloodfillimage: {
        name: "paintFloodfillImage",
        url: "imagick.paintfloodfillimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $fill, float $fuzz, mixed $bordercolor, int $x, int $y [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      paintopaqueimage: {
        name: "paintOpaqueImage",
        url: "imagick.paintopaqueimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $target, mixed $fill, float $fuzz [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      painttransparentimage: {
        name: "paintTransparentImage",
        url: "imagick.painttransparentimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $target, float $alpha, float $fuzz",
          returnValue: "bool",
          ref: null
        }
      },
      pingimage: {
        name: "pingImage",
        url: "imagick.pingimage",
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
      pingimageblob: {
        name: "pingImageBlob",
        url: "imagick.pingimageblob",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $image",
          returnValue: "bool",
          ref: null
        }
      },
      pingimagefile: {
        name: "pingImageFile",
        url: "imagick.pingimagefile",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "resource $filehandle [, string $fileName ]",
          returnValue: "bool",
          ref: null
        }
      },
      polaroidimage: {
        name: "polaroidImage",
        url: "imagick.polaroidimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickDraw $properties, float $angle",
          returnValue: "bool",
          ref: null
        }
      },
      posterizeimage: {
        name: "posterizeImage",
        url: "imagick.posterizeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $levels, bool $dither",
          returnValue: "bool",
          ref: null
        }
      },
      previewimages: {
        name: "previewImages",
        url: "imagick.previewimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $preview",
          returnValue: "bool",
          ref: null
        }
      },
      previousimage: {
        name: "previousImage",
        url: "imagick.previousimage",
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
      profileimage: {
        name: "profileImage",
        url: "imagick.profileimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, string $profile",
          returnValue: "bool",
          ref: null
        }
      },
      quantizeimage: {
        name: "quantizeImage",
        url: "imagick.quantizeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $numberColors, int $colorspace, int $treedepth, bool $dither, bool $measureError",
          returnValue: "bool",
          ref: null
        }
      },
      quantizeimages: {
        name: "quantizeImages",
        url: "imagick.quantizeimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $numberColors, int $colorspace, int $treedepth, bool $dither, bool $measureError",
          returnValue: "bool",
          ref: null
        }
      },
      queryfontmetrics: {
        name: "queryFontMetrics",
        url: "imagick.queryfontmetrics",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickDraw $properties, string $text [, bool $multiline ]",
          returnValue: "array",
          ref: null
        }
      },
      queryfonts: {
        name: "queryFonts",
        url: "imagick.queryfonts",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $pattern = \"*\" ]",
          returnValue: "array",
          ref: null
        }
      },
      queryformats: {
        name: "queryFormats",
        url: "imagick.queryformats",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $pattern = \"*\" ]",
          returnValue: "array",
          ref: null
        }
      },
      radialblurimage: {
        name: "radialBlurImage",
        url: "imagick.radialblurimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $angle [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      raiseimage: {
        name: "raiseImage",
        url: "imagick.raiseimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y, bool $raise",
          returnValue: "bool",
          ref: null
        }
      },
      randomthresholdimage: {
        name: "randomThresholdImage",
        url: "imagick.randomthresholdimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $low, float $high [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      readimage: {
        name: "readImage",
        url: "imagick.readimage",
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
      readimageblob: {
        name: "readImageBlob",
        url: "imagick.readimageblob",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $image [, string $filename ]",
          returnValue: "bool",
          ref: null
        }
      },
      readimagefile: {
        name: "readImageFile",
        url: "imagick.readimagefile",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "resource $filehandle [, string $fileName = NULL ]",
          returnValue: "bool",
          ref: null
        }
      },
      readimages: {
        name: "readimages",
        url: "imagick.readimages",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $filenames",
          returnValue: "bool",
          ref: null
        }
      },
      recolorimage: {
        name: "recolorImage",
        url: "imagick.recolorimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $matrix",
          returnValue: "bool",
          ref: null
        }
      },
      reducenoiseimage: {
        name: "reduceNoiseImage",
        url: "imagick.reducenoiseimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "bool",
          ref: null
        }
      },
      remapimage: {
        name: "remapImage",
        url: "imagick.remapimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $replacement, int $DITHER",
          returnValue: "bool",
          ref: null
        }
      },
      removeimage: {
        name: "removeImage",
        url: "imagick.removeimage",
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
      removeimageprofile: {
        name: "removeImageProfile",
        url: "imagick.removeimageprofile",
        spec: {
          isPublic: false,
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
      render: {
        name: "render",
        url: "imagick.render",
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
      resampleimage: {
        name: "resampleImage",
        url: "imagick.resampleimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x_resolution, float $y_resolution, int $filter, float $blur",
          returnValue: "bool",
          ref: null
        }
      },
      resetimagepage: {
        name: "resetImagePage",
        url: "imagick.resetimagepage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $page",
          returnValue: "bool",
          ref: null
        }
      },
      resizeimage: {
        name: "resizeImage",
        url: "imagick.resizeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows, int $filter, float $blur [, bool $bestfit = false ]",
          returnValue: "bool",
          ref: null
        }
      },
      rollimage: {
        name: "rollImage",
        url: "imagick.rollimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      rotateimage: {
        name: "rotateImage",
        url: "imagick.rotateimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $background, float $degrees",
          returnValue: "bool",
          ref: null
        }
      },
      rotationalblurimage: {
        name: "rotationalBlurImage",
        url: "imagick.rotationalblurimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $angle [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      roundcorners: {
        name: "roundCorners",
        url: "imagick.roundcorners",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x_rounding, float $y_rounding [, float $stroke_width = 10 [, float $displace = 5 [, float $size_correction = -6 ]]]",
          returnValue: "bool",
          ref: null
        }
      },
      sampleimage: {
        name: "sampleImage",
        url: "imagick.sampleimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows",
          returnValue: "bool",
          ref: null
        }
      },
      scaleimage: {
        name: "scaleImage",
        url: "imagick.scaleimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $cols, int $rows [, bool $bestfit = false ]",
          returnValue: "bool",
          ref: null
        }
      },
      segmentimage: {
        name: "segmentImage",
        url: "imagick.segmentimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $COLORSPACE, float $cluster_threshold, float $smooth_threshold [, bool $verbose = FALSE ]",
          returnValue: "bool",
          ref: null
        }
      },
      selectiveblurimage: {
        name: "selectiveBlurImage",
        url: "imagick.selectiveblurimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma, float $threshold [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      separateimagechannel: {
        name: "separateImageChannel",
        url: "imagick.separateimagechannel",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channel",
          returnValue: "bool",
          ref: null
        }
      },
      sepiatoneimage: {
        name: "sepiaToneImage",
        url: "imagick.sepiatoneimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $threshold",
          returnValue: "bool",
          ref: null
        }
      },
      setbackgroundcolor: {
        name: "setBackgroundColor",
        url: "imagick.setbackgroundcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $background",
          returnValue: "bool",
          ref: null
        }
      },
      setcolorspace: {
        name: "setColorspace",
        url: "imagick.setcolorspace",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $COLORSPACE",
          returnValue: "bool",
          ref: null
        }
      },
      setcompression: {
        name: "setCompression",
        url: "imagick.setcompression",
        spec: {
          isPublic: false,
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
      setcompressionquality: {
        name: "setCompressionQuality",
        url: "imagick.setcompressionquality",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $quality",
          returnValue: "bool",
          ref: null
        }
      },
      setfilename: {
        name: "setFilename",
        url: "imagick.setfilename",
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
      setfirstiterator: {
        name: "setFirstIterator",
        url: "imagick.setfirstiterator",
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
      setfont: {
        name: "setFont",
        url: "imagick.setfont",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $font",
          returnValue: "bool",
          ref: null
        }
      },
      setformat: {
        name: "setFormat",
        url: "imagick.setformat",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $format",
          returnValue: "bool",
          ref: null
        }
      },
      setgravity: {
        name: "setGravity",
        url: "imagick.setgravity",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $gravity",
          returnValue: "bool",
          ref: null
        }
      },
      setimage: {
        name: "setImage",
        url: "imagick.setimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $replace",
          returnValue: "bool",
          ref: null
        }
      },
      setimagealphachannel: {
        name: "setImageAlphaChannel",
        url: "imagick.setimagealphachannel",
        spec: {
          isPublic: false,
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
      setimageartifact: {
        name: "setImageArtifact",
        url: "imagick.setimageartifact",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $artifact, string $value",
          returnValue: "bool",
          ref: null
        }
      },
      setimageattribute: {
        name: "setImageAttribute",
        url: "imagick.setimageattribute",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key, string $value",
          returnValue: "bool",
          ref: null
        }
      },
      setimagebackgroundcolor: {
        name: "setImageBackgroundColor",
        url: "imagick.setimagebackgroundcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $background",
          returnValue: "bool",
          ref: null
        }
      },
      setimagebias: {
        name: "setImageBias",
        url: "imagick.setimagebias",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $bias",
          returnValue: "bool",
          ref: null
        }
      },
      setimagebiasquantum: {
        name: "setImageBiasQuantum",
        url: "imagick.setimagebiasquantum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $bias",
          returnValue: "void",
          ref: null
        }
      },
      setimageblueprimary: {
        name: "setImageBluePrimary",
        url: "imagick.setimageblueprimary",
        spec: {
          isPublic: false,
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
      setimagebordercolor: {
        name: "setImageBorderColor",
        url: "imagick.setimagebordercolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $border",
          returnValue: "bool",
          ref: null
        }
      },
      setimagechanneldepth: {
        name: "setImageChannelDepth",
        url: "imagick.setimagechanneldepth",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $channel, int $depth",
          returnValue: "bool",
          ref: null
        }
      },
      setimageclipmask: {
        name: "setImageClipMask",
        url: "imagick.setimageclipmask",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $clip_mask",
          returnValue: "bool",
          ref: null
        }
      },
      setimagecolormapcolor: {
        name: "setImageColormapColor",
        url: "imagick.setimagecolormapcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $index, ImagickPixel $color",
          returnValue: "bool",
          ref: null
        }
      },
      setimagecolorspace: {
        name: "setImageColorspace",
        url: "imagick.setimagecolorspace",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $colorspace",
          returnValue: "bool",
          ref: null
        }
      },
      setimagecompose: {
        name: "setImageCompose",
        url: "imagick.setimagecompose",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $compose",
          returnValue: "bool",
          ref: null
        }
      },
      setimagecompression: {
        name: "setImageCompression",
        url: "imagick.setimagecompression",
        spec: {
          isPublic: false,
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
      setimagecompressionquality: {
        name: "setImageCompressionQuality",
        url: "imagick.setimagecompressionquality",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $quality",
          returnValue: "bool",
          ref: null
        }
      },
      setimagedelay: {
        name: "setImageDelay",
        url: "imagick.setimagedelay",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $delay",
          returnValue: "bool",
          ref: null
        }
      },
      setimagedepth: {
        name: "setImageDepth",
        url: "imagick.setimagedepth",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $depth",
          returnValue: "bool",
          ref: null
        }
      },
      setimagedispose: {
        name: "setImageDispose",
        url: "imagick.setimagedispose",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $dispose",
          returnValue: "bool",
          ref: null
        }
      },
      setimageextent: {
        name: "setImageExtent",
        url: "imagick.setimageextent",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows",
          returnValue: "bool",
          ref: null
        }
      },
      setimagefilename: {
        name: "setImageFilename",
        url: "imagick.setimagefilename",
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
      setimageformat: {
        name: "setImageFormat",
        url: "imagick.setimageformat",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $format",
          returnValue: "bool",
          ref: null
        }
      },
      setimagegamma: {
        name: "setImageGamma",
        url: "imagick.setimagegamma",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $gamma",
          returnValue: "bool",
          ref: null
        }
      },
      setimagegravity: {
        name: "setImageGravity",
        url: "imagick.setimagegravity",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $gravity",
          returnValue: "bool",
          ref: null
        }
      },
      setimagegreenprimary: {
        name: "setImageGreenPrimary",
        url: "imagick.setimagegreenprimary",
        spec: {
          isPublic: false,
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
      setimageindex: {
        name: "setImageIndex",
        url: "imagick.setimageindex",
        spec: {
          isPublic: false,
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
      setimageinterlacescheme: {
        name: "setImageInterlaceScheme",
        url: "imagick.setimageinterlacescheme",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $interlace_scheme",
          returnValue: "bool",
          ref: null
        }
      },
      setimageinterpolatemethod: {
        name: "setImageInterpolateMethod",
        url: "imagick.setimageinterpolatemethod",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $method",
          returnValue: "bool",
          ref: null
        }
      },
      setimageiterations: {
        name: "setImageIterations",
        url: "imagick.setimageiterations",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $iterations",
          returnValue: "bool",
          ref: null
        }
      },
      setimagematte: {
        name: "setImageMatte",
        url: "imagick.setimagematte",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $matte",
          returnValue: "bool",
          ref: null
        }
      },
      setimagemattecolor: {
        name: "setImageMatteColor",
        url: "imagick.setimagemattecolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $matte",
          returnValue: "bool",
          ref: null
        }
      },
      setimageopacity: {
        name: "setImageOpacity",
        url: "imagick.setimageopacity",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $opacity",
          returnValue: "bool",
          ref: null
        }
      },
      setimageorientation: {
        name: "setImageOrientation",
        url: "imagick.setimageorientation",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $orientation",
          returnValue: "bool",
          ref: null
        }
      },
      setimagepage: {
        name: "setImagePage",
        url: "imagick.setimagepage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      setimageprofile: {
        name: "setImageProfile",
        url: "imagick.setimageprofile",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, string $profile",
          returnValue: "bool",
          ref: null
        }
      },
      setimageproperty: {
        name: "setImageProperty",
        url: "imagick.setimageproperty",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $name, string $value",
          returnValue: "bool",
          ref: null
        }
      },
      setimageredprimary: {
        name: "setImageRedPrimary",
        url: "imagick.setimageredprimary",
        spec: {
          isPublic: false,
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
      setimagerenderingintent: {
        name: "setImageRenderingIntent",
        url: "imagick.setimagerenderingintent",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $rendering_intent",
          returnValue: "bool",
          ref: null
        }
      },
      setimageresolution: {
        name: "setImageResolution",
        url: "imagick.setimageresolution",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x_resolution, float $y_resolution",
          returnValue: "bool",
          ref: null
        }
      },
      setimagescene: {
        name: "setImageScene",
        url: "imagick.setimagescene",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $scene",
          returnValue: "bool",
          ref: null
        }
      },
      setimagetickspersecond: {
        name: "setImageTicksPerSecond",
        url: "imagick.setimagetickspersecond",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $ticks_per_second",
          returnValue: "bool",
          ref: null
        }
      },
      setimagetype: {
        name: "setImageType",
        url: "imagick.setimagetype",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $image_type",
          returnValue: "bool",
          ref: null
        }
      },
      setimageunits: {
        name: "setImageUnits",
        url: "imagick.setimageunits",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $units",
          returnValue: "bool",
          ref: null
        }
      },
      setimagevirtualpixelmethod: {
        name: "setImageVirtualPixelMethod",
        url: "imagick.setimagevirtualpixelmethod",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $method",
          returnValue: "bool",
          ref: null
        }
      },
      setimagewhitepoint: {
        name: "setImageWhitePoint",
        url: "imagick.setimagewhitepoint",
        spec: {
          isPublic: false,
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
      setinterlacescheme: {
        name: "setInterlaceScheme",
        url: "imagick.setinterlacescheme",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $interlace_scheme",
          returnValue: "bool",
          ref: null
        }
      },
      setiteratorindex: {
        name: "setIteratorIndex",
        url: "imagick.setiteratorindex",
        spec: {
          isPublic: false,
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
      setlastiterator: {
        name: "setLastIterator",
        url: "imagick.setlastiterator",
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
      setoption: {
        name: "setOption",
        url: "imagick.setoption",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $key, string $value",
          returnValue: "bool",
          ref: null
        }
      },
      setpage: {
        name: "setPage",
        url: "imagick.setpage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      setpointsize: {
        name: "setPointSize",
        url: "imagick.setpointsize",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $point_size",
          returnValue: "bool",
          ref: null
        }
      },
      setprogressmonitor: {
        name: "setProgressMonitor",
        url: "imagick.setprogressmonitor",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "callable $callback",
          returnValue: "bool",
          ref: null
        }
      },
      setregistry: {
        name: "setRegistry",
        url: "imagick.setregistry",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $key, string $value",
          returnValue: "bool",
          ref: null
        }
      },
      setresolution: {
        name: "setResolution",
        url: "imagick.setresolution",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x_resolution, float $y_resolution",
          returnValue: "bool",
          ref: null
        }
      },
      setresourcelimit: {
        name: "setResourceLimit",
        url: "imagick.setresourcelimit",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $type, int $limit",
          returnValue: "bool",
          ref: null
        }
      },
      setsamplingfactors: {
        name: "setSamplingFactors",
        url: "imagick.setsamplingfactors",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $factors",
          returnValue: "bool",
          ref: null
        }
      },
      setsize: {
        name: "setSize",
        url: "imagick.setsize",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows",
          returnValue: "bool",
          ref: null
        }
      },
      setsizeoffset: {
        name: "setSizeOffset",
        url: "imagick.setsizeoffset",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows, int $offset",
          returnValue: "bool",
          ref: null
        }
      },
      settype: {
        name: "setType",
        url: "imagick.settype",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $image_type",
          returnValue: "bool",
          ref: null
        }
      },
      shadeimage: {
        name: "shadeImage",
        url: "imagick.shadeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $gray, float $azimuth, float $elevation",
          returnValue: "bool",
          ref: null
        }
      },
      shadowimage: {
        name: "shadowImage",
        url: "imagick.shadowimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $opacity, float $sigma, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      sharpenimage: {
        name: "sharpenImage",
        url: "imagick.sharpenimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      shaveimage: {
        name: "shaveImage",
        url: "imagick.shaveimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows",
          returnValue: "bool",
          ref: null
        }
      },
      shearimage: {
        name: "shearImage",
        url: "imagick.shearimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $background, float $x_shear, float $y_shear",
          returnValue: "bool",
          ref: null
        }
      },
      sigmoidalcontrastimage: {
        name: "sigmoidalContrastImage",
        url: "imagick.sigmoidalcontrastimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $sharpen, float $alpha, float $beta [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      sketchimage: {
        name: "sketchImage",
        url: "imagick.sketchimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma, float $angle",
          returnValue: "bool",
          ref: null
        }
      },
      smushimages: {
        name: "smushImages",
        url: "imagick.smushimages",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $stack, int $offset",
          returnValue: "Imagick",
          ref: null
        }
      },
      solarizeimage: {
        name: "solarizeImage",
        url: "imagick.solarizeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $threshold",
          returnValue: "bool",
          ref: null
        }
      },
      sparsecolorimage: {
        name: "sparseColorImage",
        url: "imagick.sparsecolorimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $SPARSE_METHOD, array $arguments [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      spliceimage: {
        name: "spliceImage",
        url: "imagick.spliceimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $width, int $height, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      spreadimage: {
        name: "spreadImage",
        url: "imagick.spreadimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius",
          returnValue: "bool",
          ref: null
        }
      },
      statisticimage: {
        name: "statisticImage",
        url: "imagick.statisticimage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $type, int $width, int $height [, int $channel = Imagick::CHANNEL_DEFAULT ]",
          returnValue: "bool",
          ref: null
        }
      },
      steganoimage: {
        name: "steganoImage",
        url: "imagick.steganoimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $watermark_wand, int $offset",
          returnValue: "Imagick",
          ref: null
        }
      },
      stereoimage: {
        name: "stereoImage",
        url: "imagick.stereoimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $offset_wand",
          returnValue: "bool",
          ref: null
        }
      },
      stripimage: {
        name: "stripImage",
        url: "imagick.stripimage",
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
      subimagematch: {
        name: "subImageMatch",
        url: "imagick.subimagematch",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $Imagick [, array &$offset [, float &$similarity ]]",
          returnValue: "Imagick",
          ref: null
        }
      },
      swirlimage: {
        name: "swirlImage",
        url: "imagick.swirlimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $degrees",
          returnValue: "bool",
          ref: null
        }
      },
      textureimage: {
        name: "textureImage",
        url: "imagick.textureimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $texture_wand",
          returnValue: "Imagick",
          ref: null
        }
      },
      thresholdimage: {
        name: "thresholdImage",
        url: "imagick.thresholdimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $threshold [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      thumbnailimage: {
        name: "thumbnailImage",
        url: "imagick.thumbnailimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $columns, int $rows [, bool $bestfit = false [, bool $fill = false ]]",
          returnValue: "bool",
          ref: null
        }
      },
      tintimage: {
        name: "tintImage",
        url: "imagick.tintimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $tint, mixed $opacity",
          returnValue: "bool",
          ref: null
        }
      },
      transformimage: {
        name: "transformImage",
        url: "imagick.transformimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $crop, string $geometry",
          returnValue: "Imagick",
          ref: null
        }
      },
      transformimagecolorspace: {
        name: "transformImageColorspace",
        url: "imagick.transformimagecolorspace",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $colorspace",
          returnValue: "bool",
          ref: null
        }
      },
      transparentpaintimage: {
        name: "transparentPaintImage",
        url: "imagick.transparentpaintimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $target, float $alpha, float $fuzz, bool $invert",
          returnValue: "bool",
          ref: null
        }
      },
      transposeimage: {
        name: "transposeImage",
        url: "imagick.transposeimage",
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
      transverseimage: {
        name: "transverseImage",
        url: "imagick.transverseimage",
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
      trimimage: {
        name: "trimImage",
        url: "imagick.trimimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $fuzz",
          returnValue: "bool",
          ref: null
        }
      },
      uniqueimagecolors: {
        name: "uniqueImageColors",
        url: "imagick.uniqueimagecolors",
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
      unsharpmaskimage: {
        name: "unsharpMaskImage",
        url: "imagick.unsharpmaskimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $radius, float $sigma, float $amount, float $threshold [, int $channel = Imagick::CHANNEL_ALL ]",
          returnValue: "bool",
          ref: null
        }
      },
      valid: {
        name: "valid",
        url: "imagick.valid",
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
      vignetteimage: {
        name: "vignetteImage",
        url: "imagick.vignetteimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $blackPoint, float $whitePoint, int $x, int $y",
          returnValue: "bool",
          ref: null
        }
      },
      waveimage: {
        name: "waveImage",
        url: "imagick.waveimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $amplitude, float $length",
          returnValue: "bool",
          ref: null
        }
      },
      whitethresholdimage: {
        name: "whiteThresholdImage",
        url: "imagick.whitethresholdimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $threshold",
          returnValue: "bool",
          ref: null
        }
      },
      writeimage: {
        name: "writeImage",
        url: "imagick.writeimage",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $filename = NULL ]",
          returnValue: "bool",
          ref: null
        }
      },
      writeimagefile: {
        name: "writeImageFile",
        url: "imagick.writeimagefile",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "resource $filehandle",
          returnValue: "bool",
          ref: null
        }
      },
      writeimages: {
        name: "writeImages",
        url: "imagick.writeimages",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $filename, bool $adjoin",
          returnValue: "bool",
          ref: null
        }
      },
      writeimagesfile: {
        name: "writeImagesFile",
        url: "imagick.writeimagesfile",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "resource $filehandle",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "imagick.construct",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $files",
          returnValue: "",
          ref: null
        }
      },
      __tostring: {
        name: "__toString",
        url: "imagick.tostring",
        spec: {
          isPublic: false,
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
  imagickdraw: {
    name: "ImagickDraw",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      affine: {
        name: "affine",
        url: "imagickdraw.affine",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $affine",
          returnValue: "bool",
          ref: null
        }
      },
      annotation: {
        name: "annotation",
        url: "imagickdraw.annotation",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y, string $text",
          returnValue: "bool",
          ref: null
        }
      },
      arc: {
        name: "arc",
        url: "imagickdraw.arc",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $sx, float $sy, float $ex, float $ey, float $sd, float $ed",
          returnValue: "bool",
          ref: null
        }
      },
      bezier: {
        name: "bezier",
        url: "imagickdraw.bezier",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $coordinates",
          returnValue: "bool",
          ref: null
        }
      },
      circle: {
        name: "circle",
        url: "imagickdraw.circle",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $ox, float $oy, float $px, float $py",
          returnValue: "bool",
          ref: null
        }
      },
      clear: {
        name: "clear",
        url: "imagickdraw.clear",
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
      clone: {
        name: "clone",
        url: "imagickdraw.clone",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ImagickDraw",
          ref: null
        }
      },
      color: {
        name: "color",
        url: "imagickdraw.color",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y, int $paintMethod",
          returnValue: "bool",
          ref: null
        }
      },
      comment: {
        name: "comment",
        url: "imagickdraw.comment",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $comment",
          returnValue: "bool",
          ref: null
        }
      },
      composite: {
        name: "composite",
        url: "imagickdraw.composite",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $compose, float $x, float $y, float $width, float $height, Imagick $compositeWand",
          returnValue: "bool",
          ref: null
        }
      },
      destroy: {
        name: "destroy",
        url: "imagickdraw.destroy",
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
      ellipse: {
        name: "ellipse",
        url: "imagickdraw.ellipse",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $ox, float $oy, float $rx, float $ry, float $start, float $end",
          returnValue: "bool",
          ref: null
        }
      },
      getclippath: {
        name: "getClipPath",
        url: "imagickdraw.getclippath",
        spec: {
          isPublic: false,
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
      getcliprule: {
        name: "getClipRule",
        url: "imagickdraw.getcliprule",
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
      getclipunits: {
        name: "getClipUnits",
        url: "imagickdraw.getclipunits",
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
      getfillcolor: {
        name: "getFillColor",
        url: "imagickdraw.getfillcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ImagickPixel",
          ref: null
        }
      },
      getfillopacity: {
        name: "getFillOpacity",
        url: "imagickdraw.getfillopacity",
        spec: {
          isPublic: false,
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
      getfillrule: {
        name: "getFillRule",
        url: "imagickdraw.getfillrule",
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
      getfont: {
        name: "getFont",
        url: "imagickdraw.getfont",
        spec: {
          isPublic: false,
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
      getfontfamily: {
        name: "getFontFamily",
        url: "imagickdraw.getfontfamily",
        spec: {
          isPublic: false,
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
      getfontsize: {
        name: "getFontSize",
        url: "imagickdraw.getfontsize",
        spec: {
          isPublic: false,
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
      getfontstretch: {
        name: "getFontStretch",
        url: "imagickdraw.getfontstretch",
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
      getfontstyle: {
        name: "getFontStyle",
        url: "imagickdraw.getfontstyle",
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
      getfontweight: {
        name: "getFontWeight",
        url: "imagickdraw.getfontweight",
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
      getgravity: {
        name: "getGravity",
        url: "imagickdraw.getgravity",
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
      getstrokeantialias: {
        name: "getStrokeAntialias",
        url: "imagickdraw.getstrokeantialias",
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
      getstrokecolor: {
        name: "getStrokeColor",
        url: "imagickdraw.getstrokecolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ImagickPixel",
          ref: null
        }
      },
      getstrokedasharray: {
        name: "getStrokeDashArray",
        url: "imagickdraw.getstrokedasharray",
        spec: {
          isPublic: false,
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
      getstrokedashoffset: {
        name: "getStrokeDashOffset",
        url: "imagickdraw.getstrokedashoffset",
        spec: {
          isPublic: false,
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
      getstrokelinecap: {
        name: "getStrokeLineCap",
        url: "imagickdraw.getstrokelinecap",
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
      getstrokelinejoin: {
        name: "getStrokeLineJoin",
        url: "imagickdraw.getstrokelinejoin",
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
      getstrokemiterlimit: {
        name: "getStrokeMiterLimit",
        url: "imagickdraw.getstrokemiterlimit",
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
      getstrokeopacity: {
        name: "getStrokeOpacity",
        url: "imagickdraw.getstrokeopacity",
        spec: {
          isPublic: false,
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
      getstrokewidth: {
        name: "getStrokeWidth",
        url: "imagickdraw.getstrokewidth",
        spec: {
          isPublic: false,
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
      gettextalignment: {
        name: "getTextAlignment",
        url: "imagickdraw.gettextalignment",
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
      gettextantialias: {
        name: "getTextAntialias",
        url: "imagickdraw.gettextantialias",
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
      gettextdecoration: {
        name: "getTextDecoration",
        url: "imagickdraw.gettextdecoration",
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
      gettextencoding: {
        name: "getTextEncoding",
        url: "imagickdraw.gettextencoding",
        spec: {
          isPublic: false,
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
      gettextinterlinespacing: {
        name: "getTextInterlineSpacing",
        url: "imagickdraw.gettextinterlinespacing",
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
      gettextinterwordspacing: {
        name: "getTextInterwordSpacing",
        url: "imagickdraw.gettextinterwordspacing",
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
      gettextkerning: {
        name: "getTextKerning",
        url: "imagickdraw.gettextkerning",
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
      gettextundercolor: {
        name: "getTextUnderColor",
        url: "imagickdraw.gettextundercolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ImagickPixel",
          ref: null
        }
      },
      getvectorgraphics: {
        name: "getVectorGraphics",
        url: "imagickdraw.getvectorgraphics",
        spec: {
          isPublic: false,
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
      line: {
        name: "line",
        url: "imagickdraw.line",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $sx, float $sy, float $ex, float $ey",
          returnValue: "bool",
          ref: null
        }
      },
      matte: {
        name: "matte",
        url: "imagickdraw.matte",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x, float $y, int $paintMethod",
          returnValue: "bool",
          ref: null
        }
      },
      pathclose: {
        name: "pathClose",
        url: "imagickdraw.pathclose",
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
      pathcurvetoabsolute: {
        name: "pathCurveToAbsolute",
        url: "imagickdraw.pathcurvetoabsolute",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x2, float $y2, float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathcurvetoquadraticbezierabsolute: {
        name: "pathCurveToQuadraticBezierAbsolute",
        url: "imagickdraw.pathcurvetoquadraticbezierabsolute",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathcurvetoquadraticbezierrelative: {
        name: "pathCurveToQuadraticBezierRelative",
        url: "imagickdraw.pathcurvetoquadraticbezierrelative",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathcurvetoquadraticbeziersmoothabsolute: {
        name: "pathCurveToQuadraticBezierSmoothAbsolute",
        url: "imagickdraw.pathcurvetoquadraticbeziersmoothabsolute",
        spec: {
          isPublic: false,
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
      pathcurvetoquadraticbeziersmoothrelative: {
        name: "pathCurveToQuadraticBezierSmoothRelative",
        url: "imagickdraw.pathcurvetoquadraticbeziersmoothrelative",
        spec: {
          isPublic: false,
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
      pathcurvetorelative: {
        name: "pathCurveToRelative",
        url: "imagickdraw.pathcurvetorelative",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x2, float $y2, float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathcurvetosmoothabsolute: {
        name: "pathCurveToSmoothAbsolute",
        url: "imagickdraw.pathcurvetosmoothabsolute",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x2, float $y2, float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathcurvetosmoothrelative: {
        name: "pathCurveToSmoothRelative",
        url: "imagickdraw.pathcurvetosmoothrelative",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x2, float $y2, float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathellipticarcabsolute: {
        name: "pathEllipticArcAbsolute",
        url: "imagickdraw.pathellipticarcabsolute",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $rx, float $ry, float $x_axis_rotation, bool $large_arc_flag, bool $sweep_flag, float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathellipticarcrelative: {
        name: "pathEllipticArcRelative",
        url: "imagickdraw.pathellipticarcrelative",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $rx, float $ry, float $x_axis_rotation, bool $large_arc_flag, bool $sweep_flag, float $x, float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathfinish: {
        name: "pathFinish",
        url: "imagickdraw.pathfinish",
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
      pathlinetoabsolute: {
        name: "pathLineToAbsolute",
        url: "imagickdraw.pathlinetoabsolute",
        spec: {
          isPublic: false,
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
      pathlinetohorizontalabsolute: {
        name: "pathLineToHorizontalAbsolute",
        url: "imagickdraw.pathlinetohorizontalabsolute",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x",
          returnValue: "bool",
          ref: null
        }
      },
      pathlinetohorizontalrelative: {
        name: "pathLineToHorizontalRelative",
        url: "imagickdraw.pathlinetohorizontalrelative",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x",
          returnValue: "bool",
          ref: null
        }
      },
      pathlinetorelative: {
        name: "pathLineToRelative",
        url: "imagickdraw.pathlinetorelative",
        spec: {
          isPublic: false,
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
      pathlinetoverticalabsolute: {
        name: "pathLineToVerticalAbsolute",
        url: "imagickdraw.pathlinetoverticalabsolute",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathlinetoverticalrelative: {
        name: "pathLineToVerticalRelative",
        url: "imagickdraw.pathlinetoverticalrelative",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $y",
          returnValue: "bool",
          ref: null
        }
      },
      pathmovetoabsolute: {
        name: "pathMoveToAbsolute",
        url: "imagickdraw.pathmovetoabsolute",
        spec: {
          isPublic: false,
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
      pathmovetorelative: {
        name: "pathMoveToRelative",
        url: "imagickdraw.pathmovetorelative",
        spec: {
          isPublic: false,
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
      pathstart: {
        name: "pathStart",
        url: "imagickdraw.pathstart",
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
      point: {
        name: "point",
        url: "imagickdraw.point",
        spec: {
          isPublic: false,
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
      polygon: {
        name: "polygon",
        url: "imagickdraw.polygon",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $coordinates",
          returnValue: "bool",
          ref: null
        }
      },
      polyline: {
        name: "polyline",
        url: "imagickdraw.polyline",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $coordinates",
          returnValue: "bool",
          ref: null
        }
      },
      pop: {
        name: "pop",
        url: "imagickdraw.pop",
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
      popclippath: {
        name: "popClipPath",
        url: "imagickdraw.popclippath",
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
      popdefs: {
        name: "popDefs",
        url: "imagickdraw.popdefs",
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
      poppattern: {
        name: "popPattern",
        url: "imagickdraw.poppattern",
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
      push: {
        name: "push",
        url: "imagickdraw.push",
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
      pushclippath: {
        name: "pushClipPath",
        url: "imagickdraw.pushclippath",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $clip_mask_id",
          returnValue: "bool",
          ref: null
        }
      },
      pushdefs: {
        name: "pushDefs",
        url: "imagickdraw.pushdefs",
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
      pushpattern: {
        name: "pushPattern",
        url: "imagickdraw.pushpattern",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $pattern_id, float $x, float $y, float $width, float $height",
          returnValue: "bool",
          ref: null
        }
      },
      rectangle: {
        name: "rectangle",
        url: "imagickdraw.rectangle",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x2, float $y2",
          returnValue: "bool",
          ref: null
        }
      },
      render: {
        name: "render",
        url: "imagickdraw.render",
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
      resetvectorgraphics: {
        name: "resetVectorGraphics",
        url: "imagickdraw.resetvectorgraphics",
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
      rotate: {
        name: "rotate",
        url: "imagickdraw.rotate",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $degrees",
          returnValue: "bool",
          ref: null
        }
      },
      roundrectangle: {
        name: "roundRectangle",
        url: "imagickdraw.roundrectangle",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x1, float $y1, float $x2, float $y2, float $rx, float $ry",
          returnValue: "bool",
          ref: null
        }
      },
      scale: {
        name: "scale",
        url: "imagickdraw.scale",
        spec: {
          isPublic: false,
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
      setclippath: {
        name: "setClipPath",
        url: "imagickdraw.setclippath",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $clip_mask",
          returnValue: "bool",
          ref: null
        }
      },
      setcliprule: {
        name: "setClipRule",
        url: "imagickdraw.setcliprule",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $fill_rule",
          returnValue: "bool",
          ref: null
        }
      },
      setclipunits: {
        name: "setClipUnits",
        url: "imagickdraw.setclipunits",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $clip_units",
          returnValue: "bool",
          ref: null
        }
      },
      setfillalpha: {
        name: "setFillAlpha",
        url: "imagickdraw.setfillalpha",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $opacity",
          returnValue: "bool",
          ref: null
        }
      },
      setfillcolor: {
        name: "setFillColor",
        url: "imagickdraw.setfillcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickPixel $fill_pixel",
          returnValue: "bool",
          ref: null
        }
      },
      setfillopacity: {
        name: "setFillOpacity",
        url: "imagickdraw.setfillopacity",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $fillOpacity",
          returnValue: "bool",
          ref: null
        }
      },
      setfillpatternurl: {
        name: "setFillPatternURL",
        url: "imagickdraw.setfillpatternurl",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $fill_url",
          returnValue: "bool",
          ref: null
        }
      },
      setfillrule: {
        name: "setFillRule",
        url: "imagickdraw.setfillrule",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $fill_rule",
          returnValue: "bool",
          ref: null
        }
      },
      setfont: {
        name: "setFont",
        url: "imagickdraw.setfont",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $font_name",
          returnValue: "bool",
          ref: null
        }
      },
      setfontfamily: {
        name: "setFontFamily",
        url: "imagickdraw.setfontfamily",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $font_family",
          returnValue: "bool",
          ref: null
        }
      },
      setfontsize: {
        name: "setFontSize",
        url: "imagickdraw.setfontsize",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $pointsize",
          returnValue: "bool",
          ref: null
        }
      },
      setfontstretch: {
        name: "setFontStretch",
        url: "imagickdraw.setfontstretch",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $fontStretch",
          returnValue: "bool",
          ref: null
        }
      },
      setfontstyle: {
        name: "setFontStyle",
        url: "imagickdraw.setfontstyle",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $style",
          returnValue: "bool",
          ref: null
        }
      },
      setfontweight: {
        name: "setFontWeight",
        url: "imagickdraw.setfontweight",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $font_weight",
          returnValue: "bool",
          ref: null
        }
      },
      setgravity: {
        name: "setGravity",
        url: "imagickdraw.setgravity",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $gravity",
          returnValue: "bool",
          ref: null
        }
      },
      setresolution: {
        name: "setResolution",
        url: "imagickdraw.setresolution",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $x_resolution, float $y_resolution",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokealpha: {
        name: "setStrokeAlpha",
        url: "imagickdraw.setstrokealpha",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $opacity",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokeantialias: {
        name: "setStrokeAntialias",
        url: "imagickdraw.setstrokeantialias",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $stroke_antialias",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokecolor: {
        name: "setStrokeColor",
        url: "imagickdraw.setstrokecolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickPixel $stroke_pixel",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokedasharray: {
        name: "setStrokeDashArray",
        url: "imagickdraw.setstrokedasharray",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "array $dashArray",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokedashoffset: {
        name: "setStrokeDashOffset",
        url: "imagickdraw.setstrokedashoffset",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $dash_offset",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokelinecap: {
        name: "setStrokeLineCap",
        url: "imagickdraw.setstrokelinecap",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $linecap",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokelinejoin: {
        name: "setStrokeLineJoin",
        url: "imagickdraw.setstrokelinejoin",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $linejoin",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokemiterlimit: {
        name: "setStrokeMiterLimit",
        url: "imagickdraw.setstrokemiterlimit",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $miterlimit",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokeopacity: {
        name: "setStrokeOpacity",
        url: "imagickdraw.setstrokeopacity",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $stroke_opacity",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokepatternurl: {
        name: "setStrokePatternURL",
        url: "imagickdraw.setstrokepatternurl",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $stroke_url",
          returnValue: "bool",
          ref: null
        }
      },
      setstrokewidth: {
        name: "setStrokeWidth",
        url: "imagickdraw.setstrokewidth",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $stroke_width",
          returnValue: "bool",
          ref: null
        }
      },
      settextalignment: {
        name: "setTextAlignment",
        url: "imagickdraw.settextalignment",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $alignment",
          returnValue: "bool",
          ref: null
        }
      },
      settextantialias: {
        name: "setTextAntialias",
        url: "imagickdraw.settextantialias",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $antiAlias",
          returnValue: "bool",
          ref: null
        }
      },
      settextdecoration: {
        name: "setTextDecoration",
        url: "imagickdraw.settextdecoration",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $decoration",
          returnValue: "bool",
          ref: null
        }
      },
      settextencoding: {
        name: "setTextEncoding",
        url: "imagickdraw.settextencoding",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $encoding",
          returnValue: "bool",
          ref: null
        }
      },
      settextinterlinespacing: {
        name: "setTextInterlineSpacing",
        url: "imagickdraw.settextinterlinespacing",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $spacing",
          returnValue: "bool",
          ref: null
        }
      },
      settextinterwordspacing: {
        name: "setTextInterwordSpacing",
        url: "imagickdraw.settextinterwordspacing",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $spacing",
          returnValue: "bool",
          ref: null
        }
      },
      settextkerning: {
        name: "setTextKerning",
        url: "imagickdraw.settextkerning",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $kerning",
          returnValue: "bool",
          ref: null
        }
      },
      settextundercolor: {
        name: "setTextUnderColor",
        url: "imagickdraw.settextundercolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickPixel $under_color",
          returnValue: "bool",
          ref: null
        }
      },
      setvectorgraphics: {
        name: "setVectorGraphics",
        url: "imagickdraw.setvectorgraphics",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $xml",
          returnValue: "bool",
          ref: null
        }
      },
      setviewbox: {
        name: "setViewbox",
        url: "imagickdraw.setviewbox",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $x1, int $y1, int $x2, int $y2",
          returnValue: "bool",
          ref: null
        }
      },
      skewx: {
        name: "skewX",
        url: "imagickdraw.skewx",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $degrees",
          returnValue: "bool",
          ref: null
        }
      },
      skewy: {
        name: "skewY",
        url: "imagickdraw.skewy",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $degrees",
          returnValue: "bool",
          ref: null
        }
      },
      translate: {
        name: "translate",
        url: "imagickdraw.translate",
        spec: {
          isPublic: false,
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
      __construct: {
        name: "__construct",
        url: "imagickdraw.construct",
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
  imagickkernel: {
    name: "ImagickKernel",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      addkernel: {
        name: "addKernel",
        url: "imagickkernel.addkernel",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickKernel $ImagickKernel",
          returnValue: "void",
          ref: null
        }
      },
      addunitykernel: {
        name: "addUnityKernel",
        url: "imagickkernel.addunitykernel",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $scale",
          returnValue: "void",
          ref: null
        }
      },
      frombuiltin: {
        name: "fromBuiltIn",
        url: "imagickkernel.frombuiltin",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $kernelType, string $kernelString",
          returnValue: "ImagickKernel",
          ref: null
        }
      },
      frommatrix: {
        name: "fromMatrix",
        url: "imagickkernel.frommatrix",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "array $matrix [, array $origin ]",
          returnValue: "ImagickKernel",
          ref: null
        }
      },
      getmatrix: {
        name: "getMatrix",
        url: "imagickkernel.getmatrix",
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
      scale: {
        name: "scale",
        url: "imagickkernel.scale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $scale [, int $normalizeFlag ]",
          returnValue: "void",
          ref: null
        }
      },
      separate: {
        name: "separate",
        url: "imagickkernel.separate",
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
        url: "class.imagickkernel",
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
  imagickpixel: {
    name: "ImagickPixel",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      clear: {
        name: "clear",
        url: "imagickpixel.clear",
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
      destroy: {
        name: "destroy",
        url: "imagickpixel.destroy",
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
      getcolor: {
        name: "getColor",
        url: "imagickpixel.getcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $normalized = 0 ]",
          returnValue: "array",
          ref: null
        }
      },
      getcolorasstring: {
        name: "getColorAsString",
        url: "imagickpixel.getcolorasstring",
        spec: {
          isPublic: false,
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
      getcolorcount: {
        name: "getColorCount",
        url: "imagickpixel.getcolorcount",
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
      getcolorquantum: {
        name: "getColorQuantum",
        url: "imagickpixel.getcolorquantum",
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
      getcolorvalue: {
        name: "getColorValue",
        url: "imagickpixel.getcolorvalue",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $color",
          returnValue: "float",
          ref: null
        }
      },
      getcolorvaluequantum: {
        name: "getColorValueQuantum",
        url: "imagickpixel.getcolorvaluequantum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $color",
          returnValue: "number",
          ref: null
        }
      },
      gethsl: {
        name: "getHSL",
        url: "imagickpixel.gethsl",
        spec: {
          isPublic: false,
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
      getindex: {
        name: "getIndex",
        url: "imagickpixel.getindex",
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
      ispixelsimilar: {
        name: "isPixelSimilar",
        url: "imagickpixel.ispixelsimilar",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickPixel $color, float $fuzz",
          returnValue: "bool",
          ref: null
        }
      },
      ispixelsimilarquantum: {
        name: "isPixelSimilarQuantum",
        url: "imagickpixel.ispixelsimilarquantum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $color [, string $fuzz ]",
          returnValue: "bool",
          ref: null
        }
      },
      issimilar: {
        name: "isSimilar",
        url: "imagickpixel.issimilar",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "ImagickPixel $color, float $fuzz",
          returnValue: "bool",
          ref: null
        }
      },
      setcolor: {
        name: "setColor",
        url: "imagickpixel.setcolor",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $color",
          returnValue: "bool",
          ref: null
        }
      },
      setcolorcount: {
        name: "setColorCount",
        url: "imagickpixel.setcolorcount",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $colorCount",
          returnValue: "bool",
          ref: null
        }
      },
      setcolorvalue: {
        name: "setColorValue",
        url: "imagickpixel.setcolorvalue",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $color, float $value",
          returnValue: "bool",
          ref: null
        }
      },
      setcolorvaluequantum: {
        name: "setColorValueQuantum",
        url: "imagickpixel.setcolorvaluequantum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $color, number $value",
          returnValue: "bool",
          ref: null
        }
      },
      sethsl: {
        name: "setHSL",
        url: "imagickpixel.sethsl",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $hue, float $saturation, float $luminosity",
          returnValue: "bool",
          ref: null
        }
      },
      setindex: {
        name: "setIndex",
        url: "imagickpixel.setindex",
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
      __construct: {
        name: "__construct",
        url: "imagickpixel.construct",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $color ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  imagickpixeliterator: {
    name: "ImagickPixelIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      clear: {
        name: "clear",
        url: "imagickpixeliterator.clear",
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
      destroy: {
        name: "destroy",
        url: "imagickpixeliterator.destroy",
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
      getcurrentiteratorrow: {
        name: "getCurrentIteratorRow",
        url: "imagickpixeliterator.getcurrentiteratorrow",
        spec: {
          isPublic: false,
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
      getiteratorrow: {
        name: "getIteratorRow",
        url: "imagickpixeliterator.getiteratorrow",
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
      getnextiteratorrow: {
        name: "getNextIteratorRow",
        url: "imagickpixeliterator.getnextiteratorrow",
        spec: {
          isPublic: false,
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
      getpreviousiteratorrow: {
        name: "getPreviousIteratorRow",
        url: "imagickpixeliterator.getpreviousiteratorrow",
        spec: {
          isPublic: false,
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
      newpixeliterator: {
        name: "newPixelIterator",
        url: "imagickpixeliterator.newpixeliterator",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $wand",
          returnValue: "bool",
          ref: null
        }
      },
      newpixelregioniterator: {
        name: "newPixelRegionIterator",
        url: "imagickpixeliterator.newpixelregioniterator",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $wand, int $x, int $y, int $columns, int $rows",
          returnValue: "bool",
          ref: null
        }
      },
      resetiterator: {
        name: "resetIterator",
        url: "imagickpixeliterator.resetiterator",
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
      setiteratorfirstrow: {
        name: "setIteratorFirstRow",
        url: "imagickpixeliterator.setiteratorfirstrow",
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
      setiteratorlastrow: {
        name: "setIteratorLastRow",
        url: "imagickpixeliterator.setiteratorlastrow",
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
      setiteratorrow: {
        name: "setIteratorRow",
        url: "imagickpixeliterator.setiteratorrow",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $row",
          returnValue: "bool",
          ref: null
        }
      },
      synciterator: {
        name: "syncIterator",
        url: "imagickpixeliterator.synciterator",
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
      __construct: {
        name: "__construct",
        url: "imagickpixeliterator.construct",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Imagick $wand",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  infiniteiterator: {
    name: "InfiniteIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      next: {
        name: "next",
        url: "infiniteiterator.next",
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
        url: "infiniteiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Iterator $iterator",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  intlbreakiterator: {
    name: "IntlBreakIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      createcharacterinstance: {
        name: "createCharacterInstance",
        url: "intlbreakiterator.createcharacterinstance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "[ string $\"locale\" ]",
          returnValue: "ReturnType",
          ref: null
        }
      },
      createcodepointinstance: {
        name: "createCodePointInstance",
        url: "intlbreakiterator.createcodepointinstance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "ReturnType",
          ref: null
        }
      },
      createlineinstance: {
        name: "createLineInstance",
        url: "intlbreakiterator.createlineinstance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "[ string $\"locale\" ]",
          returnValue: "ReturnType",
          ref: null
        }
      },
      createsentenceinstance: {
        name: "createSentenceInstance",
        url: "intlbreakiterator.createsentenceinstance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "[ string $\"locale\" ]",
          returnValue: "ReturnType",
          ref: null
        }
      },
      createtitleinstance: {
        name: "createTitleInstance",
        url: "intlbreakiterator.createtitleinstance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "[ string $\"locale\" ]",
          returnValue: "ReturnType",
          ref: null
        }
      },
      createwordinstance: {
        name: "createWordInstance",
        url: "intlbreakiterator.createwordinstance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "[ string $\"locale\" ]",
          returnValue: "ReturnType",
          ref: null
        }
      },
      current: {
        name: "current",
        url: "intlbreakiterator.current",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReturnType",
          ref: null
        }
      },
      first: {
        name: "first",
        url: "intlbreakiterator.first",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReturnType",
          ref: null
        }
      },
      following: {
        name: "following",
        url: "intlbreakiterator.following",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $\"offset\"",
          returnValue: "ReturnType",
          ref: null
        }
      },
      geterrorcode: {
        name: "getErrorCode",
        url: "intlbreakiterator.geterrorcode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReturnType",
          ref: null
        }
      },
      geterrormessage: {
        name: "getErrorMessage",
        url: "intlbreakiterator.geterrormessage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReturnType",
          ref: null
        }
      },
      getlocale: {
        name: "getLocale",
        url: "intlbreakiterator.getlocale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $\"locale_type\"",
          returnValue: "ReturnType",
          ref: null
        }
      },
      getpartsiterator: {
        name: "getPartsIterator",
        url: "intlbreakiterator.getpartsiterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $\"key_type\" ]",
          returnValue: "ReturnType",
          ref: null
        }
      },
      gettext: {
        name: "getText",
        url: "intlbreakiterator.gettext",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReturnType",
          ref: null
        }
      },
      isboundary: {
        name: "isBoundary",
        url: "intlbreakiterator.isboundary",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $\"offset\"",
          returnValue: "ReturnType",
          ref: null
        }
      },
      last: {
        name: "last",
        url: "intlbreakiterator.last",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReturnType",
          ref: null
        }
      },
      next: {
        name: "next",
        url: "intlbreakiterator.next",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ string $\"offset\" ]",
          returnValue: "ReturnType",
          ref: null
        }
      },
      preceding: {
        name: "preceding",
        url: "intlbreakiterator.preceding",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $\"offset\"",
          returnValue: "ReturnType",
          ref: null
        }
      },
      previous: {
        name: "previous",
        url: "intlbreakiterator.previous",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "ReturnType",
          ref: null
        }
      },
      settext: {
        name: "setText",
        url: "intlbreakiterator.settext",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $\"text\"",
          returnValue: "ReturnType",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "intlbreakiterator.construct",
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
  intlcalendar: {
    name: "IntlCalendar",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      add: {
        name: "add",
        url: "intlcalendar.add",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field, int $amount",
          returnValue: "bool",
          ref: null
        }
      },
      after: {
        name: "after",
        url: "intlcalendar.after",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "IntlCalendar $other",
          returnValue: "bool",
          ref: null
        }
      },
      before: {
        name: "before",
        url: "intlcalendar.before",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "IntlCalendar $other",
          returnValue: "bool",
          ref: null
        }
      },
      clear: {
        name: "clear",
        url: "intlcalendar.clear",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $field = NULL ]",
          returnValue: "bool",
          ref: null
        }
      },
      createinstance: {
        name: "createInstance",
        url: "intlcalendar.createinstance",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "[ mixed $timeZone = NULL [, string $locale = \"\" ]]",
          returnValue: "IntlCalendar",
          ref: null
        }
      },
      equals: {
        name: "equals",
        url: "intlcalendar.equals",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "IntlCalendar $other",
          returnValue: "bool",
          ref: null
        }
      },
      fielddifference: {
        name: "fieldDifference",
        url: "intlcalendar.fielddifference",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $when, int $field",
          returnValue: "int",
          ref: null
        }
      },
      fromdatetime: {
        name: "fromDateTime",
        url: "intlcalendar.fromdatetime",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $dateTime",
          returnValue: "IntlCalendar",
          ref: null
        }
      },
      get: {
        name: "get",
        url: "intlcalendar.get",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field",
          returnValue: "int",
          ref: null
        }
      },
      getactualmaximum: {
        name: "getActualMaximum",
        url: "intlcalendar.getactualmaximum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field",
          returnValue: "int",
          ref: null
        }
      },
      getactualminimum: {
        name: "getActualMinimum",
        url: "intlcalendar.getactualminimum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field",
          returnValue: "int",
          ref: null
        }
      },
      getavailablelocales: {
        name: "getAvailableLocales",
        url: "intlcalendar.getavailablelocales",
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
      getdayofweektype: {
        name: "getDayOfWeekType",
        url: "intlcalendar.getdayofweektype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $dayOfWeek",
          returnValue: "int",
          ref: null
        }
      },
      geterrorcode: {
        name: "getErrorCode",
        url: "intlcalendar.geterrorcode",
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
        url: "intlcalendar.geterrormessage",
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
      getfirstdayofweek: {
        name: "getFirstDayOfWeek",
        url: "intlcalendar.getfirstdayofweek",
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
      getgreatestminimum: {
        name: "getGreatestMinimum",
        url: "intlcalendar.getgreatestminimum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field",
          returnValue: "int",
          ref: null
        }
      },
      getkeywordvaluesforlocale: {
        name: "getKeywordValuesForLocale",
        url: "intlcalendar.getkeywordvaluesforlocale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $key, string $locale, bool $commonlyUsed",
          returnValue: "Iterator",
          ref: null
        }
      },
      getleastmaximum: {
        name: "getLeastMaximum",
        url: "intlcalendar.getleastmaximum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field",
          returnValue: "int",
          ref: null
        }
      },
      getlocale: {
        name: "getLocale",
        url: "intlcalendar.getlocale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $localeType",
          returnValue: "string",
          ref: null
        }
      },
      getmaximum: {
        name: "getMaximum",
        url: "intlcalendar.getmaximum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field",
          returnValue: "int",
          ref: null
        }
      },
      getminimaldaysinfirstweek: {
        name: "getMinimalDaysInFirstWeek",
        url: "intlcalendar.getminimaldaysinfirstweek",
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
      getminimum: {
        name: "getMinimum",
        url: "intlcalendar.getminimum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field",
          returnValue: "int",
          ref: null
        }
      },
      getnow: {
        name: "getNow",
        url: "intlcalendar.getnow",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "float",
          ref: null
        }
      },
      getrepeatedwalltimeoption: {
        name: "getRepeatedWallTimeOption",
        url: "intlcalendar.getrepeatedwalltimeoption",
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
      getskippedwalltimeoption: {
        name: "getSkippedWallTimeOption",
        url: "intlcalendar.getskippedwalltimeoption",
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
      gettime: {
        name: "getTime",
        url: "intlcalendar.gettime",
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
      gettimezone: {
        name: "getTimeZone",
        url: "intlcalendar.gettimezone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "IntlTimeZone",
          ref: null
        }
      },
      gettype: {
        name: "getType",
        url: "intlcalendar.gettype",
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
      getweekendtransition: {
        name: "getWeekendTransition",
        url: "intlcalendar.getweekendtransition",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $dayOfWeek",
          returnValue: "int",
          ref: null
        }
      },
      indaylighttime: {
        name: "inDaylightTime",
        url: "intlcalendar.indaylighttime",
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
      isequivalentto: {
        name: "isEquivalentTo",
        url: "intlcalendar.isequivalentto",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "IntlCalendar $other",
          returnValue: "bool",
          ref: null
        }
      },
      islenient: {
        name: "isLenient",
        url: "intlcalendar.islenient",
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
      isset: {
        name: "isSet",
        url: "intlcalendar.isset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field",
          returnValue: "bool",
          ref: null
        }
      },
      isweekend: {
        name: "isWeekend",
        url: "intlcalendar.isweekend",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ float $date = NULL ]",
          returnValue: "bool",
          ref: null
        }
      },
      roll: {
        name: "roll",
        url: "intlcalendar.roll",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field, mixed $amountOrUpOrDown",
          returnValue: "bool",
          ref: null
        }
      },
      set: {
        name: "set",
        url: "intlcalendar.set",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $field, int $value",
          returnValue: "bool",
          ref: null
        }
      },
      setfirstdayofweek: {
        name: "setFirstDayOfWeek",
        url: "intlcalendar.setfirstdayofweek",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $dayOfWeek",
          returnValue: "bool",
          ref: null
        }
      },
      setlenient: {
        name: "setLenient",
        url: "intlcalendar.setlenient",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $isLenient",
          returnValue: "bool",
          ref: null
        }
      },
      setminimaldaysinfirstweek: {
        name: "setMinimalDaysInFirstWeek",
        url: "intlcalendar.setminimaldaysinfirstweek",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $minimalDays",
          returnValue: "bool",
          ref: null
        }
      },
      setrepeatedwalltimeoption: {
        name: "setRepeatedWallTimeOption",
        url: "intlcalendar.setrepeatedwalltimeoption",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $wallTimeOption",
          returnValue: "bool",
          ref: null
        }
      },
      setskippedwalltimeoption: {
        name: "setSkippedWallTimeOption",
        url: "intlcalendar.setskippedwalltimeoption",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $wallTimeOption",
          returnValue: "bool",
          ref: null
        }
      },
      settime: {
        name: "setTime",
        url: "intlcalendar.settime",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $date",
          returnValue: "bool",
          ref: null
        }
      },
      settimezone: {
        name: "setTimeZone",
        url: "intlcalendar.settimezone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $timeZone",
          returnValue: "bool",
          ref: null
        }
      },
      todatetime: {
        name: "toDateTime",
        url: "intlcalendar.todatetime",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "DateTime",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "intlcalendar.construct",
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
  intlchar: {
    name: "IntlChar",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      charage: {
        name: "charAge",
        url: "intlchar.charage",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "array",
          ref: null
        }
      },
      chardigitvalue: {
        name: "charDigitValue",
        url: "intlchar.chardigitvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "int",
          ref: null
        }
      },
      chardirection: {
        name: "charDirection",
        url: "intlchar.chardirection",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "int",
          ref: null
        }
      },
      charfromname: {
        name: "charFromName",
        url: "intlchar.charfromname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $characterName [, int $nameChoice = IntlChar::UNICODE_CHAR_NAME ]",
          returnValue: "int",
          ref: null
        }
      },
      charmirror: {
        name: "charMirror",
        url: "intlchar.charmirror",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "mixed",
          ref: null
        }
      },
      charname: {
        name: "charName",
        url: "intlchar.charname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint [, int $nameChoice = IntlChar::UNICODE_CHAR_NAME ]",
          returnValue: "string",
          ref: null
        }
      },
      chartype: {
        name: "charType",
        url: "intlchar.chartype",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "int",
          ref: null
        }
      },
      chr: {
        name: "chr",
        url: "intlchar.chr",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "string",
          ref: null
        }
      },
      digit: {
        name: "digit",
        url: "intlchar.digit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $codepoint [, int $radix = 10 ]",
          returnValue: "int",
          ref: null
        }
      },
      enumcharnames: {
        name: "enumCharNames",
        url: "intlchar.enumcharnames",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $start, mixed $limit, callable $callback [, int $nameChoice = IntlChar::UNICODE_CHAR_NAME ]",
          returnValue: "void",
          ref: null
        }
      },
      enumchartypes: {
        name: "enumCharTypes",
        url: "intlchar.enumchartypes",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "callable $callback",
          returnValue: "void",
          ref: null
        }
      },
      foldcase: {
        name: "foldCase",
        url: "intlchar.foldcase",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint [, int $options = IntlChar::FOLD_CASE_DEFAULT ]",
          returnValue: "mixed",
          ref: null
        }
      },
      fordigit: {
        name: "forDigit",
        url: "intlchar.fordigit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $digit [, int $radix = 10 ]",
          returnValue: "int",
          ref: null
        }
      },
      getbidipairedbracket: {
        name: "getBidiPairedBracket",
        url: "intlchar.getbidipairedbracket",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "mixed",
          ref: null
        }
      },
      getblockcode: {
        name: "getBlockCode",
        url: "intlchar.getblockcode",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "int",
          ref: null
        }
      },
      getcombiningclass: {
        name: "getCombiningClass",
        url: "intlchar.getcombiningclass",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "int",
          ref: null
        }
      },
      getfc_nfkc_closure: {
        name: "getFC_NFKC_Closure",
        url: "intlchar.getfc-nfkc-closure",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "string",
          ref: null
        }
      },
      getintpropertymaxvalue: {
        name: "getIntPropertyMaxValue",
        url: "intlchar.getintpropertymaxvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $property",
          returnValue: "int",
          ref: null
        }
      },
      getintpropertyminvalue: {
        name: "getIntPropertyMinValue",
        url: "intlchar.getintpropertyminvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $property",
          returnValue: "int",
          ref: null
        }
      },
      getintpropertyvalue: {
        name: "getIntPropertyValue",
        url: "intlchar.getintpropertyvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint, int $property",
          returnValue: "int",
          ref: null
        }
      },
      getnumericvalue: {
        name: "getNumericValue",
        url: "intlchar.getnumericvalue",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "float",
          ref: null
        }
      },
      getpropertyenum: {
        name: "getPropertyEnum",
        url: "intlchar.getpropertyenum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $alias",
          returnValue: "int",
          ref: null
        }
      },
      getpropertyname: {
        name: "getPropertyName",
        url: "intlchar.getpropertyname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $property [, int $nameChoice = IntlChar::LONG_PROPERTY_NAME ]",
          returnValue: "string",
          ref: null
        }
      },
      getpropertyvalueenum: {
        name: "getPropertyValueEnum",
        url: "intlchar.getpropertyvalueenum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $property, string $name",
          returnValue: "int",
          ref: null
        }
      },
      getpropertyvaluename: {
        name: "getPropertyValueName",
        url: "intlchar.getpropertyvaluename",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $property, int $value [, int $nameChoice = IntlChar::LONG_PROPERTY_NAME ]",
          returnValue: "string",
          ref: null
        }
      },
      getunicodeversion: {
        name: "getUnicodeVersion",
        url: "intlchar.getunicodeversion",
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
      hasbinaryproperty: {
        name: "hasBinaryProperty",
        url: "intlchar.hasbinaryproperty",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint, int $property",
          returnValue: "bool",
          ref: null
        }
      },
      isalnum: {
        name: "isalnum",
        url: "intlchar.isalnum",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isalpha: {
        name: "isalpha",
        url: "intlchar.isalpha",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isbase: {
        name: "isbase",
        url: "intlchar.isbase",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isblank: {
        name: "isblank",
        url: "intlchar.isblank",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      iscntrl: {
        name: "iscntrl",
        url: "intlchar.iscntrl",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isdefined: {
        name: "isdefined",
        url: "intlchar.isdefined",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isdigit: {
        name: "isdigit",
        url: "intlchar.isdigit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isgraph: {
        name: "isgraph",
        url: "intlchar.isgraph",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isidignorable: {
        name: "isIDIgnorable",
        url: "intlchar.isidignorable",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isidpart: {
        name: "isIDPart",
        url: "intlchar.isidpart",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isidstart: {
        name: "isIDStart",
        url: "intlchar.isidstart",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isisocontrol: {
        name: "isISOControl",
        url: "intlchar.isisocontrol",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isjavaidpart: {
        name: "isJavaIDPart",
        url: "intlchar.isjavaidpart",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isjavaidstart: {
        name: "isJavaIDStart",
        url: "intlchar.isjavaidstart",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isjavaspacechar: {
        name: "isJavaSpaceChar",
        url: "intlchar.isjavaspacechar",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      islower: {
        name: "islower",
        url: "intlchar.islower",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      ismirrored: {
        name: "isMirrored",
        url: "intlchar.ismirrored",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isprint: {
        name: "isprint",
        url: "intlchar.isprint",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      ispunct: {
        name: "ispunct",
        url: "intlchar.ispunct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isspace: {
        name: "isspace",
        url: "intlchar.isspace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      istitle: {
        name: "istitle",
        url: "intlchar.istitle",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isualphabetic: {
        name: "isUAlphabetic",
        url: "intlchar.isualphabetic",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isulowercase: {
        name: "isULowercase",
        url: "intlchar.isulowercase",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isupper: {
        name: "isupper",
        url: "intlchar.isupper",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isuuppercase: {
        name: "isUUppercase",
        url: "intlchar.isuuppercase",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isuwhitespace: {
        name: "isUWhiteSpace",
        url: "intlchar.isuwhitespace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      iswhitespace: {
        name: "isWhitespace",
        url: "intlchar.iswhitespace",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      isxdigit: {
        name: "isxdigit",
        url: "intlchar.isxdigit",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "bool",
          ref: null
        }
      },
      ord: {
        name: "ord",
        url: "intlchar.ord",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $character",
          returnValue: "int",
          ref: null
        }
      },
      tolower: {
        name: "tolower",
        url: "intlchar.tolower",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "mixed",
          ref: null
        }
      },
      totitle: {
        name: "totitle",
        url: "intlchar.totitle",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "mixed",
          ref: null
        }
      },
      toupper: {
        name: "toupper",
        url: "intlchar.toupper",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "mixed $codepoint",
          returnValue: "mixed",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.intlchar",
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
  intlcodepointbreakiterator: {
    name: "IntlCodePointBreakIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getlastcodepoint: {
        name: "getLastCodePoint",
        url: "intlcodepointbreakiterator.getlastcodepoint",
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
        url: "class.intlcodepointbreakiterator",
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
  intldateformatter: {
    name: "IntlDateFormatter",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      create: {
        name: "create",
        url: "intldateformatter.create",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $locale, int $datetype, int $timetype [, mixed $timezone = NULL [, mixed $calendar = NULL [, string $pattern = \"\" ]]]",
          returnValue: "IntlDateFormatter",
          ref: null
        }
      },
      format: {
        name: "format",
        url: "intldateformatter.format",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $value",
          returnValue: "string",
          ref: null
        }
      },
      formatobject: {
        name: "formatObject",
        url: "intldateformatter.formatobject",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "object $object [, mixed $format = NULL [, string $locale = NULL ]]",
          returnValue: "string",
          ref: null
        }
      },
      getcalendar: {
        name: "getCalendar",
        url: "intldateformatter.getcalendar",
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
      getcalendarobject: {
        name: "getCalendarObject",
        url: "intldateformatter.getcalendarobject",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "IntlCalendar",
          ref: null
        }
      },
      getdatetype: {
        name: "getDateType",
        url: "intldateformatter.getdatetype",
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
      geterrorcode: {
        name: "getErrorCode",
        url: "intldateformatter.geterrorcode",
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
        url: "intldateformatter.geterrormessage",
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
        url: "intldateformatter.getlocale",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ int $which ]",
          returnValue: "string",
          ref: null
        }
      },
      getpattern: {
        name: "getPattern",
        url: "intldateformatter.getpattern",
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
      gettimetype: {
        name: "getTimeType",
        url: "intldateformatter.gettimetype",
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
        name: "getTimeZone",
        url: "intldateformatter.gettimezone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "IntlTimeZone",
          ref: null
        }
      },
      gettimezoneid: {
        name: "getTimeZoneId",
        url: "intldateformatter.gettimezoneid",
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
      islenient: {
        name: "isLenient",
        url: "intldateformatter.islenient",
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
      localtime: {
        name: "localtime",
        url: "intldateformatter.localtime",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $value [, int &$position ]",
          returnValue: "array",
          ref: null
        }
      },
      parse: {
        name: "parse",
        url: "intldateformatter.parse",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $value [, int &$position ]",
          returnValue: "int",
          ref: null
        }
      },
      setcalendar: {
        name: "setCalendar",
        url: "intldateformatter.setcalendar",
        spec: {
          isPublic: false,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $which",
          returnValue: "bool",
          ref: null
        }
      },
      setlenient: {
        name: "setLenient",
        url: "intldateformatter.setlenient",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "bool $lenient",
          returnValue: "bool",
          ref: null
        }
      },
      setpattern: {
        name: "setPattern",
        url: "intldateformatter.setpattern",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $pattern",
          returnValue: "bool",
          ref: null
        }
      },
      settimezone: {
        name: "setTimeZone",
        url: "intldateformatter.settimezone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "mixed $zone",
          returnValue: "boolean",
          ref: null
        }
      },
      settimezoneid: {
        name: "setTimeZoneId",
        url: "intldateformatter.settimezoneid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $zone",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.intldateformatter",
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
  intlgregoriancalendar: {
    name: "IntlGregorianCalendar",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getgregorianchange: {
        name: "getGregorianChange",
        url: "intlgregoriancalendar.getgregorianchange",
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
      isleapyear: {
        name: "isLeapYear",
        url: "intlgregoriancalendar.isleapyear",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "int $year",
          returnValue: "bool",
          ref: null
        }
      },
      setgregorianchange: {
        name: "setGregorianChange",
        url: "intlgregoriancalendar.setgregorianchange",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $date",
          returnValue: "bool",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "intlgregoriancalendar.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ IntlTimeZone $tz [, string $locale ]]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  intliterator: {
    name: "IntlIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      current: {
        name: "current",
        url: "intliterator.current",
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
      key: {
        name: "key",
        url: "intliterator.key",
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
        url: "intliterator.next",
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
        url: "intliterator.rewind",
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
      valid: {
        name: "valid",
        url: "intliterator.valid",
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
        url: "class.intliterator",
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
  intlpartsiterator: {
    name: "IntlPartsIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getbreakiterator: {
        name: "getBreakIterator",
        url: "intlpartsiterator.getbreakiterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "IntlBreakIterator",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.intlpartsiterator",
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
  intlrulebasedbreakiterator: {
    name: "IntlRuleBasedBreakIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      getbinaryrules: {
        name: "getBinaryRules",
        url: "intlrulebasedbreakiterator.getbinaryrules",
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
      getrules: {
        name: "getRules",
        url: "intlrulebasedbreakiterator.getrules",
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
      getrulestatus: {
        name: "getRuleStatus",
        url: "intlrulebasedbreakiterator.getrulestatus",
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
      getrulestatusvec: {
        name: "getRuleStatusVec",
        url: "intlrulebasedbreakiterator.getrulestatusvec",
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
        url: "intlrulebasedbreakiterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "string $rules [, string $areCompiled ]",
          returnValue: "",
          ref: null
        }
      }
    }
  },
  intltimezone: {
    name: "IntlTimeZone",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      countequivalentids: {
        name: "countEquivalentIDs",
        url: "intltimezone.countequivalentids",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $zoneId",
          returnValue: "integer",
          ref: null
        }
      },
      createdefault: {
        name: "createDefault",
        url: "intltimezone.createdefault",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "IntlTimeZone",
          ref: null
        }
      },
      createenumeration: {
        name: "createEnumeration",
        url: "intltimezone.createenumeration",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "[ mixed $countryOrRawOffset ]",
          returnValue: "IntlIterator",
          ref: null
        }
      },
      createtimezone: {
        name: "createTimeZone",
        url: "intltimezone.createtimezone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $zoneId",
          returnValue: "IntlTimeZone",
          ref: null
        }
      },
      createtimezoneidenumeration: {
        name: "createTimeZoneIDEnumeration",
        url: "intltimezone.createtimezoneidenumeration",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "int $zoneType [, string $region [, int $rawOffset ]]",
          returnValue: "IntlIterator",
          ref: null
        }
      },
      fromdatetimezone: {
        name: "fromDateTimeZone",
        url: "intltimezone.fromdatetimezone",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "DateTimeZone $zoneId",
          returnValue: "IntlTimeZone",
          ref: null
        }
      },
      getcanonicalid: {
        name: "getCanonicalID",
        url: "intltimezone.getcanonicalid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $zoneId [, bool &$isSystemID ]",
          returnValue: "string",
          ref: null
        }
      },
      getdisplayname: {
        name: "getDisplayName",
        url: "intltimezone.getdisplayname",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "[ bool $isDaylight [, integer $style [, string $locale ]]]",
          returnValue: "string",
          ref: null
        }
      },
      getdstsavings: {
        name: "getDSTSavings",
        url: "intltimezone.getdstsavings",
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
      getequivalentid: {
        name: "getEquivalentID",
        url: "intltimezone.getequivalentid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $zoneId, integer $index",
          returnValue: "string",
          ref: null
        }
      },
      geterrorcode: {
        name: "getErrorCode",
        url: "intltimezone.geterrorcode",
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
      geterrormessage: {
        name: "getErrorMessage",
        url: "intltimezone.geterrormessage",
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
      getgmt: {
        name: "getGMT",
        url: "intltimezone.getgmt",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "IntlTimeZone",
          ref: null
        }
      },
      getid: {
        name: "getID",
        url: "intltimezone.getid",
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
      getidforwindowsid: {
        name: "getIDForWindowsID",
        url: "intltimezone.getidforwindowsid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $timezone [, string $region ]",
          returnValue: "string",
          ref: null
        }
      },
      getoffset: {
        name: "getOffset",
        url: "intltimezone.getoffset",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "float $date, bool $local, integer &$rawOffset, integer &$dstOffset",
          returnValue: "integer",
          ref: null
        }
      },
      getrawoffset: {
        name: "getRawOffset",
        url: "intltimezone.getrawoffset",
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
      getregion: {
        name: "getRegion",
        url: "intltimezone.getregion",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $zoneId",
          returnValue: "string",
          ref: null
        }
      },
      gettzdataversion: {
        name: "getTZDataVersion",
        url: "intltimezone.gettzdataversion",
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
      },
      getunknown: {
        name: "getUnknown",
        url: "intltimezone.getunknown",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "void",
          returnValue: "IntlTimeZone",
          ref: null
        }
      },
      getwindowsid: {
        name: "getWindowsID",
        url: "intltimezone.getwindowsid",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: true,
          parameters: "string $timezone",
          returnValue: "string",
          ref: null
        }
      },
      hassamerules: {
        name: "hasSameRules",
        url: "intltimezone.hassamerules",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "IntlTimeZone $otherTimeZone",
          returnValue: "bool",
          ref: null
        }
      },
      todatetimezone: {
        name: "toDateTimeZone",
        url: "intltimezone.todatetimezone",
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
      usedaylighttime: {
        name: "useDaylightTime",
        url: "intltimezone.usedaylighttime",
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
        url: "class.intltimezone",
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
  iterator: {
    name: "Iterator",
    isClass: false,
    isInterface: true,
    isTrait: false,
    methods: {
      current: {
        name: "current",
        url: "iterator.current",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "mixed",
          ref: null
        }
      },
      key: {
        name: "key",
        url: "iterator.key",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "scalar",
          ref: null
        }
      },
      next: {
        name: "next",
        url: "iterator.next",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      rewind: {
        name: "rewind",
        url: "iterator.rewind",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "void",
          ref: null
        }
      },
      valid: {
        name: "valid",
        url: "iterator.valid",
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
      __construct: {
        name: "__construct",
        url: "class.iterator",
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
  iteratoraggregate: {
    name: "IteratorAggregate",
    isClass: false,
    isInterface: true,
    isTrait: false,
    methods: {
      getiterator: {
        name: "getIterator",
        url: "iteratoraggregate.getiterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: true,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Traversable",
          ref: null
        }
      },
      __construct: {
        name: "__construct",
        url: "class.iteratoraggregate",
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
  iteratoriterator: {
    name: "IteratorIterator",
    isClass: true,
    isInterface: false,
    isTrait: false,
    methods: {
      current: {
        name: "current",
        url: "iteratoriterator.current",
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
      getinneriterator: {
        name: "getInnerIterator",
        url: "iteratoriterator.getinneriterator",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "void",
          returnValue: "Traversable",
          ref: null
        }
      },
      key: {
        name: "key",
        url: "iteratoriterator.key",
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
        url: "iteratoriterator.next",
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
        url: "iteratoriterator.rewind",
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
      valid: {
        name: "valid",
        url: "iteratoriterator.valid",
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
        url: "iteratoriterator.construct",
        spec: {
          isPublic: true,
          isPrivate: false,
          isProtected: false,
          isAbstract: false,
          isFinal: false,
          isStatic: false,
          parameters: "Traversable $iterator",
          returnValue: "",
          ref: null
        }
      }
    }
  }
};
