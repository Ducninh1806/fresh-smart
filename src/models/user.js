export default class User{

    id
    firstName
    lastName
    birthDay
    address
    avatar
    phoneNumber
    status
    username
    email
    password
    roles

    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password
    }

    // constructor(id, firstName, lastName, birthDay, address, avatar, phoneNumber, status, username, email, password, roles){
    //     this.id = id;
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    //     this.birthDay = birthDay;
    //     this.address = address;
    //     this.avatar = avatar;
    //     this.phoneNumber = phoneNumber;
    //     this.status = status;
    //     this.username = username;
    //     this.email = email;
    //     this.password = password;
    //     this.roles = roles;
    // }


}