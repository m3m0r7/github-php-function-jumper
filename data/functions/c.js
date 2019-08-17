functions.c = {
  "cairo_create": {
    "name": "cairo_create",
    "url": "function.cairo-create",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "CairoContext",
      "ref": null
    }
  },
  "cairo_font_options_create": {
    "name": "cairo_font_options_create",
    "url": "function.cairo-font-options-create",
    "spec": {
      "parameters": "void",
      "returnValue": "CairoFontOptions",
      "ref": null
    }
  },
  "cairo_font_options_equal": {
    "name": "cairo_font_options_equal",
    "url": "function.cairo-font-options-equal",
    "spec": {
      "parameters": "CairoFontOptions $options, CairoFontOptions $other",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cairo_font_options_get_antialias": {
    "name": "cairo_font_options_get_antialias",
    "url": "function.cairo-font-options-get-antialias",
    "spec": {
      "parameters": "CairoFontOptions $options",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_font_options_get_hint_metrics": {
    "name": "cairo_font_options_get_hint_metrics",
    "url": "function.cairo-font-options-get-hint-metrics",
    "spec": {
      "parameters": "CairoFontOptions $options",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_font_options_get_hint_style": {
    "name": "cairo_font_options_get_hint_style",
    "url": "function.cairo-font-options-get-hint-style",
    "spec": {
      "parameters": "CairoFontOptions $options",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_font_options_get_subpixel_order": {
    "name": "cairo_font_options_get_subpixel_order",
    "url": "function.cairo-font-options-get-subpixel-order",
    "spec": {
      "parameters": "CairoFontOptions $options",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_font_options_hash": {
    "name": "cairo_font_options_hash",
    "url": "function.cairo-font-options-hash",
    "spec": {
      "parameters": "CairoFontOptions $options",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_font_options_merge": {
    "name": "cairo_font_options_merge",
    "url": "function.cairo-font-options-merge",
    "spec": {
      "parameters": "CairoFontOptions $options, CairoFontOptions $other",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_font_options_set_antialias": {
    "name": "cairo_font_options_set_antialias",
    "url": "function.cairo-font-options-set-antialias",
    "spec": {
      "parameters": "CairoFontOptions $options, int $antialias",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_font_options_set_hint_metrics": {
    "name": "cairo_font_options_set_hint_metrics",
    "url": "function.cairo-font-options-set-hint-metrics",
    "spec": {
      "parameters": "CairoFontOptions $options, int $hint_metrics",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_font_options_set_hint_style": {
    "name": "cairo_font_options_set_hint_style",
    "url": "function.cairo-font-options-set-hint-style",
    "spec": {
      "parameters": "CairoFontOptions $options, int $hint_style",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_font_options_set_subpixel_order": {
    "name": "cairo_font_options_set_subpixel_order",
    "url": "function.cairo-font-options-set-subpixel-order",
    "spec": {
      "parameters": "CairoFontOptions $options, int $subpixel_order",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_font_options_status": {
    "name": "cairo_font_options_status",
    "url": "function.cairo-font-options-status",
    "spec": {
      "parameters": "CairoFontOptions $options",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_format_stride_for_width": {
    "name": "cairo_format_stride_for_width",
    "url": "function.cairo-format-stride-for-width",
    "spec": {
      "parameters": "int $format, int $width",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_image_surface_create": {
    "name": "cairo_image_surface_create",
    "url": "function.cairo-image-surface-create",
    "spec": {
      "parameters": "int $format, int $width, int $height",
      "returnValue": "CairoImageSurface",
      "ref": null
    }
  },
  "cairo_image_surface_create_for_data": {
    "name": "cairo_image_surface_create_for_data",
    "url": "function.cairo-image-surface-create-for-data",
    "spec": {
      "parameters": "string $data, int $format, int $width, int $height [, int $stride = -1 ]",
      "returnValue": "CairoImageSurface",
      "ref": null
    }
  },
  "cairo_image_surface_create_from_png": {
    "name": "cairo_image_surface_create_from_png",
    "url": "function.cairo-image-surface-create-from-png",
    "spec": {
      "parameters": "mixed $file",
      "returnValue": "CairoImageSurface",
      "ref": null
    }
  },
  "cairo_image_surface_get_data": {
    "name": "cairo_image_surface_get_data",
    "url": "function.cairo-image-surface-get-data",
    "spec": {
      "parameters": "CairoImageSurface $surface",
      "returnValue": "string",
      "ref": null
    }
  },
  "cairo_image_surface_get_format": {
    "name": "cairo_image_surface_get_format",
    "url": "function.cairo-image-surface-get-format",
    "spec": {
      "parameters": "CairoImageSurface $surface",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_image_surface_get_height": {
    "name": "cairo_image_surface_get_height",
    "url": "function.cairo-image-surface-get-height",
    "spec": {
      "parameters": "CairoImageSurface $surface",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_image_surface_get_stride": {
    "name": "cairo_image_surface_get_stride",
    "url": "function.cairo-image-surface-get-stride",
    "spec": {
      "parameters": "CairoImageSurface $surface",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_image_surface_get_width": {
    "name": "cairo_image_surface_get_width",
    "url": "function.cairo-image-surface-get-width",
    "spec": {
      "parameters": "CairoImageSurface $surface",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_matrix_create_scale": {
    "name": "cairo_matrix_create_scale",
    "url": "function.cairo-matrix-create-scale",
    "spec": {
      "parameters": "float $sx, float $sy",
      "returnValue": "void",
      "ref": {
        "name": "CairoMatrix::initScale()",
        "url": "cairomatrix.initscale"
      }
    }
  },
  "cairo_matrix_create_translate": {
    "name": "cairo_matrix_create_translate",
    "url": "function.cairo-matrix-create-translate",
    "spec": {
      "parameters": "float $tx, float $ty",
      "returnValue": "void",
      "ref": {
        "name": "CairoMatrix::initTranslate()",
        "url": "cairomatrix.inittranslate"
      }
    }
  },
  "cairo_matrix_invert": {
    "name": "cairo_matrix_invert",
    "url": "function.cairo-matrix-invert",
    "spec": {
      "parameters": "CairoMatrix $matrix",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_matrix_multiply": {
    "name": "cairo_matrix_multiply",
    "url": "function.cairo-matrix-multiply",
    "spec": {
      "parameters": "CairoMatrix $matrix1, CairoMatrix $matrix2",
      "returnValue": "CairoMatrix",
      "ref": null
    }
  },
  "cairo_matrix_transform_distance": {
    "name": "cairo_matrix_transform_distance",
    "url": "function.cairo-matrix-transform-distance",
    "spec": {
      "parameters": "CairoMatrix $matrix, float $dx, float $dy",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_matrix_transform_point": {
    "name": "cairo_matrix_transform_point",
    "url": "function.cairo-matrix-transform-point",
    "spec": {
      "parameters": "CairoMatrix $matrix, float $dx, float $dy",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_matrix_translate": {
    "name": "cairo_matrix_translate",
    "url": "function.cairo-matrix-translate",
    "spec": {
      "parameters": "CairoMatrix $matrix, float $tx, float $ty",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_pattern_add_color_stop_rgb": {
    "name": "cairo_pattern_add_color_stop_rgb",
    "url": "function.cairo-pattern-add-color-stop-rgb",
    "spec": {
      "parameters": "CairoGradientPattern $pattern, float $offset, float $red, float $green, float $blue",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_pattern_add_color_stop_rgba": {
    "name": "cairo_pattern_add_color_stop_rgba",
    "url": "function.cairo-pattern-add-color-stop-rgba",
    "spec": {
      "parameters": "CairoGradientPattern $pattern, float $offset, float $red, float $green, float $blue, float $alpha",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_pattern_create_for_surface": {
    "name": "cairo_pattern_create_for_surface",
    "url": "function.cairo-pattern-create-for-surface",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "CairoPattern",
      "ref": null
    }
  },
  "cairo_pattern_create_linear": {
    "name": "cairo_pattern_create_linear",
    "url": "function.cairo-pattern-create-linear",
    "spec": {
      "parameters": "float $x0, float $y0, float $x1, float $y1",
      "returnValue": "CairoPattern",
      "ref": null
    }
  },
  "cairo_pattern_create_radial": {
    "name": "cairo_pattern_create_radial",
    "url": "function.cairo-pattern-create-radial",
    "spec": {
      "parameters": "float $x0, float $y0, float $r0, float $x1, float $y1, float $r1",
      "returnValue": "CairoPattern",
      "ref": null
    }
  },
  "cairo_pattern_create_rgb": {
    "name": "cairo_pattern_create_rgb",
    "url": "function.cairo-pattern-create-rgb",
    "spec": {
      "parameters": "float $red, float $green, float $blue",
      "returnValue": "CairoPattern",
      "ref": null
    }
  },
  "cairo_pattern_create_rgba": {
    "name": "cairo_pattern_create_rgba",
    "url": "function.cairo-pattern-create-rgba",
    "spec": {
      "parameters": "float $red, float $green, float $blue, float $alpha",
      "returnValue": "CairoPattern",
      "ref": null
    }
  },
  "cairo_pattern_get_color_stop_count": {
    "name": "cairo_pattern_get_color_stop_count",
    "url": "function.cairo-pattern-get-color-stop-count",
    "spec": {
      "parameters": "CairoGradientPattern $pattern",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_pattern_get_color_stop_rgba": {
    "name": "cairo_pattern_get_color_stop_rgba",
    "url": "function.cairo-pattern-get-color-stop-rgba",
    "spec": {
      "parameters": "CairoGradientPattern $pattern, int $index",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_pattern_get_extend": {
    "name": "cairo_pattern_get_extend",
    "url": "function.cairo-pattern-get-extend",
    "spec": {
      "parameters": "string $pattern",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_pattern_get_filter": {
    "name": "cairo_pattern_get_filter",
    "url": "function.cairo-pattern-get-filter",
    "spec": {
      "parameters": "CairoSurfacePattern $pattern",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_pattern_get_linear_points": {
    "name": "cairo_pattern_get_linear_points",
    "url": "function.cairo-pattern-get-linear-points",
    "spec": {
      "parameters": "CairoLinearGradient $pattern",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_pattern_get_matrix": {
    "name": "cairo_pattern_get_matrix",
    "url": "function.cairo-pattern-get-matrix",
    "spec": {
      "parameters": "CairoPattern $pattern",
      "returnValue": "CairoMatrix",
      "ref": null
    }
  },
  "cairo_pattern_get_radial_circles": {
    "name": "cairo_pattern_get_radial_circles",
    "url": "function.cairo-pattern-get-radial-circles",
    "spec": {
      "parameters": "CairoRadialGradient $pattern",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_pattern_get_rgba": {
    "name": "cairo_pattern_get_rgba",
    "url": "function.cairo-pattern-get-rgba",
    "spec": {
      "parameters": "CairoSolidPattern $pattern",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_pattern_get_surface": {
    "name": "cairo_pattern_get_surface",
    "url": "function.cairo-pattern-get-surface",
    "spec": {
      "parameters": "CairoSurfacePattern $pattern",
      "returnValue": "CairoSurface",
      "ref": null
    }
  },
  "cairo_pattern_get_type": {
    "name": "cairo_pattern_get_type",
    "url": "function.cairo-pattern-get-type",
    "spec": {
      "parameters": "CairoPattern $pattern",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_pattern_set_extend": {
    "name": "cairo_pattern_set_extend",
    "url": "function.cairo-pattern-set-extend",
    "spec": {
      "parameters": "string $pattern, string $extend",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_pattern_set_filter": {
    "name": "cairo_pattern_set_filter",
    "url": "function.cairo-pattern-set-filter",
    "spec": {
      "parameters": "CairoSurfacePattern $pattern, int $filter",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_pattern_set_matrix": {
    "name": "cairo_pattern_set_matrix",
    "url": "function.cairo-pattern-set-matrix",
    "spec": {
      "parameters": "CairoPattern $pattern, CairoMatrix $matrix",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_pattern_status": {
    "name": "cairo_pattern_status",
    "url": "function.cairo-pattern-status",
    "spec": {
      "parameters": "CairoPattern $pattern",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_pdf_surface_create": {
    "name": "cairo_pdf_surface_create",
    "url": "function.cairo-pdf-surface-create",
    "spec": {
      "parameters": "string $file, float $width, float $height",
      "returnValue": "CairoPdfSurface",
      "ref": null
    }
  },
  "cairo_pdf_surface_set_size": {
    "name": "cairo_pdf_surface_set_size",
    "url": "function.cairo-pdf-surface-set-size",
    "spec": {
      "parameters": "CairoPdfSurface $surface, float $width, float $height",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_ps_get_levels": {
    "name": "cairo_ps_get_levels",
    "url": "function.cairo-ps-get-levels",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_ps_level_to_string": {
    "name": "cairo_ps_level_to_string",
    "url": "function.cairo-ps-level-to-string",
    "spec": {
      "parameters": "int $level",
      "returnValue": "string",
      "ref": null
    }
  },
  "cairo_ps_surface_create": {
    "name": "cairo_ps_surface_create",
    "url": "function.cairo-ps-surface-create",
    "spec": {
      "parameters": "string $file, float $width, float $height",
      "returnValue": "CairoPsSurface",
      "ref": null
    }
  },
  "cairo_ps_surface_dsc_begin_page_setup": {
    "name": "cairo_ps_surface_dsc_begin_page_setup",
    "url": "function.cairo-ps-surface-dsc-begin-page-setup",
    "spec": {
      "parameters": "CairoPsSurface $surface",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_ps_surface_dsc_begin_setup": {
    "name": "cairo_ps_surface_dsc_begin_setup",
    "url": "function.cairo-ps-surface-dsc-begin-setup",
    "spec": {
      "parameters": "CairoPsSurface $surface",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_ps_surface_dsc_comment": {
    "name": "cairo_ps_surface_dsc_comment",
    "url": "function.cairo-ps-surface-dsc-comment",
    "spec": {
      "parameters": "CairoPsSurface $surface, string $comment",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_ps_surface_get_eps": {
    "name": "cairo_ps_surface_get_eps",
    "url": "function.cairo-ps-surface-get-eps",
    "spec": {
      "parameters": "CairoPsSurface $surface",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cairo_ps_surface_restrict_to_level": {
    "name": "cairo_ps_surface_restrict_to_level",
    "url": "function.cairo-ps-surface-restrict-to-level",
    "spec": {
      "parameters": "CairoPsSurface $surface, int $level",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_ps_surface_set_eps": {
    "name": "cairo_ps_surface_set_eps",
    "url": "function.cairo-ps-surface-set-eps",
    "spec": {
      "parameters": "CairoPsSurface $surface, bool $level",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_ps_surface_set_size": {
    "name": "cairo_ps_surface_set_size",
    "url": "function.cairo-ps-surface-set-size",
    "spec": {
      "parameters": "CairoPsSurface $surface, float $width, float $height",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_scaled_font_create": {
    "name": "cairo_scaled_font_create",
    "url": "function.cairo-scaled-font-create",
    "spec": {
      "parameters": "CairoFontFace $fontface, CairoMatrix $matrix, CairoMatrix $ctm, CairoFontOptions $fontoptions",
      "returnValue": "CairoScaledFont",
      "ref": null
    }
  },
  "cairo_scaled_font_extents": {
    "name": "cairo_scaled_font_extents",
    "url": "function.cairo-scaled-font-extents",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_scaled_font_get_ctm": {
    "name": "cairo_scaled_font_get_ctm",
    "url": "function.cairo-scaled-font-get-ctm",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont",
      "returnValue": "CairoMatrix",
      "ref": null
    }
  },
  "cairo_scaled_font_get_font_face": {
    "name": "cairo_scaled_font_get_font_face",
    "url": "function.cairo-scaled-font-get-font-face",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont",
      "returnValue": "CairoFontFace",
      "ref": null
    }
  },
  "cairo_scaled_font_get_font_matrix": {
    "name": "cairo_scaled_font_get_font_matrix",
    "url": "function.cairo-scaled-font-get-font-matrix",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont",
      "returnValue": "CairoFontOptions",
      "ref": null
    }
  },
  "cairo_scaled_font_get_font_options": {
    "name": "cairo_scaled_font_get_font_options",
    "url": "function.cairo-scaled-font-get-font-options",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont",
      "returnValue": "CairoFontOptions",
      "ref": null
    }
  },
  "cairo_scaled_font_get_scale_matrix": {
    "name": "cairo_scaled_font_get_scale_matrix",
    "url": "function.cairo-scaled-font-get-scale-matrix",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont",
      "returnValue": "CairoMatrix",
      "ref": null
    }
  },
  "cairo_scaled_font_get_type": {
    "name": "cairo_scaled_font_get_type",
    "url": "function.cairo-scaled-font-get-type",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_scaled_font_glyph_extents": {
    "name": "cairo_scaled_font_glyph_extents",
    "url": "function.cairo-scaled-font-glyph-extents",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont, array $glyphs",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_scaled_font_status": {
    "name": "cairo_scaled_font_status",
    "url": "function.cairo-scaled-font-status",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_scaled_font_text_extents": {
    "name": "cairo_scaled_font_text_extents",
    "url": "function.cairo-scaled-font-text-extents",
    "spec": {
      "parameters": "CairoScaledFont $scaledfont, string $text",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_surface_copy_page": {
    "name": "cairo_surface_copy_page",
    "url": "function.cairo-surface-copy-page",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_surface_create_similar": {
    "name": "cairo_surface_create_similar",
    "url": "function.cairo-surface-create-similar",
    "spec": {
      "parameters": "CairoSurface $surface, int $content, float $width, float $height",
      "returnValue": "CairoSurface",
      "ref": null
    }
  },
  "cairo_surface_finish": {
    "name": "cairo_surface_finish",
    "url": "function.cairo-surface-finish",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_surface_flush": {
    "name": "cairo_surface_flush",
    "url": "function.cairo-surface-flush",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_surface_get_content": {
    "name": "cairo_surface_get_content",
    "url": "function.cairo-surface-get-content",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_surface_get_device_offset": {
    "name": "cairo_surface_get_device_offset",
    "url": "function.cairo-surface-get-device-offset",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "array",
      "ref": null
    }
  },
  "cairo_surface_get_font_options": {
    "name": "cairo_surface_get_font_options",
    "url": "function.cairo-surface-get-font-options",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "CairoFontOptions",
      "ref": null
    }
  },
  "cairo_surface_get_type": {
    "name": "cairo_surface_get_type",
    "url": "function.cairo-surface-get-type",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_surface_mark_dirty": {
    "name": "cairo_surface_mark_dirty",
    "url": "function.cairo-surface-mark-dirty",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_surface_mark_dirty_rectangle": {
    "name": "cairo_surface_mark_dirty_rectangle",
    "url": "function.cairo-surface-mark-dirty-rectangle",
    "spec": {
      "parameters": "CairoSurface $surface, float $x, float $y, float $width, float $height",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_surface_set_device_offset": {
    "name": "cairo_surface_set_device_offset",
    "url": "function.cairo-surface-set-device-offset",
    "spec": {
      "parameters": "CairoSurface $surface, float $x, float $y",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_surface_set_fallback_resolution": {
    "name": "cairo_surface_set_fallback_resolution",
    "url": "function.cairo-surface-set-fallback-resolution",
    "spec": {
      "parameters": "CairoSurface $surface, float $x, float $y",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_surface_show_page": {
    "name": "cairo_surface_show_page",
    "url": "function.cairo-surface-show-page",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_surface_status": {
    "name": "cairo_surface_status",
    "url": "function.cairo-surface-status",
    "spec": {
      "parameters": "CairoSurface $surface",
      "returnValue": "int",
      "ref": null
    }
  },
  "cairo_surface_write_to_png": {
    "name": "cairo_surface_write_to_png",
    "url": "function.cairo-surface-write-to-png",
    "spec": {
      "parameters": "CairoSurface $surface, resource $stream",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_svg_surface_create": {
    "name": "cairo_svg_surface_create",
    "url": "function.cairo-svg-surface-create",
    "spec": {
      "parameters": "string $file, float $width, float $height",
      "returnValue": "CairoSvgSurface",
      "ref": null
    }
  },
  "cairo_svg_surface_restrict_to_version": {
    "name": "cairo_svg_surface_restrict_to_version",
    "url": "function.cairo-svg-surface-restrict-to-version",
    "spec": {
      "parameters": "CairoSvgSurface $surface, int $version",
      "returnValue": "void",
      "ref": null
    }
  },
  "cairo_svg_version_to_string": {
    "name": "cairo_svg_version_to_string",
    "url": "function.cairo-svg-version-to-string",
    "spec": {
      "parameters": "int $version",
      "returnValue": "string",
      "ref": null
    }
  },
  "call_user_func": {
    "name": "call_user_func",
    "url": "function.call-user-func",
    "spec": {
      "parameters": "callable $callback [, mixed $parameter [, mixed $... ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "call_user_func_array": {
    "name": "call_user_func_array",
    "url": "function.call-user-func-array",
    "spec": {
      "parameters": "callable $callback, array $param_arr",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "call_user_method": {
    "name": "call_user_method",
    "url": "function.call-user-method",
    "spec": {
      "parameters": "string $method_name, object &$obj [, mixed $... ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "call_user_method_array": {
    "name": "call_user_method_array",
    "url": "function.call-user-method-array",
    "spec": {
      "parameters": "string $method_name, object &$obj, array $params",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "cal_days_in_month": {
    "name": "cal_days_in_month",
    "url": "function.cal-days-in-month",
    "spec": {
      "parameters": "int $calendar, int $month, int $year",
      "returnValue": "int",
      "ref": null
    }
  },
  "cal_from_jd": {
    "name": "cal_from_jd",
    "url": "function.cal-from-jd",
    "spec": {
      "parameters": "int $jd, int $calendar",
      "returnValue": "array",
      "ref": null
    }
  },
  "cal_info": {
    "name": "cal_info",
    "url": "function.cal-info",
    "spec": {
      "parameters": "[ int $calendar = -1 ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "cal_to_jd": {
    "name": "cal_to_jd",
    "url": "function.cal-to-jd",
    "spec": {
      "parameters": "int $calendar, int $month, int $day, int $year",
      "returnValue": "int",
      "ref": null
    }
  },
  "ceil": {
    "name": "ceil",
    "url": "function.ceil",
    "spec": {
      "parameters": "float $value",
      "returnValue": "float",
      "ref": null
    }
  },
  "chdb_create": {
    "name": "chdb_create",
    "url": "function.chdb-create",
    "spec": {
      "parameters": "string $pathname, array $data",
      "returnValue": "bool",
      "ref": null
    }
  },
  "chdir": {
    "name": "chdir",
    "url": "function.chdir",
    "spec": {
      "parameters": "string $directory",
      "returnValue": "bool",
      "ref": null
    }
  },
  "checkdate": {
    "name": "checkdate",
    "url": "function.checkdate",
    "spec": {
      "parameters": "int $month, int $day, int $year",
      "returnValue": "bool",
      "ref": null
    }
  },
  "checkdnsrr": {
    "name": "checkdnsrr",
    "url": "function.checkdnsrr",
    "spec": {
      "parameters": "string $host [, string $type = \"MX\" ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "chgrp": {
    "name": "chgrp",
    "url": "function.chgrp",
    "spec": {
      "parameters": "string $filename, mixed $group",
      "returnValue": "bool",
      "ref": null
    }
  },
  "chmod": {
    "name": "chmod",
    "url": "function.chmod",
    "spec": {
      "parameters": "string $filename, int $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "chop": {
    "name": "chop",
    "url": "function.chop",
    "spec": {
      "parameters": "string $str [, string $character_mask ]",
      "returnValue": "string",
      "ref": {
        "name": "rtrim()",
        "url": "function.rtrim"
      }
    }
  },
  "chown": {
    "name": "chown",
    "url": "function.chown",
    "spec": {
      "parameters": "string $filename, mixed $user",
      "returnValue": "bool",
      "ref": null
    }
  },
  "chr": {
    "name": "chr",
    "url": "function.chr",
    "spec": {
      "parameters": "int $ascii",
      "returnValue": "string",
      "ref": null
    }
  },
  "chroot": {
    "name": "chroot",
    "url": "function.chroot",
    "spec": {
      "parameters": "string $directory",
      "returnValue": "bool",
      "ref": null
    }
  },
  "chunk_split": {
    "name": "chunk_split",
    "url": "function.chunk-split",
    "spec": {
      "parameters": "string $body [, int $chunklen = 76 [, string $end = \"\\r\\n\" ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "classkit_import": {
    "name": "classkit_import",
    "url": "function.classkit-import",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "array",
      "ref": null
    }
  },
  "classkit_method_add": {
    "name": "classkit_method_add",
    "url": "function.classkit-method-add",
    "spec": {
      "parameters": "string $classname, string $methodname, string $args, string $code [, int $flags = CLASSKIT_ACC_PUBLIC ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "classkit_method_copy": {
    "name": "classkit_method_copy",
    "url": "function.classkit-method-copy",
    "spec": {
      "parameters": "string $dClass, string $dMethod, string $sClass [, string $sMethod ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "classkit_method_redefine": {
    "name": "classkit_method_redefine",
    "url": "function.classkit-method-redefine",
    "spec": {
      "parameters": "string $classname, string $methodname, string $args, string $code [, int $flags = CLASSKIT_ACC_PUBLIC ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "classkit_method_remove": {
    "name": "classkit_method_remove",
    "url": "function.classkit-method-remove",
    "spec": {
      "parameters": "string $classname, string $methodname",
      "returnValue": "bool",
      "ref": null
    }
  },
  "classkit_method_rename": {
    "name": "classkit_method_rename",
    "url": "function.classkit-method-rename",
    "spec": {
      "parameters": "string $classname, string $methodname, string $newname",
      "returnValue": "bool",
      "ref": null
    }
  },
  "class_alias": {
    "name": "class_alias",
    "url": "function.class-alias",
    "spec": {
      "parameters": "string $original, string $alias [, bool $autoload = TRUE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "class_exists": {
    "name": "class_exists",
    "url": "function.class-exists",
    "spec": {
      "parameters": "string $class_name [, bool $autoload = TRUE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "class_implements": {
    "name": "class_implements",
    "url": "function.class-implements",
    "spec": {
      "parameters": "mixed $class [, bool $autoload = TRUE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "class_parents": {
    "name": "class_parents",
    "url": "function.class-parents",
    "spec": {
      "parameters": "mixed $class [, bool $autoload = TRUE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "class_uses": {
    "name": "class_uses",
    "url": "function.class-uses",
    "spec": {
      "parameters": "mixed $class [, bool $autoload = TRUE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "clearstatcache": {
    "name": "clearstatcache",
    "url": "function.clearstatcache",
    "spec": {
      "parameters": "[ bool $clear_realpath_cache = FALSE [, string $filename ]]",
      "returnValue": "void",
      "ref": null
    }
  },
  "cli_get_process_title": {
    "name": "cli_get_process_title",
    "url": "function.cli-get-process-title",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "cli_set_process_title": {
    "name": "cli_set_process_title",
    "url": "function.cli-set-process-title",
    "spec": {
      "parameters": "string $title",
      "returnValue": "bool",
      "ref": null
    }
  },
  "closedir": {
    "name": "closedir",
    "url": "function.closedir",
    "spec": {
      "parameters": "[ resource $dir_handle ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "closelog": {
    "name": "closelog",
    "url": "function.closelog",
    "spec": {
      "parameters": "void",
      "returnValue": "bool",
      "ref": null
    }
  },
  "compact": {
    "name": "compact",
    "url": "function.compact",
    "spec": {
      "parameters": "mixed $varname1 [, mixed $... ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "com_create_guid": {
    "name": "com_create_guid",
    "url": "function.com-create-guid",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "com_event_sink": {
    "name": "com_event_sink",
    "url": "function.com-event-sink",
    "spec": {
      "parameters": "variant $comobject, object $sinkobject [, mixed $sinkinterface ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "com_get_active_object": {
    "name": "com_get_active_object",
    "url": "function.com-get-active-object",
    "spec": {
      "parameters": "string $progid [, int $code_page ]",
      "returnValue": "variant",
      "ref": null
    }
  },
  "com_load_typelib": {
    "name": "com_load_typelib",
    "url": "function.com-load-typelib",
    "spec": {
      "parameters": "string $typelib_name [, bool $case_insensitive = true ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "com_message_pump": {
    "name": "com_message_pump",
    "url": "function.com-message-pump",
    "spec": {
      "parameters": "[ int $timeoutms = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "com_print_typeinfo": {
    "name": "com_print_typeinfo",
    "url": "function.com-print-typeinfo",
    "spec": {
      "parameters": "object $comobject [, string $dispinterface [, bool $wantsink = FALSE ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "connection_aborted": {
    "name": "connection_aborted",
    "url": "function.connection-aborted",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "connection_status": {
    "name": "connection_status",
    "url": "function.connection-status",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "constant": {
    "name": "constant",
    "url": "function.constant",
    "spec": {
      "parameters": "string $name",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "convert_cyr_string": {
    "name": "convert_cyr_string",
    "url": "function.convert-cyr-string",
    "spec": {
      "parameters": "string $str, string $from, string $to",
      "returnValue": "string",
      "ref": null
    }
  },
  "convert_uudecode": {
    "name": "convert_uudecode",
    "url": "function.convert-uudecode",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "convert_uuencode": {
    "name": "convert_uuencode",
    "url": "function.convert-uuencode",
    "spec": {
      "parameters": "string $data",
      "returnValue": "string",
      "ref": null
    }
  },
  "copy": {
    "name": "copy",
    "url": "function.copy",
    "spec": {
      "parameters": "string $source, string $dest [, resource $context ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cos": {
    "name": "cos",
    "url": "function.cos",
    "spec": {
      "parameters": "float $arg",
      "returnValue": "float",
      "ref": null
    }
  },
  "cosh": {
    "name": "cosh",
    "url": "function.cosh",
    "spec": {
      "parameters": "float $arg",
      "returnValue": "float",
      "ref": null
    }
  },
  "count": {
    "name": "count",
    "url": "function.count",
    "spec": {
      "parameters": "mixed $array_or_countable [, int $mode = COUNT_NORMAL ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "counter_bump": {
    "name": "counter_bump",
    "url": "internals2.counter.function.counter-bump",
    "spec": {
      "parameters": "integer $offset",
      "returnValue": "",
      "ref": null
    }
  },
  "counter_bump_value": {
    "name": "counter_bump_value",
    "url": "internals2.counter.function.counter-bump-value",
    "spec": {
      "parameters": "resource $counter, integer $offset",
      "returnValue": "",
      "ref": null
    }
  },
  "counter_create": {
    "name": "counter_create",
    "url": "internals2.counter.function.counter-create",
    "spec": {
      "parameters": "string $name [, integer $initial_value [, integer $flags ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "counter_get": {
    "name": "counter_get",
    "url": "internals2.counter.function.counter-get",
    "spec": {
      "parameters": "void",
      "returnValue": "integer",
      "ref": null
    }
  },
  "counter_get_meta": {
    "name": "counter_get_meta",
    "url": "internals2.counter.function.counter-get-meta",
    "spec": {
      "parameters": "resource $counter, integer $attribute",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "counter_get_named": {
    "name": "counter_get_named",
    "url": "internals2.counter.function.counter-get-named",
    "spec": {
      "parameters": "string $name",
      "returnValue": "resource",
      "ref": null
    }
  },
  "counter_get_value": {
    "name": "counter_get_value",
    "url": "internals2.counter.function.counter-get-value",
    "spec": {
      "parameters": "resource $counter",
      "returnValue": "integer",
      "ref": null
    }
  },
  "counter_reset": {
    "name": "counter_reset",
    "url": "internals2.counter.function.counter-reset",
    "spec": {
      "parameters": "void",
      "returnValue": "",
      "ref": null
    }
  },
  "counter_reset_value": {
    "name": "counter_reset_value",
    "url": "internals2.counter.function.counter-reset-value",
    "spec": {
      "parameters": "resource $counter",
      "returnValue": "",
      "ref": null
    }
  },
  "count_chars": {
    "name": "count_chars",
    "url": "function.count-chars",
    "spec": {
      "parameters": "string $string [, int $mode = 0 ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "crack_check": {
    "name": "crack_check",
    "url": "function.crack-check",
    "spec": {
      "parameters": "resource $dictionary, string $password",
      "returnValue": "bool",
      "ref": null
    }
  },
  "crack_closedict": {
    "name": "crack_closedict",
    "url": "function.crack-closedict",
    "spec": {
      "parameters": "[ resource $dictionary ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "crack_getlastmessage": {
    "name": "crack_getlastmessage",
    "url": "function.crack-getlastmessage",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "crack_opendict": {
    "name": "crack_opendict",
    "url": "function.crack-opendict",
    "spec": {
      "parameters": "string $dictionary",
      "returnValue": "resource",
      "ref": null
    }
  },
  "crc32": {
    "name": "crc32",
    "url": "function.crc32",
    "spec": {
      "parameters": "string $str",
      "returnValue": "int",
      "ref": null
    }
  },
  "create_function": {
    "name": "create_function",
    "url": "function.create-function",
    "spec": {
      "parameters": "string $args, string $code",
      "returnValue": "string",
      "ref": null
    }
  },
  "crypt": {
    "name": "crypt",
    "url": "function.crypt",
    "spec": {
      "parameters": "string $str [, string $salt ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "ctype_alnum": {
    "name": "ctype_alnum",
    "url": "function.ctype-alnum",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_alpha": {
    "name": "ctype_alpha",
    "url": "function.ctype-alpha",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_cntrl": {
    "name": "ctype_cntrl",
    "url": "function.ctype-cntrl",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_digit": {
    "name": "ctype_digit",
    "url": "function.ctype-digit",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_graph": {
    "name": "ctype_graph",
    "url": "function.ctype-graph",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_lower": {
    "name": "ctype_lower",
    "url": "function.ctype-lower",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_print": {
    "name": "ctype_print",
    "url": "function.ctype-print",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_punct": {
    "name": "ctype_punct",
    "url": "function.ctype-punct",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_space": {
    "name": "ctype_space",
    "url": "function.ctype-space",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_upper": {
    "name": "ctype_upper",
    "url": "function.ctype-upper",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ctype_xdigit": {
    "name": "ctype_xdigit",
    "url": "function.ctype-xdigit",
    "spec": {
      "parameters": "string $text",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_affected_rows": {
    "name": "cubrid_affected_rows",
    "url": "function.cubrid-affected-rows",
    "spec": {
      "parameters": "[ resource $conn_identifier ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_bind": {
    "name": "cubrid_bind",
    "url": "function.cubrid-bind",
    "spec": {
      "parameters": "resource $req_identifier, int $bind_index, mixed $bind_value [, string $bind_value_type ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_client_encoding": {
    "name": "cubrid_client_encoding",
    "url": "function.cubrid-client-encoding",
    "spec": {
      "parameters": "[ resource $conn_identifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_close": {
    "name": "cubrid_close",
    "url": "function.cubrid-close",
    "spec": {
      "parameters": "[ resource $conn_identifier ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_close_prepare": {
    "name": "cubrid_close_prepare",
    "url": "function.cubrid-close-prepare",
    "spec": {
      "parameters": "resource $req_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_close_request": {
    "name": "cubrid_close_request",
    "url": "function.cubrid-close-request",
    "spec": {
      "parameters": "resource $req_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_column_names": {
    "name": "cubrid_column_names",
    "url": "function.cubrid-column-names",
    "spec": {
      "parameters": "resource $req_identifier",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_column_types": {
    "name": "cubrid_column_types",
    "url": "function.cubrid-column-types",
    "spec": {
      "parameters": "resource $req_identifier",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_col_get": {
    "name": "cubrid_col_get",
    "url": "function.cubrid-col-get",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid, string $attr_name",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_col_size": {
    "name": "cubrid_col_size",
    "url": "function.cubrid-col-size",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid, string $attr_name",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_commit": {
    "name": "cubrid_commit",
    "url": "function.cubrid-commit",
    "spec": {
      "parameters": "resource $conn_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_connect": {
    "name": "cubrid_connect",
    "url": "function.cubrid-connect",
    "spec": {
      "parameters": "string $host, int $port, string $dbname [, string $userid [, string $passwd [, bool $new_link = FALSE ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cubrid_connect_with_url": {
    "name": "cubrid_connect_with_url",
    "url": "function.cubrid-connect-with-url",
    "spec": {
      "parameters": "string $conn_url [, string $userid [, string $passwd [, bool $new_link = FALSE ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cubrid_current_oid": {
    "name": "cubrid_current_oid",
    "url": "function.cubrid-current-oid",
    "spec": {
      "parameters": "resource $req_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_data_seek": {
    "name": "cubrid_data_seek",
    "url": "function.cubrid-data-seek",
    "spec": {
      "parameters": "resource $result, int $row_number",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_db_name": {
    "name": "cubrid_db_name",
    "url": "function.cubrid-db-name",
    "spec": {
      "parameters": "array $result, int $index",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_disconnect": {
    "name": "cubrid_disconnect",
    "url": "function.cubrid-disconnect",
    "spec": {
      "parameters": "[ resource $conn_identifier ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_drop": {
    "name": "cubrid_drop",
    "url": "function.cubrid-drop",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_errno": {
    "name": "cubrid_errno",
    "url": "function.cubrid-errno",
    "spec": {
      "parameters": "[ resource $conn_identifier ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_error": {
    "name": "cubrid_error",
    "url": "function.cubrid-error",
    "spec": {
      "parameters": "[ resource $connection ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_error_code": {
    "name": "cubrid_error_code",
    "url": "function.cubrid-error-code",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_error_code_facility": {
    "name": "cubrid_error_code_facility",
    "url": "function.cubrid-error-code-facility",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_error_msg": {
    "name": "cubrid_error_msg",
    "url": "function.cubrid-error-msg",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_execute": {
    "name": "cubrid_execute",
    "url": "function.cubrid-execute",
    "spec": {
      "parameters": "resource $conn_identifier, string $sql [, int $option = 0 ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cubrid_fetch": {
    "name": "cubrid_fetch",
    "url": "function.cubrid-fetch",
    "spec": {
      "parameters": "resource $result [, int $type = CUBRID_BOTH ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "cubrid_fetch_array": {
    "name": "cubrid_fetch_array",
    "url": "function.cubrid-fetch-array",
    "spec": {
      "parameters": "resource $result [, int $type = CUBRID_BOTH ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_fetch_assoc": {
    "name": "cubrid_fetch_assoc",
    "url": "function.cubrid-fetch-assoc",
    "spec": {
      "parameters": "resource $result [, int $type ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_fetch_field": {
    "name": "cubrid_fetch_field",
    "url": "function.cubrid-fetch-field",
    "spec": {
      "parameters": "resource $result [, int $field_offset = 0 ]",
      "returnValue": "object",
      "ref": null
    }
  },
  "cubrid_fetch_lengths": {
    "name": "cubrid_fetch_lengths",
    "url": "function.cubrid-fetch-lengths",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_fetch_object": {
    "name": "cubrid_fetch_object",
    "url": "function.cubrid-fetch-object",
    "spec": {
      "parameters": "resource $result [, string $class_name [, array $params [, int $type ]]]",
      "returnValue": "object",
      "ref": null
    }
  },
  "cubrid_fetch_row": {
    "name": "cubrid_fetch_row",
    "url": "function.cubrid-fetch-row",
    "spec": {
      "parameters": "resource $result [, int $type ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_field_flags": {
    "name": "cubrid_field_flags",
    "url": "function.cubrid-field-flags",
    "spec": {
      "parameters": "resource $result, int $field_offset",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_field_len": {
    "name": "cubrid_field_len",
    "url": "function.cubrid-field-len",
    "spec": {
      "parameters": "resource $result, int $field_offset",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_field_name": {
    "name": "cubrid_field_name",
    "url": "function.cubrid-field-name",
    "spec": {
      "parameters": "resource $result, int $field_offset",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_field_seek": {
    "name": "cubrid_field_seek",
    "url": "function.cubrid-field-seek",
    "spec": {
      "parameters": "resource $result [, int $field_offset = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_field_table": {
    "name": "cubrid_field_table",
    "url": "function.cubrid-field-table",
    "spec": {
      "parameters": "resource $result, int $field_offset",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_field_type": {
    "name": "cubrid_field_type",
    "url": "function.cubrid-field-type",
    "spec": {
      "parameters": "resource $result, int $field_offset",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_free_result": {
    "name": "cubrid_free_result",
    "url": "function.cubrid-free-result",
    "spec": {
      "parameters": "resource $req_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_get": {
    "name": "cubrid_get",
    "url": "function.cubrid-get",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid [, mixed $attr ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "cubrid_get_autocommit": {
    "name": "cubrid_get_autocommit",
    "url": "function.cubrid-get-autocommit",
    "spec": {
      "parameters": "resource $conn_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_get_charset": {
    "name": "cubrid_get_charset",
    "url": "function.cubrid-get-charset",
    "spec": {
      "parameters": "resource $conn_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_get_class_name": {
    "name": "cubrid_get_class_name",
    "url": "function.cubrid-get-class-name",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_get_client_info": {
    "name": "cubrid_get_client_info",
    "url": "function.cubrid-get-client-info",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_get_db_parameter": {
    "name": "cubrid_get_db_parameter",
    "url": "function.cubrid-get-db-parameter",
    "spec": {
      "parameters": "resource $conn_identifier",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_get_query_timeout": {
    "name": "cubrid_get_query_timeout",
    "url": "function.cubrid-get-query-timeout",
    "spec": {
      "parameters": "resource $req_identifier",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_get_server_info": {
    "name": "cubrid_get_server_info",
    "url": "function.cubrid-get-server-info",
    "spec": {
      "parameters": "resource $conn_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_insert_id": {
    "name": "cubrid_insert_id",
    "url": "function.cubrid-insert-id",
    "spec": {
      "parameters": "[ resource $conn_identifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_is_instance": {
    "name": "cubrid_is_instance",
    "url": "function.cubrid-is-instance",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_list_dbs": {
    "name": "cubrid_list_dbs",
    "url": "function.cubrid-list-dbs",
    "spec": {
      "parameters": "[ resource $conn_identifier ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_load_from_glo": {
    "name": "cubrid_load_from_glo",
    "url": "function.cubrid-load-from-glo",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid, string $file_name",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_lob2_bind": {
    "name": "cubrid_lob2_bind",
    "url": "function.cubrid-lob2-bind",
    "spec": {
      "parameters": "resource $req_identifier, int $bind_index, mixed $bind_value [, string $bind_value_type ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob2_close": {
    "name": "cubrid_lob2_close",
    "url": "function.cubrid-lob2-close",
    "spec": {
      "parameters": "resource $lob_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob2_export": {
    "name": "cubrid_lob2_export",
    "url": "function.cubrid-lob2-export",
    "spec": {
      "parameters": "resource $lob_identifier, string $file_name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob2_import": {
    "name": "cubrid_lob2_import",
    "url": "function.cubrid-lob2-import",
    "spec": {
      "parameters": "resource $lob_identifier, string $file_name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob2_new": {
    "name": "cubrid_lob2_new",
    "url": "function.cubrid-lob2-new",
    "spec": {
      "parameters": "[ resource $conn_identifier [, string $type = \"BLOB\" ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cubrid_lob2_read": {
    "name": "cubrid_lob2_read",
    "url": "function.cubrid-lob2-read",
    "spec": {
      "parameters": "resource $lob_identifier, int $len",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_lob2_seek": {
    "name": "cubrid_lob2_seek",
    "url": "function.cubrid-lob2-seek",
    "spec": {
      "parameters": "resource $lob_identifier, int $offset [, int $origin = CUBRID_CURSOR_CURRENT ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob2_seek64": {
    "name": "cubrid_lob2_seek64",
    "url": "function.cubrid-lob2-seek64",
    "spec": {
      "parameters": "resource $lob_identifier, string $offset [, int $origin = CUBRID_CURSOR_CURRENT ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob2_size": {
    "name": "cubrid_lob2_size",
    "url": "function.cubrid-lob2-size",
    "spec": {
      "parameters": "resource $lob_identifier",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_lob2_size64": {
    "name": "cubrid_lob2_size64",
    "url": "function.cubrid-lob2-size64",
    "spec": {
      "parameters": "resource $lob_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_lob2_tell": {
    "name": "cubrid_lob2_tell",
    "url": "function.cubrid-lob2-tell",
    "spec": {
      "parameters": "resource $lob_identifier",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_lob2_tell64": {
    "name": "cubrid_lob2_tell64",
    "url": "function.cubrid-lob2-tell64",
    "spec": {
      "parameters": "resource $lob_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_lob2_write": {
    "name": "cubrid_lob2_write",
    "url": "function.cubrid-lob2-write",
    "spec": {
      "parameters": "resource $lob_identifier, string $buf",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob_close": {
    "name": "cubrid_lob_close",
    "url": "function.cubrid-lob-close",
    "spec": {
      "parameters": "array $lob_identifier_array",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob_export": {
    "name": "cubrid_lob_export",
    "url": "function.cubrid-lob-export",
    "spec": {
      "parameters": "resource $conn_identifier, resource $lob_identifier, string $path_name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob_get": {
    "name": "cubrid_lob_get",
    "url": "function.cubrid-lob-get",
    "spec": {
      "parameters": "resource $conn_identifier, string $sql",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_lob_send": {
    "name": "cubrid_lob_send",
    "url": "function.cubrid-lob-send",
    "spec": {
      "parameters": "resource $conn_identifier, resource $lob_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lob_size": {
    "name": "cubrid_lob_size",
    "url": "function.cubrid-lob-size",
    "spec": {
      "parameters": "resource $lob_identifier",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_lock_read": {
    "name": "cubrid_lock_read",
    "url": "function.cubrid-lock-read",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_lock_write": {
    "name": "cubrid_lock_write",
    "url": "function.cubrid-lock-write",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_move_cursor": {
    "name": "cubrid_move_cursor",
    "url": "function.cubrid-move-cursor",
    "spec": {
      "parameters": "resource $req_identifier, int $offset [, int $origin = CUBRID_CURSOR_CURRENT ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_new_glo": {
    "name": "cubrid_new_glo",
    "url": "function.cubrid-new-glo",
    "spec": {
      "parameters": "resource $conn_identifier, string $class_name, string $file_name",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_next_result": {
    "name": "cubrid_next_result",
    "url": "function.cubrid-next-result",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_num_cols": {
    "name": "cubrid_num_cols",
    "url": "function.cubrid-num-cols",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_num_fields": {
    "name": "cubrid_num_fields",
    "url": "function.cubrid-num-fields",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_num_rows": {
    "name": "cubrid_num_rows",
    "url": "function.cubrid-num-rows",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_pconnect": {
    "name": "cubrid_pconnect",
    "url": "function.cubrid-pconnect",
    "spec": {
      "parameters": "string $host, int $port, string $dbname [, string $userid [, string $passwd ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cubrid_pconnect_with_url": {
    "name": "cubrid_pconnect_with_url",
    "url": "function.cubrid-pconnect-with-url",
    "spec": {
      "parameters": "string $conn_url [, string $userid [, string $passwd ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cubrid_ping": {
    "name": "cubrid_ping",
    "url": "function.cubrid-ping",
    "spec": {
      "parameters": "[ resource $conn_identifier ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_prepare": {
    "name": "cubrid_prepare",
    "url": "function.cubrid-prepare",
    "spec": {
      "parameters": "resource $conn_identifier, string $prepare_stmt [, int $option = 0 ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cubrid_put": {
    "name": "cubrid_put",
    "url": "function.cubrid-put",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid [, string $attr ], mixed $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_query": {
    "name": "cubrid_query",
    "url": "function.cubrid-query",
    "spec": {
      "parameters": "string $query [, resource $conn_identifier ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cubrid_real_escape_string": {
    "name": "cubrid_real_escape_string",
    "url": "function.cubrid-real-escape-string",
    "spec": {
      "parameters": "string $unescaped_string [, resource $conn_identifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_result": {
    "name": "cubrid_result",
    "url": "function.cubrid-result",
    "spec": {
      "parameters": "resource $result, int $row [, mixed $field = 0 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "cubrid_rollback": {
    "name": "cubrid_rollback",
    "url": "function.cubrid-rollback",
    "spec": {
      "parameters": "resource $conn_identifier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_save_to_glo": {
    "name": "cubrid_save_to_glo",
    "url": "function.cubrid-save-to-glo",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid, string $file_name",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_schema": {
    "name": "cubrid_schema",
    "url": "function.cubrid-schema",
    "spec": {
      "parameters": "resource $conn_identifier, int $schema_type [, string $class_name [, string $attr_name ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "cubrid_send_glo": {
    "name": "cubrid_send_glo",
    "url": "function.cubrid-send-glo",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid",
      "returnValue": "int",
      "ref": null
    }
  },
  "cubrid_seq_drop": {
    "name": "cubrid_seq_drop",
    "url": "function.cubrid-seq-drop",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid, string $attr_name, int $index",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_seq_insert": {
    "name": "cubrid_seq_insert",
    "url": "function.cubrid-seq-insert",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid, string $attr_name, int $index, string $seq_element",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_seq_put": {
    "name": "cubrid_seq_put",
    "url": "function.cubrid-seq-put",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid, string $attr_name, int $index, string $seq_element",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_set_add": {
    "name": "cubrid_set_add",
    "url": "function.cubrid-set-add",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid, string $attr_name, string $set_element",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_set_autocommit": {
    "name": "cubrid_set_autocommit",
    "url": "function.cubrid-set-autocommit",
    "spec": {
      "parameters": "resource $conn_identifier, bool $mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_set_db_parameter": {
    "name": "cubrid_set_db_parameter",
    "url": "function.cubrid-set-db-parameter",
    "spec": {
      "parameters": "resource $conn_identifier, int $param_type, int $param_value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_set_drop": {
    "name": "cubrid_set_drop",
    "url": "function.cubrid-set-drop",
    "spec": {
      "parameters": "resource $conn_identifier, string $oid, string $attr_name, string $set_element",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_set_query_timeout": {
    "name": "cubrid_set_query_timeout",
    "url": "function.cubrid-set-query-timeout",
    "spec": {
      "parameters": "resource $req_identifier, int $timeout",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cubrid_unbuffered_query": {
    "name": "cubrid_unbuffered_query",
    "url": "function.cubrid-unbuffered-query",
    "spec": {
      "parameters": "string $query [, resource $conn_identifier ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cubrid_version": {
    "name": "cubrid_version",
    "url": "function.cubrid-version",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": null
    }
  },
  "curl_close": {
    "name": "curl_close",
    "url": "function.curl-close",
    "spec": {
      "parameters": "resource $ch",
      "returnValue": "void",
      "ref": null
    }
  },
  "curl_copy_handle": {
    "name": "curl_copy_handle",
    "url": "function.curl-copy-handle",
    "spec": {
      "parameters": "resource $ch",
      "returnValue": "resource",
      "ref": null
    }
  },
  "curl_errno": {
    "name": "curl_errno",
    "url": "function.curl-errno",
    "spec": {
      "parameters": "resource $ch",
      "returnValue": "int",
      "ref": null
    }
  },
  "curl_error": {
    "name": "curl_error",
    "url": "function.curl-error",
    "spec": {
      "parameters": "resource $ch",
      "returnValue": "string",
      "ref": null
    }
  },
  "curl_escape": {
    "name": "curl_escape",
    "url": "function.curl-escape",
    "spec": {
      "parameters": "resource $ch, string $str",
      "returnValue": "string",
      "ref": null
    }
  },
  "curl_exec": {
    "name": "curl_exec",
    "url": "function.curl-exec",
    "spec": {
      "parameters": "resource $ch",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "curl_getinfo": {
    "name": "curl_getinfo",
    "url": "function.curl-getinfo",
    "spec": {
      "parameters": "resource $ch [, int $opt ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "curl_init": {
    "name": "curl_init",
    "url": "function.curl-init",
    "spec": {
      "parameters": "[ string $url = NULL ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "curl_multi_add_handle": {
    "name": "curl_multi_add_handle",
    "url": "function.curl-multi-add-handle",
    "spec": {
      "parameters": "resource $mh, resource $ch",
      "returnValue": "int",
      "ref": null
    }
  },
  "curl_multi_close": {
    "name": "curl_multi_close",
    "url": "function.curl-multi-close",
    "spec": {
      "parameters": "resource $mh",
      "returnValue": "void",
      "ref": null
    }
  },
  "curl_multi_errno": {
    "name": "curl_multi_errno",
    "url": "function.curl-multi-errno",
    "spec": {
      "parameters": "resource $mh",
      "returnValue": "int",
      "ref": null
    }
  },
  "curl_multi_exec": {
    "name": "curl_multi_exec",
    "url": "function.curl-multi-exec",
    "spec": {
      "parameters": "resource $mh, int &$still_running",
      "returnValue": "int",
      "ref": null
    }
  },
  "curl_multi_getcontent": {
    "name": "curl_multi_getcontent",
    "url": "function.curl-multi-getcontent",
    "spec": {
      "parameters": "resource $ch",
      "returnValue": "string",
      "ref": null
    }
  },
  "curl_multi_info_read": {
    "name": "curl_multi_info_read",
    "url": "function.curl-multi-info-read",
    "spec": {
      "parameters": "resource $mh [, int &$msgs_in_queue = NULL ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "curl_multi_init": {
    "name": "curl_multi_init",
    "url": "function.curl-multi-init",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "curl_multi_remove_handle": {
    "name": "curl_multi_remove_handle",
    "url": "function.curl-multi-remove-handle",
    "spec": {
      "parameters": "resource $mh, resource $ch",
      "returnValue": "int",
      "ref": null
    }
  },
  "curl_multi_select": {
    "name": "curl_multi_select",
    "url": "function.curl-multi-select",
    "spec": {
      "parameters": "resource $mh [, float $timeout = 1.0 ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "curl_multi_setopt": {
    "name": "curl_multi_setopt",
    "url": "function.curl-multi-setopt",
    "spec": {
      "parameters": "resource $mh, int $option, mixed $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "curl_multi_strerror": {
    "name": "curl_multi_strerror",
    "url": "function.curl-multi-strerror",
    "spec": {
      "parameters": "int $errornum",
      "returnValue": "string",
      "ref": null
    }
  },
  "curl_pause": {
    "name": "curl_pause",
    "url": "function.curl-pause",
    "spec": {
      "parameters": "resource $ch, int $bitmask",
      "returnValue": "int",
      "ref": null
    }
  },
  "curl_reset": {
    "name": "curl_reset",
    "url": "function.curl-reset",
    "spec": {
      "parameters": "resource $ch",
      "returnValue": "void",
      "ref": null
    }
  },
  "curl_setopt": {
    "name": "curl_setopt",
    "url": "function.curl-setopt",
    "spec": {
      "parameters": "resource $ch, int $option, mixed $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "curl_setopt_array": {
    "name": "curl_setopt_array",
    "url": "function.curl-setopt-array",
    "spec": {
      "parameters": "resource $ch, array $options",
      "returnValue": "bool",
      "ref": null
    }
  },
  "curl_share_close": {
    "name": "curl_share_close",
    "url": "function.curl-share-close",
    "spec": {
      "parameters": "resource $sh",
      "returnValue": "void",
      "ref": null
    }
  },
  "curl_share_errno": {
    "name": "curl_share_errno",
    "url": "function.curl-share-errno",
    "spec": {
      "parameters": "resource $sh",
      "returnValue": "int",
      "ref": null
    }
  },
  "curl_share_init": {
    "name": "curl_share_init",
    "url": "function.curl-share-init",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "curl_share_setopt": {
    "name": "curl_share_setopt",
    "url": "function.curl-share-setopt",
    "spec": {
      "parameters": "resource $sh, int $option, string $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "curl_share_strerror": {
    "name": "curl_share_strerror",
    "url": "function.curl-share-strerror",
    "spec": {
      "parameters": "int $errornum",
      "returnValue": "string",
      "ref": null
    }
  },
  "curl_strerror": {
    "name": "curl_strerror",
    "url": "function.curl-strerror",
    "spec": {
      "parameters": "int $errornum",
      "returnValue": "string",
      "ref": null
    }
  },
  "curl_unescape": {
    "name": "curl_unescape",
    "url": "function.curl-unescape",
    "spec": {
      "parameters": "resource $ch, string $str",
      "returnValue": "string",
      "ref": null
    }
  },
  "curl_version": {
    "name": "curl_version",
    "url": "function.curl-version",
    "spec": {
      "parameters": "[ int $age = CURLVERSION_NOW ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "current": {
    "name": "current",
    "url": "function.current",
    "spec": {
      "parameters": "array $array",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "cyrus_authenticate": {
    "name": "cyrus_authenticate",
    "url": "function.cyrus-authenticate",
    "spec": {
      "parameters": "resource $connection [, string $mechlist [, string $service [, string $user [, int $minssf [, int $maxssf [, string $authname [, string $password ]]]]]]]",
      "returnValue": "void",
      "ref": null
    }
  },
  "cyrus_bind": {
    "name": "cyrus_bind",
    "url": "function.cyrus-bind",
    "spec": {
      "parameters": "resource $connection, array $callbacks",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cyrus_close": {
    "name": "cyrus_close",
    "url": "function.cyrus-close",
    "spec": {
      "parameters": "resource $connection",
      "returnValue": "bool",
      "ref": null
    }
  },
  "cyrus_connect": {
    "name": "cyrus_connect",
    "url": "function.cyrus-connect",
    "spec": {
      "parameters": "[ string $host [, string $port [, int $flags ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "cyrus_query": {
    "name": "cyrus_query",
    "url": "function.cyrus-query",
    "spec": {
      "parameters": "resource $connection, string $query",
      "returnValue": "array",
      "ref": null
    }
  },
  "cyrus_unbind": {
    "name": "cyrus_unbind",
    "url": "function.cyrus-unbind",
    "spec": {
      "parameters": "resource $connection, string $trigger_name",
      "returnValue": "bool",
      "ref": null
    }
  }
};
