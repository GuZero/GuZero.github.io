module.exports = {
    activated() {
        _util.changePageTitle(this.pageTitle || '');
        $(document.body).addClass(this.bodyBg || '');
    },
    mounted() {
        $(document.body).addClass(this.bodyBg || '');
    },
    beforeRouteLeave(to, from, next) {
        $(document.body).removeClass(this.bodyBg || '');
        next();
    }
};