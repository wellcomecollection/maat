export default {
  mappings: {
    _doc: {
      dynamic: 'strict',
      _meta: {
        'model.versions.3669': '723e8282e9e4532c08f374f82eaa1e3300c9419e',
        'model.versions.3593': '87f87a424c56ab3dbfadf25a2251bb9e648436ae',
        'model.versions.3579': '27395ee51eab7684996279ecc7575844df5d84a1',
        'model.versions.3599': '12d1d0d85047a7168a0d75055dba2cab1601ee06',
      },
      properties: {
        locations: {
          dynamic: 'false',
          properties: {
            license: {
              properties: {
                id: {
                  type: 'keyword',
                },
              },
            },
          },
        },
        modifiedTime: {
          type: 'date',
        },
        source: {
          properties: {
            canonicalWork: {
              dynamic: 'false',
              properties: {
                data: {
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
                        label: {
                          type: 'text',
                          fields: {
                            keyword: {
                              type: 'keyword',
                            },
                          },
                          analyzer: 'asciifolding_analyzer',
                        },
                        path: {
                          type: 'text',
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
                        shingles: {
                          type: 'text',
                          analyzer: 'shingle_asciifolding_analyzer',
                        },
                      },
                    },
                    edition: {
                      type: 'text',
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
                          },
                          analyzer: 'asciifolding_analyzer',
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
                          },
                          analyzer: 'asciifolding_analyzer',
                        },
                      },
                    },
                    notes: {
                      properties: {
                        content: {
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
                              },
                              analyzer: 'asciifolding_analyzer',
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
                              },
                              analyzer: 'asciifolding_analyzer',
                            },
                          },
                        },
                        places: {
                          properties: {
                            label: {
                              type: 'text',
                              fields: {
                                keyword: {
                                  type: 'keyword',
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
                              },
                              analyzer: 'asciifolding_analyzer',
                            },
                          },
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
                type: {
                  type: 'keyword',
                },
              },
            },
            redirectedWork: {
              dynamic: 'false',
              properties: {
                data: {
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
                        label: {
                          type: 'text',
                          fields: {
                            keyword: {
                              type: 'keyword',
                            },
                          },
                          analyzer: 'asciifolding_analyzer',
                        },
                        path: {
                          type: 'text',
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
                        shingles: {
                          type: 'text',
                          analyzer: 'shingle_asciifolding_analyzer',
                        },
                      },
                    },
                    edition: {
                      type: 'text',
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
                          },
                          analyzer: 'asciifolding_analyzer',
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
                          },
                          analyzer: 'asciifolding_analyzer',
                        },
                      },
                    },
                    notes: {
                      properties: {
                        content: {
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
                              },
                              analyzer: 'asciifolding_analyzer',
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
                              },
                              analyzer: 'asciifolding_analyzer',
                            },
                          },
                        },
                        places: {
                          properties: {
                            label: {
                              type: 'text',
                              fields: {
                                keyword: {
                                  type: 'keyword',
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
                              },
                              analyzer: 'asciifolding_analyzer',
                            },
                          },
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
                type: {
                  type: 'keyword',
                },
              },
            },
            type: {
              type: 'keyword',
            },
          },
        },
        state: {
          properties: {
            canonicalId: {
              type: 'keyword',
              normalizer: 'lowercase_normalizer',
            },
            derivedData: {
              dynamic: 'false',
              properties: {
                sourceContributorAgents: {
                  type: 'keyword',
                },
              },
            },
            inferredData: {
              properties: {
                binMinima: {
                  type: 'float',
                  index: false,
                },
                binSizes: {
                  type: 'integer',
                  index: false,
                },
                features1: {
                  type: 'dense_vector',
                  dims: 2048,
                },
                features2: {
                  type: 'dense_vector',
                  dims: 2048,
                },
                lshEncodedFeatures: {
                  type: 'keyword',
                },
                palette: {
                  type: 'keyword',
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
        version: {
          type: 'integer',
        },
      },
    },
  },
}