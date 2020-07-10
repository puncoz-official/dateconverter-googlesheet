'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Config = {
    maxBSYear: 2100,
    minBSYear: 1970,
    outputSeparator: "-",
    bsMonthTotalDaysCount: [
        [30, 31],
        [31, 32],
        [31, 32],
        [31, 32],
        [31, 32],
        [30, 31],
        [29, 30],
        [29, 30],
        [29, 30],
        [29, 30],
        [29, 30],
        [30, 31],
    ],
    monthReferences: [
        [0, 1, 1, 22, 1, 3, 1, 1, 1, 3, 1, 22, 1, 3, 1, 3, 1, 22, 1, 3, 1, 19, 1, 3, 1, 1, 3, 1, 2, 2, 1, 3, 1],
        [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            3,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            1,
            2,
        ],
        [
            0,
            1,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            1,
            2,
        ],
        [
            1,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            1,
            2,
        ],
        [59, 1, 26, 1, 28, 1, 2, 1, 12],
        [
            0,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            5,
            1,
            1,
            2,
            2,
            1,
            3,
            1,
            2,
            1,
            2,
        ],
        [0, 12, 1, 3, 1, 3, 1, 5, 1, 11, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 18, 1, 3, 1, 3, 1, 27, 1, 2],
        [
            1,
            2,
            2,
            2,
            2,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            3,
            1,
            3,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            2,
            2,
            2,
            15,
            2,
            4,
        ],
        [
            0,
            1,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            3,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            15,
            2,
            4,
        ],
        [
            1,
            1,
            3,
            1,
            3,
            1,
            14,
            1,
            3,
            1,
            1,
            1,
            3,
            1,
            14,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            18,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            14,
            1,
            3,
            15,
            1,
            2,
            1,
            1,
        ],
        [
            0,
            1,
            1,
            3,
            1,
            3,
            1,
            10,
            1,
            3,
            1,
            3,
            1,
            1,
            1,
            3,
            1,
            3,
            1,
            10,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            14,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            10,
            1,
            20,
            1,
            1,
            1,
        ],
        [
            1,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            3,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            3,
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            1,
            3,
            1,
            3,
            1,
            20,
            3,
        ],
    ],
    referenceDate: {
        AD: "1913-03-13",
        BS: "1970-01-01",
    },
};

var Validator = /** @class */ (function () {
    function Validator() {
    }
    Validator.dateType = function (type) {
        if (!["BS", "AD"].includes(type)) {
            throw new TypeError("Invalid date type. Only 'AD' or 'BS' type supported.");
        }
        return true;
    };
    Validator.adYear = function (year) {
        var minAdYear = Config.minBSYear - 57;
        var maxAdYear = Config.maxBSYear - 57;
        if (year < minAdYear || year > maxAdYear) {
            throw new RangeError("AD year should be in range of " + minAdYear + " to " + maxAdYear);
        }
    };
    Validator.adMonth = function (month) {
        if (month < 1 || month > 12) {
            throw new RangeError("AD month should be in range of 1 to 12");
        }
    };
    Validator.adDay = function (day) {
        if (day < 1 || day > 31) {
            throw new RangeError("AD day should be in range of 1 to 31");
        }
    };
    Validator.bsYear = function (year) {
        var midBsYear = Config.minBSYear;
        var maxBsYear = Config.maxBSYear;
        if (year < midBsYear || year > maxBsYear) {
            throw new RangeError("BS year should be in range of " + midBsYear + " to " + maxBsYear);
        }
    };
    Validator.bsMonth = function (month) {
        if (month < 1 || month > 12) {
            throw new RangeError("BS month should be in range of 1 to 12");
        }
    };
    Validator.bsDay = function (day) {
        if (day < 1 || day > 32) {
            throw new RangeError("BS day should be in range of 1 to 32");
        }
    };
    return Validator;
}());

var BikramSambat = /** @class */ (function () {
    function BikramSambat(date, type) {
        if (type === void 0) { type = "AD"; }
        this.dateType = "AD";
        this.date = { year: 0, month: 0, day: 0 };
        if (date) {
            this.setDate(date, type);
        }
        else {
            this.setDate(new Date());
        }
    }
    BikramSambat.prototype.setDate = function (date, type) {
        if (type === void 0) { type = "AD"; }
        Validator.dateType(type);
        if (type === "BS") {
            if (typeof date !== "string") {
                throw new TypeError("BS date should be 'string' type.");
            }
            this.dateType = "BS";
            this.date = this.splitBsDate(date);
            return this;
        }
        this.dateType = "AD";
        this.date = this.splitAdDate(date);
        return this;
    };
    BikramSambat.prototype.toAD = function () {
        if (this.dateType === "AD") {
            return this.format(this.date);
        }
        var totalDaysSince = this.totalDaysSince();
        var _a = this.splitDate(Config.referenceDate.AD), year = _a.year, month = _a.month, day = _a.day;
        var adDate = new Date(year, month, day - 1);
        adDate.setDate(adDate.getDate() + totalDaysSince);
        return this.format(this.splitAdDate(adDate));
    };
    BikramSambat.prototype.toBS = function () {
        if (this.dateType === "BS") {
            return this.format(this.date);
        }
        var _a = this.date, adYear = _a.year, adMonth = _a.month, adDay = _a.day;
        var bsYear = adYear + 57;
        var bsMonth = (adMonth + 9) % 12 || 12;
        var bsDay = 1;
        if (adMonth < 4) {
            bsYear -= 1;
        }
        else if (adMonth === 4) {
            var bsNewYearAdDate = new BikramSambat(this.format({ year: bsYear, month: 1, day: 1 }), "BS").toAD();
            if (adDay < new Date(bsNewYearAdDate).getDate()) {
                bsYear -= 1;
            }
        }
        var bsFirstDayOfMonthAdDate = new Date(new BikramSambat(this.format({ year: bsYear, month: bsMonth, day: 1 }), "BS").toAD());
        if (adDay >= 1 && adDay < bsFirstDayOfMonthAdDate.getDate()) {
            bsMonth = bsMonth !== 1 ? bsMonth - 1 : 12;
            var daysInBSMonth = this.daysInBsMonth(bsYear, bsMonth);
            bsDay = daysInBSMonth - (bsFirstDayOfMonthAdDate.getDate() - adDay) + 1;
        }
        else {
            bsDay = adDay - bsFirstDayOfMonthAdDate.getDate() + 1;
        }
        return this.format({ year: bsYear, month: bsMonth, day: bsDay });
    };
    /**
     * Calculate total number of days since minimum reference date
     */
    BikramSambat.prototype.totalDaysSince = function () {
        var _a = this.date, bsYear = _a.year, bsMonth = _a.month, bsDay = _a.day;
        var totalDays = 0;
        var diffInYears = bsYear - Config.minBSYear;
        for (var i = 1; i <= 12; i++) {
            totalDays += this.totalMonthDaysSince(i, i < bsMonth ? diffInYears + 1 : diffInYears);
        }
        if (bsYear > 2085 && bsYear < 2088) {
            totalDays += bsDay - 2;
        }
        else if (bsYear === 2085 && bsMonth > 5) {
            totalDays += bsDay - 2;
        }
        else if (bsYear > 2088) {
            totalDays += bsDay - 4;
        }
        else if (bsYear === 2088 && bsMonth > 5) {
            totalDays += bsDay - 4;
        }
        else {
            totalDays += bsDay;
        }
        return totalDays;
    };
    /**
     * Total number of bsMonth days since minimum reference date
     * @param bsMonth
     * @param diffInYear
     */
    BikramSambat.prototype.totalMonthDaysSince = function (bsMonth, diffInYear) {
        if (diffInYear === 0) {
            return 0;
        }
        var monthData = Config.monthReferences[bsMonth - 1];
        var calculated = monthData.slice(0).reduce(function (total, monthDataItem, monthIndex, arr) {
            if (monthDataItem === 0) {
                return total;
            }
            var monthTotalDaysCountIndex = monthIndex % 2;
            if (diffInYear > total.year + monthDataItem) {
                total.year += monthDataItem;
                total.month += Config.bsMonthTotalDaysCount[bsMonth - 1][monthTotalDaysCountIndex] * monthDataItem;
            }
            else {
                total.month +=
                    Config.bsMonthTotalDaysCount[bsMonth - 1][monthTotalDaysCountIndex] * (diffInYear - total.year);
                total.year = diffInYear - total.year;
                arr.splice(1); // break; dont forget slice(0) before reducing https://stackoverflow.com/questions/36144406/how-to-break-on-reduce-method
            }
            return total;
        }, { month: 0, year: 0 });
        return calculated.month;
    };
    // noinspection JSMethodCanBeStatic
    /**
     * Returns total number of days in bsMonth for bsYear
     * @param bsYear
     * @param bsMonth
     */
    BikramSambat.prototype.daysInBsMonth = function (bsYear, bsMonth) {
        var totalYears = bsYear + 1 - Config.minBSYear;
        var monthData = Config.monthReferences[bsMonth - 1];
        var yearCount = 0;
        for (var i = 0; i < monthData.length; i++) {
            if (monthData[i] === 0) {
                continue;
            }
            var monthTotalDaysCountIndex = i % 2;
            yearCount += monthData[i];
            if (totalYears <= yearCount) {
                if ((bsYear === 2085 && bsMonth === 5) || (bsYear === 2088 && bsMonth === 5)) {
                    return Config.bsMonthTotalDaysCount[bsMonth - 1][monthTotalDaysCountIndex] - 2;
                }
                else {
                    return Config.bsMonthTotalDaysCount[bsMonth - 1][monthTotalDaysCountIndex];
                }
            }
        }
        return 0;
    };
    BikramSambat.prototype.splitDate = function (date) {
        // tslint:disable-next-line:radix
        var _a = date
            .replace(/\//g, "-")
            .split("-")
            .map(function (d) { return Math.floor(Number(d)); }), year = _a[0], month = _a[1], day = _a[2];
        return { year: year, month: month, day: day };
    };
    // noinspection JSMethodCanBeStatic
    BikramSambat.prototype.splitAdDate = function (date) {
        if (typeof date === "string") {
            date = new Date(date);
        }
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        Validator.adYear(year);
        Validator.adMonth(month);
        Validator.adDay(day);
        return { year: year, month: month, day: day };
    };
    BikramSambat.prototype.splitBsDate = function (date) {
        var _a = this.splitDate(date), year = _a.year, month = _a.month, day = _a.day;
        Validator.bsYear(year);
        Validator.bsMonth(month);
        Validator.bsDay(day);
        return { year: year, month: month, day: day };
    };
    BikramSambat.prototype.format = function (date) {
        var separator = Config.outputSeparator;
        var year = date.year, month = date.month, day = date.day;
        return "" + year + separator + this.zeroPad(month) + separator + this.zeroPad(day);
    };
    // noinspection JSMethodCanBeStatic
    BikramSambat.prototype.zeroPad = function (x) {
        return x > 9 ? "" + x : "0" + x;
    };
    return BikramSambat;
}());

var BSToAD = function (date) {
    return new BikramSambat().setDate(date, "BS").toAD();
};
var ADToBS = function (date) {
    return new BikramSambat().setDate(date, "AD").toBS();
};

exports.ADToBS = ADToBS;
exports.BSToAD = BSToAD;
exports.default = BikramSambat;
//# sourceMappingURL=index.js.map
