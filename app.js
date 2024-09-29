const App = Vue.createApp({
    data() {
        return {
            firstName: 'Mario',
            user: {
                firstName: 'Mario',
                lastName: 'Rossi'
            }
        };
    },
    watch: {
        firstName(newVal, oldVal) {
            console.log(`Il nome è cambiato da ${oldVal} a ${newVal}`);
        },
        user: {
            handler(newVal, oldVal) {
                console.log('Il profilo utente è cambiato');
            },
            deep: true
        }
    }
}).mount("#app");

