dmx.config({
  "services": {
    "tableRepeat1": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "created_at",
          "type": "number",
          "sub": []
        },
        {
          "name": "serviceName",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "call_type",
          "type": "text"
        },
        {
          "name": "destination_group",
          "type": "text"
        },
        {
          "name": "readDateTime",
          "type": "text",
          "sub": []
        }
      ],
      "outputType": "array"
    },
    "dd_services1": {
      "meta": [
        {
          "name": "id",
          "type": "number"
        },
        {
          "name": "created_at",
          "type": "number",
          "sub": []
        },
        {
          "name": "serviceName",
          "type": "text"
        },
        {
          "name": "description",
          "type": "text"
        },
        {
          "name": "call_type",
          "type": "text"
        },
        {
          "name": "destination_group",
          "type": "text"
        },
        {
          "name": "readDateTime",
          "type": "text",
          "sub": []
        }
      ],
      "outputType": "array"
    }
  },
  "operators": {
    "data_detailTelco": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "text",
          "name": "telcoName"
        },
        {
          "type": "text",
          "name": "headquarters"
        }
      ],
      "outputType": "array"
    }
  },
  "DiscountAgreements": {
    "data_detail_disc_statement": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "text",
          "name": "agreementName"
        },
        {
          "type": "text",
          "name": "agreementType"
        },
        {
          "type": "text",
          "name": "startDate"
        },
        {
          "type": "text",
          "name": "endDate"
        },
        {
          "type": "text",
          "name": "tax"
        },
        {
          "type": "text",
          "name": "author"
        },
        {
          "type": "text",
          "name": "currency"
        },
        {
          "type": "text",
          "name": "autoProlongation"
        },
        {
          "type": "number",
          "name": "operator1"
        },
        {
          "type": "number",
          "name": "operator2"
        },
        {
          "type": "text",
          "name": "originalContractId"
        },
        {
          "type": "text",
          "name": "frmkAgrContrId"
        },
        {
          "type": "text",
          "name": "dateSigned"
        },
        {
          "type": "array",
          "name": "_ds_of_da",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "created_at"
            },
            {
              "type": "number",
              "name": "discountagreement_id"
            },
            {
              "type": "number",
              "name": "h_tadig"
            },
            {
              "type": "number",
              "name": "v_tadig"
            },
            {
              "type": "number",
              "name": "service"
            },
            {
              "type": "text",
              "name": "startDate"
            },
            {
              "type": "text",
              "name": "endDate"
            },
            {
              "type": "text",
              "name": "status"
            },
            {
              "type": "text",
              "name": "revenueCommitment"
            },
            {
              "type": "text",
              "name": "volumeCommitment"
            },
            {
              "type": "text",
              "name": "currency"
            },
            {
              "type": "text",
              "name": "tax"
            },
            {
              "type": "array",
              "name": "_rm_of_ds",
              "sub": [
                {
                  "type": "number",
                  "name": "id"
                },
                {
                  "type": "number",
                  "name": "created_at"
                },
                {
                  "type": "number",
                  "name": "discstatement_id"
                },
                {
                  "type": "text",
                  "name": "modelType"
                },
                {
                  "type": "number",
                  "name": "amount"
                },
                {
                  "type": "number",
                  "name": "rate"
                },
                {
                  "type": "number",
                  "name": "fromLevel"
                },
                {
                  "type": "number",
                  "name": "toLevel"
                },
                {
                  "type": "text",
                  "name": "increment"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "text",
          "name": "agreementName"
        },
        {
          "type": "text",
          "name": "agreementType"
        },
        {
          "type": "text",
          "name": "startDate"
        },
        {
          "type": "text",
          "name": "endDate"
        },
        {
          "type": "text",
          "name": "tax"
        },
        {
          "type": "text",
          "name": "author"
        },
        {
          "type": "text",
          "name": "currency"
        },
        {
          "type": "text",
          "name": "autoProlongation"
        },
        {
          "type": "number",
          "name": "operator1"
        },
        {
          "type": "number",
          "name": "operator2"
        },
        {
          "type": "text",
          "name": "originalContractId"
        },
        {
          "type": "text",
          "name": "frmkAgrContrId"
        },
        {
          "type": "text",
          "name": "dateSigned"
        },
        {
          "type": "array",
          "name": "_ds_of_da",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "created_at"
            },
            {
              "type": "number",
              "name": "discountagreement_id"
            },
            {
              "type": "number",
              "name": "h_tadig"
            },
            {
              "type": "number",
              "name": "v_tadig"
            },
            {
              "type": "number",
              "name": "service"
            },
            {
              "type": "text",
              "name": "startDate"
            },
            {
              "type": "text",
              "name": "endDate"
            },
            {
              "type": "text",
              "name": "status"
            },
            {
              "type": "text",
              "name": "revenueCommitment"
            },
            {
              "type": "text",
              "name": "volumeCommitment"
            },
            {
              "type": "text",
              "name": "currency"
            },
            {
              "type": "text",
              "name": "tax"
            },
            {
              "type": "array",
              "name": "_rm_of_ds",
              "sub": [
                {
                  "type": "number",
                  "name": "id"
                },
                {
                  "type": "number",
                  "name": "created_at"
                },
                {
                  "type": "number",
                  "name": "discstatement_id"
                },
                {
                  "type": "text",
                  "name": "modelType"
                },
                {
                  "type": "number",
                  "name": "amount"
                },
                {
                  "type": "number",
                  "name": "rate"
                },
                {
                  "type": "number",
                  "name": "fromLevel"
                },
                {
                  "type": "number",
                  "name": "toLevel"
                },
                {
                  "type": "text",
                  "name": "increment"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail_scAllAgree": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "text",
          "name": "agreementName"
        },
        {
          "type": "text",
          "name": "agreementType"
        },
        {
          "type": "text",
          "name": "startDate"
        },
        {
          "type": "text",
          "name": "endDate"
        },
        {
          "type": "text",
          "name": "tax"
        },
        {
          "type": "text",
          "name": "author"
        },
        {
          "type": "text",
          "name": "currency"
        },
        {
          "type": "text",
          "name": "autoProlongation"
        },
        {
          "type": "number",
          "name": "operator1"
        },
        {
          "type": "number",
          "name": "operator2"
        },
        {
          "type": "text",
          "name": "originalContractId"
        },
        {
          "type": "text",
          "name": "frmkAgrContrId"
        },
        {
          "type": "text",
          "name": "dateSigned"
        },
        {
          "type": "array",
          "name": "_ds_of_da",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "created_at"
            },
            {
              "type": "number",
              "name": "discountagreement_id"
            },
            {
              "type": "number",
              "name": "h_tadig"
            },
            {
              "type": "number",
              "name": "v_tadig"
            },
            {
              "type": "number",
              "name": "service"
            },
            {
              "type": "text",
              "name": "startDate"
            },
            {
              "type": "text",
              "name": "endDate"
            },
            {
              "type": "text",
              "name": "status"
            },
            {
              "type": "text",
              "name": "revenueCommitment"
            },
            {
              "type": "text",
              "name": "volumeCommitment"
            },
            {
              "type": "text",
              "name": "currency"
            },
            {
              "type": "text",
              "name": "tax"
            },
            {
              "type": "array",
              "name": "_rm_of_ds",
              "sub": [
                {
                  "type": "number",
                  "name": "id"
                },
                {
                  "type": "number",
                  "name": "created_at"
                },
                {
                  "type": "number",
                  "name": "discstatement_id"
                },
                {
                  "type": "text",
                  "name": "modelType"
                },
                {
                  "type": "number",
                  "name": "amount"
                },
                {
                  "type": "number",
                  "name": "rate"
                },
                {
                  "type": "number",
                  "name": "fromLevel"
                },
                {
                  "type": "number",
                  "name": "toLevel"
                },
                {
                  "type": "text",
                  "name": "increment"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "data_detail_ddDiscStmt": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "number",
          "name": "discountagreement_id"
        },
        {
          "type": "number",
          "name": "h_tadig"
        },
        {
          "type": "number",
          "name": "v_tadig"
        },
        {
          "type": "number",
          "name": "service"
        },
        {
          "type": "text",
          "name": "startDate"
        },
        {
          "type": "text",
          "name": "endDate"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "text",
          "name": "revenueCommitment"
        },
        {
          "type": "text",
          "name": "volumeCommitment"
        },
        {
          "type": "text",
          "name": "currency"
        },
        {
          "type": "text",
          "name": "tax"
        },
        {
          "type": "array",
          "name": "_rm_of_ds",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "created_at"
            },
            {
              "type": "number",
              "name": "discstatement_id"
            },
            {
              "type": "text",
              "name": "modelType"
            },
            {
              "type": "number",
              "name": "amount"
            },
            {
              "type": "number",
              "name": "rate"
            },
            {
              "type": "number",
              "name": "fromLevel"
            },
            {
              "type": "number",
              "name": "toLevel"
            },
            {
              "type": "text",
              "name": "increment"
            }
          ]
        }
      ],
      "outputType": "array"
    }
  },
  "regions": {
    "dd_region": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "text",
          "name": "created_at"
        },
        {
          "type": "text",
          "name": "tadig"
        }
      ],
      "outputType": "array"
    }
  },
  "Settlements": {
    "repeat1": {
      "meta": [
        {
          "name": "sett_int1_agreement_id",
          "type": "number"
        },
        {
          "name": "sett_int1_h_tadig_id",
          "type": "number"
        },
        {
          "name": "sett_int1_v_tadig_id",
          "type": "number"
        },
        {
          "name": "sett_int1_settlement_term",
          "type": "text"
        },
        {
          "name": "sett_int1_sett_qty",
          "type": "number"
        },
        {
          "name": "sett_int1_settlement_amt",
          "type": "number"
        },
        {
          "name": "agreementName",
          "type": "text"
        },
        {
          "name": "h_tadig",
          "type": "text",
          "sub": []
        },
        {
          "name": "v_tadig",
          "type": "text",
          "sub": []
        }
      ],
      "outputType": "array"
    },
    "tableRepeat_level4": {
      "meta": [
        {
          "name": "$index",
          "type": "number"
        },
        {
          "name": "$key",
          "type": "text"
        },
        {
          "name": "$value",
          "type": "object"
        },
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "number",
          "name": "h_tadig_id"
        },
        {
          "type": "number",
          "name": "v_tadig_id"
        },
        {
          "type": "number",
          "name": "roam_svc_id"
        },
        {
          "type": "number",
          "name": "agreement_id"
        },
        {
          "type": "number",
          "name": "disc_stmt_id"
        },
        {
          "type": "number",
          "name": "rating_model_id"
        },
        {
          "type": "number",
          "name": "settlement_amt"
        },
        {
          "type": "number",
          "name": "sett_qty"
        },
        {
          "type": "text",
          "name": "settlement_term"
        },
        {
          "type": "object",
          "name": "h_tadig",
          "sub": [
            {
              "type": "text",
              "name": "tadig"
            }
          ]
        },
        {
          "type": "object",
          "name": "v_tadig",
          "sub": [
            {
              "type": "text",
              "name": "tadig"
            }
          ]
        },
        {
          "type": "text",
          "name": "agreementName"
        },
        {
          "type": "text",
          "name": "serviceName"
        },
        {
          "type": "text",
          "name": "modelType"
        },
        {
          "type": "number",
          "name": "amount"
        },
        {
          "type": "number",
          "name": "rate"
        },
        {
          "type": "number",
          "name": "fromLevel"
        }
      ],
      "outputType": "array"
    }
  },
  "MasterDetailrough": {
    "arr1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "number",
          "name": "discountagreement_id"
        },
        {
          "type": "number",
          "name": "h_tadig"
        },
        {
          "type": "number",
          "name": "v_tadig"
        },
        {
          "type": "number",
          "name": "service"
        },
        {
          "type": "text",
          "name": "startDate"
        },
        {
          "type": "text",
          "name": "endDate"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "text",
          "name": "revenueCommitment"
        },
        {
          "type": "text",
          "name": "volumeCommitment"
        },
        {
          "type": "text",
          "name": "currency"
        },
        {
          "type": "text",
          "name": "tax"
        },
        {
          "type": "array",
          "name": "_rm_of_ds",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "created_at"
            },
            {
              "type": "number",
              "name": "discstatement_id"
            },
            {
              "type": "text",
              "name": "modelType"
            },
            {
              "type": "number",
              "name": "amount"
            },
            {
              "type": "number",
              "name": "rate"
            },
            {
              "type": "number",
              "name": "fromLevel"
            },
            {
              "type": "number",
              "name": "toLevel"
            },
            {
              "type": "text",
              "name": "increment"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeat2": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "text",
          "name": "agreementName"
        },
        {
          "type": "text",
          "name": "agreementType"
        },
        {
          "type": "text",
          "name": "startDate"
        },
        {
          "type": "text",
          "name": "endDate"
        },
        {
          "type": "text",
          "name": "tax"
        },
        {
          "type": "text",
          "name": "author"
        },
        {
          "type": "text",
          "name": "currency"
        },
        {
          "type": "text",
          "name": "autoProlongation"
        },
        {
          "type": "number",
          "name": "operator1"
        },
        {
          "type": "number",
          "name": "operator2"
        },
        {
          "type": "text",
          "name": "originalContractId"
        },
        {
          "type": "text",
          "name": "frmkAgrContrId"
        },
        {
          "type": "text",
          "name": "dateSigned"
        },
        {
          "type": "array",
          "name": "ds",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "created_at"
            },
            {
              "type": "number",
              "name": "discountagreement_id"
            },
            {
              "type": "number",
              "name": "h_tadig"
            },
            {
              "type": "number",
              "name": "v_tadig"
            },
            {
              "type": "number",
              "name": "service"
            },
            {
              "type": "text",
              "name": "startDate"
            },
            {
              "type": "text",
              "name": "endDate"
            },
            {
              "type": "text",
              "name": "status"
            },
            {
              "type": "text",
              "name": "revenueCommitment"
            },
            {
              "type": "text",
              "name": "volumeCommitment"
            },
            {
              "type": "text",
              "name": "currency"
            },
            {
              "type": "text",
              "name": "tax"
            },
            {
              "type": "array",
              "name": "_rm_of_ds",
              "sub": [
                {
                  "type": "number",
                  "name": "id"
                },
                {
                  "type": "number",
                  "name": "created_at"
                },
                {
                  "type": "number",
                  "name": "discstatement_id"
                },
                {
                  "type": "text",
                  "name": "modelType"
                },
                {
                  "type": "number",
                  "name": "amount"
                },
                {
                  "type": "number",
                  "name": "rate"
                },
                {
                  "type": "number",
                  "name": "fromLevel"
                },
                {
                  "type": "number",
                  "name": "toLevel"
                },
                {
                  "type": "text",
                  "name": "increment"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "data_detail1": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "text",
          "name": "agreementName"
        },
        {
          "type": "text",
          "name": "agreementType"
        },
        {
          "type": "text",
          "name": "startDate"
        },
        {
          "type": "text",
          "name": "endDate"
        },
        {
          "type": "text",
          "name": "tax"
        },
        {
          "type": "text",
          "name": "author"
        },
        {
          "type": "text",
          "name": "currency"
        },
        {
          "type": "text",
          "name": "autoProlongation"
        },
        {
          "type": "number",
          "name": "operator1"
        },
        {
          "type": "number",
          "name": "operator2"
        },
        {
          "type": "text",
          "name": "originalContractId"
        },
        {
          "type": "text",
          "name": "frmkAgrContrId"
        },
        {
          "type": "text",
          "name": "dateSigned"
        },
        {
          "type": "array",
          "name": "ds",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "created_at"
            },
            {
              "type": "number",
              "name": "discountagreement_id"
            },
            {
              "type": "number",
              "name": "h_tadig"
            },
            {
              "type": "number",
              "name": "v_tadig"
            },
            {
              "type": "number",
              "name": "service"
            },
            {
              "type": "text",
              "name": "startDate"
            },
            {
              "type": "text",
              "name": "endDate"
            },
            {
              "type": "text",
              "name": "status"
            },
            {
              "type": "text",
              "name": "revenueCommitment"
            },
            {
              "type": "text",
              "name": "volumeCommitment"
            },
            {
              "type": "text",
              "name": "currency"
            },
            {
              "type": "text",
              "name": "tax"
            },
            {
              "type": "array",
              "name": "_rm_of_ds",
              "sub": [
                {
                  "type": "number",
                  "name": "id"
                },
                {
                  "type": "number",
                  "name": "created_at"
                },
                {
                  "type": "number",
                  "name": "discstatement_id"
                },
                {
                  "type": "text",
                  "name": "modelType"
                },
                {
                  "type": "number",
                  "name": "amount"
                },
                {
                  "type": "number",
                  "name": "rate"
                },
                {
                  "type": "number",
                  "name": "fromLevel"
                },
                {
                  "type": "number",
                  "name": "toLevel"
                },
                {
                  "type": "text",
                  "name": "increment"
                }
              ]
            }
          ]
        }
      ],
      "outputType": "object"
    },
    "discStatment": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "number",
          "name": "discountagreement_id"
        },
        {
          "type": "number",
          "name": "h_tadig"
        },
        {
          "type": "number",
          "name": "v_tadig"
        },
        {
          "type": "number",
          "name": "service"
        },
        {
          "type": "text",
          "name": "startDate"
        },
        {
          "type": "text",
          "name": "endDate"
        },
        {
          "type": "text",
          "name": "status"
        },
        {
          "type": "text",
          "name": "revenueCommitment"
        },
        {
          "type": "text",
          "name": "volumeCommitment"
        },
        {
          "type": "text",
          "name": "currency"
        },
        {
          "type": "text",
          "name": "tax"
        },
        {
          "type": "array",
          "name": "_rm_of_ds",
          "sub": [
            {
              "type": "number",
              "name": "id"
            },
            {
              "type": "number",
              "name": "created_at"
            },
            {
              "type": "number",
              "name": "discstatement_id"
            },
            {
              "type": "text",
              "name": "modelType"
            },
            {
              "type": "number",
              "name": "amount"
            },
            {
              "type": "number",
              "name": "rate"
            },
            {
              "type": "number",
              "name": "fromLevel"
            },
            {
              "type": "number",
              "name": "toLevel"
            },
            {
              "type": "text",
              "name": "increment"
            }
          ]
        }
      ],
      "outputType": "array"
    },
    "repeatRatingModel": {
      "meta": [
        {
          "type": "number",
          "name": "id"
        },
        {
          "type": "number",
          "name": "created_at"
        },
        {
          "type": "number",
          "name": "discstatement_id"
        },
        {
          "type": "text",
          "name": "modelType"
        },
        {
          "type": "number",
          "name": "amount"
        },
        {
          "type": "number",
          "name": "rate"
        },
        {
          "type": "number",
          "name": "fromLevel"
        },
        {
          "type": "number",
          "name": "toLevel"
        },
        {
          "type": "text",
          "name": "increment"
        }
      ],
      "outputType": "array"
    }
  },
  "StripeMultiItem": {
    "ds_shoppingCart": [
      {
        "type": "text",
        "name": "title"
      },
      {
        "type": "number",
        "name": "amount"
      },
      {
        "type": "text",
        "name": "currency"
      },
      {
        "type": "number",
        "name": "quantity"
      },
      {
        "type": "text",
        "name": "product_id"
      }
    ],
    "ds_shoppingCartS": [
      {
        "type": "text",
        "name": "price"
      },
      {
        "type": "text",
        "name": "quantity"
      },
      {
        "type": "text",
        "name": "product_id"
      },
      {
        "type": "text",
        "name": "product_name"
      },
      {
        "type": "text",
        "name": "product_price"
      }
    ]
  },
  "StripePayment": {
    "datastore1": [
      {
        "type": "text",
        "name": "price"
      },
      {
        "type": "number",
        "name": "quantity"
      }
    ],
    "form1": [
      {
        "type": "object",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "id"
          },
          {
            "type": "text",
            "name": "object"
          },
          {
            "type": "text",
            "name": "after_expiration"
          },
          {
            "type": "text",
            "name": "allow_promotion_codes"
          },
          {
            "type": "number",
            "name": "amount_subtotal"
          },
          {
            "type": "number",
            "name": "amount_total"
          },
          {
            "type": "object",
            "name": "automatic_tax",
            "sub": [
              {
                "type": "boolean",
                "name": "enabled"
              },
              {
                "type": "text",
                "name": "status"
              }
            ]
          },
          {
            "type": "text",
            "name": "billing_address_collection"
          },
          {
            "type": "text",
            "name": "cancel_url"
          },
          {
            "type": "text",
            "name": "client_reference_id"
          },
          {
            "type": "text",
            "name": "consent"
          },
          {
            "type": "text",
            "name": "consent_collection"
          },
          {
            "type": "text",
            "name": "currency"
          },
          {
            "type": "text",
            "name": "customer"
          },
          {
            "type": "text",
            "name": "customer_creation"
          },
          {
            "type": "text",
            "name": "customer_details"
          },
          {
            "type": "text",
            "name": "customer_email"
          },
          {
            "type": "number",
            "name": "expires_at"
          },
          {
            "type": "boolean",
            "name": "livemode"
          },
          {
            "type": "text",
            "name": "locale"
          },
          {
            "type": "object",
            "name": "metadata"
          },
          {
            "type": "text",
            "name": "mode"
          },
          {
            "type": "text",
            "name": "payment_intent"
          },
          {
            "type": "text",
            "name": "payment_link"
          },
          {
            "type": "object",
            "name": "payment_method_options"
          },
          {
            "type": "array",
            "name": "payment_method_types",
            "sub": [
              {
                "type": "text",
                "name": "$value"
              }
            ]
          },
          {
            "type": "text",
            "name": "payment_status"
          },
          {
            "type": "object",
            "name": "phone_number_collection",
            "sub": [
              {
                "type": "boolean",
                "name": "enabled"
              }
            ]
          },
          {
            "type": "text",
            "name": "recovered_from"
          },
          {
            "type": "text",
            "name": "setup_intent"
          },
          {
            "type": "text",
            "name": "shipping"
          },
          {
            "type": "text",
            "name": "shipping_address_collection"
          },
          {
            "type": "array",
            "name": "shipping_options"
          },
          {
            "type": "text",
            "name": "shipping_rate"
          },
          {
            "type": "text",
            "name": "status"
          },
          {
            "type": "text",
            "name": "submit_type"
          },
          {
            "type": "text",
            "name": "subscription"
          },
          {
            "type": "text",
            "name": "success_url"
          },
          {
            "type": "object",
            "name": "total_details",
            "sub": [
              {
                "type": "number",
                "name": "amount_discount"
              },
              {
                "type": "number",
                "name": "amount_shipping"
              },
              {
                "type": "number",
                "name": "amount_tax"
              }
            ]
          },
          {
            "type": "text",
            "name": "url"
          }
        ]
      }
    ],
    "ds_shoppingCart": [
      {
        "type": "text",
        "name": "price"
      },
      {
        "type": "number",
        "name": "quantity"
      }
    ],
    "form2": [
      {
        "type": "object",
        "name": "data",
        "sub": [
          {
            "type": "text",
            "name": "id"
          },
          {
            "type": "text",
            "name": "object"
          },
          {
            "type": "text",
            "name": "after_expiration"
          },
          {
            "type": "text",
            "name": "allow_promotion_codes"
          },
          {
            "type": "number",
            "name": "amount_subtotal"
          },
          {
            "type": "number",
            "name": "amount_total"
          },
          {
            "type": "object",
            "name": "automatic_tax",
            "sub": [
              {
                "type": "boolean",
                "name": "enabled"
              },
              {
                "type": "text",
                "name": "status"
              }
            ]
          },
          {
            "type": "text",
            "name": "billing_address_collection"
          },
          {
            "type": "text",
            "name": "cancel_url"
          },
          {
            "type": "text",
            "name": "client_reference_id"
          },
          {
            "type": "text",
            "name": "consent"
          },
          {
            "type": "text",
            "name": "consent_collection"
          },
          {
            "type": "text",
            "name": "currency"
          },
          {
            "type": "text",
            "name": "customer"
          },
          {
            "type": "text",
            "name": "customer_creation"
          },
          {
            "type": "text",
            "name": "customer_details"
          },
          {
            "type": "text",
            "name": "customer_email"
          },
          {
            "type": "number",
            "name": "expires_at"
          },
          {
            "type": "boolean",
            "name": "livemode"
          },
          {
            "type": "text",
            "name": "locale"
          },
          {
            "type": "object",
            "name": "metadata"
          },
          {
            "type": "text",
            "name": "mode"
          },
          {
            "type": "text",
            "name": "payment_intent"
          },
          {
            "type": "text",
            "name": "payment_link"
          },
          {
            "type": "object",
            "name": "payment_method_options"
          },
          {
            "type": "array",
            "name": "payment_method_types",
            "sub": [
              {
                "type": "text",
                "name": "$value"
              }
            ]
          },
          {
            "type": "text",
            "name": "payment_status"
          },
          {
            "type": "object",
            "name": "phone_number_collection",
            "sub": [
              {
                "type": "boolean",
                "name": "enabled"
              }
            ]
          },
          {
            "type": "text",
            "name": "recovered_from"
          },
          {
            "type": "text",
            "name": "setup_intent"
          },
          {
            "type": "text",
            "name": "shipping"
          },
          {
            "type": "text",
            "name": "shipping_address_collection"
          },
          {
            "type": "array",
            "name": "shipping_options"
          },
          {
            "type": "text",
            "name": "shipping_rate"
          },
          {
            "type": "text",
            "name": "status"
          },
          {
            "type": "text",
            "name": "submit_type"
          },
          {
            "type": "text",
            "name": "subscription"
          },
          {
            "type": "text",
            "name": "success_url"
          },
          {
            "type": "object",
            "name": "total_details",
            "sub": [
              {
                "type": "number",
                "name": "amount_discount"
              },
              {
                "type": "number",
                "name": "amount_shipping"
              },
              {
                "type": "number",
                "name": "amount_tax"
              }
            ]
          },
          {
            "type": "text",
            "name": "url"
          }
        ]
      }
    ]
  },
  "sand3": {
    "data_view1": {
      "meta": null,
      "outputType": "object"
    }
  }
});
