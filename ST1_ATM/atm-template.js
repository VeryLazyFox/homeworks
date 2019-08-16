const ATM = {
    isAuth: false, 
    currentUser: {},
    // all cash available in ATM
    cash: 2000,
    // all available users
    users: [
        { id: "0000", pin: "000", debet: 0, type: "admin" }, // EXTENDED
        { id: "0025", pin: "123", debet: 3000, type: "user" }
    ],
    log: [],
    // authorization
    auth(id, pin) {
        if (!id) {
            console.log("need id")
            return
        }
        if (!pin) {
            console.log("need pin")
            return
        }
        const checkUser = ATM.users.filter((number) => {
            if (number.id === id && number.pin === pin) {
                ATM.currentUser = number
                return number
            }
        });
        if (checkUser.length !== 0) {
            ATM.isAuth = true
            this.log.push(`User ${id} logged in`)
            console.log("Hello")
        }
        else console.log("Sorry, id or pin is wrong")
    },
    // check current debet
    check() {
        if (this.isAuth) {
            console.log(`You debet is ${this.currentUser.debet}`)
            this.log.push(`User ${this.currentUser.id} checked debet`)
        }
        else {
            console.log('you are not auth')
        }
    },
    // get cash - available for user only
    getCash(amount) {
        if (this.isAuth && this.currentUser.type === "user") {
            const userIndex = this.users.findIndex((obj => obj.id === this.currentUser.id));
            if (this.currentUser.debet - amount < 0) {
                this.log.push(`User ${this.currentUser.id} wanted to receive ${amount}, but had only ${this.currentUser.debet}`)
                console.log(`You can't do it, you have only ${this.currentUser.debet}`)
                return
            }
            if (this.cash - amount < 0) {
                this.log.push(`User ${this.currentUser.id} wanted to receive ${amount}, but ATM had only ${this.cash}`)
                console.log(`Sorry, ATM has only ${this.cash}`)
                return
            }
            this.currentUser.debet -= amount
            this.users[userIndex].debet = this.currentUser.debet
            this.cash -= amount
            this.log.push(`User ${this.currentUser.id} withdrawed ${amount}`)
            console.log(`OK! Your debet is ${this.currentUser.debet} now`)
        }
        else console.log("Only for auth users")
    },
    // load cash - available for user only
    loadCash(amount) {
        if (this.isAuth && this.currentUser.type === "user") {
            const userIndex = ATM.users.findIndex((obj => obj.id === this.currentUser.id))
            this.currentUser.debet += amount
            this.users[userIndex].debet = this.currentUser.debet
            this.cash += amount
            this.log.push(`User ${this.currentUser.id} replenished his account with ${amount}`)
            console.log(`OK! Your debet is ${this.currentUser.debet} now`)
        }
        else console.log("Only for auth users")
    },
    // load cash to ATM - available for admin only - EXTENDED
    loadAtmCash(amount) {
        if (this.isAuth && this.currentUser.type === "admin") {
            this.cash += amount
            this.log.push(`Admin replenished ATM with ${amount}`)
            console.log(`OK! ATMs debet is ${this.cash} now`)
        }
        else console.log("Only for auth admin");
    },
    // get cash actions logs - available for admin only - EXTENDED
    getLogs() {
        if (this.isAuth && this.currentUser.type === "admin") {
            this.log.forEach( (elem) => { 
                console.log(elem)
            });
        }
        else console.log("Only for auth admin");
    },
    // log out
    logout() {
        if(this.isAuth) {
            this.isAuth = false
            this.currentUser = {}
            this.log.push(`User ${id} logged out`)
            return ("Logout")
        }
    }
};
