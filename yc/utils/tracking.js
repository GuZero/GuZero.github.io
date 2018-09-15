var app = getApp();
var trackings = [];
var current_user_tracking = null;
var current_partner_tracking = null;
var current_tracking = null;

function loadStoreTrackings(){
    var store_tracking = wx.getStorageSync('tracking') || null;
    if (!store_tracking){
        current_tracking = '';
        return;
    }

    if ((new Date()).getTime() - store_tracking.ts > 6 * 60 * 60 * 1000){
        current_tracking = '';
        return;
    }

    current_tracking = store_tracking.tracking || '';
}

function storeTrackings(){
    let strackings = [];
    for (var i = 0; i < trackings.length; i++) {
        if (trackings[i].channel) {
            strackings.push(trackings[i]._id);
        }
    }
    current_tracking = strackings.join(":");
    wx.setStorageSync('tracking', { "tracking": current_tracking, "ts": (new Date()).getTime()})
}

function mergeTrackings(tracking, mtradings){
    mtradings = mtradings || trackings;

    if (tracking.channel && tracking.channel.merge_type == "append") {
        let result = [];
        for (var i = 0; i < mtradings.length; i++) {
            if (mtradings[i].channel) {
                result.push(mtradings[i]);
            }
        }
        result.push(tracking);
        return result;
    }
    
    let result = [];
    for (var i = 0; i < mtradings.length; i++) {
        if (mtradings[i].channel && tracking.channel && mtradings[i].channel._id != tracking.channel._id) {
            result.push(mtradings[i]);
        }
    }
    result.push(tracking);
    return result;
}

function loadTrackings(tracking, load_user_tracking, callback){
    if (!tracking && current_tracking !== null){
        tracking = current_tracking;
    }

    app.ajax("GET", "/tracking?tracking=" + tracking + "&load_user_tracking=" + (load_user_tracking ? '1':'0'), null, (data) => {
        if (data.statusCode = 200) {
            if (data.data.status == 0) {
                trackings = data.data.data.trackings;
                current_user_tracking = data.data.data.user_tracking;
                current_partner_tracking = data.data.data.partner_tracking;
                storeTrackings();
            }
        }
        callback && callback();
    }, () => {
        callback && callback();
    });
}

function initAndUserTrackings(callback){
    if (current_tracking === null) {
        loadStoreTrackings();
        return loadTrackings(current_tracking, true, callback);
    }
    return callback();
}

function loadAndUserTrackings(tracking, callback){
    trackings = [];
    loadTrackings(tracking, true, callback);
}

function getTracking(){
    if (current_tracking === null){
        loadStoreTrackings();
    }
    return current_tracking;
}

function genTracking() {
    let stracking = [];
    for (var i = 0; i < trackings.length; i++) {
        if (trackings[i].channel) {
            stracking.push(trackings[i]._id);
        }
    }
    return stracking.join(":");
}

function genAndUserTracking() {
    let mtrackings = trackings;
    if (current_user_tracking){
        mtrackings = mergeTrackings(current_user_tracking, mtrackings);
        if(current_partner_tracking){
            mtrackings = mergeTrackings(current_partner_tracking, mtrackings);
        }
    }

    let stracking = [];
    for (var i = 0; i < mtrackings.length; i++) {
        if (mtrackings[i].channel) {
            stracking.push(mtrackings[i]._id);
        }
    }
    return stracking.join(":");
}

function trackingView(args){
    args = args || {};

    app.logistic("view", {
        cvm: args.current_view || app.getCurrentPageUrlWithArgs(),
        svw: args.source_view || app.getCurrentPageUrlWithArgs(1),
        stm: args.source_time || 0,
        tag: args.tag || "",
        tacking: getTracking() || "",
    });
}

module.exports = {
    loadTrackings: loadTrackings,
    initAndUserTrackings: initAndUserTrackings,
    loadAndUserTrackings: loadAndUserTrackings,
    getTracking: getTracking,
    genTracking: genTracking,
    genAndUserTracking: genAndUserTracking,
    trackingView: trackingView
}