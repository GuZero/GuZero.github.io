module.exports = {
    activated() {
        _util.changePageTitle(this.pageTitle || '');
        document.body.addClassName(this.bodyBg || '');
    },
    mounted() {
        document.body.addClassName(this.bodyBg || '');
    },
    beforeRouteLeave(to, from, next) {
        document.body.removeClassName(this.bodyBg || '');
        next();
    }
}