var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "       15",
        "ok": "        0",
        "ko": "       15"
    },
    "minResponseTime": {
        "total": "        0",
        "ok": "        -",
        "ko": "        0"
    },
    "maxResponseTime": {
        "total": "      149",
        "ok": "        -",
        "ko": "      149"
    },
    "meanResponseTime": {
        "total": "       60",
        "ok": "        -",
        "ko": "       60"
    },
    "standardDeviation": {
        "total": "       73",
        "ok": "        -",
        "ko": "       73"
    },
    "percentiles1": {
        "total": "        1",
        "ok": "        -",
        "ko": "        1"
    },
    "percentiles2": {
        "total": "      148",
        "ok": "        -",
        "ko": "      148"
    },
    "percentiles3": {
        "total": "      149",
        "ok": "        -",
        "ko": "      149"
    },
    "percentiles4": {
        "total": "      149",
        "ok": "        -",
        "ko": "      149"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 15,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "     0.94",
        "ok": "        -",
        "ko": "     0.94"
    }
},
contents: {
"req_create-transact-175626984": {
        type: "REQUEST",
        name: "Create transaction: flavia, test, 3, EUR",
path: "Create transaction: flavia, test, 3, EUR",
pathFormatted: "req_create-transact-175626984",
stats: {
    "name": "Create transaction: flavia, test, 3, EUR",
    "numberOfRequests": {
        "total": "       15",
        "ok": "        0",
        "ko": "       15"
    },
    "minResponseTime": {
        "total": "        0",
        "ok": "        -",
        "ko": "        0"
    },
    "maxResponseTime": {
        "total": "      149",
        "ok": "        -",
        "ko": "      149"
    },
    "meanResponseTime": {
        "total": "       60",
        "ok": "        -",
        "ko": "       60"
    },
    "standardDeviation": {
        "total": "       73",
        "ok": "        -",
        "ko": "       73"
    },
    "percentiles1": {
        "total": "        1",
        "ok": "        -",
        "ko": "        1"
    },
    "percentiles2": {
        "total": "      148",
        "ok": "        -",
        "ko": "      148"
    },
    "percentiles3": {
        "total": "      149",
        "ok": "        -",
        "ko": "      149"
    },
    "percentiles4": {
        "total": "      149",
        "ok": "        -",
        "ko": "      149"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 15,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "     0.94",
        "ok": "        -",
        "ko": "     0.94"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
