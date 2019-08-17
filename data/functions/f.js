functions.f = {
  "fam_cancel_monitor": {
    "name": "fam_cancel_monitor",
    "url": "function.fam-cancel-monitor",
    "spec": {
      "parameters": "resource $fam, resource $fam_monitor",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fam_close": {
    "name": "fam_close",
    "url": "function.fam-close",
    "spec": {
      "parameters": "resource $fam",
      "returnValue": "void",
      "ref": null
    }
  },
  "fam_monitor_collection": {
    "name": "fam_monitor_collection",
    "url": "function.fam-monitor-collection",
    "spec": {
      "parameters": "resource $fam, string $dirname, int $depth, string $mask",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fam_monitor_directory": {
    "name": "fam_monitor_directory",
    "url": "function.fam-monitor-directory",
    "spec": {
      "parameters": "resource $fam, string $dirname",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fam_monitor_file": {
    "name": "fam_monitor_file",
    "url": "function.fam-monitor-file",
    "spec": {
      "parameters": "resource $fam, string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fam_next_event": {
    "name": "fam_next_event",
    "url": "function.fam-next-event",
    "spec": {
      "parameters": "resource $fam",
      "returnValue": "array",
      "ref": null
    }
  },
  "fam_open": {
    "name": "fam_open",
    "url": "function.fam-open",
    "spec": {
      "parameters": "[ string $appname ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fam_pending": {
    "name": "fam_pending",
    "url": "function.fam-pending",
    "spec": {
      "parameters": "resource $fam",
      "returnValue": "int",
      "ref": null
    }
  },
  "fam_resume_monitor": {
    "name": "fam_resume_monitor",
    "url": "function.fam-resume-monitor",
    "spec": {
      "parameters": "resource $fam, resource $fam_monitor",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fam_suspend_monitor": {
    "name": "fam_suspend_monitor",
    "url": "function.fam-suspend-monitor",
    "spec": {
      "parameters": "resource $fam, resource $fam_monitor",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_cascadetrain_on_data": {
    "name": "fann_cascadetrain_on_data",
    "url": "function.fann-cascadetrain-on-data",
    "spec": {
      "parameters": "resource $ann, resource $data, int $max_neurons, int $neurons_between_reports, float $desired_error",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_cascadetrain_on_file": {
    "name": "fann_cascadetrain_on_file",
    "url": "function.fann-cascadetrain-on-file",
    "spec": {
      "parameters": "resource $ann, string $filename, int $max_neurons, int $neurons_between_reports, float $desired_error",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_clear_scaling_params": {
    "name": "fann_clear_scaling_params",
    "url": "function.fann-clear-scaling-params",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_copy": {
    "name": "fann_copy",
    "url": "function.fann-copy",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_create_from_file": {
    "name": "fann_create_from_file",
    "url": "function.fann-create-from-file",
    "spec": {
      "parameters": "string $configuration_file",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_create_shortcut": {
    "name": "fann_create_shortcut",
    "url": "function.fann-create-shortcut",
    "spec": {
      "parameters": "int $num_layers, int $num_neurons1, int $num_neurons2 [, int $... ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_create_shortcut_array": {
    "name": "fann_create_shortcut_array",
    "url": "function.fann-create-shortcut-array",
    "spec": {
      "parameters": "int $num_layers, array $layers",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_create_sparse": {
    "name": "fann_create_sparse",
    "url": "function.fann-create-sparse",
    "spec": {
      "parameters": "float $connection_rate, int $num_layers, int $num_neurons1, int $num_neurons2 [, int $... ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_create_sparse_array": {
    "name": "fann_create_sparse_array",
    "url": "function.fann-create-sparse-array",
    "spec": {
      "parameters": "float $connection_rate, int $num_layers, array $layers",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_create_standard": {
    "name": "fann_create_standard",
    "url": "function.fann-create-standard",
    "spec": {
      "parameters": "int $num_layers, int $num_neurons1, int $num_neurons2 [, int $... ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_create_standard_array": {
    "name": "fann_create_standard_array",
    "url": "function.fann-create-standard-array",
    "spec": {
      "parameters": "int $num_layers, array $layers",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_create_train": {
    "name": "fann_create_train",
    "url": "function.fann-create-train",
    "spec": {
      "parameters": "int $num_data, int $num_input, int $num_output",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_create_train_from_callback": {
    "name": "fann_create_train_from_callback",
    "url": "function.fann-create-train-from-callback",
    "spec": {
      "parameters": "int $num_data, int $num_input, int $num_output, callable $user_function",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_descale_input": {
    "name": "fann_descale_input",
    "url": "function.fann-descale-input",
    "spec": {
      "parameters": "resource $ann, array $input_vector",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_descale_output": {
    "name": "fann_descale_output",
    "url": "function.fann-descale-output",
    "spec": {
      "parameters": "resource $ann, array $output_vector",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_descale_train": {
    "name": "fann_descale_train",
    "url": "function.fann-descale-train",
    "spec": {
      "parameters": "resource $ann, resource $train_data",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_destroy": {
    "name": "fann_destroy",
    "url": "function.fann-destroy",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_destroy_train": {
    "name": "fann_destroy_train",
    "url": "function.fann-destroy-train",
    "spec": {
      "parameters": "resource $train_data",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_duplicate_train_data": {
    "name": "fann_duplicate_train_data",
    "url": "function.fann-duplicate-train-data",
    "spec": {
      "parameters": "resource $data",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_get_activation_function": {
    "name": "fann_get_activation_function",
    "url": "function.fann-get-activation-function",
    "spec": {
      "parameters": "resource $ann, int $layer, int $neuron",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_activation_steepness": {
    "name": "fann_get_activation_steepness",
    "url": "function.fann-get-activation-steepness",
    "spec": {
      "parameters": "resource $ann, int $layer, int $neuron",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_bias_array": {
    "name": "fann_get_bias_array",
    "url": "function.fann-get-bias-array",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "array",
      "ref": null
    }
  },
  "fann_get_bit_fail": {
    "name": "fann_get_bit_fail",
    "url": "function.fann-get-bit-fail",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_bit_fail_limit": {
    "name": "fann_get_bit_fail_limit",
    "url": "function.fann-get-bit-fail-limit",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_cascade_activation_functions": {
    "name": "fann_get_cascade_activation_functions",
    "url": "function.fann-get-cascade-activation-functions",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "array",
      "ref": null
    }
  },
  "fann_get_cascade_activation_functions_count": {
    "name": "fann_get_cascade_activation_functions_count",
    "url": "function.fann-get-cascade-activation-functions-count",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_activation_steepnesses": {
    "name": "fann_get_cascade_activation_steepnesses",
    "url": "function.fann-get-cascade-activation-steepnesses",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "array",
      "ref": null
    }
  },
  "fann_get_cascade_activation_steepnesses_count": {
    "name": "fann_get_cascade_activation_steepnesses_count",
    "url": "function.fann-get-cascade-activation-steepnesses-count",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_candidate_change_fraction": {
    "name": "fann_get_cascade_candidate_change_fraction",
    "url": "function.fann-get-cascade-candidate-change-fraction",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_cascade_candidate_limit": {
    "name": "fann_get_cascade_candidate_limit",
    "url": "function.fann-get-cascade-candidate-limit",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_cascade_candidate_stagnation_epochs": {
    "name": "fann_get_cascade_candidate_stagnation_epochs",
    "url": "function.fann-get-cascade-candidate-stagnation-epochs",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_max_cand_epochs": {
    "name": "fann_get_cascade_max_cand_epochs",
    "url": "function.fann-get-cascade-max-cand-epochs",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_max_out_epochs": {
    "name": "fann_get_cascade_max_out_epochs",
    "url": "function.fann-get-cascade-max-out-epochs",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_min_cand_epochs": {
    "name": "fann_get_cascade_min_cand_epochs",
    "url": "function.fann-get-cascade-min-cand-epochs",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_min_out_epochs": {
    "name": "fann_get_cascade_min_out_epochs",
    "url": "function.fann-get-cascade-min-out-epochs",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_num_candidates": {
    "name": "fann_get_cascade_num_candidates",
    "url": "function.fann-get-cascade-num-candidates",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_num_candidate_groups": {
    "name": "fann_get_cascade_num_candidate_groups",
    "url": "function.fann-get-cascade-num-candidate-groups",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_output_change_fraction": {
    "name": "fann_get_cascade_output_change_fraction",
    "url": "function.fann-get-cascade-output-change-fraction",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_cascade_output_stagnation_epochs": {
    "name": "fann_get_cascade_output_stagnation_epochs",
    "url": "function.fann-get-cascade-output-stagnation-epochs",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_cascade_weight_multiplier": {
    "name": "fann_get_cascade_weight_multiplier",
    "url": "function.fann-get-cascade-weight-multiplier",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_connection_array": {
    "name": "fann_get_connection_array",
    "url": "function.fann-get-connection-array",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "array",
      "ref": null
    }
  },
  "fann_get_connection_rate": {
    "name": "fann_get_connection_rate",
    "url": "function.fann-get-connection-rate",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_errno": {
    "name": "fann_get_errno",
    "url": "function.fann-get-errno",
    "spec": {
      "parameters": "resource $errdat",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_errstr": {
    "name": "fann_get_errstr",
    "url": "function.fann-get-errstr",
    "spec": {
      "parameters": "resource $errdat",
      "returnValue": "string",
      "ref": null
    }
  },
  "fann_get_layer_array": {
    "name": "fann_get_layer_array",
    "url": "function.fann-get-layer-array",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "array",
      "ref": null
    }
  },
  "fann_get_learning_momentum": {
    "name": "fann_get_learning_momentum",
    "url": "function.fann-get-learning-momentum",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_learning_rate": {
    "name": "fann_get_learning_rate",
    "url": "function.fann-get-learning-rate",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_mse": {
    "name": "fann_get_MSE",
    "url": "function.fann-get-mse",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_network_type": {
    "name": "fann_get_network_type",
    "url": "function.fann-get-network-type",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_num_input": {
    "name": "fann_get_num_input",
    "url": "function.fann-get-num-input",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_num_layers": {
    "name": "fann_get_num_layers",
    "url": "function.fann-get-num-layers",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_num_output": {
    "name": "fann_get_num_output",
    "url": "function.fann-get-num-output",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_quickprop_decay": {
    "name": "fann_get_quickprop_decay",
    "url": "function.fann-get-quickprop-decay",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_quickprop_mu": {
    "name": "fann_get_quickprop_mu",
    "url": "function.fann-get-quickprop-mu",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_rprop_decrease_factor": {
    "name": "fann_get_rprop_decrease_factor",
    "url": "function.fann-get-rprop-decrease-factor",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_rprop_delta_max": {
    "name": "fann_get_rprop_delta_max",
    "url": "function.fann-get-rprop-delta-max",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_rprop_delta_min": {
    "name": "fann_get_rprop_delta_min",
    "url": "function.fann-get-rprop-delta-min",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_rprop_delta_zero": {
    "name": "fann_get_rprop_delta_zero",
    "url": "function.fann-get-rprop-delta-zero",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_rprop_increase_factor": {
    "name": "fann_get_rprop_increase_factor",
    "url": "function.fann-get-rprop-increase-factor",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_sarprop_step_error_shift": {
    "name": "fann_get_sarprop_step_error_shift",
    "url": "function.fann-get-sarprop-step-error-shift",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_sarprop_step_error_threshold_factor": {
    "name": "fann_get_sarprop_step_error_threshold_factor",
    "url": "function.fann-get-sarprop-step-error-threshold-factor",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_sarprop_temperature": {
    "name": "fann_get_sarprop_temperature",
    "url": "function.fann-get-sarprop-temperature",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_sarprop_weight_decay_shift": {
    "name": "fann_get_sarprop_weight_decay_shift",
    "url": "function.fann-get-sarprop-weight-decay-shift",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_get_total_connections": {
    "name": "fann_get_total_connections",
    "url": "function.fann-get-total-connections",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_total_neurons": {
    "name": "fann_get_total_neurons",
    "url": "function.fann-get-total-neurons",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_training_algorithm": {
    "name": "fann_get_training_algorithm",
    "url": "function.fann-get-training-algorithm",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_train_error_function": {
    "name": "fann_get_train_error_function",
    "url": "function.fann-get-train-error-function",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_get_train_stop_function": {
    "name": "fann_get_train_stop_function",
    "url": "function.fann-get-train-stop-function",
    "spec": {
      "parameters": "resource $ann",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_init_weights": {
    "name": "fann_init_weights",
    "url": "function.fann-init-weights",
    "spec": {
      "parameters": "resource $ann, resource $train_data",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_length_train_data": {
    "name": "fann_length_train_data",
    "url": "function.fann-length-train-data",
    "spec": {
      "parameters": "resource $data",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_merge_train_data": {
    "name": "fann_merge_train_data",
    "url": "function.fann-merge-train-data",
    "spec": {
      "parameters": "resource $data1, resource $data2",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_num_input_train_data": {
    "name": "fann_num_input_train_data",
    "url": "function.fann-num-input-train-data",
    "spec": {
      "parameters": "resource $data",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_num_output_train_data": {
    "name": "fann_num_output_train_data",
    "url": "function.fann-num-output-train-data",
    "spec": {
      "parameters": "resource $data",
      "returnValue": "int",
      "ref": null
    }
  },
  "fann_print_error": {
    "name": "fann_print_error",
    "url": "function.fann-print-error",
    "spec": {
      "parameters": "resource $errdat",
      "returnValue": "void",
      "ref": null
    }
  },
  "fann_randomize_weights": {
    "name": "fann_randomize_weights",
    "url": "function.fann-randomize-weights",
    "spec": {
      "parameters": "resource $ann, float $min_weight, float $max_weight",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_read_train_from_file": {
    "name": "fann_read_train_from_file",
    "url": "function.fann-read-train-from-file",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_reset_errno": {
    "name": "fann_reset_errno",
    "url": "function.fann-reset-errno",
    "spec": {
      "parameters": "resource $errdat",
      "returnValue": "void",
      "ref": null
    }
  },
  "fann_reset_errstr": {
    "name": "fann_reset_errstr",
    "url": "function.fann-reset-errstr",
    "spec": {
      "parameters": "resource $errdat",
      "returnValue": "void",
      "ref": null
    }
  },
  "fann_reset_mse": {
    "name": "fann_reset_MSE",
    "url": "function.fann-reset-mse",
    "spec": {
      "parameters": "string $ann",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_run": {
    "name": "fann_run",
    "url": "function.fann-run",
    "spec": {
      "parameters": "resource $ann, array $input",
      "returnValue": "array",
      "ref": null
    }
  },
  "fann_save": {
    "name": "fann_save",
    "url": "function.fann-save",
    "spec": {
      "parameters": "resource $ann, string $configuration_file",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_save_train": {
    "name": "fann_save_train",
    "url": "function.fann-save-train",
    "spec": {
      "parameters": "resource $data, string $file_name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_scale_input": {
    "name": "fann_scale_input",
    "url": "function.fann-scale-input",
    "spec": {
      "parameters": "resource $ann, array $input_vector",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_scale_input_train_data": {
    "name": "fann_scale_input_train_data",
    "url": "function.fann-scale-input-train-data",
    "spec": {
      "parameters": "resource $train_data, float $new_min, float $new_max",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_scale_output": {
    "name": "fann_scale_output",
    "url": "function.fann-scale-output",
    "spec": {
      "parameters": "resource $ann, array $output_vector",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_scale_output_train_data": {
    "name": "fann_scale_output_train_data",
    "url": "function.fann-scale-output-train-data",
    "spec": {
      "parameters": "resource $train_data, float $new_min, float $new_max",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_scale_train": {
    "name": "fann_scale_train",
    "url": "function.fann-scale-train",
    "spec": {
      "parameters": "resource $ann, resource $train_data",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_scale_train_data": {
    "name": "fann_scale_train_data",
    "url": "function.fann-scale-train-data",
    "spec": {
      "parameters": "resource $train_data, float $new_min, float $new_max",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_activation_function": {
    "name": "fann_set_activation_function",
    "url": "function.fann-set-activation-function",
    "spec": {
      "parameters": "resource $ann, int $activation_function, int $layer, int $neuron",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_activation_function_hidden": {
    "name": "fann_set_activation_function_hidden",
    "url": "function.fann-set-activation-function-hidden",
    "spec": {
      "parameters": "resource $ann, int $activation_function",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_activation_function_layer": {
    "name": "fann_set_activation_function_layer",
    "url": "function.fann-set-activation-function-layer",
    "spec": {
      "parameters": "resource $ann, int $activation_function, int $layer",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_activation_function_output": {
    "name": "fann_set_activation_function_output",
    "url": "function.fann-set-activation-function-output",
    "spec": {
      "parameters": "resource $ann, int $activation_function",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_activation_steepness": {
    "name": "fann_set_activation_steepness",
    "url": "function.fann-set-activation-steepness",
    "spec": {
      "parameters": "resource $ann, float $activation_steepness, int $layer, int $neuron",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_activation_steepness_hidden": {
    "name": "fann_set_activation_steepness_hidden",
    "url": "function.fann-set-activation-steepness-hidden",
    "spec": {
      "parameters": "resource $ann, float $activation_steepness",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_activation_steepness_layer": {
    "name": "fann_set_activation_steepness_layer",
    "url": "function.fann-set-activation-steepness-layer",
    "spec": {
      "parameters": "resource $ann, float $activation_steepness, int $layer",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_activation_steepness_output": {
    "name": "fann_set_activation_steepness_output",
    "url": "function.fann-set-activation-steepness-output",
    "spec": {
      "parameters": "resource $ann, float $activation_steepness",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_bit_fail_limit": {
    "name": "fann_set_bit_fail_limit",
    "url": "function.fann-set-bit-fail-limit",
    "spec": {
      "parameters": "resource $ann, float $bit_fail_limit",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_callback": {
    "name": "fann_set_callback",
    "url": "function.fann-set-callback",
    "spec": {
      "parameters": "resource $ann, collable $callback",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_activation_functions": {
    "name": "fann_set_cascade_activation_functions",
    "url": "function.fann-set-cascade-activation-functions",
    "spec": {
      "parameters": "resource $ann, array $cascade_activation_functions",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_activation_steepnesses": {
    "name": "fann_set_cascade_activation_steepnesses",
    "url": "function.fann-set-cascade-activation-steepnesses",
    "spec": {
      "parameters": "resource $ann, array $cascade_activation_steepnesses_count",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_candidate_change_fraction": {
    "name": "fann_set_cascade_candidate_change_fraction",
    "url": "function.fann-set-cascade-candidate-change-fraction",
    "spec": {
      "parameters": "resource $ann, float $cascade_candidate_change_fraction",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_candidate_limit": {
    "name": "fann_set_cascade_candidate_limit",
    "url": "function.fann-set-cascade-candidate-limit",
    "spec": {
      "parameters": "resource $ann, float $cascade_candidate_limit",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_candidate_stagnation_epochs": {
    "name": "fann_set_cascade_candidate_stagnation_epochs",
    "url": "function.fann-set-cascade-candidate-stagnation-epochs",
    "spec": {
      "parameters": "resource $ann, int $cascade_candidate_stagnation_epochs",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_max_cand_epochs": {
    "name": "fann_set_cascade_max_cand_epochs",
    "url": "function.fann-set-cascade-max-cand-epochs",
    "spec": {
      "parameters": "resource $ann, int $cascade_max_cand_epochs",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_max_out_epochs": {
    "name": "fann_set_cascade_max_out_epochs",
    "url": "function.fann-set-cascade-max-out-epochs",
    "spec": {
      "parameters": "resource $ann, int $cascade_max_out_epochs",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_min_cand_epochs": {
    "name": "fann_set_cascade_min_cand_epochs",
    "url": "function.fann-set-cascade-min-cand-epochs",
    "spec": {
      "parameters": "resource $ann, int $cascade_min_cand_epochs",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_min_out_epochs": {
    "name": "fann_set_cascade_min_out_epochs",
    "url": "function.fann-set-cascade-min-out-epochs",
    "spec": {
      "parameters": "resource $ann, int $cascade_min_out_epochs",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_num_candidate_groups": {
    "name": "fann_set_cascade_num_candidate_groups",
    "url": "function.fann-set-cascade-num-candidate-groups",
    "spec": {
      "parameters": "resource $ann, int $cascade_num_candidate_groups",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_output_change_fraction": {
    "name": "fann_set_cascade_output_change_fraction",
    "url": "function.fann-set-cascade-output-change-fraction",
    "spec": {
      "parameters": "resource $ann, float $cascade_output_change_fraction",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_output_stagnation_epochs": {
    "name": "fann_set_cascade_output_stagnation_epochs",
    "url": "function.fann-set-cascade-output-stagnation-epochs",
    "spec": {
      "parameters": "resource $ann, int $cascade_output_stagnation_epochs",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_cascade_weight_multiplier": {
    "name": "fann_set_cascade_weight_multiplier",
    "url": "function.fann-set-cascade-weight-multiplier",
    "spec": {
      "parameters": "resource $ann, float $cascade_weight_multiplier",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_error_log": {
    "name": "fann_set_error_log",
    "url": "function.fann-set-error-log",
    "spec": {
      "parameters": "resource $errdat, string $log_file",
      "returnValue": "void",
      "ref": null
    }
  },
  "fann_set_input_scaling_params": {
    "name": "fann_set_input_scaling_params",
    "url": "function.fann-set-input-scaling-params",
    "spec": {
      "parameters": "resource $ann, resource $train_data, float $new_input_min, float $new_input_max",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_learning_momentum": {
    "name": "fann_set_learning_momentum",
    "url": "function.fann-set-learning-momentum",
    "spec": {
      "parameters": "resource $ann, float $learning_momentum",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_learning_rate": {
    "name": "fann_set_learning_rate",
    "url": "function.fann-set-learning-rate",
    "spec": {
      "parameters": "resource $ann, float $learning_rate",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_output_scaling_params": {
    "name": "fann_set_output_scaling_params",
    "url": "function.fann-set-output-scaling-params",
    "spec": {
      "parameters": "resource $ann, resource $train_data, float $new_output_min, float $new_output_max",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_quickprop_decay": {
    "name": "fann_set_quickprop_decay",
    "url": "function.fann-set-quickprop-decay",
    "spec": {
      "parameters": "resource $ann, float $quickprop_decay",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_quickprop_mu": {
    "name": "fann_set_quickprop_mu",
    "url": "function.fann-set-quickprop-mu",
    "spec": {
      "parameters": "resource $ann, float $quickprop_mu",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_rprop_decrease_factor": {
    "name": "fann_set_rprop_decrease_factor",
    "url": "function.fann-set-rprop-decrease-factor",
    "spec": {
      "parameters": "resource $ann, float $rprop_decrease_factor",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_rprop_delta_max": {
    "name": "fann_set_rprop_delta_max",
    "url": "function.fann-set-rprop-delta-max",
    "spec": {
      "parameters": "resource $ann, float $rprop_delta_max",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_rprop_delta_min": {
    "name": "fann_set_rprop_delta_min",
    "url": "function.fann-set-rprop-delta-min",
    "spec": {
      "parameters": "resource $ann, float $rprop_delta_min",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_rprop_delta_zero": {
    "name": "fann_set_rprop_delta_zero",
    "url": "function.fann-set-rprop-delta-zero",
    "spec": {
      "parameters": "resource $ann, float $rprop_delta_zero",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_rprop_increase_factor": {
    "name": "fann_set_rprop_increase_factor",
    "url": "function.fann-set-rprop-increase-factor",
    "spec": {
      "parameters": "resource $ann, float $rprop_increase_factor",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_sarprop_step_error_shift": {
    "name": "fann_set_sarprop_step_error_shift",
    "url": "function.fann-set-sarprop-step-error-shift",
    "spec": {
      "parameters": "resource $ann, float $sarprop_step_error_shift",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_sarprop_step_error_threshold_factor": {
    "name": "fann_set_sarprop_step_error_threshold_factor",
    "url": "function.fann-set-sarprop-step-error-threshold-factor",
    "spec": {
      "parameters": "resource $ann, float $sarprop_step_error_threshold_factor",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_sarprop_temperature": {
    "name": "fann_set_sarprop_temperature",
    "url": "function.fann-set-sarprop-temperature",
    "spec": {
      "parameters": "resource $ann, float $sarprop_temperature",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_sarprop_weight_decay_shift": {
    "name": "fann_set_sarprop_weight_decay_shift",
    "url": "function.fann-set-sarprop-weight-decay-shift",
    "spec": {
      "parameters": "resource $ann, float $sarprop_weight_decay_shift",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_scaling_params": {
    "name": "fann_set_scaling_params",
    "url": "function.fann-set-scaling-params",
    "spec": {
      "parameters": "resource $ann, resource $train_data, float $new_input_min, float $new_input_max, float $new_output_min, float $new_output_max",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_training_algorithm": {
    "name": "fann_set_training_algorithm",
    "url": "function.fann-set-training-algorithm",
    "spec": {
      "parameters": "resource $ann, int $training_algorithm",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_train_error_function": {
    "name": "fann_set_train_error_function",
    "url": "function.fann-set-train-error-function",
    "spec": {
      "parameters": "resource $ann, int $error_function",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_train_stop_function": {
    "name": "fann_set_train_stop_function",
    "url": "function.fann-set-train-stop-function",
    "spec": {
      "parameters": "resource $ann, int $stop_function",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_weight": {
    "name": "fann_set_weight",
    "url": "function.fann-set-weight",
    "spec": {
      "parameters": "resource $ann, int $from_neuron, int $to_neuron, float $weight",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_set_weight_array": {
    "name": "fann_set_weight_array",
    "url": "function.fann-set-weight-array",
    "spec": {
      "parameters": "resource $ann, array $connections",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_shuffle_train_data": {
    "name": "fann_shuffle_train_data",
    "url": "function.fann-shuffle-train-data",
    "spec": {
      "parameters": "resource $train_data",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_subset_train_data": {
    "name": "fann_subset_train_data",
    "url": "function.fann-subset-train-data",
    "spec": {
      "parameters": "resource $data, int $pos, int $length",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fann_test": {
    "name": "fann_test",
    "url": "function.fann-test",
    "spec": {
      "parameters": "resource $ann, array $input, array $desired_output",
      "returnValue": "array",
      "ref": null
    }
  },
  "fann_test_data": {
    "name": "fann_test_data",
    "url": "function.fann-test-data",
    "spec": {
      "parameters": "resource $ann, resource $data",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_train": {
    "name": "fann_train",
    "url": "function.fann-train",
    "spec": {
      "parameters": "resource $ann, array $input, array $desired_output",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_train_epoch": {
    "name": "fann_train_epoch",
    "url": "function.fann-train-epoch",
    "spec": {
      "parameters": "resource $ann, resource $data",
      "returnValue": "float",
      "ref": null
    }
  },
  "fann_train_on_data": {
    "name": "fann_train_on_data",
    "url": "function.fann-train-on-data",
    "spec": {
      "parameters": "resource $ann, resource $data, int $max_epochs, int $epochs_between_reports, float $desired_error",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fann_train_on_file": {
    "name": "fann_train_on_file",
    "url": "function.fann-train-on-file",
    "spec": {
      "parameters": "resource $ann, string $filename, int $max_epochs, int $epochs_between_reports, float $desired_error",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fastcgi_finish_request": {
    "name": "fastcgi_finish_request",
    "url": "function.fastcgi-finish-request",
    "spec": {
      "parameters": "void",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbird_add_user": {
    "name": "fbird_add_user",
    "url": "function.fbird-add-user",
    "spec": {
      "parameters": "resource $service_handle, string $user_name, string $password [, string $first_name [, string $middle_name [, string $last_name ]]]",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_add_user()",
        "url": "function.ibase-add-user"
      }
    }
  },
  "fbird_affected_rows": {
    "name": "fbird_affected_rows",
    "url": "function.fbird-affected-rows",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "int",
      "ref": {
        "name": "ibase_affected_rows()",
        "url": "function.ibase-affected-rows"
      }
    }
  },
  "fbird_backup": {
    "name": "fbird_backup",
    "url": "function.fbird-backup",
    "spec": {
      "parameters": "resource $service_handle, string $source_db, string $dest_file [, int $options = 0 [, bool $verbose = FALSE ]]",
      "returnValue": "mixed",
      "ref": {
        "name": "ibase_backup()",
        "url": "function.ibase-backup"
      }
    }
  },
  "fbird_blob_add": {
    "name": "fbird_blob_add",
    "url": "function.fbird-blob-add",
    "spec": {
      "parameters": "resource $blob_handle, string $data",
      "returnValue": "void",
      "ref": {
        "name": "ibase_blob_add()",
        "url": "function.ibase-blob-add"
      }
    }
  },
  "fbird_blob_cancel": {
    "name": "fbird_blob_cancel",
    "url": "function.fbird-blob-cancel",
    "spec": {
      "parameters": "resource $blob_handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbird_blob_close": {
    "name": "fbird_blob_close",
    "url": "function.fbird-blob-close",
    "spec": {
      "parameters": "resource $blob_handle",
      "returnValue": "mixed",
      "ref": {
        "name": "ibase_blob_close()",
        "url": "function.ibase-blob-close"
      }
    }
  },
  "fbird_blob_create": {
    "name": "fbird_blob_create",
    "url": "function.fbird-blob-create",
    "spec": {
      "parameters": "[ resource $link_identifier = NULL ]",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_blob_create()",
        "url": "function.ibase-blob-create"
      }
    }
  },
  "fbird_blob_echo": {
    "name": "fbird_blob_echo",
    "url": "function.fbird-blob-echo",
    "spec": {
      "parameters": "string $blob_id",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_blob_echo()",
        "url": "function.ibase-blob-echo"
      }
    }
  },
  "fbird_blob_get": {
    "name": "fbird_blob_get",
    "url": "function.fbird-blob-get",
    "spec": {
      "parameters": "resource $blob_handle, int $len",
      "returnValue": "string",
      "ref": {
        "name": "ibase_blob_get()",
        "url": "function.ibase-blob-get"
      }
    }
  },
  "fbird_blob_import": {
    "name": "fbird_blob_import",
    "url": "function.fbird-blob-import",
    "spec": {
      "parameters": "resource $link_identifier, resource $file_handle",
      "returnValue": "string",
      "ref": {
        "name": "ibase_blob_import()",
        "url": "function.ibase-blob-import"
      }
    }
  },
  "fbird_blob_info": {
    "name": "fbird_blob_info",
    "url": "function.fbird-blob-info",
    "spec": {
      "parameters": "resource $link_identifier, string $blob_id",
      "returnValue": "array",
      "ref": {
        "name": "ibase_blob_info()",
        "url": "function.ibase-blob-info"
      }
    }
  },
  "fbird_blob_open": {
    "name": "fbird_blob_open",
    "url": "function.fbird-blob-open",
    "spec": {
      "parameters": "resource $link_identifier, string $blob_id",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_blob_open()",
        "url": "function.ibase-blob-open"
      }
    }
  },
  "fbird_close": {
    "name": "fbird_close",
    "url": "function.fbird-close",
    "spec": {
      "parameters": "[ resource $connection_id = NULL ]",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_close()",
        "url": "function.ibase-close"
      }
    }
  },
  "fbird_commit": {
    "name": "fbird_commit",
    "url": "function.fbird-commit",
    "spec": {
      "parameters": "[ resource $link_or_trans_identifier = NULL ]",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_commit()",
        "url": "function.ibase-commit"
      }
    }
  },
  "fbird_commit_ret": {
    "name": "fbird_commit_ret",
    "url": "function.fbird-commit-ret",
    "spec": {
      "parameters": "[ resource $link_or_trans_identifier = NULL ]",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_commit_ret()",
        "url": "function.ibase-commit-ret"
      }
    }
  },
  "fbird_connect": {
    "name": "fbird_connect",
    "url": "function.fbird-connect",
    "spec": {
      "parameters": "[ string $database [, string $username [, string $password [, string $charset [, int $buffers [, int $dialect [, string $role [, int $sync ]]]]]]]]",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_connect()",
        "url": "function.ibase-connect"
      }
    }
  },
  "fbird_db_info": {
    "name": "fbird_db_info",
    "url": "function.fbird-db-info",
    "spec": {
      "parameters": "resource $service_handle, string $db, int $action [, int $argument = 0 ]",
      "returnValue": "string",
      "ref": {
        "name": "ibase_db_info()",
        "url": "function.ibase-db-info"
      }
    }
  },
  "fbird_delete_user": {
    "name": "fbird_delete_user",
    "url": "function.fbird-delete-user",
    "spec": {
      "parameters": "resource $service_handle, string $user_name",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_delete_user()",
        "url": "function.ibase-delete-user"
      }
    }
  },
  "fbird_drop_db": {
    "name": "fbird_drop_db",
    "url": "function.fbird-drop-db",
    "spec": {
      "parameters": "[ resource $connection = NULL ]",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_drop_db()",
        "url": "function.ibase-drop-db"
      }
    }
  },
  "fbird_errcode": {
    "name": "fbird_errcode",
    "url": "function.fbird-errcode",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": {
        "name": "ibase_errcode()",
        "url": "function.ibase-errcode"
      }
    }
  },
  "fbird_errmsg": {
    "name": "fbird_errmsg",
    "url": "function.fbird-errmsg",
    "spec": {
      "parameters": "void",
      "returnValue": "string",
      "ref": {
        "name": "ibase_errmsg()",
        "url": "function.ibase-errmsg"
      }
    }
  },
  "fbird_execute": {
    "name": "fbird_execute",
    "url": "function.fbird-execute",
    "spec": {
      "parameters": "resource $query [, mixed $... ]",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_execute()",
        "url": "function.ibase-execute"
      }
    }
  },
  "fbird_fetch_assoc": {
    "name": "fbird_fetch_assoc",
    "url": "function.fbird-fetch-assoc",
    "spec": {
      "parameters": "resource $result [, int $fetch_flag = 0 ]",
      "returnValue": "array",
      "ref": {
        "name": "ibase_fetch_assoc()",
        "url": "function.ibase-fetch-assoc"
      }
    }
  },
  "fbird_fetch_object": {
    "name": "fbird_fetch_object",
    "url": "function.fbird-fetch-object",
    "spec": {
      "parameters": "resource $result_id [, int $fetch_flag = 0 ]",
      "returnValue": "object",
      "ref": {
        "name": "ibase_fetch_object()",
        "url": "function.ibase-fetch-object"
      }
    }
  },
  "fbird_fetch_row": {
    "name": "fbird_fetch_row",
    "url": "function.fbird-fetch-row",
    "spec": {
      "parameters": "resource $result_identifier [, int $fetch_flag = 0 ]",
      "returnValue": "array",
      "ref": {
        "name": "ibase_fetch_row()",
        "url": "function.ibase-fetch-row"
      }
    }
  },
  "fbird_field_info": {
    "name": "fbird_field_info",
    "url": "function.fbird-field-info",
    "spec": {
      "parameters": "resource $result, int $field_number",
      "returnValue": "array",
      "ref": {
        "name": "ibase_field_info()",
        "url": "function.ibase-field-info"
      }
    }
  },
  "fbird_free_event_handler": {
    "name": "fbird_free_event_handler",
    "url": "function.fbird-free-event-handler",
    "spec": {
      "parameters": "resource $event",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_free_event_handler()",
        "url": "function.ibase-free-event-handler"
      }
    }
  },
  "fbird_free_query": {
    "name": "fbird_free_query",
    "url": "function.fbird-free-query",
    "spec": {
      "parameters": "resource $query",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_free_query()",
        "url": "function.ibase-free-query"
      }
    }
  },
  "fbird_free_result": {
    "name": "fbird_free_result",
    "url": "function.fbird-free-result",
    "spec": {
      "parameters": "resource $result_identifier",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_free_result()",
        "url": "function.ibase-free-result"
      }
    }
  },
  "fbird_gen_id": {
    "name": "fbird_gen_id",
    "url": "function.fbird-gen-id",
    "spec": {
      "parameters": "string $generator [, int $increment = 1 [, resource $link_identifier = NULL ]]",
      "returnValue": "mixed",
      "ref": {
        "name": "ibase_gen_id()",
        "url": "function.ibase-gen-id"
      }
    }
  },
  "fbird_maintain_db": {
    "name": "fbird_maintain_db",
    "url": "function.fbird-maintain-db",
    "spec": {
      "parameters": "resource $service_handle, string $db, int $action [, int $argument = 0 ]",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_maintain_db()",
        "url": "function.ibase-maintain-db"
      }
    }
  },
  "fbird_modify_user": {
    "name": "fbird_modify_user",
    "url": "function.fbird-modify-user",
    "spec": {
      "parameters": "resource $service_handle, string $user_name, string $password [, string $first_name [, string $middle_name [, string $last_name ]]]",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_modify_user()",
        "url": "function.ibase-modify-user"
      }
    }
  },
  "fbird_name_result": {
    "name": "fbird_name_result",
    "url": "function.fbird-name-result",
    "spec": {
      "parameters": "resource $result, string $name",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_name_result()",
        "url": "function.ibase-name-result"
      }
    }
  },
  "fbird_num_fields": {
    "name": "fbird_num_fields",
    "url": "function.fbird-num-fields",
    "spec": {
      "parameters": "resource $result_id",
      "returnValue": "int",
      "ref": {
        "name": "ibase_num_fields()",
        "url": "function.ibase-num-fields"
      }
    }
  },
  "fbird_num_params": {
    "name": "fbird_num_params",
    "url": "function.fbird-num-params",
    "spec": {
      "parameters": "resource $query",
      "returnValue": "int",
      "ref": {
        "name": "ibase_num_params()",
        "url": "function.ibase-num-params"
      }
    }
  },
  "fbird_param_info": {
    "name": "fbird_param_info",
    "url": "function.fbird-param-info",
    "spec": {
      "parameters": "resource $query, int $param_number",
      "returnValue": "array",
      "ref": {
        "name": "ibase_param_info()",
        "url": "function.ibase-param-info"
      }
    }
  },
  "fbird_pconnect": {
    "name": "fbird_pconnect",
    "url": "function.fbird-pconnect",
    "spec": {
      "parameters": "[ string $database [, string $username [, string $password [, string $charset [, int $buffers [, int $dialect [, string $role [, int $sync ]]]]]]]]",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_pconnect()",
        "url": "function.ibase-pconnect"
      }
    }
  },
  "fbird_prepare": {
    "name": "fbird_prepare",
    "url": "function.fbird-prepare",
    "spec": {
      "parameters": "string $query",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_prepare()",
        "url": "function.ibase-prepare"
      }
    }
  },
  "fbird_query": {
    "name": "fbird_query",
    "url": "function.fbird-query",
    "spec": {
      "parameters": "[ resource $link_identifier ], string $query [, int $bind_args ]",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_query()",
        "url": "function.ibase-query"
      }
    }
  },
  "fbird_restore": {
    "name": "fbird_restore",
    "url": "function.fbird-restore",
    "spec": {
      "parameters": "resource $service_handle, string $source_file, string $dest_db [, int $options = 0 [, bool $verbose = FALSE ]]",
      "returnValue": "mixed",
      "ref": {
        "name": "ibase_restore()",
        "url": "function.ibase-restore"
      }
    }
  },
  "fbird_rollback": {
    "name": "fbird_rollback",
    "url": "function.fbird-rollback",
    "spec": {
      "parameters": "[ resource $link_or_trans_identifier = NULL ]",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_rollback()",
        "url": "function.ibase-rollback"
      }
    }
  },
  "fbird_rollback_ret": {
    "name": "fbird_rollback_ret",
    "url": "function.fbird-rollback-ret",
    "spec": {
      "parameters": "[ resource $link_or_trans_identifier = NULL ]",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_rollback_ret()",
        "url": "function.ibase-rollback-ret"
      }
    }
  },
  "fbird_server_info": {
    "name": "fbird_server_info",
    "url": "function.fbird-server-info",
    "spec": {
      "parameters": "resource $service_handle, int $action",
      "returnValue": "string",
      "ref": {
        "name": "ibase_server_info()",
        "url": "function.ibase-server-info"
      }
    }
  },
  "fbird_service_attach": {
    "name": "fbird_service_attach",
    "url": "function.fbird-service-attach",
    "spec": {
      "parameters": "string $host, string $dba_username, string $dba_password",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_service_attach()",
        "url": "function.ibase-service-attach"
      }
    }
  },
  "fbird_service_detach": {
    "name": "fbird_service_detach",
    "url": "function.fbird-service-detach",
    "spec": {
      "parameters": "resource $service_handle",
      "returnValue": "bool",
      "ref": {
        "name": "ibase_service_detach()",
        "url": "function.ibase-service-detach"
      }
    }
  },
  "fbird_set_event_handler": {
    "name": "fbird_set_event_handler",
    "url": "function.fbird-set-event-handler",
    "spec": {
      "parameters": "callable $event_handler, string $event_name1 [, string $... ]",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_set_event_handler()",
        "url": "function.ibase-set-event-handler"
      }
    }
  },
  "fbird_trans": {
    "name": "fbird_trans",
    "url": "function.fbird-trans",
    "spec": {
      "parameters": "[ int $trans_args [, resource $link_identifier ]]",
      "returnValue": "resource",
      "ref": {
        "name": "ibase_trans()",
        "url": "function.ibase-trans"
      }
    }
  },
  "fbird_wait_event": {
    "name": "fbird_wait_event",
    "url": "function.fbird-wait-event",
    "spec": {
      "parameters": "string $event_name1 [, string $... ]",
      "returnValue": "string",
      "ref": {
        "name": "ibase_wait_event()",
        "url": "function.ibase-wait-event"
      }
    }
  },
  "fbsql_affected_rows": {
    "name": "fbsql_affected_rows",
    "url": "function.fbsql-affected-rows",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_autocommit": {
    "name": "fbsql_autocommit",
    "url": "function.fbsql-autocommit",
    "spec": {
      "parameters": "resource $link_identifier [, bool $OnOff ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_blob_size": {
    "name": "fbsql_blob_size",
    "url": "function.fbsql-blob-size",
    "spec": {
      "parameters": "string $blob_handle [, resource $link_identifier ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_change_user": {
    "name": "fbsql_change_user",
    "url": "function.fbsql-change-user",
    "spec": {
      "parameters": "string $user, string $password [, string $database [, resource $link_identifier ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_clob_size": {
    "name": "fbsql_clob_size",
    "url": "function.fbsql-clob-size",
    "spec": {
      "parameters": "string $clob_handle [, resource $link_identifier ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_close": {
    "name": "fbsql_close",
    "url": "function.fbsql-close",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_commit": {
    "name": "fbsql_commit",
    "url": "function.fbsql-commit",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_connect": {
    "name": "fbsql_connect",
    "url": "function.fbsql-connect",
    "spec": {
      "parameters": "[ string $hostname = ini_get(\"fbsql.default_host\") [, string $username = ini_get(\"fbsql.default_user\") [, string $password = ini_get(\"fbsql.default_password\") ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fbsql_create_blob": {
    "name": "fbsql_create_blob",
    "url": "function.fbsql-create-blob",
    "spec": {
      "parameters": "string $blob_data [, resource $link_identifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_create_clob": {
    "name": "fbsql_create_clob",
    "url": "function.fbsql-create-clob",
    "spec": {
      "parameters": "string $clob_data [, resource $link_identifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_create_db": {
    "name": "fbsql_create_db",
    "url": "function.fbsql-create-db",
    "spec": {
      "parameters": "string $database_name [, resource $link_identifier [, string $database_options ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_database": {
    "name": "fbsql_database",
    "url": "function.fbsql-database",
    "spec": {
      "parameters": "resource $link_identifier [, string $database ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_database_password": {
    "name": "fbsql_database_password",
    "url": "function.fbsql-database-password",
    "spec": {
      "parameters": "resource $link_identifier [, string $database_password ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_data_seek": {
    "name": "fbsql_data_seek",
    "url": "function.fbsql-data-seek",
    "spec": {
      "parameters": "resource $result, int $row_number",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_db_query": {
    "name": "fbsql_db_query",
    "url": "function.fbsql-db-query",
    "spec": {
      "parameters": "string $database, string $query [, resource $link_identifier ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fbsql_db_status": {
    "name": "fbsql_db_status",
    "url": "function.fbsql-db-status",
    "spec": {
      "parameters": "string $database_name [, resource $link_identifier ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_drop_db": {
    "name": "fbsql_drop_db",
    "url": "function.fbsql-drop-db",
    "spec": {
      "parameters": "string $database_name [, resource $link_identifier ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_errno": {
    "name": "fbsql_errno",
    "url": "function.fbsql-errno",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_error": {
    "name": "fbsql_error",
    "url": "function.fbsql-error",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_fetch_array": {
    "name": "fbsql_fetch_array",
    "url": "function.fbsql-fetch-array",
    "spec": {
      "parameters": "resource $result [, int $result_type ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "fbsql_fetch_assoc": {
    "name": "fbsql_fetch_assoc",
    "url": "function.fbsql-fetch-assoc",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "array",
      "ref": null
    }
  },
  "fbsql_fetch_field": {
    "name": "fbsql_fetch_field",
    "url": "function.fbsql-fetch-field",
    "spec": {
      "parameters": "resource $result [, int $field_offset ]",
      "returnValue": "object",
      "ref": null
    }
  },
  "fbsql_fetch_lengths": {
    "name": "fbsql_fetch_lengths",
    "url": "function.fbsql-fetch-lengths",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "array",
      "ref": null
    }
  },
  "fbsql_fetch_object": {
    "name": "fbsql_fetch_object",
    "url": "function.fbsql-fetch-object",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "object",
      "ref": null
    }
  },
  "fbsql_fetch_row": {
    "name": "fbsql_fetch_row",
    "url": "function.fbsql-fetch-row",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "array",
      "ref": null
    }
  },
  "fbsql_field_flags": {
    "name": "fbsql_field_flags",
    "url": "function.fbsql-field-flags",
    "spec": {
      "parameters": "resource $result [, int $field_offset ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_field_len": {
    "name": "fbsql_field_len",
    "url": "function.fbsql-field-len",
    "spec": {
      "parameters": "resource $result [, int $field_offset ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_field_name": {
    "name": "fbsql_field_name",
    "url": "function.fbsql-field-name",
    "spec": {
      "parameters": "resource $result [, int $field_index ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_field_seek": {
    "name": "fbsql_field_seek",
    "url": "function.fbsql-field-seek",
    "spec": {
      "parameters": "resource $result [, int $field_offset ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_field_table": {
    "name": "fbsql_field_table",
    "url": "function.fbsql-field-table",
    "spec": {
      "parameters": "resource $result [, int $field_offset ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_field_type": {
    "name": "fbsql_field_type",
    "url": "function.fbsql-field-type",
    "spec": {
      "parameters": "resource $result [, int $field_offset ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_free_result": {
    "name": "fbsql_free_result",
    "url": "function.fbsql-free-result",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_get_autostart_info": {
    "name": "fbsql_get_autostart_info",
    "url": "function.fbsql-get-autostart-info",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "fbsql_hostname": {
    "name": "fbsql_hostname",
    "url": "function.fbsql-hostname",
    "spec": {
      "parameters": "resource $link_identifier [, string $host_name ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_insert_id": {
    "name": "fbsql_insert_id",
    "url": "function.fbsql-insert-id",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_list_dbs": {
    "name": "fbsql_list_dbs",
    "url": "function.fbsql-list-dbs",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fbsql_list_fields": {
    "name": "fbsql_list_fields",
    "url": "function.fbsql-list-fields",
    "spec": {
      "parameters": "string $database_name, string $table_name [, resource $link_identifier ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fbsql_list_tables": {
    "name": "fbsql_list_tables",
    "url": "function.fbsql-list-tables",
    "spec": {
      "parameters": "string $database [, resource $link_identifier ]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fbsql_next_result": {
    "name": "fbsql_next_result",
    "url": "function.fbsql-next-result",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_num_fields": {
    "name": "fbsql_num_fields",
    "url": "function.fbsql-num-fields",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_num_rows": {
    "name": "fbsql_num_rows",
    "url": "function.fbsql-num-rows",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_password": {
    "name": "fbsql_password",
    "url": "function.fbsql-password",
    "spec": {
      "parameters": "resource $link_identifier [, string $password ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_pconnect": {
    "name": "fbsql_pconnect",
    "url": "function.fbsql-pconnect",
    "spec": {
      "parameters": "[ string $hostname = ini_get(\"fbsql.default_host\") [, string $username = ini_get(\"fbsql.default_user\") [, string $password = ini_get(\"fbsql.default_password\") ]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fbsql_query": {
    "name": "fbsql_query",
    "url": "function.fbsql-query",
    "spec": {
      "parameters": "string $query [, resource $link_identifier [, int $batch_size ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fbsql_read_blob": {
    "name": "fbsql_read_blob",
    "url": "function.fbsql-read-blob",
    "spec": {
      "parameters": "string $blob_handle [, resource $link_identifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_read_clob": {
    "name": "fbsql_read_clob",
    "url": "function.fbsql-read-clob",
    "spec": {
      "parameters": "string $clob_handle [, resource $link_identifier ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_result": {
    "name": "fbsql_result",
    "url": "function.fbsql-result",
    "spec": {
      "parameters": "resource $result [, int $row [, mixed $field ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "fbsql_rollback": {
    "name": "fbsql_rollback",
    "url": "function.fbsql-rollback",
    "spec": {
      "parameters": "[ resource $link_identifier ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_rows_fetched": {
    "name": "fbsql_rows_fetched",
    "url": "function.fbsql-rows-fetched",
    "spec": {
      "parameters": "resource $result",
      "returnValue": "int",
      "ref": null
    }
  },
  "fbsql_select_db": {
    "name": "fbsql_select_db",
    "url": "function.fbsql-select-db",
    "spec": {
      "parameters": "[ string $database_name [, resource $link_identifier ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_set_characterset": {
    "name": "fbsql_set_characterset",
    "url": "function.fbsql-set-characterset",
    "spec": {
      "parameters": "resource $link_identifier, int $characterset [, int $in_out_both ]",
      "returnValue": "void",
      "ref": null
    }
  },
  "fbsql_set_lob_mode": {
    "name": "fbsql_set_lob_mode",
    "url": "function.fbsql-set-lob-mode",
    "spec": {
      "parameters": "resource $result, int $lob_mode",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_set_password": {
    "name": "fbsql_set_password",
    "url": "function.fbsql-set-password",
    "spec": {
      "parameters": "resource $link_identifier, string $user, string $password, string $old_password",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_set_transaction": {
    "name": "fbsql_set_transaction",
    "url": "function.fbsql-set-transaction",
    "spec": {
      "parameters": "resource $link_identifier, int $locking, int $isolation",
      "returnValue": "void",
      "ref": null
    }
  },
  "fbsql_start_db": {
    "name": "fbsql_start_db",
    "url": "function.fbsql-start-db",
    "spec": {
      "parameters": "string $database_name [, resource $link_identifier [, string $database_options ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_stop_db": {
    "name": "fbsql_stop_db",
    "url": "function.fbsql-stop-db",
    "spec": {
      "parameters": "string $database_name [, resource $link_identifier ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fbsql_tablename": {
    "name": "fbsql_tablename",
    "url": "function.fbsql-tablename",
    "spec": {
      "parameters": "resource $result, int $index",
      "returnValue": "string",
      "ref": {
        "name": "fbsql_table_name()",
        "url": "function.fbsql-table-name"
      }
    }
  },
  "fbsql_table_name": {
    "name": "fbsql_table_name",
    "url": "function.fbsql-table-name",
    "spec": {
      "parameters": "resource $result, int $index",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_username": {
    "name": "fbsql_username",
    "url": "function.fbsql-username",
    "spec": {
      "parameters": "resource $link_identifier [, string $username ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fbsql_warnings": {
    "name": "fbsql_warnings",
    "url": "function.fbsql-warnings",
    "spec": {
      "parameters": "[ bool $OnOff ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fclose": {
    "name": "fclose",
    "url": "function.fclose",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_add_doc_javascript": {
    "name": "fdf_add_doc_javascript",
    "url": "function.fdf-add-doc-javascript",
    "spec": {
      "parameters": "resource $fdf_document, string $script_name, string $script_code",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_add_template": {
    "name": "fdf_add_template",
    "url": "function.fdf-add-template",
    "spec": {
      "parameters": "resource $fdf_document, int $newpage, string $filename, string $template, int $rename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_close": {
    "name": "fdf_close",
    "url": "function.fdf-close",
    "spec": {
      "parameters": "resource $fdf_document",
      "returnValue": "void",
      "ref": null
    }
  },
  "fdf_create": {
    "name": "fdf_create",
    "url": "function.fdf-create",
    "spec": {
      "parameters": "void",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fdf_enum_values": {
    "name": "fdf_enum_values",
    "url": "function.fdf-enum-values",
    "spec": {
      "parameters": "resource $fdf_document, callable $function [, mixed $userdata ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_errno": {
    "name": "fdf_errno",
    "url": "function.fdf-errno",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "fdf_error": {
    "name": "fdf_error",
    "url": "function.fdf-error",
    "spec": {
      "parameters": "[ int $error_code = -1 ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fdf_get_ap": {
    "name": "fdf_get_ap",
    "url": "function.fdf-get-ap",
    "spec": {
      "parameters": "resource $fdf_document, string $field, int $face, string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_get_attachment": {
    "name": "fdf_get_attachment",
    "url": "function.fdf-get-attachment",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname, string $savepath",
      "returnValue": "array",
      "ref": null
    }
  },
  "fdf_get_encoding": {
    "name": "fdf_get_encoding",
    "url": "function.fdf-get-encoding",
    "spec": {
      "parameters": "resource $fdf_document",
      "returnValue": "string",
      "ref": null
    }
  },
  "fdf_get_file": {
    "name": "fdf_get_file",
    "url": "function.fdf-get-file",
    "spec": {
      "parameters": "resource $fdf_document",
      "returnValue": "string",
      "ref": null
    }
  },
  "fdf_get_flags": {
    "name": "fdf_get_flags",
    "url": "function.fdf-get-flags",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname, int $whichflags",
      "returnValue": "int",
      "ref": null
    }
  },
  "fdf_get_opt": {
    "name": "fdf_get_opt",
    "url": "function.fdf-get-opt",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname [, int $element = -1 ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "fdf_get_status": {
    "name": "fdf_get_status",
    "url": "function.fdf-get-status",
    "spec": {
      "parameters": "resource $fdf_document",
      "returnValue": "string",
      "ref": null
    }
  },
  "fdf_get_value": {
    "name": "fdf_get_value",
    "url": "function.fdf-get-value",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname [, int $which = -1 ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "fdf_get_version": {
    "name": "fdf_get_version",
    "url": "function.fdf-get-version",
    "spec": {
      "parameters": "[ resource $fdf_document ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fdf_header": {
    "name": "fdf_header",
    "url": "function.fdf-header",
    "spec": {
      "parameters": "void",
      "returnValue": "void",
      "ref": null
    }
  },
  "fdf_next_field_name": {
    "name": "fdf_next_field_name",
    "url": "function.fdf-next-field-name",
    "spec": {
      "parameters": "resource $fdf_document [, string $fieldname ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fdf_open": {
    "name": "fdf_open",
    "url": "function.fdf-open",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fdf_open_string": {
    "name": "fdf_open_string",
    "url": "function.fdf-open-string",
    "spec": {
      "parameters": "string $fdf_data",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fdf_remove_item": {
    "name": "fdf_remove_item",
    "url": "function.fdf-remove-item",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname, int $item",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_save": {
    "name": "fdf_save",
    "url": "function.fdf-save",
    "spec": {
      "parameters": "resource $fdf_document [, string $filename ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_save_string": {
    "name": "fdf_save_string",
    "url": "function.fdf-save-string",
    "spec": {
      "parameters": "resource $fdf_document",
      "returnValue": "string",
      "ref": null
    }
  },
  "fdf_set_ap": {
    "name": "fdf_set_ap",
    "url": "function.fdf-set-ap",
    "spec": {
      "parameters": "resource $fdf_document, string $field_name, int $face, string $filename, int $page_number",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_encoding": {
    "name": "fdf_set_encoding",
    "url": "function.fdf-set-encoding",
    "spec": {
      "parameters": "resource $fdf_document, string $encoding",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_file": {
    "name": "fdf_set_file",
    "url": "function.fdf-set-file",
    "spec": {
      "parameters": "resource $fdf_document, string $url [, string $target_frame ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_flags": {
    "name": "fdf_set_flags",
    "url": "function.fdf-set-flags",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname, int $whichFlags, int $newFlags",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_javascript_action": {
    "name": "fdf_set_javascript_action",
    "url": "function.fdf-set-javascript-action",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname, int $trigger, string $script",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_on_import_javascript": {
    "name": "fdf_set_on_import_javascript",
    "url": "function.fdf-set-on-import-javascript",
    "spec": {
      "parameters": "resource $fdf_document, string $script, bool $before_data_import",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_opt": {
    "name": "fdf_set_opt",
    "url": "function.fdf-set-opt",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname, int $element, string $str1, string $str2",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_status": {
    "name": "fdf_set_status",
    "url": "function.fdf-set-status",
    "spec": {
      "parameters": "resource $fdf_document, string $status",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_submit_form_action": {
    "name": "fdf_set_submit_form_action",
    "url": "function.fdf-set-submit-form-action",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname, int $trigger, string $script, int $flags",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_target_frame": {
    "name": "fdf_set_target_frame",
    "url": "function.fdf-set-target-frame",
    "spec": {
      "parameters": "resource $fdf_document, string $frame_name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_value": {
    "name": "fdf_set_value",
    "url": "function.fdf-set-value",
    "spec": {
      "parameters": "resource $fdf_document, string $fieldname, mixed $value [, int $isName ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fdf_set_version": {
    "name": "fdf_set_version",
    "url": "function.fdf-set-version",
    "spec": {
      "parameters": "resource $fdf_document, string $version",
      "returnValue": "bool",
      "ref": null
    }
  },
  "feof": {
    "name": "feof",
    "url": "function.feof",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fflush": {
    "name": "fflush",
    "url": "function.fflush",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fgetc": {
    "name": "fgetc",
    "url": "function.fgetc",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "string",
      "ref": null
    }
  },
  "fgetcsv": {
    "name": "fgetcsv",
    "url": "function.fgetcsv",
    "spec": {
      "parameters": "resource $handle [, int $length = 0 [, string $delimiter = \",\" [, string $enclosure = '\"' [, string $escape = \"\\\\\" ]]]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "fgets": {
    "name": "fgets",
    "url": "function.fgets",
    "spec": {
      "parameters": "resource $handle [, int $length ]",
      "returnValue": "string",
      "ref": null
    }
  },
  "fgetss": {
    "name": "fgetss",
    "url": "function.fgetss",
    "spec": {
      "parameters": "resource $handle [, int $length [, string $allowable_tags ]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "file": {
    "name": "file",
    "url": "function.file",
    "spec": {
      "parameters": "string $filename [, int $flags = 0 [, resource $context ]]",
      "returnValue": "array",
      "ref": null
    }
  },
  "fileatime": {
    "name": "fileatime",
    "url": "function.fileatime",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "filectime": {
    "name": "filectime",
    "url": "function.filectime",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "filegroup": {
    "name": "filegroup",
    "url": "function.filegroup",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "fileinode": {
    "name": "fileinode",
    "url": "function.fileinode",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "filemtime": {
    "name": "filemtime",
    "url": "function.filemtime",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "fileowner": {
    "name": "fileowner",
    "url": "function.fileowner",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "fileperms": {
    "name": "fileperms",
    "url": "function.fileperms",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "filepro": {
    "name": "filepro",
    "url": "function.filepro",
    "spec": {
      "parameters": "string $directory",
      "returnValue": "bool",
      "ref": null
    }
  },
  "filepro_fieldcount": {
    "name": "filepro_fieldcount",
    "url": "function.filepro-fieldcount",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "filepro_fieldname": {
    "name": "filepro_fieldname",
    "url": "function.filepro-fieldname",
    "spec": {
      "parameters": "int $field_number",
      "returnValue": "string",
      "ref": null
    }
  },
  "filepro_fieldtype": {
    "name": "filepro_fieldtype",
    "url": "function.filepro-fieldtype",
    "spec": {
      "parameters": "int $field_number",
      "returnValue": "string",
      "ref": null
    }
  },
  "filepro_fieldwidth": {
    "name": "filepro_fieldwidth",
    "url": "function.filepro-fieldwidth",
    "spec": {
      "parameters": "int $field_number",
      "returnValue": "int",
      "ref": null
    }
  },
  "filepro_retrieve": {
    "name": "filepro_retrieve",
    "url": "function.filepro-retrieve",
    "spec": {
      "parameters": "int $row_number, int $field_number",
      "returnValue": "string",
      "ref": null
    }
  },
  "filepro_rowcount": {
    "name": "filepro_rowcount",
    "url": "function.filepro-rowcount",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "filesize": {
    "name": "filesize",
    "url": "function.filesize",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "filetype": {
    "name": "filetype",
    "url": "function.filetype",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "string",
      "ref": null
    }
  },
  "file_exists": {
    "name": "file_exists",
    "url": "function.file-exists",
    "spec": {
      "parameters": "string $filename",
      "returnValue": "bool",
      "ref": null
    }
  },
  "file_get_contents": {
    "name": "file_get_contents",
    "url": "function.file-get-contents",
    "spec": {
      "parameters": "string $filename [, bool $use_include_path = FALSE [, resource $context [, int $offset = 0 [, int $maxlen ]]]]",
      "returnValue": "string",
      "ref": null
    }
  },
  "file_put_contents": {
    "name": "file_put_contents",
    "url": "function.file-put-contents",
    "spec": {
      "parameters": "string $filename, mixed $data [, int $flags = 0 [, resource $context ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "filter_has_var": {
    "name": "filter_has_var",
    "url": "function.filter-has-var",
    "spec": {
      "parameters": "int $type, string $variable_name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "filter_id": {
    "name": "filter_id",
    "url": "function.filter-id",
    "spec": {
      "parameters": "string $filtername",
      "returnValue": "int",
      "ref": null
    }
  },
  "filter_input": {
    "name": "filter_input",
    "url": "function.filter-input",
    "spec": {
      "parameters": "int $type, string $variable_name [, int $filter = FILTER_DEFAULT [, mixed $options ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "filter_input_array": {
    "name": "filter_input_array",
    "url": "function.filter-input-array",
    "spec": {
      "parameters": "int $type [, mixed $definition [, bool $add_empty = true ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "filter_list": {
    "name": "filter_list",
    "url": "function.filter-list",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "filter_var": {
    "name": "filter_var",
    "url": "function.filter-var",
    "spec": {
      "parameters": "mixed $variable [, int $filter = FILTER_DEFAULT [, mixed $options ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "filter_var_array": {
    "name": "filter_var_array",
    "url": "function.filter-var-array",
    "spec": {
      "parameters": "array $data [, mixed $definition [, bool $add_empty = TRUE ]]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "finfo_close": {
    "name": "finfo_close",
    "url": "function.finfo-close",
    "spec": {
      "parameters": "resource $finfo",
      "returnValue": "bool",
      "ref": null
    }
  },
  "finfo_open": {
    "name": "finfo_open",
    "url": "function.finfo-open",
    "spec": {
      "parameters": "[ int $options = FILEINFO_NONE [, string $magic_file = NULL ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "floatval": {
    "name": "floatval",
    "url": "function.floatval",
    "spec": {
      "parameters": "mixed $var",
      "returnValue": "float",
      "ref": null
    }
  },
  "flock": {
    "name": "flock",
    "url": "function.flock",
    "spec": {
      "parameters": "resource $handle, int $operation [, int &$wouldblock ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "floor": {
    "name": "floor",
    "url": "function.floor",
    "spec": {
      "parameters": "float $value",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "flush": {
    "name": "flush",
    "url": "function.flush",
    "spec": {
      "parameters": "void",
      "returnValue": "void",
      "ref": null
    }
  },
  "fmod": {
    "name": "fmod",
    "url": "function.fmod",
    "spec": {
      "parameters": "float $x, float $y",
      "returnValue": "float",
      "ref": null
    }
  },
  "fnmatch": {
    "name": "fnmatch",
    "url": "function.fnmatch",
    "spec": {
      "parameters": "string $pattern, string $string [, int $flags = 0 ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "fopen": {
    "name": "fopen",
    "url": "function.fopen",
    "spec": {
      "parameters": "string $filename, string $mode [, bool $use_include_path = FALSE [, resource $context ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "forward_static_call": {
    "name": "forward_static_call",
    "url": "function.forward-static-call",
    "spec": {
      "parameters": "callable $function [, mixed $... ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "forward_static_call_array": {
    "name": "forward_static_call_array",
    "url": "function.forward-static-call-array",
    "spec": {
      "parameters": "callable $function, array $parameters",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "fpassthru": {
    "name": "fpassthru",
    "url": "function.fpassthru",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "int",
      "ref": null
    }
  },
  "fprintf": {
    "name": "fprintf",
    "url": "function.fprintf",
    "spec": {
      "parameters": "resource $handle, string $format [, mixed $... ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fputcsv": {
    "name": "fputcsv",
    "url": "function.fputcsv",
    "spec": {
      "parameters": "resource $handle, array $fields [, string $delimiter = \",\" [, string $enclosure = '\"' [, string $escape_char = \"\\\\\" ]]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fputs": {
    "name": "fputs",
    "url": "function.fputs",
    "spec": {
      "parameters": "resource $handle, string $string [, int $length ]",
      "returnValue": "int",
      "ref": {
        "name": "fwrite()",
        "url": "function.fwrite"
      }
    }
  },
  "fread": {
    "name": "fread",
    "url": "function.fread",
    "spec": {
      "parameters": "resource $handle, int $length",
      "returnValue": "string",
      "ref": null
    }
  },
  "frenchtojd": {
    "name": "frenchtojd",
    "url": "function.frenchtojd",
    "spec": {
      "parameters": "int $month, int $day, int $year",
      "returnValue": "int",
      "ref": null
    }
  },
  "fribidi_log2vis": {
    "name": "fribidi_log2vis",
    "url": "function.fribidi-log2vis",
    "spec": {
      "parameters": "string $str, string $direction, int $charset",
      "returnValue": "string",
      "ref": null
    }
  },
  "fscanf": {
    "name": "fscanf",
    "url": "function.fscanf",
    "spec": {
      "parameters": "resource $handle, string $format [, mixed &$... ]",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "fseek": {
    "name": "fseek",
    "url": "function.fseek",
    "spec": {
      "parameters": "resource $handle, int $offset [, int $whence = SEEK_SET ]",
      "returnValue": "int",
      "ref": null
    }
  },
  "fsockopen": {
    "name": "fsockopen",
    "url": "function.fsockopen",
    "spec": {
      "parameters": "string $hostname [, int $port = -1 [, int &$errno [, string &$errstr [, float $timeout = ini_get(\"default_socket_timeout\") ]]]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "fstat": {
    "name": "fstat",
    "url": "function.fstat",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "array",
      "ref": null
    }
  },
  "ftell": {
    "name": "ftell",
    "url": "function.ftell",
    "spec": {
      "parameters": "resource $handle",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftok": {
    "name": "ftok",
    "url": "function.ftok",
    "spec": {
      "parameters": "string $pathname, string $proj",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftp_alloc": {
    "name": "ftp_alloc",
    "url": "function.ftp-alloc",
    "spec": {
      "parameters": "resource $ftp_stream, int $filesize [, string &$result ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_append": {
    "name": "ftp_append",
    "url": "function.ftp-append",
    "spec": {
      "parameters": "resource $ftp, string $remote_file, string $local_file [, int $mode = FTP_IMAGE ]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_cdup": {
    "name": "ftp_cdup",
    "url": "function.ftp-cdup",
    "spec": {
      "parameters": "resource $ftp_stream",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_chdir": {
    "name": "ftp_chdir",
    "url": "function.ftp-chdir",
    "spec": {
      "parameters": "resource $ftp_stream, string $directory",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_chmod": {
    "name": "ftp_chmod",
    "url": "function.ftp-chmod",
    "spec": {
      "parameters": "resource $ftp_stream, int $mode, string $filename",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftp_close": {
    "name": "ftp_close",
    "url": "function.ftp-close",
    "spec": {
      "parameters": "resource $ftp_stream",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_connect": {
    "name": "ftp_connect",
    "url": "function.ftp-connect",
    "spec": {
      "parameters": "string $host [, int $port = 21 [, int $timeout = 90 ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ftp_delete": {
    "name": "ftp_delete",
    "url": "function.ftp-delete",
    "spec": {
      "parameters": "resource $ftp_stream, string $path",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_exec": {
    "name": "ftp_exec",
    "url": "function.ftp-exec",
    "spec": {
      "parameters": "resource $ftp_stream, string $command",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_fget": {
    "name": "ftp_fget",
    "url": "function.ftp-fget",
    "spec": {
      "parameters": "resource $ftp_stream, resource $handle, string $remote_file [, int $mode = FTP_IMAGE [, int $resumepos = 0 ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_fput": {
    "name": "ftp_fput",
    "url": "function.ftp-fput",
    "spec": {
      "parameters": "resource $ftp_stream, string $remote_file, resource $handle [, int $mode = FTP_IMAGE [, int $startpos = 0 ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_get": {
    "name": "ftp_get",
    "url": "function.ftp-get",
    "spec": {
      "parameters": "resource $ftp_stream, string $local_file, string $remote_file [, int $mode = FTP_BINARY [, int $resumepos = 0 ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_get_option": {
    "name": "ftp_get_option",
    "url": "function.ftp-get-option",
    "spec": {
      "parameters": "resource $ftp_stream, int $option",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "ftp_login": {
    "name": "ftp_login",
    "url": "function.ftp-login",
    "spec": {
      "parameters": "resource $ftp_stream, string $username, string $password",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_mdtm": {
    "name": "ftp_mdtm",
    "url": "function.ftp-mdtm",
    "spec": {
      "parameters": "resource $ftp_stream, string $remote_file",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftp_mkdir": {
    "name": "ftp_mkdir",
    "url": "function.ftp-mkdir",
    "spec": {
      "parameters": "resource $ftp_stream, string $directory",
      "returnValue": "string",
      "ref": null
    }
  },
  "ftp_mlsd": {
    "name": "ftp_mlsd",
    "url": "function.ftp-mlsd",
    "spec": {
      "parameters": "resource $ftp_stream, string $directory",
      "returnValue": "array",
      "ref": null
    }
  },
  "ftp_nb_continue": {
    "name": "ftp_nb_continue",
    "url": "function.ftp-nb-continue",
    "spec": {
      "parameters": "resource $ftp_stream",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftp_nb_fget": {
    "name": "ftp_nb_fget",
    "url": "function.ftp-nb-fget",
    "spec": {
      "parameters": "resource $ftp_stream, resource $handle, string $remote_file [, int $mode = FTP_IMAGE [, int $resumepos = 0 ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftp_nb_fput": {
    "name": "ftp_nb_fput",
    "url": "function.ftp-nb-fput",
    "spec": {
      "parameters": "resource $ftp_stream, string $remote_file, resource $handle [, int $mode = FTP_IMAGE [, int $startpos = 0 ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftp_nb_get": {
    "name": "ftp_nb_get",
    "url": "function.ftp-nb-get",
    "spec": {
      "parameters": "resource $ftp_stream, string $local_file, string $remote_file [, int $mode = FTP_IMAGE [, int $resumepos = 0 ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftp_nb_put": {
    "name": "ftp_nb_put",
    "url": "function.ftp-nb-put",
    "spec": {
      "parameters": "resource $ftp_stream, string $remote_file, string $local_file [, int $mode = FTP_IMAGE [, int $startpos = 0 ]]",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftp_nlist": {
    "name": "ftp_nlist",
    "url": "function.ftp-nlist",
    "spec": {
      "parameters": "resource $ftp_stream, string $directory",
      "returnValue": "array",
      "ref": null
    }
  },
  "ftp_pasv": {
    "name": "ftp_pasv",
    "url": "function.ftp-pasv",
    "spec": {
      "parameters": "resource $ftp_stream, bool $pasv",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_put": {
    "name": "ftp_put",
    "url": "function.ftp-put",
    "spec": {
      "parameters": "resource $ftp_stream, string $remote_file, string $local_file [, int $mode = FTP_IMAGE [, int $startpos = 0 ]]",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_pwd": {
    "name": "ftp_pwd",
    "url": "function.ftp-pwd",
    "spec": {
      "parameters": "resource $ftp_stream",
      "returnValue": "string",
      "ref": null
    }
  },
  "ftp_quit": {
    "name": "ftp_quit",
    "url": "function.ftp-quit",
    "spec": {
      "parameters": "resource $ftp_stream",
      "returnValue": "bool",
      "ref": {
        "name": "ftp_close()",
        "url": "function.ftp-close"
      }
    }
  },
  "ftp_raw": {
    "name": "ftp_raw",
    "url": "function.ftp-raw",
    "spec": {
      "parameters": "resource $ftp_stream, string $command",
      "returnValue": "array",
      "ref": null
    }
  },
  "ftp_rawlist": {
    "name": "ftp_rawlist",
    "url": "function.ftp-rawlist",
    "spec": {
      "parameters": "resource $ftp_stream, string $directory [, bool $recursive = FALSE ]",
      "returnValue": "array",
      "ref": null
    }
  },
  "ftp_rename": {
    "name": "ftp_rename",
    "url": "function.ftp-rename",
    "spec": {
      "parameters": "resource $ftp_stream, string $oldname, string $newname",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_rmdir": {
    "name": "ftp_rmdir",
    "url": "function.ftp-rmdir",
    "spec": {
      "parameters": "resource $ftp_stream, string $directory",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_set_option": {
    "name": "ftp_set_option",
    "url": "function.ftp-set-option",
    "spec": {
      "parameters": "resource $ftp_stream, int $option, mixed $value",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_site": {
    "name": "ftp_site",
    "url": "function.ftp-site",
    "spec": {
      "parameters": "resource $ftp_stream, string $command",
      "returnValue": "bool",
      "ref": null
    }
  },
  "ftp_size": {
    "name": "ftp_size",
    "url": "function.ftp-size",
    "spec": {
      "parameters": "resource $ftp_stream, string $remote_file",
      "returnValue": "int",
      "ref": null
    }
  },
  "ftp_ssl_connect": {
    "name": "ftp_ssl_connect",
    "url": "function.ftp-ssl-connect",
    "spec": {
      "parameters": "string $host [, int $port = 21 [, int $timeout = 90 ]]",
      "returnValue": "resource",
      "ref": null
    }
  },
  "ftp_systype": {
    "name": "ftp_systype",
    "url": "function.ftp-systype",
    "spec": {
      "parameters": "resource $ftp_stream",
      "returnValue": "string",
      "ref": null
    }
  },
  "ftruncate": {
    "name": "ftruncate",
    "url": "function.ftruncate",
    "spec": {
      "parameters": "resource $handle, int $size",
      "returnValue": "bool",
      "ref": null
    }
  },
  "function_exists": {
    "name": "function_exists",
    "url": "function.function-exists",
    "spec": {
      "parameters": "string $function_name",
      "returnValue": "bool",
      "ref": null
    }
  },
  "func_get_arg": {
    "name": "func_get_arg",
    "url": "function.func-get-arg",
    "spec": {
      "parameters": "int $arg_num",
      "returnValue": "mixed",
      "ref": null
    }
  },
  "func_get_args": {
    "name": "func_get_args",
    "url": "function.func-get-args",
    "spec": {
      "parameters": "void",
      "returnValue": "array",
      "ref": null
    }
  },
  "func_num_args": {
    "name": "func_num_args",
    "url": "function.func-num-args",
    "spec": {
      "parameters": "void",
      "returnValue": "int",
      "ref": null
    }
  },
  "fwrite": {
    "name": "fwrite",
    "url": "function.fwrite",
    "spec": {
      "parameters": "resource $handle, string $string [, int $length ]",
      "returnValue": "int",
      "ref": null
    }
  }
};
