export default {
  aliases: {},
  mappings: {
    dynamic: 'strict',
    _meta: {
      'model.versions.3916': '283e91b6e21fdbabbe3250a9a819a545239fb12d',
      'model.versions.3901': '38491d332dea9a960759a428659838395bc94a5b',
    },
    properties: {
      data: {
        dynamic: 'false',
        properties: {
          alternativeTitles: {
            type: 'text',
            fields: {
              arabic: {
                type: 'text',
                analyzer: 'arabic_analyzer',
              },
              bengali: {
                type: 'text',
                analyzer: 'bengali_analyzer',
              },
              english: {
                type: 'text',
                analyzer: 'english_analyzer',
              },
              french: {
                type: 'text',
                analyzer: 'french_analyzer',
              },
              german: {
                type: 'text',
                analyzer: 'german_analyzer',
              },
              hindi: {
                type: 'text',
                analyzer: 'hindi_analyzer',
              },
              italian: {
                type: 'text',
                analyzer: 'italian_analyzer',
              },
              keyword: {
                type: 'keyword',
                normalizer: 'lowercase_normalizer',
              },
              shingles: {
                type: 'text',
                analyzer: 'shingle_asciifolding_analyzer',
              },
            },
          },
          collectionPath: {
            properties: {
              depth: {
                type: 'token_count',
                analyzer: 'standard',
              },
              label: {
                type: 'text',
                fields: {
                  keyword: {
                    type: 'keyword',
                  },
                  lowercaseKeyword: {
                    type: 'keyword',
                    normalizer: 'lowercase_normalizer',
                  },
                },
                analyzer: 'asciifolding_analyzer',
              },
              path: {
                type: 'text',
                fields: {
                  keyword: {
                    type: 'keyword',
                  },
                },
                copy_to: ['data.collectionPath.depth'],
                analyzer: 'path_hierarchy_analyzer',
              },
            },
          },
          contributors: {
            properties: {
              agent: {
                properties: {
                  label: {
                    type: 'text',
                    fields: {
                      keyword: {
                        type: 'keyword',
                      },
                      lowercaseKeyword: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                    analyzer: 'asciifolding_analyzer',
                  },
                },
              },
            },
          },
          description: {
            type: 'text',
            fields: {
              english: {
                type: 'text',
                analyzer: 'english',
              },
            },
          },
          duration: {
            type: 'integer',
          },
          edition: {
            type: 'text',
          },
          format: {
            properties: {
              id: {
                type: 'keyword',
              },
            },
          },
          genres: {
            properties: {
              concepts: {
                properties: {
                  label: {
                    type: 'text',
                    fields: {
                      keyword: {
                        type: 'keyword',
                      },
                      lowercaseKeyword: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                    analyzer: 'asciifolding_analyzer',
                  },
                },
              },
              label: {
                type: 'text',
                fields: {
                  keyword: {
                    type: 'keyword',
                  },
                  lowercaseKeyword: {
                    type: 'keyword',
                    normalizer: 'lowercase_normalizer',
                  },
                },
                analyzer: 'asciifolding_analyzer',
              },
            },
          },
          imageData: {
            properties: {
              id: {
                properties: {
                  canonicalId: {
                    type: 'keyword',
                    normalizer: 'lowercase_normalizer',
                  },
                  sourceIdentifier: {
                    dynamic: 'false',
                    properties: {
                      value: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                  },
                },
              },
            },
          },
          items: {
            properties: {
              id: {
                properties: {
                  canonicalId: {
                    type: 'keyword',
                    normalizer: 'lowercase_normalizer',
                  },
                  otherIdentifiers: {
                    properties: {
                      value: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                  },
                  sourceIdentifier: {
                    dynamic: 'false',
                    properties: {
                      value: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                  },
                },
              },
              locations: {
                properties: {
                  accessConditions: {
                    properties: {
                      status: {
                        properties: {
                          type: {
                            type: 'keyword',
                          },
                        },
                      },
                    },
                  },
                  license: {
                    properties: {
                      id: {
                        type: 'keyword',
                      },
                    },
                  },
                  locationType: {
                    properties: {
                      id: {
                        type: 'keyword',
                      },
                    },
                  },
                  type: {
                    type: 'keyword',
                  },
                },
              },
            },
          },
          languages: {
            properties: {
              id: {
                type: 'keyword',
              },
              label: {
                type: 'text',
                fields: {
                  keyword: {
                    type: 'keyword',
                  },
                  lowercaseKeyword: {
                    type: 'keyword',
                    normalizer: 'lowercase_normalizer',
                  },
                },
                analyzer: 'asciifolding_analyzer',
              },
            },
          },
          lettering: {
            type: 'text',
            fields: {
              arabic: {
                type: 'text',
                analyzer: 'arabic_analyzer',
              },
              bengali: {
                type: 'text',
                analyzer: 'bengali_analyzer',
              },
              english: {
                type: 'text',
                analyzer: 'english_analyzer',
              },
              french: {
                type: 'text',
                analyzer: 'french_analyzer',
              },
              german: {
                type: 'text',
                analyzer: 'german_analyzer',
              },
              hindi: {
                type: 'text',
                analyzer: 'hindi_analyzer',
              },
              italian: {
                type: 'text',
                analyzer: 'italian_analyzer',
              },
              shingles: {
                type: 'text',
                analyzer: 'shingle_asciifolding_analyzer',
              },
            },
          },
          notes: {
            properties: {
              content: {
                type: 'text',
                fields: {
                  english: {
                    type: 'text',
                    analyzer: 'english',
                  },
                },
              },
            },
          },
          otherIdentifiers: {
            properties: {
              value: {
                type: 'keyword',
                normalizer: 'lowercase_normalizer',
              },
            },
          },
          physicalDescription: {
            type: 'text',
            fields: {
              english: {
                type: 'text',
                analyzer: 'english',
              },
              keyword: {
                type: 'keyword',
              },
            },
          },
          production: {
            properties: {
              agents: {
                properties: {
                  label: {
                    type: 'text',
                    fields: {
                      keyword: {
                        type: 'keyword',
                      },
                      lowercaseKeyword: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                    analyzer: 'asciifolding_analyzer',
                  },
                },
              },
              dates: {
                properties: {
                  label: {
                    type: 'text',
                    fields: {
                      keyword: {
                        type: 'keyword',
                      },
                      lowercaseKeyword: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                    analyzer: 'asciifolding_analyzer',
                  },
                  range: {
                    properties: {
                      from: {
                        type: 'date',
                      },
                    },
                  },
                },
              },
              function: {
                properties: {
                  label: {
                    type: 'text',
                    fields: {
                      keyword: {
                        type: 'keyword',
                      },
                      lowercaseKeyword: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                    analyzer: 'asciifolding_analyzer',
                  },
                },
              },
              label: {
                type: 'text',
                fields: {
                  keyword: {
                    type: 'keyword',
                  },
                  lowercaseKeyword: {
                    type: 'keyword',
                    normalizer: 'lowercase_normalizer',
                  },
                },
                analyzer: 'asciifolding_analyzer',
              },
              places: {
                properties: {
                  label: {
                    type: 'text',
                    fields: {
                      keyword: {
                        type: 'keyword',
                      },
                      lowercaseKeyword: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                    analyzer: 'asciifolding_analyzer',
                  },
                },
              },
            },
          },
          subjects: {
            properties: {
              concepts: {
                properties: {
                  label: {
                    type: 'text',
                    fields: {
                      keyword: {
                        type: 'keyword',
                      },
                      lowercaseKeyword: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                    },
                    analyzer: 'asciifolding_analyzer',
                  },
                },
              },
              label: {
                type: 'text',
                fields: {
                  keyword: {
                    type: 'keyword',
                  },
                  lowercaseKeyword: {
                    type: 'keyword',
                    normalizer: 'lowercase_normalizer',
                  },
                },
                analyzer: 'asciifolding_analyzer',
              },
            },
          },
          title: {
            type: 'text',
            fields: {
              arabic: {
                type: 'text',
                analyzer: 'arabic_analyzer',
              },
              bengali: {
                type: 'text',
                analyzer: 'bengali_analyzer',
              },
              english: {
                type: 'text',
                analyzer: 'english_analyzer',
              },
              french: {
                type: 'text',
                analyzer: 'french_analyzer',
              },
              german: {
                type: 'text',
                analyzer: 'german_analyzer',
              },
              hindi: {
                type: 'text',
                analyzer: 'hindi_analyzer',
              },
              italian: {
                type: 'text',
                analyzer: 'italian_analyzer',
              },
              keyword: {
                type: 'keyword',
                normalizer: 'lowercase_normalizer',
              },
              shingles: {
                type: 'text',
                analyzer: 'shingle_asciifolding_analyzer',
              },
            },
          },
          workType: {
            type: 'keyword',
          },
        },
      },
      deletedReason: {
        dynamic: 'false',
        properties: {
          type: {
            type: 'keyword',
          },
        },
      },
      invisibilityReasons: {
        dynamic: 'false',
        properties: {
          type: {
            type: 'keyword',
          },
        },
      },
      redirectSources: {
        type: 'object',
        dynamic: 'false',
      },
      redirectTarget: {
        type: 'object',
        dynamic: 'false',
      },
      state: {
        properties: {
          availabilities: {
            properties: {
              id: {
                type: 'keyword',
              },
            },
          },
          canonicalId: {
            type: 'keyword',
            normalizer: 'lowercase_normalizer',
          },
          derivedData: {
            dynamic: 'false',
            properties: {
              contributorAgents: {
                type: 'keyword',
              },
            },
          },
          modifiedTime: {
            type: 'date',
          },
          relations: {
            dynamic: 'false',
            properties: {
              ancestors: {
                properties: {
                  collectionPath: {
                    properties: {
                      depth: {
                        type: 'token_count',
                        analyzer: 'standard',
                      },
                      label: {
                        type: 'text',
                        fields: {
                          keyword: {
                            type: 'keyword',
                          },
                          lowercaseKeyword: {
                            type: 'keyword',
                            normalizer: 'lowercase_normalizer',
                          },
                        },
                        analyzer: 'asciifolding_analyzer',
                      },
                      path: {
                        type: 'text',
                        fields: {
                          keyword: {
                            type: 'keyword',
                          },
                        },
                        analyzer: 'path_hierarchy_analyzer',
                      },
                    },
                  },
                  depth: {
                    type: 'integer',
                  },
                  id: {
                    type: 'keyword',
                    normalizer: 'lowercase_normalizer',
                  },
                  numChildren: {
                    type: 'integer',
                  },
                  numDescendents: {
                    type: 'integer',
                  },
                  title: {
                    type: 'text',
                    fields: {
                      arabic: {
                        type: 'text',
                        analyzer: 'arabic_analyzer',
                      },
                      bengali: {
                        type: 'text',
                        analyzer: 'bengali_analyzer',
                      },
                      english: {
                        type: 'text',
                        analyzer: 'english_analyzer',
                      },
                      french: {
                        type: 'text',
                        analyzer: 'french_analyzer',
                      },
                      german: {
                        type: 'text',
                        analyzer: 'german_analyzer',
                      },
                      hindi: {
                        type: 'text',
                        analyzer: 'hindi_analyzer',
                      },
                      italian: {
                        type: 'text',
                        analyzer: 'italian_analyzer',
                      },
                      keyword: {
                        type: 'keyword',
                        normalizer: 'lowercase_normalizer',
                      },
                      shingles: {
                        type: 'text',
                        analyzer: 'shingle_asciifolding_analyzer',
                      },
                    },
                  },
                },
              },
            },
          },
          sourceIdentifier: {
            dynamic: 'false',
            properties: {
              value: {
                type: 'keyword',
                normalizer: 'lowercase_normalizer',
              },
            },
          },
        },
      },
      type: {
        type: 'keyword',
      },
      version: {
        type: 'integer',
      },
    },
  },
  settings: {
    index: {
      analysis: {
        filter: {
          arabic_token_filter: {
            name: 'arabic',
            type: 'stemmer',
          },
          english_token_filter: {
            name: 'english',
            type: 'stemmer',
          },
          french_token_filter: {
            name: 'french',
            type: 'stemmer',
          },
          italian_token_filter: {
            name: 'italian',
            type: 'stemmer',
          },
          shingle_token_filter: {
            max_shingle_size: '4',
            min_shingle_size: '2',
            type: 'shingle',
          },
          hindi_token_filter: {
            name: 'hindi',
            type: 'stemmer',
          },
          english_possessive_token_filter: {
            name: 'possessive_english',
            type: 'stemmer',
          },
          german_token_filter: {
            name: 'german',
            type: 'stemmer',
          },
          bengali_token_filter: {
            name: 'bengali',
            type: 'stemmer',
          },
          asciifolding_token_filter: {
            type: 'asciifolding',
            preserve_original: 'true',
          },
        },
        normalizer: {
          lowercase_normalizer: {
            filter: ['lowercase'],
            type: 'custom',
          },
        },
        analyzer: {
          hindi_analyzer: {
            filter: ['lowercase', 'hindi_token_filter'],
            type: 'custom',
            tokenizer: 'standard',
          },
          asciifolding_analyzer: {
            filter: ['lowercase', 'asciifolding_token_filter'],
            type: 'custom',
            tokenizer: 'standard',
          },
          shingle_asciifolding_analyzer: {
            filter: [
              'lowercase',
              'shingle_token_filter',
              'asciifolding_token_filter',
            ],
            type: 'custom',
            tokenizer: 'standard',
          },
          french_analyzer: {
            filter: ['lowercase', 'french_token_filter'],
            type: 'custom',
            tokenizer: 'standard',
          },
          path_hierarchy_analyzer: {
            type: 'custom',
            tokenizer: 'path_hierarchy_tokenizer',
          },
          whitespace_analyzer: {
            type: 'custom',
            tokenizer: 'whitespace',
          },
          italian_analyzer: {
            filter: ['lowercase', 'italian_token_filter'],
            type: 'custom',
            tokenizer: 'standard',
          },
          arabic_analyzer: {
            filter: ['lowercase', 'arabic_token_filter'],
            type: 'custom',
            tokenizer: 'standard',
          },
          english_analyzer: {
            filter: [
              'lowercase',
              'english_token_filter',
              'english_possessive_token_filter',
            ],
            type: 'custom',
            tokenizer: 'standard',
          },
          bengali_analyzer: {
            filter: ['lowercase', 'bengali_token_filter'],
            type: 'custom',
            tokenizer: 'standard',
          },
          german_analyzer: {
            filter: ['lowercase', 'german_token_filter'],
            type: 'custom',
            tokenizer: 'standard',
          },
        },
        tokenizer: {
          path_hierarchy_tokenizer: {
            type: 'path_hierarchy',
            replacement: '/',
            delimiter: '/',
          },
        },
      },
    },
  },
}
