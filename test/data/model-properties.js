import { Features } from 'environment/environment';

export const optionalProperties = {
    aspectratio: 1.0,
    fullscreen: false,
    errorEvent: null,
    _destroyed: null,
    playOnViewable: false,
    autostartMuted: false,
    autostartFailed: false,
    nextUp: null,
    playReason: null,
    pauseReason: null,
    adModel: null,
    hideAdsControls: null,
    mediaModel: {},
    flashThrottle: null,
    androidhls: true,
    hlsjsdefault: true,
    drm: null,
    preload: 'metadata',
    withCredentials: false,
    minDvrWindow: 120,
    streamType: '',
    qualityLabel: '',
    captionLabel: '',
    captionsTrack: null,
    captionsIndex: -1,
    captionsList: [],
    customButtons: {},
    captions: {},
    containerWidth: 640,
    containerHeight: 360,
    mediaContainer: {},
    viewSetup: true,
    altText: '',
    cues: [],
    scrubbing: false,
    logo: '',
    logoWidth: 0,
    inDom: true,
    touchMode: true,
    iFrame: false,
    intersectionRatio: 1.0,
    activeTab: true,
    visibility: 1.0,
    viewable: true,
    castClicked: false,
    castState: '',
    castActive: ''
};

export const adModelProperties = {
    instreamMode: false,
    sdkplatform: null,
    mediaContext: null,
    mediaSrc: null,
    skipButton: null,
    skipMessage: null,
    skipText: null,
    skipOffset: null,
};

export const addedProperties = {
    playlistItem: {},
    provider: {},
    instream: {},
};

export default {
    id: '',
    autoPause: {
        viewability: false,
        pauseAds: false
    },
    autostart: false,
    base: '',
    controls: true,
    controlsEnabled: true,
    cues: [],
    stretching: 'uniform',
    defaultPlaybackRate: 1.0,
    displaytitle: true,
    displaydescription: true,
    displayPlaybackLabel: false,
    enableShortcuts: 'true',
    playbackRateControls: true,
    playbackRates: [1.0],
    playbackRate: 1,
    playRejected: false,
    repeat: false,
    localization: {},
    nextUpDisplay: true,
    volume: 90,
    mute: false,
    renderCaptionsNatively: true,
    width: 640,
    height: 360,
    audioMode: false,
    state: '',
    playlist: [{}],
    feedData: {},
    item: 0,
    duration: 0,
    position: 0,
    currentTime: 0,
    flashBlocked: false,
    buffer: 0,
    itemMeta: {},
    intl: {},
    language: 'en',
    castAvailable: false,
    qualityLabels: undefined,
    itemReady: false,
    liveTimeout: null,
    setupConfig: {},
    bandwidthEstimate: null,
    bitrateSelection: null,
    backgroundLoading: Features.backgroundLoading
};
