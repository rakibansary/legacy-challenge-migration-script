const _ = require('lodash')

const V5_TRACK_IDS = {
  DATA_SCIENCE: 'c0f5d461-8219-4c14-878a-c3a3f356466d',
  DESIGN: '5fa04185-041f-49a6-bfd1-fe82533cd6c8',
  DEVELOPMENT: '9b6fc876-f4d9-4ccb-9dfd-419247628825',
  QA: '36e6a8d0-7e1e-4608-a673-64279d99c115'
}

const V5_TRACK_NAMES_TO_IDS = {
  DESIGN: V5_TRACK_IDS.DESIGN,
  DEVELOPMENT: V5_TRACK_IDS.DEVELOPMENT,
  'DATA SCIENCE': V5_TRACK_IDS.DATA_SCIENCE,
  'QUALITY ASSURANCE': V5_TRACK_IDS.QA
}

const V5_TYPE_IDS = {
  CHALLENGE: '927abff4-7af9-4145-8ba1-577c16e64e2e',
  TASK: 'ecd58c69-238f-43a4-a4bb-d172719b9f31',
  FIRST_2_FINISH: 'dc876fa4-ef2d-4eee-b701-b555fcc6544c'
}

const V5_TYPE_NAMES_TO_IDS = {
  CHALLENGE: V5_TYPE_IDS.CHALLENGE,
  FIRST2FINISH: V5_TYPE_IDS.FIRST_2_FINISH,
  TASK: V5_TYPE_IDS.TASK
}

const V4_TRACKS = {
  DEVELOP: 'DEVELOP',
  DATA_SCIENCE: 'DATA_SCIENCE',
  DESIGN: 'DESIGN'
}

const V4_SUBTRACKS = {
  MARATHON_MATCH: 'MARATHON_MATCH',
  DESIGN_FIRST_2_FINISH: 'DESIGN_FIRST_2_FINISH',
  APPLICATION_FRONT_END_DESIGN: 'APPLICATION_FRONT_END_DESIGN',
  WEB_DESIGNS: 'WEB_DESIGNS',
  IDEA_GENERATION: 'IDEA_GENERATION',
  WIDGET_OR_MOBILE_SCREEN_DESIGN: 'WIDGET_OR_MOBILE_SCREEN_DESIGN',
  WIREFRAMES: 'WIREFRAMES',
  PRINT_OR_PRESENTATION: 'PRINT_OR_PRESENTATION',
  STUDIO_OTHER: 'STUDIO_OTHER',
  BANNERS_OR_ICONS: 'BANNERS_OR_ICONS',
  LOGO_DESIGN: 'LOGO_DESIGN',
  FRONT_END_FLASH: 'FRONT_END_FLASH',
  DEVELOPMENT: 'DEVELOPMENT',
  FIRST_2_FINISH: 'FIRST_2_FINISH',
  CODE: 'CODE',
  COPILOT_POSTING: 'COPILOT_POSTING',
  BUG_HUNT: 'BUG_HUNT',
  DEVELOP_MARATHON_MATCH: 'DEVELOP_MARATHON_MATCH',
  TEST_SUITES: 'TEST_SUITES',
  UI_PROTOTYPE_COMPETITION: 'UI_PROTOTYPE_COMPETITION',
  ARCHITECTURE: 'ARCHITECTURE',
  ASSEMBLY_COMPETITION: 'ASSEMBLY_COMPETITION',
  SPECIFICATION: 'SPECIFICATION',
  TEST_SCENARIOS: 'TEST_SCENARIOS',
  CONCEPTUALIZATION: 'CONCEPTUALIZATION',
  CONTENT_CREATION: 'CONTENT_CREATION',
  DESIGN: 'DESIGN',
  RIA_BUILD_COMPETITION: 'RIA_BUILD_COMPETITION',
  RIA_COMPONENT_COMPETITION: 'RIA_COMPONENT_COMPETITION',
  REPORTING: 'REPORTING',
  PROCESS: 'PROCESS',
  LEGACY: 'Legacy',
  TESTING_COMPETITION: 'TESTING_COMPETITION',
  DEPLOYMENT: 'DEPLOYMENT',
  COMPONENT_PRODUCTION: 'COMPONENT_PRODUCTION',
  SECURITY: 'SECURITY'
}

const MARATHON_MATCH_TAG = 'Marathon Match'

// Helper methodS to simply avoid writing too much
const buildV4Data = (track, subTrack, isTask) => ({ track, subTrack, isTask })
const buildV5Data = (trackId, typeId, track, type, tags) => ({ trackId, typeId, track, type, tags })

module.exports = {
  V5_TO_V4: {
    [V5_TRACK_IDS.DATA_SCIENCE]: {
      [V5_TYPE_IDS.CHALLENGE]: (tags) => {
        if (_.includes(tags, MARATHON_MATCH_TAG)) {
          return buildV4Data(V4_TRACKS.DATA_SCIENCE, V4_SUBTRACKS.MARATHON_MATCH, false)
        } else {
          return buildV4Data(V4_TRACKS.DEVELOP, V4_SUBTRACKS.CODE, false)
        }
      },
      [V5_TYPE_IDS.FIRST_2_FINISH]: () => buildV4Data(V4_TRACKS.DEVELOP, V4_SUBTRACKS.FIRST_2_FINISH, false),
      [V5_TYPE_IDS.TASK]: () => buildV4Data(V4_TRACKS.DEVELOP, V4_SUBTRACKS.FIRST_2_FINISH, true)
    },
    [V5_TRACK_IDS.DESIGN]: {
      [V5_TYPE_IDS.CHALLENGE]: () => buildV4Data(V4_TRACKS.DESIGN, V4_SUBTRACKS.WEB_DESIGNS, false),
      [V5_TYPE_IDS.FIRST_2_FINISH]: () => buildV4Data(V4_TRACKS.DESIGN, V4_SUBTRACKS.DESIGN_FIRST_2_FINISH, false),
      [V5_TYPE_IDS.TASK]: () => buildV4Data(V4_TRACKS.DESIGN, V4_SUBTRACKS.DESIGN_FIRST_2_FINISH, true)
    },
    [V5_TRACK_IDS.DEVELOPMENT]: {
      [V5_TYPE_IDS.CHALLENGE]: () => buildV4Data(V4_TRACKS.DEVELOP, V4_SUBTRACKS.CODE, false),
      [V5_TYPE_IDS.FIRST_2_FINISH]: () => buildV4Data(V4_TRACKS.DEVELOP, V4_SUBTRACKS.FIRST_2_FINISH, false),
      [V5_TYPE_IDS.TASK]: () => buildV4Data(V4_TRACKS.DEVELOP, V4_SUBTRACKS.FIRST_2_FINISH, true)
    },
    [V5_TRACK_IDS.QA]: {
      [V5_TYPE_IDS.CHALLENGE]: () => buildV4Data(V4_TRACKS.DEVELOP, V4_SUBTRACKS.TEST_SUITES, false),
      [V5_TYPE_IDS.FIRST_2_FINISH]: () => buildV4Data(V4_TRACKS.DEVELOP, V4_SUBTRACKS.FIRST_2_FINISH, false),
      [V5_TYPE_IDS.TASK]: () => buildV4Data(V4_TRACKS.DEVELOP, V4_SUBTRACKS.FIRST_2_FINISH, true)
    }
  },
  V4_TO_V5: {
    // TODO: Implement this
  },
  V5_TRACK_NAMES_TO_IDS,
  V5_TYPE_NAMES_TO_IDS
}
