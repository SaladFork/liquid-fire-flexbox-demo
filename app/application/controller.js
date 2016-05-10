import Ember from 'ember';

const {
    computed
} = Ember;

export default Ember.Controller.extend({
    data: computed({
        get() {
            const dataArray = [];
            for (let i = 1; i <= 100; i++) {
                dataArray.push(i);
            }
            return dataArray;
        }
    }),

    filter: '',
    filteredData: computed('data.[]', 'filter', {
        get() {
            const filter = this.get('filter');
            return this.get('data').filter((datum) => {
                return String(datum).indexOf(String(filter)) > -1;
            });
        }
    }),

    actions: {
        filterTo(num) {
            this.set('filter', num);
        }
    }
});
