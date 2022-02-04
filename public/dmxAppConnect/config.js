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
  }
});
