export default {
    addevent: ({ commit }, param) => commit('ADDEVENT', { items: param }),
    eventdone: ({ commit }, param) => commit('EVENTDONE', { id: param }),
    eventtodo: ({ commit }, param) => commit('EVENTTODO', { id: param }),
    eventcancel: ({ commit }, param) => commit('EVENTCANCEL', { id: param }),
    clearevent: ({ commit }, param) => commit('CLEAREVENT'),
    delevent: ({ commit }, param) => commit('DELEVENT', { id: param }),
    editevent: ({ commit }, param) => commit('EDITEVENT', { id: param }),
    uploadevent: ({ commit }, param) => commit('UPLOADEVENT', { id: param }),
}