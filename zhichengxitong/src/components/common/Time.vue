<div class="fh-d-picker"> <input type="text" @focus="show=true" @change="show=!true" v-model="displayTime" readonly /> <span :class="{'calender-close':show ,'calender-open':!show}" @click="show=!show"></span>
    <div class="tp" v-show="show">
        <ul> <span v-text="hourType"></span>
            <li v-for="(key,h) in hours" v-text="h" :class="{stripe:key%2===0 ,tpActive: hour=== h}" @click="tPicker('hour', h)"></li>
        </ul>
        <ul> <span v-text="minuteType"></span>
            <li v-for="(key,m) in minutes" v-text="m" :class="{stripe:key%2===0,tpActive: minute=== m}" @click.stop="tPicker('minute', m)"></li>
        </ul>
        <ul v-if="secondType"> <span v-text="secondType"></span>
            <li v-for="(key,s) in seconds" v-text="s" :class="{stripe:key%2===0,tpActive: second=== s}" @click.stop="tPicker('second', s)"></li>
        </ul>
        <ul v-if="apmType"> <span v-text="apmType"></span>
            <li v-for="(key,a) in apms" v-text="a" :class="{stripe:key%2===0,tpActive: apm=== a}" @click.stop="tPicker('apm', a)"></li>
        </ul>
    </div>
</div>
<script>
    export default {
        props: ['value', 'hideClearButton', 'format', 'minuteInterval', 'secondInterval'],
        data() {
            return {
                show: false,
                hours: [],
                minutes: [],
                seconds: [],
                apms: [],
                muteWatch: false,
                hourType: 'HH',
                minuteType: 'mm',
                secondType: '',
                apmType: '',
                hour: '',
                minute: '',
                second: '',
                apm: '',
                fullValues: undefined
            }
        },
        computed: {
            displayTime() {
                let formatString = String((this.format || 'HH:mm'));
                if (this.hour) {
                    formatString = formatString.replace(new RegExp(this.hourType, 'g'), this.hour)
                }
                if (this.minute) {
                    formatString = formatString.replace(new RegExp(this.minuteType, 'g'), this.minute)
                }
                if (this.second && this.secondType) {
                    formatString = formatString.replace(new RegExp(this.secondType, 'g'), this.second)
                }
                if (this.apm && this.apmType) {
                    formatString = formatString.replace(new RegExp(this.apmType, 'g'), this.apm)
                }
                return formatString;
            },
        },
        watch: {
            'format': 'renderFormat',
            minuteInterval(newInteval) {
                this.renderList('minute', newInteval)
            },
            secondInterval(newInteval) {
                this.renderList('second', newInteval)
            },
            'value': 'readValues',
            'displayTime': 'fillValues'
        },
        methods: {
            formatValue(type, i) {
                switch (type) {
                    case 'H':
                    case 'm':
                    case 's':
                        return String(i);
                    case 'HH':
                    case 'mm':
                    case 'ss':
                        return i < 10 ? `0${i}` : String(i);
                    case 'h':
                    case 'k':
                        return String(i + 1);
                    case 'hh':
                    case 'kk':
                        return (i + 1) < 10 ? `0${i + 1}` : String(i + 1);
                    default:
                        return false;
                }
            },
            checkAcceptingType(validValues, formatString, fallbackValue) {
                if (!validValues || !formatString || !formatString.length) {
                    return ''
                }
                for (let i = 0; i < validValues.length; i++) {
                    if (formatString.indexOf(validValues[i]) > -1) {
                        return validValues[i]
                    }
                }
                return fallbackValue || '';
            },
            renderFormat(newFormat) {
                newFormat = newFormat || this.format
                if (!newFormat || !newFormat.length) {
                    newFormat = 'HH:mm';
                }
                this.hourType = this.checkAcceptingType(CONFIG.HOUR_TOKENS, newFormat, 'HH');
                this.minuteType = this.checkAcceptingType(CONFIG.MINUTE_TOKENS, newFormat, 'mm');
                this.secondType = this.checkAcceptingType(CONFIG.SECOND_TOKENS, newFormat);
                this.apmType = this.checkAcceptingType(CONFIG.APM_TOKENS, newFormat);
                this.renderHoursList();
                this.renderList('minute');
                if (this.secondType) {
                    this.renderList('second');
                }
                if (this.apmType) {
                    this.renderApmList();
                }
                const self = this this.$nextTick(() => {
                    self.readValues();
                })
            },
            renderHoursList() {
                const hoursCount = (this.hourType === 'h' || this.hourType === 'hh') ? 12 : 24 this.hours = [];
                for (let i = 0; i < hoursCount; i++) {
                    this.hours.push(this.formatValue(this.hourType, i));
                }
            },
            renderList(listType, interval) {
                if (listType === 'second') {
                    interval = interval || this.secondInterval;
                } else if (listType === 'minute') {
                    interval = interval || this.minuteInterval;
                } else {
                    return
                }
                if (interval === 0) {
                    interval = 60;
                } else if (interval > 60) {
                    window.console.warn('`' + listType + '-interval` should be less than 60. Current value is', interval);
                    interval = 1;
                } else if (interval < 1) {
                    window.console.warn('`' + listType + '-interval` should be NO less than 1. Current value is', interval)
                    interval = 1;
                } else if (!interval) {
                    interval = 1;
                }
                if (listType === 'minute') {
                    this.minutes = [];
                } else {
                    this.seconds = [];
                }
                for (let i = 0; i < 60; i += interval) {
                    if (listType === 'minute') {
                        this.minutes.push(this.formatValue(this.minuteType, i));
                    } else {
                        this.seconds.push(this.formatValue(this.secondType, i));
                    }
                }
            },
            renderApmList() {
                this.apms = [];
                if (!this.apmType) {
                    return
                }
                this.apms = this.apmType === 'A' ? ['AM', 'PM'] : ['am', 'pm'];
            },
            readValues() {
                if (!this.value || this.muteWatch) {
                    return
                }
                const timeValue = JSON.parse(JSON.stringify(this.value || {}));
                const values = Object.keys(timeValue);
                if (values.length === 0) {
                    return
                };
                if (values.indexOf(this.hourType) > -1) {
                    this.hour = timeValue[this.hourType];
                }
                if (values.indexOf(this.minuteType) > -1) {
                    this.minute = timeValue[this.minuteType];
                }
                if (values.indexOf(this.secondType) > -1) {
                    this.second = timeValue[this.secondType];
                } else {
                    this.second = 0;
                }
                if (values.indexOf(this.apmType) > -1) {
                    this.apm = timeValue[this.apmType];
                }
                this.fillValues()
            },
            fillValues() {
                let fullValues = {}
                const baseHour = this.hour;
                const baseHourType = this.hourType;
                const hourValue = baseHour || baseHour === 0 ? Number(baseHour) : '';
                const baseOnTwelveHours = this.isTwelveHours(baseHourType);
                const apmValue = (baseOnTwelveHours && this.apm) ? String(this.apm).toLowerCase() : false; 
                CONFIG.HOUR_TOKENS.forEach((token) => {
                    if (token === baseHourType) {
                        fullValues[token] = baseHour;
                        return
                    }
                    let value
                    let apm
                    switch (token) {
                        case 'H':
                        case 'HH':
                            if (!String(hourValue).length) {
                                fullValues[token] = '';
                                return
                            } else if (baseOnTwelveHours) {
                                if (apmValue === 'pm') {
                                    value = hourValue < 12 ? hourValue + 12 : hourValue;
                                } else {
                                    value = hourValue % 12;
                                }
                            } else {
                                value = hourValue % 24;
                            }
                            fullValues[token] = (token === 'HH' && value < 10) ? `0${value}` : String(value) break
                        case 'k':
                        case 'kk':
                            if (!String(hourValue).length) {
                                fullValues[token] = ''
                                return
                            } else if (baseOnTwelveHours) {
                                if (apmValue === 'pm') {
                                    value = hourValue < 12 ? hourValue + 12 : hourValue
                                } else {
                                    value = hourValue === 12 ? 24 : hourValue
                                }
                            } else {
                                value = hourValue === 0 ? 24 : hourValue
                            }
                            fullValues[token] = (token === 'kk' && value < 10) ? `0${value}` : String(value) break
                        case 'h':
                        case 'hh':
                            if (apmValue) {
                                value = hourValue apm = apmValue || 'am'
                            } else {
                                if (!String(hourValue).length) {
                                    fullValues[token] = ''
                                    fullValues.a = ''
                                    fullValues.A = ''
                                    return
                                } else if (hourValue > 11) {
                                    apm = 'pm'
                                    value = hourValue === 12 ? 12 : hourValue % 12
                                } else {
                                    if (baseOnTwelveHours) {
                                        apm = ''
                                    } else {
                                        apm = 'am'
                                    }
                                    value = hourValue % 12 === 0 ? 12 : hourValue
                                }
                            }
                            fullValues[token] = (token === 'hh' && value < 10) ? `0${value}` : String(value);
                            fullValues.a = apm;
                            fullValues.A = apm.toUpperCase();
                            break
                    }
                }) if (this.minute || this.minute === 0) {
                    const minuteValue = Number(this.minute); 
                    fullValues.m = String(minuteValue); 
                    fullValues.mm = minuteValue < 10 ? `0${minuteValue}` : String(minuteValue);
                } else {
                    fullValues.m = '';
                    fullValues.mm = '';
                }
                if (this.second || this.second === 0) {
                    const secondValue = Number(this.second);
                    fullValues.s = String(secondValue);
                    fullValues.ss = secondValue < 10 ? `0${secondValue}` : String(secondValue);
                } else {
                    fullValues.s = '';
                    fullValues.ss = '';
                }
                this.fullValues = fullValues;
                this.updateTimeValue(fullValues);
                this.$emit('change', {
                    data: fullValues
                });
            },
            updateTimeValue(fullValues) {
                this.muteWatch = true;
                const self = this;
                const baseTimeValue = JSON.parse(JSON.stringify(this.value || {})) let timeValue = {};
                Object.keys(baseTimeValue).forEach((key) => {
                    timeValue[key] = fullValues[key];
                }) this.$emit('input', timeValue) this.$nextTick(() => {
                    self.muteWatch = false;
                })
            },
            isTwelveHours(token) {
                return token === 'h' || token === 'hh';
            },
            tPicker(type, value) {
                this[type] = String(value);
            }
        },
        mounted() {
            this.renderFormat()
        },
    }

</script>
